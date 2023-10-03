var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/@tamagui/use-force-update/dist/cjs/index.js
var require_cjs = __commonJS({
  "../../node_modules/@tamagui/use-force-update/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      isServerSide: () => isServerSide2,
      useForceUpdate: () => useForceUpdate2
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_react44 = require("react");
    var isServerSide2 = typeof window > "u";
    var idFn3 = /* @__PURE__ */ __name(() => {
    }, "idFn");
    function useForceUpdate2() {
      return isServerSide2 ? idFn3 : (0, import_react44.useReducer)((x) => Math.random(), 0)[1];
    }
    __name(useForceUpdate2, "useForceUpdate");
  }
});

// ../../node_modules/@tamagui/animate-presence/dist/cjs/LayoutGroupContext.js
var require_LayoutGroupContext = __commonJS({
  "../../node_modules/@tamagui/animate-presence/dist/cjs/LayoutGroupContext.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var LayoutGroupContext_exports = {};
    __export2(LayoutGroupContext_exports, {
      LayoutGroupContext: () => LayoutGroupContext2
    });
    module2.exports = __toCommonJS2(LayoutGroupContext_exports);
    var import_react44 = require("react");
    var LayoutGroupContext2 = (0, import_react44.createContext)({});
  }
});

// ../../node_modules/@tamagui/use-presence/dist/cjs/PresenceContext.js
var require_PresenceContext = __commonJS({
  "../../node_modules/@tamagui/use-presence/dist/cjs/PresenceContext.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var PresenceContext_exports = {};
    __export2(PresenceContext_exports, {
      PresenceContext: () => PresenceContext2
    });
    module2.exports = __toCommonJS2(PresenceContext_exports);
    var import_react44 = require("react");
    var PresenceContext2 = (0, import_react44.createContext)(null);
  }
});

// ../../node_modules/@tamagui/use-presence/dist/cjs/usePresence.js
var require_usePresence = __commonJS({
  "../../node_modules/@tamagui/use-presence/dist/cjs/usePresence.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var usePresence_exports = {};
    __export2(usePresence_exports, {
      isPresent: () => isPresent2,
      useIsPresent: () => useIsPresent2,
      usePresence: () => usePresence2
    });
    module2.exports = __toCommonJS2(usePresence_exports);
    var import_react44 = require("react");
    var import_PresenceContext2 = require_PresenceContext();
    function usePresence2() {
      const context = (0, import_react44.useContext)(import_PresenceContext2.PresenceContext);
      if (!context)
        return [true, null, context];
      const { isPresent: isPresent22, onExitComplete, register } = context, id = (0, import_react44.useId)() || "";
      return (0, import_react44.useEffect)(() => register(id), [id, register]), !isPresent22 && onExitComplete ? [false, () => onExitComplete == null ? void 0 : onExitComplete(id), context] : [true, void 0, context];
    }
    __name(usePresence2, "usePresence");
    function useIsPresent2() {
      return isPresent2((0, import_react44.useContext)(import_PresenceContext2.PresenceContext));
    }
    __name(useIsPresent2, "useIsPresent");
    function isPresent2(context) {
      return context === null ? true : context.isPresent;
    }
    __name(isPresent2, "isPresent");
  }
});

// ../../node_modules/@tamagui/use-presence/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "../../node_modules/@tamagui/use-presence/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_PresenceContext(), module2.exports);
    __reExport2(src_exports, require_usePresence(), module2.exports);
  }
});

// ../../node_modules/@tamagui/animate-presence/dist/cjs/PresenceChild.js
var require_PresenceChild = __commonJS({
  "../../node_modules/@tamagui/animate-presence/dist/cjs/PresenceChild.js"(exports, module2) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var PresenceChild_exports = {};
    __export2(PresenceChild_exports, {
      PresenceChild: () => PresenceChild2
    });
    module2.exports = __toCommonJS2(PresenceChild_exports);
    var import_use_presence2 = require_cjs2();
    var import_web16 = require("@tamagui/core");
    var React39 = __toESM2(require("react"));
    var import_react44 = require("react");
    var import_jsx_runtime51 = require("react/jsx-runtime");
    var PresenceChild2 = /* @__PURE__ */ __name(({
      children,
      initial,
      isPresent: isPresent2,
      onExitComplete,
      exitVariant,
      enterVariant,
      enterExitVariant,
      presenceAffectsLayout
    }) => {
      const presenceChildren = React39.useMemo(newChildrenMap2, []), id = (0, import_react44.useId)() || "", context = React39.useMemo(
        () => ({
          id,
          initial,
          isPresent: isPresent2,
          exitVariant,
          enterVariant,
          enterExitVariant,
          onExitComplete: (id2) => {
            presenceChildren.set(id2, true);
            for (const isComplete of presenceChildren.values())
              if (!isComplete)
                return;
            onExitComplete == null || onExitComplete();
          },
          register: (id2) => (presenceChildren.set(id2, false), () => presenceChildren.delete(id2))
        }),
        /**
         * If the presence of a child affects the layout of the components around it,
         * we want to make a new context value to ensure they get re-rendered
         * so they can detect that layout change.
         */
        // eslint-disable-next-line react-hooks/exhaustive-deps
        presenceAffectsLayout ? void 0 : [isPresent2, exitVariant, enterVariant]
      );
      return React39.useMemo(() => {
        presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
      }, [isPresent2]), (0, import_web16.useIsomorphicLayoutEffect)(() => {
        !(isPresent2 || presenceChildren.size) && (onExitComplete == null || onExitComplete());
      }, [isPresent2]), /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_use_presence2.PresenceContext.Provider, { value: context, children });
    }, "PresenceChild");
    function newChildrenMap2() {
      return /* @__PURE__ */ new Map();
    }
    __name(newChildrenMap2, "newChildrenMap");
  }
});

// ../../node_modules/@tamagui/animate-presence/dist/cjs/AnimatePresence.js
var require_AnimatePresence = __commonJS({
  "../../node_modules/@tamagui/animate-presence/dist/cjs/AnimatePresence.js"(exports, module2) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var AnimatePresence_exports = {};
    __export2(AnimatePresence_exports, {
      AnimatePresence: () => AnimatePresence2
    });
    module2.exports = __toCommonJS2(AnimatePresence_exports);
    var import_use_force_update2 = require_cjs();
    var import_web16 = require("@tamagui/core");
    var import_react44 = __toESM2(require("react"));
    var import_LayoutGroupContext2 = require_LayoutGroupContext();
    var import_PresenceChild2 = require_PresenceChild();
    var import_jsx_runtime51 = require("react/jsx-runtime");
    var getChildKey2 = /* @__PURE__ */ __name((child) => child.key || "", "getChildKey");
    var isDev2 = process.env.NODE_ENV !== "production";
    function updateChildLookup2(children, allChildren) {
      const seenChildren = isDev2 ? /* @__PURE__ */ new Set() : null;
      children.forEach((child) => {
        const key = getChildKey2(child);
        isDev2 && seenChildren && seenChildren.has(key) && (console.warn(
          `Children of AnimatePresence require unique keys. "${key}" is a duplicate.`
        ), seenChildren.add(key)), allChildren.set(key, child);
      });
    }
    __name(updateChildLookup2, "updateChildLookup");
    function onlyElements2(children) {
      const filtered = [];
      return import_react44.Children.forEach(children, (child, index3) => {
        (0, import_react44.isValidElement)(child) && (!child.key && import_react44.Children.count(children) > 1 ? (process.env.NODE_ENV === "development" && console.warn("No key given to AnimatePresence child, assigning index as key"), filtered.push(
          import_react44.default.cloneElement(child, {
            key: index3
          })
        )) : filtered.push(child));
      }), filtered;
    }
    __name(onlyElements2, "onlyElements");
    var AnimatePresence2 = /* @__PURE__ */ __name(({
      children,
      enterVariant,
      exitVariant,
      enterExitVariant,
      initial = true,
      onExitComplete,
      exitBeforeEnter,
      presenceAffectsLayout = true
    }) => {
      let forceRender = (0, import_use_force_update2.useForceUpdate)();
      const isClientMounted = (0, import_web16.useDidFinishSSR)(), forceRenderLayoutGroup = (0, import_react44.useContext)(import_LayoutGroupContext2.LayoutGroupContext).forceRender;
      forceRenderLayoutGroup && (forceRender = forceRenderLayoutGroup);
      const isMounted = (0, import_react44.useRef)(false), filteredChildren = onlyElements2(children);
      let childrenToRender = filteredChildren;
      const exiting = /* @__PURE__ */ new Set(), presentChildren = (0, import_react44.useRef)(childrenToRender), allChildren = (0, import_react44.useRef)(/* @__PURE__ */ new Map()).current, isInitialRender = (0, import_react44.useRef)(true);
      (0, import_react44.useEffect)(() => (isMounted.current = true, () => {
        isMounted.current = false, isInitialRender.current = true, allChildren.clear(), exiting.clear();
      }), []), (0, import_web16.useIsomorphicLayoutEffect)(() => {
        isInitialRender.current = false, updateChildLookup2(filteredChildren, allChildren), presentChildren.current = childrenToRender;
      });
      const hasWarned = process.env.NODE_ENV === "development" ? (0, import_react44.useRef)(false) : null;
      if (isInitialRender.current)
        return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_jsx_runtime51.Fragment, { children: childrenToRender.map((child) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
          import_PresenceChild2.PresenceChild,
          {
            isPresent: !!(isClientMounted || isMounted.current),
            enterExitVariant,
            exitVariant,
            enterVariant,
            initial: initial ? void 0 : false,
            presenceAffectsLayout,
            children: child
          },
          getChildKey2(child)
        )) });
      childrenToRender = [...childrenToRender];
      const presentKeys = presentChildren.current.map(getChildKey2), targetKeys = filteredChildren.map(getChildKey2), numPresent = presentKeys.length;
      for (let i = 0; i < numPresent; i++) {
        const key = presentKeys[i];
        targetKeys.indexOf(key) === -1 && exiting.add(key);
      }
      return exitBeforeEnter && exiting.size && (childrenToRender = []), exiting.forEach((key) => {
        if (targetKeys.indexOf(key) !== -1)
          return;
        const child = allChildren.get(key);
        if (!child)
          return;
        const insertionIndex = presentKeys.indexOf(key);
        childrenToRender.splice(
          insertionIndex,
          0,
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
            import_PresenceChild2.PresenceChild,
            {
              isPresent: false,
              onExitComplete: () => {
                allChildren.delete(key), exiting.delete(key);
                const removeIndex = presentChildren.current.findIndex(
                  (presentChild) => presentChild.key === key
                );
                if (presentChildren.current.splice(removeIndex, 1), !exiting.size) {
                  if (presentChildren.current = filteredChildren, isMounted.current === false)
                    return;
                  forceRender(), onExitComplete == null || onExitComplete();
                }
              },
              exitVariant,
              enterVariant,
              enterExitVariant,
              presenceAffectsLayout,
              children: child
            },
            getChildKey2(child)
          )
        );
      }), childrenToRender = childrenToRender.map((child) => {
        const key = child.key;
        return exiting.has(key) ? child : /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
          import_PresenceChild2.PresenceChild,
          {
            isPresent: true,
            exitVariant,
            enterVariant,
            enterExitVariant,
            presenceAffectsLayout,
            children: child
          },
          getChildKey2(child)
        );
      }), /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_jsx_runtime51.Fragment, { children: exiting.size ? childrenToRender : childrenToRender.map((child) => (0, import_react44.cloneElement)(child)) });
    }, "AnimatePresence");
    AnimatePresence2.displayName = "AnimatePresence";
  }
});

// ../../node_modules/@tamagui/animate-presence/dist/cjs/types.js
var require_types = __commonJS({
  "../../node_modules/@tamagui/animate-presence/dist/cjs/types.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var types_exports = {};
    module2.exports = __toCommonJS2(types_exports);
  }
});

// ../../node_modules/@tamagui/animate-presence/dist/cjs/index.js
var require_cjs3 = __commonJS({
  "../../node_modules/@tamagui/animate-presence/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_AnimatePresence(), module2.exports);
    __reExport2(src_exports, require_cjs2(), module2.exports);
    __reExport2(src_exports, require_types(), module2.exports);
    __reExport2(src_exports, require_PresenceChild(), module2.exports);
  }
});

// ../../node_modules/@tamagui/create-context/dist/cjs/create-context.js
var require_create_context = __commonJS({
  "../../node_modules/@tamagui/create-context/dist/cjs/create-context.js"(exports, module2) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var create_context_exports = {};
    __export2(create_context_exports, {
      createContext: () => createContext14,
      createContextScope: () => createContextScope2
    });
    module2.exports = __toCommonJS2(create_context_exports);
    var React39 = __toESM2(require("react"));
    var import_jsx_runtime51 = require("react/jsx-runtime");
    function createContext14(rootComponentName, defaultContext) {
      const Context = React39.createContext(defaultContext);
      function Provider(props) {
        const { children, ...context } = props, value = React39.useMemo(() => context, Object.values(context));
        return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Context.Provider, { value, children });
      }
      __name(Provider, "Provider");
      function useContext17(consumerName) {
        const context = React39.useContext(Context);
        if (context)
          return context;
        if (defaultContext !== void 0)
          return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
      }
      __name(useContext17, "useContext");
      return Provider.displayName = `${rootComponentName}Provider`, [Provider, useContext17];
    }
    __name(createContext14, "createContext");
    function createContextScope2(scopeName, createContextScopeDeps = []) {
      let defaultContexts = [];
      function createContext22(rootComponentName, defaultContext) {
        const BaseContext = React39.createContext(defaultContext), index3 = defaultContexts.length;
        defaultContexts = [...defaultContexts, defaultContext];
        function Provider(props) {
          const { scope, children, ...context } = props, Context = (scope == null ? void 0 : scope[scopeName][index3]) || BaseContext, value = React39.useMemo(
            () => context,
            Object.values(context)
          );
          return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Context.Provider, { value, children });
        }
        __name(Provider, "Provider");
        function useContext17(consumerName, scope, options) {
          const Context = (scope == null ? void 0 : scope[scopeName][index3]) || BaseContext, context = React39.useContext(Context);
          if (context)
            return context;
          if (defaultContext !== void 0)
            return defaultContext;
          const missingContextMessage = `\`${consumerName}\` must be used within \`${rootComponentName}\``;
          if (options != null && options.fallback)
            return (options == null ? void 0 : options.warn) !== false && console.warn(missingContextMessage), options.fallback;
          throw new Error(missingContextMessage);
        }
        __name(useContext17, "useContext");
        return Provider.displayName = `${rootComponentName}Provider`, [Provider, useContext17];
      }
      __name(createContext22, "createContext2");
      const createScope = /* @__PURE__ */ __name(() => {
        const scopeContexts = defaultContexts.map((defaultContext) => React39.createContext(defaultContext));
        return function(scope) {
          const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
          return React39.useMemo(
            () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
            [scope, contexts]
          );
        };
      }, "createScope");
      return createScope.scopeName = scopeName, [
        createContext22,
        composeContextScopes2(createScope, ...createContextScopeDeps)
      ];
    }
    __name(createContextScope2, "createContextScope");
    function composeContextScopes2(...scopes) {
      const baseScope = scopes[0];
      if (scopes.length === 1)
        return baseScope;
      const createScope = /* @__PURE__ */ __name(() => {
        const scopeHooks = scopes.map((createScope2) => ({
          useScope: createScope2(),
          scopeName: createScope2.scopeName
        }));
        return function(overrideScopes) {
          const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
            const currentScope = useScope(overrideScopes)[`__scope${scopeName}`];
            return { ...nextScopes2, ...currentScope };
          }, {});
          return React39.useMemo(
            () => ({ [`__scope${baseScope.scopeName}`]: nextScopes }),
            [nextScopes]
          );
        };
      }, "createScope");
      return createScope.scopeName = baseScope.scopeName, createScope;
    }
    __name(composeContextScopes2, "composeContextScopes");
  }
});

// ../../node_modules/@tamagui/create-context/dist/cjs/index.js
var require_cjs4 = __commonJS({
  "../../node_modules/@tamagui/create-context/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_create_context(), module2.exports);
  }
});

// ../../node_modules/@tamagui/use-event/dist/cjs/useGet.js
var require_useGet = __commonJS({
  "../../node_modules/@tamagui/use-event/dist/cjs/useGet.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useGet_exports = {};
    __export2(useGet_exports, {
      useGet: () => useGet6
    });
    module2.exports = __toCommonJS2(useGet_exports);
    var import_react44 = require("react");
    var isWeb30 = true;
    var isClient7 = typeof window < "u";
    var useIsomorphicLayoutEffect15 = !isWeb30 || isClient7 ? import_react44.useLayoutEffect : import_react44.useEffect;
    function useGet6(currentValue, initialValue2, forwardToFunction) {
      const curRef = (0, import_react44.useRef)(initialValue2 ?? currentValue);
      return useIsomorphicLayoutEffect15(() => {
        curRef.current = currentValue;
      }), (0, import_react44.useCallback)(
        forwardToFunction ? (...args) => {
          var _a;
          return (_a = curRef.current) == null ? void 0 : _a.apply(null, args);
        } : () => curRef.current,
        []
      );
    }
    __name(useGet6, "useGet");
  }
});

// ../../node_modules/@tamagui/use-event/dist/cjs/useEvent.js
var require_useEvent = __commonJS({
  "../../node_modules/@tamagui/use-event/dist/cjs/useEvent.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useEvent_exports = {};
    __export2(useEvent_exports, {
      useEvent: () => useEvent10
    });
    module2.exports = __toCommonJS2(useEvent_exports);
    var import_useGet2 = require_useGet();
    function useEvent10(callback) {
      return (0, import_useGet2.useGet)(callback, defaultValue2, true);
    }
    __name(useEvent10, "useEvent");
    var defaultValue2 = /* @__PURE__ */ __name(() => {
      throw new Error("Cannot call an event handler while rendering.");
    }, "defaultValue");
  }
});

// ../../node_modules/@tamagui/use-event/dist/cjs/index.js
var require_cjs5 = __commonJS({
  "../../node_modules/@tamagui/use-event/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_useEvent(), module2.exports);
    __reExport2(src_exports, require_useGet(), module2.exports);
  }
});

// ../../node_modules/@tamagui/use-controllable-state/dist/cjs/useControllableState.js
var require_useControllableState = __commonJS({
  "../../node_modules/@tamagui/use-controllable-state/dist/cjs/useControllableState.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useControllableState_exports = {};
    __export2(useControllableState_exports, {
      useControllableState: () => useControllableState2
    });
    module2.exports = __toCommonJS2(useControllableState_exports);
    var import_use_event3 = require_cjs5();
    var import_react44 = require("react");
    var emptyCallbackFn2 = /* @__PURE__ */ __name((_) => _(), "emptyCallbackFn");
    function useControllableState2({
      prop,
      defaultProp,
      onChange,
      strategy = "prop-wins",
      preventUpdate,
      transition
    }) {
      const [state, setState] = (0, import_react44.useState)(prop ?? defaultProp), previous = (0, import_react44.useRef)(state), propWins = strategy === "prop-wins" && prop !== void 0, value = propWins ? prop : state, onChangeCb = (0, import_use_event3.useEvent)(onChange || idFn3), transitionFn = transition ? import_react44.startTransition : emptyCallbackFn2;
      (0, import_react44.useEffect)(() => {
        prop !== void 0 && (previous.current = prop, transitionFn(() => {
          setState(prop);
        }));
      }, [prop]), (0, import_react44.useEffect)(() => {
        propWins || state !== previous.current && (previous.current = state, onChangeCb(state));
      }, [onChangeCb, state, propWins]);
      const setter = (0, import_use_event3.useEvent)((next) => {
        if (!preventUpdate)
          if (propWins) {
            const nextValue = typeof next == "function" ? next(previous.current) : next;
            onChangeCb(nextValue);
          } else
            transitionFn(() => {
              setState(next);
            });
      });
      return [value, setter];
    }
    __name(useControllableState2, "useControllableState");
    var idFn3 = /* @__PURE__ */ __name(() => {
    }, "idFn");
  }
});

// ../../node_modules/@tamagui/use-controllable-state/dist/cjs/index.js
var require_cjs6 = __commonJS({
  "../../node_modules/@tamagui/use-controllable-state/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_useControllableState(), module2.exports);
  }
});

// ../../node_modules/@tamagui/collapsible/dist/cjs/Collapsible.js
var require_Collapsible = __commonJS({
  "../../node_modules/@tamagui/collapsible/dist/cjs/Collapsible.js"(exports, module2) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Collapsible_exports = {};
    __export2(Collapsible_exports, {
      Collapsible: () => Collapsible,
      CollapsibleContent: () => CollapsibleContent,
      CollapsibleContentFrame: () => CollapsibleContentFrame,
      CollapsibleTrigger: () => CollapsibleTrigger,
      CollapsibleTriggerFrame: () => CollapsibleTriggerFrame,
      createCollapsibleScope: () => createCollapsibleScope
    });
    module2.exports = __toCommonJS2(Collapsible_exports);
    var import_animate_presence5 = require_cjs3();
    var import_create_context16 = require_cjs4();
    var import_use_controllable_state15 = require_cjs6();
    var import_web16 = require("@tamagui/core");
    var React39 = __toESM2(require("react"));
    var import_jsx_runtime51 = require("react/jsx-runtime");
    var COLLAPSIBLE_NAME = "Collapsible";
    var [createCollapsibleContext, createCollapsibleScope] = (0, import_create_context16.createContextScope)(COLLAPSIBLE_NAME);
    var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
    var _Collapsible = React39.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeCollapsible,
          open: openProp,
          defaultOpen,
          disabled,
          onOpenChange,
          ...collapsibleProps
        } = props, [open = false, setOpen] = (0, import_use_controllable_state15.useControllableState)({
          prop: openProp,
          defaultProp: defaultOpen,
          onChange: onOpenChange
        });
        return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
          CollapsibleProvider,
          {
            scope: __scopeCollapsible,
            disabled,
            contentId: React39.useId(),
            open,
            onOpenToggle: React39.useCallback(
              () => setOpen((prevOpen) => !prevOpen),
              [setOpen]
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
              import_web16.Stack,
              {
                "data-state": getState5(open),
                "data-disabled": disabled ? "" : void 0,
                ...collapsibleProps,
                ref: forwardedRef
              }
            )
          }
        );
      }
    );
    _Collapsible.displayName = COLLAPSIBLE_NAME;
    var TRIGGER_NAME6 = "CollapsibleTrigger";
    var CollapsibleTriggerFrame = (0, import_web16.styled)(import_web16.Stack, {
      name: TRIGGER_NAME6,
      tag: "button"
    });
    var CollapsibleTrigger = CollapsibleTriggerFrame.styleable(
      (props, forwardedRef) => {
        const { __scopeCollapsible, children, ...triggerProps } = props, context = useCollapsibleContext(TRIGGER_NAME6, __scopeCollapsible);
        return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
          CollapsibleTriggerFrame,
          {
            "aria-controls": context.contentId,
            "aria-expanded": context.open || false,
            "data-state": getState5(context.open),
            "data-disabled": context.disabled ? "" : void 0,
            disabled: context.disabled,
            ...triggerProps,
            ref: forwardedRef,
            onPress: (0, import_web16.composeEventHandlers)(props.onPress, context.onOpenToggle),
            children: typeof children == "function" ? children({ open: context.open }) : children
          }
        );
      }
    );
    CollapsibleTrigger.displayName = TRIGGER_NAME6;
    var CONTENT_NAME5 = "CollapsibleContent";
    var CollapsibleContentFrame = (0, import_web16.styled)(import_web16.Stack, {
      name: CONTENT_NAME5
    });
    var CollapsibleContent = CollapsibleContentFrame.styleable((props, forwardedRef) => {
      const { forceMount, children, __scopeCollapsible, ...contentProps } = props, context = useCollapsibleContext(CONTENT_NAME5, __scopeCollapsible);
      return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_animate_presence5.AnimatePresence, { ...contentProps, children: forceMount || context.open ? /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(CollapsibleContentFrame, { ref: forwardedRef, ...contentProps, children }) : null });
    });
    CollapsibleContent.displayName = CONTENT_NAME5;
    function getState5(open) {
      return open ? "open" : "closed";
    }
    __name(getState5, "getState");
    var Collapsible = (0, import_web16.withStaticProperties)(_Collapsible, {
      Trigger: CollapsibleTrigger,
      Content: CollapsibleContent
    });
  }
});

// ../../node_modules/@tamagui/collapsible/dist/cjs/index.js
var require_cjs7 = __commonJS({
  "../../node_modules/@tamagui/collapsible/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Collapsible(), module2.exports);
  }
});

// ../../node_modules/@tamagui/compose-refs/dist/cjs/compose-refs.js
var require_compose_refs = __commonJS({
  "../../node_modules/@tamagui/compose-refs/dist/cjs/compose-refs.js"(exports, module2) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var compose_refs_exports = {};
    __export2(compose_refs_exports, {
      composeRefs: () => composeRefs5,
      useComposedRefs: () => useComposedRefs4
    });
    module2.exports = __toCommonJS2(compose_refs_exports);
    var React39 = __toESM2(require("react"));
    function setRef2(ref, value) {
      typeof ref == "function" ? ref(value) : ref && (ref.current = value);
    }
    __name(setRef2, "setRef");
    function composeRefs5(...refs) {
      return (node) => refs.forEach((ref) => setRef2(ref, node));
    }
    __name(composeRefs5, "composeRefs");
    function useComposedRefs4(...refs) {
      return React39.useCallback(composeRefs5(...refs), refs);
    }
    __name(useComposedRefs4, "useComposedRefs");
  }
});

// ../../node_modules/@tamagui/compose-refs/dist/cjs/index.js
var require_cjs8 = __commonJS({
  "../../node_modules/@tamagui/compose-refs/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_compose_refs(), module2.exports);
  }
});

// ../../node_modules/@tamagui/collection/dist/cjs/Collection.js
var require_Collection = __commonJS({
  "../../node_modules/@tamagui/collection/dist/cjs/Collection.js"(exports, module2) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Collection_exports = {};
    __export2(Collection_exports, {
      createCollection: () => createCollection2
    });
    module2.exports = __toCommonJS2(Collection_exports);
    var import_compose_refs17 = require_cjs8();
    var import_core55 = require("@tamagui/core");
    var import_create_context16 = require_cjs4();
    var import_react44 = __toESM2(require("react"));
    var import_jsx_runtime51 = require("react/jsx-runtime");
    function createCollection2(name) {
      const PROVIDER_NAME = name + "CollectionProvider", [createCollectionContext, createCollectionScope2] = (0, import_create_context16.createContextScope)(PROVIDER_NAME), [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionRef: { current: null },
        itemMap: /* @__PURE__ */ new Map()
      }), CollectionProvider = /* @__PURE__ */ __name((props) => {
        const { scope, children } = props, ref = import_react44.default.useRef(null), itemMap = import_react44.default.useRef(/* @__PURE__ */ new Map()).current;
        return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(CollectionProviderImpl, { scope, itemMap, collectionRef: ref, children });
      }, "CollectionProvider");
      CollectionProvider.displayName = PROVIDER_NAME;
      const COLLECTION_SLOT_NAME = name + "CollectionSlot", CollectionSlot = import_react44.default.forwardRef(
        (props, forwardedRef) => {
          const { scope, children } = props, context = useCollectionContext(COLLECTION_SLOT_NAME, scope), composedRefs = (0, import_compose_refs17.useComposedRefs)(forwardedRef, context.collectionRef);
          return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_core55.Slot, { ref: composedRefs, children });
        }
      );
      CollectionSlot.displayName = COLLECTION_SLOT_NAME;
      const ITEM_SLOT_NAME = name + "CollectionItemSlot", ITEM_DATA_ATTR = "data-collection-item", CollectionItemSlot = import_react44.default.forwardRef(
        (props, forwardedRef) => {
          const { scope, children, ...itemData } = props, ref = import_react44.default.useRef(null), composedRefs = (0, import_compose_refs17.useComposedRefs)(forwardedRef, ref), context = useCollectionContext(ITEM_SLOT_NAME, scope);
          return import_react44.default.useEffect(() => (context.itemMap.set(ref, { ref, ...itemData }), () => void context.itemMap.delete(ref))), /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_core55.Slot, { [ITEM_DATA_ATTR]: "", ref: composedRefs, children });
        }
      );
      CollectionItemSlot.displayName = ITEM_SLOT_NAME;
      function useCollection2(scope) {
        const context = useCollectionContext(name + "CollectionConsumer", scope);
        return import_react44.default.useCallback(() => {
          if (!import_core55.isWeb)
            return [];
          const collectionNode = context.collectionRef.current;
          if (!collectionNode)
            return [];
          const orderedNodes = Array.from(
            collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`)
          );
          return Array.from(context.itemMap.values()).sort(
            (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
          );
        }, [context.collectionRef, context.itemMap]);
      }
      __name(useCollection2, "useCollection");
      return [
        { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
        useCollection2,
        createCollectionScope2
      ];
    }
    __name(createCollection2, "createCollection");
  }
});

// ../../node_modules/@tamagui/collection/dist/cjs/index.js
var require_cjs9 = __commonJS({
  "../../node_modules/@tamagui/collection/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Collection(), module2.exports);
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/getElevation.js
var require_getElevation = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/getElevation.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var getElevation_exports = {};
    __export2(getElevation_exports, {
      getElevation: () => getElevation2,
      getSizedElevation: () => getSizedElevation2
    });
    module2.exports = __toCommonJS2(getElevation_exports);
    var import_core55 = require("@tamagui/core");
    var getElevation2 = /* @__PURE__ */ __name((size2, extras) => {
      if (!size2)
        return;
      const { tokens } = extras, token = tokens.size[size2], sizeNum = (0, import_core55.isVariable)(token) ? +token.val : size2;
      return getSizedElevation2(sizeNum, extras);
    }, "getElevation");
    var getSizedElevation2 = /* @__PURE__ */ __name((val, { theme, tokens }) => {
      let num = 0;
      if (val === true) {
        const val2 = (0, import_core55.getVariableValue)(tokens.size.true);
        typeof val2 == "number" ? num = val2 : num = 10;
      } else
        num = +val;
      const [height, shadowRadius] = [Math.round(num / 4 + 1), Math.round(num / 2 + 2)];
      return {
        shadowColor: theme.shadowColor,
        shadowRadius,
        shadowOffset: { height, width: 0 },
        ...import_core55.isAndroid ? {
          elevationAndroid: 2 * height
        } : {}
      };
    }, "getSizedElevation");
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/Stacks.js
var require_Stacks = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/Stacks.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Stacks_exports = {};
    __export2(Stacks_exports, {
      XStack: () => XStack2,
      YStack: () => YStack2,
      ZStack: () => ZStack2,
      fullscreenStyle: () => fullscreenStyle2
    });
    module2.exports = __toCommonJS2(Stacks_exports);
    var import_core55 = require("@tamagui/core");
    var import_getElevation3 = require_getElevation();
    var fullscreenStyle2 = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };
    var variants3 = {
      fullscreen: {
        true: fullscreenStyle2
      },
      elevation: {
        "...size": import_getElevation3.getElevation
      }
    };
    var YStack2 = (0, import_core55.styled)(import_core55.Stack, {
      flexDirection: "column",
      variants: variants3
    });
    var XStack2 = (0, import_core55.styled)(import_core55.Stack, {
      flexDirection: "row",
      variants: variants3
    });
    var ZStack2 = (0, import_core55.styled)(
      YStack2,
      {
        position: "relative"
      },
      {
        neverFlatten: true,
        isZStack: true
      }
    );
  }
});

// ../../node_modules/@tamagui/get-token/dist/cjs/index.js
var require_cjs10 = __commonJS({
  "../../node_modules/@tamagui/get-token/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      getRadius: () => getRadius,
      getSize: () => getSize10,
      getSpace: () => getSpace4,
      getTokenRelative: () => getTokenRelative,
      stepTokenUpOrDown: () => stepTokenUpOrDown
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_web16 = require("@tamagui/core");
    var import_web22 = require("@tamagui/core");
    var defaultOptions = {
      shift: 0,
      bounds: [0]
    };
    var getSize10 = /* @__PURE__ */ __name((size2, options) => getTokenRelative("size", size2, options), "getSize");
    var getSpace4 = /* @__PURE__ */ __name((space, options) => getTokenRelative("space", space, options), "getSpace");
    var getRadius = /* @__PURE__ */ __name((radius, options) => getTokenRelative("radius", radius, options), "getRadius");
    var cacheVariables = {};
    var cacheWholeVariables = {};
    var cacheKeys = {};
    var cacheWholeKeys = {};
    var stepTokenUpOrDown = /* @__PURE__ */ __name((type, current, options = defaultOptions) => {
      var _a, _b;
      const tokens = (0, import_web22.getTokens)({ prefixed: true })[type];
      if (!(type in cacheVariables)) {
        cacheKeys[type] = [], cacheVariables[type] = [], cacheWholeKeys[type] = [], cacheWholeVariables[type] = [];
        const sorted = Object.keys(tokens).map((k) => tokens[k]).sort((a, b) => a.val - b.val);
        for (const token of sorted)
          cacheKeys[type].push(token.key), cacheVariables[type].push(token);
        const sortedExcludingHalfSteps = sorted.filter((x) => !x.key.endsWith(".5"));
        for (const token of sortedExcludingHalfSteps)
          cacheWholeKeys[type].push(token.key), cacheWholeVariables[type].push(token);
      }
      const isString = typeof current == "string", tokensOrdered = (options.excludeHalfSteps ? isString ? cacheWholeKeys : cacheWholeVariables : isString ? cacheKeys : cacheVariables)[type], min2 = ((_a = options.bounds) == null ? void 0 : _a[0]) ?? 0, max2 = ((_b = options.bounds) == null ? void 0 : _b[1]) ?? tokensOrdered.length - 1, currentIndex = tokensOrdered.indexOf(current);
      let shift2 = options.shift || 0;
      shift2 && (current === "$true" || (0, import_web16.isVariable)(current) && current.name === "true") && (shift2 += shift2 > 0 ? 1 : -1);
      const index3 = Math.min(max2, Math.max(min2, currentIndex + shift2)), found = tokensOrdered[index3];
      return (typeof found == "string" ? tokens[found] : found) || tokens.$true;
    }, "stepTokenUpOrDown");
    var getTokenRelative = stepTokenUpOrDown;
  }
});

// ../../node_modules/@tamagui/get-button-sized/dist/cjs/index.js
var require_cjs11 = __commonJS({
  "../../node_modules/@tamagui/get-button-sized/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      getButtonSized: () => getButtonSized6
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_get_token13 = require_cjs10();
    var getButtonSized6 = /* @__PURE__ */ __name((val, { tokens, props }) => {
      if (!val)
        return;
      if (typeof val == "number")
        return {
          paddingHorizontal: val * 0.25,
          height: val,
          borderRadius: props.circular ? 1e5 : val * 0.2
        };
      const xSize = (0, import_get_token13.getSpace)(val), radiusToken = tokens.radius[val] ?? tokens.radius.$true;
      return {
        paddingHorizontal: xSize,
        height: val,
        borderRadius: props.circular ? 1e5 : radiusToken
      };
    }, "getButtonSized");
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/variants.js
var require_variants = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/variants.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var variants_exports = {};
    __export2(variants_exports, {
      bordered: () => bordered2,
      circular: () => circular2,
      elevate: () => elevate2,
      focusTheme: () => focusTheme2,
      hoverTheme: () => hoverTheme2,
      padded: () => padded2,
      pressTheme: () => pressTheme2,
      radiused: () => radiused2
    });
    module2.exports = __toCommonJS2(variants_exports);
    var import_getElevation3 = require_getElevation();
    var elevate2 = {
      true: (_, extras) => (0, import_getElevation3.getElevation)(extras.props.size, extras)
    };
    var bordered2 = /* @__PURE__ */ __name((val, { props }) => ({
      // TODO size it with size in '...size'
      borderWidth: typeof val == "number" ? val : 1,
      borderColor: "$borderColor",
      ...props.hoverTheme && {
        hoverStyle: {
          borderColor: "$borderColorHover"
        }
      },
      ...props.pressTheme && {
        pressStyle: {
          borderColor: "$borderColorPress"
        }
      },
      ...props.focusTheme && {
        focusStyle: {
          borderColor: "$borderColorFocus"
        }
      }
    }), "bordered");
    var padded2 = {
      true: (_, extras) => {
        const { tokens, props } = extras;
        return {
          padding: tokens.space[props.size] || tokens.space.$true
        };
      }
    };
    var radiused2 = {
      true: (_, extras) => {
        const { tokens, props } = extras;
        return {
          borderRadius: tokens.radius[props.size] || tokens.radius.$true
        };
      }
    };
    var circularStyle2 = {
      borderRadius: 1e5,
      padding: 0
    };
    var circular2 = {
      true: (_, { props, tokens }) => {
        if (!("size" in props))
          return circularStyle2;
        const size2 = tokens.size[props.size];
        return {
          ...circularStyle2,
          width: size2,
          height: size2,
          maxWidth: size2,
          maxHeight: size2,
          minWidth: size2,
          minHeight: size2
        };
      }
    };
    var hoverTheme2 = {
      true: {
        hoverStyle: {
          backgroundColor: "$backgroundHover",
          borderColor: "$borderColorHover"
        }
      },
      false: {}
    };
    var pressTheme2 = {
      true: {
        cursor: "pointer",
        pressStyle: {
          backgroundColor: "$backgroundPress",
          borderColor: "$borderColorPress"
        }
      },
      false: {}
    };
    var focusTheme2 = {
      true: {
        focusStyle: {
          backgroundColor: "$backgroundFocus",
          borderColor: "$borderColorFocus"
        }
      },
      false: {}
    };
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/SizableStack.js
var require_SizableStack = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/SizableStack.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SizableStack_exports = {};
    __export2(SizableStack_exports, {
      SizableStack: () => SizableStack2
    });
    module2.exports = __toCommonJS2(SizableStack_exports);
    var import_core55 = require("@tamagui/core");
    var import_get_button_sized6 = require_cjs11();
    var import_Stacks3 = require_Stacks();
    var import_variants3 = require_variants();
    var SizableStack2 = (0, import_core55.styled)(import_Stacks3.XStack, {
      name: "SizableStack",
      variants: {
        unstyled: {
          true: {
            hoverTheme: false,
            pressTheme: false,
            focusTheme: false,
            elevate: false,
            bordered: false
          }
        },
        hoverTheme: import_variants3.hoverTheme,
        pressTheme: import_variants3.pressTheme,
        focusTheme: import_variants3.focusTheme,
        circular: import_variants3.circular,
        elevate: import_variants3.elevate,
        bordered: import_variants3.bordered,
        size: {
          "...size": (val, extras) => (0, import_get_button_sized6.getButtonSized)(val, extras)
        }
      }
    });
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/ThemeableStack.js
var require_ThemeableStack = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/ThemeableStack.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var ThemeableStack_exports = {};
    __export2(ThemeableStack_exports, {
      ThemeableStack: () => ThemeableStack2,
      themeableVariants: () => themeableVariants2
    });
    module2.exports = __toCommonJS2(ThemeableStack_exports);
    var import_core55 = require("@tamagui/core");
    var import_Stacks3 = require_Stacks();
    var import_variants3 = require_variants();
    var chromelessStyle2 = {
      backgroundColor: "transparent",
      borderColor: "transparent",
      shadowColor: "transparent",
      hoverStyle: {
        borderColor: "transparent"
      }
    };
    var themeableVariants2 = {
      backgrounded: {
        true: {
          backgroundColor: "$background"
        }
      },
      radiused: import_variants3.radiused,
      hoverTheme: import_variants3.hoverTheme,
      pressTheme: import_variants3.pressTheme,
      focusTheme: import_variants3.focusTheme,
      circular: import_variants3.circular,
      padded: import_variants3.padded,
      elevate: import_variants3.elevate,
      bordered: import_variants3.bordered,
      transparent: {
        true: {
          backgroundColor: "transparent"
        }
      },
      chromeless: {
        true: chromelessStyle2,
        all: {
          ...chromelessStyle2,
          hoverStyle: chromelessStyle2,
          pressStyle: chromelessStyle2,
          focusStyle: chromelessStyle2
        }
      }
    };
    var ThemeableStack2 = (0, import_core55.styled)(import_Stacks3.YStack, {
      variants: themeableVariants2
    });
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/index.js
var require_cjs12 = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Stacks(), module2.exports);
    __reExport2(src_exports, require_SizableStack(), module2.exports);
    __reExport2(src_exports, require_ThemeableStack(), module2.exports);
  }
});

// ../../node_modules/@tamagui/get-font-sized/dist/cjs/index.js
var require_cjs13 = __commonJS({
  "../../node_modules/@tamagui/get-font-sized/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      getFontSized: () => getFontSized4
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_core55 = require("@tamagui/core");
    var getFontSized4 = /* @__PURE__ */ __name((sizeTokenIn = "$true", { font, fontFamily, props }) => {
      var _a, _b, _c, _d, _e, _f;
      if (!font) {
        process.env.NODE_ENV === "development" && console.warn(
          "Warning: No font found in props",
          { ...props },
          'For a sized text component, you either need to set fontFamily directly, or through the "defaultFont" setting in your createTamagui config.'
        );
        return;
      }
      const sizeToken = sizeTokenIn === "$true" ? getDefaultSizeToken(font) : sizeTokenIn, fontSize = font.size[sizeToken], lineHeight = (_a = font.lineHeight) == null ? void 0 : _a[sizeToken], fontWeight = (_b = font.weight) == null ? void 0 : _b[sizeToken], letterSpacing = (_c = font.letterSpacing) == null ? void 0 : _c[sizeToken], textTransform = (_d = font.transform) == null ? void 0 : _d[sizeToken], fontStyle = props.fontStyle ?? ((_e = font.style) == null ? void 0 : _e[sizeToken]), style = {
        color: props.color ?? ((_f = font.color) == null ? void 0 : _f[sizeToken]),
        fontStyle,
        textTransform,
        fontFamily,
        fontWeight,
        letterSpacing,
        fontSize,
        lineHeight
      };
      return process.env.NODE_ENV === "development" && props.debug && props.debug === "verbose" && (console.groupCollapsed("  \u{1F539} getFontSized", sizeTokenIn, sizeToken), console.log({ style, props, font }), console.groupEnd()), style;
    }, "getFontSized");
    var cache = /* @__PURE__ */ new WeakMap();
    function getDefaultSizeToken(font) {
      if (typeof font == "object" && cache.has(font))
        return cache.get(font);
      const sizeTokens = "$true" in font.size ? font.size : (0, import_core55.getTokens)().size, sizeDefault = sizeTokens.$true, sizeDefaultSpecific = sizeDefault ? Object.keys(sizeTokens).find(
        (x) => x !== "$true" && sizeTokens[x].val === sizeDefault.val
      ) : null;
      return !sizeDefault || !sizeDefaultSpecific ? (process.env.NODE_ENV === "development" && console.warn(`No default size is set in your tokens for the "true" key, fonts will be inconsistent.

      Fix this by having consistent tokens across fonts and sizes and setting a true key for your size tokens, or
      set true keys for all your font tokens: "size", "lineHeight", "fontStyle", etc.`), Object.keys(font.size)[3]) : (cache.set(font, sizeDefaultSpecific), sizeDefaultSpecific);
    }
    __name(getDefaultSizeToken, "getDefaultSizeToken");
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/SizableText.js
var require_SizableText = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/SizableText.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SizableText_exports = {};
    __export2(SizableText_exports, {
      SizableText: () => SizableText2
    });
    module2.exports = __toCommonJS2(SizableText_exports);
    var import_get_font_sized4 = require_cjs13();
    var import_web16 = require("@tamagui/core");
    var variants3 = {
      unstyled: {
        false: {
          size: "$true"
        }
      },
      size: import_get_font_sized4.getFontSized
    };
    variants3.fontFamily = {
      "...": (_, extras) => {
        const size2 = extras.props.size || "$true";
        return (0, import_get_font_sized4.getFontSized)(size2, extras);
      }
    };
    var SizableText2 = (0, import_web16.styled)(import_web16.Text, {
      name: "SizableText",
      fontFamily: "$body",
      variants: variants3,
      defaultVariants: {
        unstyled: false
      }
    });
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/Paragraph.js
var require_Paragraph = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/Paragraph.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Paragraph_exports = {};
    __export2(Paragraph_exports, {
      Paragraph: () => Paragraph2
    });
    module2.exports = __toCommonJS2(Paragraph_exports);
    var import_web16 = require("@tamagui/core");
    var import_SizableText2 = require_SizableText();
    var Paragraph2 = (0, import_web16.styled)(import_SizableText2.SizableText, {
      name: "Paragraph",
      tag: "p",
      userSelect: "auto",
      color: "$color",
      size: "$true"
    });
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/Headings.js
var require_Headings = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/Headings.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Headings_exports = {};
    __export2(Headings_exports, {
      H1: () => H12,
      H2: () => H22,
      H3: () => H32,
      H4: () => H42,
      H5: () => H52,
      H6: () => H62,
      Heading: () => Heading2
    });
    module2.exports = __toCommonJS2(Headings_exports);
    var import_web16 = require("@tamagui/core");
    var import_Paragraph2 = require_Paragraph();
    var Heading2 = (0, import_web16.styled)(import_Paragraph2.Paragraph, {
      tag: "span",
      name: "Heading",
      accessibilityRole: "header",
      fontFamily: "$heading",
      size: "$8",
      margin: 0
    });
    var H12 = (0, import_web16.styled)(Heading2, {
      name: "H1",
      tag: "h1",
      size: "$10"
    });
    var H22 = (0, import_web16.styled)(Heading2, {
      name: "H2",
      tag: "h2",
      size: "$9"
    });
    var H32 = (0, import_web16.styled)(Heading2, {
      name: "H3",
      tag: "h3",
      size: "$8"
    });
    var H42 = (0, import_web16.styled)(Heading2, {
      name: "H4",
      tag: "h4",
      size: "$7"
    });
    var H52 = (0, import_web16.styled)(Heading2, {
      name: "H5",
      tag: "h5",
      size: "$6"
    });
    var H62 = (0, import_web16.styled)(Heading2, {
      name: "H6",
      tag: "h6",
      size: "$5"
    });
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/wrapChildrenInText.js
var require_wrapChildrenInText = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/wrapChildrenInText.js"(exports, module2) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var wrapChildrenInText_exports = {};
    __export2(wrapChildrenInText_exports, {
      wrapChildrenInText: () => wrapChildrenInText2
    });
    module2.exports = __toCommonJS2(wrapChildrenInText_exports);
    var import_react44 = __toESM2(require("react"));
    var import_jsx_runtime51 = (
      // so "data-disable-theme" is a hack to fix themeInverse, don't ask me why
      require("react/jsx-runtime")
    );
    function wrapChildrenInText2(TextComponent, propsIn, extraProps) {
      const {
        children,
        textProps,
        size: size2,
        noTextWrap,
        color,
        fontFamily,
        fontSize,
        fontWeight,
        letterSpacing,
        textAlign,
        fontStyle,
        maxFontSizeMultiplier
      } = propsIn;
      if (noTextWrap || !children)
        return [children];
      const props = {
        ...extraProps
      };
      return color && (props.color = color), fontFamily && (props.fontFamily = fontFamily), fontSize && (props.fontSize = fontSize), fontWeight && (props.fontWeight = fontWeight), letterSpacing && (props.letterSpacing = letterSpacing), textAlign && (props.textAlign = textAlign), size2 && (props.size = size2), fontStyle && (props.fontStyle = fontStyle), maxFontSizeMultiplier && (props.maxFontSizeMultiplier = maxFontSizeMultiplier), import_react44.default.Children.toArray(children).map((child, index3) => typeof child == "string" ? /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(TextComponent, { ...props, ...textProps, children: child }, index3) : child);
    }
    __name(wrapChildrenInText2, "wrapChildrenInText");
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/types.js
var require_types2 = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/types.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var types_exports = {};
    module2.exports = __toCommonJS2(types_exports);
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/index.js
var require_cjs14 = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_SizableText(), module2.exports);
    __reExport2(src_exports, require_Paragraph(), module2.exports);
    __reExport2(src_exports, require_Headings(), module2.exports);
    __reExport2(src_exports, require_wrapChildrenInText(), module2.exports);
    __reExport2(src_exports, require_types2(), module2.exports);
  }
});

// ../../node_modules/@tamagui/use-direction/dist/cjs/useDirection.js
var require_useDirection = __commonJS({
  "../../node_modules/@tamagui/use-direction/dist/cjs/useDirection.js"(exports, module2) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useDirection_exports = {};
    __export2(useDirection_exports, {
      DirectionProvider: () => DirectionProvider,
      Provider: () => Provider,
      useDirection: () => useDirection2
    });
    module2.exports = __toCommonJS2(useDirection_exports);
    var React39 = __toESM2(require("react"));
    var import_jsx_runtime51 = require("react/jsx-runtime");
    var DirectionContext2 = React39.createContext(void 0);
    var DirectionProvider = /* @__PURE__ */ __name((props) => {
      const { dir, children } = props;
      return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(DirectionContext2.Provider, { value: dir, children });
    }, "DirectionProvider");
    function useDirection2(localDir) {
      const globalDir = React39.useContext(DirectionContext2);
      return localDir || globalDir || "ltr";
    }
    __name(useDirection2, "useDirection");
    var Provider = DirectionProvider;
  }
});

// ../../node_modules/@tamagui/use-direction/dist/cjs/index.js
var require_cjs15 = __commonJS({
  "../../node_modules/@tamagui/use-direction/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_useDirection(), module2.exports);
  }
});

// ../../node_modules/@tamagui/accordion/dist/cjs/Accordion.js
var require_Accordion = __commonJS({
  "../../node_modules/@tamagui/accordion/dist/cjs/Accordion.js"(exports, module2) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Accordion_exports = {};
    __export2(Accordion_exports, {
      Accordion: () => Accordion,
      createAccordionScope: () => createAccordionScope
    });
    module2.exports = __toCommonJS2(Accordion_exports);
    var import_collapsible = require_cjs7();
    var import_collection2 = require_cjs9();
    var import_create_context16 = require_cjs4();
    var import_stacks25 = require_cjs12();
    var import_text7 = require_cjs14();
    var import_use_controllable_state15 = require_cjs6();
    var import_use_direction5 = require_cjs15();
    var import_web16 = require("@tamagui/core");
    var React39 = __toESM2(require("react"));
    var import_jsx_runtime51 = require("react/jsx-runtime");
    var ACCORDION_NAME = "Accordion";
    var ACCORDION_KEYS = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];
    var [Collection2, useCollection2, createCollectionScope2] = (0, import_collection2.createCollection)(ACCORDION_NAME);
    var [createAccordionContext, createAccordionScope] = (0, import_create_context16.createContextScope)(
      ACCORDION_NAME,
      [createCollectionScope2, import_collapsible.createCollapsibleScope]
    );
    var useCollapsibleScope = (0, import_collapsible.createCollapsibleScope)();
    var AccordionComponent = React39.forwardRef((props, forwardedRef) => {
      const { type, ...accordionProps } = props, singleProps = accordionProps, multipleProps = accordionProps;
      return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Collection2.Provider, { scope: props.__scopeAccordion, children: type === "multiple" ? /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(AccordionImplMultiple, { ...multipleProps, ref: forwardedRef }) : /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(AccordionImplSingle, { ...singleProps, ref: forwardedRef }) });
    });
    AccordionComponent.displayName = ACCORDION_NAME;
    AccordionComponent.propTypes = {
      type(props) {
        const value = props.value || props.defaultValue;
        return props.type && !["single", "multiple"].includes(props.type) ? new Error(
          "Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."
        ) : props.type === "multiple" && typeof value == "string" ? new Error(
          "Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."
        ) : props.type === "single" && Array.isArray(value) ? new Error(
          "Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."
        ) : null;
      }
    };
    var [AccordionValueProvider, useAccordionValueContext] = createAccordionContext(ACCORDION_NAME);
    var [AccordionCollapsibleProvider, useAccordionCollapsibleContext] = createAccordionContext(ACCORDION_NAME, { collapsible: false });
    var AccordionImplSingle = React39.forwardRef((props, forwardedRef) => {
      const {
        value: valueProp,
        defaultValue: defaultValue2,
        control,
        onValueChange = /* @__PURE__ */ __name(() => {
        }, "onValueChange"),
        collapsible = false,
        ...accordionSingleProps
      } = props, [value, setValue] = (0, import_use_controllable_state15.useControllableState)({
        prop: valueProp,
        defaultProp: defaultValue2 || "",
        onChange: onValueChange
      });
      return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
        AccordionValueProvider,
        {
          scope: props.__scopeAccordion,
          value: value ? [value] : [],
          onItemOpen: setValue,
          onItemClose: React39.useCallback(
            () => collapsible && setValue(""),
            [setValue, collapsible]
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
            AccordionCollapsibleProvider,
            {
              scope: props.__scopeAccordion,
              collapsible,
              children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(AccordionImpl, { ...accordionSingleProps, ref: forwardedRef })
            }
          )
        }
      );
    });
    var AccordionImplMultiple = React39.forwardRef((props, forwardedRef) => {
      const {
        value: valueProp,
        defaultValue: defaultValue2,
        onValueChange = /* @__PURE__ */ __name(() => {
        }, "onValueChange"),
        ...accordionMultipleProps
      } = props, [value, setValue] = (0, import_use_controllable_state15.useControllableState)({
        prop: valueProp,
        defaultProp: defaultValue2 || [],
        onChange: onValueChange
      }), handleItemOpen = React39.useCallback(
        (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
        [setValue]
      ), handleItemClose = React39.useCallback(
        (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
        [setValue]
      );
      return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
        AccordionValueProvider,
        {
          scope: props.__scopeAccordion,
          value: value || [],
          onItemOpen: handleItemOpen,
          onItemClose: handleItemClose,
          children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible: true, children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(AccordionImpl, { ...accordionMultipleProps, ref: forwardedRef }) })
        }
      );
    });
    var [AccordionImplProvider, useAccordionContext] = createAccordionContext(ACCORDION_NAME);
    var AccordionImpl = React39.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeAccordion,
          disabled,
          dir,
          orientation = "vertical",
          ...accordionProps
        } = props, accordionRef = React39.useRef(null), composedRef = (0, import_web16.useComposedRefs)(accordionRef, forwardedRef), getItems = useCollection2(__scopeAccordion), isDirectionLTR = (0, import_use_direction5.useDirection)(dir) === "ltr", handleKeyDown = (0, import_web16.composeEventHandlers)(
          props.onKeyDown,
          (event) => {
            var _a;
            if (!ACCORDION_KEYS.includes(event.key))
              return;
            const target = event.target, triggerCollection = getItems().filter((item) => {
              const el = item.ref.current;
              return !(el != null && el.disabled);
            }), triggerIndex = triggerCollection.findIndex(
              (item) => item.ref.current === target
            ), triggerCount = triggerCollection.length;
            if (triggerIndex === -1)
              return;
            event.preventDefault();
            let nextIndex = triggerIndex;
            const homeIndex = 0, endIndex = triggerCount - 1, moveNext = /* @__PURE__ */ __name(() => {
              nextIndex = triggerIndex + 1, nextIndex > endIndex && (nextIndex = homeIndex);
            }, "moveNext"), movePrev = /* @__PURE__ */ __name(() => {
              nextIndex = triggerIndex - 1, nextIndex < homeIndex && (nextIndex = endIndex);
            }, "movePrev");
            switch (event.key) {
              case "Home":
                nextIndex = homeIndex;
                break;
              case "End":
                nextIndex = endIndex;
                break;
              case "ArrowRight":
                orientation === "horizontal" && (isDirectionLTR ? moveNext() : movePrev());
                break;
              case "ArrowDown":
                orientation === "vertical" && moveNext();
                break;
              case "ArrowLeft":
                orientation === "horizontal" && (isDirectionLTR ? movePrev() : moveNext());
                break;
              case "ArrowUp":
                orientation === "vertical" && movePrev();
                break;
            }
            const clampedIndex = nextIndex % triggerCount;
            (_a = triggerCollection[clampedIndex].ref.current) == null || _a.focus();
          }
        );
        return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
          AccordionImplProvider,
          {
            scope: __scopeAccordion,
            disabled,
            direction: dir,
            orientation,
            children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Collection2.Slot, { scope: __scopeAccordion, children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
              import_stacks25.YStack,
              {
                "data-orientation": orientation,
                ref: composedRef,
                ...accordionProps,
                ...import_web16.isWeb && {
                  onKeyDown: handleKeyDown
                }
              }
            ) })
          }
        );
      }
    );
    var ITEM_NAME3 = "AccordionItem";
    var [AccordionItemProvider, useAccordionItemContext] = createAccordionContext(ITEM_NAME3);
    var AccordionItem = React39.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAccordion, value, ...accordionItemProps } = props, accordionContext = useAccordionContext(ITEM_NAME3, __scopeAccordion), valueContext = useAccordionValueContext(ITEM_NAME3, __scopeAccordion), collapsibleScope = useCollapsibleScope(__scopeAccordion), triggerId = React39.useId(), open = value && valueContext.value.includes(value) || false, disabled = accordionContext.disabled || props.disabled;
        return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
          AccordionItemProvider,
          {
            scope: __scopeAccordion,
            open,
            disabled,
            triggerId,
            children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
              import_collapsible.Collapsible,
              {
                "data-orientation": accordionContext.orientation,
                "data-state": open ? "open" : "closed",
                ...collapsibleScope,
                ...accordionItemProps,
                ref: forwardedRef,
                disabled,
                open,
                onOpenChange: (open2) => {
                  open2 ? valueContext.onItemOpen(value) : valueContext.onItemClose(value);
                }
              }
            )
          }
        );
      }
    );
    AccordionItem.displayName = ITEM_NAME3;
    var HEADER_NAME = "AccordionHeader";
    var AccordionHeader = React39.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAccordion, ...headerProps } = props, accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion), itemContext = useAccordionItemContext(HEADER_NAME, __scopeAccordion);
        return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
          import_text7.H1,
          {
            "data-orientation": accordionContext.orientation,
            "data-state": getState5(itemContext.open),
            "data-disabled": itemContext.disabled ? "" : void 0,
            ...headerProps,
            ref: forwardedRef
          }
        );
      }
    );
    AccordionHeader.displayName = HEADER_NAME;
    var AccordionTriggerFrame = (0, import_web16.styled)(import_collapsible.Collapsible.Trigger, {
      variants: {
        unstyled: {
          false: {
            cursor: "pointer",
            backgroundColor: "$background",
            borderColor: "$borderColor",
            borderWidth: 1,
            padding: "$true",
            hoverStyle: {
              backgroundColor: "$backgroundHover"
            },
            focusStyle: {
              backgroundColor: "$backgroundFocus"
            },
            pressStyle: {
              backgroundColor: "$backgroundPress"
            }
          }
        }
      },
      defaultVariants: {
        unstyled: false
      }
    });
    var TRIGGER_NAME6 = "AccordionTrigger";
    var AccordionTrigger = AccordionTriggerFrame.styleable(function(props, forwardedRef) {
      const { __scopeAccordion, ...triggerProps } = props, accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion), itemContext = useAccordionItemContext(TRIGGER_NAME6, __scopeAccordion), collapsibleContext = useAccordionCollapsibleContext(
        TRIGGER_NAME6,
        __scopeAccordion
      ), collapsibleScope = useCollapsibleScope(__scopeAccordion);
      return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Collection2.ItemSlot, { scope: __scopeAccordion, children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
        AccordionTriggerFrame,
        {
          "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
          "data-orientation": accordionContext.orientation,
          id: itemContext.triggerId,
          ...collapsibleScope,
          ...triggerProps,
          ref: forwardedRef
        }
      ) });
    });
    var AccordionContentFrame = (0, import_web16.styled)(import_collapsible.Collapsible.Content, {
      variants: {
        unstyled: {
          false: {
            padding: "$true",
            backgroundColor: "$background"
          }
        }
      },
      defaultVariants: {
        unstyled: false
      }
    });
    var AccordionContent = AccordionContentFrame.styleable(function(props, forwardedRef) {
      const { __scopeAccordion, ...contentProps } = props, accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion), itemContext = useAccordionItemContext("AccordionContent", __scopeAccordion), collapsibleScope = useCollapsibleScope(__scopeAccordion);
      return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
        AccordionContentFrame,
        {
          role: "region",
          "aria-labelledby": itemContext.triggerId,
          "data-orientation": accordionContext.orientation,
          ...collapsibleScope,
          ...contentProps,
          ref: forwardedRef
        }
      );
    });
    function getState5(open) {
      return open ? "open" : "closed";
    }
    __name(getState5, "getState");
    var Accordion = (0, import_web16.withStaticProperties)(AccordionComponent, {
      Trigger: AccordionTrigger,
      Header: AccordionHeader,
      Content: AccordionContent,
      Item: AccordionItem
    });
  }
});

// ../../node_modules/@tamagui/accordion/dist/cjs/index.js
var require_cjs16 = __commonJS({
  "../../node_modules/@tamagui/accordion/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Accordion(), module2.exports);
  }
});

// ../../node_modules/aria-hidden/dist/es5/index.js
var require_es5 = __commonJS({
  "../../node_modules/aria-hidden/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.suppressOthers = exports.supportsInert = exports.inertOthers = exports.hideOthers = void 0;
    var getDefaultParent = /* @__PURE__ */ __name(function(originalTarget) {
      if (typeof document === "undefined") {
        return null;
      }
      var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
      return sampleTarget.ownerDocument.body;
    }, "getDefaultParent");
    var counterMap = /* @__PURE__ */ new WeakMap();
    var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
    var markerMap = {};
    var lockCount = 0;
    var unwrapHost = /* @__PURE__ */ __name(function(node) {
      return node && (node.host || unwrapHost(node.parentNode));
    }, "unwrapHost");
    var correctTargets = /* @__PURE__ */ __name(function(parent, targets) {
      return targets.map(function(target) {
        if (parent.contains(target)) {
          return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
          return correctedTarget;
        }
        console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
        return null;
      }).filter(function(x) {
        return Boolean(x);
      });
    }, "correctTargets");
    var applyAttributeToOthers = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName, controlAttribute) {
      var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
      if (!markerMap[markerName]) {
        markerMap[markerName] = /* @__PURE__ */ new WeakMap();
      }
      var markerCounter = markerMap[markerName];
      var hiddenNodes = [];
      var elementsToKeep = /* @__PURE__ */ new Set();
      var elementsToStop = new Set(targets);
      var keep = /* @__PURE__ */ __name(function(el) {
        if (!el || elementsToKeep.has(el)) {
          return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
      }, "keep");
      targets.forEach(keep);
      var deep = /* @__PURE__ */ __name(function(parent) {
        if (!parent || elementsToStop.has(parent)) {
          return;
        }
        Array.prototype.forEach.call(parent.children, function(node) {
          if (elementsToKeep.has(node)) {
            deep(node);
          } else {
            var attr = node.getAttribute(controlAttribute);
            var alreadyHidden = attr !== null && attr !== "false";
            var counterValue = (counterMap.get(node) || 0) + 1;
            var markerValue = (markerCounter.get(node) || 0) + 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            hiddenNodes.push(node);
            if (counterValue === 1 && alreadyHidden) {
              uncontrolledNodes.set(node, true);
            }
            if (markerValue === 1) {
              node.setAttribute(markerName, "true");
            }
            if (!alreadyHidden) {
              node.setAttribute(controlAttribute, "true");
            }
          }
        });
      }, "deep");
      deep(parentNode);
      elementsToKeep.clear();
      lockCount++;
      return function() {
        hiddenNodes.forEach(function(node) {
          var counterValue = counterMap.get(node) - 1;
          var markerValue = markerCounter.get(node) - 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          if (!counterValue) {
            if (!uncontrolledNodes.has(node)) {
              node.removeAttribute(controlAttribute);
            }
            uncontrolledNodes.delete(node);
          }
          if (!markerValue) {
            node.removeAttribute(markerName);
          }
        });
        lockCount--;
        if (!lockCount) {
          counterMap = /* @__PURE__ */ new WeakMap();
          counterMap = /* @__PURE__ */ new WeakMap();
          uncontrolledNodes = /* @__PURE__ */ new WeakMap();
          markerMap = {};
        }
      };
    }, "applyAttributeToOthers");
    var hideOthers5 = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName) {
      if (markerName === void 0) {
        markerName = "data-aria-hidden";
      }
      var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
      var activeParentNode = parentNode || getDefaultParent(originalTarget);
      if (!activeParentNode) {
        return function() {
          return null;
        };
      }
      targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
      return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
    }, "hideOthers");
    exports.hideOthers = hideOthers5;
    var inertOthers = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName) {
      if (markerName === void 0) {
        markerName = "data-inert-ed";
      }
      var activeParentNode = parentNode || getDefaultParent(originalTarget);
      if (!activeParentNode) {
        return function() {
          return null;
        };
      }
      return applyAttributeToOthers(originalTarget, activeParentNode, markerName, "inert");
    }, "inertOthers");
    exports.inertOthers = inertOthers;
    var supportsInert2 = /* @__PURE__ */ __name(function() {
      return typeof HTMLElement !== "undefined" && HTMLElement.prototype.hasOwnProperty("inert");
    }, "supportsInert");
    exports.supportsInert = supportsInert2;
    var suppressOthers2 = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName) {
      if (markerName === void 0) {
        markerName = "data-suppressed";
      }
      return ((0, exports.supportsInert)() ? exports.inertOthers : exports.hideOthers)(originalTarget, parentNode, markerName);
    }, "suppressOthers");
    exports.suppressOthers = suppressOthers2;
  }
});

// ../../node_modules/@tamagui/aria-hidden/dist/cjs/AriaHidden.js
var require_AriaHidden = __commonJS({
  "../../node_modules/@tamagui/aria-hidden/dist/cjs/AriaHidden.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var AriaHidden_exports = {};
    __export2(AriaHidden_exports, {
      hideOthers: () => import_aria_hidden4.hideOthers
    });
    module2.exports = __toCommonJS2(AriaHidden_exports);
    var import_aria_hidden4 = require_es5();
  }
});

// ../../node_modules/@tamagui/aria-hidden/dist/cjs/index.js
var require_cjs17 = __commonJS({
  "../../node_modules/@tamagui/aria-hidden/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_AriaHidden(), module2.exports);
  }
});

// ../../node_modules/@tamagui/focus-scope/dist/cjs/FocusScope.js
var require_FocusScope = __commonJS({
  "../../node_modules/@tamagui/focus-scope/dist/cjs/FocusScope.js"(exports, module2) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var FocusScope_exports = {};
    __export2(FocusScope_exports, {
      FocusScope: () => FocusScope4,
      useFocusScope: () => useFocusScope
    });
    module2.exports = __toCommonJS2(FocusScope_exports);
    var import_compose_refs17 = require_cjs8();
    var import_use_event3 = require_cjs5();
    var React39 = __toESM2(require("react"));
    var import_jsx_runtime51 = require("react/jsx-runtime");
    var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
    var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
    var EVENT_OPTIONS2 = { bubbles: false, cancelable: true };
    var FocusScope4 = React39.forwardRef(
      function(props, forwardedRef) {
        const childProps = useFocusScope(props, forwardedRef);
        return typeof props.children == "function" ? /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_jsx_runtime51.Fragment, { children: props.children(childProps) }) : React39.cloneElement(React39.Children.only(props.children), childProps);
      }
    );
    function useFocusScope(props, forwardedRef) {
      const {
        loop = false,
        enabled = true,
        trapped = false,
        onMountAutoFocus: onMountAutoFocusProp,
        onUnmountAutoFocus: onUnmountAutoFocusProp,
        forceUnmount,
        children,
        ...scopeProps
      } = props, [container, setContainer] = React39.useState(null), onMountAutoFocus = (0, import_use_event3.useEvent)(onMountAutoFocusProp), onUnmountAutoFocus = (0, import_use_event3.useEvent)(onUnmountAutoFocusProp), lastFocusedElementRef = React39.useRef(null), composedRefs = (0, import_compose_refs17.useComposedRefs)(forwardedRef, (node) => setContainer(node)), focusScope = React39.useRef({
        paused: false,
        pause() {
          this.paused = true;
        },
        resume() {
          this.paused = false;
        }
      }).current;
      React39.useEffect(() => {
        if (!enabled || !trapped)
          return;
        function handleFocusIn(event) {
          if (focusScope.paused || !container)
            return;
          const target = event.target;
          container.contains(target) ? lastFocusedElementRef.current = target : focus(lastFocusedElementRef.current, { select: true });
        }
        __name(handleFocusIn, "handleFocusIn");
        function handleFocusOut(event) {
          focusScope.paused || !container || container.contains(event.relatedTarget) || focus(lastFocusedElementRef.current, { select: true });
        }
        __name(handleFocusOut, "handleFocusOut");
        return document.addEventListener("focusin", handleFocusIn), document.addEventListener("focusout", handleFocusOut), () => {
          document.removeEventListener("focusin", handleFocusIn), document.removeEventListener("focusout", handleFocusOut);
        };
      }, [trapped, forceUnmount, container, focusScope.paused]), React39.useEffect(() => {
        if (!enabled || !container || forceUnmount)
          return;
        focusScopesStack.add(focusScope);
        const previouslyFocusedElement = document.activeElement;
        if (!container.contains(previouslyFocusedElement)) {
          const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS2);
          container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus), container.dispatchEvent(mountEvent), mountEvent.defaultPrevented || (focusFirst2(removeLinks(getTabbableCandidates(container)), { select: true }), document.activeElement === previouslyFocusedElement && focus(container));
        }
        return () => {
          container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
          const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS2);
          container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus), container.dispatchEvent(unmountEvent), unmountEvent.defaultPrevented || focus(previouslyFocusedElement ?? document.body, { select: true }), container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus), focusScopesStack.remove(focusScope);
        };
      }, [enabled, container, forceUnmount, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
      const handleKeyDown = React39.useCallback(
        (event) => {
          if (!trapped || !loop || focusScope.paused)
            return;
          const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey, focusedElement = document.activeElement;
          if (isTabKey && focusedElement) {
            const container2 = event.currentTarget, [first, last] = getTabbableEdges(container2);
            first && last ? !event.shiftKey && focusedElement === last ? (event.preventDefault(), loop && focus(first, { select: true })) : event.shiftKey && focusedElement === first && (event.preventDefault(), loop && focus(last, { select: true })) : focusedElement === container2 && event.preventDefault();
          }
        },
        [loop, trapped, focusScope.paused]
      );
      return {
        tabIndex: -1,
        ...scopeProps,
        ref: composedRefs,
        onKeyDown: handleKeyDown
      };
    }
    __name(useFocusScope, "useFocusScope");
    function focusFirst2(candidates, { select = false } = {}) {
      const previouslyFocusedElement = document.activeElement;
      for (const candidate of candidates)
        if (focus(candidate, { select }), document.activeElement !== previouslyFocusedElement)
          return;
    }
    __name(focusFirst2, "focusFirst");
    function getTabbableEdges(container) {
      const candidates = getTabbableCandidates(container), first = findVisible(candidates, container), last = findVisible(candidates.reverse(), container);
      return [first, last];
    }
    __name(getTabbableEdges, "getTabbableEdges");
    function getTabbableCandidates(container) {
      const nodes = [], walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node) => {
          const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
          return node.disabled || node.hidden || isHiddenInput ? NodeFilter.FILTER_SKIP : node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
      });
      for (; walker.nextNode(); )
        nodes.push(walker.currentNode);
      return nodes;
    }
    __name(getTabbableCandidates, "getTabbableCandidates");
    function findVisible(elements, container) {
      for (const element of elements)
        if (!isHidden(element, { upTo: container }))
          return element;
    }
    __name(findVisible, "findVisible");
    function isHidden(node, { upTo }) {
      if (getComputedStyle(node).visibility === "hidden")
        return true;
      for (; node; ) {
        if (upTo !== void 0 && node === upTo)
          return false;
        if (getComputedStyle(node).display === "none")
          return true;
        node = node.parentElement;
      }
      return false;
    }
    __name(isHidden, "isHidden");
    function isSelectableInput(element) {
      return element instanceof HTMLInputElement && "select" in element;
    }
    __name(isSelectableInput, "isSelectableInput");
    function focus(element, { select = false } = {}) {
      setTimeout(() => {
        if (element != null && element.focus) {
          const previouslyFocusedElement = document.activeElement;
          element.focus({ preventScroll: true }), element !== previouslyFocusedElement && isSelectableInput(element) && select && element.select();
        }
      });
    }
    __name(focus, "focus");
    var focusScopesStack = createFocusScopesStack();
    function createFocusScopesStack() {
      let stack = [];
      return {
        add(focusScope) {
          const activeFocusScope = stack[0];
          focusScope !== activeFocusScope && (activeFocusScope == null || activeFocusScope.pause()), stack = arrayRemove(stack, focusScope), stack.unshift(focusScope);
        },
        remove(focusScope) {
          var _a;
          stack = arrayRemove(stack, focusScope), (_a = stack[0]) == null || _a.resume();
        }
      };
    }
    __name(createFocusScopesStack, "createFocusScopesStack");
    function arrayRemove(array, item) {
      const updatedArray = [...array], index3 = updatedArray.indexOf(item);
      return index3 !== -1 && updatedArray.splice(index3, 1), updatedArray;
    }
    __name(arrayRemove, "arrayRemove");
    function removeLinks(items) {
      return items.filter((item) => item.tagName !== "A");
    }
    __name(removeLinks, "removeLinks");
  }
});

// ../../node_modules/@tamagui/focus-scope/dist/cjs/index.js
var require_cjs18 = __commonJS({
  "../../node_modules/@tamagui/focus-scope/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_FocusScope(), module2.exports);
  }
});

// ../../node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __addDisposableResource: () => __addDisposableResource,
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __disposeResources: () => __disposeResources,
  __esDecorate: () => __esDecorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __propKey: () => __propKey,
  __read: () => __read,
  __rest: () => __rest,
  __runInitializers: () => __runInitializers,
  __setFunctionName: () => __setFunctionName,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values,
  default: () => tslib_es6_default
});
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  __name(__, "__");
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  __name(accept, "accept");
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_ = accept(result.get))
        descriptor.get = _;
      if (_ = accept(result.set))
        descriptor.set = _;
      if (_ = accept(result.init))
        initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field")
        initializers.unshift(_);
      else
        descriptor[key] = _;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol")
    name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  __name(verb, "verb");
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
  __name(step, "step");
}
function __exportStar(m, o) {
  for (var p in m)
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
      __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n])
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
  }
  __name(verb, "verb");
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  __name(resume, "resume");
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  __name(step, "step");
  function fulfill(value) {
    resume("next", value);
  }
  __name(fulfill, "fulfill");
  function reject(value) {
    resume("throw", value);
  }
  __name(reject, "reject");
  function settle(f, v) {
    if (f(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
  __name(settle, "settle");
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
    } : f;
  }
  __name(verb, "verb");
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  __name(verb, "verb");
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
  __name(settle, "settle");
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  __name(fail, "fail");
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async)
          return Promise.resolve(result).then(next, function(e) {
            fail(e);
            return next();
          });
      } catch (e) {
        fail(e);
      }
    }
    if (env.hasError)
      throw env.error;
  }
  __name(next, "next");
  return next();
}
var extendStatics, __assign, __createBinding, __setModuleDefault, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esm({
  "../../node_modules/tslib/tslib.es6.mjs"() {
    extendStatics = /* @__PURE__ */ __name(function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    }, "extendStatics");
    __name(__extends, "__extends");
    __assign = /* @__PURE__ */ __name(function() {
      __assign = Object.assign || /* @__PURE__ */ __name(function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      }, "__assign");
      return __assign.apply(this, arguments);
    }, "__assign");
    __name(__rest, "__rest");
    __name(__decorate, "__decorate");
    __name(__param, "__param");
    __name(__esDecorate, "__esDecorate");
    __name(__runInitializers, "__runInitializers");
    __name(__propKey, "__propKey");
    __name(__setFunctionName, "__setFunctionName");
    __name(__metadata, "__metadata");
    __name(__awaiter, "__awaiter");
    __name(__generator, "__generator");
    __createBinding = Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    };
    __name(__exportStar, "__exportStar");
    __name(__values, "__values");
    __name(__read, "__read");
    __name(__spread, "__spread");
    __name(__spreadArrays, "__spreadArrays");
    __name(__spreadArray, "__spreadArray");
    __name(__await, "__await");
    __name(__asyncGenerator, "__asyncGenerator");
    __name(__asyncDelegator, "__asyncDelegator");
    __name(__asyncValues, "__asyncValues");
    __name(__makeTemplateObject, "__makeTemplateObject");
    __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    };
    __name(__importStar, "__importStar");
    __name(__importDefault, "__importDefault");
    __name(__classPrivateFieldGet, "__classPrivateFieldGet");
    __name(__classPrivateFieldSet, "__classPrivateFieldSet");
    __name(__classPrivateFieldIn, "__classPrivateFieldIn");
    __name(__addDisposableResource, "__addDisposableResource");
    _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    __name(__disposeResources, "__disposeResources");
    tslib_es6_default = {
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __metadata,
      __awaiter,
      __generator,
      __createBinding,
      __exportStar,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn,
      __addDisposableResource,
      __disposeResources
    };
  }
});

// ../../node_modules/react-remove-scroll-bar/dist/es5/constants.js
var require_constants = __commonJS({
  "../../node_modules/react-remove-scroll-bar/dist/es5/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = void 0;
    exports.zeroRightClassName = "right-scroll-bar-position";
    exports.fullWidthClassName = "width-before-scroll-bar";
    exports.noScrollbarsClassName = "with-scroll-bars-hidden";
    exports.removedBarSizeVariable = "--removed-body-scroll-bar-size";
  }
});

// ../../node_modules/use-callback-ref/dist/es5/assignRef.js
var require_assignRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/assignRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.assignRef = void 0;
    function assignRef(ref, value) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        ref.current = value;
      }
      return ref;
    }
    __name(assignRef, "assignRef");
    exports.assignRef = assignRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/useRef.js
var require_useRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/useRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useCallbackRef = void 0;
    var react_1 = require("react");
    function useCallbackRef2(initialValue2, callback) {
      var ref = (0, react_1.useState)(function() {
        return {
          // value
          value: initialValue2,
          // last callback
          callback,
          // "memoized" public interface
          facade: {
            get current() {
              return ref.value;
            },
            set current(value) {
              var last = ref.value;
              if (last !== value) {
                ref.value = value;
                ref.callback(value, last);
              }
            }
          }
        };
      })[0];
      ref.callback = callback;
      return ref.facade;
    }
    __name(useCallbackRef2, "useCallbackRef");
    exports.useCallbackRef = useCallbackRef2;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/createRef.js
var require_createRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/createRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createCallbackRef = void 0;
    function createCallbackRef(callback) {
      var current = null;
      return {
        get current() {
          return current;
        },
        set current(value) {
          var last = current;
          if (last !== value) {
            current = value;
            callback(value, last);
          }
        }
      };
    }
    __name(createCallbackRef, "createCallbackRef");
    exports.createCallbackRef = createCallbackRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/mergeRef.js
var require_mergeRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/mergeRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeRefs = void 0;
    var assignRef_1 = require_assignRef();
    var createRef_1 = require_createRef();
    function mergeRefs(refs) {
      return (0, createRef_1.createCallbackRef)(function(newValue) {
        return refs.forEach(function(ref) {
          return (0, assignRef_1.assignRef)(ref, newValue);
        });
      });
    }
    __name(mergeRefs, "mergeRefs");
    exports.mergeRefs = mergeRefs;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/useMergeRef.js
var require_useMergeRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/useMergeRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useMergeRefs = void 0;
    var assignRef_1 = require_assignRef();
    var useRef_1 = require_useRef();
    function useMergeRefs(refs, defaultValue2) {
      return (0, useRef_1.useCallbackRef)(defaultValue2 || null, function(newValue) {
        return refs.forEach(function(ref) {
          return (0, assignRef_1.assignRef)(ref, newValue);
        });
      });
    }
    __name(useMergeRefs, "useMergeRefs");
    exports.useMergeRefs = useMergeRefs;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/useTransformRef.js
var require_useTransformRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/useTransformRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useTransformRef = void 0;
    var assignRef_1 = require_assignRef();
    var useRef_1 = require_useRef();
    function useTransformRef(ref, transformer) {
      return (0, useRef_1.useCallbackRef)(null, function(value) {
        return (0, assignRef_1.assignRef)(ref, transformer(value));
      });
    }
    __name(useTransformRef, "useTransformRef");
    exports.useTransformRef = useTransformRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/transformRef.js
var require_transformRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/transformRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformRef = void 0;
    var assignRef_1 = require_assignRef();
    var createRef_1 = require_createRef();
    function transformRef(ref, transformer) {
      return (0, createRef_1.createCallbackRef)(function(value) {
        return (0, assignRef_1.assignRef)(ref, transformer(value));
      });
    }
    __name(transformRef, "transformRef");
    exports.transformRef = transformRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/refToCallback.js
var require_refToCallback = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/refToCallback.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useRefToCallback = exports.refToCallback = void 0;
    function refToCallback(ref) {
      return function(newValue) {
        if (typeof ref === "function") {
          ref(newValue);
        } else if (ref) {
          ref.current = newValue;
        }
      };
    }
    __name(refToCallback, "refToCallback");
    exports.refToCallback = refToCallback;
    var nullCallback = /* @__PURE__ */ __name(function() {
      return null;
    }, "nullCallback");
    var weakMem = /* @__PURE__ */ new WeakMap();
    var weakMemoize = /* @__PURE__ */ __name(function(ref) {
      var usedRef = ref || nullCallback;
      var storedRef = weakMem.get(usedRef);
      if (storedRef) {
        return storedRef;
      }
      var cb = refToCallback(usedRef);
      weakMem.set(usedRef, cb);
      return cb;
    }, "weakMemoize");
    function useRefToCallback(ref) {
      return weakMemoize(ref);
    }
    __name(useRefToCallback, "useRefToCallback");
    exports.useRefToCallback = useRefToCallback;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/index.js
var require_es52 = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useRefToCallback = exports.refToCallback = exports.transformRef = exports.useTransformRef = exports.useMergeRefs = exports.mergeRefs = exports.createCallbackRef = exports.useCallbackRef = exports.assignRef = void 0;
    var assignRef_1 = require_assignRef();
    Object.defineProperty(exports, "assignRef", { enumerable: true, get: function() {
      return assignRef_1.assignRef;
    } });
    var useRef_1 = require_useRef();
    Object.defineProperty(exports, "useCallbackRef", { enumerable: true, get: function() {
      return useRef_1.useCallbackRef;
    } });
    var createRef_1 = require_createRef();
    Object.defineProperty(exports, "createCallbackRef", { enumerable: true, get: function() {
      return createRef_1.createCallbackRef;
    } });
    var mergeRef_1 = require_mergeRef();
    Object.defineProperty(exports, "mergeRefs", { enumerable: true, get: function() {
      return mergeRef_1.mergeRefs;
    } });
    var useMergeRef_1 = require_useMergeRef();
    Object.defineProperty(exports, "useMergeRefs", { enumerable: true, get: function() {
      return useMergeRef_1.useMergeRefs;
    } });
    var useTransformRef_1 = require_useTransformRef();
    Object.defineProperty(exports, "useTransformRef", { enumerable: true, get: function() {
      return useTransformRef_1.useTransformRef;
    } });
    var transformRef_1 = require_transformRef();
    Object.defineProperty(exports, "transformRef", { enumerable: true, get: function() {
      return transformRef_1.transformRef;
    } });
    var refToCallback_1 = require_refToCallback();
    Object.defineProperty(exports, "refToCallback", { enumerable: true, get: function() {
      return refToCallback_1.refToCallback;
    } });
    Object.defineProperty(exports, "useRefToCallback", { enumerable: true, get: function() {
      return refToCallback_1.useRefToCallback;
    } });
  }
});

// ../../node_modules/detect-node-es/es5/node.js
var require_node = __commonJS({
  "../../node_modules/detect-node-es/es5/node.js"(exports, module2) {
    module2.exports.isNode = Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
  }
});

// ../../node_modules/use-sidecar/dist/es5/env.js
var require_env = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/env.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.env = void 0;
    var detect_node_es_1 = require_node();
    exports.env = {
      isNode: detect_node_es_1.isNode,
      forceCache: false
    };
  }
});

// ../../node_modules/use-sidecar/dist/es5/hook.js
var require_hook = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/hook.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useSidecar = void 0;
    var react_1 = require("react");
    var env_1 = require_env();
    var cache = /* @__PURE__ */ new WeakMap();
    var NO_OPTIONS = {};
    function useSidecar(importer, effect) {
      var options = effect && effect.options || NO_OPTIONS;
      if (env_1.env.isNode && !options.ssr) {
        return [null, null];
      }
      return useRealSidecar(importer, effect);
    }
    __name(useSidecar, "useSidecar");
    exports.useSidecar = useSidecar;
    function useRealSidecar(importer, effect) {
      var options = effect && effect.options || NO_OPTIONS;
      var couldUseCache = env_1.env.forceCache || env_1.env.isNode && !!options.ssr || !options.async;
      var _a = (0, react_1.useState)(couldUseCache ? function() {
        return cache.get(importer);
      } : void 0), Car = _a[0], setCar = _a[1];
      var _b = (0, react_1.useState)(null), error = _b[0], setError = _b[1];
      (0, react_1.useEffect)(function() {
        if (!Car) {
          importer().then(function(car) {
            var resolved = effect ? effect.read() : car.default || car;
            if (!resolved) {
              console.error("Sidecar error: with importer", importer);
              var error_1;
              if (effect) {
                console.error("Sidecar error: with medium", effect);
                error_1 = new Error("Sidecar medium was not found");
              } else {
                error_1 = new Error("Sidecar was not found in exports");
              }
              setError(function() {
                return error_1;
              });
              throw error_1;
            }
            cache.set(importer, resolved);
            setCar(function() {
              return resolved;
            });
          }, function(e) {
            return setError(function() {
              return e;
            });
          });
        }
      }, []);
      return [Car, error];
    }
    __name(useRealSidecar, "useRealSidecar");
  }
});

// ../../node_modules/use-sidecar/dist/es5/hoc.js
var require_hoc = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/hoc.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sidecar = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React39 = tslib_1.__importStar(require("react"));
    var hook_1 = require_hook();
    function sidecar(importer, errorComponent) {
      var ErrorCase = /* @__PURE__ */ __name(function() {
        return errorComponent;
      }, "ErrorCase");
      return /* @__PURE__ */ __name(function Sidecar(props) {
        var _a = (0, hook_1.useSidecar)(importer, props.sideCar), Car = _a[0], error = _a[1];
        if (error && errorComponent) {
          return ErrorCase;
        }
        return Car ? React39.createElement(Car, tslib_1.__assign({}, props)) : null;
      }, "Sidecar");
    }
    __name(sidecar, "sidecar");
    exports.sidecar = sidecar;
  }
});

// ../../node_modules/use-sidecar/dist/es5/config.js
var require_config = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setConfig = exports.config = void 0;
    exports.config = {
      onError: function(e) {
        return console.error(e);
      }
    };
    var setConfig = /* @__PURE__ */ __name(function(conf) {
      Object.assign(exports.config, conf);
    }, "setConfig");
    exports.setConfig = setConfig;
  }
});

// ../../node_modules/use-sidecar/dist/es5/medium.js
var require_medium = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/medium.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createSidecarMedium = exports.createMedium = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    function ItoI(a) {
      return a;
    }
    __name(ItoI, "ItoI");
    function innerCreateMedium(defaults, middleware) {
      if (middleware === void 0) {
        middleware = ItoI;
      }
      var buffer = [];
      var assigned = false;
      var medium = {
        read: function() {
          if (assigned) {
            throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
          }
          if (buffer.length) {
            return buffer[buffer.length - 1];
          }
          return defaults;
        },
        useMedium: function(data) {
          var item = middleware(data, assigned);
          buffer.push(item);
          return function() {
            buffer = buffer.filter(function(x) {
              return x !== item;
            });
          };
        },
        assignSyncMedium: function(cb) {
          assigned = true;
          while (buffer.length) {
            var cbs2 = buffer;
            buffer = [];
            cbs2.forEach(cb);
          }
          buffer = {
            push: function(x) {
              return cb(x);
            },
            filter: function() {
              return buffer;
            }
          };
        },
        assignMedium: function(cb) {
          assigned = true;
          var pendingQueue = [];
          if (buffer.length) {
            var cbs2 = buffer;
            buffer = [];
            cbs2.forEach(cb);
            pendingQueue = buffer;
          }
          var executeQueue = /* @__PURE__ */ __name(function() {
            var cbs3 = pendingQueue;
            pendingQueue = [];
            cbs3.forEach(cb);
          }, "executeQueue");
          var cycle = /* @__PURE__ */ __name(function() {
            return Promise.resolve().then(executeQueue);
          }, "cycle");
          cycle();
          buffer = {
            push: function(x) {
              pendingQueue.push(x);
              cycle();
            },
            filter: function(filter) {
              pendingQueue = pendingQueue.filter(filter);
              return buffer;
            }
          };
        }
      };
      return medium;
    }
    __name(innerCreateMedium, "innerCreateMedium");
    function createMedium(defaults, middleware) {
      if (middleware === void 0) {
        middleware = ItoI;
      }
      return innerCreateMedium(defaults, middleware);
    }
    __name(createMedium, "createMedium");
    exports.createMedium = createMedium;
    function createSidecarMedium(options) {
      if (options === void 0) {
        options = {};
      }
      var medium = innerCreateMedium(null);
      medium.options = tslib_1.__assign({ async: true, ssr: false }, options);
      return medium;
    }
    __name(createSidecarMedium, "createSidecarMedium");
    exports.createSidecarMedium = createSidecarMedium;
  }
});

// ../../node_modules/use-sidecar/dist/es5/renderProp.js
var require_renderProp = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/renderProp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderCar = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React39 = tslib_1.__importStar(require("react"));
    var react_1 = require("react");
    function renderCar(WrappedComponent, defaults) {
      function State(_a) {
        var stateRef = _a.stateRef, props = _a.props;
        var renderTarget = (0, react_1.useCallback)(/* @__PURE__ */ __name(function SideTarget() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          (0, react_1.useLayoutEffect)(function() {
            stateRef.current(args);
          });
          return null;
        }, "SideTarget"), []);
        return React39.createElement(WrappedComponent, tslib_1.__assign({}, props, { children: renderTarget }));
      }
      __name(State, "State");
      var Children5 = React39.memo(function(_a) {
        var stateRef = _a.stateRef, defaultState = _a.defaultState, children = _a.children;
        var _b = (0, react_1.useState)(defaultState.current), state = _b[0], setState = _b[1];
        (0, react_1.useEffect)(function() {
          stateRef.current = setState;
        }, []);
        return children.apply(void 0, state);
      }, function() {
        return true;
      });
      return /* @__PURE__ */ __name(function Combiner(props) {
        var defaultState = React39.useRef(defaults(props));
        var ref = React39.useRef(function(state) {
          return defaultState.current = state;
        });
        return React39.createElement(
          React39.Fragment,
          null,
          React39.createElement(State, { stateRef: ref, props }),
          React39.createElement(Children5, { stateRef: ref, defaultState, children: props.children })
        );
      }, "Combiner");
    }
    __name(renderCar, "renderCar");
    exports.renderCar = renderCar;
  }
});

// ../../node_modules/use-sidecar/dist/es5/exports.js
var require_exports = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/exports.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.exportSidecar = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React39 = tslib_1.__importStar(require("react"));
    var SideCar = /* @__PURE__ */ __name(function(_a) {
      var sideCar = _a.sideCar, rest = tslib_1.__rest(_a, ["sideCar"]);
      if (!sideCar) {
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
      }
      var Target = sideCar.read();
      if (!Target) {
        throw new Error("Sidecar medium not found");
      }
      return React39.createElement(Target, tslib_1.__assign({}, rest));
    }, "SideCar");
    SideCar.isSideCarExport = true;
    function exportSidecar(medium, exported) {
      medium.useMedium(exported);
      return SideCar;
    }
    __name(exportSidecar, "exportSidecar");
    exports.exportSidecar = exportSidecar;
  }
});

// ../../node_modules/use-sidecar/dist/es5/index.js
var require_es53 = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.exportSidecar = exports.renderCar = exports.createSidecarMedium = exports.createMedium = exports.setConfig = exports.useSidecar = exports.sidecar = void 0;
    var hoc_1 = require_hoc();
    Object.defineProperty(exports, "sidecar", { enumerable: true, get: function() {
      return hoc_1.sidecar;
    } });
    var hook_1 = require_hook();
    Object.defineProperty(exports, "useSidecar", { enumerable: true, get: function() {
      return hook_1.useSidecar;
    } });
    var config_1 = require_config();
    Object.defineProperty(exports, "setConfig", { enumerable: true, get: function() {
      return config_1.setConfig;
    } });
    var medium_1 = require_medium();
    Object.defineProperty(exports, "createMedium", { enumerable: true, get: function() {
      return medium_1.createMedium;
    } });
    Object.defineProperty(exports, "createSidecarMedium", { enumerable: true, get: function() {
      return medium_1.createSidecarMedium;
    } });
    var renderProp_1 = require_renderProp();
    Object.defineProperty(exports, "renderCar", { enumerable: true, get: function() {
      return renderProp_1.renderCar;
    } });
    var exports_1 = require_exports();
    Object.defineProperty(exports, "exportSidecar", { enumerable: true, get: function() {
      return exports_1.exportSidecar;
    } });
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/medium.js
var require_medium2 = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/medium.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.effectCar = void 0;
    var use_sidecar_1 = require_es53();
    exports.effectCar = (0, use_sidecar_1.createSidecarMedium)();
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/UI.js
var require_UI = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/UI.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScroll = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React39 = tslib_1.__importStar(require("react"));
    var constants_1 = require_constants();
    var use_callback_ref_1 = require_es52();
    var medium_1 = require_medium2();
    var nothing = /* @__PURE__ */ __name(function() {
      return;
    }, "nothing");
    var RemoveScroll2 = React39.forwardRef(function(props, parentRef) {
      var ref = React39.useRef(null);
      var _a = React39.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
      }), callbacks = _a[0], setCallbacks = _a[1];
      var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = tslib_1.__rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
      var SideCar = sideCar;
      var containerRef = (0, use_callback_ref_1.useMergeRefs)([ref, parentRef]);
      var containerProps = tslib_1.__assign(tslib_1.__assign({}, rest), callbacks);
      return React39.createElement(
        React39.Fragment,
        null,
        enabled && React39.createElement(SideCar, { sideCar: medium_1.effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
        forwardProps ? React39.cloneElement(React39.Children.only(children), tslib_1.__assign(tslib_1.__assign({}, containerProps), { ref: containerRef })) : React39.createElement(Container, tslib_1.__assign({}, containerProps, { className, ref: containerRef }), children)
      );
    });
    exports.RemoveScroll = RemoveScroll2;
    RemoveScroll2.defaultProps = {
      enabled: true,
      removeScrollBar: true,
      inert: false
    };
    RemoveScroll2.classNames = {
      fullWidth: constants_1.fullWidthClassName,
      zeroRight: constants_1.zeroRightClassName
    };
  }
});

// ../../node_modules/get-nonce/dist/es5/index.js
var require_es54 = __commonJS({
  "../../node_modules/get-nonce/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var currentNonce;
    exports.setNonce = function(nonce) {
      currentNonce = nonce;
    };
    exports.getNonce = function() {
      if (currentNonce) {
        return currentNonce;
      }
      if (typeof __webpack_nonce__ !== "undefined") {
        return __webpack_nonce__;
      }
      return void 0;
    };
  }
});

// ../../node_modules/react-style-singleton/dist/es5/singleton.js
var require_singleton = __commonJS({
  "../../node_modules/react-style-singleton/dist/es5/singleton.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stylesheetSingleton = void 0;
    var get_nonce_1 = require_es54();
    function makeStyleTag() {
      if (!document)
        return null;
      var tag = document.createElement("style");
      tag.type = "text/css";
      var nonce = (0, get_nonce_1.getNonce)();
      if (nonce) {
        tag.setAttribute("nonce", nonce);
      }
      return tag;
    }
    __name(makeStyleTag, "makeStyleTag");
    function injectStyles(tag, css) {
      if (tag.styleSheet) {
        tag.styleSheet.cssText = css;
      } else {
        tag.appendChild(document.createTextNode(css));
      }
    }
    __name(injectStyles, "injectStyles");
    function insertStyleTag(tag) {
      var head = document.head || document.getElementsByTagName("head")[0];
      head.appendChild(tag);
    }
    __name(insertStyleTag, "insertStyleTag");
    var stylesheetSingleton = /* @__PURE__ */ __name(function() {
      var counter = 0;
      var stylesheet = null;
      return {
        add: function(style) {
          if (counter == 0) {
            if (stylesheet = makeStyleTag()) {
              injectStyles(stylesheet, style);
              insertStyleTag(stylesheet);
            }
          }
          counter++;
        },
        remove: function() {
          counter--;
          if (!counter && stylesheet) {
            stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
            stylesheet = null;
          }
        }
      };
    }, "stylesheetSingleton");
    exports.stylesheetSingleton = stylesheetSingleton;
  }
});

// ../../node_modules/react-style-singleton/dist/es5/hook.js
var require_hook2 = __commonJS({
  "../../node_modules/react-style-singleton/dist/es5/hook.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.styleHookSingleton = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React39 = tslib_1.__importStar(require("react"));
    var singleton_1 = require_singleton();
    var styleHookSingleton = /* @__PURE__ */ __name(function() {
      var sheet = (0, singleton_1.stylesheetSingleton)();
      return function(styles, isDynamic) {
        React39.useEffect(function() {
          sheet.add(styles);
          return function() {
            sheet.remove();
          };
        }, [styles && isDynamic]);
      };
    }, "styleHookSingleton");
    exports.styleHookSingleton = styleHookSingleton;
  }
});

// ../../node_modules/react-style-singleton/dist/es5/component.js
var require_component = __commonJS({
  "../../node_modules/react-style-singleton/dist/es5/component.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.styleSingleton = void 0;
    var hook_1 = require_hook2();
    var styleSingleton = /* @__PURE__ */ __name(function() {
      var useStyle2 = (0, hook_1.styleHookSingleton)();
      var Sheet2 = /* @__PURE__ */ __name(function(_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle2(styles, dynamic);
        return null;
      }, "Sheet");
      return Sheet2;
    }, "styleSingleton");
    exports.styleSingleton = styleSingleton;
  }
});

// ../../node_modules/react-style-singleton/dist/es5/index.js
var require_es55 = __commonJS({
  "../../node_modules/react-style-singleton/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.styleHookSingleton = exports.stylesheetSingleton = exports.styleSingleton = void 0;
    var component_1 = require_component();
    Object.defineProperty(exports, "styleSingleton", { enumerable: true, get: function() {
      return component_1.styleSingleton;
    } });
    var singleton_1 = require_singleton();
    Object.defineProperty(exports, "stylesheetSingleton", { enumerable: true, get: function() {
      return singleton_1.stylesheetSingleton;
    } });
    var hook_1 = require_hook2();
    Object.defineProperty(exports, "styleHookSingleton", { enumerable: true, get: function() {
      return hook_1.styleHookSingleton;
    } });
  }
});

// ../../node_modules/react-remove-scroll-bar/dist/es5/utils.js
var require_utils = __commonJS({
  "../../node_modules/react-remove-scroll-bar/dist/es5/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGapWidth = exports.zeroGap = void 0;
    exports.zeroGap = {
      left: 0,
      top: 0,
      right: 0,
      gap: 0
    };
    var parse = /* @__PURE__ */ __name(function(x) {
      return parseInt(x || "", 10) || 0;
    }, "parse");
    var getOffset = /* @__PURE__ */ __name(function(gapMode) {
      var cs = window.getComputedStyle(document.body);
      var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
      var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
      var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
      return [parse(left), parse(top), parse(right)];
    }, "getOffset");
    var getGapWidth = /* @__PURE__ */ __name(function(gapMode) {
      if (gapMode === void 0) {
        gapMode = "margin";
      }
      if (typeof window === "undefined") {
        return exports.zeroGap;
      }
      var offsets = getOffset(gapMode);
      var documentWidth = document.documentElement.clientWidth;
      var windowWidth = window.innerWidth;
      return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
      };
    }, "getGapWidth");
    exports.getGapWidth = getGapWidth;
  }
});

// ../../node_modules/react-remove-scroll-bar/dist/es5/component.js
var require_component2 = __commonJS({
  "../../node_modules/react-remove-scroll-bar/dist/es5/component.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScrollBar = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React39 = tslib_1.__importStar(require("react"));
    var react_style_singleton_1 = require_es55();
    var constants_1 = require_constants();
    var utils_1 = require_utils();
    var Style = (0, react_style_singleton_1.styleSingleton)();
    var getStyles = /* @__PURE__ */ __name(function(_a, allowRelative, gapMode, important) {
      var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
      if (gapMode === void 0) {
        gapMode = "margin";
      }
      return "\n  .".concat(constants_1.noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
      ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(constants_1.zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants_1.fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants_1.zeroRightClassName, " .").concat(constants_1.zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(constants_1.fullWidthClassName, " .").concat(constants_1.fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(constants_1.removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
    }, "getStyles");
    var RemoveScrollBar = /* @__PURE__ */ __name(function(props) {
      var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? "margin" : _a;
      var gap = React39.useMemo(function() {
        return (0, utils_1.getGapWidth)(gapMode);
      }, [gapMode]);
      return React39.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
    }, "RemoveScrollBar");
    exports.RemoveScrollBar = RemoveScrollBar;
  }
});

// ../../node_modules/react-remove-scroll-bar/dist/es5/index.js
var require_es56 = __commonJS({
  "../../node_modules/react-remove-scroll-bar/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGapWidth = exports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = exports.RemoveScrollBar = void 0;
    var component_1 = require_component2();
    Object.defineProperty(exports, "RemoveScrollBar", { enumerable: true, get: function() {
      return component_1.RemoveScrollBar;
    } });
    var constants_1 = require_constants();
    Object.defineProperty(exports, "zeroRightClassName", { enumerable: true, get: function() {
      return constants_1.zeroRightClassName;
    } });
    Object.defineProperty(exports, "fullWidthClassName", { enumerable: true, get: function() {
      return constants_1.fullWidthClassName;
    } });
    Object.defineProperty(exports, "noScrollbarsClassName", { enumerable: true, get: function() {
      return constants_1.noScrollbarsClassName;
    } });
    Object.defineProperty(exports, "removedBarSizeVariable", { enumerable: true, get: function() {
      return constants_1.removedBarSizeVariable;
    } });
    var utils_1 = require_utils();
    Object.defineProperty(exports, "getGapWidth", { enumerable: true, get: function() {
      return utils_1.getGapWidth;
    } });
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/aggresiveCapture.js
var require_aggresiveCapture = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/aggresiveCapture.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.nonPassive = void 0;
    var passiveSupported = false;
    if (typeof window !== "undefined") {
      try {
        options = Object.defineProperty({}, "passive", {
          get: function() {
            passiveSupported = true;
            return true;
          }
        });
        window.addEventListener("test", options, options);
        window.removeEventListener("test", options, options);
      } catch (err) {
        passiveSupported = false;
      }
    }
    var options;
    exports.nonPassive = passiveSupported ? { passive: false } : false;
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/handleScroll.js
var require_handleScroll = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/handleScroll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.handleScroll = exports.locationCouldBeScrolled = void 0;
    var alwaysContainsScroll = /* @__PURE__ */ __name(function(node) {
      return node.tagName === "TEXTAREA";
    }, "alwaysContainsScroll");
    var elementCanBeScrolled = /* @__PURE__ */ __name(function(node, overflow) {
      var styles = window.getComputedStyle(node);
      return (
        // not-not-scrollable
        styles[overflow] !== "hidden" && // contains scroll inside self
        !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
      );
    }, "elementCanBeScrolled");
    var elementCouldBeVScrolled = /* @__PURE__ */ __name(function(node) {
      return elementCanBeScrolled(node, "overflowY");
    }, "elementCouldBeVScrolled");
    var elementCouldBeHScrolled = /* @__PURE__ */ __name(function(node) {
      return elementCanBeScrolled(node, "overflowX");
    }, "elementCouldBeHScrolled");
    var locationCouldBeScrolled = /* @__PURE__ */ __name(function(axis, node) {
      var ownerDocument = node.ownerDocument;
      var current = node;
      do {
        if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
          current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
          var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
          if (s > d) {
            return true;
          }
        }
        current = current.parentNode;
      } while (current && current !== ownerDocument.body);
      return false;
    }, "locationCouldBeScrolled");
    exports.locationCouldBeScrolled = locationCouldBeScrolled;
    var getVScrollVariables = /* @__PURE__ */ __name(function(_a) {
      var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
      return [
        scrollTop,
        scrollHeight,
        clientHeight
      ];
    }, "getVScrollVariables");
    var getHScrollVariables = /* @__PURE__ */ __name(function(_a) {
      var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
      return [
        scrollLeft,
        scrollWidth,
        clientWidth
      ];
    }, "getHScrollVariables");
    var elementCouldBeScrolled = /* @__PURE__ */ __name(function(axis, node) {
      return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
    }, "elementCouldBeScrolled");
    var getScrollVariables = /* @__PURE__ */ __name(function(axis, node) {
      return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
    }, "getScrollVariables");
    var getDirectionFactor = /* @__PURE__ */ __name(function(axis, direction) {
      return axis === "h" && direction === "rtl" ? -1 : 1;
    }, "getDirectionFactor");
    var handleScroll = /* @__PURE__ */ __name(function(axis, endTarget, event, sourceDelta, noOverscroll) {
      var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
      var delta = directionFactor * sourceDelta;
      var target = event.target;
      var targetInLock = endTarget.contains(target);
      var shouldCancelScroll = false;
      var isDeltaPositive = delta > 0;
      var availableScroll = 0;
      var availableScrollTop = 0;
      do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
          if (elementCouldBeScrolled(axis, target)) {
            availableScroll += elementScroll;
            availableScrollTop += position;
          }
        }
        target = target.parentNode;
      } while (
        // portaled content
        !targetInLock && target !== document.body || // self content
        targetInLock && (endTarget.contains(target) || endTarget === target)
      );
      if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
        shouldCancelScroll = true;
      } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
        shouldCancelScroll = true;
      }
      return shouldCancelScroll;
    }, "handleScroll");
    exports.handleScroll = handleScroll;
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/SideEffect.js
var require_SideEffect = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/SideEffect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScrollSideCar = exports.getDeltaXY = exports.getTouchXY = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React39 = tslib_1.__importStar(require("react"));
    var react_remove_scroll_bar_1 = require_es56();
    var react_style_singleton_1 = require_es55();
    var aggresiveCapture_1 = require_aggresiveCapture();
    var handleScroll_1 = require_handleScroll();
    var getTouchXY = /* @__PURE__ */ __name(function(event) {
      return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
    }, "getTouchXY");
    exports.getTouchXY = getTouchXY;
    var getDeltaXY = /* @__PURE__ */ __name(function(event) {
      return [event.deltaX, event.deltaY];
    }, "getDeltaXY");
    exports.getDeltaXY = getDeltaXY;
    var extractRef = /* @__PURE__ */ __name(function(ref) {
      return ref && "current" in ref ? ref.current : ref;
    }, "extractRef");
    var deltaCompare = /* @__PURE__ */ __name(function(x, y) {
      return x[0] === y[0] && x[1] === y[1];
    }, "deltaCompare");
    var generateStyle = /* @__PURE__ */ __name(function(id) {
      return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
    }, "generateStyle");
    var idCounter = 0;
    var lockStack = [];
    function RemoveScrollSideCar(props) {
      var shouldPreventQueue = React39.useRef([]);
      var touchStartRef = React39.useRef([0, 0]);
      var activeAxis = React39.useRef();
      var id = React39.useState(idCounter++)[0];
      var Style = React39.useState(react_style_singleton_1.styleSingleton)[0];
      var lastProps = React39.useRef(props);
      React39.useEffect(function() {
        lastProps.current = props;
      }, [props]);
      React39.useEffect(function() {
        if (props.inert) {
          document.body.classList.add("block-interactivity-".concat(id));
          var allow_1 = tslib_1.__spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
          allow_1.forEach(function(el) {
            return el.classList.add("allow-interactivity-".concat(id));
          });
          return function() {
            document.body.classList.remove("block-interactivity-".concat(id));
            allow_1.forEach(function(el) {
              return el.classList.remove("allow-interactivity-".concat(id));
            });
          };
        }
        return;
      }, [props.inert, props.lockRef.current, props.shards]);
      var shouldCancelEvent = React39.useCallback(function(event, parent) {
        if ("touches" in event && event.touches.length === 2) {
          return !lastProps.current.allowPinchZoom;
        }
        var touch = (0, exports.getTouchXY)(event);
        var touchStart = touchStartRef.current;
        var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
        if ("touches" in event && moveDirection === "h" && target.type === "range") {
          return false;
        }
        var canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
          return true;
        }
        if (canBeScrolledInMainDirection) {
          currentAxis = moveDirection;
        } else {
          currentAxis = moveDirection === "v" ? "h" : "v";
          canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
        }
        if (!canBeScrolledInMainDirection) {
          return false;
        }
        if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
          activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
          return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return (0, handleScroll_1.handleScroll)(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
      }, []);
      var shouldPrevent = React39.useCallback(function(_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
          return;
        }
        var delta = "deltaY" in event ? (0, exports.getDeltaXY)(event) : (0, exports.getTouchXY)(event);
        var sourceEvent = shouldPreventQueue.current.filter(function(e) {
          return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
        })[0];
        if (sourceEvent && sourceEvent.should) {
          if (event.cancelable) {
            event.preventDefault();
          }
          return;
        }
        if (!sourceEvent) {
          var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
            return node.contains(event.target);
          });
          var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
          if (shouldStop) {
            if (event.cancelable) {
              event.preventDefault();
            }
          }
        }
      }, []);
      var shouldCancel = React39.useCallback(function(name, delta, target, should) {
        var event = { name, delta, target, should };
        shouldPreventQueue.current.push(event);
        setTimeout(function() {
          shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
            return e !== event;
          });
        }, 1);
      }, []);
      var scrollTouchStart = React39.useCallback(function(event) {
        touchStartRef.current = (0, exports.getTouchXY)(event);
        activeAxis.current = void 0;
      }, []);
      var scrollWheel = React39.useCallback(function(event) {
        shouldCancel(event.type, (0, exports.getDeltaXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
      }, []);
      var scrollTouchMove = React39.useCallback(function(event) {
        shouldCancel(event.type, (0, exports.getTouchXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
      }, []);
      React39.useEffect(function() {
        lockStack.push(Style);
        props.setCallbacks({
          onScrollCapture: scrollWheel,
          onWheelCapture: scrollWheel,
          onTouchMoveCapture: scrollTouchMove
        });
        document.addEventListener("wheel", shouldPrevent, aggresiveCapture_1.nonPassive);
        document.addEventListener("touchmove", shouldPrevent, aggresiveCapture_1.nonPassive);
        document.addEventListener("touchstart", scrollTouchStart, aggresiveCapture_1.nonPassive);
        return function() {
          lockStack = lockStack.filter(function(inst) {
            return inst !== Style;
          });
          document.removeEventListener("wheel", shouldPrevent, aggresiveCapture_1.nonPassive);
          document.removeEventListener("touchmove", shouldPrevent, aggresiveCapture_1.nonPassive);
          document.removeEventListener("touchstart", scrollTouchStart, aggresiveCapture_1.nonPassive);
        };
      }, []);
      var removeScrollBar = props.removeScrollBar, inert = props.inert;
      return React39.createElement(
        React39.Fragment,
        null,
        inert ? React39.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? React39.createElement(react_remove_scroll_bar_1.RemoveScrollBar, { gapMode: props.gapMode }) : null
      );
    }
    __name(RemoveScrollSideCar, "RemoveScrollSideCar");
    exports.RemoveScrollSideCar = RemoveScrollSideCar;
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/sidecar.js
var require_sidecar = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/sidecar.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var use_sidecar_1 = require_es53();
    var SideEffect_1 = require_SideEffect();
    var medium_1 = require_medium2();
    exports.default = (0, use_sidecar_1.exportSidecar)(medium_1.effectCar, SideEffect_1.RemoveScrollSideCar);
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/Combination.js
var require_Combination = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/Combination.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React39 = tslib_1.__importStar(require("react"));
    var UI_1 = require_UI();
    var sidecar_1 = tslib_1.__importDefault(require_sidecar());
    var ReactRemoveScroll = React39.forwardRef(function(props, ref) {
      return React39.createElement(UI_1.RemoveScroll, tslib_1.__assign({}, props, { ref, sideCar: sidecar_1.default }));
    });
    ReactRemoveScroll.classNames = UI_1.RemoveScroll.classNames;
    exports.default = ReactRemoveScroll;
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/index.js
var require_es57 = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScroll = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var Combination_1 = tslib_1.__importDefault(require_Combination());
    exports.RemoveScroll = Combination_1.default;
  }
});

// ../../node_modules/@tamagui/image/dist/cjs/Image.js
var require_Image = __commonJS({
  "../../node_modules/@tamagui/image/dist/cjs/Image.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Image_exports = {};
    __export2(Image_exports, {
      Image: () => Image2
    });
    module2.exports = __toCommonJS2(Image_exports);
    var import_core55 = require("@tamagui/core");
    var import_react44 = require("react");
    var import_react_native15 = require("react-native-web-lite");
    var import_jsx_runtime51 = require("react/jsx-runtime");
    (0, import_core55.setupReactNative)({
      Image: import_react_native15.Image
    });
    var StyledImage = (0, import_core55.styled)(import_react_native15.Image, {
      name: "Image",
      position: "relative",
      source: { uri: "" }
    });
    var hasWarned = false;
    var Image2 = StyledImage.extractable(
      (0, import_react44.forwardRef)((inProps, ref) => {
        const props = (0, import_core55.useProps)(inProps), { src, source, ...rest } = props;
        process.env.NODE_ENV === "development" && typeof src == "string" && (typeof props.width == "string" && props.width[0] !== "$" || typeof props.height == "string" && props.height[0] !== "$") && (hasWarned || (hasWarned = true, console.warn(
          'React Native expects a numerical width/height. If you want to use a percent you must define the "source" prop with width, height, and uri.'
        )));
        const finalSource = typeof src == "string" ? { uri: src, ...import_core55.isWeb && { width: props.width, height: props.height } } : source ?? src;
        return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(StyledImage, { ref, source: finalSource, ...rest });
      })
    );
    Image2.getSize = import_react_native15.Image.getSize;
    Image2.getSizeWithHeaders = import_react_native15.Image.getSizeWithHeaders;
    Image2.prefetch = import_react_native15.Image.prefetch;
    Image2.prefetchWithMetadata = import_react_native15.Image.prefetchWithMetadata;
    Image2.abortPrefetch = import_react_native15.Image.abortPrefetch;
    Image2.queryCache = import_react_native15.Image.queryCache;
  }
});

// ../../node_modules/@tamagui/image/dist/cjs/index.js
var require_cjs19 = __commonJS({
  "../../node_modules/@tamagui/image/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Image(), module2.exports);
  }
});

// ../../node_modules/@tamagui/font-size/dist/cjs/getFontSize.js
var require_getFontSize = __commonJS({
  "../../node_modules/@tamagui/font-size/dist/cjs/getFontSize.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var getFontSize_exports = {};
    __export2(getFontSize_exports, {
      getFontSize: () => getFontSize4,
      getFontSizeToken: () => getFontSizeToken,
      getFontSizeVariable: () => getFontSizeVariable
    });
    module2.exports = __toCommonJS2(getFontSize_exports);
    var import_core55 = require("@tamagui/core");
    var getFontSize4 = /* @__PURE__ */ __name((inSize, opts) => {
      const res = getFontSizeVariable(inSize, opts);
      return (0, import_core55.isVariable)(res) ? +res.val : res ? +res : 16;
    }, "getFontSize");
    var getFontSizeVariable = /* @__PURE__ */ __name((inSize, opts) => {
      const token = getFontSizeToken(inSize, opts);
      return token ? (0, import_core55.getConfig)().fontsParsed[(opts == null ? void 0 : opts.font) || "$body"].size[token] : inSize;
    }, "getFontSizeVariable");
    var getFontSizeToken = /* @__PURE__ */ __name((inSize, opts) => {
      if (typeof inSize == "number")
        return null;
      const relativeSize = (opts == null ? void 0 : opts.relativeSize) || 0, fontSize = (0, import_core55.getConfig)().fontsParsed[(opts == null ? void 0 : opts.font) || "$body"].size, size2 = inSize || ("$true" in fontSize ? "$true" : "$4"), sizeTokens = Object.keys(fontSize);
      let foundIndex = sizeTokens.indexOf(size2);
      foundIndex === -1 && size2.endsWith(".5") && (foundIndex = sizeTokens.indexOf(size2.replace(".5", ""))), process.env.NODE_ENV === "development" && foundIndex === -1 && console.warn("No font size found", size2, opts, "in size tokens", sizeTokens);
      const tokenIndex = Math.min(
        Math.max(0, foundIndex + relativeSize),
        sizeTokens.length - 1
      );
      return sizeTokens[tokenIndex] ?? size2;
    }, "getFontSizeToken");
  }
});

// ../../node_modules/@tamagui/font-size/dist/cjs/index.js
var require_cjs20 = __commonJS({
  "../../node_modules/@tamagui/font-size/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_getFontSize(), module2.exports);
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/clamp.js
var require_clamp = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/clamp.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var clamp_exports = {};
    __export2(clamp_exports, {
      clamp: () => clamp3
    });
    module2.exports = __toCommonJS2(clamp_exports);
    function clamp3(value, [min2, max2]) {
      return Math.min(max2, Math.max(min2, value));
    }
    __name(clamp3, "clamp");
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/composeEventHandlers.js
var require_composeEventHandlers = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/composeEventHandlers.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var composeEventHandlers_exports = {};
    __export2(composeEventHandlers_exports, {
      composeEventHandlers: () => composeEventHandlers15
    });
    module2.exports = __toCommonJS2(composeEventHandlers_exports);
    function composeEventHandlers15(og, next, { checkDefaultPrevented = true } = {}) {
      return !og || !next ? next || og || void 0 : function(event) {
        if (og == null || og(event), !event || !(checkDefaultPrevented && "defaultPrevented" in event) || // @ts-ignore
        "defaultPrevented" in event && !event.defaultPrevented)
          return next == null ? void 0 : next(event);
      };
    }
    __name(composeEventHandlers15, "composeEventHandlers");
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/concatClassName.js
var require_concatClassName = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/concatClassName.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var concatClassName_exports = {};
    __export2(concatClassName_exports, {
      concatClassName: () => concatClassName
    });
    module2.exports = __toCommonJS2(concatClassName_exports);
    function concatClassName(_cn) {
      const args = arguments, usedPrefixes = [];
      let final = "";
      const len = args.length;
      let propObjects = null;
      for (let x = len; x >= 0; x--) {
        const cns = args[x];
        if (!cns)
          continue;
        if (!Array.isArray(cns) && typeof cns != "string") {
          propObjects = propObjects || [], propObjects.push(cns);
          continue;
        }
        const names = Array.isArray(cns) ? cns : cns.split(" "), numNames = names.length;
        for (let i = numNames - 1; i >= 0; i--) {
          const name = names[i];
          if (!name || name === " ")
            continue;
          if (name[0] !== "_") {
            final = name + " " + final;
            continue;
          }
          const splitIndex = name.indexOf("-");
          if (splitIndex < 1) {
            final = name + " " + final;
            continue;
          }
          const isMediaQuery = name[splitIndex + 1] === "_", styleKey = name.slice(1, name.lastIndexOf("-")), mediaKey = isMediaQuery ? name.slice(splitIndex + 2, splitIndex + 7) : null, uid = mediaKey ? styleKey + mediaKey : styleKey;
          if (usedPrefixes.indexOf(uid) > -1)
            continue;
          usedPrefixes.push(uid);
          const propName = styleKey;
          propName && propObjects && propObjects.some((po) => {
            if (mediaKey) {
              const propKey = pseudoInvert[mediaKey];
              return po && po[propKey] && propName in po[propKey] && po[propKey] !== null;
            }
            return po && propName in po && po[propName] !== null;
          }) || (final = name + " " + final);
        }
      }
      return final;
    }
    __name(concatClassName, "concatClassName");
    var pseudoInvert = {
      hover: "hoverStyle",
      focus: "focusStyle",
      press: "pressStyle"
    };
  }
});

// ../../node_modules/@tamagui/constants/dist/cjs/index.js
var require_cjs21 = __commonJS({
  "../../node_modules/@tamagui/constants/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      currentPlatform: () => currentPlatform,
      isAndroid: () => isAndroid3,
      isChrome: () => isChrome3,
      isClient: () => isClient7,
      isIos: () => isIos,
      isServer: () => isServer2,
      isTouchable: () => isTouchable3,
      isWeb: () => isWeb30,
      isWebTouchable: () => isWebTouchable4,
      isWindowDefined: () => isWindowDefined2,
      useIsomorphicLayoutEffect: () => useIsomorphicLayoutEffect15
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_react44 = require("react");
    var isWeb30 = true;
    var isWindowDefined2 = typeof window < "u";
    var isServer2 = isWeb30 && !isWindowDefined2;
    var isClient7 = isWeb30 && isWindowDefined2;
    var useIsomorphicLayoutEffect15 = isServer2 ? import_react44.useEffect : import_react44.useLayoutEffect;
    var isChrome3 = typeof navigator < "u" && /Chrome/.test(navigator.userAgent || "");
    var isWebTouchable4 = isClient7 && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    var isTouchable3 = !isWeb30 || isWebTouchable4;
    var isAndroid3 = false;
    var isIos = false;
    var currentPlatform = "web";
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/validStyleProps.js
var require_validStyleProps = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/validStyleProps.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var validStyleProps_exports = {};
    __export2(validStyleProps_exports, {
      stylePropsAll: () => stylePropsAll,
      stylePropsFont: () => stylePropsFont2,
      stylePropsText: () => stylePropsText2,
      stylePropsTextOnly: () => stylePropsTextOnly2,
      stylePropsTransform: () => stylePropsTransform2,
      stylePropsUnitless: () => stylePropsUnitless2,
      stylePropsView: () => stylePropsView2,
      tokenCategories: () => tokenCategories2,
      validPseudoKeys: () => validPseudoKeys2,
      validStyles: () => validStyles2,
      validStylesOnBaseProps: () => validStylesOnBaseProps2
    });
    module2.exports = __toCommonJS2(validStyleProps_exports);
    var import_constants13 = require_cjs21();
    var placeHolderTextColors2 = {
      placeholderTextColor: true
    };
    var validStylesOnBaseProps2 = {
      ...placeHolderTextColors2
    };
    var textColors2 = {
      color: true,
      ...placeHolderTextColors2,
      textDecorationColor: true,
      textShadowColor: true
    };
    var tokenCategories2 = {
      radius: {
        borderRadius: true,
        borderTopLeftRadius: true,
        borderTopRightRadius: true,
        borderBottomLeftRadius: true,
        borderBottomRightRadius: true
      },
      size: {
        width: true,
        height: true,
        minWidth: true,
        minHeight: true,
        maxWidth: true,
        maxHeight: true
      },
      zIndex: {
        zIndex: true
      },
      color: {
        backgroundColor: true,
        borderColor: true,
        borderBottomColor: true,
        borderTopColor: true,
        borderLeftColor: true,
        borderRightColor: true,
        borderEndColor: true,
        borderStartColor: true,
        shadowColor: true,
        ...textColors2,
        outlineColor: true
      }
    };
    var stylePropsUnitless2 = {
      WebkitLineClamp: true,
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      columnCount: true,
      flex: true,
      flexGrow: true,
      flexOrder: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      fontWeight: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowGap: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnGap: true,
      gridColumnStart: true,
      lineClamp: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      scale: true,
      scaleX: true,
      scaleY: true,
      scaleZ: true,
      shadowOpacity: true
    };
    var stylePropsTransform2 = {
      x: true,
      y: true,
      scale: true,
      perspective: true,
      scaleX: true,
      scaleY: true,
      skewX: true,
      skewY: true,
      matrix: true,
      rotate: true,
      rotateY: true,
      rotateX: true,
      rotateZ: true
    };
    var stylePropsView2 = {
      backfaceVisibility: true,
      borderBottomEndRadius: true,
      borderBottomStartRadius: true,
      borderBottomWidth: true,
      borderLeftWidth: true,
      borderRightWidth: true,
      borderStyle: true,
      borderTopEndRadius: true,
      borderTopStartRadius: true,
      borderTopWidth: true,
      borderWidth: true,
      transform: true,
      alignContent: true,
      alignItems: true,
      alignSelf: true,
      borderEndWidth: true,
      borderStartWidth: true,
      bottom: true,
      display: true,
      end: true,
      flexBasis: true,
      flexDirection: true,
      flexWrap: true,
      gap: true,
      columnGap: true,
      rowGap: true,
      justifyContent: true,
      left: true,
      margin: true,
      marginBottom: true,
      marginEnd: true,
      marginHorizontal: true,
      marginLeft: true,
      marginRight: true,
      marginStart: true,
      marginTop: true,
      marginVertical: true,
      overflow: true,
      padding: true,
      paddingBottom: true,
      paddingEnd: true,
      paddingHorizontal: true,
      paddingLeft: true,
      paddingRight: true,
      paddingStart: true,
      paddingTop: true,
      paddingVertical: true,
      position: true,
      right: true,
      start: true,
      top: true,
      direction: true,
      shadowOffset: true,
      shadowRadius: true,
      ...tokenCategories2.color,
      ...tokenCategories2.radius,
      ...tokenCategories2.size,
      ...tokenCategories2.radius,
      ...validStylesOnBaseProps2,
      ...stylePropsTransform2,
      ...stylePropsUnitless2,
      // RN doesn't support specific border styles per-edge
      borderBottomStyle: true,
      borderTopStyle: true,
      borderLeftStyle: true,
      borderRightStyle: true,
      overflowX: true,
      overflowY: true,
      userSelect: true,
      cursor: true,
      contain: true,
      pointerEvents: true,
      boxSizing: true,
      boxShadow: true,
      outlineStyle: true,
      outlineOffset: true,
      outlineWidth: true,
      ...import_constants13.isAndroid ? { elevationAndroid: true } : {}
    };
    var stylePropsFont2 = {
      fontFamily: true,
      fontSize: true,
      fontStyle: true,
      fontWeight: true,
      letterSpacing: true,
      lineHeight: true,
      textTransform: true
    };
    var stylePropsTextOnly2 = {
      ...stylePropsFont2,
      textAlign: true,
      textDecorationLine: true,
      textDecorationStyle: true,
      ...textColors2,
      textShadowOffset: true,
      textShadowRadius: true,
      whiteSpace: true,
      wordWrap: true,
      textOverflow: true,
      textDecorationDistance: true,
      userSelect: true,
      selectable: true,
      cursor: true,
      WebkitLineClamp: true,
      WebkitBoxOrient: true
    };
    var stylePropsText2 = {
      ...stylePropsView2,
      ...stylePropsTextOnly2
    };
    var stylePropsAll = stylePropsText2;
    var validPseudoKeys2 = {
      enterStyle: true,
      exitStyle: true,
      hoverStyle: true,
      pressStyle: true,
      focusStyle: true
    };
    var validStyles2 = {
      ...validPseudoKeys2,
      ...stylePropsView2
    };
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/types.js
var require_types3 = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/types.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var types_exports = {};
    module2.exports = __toCommonJS2(types_exports);
  }
});

// ../../node_modules/@tamagui/simple-hash/dist/cjs/index.js
var require_cjs22 = __commonJS({
  "../../node_modules/@tamagui/simple-hash/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      simpleHash: () => simpleHash
    });
    module2.exports = __toCommonJS2(src_exports);
    var cache = /* @__PURE__ */ new Map();
    var simpleHash = /* @__PURE__ */ __name((str, hashMin = 10) => {
      if (cache.has(str))
        return cache.get(str);
      let hash = 0, valids = "";
      const len = str.length;
      for (let i = 0; i < len; i++) {
        const char = str.charCodeAt(i);
        if (hashMin !== "strict" && (char === 46 && (valids += "d0t"), isValidCSSCharCode(char) && len <= hashMin)) {
          valids += str[i];
          continue;
        }
        hash = hashChar(hash, str[i]);
      }
      const res = valids + (hash ? Math.abs(hash) : "");
      return cache.size > 1e4 && cache.clear(), cache.set(str, res), res;
    }, "simpleHash");
    var hashChar = /* @__PURE__ */ __name((hash, c) => Math.imul(31, hash) + c.charCodeAt(0) | 0, "hashChar");
    function isValidCSSCharCode(code) {
      return (
        // A-Z
        code >= 65 && code <= 90 || // a-z
        code >= 97 && code <= 122 || // _
        code === 95 || // -
        code === 45 || // 0-9
        code >= 48 && code <= 57
      );
    }
    __name(isValidCSSCharCode, "isValidCSSCharCode");
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/index.js
var require_cjs23 = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_clamp(), module2.exports);
    __reExport2(src_exports, require_composeEventHandlers(), module2.exports);
    __reExport2(src_exports, require_concatClassName(), module2.exports);
    __reExport2(src_exports, require_validStyleProps(), module2.exports);
    __reExport2(src_exports, require_types3(), module2.exports);
    __reExport2(src_exports, require_cjs22(), module2.exports);
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/prevent.js
var require_prevent = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/prevent.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var prevent_exports = {};
    __export2(prevent_exports, {
      prevent: () => prevent
    });
    module2.exports = __toCommonJS2(prevent_exports);
    var prevent = /* @__PURE__ */ __name((e) => [e.preventDefault(), e.stopPropagation()], "prevent");
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/useCurrentColor.js
var require_useCurrentColor = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/useCurrentColor.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useCurrentColor_exports = {};
    __export2(useCurrentColor_exports, {
      useCurrentColor: () => useCurrentColor
    });
    module2.exports = __toCommonJS2(useCurrentColor_exports);
    var import_web16 = require("@tamagui/core");
    var useCurrentColor = /* @__PURE__ */ __name((colorProp) => {
      const theme = (0, import_web16.useTheme)();
      return (0, import_web16.getVariable)(colorProp || theme[colorProp] || theme.color);
    }, "useCurrentColor");
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/useGetThemedIcon.js
var require_useGetThemedIcon = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/useGetThemedIcon.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useGetThemedIcon_exports = {};
    __export2(useGetThemedIcon_exports, {
      useGetThemedIcon: () => useGetThemedIcon4
    });
    module2.exports = __toCommonJS2(useGetThemedIcon_exports);
    var import_react44 = require("react");
    var import_useCurrentColor = require_useCurrentColor();
    var useGetThemedIcon4 = /* @__PURE__ */ __name((props) => {
      const color = (0, import_useCurrentColor.useCurrentColor)(props.color);
      return (el) => el && ((0, import_react44.isValidElement)(el) ? (0, import_react44.cloneElement)(el, {
        ...props,
        color,
        // @ts-expect-error
        ...el.props
      }) : (0, import_react44.createElement)(el, props));
    }, "useGetThemedIcon");
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/index.js
var require_cjs24 = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_cjs23(), module2.exports);
    __reExport2(src_exports, require_prevent(), module2.exports);
    __reExport2(src_exports, require_useCurrentColor(), module2.exports);
    __reExport2(src_exports, require_useGetThemedIcon(), module2.exports);
  }
});

// ../../node_modules/@tamagui/focusable/dist/cjs/registerFocusable.js
var require_registerFocusable = __commonJS({
  "../../node_modules/@tamagui/focusable/dist/cjs/registerFocusable.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var registerFocusable_exports = {};
    __export2(registerFocusable_exports, {
      focusFocusable: () => focusFocusable2,
      registerFocusable: () => registerFocusable3,
      unregisterFocusable: () => unregisterFocusable
    });
    module2.exports = __toCommonJS2(registerFocusable_exports);
    var registerFocusable3 = /* @__PURE__ */ __name((id, input) => () => {
    }, "registerFocusable");
    var unregisterFocusable = /* @__PURE__ */ __name((id) => {
    }, "unregisterFocusable");
    var focusFocusable2 = /* @__PURE__ */ __name((id) => {
    }, "focusFocusable");
  }
});

// ../../node_modules/@tamagui/focusable/dist/cjs/focusableInputHOC.js
var require_focusableInputHOC = __commonJS({
  "../../node_modules/@tamagui/focusable/dist/cjs/focusableInputHOC.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var focusableInputHOC_exports = {};
    __export2(focusableInputHOC_exports, {
      focusableInputHOC: () => focusableInputHOC,
      useFocusable: () => useFocusable2
    });
    module2.exports = __toCommonJS2(focusableInputHOC_exports);
    var import_compose_refs17 = require_cjs8();
    var import_web16 = require("@tamagui/core");
    var import_react44 = require("react");
    var import_registerFocusable = require_registerFocusable();
    var import_jsx_runtime51 = require("react/jsx-runtime");
    function useFocusable2({
      isInput,
      props,
      ref
    }) {
      const { id, onChangeText, value, defaultValue: defaultValue2 } = props, inputValue = (0, import_react44.useRef)(value || defaultValue2 || ""), unregisterFocusable = (0, import_react44.useRef)(), inputRef = (0, import_react44.useCallback)(
        (input) => {
          var _a;
          id && input && ((_a = unregisterFocusable.current) == null || _a.call(unregisterFocusable), unregisterFocusable.current = (0, import_registerFocusable.registerFocusable)(id, {
            focus: input.focus,
            ...isInput && {
              // react-native doesn't support programmatic .select()
              focusAndSelect() {
                input.focus(), input.setSelection && typeof inputValue.current == "string" && input.setSelection(0, inputValue.current.length);
              }
            }
          }));
        },
        [isInput, id]
      ), combinedRefs = (0, import_compose_refs17.composeRefs)(ref, inputRef);
      return (0, import_react44.useEffect)(() => () => {
        var _a;
        (_a = unregisterFocusable.current) == null || _a.call(unregisterFocusable);
      }, []), {
        ref: combinedRefs,
        onChangeText: (0, import_web16.useEvent)((value2) => {
          inputValue.current = value2, onChangeText == null || onChangeText(value2);
        })
      };
    }
    __name(useFocusable2, "useFocusable");
    function focusableInputHOC(Component) {
      return Component.styleable((props, ref) => {
        var _a;
        const isInput = (_a = Component.staticConfig) == null ? void 0 : _a.isInput, { ref: combinedRef, onChangeText } = useFocusable2({
          ref,
          props,
          isInput
        }), finalProps = isInput ? {
          ...props,
          onChangeText
        } : props;
        return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Component, { ref: combinedRef, ...finalProps });
      });
    }
    __name(focusableInputHOC, "focusableInputHOC");
  }
});

// ../../node_modules/@tamagui/focusable/dist/cjs/focusable.js
var require_focusable = __commonJS({
  "../../node_modules/@tamagui/focusable/dist/cjs/focusable.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var focusable_exports = {};
    module2.exports = __toCommonJS2(focusable_exports);
  }
});

// ../../node_modules/@tamagui/focusable/dist/cjs/index.js
var require_cjs25 = __commonJS({
  "../../node_modules/@tamagui/focusable/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_registerFocusable(), module2.exports);
    __reExport2(src_exports, require_focusableInputHOC(), module2.exports);
    __reExport2(src_exports, require_focusable(), module2.exports);
  }
});

// ../../node_modules/performant-array-to-tree/build/arrayToTree.min.js
var require_arrayToTree_min = __commonJS({
  "../../node_modules/performant-array-to-tree/build/arrayToTree.min.js"(exports) {
    "use strict";
    var __assign2 = exports && exports.__assign || function() {
      return (__assign2 = Object.assign || function(e) {
        for (var r, t = 1, n = arguments.length; t < n; t++)
          for (var o in r = arguments[t])
            Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
        return e;
      }).apply(this, arguments);
    };
    var defaultConfig = (Object.defineProperty(exports, "__esModule", { value: true }), { id: "id", parentId: "parentId", dataField: "data", childrenField: "children", throwIfOrphans: false, rootParentIds: { "": !(exports.countNodes = exports.arrayToTree = void 0) }, nestedIds: true, assign: false });
    function arrayToTree(c, e) {
      void 0 === e && (e = {});
      for (var r, t = __assign2(__assign2({}, defaultConfig), e), n = [], o = {}, a = t.throwIfOrphans ? /* @__PURE__ */ new Set() : null, s = 0, h = c; s < h.length; s++) {
        var i = h[s], d = t.nestedIds ? getNestedProperty(i, t.id) : i[t.id], l = t.nestedIds ? getNestedProperty(i, t.parentId) : i[t.parentId];
        if (t.rootParentIds[d])
          throw new Error("The item array contains a node whose parentId both exists in another node and is in " + '`rootParentIds` (`itemId`: "'.concat(d, '", `rootParentIds`: ').concat(Object.keys(t.rootParentIds).map(function(e2) {
            return '"'.concat(e2, '"');
          }).join(", "), ")."));
        Object.prototype.hasOwnProperty.call(o, d) || (o[d] = ((r = {})[t.childrenField] = [], r)), a && a.delete(d), t.dataField ? o[d][t.dataField] = i : t.assign ? o[d] = Object.assign(i, ((r = {})[t.childrenField] = o[d][t.childrenField], r)) : o[d] = __assign2(__assign2({}, i), ((i = {})[t.childrenField] = o[d][t.childrenField], i));
        i = o[d];
        null == l || t.rootParentIds[l] ? n.push(i) : (Object.prototype.hasOwnProperty.call(o, l) || (o[l] = ((d = {})[t.childrenField] = [], d), a && a.add(l)), o[l][t.childrenField].push(i));
      }
      if (null != a && a.size)
        throw new Error("The items array contains orphans that point to the following parentIds: " + "[".concat(Array.from(a), "]. These parentIds do not exist in the items array. Hint: prevent orphans to result ") + "in an error by passing the following option: { throwIfOrphans: false }");
      if (t.throwIfOrphans && countNodes(n, t.childrenField) < Object.keys(o).length)
        throw new Error("The items array contains nodes with a circular parent/child relationship.");
      return n;
    }
    __name(arrayToTree, "arrayToTree");
    function countNodes(e, t) {
      return e.reduce(function(e2, r) {
        return e2 + 1 + (r[t] && countNodes(r[t], t));
      }, 0);
    }
    __name(countNodes, "countNodes");
    function getNestedProperty(e, r) {
      return r.split(".").reduce(function(e2, r2) {
        return e2 && e2[r2];
      }, e);
    }
    __name(getNestedProperty, "getNestedProperty");
    exports.arrayToTree = arrayToTree, exports.countNodes = countNodes;
  }
});

// ../../node_modules/zustand/esm/vanilla.mjs
var import_meta, createStoreImpl, createStore;
var init_vanilla = __esm({
  "../../node_modules/zustand/esm/vanilla.mjs"() {
    import_meta = {};
    createStoreImpl = /* @__PURE__ */ __name((createState) => {
      let state;
      const listeners = /* @__PURE__ */ new Set();
      const setState = /* @__PURE__ */ __name((partial, replace) => {
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
          const previousState = state;
          state = (replace != null ? replace : typeof nextState !== "object") ? nextState : Object.assign({}, state, nextState);
          listeners.forEach((listener) => listener(state, previousState));
        }
      }, "setState");
      const getState5 = /* @__PURE__ */ __name(() => state, "getState");
      const subscribe2 = /* @__PURE__ */ __name((listener) => {
        listeners.add(listener);
        return () => listeners.delete(listener);
      }, "subscribe");
      const destroy = /* @__PURE__ */ __name(() => {
        if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
          console.warn(
            "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
          );
        }
        listeners.clear();
      }, "destroy");
      const api = { setState, getState: getState5, subscribe: subscribe2, destroy };
      state = createState(setState, getState5, api);
      return api;
    }, "createStoreImpl");
    createStore = /* @__PURE__ */ __name((createState) => createState ? createStoreImpl(createState) : createStoreImpl, "createStore");
  }
});

// ../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js
var require_use_sync_external_store_shim_production_min = __commonJS({
  "../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js"(exports) {
    "use strict";
    var e = require("react");
    function h(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    __name(h, "h");
    var k = "function" === typeof Object.is ? Object.is : h;
    var l = e.useState;
    var m = e.useEffect;
    var n = e.useLayoutEffect;
    var p = e.useDebugValue;
    function q(a, b) {
      var d = b(), f = l({ inst: { value: d, getSnapshot: b } }), c = f[0].inst, g = f[1];
      n(function() {
        c.value = d;
        c.getSnapshot = b;
        r(c) && g({ inst: c });
      }, [a, d, b]);
      m(function() {
        r(c) && g({ inst: c });
        return a(function() {
          r(c) && g({ inst: c });
        });
      }, [a]);
      p(d);
      return d;
    }
    __name(q, "q");
    function r(a) {
      var b = a.getSnapshot;
      a = a.value;
      try {
        var d = b();
        return !k(a, d);
      } catch (f) {
        return true;
      }
    }
    __name(r, "r");
    function t(a, b) {
      return b();
    }
    __name(t, "t");
    var u = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t : q;
    exports.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : u;
  }
});

// ../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React39 = require("react");
        var ReactSharedInternals = React39.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        __name(error, "error");
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        __name(printWarning, "printWarning");
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        __name(is, "is");
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useState26 = React39.useState, useEffect33 = React39.useEffect, useLayoutEffect5 = React39.useLayoutEffect, useDebugValue2 = React39.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore2(subscribe2, getSnapshot, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React39.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
              }
            }
          }
          var value = getSnapshot();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot();
              if (!objectIs(value, cachedValue)) {
                error("The result of getSnapshot should be cached to avoid an infinite loop");
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState26({
            inst: {
              value,
              getSnapshot
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect5(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          }, [subscribe2, value, getSnapshot]);
          useEffect33(function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
            var handleStoreChange = /* @__PURE__ */ __name(function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            }, "handleStoreChange");
            return subscribe2(handleStoreChange);
          }, [subscribe2]);
          useDebugValue2(value);
          return value;
        }
        __name(useSyncExternalStore2, "useSyncExternalStore");
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        __name(checkIfSnapshotChanged, "checkIfSnapshotChanged");
        function useSyncExternalStore$1(subscribe2, getSnapshot, getServerSnapshot) {
          return getSnapshot();
        }
        __name(useSyncExternalStore$1, "useSyncExternalStore$1");
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore2;
        var useSyncExternalStore$2 = React39.useSyncExternalStore !== void 0 ? React39.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// ../../node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "../../node_modules/use-sync-external-store/shim/index.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_use_sync_external_store_shim_production_min();
    } else {
      module2.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// ../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js
var require_with_selector_production_min = __commonJS({
  "../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js"(exports) {
    "use strict";
    var h = require("react");
    var n = require_shim();
    function p(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    __name(p, "p");
    var q = "function" === typeof Object.is ? Object.is : p;
    var r = n.useSyncExternalStore;
    var t = h.useRef;
    var u = h.useEffect;
    var v = h.useMemo;
    var w = h.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(a, b, e, l, g) {
      var c = t(null);
      if (null === c.current) {
        var f = { hasValue: false, value: null };
        c.current = f;
      } else
        f = c.current;
      c = v(function() {
        function a2(a3) {
          if (!c2) {
            c2 = true;
            d2 = a3;
            a3 = l(a3);
            if (void 0 !== g && f.hasValue) {
              var b2 = f.value;
              if (g(b2, a3))
                return k = b2;
            }
            return k = a3;
          }
          b2 = k;
          if (q(d2, a3))
            return b2;
          var e2 = l(a3);
          if (void 0 !== g && g(b2, e2))
            return b2;
          d2 = a3;
          return k = e2;
        }
        __name(a2, "a");
        var c2 = false, d2, k, m = void 0 === e ? null : e;
        return [function() {
          return a2(b());
        }, null === m ? void 0 : function() {
          return a2(m());
        }];
      }, [b, e, l, g]);
      var d = r(a, c[0], c[1]);
      u(function() {
        f.hasValue = true;
        f.value = d;
      }, [d]);
      w(d);
      return d;
    };
  }
});

// ../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React39 = require("react");
        var shim = require_shim();
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        __name(is, "is");
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useSyncExternalStore2 = shim.useSyncExternalStore;
        var useRef30 = React39.useRef, useEffect33 = React39.useEffect, useMemo21 = React39.useMemo, useDebugValue2 = React39.useDebugValue;
        function useSyncExternalStoreWithSelector2(subscribe2, getSnapshot, getServerSnapshot, selector, isEqual) {
          var instRef = useRef30(null);
          var inst;
          if (instRef.current === null) {
            inst = {
              hasValue: false,
              value: null
            };
            instRef.current = inst;
          } else {
            inst = instRef.current;
          }
          var _useMemo = useMemo21(function() {
            var hasMemo = false;
            var memoizedSnapshot;
            var memoizedSelection;
            var memoizedSelector = /* @__PURE__ */ __name(function(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                var _nextSelection = selector(nextSnapshot);
                if (isEqual !== void 0) {
                  if (inst.hasValue) {
                    var currentSelection = inst.value;
                    if (isEqual(currentSelection, _nextSelection)) {
                      memoizedSelection = currentSelection;
                      return currentSelection;
                    }
                  }
                }
                memoizedSelection = _nextSelection;
                return _nextSelection;
              }
              var prevSnapshot = memoizedSnapshot;
              var prevSelection = memoizedSelection;
              if (objectIs(prevSnapshot, nextSnapshot)) {
                return prevSelection;
              }
              var nextSelection = selector(nextSnapshot);
              if (isEqual !== void 0 && isEqual(prevSelection, nextSelection)) {
                return prevSelection;
              }
              memoizedSnapshot = nextSnapshot;
              memoizedSelection = nextSelection;
              return nextSelection;
            }, "memoizedSelector");
            var maybeGetServerSnapshot = getServerSnapshot === void 0 ? null : getServerSnapshot;
            var getSnapshotWithSelector = /* @__PURE__ */ __name(function() {
              return memoizedSelector(getSnapshot());
            }, "getSnapshotWithSelector");
            var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? void 0 : function() {
              return memoizedSelector(maybeGetServerSnapshot());
            };
            return [getSnapshotWithSelector, getServerSnapshotWithSelector];
          }, [getSnapshot, getServerSnapshot, selector, isEqual]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];
          var value = useSyncExternalStore2(subscribe2, getSelection, getServerSelection);
          useEffect33(function() {
            inst.hasValue = true;
            inst.value = value;
          }, [value]);
          useDebugValue2(value);
          return value;
        }
        __name(useSyncExternalStoreWithSelector2, "useSyncExternalStoreWithSelector");
        exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// ../../node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "../../node_modules/use-sync-external-store/shim/with-selector.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_with_selector_production_min();
    } else {
      module2.exports = require_with_selector_development();
    }
  }
});

// ../../node_modules/zustand/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  create: () => create,
  createStore: () => createStore,
  default: () => react,
  useStore: () => useStore
});
function useStore(api, selector = api.getState, equalityFn) {
  if (process.env.NODE_ENV !== "production" && equalityFn && !didWarnAboutEqualityFn) {
    console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    );
    didWarnAboutEqualityFn = true;
  }
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  );
  (0, import_react27.useDebugValue)(slice);
  return slice;
}
var import_react27, import_with_selector, useSyncExternalStoreWithSelector, didWarnAboutEqualityFn, createImpl, create, react;
var init_esm = __esm({
  "../../node_modules/zustand/esm/index.js"() {
    init_vanilla();
    init_vanilla();
    import_react27 = require("react");
    import_with_selector = __toESM(require_with_selector());
    ({ useSyncExternalStoreWithSelector } = import_with_selector.default);
    didWarnAboutEqualityFn = false;
    __name(useStore, "useStore");
    createImpl = /* @__PURE__ */ __name((createState) => {
      if (process.env.NODE_ENV !== "production" && typeof createState !== "function") {
        console.warn(
          "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
        );
      }
      const api = typeof createState === "function" ? createStore(createState) : createState;
      const useBoundStore = /* @__PURE__ */ __name((selector, equalityFn) => useStore(api, selector, equalityFn), "useBoundStore");
      Object.assign(useBoundStore, api);
      return useBoundStore;
    }, "createImpl");
    create = /* @__PURE__ */ __name((createState) => createState ? createImpl(createState) : createImpl, "create");
    react = /* @__PURE__ */ __name((createState) => {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          "[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."
        );
      }
      return create(createState);
    }, "react");
  }
});

// ../../node_modules/reforest/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/reforest/dist/index.js"(exports, module2) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      cleanAndSortTree: () => cleanAndSortTree,
      compareIndexPaths: () => compareIndexPaths,
      flattenChildren: () => flattenChildren,
      mapToChildren: () => mapToChildren,
      parseIndexPath: () => parseIndexPath,
      sortMapByIndexPath: () => sortMapByIndexPath,
      useIndex: () => useIndex,
      useIndexedChildren: () => useIndexedChildren,
      usePrerender: () => usePrerender,
      useRovingIndex: () => useRovingIndex,
      useTree: () => useTree,
      useTreeId: () => useTreeId,
      useTreeNode: () => useTreeNode,
      useTreeState: () => useTreeState
    });
    module2.exports = __toCommonJS2(src_exports);
    var React39 = __toESM2(require("react"));
    var React40 = __toESM2(require("react"));
    var PrerenderContext = React40.createContext(false);
    PrerenderContext.displayName = "PrerenderContext";
    var MaxIndexContext = React40.createContext([]);
    MaxIndexContext.displayName = "MaxIndexContext";
    var IndexContext = React40.createContext(null);
    IndexContext.displayName = "IndexContext";
    var TreeStateContext = React40.createContext(null);
    TreeStateContext.displayName = "TreeStateContext";
    var React210 = __toESM2(require("react"));
    var import_performant_array_to_tree = require_arrayToTree_min();
    var isServer2 = typeof window === "undefined";
    var useIsomorphicLayoutEffect15 = isServer2 ? React210.useEffect : React210.useLayoutEffect;
    function parseIndexPath(indexPathString) {
      return indexPathString.split(".").map((index3) => parseInt(index3, 10));
    }
    __name(parseIndexPath, "parseIndexPath");
    function compareIndexPaths(a = "", b = "") {
      var _a, _b;
      let aArray = a.split(".").map(Number);
      let bArray = b.split(".").map(Number);
      if (aArray.includes(NaN) || bArray.includes(NaN)) {
        throw new Error("Version contains parts that are not numbers");
      }
      const maxLength = Math.max(a.length, b.length);
      for (let index3 = 0; index3 < maxLength; index3++) {
        const difference = ((_a = aArray[index3]) != null ? _a : 0) - ((_b = bArray[index3]) != null ? _b : 0);
        if (difference === 0) {
          continue;
        }
        return difference > 0 ? 1 : -1;
      }
      return 0;
    }
    __name(compareIndexPaths, "compareIndexPaths");
    function cleanAndSortTree(tree) {
      var _a;
      if (((_a = tree.children) == null ? void 0 : _a.length) > 0) {
        tree.children.sort((a, b) => compareIndexPaths(a.indexPathString, b.indexPathString));
        return {
          ...tree.data,
          children: tree.children.map(cleanAndSortTree)
        };
      }
      return tree.data;
    }
    __name(cleanAndSortTree, "cleanAndSortTree");
    function mapToChildren(dataMap) {
      const parsedValues = Array.from(dataMap.entries()).map(([indexPathString, data]) => {
        const parentIndexPathString = parseIndexPath(indexPathString).slice(0, -1).join(".");
        return {
          data,
          parentId: parentIndexPathString,
          id: indexPathString
        };
      });
      const tree = (0, import_performant_array_to_tree.arrayToTree)(parsedValues, { dataField: null });
      const cleanedTree = cleanAndSortTree({ children: tree });
      return cleanedTree ? cleanedTree.children : [];
    }
    __name(mapToChildren, "mapToChildren");
    function sortMapByIndexPath(treeMap) {
      const sortedEntries = Array.from(treeMap.entries()).sort((a, b) => compareIndexPaths(a[0], b[0]));
      return new Map(sortedEntries);
    }
    __name(sortMapByIndexPath, "sortMapByIndexPath");
    function flattenChildren(children) {
      const flatChildren = children.flatMap(
        (child) => child.children ? flattenChildren(child.children) : [child]
      );
      return flatChildren;
    }
    __name(flattenChildren, "flattenChildren");
    function useIndex() {
      const maxIndexPath = React39.useContext(MaxIndexContext);
      const indexPathString = React39.useContext(IndexContext);
      return React39.useMemo(() => {
        if (indexPathString === null) {
          return null;
        }
        const indexPath = parseIndexPath(indexPathString);
        const maxIndex = maxIndexPath[maxIndexPath.length - 1];
        const index3 = indexPath[indexPath.length - 1];
        return {
          maxIndex,
          maxIndexPath,
          index: index3,
          indexPath,
          indexPathString,
          isFirst: index3 === 0,
          isLast: index3 === maxIndex,
          isEven: index3 % 2 === 0,
          isOdd: Math.abs(index3 % 2) === 1
        };
      }, [maxIndexPath, indexPathString]);
    }
    __name(useIndex, "useIndex");
    function useIndexedChildren(children) {
      const parentMaxIndexPath = React39.useContext(MaxIndexContext);
      const indexPathString = React39.useContext(IndexContext);
      const childrenCount = React39.Children.count(children);
      const maxIndexPath = React39.useMemo(
        () => parentMaxIndexPath.concat(childrenCount - 1),
        [childrenCount]
      );
      return /* @__PURE__ */ React39.createElement(MaxIndexContext.Provider, { value: maxIndexPath }, React39.Children.map(
        children,
        (child, index3) => React39.isValidElement(child) ? /* @__PURE__ */ React39.createElement(
          IndexContext.Provider,
          {
            key: child.key,
            value: indexPathString ? `${indexPathString}.${index3.toString()}` : index3.toString()
          },
          child
        ) : child
      ));
    }
    __name(useIndexedChildren, "useIndexedChildren");
    var React42 = __toESM2(require("react"));
    function useRovingIndex({
      contain = true,
      defaultIndex = 0,
      maxIndex = Infinity,
      wrap = false
    }) {
      const [activeIndex, setLocalActiveIndex] = React42.useState(defaultIndex);
      const getNextIndex = React42.useCallback(
        (nextIndex) => {
          if (wrap) {
            return (nextIndex % maxIndex + maxIndex) % maxIndex;
          }
          if (contain) {
            return nextIndex > maxIndex ? maxIndex : nextIndex < 0 ? 0 : nextIndex;
          }
          return nextIndex;
        },
        [maxIndex, wrap]
      );
      const moveActiveIndex = React42.useCallback(
        (amountToMove) => {
          setLocalActiveIndex((currentIndex) => getNextIndex(currentIndex + amountToMove));
        },
        [getNextIndex]
      );
      const setActiveIndex = React42.useCallback(
        (nextIndex) => {
          setLocalActiveIndex(getNextIndex(nextIndex));
        },
        [getNextIndex]
      );
      const moveBackward = React42.useCallback(() => moveActiveIndex(-1), [moveActiveIndex]);
      const moveForward = React42.useCallback(() => moveActiveIndex(1), [moveActiveIndex]);
      return {
        activeIndex,
        moveActiveIndex,
        setActiveIndex,
        moveBackward,
        moveForward,
        moveBackwardDisabled: activeIndex <= 0,
        moveForwardDisabled: activeIndex >= maxIndex
      };
    }
    __name(useRovingIndex, "useRovingIndex");
    var React52 = __toESM2(require("react"));
    var import_zustand = (init_esm(), __toCommonJS(esm_exports));
    function useTreeState(selector) {
      const treeStateContext = React52.useContext(TreeStateContext);
      const [treeState] = React52.useState(
        () => treeStateContext || (0, import_zustand.create)((set, get) => ({
          treeMap: /* @__PURE__ */ new Map(),
          prerenderedTreeIds: /* @__PURE__ */ new Map(),
          shouldPrerender: true,
          setTreeData: (id, data) => {
            const { treeMap } = get();
            treeMap.set(id, data);
            set({ treeMap: sortMapByIndexPath(treeMap) });
          },
          deleteTreeData: (id) => {
            const { treeMap } = get();
            treeMap.delete(id);
            set({ treeMap: sortMapByIndexPath(treeMap) });
          }
        }))
      );
      return selector ? treeState(selector) : treeState;
    }
    __name(useTreeState, "useTreeState");
    function PrerenderTree({ children }) {
      const treeState = useTreeState();
      const shouldPrerender = treeState((state) => state.shouldPrerender);
      useIsomorphicLayoutEffect15(() => {
        treeState.setState({
          prerenderedTreeIds: /* @__PURE__ */ new Map(),
          shouldPrerender: false
        });
      }, []);
      return shouldPrerender ? /* @__PURE__ */ React52.createElement(PrerenderContext.Provider, { value: true }, children) : null;
    }
    __name(PrerenderTree, "PrerenderTree");
    function usePrerender() {
      const isPrerender = React52.useContext(PrerenderContext);
      if (isPrerender === null) {
        throw new Error("usePrerender must be used in a descendant component of useTree.");
      }
      return isPrerender;
    }
    __name(usePrerender, "usePrerender");
    function useTree(children, treeState) {
      const treeStateContext = React52.useContext(TreeStateContext);
      const treeStateLocal = useTreeState();
      const parsedTreeState = treeStateContext || treeState || treeStateLocal;
      const isPrerender = React52.useContext(PrerenderContext);
      const isRoot = treeStateContext === null;
      const indexedChildren = useIndexedChildren(children);
      const childrenToRender = isRoot ? /* @__PURE__ */ React52.createElement(TreeStateContext.Provider, { value: parsedTreeState }, /* @__PURE__ */ React52.createElement(PrerenderTree, null, indexedChildren), indexedChildren) : indexedChildren;
      return {
        children: childrenToRender,
        useStore: parsedTreeState,
        isPrerender,
        isRoot
      };
    }
    __name(useTree, "useTree");
    function useTreeId() {
      const treeStateContext = React52.useContext(TreeStateContext);
      if (treeStateContext === null) {
        throw new Error("useTreeId must be used in a descendant component of useTree.");
      }
      const { prerenderedTreeIds } = treeStateContext.getState();
      const { indexPathString } = useIndex();
      const generatedId = React52.useId().slice(1, -1);
      const treeId = prerenderedTreeIds.get(indexPathString) || generatedId;
      return treeId;
    }
    __name(useTreeId, "useTreeId");
    function useTreeNode(treeId, getData, dependencies = []) {
      const isPrerender = React52.useContext(PrerenderContext);
      const treeStateContext = React52.useContext(TreeStateContext);
      if (treeStateContext === null) {
        throw new Error("useTreeNode must be used in a descendant component of useTree.");
      }
      const { deleteTreeData, prerenderedTreeIds, setTreeData, treeMap } = treeStateContext.getState();
      const { indexPathString } = useIndex();
      const treeData = React52.useMemo(
        () => Object.assign({ treeId }, getData()),
        dependencies.concat(treeId)
      );
      if (isPrerender) {
        treeMap.set(indexPathString, treeData);
        prerenderedTreeIds.set(indexPathString, treeId);
      } else {
        React52.useEffect(() => {
          setTreeData(indexPathString, treeData);
          return () => {
            deleteTreeData(indexPathString);
          };
        }, [indexPathString, treeData]);
      }
      return treeData;
    }
    __name(useTreeNode, "useTreeNode");
  }
});

// ../../node_modules/@tamagui/group/dist/cjs/Group.js
var require_Group = __commonJS({
  "../../node_modules/@tamagui/group/dist/cjs/Group.js"(exports, module2) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Group_exports = {};
    __export2(Group_exports, {
      Group: () => Group3,
      GroupFrame: () => GroupFrame,
      XGroup: () => XGroup,
      YGroup: () => YGroup,
      useGroupItem: () => useGroupItem3
    });
    module2.exports = __toCommonJS2(Group_exports);
    var import_core55 = require("@tamagui/core");
    var import_create_context16 = require_cjs4();
    var import_stacks25 = require_cjs12();
    var import_use_controllable_state15 = require_cjs6();
    var import_react44 = __toESM2(require("react"));
    var import_react_native15 = require("react-native-web-lite");
    var import_reforest = require_dist();
    var import_jsx_runtime51 = require("react/jsx-runtime");
    var GROUP_NAME3 = "Group";
    var [createGroupContext, createGroupScope] = (0, import_create_context16.createContextScope)(GROUP_NAME3);
    var [GroupProvider, useGroupContext] = createGroupContext(GROUP_NAME3);
    var GroupFrame = (0, import_core55.styled)(import_stacks25.ThemeableStack, {
      name: "GroupFrame",
      variants: {
        unstyled: {
          false: {
            size: "$true",
            y: 0
          }
        },
        size: (val, { tokens }) => ({
          borderRadius: tokens.radius[val] ?? val ?? tokens.radius.$true
        })
      },
      defaultVariants: {
        unstyled: false
      }
    });
    function createGroup(verticalDefault) {
      return (0, import_core55.withStaticProperties)(
        (0, import_react44.forwardRef)((props, ref) => {
          const activeProps = (0, import_core55.useProps)(props), {
            __scopeGroup,
            children: childrenProp,
            space,
            size: size2 = "$true",
            spaceDirection,
            separator,
            scrollable,
            axis = verticalDefault ? "vertical" : "horizontal",
            orientation = axis,
            disabled: disabledProp,
            disablePassBorderRadius: disablePassBorderRadiusProp,
            borderRadius,
            forceUseItem,
            ...restProps
          } = (0, import_core55.getExpandedShorthands)(activeProps), vertical = orientation === "vertical", [itemChildrenCount, setItemChildrenCount] = (0, import_use_controllable_state15.useControllableState)({
            defaultProp: forceUseItem ? 1 : 0
          }), isUsingItems = itemChildrenCount > 0, radius = borderRadius ?? (size2 ? (0, import_core55.getVariableValue)((0, import_core55.getTokens)().radius[size2]) - 1 : void 0), disablePassBorderRadius = disablePassBorderRadiusProp ?? !(radius !== void 0), childrenArray = import_react44.Children.toArray(childrenProp), children = isUsingItems ? import_react44.Children.toArray(childrenProp).filter(import_react44.isValidElement) : childrenArray.map((child, i) => {
            if (!(0, import_react44.isValidElement)(child))
              return child;
            const disabled = child.props.disabled ?? disabledProp, isFirst = i === 0, isLast = i === childrenArray.length - 1, radiusStyles = disablePassBorderRadius === true ? null : getBorderRadius({
              isFirst,
              isLast,
              radius,
              vertical,
              disable: disablePassBorderRadius
            }), props2 = {
              disabled,
              ...(0, import_core55.isTamaguiElement)(child) ? radiusStyles : { style: radiusStyles }
            };
            return cloneElementWithPropOrder(child, props2);
          }), indexedChildren = (0, import_reforest.useIndexedChildren)(
            (0, import_core55.spacedChildren)({
              direction: spaceDirection,
              separator,
              // @ts-ignore
              space,
              children
            })
          ), onItemMount = import_react44.default.useCallback(
            () => setItemChildrenCount((prev) => prev + 1),
            []
          ), onItemUnmount = import_react44.default.useCallback(
            () => setItemChildrenCount((prev) => prev - 1),
            []
          );
          return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
            GroupProvider,
            {
              disablePassBorderRadius,
              vertical: orientation === "vertical",
              radius,
              disabled: disabledProp,
              onItemMount,
              onItemUnmount,
              scope: __scopeGroup,
              children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                GroupFrame,
                {
                  ref,
                  size: size2,
                  flexDirection: orientation === "horizontal" ? "row" : "column",
                  borderRadius,
                  ...restProps,
                  children: wrapScroll({ ...activeProps, orientation }, indexedChildren)
                }
              )
            }
          );
        }),
        {
          Item: GroupItem
        }
      );
    }
    __name(createGroup, "createGroup");
    var GroupItem = /* @__PURE__ */ __name((props) => {
      var _a;
      const { __scopeGroup, children, forcePlacement } = props, groupItemProps = useGroupItem3(
        { disabled: (0, import_react44.isValidElement)(children) ? children.props.disabled : void 0 },
        forcePlacement,
        __scopeGroup
      );
      return (0, import_react44.isValidElement)(children) ? (0, import_core55.isTamaguiElement)(children) ? import_react44.default.cloneElement(children, groupItemProps) : import_react44.default.cloneElement(children, {
        style: {
          ...(_a = children.props) == null ? void 0 : _a.style,
          ...groupItemProps
        }
      }) : children;
    }, "GroupItem");
    var useGroupItem3 = /* @__PURE__ */ __name((childrenProps, forcePlacement, __scopeGroup) => {
      const treeIndex = (0, import_reforest.useIndex)(), context = useGroupContext("GroupItem", __scopeGroup);
      if (import_react44.default.useEffect(() => (context.onItemMount(), () => {
        context.onItemUnmount();
      }), []), !treeIndex)
        throw Error("<Group.Item/> should only be used within a <Group/>");
      const isFirst = forcePlacement === "first" || forcePlacement !== "last" && treeIndex.index === 0, isLast = forcePlacement === "last" || forcePlacement !== "first" && treeIndex.index === treeIndex.maxIndex;
      let propsToPass = {
        disabled: childrenProps.disabled ?? context.disabled
      };
      if (context.disablePassBorderRadius !== true) {
        const borderRadius = getBorderRadius({
          radius: context.radius,
          isFirst,
          isLast,
          vertical: context.vertical,
          disable: context.disablePassBorderRadius
        });
        return { ...propsToPass, ...borderRadius };
      }
      return propsToPass;
    }, "useGroupItem");
    var Group3 = createGroup(true);
    var YGroup = Group3;
    var XGroup = createGroup(false);
    var wrapScroll = /* @__PURE__ */ __name(({ scrollable, orientation, showScrollIndicator = false }, children) => scrollable ? /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
      import_react_native15.ScrollView,
      {
        ...orientation === "vertical" && {
          showsVerticalScrollIndicator: showScrollIndicator
        },
        ...orientation === "horizontal" && {
          horizontal: true,
          showsHorizontalScrollIndicator: showScrollIndicator
        },
        children
      }
    ) : children, "wrapScroll");
    var getBorderRadius = /* @__PURE__ */ __name(({
      isFirst,
      isLast,
      radius,
      vertical,
      disable
    }) => ({
      borderTopLeftRadius: isFirst && disable !== "top" && disable !== "start" ? radius : 0,
      borderTopRightRadius: disable !== "top" && disable !== "end" && (vertical && isFirst || !vertical && isLast) ? radius : 0,
      borderBottomLeftRadius: disable !== "bottom" && disable !== "start" && (vertical && isLast || !vertical && isFirst) ? radius : 0,
      borderBottomRightRadius: isLast && disable !== "bottom" && disable !== "end" ? radius : 0
    }), "getBorderRadius");
    var cloneElementWithPropOrder = /* @__PURE__ */ __name((child, props) => {
      const next = (0, import_core55.mergeProps)(child.props, props, (0, import_core55.getConfig)().shorthands);
      return import_react44.default.cloneElement({ ...child, props: null }, next);
    }, "cloneElementWithPropOrder");
  }
});

// ../../node_modules/@tamagui/group/dist/cjs/index.js
var require_cjs26 = __commonJS({
  "../../node_modules/@tamagui/group/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Group(), module2.exports);
  }
});

// ../../node_modules/@tamagui/list-item/dist/cjs/ListItem.js
var require_ListItem = __commonJS({
  "../../node_modules/@tamagui/list-item/dist/cjs/ListItem.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var ListItem_exports = {};
    __export2(ListItem_exports, {
      ListItem: () => ListItem22,
      ListItemFrame: () => ListItemFrame,
      ListItemSubtitle: () => ListItemSubtitle,
      ListItemText: () => ListItemText,
      ListItemTitle: () => ListItemTitle,
      listItemStaticConfig: () => listItemStaticConfig,
      listItemVariants: () => listItemVariants,
      useListItem: () => useListItem
    });
    module2.exports = __toCommonJS2(ListItem_exports);
    var import_font_size4 = require_cjs20();
    var import_get_font_sized4 = require_cjs13();
    var import_get_token13 = require_cjs10();
    var import_helpers_tamagui4 = require_cjs24();
    var import_stacks25 = require_cjs12();
    var import_text7 = require_cjs14();
    var import_web16 = require("@tamagui/core");
    var import_jsx_runtime51 = require("react/jsx-runtime");
    var NAME3 = "ListItem";
    var listItemVariants = {
      unstyled: {
        false: {
          size: "$true",
          alignItems: "center",
          flexWrap: "nowrap",
          width: "100%",
          borderColor: "$borderColor",
          maxWidth: "100%",
          overflow: "hidden",
          flexDirection: "row",
          backgroundColor: "$background"
        }
      },
      size: {
        "...size": (val, { tokens }) => ({
          minHeight: tokens.size[val],
          paddingHorizontal: tokens.space[val],
          paddingVertical: (0, import_get_token13.getSpace)(tokens.space[val], {
            shift: -4
          })
        })
      },
      active: {
        true: {
          hoverStyle: {
            backgroundColor: "$background"
          }
        }
      },
      disabled: {
        true: {
          opacity: 0.5,
          // TODO breaking types
          pointerEvents: "none"
        }
      }
    };
    var ListItemFrame = (0, import_web16.styled)(import_stacks25.ThemeableStack, {
      name: NAME3,
      tag: "li",
      variants: listItemVariants,
      defaultVariants: {
        unstyled: false
      }
    });
    var ListItemText = (0, import_web16.styled)(import_text7.SizableText, {
      name: "ListItemText",
      variants: {
        unstyled: {
          false: {
            color: "$color",
            size: "$true",
            flexGrow: 1,
            flexShrink: 1,
            ellipse: true,
            cursor: "default"
          }
        }
      },
      defaultVariants: {
        unstyled: false
      }
    });
    var ListItemSubtitle = (0, import_web16.styled)(ListItemText, {
      name: "ListItemSubtitle",
      variants: {
        unstyled: {
          false: {
            opacity: 0.6,
            maxWidth: "100%",
            color: "$color"
          }
        },
        size: {
          "...size": (val, extras) => {
            const oneSmaller = (0, import_get_token13.getSize)(val, {
              shift: -1,
              excludeHalfSteps: true
            });
            return (0, import_get_font_sized4.getFontSized)(oneSmaller.key, extras);
          }
        }
      },
      defaultVariants: {
        unstyled: false
      }
    });
    var ListItemTitle = (0, import_web16.styled)(ListItemText, {
      name: "ListItemTitle"
    });
    var useListItem = /* @__PURE__ */ __name((propsIn, {
      Text: Text5 = ListItemText,
      Subtitle = ListItemSubtitle,
      Title = ListItemTitle
    } = { Text: ListItemText, Subtitle: ListItemSubtitle, Title: ListItemTitle }) => {
      const props = (0, import_web16.useProps)(propsIn), {
        children,
        icon,
        iconAfter,
        noTextWrap,
        theme: themeName,
        space,
        spaceFlex,
        scaleIcon = 1,
        scaleSpace = 1,
        unstyled = false,
        subTitle,
        title,
        // text props
        color,
        fontWeight,
        fontSize,
        fontFamily,
        letterSpacing,
        textAlign,
        ellipse,
        ...rest
      } = props, textProps = {
        color,
        fontWeight,
        fontSize,
        fontFamily,
        letterSpacing,
        textAlign,
        ellipse,
        children
      }, size2 = props.size || "$true", iconSize = (0, import_font_size4.getFontSize)(size2) * scaleIcon, getThemedIcon = (0, import_helpers_tamagui4.useGetThemedIcon)({ size: iconSize, color }), [themedIcon, themedIconAfter] = [icon, iconAfter].map(getThemedIcon), spaceSize = (0, import_web16.getVariableValue)((0, import_web16.getTokens)().space[props.space] ?? iconSize) * scaleSpace, contents = (0, import_text7.wrapChildrenInText)(Text5, textProps);
      return {
        props: {
          ...rest,
          children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(import_jsx_runtime51.Fragment, { children: [
            themedIcon ? /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(import_jsx_runtime51.Fragment, { children: [
              themedIcon,
              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_web16.Spacer, { size: spaceSize })
            ] }) : null,
            title || subTitle ? /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(import_stacks25.YStack, { flex: 1, children: [
              noTextWrap === "all" ? title : /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Title, { size: size2, children: title }),
              subTitle ? /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_jsx_runtime51.Fragment, { children: typeof subTitle == "string" && noTextWrap !== "all" ? (
                // TODO can use theme but we need to standardize to alt themes
                // or standardize on subtle colors in themes
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Subtitle, { unstyled, size: size2, children: subTitle })
              ) : subTitle }) : null,
              contents
            ] }) : contents,
            themedIconAfter ? /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(import_jsx_runtime51.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_web16.Spacer, { size: spaceSize }),
              themedIconAfter
            ] }) : null
          ] })
        }
      };
    }, "useListItem");
    var ListItemComponent = ListItemFrame.styleable(function(props, ref) {
      const { props: listItemProps } = useListItem(props);
      return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(ListItemFrame, { ref, justifyContent: "space-between", ...listItemProps });
    });
    var listItemStaticConfig = {
      inlineProps: /* @__PURE__ */ new Set([
        // text props go here (can't really optimize them, but we never fully extract listItem anyway)
        "color",
        "fontWeight",
        "fontSize",
        "fontFamily",
        "letterSpacing",
        "textAlign",
        "ellipse"
      ])
    };
    var ListItem22 = (0, import_web16.withStaticProperties)(ListItemComponent, {
      Text: ListItemText,
      Subtitle: ListItemSubtitle
    });
  }
});

// ../../node_modules/@tamagui/list-item/dist/cjs/index.js
var require_cjs27 = __commonJS({
  "../../node_modules/@tamagui/list-item/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_ListItem(), module2.exports);
  }
});

// ../../node_modules/react-freeze/dist/index.js
var require_dist2 = __commonJS({
  "../../node_modules/react-freeze/dist/index.js"(exports) {
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    __name(_interopDefault, "_interopDefault");
    var React39 = require("react");
    var React__default = _interopDefault(React39);
    function Suspender(_ref) {
      var freeze = _ref.freeze, children = _ref.children;
      var promiseCache = React39.useRef({}).current;
      if (freeze && !promiseCache.promise) {
        promiseCache.promise = new Promise(function(resolve) {
          promiseCache.resolve = resolve;
        });
        throw promiseCache.promise;
      } else if (freeze) {
        throw promiseCache.promise;
      } else if (promiseCache.promise) {
        promiseCache.resolve();
        promiseCache.promise = void 0;
      }
      return React__default.createElement(React39.Fragment, null, children);
    }
    __name(Suspender, "Suspender");
    function Freeze2(_ref2) {
      var freeze = _ref2.freeze, children = _ref2.children, _ref2$placeholder = _ref2.placeholder, placeholder = _ref2$placeholder === void 0 ? null : _ref2$placeholder;
      return React__default.createElement(React39.Suspense, {
        fallback: placeholder
      }, React__default.createElement(Suspender, {
        freeze
      }, children));
    }
    __name(Freeze2, "Freeze");
    exports.Freeze = Freeze2;
  }
});

// ../../node_modules/tabbable/dist/index.js
var require_dist3 = __commonJS({
  "../../node_modules/tabbable/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
    var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
    var NoElement = typeof Element === "undefined";
    var matches = NoElement ? function() {
    } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
      var _element$getRootNode;
      return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
    } : function(element) {
      return element === null || element === void 0 ? void 0 : element.ownerDocument;
    };
    var isInert = /* @__PURE__ */ __name(function isInert2(node, lookUp) {
      var _node$getAttribute;
      if (lookUp === void 0) {
        lookUp = true;
      }
      var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
      var inert = inertAtt === "" || inertAtt === "true";
      var result = inert || lookUp && node && isInert2(node.parentNode);
      return result;
    }, "isInert");
    var isContentEditable = /* @__PURE__ */ __name(function isContentEditable2(node) {
      var _node$getAttribute2;
      var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
      return attValue === "" || attValue === "true";
    }, "isContentEditable");
    var getCandidates = /* @__PURE__ */ __name(function getCandidates2(el, includeContainer, filter) {
      if (isInert(el)) {
        return [];
      }
      var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
      if (includeContainer && matches.call(el, candidateSelector)) {
        candidates.unshift(el);
      }
      candidates = candidates.filter(filter);
      return candidates;
    }, "getCandidates");
    var getCandidatesIteratively = /* @__PURE__ */ __name(function getCandidatesIteratively2(elements, includeContainer, options) {
      var candidates = [];
      var elementsToCheck = Array.from(elements);
      while (elementsToCheck.length) {
        var element = elementsToCheck.shift();
        if (isInert(element, false)) {
          continue;
        }
        if (element.tagName === "SLOT") {
          var assigned = element.assignedElements();
          var content = assigned.length ? assigned : element.children;
          var nestedCandidates = getCandidatesIteratively2(content, true, options);
          if (options.flatten) {
            candidates.push.apply(candidates, nestedCandidates);
          } else {
            candidates.push({
              scopeParent: element,
              candidates: nestedCandidates
            });
          }
        } else {
          var validCandidate = matches.call(element, candidateSelector);
          if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
            candidates.push(element);
          }
          var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
          typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
          var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
          if (shadowRoot && validShadowRoot) {
            var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element.children : shadowRoot.children, true, options);
            if (options.flatten) {
              candidates.push.apply(candidates, _nestedCandidates);
            } else {
              candidates.push({
                scopeParent: element,
                candidates: _nestedCandidates
              });
            }
          } else {
            elementsToCheck.unshift.apply(elementsToCheck, element.children);
          }
        }
      }
      return candidates;
    }, "getCandidatesIteratively");
    var hasTabIndex = /* @__PURE__ */ __name(function hasTabIndex2(node) {
      return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
    }, "hasTabIndex");
    var getTabIndex = /* @__PURE__ */ __name(function getTabIndex2(node) {
      if (!node) {
        throw new Error("No node provided");
      }
      if (node.tabIndex < 0) {
        if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
          return 0;
        }
      }
      return node.tabIndex;
    }, "getTabIndex");
    var getSortOrderTabIndex = /* @__PURE__ */ __name(function getSortOrderTabIndex2(node, isScope) {
      var tabIndex = getTabIndex(node);
      if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
        return 0;
      }
      return tabIndex;
    }, "getSortOrderTabIndex");
    var sortOrderedTabbables = /* @__PURE__ */ __name(function sortOrderedTabbables2(a, b) {
      return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
    }, "sortOrderedTabbables");
    var isInput = /* @__PURE__ */ __name(function isInput2(node) {
      return node.tagName === "INPUT";
    }, "isInput");
    var isHiddenInput = /* @__PURE__ */ __name(function isHiddenInput2(node) {
      return isInput(node) && node.type === "hidden";
    }, "isHiddenInput");
    var isDetailsWithSummary = /* @__PURE__ */ __name(function isDetailsWithSummary2(node) {
      var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
        return child.tagName === "SUMMARY";
      });
      return r;
    }, "isDetailsWithSummary");
    var getCheckedRadio = /* @__PURE__ */ __name(function getCheckedRadio2(nodes, form) {
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].checked && nodes[i].form === form) {
          return nodes[i];
        }
      }
    }, "getCheckedRadio");
    var isTabbableRadio = /* @__PURE__ */ __name(function isTabbableRadio2(node) {
      if (!node.name) {
        return true;
      }
      var radioScope = node.form || getRootNode(node);
      var queryRadios = /* @__PURE__ */ __name(function queryRadios2(name) {
        return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
      }, "queryRadios");
      var radioSet;
      if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
        radioSet = queryRadios(window.CSS.escape(node.name));
      } else {
        try {
          radioSet = queryRadios(node.name);
        } catch (err) {
          console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
          return false;
        }
      }
      var checked = getCheckedRadio(radioSet, node.form);
      return !checked || checked === node;
    }, "isTabbableRadio");
    var isRadio = /* @__PURE__ */ __name(function isRadio2(node) {
      return isInput(node) && node.type === "radio";
    }, "isRadio");
    var isNonTabbableRadio = /* @__PURE__ */ __name(function isNonTabbableRadio2(node) {
      return isRadio(node) && !isTabbableRadio(node);
    }, "isNonTabbableRadio");
    var isNodeAttached = /* @__PURE__ */ __name(function isNodeAttached2(node) {
      var _nodeRoot;
      var nodeRoot = node && getRootNode(node);
      var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
      var attached = false;
      if (nodeRoot && nodeRoot !== node) {
        var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
        attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
        while (!attached && nodeRootHost) {
          var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
          nodeRoot = getRootNode(nodeRootHost);
          nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
          attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
        }
      }
      return attached;
    }, "isNodeAttached");
    var isZeroArea = /* @__PURE__ */ __name(function isZeroArea2(node) {
      var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
      return width === 0 && height === 0;
    }, "isZeroArea");
    var isHidden = /* @__PURE__ */ __name(function isHidden2(node, _ref) {
      var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
      if (getComputedStyle(node).visibility === "hidden") {
        return true;
      }
      var isDirectSummary = matches.call(node, "details>summary:first-of-type");
      var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
      if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
        return true;
      }
      if (!displayCheck || displayCheck === "full" || displayCheck === "legacy-full") {
        if (typeof getShadowRoot === "function") {
          var originalNode = node;
          while (node) {
            var parentElement = node.parentElement;
            var rootNode = getRootNode(node);
            if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
              return isZeroArea(node);
            } else if (node.assignedSlot) {
              node = node.assignedSlot;
            } else if (!parentElement && rootNode !== node.ownerDocument) {
              node = rootNode.host;
            } else {
              node = parentElement;
            }
          }
          node = originalNode;
        }
        if (isNodeAttached(node)) {
          return !node.getClientRects().length;
        }
        if (displayCheck !== "legacy-full") {
          return true;
        }
      } else if (displayCheck === "non-zero-area") {
        return isZeroArea(node);
      }
      return false;
    }, "isHidden");
    var isDisabledFromFieldset = /* @__PURE__ */ __name(function isDisabledFromFieldset2(node) {
      if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
        var parentNode = node.parentElement;
        while (parentNode) {
          if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
            for (var i = 0; i < parentNode.children.length; i++) {
              var child = parentNode.children.item(i);
              if (child.tagName === "LEGEND") {
                return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
              }
            }
            return true;
          }
          parentNode = parentNode.parentElement;
        }
      }
      return false;
    }, "isDisabledFromFieldset");
    var isNodeMatchingSelectorFocusable = /* @__PURE__ */ __name(function isNodeMatchingSelectorFocusable2(options, node) {
      if (node.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
      //  because we're limited in the type of selectors we can use in JSDom (see related
      //  note related to `candidateSelectors`)
      isInert(node) || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
      isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
        return false;
      }
      return true;
    }, "isNodeMatchingSelectorFocusable");
    var isNodeMatchingSelectorTabbable = /* @__PURE__ */ __name(function isNodeMatchingSelectorTabbable2(options, node) {
      if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
        return false;
      }
      return true;
    }, "isNodeMatchingSelectorTabbable");
    var isValidShadowRootTabbable = /* @__PURE__ */ __name(function isValidShadowRootTabbable2(shadowHostNode) {
      var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
      if (isNaN(tabIndex) || tabIndex >= 0) {
        return true;
      }
      return false;
    }, "isValidShadowRootTabbable");
    var sortByOrder = /* @__PURE__ */ __name(function sortByOrder2(candidates) {
      var regularTabbables = [];
      var orderedTabbables = [];
      candidates.forEach(function(item, i) {
        var isScope = !!item.scopeParent;
        var element = isScope ? item.scopeParent : item;
        var candidateTabindex = getSortOrderTabIndex(element, isScope);
        var elements = isScope ? sortByOrder2(item.candidates) : element;
        if (candidateTabindex === 0) {
          isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
        } else {
          orderedTabbables.push({
            documentOrder: i,
            tabIndex: candidateTabindex,
            item,
            isScope,
            content: elements
          });
        }
      });
      return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
        sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
        return acc;
      }, []).concat(regularTabbables);
    }, "sortByOrder");
    var tabbable2 = /* @__PURE__ */ __name(function tabbable3(container, options) {
      options = options || {};
      var candidates;
      if (options.getShadowRoot) {
        candidates = getCandidatesIteratively([container], options.includeContainer, {
          filter: isNodeMatchingSelectorTabbable.bind(null, options),
          flatten: false,
          getShadowRoot: options.getShadowRoot,
          shadowRootFilter: isValidShadowRootTabbable
        });
      } else {
        candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
      }
      return sortByOrder(candidates);
    }, "tabbable");
    var focusable = /* @__PURE__ */ __name(function focusable2(container, options) {
      options = options || {};
      var candidates;
      if (options.getShadowRoot) {
        candidates = getCandidatesIteratively([container], options.includeContainer, {
          filter: isNodeMatchingSelectorFocusable.bind(null, options),
          flatten: true,
          getShadowRoot: options.getShadowRoot
        });
      } else {
        candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
      }
      return candidates;
    }, "focusable");
    var isTabbable = /* @__PURE__ */ __name(function isTabbable2(node, options) {
      options = options || {};
      if (!node) {
        throw new Error("No node provided");
      }
      if (matches.call(node, candidateSelector) === false) {
        return false;
      }
      return isNodeMatchingSelectorTabbable(options, node);
    }, "isTabbable");
    var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
    var isFocusable = /* @__PURE__ */ __name(function isFocusable2(node, options) {
      options = options || {};
      if (!node) {
        throw new Error("No node provided");
      }
      if (matches.call(node, focusableCandidateSelector) === false) {
        return false;
      }
      return isNodeMatchingSelectorFocusable(options, node);
    }, "isFocusable");
    exports.focusable = focusable;
    exports.getTabIndex = getTabIndex;
    exports.isFocusable = isFocusable;
    exports.isTabbable = isTabbable;
    exports.tabbable = tabbable2;
  }
});

// ../../node_modules/@tamagui/theme/dist/cjs/_mutateTheme.js
var require_mutateTheme = __commonJS({
  "../../node_modules/@tamagui/theme/dist/cjs/_mutateTheme.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var mutateTheme_exports = {};
    __export2(mutateTheme_exports, {
      _mutateTheme: () => _mutateTheme,
      mutateThemes: () => mutateThemes2
    });
    module2.exports = __toCommonJS2(mutateTheme_exports);
    var import_constants13 = require_cjs21();
    var import_web16 = require("@tamagui/core");
    var import_react44 = require("react");
    function mutateThemes2({
      themes,
      batch,
      insertCSS = true,
      ...props
    }) {
      const allThemesProxied = {}, allThemesRaw = {};
      for (const { name, theme } of themes) {
        const res = _mutateTheme({
          ...props,
          name,
          theme,
          // we'll do one update at the end
          avoidUpdate: true,
          // always add which also replaces but doesnt fail first time
          mutationType: "add"
        });
        res && (allThemesProxied[name] = res.theme, allThemesRaw[name] = res.themeRaw);
      }
      const cssRules = insertCSS ? insertThemeCSS(allThemesRaw, batch) : [];
      return (0, import_react44.startTransition)(() => {
        for (const themeName in allThemesProxied) {
          const theme = allThemesProxied[themeName];
          updateThemeConfig(themeName, theme), notifyThemeManagersOfUpdate(themeName, theme);
        }
      }), {
        themes: allThemesProxied,
        themesRaw: allThemesRaw,
        cssRules
      };
    }
    __name(mutateThemes2, "mutateThemes");
    function _mutateTheme(props) {
      if (import_constants13.isServer) {
        process.env.NODE_ENV === "development" && console.warn("Theme mutation is not supported on server side");
        return;
      }
      const config = (0, import_web16.getConfig)(), { name: themeName, theme: themeIn, insertCSS, mutationType } = props;
      if (process.env.NODE_ENV === "development") {
        if (!config)
          throw new Error("No config");
        const theme2 = config.themes[props.name];
        if (mutationType !== "add" && !theme2)
          throw new Error(
            `${mutationType === "replace" ? "Replace" : "Update"} theme failed! Theme ${props.name} does not exist`
          );
      }
      const theme = {
        ...mutationType === "update" ? config.themes[themeName] ?? {} : {},
        ...themeIn
      };
      for (const key in theme)
        (0, import_web16.ensureThemeVariable)(theme, key);
      const themeProxied = (0, import_web16.proxyThemeToParents)(themeName, theme), response = {
        themeRaw: theme,
        theme: themeProxied,
        cssRules: []
      };
      return props.avoidUpdate || (insertCSS && (response.cssRules = insertThemeCSS({
        [themeName]: theme
      })), updateThemeConfig(themeName, themeProxied), notifyThemeManagersOfUpdate(themeName, themeProxied)), response;
    }
    __name(_mutateTheme, "_mutateTheme");
    function updateThemeConfig(themeName, theme) {
      const config = (0, import_web16.getConfig)();
      config.themes[themeName] = theme, (0, import_web16.updateConfig)("themes", config.themes);
    }
    __name(updateThemeConfig, "updateThemeConfig");
    function notifyThemeManagersOfUpdate(themeName, theme) {
      import_web16.activeThemeManagers.forEach((manager) => {
        manager.state.name === themeName && manager.updateStateFromProps(
          {
            name: themeName,
            forceTheme: theme
          },
          true
        );
      });
    }
    __name(notifyThemeManagersOfUpdate, "notifyThemeManagersOfUpdate");
    function insertThemeCSS(themes, batch = false) {
      const config = (0, import_web16.getConfig)();
      let cssRules = [];
      for (const themeName in themes) {
        const theme = themes[themeName], rules = (0, import_web16.getThemeCSSRules)({
          config,
          themeName,
          names: [themeName],
          theme
        });
        cssRules = [...cssRules, ...rules], batch || updateStyle(`t_theme_style_${themeName}`, rules);
      }
      if (batch) {
        const id = (0, import_web16.simpleHash)(typeof batch == "string" ? batch : Object.keys(themes).join(""));
        updateStyle(`t_theme_style_${id}`, cssRules);
      }
      return cssRules;
    }
    __name(insertThemeCSS, "insertThemeCSS");
    function updateStyle(id, rules) {
      var _a;
      const existing = document.querySelector(`#${id}`), style = document.createElement("style");
      style.id = id, style.appendChild(document.createTextNode(rules.join(`
`))), console.log("UPDATE", { id, rules, existing }), document.head.appendChild(style), existing && ((_a = existing.parentElement) == null || _a.removeChild(existing));
    }
    __name(updateStyle, "updateStyle");
  }
});

// ../../node_modules/@tamagui/theme/dist/cjs/addTheme.js
var require_addTheme = __commonJS({
  "../../node_modules/@tamagui/theme/dist/cjs/addTheme.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var addTheme_exports = {};
    __export2(addTheme_exports, {
      addTheme: () => addTheme
    });
    module2.exports = __toCommonJS2(addTheme_exports);
    var import_mutateTheme = require_mutateTheme();
    function addTheme(props) {
      return (0, import_mutateTheme._mutateTheme)({ ...props, insertCSS: true, mutationType: "add" });
    }
    __name(addTheme, "addTheme");
  }
});

// ../../node_modules/@tamagui/theme/dist/cjs/updateTheme.js
var require_updateTheme = __commonJS({
  "../../node_modules/@tamagui/theme/dist/cjs/updateTheme.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var updateTheme_exports = {};
    __export2(updateTheme_exports, {
      updateTheme: () => updateTheme
    });
    module2.exports = __toCommonJS2(updateTheme_exports);
    var import_mutateTheme = require_mutateTheme();
    function updateTheme({
      name,
      theme
    }) {
      return (0, import_mutateTheme._mutateTheme)({ name, theme, insertCSS: true, mutationType: "update" });
    }
    __name(updateTheme, "updateTheme");
  }
});

// ../../node_modules/@tamagui/theme/dist/cjs/replaceTheme.js
var require_replaceTheme = __commonJS({
  "../../node_modules/@tamagui/theme/dist/cjs/replaceTheme.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var replaceTheme_exports = {};
    __export2(replaceTheme_exports, {
      replaceTheme: () => replaceTheme
    });
    module2.exports = __toCommonJS2(replaceTheme_exports);
    var import_mutateTheme = require_mutateTheme();
    function replaceTheme({
      name,
      theme
    }) {
      return (0, import_mutateTheme._mutateTheme)({ name, theme, insertCSS: true, mutationType: "replace" });
    }
    __name(replaceTheme, "replaceTheme");
  }
});

// ../../node_modules/@tamagui/theme/dist/cjs/index.js
var require_cjs28 = __commonJS({
  "../../node_modules/@tamagui/theme/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      mutateThemes: () => import_mutateTheme.mutateThemes
    });
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_addTheme(), module2.exports);
    __reExport2(src_exports, require_updateTheme(), module2.exports);
    __reExport2(src_exports, require_replaceTheme(), module2.exports);
    var import_mutateTheme = require_mutateTheme();
  }
});

// ../../node_modules/tamagui/dist/esm/index.js
var esm_exports2 = {};
__export(esm_exports2, {
  ACTIONS: () => ACTIONS,
  Adapt: () => Adapt,
  AdaptContents: () => AdaptContents,
  AdaptParentContext: () => AdaptParentContext,
  AlertDialog: () => AlertDialog,
  AlertDialogAction: () => AlertDialogAction,
  AlertDialogCancel: () => AlertDialogCancel,
  AlertDialogContent: () => AlertDialogContent,
  AlertDialogDescription: () => AlertDialogDescription,
  AlertDialogOverlay: () => AlertDialogOverlay,
  AlertDialogPortal: () => AlertDialogPortal,
  AlertDialogTitle: () => AlertDialogTitle,
  AlertDialogTrigger: () => AlertDialogTrigger,
  Anchor: () => Anchor,
  AnimatePresence: () => AnimatePresence,
  AnimationDriverProvider: () => import_core54.AnimationDriverProvider,
  Article: () => Article,
  Aside: () => Aside,
  Avatar: () => Avatar,
  AvatarFallback: () => AvatarFallback,
  AvatarFallbackFrame: () => AvatarFallbackFrame,
  AvatarFrame: () => AvatarFrame,
  AvatarImage: () => AvatarImage,
  BubbleInput: () => BubbleInput,
  Button: () => Button2,
  ButtonContext: () => ButtonContext,
  ButtonFrame: () => ButtonFrame,
  ButtonIcon: () => ButtonIcon,
  ButtonNestingContext: () => ButtonNestingContext,
  ButtonText: () => ButtonText,
  Card: () => Card,
  CardBackground: () => CardBackground,
  CardFooter: () => CardFooter,
  CardFrame: () => CardFrame,
  CardHeader: () => CardHeader,
  Checkbox: () => Checkbox2,
  CheckboxFrame: () => CheckboxFrame,
  CheckboxStyledContext: () => CheckboxStyledContext,
  Circle: () => Circle,
  ComponentContext: () => import_core54.ComponentContext,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogOverlay: () => DialogOverlay,
  DialogOverlayFrame: () => DialogOverlayFrame,
  DialogPortal: () => DialogPortal,
  DialogPortalFrame: () => DialogPortalFrame,
  DialogSheetContents: () => DialogSheetContents,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  DialogWarningProvider: () => DialogWarningProvider,
  DirectionalYStack: () => DirectionalYStack,
  EnsureFlexed: () => EnsureFlexed,
  Fieldset: () => Fieldset,
  FontLanguage: () => import_core54.FontLanguage,
  Footer: () => Footer,
  Form: () => Form,
  FormFrame: () => FormFrame,
  FormProvider: () => FormProvider,
  FormTrigger: () => FormTrigger,
  ForwardSelectContext: () => ForwardSelectContext,
  Frame: () => Frame,
  H1: () => H1,
  H2: () => H2,
  H3: () => H3,
  H4: () => H4,
  H5: () => H5,
  H6: () => H6,
  Handle: () => Handle,
  Header: () => Header,
  Heading: () => Heading,
  INITIAL_STATE: () => INITIAL_STATE,
  Input: () => Input,
  InputFrame: () => InputFrame,
  Label: () => Label,
  LabelFrame: () => LabelFrame,
  Main: () => Main,
  Nav: () => Nav,
  Overlay: () => Overlay,
  Paragraph: () => Paragraph,
  Popover: () => Popover,
  PopoverAnchor: () => PopoverAnchor,
  PopoverArrow: () => PopoverArrow,
  PopoverClose: () => PopoverClose,
  PopoverContent: () => PopoverContent,
  PopoverContext: () => PopoverContext,
  PopoverTrigger: () => PopoverTrigger,
  Popper: () => Popper,
  PopperAnchor: () => PopperAnchor,
  PopperArrow: () => PopperArrow,
  PopperContent: () => PopperContent,
  PopperContentFrame: () => PopperContentFrame,
  PopperContext: () => PopperContext,
  Portal: () => Portal,
  PortalHost: () => PortalHost,
  PortalItem: () => PortalItem,
  PortalProvider: () => PortalProvider,
  PresenceChild: () => PresenceChild,
  PresenceContext: () => PresenceContext,
  Progress: () => Progress,
  ProgressFrame: () => ProgressFrame,
  ProgressIndicator: () => ProgressIndicator,
  ProgressIndicatorFrame: () => ProgressIndicatorFrame,
  RadioGroup: () => RadioGroup,
  Range: () => Range,
  ScrollView: () => ScrollView,
  Section: () => Section,
  Select: () => Select,
  SelectGroupFrame: () => SelectGroupFrame,
  SelectIcon: () => SelectIcon,
  SelectItemParentProvider: () => SelectItemParentProvider,
  SelectItemTextFrame: () => SelectItemTextFrame,
  SelectProvider: () => SelectProvider,
  SelectSeparator: () => SelectSeparator,
  Separator: () => Separator,
  Sheet: () => Sheet,
  SheetController: () => SheetController,
  SheetControllerContext: () => SheetControllerContext,
  SheetHandleFrame: () => SheetHandleFrame,
  SheetOverlayFrame: () => SheetOverlayFrame,
  SizableStack: () => SizableStack,
  SizableText: () => SizableText,
  Slider: () => Slider,
  SliderFrame: () => SliderFrame,
  SliderThumb: () => SliderThumb,
  SliderThumbFrame: () => SliderThumbFrame,
  SliderTrack: () => SliderTrack,
  SliderTrackActive: () => SliderTrackActive,
  SliderTrackActiveFrame: () => SliderTrackActiveFrame,
  SliderTrackFrame: () => SliderTrackFrame,
  Spacer: () => import_core54.Spacer,
  Spinner: () => Spinner,
  Square: () => Square,
  Stack: () => import_core54.Stack,
  Switch: () => Switch,
  SwitchFrame: () => SwitchFrame,
  SwitchThumb: () => SwitchThumb,
  Tabs: () => Tabs,
  TamaguiProvider: () => TamaguiProvider,
  Text: () => import_core54.Text,
  TextArea: () => TextArea,
  TextAreaFrame: () => TextAreaFrame,
  Theme: () => import_core54.Theme,
  ThemeableStack: () => ThemeableStack,
  Thumb: () => Thumb,
  ToggleGroup: () => ToggleGroup,
  Tooltip: () => Tooltip2,
  TooltipGroup: () => TooltipGroup,
  TooltipSimple: () => TooltipSimple,
  Track: () => Track,
  Unspaced: () => import_core54.Unspaced,
  View: () => import_core54.View,
  VisuallyHidden: () => VisuallyHidden,
  XStack: () => XStack,
  YStack: () => YStack,
  ZStack: () => ZStack,
  buttonStaticConfig: () => buttonStaticConfig,
  composeRefs: () => composeRefs,
  configureInitialWindowDimensions: () => configureInitialWindowDimensions,
  createAlertDialogScope: () => createAlertDialogScope,
  createAvatarScope: () => createAvatarScope,
  createCheckboxScope: () => createCheckboxScope,
  createComponent: () => import_core54.createComponent,
  createContext: () => createContext3,
  createContextScope: () => createContextScope,
  createDialogScope: () => createDialogScope,
  createFont: () => import_core54.createFont,
  createProgressScope: () => createProgressScope,
  createRadioGroupScope: () => createRadioGroupScope,
  createSelectContext: () => createSelectContext,
  createSelectItemParentContext: () => createSelectItemParentContext,
  createSelectItemParentScope: () => createSelectItemParentScope,
  createSelectScope: () => createSelectScope,
  createSheet: () => createSheet,
  createSheetScope: () => createSheetScope,
  createShorthands: () => import_core54.createShorthands,
  createStyledContext: () => import_core54.createStyledContext,
  createSwitch: () => createSwitch,
  createTamagui: () => createTamagui,
  createTheme: () => import_core54.createTheme,
  createToggleGroupScope: () => createToggleGroupScope,
  createTokens: () => import_core54.createTokens,
  createVariable: () => import_core54.createVariable,
  debounce: () => debounce,
  defaultStyles: () => defaultStyles,
  fullscreenStyle: () => fullscreenStyle,
  getAnimationDriver: () => import_core54.getAnimationDriver,
  getConfig: () => import_core54.getConfig,
  getMedia: () => import_core54.getMedia,
  getShapeSize: () => getShapeSize,
  getState: () => getState2,
  getStylesAtomic: () => import_core54.getStylesAtomic,
  getThemes: () => import_core54.getThemes,
  getToken: () => import_core54.getToken,
  getTokenValue: () => import_core54.getTokenValue,
  getTokens: () => import_core54.getTokens,
  getVariable: () => import_core54.getVariable,
  getVariableName: () => import_core54.getVariableName,
  getVariableValue: () => import_core54.getVariableValue,
  insertFont: () => import_core54.insertFont,
  isChrome: () => import_core54.isChrome,
  isClient: () => import_core54.isClient,
  isIndeterminate: () => isIndeterminate,
  isPresent: () => isPresent,
  isServer: () => import_core54.isServer,
  isServerSide: () => isServerSide,
  isTamaguiComponent: () => import_core54.isTamaguiComponent,
  isTamaguiElement: () => import_core54.isTamaguiElement,
  isTouchable: () => import_core54.isTouchable,
  isVariable: () => import_core54.isVariable,
  isWeb: () => import_core54.isWeb,
  isWebTouchable: () => import_core54.isWebTouchable,
  matchMedia: () => import_core54.matchMedia,
  mediaObjectToString: () => import_core54.mediaObjectToString,
  mediaQueryConfig: () => import_core54.mediaQueryConfig,
  mediaState: () => import_core54.mediaState,
  setupDev: () => import_core54.setupDev,
  setupNativeSheet: () => setupNativeSheet,
  setupReactNative: () => import_core54.setupReactNative,
  spacedChildren: () => import_core54.spacedChildren,
  styled: () => import_core54.styled,
  themeable: () => import_core54.themeable,
  themeableVariants: () => themeableVariants,
  useAdaptParent: () => useAdaptParent,
  useButton: () => useButton,
  useComposedRefs: () => useComposedRefs,
  useControllableState: () => useControllableState,
  useDebounce: () => useDebounce,
  useDebounceValue: () => useDebounceValue,
  useDidFinishSSR: () => import_core54.useDidFinishSSR,
  useEvent: () => import_core54.useEvent,
  useFloatingContext: () => useFloatingContext,
  useForceUpdate: () => useForceUpdate,
  useFormContext: () => useFormContext,
  useGet: () => import_core54.useGet,
  useInputProps: () => useInputProps,
  useIsPresent: () => useIsPresent,
  useIsTouchDevice: () => import_core54.useIsTouchDevice,
  useIsomorphicLayoutEffect: () => import_core54.useIsomorphicLayoutEffect,
  useLabelContext: () => useLabelContext,
  useMedia: () => import_core54.useMedia,
  useMediaPropsActive: () => import_core54.useMediaPropsActive,
  usePopoverContext: () => usePopoverContext,
  usePopperContext: () => usePopperContext,
  usePortal: () => usePortal,
  usePresence: () => usePresence,
  useProps: () => import_core54.useProps,
  useSelectContext: () => useSelectContext,
  useSelectItemParentContext: () => useSelectItemParentContext,
  useSheet: () => useSheet,
  useSheetController: () => useSheetController,
  useStyle: () => import_core54.useStyle,
  useTheme: () => import_core54.useTheme,
  useThemeName: () => import_core54.useThemeName,
  useWindowDimensions: () => useWindowDimensions2,
  variableToString: () => import_core54.variableToString,
  withStaticProperties: () => import_core54.withStaticProperties,
  wrapChildrenInText: () => wrapChildrenInText
});
module.exports = __toCommonJS(esm_exports2);

// ../../node_modules/@tamagui/polyfill-dev/index.js
if (typeof globalThis["__DEV__"] === "undefined") {
  globalThis["__DEV__"] = process.env.NODE_ENV === "development";
}

// ../../node_modules/tamagui/dist/esm/setup.js
var import_core = require("@tamagui/core");
var React = __toESM(require("react"));
var import_react_native = require("react-native-web-lite");
globalThis.React = React;
(0, import_core.setupReactNative)({
  View: import_react_native.View,
  Text: import_react_native.Text
});
typeof requestAnimationFrame > "u" && (globalThis.requestAnimationFrame = setImmediate);
var cancelAnimationFrame2 = globalThis.cancelAnimationFrame;
typeof globalThis > "u" ? console.warn(
  "Warning: globalThis is undefined, are you overwriting it in your bundler?"
) : globalThis.cancelAnimationFrame = (x) => {
  try {
    cancelAnimationFrame2(x);
  } catch {
  }
};

// ../../node_modules/tamagui/dist/esm/index.js
__reExport(esm_exports2, __toESM(require_cjs16()), module.exports);

// ../../node_modules/@tamagui/adapt/dist/esm/Adapt.js
var import_core2 = require("@tamagui/core");
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var AdaptParentContext = (0, import_react.createContext)(null);
var AdaptContents = /* @__PURE__ */ __name((props) => {
  const context = (0, import_react.useContext)(AdaptParentContext);
  if (!(context == null ? void 0 : context.Contents))
    throw new Error("Adapt not supported by this component");
  return (0, import_react.createElement)(context.Contents, props);
}, "AdaptContents");
AdaptContents.shouldForwardSpace = true;
var useAdaptParent = /* @__PURE__ */ __name(({
  Contents
}) => {
  const [when, setWhen] = (0, import_react.useState)(null);
  return {
    AdaptProvider: (0, import_react.useMemo)(() => {
      const context = {
        Contents,
        setWhen
      };
      function AdaptProviderView(props) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdaptParentContext.Provider, { value: context, children: props.children });
      }
      __name(AdaptProviderView, "AdaptProviderView");
      return AdaptProviderView;
    }, [Contents]),
    when
  };
}, "useAdaptParent");
var Adapt = (0, import_core2.withStaticProperties)(
  function({ platform: platform2, when, children }) {
    const context = (0, import_react.useContext)(AdaptParentContext), media = (0, import_core2.useMedia)();
    let enabled = !platform2;
    return platform2 === "touch" && (enabled = import_core2.isTouchable), platform2 === "native" && (enabled = !import_core2.isWeb), platform2 === "web" && (enabled = import_core2.isWeb), when && !media[when] && (enabled = false), (0, import_core2.useIsomorphicLayoutEffect)(() => {
      enabled && (context == null ? void 0 : context.setWhen(when || enabled));
    }, [when, context, enabled]), enabled ? children : null;
  },
  {
    Contents: AdaptContents
  }
);

// ../../node_modules/@tamagui/compose-refs/dist/esm/compose-refs.js
var React2 = __toESM(require("react"));
function setRef(ref, value) {
  typeof ref == "function" ? ref(value) : ref && (ref.current = value);
}
__name(setRef, "setRef");
function composeRefs(...refs) {
  return (node) => refs.forEach((ref) => setRef(ref, node));
}
__name(composeRefs, "composeRefs");
function useComposedRefs(...refs) {
  return React2.useCallback(composeRefs(...refs), refs);
}
__name(useComposedRefs, "useComposedRefs");

// ../../node_modules/@tamagui/alert-dialog/dist/esm/AlertDialog.js
var import_core18 = require("@tamagui/core");

// ../../node_modules/@tamagui/create-context/dist/esm/create-context.js
var React3 = __toESM(require("react"));
var import_jsx_runtime2 = require("react/jsx-runtime");
function createContext3(rootComponentName, defaultContext) {
  const Context = React3.createContext(defaultContext);
  function Provider(props) {
    const { children, ...context } = props, value = React3.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Context.Provider, { value, children });
  }
  __name(Provider, "Provider");
  function useContext17(consumerName) {
    const context = React3.useContext(Context);
    if (context)
      return context;
    if (defaultContext !== void 0)
      return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  __name(useContext17, "useContext");
  return Provider.displayName = `${rootComponentName}Provider`, [Provider, useContext17];
}
__name(createContext3, "createContext");
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext22(rootComponentName, defaultContext) {
    const BaseContext = React3.createContext(defaultContext), index3 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider(props) {
      const { scope, children, ...context } = props, Context = (scope == null ? void 0 : scope[scopeName][index3]) || BaseContext, value = React3.useMemo(
        () => context,
        Object.values(context)
      );
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Context.Provider, { value, children });
    }
    __name(Provider, "Provider");
    function useContext17(consumerName, scope, options) {
      const Context = (scope == null ? void 0 : scope[scopeName][index3]) || BaseContext, context = React3.useContext(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      const missingContextMessage = `\`${consumerName}\` must be used within \`${rootComponentName}\``;
      if (options == null ? void 0 : options.fallback)
        return (options == null ? void 0 : options.warn) !== false && console.warn(missingContextMessage), options.fallback;
      throw new Error(missingContextMessage);
    }
    __name(useContext17, "useContext");
    return Provider.displayName = `${rootComponentName}Provider`, [Provider, useContext17];
  }
  __name(createContext22, "createContext2");
  const createScope = /* @__PURE__ */ __name(() => {
    const scopeContexts = defaultContexts.map((defaultContext) => React3.createContext(defaultContext));
    return function(scope) {
      const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
      return React3.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  }, "createScope");
  return createScope.scopeName = scopeName, [
    createContext22,
    composeContextScopes(createScope, ...createContextScopeDeps)
  ];
}
__name(createContextScope, "createContextScope");
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope = /* @__PURE__ */ __name(() => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const currentScope = useScope(overrideScopes)[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React3.useMemo(
        () => ({ [`__scope${baseScope.scopeName}`]: nextScopes }),
        [nextScopes]
      );
    };
  }, "createScope");
  return createScope.scopeName = baseScope.scopeName, createScope;
}
__name(composeContextScopes, "composeContextScopes");

// ../../node_modules/@tamagui/use-force-update/dist/esm/index.js
var import_react2 = require("react");
var isServerSide = typeof window > "u";
var idFn = /* @__PURE__ */ __name(() => {
}, "idFn");
function useForceUpdate() {
  return isServerSide ? idFn : (0, import_react2.useReducer)((x) => Math.random(), 0)[1];
}
__name(useForceUpdate, "useForceUpdate");

// ../../node_modules/@tamagui/animate-presence/dist/esm/AnimatePresence.js
var import_web2 = require("@tamagui/core");
var import_react7 = __toESM(require("react"));

// ../../node_modules/@tamagui/animate-presence/dist/esm/LayoutGroupContext.js
var import_react3 = require("react");
var LayoutGroupContext = (0, import_react3.createContext)({});

// ../../node_modules/@tamagui/use-presence/dist/esm/PresenceContext.js
var import_react4 = require("react");
var PresenceContext = (0, import_react4.createContext)(null);

// ../../node_modules/@tamagui/use-presence/dist/esm/usePresence.js
var import_react5 = require("react");
function usePresence() {
  const context = (0, import_react5.useContext)(PresenceContext);
  if (!context)
    return [true, null, context];
  const { isPresent: isPresent2, onExitComplete, register } = context, id = (0, import_react5.useId)() || "";
  return (0, import_react5.useEffect)(() => register(id), [id, register]), !isPresent2 && onExitComplete ? [false, () => onExitComplete == null ? void 0 : onExitComplete(id), context] : [true, void 0, context];
}
__name(usePresence, "usePresence");
function useIsPresent() {
  return isPresent((0, import_react5.useContext)(PresenceContext));
}
__name(useIsPresent, "useIsPresent");
function isPresent(context) {
  return context === null ? true : context.isPresent;
}
__name(isPresent, "isPresent");

// ../../node_modules/@tamagui/animate-presence/dist/esm/PresenceChild.js
var import_web = require("@tamagui/core");
var React4 = __toESM(require("react"));
var import_react6 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var PresenceChild = /* @__PURE__ */ __name(({
  children,
  initial,
  isPresent: isPresent2,
  onExitComplete,
  exitVariant,
  enterVariant,
  enterExitVariant,
  presenceAffectsLayout
}) => {
  const presenceChildren = React4.useMemo(newChildrenMap, []), id = (0, import_react6.useId)() || "", context = React4.useMemo(
    () => ({
      id,
      initial,
      isPresent: isPresent2,
      exitVariant,
      enterVariant,
      enterExitVariant,
      onExitComplete: (id2) => {
        presenceChildren.set(id2, true);
        for (const isComplete of presenceChildren.values())
          if (!isComplete)
            return;
        onExitComplete == null ? void 0 : onExitComplete();
      },
      register: (id2) => (presenceChildren.set(id2, false), () => presenceChildren.delete(id2))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    presenceAffectsLayout ? void 0 : [isPresent2, exitVariant, enterVariant]
  );
  return React4.useMemo(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent2]), (0, import_web.useIsomorphicLayoutEffect)(() => {
    !(isPresent2 || presenceChildren.size) && (onExitComplete == null ? void 0 : onExitComplete());
  }, [isPresent2]), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(PresenceContext.Provider, { value: context, children });
}, "PresenceChild");
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}
__name(newChildrenMap, "newChildrenMap");

// ../../node_modules/@tamagui/animate-presence/dist/esm/AnimatePresence.js
var import_jsx_runtime4 = require("react/jsx-runtime");
var getChildKey = /* @__PURE__ */ __name((child) => child.key || "", "getChildKey");
var isDev = process.env.NODE_ENV !== "production";
function updateChildLookup(children, allChildren) {
  const seenChildren = isDev ? /* @__PURE__ */ new Set() : null;
  children.forEach((child) => {
    const key = getChildKey(child);
    isDev && seenChildren && seenChildren.has(key) && (console.warn(
      `Children of AnimatePresence require unique keys. "${key}" is a duplicate.`
    ), seenChildren.add(key)), allChildren.set(key, child);
  });
}
__name(updateChildLookup, "updateChildLookup");
function onlyElements(children) {
  const filtered = [];
  return import_react7.Children.forEach(children, (child, index3) => {
    (0, import_react7.isValidElement)(child) && (!child.key && import_react7.Children.count(children) > 1 ? (process.env.NODE_ENV === "development" && console.warn("No key given to AnimatePresence child, assigning index as key"), filtered.push(
      import_react7.default.cloneElement(child, {
        key: index3
      })
    )) : filtered.push(child));
  }), filtered;
}
__name(onlyElements, "onlyElements");
var AnimatePresence = /* @__PURE__ */ __name(({
  children,
  enterVariant,
  exitVariant,
  enterExitVariant,
  initial = true,
  onExitComplete,
  exitBeforeEnter,
  presenceAffectsLayout = true
}) => {
  let forceRender = useForceUpdate();
  const isClientMounted = (0, import_web2.useDidFinishSSR)(), forceRenderLayoutGroup = (0, import_react7.useContext)(LayoutGroupContext).forceRender;
  forceRenderLayoutGroup && (forceRender = forceRenderLayoutGroup);
  const isMounted = (0, import_react7.useRef)(false), filteredChildren = onlyElements(children);
  let childrenToRender = filteredChildren;
  const exiting = /* @__PURE__ */ new Set(), presentChildren = (0, import_react7.useRef)(childrenToRender), allChildren = (0, import_react7.useRef)(/* @__PURE__ */ new Map()).current, isInitialRender = (0, import_react7.useRef)(true);
  (0, import_react7.useEffect)(() => (isMounted.current = true, () => {
    isMounted.current = false, isInitialRender.current = true, allChildren.clear(), exiting.clear();
  }), []), (0, import_web2.useIsomorphicLayoutEffect)(() => {
    isInitialRender.current = false, updateChildLookup(filteredChildren, allChildren), presentChildren.current = childrenToRender;
  });
  const hasWarned = process.env.NODE_ENV === "development" ? (0, import_react7.useRef)(false) : null;
  if (isInitialRender.current)
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: childrenToRender.map((child) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      PresenceChild,
      {
        isPresent: !!(isClientMounted || isMounted.current),
        enterExitVariant,
        exitVariant,
        enterVariant,
        initial: initial ? void 0 : false,
        presenceAffectsLayout,
        children: child
      },
      getChildKey(child)
    )) });
  childrenToRender = [...childrenToRender];
  const presentKeys = presentChildren.current.map(getChildKey), targetKeys = filteredChildren.map(getChildKey), numPresent = presentKeys.length;
  for (let i = 0; i < numPresent; i++) {
    const key = presentKeys[i];
    targetKeys.indexOf(key) === -1 && exiting.add(key);
  }
  return exitBeforeEnter && exiting.size && (childrenToRender = []), exiting.forEach((key) => {
    if (targetKeys.indexOf(key) !== -1)
      return;
    const child = allChildren.get(key);
    if (!child)
      return;
    const insertionIndex = presentKeys.indexOf(key);
    childrenToRender.splice(
      insertionIndex,
      0,
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        PresenceChild,
        {
          isPresent: false,
          onExitComplete: () => {
            allChildren.delete(key), exiting.delete(key);
            const removeIndex = presentChildren.current.findIndex(
              (presentChild) => presentChild.key === key
            );
            if (presentChildren.current.splice(removeIndex, 1), !exiting.size) {
              if (presentChildren.current = filteredChildren, isMounted.current === false)
                return;
              forceRender(), onExitComplete == null ? void 0 : onExitComplete();
            }
          },
          exitVariant,
          enterVariant,
          enterExitVariant,
          presenceAffectsLayout,
          children: child
        },
        getChildKey(child)
      )
    );
  }), childrenToRender = childrenToRender.map((child) => {
    const key = child.key;
    return exiting.has(key) ? child : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      PresenceChild,
      {
        isPresent: true,
        exitVariant,
        enterVariant,
        enterExitVariant,
        presenceAffectsLayout,
        children: child
      },
      getChildKey(child)
    );
  }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: exiting.size ? childrenToRender : childrenToRender.map((child) => (0, import_react7.cloneElement)(child)) });
}, "AnimatePresence");
AnimatePresence.displayName = "AnimatePresence";

// ../../node_modules/@tamagui/dialog/dist/esm/Dialog.js
var import_aria_hidden = __toESM(require_cjs17());
var import_core17 = require("@tamagui/core");

// ../../node_modules/@tamagui/dismissable/dist/esm/Dismissable.js
var import_core3 = require("@tamagui/core");

// ../../node_modules/@tamagui/use-callback-ref/dist/esm/index.js
var React6 = __toESM(require("react"));
function useCallbackRef(callback) {
  const callbackRef = React6.useRef(callback);
  return React6.useEffect(() => {
    callbackRef.current = callback;
  }), React6.useMemo(() => (...args) => {
    var _a;
    return (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, ...args);
  }, []);
}
__name(useCallbackRef, "useCallbackRef");

// ../../node_modules/@tamagui/use-escape-keydown/dist/esm/index.js
var import_react8 = require("react");
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const onEscapeKeyDown = useCallbackRef(onEscapeKeyDownProp);
  (0, import_react8.useEffect)(() => {
    const handleKeyDown = /* @__PURE__ */ __name((event) => {
      event.key === "Escape" && onEscapeKeyDown(event);
    }, "handleKeyDown");
    return ownerDocument.addEventListener("keydown", handleKeyDown), () => {
      ownerDocument.removeEventListener("keydown", handleKeyDown);
    };
  }, [onEscapeKeyDown, ownerDocument]);
}
__name(useEscapeKeydown, "useEscapeKeydown");

// ../../node_modules/@tamagui/use-event/dist/esm/useGet.js
var import_react9 = require("react");
var isWeb2 = true;
var isClient = typeof window < "u";
var useIsomorphicLayoutEffect4 = !isWeb2 || isClient ? import_react9.useLayoutEffect : import_react9.useEffect;
function useGet(currentValue, initialValue2, forwardToFunction) {
  const curRef = (0, import_react9.useRef)(initialValue2 ?? currentValue);
  return useIsomorphicLayoutEffect4(() => {
    curRef.current = currentValue;
  }), (0, import_react9.useCallback)(
    forwardToFunction ? (...args) => {
      var _a;
      return (_a = curRef.current) == null ? void 0 : _a.apply(null, args);
    } : () => curRef.current,
    []
  );
}
__name(useGet, "useGet");

// ../../node_modules/@tamagui/use-event/dist/esm/useEvent.js
function useEvent(callback) {
  return useGet(callback, defaultValue, true);
}
__name(useEvent, "useEvent");
var defaultValue = /* @__PURE__ */ __name(() => {
  throw new Error("Cannot call an event handler while rendering.");
}, "defaultValue");

// ../../node_modules/@tamagui/dismissable/dist/esm/Dismissable.js
var React7 = __toESM(require("react"));
var ReactDOM = __toESM(require("react-dom"));
var import_jsx_runtime5 = require("react/jsx-runtime");
function dispatchDiscreteCustomEvent(target, event) {
  target && ReactDOM.flushSync(() => target.dispatchEvent(event));
}
__name(dispatchDiscreteCustomEvent, "dispatchDiscreteCustomEvent");
var DISMISSABLE_LAYER_NAME = "Dismissable";
var CONTEXT_UPDATE = "dismissable.update";
var POINTER_DOWN_OUTSIDE = "dismissable.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissable.focusOutside";
var originalBodyPointerEvents;
var DismissableContext = React7.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var Dismissable = React7.forwardRef(
  (props, forwardedRef) => {
    const {
      disableOutsidePointerEvents = false,
      forceUnmount,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      ...layerProps
    } = props, context = React7.useContext(DismissableContext), [node, setNode] = React7.useState(null), [, force] = React7.useState({}), composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2)), layers = Array.from(context.layers), [highestLayerWithOutsidePointerEventsDisabled] = [
      ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1), highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(
      highestLayerWithOutsidePointerEventsDisabled
    ), index3 = node ? layers.indexOf(node) : -1, isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0, isPointerEventsEnabled = index3 >= highestLayerWithOutsidePointerEventsDisabledIndex, pointerDownOutside = usePointerDownOutside((event) => {
      const target = event.target, isPointerDownOnBranch = [...context.branches].some(
        (branch) => branch.contains(target)
      );
      !isPointerEventsEnabled || isPointerDownOnBranch || (onPointerDownOutside == null ? void 0 : onPointerDownOutside(event), onInteractOutside == null ? void 0 : onInteractOutside(event), event.defaultPrevented || (onDismiss == null ? void 0 : onDismiss()));
    }), focusOutside = useFocusOutside((event) => {
      const target = event.target;
      [...context.branches].some(
        (branch) => branch.contains(target)
      ) || (onFocusOutside == null ? void 0 : onFocusOutside(event), onInteractOutside == null ? void 0 : onInteractOutside(event), event.defaultPrevented || (onDismiss == null ? void 0 : onDismiss()));
    });
    return useEscapeKeydown((event) => {
      index3 === context.layers.size - 1 && (onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(event), !event.defaultPrevented && onDismiss && (event.preventDefault(), onDismiss()));
    }), React7.useEffect(() => {
      if (node)
        return disableOutsidePointerEvents && (context.layersWithOutsidePointerEventsDisabled.size === 0 && (originalBodyPointerEvents = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), context.layersWithOutsidePointerEventsDisabled.add(node)), context.layers.add(node), dispatchUpdate(), () => {
          disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = originalBodyPointerEvents);
        };
    }, [node, disableOutsidePointerEvents, context]), React7.useEffect(() => {
      if (!forceUnmount)
        return () => {
          node && (context.layers.delete(node), context.layersWithOutsidePointerEventsDisabled.delete(node), dispatchUpdate());
        };
    }, [node, context, forceUnmount]), React7.useEffect(() => {
      const handleUpdate = /* @__PURE__ */ __name(() => {
        force({});
      }, "handleUpdate");
      return document.addEventListener(CONTEXT_UPDATE, handleUpdate), () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "div",
      {
        ...layerProps,
        ref: composedRefs,
        style: {
          display: "contents",
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          // @ts-ignore
          ...props.style
        },
        onFocusCapture: (0, import_core3.composeEventHandlers)(
          props.onFocusCapture,
          focusOutside.onFocusCapture
        ),
        onBlurCapture: (0, import_core3.composeEventHandlers)(
          props.onBlurCapture,
          focusOutside.onBlurCapture
        ),
        onPointerDownCapture: (0, import_core3.composeEventHandlers)(
          props.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      }
    );
  }
);
Dismissable.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableBranch";
var DismissableBranch = React7.forwardRef(
  (props, forwardedRef) => {
    const context = React7.useContext(DismissableContext), ref = React7.useRef(null), composedRefs = useComposedRefs(forwardedRef, ref);
    return React7.useEffect(() => {
      const node = ref.current;
      if (node)
        return context.branches.add(node), () => {
          context.branches.delete(node);
        };
    }, [context.branches]), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: { display: "contents" }, ...props, ref: composedRefs });
  }
);
DismissableBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside) {
  const handlePointerDownOutside = useEvent(onPointerDownOutside), isPointerInsideReactTreeRef = React7.useRef(false), handleClickRef = React7.useRef(() => {
  });
  return React7.useEffect(() => {
    const handlePointerDown = /* @__PURE__ */ __name((event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent = /* @__PURE__ */ __name(function() {
          handleAndDispatchCustomEvent(
            POINTER_DOWN_OUTSIDE,
            handlePointerDownOutside,
            eventDetail,
            { discrete: true }
          );
        }, "handleAndDispatchPointerDownOutsideEvent");
        const eventDetail = { originalEvent: event };
        event.pointerType === "touch" ? (document.removeEventListener("click", handleClickRef.current), handleClickRef.current = handleAndDispatchPointerDownOutsideEvent, document.addEventListener("click", handleClickRef.current, { once: true })) : handleAndDispatchPointerDownOutsideEvent();
      }
      isPointerInsideReactTreeRef.current = false;
    }, "handlePointerDown"), timerId = setTimeout(() => {
      document.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId), document.removeEventListener("pointerdown", handlePointerDown), document.removeEventListener("click", handleClickRef.current);
    };
  }, [handlePointerDownOutside]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => {
      isPointerInsideReactTreeRef.current = true;
    }
  };
}
__name(usePointerDownOutside, "usePointerDownOutside");
function useFocusOutside(onFocusOutside) {
  const handleFocusOutside = useEvent(onFocusOutside), isFocusInsideReactTreeRef = React7.useRef(false);
  return React7.useEffect(() => {
    const handleFocus = /* @__PURE__ */ __name((event) => {
      event.target && !isFocusInsideReactTreeRef.current && handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, { originalEvent: event }, {
        discrete: false
      });
    }, "handleFocus");
    return document.addEventListener("focusin", handleFocus), () => document.removeEventListener("focusin", handleFocus);
  }, [handleFocusOutside]), {
    onFocusCapture: () => {
      isFocusInsideReactTreeRef.current = true;
    },
    onBlurCapture: () => {
      isFocusInsideReactTreeRef.current = false;
    }
  };
}
__name(useFocusOutside, "useFocusOutside");
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
__name(dispatchUpdate, "dispatchUpdate");
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target, event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  handler && target.addEventListener(name, handler, { once: true }), discrete ? dispatchDiscreteCustomEvent(target, event) : target.dispatchEvent(event);
}
__name(handleAndDispatchCustomEvent, "handleAndDispatchCustomEvent");

// ../../node_modules/@tamagui/dialog/dist/esm/Dialog.js
var import_focus_scope = __toESM(require_cjs18());

// ../../node_modules/@tamagui/portal/dist/esm/Portal.js
var import_core8 = require("@tamagui/core");

// ../../node_modules/@tamagui/stacks/dist/esm/Stacks.js
var import_core5 = require("@tamagui/core");

// ../../node_modules/@tamagui/stacks/dist/esm/getElevation.js
var import_core4 = require("@tamagui/core");
var getElevation = /* @__PURE__ */ __name((size2, extras) => {
  if (!size2)
    return;
  const { tokens } = extras, token = tokens.size[size2], sizeNum = (0, import_core4.isVariable)(token) ? +token.val : size2;
  return getSizedElevation(sizeNum, extras);
}, "getElevation");
var getSizedElevation = /* @__PURE__ */ __name((val, { theme, tokens }) => {
  let num = 0;
  if (val === true) {
    const val2 = (0, import_core4.getVariableValue)(tokens.size.true);
    typeof val2 == "number" ? num = val2 : num = 10;
  } else
    num = +val;
  const [height, shadowRadius] = [Math.round(num / 4 + 1), Math.round(num / 2 + 2)];
  return {
    shadowColor: theme.shadowColor,
    shadowRadius,
    shadowOffset: { height, width: 0 },
    ...import_core4.isAndroid ? {
      elevationAndroid: 2 * height
    } : {}
  };
}, "getSizedElevation");

// ../../node_modules/@tamagui/stacks/dist/esm/Stacks.js
var fullscreenStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};
var variants = {
  fullscreen: {
    true: fullscreenStyle
  },
  elevation: {
    "...size": getElevation
  }
};
var YStack = (0, import_core5.styled)(import_core5.Stack, {
  flexDirection: "column",
  variants
});
var XStack = (0, import_core5.styled)(import_core5.Stack, {
  flexDirection: "row",
  variants
});
var ZStack = (0, import_core5.styled)(
  YStack,
  {
    position: "relative"
  },
  {
    neverFlatten: true,
    isZStack: true
  }
);

// ../../node_modules/@tamagui/stacks/dist/esm/SizableStack.js
var import_core6 = require("@tamagui/core");
var import_get_button_sized = __toESM(require_cjs11());

// ../../node_modules/@tamagui/stacks/dist/esm/variants.js
var elevate = {
  true: (_, extras) => getElevation(extras.props.size, extras)
};
var bordered = /* @__PURE__ */ __name((val, { props }) => ({
  // TODO size it with size in '...size'
  borderWidth: typeof val == "number" ? val : 1,
  borderColor: "$borderColor",
  ...props.hoverTheme && {
    hoverStyle: {
      borderColor: "$borderColorHover"
    }
  },
  ...props.pressTheme && {
    pressStyle: {
      borderColor: "$borderColorPress"
    }
  },
  ...props.focusTheme && {
    focusStyle: {
      borderColor: "$borderColorFocus"
    }
  }
}), "bordered");
var padded = {
  true: (_, extras) => {
    const { tokens, props } = extras;
    return {
      padding: tokens.space[props.size] || tokens.space.$true
    };
  }
};
var radiused = {
  true: (_, extras) => {
    const { tokens, props } = extras;
    return {
      borderRadius: tokens.radius[props.size] || tokens.radius.$true
    };
  }
};
var circularStyle = {
  borderRadius: 1e5,
  padding: 0
};
var circular = {
  true: (_, { props, tokens }) => {
    if (!("size" in props))
      return circularStyle;
    const size2 = tokens.size[props.size];
    return {
      ...circularStyle,
      width: size2,
      height: size2,
      maxWidth: size2,
      maxHeight: size2,
      minWidth: size2,
      minHeight: size2
    };
  }
};
var hoverTheme = {
  true: {
    hoverStyle: {
      backgroundColor: "$backgroundHover",
      borderColor: "$borderColorHover"
    }
  },
  false: {}
};
var pressTheme = {
  true: {
    cursor: "pointer",
    pressStyle: {
      backgroundColor: "$backgroundPress",
      borderColor: "$borderColorPress"
    }
  },
  false: {}
};
var focusTheme = {
  true: {
    focusStyle: {
      backgroundColor: "$backgroundFocus",
      borderColor: "$borderColorFocus"
    }
  },
  false: {}
};

// ../../node_modules/@tamagui/stacks/dist/esm/SizableStack.js
var SizableStack = (0, import_core6.styled)(XStack, {
  name: "SizableStack",
  variants: {
    unstyled: {
      true: {
        hoverTheme: false,
        pressTheme: false,
        focusTheme: false,
        elevate: false,
        bordered: false
      }
    },
    hoverTheme,
    pressTheme,
    focusTheme,
    circular,
    elevate,
    bordered,
    size: {
      "...size": (val, extras) => (0, import_get_button_sized.getButtonSized)(val, extras)
    }
  }
});

// ../../node_modules/@tamagui/stacks/dist/esm/ThemeableStack.js
var import_core7 = require("@tamagui/core");
var chromelessStyle = {
  backgroundColor: "transparent",
  borderColor: "transparent",
  shadowColor: "transparent",
  hoverStyle: {
    borderColor: "transparent"
  }
};
var themeableVariants = {
  backgrounded: {
    true: {
      backgroundColor: "$background"
    }
  },
  radiused,
  hoverTheme,
  pressTheme,
  focusTheme,
  circular,
  padded,
  elevate,
  bordered,
  transparent: {
    true: {
      backgroundColor: "transparent"
    }
  },
  chromeless: {
    true: chromelessStyle,
    all: {
      ...chromelessStyle,
      hoverStyle: chromelessStyle,
      pressStyle: chromelessStyle,
      focusStyle: chromelessStyle
    }
  }
};
var ThemeableStack = (0, import_core7.styled)(YStack, {
  variants: themeableVariants
});

// ../../node_modules/@tamagui/portal/dist/esm/Portal.js
var React8 = __toESM(require("react"));
var import_react_dom = require("react-dom");
var import_jsx_runtime6 = require("react/jsx-runtime");
var Portal = React8.memo(
  ({ host = ((_a) => (_a = globalThis.document) == null ? void 0 : _a.body)(), ...props }) => {
    const contents = /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      YStack,
      {
        contain: "strict",
        fullscreen: true,
        position: import_core8.isWeb ? "fixed" : "absolute",
        maxWidth: import_core8.isWeb ? "100vw" : "100%",
        maxHeight: import_core8.isWeb ? "100vh" : "100%",
        pointerEvents: "none",
        ...props
      }
    ), [hostElement, setHostElement] = React8.useState(null);
    return (0, import_core8.useIsomorphicLayoutEffect)(() => {
      setHostElement(host);
    }, [host]), hostElement && props.children ? (0, import_react_dom.createPortal)(contents, hostElement) : null;
  }
);

// ../../node_modules/@tamagui/portal/dist/esm/GorhomPortal.js
var import_core9 = require("@tamagui/core");
var import_react10 = __toESM(require("react"));
var import_jsx_runtime7 = require("react/jsx-runtime");
var ACTIONS = /* @__PURE__ */ ((ACTIONS2) => (ACTIONS2[ACTIONS2.REGISTER_HOST = 0] = "REGISTER_HOST", ACTIONS2[ACTIONS2.DEREGISTER_HOST = 1] = "DEREGISTER_HOST", ACTIONS2[ACTIONS2.ADD_UPDATE_PORTAL = 2] = "ADD_UPDATE_PORTAL", ACTIONS2[ACTIONS2.REMOVE_PORTAL = 3] = "REMOVE_PORTAL", ACTIONS2))(ACTIONS || {});
var INITIAL_STATE = {};
var registerHost = /* @__PURE__ */ __name((state, hostName) => (hostName in state || (state[hostName] = []), state), "registerHost");
var deregisterHost = /* @__PURE__ */ __name((state, hostName) => (delete state[hostName], state), "deregisterHost");
var addUpdatePortal = /* @__PURE__ */ __name((state, hostName, portalName, node) => {
  hostName in state || (state = registerHost(state, hostName));
  const index3 = state[hostName].findIndex((item) => item.name === portalName);
  return index3 !== -1 ? state[hostName][index3].node = node : state[hostName].push({
    name: portalName,
    node
  }), state;
}, "addUpdatePortal");
var removePortal = /* @__PURE__ */ __name((state, hostName, portalName) => {
  if (!(hostName in state))
    return console.log(
      `Failed to remove portal '${portalName}', '${hostName}' was not registered!`
    ), state;
  const index3 = state[hostName].findIndex((item) => item.name === portalName);
  return index3 !== -1 && state[hostName].splice(index3, 1), state;
}, "removePortal");
var reducer = /* @__PURE__ */ __name((state, action) => {
  const { type } = action;
  switch (type) {
    case 0:
      return registerHost({ ...state }, action.hostName);
    case 1:
      return deregisterHost({ ...state }, action.hostName);
    case 2:
      return addUpdatePortal(
        { ...state },
        action.hostName,
        action.portalName,
        action.node
      );
    case 3:
      return removePortal(
        { ...state },
        action.hostName,
        action.portalName
      );
    default:
      return state;
  }
}, "reducer");
var PortalStateContext = (0, import_react10.createContext)(null);
var PortalDispatchContext = (0, import_react10.createContext)(null);
var usePortalState = /* @__PURE__ */ __name((hostName) => {
  const state = (0, import_react10.useContext)(PortalStateContext);
  if (state === null)
    throw new Error(
      "'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component."
    );
  return state[hostName] || [];
}, "usePortalState");
var usePortal = /* @__PURE__ */ __name((hostName = "root") => {
  const dispatch = (0, import_react10.useContext)(PortalDispatchContext);
  if (dispatch === null)
    throw new Error(
      "'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component."
    );
  const registerHost2 = (0, import_react10.useCallback)(() => {
    dispatch({
      type: 0,
      hostName
    });
  }, []), deregisterHost2 = (0, import_react10.useCallback)(() => {
    dispatch({
      type: 1,
      hostName
    });
  }, []), addUpdatePortal2 = (0, import_react10.useCallback)((name, node) => {
    dispatch({
      type: 2,
      hostName,
      portalName: name,
      node
    });
  }, []), removePortal2 = (0, import_react10.useCallback)((name) => {
    dispatch({
      type: 3,
      hostName,
      portalName: name
    });
  }, []);
  return {
    registerHost: registerHost2,
    deregisterHost: deregisterHost2,
    addPortal: addUpdatePortal2,
    updatePortal: addUpdatePortal2,
    removePortal: removePortal2
  };
}, "usePortal");
var PortalProviderComponent = /* @__PURE__ */ __name(({
  rootHostName = "root",
  shouldAddRootHost = true,
  children
}) => {
  const [state, dispatch] = (0, import_react10.useReducer)(reducer, INITIAL_STATE), transitionDispatch = (0, import_react10.useMemo)(() => (value) => {
    (0, import_react10.startTransition)(() => {
      dispatch(value);
    });
  }, [dispatch]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(PortalDispatchContext.Provider, { value: transitionDispatch, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(PortalStateContext.Provider, { value: state, children: [
    children,
    shouldAddRootHost && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(PortalHost, { name: rootHostName })
  ] }) });
}, "PortalProviderComponent");
var PortalProvider = (0, import_react10.memo)(PortalProviderComponent);
PortalProvider.displayName = "PortalProvider";
var defaultRenderer = /* @__PURE__ */ __name((children) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, { children }), "defaultRenderer");
var PortalHostComponent = /* @__PURE__ */ __name((props) => {
  const { name, forwardProps, render = defaultRenderer } = props, isServer2 = !(0, import_core9.useDidFinishSSR)(), state = usePortalState(name), { registerHost: registerHost2, deregisterHost: deregisterHost2 } = usePortal(props.name);
  return (0, import_react10.useEffect)(() => {
    if (!isServer2)
      return registerHost2(), () => {
        deregisterHost2();
      };
  }, [isServer2]), render(
    forwardProps ? state.map((item) => {
      let next = item.node;
      return forwardProps ? import_react10.default.Children.map(next, (child) => import_react10.default.isValidElement(child) ? import_react10.default.cloneElement(child, { key: child.key, ...forwardProps }) : child) : next;
    }) : state.map((item) => item.node)
  );
}, "PortalHostComponent");
var PortalHost = (0, import_react10.memo)(PortalHostComponent);
PortalHost.displayName = "PortalHost";
var PortalComponent = /* @__PURE__ */ __name((props) => {
  const {
    name: _providedName,
    hostName,
    handleOnMount: _providedHandleOnMount,
    handleOnUnmount: _providedHandleOnUnmount,
    handleOnUpdate: _providedHandleOnUpdate,
    children
  } = props, { addPortal: addUpdatePortal2, removePortal: removePortal2 } = usePortal(hostName), id = (0, import_react10.useId)(), name = _providedName || id, handleOnMount = (0, import_core9.useEvent)(() => {
    _providedHandleOnMount ? _providedHandleOnMount(() => addUpdatePortal2(name, children)) : addUpdatePortal2(name, children);
  }), handleOnUnmount = (0, import_core9.useEvent)(() => {
    _providedHandleOnUnmount ? _providedHandleOnUnmount(() => removePortal2(name)) : removePortal2(name);
  }), handleOnUpdate = (0, import_core9.useEvent)(() => {
    _providedHandleOnUpdate ? _providedHandleOnUpdate(() => addUpdatePortal2(name, children)) : addUpdatePortal2(name, children);
  });
  return (0, import_core9.useIsomorphicLayoutEffect)(() => (handleOnMount(), () => {
    handleOnUnmount();
  }), []), (0, import_react10.useEffect)(() => {
    handleOnUpdate();
  }, [children]), null;
}, "PortalComponent");
var PortalItem = (0, import_react10.memo)(PortalComponent);
PortalItem.displayName = "Portal";

// ../../node_modules/@tamagui/remove-scroll/dist/esm/RemoveScroll.js
var import_react11 = require("react");
var import_react_remove_scroll = __toESM(require_es57());
var import_jsx_runtime8 = require("react/jsx-runtime");
var RemoveScroll = (0, import_react11.memo)((props) => props.children ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_remove_scroll.RemoveScroll, { ...props }) : null);
var classNames = import_react_remove_scroll.RemoveScroll.classNames;

// ../../node_modules/@tamagui/sheet/dist/esm/Sheet.js
var import_core15 = require("@tamagui/core");

// ../../node_modules/@tamagui/sheet/dist/esm/constants.js
var import_core10 = require("@tamagui/core");
var SHEET_NAME = "Sheet";
var SHEET_HANDLE_NAME = "SheetHandle";
var SHEET_OVERLAY_NAME = "SheetOverlay";
var SHEET_HIDDEN_STYLESHEET = import_core10.isClient ? document.createElement("style") : null;
SHEET_HIDDEN_STYLESHEET && document.head.appendChild(SHEET_HIDDEN_STYLESHEET);

// ../../node_modules/@tamagui/sheet/dist/esm/createSheet.js
var import_core14 = require("@tamagui/core");
var import_react21 = require("react");
var import_react_native6 = require("react-native-web-lite");

// ../../node_modules/@tamagui/sheet/dist/esm/nativeSheet.js
var import_react16 = require("react");
var import_react_native2 = require("react-native-web-lite");

// ../../node_modules/@tamagui/sheet/dist/esm/SheetContext.js
var [createSheetContext, createSheetScope] = createContextScope(SHEET_NAME);
var [SheetProvider, useSheetContext] = createSheetContext(
  SHEET_NAME,
  {}
);

// ../../node_modules/@tamagui/use-controllable-state/dist/esm/useControllableState.js
var import_react12 = require("react");
var emptyCallbackFn = /* @__PURE__ */ __name((_) => _(), "emptyCallbackFn");
function useControllableState({
  prop,
  defaultProp,
  onChange,
  strategy = "prop-wins",
  preventUpdate,
  transition
}) {
  const [state, setState] = (0, import_react12.useState)(prop ?? defaultProp), previous = (0, import_react12.useRef)(state), propWins = strategy === "prop-wins" && prop !== void 0, value = propWins ? prop : state, onChangeCb = useEvent(onChange || idFn2), transitionFn = transition ? import_react12.startTransition : emptyCallbackFn;
  (0, import_react12.useEffect)(() => {
    prop !== void 0 && (previous.current = prop, transitionFn(() => {
      setState(prop);
    }));
  }, [prop]), (0, import_react12.useEffect)(() => {
    propWins || state !== previous.current && (previous.current = state, onChangeCb(state));
  }, [onChangeCb, state, propWins]);
  const setter = useEvent((next) => {
    if (!preventUpdate)
      if (propWins) {
        const nextValue = typeof next == "function" ? next(previous.current) : next;
        onChangeCb(nextValue);
      } else
        transitionFn(() => {
          setState(next);
        });
  });
  return [value, setter];
}
__name(useControllableState, "useControllableState");
var idFn2 = /* @__PURE__ */ __name(() => {
}, "idFn");

// ../../node_modules/@tamagui/sheet/dist/esm/useSheetController.js
var import_react13 = require("react");
var useSheetController = /* @__PURE__ */ __name(() => {
  const controller = (0, import_react13.useContext)(SheetControllerContext), isHidden = controller == null ? void 0 : controller.hidden, isShowingNonSheet = isHidden && (controller == null ? void 0 : controller.open);
  return {
    controller,
    isHidden,
    isShowingNonSheet,
    disableDrag: controller == null ? void 0 : controller.disableDrag
  };
}, "useSheetController");
var SheetControllerContext = (0, import_react13.createContext)(
  null
);

// ../../node_modules/@tamagui/sheet/dist/esm/useSheetOpenState.js
var useSheetOpenState = /* @__PURE__ */ __name((props) => {
  const { isHidden, controller } = useSheetController(), onOpenChangeInternal = /* @__PURE__ */ __name((val) => {
    var _a, _b;
    (_a = controller == null ? void 0 : controller.onOpenChange) == null ? void 0 : _a.call(controller, val), (_b = props.onOpenChange) == null ? void 0 : _b.call(props, val);
  }, "onOpenChangeInternal"), [open, setOpen] = useControllableState({
    prop: (controller == null ? void 0 : controller.open) ?? props.open,
    defaultProp: props.defaultOpen ?? false,
    onChange: onOpenChangeInternal,
    strategy: "most-recent-wins",
    transition: true
  });
  return {
    open,
    setOpen,
    isHidden,
    controller
  };
}, "useSheetOpenState");

// ../../node_modules/@tamagui/sheet/dist/esm/useSheetProviderProps.js
var import_core11 = require("@tamagui/core");

// ../../node_modules/@tamagui/use-constant/dist/esm/index.js
var import_react14 = require("react");
function useConstant(fn) {
  if (typeof document > "u")
    return (0, import_react14.useMemo)(() => fn(), []);
  const ref = (0, import_react14.useRef)();
  return ref.current || (ref.current = { v: fn() }), ref.current.v;
}
__name(useConstant, "useConstant");

// ../../node_modules/@tamagui/sheet/dist/esm/useSheetProviderProps.js
var import_react15 = __toESM(require("react"));
function useSheetProviderProps(props, state, options = {}) {
  const contentRef = import_react15.default.useRef(null), [frameSize, setFrameSize] = (0, import_react15.useState)(0), [maxContentSize, setMaxContentSize] = (0, import_react15.useState)(0), snapPointsMode = props.snapPointsMode ?? "percent", snapPointsProp = props.snapPoints ?? (snapPointsMode === "percent" ? [80] : snapPointsMode === "constant" ? [256] : ["fit"]), hasFit = snapPointsProp[0] === "fit", snapPoints = (0, import_react15.useMemo)(
    () => props.dismissOnSnapToBottom ? [...snapPointsProp, 0] : snapPointsProp,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(snapPointsProp), props.dismissOnSnapToBottom]
  ), [position_, setPositionImmediate] = useControllableState({
    prop: props.position,
    defaultProp: props.defaultPosition || (state.open ? 0 : -1),
    onChange: props.onPositionChange,
    strategy: "most-recent-wins",
    transition: true
  }), position = state.open === false ? -1 : position_, { open } = state, setPosition = (0, import_react15.useCallback)(
    (next) => {
      props.dismissOnSnapToBottom && next === snapPoints.length - 1 ? state.setOpen(false) : setPositionImmediate(next);
    },
    [props.dismissOnSnapToBottom, snapPoints.length, setPositionImmediate, state.setOpen]
  );
  process.env.NODE_ENV === "development" && (snapPointsMode === "mixed" && snapPoints.some((p) => {
    if (typeof p == "string") {
      if (p === "fit")
        return false;
      if (p.endsWith("%")) {
        const n = Number(p.slice(0, -1));
        return n < 0 || n > 100;
      }
      return true;
    }
    return typeof p != "number" || p < 0;
  }) && console.warn(
    '\u26A0\uFE0F Invalid snapPoint given, snapPoints must be positive numeric values, string percentages between 0-100%, or "fit" when snapPointsMode is mixed'
  ), snapPointsMode === "mixed" && snapPoints.indexOf("fit") > 0 && console.warn(
    '\u26A0\uFE0F Invalid snapPoint given, "fit" must be the first/largest snap point when snapPointsMode is mixed'
  ), snapPointsMode === "fit" && (snapPoints.length !== (props.dismissOnSnapToBottom ? 2 : 1) || snapPoints[0] !== "fit") && console.warn(
    "\u26A0\uFE0F Invalid snapPoint given, there are no snap points when snapPointsMode is fit"
  ), snapPointsMode === "constant" && snapPoints.some((p) => typeof p != "number" || p < 0) && console.warn(
    "\u26A0\uFE0F Invalid snapPoint given, snapPoints must be positive numeric values when snapPointsMode is constant"
  ), snapPointsMode === "percent" && snapPoints.some((p) => typeof p != "number" || p < 0 || p > 100) && console.warn(
    "\u26A0\uFE0F Invalid snapPoint given, snapPoints must be numeric values between 0 and 100 when snapPointsMode is percent"
  )), open && props.dismissOnSnapToBottom && position === snapPoints.length - 1 && setPositionImmediate(0);
  const shouldSetPositionOpen = open && position < 0;
  if ((0, import_react15.useEffect)(() => {
    shouldSetPositionOpen && setPosition(0);
  }, [setPosition, shouldSetPositionOpen]), !(0, import_core11.useAnimationDriver)())
    throw new Error("Must set animations in tamagui.config.ts");
  const scrollBridge = useConstant(() => ({
    enabled: false,
    y: 0,
    paneY: 0,
    paneMinY: 0,
    scrollStartY: -1,
    drag: () => {
    },
    release: () => {
    },
    scrollLock: false
  })), removeScrollEnabled = props.forceRemoveScrollEnabled ?? (open && props.modal), maxSnapPoint = snapPoints[0];
  return {
    screenSize: snapPointsMode === "percent" ? frameSize / ((typeof maxSnapPoint == "number" ? maxSnapPoint : 100) / 100) : maxContentSize,
    maxSnapPoint,
    removeScrollEnabled,
    scrollBridge,
    modal: !!props.modal,
    open: state.open,
    setOpen: state.setOpen,
    hidden: !!state.isHidden,
    contentRef,
    frameSize,
    setFrameSize,
    dismissOnOverlayPress: props.dismissOnOverlayPress ?? true,
    dismissOnSnapToBottom: props.dismissOnSnapToBottom ?? false,
    onOverlayComponent: options.onOverlayComponent,
    scope: props.__scopeSheet,
    hasFit,
    position,
    snapPoints,
    snapPointsMode,
    setMaxContentSize,
    setPosition,
    setPositionImmediate,
    onlyShowFrame: false
  };
}
__name(useSheetProviderProps, "useSheetProviderProps");

// ../../node_modules/@tamagui/sheet/dist/esm/nativeSheet.js
var import_jsx_runtime9 = require("react/jsx-runtime");
var nativeSheets = {
  ios: null
};
function setupNativeSheet(platform2, Implementation) {
  platform2 === "ios" && (nativeSheets[platform2] = (props) => {
    const state = useSheetOpenState(props), providerProps = useSheetProviderProps(props, state), { open, setOpen } = state, ref = (0, import_react16.useRef)();
    return (0, import_react16.useEffect)(() => {
      var _a;
      (_a = ref.current) == null ? void 0 : _a.setVisibility(open);
    }, [open]), /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_jsx_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(SheetProvider, { ...providerProps, onlyShowFrame: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Implementation, { ref, onModalDismiss: () => setOpen(false), children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_native2.View, { style: { flex: 1 }, children: props.children }) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        YStack,
        {
          position: "absolute",
          opacity: 0,
          pointerEvents: "none",
          width: 0,
          height: 0,
          children: props.children
        }
      )
    ] }) });
  });
}
__name(setupNativeSheet, "setupNativeSheet");

// ../../node_modules/@tamagui/sheet/dist/esm/SheetImplementationCustom.js
var import_core12 = require("@tamagui/core");

// ../../node_modules/@tamagui/use-keyboard-visible/dist/esm/useKeyboardVisible.js
var import_react17 = require("react");
var import_react_native3 = require("react-native-web-lite");
var useKeyboardVisible = /* @__PURE__ */ __name(() => {
  const [isKeyboardVisible, setKeyboardVisible] = (0, import_react17.useState)(false);
  return (0, import_react17.useEffect)(() => {
    const keyboardDidShowListener = import_react_native3.Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    }), keyboardDidHideListener = import_react_native3.Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });
    return () => {
      keyboardDidHideListener.remove(), keyboardDidShowListener.remove();
    };
  }, []), isKeyboardVisible;
}, "useKeyboardVisible");

// ../../node_modules/@tamagui/sheet/dist/esm/SheetImplementationCustom.js
var import_react19 = require("react");
var import_react_native4 = require("react-native-web-lite");

// ../../node_modules/@tamagui/sheet/dist/esm/contexts.js
var import_react18 = require("react");
var ParentSheetContext = (0, import_react18.createContext)({
  zIndex: 1e5
});
var SheetInsideSheetContext = (0, import_react18.createContext)(null);

// ../../node_modules/@tamagui/sheet/dist/esm/helpers.js
function resisted(y, minY, maxOverflow = 25) {
  if (y < minY) {
    const past = minY - y, extra = -(1.1 - 0.1 ** (Math.min(maxOverflow, past) / maxOverflow)) * maxOverflow;
    return minY + extra;
  }
  return y;
}
__name(resisted, "resisted");

// ../../node_modules/@tamagui/sheet/dist/esm/SheetImplementationCustom.js
var import_jsx_runtime10 = require("react/jsx-runtime");
var hiddenSize = 10000.1;
var SheetImplementationCustom = (0, import_core12.themeable)(
  (0, import_react19.forwardRef)(function(props, forwardedRef) {
    const parentSheet = (0, import_react19.useContext)(ParentSheetContext), {
      animation,
      animationConfig: animationConfigProp,
      modal = false,
      zIndex = parentSheet.zIndex + 1,
      moveOnKeyboardChange = false,
      unmountChildrenWhenHidden = false,
      portalProps
    } = props, keyboardIsVisible = useKeyboardVisible(), state = useSheetOpenState(props), [overlayComponent, setOverlayComponent] = (0, import_react19.useState)(null), providerProps = useSheetProviderProps(props, state, {
      onOverlayComponent: setOverlayComponent
    }), {
      frameSize,
      setFrameSize,
      snapPoints,
      snapPointsMode,
      hasFit,
      position,
      setPosition,
      scrollBridge,
      screenSize,
      setMaxContentSize,
      maxSnapPoint
    } = providerProps, { open, controller, isHidden } = state, sheetRef = (0, import_react19.useRef)(null), ref = useComposedRefs(forwardedRef, sheetRef), animationConfig = (() => {
      const [animationProp, animationPropConfig] = animation ? Array.isArray(animation) ? animation : [animation] : [];
      return animationConfigProp ?? (animationProp ? {
        ...(0, import_core12.getConfig)().animations.animations[animationProp],
        ...animationPropConfig
      } : null);
    })(), [isShowingInnerSheet, setIsShowingInnerSheet] = (0, import_react19.useState)(false), shouldHideParentSheet = !import_core12.isWeb && modal && isShowingInnerSheet, parentSheetContext = (0, import_react19.useContext)(SheetInsideSheetContext), onInnerSheet = (0, import_react19.useCallback)((hasChild) => {
      setIsShowingInnerSheet(hasChild);
    }, []), positions = (0, import_react19.useMemo)(
      () => snapPoints.map(
        (point) => getYPositions(snapPointsMode, point, screenSize, frameSize)
      ),
      [screenSize, frameSize, snapPoints, snapPointsMode]
    ), driver = (0, import_core12.useAnimationDriver)(), { useAnimatedNumber, useAnimatedNumberStyle, useAnimatedNumberReaction } = driver, AnimatedView = driver.View;
    (0, import_core12.useIsomorphicLayoutEffect)(() => {
      if (parentSheetContext && open)
        return parentSheetContext(true), () => {
          parentSheetContext(false);
        };
    }, [parentSheetContext, open]);
    const nextParentContext = (0, import_react19.useMemo)(
      () => ({
        zIndex
      }),
      [zIndex]
    ), animatedNumber = useAnimatedNumber(hiddenSize), at = (0, import_react19.useRef)(hiddenSize);
    useAnimatedNumberReaction(
      {
        value: animatedNumber,
        hostRef: sheetRef
      },
      (0, import_react19.useCallback)((value) => {
        driver.isReactNative && (at.current = value, scrollBridge.paneY = value);
      }, [])
    );
    function stopSpring() {
      animatedNumber.stop(), scrollBridge.onFinishAnimate && (scrollBridge.onFinishAnimate(), scrollBridge.onFinishAnimate = void 0);
    }
    __name(stopSpring, "stopSpring");
    const hasntMeasured = at.current === hiddenSize, animateTo = (0, import_core12.useEvent)((position2) => {
      if (frameSize === 0)
        return;
      let toValue = isHidden || position2 === -1 ? screenSize : positions[position2];
      if (at.current !== toValue) {
        if (at.current = toValue, stopSpring(), hasntMeasured || isHidden) {
          if (animatedNumber.setValue(screenSize, {
            type: "timing",
            duration: 0
          }), isHidden)
            return;
          toValue = positions[position2], at.current = toValue;
        }
        animatedNumber.setValue(toValue, {
          type: "spring",
          ...animationConfig
        });
      }
    });
    (0, import_core12.useIsomorphicLayoutEffect)(() => {
      screenSize && hasntMeasured && animatedNumber.setValue(screenSize, {
        type: "timing",
        duration: 0
      });
    }, [hasntMeasured, screenSize]), (0, import_core12.useIsomorphicLayoutEffect)(() => {
      !frameSize || !screenSize || isHidden || hasntMeasured && !open || animateTo(position);
    }, [isHidden, frameSize, screenSize, open, position]);
    const disableDrag = props.disableDrag ?? (controller == null ? void 0 : controller.disableDrag), themeName = (0, import_core12.useThemeName)(), panResponder = (0, import_react19.useMemo)(
      () => {
        if (disableDrag || !frameSize || isShowingInnerSheet)
          return;
        const minY = positions[0];
        scrollBridge.paneMinY = minY;
        let startY = at.current;
        function makeUnselectable(val) {
          SHEET_HIDDEN_STYLESHEET && (val ? SHEET_HIDDEN_STYLESHEET.innerText = ":root * { user-select: none !important; -webkit-user-select: none !important; }" : SHEET_HIDDEN_STYLESHEET.innerText = "");
        }
        __name(makeUnselectable, "makeUnselectable");
        const release = /* @__PURE__ */ __name(({ vy, dragAt }) => {
          isExternalDrag = false, previouslyScrolling = false, makeUnselectable(false);
          const end = dragAt + startY + frameSize * vy * 0.2;
          let closestPoint = 0, dist = 1 / 0;
          for (let i = 0; i < positions.length; i++) {
            const position2 = positions[i], curDist = end > position2 ? end - position2 : position2 - end;
            curDist < dist && (dist = curDist, closestPoint = i);
          }
          setPosition(closestPoint), animateTo(closestPoint);
        }, "release"), finish = /* @__PURE__ */ __name((_e, state2) => {
          release({
            vy: state2.vy,
            dragAt: state2.dy
          });
        }, "finish");
        let previouslyScrolling = false;
        const onMoveShouldSet = /* @__PURE__ */ __name((_e, { dy }) => {
          const isScrolled = scrollBridge.y !== 0, isDraggingUp = dy < 0, isNearTop = scrollBridge.paneY - 5 <= scrollBridge.paneMinY;
          return isScrolled ? (previouslyScrolling = true, false) : isNearTop && !isScrolled && isDraggingUp ? false : Math.abs(dy) > 5;
        }, "onMoveShouldSet"), grant = /* @__PURE__ */ __name(() => {
          makeUnselectable(true), stopSpring(), startY = at.current;
        }, "grant");
        let isExternalDrag = false;
        return scrollBridge.drag = (dy) => {
          isExternalDrag || (isExternalDrag = true, grant());
          const to = dy + startY;
          animatedNumber.setValue(resisted(to, minY), { type: "direct" });
        }, scrollBridge.release = release, import_react_native4.PanResponder.create({
          onMoveShouldSetPanResponder: onMoveShouldSet,
          onPanResponderGrant: grant,
          onPanResponderMove: (_e, { dy }) => {
            const toFull = dy + startY, to = resisted(toFull, minY);
            animatedNumber.setValue(to, { type: "direct" });
          },
          onPanResponderEnd: finish,
          onPanResponderTerminate: finish,
          onPanResponderRelease: finish
        });
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [disableDrag, isShowingInnerSheet, animateTo, frameSize, positions, setPosition]
    ), handleAnimationViewLayout = (0, import_react19.useCallback)(
      (e) => {
        var _a;
        const next = (_a = e.nativeEvent) == null ? void 0 : _a.layout.height;
        next && setFrameSize(next);
      },
      [keyboardIsVisible]
    ), handleMaxContentViewLayout = (0, import_react19.useCallback)(
      (e) => {
        var _a;
        const next = (_a = e.nativeEvent) == null ? void 0 : _a.layout.height;
        next && setMaxContentSize(next);
      },
      [keyboardIsVisible]
    ), animatedStyle = useAnimatedNumberStyle(animatedNumber, (val) => {
      "worklet";
      return {
        transform: [{ translateY: frameSize === 0 ? hiddenSize : val }]
      };
    }), sizeBeforeKeyboard = (0, import_react19.useRef)(null);
    (0, import_react19.useEffect)(() => {
      if (import_core12.isWeb || !moveOnKeyboardChange)
        return;
      const keyboardDidShowListener = import_react_native4.Keyboard.addListener("keyboardDidShow", (e) => {
        sizeBeforeKeyboard.current === null && (sizeBeforeKeyboard.current = animatedNumber.getValue(), animatedNumber.setValue(
          Math.max(animatedNumber.getValue() - e.endCoordinates.height, 0)
        ));
      }), keyboardDidHideListener = import_react_native4.Keyboard.addListener("keyboardDidHide", () => {
        sizeBeforeKeyboard.current !== null && (animatedNumber.setValue(sizeBeforeKeyboard.current), sizeBeforeKeyboard.current = null);
      });
      return () => {
        keyboardDidHideListener.remove(), keyboardDidShowListener.remove();
      };
    }, [moveOnKeyboardChange]);
    const [opacity, setOpacity] = (0, import_react19.useState)(open ? 1 : 0);
    open && opacity === 0 && setOpacity(1), (0, import_react19.useEffect)(() => {
      if (!open) {
        const tm = setTimeout(() => {
          setOpacity(0);
        }, 400);
        return () => {
          clearTimeout(tm);
        };
      }
    }, [open]);
    const forcedContentHeight = hasFit ? void 0 : snapPointsMode === "percent" ? `${maxSnapPoint}%` : maxSnapPoint, contents = /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ParentSheetContext.Provider, { value: nextParentContext, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(SheetProvider, { ...providerProps, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(AnimatePresence, { enterExitVariant: "open", children: shouldHideParentSheet || !open ? null : overlayComponent }),
      snapPointsMode !== "percent" && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        import_react_native4.View,
        {
          style: {
            opacity: 0,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: "none"
          },
          pointerEvents: "none",
          onLayout: handleMaxContentViewLayout
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        AnimatedView,
        {
          ref,
          ...panResponder == null ? void 0 : panResponder.panHandlers,
          onLayout: handleAnimationViewLayout,
          pointerEvents: open && !shouldHideParentSheet ? "auto" : "none",
          style: [
            {
              position: "absolute",
              zIndex,
              width: "100%",
              height: forcedContentHeight,
              minHeight: forcedContentHeight,
              opacity
            },
            animatedStyle
          ],
          children: props.children
        }
      )
    ] }) }), adaptContext = (0, import_react19.useContext)(AdaptParentContext), shouldMountChildren = !!(opacity || !unmountChildrenWhenHidden);
    if (modal) {
      const modalContents = /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Portal, { zIndex, ...portalProps, children: shouldMountChildren && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_core12.Theme, { forceClassName: true, name: themeName, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(AdaptParentContext.Provider, { value: adaptContext, children: contents }) }) });
      return import_core12.isWeb ? modalContents : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SheetInsideSheetContext.Provider, { value: onInnerSheet, children: modalContents });
    }
    return contents;
  })
);
function getYPositions(mode, point, screenSize, frameSize) {
  if (!screenSize || !frameSize)
    return 0;
  if (mode === "mixed") {
    if (typeof point == "number")
      return screenSize - Math.min(screenSize, Math.max(0, point));
    if (point === "fit")
      return screenSize - frameSize;
    if (point.endsWith("%")) {
      const pct2 = Math.min(100, Math.max(0, Number(point.slice(0, -1)))) / 100;
      return Number.isNaN(pct2) ? (console.warn("Invalid snapPoint percentage string"), 0) : Math.round(screenSize - pct2 * screenSize);
    }
    return console.warn("Invalid snapPoint unknown value"), 0;
  }
  if (mode === "fit")
    return point === 0 ? screenSize : screenSize - Math.min(screenSize, frameSize);
  if (mode === "constant" && typeof point == "number")
    return screenSize - Math.min(screenSize, Math.max(0, point));
  const pct = Math.min(100, Math.max(0, Number(point))) / 100;
  return Number.isNaN(pct) ? (console.warn("Invalid snapPoint percentage"), 0) : Math.round(screenSize - pct * screenSize);
}
__name(getYPositions, "getYPositions");

// ../../node_modules/@tamagui/sheet/dist/esm/SheetScrollView.js
var import_core13 = require("@tamagui/core");

// ../../node_modules/@tamagui/scroll-view/dist/esm/ScrollView.js
var import_web3 = require("@tamagui/core");
var import_react_native5 = require("react-native-web-lite");
(0, import_web3.setupReactNative)({
  ScrollView: import_react_native5.ScrollView
});
var ScrollView = (0, import_web3.styled)(import_react_native5.ScrollView, {
  name: "ScrollView",
  scrollEnabled: true,
  variants: {
    fullscreen: {
      true: fullscreenStyle
    }
  }
});

// ../../node_modules/@tamagui/sheet/dist/esm/SheetScrollView.js
var import_react20 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var SHEET_SCROLL_VIEW_NAME = "SheetScrollView";
var SheetScrollView = (0, import_react20.forwardRef)(
  ({ __scopeSheet, children, ...props }, ref) => {
    const context = useSheetContext(SHEET_SCROLL_VIEW_NAME, __scopeSheet), { scrollBridge } = context, scrollRef = (0, import_react20.useRef)(null), state = (0, import_react20.useRef)({
      lastPageY: 0,
      dragAt: 0,
      dys: [],
      // store a few recent dys to get velocity on release
      isScrolling: false,
      isDragging: false
    }), release = /* @__PURE__ */ __name(() => {
      if (!state.current.isDragging)
        return;
      state.current.isDragging = false, scrollBridge.scrollStartY = -1, state.current.isScrolling = false;
      let vy = 0;
      if (state.current.dys.length) {
        const recentDys = state.current.dys.slice(-10);
        vy = (recentDys.length ? recentDys.reduce((a, b) => a + b, 0) : 0) / recentDys.length * 0.04;
      }
      state.current.dys = [], scrollBridge.release({
        dragAt: state.current.dragAt,
        vy
      });
    }, "release");
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      ScrollView,
      {
        ref: (0, import_core13.composeRefs)(scrollRef, ref),
        flex: 1,
        scrollEventThrottle: 8,
        onScroll: (e) => {
          const { y } = e.nativeEvent.contentOffset;
          scrollBridge.y = y, y > 0 && (scrollBridge.scrollStartY = -1);
        },
        onStartShouldSetResponder: () => (scrollBridge.scrollStartY = -1, state.current.isDragging = true, true),
        onMoveShouldSetResponder: () => false,
        onResponderRelease: release,
        className: "_ovs-contain",
        ...props,
        children: (0, import_react20.useMemo)(() => children, [children])
      }
    );
  }
);

// ../../node_modules/@tamagui/sheet/dist/esm/useSheetOffscreenSize.js
var useSheetOffscreenSize = /* @__PURE__ */ __name(({
  snapPoints,
  position,
  screenSize,
  frameSize,
  snapPointsMode
}) => {
  if (snapPointsMode === "fit")
    return 0;
  if (snapPointsMode === "constant") {
    const maxSize2 = Number(snapPoints[0]), currentSize2 = Number(snapPoints[position] ?? 0);
    return maxSize2 - currentSize2;
  }
  if (snapPointsMode === "percent") {
    const maxPercentOpened = Number(snapPoints[0]) / 100, percentOpened = Number(snapPoints[position] ?? 0) / 100;
    return (maxPercentOpened - percentOpened) * screenSize;
  }
  const maxSnapPoint = snapPoints[0];
  if (maxSnapPoint === "fit")
    return 0;
  const maxSize = typeof maxSnapPoint == "string" ? Number(maxSnapPoint.slice(0, -1)) / 100 * screenSize : maxSnapPoint, currentSnapPoint = snapPoints[position] ?? 0, currentSize = typeof currentSnapPoint == "string" ? Number(currentSnapPoint.slice(0, -1)) / 100 * screenSize : currentSnapPoint, offscreenSize = maxSize - currentSize;
  return Number.isNaN(offscreenSize) ? 0 : offscreenSize;
}, "useSheetOffscreenSize");

// ../../node_modules/@tamagui/sheet/dist/esm/createSheet.js
var import_jsx_runtime12 = require("react/jsx-runtime");
function createSheet({ Handle: Handle2, Frame: Frame2, Overlay: Overlay2 }) {
  const SheetHandle = Handle2.extractable(
    ({ __scopeSheet, ...props }) => {
      const context = useSheetContext(SHEET_HANDLE_NAME, __scopeSheet);
      return context.onlyShowFrame ? null : (
        // @ts-ignore
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          Handle2,
          {
            onPress: () => {
              const max2 = context.snapPoints.length + (context.dismissOnSnapToBottom ? -1 : 0), nextPos = (context.position + 1) % max2;
              context.setPosition(nextPos);
            },
            open: context.open,
            ...props
          }
        )
      );
    }
  ), SheetOverlay = Overlay2.extractable(
    (0, import_react21.memo)((propsIn) => {
      const { __scopeSheet, ...props } = propsIn, context = useSheetContext(SHEET_OVERLAY_NAME, __scopeSheet), element = (0, import_react21.useMemo)(
        () => (
          // @ts-ignore
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            Overlay2,
            {
              ...props,
              onPress: (0, import_core14.composeEventHandlers)(
                props.onPress,
                context.dismissOnOverlayPress ? () => {
                  context.setOpen(false);
                } : void 0
              )
            }
          )
        ),
        [props.onPress, context.dismissOnOverlayPress]
      );
      return (0, import_core14.useIsomorphicLayoutEffect)(() => {
        var _a;
        (_a = context.onOverlayComponent) == null ? void 0 : _a.call(context, element);
      }, [element]), context.onlyShowFrame, null;
    })
  ), SheetFrame = Frame2.extractable(
    (0, import_react21.forwardRef)(
      ({
        __scopeSheet,
        adjustPaddingForOffscreenContent,
        disableHideBottomOverflow,
        children,
        ...props
      }, forwardedRef) => {
        const context = useSheetContext(SHEET_NAME, __scopeSheet), { hasFit, removeScrollEnabled, frameSize, contentRef } = context, composedContentRef = useComposedRefs(forwardedRef, contentRef), offscreenSize = useSheetOffscreenSize(context), sheetContents = (0, import_react21.useMemo)(() => (
          // @ts-ignore
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
            Frame2,
            {
              ref: composedContentRef,
              flex: hasFit ? 0 : 1,
              height: hasFit ? void 0 : frameSize,
              ...props,
              children: [
                children,
                adjustPaddingForOffscreenContent && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_core14.Stack, { "data-sheet-offscreen-pad": true, height: offscreenSize, width: "100%" })
              ]
            }
          )
        ), [props, frameSize, offscreenSize, adjustPaddingForOffscreenContent, hasFit]);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            RemoveScroll,
            {
              forwardProps: true,
              enabled: removeScrollEnabled,
              allowPinchZoom: true,
              shards: [contentRef],
              removeScrollBar: false,
              children: sheetContents
            }
          ),
          !disableHideBottomOverflow && // @ts-ignore
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            Frame2,
            {
              ...props,
              componentName: "SheetCover",
              children: null,
              position: "absolute",
              bottom: "-50%",
              zIndex: -1,
              height: context.frameSize,
              left: 0,
              right: 0,
              borderWidth: 0,
              borderRadius: 0,
              shadowOpacity: 0
            }
          )
        ] });
      }
    )
  ), Sheet2 = (0, import_react21.forwardRef)(function(props, ref) {
    const hydrated = (0, import_core14.useDidFinishSSR)(), { isShowingNonSheet } = useSheetController();
    let SheetImplementation = SheetImplementationCustom;
    return props.native && import_react_native6.Platform.OS, isShowingNonSheet || !hydrated ? null : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SheetImplementation, { ref, ...props });
  }), components = {
    Frame: SheetFrame,
    Overlay: SheetOverlay,
    Handle: SheetHandle,
    ScrollView: SheetScrollView
  }, Controlled = (0, import_core14.withStaticProperties)(Sheet2, components);
  return (0, import_core14.withStaticProperties)(Sheet2, {
    ...components,
    Controlled
  });
}
__name(createSheet, "createSheet");

// ../../node_modules/@tamagui/sheet/dist/esm/Sheet.js
var Handle = (0, import_core15.styled)(XStack, {
  name: SHEET_HANDLE_NAME,
  variants: {
    open: {
      true: {
        pointerEvents: "auto"
      },
      false: {
        opacity: 0,
        pointerEvents: "none"
      }
    },
    unstyled: {
      false: {
        height: 10,
        borderRadius: 100,
        backgroundColor: "$background",
        zIndex: 10,
        marginHorizontal: "35%",
        marginBottom: "$2",
        opacity: 0.5,
        hoverStyle: {
          opacity: 0.7
        }
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var Overlay = (0, import_core15.styled)(ThemeableStack, {
  name: SHEET_OVERLAY_NAME,
  variants: {
    open: {
      true: {
        opacity: 1,
        pointerEvents: "auto"
      },
      false: {
        opacity: 0,
        pointerEvents: "none"
      }
    },
    unstyled: {
      false: {
        fullscreen: true,
        position: "absolute",
        backgrounded: true,
        zIndex: 1e5 - 1,
        pointerEvents: "auto"
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var Frame = (0, import_core15.styled)(YStack, {
  name: SHEET_NAME,
  variants: {
    unstyled: {
      false: {
        flex: 1,
        backgroundColor: "$background",
        borderTopLeftRadius: "$true",
        borderTopRightRadius: "$true",
        width: "100%",
        maxHeight: "100%",
        overflow: "hidden"
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var Sheet = createSheet({
  Frame,
  Handle,
  Overlay
});
var SheetOverlayFrame = Overlay;
var SheetHandleFrame = Handle;

// ../../node_modules/@tamagui/sheet/dist/esm/useSheet.js
var useSheet = /* @__PURE__ */ __name(() => useSheetContext("", void 0), "useSheet");

// ../../node_modules/@tamagui/sheet/dist/esm/SheetController.js
var import_core16 = require("@tamagui/core");
var import_react22 = require("react");
var import_jsx_runtime13 = require("react/jsx-runtime");
var SheetController = /* @__PURE__ */ __name(({
  children,
  onOpenChange: onOpenChangeProp,
  ...value
}) => {
  const onOpenChange = (0, import_core16.useEvent)(onOpenChangeProp), memoValue = (0, import_react22.useMemo)(
    () => ({
      open: value.open,
      hidden: value.hidden,
      disableDrag: value.disableDrag,
      onOpenChange
    }),
    [onOpenChange, value.open, value.hidden, value.disableDrag]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SheetControllerContext.Provider, { value: memoValue, children });
}, "SheetController");

// ../../node_modules/@tamagui/text/dist/esm/SizableText.js
var import_get_font_sized = __toESM(require_cjs13());
var import_web4 = require("@tamagui/core");
var variants2 = {
  unstyled: {
    false: {
      size: "$true"
    }
  },
  size: import_get_font_sized.getFontSized
};
variants2.fontFamily = {
  "...": (_, extras) => {
    const size2 = extras.props.size || "$true";
    return (0, import_get_font_sized.getFontSized)(size2, extras);
  }
};
var SizableText = (0, import_web4.styled)(import_web4.Text, {
  name: "SizableText",
  fontFamily: "$body",
  variants: variants2,
  defaultVariants: {
    unstyled: false
  }
});

// ../../node_modules/@tamagui/text/dist/esm/Paragraph.js
var import_web5 = require("@tamagui/core");
var Paragraph = (0, import_web5.styled)(SizableText, {
  name: "Paragraph",
  tag: "p",
  userSelect: "auto",
  color: "$color",
  size: "$true"
});

// ../../node_modules/@tamagui/text/dist/esm/Headings.js
var import_web6 = require("@tamagui/core");
var Heading = (0, import_web6.styled)(Paragraph, {
  tag: "span",
  name: "Heading",
  accessibilityRole: "header",
  fontFamily: "$heading",
  size: "$8",
  margin: 0
});
var H1 = (0, import_web6.styled)(Heading, {
  name: "H1",
  tag: "h1",
  size: "$10"
});
var H2 = (0, import_web6.styled)(Heading, {
  name: "H2",
  tag: "h2",
  size: "$9"
});
var H3 = (0, import_web6.styled)(Heading, {
  name: "H3",
  tag: "h3",
  size: "$8"
});
var H4 = (0, import_web6.styled)(Heading, {
  name: "H4",
  tag: "h4",
  size: "$7"
});
var H5 = (0, import_web6.styled)(Heading, {
  name: "H5",
  tag: "h5",
  size: "$6"
});
var H6 = (0, import_web6.styled)(Heading, {
  name: "H6",
  tag: "h6",
  size: "$5"
});

// ../../node_modules/@tamagui/text/dist/esm/wrapChildrenInText.js
var import_react23 = __toESM(require("react"));
var import_jsx_runtime14 = require("react/jsx-runtime");
function wrapChildrenInText(TextComponent, propsIn, extraProps) {
  const {
    children,
    textProps,
    size: size2,
    noTextWrap,
    color,
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    textAlign,
    fontStyle,
    maxFontSizeMultiplier
  } = propsIn;
  if (noTextWrap || !children)
    return [children];
  const props = {
    ...extraProps
  };
  return color && (props.color = color), fontFamily && (props.fontFamily = fontFamily), fontSize && (props.fontSize = fontSize), fontWeight && (props.fontWeight = fontWeight), letterSpacing && (props.letterSpacing = letterSpacing), textAlign && (props.textAlign = textAlign), size2 && (props.size = size2), fontStyle && (props.fontStyle = fontStyle), maxFontSizeMultiplier && (props.maxFontSizeMultiplier = maxFontSizeMultiplier), import_react23.default.Children.toArray(children).map((child, index3) => typeof child == "string" ? (
    // so "data-disable-theme" is a hack to fix themeInverse, don't ask me why
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(TextComponent, { ...props, ...textProps, children: child }, index3)
  ) : child);
}
__name(wrapChildrenInText, "wrapChildrenInText");

// ../../node_modules/@tamagui/dialog/dist/esm/Dialog.js
var React12 = __toESM(require("react"));
var import_jsx_runtime15 = require("react/jsx-runtime");
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var TRIGGER_NAME = "DialogTrigger";
var DialogTriggerFrame = (0, import_core17.styled)(import_core17.View, {
  name: TRIGGER_NAME
});
var DialogTrigger = React12.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...triggerProps } = props, context = useDialogContext(TRIGGER_NAME, __scopeDialog), composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      DialogTriggerFrame,
      {
        tag: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onPress: (0, import_core17.composeEventHandlers)(props.onPress, context.onOpenToggle)
      }
    );
  }
);
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DialogPortal";
var [PortalProvider2, usePortalContext] = createDialogContext(
  PORTAL_NAME,
  {
    forceMount: void 0
  }
);
var DialogPortalFrame = (0, import_core17.styled)(YStack, {
  variants: {
    unstyled: {
      false: {
        alignItems: "center",
        justifyContent: "center",
        fullscreen: true,
        zIndex: 1e5,
        ...import_core17.isWeb && {
          maxHeight: "100vh",
          position: "fixed"
        }
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var DialogPortalItem = /* @__PURE__ */ __name((props) => {
  const themeName = (0, import_core17.useThemeName)(), context = useDialogContext(PORTAL_NAME, props.__scopeDialog);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(PortalItem, { hostName: props.hostName, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogPortalItemContent, { ...props, themeName, context }) });
}, "DialogPortalItem");
function DialogPortalItemContent(props) {
  const {
    __scopeDialog,
    children,
    context,
    themeName,
    space,
    spaceDirection,
    separator
  } = props;
  let childrenSpaced = children;
  return (space || separator) && (childrenSpaced = (0, import_core17.spacedChildren)({
    children,
    separator,
    space,
    direction: spaceDirection
  })), /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogProvider, { scope: __scopeDialog, ...context, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_core17.Theme, { name: themeName, children: childrenSpaced }) });
}
__name(DialogPortalItemContent, "DialogPortalItemContent");
var DialogPortal = /* @__PURE__ */ __name((props) => {
  const { __scopeDialog, forceMount, children, ...frameProps } = props, context = useDialogContext(PORTAL_NAME, __scopeDialog), isShowing = forceMount || context.open, [isFullyHidden, setIsFullyHidden] = React12.useState(!isShowing);
  isShowing && isFullyHidden && setIsFullyHidden(false);
  const contents = /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    AnimatePresence,
    {
      onExitComplete: () => {
        setIsFullyHidden(true);
      },
      children: isShowing ? children : null
    }
  );
  return useShowDialogSheet(context) ? children : context.modal ? isFullyHidden ? null : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogPortalItem, { __scopeDialog, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(PortalProvider2, { scope: __scopeDialog, forceMount, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogPortalFrame, { pointerEvents: isShowing ? "auto" : "none", ...frameProps, children: contents }) }) }) : contents;
}, "DialogPortal");
DialogPortal.displayName = PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlayFrame = (0, import_core17.styled)(Overlay, {
  name: OVERLAY_NAME
});
var DialogOverlay = DialogOverlayFrame.extractable(
  React12.forwardRef(
    ({ __scopeDialog, ...props }, forwardedRef) => {
      const portalContext = usePortalContext(OVERLAY_NAME, __scopeDialog), { forceMount = portalContext.forceMount, ...overlayProps } = props, context = useDialogContext(OVERLAY_NAME, __scopeDialog), showSheet = useShowDialogSheet(context);
      return !forceMount && (!context.modal || showSheet) ? null : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogOverlayImpl, { context, ...overlayProps, ref: forwardedRef });
    }
  )
);
DialogOverlay.displayName = OVERLAY_NAME;
var DialogOverlayImpl = React12.forwardRef(
  (props, forwardedRef) => {
    const { context, ...overlayProps } = props;
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        DialogOverlayFrame,
        {
          "data-state": getState(context.open),
          pointerEvents: context.open ? "auto" : "none",
          ...overlayProps,
          ref: forwardedRef
        }
      )
    );
  }
);
var CONTENT_NAME = "DialogContent";
var DialogContentFrame = (0, import_core17.styled)(ThemeableStack, {
  name: CONTENT_NAME,
  tag: "dialog",
  variants: {
    size: {
      "...size": (val, extras) => ({})
    },
    unstyled: {
      false: {
        position: "relative",
        backgrounded: true,
        padded: true,
        radiused: true,
        elevate: true,
        zIndex: 1e5
      }
    }
  },
  defaultVariants: {
    size: "$true",
    unstyled: false
  }
});
var DialogContent = DialogContentFrame.extractable(
  React12.forwardRef(
    ({ __scopeDialog, ...props }, forwardedRef) => {
      const portalContext = usePortalContext(CONTENT_NAME, __scopeDialog), { forceMount = portalContext.forceMount, ...contentProps } = props, context = useDialogContext(CONTENT_NAME, __scopeDialog), contents = context.modal ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogContentModal, { context, ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogContentNonModal, { context, ...contentProps, ref: forwardedRef });
      return !import_core17.isWeb || context.disableRemoveScroll ? contents : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        RemoveScroll,
        {
          forwardProps: true,
          enabled: context.open,
          allowPinchZoom: context.allowPinchZoom,
          shards: [context.contentRef],
          removeScrollBar: false,
          children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { "data-remove-scroll-container": true, className: "_dsp_contents", children: contents })
        }
      );
    }
  )
);
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = React12.forwardRef(
  ({ children, context, ...props }, forwardedRef) => {
    const contentRef = React12.useRef(null), composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    return import_core17.isWeb && React12.useEffect(() => {
      if (!context.open)
        return;
      const content = contentRef.current;
      if (content)
        return (0, import_aria_hidden.hideOthers)(content);
    }, [context.open]), /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      DialogContentImpl,
      {
        ...props,
        context,
        ref: composedRefs,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: (0, import_core17.composeEventHandlers)(props.onCloseAutoFocus, (event) => {
          var _a;
          event.preventDefault(), (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
        }),
        onPointerDownOutside: (0, import_core17.composeEventHandlers)(
          props.onPointerDownOutside,
          (event) => {
            const originalEvent = event.detail.originalEvent, ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            (originalEvent.button === 2 || ctrlLeftClick) && event.preventDefault();
          }
        ),
        onFocusOutside: (0, import_core17.composeEventHandlers)(
          props.onFocusOutside,
          (event) => event.preventDefault()
        ),
        children
      }
    );
  }
);
var DialogContentNonModal = React12.forwardRef(
  (props, forwardedRef) => {
    const hasInteractedOutsideRef = React12.useRef(false);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      DialogContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          var _a, _b;
          (_a = props.onCloseAutoFocus) == null ? void 0 : _a.call(props, event), event.defaultPrevented || (hasInteractedOutsideRef.current || ((_b = props.context.triggerRef.current) == null ? void 0 : _b.focus()), event.preventDefault()), hasInteractedOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          var _a;
          (_a = props.onInteractOutside) == null ? void 0 : _a.call(props, event), event.defaultPrevented || (hasInteractedOutsideRef.current = true);
          const target = event.target, trigger = props.context.triggerRef.current;
          if (!(trigger instanceof HTMLElement))
            return;
          trigger.contains(target) && event.preventDefault();
        }
      }
    );
  }
);
var DialogContentImpl = React12.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeDialog,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      context,
      ...contentProps
    } = props, contentRef = React12.useRef(null), composedRefs = useComposedRefs(forwardedRef, contentRef), showSheet = useShowDialogSheet(context), contents = /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      DialogContentFrame,
      {
        id: context.contentId,
        "aria-describedby": context.descriptionId,
        "aria-labelledby": context.titleId,
        "data-state": getState(context.open),
        ...contentProps
      }
    );
    return showSheet ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogPortalItem, { hostName: getSheetContentsName(context), children: contentProps.children }) : import_core17.isWeb ? /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        import_focus_scope.FocusScope,
        {
          loop: true,
          enabled: context.open,
          trapped: trapFocus,
          onMountAutoFocus: onOpenAutoFocus,
          forceUnmount: !context.open,
          onUnmountAutoFocus: onCloseAutoFocus,
          children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            Dismissable,
            {
              disableOutsidePointerEvents: context.open && disableOutsidePointerEvents,
              forceUnmount: !context.open,
              onEscapeKeyDown,
              onPointerDownOutside,
              onFocusOutside,
              onInteractOutside,
              ref: composedRefs,
              onDismiss: () => context.onOpenChange(false),
              children: contents
            }
          )
        }
      ),
      process.env.NODE_ENV === "development" && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TitleWarning, { titleId: context.titleId }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          DescriptionWarning,
          {
            contentRef,
            descriptionId: context.descriptionId
          }
        )
      ] })
    ] }) : contents;
  }
);
var TITLE_NAME = "DialogTitle";
var DialogTitleFrame = (0, import_core17.styled)(H2, {
  name: TITLE_NAME
});
var DialogTitle = React12.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...titleProps } = props, context = useDialogContext(TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogTitleFrame, { id: context.titleId, ...titleProps, ref: forwardedRef });
  }
);
DialogTitle.displayName = TITLE_NAME;
var DialogDescriptionFrame = (0, import_core17.styled)(Paragraph, {
  name: "DialogDescription"
});
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = React12.forwardRef((props, forwardedRef) => {
  const { __scopeDialog, ...descriptionProps } = props, context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    DialogDescriptionFrame,
    {
      id: context.descriptionId,
      ...descriptionProps,
      ref: forwardedRef
    }
  );
});
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogCloseFrame = (0, import_core17.styled)(import_core17.View, {
  name: CLOSE_NAME,
  tag: "button",
  variants: {
    unstyled: {
      false: {
        zIndex: 100
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var DialogClose = DialogCloseFrame.styleable(
  (props, forwardedRef) => {
    const { __scopeDialog, displayWhenAdapted, ...closeProps } = props, context = useDialogContext(CLOSE_NAME, __scopeDialog, {
      warn: false,
      fallback: {}
    });
    return useShowDialogSheet(context) && !displayWhenAdapted ? null : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      DialogCloseFrame,
      {
        accessibilityLabel: "Dialog Close",
        ...closeProps,
        ref: forwardedRef,
        onPress: (0, import_core17.composeEventHandlers)(
          props.onPress,
          () => context.onOpenChange(false)
        )
      }
    );
  }
);
function getState(open) {
  return open ? "open" : "closed";
}
__name(getState, "getState");
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [DialogWarningProvider, useWarningContext] = createContext3(TITLE_WARNING_NAME, {
  contentName: CONTENT_NAME,
  titleName: TITLE_NAME,
  docsSlug: "dialog"
});
var TitleWarning = /* @__PURE__ */ __name(({ titleId }) => {
  if (process.env.NODE_ENV === "development") {
    const titleWarningContext = useWarningContext(TITLE_WARNING_NAME), MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.`;
    React12.useEffect(() => {
      import_core17.isWeb && titleId && (document.getElementById(titleId) || console.warn(MESSAGE));
    }, [MESSAGE, titleId]);
  }
  return null;
}, "TitleWarning");
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = /* @__PURE__ */ __name(({
  contentRef,
  descriptionId
}) => {
  if (process.env.NODE_ENV === "development") {
    const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${useWarningContext(DESCRIPTION_WARNING_NAME).contentName}}.`;
    React12.useEffect(() => {
      if (!import_core17.isWeb)
        return;
      const contentNode = contentRef.current;
      if (!(contentNode instanceof HTMLElement))
        return;
      const describedById = contentNode.getAttribute("aria-describedby");
      descriptionId && describedById && (document.getElementById(descriptionId) || console.warn(MESSAGE));
    }, [MESSAGE, contentRef, descriptionId]);
  }
  return null;
}, "DescriptionWarning");
var Dialog = (0, import_core17.withStaticProperties)(
  React12.forwardRef(function(props, ref) {
    const {
      __scopeDialog,
      children,
      open: openProp,
      defaultOpen = false,
      onOpenChange,
      modal = true,
      allowPinchZoom = false,
      disableRemoveScroll = false
    } = props, baseId = React12.useId(), scopeId = `scope-${baseId}`, contentId = `content-${baseId}`, titleId = `title-${baseId}`, descriptionId = `description-${baseId}`, scopeKey = __scopeDialog ? Object.keys(__scopeDialog)[0] : scopeId, sheetContentsName = getSheetContentsName({ scopeKey, contentId }), triggerRef = React12.useRef(null), contentRef = React12.useRef(null), [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpenChange
    }), onOpenToggle = React12.useCallback(() => {
      setOpen((prevOpen) => !prevOpen);
    }, [setOpen]), context = {
      scope: __scopeDialog,
      scopeKey,
      triggerRef,
      contentRef,
      contentId,
      titleId,
      descriptionId,
      open,
      onOpenChange: setOpen,
      onOpenToggle,
      modal,
      allowPinchZoom
    }, { when, AdaptProvider } = useAdaptParent({
      Contents: React12.useCallback(
        (props2) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(PortalHost, { forwardProps: props2, name: sheetContentsName }),
        [sheetContentsName]
      )
    });
    return React12.useImperativeHandle(
      ref,
      () => ({
        open: setOpen
      }),
      [setOpen]
    ), /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(AdaptProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      DialogProvider,
      {
        ...context,
        sheetBreakpoint: when,
        disableRemoveScroll,
        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogSheetController, { onOpenChange: setOpen, __scopeDialog, children })
      }
    ) });
  }),
  {
    Trigger: DialogTrigger,
    Portal: DialogPortal,
    Overlay: DialogOverlay,
    Content: DialogContent,
    Title: DialogTitle,
    Description: DialogDescription,
    Close: DialogClose,
    Sheet: Sheet.Controlled,
    Adapt
  }
);
var SHEET_CONTENTS_NAME = "DialogSheetContents";
var DialogSheetContents = /* @__PURE__ */ __name(({
  name,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(PortalHost, { forwardProps: props, name }), "DialogSheetContents");
DialogSheetContents.displayName = SHEET_CONTENTS_NAME;
var getSheetContentsName = /* @__PURE__ */ __name(({
  scopeKey,
  contentId
}) => `${scopeKey || contentId}SheetContents`, "getSheetContentsName");
var DialogSheetController = /* @__PURE__ */ __name((props) => {
  const context = useDialogContext("DialogSheetController", props.__scopeDialog), showSheet = useShowDialogSheet(context), breakpointActive = useSheetBreakpointActive(context), getShowSheet = (0, import_core17.useGet)(showSheet);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    SheetController,
    {
      onOpenChange: (val) => {
        getShowSheet() && props.onOpenChange(val);
      },
      open: context.open,
      hidden: breakpointActive === false,
      children: props.children
    }
  );
}, "DialogSheetController");
var useSheetBreakpointActive = /* @__PURE__ */ __name((context) => {
  const media = (0, import_core17.useMedia)();
  return context.sheetBreakpoint ? context.sheetBreakpoint === true ? true : media[context.sheetBreakpoint] : false;
}, "useSheetBreakpointActive");
var useShowDialogSheet = /* @__PURE__ */ __name((context) => {
  const breakpointActive = useSheetBreakpointActive(context);
  return context.open === false ? false : breakpointActive;
}, "useShowDialogSheet");

// ../../node_modules/@tamagui/alert-dialog/dist/esm/AlertDialog.js
var React13 = __toESM(require("react"));
var import_react_native7 = require("react-native-web-lite");
var import_jsx_runtime16 = require("react/jsx-runtime");
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext, createAlertDialogScope] = createContextScope(ROOT_NAME, [
  createDialogScope
]);
var useDialogScope = createDialogScope();
var TRIGGER_NAME2 = "AlertDialogTrigger";
var NativeAlertDialogTriggerFrame = (0, import_core18.styled)(import_core18.View, {
  name: TRIGGER_NAME2
});
var AlertDialogTrigger = React13.forwardRef(
  (props, forwardedRef) => {
    if (props.__native) {
      const { __native, onPress, __onPress, ...rest } = props;
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        NativeAlertDialogTriggerFrame,
        {
          ...rest,
          onPress: (0, import_core18.composeEventHandlers)(onPress, __onPress)
        }
      );
    }
    const { __scopeAlertDialog, ...triggerProps } = props, dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogTrigger, { ...dialogScope, ...triggerProps, ref: forwardedRef });
  }
);
AlertDialogTrigger.displayName = TRIGGER_NAME2;
var PORTAL_NAME2 = "AlertDialogPortal";
var AlertDialogPortal = /* @__PURE__ */ __name((props) => {
  const { __scopeAlertDialog, ...portalProps } = props, dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogPortal, { ...dialogScope, ...portalProps });
}, "AlertDialogPortal");
AlertDialogPortal.displayName = PORTAL_NAME2;
var OVERLAY_NAME2 = "AlertDialogOverlay";
var AlertDialogOverlayFrame = (0, import_core18.styled)(DialogOverlayFrame, {
  name: OVERLAY_NAME2
});
var AlertDialogOverlay = AlertDialogOverlayFrame.extractable(
  React13.forwardRef(
    (props, forwardedRef) => {
      const { __scopeAlertDialog, ...overlayProps } = props, dialogScope = useDialogScope(__scopeAlertDialog);
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogOverlay, { ...dialogScope, ...overlayProps, ref: forwardedRef });
    }
  )
);
AlertDialogOverlay.displayName = OVERLAY_NAME2;
var CONTENT_NAME2 = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME2);
var AlertDialogContent = React13.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, children, ...contentProps } = props, dialogScope = useDialogScope(__scopeAlertDialog), contentRef = React13.useRef(null), composedRefs = useComposedRefs(forwardedRef, contentRef), cancelRef = React13.useRef(null);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      DialogWarningProvider,
      {
        contentName: CONTENT_NAME2,
        titleName: TITLE_NAME2,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(AlertDialogContentProvider, { scope: __scopeAlertDialog, cancelRef, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
          DialogContent,
          {
            role: "alertdialog",
            ...dialogScope,
            ...contentProps,
            ref: composedRefs,
            onOpenAutoFocus: (0, import_core18.composeEventHandlers)(
              contentProps.onOpenAutoFocus,
              (event) => {
                var _a;
                event.preventDefault(), import_core18.isWeb && ((_a = cancelRef.current) == null ? void 0 : _a.focus({ preventScroll: true }));
              }
            ),
            onPointerDownOutside: (event) => event.preventDefault(),
            onInteractOutside: (event) => event.preventDefault(),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_core18.Slottable, { children }),
              process.env.NODE_ENV === "development" && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DescriptionWarning2, { contentRef })
            ]
          }
        ) })
      }
    );
  }
);
AlertDialogContent.displayName = CONTENT_NAME2;
var TITLE_NAME2 = "AlertDialogTitle";
var AlertDialogTitle = React13.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...titleProps } = props, dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogTitle, { ...dialogScope, ...titleProps, ref: forwardedRef });
  }
);
AlertDialogTitle.displayName = TITLE_NAME2;
var DESCRIPTION_NAME2 = "AlertDialogDescription";
var AlertDialogDescription = React13.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props, dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogDescription, { ...dialogScope, ...descriptionProps, ref: forwardedRef });
});
AlertDialogDescription.displayName = DESCRIPTION_NAME2;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction = React13.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...actionProps } = props, dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogClose, { ...dialogScope, ...actionProps, ref: forwardedRef });
  }
);
AlertDialogAction.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel = React13.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...cancelProps } = props, { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog), dialogScope = useDialogScope(__scopeAlertDialog), ref = useComposedRefs(forwardedRef, cancelRef);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogClose, { ...dialogScope, ...cancelProps, ref });
  }
);
AlertDialogCancel.displayName = CANCEL_NAME;
var DescriptionWarning2 = /* @__PURE__ */ __name(({ contentRef }) => (process.env.NODE_ENV === "development" && React13.useEffect(() => {
  var _a;
  if (!import_core18.isWeb)
    return;
  document.getElementById(
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby")
  ) || console.warn(`\`${CONTENT_NAME2}\` requires a description for the component to be accessible for screen reader users.
  
        You can add a description to the \`${CONTENT_NAME2}\` by passing a \`${DESCRIPTION_NAME2}\` component as a child, which also benefits sighted users by adding visible context to the dialog.
        
        Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME2}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.
        
        For more information, see https://tamagui.dev/docs/components/alert-dialog`);
}, [contentRef]), null), "DescriptionWarning");
var AlertDialogInner = /* @__PURE__ */ __name((props) => {
  const { __scopeAlertDialog, native, ...alertDialogProps } = props, dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Dialog, { ...dialogScope, ...alertDialogProps, modal: true });
}, "AlertDialogInner");
var AlertDialog = (0, import_core18.withStaticProperties)(AlertDialogInner, {
  Trigger: AlertDialogTrigger,
  Portal: AlertDialogPortal,
  Overlay: AlertDialogOverlay,
  Content: AlertDialogContent,
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription
});
AlertDialog.displayName = ROOT_NAME;

// ../../node_modules/@tamagui/avatar/dist/esm/Avatar.js
var import_core19 = require("@tamagui/core");
var import_image = __toESM(require_cjs19());

// ../../node_modules/@tamagui/shapes/dist/esm/Square.js
var import_web7 = require("@tamagui/core");

// ../../node_modules/@tamagui/shapes/dist/esm/getShapeSize.js
var getShapeSize = /* @__PURE__ */ __name((size2, { tokens }) => {
  const width = tokens.size[size2] ?? size2, height = tokens.size[size2] ?? size2;
  return {
    width,
    height,
    minWidth: width,
    maxWidth: width,
    maxHeight: height,
    minHeight: height
  };
}, "getShapeSize");

// ../../node_modules/@tamagui/shapes/dist/esm/Square.js
var Square = (0, import_web7.styled)(ThemeableStack, {
  name: "Square",
  alignItems: "center",
  justifyContent: "center",
  variants: {
    size: {
      "...size": getShapeSize
    }
  }
});

// ../../node_modules/@tamagui/shapes/dist/esm/Circle.js
var import_web8 = require("@tamagui/core");
var Circle = (0, import_web8.styled)(Square, {
  name: "Circle",
  circular: true
});

// ../../node_modules/@tamagui/avatar/dist/esm/Avatar.js
var React14 = __toESM(require("react"));
var import_jsx_runtime17 = require("react/jsx-runtime");
var AVATAR_NAME = "Avatar";
var [createAvatarContext, createAvatarScope] = createContextScope(AVATAR_NAME);
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var IMAGE_NAME = "AvatarImage";
var AvatarImage = React14.forwardRef(
  (props, forwardedRef) => {
    var _a;
    const { __scopeAvatar, src, onLoadingStatusChange = /* @__PURE__ */ __name(() => {
    }, "onLoadingStatusChange"), ...imageProps } = props, context = useAvatarContext(IMAGE_NAME, __scopeAvatar), [status, setStatus] = React14.useState("idle"), shapeSize = (0, import_core19.getVariableValue)(
      (_a = getShapeSize(
        context.size,
        // @ts-expect-error
        { tokens: (0, import_core19.getTokens)() }
      )) == null ? void 0 : _a.width
    );
    return React14.useEffect(() => {
      setStatus("idle");
    }, [JSON.stringify(src)]), React14.useEffect(() => {
      onLoadingStatusChange(status), context.onImageLoadingStatusChange(status);
    }, [status]), /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(YStack, { fullscreen: true, zIndex: 1, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      import_image.Image,
      {
        fullscreen: true,
        ...typeof shapeSize == "number" && !isNaN(shapeSize) && {
          width: shapeSize,
          height: shapeSize
        },
        ...imageProps,
        ref: forwardedRef,
        src,
        onError: () => {
          setStatus("error");
        },
        onLoad: () => {
          setStatus("loaded");
        }
      }
    ) });
  }
);
AvatarImage.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallbackFrame = (0, import_core19.styled)(YStack, {
  name: FALLBACK_NAME,
  position: "absolute",
  fullscreen: true,
  zIndex: 0
});
var AvatarFallback = AvatarFallbackFrame.extractable(
  React14.forwardRef(
    (props, forwardedRef) => {
      const { __scopeAvatar, delayMs, ...fallbackProps } = props, context = useAvatarContext(FALLBACK_NAME, __scopeAvatar), [canRender, setCanRender] = React14.useState(delayMs === void 0);
      return React14.useEffect(() => {
        if (delayMs !== void 0) {
          const timerId = setTimeout(() => setCanRender(true), delayMs);
          return () => clearTimeout(timerId);
        }
      }, [delayMs]), canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(AvatarFallbackFrame, { ...fallbackProps, ref: forwardedRef }) : null;
    }
  )
);
AvatarFallback.displayName = FALLBACK_NAME;
var AvatarFrame = (0, import_core19.styled)(Square, {
  name: AVATAR_NAME,
  position: "relative",
  overflow: "hidden"
});
var Avatar = (0, import_core19.withStaticProperties)(
  React14.forwardRef(
    (props, forwardedRef) => {
      const { __scopeAvatar, size: size2 = "$true", ...avatarProps } = props, [imageLoadingStatus, setImageLoadingStatus] = React14.useState("idle");
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        AvatarProvider,
        {
          size: size2,
          scope: __scopeAvatar,
          imageLoadingStatus,
          onImageLoadingStatusChange: setImageLoadingStatus,
          children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(AvatarFrame, { size: size2, ...avatarProps, ref: forwardedRef })
        }
      );
    }
  ),
  {
    Image: AvatarImage,
    Fallback: AvatarFallback
  }
);
Avatar.displayName = AVATAR_NAME;

// ../../node_modules/@tamagui/button/dist/esm/Button.js
var import_font_size = __toESM(require_cjs20());
var import_get_button_sized2 = __toESM(require_cjs11());
var import_helpers_tamagui = __toESM(require_cjs24());
var import_web9 = require("@tamagui/core");
var import_react24 = require("react");
var import_jsx_runtime18 = require("react/jsx-runtime");
var ButtonContext = (0, import_web9.createStyledContext)({});
var BUTTON_NAME = "Button";
var ButtonFrame = (0, import_web9.styled)(ThemeableStack, {
  name: BUTTON_NAME,
  tag: "button",
  context: ButtonContext,
  focusable: true,
  role: "button",
  variants: {
    unstyled: {
      false: {
        size: "$true",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexDirection: "row",
        cursor: "pointer",
        hoverTheme: true,
        pressTheme: true,
        backgrounded: true,
        borderWidth: 1,
        borderColor: "transparent",
        focusStyle: {
          outlineColor: "$borderColorFocus",
          outlineStyle: "solid",
          outlineWidth: 2
        }
      }
    },
    variant: {
      outlined: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "$borderColor",
        hoverStyle: {
          backgroundColor: "transparent",
          borderColor: "$borderColorHover"
        },
        pressStyle: {
          backgroundColor: "transparent",
          borderColor: "$borderColorPress"
        },
        focusStyle: {
          backgroundColor: "transparent",
          borderColor: "$borderColorFocus"
        }
      }
    },
    size: {
      "...size": import_get_button_sized2.getButtonSized
    },
    disabled: {
      true: {
        pointerEvents: "none"
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var ButtonText = (0, import_web9.styled)(SizableText, {
  name: "Button",
  // same name as the frame so they can share a single theme
  context: ButtonContext,
  variants: {
    unstyled: {
      false: {
        userSelect: "none",
        cursor: "pointer",
        // flexGrow 1 leads to inconsistent native style where text pushes to start of view
        flexGrow: 0,
        flexShrink: 1,
        ellipse: true,
        color: "$color"
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var ButtonIcon = /* @__PURE__ */ __name((props) => {
  const { children, scaleIcon = 1 } = props, { size: size2, color } = (0, import_react24.useContext)(ButtonContext), iconSize = (typeof size2 == "number" ? size2 * 0.5 : (0, import_font_size.getFontSize)(size2)) * scaleIcon;
  return (0, import_helpers_tamagui.useGetThemedIcon)({ size: iconSize, color })(children);
}, "ButtonIcon");
var ButtonComponent = ButtonFrame.styleable(function(props, ref) {
  const { props: buttonProps } = useButton(props);
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ButtonFrame, { ...buttonProps, ref });
});
var buttonStaticConfig = {
  inlineProps: /* @__PURE__ */ new Set([
    // text props go here (can't really optimize them, but we never fully extract button anyway)
    // may be able to remove this entirely, as the compiler / runtime have gotten better
    "color",
    "fontWeight",
    "fontSize",
    "fontFamily",
    "fontStyle",
    "letterSpacing",
    "textAlign",
    "unstyled"
  ])
};
var Button2 = (0, import_web9.withStaticProperties)(ButtonComponent, {
  Text: ButtonText,
  Icon: ButtonIcon
});
var ButtonNestingContext = (0, import_react24.createContext)(false);
function useButton(propsIn, { Text: Text5 = Button2.Text } = { Text: Button2.Text }) {
  const {
    children,
    icon,
    iconAfter,
    noTextWrap,
    theme: themeName,
    space,
    spaceFlex,
    scaleIcon = 1,
    scaleSpace = 0.66,
    separator,
    // text props
    color,
    fontWeight,
    letterSpacing,
    fontSize,
    fontFamily,
    fontStyle,
    textAlign,
    textProps,
    ...rest
  } = propsIn, isNested = (0, import_react24.useContext)(ButtonNestingContext), propsActive = (0, import_web9.useProps)(propsIn), size2 = propsActive.size || (propsActive.unstyled ? void 0 : "$true"), iconSize = (typeof size2 == "number" ? size2 * 0.5 : (0, import_font_size.getFontSize)(size2)) * scaleIcon, getThemedIcon = (0, import_helpers_tamagui.useGetThemedIcon)({ size: iconSize, color }), [themedIcon, themedIconAfter] = [icon, iconAfter].map(getThemedIcon), spaceSize = propsActive.space ?? (0, import_web9.getVariableValue)(iconSize) * scaleSpace, contents = wrapChildrenInText(
    Text5,
    propsActive,
    Text5 === ButtonText && propsIn.unstyled !== true ? {
      unstyled: false,
      size: size2
    } : void 0
  ), inner2 = (0, import_web9.spacedChildren)({
    // a bit arbitrary but scaling to font size is necessary so long as button does
    space: spaceSize,
    spaceFlex,
    separator,
    direction: propsActive.flexDirection === "column" || propsActive.flexDirection === "column-reverse" ? "vertical" : "horizontal",
    children: [themedIcon, ...contents, themedIconAfter]
  }), tag = isNested ? "span" : (
    // defaults to <a /> when accessibilityRole = link
    // see https://github.com/tamagui/tamagui/issues/505
    propsIn.accessibilityRole === "link" ? "a" : void 0
  ), props = {
    ...propsActive.disabled && {
      // in rnw - false still has keyboard tabIndex, undefined = not actually focusable
      focusable: void 0,
      // even with tabIndex unset, it will keep focusStyle on web so disable it here
      focusStyle: {
        borderColor: "$background"
      }
    },
    ...tag && {
      tag
    },
    ...rest,
    children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ButtonNestingContext.Provider, { value: true, children: inner2 })
  };
  return {
    spaceSize,
    isNested,
    props
  };
}
__name(useButton, "useButton");

// ../../node_modules/@tamagui/card/dist/esm/Card.js
var import_web10 = require("@tamagui/core");
var CardContext = (0, import_web10.createStyledContext)({
  size: "$true"
});
var CardFrame = (0, import_web10.styled)(ThemeableStack, {
  name: "Card",
  context: CardContext,
  variants: {
    unstyled: {
      false: {
        size: "$true",
        backgroundColor: "$background",
        position: "relative"
      }
    },
    size: {
      "...size": (val, { tokens }) => ({
        borderRadius: tokens.radius[val] ?? val
      })
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var CardHeader = (0, import_web10.styled)(ThemeableStack, {
  name: "CardHeader",
  context: CardContext,
  variants: {
    unstyled: {
      false: {
        zIndex: 10,
        backgroundColor: "transparent",
        marginBottom: "auto"
      }
    },
    size: {
      "...size": (val, { tokens }) => ({
        padding: tokens.space[val] ?? val
      })
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var CardFooter = (0, import_web10.styled)(CardHeader, {
  name: "CardFooter",
  variants: {
    unstyled: {
      false: {
        zIndex: 5,
        flexDirection: "row",
        marginTop: "auto",
        marginBottom: 0
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var CardBackground = (0, import_web10.styled)(ThemeableStack, {
  name: "CardBackground",
  variants: {
    unstyled: {
      false: {
        zIndex: 0,
        fullscreen: true,
        overflow: "hidden",
        pointerEvents: "none",
        padding: 0
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var Card = (0, import_web10.withStaticProperties)(CardFrame, {
  Header: CardHeader,
  Footer: CardFooter,
  Background: CardBackground
});

// ../../node_modules/@tamagui/checkbox/dist/esm/Checkbox.js
var import_core20 = require("@tamagui/core");
var import_font_size2 = __toESM(require_cjs20());
var import_get_token = __toESM(require_cjs10());
var import_helpers_tamagui2 = __toESM(require_cjs24());

// ../../node_modules/@tamagui/label/dist/esm/Label.js
var import_focusable = __toESM(require_cjs25());
var import_get_button_sized3 = __toESM(require_cjs11());
var import_get_font_sized2 = __toESM(require_cjs13());
var import_web11 = require("@tamagui/core");
var React15 = __toESM(require("react"));
var import_jsx_runtime19 = require("react/jsx-runtime");
var NAME = "Label";
var [LabelProvider, useLabelContextImpl] = createContext3(NAME, {
  id: void 0,
  controlRef: { current: null }
});
var LabelFrame = (0, import_web11.styled)(SizableText, {
  name: "Label",
  tag: "label",
  variants: {
    unstyled: {
      false: {
        size: "$true",
        color: "$color",
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        userSelect: "none",
        cursor: "default",
        pressStyle: {
          color: "$colorPress"
        }
      }
    },
    size: {
      "...size": (val, extras) => {
        var _a;
        const buttonHeight = (_a = (0, import_get_button_sized3.getButtonSized)(val, extras)) == null ? void 0 : _a.height;
        return {
          ...(0, import_get_font_sized2.getFontSized)(val, extras),
          lineHeight: buttonHeight ? extras.tokens.size[buttonHeight] : void 0
        };
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var LabelComponent = React15.forwardRef(
  (props, forwardedRef) => {
    const { htmlFor, id: idProp, ...labelProps } = props, controlRef = React15.useRef(null), ref = React15.useRef(null), composedRefs = useComposedRefs(forwardedRef, ref), backupId = React15.useId(), id = idProp ?? backupId;
    return import_web11.isWeb && React15.useEffect(() => {
      if (htmlFor) {
        const element = document.getElementById(htmlFor);
        if (ref.current && element) {
          const getAriaLabel = /* @__PURE__ */ __name(() => element.getAttribute("aria-labelledby"), "getAriaLabel"), ariaLabelledBy = [id, getAriaLabel()].filter(Boolean).join(" ");
          return element.setAttribute("aria-labelledby", ariaLabelledBy), controlRef.current = element, () => {
            var _a;
            if (!id)
              return;
            const ariaLabelledBy2 = (_a = getAriaLabel()) == null ? void 0 : _a.replace(id, "");
            ariaLabelledBy2 === "" ? element.removeAttribute("aria-labelledby") : ariaLabelledBy2 && element.setAttribute("aria-labelledby", ariaLabelledBy2);
          };
        }
      }
    }, [id, htmlFor]), /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(LabelProvider, { id, controlRef, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      LabelFrame,
      {
        id,
        htmlFor,
        ...labelProps,
        ref: composedRefs,
        onMouseDown: (event) => {
          var _a;
          (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event), !event.defaultPrevented && event.detail > 1 && event.preventDefault();
        },
        onPress: (event) => {
          var _a;
          if ((_a = props.onPress) == null ? void 0 : _a.call(props, event), import_web11.isWeb) {
            if (htmlFor || !controlRef.current || event.defaultPrevented)
              return;
            const isClickingControl = controlRef.current.contains(
              event.target
            ), isUserClick = event.isTrusted === true;
            !isClickingControl && isUserClick && (controlRef.current.click(), controlRef.current.focus());
          } else
            props.htmlFor && (0, import_focusable.focusFocusable)(props.htmlFor);
        }
      }
    ) });
  }
);
LabelComponent.displayName = NAME;
var Label = LabelFrame.extractable((0, import_web11.themeable)(LabelComponent), {
  neverFlatten: true
});
var useLabelContext = /* @__PURE__ */ __name((element) => {
  const context = useLabelContextImpl("LabelConsumer"), { controlRef } = context;
  return React15.useEffect(() => {
    element && (controlRef.current = element);
  }, [element, controlRef]), context.id;
}, "useLabelContext");

// ../../node_modules/@tamagui/use-previous/dist/esm/index.js
var import_react25 = require("react");
function usePrevious(value) {
  const ref = (0, import_react25.useRef)({ value, previous: value });
  return (0, import_react25.useMemo)(() => (ref.current.value !== value && (ref.current.previous = ref.current.value, ref.current.value = value), ref.current.previous), [value]);
}
__name(usePrevious, "usePrevious");

// ../../node_modules/@tamagui/checkbox/dist/esm/Checkbox.js
var React16 = __toESM(require("react"));
var import_jsx_runtime20 = require("react/jsx-runtime");
var CheckboxStyledContext = (0, import_core20.createStyledContext)({
  size: "$true",
  scaleIcon: 1
});
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
__name(isIndeterminate, "isIndeterminate");
function getState2(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
__name(getState2, "getState");
var BubbleInput = /* @__PURE__ */ __name((props) => {
  const { checked, bubbles = true, control, isHidden, ...inputProps } = props, ref = React16.useRef(null), prevChecked = usePrevious(checked);
  return React16.useEffect(() => {
    const input = ref.current, inputProto = window.HTMLInputElement.prototype, setChecked = Object.getOwnPropertyDescriptor(
      inputProto,
      "checked"
    ).set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", { bubbles });
      input.indeterminate = isIndeterminate(checked), setChecked.call(input, isIndeterminate(checked) ? false : checked), input.dispatchEvent(event);
    }
  }, [prevChecked, checked, bubbles]), /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    "input",
    {
      type: "checkbox",
      defaultChecked: isIndeterminate(checked) ? false : checked,
      ...inputProps,
      tabIndex: -1,
      ref,
      "aria-hidden": isHidden,
      style: {
        ...isHidden ? {
          // ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        } : {
          appearance: "auto",
          accentColor: "var(--color6)"
        },
        ...props.style
      }
    }
  );
}, "BubbleInput");
var INDICATOR_NAME = "CheckboxIndicator";
var CheckboxIndicatorFrame = (0, import_core20.styled)(ThemeableStack, {
  // use Checkbox for easier themes
  name: INDICATOR_NAME,
  context: CheckboxStyledContext
});
var CheckboxIndicator = CheckboxIndicatorFrame.extractable(
  React16.forwardRef(
    (props, forwardedRef) => {
      const {
        __scopeCheckbox,
        children: childrenProp,
        forceMount,
        disablePassStyles,
        ...indicatorProps
      } = props;
      process.env.NODE_ENV === "development" && !childrenProp && console.warn(
        "Warning: You created a Checkbox.Indicator without passing an child prop for it to use as an icon."
      );
      const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox), styledContext = React16.useContext(CheckboxStyledContext), iconSize = (typeof styledContext.size == "number" ? styledContext.size * 0.65 : (0, import_font_size2.getFontSize)(styledContext.size)) * styledContext.scaleIcon, theme = (0, import_core20.useTheme)(), getThemedIcon = (0, import_helpers_tamagui2.useGetThemedIcon)({ size: iconSize, color: theme.color }), children = React16.Children.toArray(childrenProp).map((child) => disablePassStyles || !React16.isValidElement(child) ? child : getThemedIcon(child));
      return forceMount || isIndeterminate(context.state) || context.state === true ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        CheckboxIndicatorFrame,
        {
          "data-state": getState2(context.state),
          "data-disabled": context.disabled ? "" : void 0,
          pointerEvents: "none",
          ...indicatorProps,
          ref: forwardedRef,
          children
        }
      ) : null;
    }
  )
);
CheckboxIndicator.displayName = INDICATOR_NAME;
var CHECKBOX_NAME = "Checkbox";
var CheckboxFrame = (0, import_core20.styled)(ThemeableStack, {
  name: CHECKBOX_NAME,
  tag: "button",
  context: CheckboxStyledContext,
  variants: {
    unstyled: {
      false: {
        size: "$true",
        backgroundColor: "$background",
        alignItems: "center",
        justifyContent: "center",
        pressTheme: true,
        focusable: true,
        borderWidth: 1,
        borderColor: "$borderColor",
        hoverStyle: {
          borderColor: "$borderColorHover"
        },
        focusStyle: {
          borderColor: "$borderColorFocus",
          outlineStyle: "solid",
          outlineWidth: 2,
          outlineColor: "$borderColorFocus"
        }
      }
    },
    disabled: {
      true: {
        pointerEvents: "none",
        userSelect: "none",
        cursor: "not-allowed",
        hoverStyle: {
          borderColor: "$borderColor",
          backgroundColor: "$background"
        },
        pressStyle: {
          borderColor: "$borderColor",
          backgroundColor: "$backgroundColor"
        },
        focusStyle: {
          outlineWidth: 0
        }
      }
    },
    size: {
      "...size": (val, { tokens }) => ({
        borderRadius: (0, import_core20.getVariableValue)((0, import_get_token.getSize)(val)) / 8
      })
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var [createCheckboxContext, createCheckboxScope] = createContextScope(CHECKBOX_NAME);
var [CheckboxProvider, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
var CheckboxComponent = CheckboxFrame.extractable(
  React16.forwardRef(function(props, forwardedRef) {
    const {
      __scopeCheckbox,
      labelledBy: ariaLabelledby,
      name,
      checked: checkedProp,
      defaultChecked,
      required,
      scaleSize = 0.45,
      sizeAdjust = 0,
      disabled,
      value = "on",
      onCheckedChange,
      native,
      scaleIcon,
      ...checkboxProps
    } = props, [button, setButton] = React16.useState(null), composedRefs = (0, import_core20.useComposedRefs)(forwardedRef, (node) => setButton(node)), hasConsumerStoppedPropagationRef = React16.useRef(false), propsActive = (0, import_core20.useProps)(props), isFormControl = import_core20.isWeb ? button ? !!button.closest("form") : true : false, [checked = false, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked,
      onChange: onCheckedChange
    }), styledContext = React16.useContext(CheckboxStyledContext), adjustedSize = (0, import_core20.getVariableValue)(
      (0, import_get_token.getSize)(propsActive.size ?? (styledContext == null ? void 0 : styledContext.size) ?? "$true", {
        shift: sizeAdjust
      })
    ), size2 = scaleSize ? Math.round(adjustedSize * scaleSize) : adjustedSize, labelId = useLabelContext(button);
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(CheckboxProvider, { scope: __scopeCheckbox, state: checked, disabled, children: import_core20.isWeb && native ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      BubbleInput,
      {
        control: button,
        bubbles: !hasConsumerStoppedPropagationRef.current,
        name,
        value,
        checked,
        required,
        disabled,
        id: props.id
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_jsx_runtime20.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        CheckboxFrame,
        {
          width: size2,
          height: size2,
          tag: "button",
          role: "checkbox",
          "aria-labelledby": ariaLabelledby || labelId,
          "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
          "aria-required": required,
          "data-state": getState2(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          ...checkboxProps,
          ref: composedRefs,
          ...import_core20.isWeb && {
            type: "button",
            value,
            onKeyDown: (0, import_core20.composeEventHandlers)(
              props.onKeyDown,
              (event) => {
                event.key === "Enter" && event.preventDefault();
              }
            )
          },
          onPress: (0, import_core20.composeEventHandlers)(props.onPress, (event) => {
            setChecked(
              (prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked
            ), isFormControl && (hasConsumerStoppedPropagationRef.current = event.isPropagationStopped(), hasConsumerStoppedPropagationRef.current || event.stopPropagation());
          }),
          children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            CheckboxStyledContext.Provider,
            {
              size: propsActive.size ?? (styledContext == null ? void 0 : styledContext.size) ?? "$true",
              scaleIcon: scaleIcon ?? (styledContext == null ? void 0 : styledContext.scaleIcon) ?? 1,
              children: propsActive.children
            }
          )
        }
      ),
      import_core20.isWeb && isFormControl ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        BubbleInput,
        {
          isHidden: true,
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled
        }
      ) : null
    ] }) });
  })
);
var Checkbox2 = (0, import_core20.withStaticProperties)(CheckboxComponent, {
  Indicator: CheckboxIndicator,
  Props: CheckboxStyledContext.Provider
});

// ../../node_modules/tamagui/dist/esm/index.js
__reExport(esm_exports2, __toESM(require_cjs20()), module.exports);

// ../../node_modules/@tamagui/form/dist/esm/Form.js
var import_core21 = require("@tamagui/core");
var import_react26 = require("react");
var import_jsx_runtime21 = require("react/jsx-runtime");
var FORM_NAME = "Form";
var FormFrame = (0, import_core21.styled)(import_core21.Stack, {
  name: FORM_NAME,
  tag: "form"
});
var [createFormContext] = createContextScope(FORM_NAME);
var [FormProvider, useFormContext] = createFormContext(FORM_NAME);
var TRIGGER_NAME3 = "FormTrigger";
var FormTriggerFrame = (0, import_core21.styled)(import_core21.Stack, {
  name: TRIGGER_NAME3
});
var FormTrigger = FormTriggerFrame.styleable(
  (props, forwardedRef) => {
    const { __scopeForm, children, ...triggerProps } = props, context = useFormContext(TRIGGER_NAME3, __scopeForm);
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      FormTriggerFrame,
      {
        tag: "button",
        ...triggerProps,
        children: triggerProps.asChild ? (0, import_react26.cloneElement)(children, { disabled: triggerProps.disabled }) : children,
        ref: forwardedRef,
        onPress: (0, import_core21.composeEventHandlers)(props.onPress, context.onSubmit)
      }
    );
  }
);
function FormComponent({
  onSubmit,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(FormProvider, { scope: props.__scopeForm, onSubmit, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(FormFrame, { ...props, onSubmit: (e) => e.preventDefault() }) });
}
__name(FormComponent, "FormComponent");
var Form = (0, import_core21.withStaticProperties)(FormFrame.extractable(FormComponent), {
  Trigger: FormTrigger
});

// ../../node_modules/tamagui/dist/esm/index.js
__reExport(esm_exports2, __toESM(require_cjs26()), module.exports);
__reExport(esm_exports2, __toESM(require_cjs24()), module.exports);
__reExport(esm_exports2, __toESM(require_cjs19()), module.exports);
__reExport(esm_exports2, __toESM(require_cjs27()), module.exports);

// ../../node_modules/@tamagui/animate/dist/esm/Animate.js
var import_jsx_runtime22 = require("react/jsx-runtime");
function Animate({ children, type, ...props }) {
  return type === "presence" ? props.keepChildrenMounted ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    PresenceChild,
    {
      initial: props.initial ? void 0 : false,
      onExitComplete: props.onExitComplete,
      enterVariant: props.enterVariant,
      exitVariant: props.exitVariant,
      enterExitVariant: props.enterExitVariant,
      presenceAffectsLayout: props.presenceAffectsLayout || true,
      isPresent: props.present,
      children
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(AnimatePresence, { ...props, children: props.present ? children : null }) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_jsx_runtime22.Fragment, { children });
}
__name(Animate, "Animate");

// ../../node_modules/@tamagui/popover/dist/esm/Popover.js
var import_aria_hidden3 = __toESM(require_cjs17());
var import_core25 = require("@tamagui/core");

// ../../node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = /* @__PURE__ */ __name((v) => ({
  x: v,
  y: v
}), "createCoords");
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
__name(clamp, "clamp");
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
__name(evaluate, "evaluate");
function getSide(placement) {
  return placement.split("-")[0];
}
__name(getSide, "getSide");
function getAlignment(placement) {
  return placement.split("-")[1];
}
__name(getAlignment, "getAlignment");
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
__name(getOppositeAxis, "getOppositeAxis");
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
__name(getAxisLength, "getAxisLength");
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
__name(getSideAxis, "getSideAxis");
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
__name(getAlignmentAxis, "getAlignmentAxis");
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
__name(getAlignmentSides, "getAlignmentSides");
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
__name(getExpandedPlacements, "getExpandedPlacements");
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
__name(getOppositeAlignmentPlacement, "getOppositeAlignmentPlacement");
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
__name(getSideList, "getSideList");
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
__name(getOppositeAxisPlacements, "getOppositeAxisPlacements");
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
__name(getOppositePlacement, "getOppositePlacement");
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
__name(expandPaddingObject, "expandPaddingObject");
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
__name(getPaddingObject, "getPaddingObject");
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}
__name(rectToClientRect, "rectToClientRect");

// ../../node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
__name(computeCoordsFromPlacement, "computeCoordsFromPlacement");
var computePosition = /* @__PURE__ */ __name(async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
}, "computePosition");
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
__name(detectOverflow, "detectOverflow");
var arrow = /* @__PURE__ */ __name((options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center != offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
}), "arrow");
var flip = /* @__PURE__ */ __name(function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
}, "flip");
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
__name(convertValueToCoords, "convertValueToCoords");
var offset = /* @__PURE__ */ __name(function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      const {
        x,
        y
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
}, "offset");
var shift = /* @__PURE__ */ __name(function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
}, "shift");
var size = /* @__PURE__ */ __name(function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = /* @__PURE__ */ __name(() => {
        }, "apply"),
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const overflowAvailableHeight = height - overflow[heightSide];
      const overflowAvailableWidth = width - overflow[widthSide];
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isYAxis) {
        const maximumClippingWidth = width - overflow.left - overflow.right;
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
}, "size");

// ../../node_modules/@floating-ui/utils/dom/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
__name(getNodeName, "getNodeName");
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
__name(getWindow, "getWindow");
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
__name(getDocumentElement, "getDocumentElement");
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
__name(isNode, "isNode");
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
__name(isElement, "isElement");
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
__name(isHTMLElement, "isHTMLElement");
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
__name(isShadowRoot, "isShadowRoot");
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
__name(isOverflowElement, "isOverflowElement");
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
__name(isTableElement, "isTableElement");
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle2(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
__name(isContainingBlock, "isContainingBlock");
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
__name(getContainingBlock, "getContainingBlock");
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
__name(isWebKit, "isWebKit");
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
__name(isLastTraversableNode, "isLastTraversableNode");
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
__name(getComputedStyle2, "getComputedStyle");
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
__name(getNodeScroll, "getNodeScroll");
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
__name(getParentNode, "getParentNode");
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
__name(getNearestOverflowAncestor, "getNearestOverflowAncestor");
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
__name(getOverflowAncestors, "getOverflowAncestors");

// ../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
__name(getCssDimensions, "getCssDimensions");
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
__name(unwrapElement, "unwrapElement");
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
__name(getScale, "getScale");
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
__name(getVisualOffsets, "getVisualOffsets");
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
__name(shouldAddVisualOffsets, "shouldAddVisualOffsets");
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
__name(getBoundingClientRect, "getBoundingClientRect");
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
__name(convertOffsetParentRelativeRectToViewportRelativeRect, "convertOffsetParentRelativeRectToViewportRelativeRect");
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
__name(getClientRects, "getClientRects");
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
__name(getWindowScrollBarX, "getWindowScrollBarX");
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
__name(getDocumentRect, "getDocumentRect");
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
__name(getViewportRect, "getViewportRect");
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
__name(getInnerBoundingClientRect, "getInnerBoundingClientRect");
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
__name(getClientRectFromClippingAncestor, "getClientRectFromClippingAncestor");
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
__name(hasFixedPositionAncestor, "hasFixedPositionAncestor");
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
__name(getClippingElementAncestors, "getClippingElementAncestors");
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
__name(getClippingRect, "getClippingRect");
function getDimensions(element) {
  return getCssDimensions(element);
}
__name(getDimensions, "getDimensions");
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
__name(getRectRelativeToOffsetParent, "getRectRelativeToOffsetParent");
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
__name(getTrueOffsetParent, "getTrueOffsetParent");
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
__name(getOffsetParent, "getOffsetParent");
var getElementRects = /* @__PURE__ */ __name(async function(_ref) {
  let {
    reference,
    floating,
    strategy
  } = _ref;
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
    floating: {
      x: 0,
      y: 0,
      ...await getDimensionsFn(floating)
    }
  };
}, "getElementRects");
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
__name(isRTL, "isRTL");
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId2;
  const root = getDocumentElement(element);
  function cleanup() {
    clearTimeout(timeoutId2);
    io && io.disconnect();
    io = null;
  }
  __name(cleanup, "cleanup");
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId2 = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    __name(handleObserve, "handleObserve");
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  __name(refresh, "refresh");
  refresh(true);
  return cleanup;
}
__name(observeMove, "observeMove");
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          resizeObserver && resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  __name(frameLoop, "frameLoop");
  update();
  return () => {
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
__name(autoUpdate, "autoUpdate");
var computePosition2 = /* @__PURE__ */ __name((reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
}, "computePosition");

// ../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React17 = __toESM(require("react"), 1);
var import_react28 = require("react");
var ReactDOM2 = __toESM(require("react-dom"), 1);
var arrow2 = /* @__PURE__ */ __name((options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  __name(isRef, "isRef");
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      } else if (element) {
        return arrow({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
}, "arrow");
var index = typeof document !== "undefined" ? import_react28.useLayoutEffect : import_react28.useEffect;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length, i, keys;
  if (a && b && typeof a == "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
__name(deepEqual, "deepEqual");
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
__name(getDPR, "getDPR");
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
__name(roundByDPR, "roundByDPR");
function useLatestRef(value) {
  const ref = React17.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
__name(useLatestRef, "useLatestRef");
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React17.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React17.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React17.useState(null);
  const [_floating, _setFloating] = React17.useState(null);
  const setReference = React17.useCallback((node) => {
    if (node != referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, [_setReference]);
  const setFloating = React17.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, [_setFloating]);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React17.useRef(null);
  const floatingRef = React17.useRef(null);
  const dataRef = React17.useRef(data);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const update = React17.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM2.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React17.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl)
      referenceRef.current = referenceEl;
    if (floatingEl)
      floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      } else {
        update();
      }
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef]);
  const refs = React17.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React17.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React17.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React17.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
__name(useFloating, "useFloating");

// ../../node_modules/@tamagui/floating/dist/esm/useFloating.js
var import_react29 = require("react");
var FloatingOverrideContext = (0, import_react29.createContext)(null);
var useFloating2 = /* @__PURE__ */ __name((props) => {
  var _a;
  return (_a = (0, import_react29.useContext)(FloatingOverrideContext) || useFloating) == null ? void 0 : _a(props);
}, "useFloating");

// ../../node_modules/@tamagui/popover/dist/esm/Popover.js
var import_focus_scope2 = __toESM(require_cjs18());

// ../../node_modules/@tamagui/popper/dist/esm/Popper.js
var import_core24 = require("@tamagui/core");
var import_get_token2 = __toESM(require_cjs10());
var React18 = __toESM(require("react"));
var import_react_native8 = require("react-native-web-lite");
var import_jsx_runtime23 = require("react/jsx-runtime");
var PopperContext = (0, import_core24.createStyledContext)({});
var usePopperContext = /* @__PURE__ */ __name(() => React18.useContext(PopperContext), "usePopperContext");
function Popper(props) {
  const {
    children,
    size: size2,
    strategy = "absolute",
    placement = "bottom",
    stayInFrame,
    allowFlip,
    offset: offset2
  } = props, [isMounted, setIsMounted] = React18.useState(false);
  (0, import_core24.useIsomorphicLayoutEffect)(() => {
    setIsMounted(true);
  }, []);
  const [anchorRef, setAnchorRef] = React18.useState(), [arrowEl, setArrow] = React18.useState(null), [arrowSize, setArrowSize] = React18.useState(0), offsetOptions = offset2 ?? arrowSize, floating = useFloating2({
    strategy,
    placement,
    sameScrollView: false,
    // this only takes effect on native
    middleware: [
      stayInFrame ? shift(typeof stayInFrame == "boolean" ? {} : stayInFrame) : null,
      allowFlip ? flip(typeof allowFlip == "boolean" ? {} : allowFlip) : null,
      arrowEl ? arrow2({ element: arrowEl }) : null,
      typeof offsetOptions < "u" ? offset(offsetOptions) : null
    ].filter(Boolean)
  }), {
    refs,
    middlewareData,
    // @ts-expect-error this comes from Tooltip for example
    open
  } = floating;
  if ((0, import_core24.useIsomorphicLayoutEffect)(() => {
    floating.refs.setReference(anchorRef);
  }, [anchorRef]), import_core24.isWeb)
    (0, import_core24.useIsomorphicLayoutEffect)(() => {
      if (open && refs.reference.current && refs.floating.current)
        return autoUpdate(refs.reference.current, refs.floating.current, floating.update);
    }, [open, floating.update, refs.floating, refs.reference]);
  else {
    const dimensions = (0, import_react_native8.useWindowDimensions)(), [keyboardOpen, setKeyboardOpen] = React18.useState(false);
    React18.useEffect(() => {
      const showSubscription = import_react_native8.Keyboard.addListener("keyboardDidShow", () => {
        setKeyboardOpen(true);
      }), hideSubscription = import_react_native8.Keyboard.addListener("keyboardDidHide", () => {
        setKeyboardOpen(false);
      });
      return () => {
        showSubscription.remove(), hideSubscription.remove();
      };
    }, []), (0, import_core24.useIsomorphicLayoutEffect)(() => {
      floating.update();
    }, [dimensions, keyboardOpen]);
  }
  const popperContext = {
    anchorRef: setAnchorRef,
    size: size2,
    arrowRef: setArrow,
    arrowStyle: middlewareData.arrow,
    onArrowSize: setArrowSize,
    isMounted,
    ...floating
  };
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(PopperContext.Provider, { ...popperContext, children });
}
__name(Popper, "Popper");
var PopperAnchor = YStack.extractable(
  React18.forwardRef(function(props, forwardedRef) {
    const { virtualRef, ...anchorProps } = props, { anchorRef, getReferenceProps } = usePopperContext(), ref = React18.useRef(null), composedRefs = useComposedRefs(forwardedRef, ref, anchorRef);
    if (virtualRef)
      return null;
    const stackProps = {
      ref: composedRefs,
      ...anchorProps
    };
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      import_core24.View,
      {
        ...getReferenceProps ? getReferenceProps(stackProps) : stackProps
      }
    );
  })
);
var PopperContentFrame = (0, import_core24.styled)(ThemeableStack, {
  name: "PopperContent",
  variants: {
    unstyled: {
      false: {
        size: "$true",
        backgroundColor: "$background",
        alignItems: "center",
        radiused: true
      }
    },
    size: {
      "...size": (val, { tokens }) => ({
        padding: tokens.space[val],
        borderRadius: tokens.radius[val]
      })
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var PopperContent = React18.forwardRef(
  function(props, forwardedRef) {
    const { strategy, placement, refs, x, y, getFloatingProps, size: size2, isMounted, update } = usePopperContext(), contentRefs = useComposedRefs(refs.setFloating, forwardedRef), contents = React18.useMemo(() => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      PopperContentFrame,
      {
        "data-placement": placement,
        "data-strategy": strategy,
        contain: "layout",
        size: size2,
        ...props
      },
      "popper-content-frame"
    ), [placement, strategy, props]);
    if ((0, import_core24.useIsomorphicLayoutEffect)(() => {
      isMounted && update();
    }, [isMounted]), !isMounted)
      return null;
    const frameProps = {
      ref: contentRefs,
      x: x || 0,
      y: y || 0,
      position: strategy
    };
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(YStack, { ...getFloatingProps ? getFloatingProps(frameProps) : frameProps, children: contents });
  }
);
var PopperArrowFrame = (0, import_core24.styled)(YStack, {
  name: "PopperArrow",
  variants: {
    unstyled: {
      false: {
        borderColor: "$borderColor",
        backgroundColor: "$background",
        position: "relative"
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var PopperArrowOuterFrame = (0, import_core24.styled)(YStack, {
  name: "PopperArrowOuter",
  variants: {
    unstyled: {
      false: {
        position: "absolute",
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var opposites = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var PopperArrow = PopperArrowFrame.styleable(
  function(propsIn, forwardedRef) {
    var _a, _b;
    const props = (0, import_core24.useProps)(propsIn), { offset: offset2, size: sizeProp, borderWidth = 0, ...arrowProps } = props, context = usePopperContext(), sizeVal = sizeProp ?? context.size, size2 = +(0, import_core24.getVariableValue)(
      (0, import_get_token2.getSpace)(sizeVal, {
        shift: -2,
        bounds: [2]
      })
    ), { placement } = context, refs = useComposedRefs(context.arrowRef, forwardedRef), x = ((_a = context.arrowStyle) == null ? void 0 : _a.x) || 0, y = ((_b = context.arrowStyle) == null ? void 0 : _b.y) || 0, primaryPlacement = placement ? placement.split("-")[0] : "top", arrowStyle = { x, y, width: size2, height: size2 }, innerArrowStyle = {}, isVertical = primaryPlacement === "bottom" || primaryPlacement === "top";
    if (primaryPlacement) {
      arrowStyle[isVertical ? "width" : "height"] = size2 * 2;
      const oppSide = opposites[primaryPlacement];
      oppSide && (arrowStyle[oppSide] = -size2, innerArrowStyle[oppSide] = size2 / 2), (oppSide === "top" || oppSide === "bottom") && (arrowStyle.left = 0), (oppSide === "left" || oppSide === "right") && (arrowStyle.top = 0);
    }
    return (0, import_core24.useIsomorphicLayoutEffect)(() => {
      var _a2;
      (_a2 = context.onArrowSize) == null ? void 0 : _a2.call(context, size2);
    }, [size2, context.onArrowSize]), /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(PopperArrowOuterFrame, { ref: refs, ...arrowStyle, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      PopperArrowFrame,
      {
        width: size2,
        height: size2,
        ...arrowProps,
        ...innerArrowStyle,
        rotate: "45deg",
        ...primaryPlacement === "bottom" && {
          borderLeftWidth: borderWidth,
          borderTopWidth: borderWidth
        },
        ...primaryPlacement === "top" && {
          borderBottomWidth: borderWidth,
          borderRightWidth: borderWidth
        },
        ...primaryPlacement === "right" && {
          borderLeftWidth: borderWidth,
          borderBottomWidth: borderWidth
        },
        ...primaryPlacement === "left" && {
          borderTopWidth: borderWidth,
          borderRightWidth: borderWidth
        }
      }
    ) });
  }
);

// ../../node_modules/@tamagui/popover/dist/esm/Popover.js
var React20 = __toESM(require("react"));
var import_react_freeze = __toESM(require_dist2());
var import_react_native9 = require("react-native-web-lite");

// ../../node_modules/@floating-ui/react/dist/floating-ui.react.esm.js
var React19 = __toESM(require("react"));
var import_react30 = require("react");
var import_aria_hidden2 = __toESM(require_es5());
var import_tabbable = __toESM(require_dist3());
var import_react_dom4 = require("react-dom");
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
__name(_extends, "_extends");
var index2 = typeof document !== "undefined" ? import_react30.useLayoutEffect : import_react30.useEffect;
var serverHandoffComplete = false;
var count = 0;
var genId = /* @__PURE__ */ __name(() => "floating-ui-" + count++, "genId");
function useFloatingId() {
  const [id, setId] = React19.useState(() => serverHandoffComplete ? genId() : void 0);
  index2(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React19.useEffect(() => {
    if (!serverHandoffComplete) {
      serverHandoffComplete = true;
    }
  }, []);
  return id;
}
__name(useFloatingId, "useFloatingId");
var useReactId = React19[/* @__PURE__ */ "useId".toString()];
var useId6 = useReactId || useFloatingId;
function createPubSub() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null ? void 0 : _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l) => l !== listener)) || []);
    }
  };
}
__name(createPubSub, "createPubSub");
var FloatingNodeContext = /* @__PURE__ */ React19.createContext(null);
var FloatingTreeContext = /* @__PURE__ */ React19.createContext(null);
var useFloatingParentNodeId = /* @__PURE__ */ __name(() => {
  var _React$useContext;
  return ((_React$useContext = React19.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
}, "useFloatingParentNodeId");
var useFloatingTree = /* @__PURE__ */ __name(() => React19.useContext(FloatingTreeContext), "useFloatingTree");
function getDocument(node) {
  return (node == null ? void 0 : node.ownerDocument) || document;
}
__name(getDocument, "getDocument");
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
__name(getPlatform, "getPlatform");
function getUserAgent() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map((_ref) => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(" ");
  }
  return navigator.userAgent;
}
__name(getUserAgent, "getUserAgent");
function getWindow2(value) {
  return getDocument(value).defaultView || window;
}
__name(getWindow2, "getWindow");
function isElement2(value) {
  return value ? value instanceof Element || value instanceof getWindow2(value).Element : false;
}
__name(isElement2, "isElement");
function isHTMLElement2(value) {
  return value ? value instanceof HTMLElement || value instanceof getWindow2(value).HTMLElement : false;
}
__name(isHTMLElement2, "isHTMLElement");
function isShadowRoot2(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  const OwnElement = getWindow2(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
__name(isShadowRoot2, "isShadowRoot");
function isVirtualClick(event) {
  if (event.mozInputSource === 0 && event.isTrusted) {
    return true;
  }
  const androidRe = /Android/i;
  if ((androidRe.test(getPlatform()) || androidRe.test(getUserAgent())) && event.pointerType) {
    return event.type === "click" && event.buttons === 1;
  }
  return event.detail === 0 && !event.pointerType;
}
__name(isVirtualClick, "isVirtualClick");
function isVirtualPointerEvent(event) {
  return event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType !== "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0;
}
__name(isVirtualPointerEvent, "isVirtualPointerEvent");
function isSafari() {
  return /apple/i.test(navigator.vendor);
}
__name(isSafari, "isSafari");
function isMac() {
  return getPlatform().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
__name(isMac, "isMac");
function isMouseLikePointerType(pointerType, strict) {
  const values = ["mouse", "pen"];
  if (!strict) {
    values.push("", void 0);
  }
  return values.includes(pointerType);
}
__name(isMouseLikePointerType, "isMouseLikePointerType");
function isReactEvent(event) {
  return "nativeEvent" in event;
}
__name(isReactEvent, "isReactEvent");
function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  }
  if (rootNode && isShadowRoot2(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    }
  }
  return false;
}
__name(contains, "contains");
function createAttribute(name) {
  return "data-floating-ui-" + name;
}
__name(createAttribute, "createAttribute");
function useLatestRef2(value) {
  const ref = (0, import_react30.useRef)(value);
  index2(() => {
    ref.current = value;
  });
  return ref;
}
__name(useLatestRef2, "useLatestRef");
var safePolygonIdentifier = /* @__PURE__ */ createAttribute("safe-polygon");
function getDelay(value, prop, pointerType) {
  if (pointerType && !isMouseLikePointerType(pointerType)) {
    return 0;
  }
  if (typeof value === "number") {
    return value;
  }
  return value == null ? void 0 : value[prop];
}
__name(getDelay, "getDelay");
function useHover(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    dataRef,
    events,
    elements: {
      domReference,
      floating
    },
    refs
  } = context;
  const {
    enabled = true,
    delay = 0,
    handleClose = null,
    mouseOnly = false,
    restMs = 0,
    move = true
  } = props;
  const tree = useFloatingTree();
  const parentId = useFloatingParentNodeId();
  const handleCloseRef = useLatestRef2(handleClose);
  const delayRef = useLatestRef2(delay);
  const pointerTypeRef = React19.useRef();
  const timeoutRef = React19.useRef();
  const handlerRef = React19.useRef();
  const restTimeoutRef = React19.useRef();
  const blockMouseMoveRef = React19.useRef(true);
  const performedPointerEventsMutationRef = React19.useRef(false);
  const unbindMouseMoveRef = React19.useRef(() => {
  });
  const isHoverOpen = React19.useCallback(() => {
    var _dataRef$current$open;
    const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
    return (type == null ? void 0 : type.includes("mouse")) && type !== "mousedown";
  }, [dataRef]);
  React19.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onDismiss() {
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);
      blockMouseMoveRef.current = true;
    }
    __name(onDismiss, "onDismiss");
    events.on("dismiss", onDismiss);
    return () => {
      events.off("dismiss", onDismiss);
    };
  }, [enabled, events]);
  React19.useEffect(() => {
    if (!enabled || !handleCloseRef.current || !open) {
      return;
    }
    function onLeave(event) {
      if (isHoverOpen()) {
        onOpenChange(false, event);
      }
    }
    __name(onLeave, "onLeave");
    const html = getDocument(floating).documentElement;
    html.addEventListener("mouseleave", onLeave);
    return () => {
      html.removeEventListener("mouseleave", onLeave);
    };
  }, [floating, open, onOpenChange, enabled, handleCloseRef, dataRef, isHoverOpen]);
  const closeWithDelay = React19.useCallback(function(event, runElseBranch) {
    if (runElseBranch === void 0) {
      runElseBranch = true;
    }
    const closeDelay = getDelay(delayRef.current, "close", pointerTypeRef.current);
    if (closeDelay && !handlerRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => onOpenChange(false, event), closeDelay);
    } else if (runElseBranch) {
      clearTimeout(timeoutRef.current);
      onOpenChange(false, event);
    }
  }, [delayRef, onOpenChange]);
  const cleanupMouseMoveHandler = React19.useCallback(() => {
    unbindMouseMoveRef.current();
    handlerRef.current = void 0;
  }, []);
  const clearPointerEvents = React19.useCallback(() => {
    if (performedPointerEventsMutationRef.current) {
      const body = getDocument(refs.floating.current).body;
      body.style.pointerEvents = "";
      body.removeAttribute(safePolygonIdentifier);
      performedPointerEventsMutationRef.current = false;
    }
  }, [refs]);
  React19.useEffect(() => {
    if (!enabled) {
      return;
    }
    function isClickLikeOpenEvent() {
      return dataRef.current.openEvent ? ["click", "mousedown"].includes(dataRef.current.openEvent.type) : false;
    }
    __name(isClickLikeOpenEvent, "isClickLikeOpenEvent");
    function onMouseEnter(event) {
      clearTimeout(timeoutRef.current);
      blockMouseMoveRef.current = false;
      if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current) || restMs > 0 && getDelay(delayRef.current, "open") === 0) {
        return;
      }
      const openDelay = getDelay(delayRef.current, "open", pointerTypeRef.current);
      if (openDelay) {
        timeoutRef.current = setTimeout(() => {
          onOpenChange(true, event);
        }, openDelay);
      } else {
        onOpenChange(true, event);
      }
    }
    __name(onMouseEnter, "onMouseEnter");
    function onMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        return;
      }
      unbindMouseMoveRef.current();
      const doc = getDocument(floating);
      clearTimeout(restTimeoutRef.current);
      if (handleCloseRef.current) {
        if (!open) {
          clearTimeout(timeoutRef.current);
        }
        handlerRef.current = handleCloseRef.current({
          ...context,
          tree,
          x: event.clientX,
          y: event.clientY,
          onClose() {
            clearPointerEvents();
            cleanupMouseMoveHandler();
            closeWithDelay(event);
          }
        });
        const handler = handlerRef.current;
        doc.addEventListener("mousemove", handler);
        unbindMouseMoveRef.current = () => {
          doc.removeEventListener("mousemove", handler);
        };
        return;
      }
      const shouldClose = pointerTypeRef.current === "touch" ? !contains(floating, event.relatedTarget) : true;
      if (shouldClose) {
        closeWithDelay(event);
      }
    }
    __name(onMouseLeave, "onMouseLeave");
    function onScrollMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        return;
      }
      handleCloseRef.current == null ? void 0 : handleCloseRef.current({
        ...context,
        tree,
        x: event.clientX,
        y: event.clientY,
        onClose() {
          clearPointerEvents();
          cleanupMouseMoveHandler();
          closeWithDelay(event);
        }
      })(event);
    }
    __name(onScrollMouseLeave, "onScrollMouseLeave");
    if (isElement2(domReference)) {
      const ref = domReference;
      open && ref.addEventListener("mouseleave", onScrollMouseLeave);
      floating == null ? void 0 : floating.addEventListener("mouseleave", onScrollMouseLeave);
      move && ref.addEventListener("mousemove", onMouseEnter, {
        once: true
      });
      ref.addEventListener("mouseenter", onMouseEnter);
      ref.addEventListener("mouseleave", onMouseLeave);
      return () => {
        open && ref.removeEventListener("mouseleave", onScrollMouseLeave);
        floating == null ? void 0 : floating.removeEventListener("mouseleave", onScrollMouseLeave);
        move && ref.removeEventListener("mousemove", onMouseEnter);
        ref.removeEventListener("mouseenter", onMouseEnter);
        ref.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, [domReference, floating, enabled, context, mouseOnly, restMs, move, closeWithDelay, cleanupMouseMoveHandler, clearPointerEvents, onOpenChange, open, tree, delayRef, handleCloseRef, dataRef]);
  index2(() => {
    var _handleCloseRef$curre;
    if (!enabled) {
      return;
    }
    if (open && (_handleCloseRef$curre = handleCloseRef.current) != null && _handleCloseRef$curre.__options.blockPointerEvents && isHoverOpen()) {
      const body = getDocument(floating).body;
      body.setAttribute(safePolygonIdentifier, "");
      body.style.pointerEvents = "none";
      performedPointerEventsMutationRef.current = true;
      if (isElement2(domReference) && floating) {
        var _tree$nodesRef$curren, _tree$nodesRef$curren2;
        const ref = domReference;
        const parentFloating = tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null ? void 0 : (_tree$nodesRef$curren2 = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren2.elements.floating;
        if (parentFloating) {
          parentFloating.style.pointerEvents = "";
        }
        ref.style.pointerEvents = "auto";
        floating.style.pointerEvents = "auto";
        return () => {
          ref.style.pointerEvents = "";
          floating.style.pointerEvents = "";
        };
      }
    }
  }, [enabled, open, parentId, floating, domReference, tree, handleCloseRef, dataRef, isHoverOpen]);
  index2(() => {
    if (!open) {
      pointerTypeRef.current = void 0;
      cleanupMouseMoveHandler();
      clearPointerEvents();
    }
  }, [open, cleanupMouseMoveHandler, clearPointerEvents]);
  React19.useEffect(() => {
    return () => {
      cleanupMouseMoveHandler();
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);
      clearPointerEvents();
    };
  }, [enabled, cleanupMouseMoveHandler, clearPointerEvents]);
  return React19.useMemo(() => {
    if (!enabled) {
      return {};
    }
    function setPointerRef(event) {
      pointerTypeRef.current = event.pointerType;
    }
    __name(setPointerRef, "setPointerRef");
    return {
      reference: {
        onPointerDown: setPointerRef,
        onPointerEnter: setPointerRef,
        onMouseMove(event) {
          if (open || restMs === 0) {
            return;
          }
          clearTimeout(restTimeoutRef.current);
          restTimeoutRef.current = setTimeout(() => {
            if (!blockMouseMoveRef.current) {
              onOpenChange(true, event.nativeEvent);
            }
          }, restMs);
        }
      },
      floating: {
        onMouseEnter() {
          clearTimeout(timeoutRef.current);
        },
        onMouseLeave(event) {
          events.emit("dismiss", {
            type: "mouseLeave",
            data: {
              returnFocus: false
            }
          });
          closeWithDelay(event.nativeEvent, false);
        }
      }
    };
  }, [events, enabled, restMs, open, onOpenChange, closeWithDelay]);
}
__name(useHover, "useHover");
var FloatingDelayGroupContext = /* @__PURE__ */ React19.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: () => {
  },
  setState: () => {
  },
  isInstantPhase: false
});
var useDelayGroupContext = /* @__PURE__ */ __name(() => React19.useContext(FloatingDelayGroupContext), "useDelayGroupContext");
var FloatingDelayGroup = /* @__PURE__ */ __name((_ref) => {
  let {
    children,
    delay,
    timeoutMs = 0
  } = _ref;
  const [state, setState] = React19.useReducer((prev, next) => ({
    ...prev,
    ...next
  }), {
    delay,
    timeoutMs,
    initialDelay: delay,
    currentId: null,
    isInstantPhase: false
  });
  const initialCurrentIdRef = React19.useRef(null);
  const setCurrentId = React19.useCallback((currentId) => {
    setState({
      currentId
    });
  }, []);
  index2(() => {
    if (state.currentId) {
      if (initialCurrentIdRef.current === null) {
        initialCurrentIdRef.current = state.currentId;
      } else {
        setState({
          isInstantPhase: true
        });
      }
    } else {
      setState({
        isInstantPhase: false
      });
      initialCurrentIdRef.current = null;
    }
  }, [state.currentId]);
  return /* @__PURE__ */ React19.createElement(FloatingDelayGroupContext.Provider, {
    value: React19.useMemo(() => ({
      ...state,
      setState,
      setCurrentId
    }), [state, setState, setCurrentId])
  }, children);
}, "FloatingDelayGroup");
var useDelayGroup = /* @__PURE__ */ __name((_ref2, _ref3) => {
  let {
    open,
    onOpenChange
  } = _ref2;
  let {
    id
  } = _ref3;
  const {
    currentId,
    setCurrentId,
    initialDelay,
    setState,
    timeoutMs
  } = useDelayGroupContext();
  index2(() => {
    if (currentId) {
      setState({
        delay: {
          open: 1,
          close: getDelay(initialDelay, "close")
        }
      });
      if (currentId !== id) {
        onOpenChange(false);
      }
    }
  }, [id, onOpenChange, setState, currentId, initialDelay]);
  index2(() => {
    function unset() {
      onOpenChange(false);
      setState({
        delay: initialDelay,
        currentId: null
      });
    }
    __name(unset, "unset");
    if (!open && currentId === id) {
      if (timeoutMs) {
        const timeout = window.setTimeout(unset, timeoutMs);
        return () => {
          clearTimeout(timeout);
        };
      } else {
        unset();
      }
    }
  }, [open, setState, currentId, id, onOpenChange, initialDelay, timeoutMs]);
  index2(() => {
    if (open) {
      setCurrentId(id);
    }
  }, [open, setCurrentId, id]);
}, "useDelayGroup");
function activeElement(doc) {
  let activeElement2 = doc.activeElement;
  while (((_activeElement = activeElement2) == null ? void 0 : (_activeElement$shadow = _activeElement.shadowRoot) == null ? void 0 : _activeElement$shadow.activeElement) != null) {
    var _activeElement, _activeElement$shadow;
    activeElement2 = activeElement2.shadowRoot.activeElement;
  }
  return activeElement2;
}
__name(activeElement, "activeElement");
var rafId = 0;
function enqueueFocus(el, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    preventScroll = false,
    cancelPrevious = true,
    sync = false
  } = options;
  cancelPrevious && cancelAnimationFrame(rafId);
  const exec = /* @__PURE__ */ __name(() => el == null ? void 0 : el.focus({
    preventScroll
  }), "exec");
  if (sync) {
    exec();
  } else {
    rafId = requestAnimationFrame(exec);
  }
}
__name(enqueueFocus, "enqueueFocus");
function getAncestors(nodes, id) {
  var _nodes$find;
  let allAncestors = [];
  let currentParentId = (_nodes$find = nodes.find((node) => node.id === id)) == null ? void 0 : _nodes$find.parentId;
  while (currentParentId) {
    const currentNode = nodes.find((node) => node.id === currentParentId);
    currentParentId = currentNode == null ? void 0 : currentNode.parentId;
    if (currentNode) {
      allAncestors = allAncestors.concat(currentNode);
    }
  }
  return allAncestors;
}
__name(getAncestors, "getAncestors");
function getChildren(nodes, id) {
  let allChildren = nodes.filter((node) => {
    var _node$context;
    return node.parentId === id && ((_node$context = node.context) == null ? void 0 : _node$context.open);
  });
  let currentChildren = allChildren;
  while (currentChildren.length) {
    currentChildren = nodes.filter((node) => {
      var _currentChildren;
      return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some((n) => {
        var _node$context2;
        return node.parentId === n.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
      });
    });
    allChildren = allChildren.concat(currentChildren);
  }
  return allChildren;
}
__name(getChildren, "getChildren");
function getTarget(event) {
  if ("composedPath" in event) {
    return event.composedPath()[0];
  }
  return event.target;
}
__name(getTarget, "getTarget");
var TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function isTypeableElement(element) {
  return isHTMLElement2(element) && element.matches(TYPEABLE_SELECTOR);
}
__name(isTypeableElement, "isTypeableElement");
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}
__name(stopEvent, "stopEvent");
var getTabbableOptions = /* @__PURE__ */ __name(() => ({
  getShadowRoot: true,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
}), "getTabbableOptions");
function getTabbableIn(container, direction) {
  const allTabbable = (0, import_tabbable.tabbable)(container, getTabbableOptions());
  if (direction === "prev") {
    allTabbable.reverse();
  }
  const activeIndex = allTabbable.indexOf(activeElement(getDocument(container)));
  const nextTabbableElements = allTabbable.slice(activeIndex + 1);
  return nextTabbableElements[0];
}
__name(getTabbableIn, "getTabbableIn");
function getNextTabbable() {
  return getTabbableIn(document.body, "next");
}
__name(getNextTabbable, "getNextTabbable");
function getPreviousTabbable() {
  return getTabbableIn(document.body, "prev");
}
__name(getPreviousTabbable, "getPreviousTabbable");
function isOutsideEvent(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !contains(containerElement, relatedTarget);
}
__name(isOutsideEvent, "isOutsideEvent");
function disableFocusInside(container) {
  const tabbableElements = (0, import_tabbable.tabbable)(container, getTabbableOptions());
  tabbableElements.forEach((element) => {
    element.dataset.tabindex = element.getAttribute("tabindex") || "";
    element.setAttribute("tabindex", "-1");
  });
}
__name(disableFocusInside, "disableFocusInside");
function enableFocusInside(container) {
  const elements = container.querySelectorAll("[data-tabindex]");
  elements.forEach((element) => {
    const tabindex = element.dataset.tabindex;
    delete element.dataset.tabindex;
    if (tabindex) {
      element.setAttribute("tabindex", tabindex);
    } else {
      element.removeAttribute("tabindex");
    }
  });
}
__name(enableFocusInside, "enableFocusInside");
var HIDDEN_STYLES = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
};
var timeoutId;
function setActiveElementOnTab(event) {
  if (event.key === "Tab") {
    event.target;
    clearTimeout(timeoutId);
  }
}
__name(setActiveElementOnTab, "setActiveElementOnTab");
var FocusGuard = /* @__PURE__ */ React19.forwardRef(/* @__PURE__ */ __name(function FocusGuard2(props, ref) {
  const [role, setRole] = React19.useState();
  index2(() => {
    if (isSafari()) {
      setRole("button");
    }
    document.addEventListener("keydown", setActiveElementOnTab);
    return () => {
      document.removeEventListener("keydown", setActiveElementOnTab);
    };
  }, []);
  const restProps = {
    ref,
    tabIndex: 0,
    // Role is only for VoiceOver
    role,
    "aria-hidden": role ? void 0 : true,
    [createAttribute("focus-guard")]: "",
    style: HIDDEN_STYLES
  };
  return /* @__PURE__ */ React19.createElement("span", _extends({}, props, restProps));
}, "FocusGuard"));
var PortalContext = /* @__PURE__ */ React19.createContext(null);
function useFloatingPortalNode(_temp) {
  let {
    id,
    root
  } = _temp === void 0 ? {} : _temp;
  const [portalNode, setPortalNode] = React19.useState(null);
  const uniqueId = useId6();
  const portalContext = usePortalContext2();
  const data = React19.useMemo(() => ({
    id,
    root,
    portalContext,
    uniqueId
  }), [id, root, portalContext, uniqueId]);
  const dataRef = React19.useRef();
  index2(() => {
    return () => {
      portalNode == null ? void 0 : portalNode.remove();
    };
  }, [portalNode, data]);
  index2(() => {
    if (dataRef.current === data)
      return;
    dataRef.current = data;
    const {
      id: id2,
      root: root2,
      portalContext: portalContext2,
      uniqueId: uniqueId2
    } = data;
    const existingIdRoot = id2 ? document.getElementById(id2) : null;
    const attr = createAttribute("portal");
    if (existingIdRoot) {
      const subRoot = document.createElement("div");
      subRoot.id = uniqueId2;
      subRoot.setAttribute(attr, "");
      existingIdRoot.appendChild(subRoot);
      setPortalNode(subRoot);
    } else {
      let container = root2 || (portalContext2 == null ? void 0 : portalContext2.portalNode);
      if (container && !isElement2(container))
        container = container.current;
      container = container || document.body;
      let idWrapper = null;
      if (id2) {
        idWrapper = document.createElement("div");
        idWrapper.id = id2;
        container.appendChild(idWrapper);
      }
      const subRoot = document.createElement("div");
      subRoot.id = uniqueId2;
      subRoot.setAttribute(attr, "");
      container = idWrapper || container;
      container.appendChild(subRoot);
      setPortalNode(subRoot);
    }
  }, [data]);
  return portalNode;
}
__name(useFloatingPortalNode, "useFloatingPortalNode");
function FloatingPortal(_ref) {
  let {
    children,
    id,
    root = null,
    preserveTabOrder = true
  } = _ref;
  const portalNode = useFloatingPortalNode({
    id,
    root
  });
  const [focusManagerState, setFocusManagerState] = React19.useState(null);
  const beforeOutsideRef = React19.useRef(null);
  const afterOutsideRef = React19.useRef(null);
  const beforeInsideRef = React19.useRef(null);
  const afterInsideRef = React19.useRef(null);
  const shouldRenderGuards = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!focusManagerState && // Guards are only for non-modal focus management.
    !focusManagerState.modal && // Don't render if unmount is transitioning.
    focusManagerState.open && preserveTabOrder && !!(root || portalNode)
  );
  React19.useEffect(() => {
    if (!portalNode || !preserveTabOrder || focusManagerState != null && focusManagerState.modal) {
      return;
    }
    function onFocus(event) {
      if (portalNode && isOutsideEvent(event)) {
        const focusing = event.type === "focusin";
        const manageFocus = focusing ? enableFocusInside : disableFocusInside;
        manageFocus(portalNode);
      }
    }
    __name(onFocus, "onFocus");
    portalNode.addEventListener("focusin", onFocus, true);
    portalNode.addEventListener("focusout", onFocus, true);
    return () => {
      portalNode.removeEventListener("focusin", onFocus, true);
      portalNode.removeEventListener("focusout", onFocus, true);
    };
  }, [portalNode, preserveTabOrder, focusManagerState == null ? void 0 : focusManagerState.modal]);
  return /* @__PURE__ */ React19.createElement(PortalContext.Provider, {
    value: React19.useMemo(() => ({
      preserveTabOrder,
      beforeOutsideRef,
      afterOutsideRef,
      beforeInsideRef,
      afterInsideRef,
      portalNode,
      setFocusManagerState
    }), [preserveTabOrder, portalNode])
  }, shouldRenderGuards && portalNode && /* @__PURE__ */ React19.createElement(FocusGuard, {
    "data-type": "outside",
    ref: beforeOutsideRef,
    onFocus: (event) => {
      if (isOutsideEvent(event, portalNode)) {
        var _beforeInsideRef$curr;
        (_beforeInsideRef$curr = beforeInsideRef.current) == null ? void 0 : _beforeInsideRef$curr.focus();
      } else {
        const prevTabbable = getPreviousTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
        prevTabbable == null ? void 0 : prevTabbable.focus();
      }
    }
  }), shouldRenderGuards && portalNode && /* @__PURE__ */ React19.createElement("span", {
    "aria-owns": portalNode.id,
    style: HIDDEN_STYLES
  }), portalNode && /* @__PURE__ */ (0, import_react_dom4.createPortal)(children, portalNode), shouldRenderGuards && portalNode && /* @__PURE__ */ React19.createElement(FocusGuard, {
    "data-type": "outside",
    ref: afterOutsideRef,
    onFocus: (event) => {
      if (isOutsideEvent(event, portalNode)) {
        var _afterInsideRef$curre;
        (_afterInsideRef$curre = afterInsideRef.current) == null ? void 0 : _afterInsideRef$curre.focus();
      } else {
        const nextTabbable = getNextTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
        nextTabbable == null ? void 0 : nextTabbable.focus();
        (focusManagerState == null ? void 0 : focusManagerState.closeOnFocusOut) && (focusManagerState == null ? void 0 : focusManagerState.onOpenChange(false, event.nativeEvent));
      }
    }
  }));
}
__name(FloatingPortal, "FloatingPortal");
var usePortalContext2 = /* @__PURE__ */ __name(() => React19.useContext(PortalContext), "usePortalContext");
var VisuallyHiddenDismiss = /* @__PURE__ */ React19.forwardRef(/* @__PURE__ */ __name(function VisuallyHiddenDismiss2(props, ref) {
  return /* @__PURE__ */ React19.createElement("button", _extends({}, props, {
    type: "button",
    ref,
    tabIndex: -1,
    style: HIDDEN_STYLES
  }));
}, "VisuallyHiddenDismiss"));
function FloatingFocusManager(props) {
  const {
    context,
    children,
    disabled = false,
    order = ["content"],
    guards: _guards = true,
    initialFocus = 0,
    returnFocus = true,
    modal = true,
    visuallyHiddenDismiss = false,
    closeOnFocusOut = true
  } = props;
  const {
    open,
    refs,
    nodeId,
    onOpenChange,
    events,
    dataRef,
    elements: {
      domReference,
      floating
    }
  } = context;
  const guards = (0, import_aria_hidden2.supportsInert)() ? _guards : true;
  const orderRef = useLatestRef2(order);
  const initialFocusRef = useLatestRef2(initialFocus);
  const returnFocusRef = useLatestRef2(returnFocus);
  const tree = useFloatingTree();
  const portalContext = usePortalContext2();
  const ignoreInitialFocus = typeof initialFocus === "number" && initialFocus < 0;
  const startDismissButtonRef = React19.useRef(null);
  const endDismissButtonRef = React19.useRef(null);
  const preventReturnFocusRef = React19.useRef(false);
  const previouslyFocusedElementRef = React19.useRef(null);
  const isPointerDownRef = React19.useRef(false);
  const isInsidePortal = portalContext != null;
  const isTypeableCombobox = domReference && domReference.getAttribute("role") === "combobox" && isTypeableElement(domReference);
  const getTabbableContent = React19.useCallback(function(container) {
    if (container === void 0) {
      container = floating;
    }
    return container ? (0, import_tabbable.tabbable)(container, getTabbableOptions()) : [];
  }, [floating]);
  const getTabbableElements = React19.useCallback((container) => {
    const content = getTabbableContent(container);
    return orderRef.current.map((type) => {
      if (domReference && type === "reference") {
        return domReference;
      }
      if (floating && type === "floating") {
        return floating;
      }
      return content;
    }).filter(Boolean).flat();
  }, [domReference, floating, orderRef, getTabbableContent]);
  React19.useEffect(() => {
    if (disabled || !modal)
      return;
    function onKeyDown(event) {
      if (event.key === "Tab") {
        if (contains(floating, activeElement(getDocument(floating))) && getTabbableContent().length === 0 && !isTypeableCombobox) {
          stopEvent(event);
        }
        const els = getTabbableElements();
        const target = getTarget(event);
        if (orderRef.current[0] === "reference" && target === domReference) {
          stopEvent(event);
          if (event.shiftKey) {
            enqueueFocus(els[els.length - 1]);
          } else {
            enqueueFocus(els[1]);
          }
        }
        if (orderRef.current[1] === "floating" && target === floating && event.shiftKey) {
          stopEvent(event);
          enqueueFocus(els[0]);
        }
      }
    }
    __name(onKeyDown, "onKeyDown");
    const doc = getDocument(floating);
    doc.addEventListener("keydown", onKeyDown);
    return () => {
      doc.removeEventListener("keydown", onKeyDown);
    };
  }, [disabled, domReference, floating, modal, orderRef, refs, isTypeableCombobox, getTabbableContent, getTabbableElements]);
  React19.useEffect(() => {
    if (disabled || !closeOnFocusOut)
      return;
    function handlePointerDown() {
      isPointerDownRef.current = true;
      setTimeout(() => {
        isPointerDownRef.current = false;
      });
    }
    __name(handlePointerDown, "handlePointerDown");
    function handleFocusOutside(event) {
      const relatedTarget = event.relatedTarget;
      queueMicrotask(() => {
        const movedToUnrelatedNode = !(contains(domReference, relatedTarget) || contains(floating, relatedTarget) || contains(relatedTarget, floating) || contains(portalContext == null ? void 0 : portalContext.portalNode, relatedTarget) || relatedTarget != null && relatedTarget.hasAttribute(createAttribute("focus-guard")) || tree && (getChildren(tree.nodesRef.current, nodeId).find((node) => {
          var _node$context, _node$context2;
          return contains((_node$context = node.context) == null ? void 0 : _node$context.elements.floating, relatedTarget) || contains((_node$context2 = node.context) == null ? void 0 : _node$context2.elements.domReference, relatedTarget);
        }) || getAncestors(tree.nodesRef.current, nodeId).find((node) => {
          var _node$context3, _node$context4;
          return ((_node$context3 = node.context) == null ? void 0 : _node$context3.elements.floating) === relatedTarget || ((_node$context4 = node.context) == null ? void 0 : _node$context4.elements.domReference) === relatedTarget;
        })));
        if (relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        relatedTarget !== previouslyFocusedElementRef.current) {
          preventReturnFocusRef.current = true;
          onOpenChange(false, event);
        }
      });
    }
    __name(handleFocusOutside, "handleFocusOutside");
    if (floating && isHTMLElement2(domReference)) {
      domReference.addEventListener("focusout", handleFocusOutside);
      domReference.addEventListener("pointerdown", handlePointerDown);
      !modal && floating.addEventListener("focusout", handleFocusOutside);
      return () => {
        domReference.removeEventListener("focusout", handleFocusOutside);
        domReference.removeEventListener("pointerdown", handlePointerDown);
        !modal && floating.removeEventListener("focusout", handleFocusOutside);
      };
    }
  }, [disabled, domReference, floating, modal, nodeId, tree, portalContext, onOpenChange, closeOnFocusOut]);
  React19.useEffect(() => {
    var _portalContext$portal;
    if (disabled)
      return;
    const portalNodes = Array.from((portalContext == null ? void 0 : (_portalContext$portal = portalContext.portalNode) == null ? void 0 : _portalContext$portal.querySelectorAll("[" + createAttribute("portal") + "]")) || []);
    if (floating && modal) {
      const insideNodes = [floating, ...portalNodes, startDismissButtonRef.current, endDismissButtonRef.current].filter((x) => x != null);
      const suppressorFn = guards ? import_aria_hidden2.hideOthers : import_aria_hidden2.suppressOthers;
      const cleanup = suppressorFn(orderRef.current.includes("reference") || isTypeableCombobox ? insideNodes.concat(domReference || []) : insideNodes, void 0, createAttribute("inert"));
      return () => {
        cleanup();
      };
    }
  }, [disabled, domReference, floating, modal, orderRef, portalContext, isTypeableCombobox, guards]);
  index2(() => {
    if (disabled || !floating)
      return;
    const doc = getDocument(floating);
    const previouslyFocusedElement = activeElement(doc);
    queueMicrotask(() => {
      const focusableElements = getTabbableElements(floating);
      const initialFocusValue = initialFocusRef.current;
      const elToFocus = (typeof initialFocusValue === "number" ? focusableElements[initialFocusValue] : initialFocusValue.current) || floating;
      const focusAlreadyInsideFloatingEl = contains(floating, previouslyFocusedElement);
      if (!ignoreInitialFocus && !focusAlreadyInsideFloatingEl && open) {
        enqueueFocus(elToFocus, {
          preventScroll: elToFocus === floating
        });
      }
    });
  }, [disabled, open, floating, ignoreInitialFocus, getTabbableElements, initialFocusRef]);
  index2(() => {
    if (disabled || !floating)
      return;
    let preventReturnFocusScroll = false;
    const doc = getDocument(floating);
    const previouslyFocusedElement = activeElement(doc);
    const contextData = dataRef.current;
    previouslyFocusedElementRef.current = previouslyFocusedElement;
    function onDismiss(payload) {
      if (payload.type === "escapeKey" && refs.domReference.current) {
        previouslyFocusedElementRef.current = refs.domReference.current;
      }
      if (["referencePress", "escapeKey"].includes(payload.type)) {
        return;
      }
      const returnFocus2 = payload.data.returnFocus;
      if (typeof returnFocus2 === "object") {
        preventReturnFocusRef.current = false;
        preventReturnFocusScroll = returnFocus2.preventScroll;
      } else {
        preventReturnFocusRef.current = !returnFocus2;
      }
    }
    __name(onDismiss, "onDismiss");
    events.on("dismiss", onDismiss);
    return () => {
      events.off("dismiss", onDismiss);
      const activeEl = activeElement(doc);
      const shouldFocusReference = contains(floating, activeEl) || tree && getChildren(tree.nodesRef.current, nodeId).some((node) => {
        var _node$context5;
        return contains((_node$context5 = node.context) == null ? void 0 : _node$context5.elements.floating, activeEl);
      }) || contextData.openEvent && ["click", "mousedown"].includes(contextData.openEvent.type);
      if (shouldFocusReference && refs.domReference.current) {
        previouslyFocusedElementRef.current = refs.domReference.current;
      }
      if (
        // eslint-disable-next-line react-hooks/exhaustive-deps
        returnFocusRef.current && isHTMLElement2(previouslyFocusedElementRef.current) && !preventReturnFocusRef.current
      ) {
        enqueueFocus(previouslyFocusedElementRef.current, {
          // When dismissing nested floating elements, by the time the rAF has
          // executed, the menus will all have been unmounted. When they try
          // to get focused, the calls get ignored — leaving the root
          // reference focused as desired.
          cancelPrevious: false,
          preventScroll: preventReturnFocusScroll
        });
      }
    };
  }, [disabled, floating, returnFocusRef, dataRef, refs, events, tree, nodeId]);
  index2(() => {
    if (disabled || !portalContext)
      return;
    portalContext.setFocusManagerState({
      ...context,
      modal,
      closeOnFocusOut,
      open
    });
    return () => {
      portalContext.setFocusManagerState(null);
    };
  }, [disabled, portalContext, modal, open, closeOnFocusOut, context]);
  index2(() => {
    if (disabled)
      return;
    if (floating && typeof MutationObserver === "function") {
      const handleMutation = /* @__PURE__ */ __name(() => {
        const tabIndex = floating.getAttribute("tabindex");
        if (orderRef.current.includes("floating") || activeElement(getDocument(floating)) !== refs.domReference.current && getTabbableContent().length === 0) {
          if (tabIndex !== "0") {
            floating.setAttribute("tabindex", "0");
          }
        } else if (tabIndex !== "-1") {
          floating.setAttribute("tabindex", "-1");
        }
      }, "handleMutation");
      handleMutation();
      const observer = new MutationObserver(handleMutation);
      observer.observe(floating, {
        childList: true,
        subtree: true,
        attributes: true
      });
      return () => {
        observer.disconnect();
      };
    }
  }, [disabled, floating, refs, orderRef, getTabbableContent]);
  function renderDismissButton(location) {
    if (disabled || !visuallyHiddenDismiss || !modal) {
      return null;
    }
    return /* @__PURE__ */ React19.createElement(VisuallyHiddenDismiss, {
      ref: location === "start" ? startDismissButtonRef : endDismissButtonRef,
      onClick: (event) => onOpenChange(false, event.nativeEvent)
    }, typeof visuallyHiddenDismiss === "string" ? visuallyHiddenDismiss : "Dismiss");
  }
  __name(renderDismissButton, "renderDismissButton");
  const shouldRenderGuards = !disabled && guards && !isTypeableCombobox && (isInsidePortal || modal);
  return /* @__PURE__ */ React19.createElement(React19.Fragment, null, shouldRenderGuards && /* @__PURE__ */ React19.createElement(FocusGuard, {
    "data-type": "inside",
    ref: portalContext == null ? void 0 : portalContext.beforeInsideRef,
    onFocus: (event) => {
      if (modal) {
        const els = getTabbableElements();
        enqueueFocus(order[0] === "reference" ? els[0] : els[els.length - 1]);
      } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
        preventReturnFocusRef.current = false;
        if (isOutsideEvent(event, portalContext.portalNode)) {
          const nextTabbable = getNextTabbable() || domReference;
          nextTabbable == null ? void 0 : nextTabbable.focus();
        } else {
          var _portalContext$before;
          (_portalContext$before = portalContext.beforeOutsideRef.current) == null ? void 0 : _portalContext$before.focus();
        }
      }
    }
  }), !isTypeableCombobox && renderDismissButton("start"), children, renderDismissButton("end"), shouldRenderGuards && /* @__PURE__ */ React19.createElement(FocusGuard, {
    "data-type": "inside",
    ref: portalContext == null ? void 0 : portalContext.afterInsideRef,
    onFocus: (event) => {
      if (modal) {
        enqueueFocus(getTabbableElements()[0]);
      } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
        if (closeOnFocusOut) {
          preventReturnFocusRef.current = true;
        }
        if (isOutsideEvent(event, portalContext.portalNode)) {
          const prevTabbable = getPreviousTabbable() || domReference;
          prevTabbable == null ? void 0 : prevTabbable.focus();
        } else {
          var _portalContext$afterO;
          (_portalContext$afterO = portalContext.afterOutsideRef.current) == null ? void 0 : _portalContext$afterO.focus();
        }
      }
    }
  }));
}
__name(FloatingFocusManager, "FloatingFocusManager");
var identifier = /* @__PURE__ */ createAttribute("scroll-lock");
var FloatingOverlay = /* @__PURE__ */ React19.forwardRef(/* @__PURE__ */ __name(function FloatingOverlay2(_ref, ref) {
  let {
    lockScroll = false,
    ...rest
  } = _ref;
  index2(() => {
    var _window$visualViewpor, _window$visualViewpor2;
    if (!lockScroll) {
      return;
    }
    const alreadyLocked = document.body.hasAttribute(identifier);
    if (alreadyLocked) {
      return;
    }
    document.body.setAttribute(identifier, "");
    const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
    const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (!/iP(hone|ad|od)|iOS/.test(getPlatform())) {
      Object.assign(document.body.style, {
        overflow: "hidden",
        [paddingProp]: scrollbarWidth + "px"
      });
      return () => {
        document.body.removeAttribute(identifier);
        Object.assign(document.body.style, {
          overflow: "",
          [paddingProp]: ""
        });
      };
    }
    const offsetLeft = ((_window$visualViewpor = window.visualViewport) == null ? void 0 : _window$visualViewpor.offsetLeft) || 0;
    const offsetTop = ((_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetTop) || 0;
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;
    Object.assign(document.body.style, {
      position: "fixed",
      overflow: "hidden",
      top: -(scrollY - Math.floor(offsetTop)) + "px",
      left: -(scrollX - Math.floor(offsetLeft)) + "px",
      right: "0",
      [paddingProp]: scrollbarWidth + "px"
    });
    return () => {
      Object.assign(document.body.style, {
        position: "",
        overflow: "",
        top: "",
        left: "",
        right: "",
        [paddingProp]: ""
      });
      document.body.removeAttribute(identifier);
      window.scrollTo(scrollX, scrollY);
    };
  }, [lockScroll]);
  return /* @__PURE__ */ React19.createElement("div", _extends({
    ref
  }, rest, {
    style: {
      position: "fixed",
      overflow: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...rest.style
    }
  }));
}, "FloatingOverlay"));
function isButtonTarget(event) {
  return isHTMLElement2(event.target) && event.target.tagName === "BUTTON";
}
__name(isButtonTarget, "isButtonTarget");
function isSpaceIgnored(element) {
  return isTypeableElement(element);
}
__name(isSpaceIgnored, "isSpaceIgnored");
function useClick(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    dataRef,
    elements: {
      domReference
    }
  } = context;
  const {
    enabled = true,
    event: eventOption = "click",
    toggle = true,
    ignoreMouse = false,
    keyboardHandlers = true
  } = props;
  const pointerTypeRef = React19.useRef();
  const didKeyDownRef = React19.useRef(false);
  return React19.useMemo(() => {
    if (!enabled)
      return {};
    return {
      reference: {
        onPointerDown(event) {
          pointerTypeRef.current = event.pointerType;
        },
        onMouseDown(event) {
          if (event.button !== 0) {
            return;
          }
          if (isMouseLikePointerType(pointerTypeRef.current, true) && ignoreMouse) {
            return;
          }
          if (eventOption === "click") {
            return;
          }
          if (open && toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "mousedown" : true)) {
            onOpenChange(false, event.nativeEvent);
          } else {
            event.preventDefault();
            onOpenChange(true, event.nativeEvent);
          }
        },
        onClick(event) {
          if (eventOption === "mousedown" && pointerTypeRef.current) {
            pointerTypeRef.current = void 0;
            return;
          }
          if (isMouseLikePointerType(pointerTypeRef.current, true) && ignoreMouse) {
            return;
          }
          if (open && toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "click" : true)) {
            onOpenChange(false, event.nativeEvent);
          } else {
            onOpenChange(true, event.nativeEvent);
          }
        },
        onKeyDown(event) {
          pointerTypeRef.current = void 0;
          if (event.defaultPrevented || !keyboardHandlers || isButtonTarget(event)) {
            return;
          }
          if (event.key === " " && !isSpaceIgnored(domReference)) {
            event.preventDefault();
            didKeyDownRef.current = true;
          }
          if (event.key === "Enter") {
            if (open && toggle) {
              onOpenChange(false, event.nativeEvent);
            } else {
              onOpenChange(true, event.nativeEvent);
            }
          }
        },
        onKeyUp(event) {
          if (event.defaultPrevented || !keyboardHandlers || isButtonTarget(event) || isSpaceIgnored(domReference)) {
            return;
          }
          if (event.key === " " && didKeyDownRef.current) {
            didKeyDownRef.current = false;
            if (open && toggle) {
              onOpenChange(false, event.nativeEvent);
            } else {
              onOpenChange(true, event.nativeEvent);
            }
          }
        }
      }
    };
  }, [enabled, dataRef, eventOption, ignoreMouse, keyboardHandlers, domReference, toggle, open, onOpenChange]);
}
__name(useClick, "useClick");
var useInsertionEffect = React19[/* @__PURE__ */ "useInsertionEffect".toString()];
var useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
function useEffectEvent(callback) {
  const ref = React19.useRef(() => {
    if (process.env.NODE_ENV !== "production") {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React19.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
__name(useEffectEvent, "useEffectEvent");
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }
  if ("composedPath" in event) {
    return event.composedPath().includes(node);
  }
  const e = event;
  return e.target != null && node.contains(e.target);
}
__name(isEventTargetWithin, "isEventTargetWithin");
var bubbleHandlerKeys = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
};
var captureHandlerKeys = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
};
var normalizeBubblesProp = /* @__PURE__ */ __name((bubbles) => {
  var _bubbles$escapeKey, _bubbles$outsidePress;
  return {
    escapeKeyBubbles: typeof bubbles === "boolean" ? bubbles : (_bubbles$escapeKey = bubbles == null ? void 0 : bubbles.escapeKey) != null ? _bubbles$escapeKey : false,
    outsidePressBubbles: typeof bubbles === "boolean" ? bubbles : (_bubbles$outsidePress = bubbles == null ? void 0 : bubbles.outsidePress) != null ? _bubbles$outsidePress : true
  };
}, "normalizeBubblesProp");
function useDismiss(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    events,
    nodeId,
    elements: {
      reference,
      domReference,
      floating
    },
    dataRef
  } = context;
  const {
    enabled = true,
    escapeKey = true,
    outsidePress: unstable_outsidePress = true,
    outsidePressEvent = "pointerdown",
    referencePress = false,
    referencePressEvent = "pointerdown",
    ancestorScroll = false,
    bubbles
  } = props;
  const tree = useFloatingTree();
  const nested = useFloatingParentNodeId() != null;
  const outsidePressFn = useEffectEvent(typeof unstable_outsidePress === "function" ? unstable_outsidePress : () => false);
  const outsidePress = typeof unstable_outsidePress === "function" ? outsidePressFn : unstable_outsidePress;
  const insideReactTreeRef = React19.useRef(false);
  const {
    escapeKeyBubbles,
    outsidePressBubbles
  } = normalizeBubblesProp(bubbles);
  const closeOnEscapeKeyDown = useEffectEvent((event) => {
    if (!open || !enabled || !escapeKey || event.key !== "Escape") {
      return;
    }
    const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
    if (!escapeKeyBubbles) {
      event.stopPropagation();
      if (children.length > 0) {
        let shouldDismiss = true;
        children.forEach((child) => {
          var _child$context;
          if ((_child$context = child.context) != null && _child$context.open && !child.context.dataRef.current.__escapeKeyBubbles) {
            shouldDismiss = false;
            return;
          }
        });
        if (!shouldDismiss) {
          return;
        }
      }
    }
    events.emit("dismiss", {
      type: "escapeKey",
      data: {
        returnFocus: {
          preventScroll: false
        }
      }
    });
    onOpenChange(false, isReactEvent(event) ? event.nativeEvent : event);
  });
  const closeOnPressOutside = useEffectEvent((event) => {
    const insideReactTree = insideReactTreeRef.current;
    insideReactTreeRef.current = false;
    if (insideReactTree) {
      return;
    }
    if (typeof outsidePress === "function" && !outsidePress(event)) {
      return;
    }
    const target = getTarget(event);
    if (isHTMLElement2(target) && floating) {
      const canScrollX = target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
      const canScrollY = target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
      let xCond = canScrollY && event.offsetX > target.clientWidth;
      if (canScrollY) {
        const isRTL2 = getWindow2(floating).getComputedStyle(target).direction === "rtl";
        if (isRTL2) {
          xCond = event.offsetX <= target.offsetWidth - target.clientWidth;
        }
      }
      if (xCond || canScrollX && event.offsetY > target.clientHeight) {
        return;
      }
    }
    const targetIsInsideChildren = tree && getChildren(tree.nodesRef.current, nodeId).some((node) => {
      var _node$context;
      return isEventTargetWithin(event, (_node$context = node.context) == null ? void 0 : _node$context.elements.floating);
    });
    if (isEventTargetWithin(event, floating) || isEventTargetWithin(event, domReference) || targetIsInsideChildren) {
      return;
    }
    const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
    if (children.length > 0) {
      let shouldDismiss = true;
      children.forEach((child) => {
        var _child$context2;
        if ((_child$context2 = child.context) != null && _child$context2.open && !child.context.dataRef.current.__outsidePressBubbles) {
          shouldDismiss = false;
          return;
        }
      });
      if (!shouldDismiss) {
        return;
      }
    }
    events.emit("dismiss", {
      type: "outsidePress",
      data: {
        returnFocus: nested ? {
          preventScroll: true
        } : isVirtualClick(event) || isVirtualPointerEvent(event)
      }
    });
    onOpenChange(false, event);
  });
  React19.useEffect(() => {
    if (!open || !enabled) {
      return;
    }
    dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
    dataRef.current.__outsidePressBubbles = outsidePressBubbles;
    function onScroll(event) {
      onOpenChange(false, event);
    }
    __name(onScroll, "onScroll");
    const doc = getDocument(floating);
    escapeKey && doc.addEventListener("keydown", closeOnEscapeKeyDown);
    outsidePress && doc.addEventListener(outsidePressEvent, closeOnPressOutside);
    let ancestors = [];
    if (ancestorScroll) {
      if (isElement2(domReference)) {
        ancestors = getOverflowAncestors(domReference);
      }
      if (isElement2(floating)) {
        ancestors = ancestors.concat(getOverflowAncestors(floating));
      }
      if (!isElement2(reference) && reference && reference.contextElement) {
        ancestors = ancestors.concat(getOverflowAncestors(reference.contextElement));
      }
    }
    ancestors = ancestors.filter((ancestor) => {
      var _doc$defaultView;
      return ancestor !== ((_doc$defaultView = doc.defaultView) == null ? void 0 : _doc$defaultView.visualViewport);
    });
    ancestors.forEach((ancestor) => {
      ancestor.addEventListener("scroll", onScroll, {
        passive: true
      });
    });
    return () => {
      escapeKey && doc.removeEventListener("keydown", closeOnEscapeKeyDown);
      outsidePress && doc.removeEventListener(outsidePressEvent, closeOnPressOutside);
      ancestors.forEach((ancestor) => {
        ancestor.removeEventListener("scroll", onScroll);
      });
    };
  }, [dataRef, floating, domReference, reference, escapeKey, outsidePress, outsidePressEvent, open, onOpenChange, ancestorScroll, enabled, escapeKeyBubbles, outsidePressBubbles, closeOnEscapeKeyDown, closeOnPressOutside]);
  React19.useEffect(() => {
    insideReactTreeRef.current = false;
  }, [outsidePress, outsidePressEvent]);
  return React19.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      reference: {
        onKeyDown: closeOnEscapeKeyDown,
        [bubbleHandlerKeys[referencePressEvent]]: (event) => {
          if (referencePress) {
            events.emit("dismiss", {
              type: "referencePress",
              data: {
                returnFocus: false
              }
            });
            onOpenChange(false, event.nativeEvent);
          }
        }
      },
      floating: {
        onKeyDown: closeOnEscapeKeyDown,
        [captureHandlerKeys[outsidePressEvent]]: () => {
          insideReactTreeRef.current = true;
        }
      }
    };
  }, [enabled, events, referencePress, outsidePressEvent, referencePressEvent, onOpenChange, closeOnEscapeKeyDown]);
}
__name(useDismiss, "useDismiss");
function useFloating3(options) {
  var _options$elements;
  if (options === void 0) {
    options = {};
  }
  const {
    open = false,
    onOpenChange: unstable_onOpenChange,
    nodeId
  } = options;
  const [_domReference, setDomReference] = React19.useState(null);
  const domReference = ((_options$elements = options.elements) == null ? void 0 : _options$elements.reference) || _domReference;
  const position = useFloating(options);
  const tree = useFloatingTree();
  const onOpenChange = useEffectEvent((open2, event) => {
    if (open2) {
      dataRef.current.openEvent = event;
    }
    unstable_onOpenChange == null ? void 0 : unstable_onOpenChange(open2, event);
  });
  const domReferenceRef = React19.useRef(null);
  const dataRef = React19.useRef({});
  const events = React19.useState(() => createPubSub())[0];
  const floatingId = useId6();
  const setPositionReference = React19.useCallback((node) => {
    const positionReference = isElement2(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    position.refs.setReference(positionReference);
  }, [position.refs]);
  const setReference = React19.useCallback((node) => {
    if (isElement2(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement2(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement2(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React19.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React19.useMemo(() => ({
    ...position.elements,
    domReference
  }), [position.elements, domReference]);
  const context = React19.useMemo(() => ({
    ...position,
    refs,
    elements,
    dataRef,
    nodeId,
    floatingId,
    events,
    open,
    onOpenChange
  }), [position, nodeId, floatingId, events, open, onOpenChange, refs, elements]);
  index2(() => {
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React19.useMemo(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}
__name(useFloating3, "useFloating");
function useFocus(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    dataRef,
    events,
    refs,
    elements: {
      floating,
      domReference
    }
  } = context;
  const {
    enabled = true,
    keyboardOnly = true
  } = props;
  const pointerTypeRef = React19.useRef("");
  const blockFocusRef = React19.useRef(false);
  const timeoutRef = React19.useRef();
  React19.useEffect(() => {
    if (!enabled) {
      return;
    }
    const doc = getDocument(floating);
    const win = doc.defaultView || window;
    function onBlur() {
      if (!open && isHTMLElement2(domReference) && domReference === activeElement(getDocument(domReference))) {
        blockFocusRef.current = true;
      }
    }
    __name(onBlur, "onBlur");
    win.addEventListener("blur", onBlur);
    return () => {
      win.removeEventListener("blur", onBlur);
    };
  }, [floating, domReference, open, enabled]);
  React19.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onDismiss(payload) {
      if (payload.type === "referencePress" || payload.type === "escapeKey") {
        blockFocusRef.current = true;
      }
    }
    __name(onDismiss, "onDismiss");
    events.on("dismiss", onDismiss);
    return () => {
      events.off("dismiss", onDismiss);
    };
  }, [events, enabled]);
  React19.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  return React19.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      reference: {
        onPointerDown(_ref) {
          let {
            pointerType
          } = _ref;
          pointerTypeRef.current = pointerType;
          blockFocusRef.current = !!(pointerType && keyboardOnly);
        },
        onMouseLeave() {
          blockFocusRef.current = false;
        },
        onFocus(event) {
          var _dataRef$current$open;
          if (blockFocusRef.current) {
            return;
          }
          if (event.type === "focus" && ((_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type) === "mousedown" && isEventTargetWithin(dataRef.current.openEvent, domReference)) {
            return;
          }
          onOpenChange(true, event.nativeEvent);
        },
        onBlur(event) {
          blockFocusRef.current = false;
          const relatedTarget = event.relatedTarget;
          const movedToFocusGuard = isElement2(relatedTarget) && relatedTarget.hasAttribute(createAttribute("focus-guard")) && relatedTarget.getAttribute("data-type") === "outside";
          timeoutRef.current = setTimeout(() => {
            if (contains(refs.floating.current, relatedTarget) || contains(domReference, relatedTarget) || movedToFocusGuard) {
              return;
            }
            onOpenChange(false, event.nativeEvent);
          });
        }
      }
    };
  }, [enabled, keyboardOnly, domReference, refs, dataRef, onOpenChange]);
}
__name(useFocus, "useFocus");
function mergeProps(userProps, propsList, elementKey) {
  const map = /* @__PURE__ */ new Map();
  return {
    ...elementKey === "floating" && {
      tabIndex: -1
    },
    ...userProps,
    ...propsList.map((value) => value ? value[elementKey] : null).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach((_ref) => {
        let [key, value] = _ref;
        if (key.indexOf("on") === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === "function") {
            var _map$get;
            (_map$get = map.get(key)) == null ? void 0 : _map$get.push(value);
            acc[key] = function() {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn) => fn(...args)).find((val) => val !== void 0);
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
__name(mergeProps, "mergeProps");
function useInteractions(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  const deps = propsList;
  const getReferenceProps = React19.useCallback(
    (userProps) => mergeProps(userProps, propsList, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );
  const getFloatingProps = React19.useCallback(
    (userProps) => mergeProps(userProps, propsList, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );
  const getItemProps = React19.useCallback(
    (userProps) => mergeProps(userProps, propsList, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    propsList.map((key) => key == null ? void 0 : key.item)
  );
  return React19.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
}
__name(useInteractions, "useInteractions");
var isPreventScrollSupported = false;
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
function isDifferentRow(index3, cols, prevRow) {
  return Math.floor(index3 / cols) !== prevRow;
}
__name(isDifferentRow, "isDifferentRow");
function isIndexOutOfBounds(listRef, index3) {
  return index3 < 0 || index3 >= listRef.current.length;
}
__name(isIndexOutOfBounds, "isIndexOutOfBounds");
function findNonDisabledIndex(listRef, _temp) {
  let {
    startingIndex = -1,
    decrement = false,
    disabledIndices,
    amount = 1
  } = _temp === void 0 ? {} : _temp;
  const list = listRef.current;
  let index3 = startingIndex;
  do {
    var _list$index, _list$index2;
    index3 = index3 + (decrement ? -amount : amount);
  } while (index3 >= 0 && index3 <= list.length - 1 && (disabledIndices ? disabledIndices.includes(index3) : list[index3] == null || ((_list$index = list[index3]) == null ? void 0 : _list$index.hasAttribute("disabled")) || ((_list$index2 = list[index3]) == null ? void 0 : _list$index2.getAttribute("aria-disabled")) === "true"));
  return index3;
}
__name(findNonDisabledIndex, "findNonDisabledIndex");
function doSwitch(orientation, vertical, horizontal) {
  switch (orientation) {
    case "vertical":
      return vertical;
    case "horizontal":
      return horizontal;
    default:
      return vertical || horizontal;
  }
}
__name(doSwitch, "doSwitch");
function isMainOrientationKey(key, orientation) {
  const vertical = key === ARROW_UP || key === ARROW_DOWN;
  const horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal);
}
__name(isMainOrientationKey, "isMainOrientationKey");
function isMainOrientationToEndKey(key, orientation, rtl) {
  const vertical = key === ARROW_DOWN;
  const horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal) || key === "Enter" || key == " " || key === "";
}
__name(isMainOrientationToEndKey, "isMainOrientationToEndKey");
function isCrossOrientationOpenKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  const horizontal = key === ARROW_DOWN;
  return doSwitch(orientation, vertical, horizontal);
}
__name(isCrossOrientationOpenKey, "isCrossOrientationOpenKey");
function isCrossOrientationCloseKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT;
  const horizontal = key === ARROW_UP;
  return doSwitch(orientation, vertical, horizontal);
}
__name(isCrossOrientationCloseKey, "isCrossOrientationCloseKey");
function getMinIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    disabledIndices
  });
}
__name(getMinIndex, "getMinIndex");
function getMaxIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
__name(getMaxIndex, "getMaxIndex");
function useListNavigation(context, props) {
  const {
    open,
    onOpenChange,
    refs,
    elements: {
      domReference,
      floating
    }
  } = context;
  const {
    listRef,
    activeIndex,
    onNavigate: unstable_onNavigate = /* @__PURE__ */ __name(() => {
    }, "unstable_onNavigate"),
    enabled = true,
    selectedIndex = null,
    allowEscape = false,
    loop = false,
    nested = false,
    rtl = false,
    virtual = false,
    focusItemOnOpen = "auto",
    focusItemOnHover = true,
    openOnArrowKeyDown = true,
    disabledIndices = void 0,
    orientation = "vertical",
    cols = 1,
    scrollItemIntoView = true
  } = props;
  if (process.env.NODE_ENV !== "production") {
    if (allowEscape) {
      if (!loop) {
        console.warn(["Floating UI: `useListNavigation` looping must be enabled to allow", "escaping."].join(" "));
      }
      if (!virtual) {
        console.warn(["Floating UI: `useListNavigation` must be virtual to allow", "escaping."].join(" "));
      }
    }
    if (orientation === "vertical" && cols > 1) {
      console.warn(["Floating UI: In grid list navigation mode (`cols` > 1), the", '`orientation` should be either "horizontal" or "both".'].join(" "));
    }
  }
  const parentId = useFloatingParentNodeId();
  const tree = useFloatingTree();
  const onNavigate = useEffectEvent(unstable_onNavigate);
  const focusItemOnOpenRef = React19.useRef(focusItemOnOpen);
  const indexRef = React19.useRef(selectedIndex != null ? selectedIndex : -1);
  const keyRef = React19.useRef(null);
  const isPointerModalityRef = React19.useRef(true);
  const previousOnNavigateRef = React19.useRef(onNavigate);
  const previousMountedRef = React19.useRef(!!floating);
  const forceSyncFocus = React19.useRef(false);
  const forceScrollIntoViewRef = React19.useRef(false);
  const disabledIndicesRef = useLatestRef2(disabledIndices);
  const latestOpenRef = useLatestRef2(open);
  const scrollItemIntoViewRef = useLatestRef2(scrollItemIntoView);
  const [activeId, setActiveId] = React19.useState();
  const focusItem = useEffectEvent(function(listRef2, indexRef2, forceScrollIntoView) {
    if (forceScrollIntoView === void 0) {
      forceScrollIntoView = false;
    }
    const item2 = listRef2.current[indexRef2.current];
    if (!item2)
      return;
    if (virtual) {
      setActiveId(item2.id);
    } else {
      enqueueFocus(item2, {
        preventScroll: true,
        // Mac Safari does not move the virtual cursor unless the focus call
        // is sync. However, for the very first focus call, we need to wait
        // for the position to be ready in order to prevent unwanted
        // scrolling. This means the virtual cursor will not move to the first
        // item when first opening the floating element, but will on
        // subsequent calls. `preventScroll` is supported in modern Safari,
        // so we can use that instead.
        // iOS Safari must be async or the first item will not be focused.
        sync: isMac() && isSafari() ? isPreventScrollSupported || forceSyncFocus.current : false
      });
    }
    requestAnimationFrame(() => {
      const scrollIntoViewOptions = scrollItemIntoViewRef.current;
      const shouldScrollIntoView = scrollIntoViewOptions && item2 && (forceScrollIntoView || !isPointerModalityRef.current);
      if (shouldScrollIntoView) {
        item2.scrollIntoView == null ? void 0 : item2.scrollIntoView(typeof scrollIntoViewOptions === "boolean" ? {
          block: "nearest",
          inline: "nearest"
        } : scrollIntoViewOptions);
      }
    });
  });
  index2(() => {
    document.createElement("div").focus({
      get preventScroll() {
        isPreventScrollSupported = true;
        return false;
      }
    });
  }, []);
  index2(() => {
    if (!enabled) {
      return;
    }
    if (open && floating) {
      if (focusItemOnOpenRef.current && selectedIndex != null) {
        forceScrollIntoViewRef.current = true;
        onNavigate(selectedIndex);
      }
    } else if (previousMountedRef.current) {
      indexRef.current = -1;
      previousOnNavigateRef.current(null);
    }
  }, [enabled, open, floating, selectedIndex, onNavigate]);
  index2(() => {
    if (!enabled) {
      return;
    }
    if (open && floating) {
      if (activeIndex == null) {
        forceSyncFocus.current = false;
        if (selectedIndex != null) {
          return;
        }
        if (previousMountedRef.current) {
          indexRef.current = -1;
          focusItem(listRef, indexRef);
        }
        if (!previousMountedRef.current && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
          let runs = 0;
          const waitForListPopulated = /* @__PURE__ */ __name(() => {
            if (listRef.current[0] == null) {
              if (runs < 2) {
                const scheduler = runs ? requestAnimationFrame : queueMicrotask;
                scheduler(waitForListPopulated);
              }
              runs++;
            } else {
              indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinIndex(listRef, disabledIndicesRef.current) : getMaxIndex(listRef, disabledIndicesRef.current);
              keyRef.current = null;
              onNavigate(indexRef.current);
            }
          }, "waitForListPopulated");
          waitForListPopulated();
        }
      } else if (!isIndexOutOfBounds(listRef, activeIndex)) {
        indexRef.current = activeIndex;
        focusItem(listRef, indexRef, forceScrollIntoViewRef.current);
        forceScrollIntoViewRef.current = false;
      }
    }
  }, [enabled, open, floating, activeIndex, selectedIndex, nested, listRef, orientation, rtl, onNavigate, focusItem, disabledIndicesRef]);
  index2(() => {
    if (!enabled) {
      return;
    }
    if (previousMountedRef.current && !floating && tree) {
      var _nodes$find, _nodes$find$context;
      const nodes = tree.nodesRef.current;
      const parent = (_nodes$find = nodes.find((node) => node.id === parentId)) == null ? void 0 : (_nodes$find$context = _nodes$find.context) == null ? void 0 : _nodes$find$context.elements.floating;
      const activeEl = activeElement(getDocument(floating));
      const treeContainsActiveEl = nodes.some((node) => node.context && contains(node.context.elements.floating, activeEl));
      if (parent && !treeContainsActiveEl) {
        parent.focus({
          preventScroll: true
        });
      }
    }
  }, [enabled, floating, tree, parentId]);
  index2(() => {
    previousOnNavigateRef.current = onNavigate;
    previousMountedRef.current = !!floating;
  });
  index2(() => {
    if (!open) {
      keyRef.current = null;
    }
  }, [open]);
  const hasActiveIndex = activeIndex != null;
  const item = React19.useMemo(() => {
    function syncCurrentTarget(currentTarget) {
      if (!open)
        return;
      const index3 = listRef.current.indexOf(currentTarget);
      if (index3 !== -1) {
        onNavigate(index3);
      }
    }
    __name(syncCurrentTarget, "syncCurrentTarget");
    const props2 = {
      onFocus(_ref) {
        let {
          currentTarget
        } = _ref;
        syncCurrentTarget(currentTarget);
      },
      onClick: (_ref2) => {
        let {
          currentTarget
        } = _ref2;
        return currentTarget.focus({
          preventScroll: true
        });
      },
      // Safari
      ...focusItemOnHover && {
        onMouseMove(_ref3) {
          let {
            currentTarget
          } = _ref3;
          syncCurrentTarget(currentTarget);
        },
        onPointerLeave(_ref4) {
          let {
            pointerType
          } = _ref4;
          if (!isPointerModalityRef.current || pointerType === "touch") {
            return;
          }
          indexRef.current = -1;
          focusItem(listRef, indexRef);
          onNavigate(null);
          if (!virtual) {
            enqueueFocus(refs.floating.current, {
              preventScroll: true
            });
          }
        }
      }
    };
    return props2;
  }, [open, refs, focusItem, focusItemOnHover, listRef, onNavigate, virtual]);
  return React19.useMemo(() => {
    if (!enabled) {
      return {};
    }
    const disabledIndices2 = disabledIndicesRef.current;
    function onKeyDown(event) {
      isPointerModalityRef.current = false;
      forceSyncFocus.current = true;
      if (!latestOpenRef.current && event.currentTarget === refs.floating.current) {
        return;
      }
      if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl)) {
        stopEvent(event);
        onOpenChange(false, event.nativeEvent);
        if (isHTMLElement2(domReference)) {
          domReference.focus();
        }
        return;
      }
      const currentIndex = indexRef.current;
      const minIndex = getMinIndex(listRef, disabledIndices2);
      const maxIndex = getMaxIndex(listRef, disabledIndices2);
      if (event.key === "Home") {
        stopEvent(event);
        indexRef.current = minIndex;
        onNavigate(indexRef.current);
      }
      if (event.key === "End") {
        stopEvent(event);
        indexRef.current = maxIndex;
        onNavigate(indexRef.current);
      }
      if (cols > 1) {
        const prevIndex = indexRef.current;
        if (event.key === ARROW_UP) {
          stopEvent(event);
          if (prevIndex === -1) {
            indexRef.current = maxIndex;
          } else {
            indexRef.current = findNonDisabledIndex(listRef, {
              startingIndex: prevIndex,
              amount: cols,
              decrement: true,
              disabledIndices: disabledIndices2
            });
            if (loop && (prevIndex - cols < minIndex || indexRef.current < 0)) {
              const col = prevIndex % cols;
              const maxCol = maxIndex % cols;
              const offset2 = maxIndex - (maxCol - col);
              if (maxCol === col) {
                indexRef.current = maxIndex;
              } else {
                indexRef.current = maxCol > col ? offset2 : offset2 - cols;
              }
            }
          }
          if (isIndexOutOfBounds(listRef, indexRef.current)) {
            indexRef.current = prevIndex;
          }
          onNavigate(indexRef.current);
        }
        if (event.key === ARROW_DOWN) {
          stopEvent(event);
          if (prevIndex === -1) {
            indexRef.current = minIndex;
          } else {
            indexRef.current = findNonDisabledIndex(listRef, {
              startingIndex: prevIndex,
              amount: cols,
              disabledIndices: disabledIndices2
            });
            if (loop && prevIndex + cols > maxIndex) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex % cols - cols,
                amount: cols,
                disabledIndices: disabledIndices2
              });
            }
          }
          if (isIndexOutOfBounds(listRef, indexRef.current)) {
            indexRef.current = prevIndex;
          }
          onNavigate(indexRef.current);
        }
        if (orientation === "both") {
          const prevRow = Math.floor(prevIndex / cols);
          if (event.key === ARROW_RIGHT) {
            stopEvent(event);
            if (prevIndex % cols !== cols - 1) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex,
                disabledIndices: disabledIndices2
              });
              if (loop && isDifferentRow(indexRef.current, cols, prevRow)) {
                indexRef.current = findNonDisabledIndex(listRef, {
                  startingIndex: prevIndex - prevIndex % cols - 1,
                  disabledIndices: disabledIndices2
                });
              }
            } else if (loop) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex - prevIndex % cols - 1,
                disabledIndices: disabledIndices2
              });
            }
            if (isDifferentRow(indexRef.current, cols, prevRow)) {
              indexRef.current = prevIndex;
            }
          }
          if (event.key === ARROW_LEFT) {
            stopEvent(event);
            if (prevIndex % cols !== 0) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex,
                disabledIndices: disabledIndices2,
                decrement: true
              });
              if (loop && isDifferentRow(indexRef.current, cols, prevRow)) {
                indexRef.current = findNonDisabledIndex(listRef, {
                  startingIndex: prevIndex + (cols - prevIndex % cols),
                  decrement: true,
                  disabledIndices: disabledIndices2
                });
              }
            } else if (loop) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex + (cols - prevIndex % cols),
                decrement: true,
                disabledIndices: disabledIndices2
              });
            }
            if (isDifferentRow(indexRef.current, cols, prevRow)) {
              indexRef.current = prevIndex;
            }
          }
          const lastRow = Math.floor(maxIndex / cols) === prevRow;
          if (isIndexOutOfBounds(listRef, indexRef.current)) {
            if (loop && lastRow) {
              indexRef.current = event.key === ARROW_LEFT ? maxIndex : findNonDisabledIndex(listRef, {
                startingIndex: prevIndex - prevIndex % cols - 1,
                disabledIndices: disabledIndices2
              });
            } else {
              indexRef.current = prevIndex;
            }
          }
          onNavigate(indexRef.current);
          return;
        }
      }
      if (isMainOrientationKey(event.key, orientation)) {
        stopEvent(event);
        if (open && !virtual && activeElement(event.currentTarget.ownerDocument) === event.currentTarget) {
          indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
          onNavigate(indexRef.current);
          return;
        }
        if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
          if (loop) {
            indexRef.current = currentIndex >= maxIndex ? allowEscape && currentIndex !== listRef.current.length ? -1 : minIndex : findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              disabledIndices: disabledIndices2
            });
          } else {
            indexRef.current = Math.min(maxIndex, findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              disabledIndices: disabledIndices2
            }));
          }
        } else {
          if (loop) {
            indexRef.current = currentIndex <= minIndex ? allowEscape && currentIndex !== -1 ? listRef.current.length : maxIndex : findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              decrement: true,
              disabledIndices: disabledIndices2
            });
          } else {
            indexRef.current = Math.max(minIndex, findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              decrement: true,
              disabledIndices: disabledIndices2
            }));
          }
        }
        if (isIndexOutOfBounds(listRef, indexRef.current)) {
          onNavigate(null);
        } else {
          onNavigate(indexRef.current);
        }
      }
    }
    __name(onKeyDown, "onKeyDown");
    function checkVirtualMouse(event) {
      if (focusItemOnOpen === "auto" && isVirtualClick(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    __name(checkVirtualMouse, "checkVirtualMouse");
    function checkVirtualPointer(event) {
      focusItemOnOpenRef.current = focusItemOnOpen;
      if (focusItemOnOpen === "auto" && isVirtualPointerEvent(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    __name(checkVirtualPointer, "checkVirtualPointer");
    const ariaActiveDescendantProp = virtual && open && hasActiveIndex && {
      "aria-activedescendant": activeId
    };
    return {
      reference: {
        ...ariaActiveDescendantProp,
        onKeyDown(event) {
          isPointerModalityRef.current = false;
          const isArrowKey = event.key.indexOf("Arrow") === 0;
          if (virtual && open) {
            return onKeyDown(event);
          }
          if (!open && !openOnArrowKeyDown && isArrowKey) {
            return;
          }
          const isNavigationKey = isArrowKey || event.key === "Enter" || event.key.trim() === "";
          const isMainKey = isMainOrientationKey(event.key, orientation);
          const isCrossKey = isCrossOrientationOpenKey(event.key, orientation, rtl);
          if (isNavigationKey) {
            keyRef.current = nested && isMainKey ? null : event.key;
          }
          if (nested) {
            if (isCrossKey) {
              stopEvent(event);
              if (open) {
                indexRef.current = getMinIndex(listRef, disabledIndices2);
                onNavigate(indexRef.current);
              } else {
                onOpenChange(true, event.nativeEvent);
              }
            }
            return;
          }
          if (isMainKey) {
            if (selectedIndex != null) {
              indexRef.current = selectedIndex;
            }
            stopEvent(event);
            if (!open && openOnArrowKeyDown) {
              onOpenChange(true, event.nativeEvent);
            } else {
              onKeyDown(event);
            }
            if (open) {
              onNavigate(indexRef.current);
            }
          }
        },
        onFocus() {
          if (open) {
            onNavigate(null);
          }
        },
        onPointerDown: checkVirtualPointer,
        onMouseDown: checkVirtualMouse,
        onClick: checkVirtualMouse
      },
      floating: {
        "aria-orientation": orientation === "both" ? void 0 : orientation,
        ...ariaActiveDescendantProp,
        onKeyDown,
        onPointerMove() {
          isPointerModalityRef.current = true;
        }
      },
      item
    };
  }, [domReference, refs, activeId, disabledIndicesRef, latestOpenRef, listRef, enabled, orientation, rtl, virtual, open, hasActiveIndex, nested, selectedIndex, openOnArrowKeyDown, allowEscape, cols, loop, focusItemOnOpen, onNavigate, onOpenChange, item]);
}
__name(useListNavigation, "useListNavigation");
function useRole(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    floatingId
  } = context;
  const {
    enabled = true,
    role = "dialog"
  } = props;
  const referenceId = useId6();
  return React19.useMemo(() => {
    const floatingProps = {
      id: floatingId,
      role
    };
    if (!enabled) {
      return {};
    }
    if (role === "tooltip") {
      return {
        reference: {
          "aria-describedby": open ? floatingId : void 0
        },
        floating: floatingProps
      };
    }
    return {
      reference: {
        "aria-expanded": open ? "true" : "false",
        "aria-haspopup": role === "alertdialog" ? "dialog" : role,
        "aria-controls": open ? floatingId : void 0,
        ...role === "listbox" && {
          role: "combobox"
        },
        ...role === "menu" && {
          id: referenceId
        }
      },
      floating: {
        ...floatingProps,
        ...role === "menu" && {
          "aria-labelledby": referenceId
        }
      }
    };
  }, [enabled, role, open, floatingId, referenceId]);
}
__name(useRole, "useRole");
function useTypeahead(context, props) {
  var _ref;
  const {
    open,
    dataRef
  } = context;
  const {
    listRef,
    activeIndex,
    onMatch: unstable_onMatch,
    onTypingChange: unstable_onTypingChange,
    enabled = true,
    findMatch = null,
    resetMs = 750,
    ignoreKeys = [],
    selectedIndex = null
  } = props;
  const timeoutIdRef = React19.useRef();
  const stringRef = React19.useRef("");
  const prevIndexRef = React19.useRef((_ref = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref : -1);
  const matchIndexRef = React19.useRef(null);
  const onMatch = useEffectEvent(unstable_onMatch);
  const onTypingChange = useEffectEvent(unstable_onTypingChange);
  const findMatchRef = useLatestRef2(findMatch);
  const ignoreKeysRef = useLatestRef2(ignoreKeys);
  index2(() => {
    if (open) {
      clearTimeout(timeoutIdRef.current);
      matchIndexRef.current = null;
      stringRef.current = "";
    }
  }, [open]);
  index2(() => {
    if (open && stringRef.current === "") {
      var _ref2;
      prevIndexRef.current = (_ref2 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref2 : -1;
    }
  }, [open, selectedIndex, activeIndex]);
  return React19.useMemo(() => {
    if (!enabled) {
      return {};
    }
    function setTypingChange(value) {
      if (value) {
        if (!dataRef.current.typing) {
          dataRef.current.typing = value;
          onTypingChange(value);
        }
      } else {
        if (dataRef.current.typing) {
          dataRef.current.typing = value;
          onTypingChange(value);
        }
      }
    }
    __name(setTypingChange, "setTypingChange");
    function getMatchingIndex(list, orderedList, string) {
      const str = findMatchRef.current ? findMatchRef.current(orderedList, string) : orderedList.find((text) => (text == null ? void 0 : text.toLocaleLowerCase().indexOf(string.toLocaleLowerCase())) === 0);
      return str ? list.indexOf(str) : -1;
    }
    __name(getMatchingIndex, "getMatchingIndex");
    function onKeyDown(event) {
      const listContent = listRef.current;
      if (stringRef.current.length > 0 && stringRef.current[0] !== " ") {
        if (getMatchingIndex(listContent, listContent, stringRef.current) === -1) {
          setTypingChange(false);
        } else if (event.key === " ") {
          stopEvent(event);
        }
      }
      if (listContent == null || ignoreKeysRef.current.includes(event.key) || // Character key.
      event.key.length !== 1 || // Modifier key.
      event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }
      if (open && event.key !== " ") {
        stopEvent(event);
        setTypingChange(true);
      }
      const allowRapidSuccessionOfFirstLetter = listContent.every((text) => {
        var _text$, _text$2;
        return text ? ((_text$ = text[0]) == null ? void 0 : _text$.toLocaleLowerCase()) !== ((_text$2 = text[1]) == null ? void 0 : _text$2.toLocaleLowerCase()) : true;
      });
      if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
        stringRef.current = "";
        prevIndexRef.current = matchIndexRef.current;
      }
      stringRef.current += event.key;
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = setTimeout(() => {
        stringRef.current = "";
        prevIndexRef.current = matchIndexRef.current;
        setTypingChange(false);
      }, resetMs);
      const prevIndex = prevIndexRef.current;
      const index3 = getMatchingIndex(listContent, [...listContent.slice((prevIndex || 0) + 1), ...listContent.slice(0, (prevIndex || 0) + 1)], stringRef.current);
      if (index3 !== -1) {
        onMatch(index3);
        matchIndexRef.current = index3;
      } else if (event.key !== " ") {
        stringRef.current = "";
        setTypingChange(false);
      }
    }
    __name(onKeyDown, "onKeyDown");
    return {
      reference: {
        onKeyDown
      },
      floating: {
        onKeyDown,
        onKeyUp(event) {
          if (event.key === " ") {
            setTypingChange(false);
          }
        }
      }
    };
  }, [enabled, open, dataRef, listRef, resetMs, ignoreKeysRef, findMatchRef, onMatch, onTypingChange]);
}
__name(useTypeahead, "useTypeahead");
function getArgsWithCustomFloatingHeight(state, height) {
  return {
    ...state,
    rects: {
      ...state.rects,
      floating: {
        ...state.rects.floating,
        height
      }
    }
  };
}
__name(getArgsWithCustomFloatingHeight, "getArgsWithCustomFloatingHeight");
var inner = /* @__PURE__ */ __name((props) => ({
  name: "inner",
  options: props,
  async fn(state) {
    const {
      listRef,
      overflowRef,
      onFallbackChange,
      offset: innerOffset = 0,
      index: index3 = 0,
      minItemsVisible = 4,
      referenceOverflowThreshold = 0,
      scrollRef,
      ...detectOverflowOptions
    } = props;
    const {
      rects,
      elements: {
        floating
      }
    } = state;
    const item = listRef.current[index3];
    if (process.env.NODE_ENV !== "production") {
      if (!state.placement.startsWith("bottom")) {
        console.warn(['Floating UI: `placement` side must be "bottom" when using the', "`inner` middleware."].join(" "));
      }
    }
    if (!item) {
      return {};
    }
    const nextArgs = {
      ...state,
      ...await offset(-item.offsetTop - floating.clientTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state)
    };
    const el = (scrollRef == null ? void 0 : scrollRef.current) || floating;
    const overflow = await detectOverflow(getArgsWithCustomFloatingHeight(nextArgs, el.scrollHeight), detectOverflowOptions);
    const refOverflow = await detectOverflow(nextArgs, {
      ...detectOverflowOptions,
      elementContext: "reference"
    });
    const diffY = Math.max(0, overflow.top);
    const nextY = nextArgs.y + diffY;
    const maxHeight = Math.max(0, el.scrollHeight - diffY - Math.max(0, overflow.bottom));
    el.style.maxHeight = maxHeight + "px";
    el.scrollTop = diffY;
    if (onFallbackChange) {
      if (el.offsetHeight < item.offsetHeight * Math.min(minItemsVisible, listRef.current.length - 1) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold) {
        (0, import_react_dom4.flushSync)(() => onFallbackChange(true));
      } else {
        (0, import_react_dom4.flushSync)(() => onFallbackChange(false));
      }
    }
    if (overflowRef) {
      overflowRef.current = await detectOverflow(getArgsWithCustomFloatingHeight({
        ...nextArgs,
        y: nextY
      }, el.offsetHeight), detectOverflowOptions);
    }
    return {
      y: nextY
    };
  }
}), "inner");
function useInnerOffset(context, props) {
  const {
    open,
    elements
  } = context;
  const {
    enabled = true,
    overflowRef,
    scrollRef,
    onChange: unstable_onChange
  } = props;
  const onChange = useEffectEvent(unstable_onChange);
  const controlledScrollingRef = React19.useRef(false);
  const prevScrollTopRef = React19.useRef(null);
  const initialOverflowRef = React19.useRef(null);
  React19.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onWheel(e) {
      if (e.ctrlKey || !el || overflowRef.current == null) {
        return;
      }
      const dY = e.deltaY;
      const isAtTop = overflowRef.current.top >= -0.5;
      const isAtBottom = overflowRef.current.bottom >= -0.5;
      const remainingScroll = el.scrollHeight - el.clientHeight;
      const sign = dY < 0 ? -1 : 1;
      const method = dY < 0 ? "max" : "min";
      if (el.scrollHeight <= el.clientHeight) {
        return;
      }
      if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
        e.preventDefault();
        (0, import_react_dom4.flushSync)(() => {
          onChange((d) => d + Math[method](dY, remainingScroll * sign));
        });
      } else if (/firefox/i.test(getUserAgent())) {
        el.scrollTop += dY;
      }
    }
    __name(onWheel, "onWheel");
    const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
    if (open && el) {
      el.addEventListener("wheel", onWheel);
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
        if (overflowRef.current != null) {
          initialOverflowRef.current = {
            ...overflowRef.current
          };
        }
      });
      return () => {
        prevScrollTopRef.current = null;
        initialOverflowRef.current = null;
        el.removeEventListener("wheel", onWheel);
      };
    }
  }, [enabled, open, elements.floating, overflowRef, scrollRef, onChange]);
  return React19.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      floating: {
        onKeyDown() {
          controlledScrollingRef.current = true;
        },
        onWheel() {
          controlledScrollingRef.current = false;
        },
        onPointerMove() {
          controlledScrollingRef.current = false;
        },
        onScroll() {
          const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
          if (!overflowRef.current || !el || !controlledScrollingRef.current) {
            return;
          }
          if (prevScrollTopRef.current !== null) {
            const scrollDiff = el.scrollTop - prevScrollTopRef.current;
            if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
              (0, import_react_dom4.flushSync)(() => onChange((d) => d + scrollDiff));
            }
          }
          requestAnimationFrame(() => {
            prevScrollTopRef.current = el.scrollTop;
          });
        }
      }
    };
  }, [enabled, overflowRef, elements.floating, scrollRef, onChange]);
}
__name(useInnerOffset, "useInnerOffset");

// ../../node_modules/@tamagui/popover/dist/esm/useFloatingContext.js
var import_react32 = require("react");
var useFloatingContext = /* @__PURE__ */ __name(({ open, setOpen, breakpointActive }) => (0, import_react32.useCallback)(
  (props) => {
    const floating = useFloating3({
      ...props,
      open,
      onOpenChange: setOpen
    }), { getReferenceProps, getFloatingProps } = useInteractions([
      // useFocus(floating.context, {
      //   enabled: !breakpointActive,
      //   keyboardOnly: true,
      // }),
      useRole(floating.context, { role: "dialog" }),
      useDismiss(floating.context, {
        enabled: !breakpointActive
      })
    ]);
    return {
      ...floating,
      open,
      getReferenceProps,
      getFloatingProps
    };
  },
  [open, setOpen, breakpointActive]
), "useFloatingContext");

// ../../node_modules/@tamagui/popover/dist/esm/Popover.js
var import_jsx_runtime24 = require("react/jsx-runtime");
var PopoverContext = (0, import_core25.createStyledContext)({});
var usePopoverContext = /* @__PURE__ */ __name(() => React20.useContext(PopoverContext), "usePopoverContext");
var PopoverAnchor = React20.forwardRef(
  function(props, forwardedRef) {
    const context = usePopoverContext(), { onCustomAnchorAdd, onCustomAnchorRemove } = context;
    return React20.useEffect(() => (onCustomAnchorAdd(), () => onCustomAnchorRemove()), [onCustomAnchorAdd, onCustomAnchorRemove]), /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PopperAnchor, { ...props, ref: forwardedRef });
  }
);
var PopoverTrigger = React20.forwardRef(
  function(props, forwardedRef) {
    const context = usePopoverContext(), composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef), trigger = /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      import_core25.View,
      {
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "data-state": getState3(context.open),
        ...props,
        ref: composedTriggerRef,
        onPress: (0, import_core25.composeEventHandlers)(props.onPress, context.onOpenToggle)
      }
    );
    return context.hasCustomAnchor ? trigger : /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PopperAnchor, { asChild: true, children: trigger });
  }
);
var PopoverContent = PopperContentFrame.extractable(
  React20.forwardRef(
    function(props, forwardedRef) {
      const {
        allowPinchZoom,
        trapFocus,
        disableRemoveScroll = true,
        zIndex,
        ...contentImplProps
      } = props, context = usePopoverContext(), contentRef = React20.useRef(null), composedRefs = useComposedRefs(forwardedRef, contentRef), isRightClickOutsideRef = React20.useRef(false);
      return React20.useEffect(() => {
        if (!context.open)
          return;
        const content = contentRef.current;
        if (content)
          return (0, import_aria_hidden3.hideOthers)(content);
      }, [context.open]), /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PopoverContentPortal, { zIndex: props.zIndex, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_core25.Stack, { pointerEvents: context.open ? "auto" : "none", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        PopoverContentImpl,
        {
          ...contentImplProps,
          disableRemoveScroll,
          ref: composedRefs,
          trapFocus: trapFocus ?? context.open,
          disableOutsidePointerEvents: true,
          onCloseAutoFocus: (0, import_core25.composeEventHandlers)(props.onCloseAutoFocus, (event) => {
            var _a;
            event.preventDefault(), isRightClickOutsideRef.current || ((_a = context.triggerRef.current) == null ? void 0 : _a.focus());
          }),
          onPointerDownOutside: (0, import_core25.composeEventHandlers)(
            props.onPointerDownOutside,
            (event) => {
              const originalEvent = event.detail.originalEvent, ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true, isRightClick = originalEvent.button === 2 || ctrlLeftClick;
              isRightClickOutsideRef.current = isRightClick;
            },
            { checkDefaultPrevented: false }
          ),
          onFocusOutside: (0, import_core25.composeEventHandlers)(
            props.onFocusOutside,
            (event) => event.preventDefault(),
            { checkDefaultPrevented: false }
          )
        }
      ) }) });
    }
  )
);
function PopoverRepropagateContext(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PopperContext.Provider, { ...props.popperContext, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PopoverContext.Provider, { ...props.context, children: props.children }) });
}
__name(PopoverRepropagateContext, "PopoverRepropagateContext");
function PopoverContentPortal(props) {
  const zIndex = props.zIndex ?? 15e4, context = usePopoverContext(), popperContext = usePopperContext(), themeName = (0, import_core25.useThemeName)();
  let contents = props.children;
  return (import_react_native9.Platform.OS === "android" || import_react_native9.Platform.OS === "ios") && (contents = /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PopoverRepropagateContext, { popperContext, context, children: props.children })), /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Portal, { zIndex, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_core25.Theme, { forceClassName: true, name: themeName, children: [
    !!context.open && !context.breakpointActive && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      YStack,
      {
        fullscreen: true,
        onPress: (0, import_core25.composeEventHandlers)(props.onPress, context.onOpenToggle)
      }
    ),
    contents
  ] }) });
}
__name(PopoverContentPortal, "PopoverContentPortal");
var PopoverContentImpl = React20.forwardRef(function(props, forwardedRef) {
  const {
    trapFocus,
    onOpenAutoFocus,
    onCloseAutoFocus,
    disableOutsidePointerEvents,
    disableFocusScope,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    children,
    disableRemoveScroll,
    freezeContentsWhenHidden,
    ...contentProps
  } = props, context = usePopoverContext(), { open, keepChildrenMounted } = context, popperContext = usePopperContext(), [isFullyHidden, setIsFullyHidden] = React20.useState(!context.open), contents = React20.useMemo(() => import_core25.isWeb ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { style: { display: "contents" }, children }) : children, [children]);
  if (open && isFullyHidden && setIsFullyHidden(false), !keepChildrenMounted && isFullyHidden)
    return null;
  if (context.breakpointActive) {
    const childrenWithoutScrollView = React20.Children.toArray(children).map((child) => React20.isValidElement(child) && child.type === import_react_native9.ScrollView ? child.props.children : child);
    let content = childrenWithoutScrollView;
    return (import_react_native9.Platform.OS === "android" || import_react_native9.Platform.OS === "ios") && (content = /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PopperContext.Provider, { ...popperContext, children: childrenWithoutScrollView })), /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PortalItem, { hostName: `${context.id}PopoverContents`, children: content });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    Animate,
    {
      type: "presence",
      present: !!open,
      keepChildrenMounted,
      onExitComplete: () => {
        setIsFullyHidden(true);
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        FreezeToLastContents,
        {
          freeze: !!(isFullyHidden && freezeContentsWhenHidden),
          children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
            PopperContent,
            {
              "data-state": getState3(open),
              id: context.contentId,
              ref: forwardedRef,
              ...contentProps,
              children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                RemoveScroll,
                {
                  enabled: disableRemoveScroll ? false : open,
                  allowPinchZoom: true,
                  removeScrollBar: false,
                  style: {
                    display: "contents"
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                    import_focus_scope2.FocusScope,
                    {
                      loop: true,
                      enabled: disableFocusScope ? false : open,
                      trapped: trapFocus,
                      onMountAutoFocus: onOpenAutoFocus,
                      onUnmountAutoFocus: onCloseAutoFocus,
                      children: contents
                    }
                  )
                }
              )
            },
            context.contentId
          )
        }
      )
    }
  );
});
var FreezeToLastContents = /* @__PURE__ */ __name((props) => {
  const last = React20.useRef();
  return props.freeze || (last.current = props.children), /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_freeze.Freeze, { placeholder: last.current, ...props });
}, "FreezeToLastContents");
var PopoverClose = React20.forwardRef(
  function(props, forwardedRef) {
    const context = usePopoverContext();
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      YStack,
      {
        ...props,
        ref: forwardedRef,
        componentName: "PopoverClose",
        onPress: (0, import_core25.composeEventHandlers)(
          props.onPress,
          () => context.onOpenChange(false)
        )
      }
    );
  }
);
var PopoverArrow = React20.forwardRef(
  function(props, forwardedRef) {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PopperArrow, { componentName: "PopoverArrow", ...props, ref: forwardedRef });
  }
);
var Popover = (0, import_core25.withStaticProperties)(
  function(props) {
    const {
      children,
      open: openProp,
      defaultOpen,
      onOpenChange,
      keepChildrenMounted,
      ...restProps
    } = props, id = React20.useId(), { when, AdaptProvider } = useAdaptParent({
      Contents: React20.useCallback(() => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PortalHost, { name: `${id}PopoverContents` }), [])
    }), sheetBreakpoint = when, triggerRef = React20.useRef(null), [hasCustomAnchor, setHasCustomAnchor] = React20.useState(false), [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen || false,
      onChange: onOpenChange
    }), breakpointActive = useSheetBreakpointActive2(sheetBreakpoint), floatingContext = useFloatingContext({ open, setOpen, breakpointActive }), popoverContext = {
      id,
      sheetBreakpoint,
      contentId: React20.useId(),
      triggerRef,
      open,
      breakpointActive,
      onOpenChange: setOpen,
      onOpenToggle: (0, import_core25.useEvent)(() => {
        open && breakpointActive || setOpen(!open);
      }),
      hasCustomAnchor,
      onCustomAnchorAdd: React20.useCallback(() => setHasCustomAnchor(true), []),
      onCustomAnchorRemove: React20.useCallback(() => setHasCustomAnchor(false), []),
      keepChildrenMounted
    }, contents = /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Popper, { stayInFrame: true, ...restProps, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PopoverContext.Provider, { ...popoverContext, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PopoverSheetController, { onOpenChange: setOpen, children }) }) });
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(AdaptProvider, { children: import_core25.isWeb ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FloatingOverrideContext.Provider, { value: floatingContext, children: contents }) : contents });
  },
  {
    Anchor: PopoverAnchor,
    Arrow: PopoverArrow,
    Trigger: PopoverTrigger,
    Content: PopoverContent,
    Close: PopoverClose,
    Adapt,
    ScrollView: import_react_native9.ScrollView,
    Sheet: Sheet.Controlled
  }
);
function getState3(open) {
  return open ? "open" : "closed";
}
__name(getState3, "getState");
var PopoverSheetController = /* @__PURE__ */ __name((props) => {
  const context = usePopoverContext(), showSheet = useShowPopoverSheet(context), breakpointActive = context.breakpointActive, getShowSheet = (0, import_core25.useGet)(showSheet);
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    SheetController,
    {
      onOpenChange: (val) => {
        getShowSheet() && props.onOpenChange(val);
      },
      open: context.open,
      hidden: breakpointActive === false,
      children: props.children
    }
  );
}, "PopoverSheetController");
var useSheetBreakpointActive2 = /* @__PURE__ */ __name((breakpoint) => {
  const media = (0, import_core25.useMedia)();
  return typeof breakpoint == "boolean" || !breakpoint ? !!breakpoint : media[breakpoint];
}, "useSheetBreakpointActive");
var useShowPopoverSheet = /* @__PURE__ */ __name((context) => {
  const breakpointActive = useSheetBreakpointActive2(context.sheetBreakpoint);
  return context.open === false ? false : breakpointActive;
}, "useShowPopoverSheet");

// ../../node_modules/@tamagui/progress/dist/esm/Progress.js
var import_core26 = require("@tamagui/core");
var import_get_token3 = __toESM(require_cjs10());
var React21 = __toESM(require("react"));
var import_jsx_runtime25 = require("react/jsx-runtime");
var PROGRESS_NAME = "Progress";
var [createProgressContext, createProgressScope] = createContextScope(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var INDICATOR_NAME2 = "ProgressIndicator";
var ProgressIndicatorFrame = (0, import_core26.styled)(ThemeableStack, {
  name: INDICATOR_NAME2,
  variants: {
    unstyled: {
      false: {
        height: "100%",
        width: "100%",
        backgrounded: true
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var ProgressIndicator = ProgressIndicatorFrame.styleable(function(props, forwardedRef) {
  const { __scopeProgress, ...indicatorProps } = props, context = useProgressContext(INDICATOR_NAME2, __scopeProgress), pct = context.max - (context.value ?? 0), x = -(context.width === 0 ? 300 : context.width) * (pct / 100);
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    ProgressIndicatorFrame,
    {
      "data-state": getProgressState(context.value, context.max),
      "data-value": context.value ?? void 0,
      "data-max": context.max,
      x,
      width: context.width,
      ...!props.unstyled && {
        animateOnly: ["transform"],
        opacity: context.width === 0 ? 0 : 1
      },
      ...indicatorProps,
      ref: forwardedRef
    }
  );
});
function defaultGetValueLabel(value, max2) {
  return `${Math.round(value / max2 * 100)}%`;
}
__name(defaultGetValueLabel, "defaultGetValueLabel");
function getProgressState(value, maxValue) {
  return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
__name(getProgressState, "getProgressState");
function isNumber(value) {
  return typeof value == "number";
}
__name(isNumber, "isNumber");
function isValidMaxNumber(max2) {
  return isNumber(max2) && !isNaN(max2) && max2 > 0;
}
__name(isValidMaxNumber, "isValidMaxNumber");
function isValidValueNumber(value, max2) {
  return isNumber(value) && !isNaN(value) && value <= max2 && value >= 0;
}
__name(isValidValueNumber, "isValidValueNumber");
var DEFAULT_MAX = 100;
var ProgressFrame = (0, import_core26.styled)(ThemeableStack, {
  name: "Progress",
  variants: {
    unstyled: {
      false: {
        borderRadius: 1e5,
        overflow: "hidden",
        backgrounded: true
      }
    },
    size: {
      "...size": (val) => {
        const size2 = Math.round((0, import_core26.getVariableValue)((0, import_get_token3.getSize)(val)) * 0.25);
        return {
          height: size2,
          minWidth: (0, import_core26.getVariableValue)(size2) * 20,
          width: "100%"
        };
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var Progress = (0, import_core26.withStaticProperties)(
  ProgressFrame.styleable(function(props, forwardedRef) {
    const {
      __scopeProgress,
      value: valueProp,
      max: maxProp,
      getValueLabel = defaultGetValueLabel,
      size: size2 = "$true",
      ...progressProps
    } = props, max2 = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX, value = isValidValueNumber(valueProp, max2) ? valueProp : null, valueLabel = isNumber(value) ? getValueLabel(value, max2) : void 0, [width, setWidth] = React21.useState(0);
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ProgressProvider, { scope: __scopeProgress, value, max: max2, width, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      ProgressFrame,
      {
        "aria-valuemax": max2,
        "aria-valuemin": 0,
        "aria-valuenow": isNumber(value) ? value : void 0,
        "aria-valuetext": valueLabel,
        role: "progressbar",
        "data-state": getProgressState(value, max2),
        "data-value": value ?? void 0,
        "data-max": max2,
        ...progressProps.unstyled !== true && {
          size: size2
        },
        ...progressProps,
        onLayout: (e) => {
          var _a;
          setWidth(e.nativeEvent.layout.width), (_a = progressProps.onLayout) == null ? void 0 : _a.call(progressProps, e);
        },
        ref: forwardedRef
      }
    ) });
  }),
  {
    Indicator: ProgressIndicator
  }
);

// ../../node_modules/@tamagui/radio-group/dist/esm/RadioGroup.js
var import_core27 = require("@tamagui/core");
var import_get_token4 = __toESM(require_cjs10());
var React22 = __toESM(require("react"));
var import_jsx_runtime26 = require("react/jsx-runtime");
var RADIO_GROUP_NAME = "RadioGroup";
var ARROW_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var [createRadioGroupContext, createRadioGroupScope] = createContextScope(RADIO_GROUP_NAME);
var [RadioGroupProvider, useRadioGroupContext] = createRadioGroupContext(RADIO_GROUP_NAME);
var getState4 = /* @__PURE__ */ __name((checked) => checked ? "checked" : "unchecked", "getState");
var RADIO_GROUP_INDICATOR_NAME = "RadioGroupIndicator";
var RadioIndicatorFrame = (0, import_core27.styled)(ThemeableStack, {
  name: RADIO_GROUP_INDICATOR_NAME,
  variants: {
    unstyled: {
      false: {
        width: "33%",
        height: "33%",
        borderRadius: 1e3,
        backgroundColor: "$color",
        pressTheme: true
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var RadioIndicator = RadioIndicatorFrame.extractable(
  React22.forwardRef(
    (props, forwardedRef) => {
      const { __scopeRadioGroupItem, forceMount, disabled, ...indicatorProps } = props, { checked } = useRadioGroupItemContext(
        RADIO_GROUP_INDICATOR_NAME,
        __scopeRadioGroupItem
      );
      return forceMount || checked ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        RadioIndicatorFrame,
        {
          "data-state": getState4(checked),
          "data-disabled": disabled ? "" : void 0,
          ...indicatorProps,
          ref: forwardedRef
        }
      ) : null;
    }
  )
);
RadioIndicator.displayName = RADIO_GROUP_INDICATOR_NAME;
var RADIO_GROUP_ITEM_NAME = "RadioGroupItem";
var [RadioGroupItemProvider, useRadioGroupItemContext] = createRadioGroupContext(RADIO_GROUP_NAME);
var RadioGroupItemFrame = (0, import_core27.styled)(ThemeableStack, {
  name: RADIO_GROUP_ITEM_NAME,
  tag: "button",
  variants: {
    unstyled: {
      false: {
        size: "$true",
        borderRadius: 1e3,
        backgroundColor: "$background",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "$borderColor",
        padding: 0,
        hoverStyle: {
          borderColor: "$borderColorHover",
          backgroundColor: "$backgroundHover"
        },
        focusStyle: {
          borderColor: "$borderColorHover",
          backgroundColor: "$backgroundHover",
          outlineStyle: "solid",
          outlineWidth: 2,
          outlineColor: "$borderColorFocus"
        },
        pressStyle: {
          borderColor: "$borderColorFocus",
          backgroundColor: "$backgroundFocus"
        }
      }
    },
    disabled: {
      true: {
        pointerEvents: "none",
        userSelect: "none",
        cursor: "not-allowed",
        hoverStyle: {
          borderColor: "$borderColor",
          backgroundColor: "$background"
        },
        pressStyle: {
          borderColor: "$borderColor",
          backgroundColor: "$backgroundColor"
        },
        focusStyle: {
          outlineWidth: 0
        }
      }
    },
    size: {
      "...size": (value, { props }) => {
        const size2 = Math.floor(
          (0, import_core27.getVariableValue)((0, import_get_token4.getSize)(value)) * (props.scaleSize ?? 0.5)
        );
        return {
          width: size2,
          height: size2
        };
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var RadioGroupItem = RadioGroupItemFrame.extractable(
  React22.forwardRef(
    (props, forwardedRef) => {
      const {
        __scopeRadioGroup,
        value,
        labelledBy: ariaLabelledby,
        disabled: itemDisabled,
        ...itemProps
      } = props, {
        value: groupValue,
        disabled,
        required,
        onChange,
        name,
        native,
        accentColor
      } = useRadioGroupContext(RADIO_GROUP_ITEM_NAME, __scopeRadioGroup), [button, setButton] = React22.useState(null), hasConsumerStoppedPropagationRef = React22.useRef(false), ref = React22.useRef(null), composedRefs = (0, import_core27.useComposedRefs)(forwardedRef, (node) => setButton(node), ref), isArrowKeyPressedRef = React22.useRef(false), isFormControl = import_core27.isWeb ? button ? !!button.closest("form") : true : false, checked = groupValue === value, labelId = useLabelContext(button), labelledBy = ariaLabelledby || labelId;
      React22.useEffect(() => {
        if (import_core27.isWeb) {
          const handleKeyDown = /* @__PURE__ */ __name((event) => {
            ARROW_KEYS.includes(event.key) && (isArrowKeyPressedRef.current = true);
          }, "handleKeyDown"), handleKeyUp = /* @__PURE__ */ __name(() => {
            isArrowKeyPressedRef.current = false;
          }, "handleKeyUp");
          return document.addEventListener("keydown", handleKeyDown), document.addEventListener("keyup", handleKeyUp), () => {
            document.removeEventListener("keydown", handleKeyDown), document.removeEventListener("keyup", handleKeyUp);
          };
        }
      }, []);
      const isDisabled = disabled || itemDisabled;
      return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(RadioGroupItemProvider, { checked, scope: __scopeRadioGroup, children: import_core27.isWeb && native ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        BubbleInput2,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled: isDisabled,
          id: props.id,
          accentColor
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          RadioGroupItemFrame,
          {
            "data-state": getState4(checked),
            "data-disabled": isDisabled ? "" : void 0,
            role: "radio",
            "aria-labelledby": labelledBy,
            "aria-checked": checked,
            "aria-required": required,
            disabled: isDisabled,
            ref: composedRefs,
            ...import_core27.isWeb && {
              type: "button",
              value
            },
            ...itemProps,
            onPress: (0, import_core27.composeEventHandlers)(props.onPress, (event) => {
              checked || (onChange == null ? void 0 : onChange(value)), isFormControl && (hasConsumerStoppedPropagationRef.current = event.isPropagationStopped(), hasConsumerStoppedPropagationRef.current || event.stopPropagation());
            }),
            ...import_core27.isWeb && {
              onKeyDown: (0, import_core27.composeEventHandlers)(
                props.onKeyDown,
                (event) => {
                  event.key === "Enter" && event.preventDefault();
                }
              ),
              onFocus: (0, import_core27.composeEventHandlers)(itemProps.onFocus, () => {
                var _a;
                isArrowKeyPressedRef.current && ((_a = ref.current) == null ? void 0 : _a.click());
              })
            }
          }
        ),
        isFormControl && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          BubbleInput2,
          {
            isHidden: true,
            control: button,
            bubbles: !hasConsumerStoppedPropagationRef.current,
            name,
            value,
            checked,
            required,
            disabled: isDisabled
          }
        )
      ] }) });
    }
  )
);
var BubbleInput2 = /* @__PURE__ */ __name((props) => {
  const { checked, bubbles = true, control, isHidden, accentColor, ...inputProps } = props, ref = React22.useRef(null), prevChecked = usePrevious(checked);
  return React22.useEffect(() => {
    const input = ref.current, inputProto = window.HTMLInputElement.prototype, setChecked = Object.getOwnPropertyDescriptor(
      inputProto,
      "checked"
    ).set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", { bubbles });
      setChecked.call(input, checked), input.dispatchEvent(event);
    }
  }, [prevChecked, checked, bubbles]), /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "input",
    {
      type: "radio",
      defaultChecked: checked,
      ...inputProps,
      tabIndex: -1,
      ref,
      "aria-hidden": isHidden,
      style: {
        ...isHidden ? {
          // ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        } : {
          appearance: "auto",
          accentColor
        },
        ...props.style
      }
    }
  );
}, "BubbleInput");
var RadioGroupFrame = (0, import_core27.styled)(ThemeableStack, {
  name: RADIO_GROUP_NAME,
  variants: {
    orientation: {
      horizontal: {
        flexDirection: "row",
        spaceDirection: "horizontal"
      },
      vertical: {
        flexDirection: "column",
        spaceDirection: "vertical"
      }
    }
  }
});
var RadioGroup = (0, import_core27.withStaticProperties)(
  RadioGroupFrame.extractable(
    React22.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeRadioGroup,
          value: valueProp,
          defaultValue: defaultValue2,
          onValueChange,
          disabled = false,
          required = false,
          name,
          orientation,
          native,
          accentColor,
          ...radioGroupProps
        } = props, [value, setValue] = useControllableState({
          prop: valueProp,
          defaultProp: defaultValue2,
          onChange: onValueChange
        });
        return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          RadioGroupProvider,
          {
            scope: __scopeRadioGroup,
            value,
            required,
            onChange: setValue,
            disabled,
            name,
            native,
            accentColor,
            children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
              RadioGroupFrame,
              {
                "aria-valuetext": value,
                role: "radiogroup",
                "aria-orientation": orientation,
                ref: forwardedRef,
                orientation,
                "data-disabled": disabled ? "" : void 0,
                ...radioGroupProps
              }
            )
          }
        );
      }
    )
  ),
  {
    Indicator: RadioIndicator,
    Item: RadioGroupItem
  }
);
RadioGroup.displayName = RADIO_GROUP_NAME;

// ../../node_modules/@tamagui/select/dist/esm/Select.js
var import_core35 = require("@tamagui/core");
var import_get_token5 = __toESM(require_cjs10());
var import_list_item3 = __toESM(require_cjs27());

// ../../node_modules/@tamagui/separator/dist/esm/Separator.js
var import_core28 = require("@tamagui/core");
var Separator = (0, import_core28.styled)(import_core28.Stack, {
  name: "Separator",
  borderColor: "$borderColor",
  flexShrink: 0,
  borderWidth: 0,
  flex: 1,
  height: 0,
  maxHeight: 0,
  borderBottomWidth: 1,
  y: -0.5,
  variants: {
    vertical: {
      true: {
        y: 0,
        x: -0.5,
        height: import_core28.isWeb ? "initial" : "auto",
        // maxHeight auto WILL BE passed to style attribute, but for some reason not used?
        // almost seems like a react or browser bug, but for now `initial` works
        // also, it doesn't happen for `height`, but for consistency using the same values
        maxHeight: import_core28.isWeb ? "initial" : "auto",
        width: 0,
        maxWidth: 0,
        borderBottomWidth: 0,
        borderRightWidth: 1
      }
    }
  }
});

// ../../node_modules/@tamagui/select/dist/esm/Select.js
var React27 = __toESM(require("react"));

// ../../node_modules/@tamagui/select/dist/esm/constants.js
var SELECT_NAME = "Select";
var WINDOW_PADDING = 8;
var SCROLL_ARROW_THRESHOLD = 8;
var VIEWPORT_NAME = "SelectViewport";

// ../../node_modules/@tamagui/select/dist/esm/context.js
var import_jsx_runtime27 = require("react/jsx-runtime");
var [createSelectContext, createSelectScope] = createContextScope(SELECT_NAME);
var [SelectProvider, useSelectContext] = createSelectContext(SELECT_NAME);
var [createSelectItemParentContext, createSelectItemParentScope] = createContextScope(SELECT_NAME);
var [SelectItemParentProvider, useSelectItemParentContext] = createSelectContext(SELECT_NAME);
var ForwardSelectContext = /* @__PURE__ */ __name(({
  __scopeSelect,
  context,
  itemContext,
  children
}) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(SelectProvider, { isInSheet: true, scope: __scopeSelect, ...context, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(SelectItemParentProvider, { scope: __scopeSelect, ...itemContext, children }) }), "ForwardSelectContext");

// ../../node_modules/@tamagui/select/dist/esm/SelectContent.js
var import_core30 = require("@tamagui/core");
var import_focus_scope3 = __toESM(require_cjs18());

// ../../node_modules/@tamagui/select/dist/esm/useSelectBreakpointActive.js
var import_core29 = require("@tamagui/core");
var useSelectBreakpointActive = /* @__PURE__ */ __name((sheetBreakpoint) => {
  const media = (0, import_core29.useMedia)();
  return sheetBreakpoint ? sheetBreakpoint === true ? true : sheetBreakpoint ? media[sheetBreakpoint] : false : false;
}, "useSelectBreakpointActive");
var useShowSelectSheet = /* @__PURE__ */ __name((context) => {
  const breakpointActive = useSelectBreakpointActive(context.sheetBreakpoint);
  return context.open === false ? false : breakpointActive;
}, "useShowSelectSheet");

// ../../node_modules/@tamagui/select/dist/esm/SelectContent.js
var import_jsx_runtime28 = require("react/jsx-runtime");
var CONTENT_NAME3 = "SelectContent";
var SelectContent = /* @__PURE__ */ __name(({
  children,
  __scopeSelect,
  zIndex = 1e3,
  ...focusScopeProps
}) => {
  const context = useSelectContext(CONTENT_NAME3, __scopeSelect), itemParentContext = useSelectItemParentContext(CONTENT_NAME3, __scopeSelect), themeName = (0, import_core30.useThemeName)(), showSheet = useShowSelectSheet(context), contents = /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_core30.Theme, { forceClassName: true, name: themeName, children }), touch = (0, import_core30.useIsTouchDevice)();
  return itemParentContext.shouldRenderWebNative ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, { children }) : showSheet ? context.open ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, { children: contents }) : null : /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(FloatingPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    FloatingOverlay,
    {
      style: { zIndex, pointerEvents: context.open ? "auto" : "none" },
      lockScroll: !context.disablePreventBodyScroll && !!context.open && !touch,
      children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_focus_scope3.FocusScope, { loop: true, enabled: !!context.open, trapped: true, ...focusScopeProps, children: contents })
    }
  ) });
}, "SelectContent");

// ../../node_modules/@tamagui/select/dist/esm/SelectImpl.js
var import_core31 = require("@tamagui/core");
var React23 = __toESM(require("react"));
var import_react_dom5 = require("react-dom");
var import_jsx_runtime29 = require("react/jsx-runtime");
var SelectInlineImpl = /* @__PURE__ */ __name((props) => {
  const {
    __scopeSelect,
    children,
    open = false,
    selectedIndexRef,
    listContentRef
  } = props, selectContext = useSelectContext("SelectSheetImpl", __scopeSelect), selectItemParentContext = useSelectItemParentContext(
    "SelectSheetImpl",
    __scopeSelect
  ), { setActiveIndex, selectedIndex, activeIndex, forceUpdate } = selectContext, { setOpen, setSelectedIndex } = selectItemParentContext, [scrollTop, setScrollTop] = React23.useState(0), touch = (0, import_core31.useIsTouchDevice)(), listItemsRef = React23.useRef([]), overflowRef = React23.useRef(null), upArrowRef = React23.useRef(null), downArrowRef = React23.useRef(null), allowSelectRef = React23.useRef(false), allowMouseUpRef = React23.useRef(true), selectTimeoutRef = React23.useRef(), state = React23.useRef({
    isMouseOutside: false
  }), [controlledScrolling, setControlledScrolling] = React23.useState(false), [fallback, setFallback] = React23.useState(false), [innerOffset, setInnerOffset] = React23.useState(0), [blockSelection, setBlockSelection] = React23.useState(false), floatingStyle = React23.useRef({});
  (0, import_core31.useIsomorphicLayoutEffect)(() => {
    queueMicrotask(() => {
      open || (setScrollTop(0), setFallback(false), setActiveIndex(null), setControlledScrolling(false));
    });
  }, [open, setActiveIndex]), import_core31.isWeb && import_core31.isClient && (0, import_core31.useIsomorphicLayoutEffect)(() => {
    if (!open)
      return;
    const mouseUp = /* @__PURE__ */ __name((e) => {
      state.current.isMouseOutside && setOpen(false);
    }, "mouseUp");
    return document.addEventListener("mouseup", mouseUp), () => {
      document.removeEventListener("mouseup", mouseUp);
    };
  }, [open]);
  const updateFloatingSize = size({
    apply({
      availableHeight,
      rects: {
        reference: { width }
      }
    }) {
      floatingStyle.current = {
        width,
        maxHeight: availableHeight
      };
    },
    padding: WINDOW_PADDING
  }), { x, y, strategy, context, refs, update } = useFloating3({
    open,
    onOpenChange: setOpen,
    placement: "bottom-start",
    middleware: fallback ? [
      offset(5),
      touch ? shift({ crossAxis: true, padding: WINDOW_PADDING }) : flip({ padding: WINDOW_PADDING }),
      updateFloatingSize
    ] : [
      inner({
        listRef: listItemsRef,
        overflowRef,
        index: selectedIndex,
        offset: innerOffset,
        onFallbackChange: setFallback,
        padding: 10,
        minItemsVisible: touch ? 10 : 4,
        referenceOverflowThreshold: 20
      }),
      updateFloatingSize
    ]
  });
  (0, import_core31.useIsomorphicLayoutEffect)(() => (window.addEventListener("resize", update), open && update(), () => window.removeEventListener("resize", update)), [update, open]);
  const floatingRef = refs.floating, showUpArrow = open && scrollTop > SCROLL_ARROW_THRESHOLD, showDownArrow = open && floatingRef.current && scrollTop < floatingRef.current.scrollHeight - floatingRef.current.clientHeight - SCROLL_ARROW_THRESHOLD, interactions = useInteractions([
    useClick(context, { event: "mousedown" }),
    useDismiss(context, { outsidePress: false }),
    useRole(context, { role: "listbox" }),
    useInnerOffset(context, {
      enabled: !fallback,
      onChange: setInnerOffset,
      overflowRef,
      scrollRef: refs.floating
    }),
    useListNavigation(context, {
      listRef: listItemsRef,
      activeIndex: activeIndex || 0,
      selectedIndex,
      onNavigate: setActiveIndex
    }),
    useTypeahead(context, {
      listRef: listContentRef,
      onMatch: open ? setActiveIndex : setSelectedIndex,
      selectedIndex,
      activeIndex
    })
  ]), interactionsContext = React23.useMemo(() => ({
    ...interactions,
    getReferenceProps() {
      return interactions.getReferenceProps({
        ref: refs.reference,
        className: "SelectTrigger",
        onKeyDown(event) {
          (event.key === "Enter" || event.key === " " && !context.dataRef.current.typing) && (event.preventDefault(), setOpen(true));
        }
      });
    },
    getFloatingProps(props2) {
      return interactions.getFloatingProps({
        ref: refs.floating,
        className: "Select",
        ...props2,
        style: {
          position: strategy,
          top: y ?? "",
          left: x ?? "",
          outline: 0,
          scrollbarWidth: "none",
          ...floatingStyle.current,
          ...props2 == null ? void 0 : props2.style
        },
        onPointerEnter() {
          setControlledScrolling(false), state.current.isMouseOutside = false;
        },
        onPointerLeave() {
          state.current.isMouseOutside = true;
        },
        onPointerMove() {
          state.current.isMouseOutside = false, setControlledScrolling(false);
        },
        onKeyDown() {
          setControlledScrolling(true);
        },
        onContextMenu(e) {
          e.preventDefault();
        },
        onScroll(event) {
          (0, import_react_dom5.flushSync)(() => setScrollTop(event.currentTarget.scrollTop));
        }
      });
    }
  }), [refs.reference.current, refs.floating.current, y, x, interactions]);
  return (0, import_core31.useIsomorphicLayoutEffect)(() => {
    if (open)
      return selectTimeoutRef.current = setTimeout(() => {
        allowSelectRef.current = true;
      }, 300), () => {
        clearTimeout(selectTimeoutRef.current);
      };
    allowSelectRef.current = false, allowMouseUpRef.current = true, setInnerOffset(0), setFallback(false), setBlockSelection(false);
  }, [open]), (0, import_core31.useIsomorphicLayoutEffect)(() => {
    !open && state.current.isMouseOutside && (state.current.isMouseOutside = false);
  }, [open]), (0, import_core31.useIsomorphicLayoutEffect)(() => {
    function onPointerDown(e) {
      var _a, _b, _c;
      const target = e.target;
      ((_a = refs.floating.current) == null ? void 0 : _a.contains(target)) || ((_b = upArrowRef.current) == null ? void 0 : _b.contains(target)) || ((_c = downArrowRef.current) == null ? void 0 : _c.contains(target)) || (setOpen(false), setControlledScrolling(false));
    }
    __name(onPointerDown, "onPointerDown");
    if (open)
      return document.addEventListener("pointerdown", onPointerDown), () => {
        document.removeEventListener("pointerdown", onPointerDown);
      };
  }, [open, refs, setOpen]), React23.useEffect(() => {
    var _a, _b;
    open && controlledScrolling && activeIndex != null && ((_a = listItemsRef.current[activeIndex]) == null ? void 0 : _a.scrollIntoView({ block: "nearest" })), setScrollTop(((_b = refs.floating.current) == null ? void 0 : _b.scrollTop) ?? 0);
  }, [open, refs, controlledScrolling, activeIndex]), React23.useEffect(() => {
    var _a;
    open && fallback && selectedIndex != null && ((_a = listItemsRef.current[selectedIndex]) == null ? void 0 : _a.scrollIntoView({ block: "nearest" }));
  }, [open, fallback, selectedIndex]), (0, import_core31.useIsomorphicLayoutEffect)(() => {
    refs.floating.current && fallback && (refs.floating.current.style.maxHeight = "");
  }, [refs, fallback]), /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    SelectProvider,
    {
      scope: __scopeSelect,
      ...selectContext,
      setScrollTop,
      setInnerOffset,
      fallback,
      floatingContext: context,
      activeIndex,
      canScrollDown: !!showDownArrow,
      canScrollUp: !!showUpArrow,
      controlledScrolling,
      blockSelection,
      upArrowRef,
      downArrowRef,
      update,
      children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
        SelectItemParentProvider,
        {
          scope: __scopeSelect,
          ...selectItemParentContext,
          allowMouseUpRef,
          allowSelectRef,
          dataRef: context.dataRef,
          interactions: interactionsContext,
          listRef: listItemsRef,
          selectTimeoutRef,
          children
        }
      )
    }
  );
}, "SelectInlineImpl");

// ../../node_modules/@tamagui/select/dist/esm/SelectItem.js
var import_core32 = require("@tamagui/core");
var import_list_item = __toESM(require_cjs27());
var React24 = __toESM(require("react"));
var import_jsx_runtime30 = require("react/jsx-runtime");
var ITEM_NAME = "SelectItem";
var [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME);
var SelectItem = React24.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSelect,
      value,
      disabled = false,
      textValue: textValueProp,
      index: index3,
      ...itemProps
    } = props, context = useSelectItemParentContext(ITEM_NAME, __scopeSelect), {
      setSelectedIndex,
      listRef,
      setOpen,
      onChange,
      activeIndexSubscribe,
      valueSubscribe,
      allowMouseUpRef,
      allowSelectRef,
      setValueAtIndex,
      selectTimeoutRef,
      dataRef,
      interactions,
      shouldRenderWebNative,
      size: size2,
      initialValue: initialValue2
    } = context, [isSelected, setSelected] = React24.useState(initialValue2 === value), [isActive, setActive] = React24.useState(false);
    React24.useEffect(() => activeIndexSubscribe((i) => {
      setActive(index3 === i);
    }), [index3]), React24.useEffect(() => valueSubscribe((val) => {
      setSelected(val === value);
    }), [value]);
    const textId = React24.useId(), composedRefs = useComposedRefs(forwardedRef, (node) => {
      import_core32.isWeb && node instanceof HTMLElement && listRef && (listRef.current[index3] = node);
    });
    (0, import_core32.useIsomorphicLayoutEffect)(() => {
      setValueAtIndex(index3, value);
    }, [index3, setValueAtIndex, value]);
    function handleSelect() {
      setSelectedIndex(index3), onChange(value), setOpen(false);
    }
    __name(handleSelect, "handleSelect");
    const selectItemProps = interactions ? interactions.getItemProps({
      ...import_core32.isWebTouchable ? {
        onTouchStart() {
          allowSelectRef.current = true, allowMouseUpRef.current = false;
        }
      } : {
        onTouchMove() {
          allowSelectRef.current = true, allowMouseUpRef.current = false;
        },
        onTouchEnd() {
          allowSelectRef.current = false, allowMouseUpRef.current = true;
        }
      },
      onKeyDown(event) {
        event.key === "Enter" || event.key === " " && !(dataRef == null ? void 0 : dataRef.current.typing) ? (event.preventDefault(), handleSelect()) : allowSelectRef.current = true;
      },
      onClick() {
        allowSelectRef.current && handleSelect();
      },
      onMouseUp() {
        allowMouseUpRef.current && (allowSelectRef.current && handleSelect(), clearTimeout(selectTimeoutRef.current), selectTimeoutRef.current = setTimeout(() => {
          allowSelectRef.current = true;
        }));
      }
    }) : {
      onPress: handleSelect
    };
    return (0, import_core32.useIsomorphicLayoutEffect)(() => {
      var _a;
      isActive && ((_a = listRef == null ? void 0 : listRef.current[index3]) == null ? void 0 : _a.focus());
    }, [isActive]), /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      SelectItemContextProvider,
      {
        scope: __scopeSelect,
        value,
        textId: textId || "",
        isSelected,
        children: shouldRenderWebNative ? /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("option", { value, children: props.children }) : /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          import_list_item.ListItem,
          {
            tag: "div",
            componentName: ITEM_NAME,
            ref: composedRefs,
            "aria-labelledby": textId,
            "aria-selected": isSelected,
            "data-state": isSelected ? "active" : "inactive",
            "aria-disabled": disabled || void 0,
            "data-disabled": disabled ? "" : void 0,
            tabIndex: disabled ? void 0 : -1,
            ...!props.unstyled && {
              backgrounded: true,
              pressTheme: true,
              hoverTheme: true,
              focusTheme: true,
              cursor: "default",
              outlineWidth: 0,
              size: size2,
              ellipse: true
            },
            ...itemProps,
            ...selectItemProps
          }
        )
      }
    );
  }
);
SelectItem.displayName = ITEM_NAME;

// ../../node_modules/@tamagui/select/dist/esm/SelectScrollButton.js
var React25 = __toESM(require("react"));
var import_react_dom6 = require("react-dom");
var import_jsx_runtime31 = require("react/jsx-runtime");
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
var SelectScrollUpButton = React25.forwardRef((props, forwardedRef) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
  SelectScrollButtonImpl,
  {
    componentName: SCROLL_UP_BUTTON_NAME,
    ...props,
    dir: "up",
    ref: forwardedRef
  }
));
SelectScrollUpButton.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
var SelectScrollDownButton = React25.forwardRef((props, forwardedRef) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
  SelectScrollButtonImpl,
  {
    componentName: SCROLL_DOWN_BUTTON_NAME,
    ...props,
    dir: "down",
    ref: forwardedRef
  }
));
SelectScrollDownButton.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = React25.memo(
  React25.forwardRef(
    (props, forwardedRef) => {
      var _a, _b;
      const { __scopeSelect, dir, componentName, ...scrollIndicatorProps } = props, { forceUpdate, open, fallback, setScrollTop, setInnerOffset, ...context } = useSelectContext(componentName, __scopeSelect), floatingRef = (_a = context.floatingContext) == null ? void 0 : _a.refs.floating, statusRef = React25.useRef("idle"), isVisible = context[dir === "down" ? "canScrollDown" : "canScrollUp"], frameRef = React25.useRef(), { x, y, refs, strategy } = useFloating3({
        open: open && isVisible,
        strategy: "fixed",
        elements: {
          reference: floatingRef == null ? void 0 : floatingRef.current
        },
        placement: dir === "up" ? "top" : "bottom",
        middleware: [offset(({ rects }) => -rects.floating.height)],
        whileElementsMounted: (...args) => autoUpdate(...args, { animationFrame: true })
      }), composedRef = useComposedRefs(forwardedRef, refs.setFloating);
      if (!isVisible)
        return null;
      const onScroll = /* @__PURE__ */ __name((amount) => {
        const floating = floatingRef;
        floating && (fallback ? floating.current && (floating.current.scrollTop -= amount, (0, import_react_dom6.flushSync)(() => {
          var _a2;
          return setScrollTop(((_a2 = floating.current) == null ? void 0 : _a2.scrollTop) ?? 0);
        })) : (0, import_react_dom6.flushSync)(() => setInnerOffset((value) => value - amount)));
      }, "onScroll");
      return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        YStack,
        {
          ref: composedRef,
          componentName,
          "aria-hidden": true,
          ...scrollIndicatorProps,
          zIndex: 1e3,
          position: strategy,
          left: x || 0,
          top: y || 0,
          width: `calc(${(((_b = floatingRef == null ? void 0 : floatingRef.current) == null ? void 0 : _b.offsetWidth) ?? 0) - 2}px)`,
          onPointerEnter: () => {
            statusRef.current = "active";
            let prevNow = Date.now();
            function frame() {
              const element = floatingRef == null ? void 0 : floatingRef.current;
              if (element) {
                const currentNow = Date.now(), msElapsed = currentNow - prevNow;
                prevNow = currentNow;
                const pixelsToScroll = msElapsed / 2, remainingPixels = dir === "up" ? element.scrollTop : element.scrollHeight - element.clientHeight - element.scrollTop, scrollRemaining = dir === "up" ? element.scrollTop - pixelsToScroll > 0 : element.scrollTop + pixelsToScroll < element.scrollHeight - element.clientHeight;
                onScroll(
                  dir === "up" ? Math.min(pixelsToScroll, remainingPixels) : Math.max(-pixelsToScroll, -remainingPixels)
                ), scrollRemaining && (frameRef.current = requestAnimationFrame(frame));
              }
            }
            __name(frame, "frame");
            cancelAnimationFrame(frameRef.current), frameRef.current = requestAnimationFrame(frame);
          },
          onPointerLeave: () => {
            statusRef.current = "idle", cancelAnimationFrame(frameRef.current);
          }
        }
      );
    }
  )
);

// ../../node_modules/@tamagui/select/dist/esm/SelectTrigger.js
var import_list_item2 = __toESM(require_cjs27());
var React26 = __toESM(require("react"));
var import_jsx_runtime32 = require("react/jsx-runtime");
var TRIGGER_NAME4 = "SelectTrigger";
var SelectTrigger = React26.forwardRef(
  function(props, forwardedRef) {
    var _a;
    const { __scopeSelect, disabled = false, unstyled = false, ...triggerProps } = props, context = useSelectContext(TRIGGER_NAME4, __scopeSelect), itemParentContext = useSelectItemParentContext(TRIGGER_NAME4, __scopeSelect), composedRefs = useComposedRefs(
      forwardedRef,
      (_a = context.floatingContext) == null ? void 0 : _a.refs.setReference
    );
    return itemParentContext.shouldRenderWebNative ? null : /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      import_list_item2.ListItem,
      {
        componentName: TRIGGER_NAME4,
        unstyled,
        ...!unstyled && {
          backgrounded: true,
          radiused: true,
          hoverTheme: true,
          pressTheme: true,
          focusable: true,
          focusStyle: {
            outlineStyle: "solid",
            outlineWidth: 2,
            outlineColor: "$borderColorFocus"
          },
          borderWidth: 1
        },
        size: itemParentContext.size,
        "aria-expanded": context.open,
        "aria-autocomplete": "none",
        dir: context.dir,
        disabled,
        "data-disabled": disabled ? "" : void 0,
        ...triggerProps,
        ref: composedRefs,
        ...itemParentContext.interactions ? {
          ...itemParentContext.interactions.getReferenceProps(),
          onMouseDown() {
            var _a2;
            (_a2 = context.floatingContext) == null ? void 0 : _a2.update(), itemParentContext.setOpen(!context.open);
          }
        } : {
          onPress() {
            itemParentContext.setOpen(!context.open);
          }
        }
      }
    );
  }
);

// ../../node_modules/@tamagui/select/dist/esm/SelectViewport.js
var import_core33 = require("@tamagui/core");
var import_core34 = require("@tamagui/core");
var import_jsx_runtime33 = require("react/jsx-runtime");
var SelectViewportFrame = (0, import_core34.styled)(ThemeableStack, {
  name: VIEWPORT_NAME,
  variants: {
    unstyled: {
      false: {
        size: "$2",
        backgroundColor: "$background",
        elevate: true,
        bordered: true,
        userSelect: "none",
        outlineWidth: 0
      }
    },
    size: {
      "...size": (val, { tokens }) => ({
        borderRadius: tokens.radius[val] ?? val
      })
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var SelectViewport = SelectViewportFrame.styleable(
  function(props, forwardedRef) {
    var _a;
    const { __scopeSelect, children, disableScroll, ...viewportProps } = props, context = useSelectContext(VIEWPORT_NAME, __scopeSelect), itemContext = useSelectItemParentContext(VIEWPORT_NAME, __scopeSelect), breakpointActive = useSelectBreakpointActive(context.sheetBreakpoint);
    (0, import_core33.useIsomorphicLayoutEffect)(() => {
      context.update && context.update();
    }, [breakpointActive]);
    const composedRefs = (0, import_core33.composeRefs)(
      forwardedRef,
      (_a = context.floatingContext) == null ? void 0 : _a.refs.setFloating
    );
    if (itemContext.shouldRenderWebNative)
      return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_jsx_runtime33.Fragment, { children });
    if (breakpointActive || !import_core33.isWeb)
      return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(PortalItem, { hostName: `${context.scopeKey}SheetContents`, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
        ForwardSelectContext,
        {
          __scopeSelect,
          itemContext,
          context,
          children
        }
      ) });
    if (!itemContext.interactions)
      return process.env.NODE_ENV === "development" && console.warn("No interactions provided to Select, potentially missing Adapt"), null;
    const { style, ...floatingProps } = itemContext.interactions.getFloatingProps(), { scrollbarWidth, listStyleType, overflow, ...restStyle } = style;
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_jsx_runtime33.Fragment, { children: [
      !disableScroll && !props.unstyled && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: selectViewportCSS
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(FloatingFocusManager, { context: context.floatingContext, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(AnimatePresence, { children: context.open ? /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
        SelectViewportFrame,
        {
          disableClassName: true,
          size: itemContext.size,
          role: "presentation",
          ...viewportProps,
          ref: composedRefs,
          ...floatingProps,
          ...restStyle,
          ...!props.unstyled && {
            overflow: disableScroll ? void 0 : overflow ?? "scroll"
          },
          children
        },
        "select-viewport"
      ) : null }) }),
      !context.open && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { style: { display: "none" }, children: props.children })
    ] });
  }
);
var selectViewportCSS = `
.is_SelectViewport {
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}

.is_SelectViewport::-webkit-scrollbar{
  display:none
}
`;

// ../../node_modules/@tamagui/select/dist/esm/Select.js
var import_jsx_runtime34 = require("react/jsx-runtime");
var VALUE_NAME = "SelectValue";
var SelectValueFrame = (0, import_core35.styled)(SizableText, {
  name: VALUE_NAME,
  userSelect: "none"
});
var SelectValue = SelectValueFrame.styleable(function({
  __scopeSelect,
  children: childrenProp,
  placeholder,
  ...props
}, forwardedRef) {
  const context = useSelectContext(VALUE_NAME, __scopeSelect), itemParentContext = useSelectItemParentContext(VALUE_NAME, __scopeSelect), composedRefs = useComposedRefs(forwardedRef, context.onValueNodeChange), children = childrenProp ?? context.selectedItem, selectValueChildren = context.value == null || context.value === "" ? placeholder ?? children : children;
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    SelectValueFrame,
    {
      ...!props.unstyled && {
        size: itemParentContext.size,
        ellipse: true
      },
      ref: composedRefs,
      pointerEvents: "none",
      ...props,
      children: unwrapSelectItem(selectValueChildren)
    }
  );
});
function unwrapSelectItem(selectValueChildren) {
  return React27.Children.map(selectValueChildren, (child) => {
    var _a, _b, _c;
    if (child) {
      if (((_b = (_a = child.type) == null ? void 0 : _a.staticConfig) == null ? void 0 : _b.componentName) === ITEM_TEXT_NAME)
        return child.props.children;
      if ((_c = child.props) == null ? void 0 : _c.children)
        return unwrapSelectItem(child.props.children);
    }
    return child;
  });
}
__name(unwrapSelectItem, "unwrapSelectItem");
var SelectIcon = (0, import_core35.styled)(XStack, {
  name: "SelectIcon",
  // @ts-ignore
  "aria-hidden": true,
  children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Paragraph, { children: "\u25BC" })
});
var ITEM_TEXT_NAME = "SelectItemText";
var SelectItemTextFrame = (0, import_core35.styled)(SizableText, {
  name: ITEM_TEXT_NAME,
  variants: {
    unstyled: {
      false: {
        userSelect: "none",
        color: "$color",
        ellipse: true
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var SelectItemText = React27.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, className, ...itemTextProps } = props, context = useSelectContext(ITEM_TEXT_NAME, __scopeSelect), itemParentContext = useSelectItemParentContext(ITEM_TEXT_NAME, __scopeSelect), ref = React27.useRef(null), composedRefs = useComposedRefs(forwardedRef, ref), itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect), contents = React27.useMemo(
      () => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
        SelectItemTextFrame,
        {
          className,
          size: itemParentContext.size,
          id: itemContext.textId,
          ...itemTextProps,
          ref: composedRefs
        }
      ),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [props, itemParentContext.size, className, itemContext.textId]
    );
    return React27.useEffect(() => {
      itemParentContext.initialValue === itemContext.value && !context.selectedIndex && context.setSelectedItem(contents);
    }, []), React27.useEffect(() => itemParentContext.valueSubscribe((val) => {
      val === itemContext.value && context.setSelectedItem(contents);
    }), [itemContext.value]), itemParentContext.shouldRenderWebNative ? /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_jsx_runtime34.Fragment, { children: props.children }) : /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_jsx_runtime34.Fragment, { children: contents });
  }
);
SelectItemText.displayName = ITEM_TEXT_NAME;
var ITEM_INDICATOR_NAME = "SelectItemIndicator";
var SelectItemIndicatorFrame = (0, import_core35.styled)(XStack, {
  name: ITEM_TEXT_NAME
});
var SelectItemIndicator = React27.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...itemIndicatorProps } = props, context = useSelectItemParentContext(ITEM_INDICATOR_NAME, __scopeSelect), itemContext = useSelectItemContext(ITEM_INDICATOR_NAME, __scopeSelect);
    return context.shouldRenderWebNative ? null : itemContext.isSelected ? /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(SelectItemIndicatorFrame, { "aria-hidden": true, ...itemIndicatorProps, ref: forwardedRef }) : null;
  }
);
SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
var GROUP_NAME = "SelectGroup";
var [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME);
var SelectGroupFrame = (0, import_core35.styled)(YStack, {
  name: GROUP_NAME,
  width: "100%"
});
var NativeSelectTextFrame = (0, import_core35.styled)(SizableText, {
  tag: "select",
  backgroundColor: "$background",
  borderColor: "$borderColor",
  hoverStyle: {
    backgroundColor: "$backgroundHover"
  }
});
var NativeSelectFrame = (0, import_core35.styled)(ThemeableStack, {
  name: "NativeSelect",
  bordered: true,
  userSelect: "none",
  outlineWidth: 0,
  paddingRight: 10,
  variants: {
    size: {
      "...size": (val, extras) => {
        const { tokens } = extras, paddingHorizontal = (0, import_core35.getVariableValue)(tokens.space[val]);
        return {
          borderRadius: tokens.radius[val] ?? val,
          minHeight: tokens.size[val],
          paddingRight: paddingHorizontal + 20,
          paddingLeft: paddingHorizontal,
          paddingVertical: (0, import_get_token5.getSpace)(val, {
            shift: -3
          })
        };
      }
    }
  },
  defaultVariants: {
    size: "$2"
  }
});
var SelectGroup = React27.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...groupProps } = props, groupId = React27.useId(), context = useSelectContext(GROUP_NAME, __scopeSelect), itemParentContext = useSelectItemParentContext(GROUP_NAME, __scopeSelect), size2 = itemParentContext.size ?? "$true", nativeSelectRef = React27.useRef(null), content = function() {
      return itemParentContext.shouldRenderWebNative ? (
        // @ts-expect-error until we support typing based on tag
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(NativeSelectFrame, { asChild: true, size: size2, value: context.value, children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
          NativeSelectTextFrame,
          {
            onChange: (event) => {
              itemParentContext.onChange(event.currentTarget.value);
            },
            size: size2,
            ref: nativeSelectRef,
            style: {
              color: "var(--color)",
              // @ts-ignore
              appearance: "none"
            },
            children: props.children
          }
        ) })
      ) : /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
        SelectGroupFrame,
        {
          role: "group",
          "aria-labelledby": groupId,
          ...groupProps,
          ref: forwardedRef
        }
      );
    }();
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(SelectGroupContextProvider, { scope: __scopeSelect, id: groupId || "", children: content });
  }
);
SelectGroup.displayName = GROUP_NAME;
var LABEL_NAME = "SelectLabel";
var SelectLabel = React27.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...labelProps } = props, context = useSelectItemParentContext(LABEL_NAME, __scopeSelect), groupContext = useSelectGroupContext(LABEL_NAME, __scopeSelect);
    return context.shouldRenderWebNative ? null : /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      import_list_item3.ListItem,
      {
        tag: "div",
        componentName: LABEL_NAME,
        fontWeight: "800",
        id: groupContext.id,
        size: context.size,
        ...labelProps,
        ref: forwardedRef
      }
    );
  }
);
SelectLabel.displayName = LABEL_NAME;
var SelectSeparator = (0, import_core35.styled)(Separator, {
  name: "SelectSeparator"
});
var SelectSheetController = /* @__PURE__ */ __name((props) => {
  const context = useSelectContext("SelectSheetController", props.__scopeSelect), showSheet = useShowSelectSheet(context), breakpointActive = useSelectBreakpointActive(context.sheetBreakpoint), getShowSheet = (0, import_core35.useGet)(showSheet);
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    SheetController,
    {
      onOpenChange: (val) => {
        getShowSheet() && props.onOpenChange(val);
      },
      open: context.open,
      hidden: breakpointActive === false,
      children: props.children
    }
  );
}, "SelectSheetController");
var SelectSheetImpl = /* @__PURE__ */ __name((props) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_jsx_runtime34.Fragment, { children: props.children }), "SelectSheetImpl");
var Select = (0, import_core35.withStaticProperties)(
  (props) => {
    const {
      __scopeSelect,
      native,
      children,
      open: openProp,
      defaultOpen,
      onOpenChange,
      value: valueProp,
      defaultValue: defaultValue2,
      onValueChange,
      disablePreventBodyScroll,
      size: sizeProp = "$true",
      dir
    } = props, id = React27.useId(), scopeKey = __scopeSelect ? Object.keys(__scopeSelect)[0] ?? id : id, { when, AdaptProvider } = useAdaptParent({
      Contents: React27.useCallback(
        () => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(PortalHost, { name: `${scopeKey}SheetContents` }),
        [scopeKey]
      )
    }), sheetBreakpoint = when, SelectImpl = useSelectBreakpointActive(sheetBreakpoint) || !import_core35.isWeb ? SelectSheetImpl : SelectInlineImpl, forceUpdate = React27.useReducer(() => ({}), {})[1], [selectedItem, setSelectedItem] = React27.useState(null), [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen || false,
      onChange: onOpenChange
    }), [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue2 || "",
      onChange: onValueChange,
      transition: true
    });
    React27.useEffect(() => {
      open && emitValue(value);
    }, [open]);
    const [activeIndex, setActiveIndex] = React27.useState(0), [emitValue, valueSubscribe] = useEmitter(), [emitActiveIndex, activeIndexSubscribe] = useEmitter(), selectedIndexRef = React27.useRef(null), activeIndexRef = React27.useRef(null), listContentRef = React27.useRef([]), [selectedIndex, setSelectedIndex] = React27.useState(0), [valueNode, setValueNode] = React27.useState(null);
    (0, import_core35.useIsomorphicLayoutEffect)(() => {
      selectedIndexRef.current = selectedIndex, activeIndexRef.current = activeIndex;
    });
    const shouldRenderWebNative = import_core35.isWeb && (native === true || native === "web" || Array.isArray(native) && native.includes("web"));
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(AdaptProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      SelectItemParentProvider,
      {
        scope: __scopeSelect,
        initialValue: React27.useMemo(() => value, []),
        size: sizeProp,
        activeIndexSubscribe,
        valueSubscribe,
        setOpen,
        onChange: React27.useCallback((val) => {
          setValue(val), emitValue(val);
        }, []),
        setSelectedIndex,
        setValueAtIndex: React27.useCallback((index3, value2) => {
          listContentRef.current[index3] = value2;
        }, []),
        shouldRenderWebNative,
        children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
          SelectProvider,
          {
            scope: __scopeSelect,
            disablePreventBodyScroll,
            dir,
            blockSelection: false,
            fallback: false,
            selectedItem,
            setSelectedItem,
            forceUpdate,
            valueNode,
            onValueNodeChange: setValueNode,
            scopeKey,
            sheetBreakpoint,
            activeIndex,
            selectedIndex,
            setActiveIndex: React27.useCallback((index3) => {
              setActiveIndex(index3), typeof index3 == "number" && emitActiveIndex(index3);
            }, []),
            value,
            open,
            native,
            children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(SelectSheetController, { onOpenChange: setOpen, __scopeSelect, children: shouldRenderWebNative ? children : /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
              SelectImpl,
              {
                activeIndexRef,
                listContentRef,
                selectedIndexRef,
                ...props,
                open,
                value,
                children
              }
            ) })
          }
        )
      }
    ) });
  },
  {
    Adapt,
    Content: SelectContent,
    Group: SelectGroup,
    Icon: SelectIcon,
    Item: SelectItem,
    ItemIndicator: SelectItemIndicator,
    ItemText: SelectItemText,
    Label: SelectLabel,
    ScrollDownButton: SelectScrollDownButton,
    ScrollUpButton: SelectScrollUpButton,
    Trigger: SelectTrigger,
    Value: SelectValue,
    Viewport: SelectViewport,
    Sheet: Sheet.Controlled
  }
);
function useEmitter() {
  const listeners = React27.useRef();
  listeners.current || (listeners.current = /* @__PURE__ */ new Set());
  const emit = /* @__PURE__ */ __name((value) => {
    listeners.current.forEach((l) => l(value));
  }, "emit"), subscribe2 = React27.useCallback((listener) => (listeners.current.add(listener), () => {
    listeners.current.delete(listener);
  }), []);
  return [emit, subscribe2];
}
__name(useEmitter, "useEmitter");
Select.displayName = SELECT_NAME;

// ../../node_modules/@tamagui/slider/dist/esm/Slider.js
var import_core37 = require("@tamagui/core");
var import_get_token7 = __toESM(require_cjs10());

// ../../node_modules/@tamagui/helpers/dist/esm/clamp.js
function clamp2(value, [min2, max2]) {
  return Math.min(max2, Math.max(min2, value));
}
__name(clamp2, "clamp");

// ../../node_modules/@tamagui/helpers/dist/esm/composeEventHandlers.js
function composeEventHandlers9(og, next, { checkDefaultPrevented = true } = {}) {
  return !og || !next ? next || og || void 0 : function(event) {
    if (og == null ? void 0 : og(event), !event || !(checkDefaultPrevented && "defaultPrevented" in event) || // @ts-ignore
    "defaultPrevented" in event && !event.defaultPrevented)
      return next == null ? void 0 : next(event);
  };
}
__name(composeEventHandlers9, "composeEventHandlers");

// ../../node_modules/@tamagui/constants/dist/esm/index.js
var import_react37 = require("react");
var isWeb17 = true;
var isWindowDefined = typeof window < "u";
var isClient4 = isWeb17 && isWindowDefined;
var isChrome = typeof navigator < "u" && /Chrome/.test(navigator.userAgent || "");
var isWebTouchable2 = isClient4 && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
var isAndroid2 = false;

// ../../node_modules/@tamagui/helpers/dist/esm/validStyleProps.js
var placeHolderTextColors = {
  placeholderTextColor: true
};
var validStylesOnBaseProps = {
  ...placeHolderTextColors
};
var textColors = {
  color: true,
  ...placeHolderTextColors,
  textDecorationColor: true,
  textShadowColor: true
};
var tokenCategories = {
  radius: {
    borderRadius: true,
    borderTopLeftRadius: true,
    borderTopRightRadius: true,
    borderBottomLeftRadius: true,
    borderBottomRightRadius: true
  },
  size: {
    width: true,
    height: true,
    minWidth: true,
    minHeight: true,
    maxWidth: true,
    maxHeight: true
  },
  zIndex: {
    zIndex: true
  },
  color: {
    backgroundColor: true,
    borderColor: true,
    borderBottomColor: true,
    borderTopColor: true,
    borderLeftColor: true,
    borderRightColor: true,
    borderEndColor: true,
    borderStartColor: true,
    shadowColor: true,
    ...textColors,
    outlineColor: true
  }
};
var stylePropsUnitless = {
  WebkitLineClamp: true,
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexOrder: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowGap: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnGap: true,
  gridColumnStart: true,
  lineClamp: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  scale: true,
  scaleX: true,
  scaleY: true,
  scaleZ: true,
  shadowOpacity: true
};
var stylePropsTransform = {
  x: true,
  y: true,
  scale: true,
  perspective: true,
  scaleX: true,
  scaleY: true,
  skewX: true,
  skewY: true,
  matrix: true,
  rotate: true,
  rotateY: true,
  rotateX: true,
  rotateZ: true
};
var stylePropsView = {
  backfaceVisibility: true,
  borderBottomEndRadius: true,
  borderBottomStartRadius: true,
  borderBottomWidth: true,
  borderLeftWidth: true,
  borderRightWidth: true,
  borderStyle: true,
  borderTopEndRadius: true,
  borderTopStartRadius: true,
  borderTopWidth: true,
  borderWidth: true,
  transform: true,
  alignContent: true,
  alignItems: true,
  alignSelf: true,
  borderEndWidth: true,
  borderStartWidth: true,
  bottom: true,
  display: true,
  end: true,
  flexBasis: true,
  flexDirection: true,
  flexWrap: true,
  gap: true,
  columnGap: true,
  rowGap: true,
  justifyContent: true,
  left: true,
  margin: true,
  marginBottom: true,
  marginEnd: true,
  marginHorizontal: true,
  marginLeft: true,
  marginRight: true,
  marginStart: true,
  marginTop: true,
  marginVertical: true,
  overflow: true,
  padding: true,
  paddingBottom: true,
  paddingEnd: true,
  paddingHorizontal: true,
  paddingLeft: true,
  paddingRight: true,
  paddingStart: true,
  paddingTop: true,
  paddingVertical: true,
  position: true,
  right: true,
  start: true,
  top: true,
  direction: true,
  shadowOffset: true,
  shadowRadius: true,
  ...tokenCategories.color,
  ...tokenCategories.radius,
  ...tokenCategories.size,
  ...tokenCategories.radius,
  ...validStylesOnBaseProps,
  ...stylePropsTransform,
  ...stylePropsUnitless,
  // RN doesn't support specific border styles per-edge
  borderBottomStyle: true,
  borderTopStyle: true,
  borderLeftStyle: true,
  borderRightStyle: true,
  overflowX: true,
  overflowY: true,
  userSelect: true,
  cursor: true,
  contain: true,
  pointerEvents: true,
  boxSizing: true,
  boxShadow: true,
  outlineStyle: true,
  outlineOffset: true,
  outlineWidth: true,
  ...isAndroid2 ? { elevationAndroid: true } : {}
};
var stylePropsFont = {
  fontFamily: true,
  fontSize: true,
  fontStyle: true,
  fontWeight: true,
  letterSpacing: true,
  lineHeight: true,
  textTransform: true
};
var stylePropsTextOnly = {
  ...stylePropsFont,
  textAlign: true,
  textDecorationLine: true,
  textDecorationStyle: true,
  ...textColors,
  textShadowOffset: true,
  textShadowRadius: true,
  whiteSpace: true,
  wordWrap: true,
  textOverflow: true,
  textDecorationDistance: true,
  userSelect: true,
  selectable: true,
  cursor: true,
  WebkitLineClamp: true,
  WebkitBoxOrient: true
};
var stylePropsText = {
  ...stylePropsView,
  ...stylePropsTextOnly
};
var validPseudoKeys = {
  enterStyle: true,
  exitStyle: true,
  hoverStyle: true,
  pressStyle: true,
  focusStyle: true
};
var validStyles = {
  ...validPseudoKeys,
  ...stylePropsView
};

// ../../node_modules/@tamagui/use-direction/dist/esm/useDirection.js
var React28 = __toESM(require("react"));
var import_jsx_runtime35 = require("react/jsx-runtime");
var DirectionContext = React28.createContext(void 0);
function useDirection(localDir) {
  const globalDir = React28.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}
__name(useDirection, "useDirection");

// ../../node_modules/@tamagui/slider/dist/esm/Slider.js
var React30 = __toESM(require("react"));

// ../../node_modules/@tamagui/slider/dist/esm/constants.js
var SLIDER_NAME = "Slider";
var [createSliderContext, createSliderScope] = createContextScope(SLIDER_NAME);
var [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME);
var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
  startEdge: "left",
  endEdge: "right",
  sizeProp: "width",
  size: 0,
  direction: 1
});
var PAGE_KEYS = ["PageUp", "PageDown"];
var ARROW_KEYS2 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var BACK_KEYS = {
  ltr: ["ArrowDown", "Home", "ArrowLeft", "PageDown"],
  rtl: ["ArrowDown", "Home", "ArrowRight", "PageDown"]
};

// ../../node_modules/@tamagui/slider/dist/esm/helpers.js
function getNextSortedValues(prevValues = [], nextValue, atIndex) {
  const nextValues = [...prevValues];
  return nextValues[atIndex] = nextValue, nextValues.sort((a, b) => a - b);
}
__name(getNextSortedValues, "getNextSortedValues");
function convertValueToPercentage(value, min2, max2) {
  return 100 / (max2 - min2) * (value - min2);
}
__name(convertValueToPercentage, "convertValueToPercentage");
function getLabel(index3, totalValues) {
  return totalValues > 2 ? `Value ${index3 + 1} of ${totalValues}` : totalValues === 2 ? ["Minimum", "Maximum"][index3] : void 0;
}
__name(getLabel, "getLabel");
function getClosestValueIndex(values, nextValue) {
  if (values.length === 1)
    return 0;
  const distances = values.map((value) => Math.abs(value - nextValue)), closestDistance = Math.min(...distances);
  return distances.indexOf(closestDistance);
}
__name(getClosestValueIndex, "getClosestValueIndex");
function getThumbInBoundsOffset(width, left, direction) {
  const halfWidth = width / 2, offset2 = linearScale([0, 50], [0, halfWidth]);
  return (halfWidth - offset2(left) * direction) * direction;
}
__name(getThumbInBoundsOffset, "getThumbInBoundsOffset");
function getStepsBetweenValues(values) {
  return values.slice(0, -1).map((value, index3) => values[index3 + 1] - value);
}
__name(getStepsBetweenValues, "getStepsBetweenValues");
function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
  if (minStepsBetweenValues > 0) {
    const stepsBetweenValues = getStepsBetweenValues(values);
    return Math.min(...stepsBetweenValues) >= minStepsBetweenValues;
  }
  return true;
}
__name(hasMinStepsBetweenValues, "hasMinStepsBetweenValues");
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1])
      return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
__name(linearScale, "linearScale");
function getDecimalCount(value) {
  return (String(value).split(".")[1] || "").length;
}
__name(getDecimalCount, "getDecimalCount");
function roundValue(value, decimalCount) {
  const rounder = 10 ** decimalCount;
  return Math.round(value * rounder) / rounder;
}
__name(roundValue, "roundValue");

// ../../node_modules/@tamagui/slider/dist/esm/SliderImpl.js
var import_core36 = require("@tamagui/core");
var import_get_token6 = __toESM(require_cjs10());
var React29 = __toESM(require("react"));
var import_jsx_runtime36 = require("react/jsx-runtime");
var DirectionalYStack = (0, import_core36.styled)(YStack, {
  variants: {
    orientation: {
      horizontal: {},
      vertical: {}
    }
  }
});
var SliderFrame = (0, import_core36.styled)(DirectionalYStack, {
  position: "relative",
  variants: {
    size: (val, extras) => {
      if (!val)
        return;
      const orientation = extras.props.orientation, size2 = Math.round((0, import_core36.getVariableValue)((0, import_get_token6.getSize)(val)) / 6);
      return orientation === "horizontal" ? {
        height: size2,
        borderRadius: size2,
        justifyContent: "center"
      } : {
        width: size2,
        borderRadius: size2,
        alignItems: "center"
      };
    }
  }
});
var SliderImpl = React29.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSlider,
      onSlideStart,
      onSlideMove,
      onSlideEnd,
      onHomeKeyDown,
      onEndKeyDown,
      onStepKeyDown,
      ...sliderProps
    } = props, context = useSliderContext(SLIDER_NAME, __scopeSlider);
    return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      SliderFrame,
      {
        size: "$4",
        ...sliderProps,
        "data-orientation": sliderProps.orientation,
        ref: forwardedRef,
        ...import_core36.isWeb && {
          onKeyDown: (event) => {
            event.key === "Home" ? (onHomeKeyDown(event), event.preventDefault()) : event.key === "End" ? (onEndKeyDown(event), event.preventDefault()) : PAGE_KEYS.concat(ARROW_KEYS2).includes(event.key) && (onStepKeyDown(event), event.preventDefault());
          }
        },
        onMoveShouldSetResponderCapture: () => true,
        onScrollShouldSetResponder: () => true,
        onScrollShouldSetResponderCapture: () => true,
        onMoveShouldSetResponder: () => true,
        onStartShouldSetResponder: () => true,
        onResponderTerminationRequest: () => false,
        onResponderGrant: (0, import_core36.composeEventHandlers)(props.onResponderGrant, (event) => {
          const target = event.target, isStartingOnThumb = context.thumbs.has(target);
          import_core36.isWeb && target instanceof HTMLElement && context.thumbs.has(target) && target.focus(), onSlideStart(event, isStartingOnThumb ? "thumb" : "track");
        }),
        onResponderMove: (0, import_core36.composeEventHandlers)(props.onResponderMove, (event) => {
          event.stopPropagation(), onSlideMove(event);
        }),
        onResponderRelease: (0, import_core36.composeEventHandlers)(props.onResponderRelease, (event) => {
          onSlideEnd(event);
        })
      }
    );
  }
);

// ../../node_modules/@tamagui/slider/dist/esm/Slider.js
var import_jsx_runtime37 = require("react/jsx-runtime");
var SliderHorizontal = React30.forwardRef(
  (props, forwardedRef) => {
    const {
      min: min2,
      max: max2,
      dir,
      onSlideStart,
      onSlideMove,
      onStepKeyDown,
      onSlideEnd,
      ...sliderProps
    } = props, direction = useDirection(dir), isDirectionLTR = direction === "ltr", sliderRef = React30.useRef(null), [state, setState_] = React30.useState(() => ({ size: 0, offset: 0 })), setState = (0, import_core37.createShallowSetState)(setState_);
    function getValueFromPointer(pointerPosition) {
      const input = [0, state.size];
      return linearScale(input, isDirectionLTR ? [min2, max2] : [max2, min2])(pointerPosition);
    }
    __name(getValueFromPointer, "getValueFromPointer");
    const measure = /* @__PURE__ */ __name(() => {
      var _a;
      (_a = sliderRef.current) == null ? void 0 : _a.measure((_x, _y, width, _height, pageX, _pageY) => {
        setState({
          size: width,
          offset: pageX
        });
      });
    }, "measure");
    return import_core37.isClient && useOnDebouncedWindowResize(measure), /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
      SliderOrientationProvider,
      {
        scope: props.__scopeSlider,
        startEdge: isDirectionLTR ? "left" : "right",
        endEdge: isDirectionLTR ? "right" : "left",
        direction: isDirectionLTR ? 1 : -1,
        sizeProp: "width",
        size: state.size,
        children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          SliderImpl,
          {
            ref: composeRefs(forwardedRef, sliderRef),
            dir: direction,
            ...sliderProps,
            orientation: "horizontal",
            onLayout: measure,
            onSlideStart: (event, target) => {
              const value = getValueFromPointer(event.nativeEvent.locationX);
              value && (onSlideStart == null ? void 0 : onSlideStart(value, target, event));
            },
            onSlideMove: (event) => {
              const value = getValueFromPointer(event.nativeEvent.pageX - state.offset);
              value && (onSlideMove == null ? void 0 : onSlideMove(value, event));
            },
            onSlideEnd: (event) => {
              const value = getValueFromPointer(event.nativeEvent.pageX - state.offset);
              value && (onSlideEnd == null ? void 0 : onSlideEnd(event, value));
            },
            onStepKeyDown: (event) => {
              const isBackKey = BACK_KEYS[direction].includes(event.key);
              onStepKeyDown == null ? void 0 : onStepKeyDown({ event, direction: isBackKey ? -1 : 1 });
            }
          }
        )
      }
    );
  }
);
function useOnDebouncedWindowResize(callback, amt = 200) {
  React30.useEffect(() => {
    let last;
    const onResize = /* @__PURE__ */ __name(() => {
      clearTimeout(last), last = setTimeout(callback, amt);
    }, "onResize");
    return window.addEventListener("resize", onResize), () => {
      clearTimeout(last), window.removeEventListener("resize", onResize);
    };
  }, []);
}
__name(useOnDebouncedWindowResize, "useOnDebouncedWindowResize");
var SliderVertical = React30.forwardRef(
  (props, forwardedRef) => {
    const {
      min: min2,
      max: max2,
      onSlideStart,
      onSlideMove,
      onStepKeyDown,
      onSlideEnd,
      ...sliderProps
    } = props, [state, setState_] = React30.useState(() => ({ size: 0, offset: 0 })), setState = (0, import_core37.createShallowSetState)(setState_), sliderRef = React30.useRef(null);
    function getValueFromPointer(pointerPosition) {
      const input = [0, state.size];
      return linearScale(input, [max2, min2])(pointerPosition);
    }
    __name(getValueFromPointer, "getValueFromPointer");
    const measure = /* @__PURE__ */ __name(() => {
      var _a;
      (_a = sliderRef.current) == null ? void 0 : _a.measure((_x, _y, _width, height, _pageX, pageY) => {
        setState({
          size: height,
          offset: pageY
        });
      });
    }, "measure");
    return import_core37.isClient && useOnDebouncedWindowResize(measure), /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
      SliderOrientationProvider,
      {
        scope: props.__scopeSlider,
        startEdge: "bottom",
        endEdge: "top",
        sizeProp: "height",
        size: state.size,
        direction: 1,
        children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          SliderImpl,
          {
            ref: composeRefs(forwardedRef, sliderRef),
            ...sliderProps,
            orientation: "vertical",
            onLayout: measure,
            onSlideStart: (event, target) => {
              const value = getValueFromPointer(event.nativeEvent.locationY);
              value && (onSlideStart == null ? void 0 : onSlideStart(value, target, event));
            },
            onSlideMove: (event) => {
              const value = getValueFromPointer(event.nativeEvent.pageY - state.offset);
              value && (onSlideMove == null ? void 0 : onSlideMove(value, event));
            },
            onSlideEnd: (event) => {
              const value = getValueFromPointer(event.nativeEvent.pageY - state.offset);
              onSlideEnd == null ? void 0 : onSlideEnd(event, value);
            },
            onStepKeyDown: (event) => {
              const isBackKey = BACK_KEYS.ltr.includes(event.key);
              onStepKeyDown == null ? void 0 : onStepKeyDown({ event, direction: isBackKey ? -1 : 1 });
            }
          }
        )
      }
    );
  }
);
var TRACK_NAME = "SliderTrack";
var SliderTrackFrame = (0, import_core37.styled)(SliderFrame, {
  name: "SliderTrack",
  variants: {
    unstyled: {
      false: {
        height: "100%",
        width: "100%",
        backgroundColor: "$background",
        position: "relative",
        borderRadius: 1e5,
        overflow: "hidden"
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var SliderTrack = React30.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, ...trackProps } = props, context = useSliderContext(TRACK_NAME, __scopeSlider);
    return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
      SliderTrackFrame,
      {
        "data-disabled": context.disabled ? "" : void 0,
        "data-orientation": context.orientation,
        orientation: context.orientation,
        size: context.size,
        ...trackProps,
        ref: forwardedRef
      }
    );
  }
);
SliderTrack.displayName = TRACK_NAME;
var RANGE_NAME = "SliderTrackActive";
var SliderTrackActiveFrame = (0, import_core37.styled)(SliderFrame, {
  name: "SliderTrackActive",
  backgroundColor: "$background",
  position: "absolute"
});
var SliderTrackActive = React30.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, ...rangeProps } = props, context = useSliderContext(RANGE_NAME, __scopeSlider), orientation = useSliderOrientationContext(RANGE_NAME, __scopeSlider), ref = React30.useRef(null), composedRefs = useComposedRefs(forwardedRef, ref), valuesCount = context.values.length, percentages = context.values.map(
      (value) => convertValueToPercentage(value, context.min, context.max)
    ), offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0, offsetEnd = 100 - Math.max(...percentages);
    return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
      SliderTrackActiveFrame,
      {
        orientation: context.orientation,
        "data-orientation": context.orientation,
        "data-disabled": context.disabled ? "" : void 0,
        size: context.size,
        animateOnly: ["left", "top", "right", "bottom"],
        ...rangeProps,
        ref: composedRefs,
        [orientation.startEdge]: `${offsetStart}%`,
        [orientation.endEdge]: `${offsetEnd}%`,
        ...orientation.sizeProp === "width" ? {
          height: "100%"
        } : {
          left: 0,
          right: 0
        }
      }
    );
  }
);
SliderTrackActive.displayName = RANGE_NAME;
var THUMB_NAME = "SliderThumb";
var getThumbSize = /* @__PURE__ */ __name((val) => {
  const tokens = (0, import_core37.getTokens)(), size2 = typeof val == "number" ? val : (0, import_get_token7.getSize)(tokens.size[val], {
    shift: -1
  });
  return {
    width: size2,
    height: size2,
    minWidth: size2,
    minHeight: size2
  };
}, "getThumbSize");
var SliderThumbFrame = (0, import_core37.styled)(ThemeableStack, {
  name: "SliderThumb",
  variants: {
    size: {
      "...size": getThumbSize
    },
    unstyled: {
      false: {
        position: "absolute",
        bordered: 2,
        borderWidth: 2,
        backgrounded: true,
        pressTheme: import_core37.isWeb,
        focusTheme: import_core37.isWeb,
        hoverTheme: import_core37.isWeb
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var SliderThumb = SliderThumbFrame.styleable(function(props, forwardedRef) {
  const { __scopeSlider, index: index3, size: sizeProp, ...thumbProps } = props, context = useSliderContext(THUMB_NAME, __scopeSlider), orientation = useSliderOrientationContext(THUMB_NAME, __scopeSlider), [thumb, setThumb] = React30.useState(null), composedRefs = useComposedRefs(
    forwardedRef,
    (node) => setThumb(node)
  ), value = context.values[index3], percent = value === void 0 ? 0 : convertValueToPercentage(value, context.min, context.max), label = getLabel(index3, context.values.length), sizeIn = sizeProp ?? context.size ?? "$true", [size2, setSize] = React30.useState(() => (0, import_core37.getVariableValue)(getThumbSize(sizeIn).width)), thumbInBoundsOffset = size2 ? getThumbInBoundsOffset(size2, percent, orientation.direction) : 0;
  React30.useEffect(() => {
    if (thumb)
      return context.thumbs.add(thumb), () => {
        context.thumbs.delete(thumb);
      };
  }, [thumb, context.thumbs]);
  const positionalStyles = context.orientation === "horizontal" ? {
    x: thumbInBoundsOffset - size2 / 2,
    y: -size2 / 2,
    top: "50%",
    ...size2 === 0 && {
      top: "auto",
      bottom: "auto"
    }
  } : {
    x: -size2 / 2,
    y: size2 / 2,
    left: "50%",
    ...size2 === 0 && {
      left: "auto",
      right: "auto"
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    SliderThumbFrame,
    {
      ref: composedRefs,
      role: "slider",
      "aria-label": props["aria-label"] || label,
      "aria-valuemin": context.min,
      "aria-valuenow": value,
      "aria-valuemax": context.max,
      "aria-orientation": context.orientation,
      "data-orientation": context.orientation,
      "data-disabled": context.disabled ? "" : void 0,
      tabIndex: context.disabled ? void 0 : 0,
      animateOnly: ["transform", "left", "top", "right", "bottom"],
      ...positionalStyles,
      [orientation.startEdge]: `${percent}%`,
      size: sizeIn,
      ...thumbProps,
      onLayout: (e) => {
        setSize(e.nativeEvent.layout[orientation.sizeProp]);
      },
      onFocus: composeEventHandlers9(props.onFocus, () => {
        context.valueIndexToChangeRef.current = index3;
      })
    }
  );
});
var SliderComponent = React30.forwardRef(
  (props, forwardedRef) => {
    const {
      name,
      min: min2 = 0,
      max: max2 = 100,
      step = 1,
      orientation = "horizontal",
      disabled = false,
      minStepsBetweenThumbs = 0,
      defaultValue: defaultValue2 = [min2],
      value,
      onValueChange = /* @__PURE__ */ __name(() => {
      }, "onValueChange"),
      size: sizeProp,
      onSlideEnd,
      onSlideMove,
      onSlideStart,
      ...sliderProps
    } = props, sliderRef = React30.useRef(null), composedRefs = useComposedRefs(sliderRef, forwardedRef), thumbRefs = React30.useRef(/* @__PURE__ */ new Set()), valueIndexToChangeRef = React30.useRef(0), isHorizontal = orientation === "horizontal", [values = [], setValues] = useControllableState({
      prop: value,
      defaultProp: defaultValue2,
      transition: true,
      onChange: (value2) => {
        var _a;
        import_core37.isWeb && ((_a = [...thumbRefs.current][valueIndexToChangeRef.current]) == null ? void 0 : _a.focus()), onValueChange(value2);
      }
    });
    import_core37.isWeb && React30.useEffect(() => {
      const node = sliderRef.current;
      if (!node)
        return;
      const preventDefault = /* @__PURE__ */ __name((e) => {
        e.preventDefault();
      }, "preventDefault");
      return node.addEventListener("touchstart", preventDefault), () => {
        node.removeEventListener("touchstart", preventDefault);
      };
    }, []);
    function handleSlideMove(value2, event) {
      updateValues(value2, valueIndexToChangeRef.current), onSlideMove == null ? void 0 : onSlideMove(event, value2);
    }
    __name(handleSlideMove, "handleSlideMove");
    function updateValues(value2, atIndex) {
      const decimalCount = getDecimalCount(step), snapToStep = roundValue(
        Math.round((value2 - min2) / step) * step + min2,
        decimalCount
      ), nextValue = clamp2(snapToStep, [min2, max2]);
      setValues((prevValues = []) => {
        const nextValues = getNextSortedValues(prevValues, nextValue, atIndex);
        return hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step) ? (valueIndexToChangeRef.current = nextValues.indexOf(nextValue), String(nextValues) === String(prevValues) ? prevValues : nextValues) : prevValues;
      });
    }
    __name(updateValues, "updateValues");
    const SliderOriented = isHorizontal ? SliderHorizontal : SliderVertical;
    return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
      SliderProvider,
      {
        scope: props.__scopeSlider,
        disabled,
        min: min2,
        max: max2,
        valueIndexToChangeRef,
        thumbs: thumbRefs.current,
        values,
        orientation,
        size: sizeProp,
        children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          SliderOriented,
          {
            "aria-disabled": disabled,
            "data-disabled": disabled ? "" : void 0,
            ...sliderProps,
            ref: composedRefs,
            min: min2,
            max: max2,
            onSlideEnd,
            onSlideStart: disabled ? void 0 : (value2, target, event) => {
              if (target !== "thumb") {
                const closestIndex = getClosestValueIndex(values, value2);
                updateValues(value2, closestIndex), onSlideStart == null ? void 0 : onSlideStart(event, value2, target);
              }
            },
            onSlideMove: disabled ? void 0 : handleSlideMove,
            onHomeKeyDown: () => !disabled && updateValues(min2, 0),
            onEndKeyDown: () => !disabled && updateValues(max2, values.length - 1),
            onStepKeyDown: ({ event, direction: stepDirection }) => {
              if (!disabled) {
                const multiplier = PAGE_KEYS.includes(event.key) || event.shiftKey && ARROW_KEYS2.includes(event.key) ? 10 : 1, atIndex = valueIndexToChangeRef.current, value2 = values[atIndex], stepInDirection = step * multiplier * stepDirection;
                updateValues(value2 + stepInDirection, atIndex);
              }
            }
          }
        )
      }
    );
  }
);
var Slider = (0, import_core37.withStaticProperties)(SliderComponent, {
  Track: SliderTrack,
  TrackActive: SliderTrackActive,
  Thumb: SliderThumb
});
Slider.displayName = SLIDER_NAME;
var Track = SliderTrack;
var Range = SliderTrackActive;
var Thumb = SliderThumb;

// ../../node_modules/@tamagui/switch/dist/esm/createSwitch.js
var import_core40 = require("@tamagui/core");
var import_focusable2 = __toESM(require_cjs25());
var import_get_token9 = __toESM(require_cjs10());
var React31 = __toESM(require("react"));
var import_react_native10 = require("react-native-web-lite");

// ../../node_modules/@tamagui/switch/dist/esm/Switch.js
var import_core39 = require("@tamagui/core");
var import_get_token8 = __toESM(require_cjs10());

// ../../node_modules/@tamagui/switch/dist/esm/SwitchContext.js
var import_core38 = require("@tamagui/core");
var SwitchContext = (0, import_core38.createStyledContext)({
  checked: false,
  disabled: false,
  size: void 0,
  frameWidth: 0,
  unstyled: false
});

// ../../node_modules/@tamagui/switch/dist/esm/Switch.js
var SwitchThumb = (0, import_core39.styled)(ThemeableStack, {
  name: "SwitchThumb",
  context: SwitchContext,
  variants: {
    unstyled: {
      false: {
        size: "$true",
        backgroundColor: "$background",
        borderRadius: 1e3
      }
    },
    size: {
      "...size": (val) => {
        const size2 = getSwitchHeight(val);
        return {
          height: size2,
          width: size2
        };
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var getSwitchHeight = /* @__PURE__ */ __name((val) => Math.round((0, import_core39.getVariableValue)((0, import_get_token8.getSize)(val)) * 0.65), "getSwitchHeight");
var getSwitchWidth = /* @__PURE__ */ __name((val) => getSwitchHeight(val) * 2, "getSwitchWidth");
var SwitchFrame = (0, import_core39.styled)(YStack, {
  name: "Switch",
  tag: "button",
  context: SwitchContext,
  variants: {
    unstyled: {
      false: {
        size: "$true",
        borderRadius: 1e3,
        borderWidth: 2,
        borderColor: "transparent",
        backgroundColor: "$background",
        focusStyle: {
          borderColor: "$borderColorFocus",
          outlineColor: "$borderColorFocus",
          outlineStyle: "solid",
          outlineWidth: 1
        }
      }
    },
    checked: {
      true: {}
    },
    frameWidth: {
      ":number": () => null
    },
    size: {
      "...size": (val) => {
        const height = getSwitchHeight(val) + 4, width = getSwitchWidth(val) + 4;
        return {
          height,
          minHeight: height,
          width
        };
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});

// ../../node_modules/@tamagui/switch/dist/esm/createSwitch.js
var import_jsx_runtime38 = require("react/jsx-runtime");
function createSwitch({
  Frame: Frame2 = SwitchFrame,
  Thumb: Thumb2 = SwitchThumb,
  acceptsUnstyled
}) {
  process.env.NODE_ENV === "development" && (Frame2 !== SwitchFrame && Frame2.staticConfig.context && console.warn(
    "Warning: createSwitch() needs to control context to pass checked state from Frame to Thumb, any custom context passed will be overridden."
  ), Thumb2 !== SwitchThumb && Thumb2.staticConfig.context && console.warn(
    "Warning: createSwitch() needs to control context to pass checked state from Frame to Thumb, any custom context passed will be overridden."
  )), Frame2.staticConfig.context = SwitchContext, Thumb2.staticConfig.context = SwitchContext;
  const SwitchThumbComponent = Thumb2.styleable(function(props, forwardedRef) {
    const { size: sizeProp, unstyled: unstyledProp, ...thumbProps } = props, context = React31.useContext(SwitchContext), {
      disabled,
      checked,
      unstyled: unstyledContext,
      frameWidth,
      size: sizeContext
    } = context, [thumbWidth, setThumbWidth] = React31.useState(0), initialChecked = React31.useRef(checked).current, distance = frameWidth - thumbWidth, x = initialChecked ? checked ? 0 : -distance : checked ? distance : 0;
    return (
      // @ts-ignore
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        Thumb2,
        {
          ...(unstyledProp ?? unstyledContext ?? false) === false && {
            unstyled: false,
            size: sizeProp ?? sizeContext ?? "$true",
            theme: checked ? "active" : null
          },
          "data-state": getState5(checked),
          "data-disabled": disabled ? "" : void 0,
          alignSelf: initialChecked ? "flex-end" : "flex-start",
          x,
          ...thumbProps,
          onLayout: (0, import_core40.composeEventHandlers)(
            props.onLayout,
            (e) => (
              // @ts-ignore
              setThumbWidth(e.nativeEvent.layout.width)
            )
          ),
          ref: forwardedRef
        }
      )
    );
  }), SwitchComponent = Frame2.extractable(
    React31.forwardRef(/* @__PURE__ */ __name(function SwitchFrame2(propsIn, forwardedRef) {
      const styledContext = React31.useContext(SwitchContext), props = (0, import_core40.useProps)(propsIn), {
        labeledBy: ariaLabelledby,
        name,
        checked: checkedProp,
        defaultChecked,
        required,
        disabled,
        value = "on",
        onCheckedChange,
        size: size2 = styledContext.size ?? "$true",
        unstyled = styledContext.unstyled ?? false,
        native: nativeProp,
        nativeProps,
        children,
        ...switchProps
      } = props, leftBorderWidth = (() => {
        let _;
        for (const key in switchProps)
          (key === "borderWidth" || key === "borderLeftWidth") && (_ = switchProps[key]);
        return Frame2 === SwitchFrame2 && acceptsUnstyled && _ == null && unstyled === false && (_ = 2), typeof _ == "string" && (_ = (0, import_core40.getVariableValue)((0, import_get_token9.getSize)(_))), typeof _ == "number" ? _ : 0;
      })(), native = Array.isArray(nativeProp) ? nativeProp : [nativeProp], shouldRenderMobileNative = !import_core40.isWeb && nativeProp === true || !import_core40.isWeb && native.includes("mobile") || native.includes("android") && import_react_native10.Platform.OS === "android" || native.includes("ios") && import_react_native10.Platform.OS === "ios", [button, setButton] = React31.useState(null), composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node)), labelId = useLabelContext(button), labelledBy = ariaLabelledby || labelId, hasConsumerStoppedPropagationRef = React31.useRef(false), isFormControl = import_core40.isWeb ? button ? !!button.closest("form") : true : false, [frameWidth, setFrameWidth] = React31.useState(0), [checked = false, setChecked] = useControllableState({
        prop: checkedProp,
        defaultProp: defaultChecked || false,
        onChange: onCheckedChange,
        transition: true
      });
      return shouldRenderMobileNative ? /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        import_react_native10.Switch,
        {
          value: checkedProp,
          onValueChange: onCheckedChange,
          ...nativeProps
        }
      ) : (import_core40.isWeb || React31.useEffect(() => {
        if (props.id)
          return (0, import_focusable2.registerFocusable)(props.id, {
            focus: () => {
              setChecked((x) => !x);
            }
          });
      }, [props.id, setChecked]), /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_jsx_runtime38.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          Frame2,
          {
            unstyled,
            size: size2,
            checked,
            disabled,
            frameWidth: frameWidth ? frameWidth - leftBorderWidth * 2 : 0,
            theme: checked ? "active" : null,
            themeShallow: true,
            role: "switch",
            "aria-checked": checked,
            "aria-labelledby": labelledBy,
            "aria-required": required,
            "data-state": getState5(checked),
            "data-disabled": disabled ? "" : void 0,
            tabIndex: disabled ? void 0 : 0,
            value,
            ...switchProps,
            ref: composedRefs,
            onPress: (0, import_core40.composeEventHandlers)(props.onPress, (event) => {
              setChecked((prevChecked) => !prevChecked), import_core40.isWeb && isFormControl && (hasConsumerStoppedPropagationRef.current = event.isPropagationStopped(), hasConsumerStoppedPropagationRef.current || event.stopPropagation());
            }),
            onLayout: (0, import_core40.composeEventHandlers)(
              // @ts-ignore
              props.onLayout,
              (e) => {
                setFrameWidth(e.nativeEvent.layout.width);
              }
            ),
            children: typeof children == "function" ? children(checked) : children
          }
        ),
        import_core40.isWeb && isFormControl && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          BubbleInput3,
          {
            control: button,
            bubbles: !hasConsumerStoppedPropagationRef.current,
            name,
            value,
            checked,
            required,
            disabled,
            style: { transform: "translateX(-100%)" }
          }
        )
      ] }));
    }, "SwitchFrame2"))
  ), BubbleInput3 = /* @__PURE__ */ __name((props) => {
    const { control, checked, bubbles = true, ...inputProps } = props, ref = React31.useRef(null), prevChecked = usePrevious(checked);
    return React31.useEffect(() => {
      const input = ref.current, inputProto = window.HTMLInputElement.prototype, setChecked = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      ).set;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        setChecked.call(input, checked), input.dispatchEvent(event);
      }
    }, [prevChecked, checked, bubbles]), // @ts-ignore
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
      "input",
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked,
        ...inputProps,
        tabIndex: -1,
        ref,
        style: {
          ...props.style,
          // ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }, "BubbleInput");
  function getState5(checked) {
    return checked ? "checked" : "unchecked";
  }
  __name(getState5, "getState");
  return (0, import_core40.withStaticProperties)(SwitchComponent, {
    Thumb: SwitchThumbComponent
  });
}
__name(createSwitch, "createSwitch");

// ../../node_modules/@tamagui/switch/dist/esm/index.js
var Switch = createSwitch({
  Frame: SwitchFrame,
  Thumb: SwitchThumb,
  acceptsUnstyled: true
});

// ../../node_modules/@tamagui/tabs/dist/esm/Tabs.js
var import_get_button_sized4 = __toESM(require_cjs11());
var import_group = __toESM(require_cjs26());

// ../../node_modules/@tamagui/collection/dist/esm/Collection.js
var import_core41 = require("@tamagui/core");
var import_react38 = __toESM(require("react"));
var import_jsx_runtime39 = require("react/jsx-runtime");
function createCollection(name) {
  const PROVIDER_NAME = name + "CollectionProvider", [createCollectionContext, createCollectionScope2] = createContextScope(PROVIDER_NAME), [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
    collectionRef: { current: null },
    itemMap: /* @__PURE__ */ new Map()
  }), CollectionProvider = /* @__PURE__ */ __name((props) => {
    const { scope, children } = props, ref = import_react38.default.useRef(null), itemMap = import_react38.default.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(CollectionProviderImpl, { scope, itemMap, collectionRef: ref, children });
  }, "CollectionProvider");
  CollectionProvider.displayName = PROVIDER_NAME;
  const COLLECTION_SLOT_NAME = name + "CollectionSlot", CollectionSlot = import_react38.default.forwardRef(
    (props, forwardedRef) => {
      const { scope, children } = props, context = useCollectionContext(COLLECTION_SLOT_NAME, scope), composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
      return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_core41.Slot, { ref: composedRefs, children });
    }
  );
  CollectionSlot.displayName = COLLECTION_SLOT_NAME;
  const ITEM_SLOT_NAME = name + "CollectionItemSlot", ITEM_DATA_ATTR = "data-collection-item", CollectionItemSlot = import_react38.default.forwardRef(
    (props, forwardedRef) => {
      const { scope, children, ...itemData } = props, ref = import_react38.default.useRef(null), composedRefs = useComposedRefs(forwardedRef, ref), context = useCollectionContext(ITEM_SLOT_NAME, scope);
      return import_react38.default.useEffect(() => (context.itemMap.set(ref, { ref, ...itemData }), () => void context.itemMap.delete(ref))), /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_core41.Slot, { [ITEM_DATA_ATTR]: "", ref: composedRefs, children });
    }
  );
  CollectionItemSlot.displayName = ITEM_SLOT_NAME;
  function useCollection2(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    return import_react38.default.useCallback(() => {
      if (!import_core41.isWeb)
        return [];
      const collectionNode = context.collectionRef.current;
      if (!collectionNode)
        return [];
      const orderedNodes = Array.from(
        collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`)
      );
      return Array.from(context.itemMap.values()).sort(
        (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
      );
    }, [context.collectionRef, context.itemMap]);
  }
  __name(useCollection2, "useCollection");
  return [
    { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
    useCollection2,
    createCollectionScope2
  ];
}
__name(createCollection, "createCollection");

// ../../node_modules/@tamagui/roving-focus/dist/esm/RovingFocusGroup.js
var import_core42 = require("@tamagui/core");
var React33 = __toESM(require("react"));
var import_jsx_runtime40 = require("react/jsx-runtime");
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var RovingFocusGroupImpl = React33.forwardRef((props, forwardedRef) => {
  const {
    __scopeRovingFocusGroup,
    orientation,
    loop = false,
    dir,
    currentTabStopId: currentTabStopIdProp,
    defaultCurrentTabStopId,
    onCurrentTabStopIdChange,
    onEntryFocus,
    ...groupProps
  } = props, ref = React33.useRef(null), composedRefs = useComposedRefs(forwardedRef, ref), direction = useDirection(dir), [currentTabStopId = null, setCurrentTabStopId] = useControllableState({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId ?? null,
    onChange: onCurrentTabStopIdChange
  }), [isTabbingBackOut, setIsTabbingBackOut] = React33.useState(false), handleEntryFocus = (0, import_core42.useEvent)(onEntryFocus), getItems = useCollection(__scopeRovingFocusGroup), isClickFocusRef = React33.useRef(false), [focusableItemsCount, setFocusableItemsCount] = React33.useState(0);
  return React33.useEffect(() => {
    const node = ref.current;
    if (node)
      return node.addEventListener(ENTRY_FOCUS, handleEntryFocus), () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
  }, [handleEntryFocus]), /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    RovingFocusProvider,
    {
      scope: __scopeRovingFocusGroup,
      orientation,
      dir: direction,
      loop,
      currentTabStopId,
      onItemFocus: React33.useCallback(
        (tabStopId) => setCurrentTabStopId(tabStopId),
        [setCurrentTabStopId]
      ),
      onItemShiftTab: React33.useCallback(() => setIsTabbingBackOut(true), []),
      onFocusableItemAdd: React33.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount + 1),
        []
      ),
      onFocusableItemRemove: React33.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount - 1),
        []
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
        import_core42.Stack,
        {
          tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
          "data-orientation": orientation,
          ...groupProps,
          ref: composedRefs,
          style: [{ outline: "none" }, props.style],
          onMouseDown: (0, import_core42.composeEventHandlers)(props.onMouseDown, () => {
            isClickFocusRef.current = true;
          }),
          onFocus: (0, import_core42.composeEventHandlers)(props.onFocus, (event) => {
            const isKeyboardFocus = !isClickFocusRef.current;
            if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
              const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
              if (event.currentTarget.dispatchEvent(entryFocusEvent), !entryFocusEvent.defaultPrevented) {
                const items = getItems().filter((item) => item.focusable), activeItem = items.find((item) => item.active), currentItem = items.find((item) => item.id === currentTabStopId), candidateNodes = [activeItem, currentItem, ...items].filter(
                  Boolean
                ).map((item) => item.ref.current);
                focusFirst(candidateNodes);
              }
            }
            isClickFocusRef.current = false;
          }),
          onBlur: (0, import_core42.composeEventHandlers)(
            props.onBlur,
            () => setIsTabbingBackOut(false)
          )
        }
      )
    }
  );
});
var ITEM_NAME2 = "RovingFocusGroupItem";
var RovingFocusGroupItem = React33.forwardRef((props, forwardedRef) => {
  const {
    __scopeRovingFocusGroup,
    focusable = true,
    active = false,
    tabStopId,
    ...itemProps
  } = props, autoId = React33.useId(), id = tabStopId || autoId, context = useRovingFocusContext(ITEM_NAME2, __scopeRovingFocusGroup), isCurrentTabStop = context.currentTabStopId === id, getItems = useCollection(__scopeRovingFocusGroup), { onFocusableItemAdd, onFocusableItemRemove } = context;
  return React33.useEffect(() => {
    if (focusable)
      return onFocusableItemAdd(), () => onFocusableItemRemove();
  }, [focusable, onFocusableItemAdd, onFocusableItemRemove]), /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    Collection.ItemSlot,
    {
      scope: __scopeRovingFocusGroup,
      id,
      focusable,
      active,
      children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
        import_core42.Stack,
        {
          tabIndex: isCurrentTabStop ? 0 : -1,
          "data-orientation": context.orientation,
          ...itemProps,
          ref: forwardedRef,
          onMouseDown: (0, import_core42.composeEventHandlers)(props.onMouseDown, (event) => {
            focusable ? context.onItemFocus(id) : event.preventDefault();
          }),
          onFocus: (0, import_core42.composeEventHandlers)(props.onFocus, () => context.onItemFocus(id)),
          ...import_core42.isWeb && {
            onKeyDown: (0, import_core42.composeEventHandlers)(
              props.onKeyDown,
              (event) => {
                if (event.key === "Tab" && event.shiftKey) {
                  context.onItemShiftTab();
                  return;
                }
                if (event.target !== event.currentTarget)
                  return;
                const focusIntent = getFocusIntent(event, context.orientation, context.dir);
                if (focusIntent !== void 0) {
                  event.preventDefault();
                  let candidateNodes = getItems().filter((item) => item.focusable).map((item) => item.ref.current);
                  if (focusIntent === "last")
                    candidateNodes.reverse();
                  else if (focusIntent === "prev" || focusIntent === "next") {
                    focusIntent === "prev" && candidateNodes.reverse();
                    const currentIndex = candidateNodes.indexOf(event.currentTarget);
                    candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                  }
                  setTimeout(() => focusFirst(candidateNodes));
                }
              }
            )
          }
        }
      )
    }
  );
});
RovingFocusGroupItem.displayName = ITEM_NAME2;
var GROUP_NAME2 = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = createCollection(GROUP_NAME2);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(
  GROUP_NAME2,
  [createCollectionScope]
);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME2);
var RovingFocusGroup = (0, import_core42.withStaticProperties)(
  React33.forwardRef(
    (props, forwardedRef) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Collection.Provider, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Collection.Slot, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(RovingFocusGroupImpl, { ...props, ref: forwardedRef }) }) })
  ),
  {
    Item: RovingFocusGroupItem
  }
);
RovingFocusGroup.displayName = GROUP_NAME2;
var MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function getDirectionAwareKey(key, dir) {
  return dir !== "rtl" ? key : key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
__name(getDirectionAwareKey, "getDirectionAwareKey");
function getFocusIntent(event, orientation, dir) {
  const key = getDirectionAwareKey(event.key, dir);
  if (!(orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key)) && !(orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key)))
    return MAP_KEY_TO_FOCUS_INTENT[key];
}
__name(getFocusIntent, "getFocusIntent");
function focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates)
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT || (candidate.focus(), document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT))
      return;
}
__name(focusFirst, "focusFirst");
function wrapArray(array, startIndex) {
  return array.map((_, index3) => array[(startIndex + index3) % array.length]);
}
__name(wrapArray, "wrapArray");

// ../../node_modules/@tamagui/tabs/dist/esm/Tabs.js
var import_web12 = require("@tamagui/core");
var React34 = __toESM(require("react"));
var import_jsx_runtime41 = require("react/jsx-runtime");
var TAB_LIST_NAME = "TabsList";
var TabsListFrame = (0, import_web12.styled)(import_group.Group, {
  name: TAB_LIST_NAME,
  focusable: true
});
var TabsList = TabsListFrame.extractable(
  React34.forwardRef(
    (props, forwardedRef) => {
      const { __scopeTabs, loop = true, children, ...listProps } = props, context = useTabsContext(TAB_LIST_NAME, __scopeTabs), rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
        RovingFocusGroup,
        {
          asChild: "except-style",
          orientation: context.orientation,
          dir: context.dir,
          loop,
          ...rovingFocusGroupScope,
          children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
            TabsListFrame,
            {
              role: "tablist",
              "aria-orientation": context.orientation,
              ref: forwardedRef,
              orientation: context.orientation,
              ...listProps,
              children
            }
          )
        }
      );
    }
  )
);
TabsList.displayName = TAB_LIST_NAME;
var TRIGGER_NAME5 = "TabsTrigger";
var TabsTriggerFrame = (0, import_web12.styled)(ThemeableStack, {
  name: TRIGGER_NAME5,
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "nowrap",
  flexDirection: "row",
  cursor: "pointer",
  focusable: true,
  userSelect: "none",
  variants: {
    size: {
      "...size": import_get_button_sized4.getButtonSized
    },
    disabled: {
      true: {
        pointerEvents: "none"
      }
    },
    unstyled: {
      false: {
        backgroundColor: "$background",
        pressStyle: {
          backgroundColor: "$backgroundPress"
        },
        hoverStyle: {
          backgroundColor: "$backgroundHover"
        },
        focusStyle: {
          backgroundColor: "$backgroundFocus"
        }
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var TabsTrigger = TabsTriggerFrame.extractable(
  React34.forwardRef(
    (props, forwardedRef) => {
      const {
        __scopeTabs,
        value,
        disabled = false,
        onInteraction,
        ...triggerProps
      } = props, context = useTabsContext(TRIGGER_NAME5, __scopeTabs), rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs), triggerId = makeTriggerId(context.baseId, value), contentId = makeContentId(context.baseId, value), isSelected = value === context.value, [layout, setLayout] = React34.useState(null), triggerRef = React34.useRef(null), groupItemProps = (0, import_group.useGroupItem)({ disabled });
      return React34.useEffect(() => (context.registerTrigger(), () => context.unregisterTrigger()), []), React34.useEffect(() => {
        if (!triggerRef.current || !import_web12.isWeb)
          return;
        function getTriggerSize() {
          triggerRef.current && setLayout({
            width: triggerRef.current.offsetWidth,
            height: triggerRef.current.offsetHeight,
            x: triggerRef.current.offsetLeft,
            y: triggerRef.current.offsetTop
          });
        }
        __name(getTriggerSize, "getTriggerSize");
        getTriggerSize();
        const observer = new ResizeObserver(getTriggerSize);
        return observer.observe(triggerRef.current), () => {
          triggerRef.current && observer.unobserve(triggerRef.current);
        };
      }, [context.triggersCount]), React34.useEffect(() => {
        isSelected && layout && (onInteraction == null ? void 0 : onInteraction("select", layout));
      }, [isSelected, value, layout]), /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_web12.Theme, { name: isSelected ? "active" : null, children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
        RovingFocusGroup.Item,
        {
          asChild: "except-style",
          ...rovingFocusGroupScope,
          focusable: !disabled,
          active: isSelected,
          children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
            TabsTriggerFrame,
            {
              onLayout: (event) => {
                import_web12.isWeb || setLayout(event.nativeEvent.layout);
              },
              onHoverIn: (0, import_web12.composeEventHandlers)(props.onHoverIn, () => {
                layout && (onInteraction == null ? void 0 : onInteraction("hover", layout));
              }),
              onHoverOut: (0, import_web12.composeEventHandlers)(props.onHoverOut, () => {
                onInteraction == null ? void 0 : onInteraction("hover", null);
              }),
              role: "tab",
              "aria-selected": isSelected,
              "aria-controls": contentId,
              "data-state": isSelected ? "active" : "inactive",
              "data-disabled": disabled ? "" : void 0,
              disabled,
              id: triggerId,
              size: context.size,
              ...groupItemProps,
              ...triggerProps,
              ref: (0, import_web12.composeRefs)(forwardedRef, triggerRef),
              onPress: (0, import_web12.composeEventHandlers)(props.onPress ?? void 0, (event) => {
                const webChecks = !import_web12.isWeb || event.button === 0 && event.ctrlKey === false;
                !disabled && !isSelected && webChecks ? context.onChange(value) : event.preventDefault();
              }),
              ...import_web12.isWeb && {
                type: "button",
                onKeyDown: (0, import_web12.composeEventHandlers)(
                  props.onKeyDown,
                  (event) => {
                    [" ", "Enter"].includes(event.key) && (context.onChange(value), event.preventDefault());
                  }
                ),
                onFocus: (0, import_web12.composeEventHandlers)(props.onFocus, (event) => {
                  layout && (onInteraction == null ? void 0 : onInteraction("focus", layout));
                  const isAutomaticActivation = context.activationMode !== "manual";
                  !isSelected && !disabled && isAutomaticActivation && context.onChange(value);
                }),
                onBlur: (0, import_web12.composeEventHandlers)(props.onFocus, () => {
                  onInteraction == null ? void 0 : onInteraction("focus", null);
                })
              }
            }
          )
        }
      ) });
    }
  )
);
TabsTrigger.displayName = TRIGGER_NAME5;
var CONTENT_NAME4 = "TabsContent";
var TabsContentFrame = (0, import_web12.styled)(ThemeableStack, {
  name: CONTENT_NAME4
});
var TabsContent = TabsContentFrame.extractable(
  React34.forwardRef(
    (props, forwardedRef) => {
      const { __scopeTabs, value, forceMount, children, ...contentProps } = props, context = useTabsContext(CONTENT_NAME4, __scopeTabs), isSelected = value === context.value, show = forceMount || isSelected, triggerId = makeTriggerId(context.baseId, value), contentId = makeContentId(context.baseId, value);
      return show ? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
        TabsContentFrame,
        {
          "data-state": isSelected ? "active" : "inactive",
          "data-orientation": context.orientation,
          role: "tabpanel",
          "aria-labelledby": triggerId,
          hidden: !show,
          id: contentId,
          tabIndex: 0,
          ...contentProps,
          ref: forwardedRef,
          children
        },
        value
      ) : null;
    }
  )
);
TabsContent.displayName = CONTENT_NAME4;
var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = createContextScope(TABS_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var TabsFrame = (0, import_web12.styled)(SizableStack, {
  name: TABS_NAME
});
var Tabs = (0, import_web12.withStaticProperties)(
  TabsFrame.extractable(
    React34.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeTabs,
          value: valueProp,
          onValueChange,
          defaultValue: defaultValue2,
          orientation = "horizontal",
          dir,
          activationMode = "automatic",
          size: size2 = "$true",
          ...tabsProps
        } = props, direction = useDirection(dir), [value, setValue] = useControllableState({
          prop: valueProp,
          onChange: onValueChange,
          defaultProp: defaultValue2 ?? ""
        }), [triggersCount, setTriggersCount] = React34.useState(0), registerTrigger = (0, import_web12.useEvent)(() => setTriggersCount((v) => v + 1)), unregisterTrigger = (0, import_web12.useEvent)(() => setTriggersCount((v) => v - 1));
        return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
          TabsProvider,
          {
            scope: __scopeTabs,
            baseId: React34.useId(),
            value,
            onChange: setValue,
            orientation,
            dir: direction,
            activationMode,
            size: size2,
            registerTrigger,
            triggersCount,
            unregisterTrigger,
            children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
              TabsFrame,
              {
                direction,
                "data-orientation": orientation,
                ...tabsProps,
                ref: forwardedRef
              }
            )
          }
        );
      }
    )
  ),
  {
    List: TabsList,
    /**
     * @deprecated Use Tabs.Tab instead
     */
    Trigger: TabsTrigger,
    Tab: TabsTrigger,
    Content: TabsContent
  }
);
Tabs.displayName = TABS_NAME;
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
__name(makeTriggerId, "makeTriggerId");
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
__name(makeContentId, "makeContentId");

// ../../node_modules/tamagui/dist/esm/index.js
__reExport(esm_exports2, __toESM(require_cjs28()), module.exports);

// ../../node_modules/@tamagui/toggle-group/dist/esm/ToggleGroup.js
var import_focusable3 = __toESM(require_cjs25());
var import_font_size3 = __toESM(require_cjs20());
var import_get_token10 = __toESM(require_cjs10());
var import_group2 = __toESM(require_cjs26());
var import_helpers_tamagui3 = __toESM(require_cjs24());
var import_web14 = require("@tamagui/core");
var import_react39 = __toESM(require("react"));

// ../../node_modules/@tamagui/toggle-group/dist/esm/Toggle.js
var import_web13 = require("@tamagui/core");
var React35 = __toESM(require("react"));
var import_jsx_runtime42 = require("react/jsx-runtime");
var NAME2 = "Toggle";
var ToggleFrame = (0, import_web13.styled)(ThemeableStack, {
  name: NAME2,
  tag: "button",
  variants: {
    unstyled: {
      false: {
        pressTheme: true,
        backgroundColor: "$background",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        borderColor: "$borderColor",
        borderWidth: 1,
        margin: -1,
        hoverStyle: {
          backgroundColor: "$backgroundHover"
        },
        pressStyle: {
          backgroundColor: "$backgroundPress"
        },
        focusStyle: {
          borderColor: "$borderColorFocus",
          outlineColor: "$borderColorFocus",
          outlineWidth: 2,
          outlineStyle: "solid"
        }
      }
    },
    active: {
      true: {
        zIndex: 1,
        hoverStyle: {
          backgroundColor: "$background"
        },
        focusStyle: {
          borderColor: "$borderColorPress",
          backgroundColor: "$backgroundPress"
        }
      }
    },
    orientation: {
      horizontal: {
        flexDirection: "row",
        spaceDirection: "horizontal"
      },
      vertical: {
        flexDirection: "column",
        spaceDirection: "vertical"
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var Toggle = ToggleFrame.extractable(
  React35.forwardRef((props, forwardedRef) => {
    const {
      pressed: pressedProp,
      defaultPressed = false,
      onPressedChange,
      ...buttonProps
    } = props, [pressed = false, setPressed] = useControllableState({
      prop: pressedProp,
      onChange: onPressedChange,
      defaultProp: defaultPressed
    });
    return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_web13.Theme, { name: pressed ? "active" : null, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
      ToggleFrame,
      {
        active: props.unstyled ? void 0 : pressed,
        "aria-pressed": pressed,
        "data-state": pressed ? "on" : "off",
        "data-disabled": props.disabled ? "" : void 0,
        ...buttonProps,
        ref: forwardedRef,
        onPress: (0, import_web13.composeEventHandlers)(props.onPress ?? void 0, (event) => {
          props.disabled || setPressed(!pressed);
        })
      }
    ) });
  })
);
Toggle.displayName = NAME2;

// ../../node_modules/@tamagui/toggle-group/dist/esm/ToggleGroup.js
var import_jsx_runtime43 = require("react/jsx-runtime");
var TOGGLE_GROUP_NAME = "ToggleGroup";
var [createToggleGroupContext, createToggleGroupScope] = createContextScope(
  TOGGLE_GROUP_NAME,
  [createRovingFocusGroupScope]
);
var TOGGLE_GROUP_ITEM_NAME = "ToggleGroupItem";
var [createToggleGroupItemContext, createToggleGroupItemScope] = createContextScope(TOGGLE_GROUP_ITEM_NAME);
var [ToggleGroupItemProvider, useToggleGroupItemContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var useToggleGroupItemScope = createToggleGroupItemScope();
var ToggleGroupItem = ToggleFrame.extractable(
  import_react39.default.forwardRef(
    (props, forwardedRef) => {
      const valueContext = useToggleGroupValueContext(
        TOGGLE_GROUP_ITEM_NAME,
        props.__scopeToggleGroup
      ), context = useToggleGroupContext(
        TOGGLE_GROUP_ITEM_NAME,
        props.__scopeToggleGroup
      ), __scopeToggleGroup = props.__scopeToggleGroup, rovingFocusGroupScope = useRovingFocusGroupScope2(props.__scopeToggleGroup), pressed = valueContext.value.includes(props.value), disabled = context.disabled || props.disabled || false, ref = import_react39.default.useRef(null), groupItemProps = (0, import_group2.useGroupItem)({ disabled }), size2 = props.size ?? context.size, sizeProps = props.unstyled ? {} : {
        width: void 0,
        height: void 0,
        padding: (0, import_web14.getVariableValue)(size2) * 0.6
      };
      props.unstyled || (props.orientation === "horizontal" ? sizeProps.height = (0, import_web14.getVariableValue)(size2) * 2.4 : sizeProps.width = (0, import_web14.getVariableValue)(size2) * 2.4);
      const iconSize = (typeof size2 == "number" ? size2 * 0.7 : (0, import_font_size3.getFontSize)(size2)) * 1.2, theme = (0, import_web14.useTheme)(), getThemedIcon = (0, import_helpers_tamagui3.useGetThemedIcon)({ size: iconSize, color: theme.color }), children = import_react39.default.Children.toArray(props.children).map((child) => props.disablePassStyles || !import_react39.default.isValidElement(child) ? child : getThemedIcon(child)), commonProps = { ...props, pressed, disabled, ...sizeProps, children };
      return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(ToggleGroupItemProvider, { scope: __scopeToggleGroup, children: context.rovingFocus ? /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
        RovingFocusGroup.Item,
        {
          asChild: "except-style",
          ...rovingFocusGroupScope,
          focusable: !disabled,
          active: pressed,
          children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
            ToggleFrame,
            {
              asChild: "except-style",
              focusable: !disabled,
              disabled,
              ref,
              children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                ToggleGroupItemImpl,
                {
                  ...commonProps,
                  ref: forwardedRef,
                  ...groupItemProps
                }
              )
            }
          )
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
        ToggleFrame,
        {
          asChild: "except-style",
          focusable: !disabled,
          disabled,
          ref,
          children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(ToggleGroupItemImpl, { ...commonProps, ref: forwardedRef })
        }
      ) });
    }
  )
);
ToggleGroupItem.displayName = TOGGLE_GROUP_ITEM_NAME;
var ToggleGroupItemImpl = ToggleFrame.extractable(
  import_react39.default.forwardRef(
    (props, forwardedRef) => {
      const { __scopeToggleGroup, value, ...itemProps } = props, valueContext = useToggleGroupValueContext(
        TOGGLE_GROUP_ITEM_NAME,
        __scopeToggleGroup
      ), singleProps = {
        "aria-pressed": void 0
      }, typeProps = valueContext.type === "single" ? singleProps : void 0;
      return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
        Toggle,
        {
          ...typeProps,
          ...itemProps,
          ref: forwardedRef,
          onPressedChange: (pressed) => {
            pressed ? valueContext.onItemActivate(value) : valueContext.onItemDeactivate(value);
          }
        }
      );
    }
  )
);
var useRovingFocusGroupScope2 = createRovingFocusGroupScope();
var ToggleGroup = (0, import_web14.withStaticProperties)(
  import_react39.default.forwardRef((props, forwardedRef) => {
    const { type, ...toggleGroupProps } = props;
    if (import_web14.isWeb || import_react39.default.useEffect(() => {
      if (props.id)
        return (0, import_focusable3.registerFocusable)(props.id, {
          // TODO: would be nice to focus on the first child later - could be done with reforest
          // for now leaving it empty
          focus: () => {
          }
        });
    }, [props.id]), type === "single")
      return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(ToggleGroupImplSingle, { ...toggleGroupProps, ref: forwardedRef });
    if (type === "multiple")
      return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(ToggleGroupImplMultiple, { ...toggleGroupProps, ref: forwardedRef });
    throw new Error(`Missing prop \`type\` expected on \`${TOGGLE_GROUP_NAME}\``);
  }),
  {
    Item: ToggleGroupItem
  }
);
ToggleGroup.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupValueProvider, useToggleGroupValueContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImplSingle = import_react39.default.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue: defaultValue2,
    onValueChange = /* @__PURE__ */ __name(() => {
    }, "onValueChange"),
    disableDeactivation = false,
    ...toggleGroupSingleProps
  } = props, [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue2,
    onChange: onValueChange
  });
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    ToggleGroupValueProvider,
    {
      scope: props.__scopeToggleGroup,
      type: "single",
      value: value ? [value] : [],
      defaultValue: value,
      onItemActivate: setValue,
      onItemDeactivate: import_react39.default.useCallback(
        () => disableDeactivation ? null : setValue(""),
        [setValue, disableDeactivation]
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(ToggleGroupImpl, { ...toggleGroupSingleProps, ref: forwardedRef })
    }
  );
});
var ToggleGroupImplMultiple = import_react39.default.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue: defaultValue2,
    onValueChange = /* @__PURE__ */ __name(() => {
    }, "onValueChange"),
    ...toggleGroupMultipleProps
  } = props, [value = [], setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue2,
    onChange: onValueChange
  }), handleButtonActivate = import_react39.default.useCallback(
    (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  ), handleButtonDeactivate = import_react39.default.useCallback(
    (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
    [setValue]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    ToggleGroupValueProvider,
    {
      scope: props.__scopeToggleGroup,
      type: "multiple",
      value,
      defaultValue: value,
      onItemActivate: handleButtonActivate,
      onItemDeactivate: handleButtonDeactivate,
      children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(ToggleGroupImpl, { ...toggleGroupMultipleProps, ref: forwardedRef })
    }
  );
});
ToggleGroup.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupContext, useToggleGroupContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImplElementFrame = (0, import_web14.styled)(import_group2.Group, {
  name: TOGGLE_GROUP_NAME,
  variants: {
    unstyled: {
      false: {
        backgroundColor: "$background"
      }
    },
    orientation: {
      vertical: {
        flexDirection: "column",
        spaceDirection: "vertical"
      },
      horizontal: {
        flexDirection: "row",
        spaceDirection: "horizontal"
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var ToggleGroupImpl = ToggleGroupImplElementFrame.extractable(
  import_react39.default.forwardRef(
    (props, forwardedRef) => {
      const {
        __scopeToggleGroup,
        disabled = false,
        orientation = "horizontal",
        dir,
        rovingFocus = true,
        loop = true,
        unstyled = false,
        size: sizeProp = "$true",
        sizeAdjust = 0,
        ...toggleGroupProps
      } = props, rovingFocusGroupScope = useRovingFocusGroupScope2(__scopeToggleGroup), direction = useDirection(dir), commonProps = {
        role: "group",
        dir: direction,
        ...toggleGroupProps
      }, adjustedSize = (0, import_web14.getVariableValue)(
        (0, import_get_token10.getSize)(props.size, {
          shift: sizeAdjust
        })
      ), size2 = Math.round(adjustedSize * 0.45);
      return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
        ToggleGroupContext,
        {
          scope: __scopeToggleGroup,
          rovingFocus,
          disabled,
          size: size2,
          children: rovingFocus ? /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
            RovingFocusGroup,
            {
              asChild: "except-style",
              ...rovingFocusGroupScope,
              orientation,
              dir: direction,
              loop,
              children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                ToggleGroupImplElementFrame,
                {
                  "aria-orientation": orientation,
                  orientation,
                  axis: orientation,
                  ref: forwardedRef,
                  "data-disabled": disabled ? "" : void 0,
                  unstyled,
                  ...commonProps
                }
              )
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
            ToggleGroupImplElementFrame,
            {
              "aria-orientation": orientation,
              ref: forwardedRef,
              orientation,
              "data-disabled": disabled ? "" : void 0,
              unstyled,
              ...commonProps
            }
          )
        }
      );
    }
  )
);

// ../../node_modules/@tamagui/tooltip/dist/esm/Tooltip.js
var import_core43 = require("@tamagui/core");
var import_get_token11 = __toESM(require_cjs10());
var React37 = __toESM(require("react"));
var import_jsx_runtime44 = require("react/jsx-runtime");
var TooltipContent = PopperContentFrame.extractable(
  React37.forwardRef(
    ({ __scopePopover, ...props }, ref) => {
      const popper = usePopperContext(), padding = props.padding ?? props.size ?? popper.size ?? (0, import_get_token11.getSize)("$true", {
        shift: -2
      });
      return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
        PopoverContent,
        {
          componentName: "Tooltip",
          disableRemoveScroll: true,
          disableFocusScope: true,
          ...!props.unstyled && {
            padding
          },
          ref,
          ...props
        }
      );
    }
  )
);
var TooltipArrow = React37.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(PopoverArrow, { componentName: "Tooltip", ref, ...props }));
var TooltipGroup = /* @__PURE__ */ __name(({ children, delay }) => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(FloatingDelayGroup, { delay: React37.useMemo(() => delay, [JSON.stringify(delay)]), children }), "TooltipGroup");
var TooltipComponent = React37.forwardRef(function(props, ref) {
  const {
    __scopePopover,
    children,
    delay: delayProp,
    restMs = typeof delayProp > "u" ? 500 : typeof delayProp == "number" ? delayProp : 0,
    onOpenChange: onOpenChangeProp,
    focus,
    open: openProp,
    ...restProps
  } = props, triggerRef = React37.useRef(null), [hasCustomAnchor, setHasCustomAnchor] = React37.useState(false), { delay: delayGroup, setCurrentId } = useDelayGroupContext(), delay = delayProp ?? delayGroup, [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: false,
    onChange: onOpenChangeProp
  }), id = props.groupId, onOpenChange = (0, import_core43.useEvent)((open2) => {
    open2 && setCurrentId(id), setOpen(open2);
  }), useFloatingFn = /* @__PURE__ */ __name((props2) => {
    const floating = useFloating3({
      ...props2,
      open,
      onOpenChange
    }), { getReferenceProps, getFloatingProps } = useInteractions([
      useHover(floating.context, { delay, restMs }),
      useFocus(floating.context, focus),
      useRole(floating.context, { role: "tooltip" }),
      useDismiss(floating.context),
      useDelayGroup(floating.context, { id })
    ]);
    return {
      ...floating,
      open,
      getReferenceProps,
      getFloatingProps
    };
  }, "useFloatingFn"), useFloatingContext2 = React37.useCallback(useFloatingFn, [id, delay, open]), onCustomAnchorAdd = React37.useCallback(() => setHasCustomAnchor(true), []), onCustomAnchorRemove = React37.useCallback(() => setHasCustomAnchor(false), []), contentId = React37.useId(), smallerSize = props.unstyled ? null : (0, import_get_token11.getSize)("$true", {
    shift: -2,
    bounds: [0]
  });
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(FloatingOverrideContext.Provider, { value: useFloatingContext2, children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Popper, { size: smallerSize == null ? void 0 : smallerSize.key, allowFlip: true, stayInFrame: true, ...restProps, children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    PopoverContext.Provider,
    {
      contentId,
      triggerRef,
      sheetBreakpoint: false,
      open,
      onOpenChange: setOpen,
      onOpenToggle: voidFn,
      hasCustomAnchor,
      onCustomAnchorAdd,
      onCustomAnchorRemove,
      children
    }
  ) }) });
});
var Tooltip2 = (0, import_core43.withStaticProperties)(TooltipComponent, {
  Anchor: PopoverAnchor,
  Arrow: TooltipArrow,
  Content: TooltipContent,
  Trigger: PopoverTrigger
});
var voidFn = /* @__PURE__ */ __name(() => {
}, "voidFn");

// ../../node_modules/@tamagui/tooltip/dist/esm/TooltipSimple.js
var import_jsx_runtime45 = require("react/jsx-runtime");
var TooltipSimple = /* @__PURE__ */ __name(({
  label,
  children,
  contentProps,
  ...tooltipProps
}) => {
  let context;
  try {
    context = useDelayGroupContext();
  } catch {
  }
  const contents = /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(Tooltip2, { offset: 18, ...tooltipProps, children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Tooltip2.Trigger, { asChild: true, children }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
      Tooltip2.Content,
      {
        zIndex: 1e9,
        enterStyle: { x: 0, y: -8, opacity: 0, scale: 0.93 },
        exitStyle: { x: 0, y: -8, opacity: 0, scale: 0.93 },
        x: 0,
        scale: 1,
        y: 0,
        elevation: "$1",
        opacity: 1,
        animateOnly: ["transform", "opacity"],
        animation: [
          "quick",
          {
            opacity: {
              overshootClamping: true
            }
          }
        ],
        ...contentProps,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Tooltip2.Arrow, {}),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Paragraph, { size: "$2", children: label })
        ]
      }
    )
  ] });
  return context ? contents : /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(TooltipGroup, { delay: defaultTooltipDelay, children: contents });
}, "TooltipSimple");
var defaultTooltipDelay = { open: 3e3, close: 100 };

// ../../node_modules/@tamagui/use-debounce/dist/esm/index.js
var import_react42 = require("react");
function debounce(func, wait, leading) {
  let timeout, isCancelled = false;
  function debounced() {
    isCancelled = false;
    const context = this, args = arguments;
    leading && !timeout && func.apply(context, args), clearTimeout(timeout), timeout = setTimeout(function() {
      timeout = null, leading || isCancelled || func.apply(context, args), isCancelled = false;
    }, wait);
  }
  __name(debounced, "debounced");
  return debounced.cancel = () => {
    isCancelled = true;
  }, debounced;
}
__name(debounce, "debounce");
var defaultOpts = { leading: false };
function useDebounce(fn, wait, options = defaultOpts, mountArgs = []) {
  const dbEffect = (0, import_react42.useRef)(null);
  return (0, import_react42.useEffect)(() => () => {
    var _a;
    (_a = dbEffect.current) == null ? void 0 : _a.cancel();
  }, []), (0, import_react42.useMemo)(() => (dbEffect.current = debounce(fn, wait, options.leading), dbEffect.current), [options.leading, ...mountArgs]);
}
__name(useDebounce, "useDebounce");
function useDebounceValue(val, amt = 0) {
  const [state, setState] = (0, import_react42.useState)(val);
  return (0, import_react42.useEffect)(() => {
    const tm = setTimeout(() => {
      setState((prev) => prev === val ? prev : val);
    }, amt);
    return () => {
      clearTimeout(tm);
    };
  }, [val]), state;
}
__name(useDebounceValue, "useDebounceValue");

// ../../node_modules/@tamagui/use-window-dimensions/dist/esm/index.js
var import_react43 = require("react");
var import_react_native11 = require("react-native-web-lite");
var initialValue = {
  height: 800,
  width: 600
};
function configureInitialWindowDimensions(next) {
  Object.assign(initialValue, next);
}
__name(configureInitialWindowDimensions, "configureInitialWindowDimensions");
import_react_native11.Dimensions.addEventListener("change", () => {
  cbs.forEach((cb) => cb(window));
});
var cbs = /* @__PURE__ */ new Set();
function subscribe(cb) {
  return cbs.add(cb), () => cbs.delete(cb);
}
__name(subscribe, "subscribe");
function useWindowDimensions2({
  serverValue = initialValue
} = {}) {
  return (0, import_react43.useSyncExternalStore)(
    subscribe,
    () => import_react_native11.Dimensions.get("window"),
    () => isWeb17 ? serverValue : import_react_native11.Dimensions.get("window")
  );
}
__name(useWindowDimensions2, "useWindowDimensions");

// ../../node_modules/@tamagui/visually-hidden/dist/esm/VisuallyHidden.js
var import_web15 = require("@tamagui/core");
var VisuallyHidden = (0, import_web15.styled)(import_web15.Stack, {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  zIndex: -1e4,
  overflow: "hidden",
  opacity: 1e-8,
  pointerEvents: "none",
  variants: {
    preserveDimensions: {
      true: {
        position: "relative",
        width: "auto",
        height: "auto"
      }
    },
    visible: {
      true: {
        position: "relative",
        width: "auto",
        height: "auto",
        margin: 0,
        zIndex: 1,
        overflow: "visible",
        opacity: 1,
        pointerEvents: "auto"
      }
    }
  }
});
VisuallyHidden.isVisuallyHidden = true;

// ../../node_modules/tamagui/dist/esm/createTamagui.js
var import_core44 = require("@tamagui/core");
var createTamagui = process.env.NODE_ENV !== "development" ? import_core44.createTamagui : (conf) => {
  const sizeTokenKeys = ["$true"], hasKeys = /* @__PURE__ */ __name((expectedKeys, obj) => expectedKeys.every((k) => typeof obj[k] < "u"), "hasKeys"), tamaguiConfig = (0, import_core44.createTamagui)(conf);
  for (const name of ["size", "space"]) {
    const tokenSet = tamaguiConfig.tokensParsed[name];
    if (!tokenSet)
      throw new Error(
        `Expected tokens for "${name}" in ${Object.keys(
          tamaguiConfig.tokensParsed
        ).join(", ")}`
      );
    if (!hasKeys(sizeTokenKeys, tokenSet))
      throw new Error(`
createTamagui() missing expected tokens.${name}:

Received: ${Object.keys(tokenSet).join(", ")}

Expected: ${sizeTokenKeys.join(", ")}

Tamagui expects a "true" key that is the same value as your default size. This is so 
it can size things up or down from the defaults without assuming which keys you use.

Please define a "true" or "$true" key on your size and space tokens like so (example):

size: {
  sm: 2,
  md: 10,
  true: 10, // this means "md" is your default size
  lg: 20,
}

`);
  }
  const expected = Object.keys(tamaguiConfig.tokensParsed.size);
  for (const name of ["radius", "zIndex"]) {
    const tokenSet = tamaguiConfig.tokensParsed[name], received = Object.keys(tokenSet);
    if (!received.some((rk) => expected.includes(rk)))
      throw new Error(`
createTamagui() invalid tokens.${name}:

Received: ${received.join(", ")}

Expected a subset of: ${expected.join(", ")}

`);
  }
  return tamaguiConfig;
};

// ../../node_modules/tamagui/dist/esm/views/TamaguiProvider.js
var import_core45 = require("@tamagui/core");
var import_jsx_runtime46 = require("react/jsx-runtime");
var TamaguiProvider = /* @__PURE__ */ __name(({ children, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_core45.TamaguiProvider, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(PortalProvider, { shouldAddRootHost: true, children }) }), "TamaguiProvider");

// ../../node_modules/tamagui/dist/esm/views/Anchor.js
var import_core46 = require("@tamagui/core");
var import_react_native12 = require("react-native-web-lite");
var import_jsx_runtime47 = require("react/jsx-runtime");
var AnchorFrame = (0, import_core46.styled)(SizableText, {
  name: "Anchor",
  tag: "a",
  accessibilityRole: "link"
});
var Anchor = AnchorFrame.styleable(
  ({ href, target, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
    AnchorFrame,
    {
      ...props,
      ...import_core46.isWeb ? {
        href,
        target
      } : {
        onPress: (event) => {
          var _a;
          (_a = props.onPress) == null ? void 0 : _a.call(props, event), href !== void 0 && import_react_native12.Linking.openURL(href);
        }
      },
      ref
    }
  )
);

// ../../node_modules/tamagui/dist/esm/views/EnsureFlexed.js
var import_core47 = require("@tamagui/core");
var EnsureFlexed = (0, import_core47.styled)(import_core47.Text, {
  opacity: 0,
  lineHeight: 0,
  height: 0,
  display: "flex",
  fontSize: 200,
  children: "wwwwwwwwwwwwwwwwwww",
  hoverStyle: {
    backgroundColor: "red"
  },
  pointerEvents: "none"
});
EnsureFlexed.isVisuallyHidden = true;

// ../../node_modules/tamagui/dist/esm/views/Fieldset.js
var import_core48 = require("@tamagui/core");
var Fieldset = (0, import_core48.styled)(YStack, {
  name: "Fieldset",
  tag: "fieldset",
  variants: {
    horizontal: {
      true: {
        flexDirection: "row",
        alignItems: "center"
      }
    }
  }
});

// ../../node_modules/tamagui/dist/esm/views/Input.js
var import_core50 = require("@tamagui/core");
var import_focusable4 = __toESM(require_cjs25());
var import_react_native13 = require("react-native-web-lite");

// ../../node_modules/tamagui/dist/esm/helpers/inputHelpers.js
var import_core49 = require("@tamagui/core");
var import_get_button_sized5 = __toESM(require_cjs11());
var import_get_font_sized3 = __toESM(require_cjs13());
var import_get_token12 = __toESM(require_cjs10());
var inputSizeVariant = /* @__PURE__ */ __name((val = "$true", extras) => {
  if (extras.props.multiline || extras.props.numberOfLines > 1)
    return textAreaSizeVariant(val, extras);
  const buttonStyles = (0, import_get_button_sized5.getButtonSized)(val, extras), paddingHorizontal = (0, import_get_token12.getSpace)(val, {
    shift: -1,
    bounds: [2]
  }), fontStyle = (0, import_get_font_sized3.getFontSized)(val, extras);
  return !import_core49.isWeb && fontStyle && delete fontStyle.lineHeight, {
    ...fontStyle,
    ...buttonStyles,
    paddingHorizontal
  };
}, "inputSizeVariant");
var textAreaSizeVariant = /* @__PURE__ */ __name((val = "$true", extras) => {
  const { props } = extras, buttonStyles = (0, import_get_button_sized5.getButtonSized)(val, extras), fontStyle = (0, import_get_font_sized3.getFontSized)(val, extras), lines = props.rows ?? props.numberOfLines, height = typeof lines == "number" ? lines * (0, import_core49.getVariableValue)(fontStyle.lineHeight) : "auto", paddingVertical = (0, import_get_token12.getSpace)(val, {
    shift: -2,
    bounds: [2]
  }), paddingHorizontal = (0, import_get_token12.getSpace)(val, {
    shift: -1,
    bounds: [2]
  });
  return {
    ...buttonStyles,
    ...fontStyle,
    paddingVertical,
    paddingHorizontal,
    height
  };
}, "textAreaSizeVariant");

// ../../node_modules/tamagui/dist/esm/views/Input.js
var import_jsx_runtime48 = require("react/jsx-runtime");
(0, import_core50.setupReactNative)({
  TextInput: import_react_native13.TextInput
});
var defaultStyles = {
  size: "$true",
  fontFamily: "$body",
  borderWidth: 1,
  outlineWidth: 0,
  color: "$color",
  ...import_core50.isWeb ? {
    tabIndex: 0
  } : {
    focusable: true
  },
  borderColor: "$borderColor",
  backgroundColor: "$background",
  // this fixes a flex bug where it overflows container
  minWidth: 0,
  hoverStyle: {
    borderColor: "$borderColorHover"
  },
  focusStyle: {
    outlineColor: "$borderColorFocus",
    outlineWidth: 2,
    outlineStyle: "solid",
    borderColor: "$borderColorFocus"
  }
};
var InputFrame = (0, import_core50.styled)(
  import_react_native13.TextInput,
  {
    name: "Input",
    variants: {
      unstyled: {
        false: defaultStyles
      },
      size: {
        "...size": inputSizeVariant
      }
    },
    defaultVariants: {
      unstyled: false
    }
  },
  {
    isInput: true
  }
);
var Input = InputFrame.styleable((propsIn, ref) => {
  const props = useInputProps(propsIn, ref);
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(InputFrame, { ...props });
});
function useInputProps(props, ref) {
  var _a, _b;
  const theme = (0, import_core50.useTheme)(), { onChangeText, ref: combinedRef } = (0, import_focusable4.useFocusable)({
    props,
    ref,
    isInput: true
  }), placeholderColorProp = props.placeholderTextColor, placeholderTextColor = ((_a = theme[placeholderColorProp]) == null ? void 0 : _a.get()) ?? placeholderColorProp ?? ((_b = theme.placeholderColor) == null ? void 0 : _b.get());
  return {
    ref: combinedRef,
    editable: !props.disabled,
    ...props,
    placeholderTextColor,
    onChangeText
  };
}
__name(useInputProps, "useInputProps");

// ../../node_modules/tamagui/dist/esm/views/Layouts.js
var import_core51 = require("@tamagui/core");
var Section = (0, import_core51.styled)(import_core51.Stack, {
  name: "Section",
  tag: "section",
  flexDirection: "column",
  accessibilityRole: "summary"
});
var Article = (0, import_core51.styled)(import_core51.Stack, {
  name: "Article",
  tag: "article",
  flexDirection: "column"
});
var Main = (0, import_core51.styled)(import_core51.Stack, {
  name: "Main",
  tag: "main",
  flexDirection: "column"
});
var Header = (0, import_core51.styled)(import_core51.Stack, {
  name: "Header",
  tag: "header",
  accessibilityRole: "header",
  flexDirection: "column"
});
var Aside = (0, import_core51.styled)(import_core51.Stack, {
  name: "Aside",
  tag: "aside",
  flexDirection: "column"
  // accessibilityRole: 'complementary',
});
var Footer = (0, import_core51.styled)(import_core51.Stack, {
  name: "Footer",
  tag: "footer",
  flexDirection: "column"
  // accessibilityRole: 'contentinfo',
});
var Nav = (0, import_core51.styled)(import_core51.Stack, {
  name: "Nav",
  tag: "nav",
  flexDirection: "column"
  // accessibilityRole: 'navigation',
});

// ../../node_modules/tamagui/dist/esm/views/Spinner.js
var import_core52 = require("@tamagui/core");
var React38 = __toESM(require("react"));
var import_react_native14 = require("react-native-web-lite");
var import_jsx_runtime49 = require("react/jsx-runtime");
var Spinner = YStack.extractable(
  (0, import_core52.themeable)(
    React38.forwardRef((props, ref) => {
      const { size: size2, color: colorProp, ...stackProps } = props, theme = (0, import_core52.useTheme)();
      let color = colorProp;
      return color && color[0] === "$" && (color = (0, import_core52.variableToString)(theme[color])), /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(YStack, { ref, ...stackProps, children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react_native14.ActivityIndicator, { size: size2, color }) });
    }),
    {
      componentName: "Spinner"
    }
  )
);

// ../../node_modules/tamagui/dist/esm/views/TextArea.js
var import_core53 = require("@tamagui/core");
var import_jsx_runtime50 = require("react/jsx-runtime");
var TextAreaFrame = (0, import_core53.styled)(InputFrame, {
  name: "TextArea",
  multiline: true,
  // this attribute fixes firefox newline issue
  whiteSpace: "pre-wrap",
  variants: {
    unstyled: {
      false: {
        height: "auto",
        ...defaultStyles
      }
    },
    size: {
      "...size": textAreaSizeVariant
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
var TextArea = TextAreaFrame.styleable((propsIn, ref) => {
  const props = useInputProps(propsIn, ref), linesProp = {
    // web uses rows now, but native not caught up :/
    [import_core53.isWeb ? "rows" : "numberOfLines"]: propsIn.unstyled ? void 0 : 4
  };
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(TextAreaFrame, { ...linesProp, ...props });
});

// ../../node_modules/tamagui/dist/esm/index.js
var import_core54 = require("@tamagui/core");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ACTIONS,
  Adapt,
  AdaptContents,
  AdaptParentContext,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  Anchor,
  AnimatePresence,
  AnimationDriverProvider,
  Article,
  Aside,
  Avatar,
  AvatarFallback,
  AvatarFallbackFrame,
  AvatarFrame,
  AvatarImage,
  BubbleInput,
  Button,
  ButtonContext,
  ButtonFrame,
  ButtonIcon,
  ButtonNestingContext,
  ButtonText,
  Card,
  CardBackground,
  CardFooter,
  CardFrame,
  CardHeader,
  Checkbox,
  CheckboxFrame,
  CheckboxStyledContext,
  Circle,
  ComponentContext,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogOverlayFrame,
  DialogPortal,
  DialogPortalFrame,
  DialogSheetContents,
  DialogTitle,
  DialogTrigger,
  DialogWarningProvider,
  DirectionalYStack,
  EnsureFlexed,
  Fieldset,
  FontLanguage,
  Footer,
  Form,
  FormFrame,
  FormProvider,
  FormTrigger,
  ForwardSelectContext,
  Frame,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Handle,
  Header,
  Heading,
  INITIAL_STATE,
  Input,
  InputFrame,
  Label,
  LabelFrame,
  Main,
  Nav,
  Overlay,
  Paragraph,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverContext,
  PopoverTrigger,
  Popper,
  PopperAnchor,
  PopperArrow,
  PopperContent,
  PopperContentFrame,
  PopperContext,
  Portal,
  PortalHost,
  PortalItem,
  PortalProvider,
  PresenceChild,
  PresenceContext,
  Progress,
  ProgressFrame,
  ProgressIndicator,
  ProgressIndicatorFrame,
  RadioGroup,
  Range,
  ScrollView,
  Section,
  Select,
  SelectGroupFrame,
  SelectIcon,
  SelectItemParentProvider,
  SelectItemTextFrame,
  SelectProvider,
  SelectSeparator,
  Separator,
  Sheet,
  SheetController,
  SheetControllerContext,
  SheetHandleFrame,
  SheetOverlayFrame,
  SizableStack,
  SizableText,
  Slider,
  SliderFrame,
  SliderThumb,
  SliderThumbFrame,
  SliderTrack,
  SliderTrackActive,
  SliderTrackActiveFrame,
  SliderTrackFrame,
  Spacer,
  Spinner,
  Square,
  Stack,
  Switch,
  SwitchFrame,
  SwitchThumb,
  Tabs,
  TamaguiProvider,
  Text,
  TextArea,
  TextAreaFrame,
  Theme,
  ThemeableStack,
  Thumb,
  ToggleGroup,
  Tooltip,
  TooltipGroup,
  TooltipSimple,
  Track,
  Unspaced,
  View,
  VisuallyHidden,
  XStack,
  YStack,
  ZStack,
  buttonStaticConfig,
  composeRefs,
  configureInitialWindowDimensions,
  createAlertDialogScope,
  createAvatarScope,
  createCheckboxScope,
  createComponent,
  createContext,
  createContextScope,
  createDialogScope,
  createFont,
  createProgressScope,
  createRadioGroupScope,
  createSelectContext,
  createSelectItemParentContext,
  createSelectItemParentScope,
  createSelectScope,
  createSheet,
  createSheetScope,
  createShorthands,
  createStyledContext,
  createSwitch,
  createTamagui,
  createTheme,
  createToggleGroupScope,
  createTokens,
  createVariable,
  debounce,
  defaultStyles,
  fullscreenStyle,
  getAnimationDriver,
  getConfig,
  getMedia,
  getShapeSize,
  getState,
  getStylesAtomic,
  getThemes,
  getToken,
  getTokenValue,
  getTokens,
  getVariable,
  getVariableName,
  getVariableValue,
  insertFont,
  isChrome,
  isClient,
  isIndeterminate,
  isPresent,
  isServer,
  isServerSide,
  isTamaguiComponent,
  isTamaguiElement,
  isTouchable,
  isVariable,
  isWeb,
  isWebTouchable,
  matchMedia,
  mediaObjectToString,
  mediaQueryConfig,
  mediaState,
  setupDev,
  setupNativeSheet,
  setupReactNative,
  spacedChildren,
  styled,
  themeable,
  themeableVariants,
  useAdaptParent,
  useButton,
  useComposedRefs,
  useControllableState,
  useDebounce,
  useDebounceValue,
  useDidFinishSSR,
  useEvent,
  useFloatingContext,
  useForceUpdate,
  useFormContext,
  useGet,
  useInputProps,
  useIsPresent,
  useIsTouchDevice,
  useIsomorphicLayoutEffect,
  useLabelContext,
  useMedia,
  useMediaPropsActive,
  usePopoverContext,
  usePopperContext,
  usePortal,
  usePresence,
  useProps,
  useSelectContext,
  useSelectItemParentContext,
  useSheet,
  useSheetController,
  useStyle,
  useTheme,
  useThemeName,
  useWindowDimensions,
  variableToString,
  withStaticProperties,
  wrapChildrenInText
});
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

tabbable/dist/index.js:
  (*!
  * tabbable 6.2.0
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)
*/
