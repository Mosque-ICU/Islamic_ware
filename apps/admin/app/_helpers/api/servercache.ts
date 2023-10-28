// import { workers } from "./workers";
import "server-only";

let cache = new Map();

export function getCache() {
  return cache;
}

const setCache = (key: string | number, value: any, options?: CacheOptions) => {
  //TODO: REPLACE WITH REDIS
  return;
  //delete from cache after 20 minutes
  setTimeout(() => {
    deleteFromServerCache(key, options);
  }, 1200000);

  const cacheValue = options?.stringify ? JSON.stringify(value) : value;
  cache.set(key, cacheValue);
  if (options?.persist && key) {
    localStorage.setItem(key?.toString(), options?.stringify ? cacheValue : JSON.stringify(cacheValue));
  }
};

export function addServerCacheValue(value: any, key?: string | number, options?: CacheOptions) {
  //@ts-ignore
  setCache(key, value, options);
}

export function bulkAddServerCacheValue(cacheArray: CacheArray) {
  for (const key of cacheArray) {
    setCache(key.key, key.value, key.options);
  }
}

export async function getServerCacheValue(key: string | number, options?: CacheOptions) {
  return null;
  let cacheValue: any = null;
  cacheValue = cache.get(key);

  if (!cacheValue && options?.persist && key) {
    cacheValue = localStorage.getItem(key?.toString());
    if (!cacheValue) return null;
    const parsedValue = await JSON.parse(cacheValue);
    setCache(key, !options?.stringify ? parsedValue : cacheValue, options);
    return parsedValue;
  }

  cacheValue = options?.stringify ? await JSON.parse(cacheValue) : cacheValue;
  return cacheValue;
}

export async function bulkGetServerCacheValue(CacheArray: CacheArray) {
  let cacheValues: any = {};
  for (let val of CacheArray) {
    cacheValues[val.key] = await getServerCacheValue(val.key, val.options);
  }

  return cacheValues;
}

export function deleteFromServerCache(key: string | number, options?: CacheOptions) {
  cache.delete(key);
  if (options?.persist && key) {
    localStorage.removeItem(key?.toString());
  }
}

export function bulkDeleteFromServerCache(cacheArray: CacheArray) {
  for (const key of cacheArray) {
    console.log("key: ", key);
    // deleteFromCache(key.key, key.options);
    cache.delete(key);
  }
}

export async function validatingCacheAdd(value: any, key: string | number, options?: CacheOptions) {
  let existingValue = await getServerCacheValue(key, options);
  if (options?.stringify) {
    if (existingValue !== JSON.stringify(value)) {
      addServerCacheValue(value, key, options);
      return false;
    }
  } else {
    if (!isEqual(existingValue, value)) {
      addServerCacheValue(value, key, options);
      return false;
    }
  }

  return existingValue;
}

export async function checkCacheExists(key: string | number, options?: CacheOptions) {
  let existingCache: any = cache.has(key);

  if (!existingCache && options?.persist && key) {
    existingCache = localStorage.getItem(key?.toString());
  }

  if (existingCache && options?.returnCache) {
    existingCache = await getServerCacheValue(key, options);
  }

  return existingCache;
}

export function clearCache() {
  cache.clear();
}

type valueOf<T> = T[keyof T];
export type CacheKeys = valueOf<typeof cache>;

type CacheOptions = {
  stringify?: boolean;
  persist?: boolean;
  returnCache?: boolean;
};

type CacheArray = {
  key: string;
  value: any;
  options?: CacheOptions;
}[];

export const isEqual = (first: any, second: any): boolean => {
  if (first === second) {
    return true;
  }
  if ((first === undefined || second === undefined || first === null || second === null) && (first || second)) {
    return false;
  }
  const firstType = first?.constructor.name;
  const secondType = second?.constructor.name;
  if (firstType !== secondType) {
    return false;
  }
  if (firstType === "Array") {
    if (first.length !== second.length) {
      return false;
    }
    let equal = true;
    for (let i = 0; i < first.length; i++) {
      if (!isEqual(first[i], second[i])) {
        equal = false;
        break;
      }
    }
    return equal;
  }
  if (firstType === "Object") {
    let equal = true;
    const fKeys = Object.keys(first);
    const sKeys = Object.keys(second);
    if (fKeys.length !== sKeys.length) {
      return false;
    }
    for (let i = 0; i < fKeys.length; i++) {
      if (first[fKeys[i]] && second[fKeys[i]]) {
        if (first[fKeys[i]] === second[fKeys[i]]) {
          continue; // eslint-disable-line
        }
        if (first[fKeys[i]] && (first[fKeys[i]].constructor.name === "Array" || first[fKeys[i]].constructor.name === "Object")) {
          equal = isEqual(first[fKeys[i]], second[fKeys[i]]);
          if (!equal) {
            break;
          }
        } else if (first[fKeys[i]] !== second[fKeys[i]]) {
          equal = false;
          break;
        }
      } else if ((first[fKeys[i]] && !second[fKeys[i]]) || (!first[fKeys[i]] && second[fKeys[i]])) {
        equal = false;
        break;
      }
    }
    return equal;
  }
  return first === second;
};
