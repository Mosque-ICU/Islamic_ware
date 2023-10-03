"use client";
import { checkCacheExists, getCacheValue, bulkAddCacheValue, addCacheValue, clearCache, bulkDeleteFromCache, deleteFromCache } from "./cache/cache";

type Params = {
  url?: string;
  route?: string;
  type?: string;
  shouldCache?: boolean;
  shouldPersist?: boolean;
  returnCache?: boolean;
  body?: any;
  credentials?: "same-origin" | "include" | "omit";
  contentType?: string;
  headers?: any;
  noCache?: boolean;
  cacheKey?: string;
};

export const onUnAuthorised = () => {
  localStorage.removeItem("currentUser");
  const routeSplit = window.location.pathname.split("/");
  const publicId = routeSplit[routeSplit.length - 1];
  localStorage.removeItem(publicId);
  window.location.href = "/login";
};

export const requestHandler = async ({
  url = window.location.origin + "/api/",
  route = "",
  type = "POST",
  body = null,
  shouldCache = false,
  shouldPersist = false,
  returnCache = false,
  credentials = "include",
  contentType = "application/json",
  headers = null,
  cacheKey = "",
  noCache = true,
}: Params) => {
  try {
    console.log(url + route);
    if (returnCache) {
      const cacheData = await checkCacheExists(cacheKey || route, {
        returnCache: true,
        persist: shouldPersist,
      });

      if (cacheData) return cacheData;
    }

    // const currentUser = await getCachData("currentUser", true);
    // console.log(currentUser);
    const response = await fetch(url + route, {
      method: type,
      credentials: credentials,
      cache: noCache ? "no-cache" : "default",
      headers: headers || {
        "Content-Type": contentType,
        accept: "*/*",
      },
      body: body && contentType === "application/json" ? (typeof body !== "string" ? JSON.stringify(body) : body) : body,
    });
    if (response.status === 401) {
      return onUnAuthorised();
    }
    const data = await response?.json();

    if (shouldCache && !data?.errors) {
      setTimeout(() => {
        addToCache(cacheKey || route, data);
      }, 0);
    }
    return data;
  } catch (err) {
    console.log(err);
    return { errors: true, message: "There was an error" };
  }
};

export const gqlF = (query: string, variables = {}) => {
  return {
    query: query.replace(/[\s,]+/g, " ").trim(),
    variables,
  };
};

export async function getCachData(route: string, persist = false) {
  return await getCacheValue(route, { persist: persist });
}

export const addToCache = (route: string, data: any, persist = false, cacheArray = []) => {
  if (cacheArray.length > 0) {
    bulkAddCacheValue(cacheArray);
  } else {
    addCacheValue(data, route, { persist: persist });
  }
};

export const onClearCache = () => {
  clearCache();
};

export const removeFromCache = (route: string, cacheArray: any[] = [], persist = false) => {
  if (cacheArray.length > 0) {
    bulkDeleteFromCache(cacheArray);
  } else {
    deleteFromCache(route, { persist: persist });
  }
};
