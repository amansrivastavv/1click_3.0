module.exports = [
"[project]/Downloads/One click/node_modules/@rc-component/context/es/context.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createContext",
    ()=>createContext,
    "useContext",
    ()=>useContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useEvent.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useLayoutEffect.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$isEqual$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/isEqual.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-dom [external] (react-dom, cjs)");
;
;
;
;
;
;
function createContext(defaultValue) {
    var Context = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"](undefined);
    var Provider = function Provider(_ref) {
        var value = _ref.value, children = _ref.children;
        var valueRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"](value);
        valueRef.current = value;
        var _React$useState = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](function() {
            return {
                getValue: function getValue() {
                    return valueRef.current;
                },
                listeners: new Set()
            };
        }), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 1), context = _React$useState2[0];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__["unstable_batchedUpdates"])(function() {
                context.listeners.forEach(function(listener) {
                    listener(value);
                });
            });
        }, [
            value
        ]);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](Context.Provider, {
            value: context
        }, children);
    };
    return {
        Context: Context,
        Provider: Provider,
        defaultValue: defaultValue
    };
}
function useContext(holder, selector) {
    var eventSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(typeof selector === 'function' ? selector : function(ctx) {
        if (selector === undefined) {
            return ctx;
        }
        if (!Array.isArray(selector)) {
            return ctx[selector];
        }
        var obj = {};
        selector.forEach(function(key) {
            obj[key] = ctx[key];
        });
        return obj;
    });
    var context = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](holder === null || holder === void 0 ? void 0 : holder.Context);
    var _ref2 = context || {}, listeners = _ref2.listeners, getValue = _ref2.getValue;
    var valueRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"]();
    valueRef.current = eventSelector(context ? getValue() : holder === null || holder === void 0 ? void 0 : holder.defaultValue);
    var _React$useState3 = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"]({}), _React$useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState3, 2), forceUpdate = _React$useState4[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        if (!context) {
            return;
        }
        function trigger(nextValue) {
            var nextSelectorValue = eventSelector(nextValue);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$isEqual$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(valueRef.current, nextSelectorValue, true)) {
                forceUpdate({});
            }
        }
        listeners.add(trigger);
        return function() {
            listeners.delete(trigger);
        };
    }, [
        context
    ]);
    return valueRef.current;
}
}),
"[project]/Downloads/One click/node_modules/@rc-component/context/es/Immutable.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createImmutable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/ref.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
function createImmutable() {
    var ImmutableContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"](null);
    /**
   * Get render update mark by `makeImmutable` root.
   * Do not deps on the return value as render times
   * but only use for `useMemo` or `useCallback` deps.
   */ function useImmutableMark() {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](ImmutableContext);
    }
    /**
  * Wrapped Component will be marked as Immutable.
  * When Component parent trigger render,
  * it will notice children component (use with `responseImmutable`) node that parent has updated.
  * @param Component Passed Component
  * @param triggerRender Customize trigger `responseImmutable` children re-render logic. Default will always trigger re-render when this component re-render.
  */ function makeImmutable(Component, shouldTriggerRender) {
        var refAble = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supportRef"])(Component);
        var ImmutableComponent = function ImmutableComponent(props, ref) {
            var refProps = refAble ? {
                ref: ref
            } : {};
            var renderTimesRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"](0);
            var prevProps = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"](props);
            // If parent has the context, we do not wrap it
            var mark = useImmutableMark();
            if (mark !== null) {
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](Component, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, refProps));
            }
            if (// Always trigger re-render if not provide `notTriggerRender`
            !shouldTriggerRender || shouldTriggerRender(prevProps.current, props)) {
                renderTimesRef.current += 1;
            }
            prevProps.current = props;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](ImmutableContext.Provider, {
                value: renderTimesRef.current
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](Component, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, refProps)));
        };
        if ("TURBOPACK compile-time truthy", 1) {
            ImmutableComponent.displayName = "ImmutableRoot(".concat(Component.displayName || Component.name, ")");
        }
        return refAble ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](ImmutableComponent) : ImmutableComponent;
    }
    /**
   * Wrapped Component with `React.memo`.
   * But will rerender when parent with `makeImmutable` rerender.
   */ function responseImmutable(Component, propsAreEqual) {
        var refAble = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supportRef"])(Component);
        var ImmutableComponent = function ImmutableComponent(props, ref) {
            var refProps = refAble ? {
                ref: ref
            } : {};
            useImmutableMark();
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](Component, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, refProps));
        };
        if ("TURBOPACK compile-time truthy", 1) {
            ImmutableComponent.displayName = "ImmutableResponse(".concat(Component.displayName || Component.name, ")");
        }
        return refAble ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["memo"](/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](ImmutableComponent), propsAreEqual) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["memo"](ImmutableComponent, propsAreEqual);
    }
    return {
        makeImmutable: makeImmutable,
        responseImmutable: responseImmutable,
        useImmutableMark: useImmutableMark
    };
}
}),
"[project]/Downloads/One click/node_modules/@rc-component/context/es/index.js [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeImmutable",
    ()=>makeImmutable,
    "responseImmutable",
    ()=>responseImmutable,
    "useImmutableMark",
    ()=>useImmutableMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$context$2f$es$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@rc-component/context/es/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$context$2f$es$2f$Immutable$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@rc-component/context/es/Immutable.js [ssr] (ecmascript)");
;
;
// For legacy usage, we export it directly
var _createImmutable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$context$2f$es$2f$Immutable$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(), makeImmutable = _createImmutable.makeImmutable, responseImmutable = _createImmutable.responseImmutable, useImmutableMark = _createImmutable.useImmutableMark;
;
}),
"[project]/Downloads/One click/node_modules/@rc-component/context/es/Immutable.js [ssr] (ecmascript) <export default as createImmutable>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImmutable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$context$2f$es$2f$Immutable$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$context$2f$es$2f$Immutable$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@rc-component/context/es/Immutable.js [ssr] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/rc-util/es/Dom/styleChecker.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isStyleSupport",
    ()=>isStyleSupport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Dom/canUseDom.js [ssr] (ecmascript)");
;
var isStyleNameSupport = function isStyleNameSupport(styleName) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])() && window.document.documentElement) {
        var styleNameList = Array.isArray(styleName) ? styleName : [
            styleName
        ];
        var documentElement = window.document.documentElement;
        return styleNameList.some(function(name) {
            return name in documentElement.style;
        });
    }
    return false;
};
var isStyleValueSupport = function isStyleValueSupport(styleName, value) {
    if (!isStyleNameSupport(styleName)) {
        return false;
    }
    var ele = document.createElement('div');
    var origin = ele.style[styleName];
    ele.style[styleName] = value;
    return ele.style[styleName] !== origin;
};
function isStyleSupport(styleName, styleValue) {
    if (!Array.isArray(styleName) && styleValue !== undefined) {
        return isStyleValueSupport(styleName, styleValue);
    }
    return isStyleNameSupport(styleName);
}
}),
"[project]/Downloads/One click/node_modules/rc-util/es/Dom/addEventListener.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>addEventListenerWrap
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-dom [external] (react-dom, cjs)");
;
function addEventListenerWrap(target, eventType, cb, option) {
    /* eslint camelcase: 2 */ var callback = __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__["default"].unstable_batchedUpdates ? function run(e) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__["default"].unstable_batchedUpdates(cb, e);
    } : cb;
    if (target !== null && target !== void 0 && target.addEventListener) {
        target.addEventListener(eventType, callback, option);
    }
    return {
        remove: function remove() {
            if (target !== null && target !== void 0 && target.removeEventListener) {
                target.removeEventListener(eventType, callback, option);
            }
        }
    };
}
}),
"[project]/Downloads/One click/node_modules/rc-util/es/composeProps.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [ssr] (ecmascript)");
;
function composeProps(originProps, patchProps, isAll) {
    var composedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, originProps), isAll ? patchProps : {});
    Object.keys(patchProps).forEach(function(key) {
        var func = patchProps[key];
        if (typeof func === 'function') {
            composedProps[key] = function() {
                var _originProps$key;
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                func.apply(void 0, args);
                return (_originProps$key = originProps[key]) === null || _originProps$key === void 0 ? void 0 : _originProps$key.call.apply(_originProps$key, [
                    originProps
                ].concat(args));
            };
        }
    });
    return composedProps;
}
const __TURBOPACK__default__export__ = composeProps;
}),
"[project]/Downloads/One click/node_modules/rc-util/es/utils/get.js [ssr] (ecmascript) <export default as get>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "get",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$utils$2f$get$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$utils$2f$get$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/utils/get.js [ssr] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/rc-util/es/utils/set.js [ssr] (ecmascript) <export default as set>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "set",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$utils$2f$set$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$utils$2f$set$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/utils/set.js [ssr] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/rc-virtual-list/es/Filler.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-resize-observer/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
;
;
;
;
;
;
/**
 * Fill component to provided the scroll content real height.
 */ var Filler = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](function(_ref, ref) {
    var height = _ref.height, offsetY = _ref.offsetY, offsetX = _ref.offsetX, children = _ref.children, prefixCls = _ref.prefixCls, onInnerResize = _ref.onInnerResize, innerProps = _ref.innerProps, rtl = _ref.rtl, extra = _ref.extra;
    var outerStyle = {};
    var innerStyle = {
        display: 'flex',
        flexDirection: 'column'
    };
    if (offsetY !== undefined) {
        // Not set `width` since this will break `sticky: right`
        outerStyle = {
            height: height,
            position: 'relative',
            overflow: 'hidden'
        };
        innerStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, innerStyle), {}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
            transform: "translateY(".concat(offsetY, "px)")
        }, rtl ? 'marginRight' : 'marginLeft', -offsetX), "position", 'absolute'), "left", 0), "right", 0), "top", 0));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        style: outerStyle
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        onResize: function onResize(_ref2) {
            var offsetHeight = _ref2.offsetHeight;
            if (offsetHeight && onInnerResize) {
                onInnerResize();
            }
        }
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        style: innerStyle,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-holder-inner"), prefixCls)),
        ref: ref
    }, innerProps), children, extra)));
});
Filler.displayName = 'Filler';
const __TURBOPACK__default__export__ = Filler;
}),
"[project]/Downloads/One click/node_modules/rc-virtual-list/es/Item.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Item",
    ()=>Item
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
function Item(_ref) {
    var children = _ref.children, setRef = _ref.setRef;
    var refFunc = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"](function(node) {
        setRef(node);
    }, []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["cloneElement"](children, {
        ref: refFunc
    });
}
}),
"[project]/Downloads/One click/node_modules/rc-virtual-list/es/hooks/useChildren.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useChildren
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$Item$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-virtual-list/es/Item.js [ssr] (ecmascript)");
;
;
function useChildren(list, startIndex, endIndex, scrollWidth, offsetX, setNodeRef, renderFunc, _ref) {
    var getKey = _ref.getKey;
    return list.slice(startIndex, endIndex + 1).map(function(item, index) {
        var eleIndex = startIndex + index;
        var node = renderFunc(item, eleIndex, {
            style: {
                width: scrollWidth
            },
            offsetX: offsetX
        });
        var key = getKey(item);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$Item$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Item"], {
            key: key,
            setRef: function setRef(ele) {
                return setNodeRef(item, ele);
            }
        }, node);
    });
}
}),
"[project]/Downloads/One click/node_modules/rc-virtual-list/es/utils/algorithmUtil.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Get index with specific start index one by one. e.g.
 * min: 3, max: 9, start: 6
 *
 * Return index is:
 * [0]: 6
 * [1]: 7
 * [2]: 5
 * [3]: 8
 * [4]: 4
 * [5]: 9
 * [6]: 3
 */ __turbopack_context__.s([
    "findListDiffIndex",
    ()=>findListDiffIndex,
    "getIndexByStartLoc",
    ()=>getIndexByStartLoc
]);
function getIndexByStartLoc(min, max, start, index) {
    var beforeCount = start - min;
    var afterCount = max - start;
    var balanceCount = Math.min(beforeCount, afterCount) * 2;
    // Balance
    if (index <= balanceCount) {
        var stepIndex = Math.floor(index / 2);
        if (index % 2) {
            return start + stepIndex + 1;
        }
        return start - stepIndex;
    }
    // One is out of range
    if (beforeCount > afterCount) {
        return start - (index - afterCount);
    }
    return start + (index - beforeCount);
}
function findListDiffIndex(originList, targetList, getKey) {
    var originLen = originList.length;
    var targetLen = targetList.length;
    var shortList;
    var longList;
    if (originLen === 0 && targetLen === 0) {
        return null;
    }
    if (originLen < targetLen) {
        shortList = originList;
        longList = targetList;
    } else {
        shortList = targetList;
        longList = originList;
    }
    var notExistKey = {
        __EMPTY_ITEM__: true
    };
    function getItemKey(item) {
        if (item !== undefined) {
            return getKey(item);
        }
        return notExistKey;
    }
    // Loop to find diff one
    var diffIndex = null;
    var multiple = Math.abs(originLen - targetLen) !== 1;
    for(var i = 0; i < longList.length; i += 1){
        var shortKey = getItemKey(shortList[i]);
        var longKey = getItemKey(longList[i]);
        if (shortKey !== longKey) {
            diffIndex = i;
            multiple = multiple || shortKey !== getItemKey(longList[i + 1]);
            break;
        }
    }
    return diffIndex === null ? null : {
        index: diffIndex,
        multiple: multiple
    };
}
}),
"[project]/Downloads/One click/node_modules/rc-virtual-list/es/hooks/useDiffItem.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useDiffItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$utils$2f$algorithmUtil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-virtual-list/es/utils/algorithmUtil.js [ssr] (ecmascript)");
;
;
;
function useDiffItem(data, getKey, onDiff) {
    var _React$useState = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](data), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), prevData = _React$useState2[0], setPrevData = _React$useState2[1];
    var _React$useState3 = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](null), _React$useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState3, 2), diffItem = _React$useState4[0], setDiffItem = _React$useState4[1];
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](function() {
        var diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$utils$2f$algorithmUtil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["findListDiffIndex"])(prevData || [], data || [], getKey);
        if ((diff === null || diff === void 0 ? void 0 : diff.index) !== undefined) {
            onDiff === null || onDiff === void 0 || onDiff(diff.index);
            setDiffItem(data[diff.index]);
        }
        setPrevData(data);
    }, [
        data
    ]);
    return [
        diffItem
    ];
}
}),
"[project]/Downloads/One click/node_modules/rc-virtual-list/es/utils/isFirefox.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [ssr] (ecmascript)");
;
var isFF = (typeof navigator === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(navigator)) === 'object' && /Firefox/i.test(navigator.userAgent);
const __TURBOPACK__default__export__ = isFF;
}),
"[project]/Downloads/One click/node_modules/rc-virtual-list/es/hooks/useOriginScroll.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
const __TURBOPACK__default__export__ = function(isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight) {
    // Do lock for a wheel when scrolling
    var lockRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    var lockTimeoutRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    function lockScroll() {
        clearTimeout(lockTimeoutRef.current);
        lockRef.current = true;
        lockTimeoutRef.current = setTimeout(function() {
            lockRef.current = false;
        }, 50);
    }
    // Pass to ref since global add is in closure
    var scrollPingRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])({
        top: isScrollAtTop,
        bottom: isScrollAtBottom,
        left: isScrollAtLeft,
        right: isScrollAtRight
    });
    scrollPingRef.current.top = isScrollAtTop;
    scrollPingRef.current.bottom = isScrollAtBottom;
    scrollPingRef.current.left = isScrollAtLeft;
    scrollPingRef.current.right = isScrollAtRight;
    return function(isHorizontal, delta) {
        var smoothOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var originScroll = isHorizontal ? // Pass origin wheel when on the left
        delta < 0 && scrollPingRef.current.left || // Pass origin wheel when on the right
        delta > 0 && scrollPingRef.current.right // Pass origin wheel when on the top
         : delta < 0 && scrollPingRef.current.top || // Pass origin wheel when on the bottom
        delta > 0 && scrollPingRef.current.bottom;
        if (smoothOffset && originScroll) {
            // No need lock anymore when it's smooth offset from touchMove interval
            clearTimeout(lockTimeoutRef.current);
            lockRef.current = false;
        } else if (!originScroll || lockRef.current) {
            lockScroll();
        }
        return !lockRef.current && originScroll;
    };
};
}),
"[project]/Downloads/One click/node_modules/rc-virtual-list/es/hooks/useFrameWheel.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useFrameWheel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/raf.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$utils$2f$isFirefox$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-virtual-list/es/utils/isFirefox.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useOriginScroll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-virtual-list/es/hooks/useOriginScroll.js [ssr] (ecmascript)");
;
;
;
;
function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight, horizontalScroll, /***
 * Return `true` when you need to prevent default event
 */ onWheelDelta) {
    var offsetRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(0);
    var nextFrameRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    // Firefox patch
    var wheelValueRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    var isMouseScrollRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    // Scroll status sync
    var originScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useOriginScroll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight);
    function onWheelY(e, deltaY) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].cancel(nextFrameRef.current);
        // Do nothing when scroll at the edge, Skip check when is in scroll
        if (originScroll(false, deltaY)) return;
        // Skip if nest List has handled this event
        var event = e;
        if (!event._virtualHandled) {
            event._virtualHandled = true;
        } else {
            return;
        }
        offsetRef.current += deltaY;
        wheelValueRef.current = deltaY;
        // Proxy of scroll events
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$utils$2f$isFirefox$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]) {
            event.preventDefault();
        }
        nextFrameRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
            // Patch a multiple for Firefox to fix wheel number too small
            // ref: https://github.com/ant-design/ant-design/issues/26372#issuecomment-679460266
            var patchMultiple = isMouseScrollRef.current ? 10 : 1;
            onWheelDelta(offsetRef.current * patchMultiple, false);
            offsetRef.current = 0;
        });
    }
    function onWheelX(event, deltaX) {
        onWheelDelta(deltaX, true);
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$utils$2f$isFirefox$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]) {
            event.preventDefault();
        }
    }
    // Check for which direction does wheel do. `sx` means `shift + wheel`
    var wheelDirectionRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    var wheelDirectionCleanRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    function onWheel(event) {
        if (!inVirtual) return;
        // Wait for 2 frame to clean direction
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].cancel(wheelDirectionCleanRef.current);
        wheelDirectionCleanRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
            wheelDirectionRef.current = null;
        }, 2);
        var deltaX = event.deltaX, deltaY = event.deltaY, shiftKey = event.shiftKey;
        var mergedDeltaX = deltaX;
        var mergedDeltaY = deltaY;
        if (wheelDirectionRef.current === 'sx' || !wheelDirectionRef.current && (shiftKey || false) && deltaY && !deltaX) {
            mergedDeltaX = deltaY;
            mergedDeltaY = 0;
            wheelDirectionRef.current = 'sx';
        }
        var absX = Math.abs(mergedDeltaX);
        var absY = Math.abs(mergedDeltaY);
        if (wheelDirectionRef.current === null) {
            wheelDirectionRef.current = horizontalScroll && absX > absY ? 'x' : 'y';
        }
        if (wheelDirectionRef.current === 'y') {
            onWheelY(event, mergedDeltaY);
        } else {
            onWheelX(event, mergedDeltaX);
        }
    }
    // A patch for firefox
    function onFireFoxScroll(event) {
        if (!inVirtual) return;
        isMouseScrollRef.current = event.detail === wheelValueRef.current;
    }
    return [
        onWheel,
        onFireFoxScroll
    ];
}
}),
"[project]/Downloads/One click/node_modules/rc-virtual-list/es/hooks/useGetSize.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGetSize",
    ()=>useGetSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
function useGetSize(mergedData, getKey, heights, itemHeight) {
    var _React$useMemo = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](function() {
        return [
            new Map(),
            []
        ];
    }, [
        mergedData,
        heights.id,
        itemHeight
    ]), _React$useMemo2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useMemo, 2), key2Index = _React$useMemo2[0], bottomList = _React$useMemo2[1];
    var getSize = function getSize(startKey) {
        var endKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : startKey;
        // Get from cache first
        var startIndex = key2Index.get(startKey);
        var endIndex = key2Index.get(endKey);
        // Loop to fill the cache
        if (startIndex === undefined || endIndex === undefined) {
            var dataLen = mergedData.length;
            for(var i = bottomList.length; i < dataLen; i += 1){
                var _heights$get;
                var item = mergedData[i];
                var key = getKey(item);
                key2Index.set(key, i);
                var cacheHeight = (_heights$get = heights.get(key)) !== null && _heights$get !== void 0 ? _heights$get : itemHeight;
                bottomList[i] = (bottomList[i - 1] || 0) + cacheHeight;
                if (key === startKey) {
                    startIndex = i;
                }
                if (key === endKey) {
                    endIndex = i;
                }
                if (startIndex !== undefined && endIndex !== undefined) {
                    break;
                }
            }
        }
        return {
            top: bottomList[startIndex - 1] || 0,
            bottom: bottomList[endIndex]
        };
    };
    return getSize;
}
}),
"[project]/Downloads/One click/node_modules/rc-virtual-list/es/utils/CacheMap.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/createClass.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [ssr] (ecmascript)");
;
;
;
// Firefox has low performance of map.
var CacheMap = /*#__PURE__*/ function() {
    function CacheMap() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(this, CacheMap);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(this, "maps", void 0);
        // Used for cache key
        // `useMemo` no need to update if `id` not change
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(this, "id", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(this, "diffRecords", new Map());
        this.maps = Object.create(null);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(CacheMap, [
        {
            key: "set",
            value: function set(key, value) {
                // Record prev value
                this.diffRecords.set(key, this.maps[key]);
                this.maps[key] = value;
                this.id += 1;
            }
        },
        {
            key: "get",
            value: function get(key) {
                return this.maps[key];
            }
        },
        {
            key: "resetRecord",
            value: function resetRecord() {
                this.diffRecords.clear();
            }
        },
        {
            key: "getRecord",
            value: function getRecord() {
                return this.diffRecords;
            }
        }
    ]);
    return CacheMap;
}();
const __TURBOPACK__default__export__ = CacheMap;
}),
"[project]/Downloads/One click/node_modules/rc-virtual-list/es/hooks/useHeights.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useHeights
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$utils$2f$CacheMap$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-virtual-list/es/utils/CacheMap.js [ssr] (ecmascript)");
;
;
;
;
function parseNumber(value) {
    var num = parseFloat(value);
    return isNaN(num) ? 0 : num;
}
function useHeights(getKey, onItemAdd, onItemRemove) {
    var _React$useState = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](0), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), updatedMark = _React$useState2[0], setUpdatedMark = _React$useState2[1];
    var instanceRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(new Map());
    var heightsRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$utils$2f$CacheMap$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]());
    var promiseIdRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(0);
    function cancelRaf() {
        promiseIdRef.current += 1;
    }
    function collectHeight() {
        var sync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        cancelRaf();
        var doCollect = function doCollect() {
            var changed = false;
            instanceRef.current.forEach(function(element, key) {
                if (element && element.offsetParent) {
                    var offsetHeight = element.offsetHeight;
                    var _getComputedStyle = getComputedStyle(element), marginTop = _getComputedStyle.marginTop, marginBottom = _getComputedStyle.marginBottom;
                    var marginTopNum = parseNumber(marginTop);
                    var marginBottomNum = parseNumber(marginBottom);
                    var totalHeight = offsetHeight + marginTopNum + marginBottomNum;
                    if (heightsRef.current.get(key) !== totalHeight) {
                        heightsRef.current.set(key, totalHeight);
                        changed = true;
                    }
                }
            });
            // Always trigger update mark to tell parent that should re-calculate heights when resized
            if (changed) {
                setUpdatedMark(function(c) {
                    return c + 1;
                });
            }
        };
        if (sync) {
            doCollect();
        } else {
            promiseIdRef.current += 1;
            var id = promiseIdRef.current;
            Promise.resolve().then(function() {
                if (id === promiseIdRef.current) {
                    doCollect();
                }
            });
        }
    }
    function setInstanceRef(item, instance) {
        var key = getKey(item);
        var origin = instanceRef.current.get(key);
        if (instance) {
            instanceRef.current.set(key, instance);
            collectHeight();
        } else {
            instanceRef.current.delete(key);
        }
        // Instance changed
        if (!origin !== !instance) {
            if (instance) {
                onItemAdd === null || onItemAdd === void 0 || onItemAdd(item);
            } else {
                onItemRemove === null || onItemRemove === void 0 || onItemRemove(item);
            }
        }
    }
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(function() {
        return cancelRaf;
    }, []);
    return [
        setInstanceRef,
        collectHeight,
        heightsRef.current,
        updatedMark
    ];
}
}),
"[project]/Downloads/One click/node_modules/rc-virtual-list/es/hooks/useMobileTouchMove.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useMobileTouchMove
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useLayoutEffect.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
var SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
    var touchedRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    var touchXRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(0);
    var touchYRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(0);
    var elementRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    // Smooth scroll
    var intervalRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    /* eslint-disable prefer-const */ var cleanUpEvents;
    var onTouchMove = function onTouchMove(e) {
        if (touchedRef.current) {
            var currentX = Math.ceil(e.touches[0].pageX);
            var currentY = Math.ceil(e.touches[0].pageY);
            var offsetX = touchXRef.current - currentX;
            var offsetY = touchYRef.current - currentY;
            var _isHorizontal = Math.abs(offsetX) > Math.abs(offsetY);
            if (_isHorizontal) {
                touchXRef.current = currentX;
            } else {
                touchYRef.current = currentY;
            }
            var scrollHandled = callback(_isHorizontal, _isHorizontal ? offsetX : offsetY, false, e);
            if (scrollHandled) {
                e.preventDefault();
            }
            // Smooth interval
            clearInterval(intervalRef.current);
            if (scrollHandled) {
                intervalRef.current = setInterval(function() {
                    if (_isHorizontal) {
                        offsetX *= SMOOTH_PTG;
                    } else {
                        offsetY *= SMOOTH_PTG;
                    }
                    var offset = Math.floor(_isHorizontal ? offsetX : offsetY);
                    if (!callback(_isHorizontal, offset, true) || Math.abs(offset) <= 0.1) {
                        clearInterval(intervalRef.current);
                    }
                }, 16);
            }
        }
    };
    var onTouchEnd = function onTouchEnd() {
        touchedRef.current = false;
        cleanUpEvents();
    };
    var onTouchStart = function onTouchStart(e) {
        cleanUpEvents();
        if (e.touches.length === 1 && !touchedRef.current) {
            touchedRef.current = true;
            touchXRef.current = Math.ceil(e.touches[0].pageX);
            touchYRef.current = Math.ceil(e.touches[0].pageY);
            elementRef.current = e.target;
            elementRef.current.addEventListener('touchmove', onTouchMove, {
                passive: false
            });
            elementRef.current.addEventListener('touchend', onTouchEnd, {
                passive: true
            });
        }
    };
    cleanUpEvents = function cleanUpEvents() {
        if (elementRef.current) {
            elementRef.current.removeEventListener('touchmove', onTouchMove);
            elementRef.current.removeEventListener('touchend', onTouchEnd);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        if (inVirtual) {
            listRef.current.addEventListener('touchstart', onTouchStart, {
                passive: true
            });
        }
        return function() {
            var _listRef$current;
            (_listRef$current = listRef.current) === null || _listRef$current === void 0 || _listRef$current.removeEventListener('touchstart', onTouchStart);
            cleanUpEvents();
            clearInterval(intervalRef.current);
        };
    }, [
        inVirtual
    ]);
}
}),
"[project]/Downloads/One click/node_modules/rc-virtual-list/es/hooks/useScrollDrag.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useScrollDrag,
    "getPageXY",
    ()=>getPageXY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/raf.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
function smoothScrollOffset(offset) {
    return Math.floor(Math.pow(offset, 0.5));
}
function getPageXY(e, horizontal) {
    var obj = 'touches' in e ? e.touches[0] : e;
    return obj[horizontal ? 'pageX' : 'pageY'] - window[horizontal ? 'scrollX' : 'scrollY'];
}
function useScrollDrag(inVirtual, componentRef, onScrollOffset) {
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](function() {
        var ele = componentRef.current;
        if (inVirtual && ele) {
            var mouseDownLock = false;
            var rafId;
            var _offset;
            var stopScroll = function stopScroll() {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].cancel(rafId);
            };
            var continueScroll = function continueScroll() {
                stopScroll();
                rafId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
                    onScrollOffset(_offset);
                    continueScroll();
                });
            };
            var onMouseDown = function onMouseDown(e) {
                // Skip if element set draggable
                if (e.target.draggable || e.button !== 0) {
                    return;
                }
                // Skip if nest List has handled this event
                var event = e;
                if (!event._virtualHandled) {
                    event._virtualHandled = true;
                    mouseDownLock = true;
                }
            };
            var onMouseUp = function onMouseUp() {
                mouseDownLock = false;
                stopScroll();
            };
            var onMouseMove = function onMouseMove(e) {
                if (mouseDownLock) {
                    var mouseY = getPageXY(e, false);
                    var _ele$getBoundingClien = ele.getBoundingClientRect(), top = _ele$getBoundingClien.top, bottom = _ele$getBoundingClien.bottom;
                    if (mouseY <= top) {
                        var diff = top - mouseY;
                        _offset = -smoothScrollOffset(diff);
                        continueScroll();
                    } else if (mouseY >= bottom) {
                        var _diff = mouseY - bottom;
                        _offset = smoothScrollOffset(_diff);
                        continueScroll();
                    } else {
                        stopScroll();
                    }
                }
            };
            ele.addEventListener('mousedown', onMouseDown);
            ele.ownerDocument.addEventListener('mouseup', onMouseUp);
            ele.ownerDocument.addEventListener('mousemove', onMouseMove);
            return function() {
                ele.removeEventListener('mousedown', onMouseDown);
                ele.ownerDocument.removeEventListener('mouseup', onMouseUp);
                ele.ownerDocument.removeEventListener('mousemove', onMouseMove);
                stopScroll();
            };
        }
    }, [
        inVirtual
    ]);
}
}),
"[project]/Downloads/One click/node_modules/rc-virtual-list/es/hooks/useScrollTo.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useScrollTo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [ssr] (ecmascript)");
/* eslint-disable no-param-reassign */ var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/raf.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useLayoutEffect.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__warning$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/warning.js [ssr] (ecmascript) <export default as warning>");
;
;
;
;
;
;
;
var MAX_TIMES = 10;
function useScrollTo(containerRef, data, heights, itemHeight, getKey, collectHeight, syncScrollTop, triggerFlash) {
    var scrollRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"]();
    var _React$useState = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](null), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), syncState = _React$useState2[0], setSyncState = _React$useState2[1];
    // ========================== Sync Scroll ==========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        if (syncState && syncState.times < MAX_TIMES) {
            // Never reach
            if (!containerRef.current) {
                setSyncState(function(ori) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, ori);
                });
                return;
            }
            collectHeight();
            var targetAlign = syncState.targetAlign, originAlign = syncState.originAlign, index = syncState.index, offset = syncState.offset;
            var height = containerRef.current.clientHeight;
            var needCollectHeight = false;
            var newTargetAlign = targetAlign;
            var targetTop = null;
            // Go to next frame if height not exist
            if (height) {
                var mergedAlign = targetAlign || originAlign;
                // Get top & bottom
                var stackTop = 0;
                var itemTop = 0;
                var itemBottom = 0;
                var maxLen = Math.min(data.length - 1, index);
                for(var i = 0; i <= maxLen; i += 1){
                    var key = getKey(data[i]);
                    itemTop = stackTop;
                    var cacheHeight = heights.get(key);
                    itemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
                    stackTop = itemBottom;
                }
                // Check if need sync height (visible range has item not record height)
                var leftHeight = mergedAlign === 'top' ? offset : height - offset;
                for(var _i = maxLen; _i >= 0; _i -= 1){
                    var _key = getKey(data[_i]);
                    var _cacheHeight = heights.get(_key);
                    if (_cacheHeight === undefined) {
                        needCollectHeight = true;
                        break;
                    }
                    leftHeight -= _cacheHeight;
                    if (leftHeight <= 0) {
                        break;
                    }
                }
                // Scroll to
                switch(mergedAlign){
                    case 'top':
                        targetTop = itemTop - offset;
                        break;
                    case 'bottom':
                        targetTop = itemBottom - height + offset;
                        break;
                    default:
                        {
                            var scrollTop = containerRef.current.scrollTop;
                            var scrollBottom = scrollTop + height;
                            if (itemTop < scrollTop) {
                                newTargetAlign = 'top';
                            } else if (itemBottom > scrollBottom) {
                                newTargetAlign = 'bottom';
                            }
                        }
                }
                if (targetTop !== null) {
                    syncScrollTop(targetTop);
                }
                // One more time for sync
                if (targetTop !== syncState.lastTop) {
                    needCollectHeight = true;
                }
            }
            // Trigger next effect
            if (needCollectHeight) {
                setSyncState((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, syncState), {}, {
                    times: syncState.times + 1,
                    targetAlign: newTargetAlign,
                    lastTop: targetTop
                }));
            }
        } else if (("TURBOPACK compile-time value", "development") !== 'production' && (syncState === null || syncState === void 0 ? void 0 : syncState.times) === MAX_TIMES) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__warning$3e$__["warning"])(false, 'Seems `scrollTo` with `rc-virtual-list` reach the max limitation. Please fire issue for us. Thanks.');
        }
    }, [
        syncState,
        containerRef.current
    ]);
    // =========================== Scroll To ===========================
    return function(arg) {
        // When not argument provided, we think dev may want to show the scrollbar
        if (arg === null || arg === undefined) {
            triggerFlash();
            return;
        }
        // Normal scroll logic
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].cancel(scrollRef.current);
        if (typeof arg === 'number') {
            syncScrollTop(arg);
        } else if (arg && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(arg) === 'object') {
            var index;
            var align = arg.align;
            if ('index' in arg) {
                index = arg.index;
            } else {
                index = data.findIndex(function(item) {
                    return getKey(item) === arg.key;
                });
            }
            var _arg$offset = arg.offset, offset = _arg$offset === void 0 ? 0 : _arg$offset;
            setSyncState({
                times: 0,
                index: index,
                offset: offset,
                originAlign: align
            });
        }
    };
}
}),
"[project]/Downloads/One click/node_modules/rc-virtual-list/es/ScrollBar.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/raf.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useScrollDrag$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-virtual-list/es/hooks/useScrollDrag.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
var ScrollBar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](function(props, ref) {
    var prefixCls = props.prefixCls, rtl = props.rtl, scrollOffset = props.scrollOffset, scrollRange = props.scrollRange, onStartMove = props.onStartMove, onStopMove = props.onStopMove, onScroll = props.onScroll, horizontal = props.horizontal, spinSize = props.spinSize, containerSize = props.containerSize, style = props.style, propsThumbStyle = props.thumbStyle, showScrollBar = props.showScrollBar;
    var _React$useState = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](false), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), dragging = _React$useState2[0], setDragging = _React$useState2[1];
    var _React$useState3 = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](null), _React$useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState3, 2), pageXY = _React$useState4[0], setPageXY = _React$useState4[1];
    var _React$useState5 = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](null), _React$useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState5, 2), startTop = _React$useState6[0], setStartTop = _React$useState6[1];
    var isLTR = !rtl;
    // ========================= Refs =========================
    var scrollbarRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"]();
    var thumbRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"]();
    // ======================= Visible ========================
    var _React$useState7 = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](showScrollBar), _React$useState8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState7, 2), visible = _React$useState8[0], setVisible = _React$useState8[1];
    var visibleTimeoutRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"]();
    var delayHidden = function delayHidden() {
        if (showScrollBar === true || showScrollBar === false) return;
        clearTimeout(visibleTimeoutRef.current);
        setVisible(true);
        visibleTimeoutRef.current = setTimeout(function() {
            setVisible(false);
        }, 3000);
    };
    // ======================== Range =========================
    var enableScrollRange = scrollRange - containerSize || 0;
    var enableOffsetRange = containerSize - spinSize || 0;
    // ========================= Top ==========================
    var top = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](function() {
        if (scrollOffset === 0 || enableScrollRange === 0) {
            return 0;
        }
        var ptg = scrollOffset / enableScrollRange;
        return ptg * enableOffsetRange;
    }, [
        scrollOffset,
        enableScrollRange,
        enableOffsetRange
    ]);
    // ====================== Container =======================
    var onContainerMouseDown = function onContainerMouseDown(e) {
        e.stopPropagation();
        e.preventDefault();
    };
    // ======================== Thumb =========================
    var stateRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"]({
        top: top,
        dragging: dragging,
        pageY: pageXY,
        startTop: startTop
    });
    stateRef.current = {
        top: top,
        dragging: dragging,
        pageY: pageXY,
        startTop: startTop
    };
    var onThumbMouseDown = function onThumbMouseDown(e) {
        setDragging(true);
        setPageXY((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useScrollDrag$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getPageXY"])(e, horizontal));
        setStartTop(stateRef.current.top);
        onStartMove();
        e.stopPropagation();
        e.preventDefault();
    };
    // ======================== Effect ========================
    // React make event as passive, but we need to preventDefault
    // Add event on dom directly instead.
    // ref: https://github.com/facebook/react/issues/9809
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](function() {
        var onScrollbarTouchStart = function onScrollbarTouchStart(e) {
            e.preventDefault();
        };
        var scrollbarEle = scrollbarRef.current;
        var thumbEle = thumbRef.current;
        scrollbarEle.addEventListener('touchstart', onScrollbarTouchStart, {
            passive: false
        });
        thumbEle.addEventListener('touchstart', onThumbMouseDown, {
            passive: false
        });
        return function() {
            scrollbarEle.removeEventListener('touchstart', onScrollbarTouchStart);
            thumbEle.removeEventListener('touchstart', onThumbMouseDown);
        };
    }, []);
    // Pass to effect
    var enableScrollRangeRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"]();
    enableScrollRangeRef.current = enableScrollRange;
    var enableOffsetRangeRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"]();
    enableOffsetRangeRef.current = enableOffsetRange;
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](function() {
        if (dragging) {
            var moveRafId;
            var onMouseMove = function onMouseMove(e) {
                var _stateRef$current = stateRef.current, stateDragging = _stateRef$current.dragging, statePageY = _stateRef$current.pageY, stateStartTop = _stateRef$current.startTop;
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].cancel(moveRafId);
                var rect = scrollbarRef.current.getBoundingClientRect();
                var scale = containerSize / (horizontal ? rect.width : rect.height);
                if (stateDragging) {
                    var offset = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useScrollDrag$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getPageXY"])(e, horizontal) - statePageY) * scale;
                    var newTop = stateStartTop;
                    if (!isLTR && horizontal) {
                        newTop -= offset;
                    } else {
                        newTop += offset;
                    }
                    var tmpEnableScrollRange = enableScrollRangeRef.current;
                    var tmpEnableOffsetRange = enableOffsetRangeRef.current;
                    var ptg = tmpEnableOffsetRange ? newTop / tmpEnableOffsetRange : 0;
                    var newScrollTop = Math.ceil(ptg * tmpEnableScrollRange);
                    newScrollTop = Math.max(newScrollTop, 0);
                    newScrollTop = Math.min(newScrollTop, tmpEnableScrollRange);
                    moveRafId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
                        onScroll(newScrollTop, horizontal);
                    });
                }
            };
            var onMouseUp = function onMouseUp() {
                setDragging(false);
                onStopMove();
            };
            window.addEventListener('mousemove', onMouseMove, {
                passive: true
            });
            window.addEventListener('touchmove', onMouseMove, {
                passive: true
            });
            window.addEventListener('mouseup', onMouseUp, {
                passive: true
            });
            window.addEventListener('touchend', onMouseUp, {
                passive: true
            });
            return function() {
                window.removeEventListener('mousemove', onMouseMove);
                window.removeEventListener('touchmove', onMouseMove);
                window.removeEventListener('mouseup', onMouseUp);
                window.removeEventListener('touchend', onMouseUp);
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].cancel(moveRafId);
            };
        }
    }, [
        dragging
    ]);
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](function() {
        delayHidden();
        return function() {
            clearTimeout(visibleTimeoutRef.current);
        };
    }, [
        scrollOffset
    ]);
    // ====================== Imperative ======================
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useImperativeHandle"](ref, function() {
        return {
            delayHidden: delayHidden
        };
    });
    // ======================== Render ========================
    var scrollbarPrefixCls = "".concat(prefixCls, "-scrollbar");
    var containerStyle = {
        position: 'absolute',
        visibility: visible ? null : 'hidden'
    };
    var thumbStyle = {
        position: 'absolute',
        borderRadius: 99,
        background: 'var(--rc-virtual-list-scrollbar-bg, rgba(0, 0, 0, 0.5))',
        cursor: 'pointer',
        userSelect: 'none'
    };
    if (horizontal) {
        Object.assign(containerStyle, {
            height: 8,
            left: 0,
            right: 0,
            bottom: 0
        });
        Object.assign(thumbStyle, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
            height: '100%',
            width: spinSize
        }, isLTR ? 'left' : 'right', top));
    } else {
        Object.assign(containerStyle, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
            width: 8,
            top: 0,
            bottom: 0
        }, isLTR ? 'right' : 'left', 0));
        Object.assign(thumbStyle, {
            width: '100%',
            height: spinSize,
            top: top
        });
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        ref: scrollbarRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(scrollbarPrefixCls, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(scrollbarPrefixCls, "-horizontal"), horizontal), "".concat(scrollbarPrefixCls, "-vertical"), !horizontal), "".concat(scrollbarPrefixCls, "-visible"), visible)),
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, containerStyle), style),
        onMouseDown: onContainerMouseDown,
        onMouseMove: delayHidden
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        ref: thumbRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(scrollbarPrefixCls, "-thumb"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(scrollbarPrefixCls, "-thumb-moving"), dragging)),
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, thumbStyle), propsThumbStyle),
        onMouseDown: onThumbMouseDown
    }));
});
if ("TURBOPACK compile-time truthy", 1) {
    ScrollBar.displayName = 'ScrollBar';
}
const __TURBOPACK__default__export__ = ScrollBar;
}),
"[project]/Downloads/One click/node_modules/rc-virtual-list/es/utils/scrollbarUtil.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSpinSize",
    ()=>getSpinSize
]);
var MIN_SIZE = 20;
function getSpinSize() {
    var containerSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var scrollRange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var baseSize = containerSize / scrollRange * containerSize;
    if (isNaN(baseSize)) {
        baseSize = 0;
    }
    baseSize = Math.max(baseSize, MIN_SIZE);
    return Math.floor(baseSize);
}
}),
"[project]/Downloads/One click/node_modules/rc-virtual-list/es/List.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RawList",
    ()=>RawList,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-resize-observer/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useEvent.js [ssr] (ecmascript) <export default as useEvent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useLayoutEffect.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-dom [external] (react-dom, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$Filler$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-virtual-list/es/Filler.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useChildren$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-virtual-list/es/hooks/useChildren.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useDiffItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-virtual-list/es/hooks/useDiffItem.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useFrameWheel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-virtual-list/es/hooks/useFrameWheel.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useGetSize$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-virtual-list/es/hooks/useGetSize.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useHeights$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-virtual-list/es/hooks/useHeights.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useMobileTouchMove$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-virtual-list/es/hooks/useMobileTouchMove.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useOriginScroll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-virtual-list/es/hooks/useOriginScroll.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useScrollDrag$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-virtual-list/es/hooks/useScrollDrag.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useScrollTo$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-virtual-list/es/hooks/useScrollTo.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$ScrollBar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-virtual-list/es/ScrollBar.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$utils$2f$scrollbarUtil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-virtual-list/es/utils/scrollbarUtil.js [ssr] (ecmascript)");
;
;
;
;
;
;
var _excluded = [
    "prefixCls",
    "className",
    "height",
    "itemHeight",
    "fullHeight",
    "style",
    "data",
    "children",
    "itemKey",
    "virtual",
    "direction",
    "scrollWidth",
    "component",
    "onScroll",
    "onVirtualScroll",
    "onVisibleChange",
    "innerProps",
    "extraRender",
    "styles",
    "showScrollBar"
];
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var EMPTY_DATA = [];
var ScrollStyle = {
    overflowY: 'auto',
    overflowAnchor: 'none'
};
function RawList(props, ref) {
    var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? 'rc-virtual-list' : _props$prefixCls, className = props.className, height = props.height, itemHeight = props.itemHeight, _props$fullHeight = props.fullHeight, fullHeight = _props$fullHeight === void 0 ? true : _props$fullHeight, style = props.style, data = props.data, children = props.children, itemKey = props.itemKey, virtual = props.virtual, direction = props.direction, scrollWidth = props.scrollWidth, _props$component = props.component, Component = _props$component === void 0 ? 'div' : _props$component, onScroll = props.onScroll, onVirtualScroll = props.onVirtualScroll, onVisibleChange = props.onVisibleChange, innerProps = props.innerProps, extraRender = props.extraRender, styles = props.styles, _props$showScrollBar = props.showScrollBar, showScrollBar = _props$showScrollBar === void 0 ? 'optional' : _props$showScrollBar, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    // =============================== Item Key ===============================
    var getKey = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"](function(item) {
        if (typeof itemKey === 'function') {
            return itemKey(item);
        }
        return item === null || item === void 0 ? void 0 : item[itemKey];
    }, [
        itemKey
    ]);
    // ================================ Height ================================
    var _useHeights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useHeights$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(getKey, null, null), _useHeights2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_useHeights, 4), setInstanceRef = _useHeights2[0], collectHeight = _useHeights2[1], heights = _useHeights2[2], heightUpdatedMark = _useHeights2[3];
    // ================================= MISC =================================
    var useVirtual = !!(virtual !== false && height && itemHeight);
    var containerHeight = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](function() {
        return Object.values(heights.maps).reduce(function(total, curr) {
            return total + curr;
        }, 0);
    }, [
        heights.id,
        heights.maps
    ]);
    var inVirtual = useVirtual && data && (Math.max(itemHeight * data.length, containerHeight) > height || !!scrollWidth);
    var isRTL = direction === 'rtl';
    var mergedClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-rtl"), isRTL), className);
    var mergedData = data || EMPTY_DATA;
    var componentRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])();
    var fillerInnerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])();
    var containerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])();
    // =============================== Item Key ===============================
    var _useState = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0), _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_useState, 2), offsetTop = _useState2[0], setOffsetTop = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0), _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_useState3, 2), offsetLeft = _useState4[0], setOffsetLeft = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false), _useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_useState5, 2), scrollMoving = _useState6[0], setScrollMoving = _useState6[1];
    var onScrollbarStartMove = function onScrollbarStartMove() {
        setScrollMoving(true);
    };
    var onScrollbarStopMove = function onScrollbarStopMove() {
        setScrollMoving(false);
    };
    var sharedConfig = {
        getKey: getKey
    };
    // ================================ Scroll ================================
    function syncScrollTop(newTop) {
        setOffsetTop(function(origin) {
            var value;
            if (typeof newTop === 'function') {
                value = newTop(origin);
            } else {
                value = newTop;
            }
            var alignedTop = keepInRange(value);
            componentRef.current.scrollTop = alignedTop;
            return alignedTop;
        });
    }
    // ================================ Legacy ================================
    // Put ref here since the range is generate by follow
    var rangeRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])({
        start: 0,
        end: mergedData.length
    });
    var diffItemRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])();
    var _useDiffItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useDiffItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(mergedData, getKey), _useDiffItem2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_useDiffItem, 1), diffItem = _useDiffItem2[0];
    diffItemRef.current = diffItem;
    // ========================== Visible Calculation =========================
    var _React$useMemo = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](function() {
        if (!useVirtual) {
            return {
                scrollHeight: undefined,
                start: 0,
                end: mergedData.length - 1,
                offset: undefined
            };
        }
        // Always use virtual scroll bar in avoid shaking
        if (!inVirtual) {
            var _fillerInnerRef$curre;
            return {
                scrollHeight: ((_fillerInnerRef$curre = fillerInnerRef.current) === null || _fillerInnerRef$curre === void 0 ? void 0 : _fillerInnerRef$curre.offsetHeight) || 0,
                start: 0,
                end: mergedData.length - 1,
                offset: undefined
            };
        }
        var itemTop = 0;
        var startIndex;
        var startOffset;
        var endIndex;
        var dataLen = mergedData.length;
        for(var i = 0; i < dataLen; i += 1){
            var _item = mergedData[i];
            var key = getKey(_item);
            var cacheHeight = heights.get(key);
            var currentItemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
            // Check item top in the range
            if (currentItemBottom >= offsetTop && startIndex === undefined) {
                startIndex = i;
                startOffset = itemTop;
            }
            // Check item bottom in the range. We will render additional one item for motion usage
            if (currentItemBottom > offsetTop + height && endIndex === undefined) {
                endIndex = i;
            }
            itemTop = currentItemBottom;
        }
        // When scrollTop at the end but data cut to small count will reach this
        if (startIndex === undefined) {
            startIndex = 0;
            startOffset = 0;
            endIndex = Math.ceil(height / itemHeight);
        }
        if (endIndex === undefined) {
            endIndex = mergedData.length - 1;
        }
        // Give cache to improve scroll experience
        endIndex = Math.min(endIndex + 1, mergedData.length - 1);
        return {
            scrollHeight: itemTop,
            start: startIndex,
            end: endIndex,
            offset: startOffset
        };
    }, [
        inVirtual,
        useVirtual,
        offsetTop,
        mergedData,
        heightUpdatedMark,
        height
    ]), scrollHeight = _React$useMemo.scrollHeight, start = _React$useMemo.start, end = _React$useMemo.end, fillerOffset = _React$useMemo.offset;
    rangeRef.current.start = start;
    rangeRef.current.end = end;
    // When scroll up, first visible item get real height may not same as `itemHeight`,
    // Which will make scroll jump.
    // Let's sync scroll top to avoid jump
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useLayoutEffect"](function() {
        var changedRecord = heights.getRecord();
        if (changedRecord.size === 1) {
            var recordKey = Array.from(changedRecord.keys())[0];
            var prevCacheHeight = changedRecord.get(recordKey);
            // Quick switch data may cause `start` not in `mergedData` anymore
            var startItem = mergedData[start];
            if (startItem && prevCacheHeight === undefined) {
                var startIndexKey = getKey(startItem);
                if (startIndexKey === recordKey) {
                    var realStartHeight = heights.get(recordKey);
                    var diffHeight = realStartHeight - itemHeight;
                    syncScrollTop(function(ori) {
                        return ori + diffHeight;
                    });
                }
            }
        }
        heights.resetRecord();
    }, [
        scrollHeight
    ]);
    // ================================= Size =================================
    var _React$useState = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"]({
        width: 0,
        height: height
    }), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), size = _React$useState2[0], setSize = _React$useState2[1];
    var onHolderResize = function onHolderResize(sizeInfo) {
        setSize({
            width: sizeInfo.offsetWidth,
            height: sizeInfo.offsetHeight
        });
    };
    // Hack on scrollbar to enable flash call
    var verticalScrollBarRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])();
    var horizontalScrollBarRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])();
    var horizontalScrollBarSpinSize = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$utils$2f$scrollbarUtil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getSpinSize"])(size.width, scrollWidth);
    }, [
        size.width,
        scrollWidth
    ]);
    var verticalScrollBarSpinSize = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$utils$2f$scrollbarUtil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getSpinSize"])(size.height, scrollHeight);
    }, [
        size.height,
        scrollHeight
    ]);
    // =============================== In Range ===============================
    var maxScrollHeight = scrollHeight - height;
    var maxScrollHeightRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(maxScrollHeight);
    maxScrollHeightRef.current = maxScrollHeight;
    function keepInRange(newScrollTop) {
        var newTop = newScrollTop;
        if (!Number.isNaN(maxScrollHeightRef.current)) {
            newTop = Math.min(newTop, maxScrollHeightRef.current);
        }
        newTop = Math.max(newTop, 0);
        return newTop;
    }
    var isScrollAtTop = offsetTop <= 0;
    var isScrollAtBottom = offsetTop >= maxScrollHeight;
    var isScrollAtLeft = offsetLeft <= 0;
    var isScrollAtRight = offsetLeft >= scrollWidth;
    var originScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useOriginScroll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight);
    // ================================ Scroll ================================
    var getVirtualScrollInfo = function getVirtualScrollInfo() {
        return {
            x: isRTL ? -offsetLeft : offsetLeft,
            y: offsetTop
        };
    };
    var lastVirtualScrollInfoRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(getVirtualScrollInfo());
    var triggerScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])(function(params) {
        if (onVirtualScroll) {
            var nextInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, getVirtualScrollInfo()), params);
            // Trigger when offset changed
            if (lastVirtualScrollInfoRef.current.x !== nextInfo.x || lastVirtualScrollInfoRef.current.y !== nextInfo.y) {
                onVirtualScroll(nextInfo);
                lastVirtualScrollInfoRef.current = nextInfo;
            }
        }
    });
    function onScrollBar(newScrollOffset, horizontal) {
        var newOffset = newScrollOffset;
        if (horizontal) {
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__["flushSync"])(function() {
                setOffsetLeft(newOffset);
            });
            triggerScroll();
        } else {
            syncScrollTop(newOffset);
        }
    }
    // When data size reduce. It may trigger native scroll event back to fit scroll position
    function onFallbackScroll(e) {
        var newScrollTop = e.currentTarget.scrollTop;
        if (newScrollTop !== offsetTop) {
            syncScrollTop(newScrollTop);
        }
        // Trigger origin onScroll
        onScroll === null || onScroll === void 0 || onScroll(e);
        triggerScroll();
    }
    var keepInHorizontalRange = function keepInHorizontalRange(nextOffsetLeft) {
        var tmpOffsetLeft = nextOffsetLeft;
        var max = !!scrollWidth ? scrollWidth - size.width : 0;
        tmpOffsetLeft = Math.max(tmpOffsetLeft, 0);
        tmpOffsetLeft = Math.min(tmpOffsetLeft, max);
        return tmpOffsetLeft;
    };
    var onWheelDelta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])(function(offsetXY, fromHorizontal) {
        if (fromHorizontal) {
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__["flushSync"])(function() {
                setOffsetLeft(function(left) {
                    var nextOffsetLeft = left + (isRTL ? -offsetXY : offsetXY);
                    return keepInHorizontalRange(nextOffsetLeft);
                });
            });
            triggerScroll();
        } else {
            syncScrollTop(function(top) {
                var newTop = top + offsetXY;
                return newTop;
            });
        }
    });
    // Since this added in global,should use ref to keep update
    var _useFrameWheel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useFrameWheel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(useVirtual, isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight, !!scrollWidth, onWheelDelta), _useFrameWheel2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_useFrameWheel, 2), onRawWheel = _useFrameWheel2[0], onFireFoxScroll = _useFrameWheel2[1];
    // Mobile touch move
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useMobileTouchMove$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(useVirtual, componentRef, function(isHorizontal, delta, smoothOffset, e) {
        var event = e;
        if (originScroll(isHorizontal, delta, smoothOffset)) {
            return false;
        }
        // Fix nest List trigger TouchMove event
        if (!event || !event._virtualHandled) {
            if (event) {
                event._virtualHandled = true;
            }
            onRawWheel({
                preventDefault: function preventDefault() {},
                deltaX: isHorizontal ? delta : 0,
                deltaY: isHorizontal ? 0 : delta
            });
            return true;
        }
        return false;
    });
    // MouseDown drag for scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useScrollDrag$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(inVirtual, componentRef, function(offset) {
        syncScrollTop(function(top) {
            return top + offset;
        });
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        // Firefox only
        function onMozMousePixelScroll(e) {
            // scrolling at top/bottom limit
            var scrollingUpAtTop = isScrollAtTop && e.detail < 0;
            var scrollingDownAtBottom = isScrollAtBottom && e.detail > 0;
            if (useVirtual && !scrollingUpAtTop && !scrollingDownAtBottom) {
                e.preventDefault();
            }
        }
        var componentEle = componentRef.current;
        componentEle.addEventListener('wheel', onRawWheel, {
            passive: false
        });
        componentEle.addEventListener('DOMMouseScroll', onFireFoxScroll, {
            passive: true
        });
        componentEle.addEventListener('MozMousePixelScroll', onMozMousePixelScroll, {
            passive: false
        });
        return function() {
            componentEle.removeEventListener('wheel', onRawWheel);
            componentEle.removeEventListener('DOMMouseScroll', onFireFoxScroll);
            componentEle.removeEventListener('MozMousePixelScroll', onMozMousePixelScroll);
        };
    }, [
        useVirtual,
        isScrollAtTop,
        isScrollAtBottom
    ]);
    // Sync scroll left
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        if (scrollWidth) {
            var newOffsetLeft = keepInHorizontalRange(offsetLeft);
            setOffsetLeft(newOffsetLeft);
            triggerScroll({
                x: newOffsetLeft
            });
        }
    }, [
        size.width,
        scrollWidth
    ]);
    // ================================= Ref ==================================
    var delayHideScrollBar = function delayHideScrollBar() {
        var _verticalScrollBarRef, _horizontalScrollBarR;
        (_verticalScrollBarRef = verticalScrollBarRef.current) === null || _verticalScrollBarRef === void 0 || _verticalScrollBarRef.delayHidden();
        (_horizontalScrollBarR = horizontalScrollBarRef.current) === null || _horizontalScrollBarR === void 0 || _horizontalScrollBarR.delayHidden();
    };
    var _scrollTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useScrollTo$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(componentRef, mergedData, heights, itemHeight, getKey, function() {
        return collectHeight(true);
    }, syncScrollTop, delayHideScrollBar);
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useImperativeHandle"](ref, function() {
        return {
            nativeElement: containerRef.current,
            getScrollInfo: getVirtualScrollInfo,
            scrollTo: function scrollTo(config) {
                function isPosScroll(arg) {
                    return arg && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(arg) === 'object' && ('left' in arg || 'top' in arg);
                }
                if (isPosScroll(config)) {
                    // Scroll X
                    if (config.left !== undefined) {
                        setOffsetLeft(keepInHorizontalRange(config.left));
                    }
                    // Scroll Y
                    _scrollTo(config.top);
                } else {
                    _scrollTo(config);
                }
            }
        };
    });
    // ================================ Effect ================================
    /** We need told outside that some list not rendered */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        if (onVisibleChange) {
            var renderList = mergedData.slice(start, end + 1);
            onVisibleChange(renderList, mergedData);
        }
    }, [
        start,
        end,
        mergedData
    ]);
    // ================================ Extra =================================
    var getSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useGetSize$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useGetSize"])(mergedData, getKey, heights, itemHeight);
    var extraContent = extraRender === null || extraRender === void 0 ? void 0 : extraRender({
        start: start,
        end: end,
        virtual: inVirtual,
        offsetX: offsetLeft,
        offsetY: fillerOffset,
        rtl: isRTL,
        getSize: getSize
    });
    // ================================ Render ================================
    var listChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useChildren$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(mergedData, start, end, scrollWidth, offsetLeft, setInstanceRef, children, sharedConfig);
    var componentStyle = null;
    if (height) {
        componentStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, fullHeight ? 'height' : 'maxHeight', height), ScrollStyle);
        if (useVirtual) {
            componentStyle.overflowY = 'hidden';
            if (scrollWidth) {
                componentStyle.overflowX = 'hidden';
            }
            if (scrollMoving) {
                componentStyle.pointerEvents = 'none';
            }
        }
    }
    var containerProps = {};
    if (isRTL) {
        containerProps.dir = 'rtl';
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        ref: containerRef,
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, style), {}, {
            position: 'relative'
        }),
        className: mergedClassName
    }, containerProps, restProps), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        onResize: onHolderResize
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](Component, {
        className: "".concat(prefixCls, "-holder"),
        style: componentStyle,
        ref: componentRef,
        onScroll: onFallbackScroll,
        onMouseEnter: delayHideScrollBar
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$Filler$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        height: scrollHeight,
        offsetX: offsetLeft,
        offsetY: fillerOffset,
        scrollWidth: scrollWidth,
        onInnerResize: collectHeight,
        ref: fillerInnerRef,
        innerProps: innerProps,
        rtl: isRTL,
        extra: extraContent
    }, listChildren))), inVirtual && scrollHeight > height && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$ScrollBar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        ref: verticalScrollBarRef,
        prefixCls: prefixCls,
        scrollOffset: offsetTop,
        scrollRange: scrollHeight,
        rtl: isRTL,
        onScroll: onScrollBar,
        onStartMove: onScrollbarStartMove,
        onStopMove: onScrollbarStopMove,
        spinSize: verticalScrollBarSpinSize,
        containerSize: size.height,
        style: styles === null || styles === void 0 ? void 0 : styles.verticalScrollBar,
        thumbStyle: styles === null || styles === void 0 ? void 0 : styles.verticalScrollBarThumb,
        showScrollBar: showScrollBar
    }), inVirtual && scrollWidth > size.width && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$ScrollBar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        ref: horizontalScrollBarRef,
        prefixCls: prefixCls,
        scrollOffset: offsetLeft,
        scrollRange: scrollWidth,
        rtl: isRTL,
        onScroll: onScrollBar,
        onStartMove: onScrollbarStartMove,
        onStopMove: onScrollbarStopMove,
        spinSize: horizontalScrollBarSpinSize,
        containerSize: size.width,
        horizontal: true,
        style: styles === null || styles === void 0 ? void 0 : styles.horizontalScrollBar,
        thumbStyle: styles === null || styles === void 0 ? void 0 : styles.horizontalScrollBarThumb,
        showScrollBar: showScrollBar
    }));
}
var List = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](RawList);
List.displayName = 'List';
const __TURBOPACK__default__export__ = List;
}),
"[project]/Downloads/One click/node_modules/rc-virtual-list/es/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$List$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-virtual-list/es/List.js [ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$List$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/DownOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var DownOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                }
            }
        ]
    },
    "name": "down",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = DownOutlined;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/DoubleLeftOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var DoubleLeftOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"
                }
            }
        ]
    },
    "name": "double-left",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = DoubleLeftOutlined;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/DoubleRightOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var DoubleRightOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"
                }
            }
        ]
    },
    "name": "double-right",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = DoubleRightOutlined;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/CheckOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var CheckOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                }
            }
        ]
    },
    "name": "check",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = CheckOutlined;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/CloseCircleFilled.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var CloseCircleFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "fill-rule": "evenodd",
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"
                }
            }
        ]
    },
    "name": "close-circle",
    "theme": "filled"
};
const __TURBOPACK__default__export__ = CloseCircleFilled;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/SearchOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var SearchOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                }
            }
        ]
    },
    "name": "search",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = SearchOutlined;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/FilterFilled.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var FilterFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z"
                }
            }
        ]
    },
    "name": "filter",
    "theme": "filled"
};
const __TURBOPACK__default__export__ = FilterFilled;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/FileOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var FileOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"
                }
            }
        ]
    },
    "name": "file",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = FileOutlined;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/FolderOpenOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var FolderOpenOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"
                }
            }
        ]
    },
    "name": "folder-open",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = FolderOpenOutlined;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/FolderOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var FolderOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"
                }
            }
        ]
    },
    "name": "folder",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = FolderOutlined;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/HolderOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var HolderOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z"
                }
            }
        ]
    },
    "name": "holder",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = HolderOutlined;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/CaretDownFilled.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var CaretDownFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
                }
            }
        ]
    },
    "name": "caret-down",
    "theme": "filled"
};
const __TURBOPACK__default__export__ = CaretDownFilled;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/MinusSquareOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var MinusSquareOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"
                }
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"
                }
            }
        ]
    },
    "name": "minus-square",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = MinusSquareOutlined;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/PlusSquareOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var PlusSquareOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"
                }
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"
                }
            }
        ]
    },
    "name": "plus-square",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = PlusSquareOutlined;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/CaretDownOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var CaretDownOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
                }
            }
        ]
    },
    "name": "caret-down",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = CaretDownOutlined;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/CaretUpOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var CaretUpOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"
                }
            }
        ]
    },
    "name": "caret-up",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = CaretUpOutlined;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/CheckCircleFilled.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var CheckCircleFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                }
            }
        ]
    },
    "name": "check-circle",
    "theme": "filled"
};
const __TURBOPACK__default__export__ = CheckCircleFilled;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/ExclamationCircleFilled.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var ExclamationCircleFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
                }
            }
        ]
    },
    "name": "exclamation-circle",
    "theme": "filled"
};
const __TURBOPACK__default__export__ = ExclamationCircleFilled;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/InfoCircleFilled.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var InfoCircleFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
                }
            }
        ]
    },
    "name": "info-circle",
    "theme": "filled"
};
const __TURBOPACK__default__export__ = InfoCircleFilled;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/QuestionCircleOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var QuestionCircleOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                }
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
                }
            }
        ]
    },
    "name": "question-circle",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = QuestionCircleOutlined;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/EyeInvisibleOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var EyeInvisibleOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"
                }
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"
                }
            }
        ]
    },
    "name": "eye-invisible",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = EyeInvisibleOutlined;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/EyeOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var EyeOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                }
            }
        ]
    },
    "name": "eye",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = EyeOutlined;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/FileTwoTone.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var FileTwoTone = {
    "icon": function render(primaryColor, secondaryColor) {
        return {
            "tag": "svg",
            "attrs": {
                "viewBox": "64 64 896 896",
                "focusable": "false"
            },
            "children": [
                {
                    "tag": "path",
                    "attrs": {
                        "d": "M534 352V136H232v752h560V394H576a42 42 0 01-42-42z",
                        "fill": secondaryColor
                    }
                },
                {
                    "tag": "path",
                    "attrs": {
                        "d": "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z",
                        "fill": primaryColor
                    }
                }
            ]
        };
    },
    "name": "file",
    "theme": "twotone"
};
const __TURBOPACK__default__export__ = FileTwoTone;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/PaperClipOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var PaperClipOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"
                }
            }
        ]
    },
    "name": "paper-clip",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = PaperClipOutlined;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/PictureTwoTone.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var PictureTwoTone = {
    "icon": function render(primaryColor, secondaryColor) {
        return {
            "tag": "svg",
            "attrs": {
                "viewBox": "64 64 896 896",
                "focusable": "false"
            },
            "children": [
                {
                    "tag": "path",
                    "attrs": {
                        "d": "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z",
                        "fill": primaryColor
                    }
                },
                {
                    "tag": "path",
                    "attrs": {
                        "d": "M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z",
                        "fill": secondaryColor
                    }
                },
                {
                    "tag": "path",
                    "attrs": {
                        "d": "M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z",
                        "fill": secondaryColor
                    }
                },
                {
                    "tag": "path",
                    "attrs": {
                        "d": "M276 368a28 28 0 1056 0 28 28 0 10-56 0z",
                        "fill": secondaryColor
                    }
                },
                {
                    "tag": "path",
                    "attrs": {
                        "d": "M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z",
                        "fill": primaryColor
                    }
                }
            ]
        };
    },
    "name": "picture",
    "theme": "twotone"
};
const __TURBOPACK__default__export__ = PictureTwoTone;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/DeleteOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var DeleteOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                }
            }
        ]
    },
    "name": "delete",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = DeleteOutlined;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/DownloadOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var DownloadOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
                }
            }
        ]
    },
    "name": "download",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = DownloadOutlined;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/EditOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var EditOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                }
            }
        ]
    },
    "name": "edit",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = EditOutlined;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/UploadOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var UploadOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
                }
            }
        ]
    },
    "name": "upload",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = UploadOutlined;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/DownOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$DownOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/DownOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var DownOutlined = function DownOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$DownOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![down](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg4NCAyNTZoLTc1Yy01LjEgMC05LjkgMi41LTEyLjkgNi42TDUxMiA2NTQuMiAyMjcuOSAyNjIuNmMtMy00LjEtNy44LTYuNi0xMi45LTYuNmgtNzVjLTYuNSAwLTEwLjMgNy40LTYuNSAxMi43bDM1Mi42IDQ4Ni4xYzEyLjggMTcuNiAzOSAxNy42IDUxLjcgMGwzNTIuNi00ODYuMWMzLjktNS4zLjEtMTIuNy02LjQtMTIuN3oiIC8+PC9zdmc+) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](DownOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'DownOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/DoubleLeftOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$DoubleLeftOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/DoubleLeftOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var DoubleLeftOutlined = function DoubleLeftOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$DoubleLeftOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![double-left](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI3Mi45IDUxMmwyNjUuNC0zMzkuMWM0LjEtNS4yLjQtMTIuOS02LjMtMTIuOWgtNzcuM2MtNC45IDAtOS42IDIuMy0xMi42IDYuMUwxODYuOCA0OTIuM2EzMS45OSAzMS45OSAwIDAwMCAzOS41bDI1NS4zIDMyNi4xYzMgMy45IDcuNyA2LjEgMTIuNiA2LjFINTMyYzYuNyAwIDEwLjQtNy43IDYuMy0xMi45TDI3Mi45IDUxMnptMzA0IDBsMjY1LjQtMzM5LjFjNC4xLTUuMi40LTEyLjktNi4zLTEyLjloLTc3LjNjLTQuOSAwLTkuNiAyLjMtMTIuNiA2LjFMNDkwLjggNDkyLjNhMzEuOTkgMzEuOTkgMCAwMDAgMzkuNWwyNTUuMyAzMjYuMWMzIDMuOSA3LjcgNi4xIDEyLjYgNi4xSDgzNmM2LjcgMCAxMC40LTcuNyA2LjMtMTIuOUw1NzYuOSA1MTJ6IiAvPjwvc3ZnPg==) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](DoubleLeftOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'DoubleLeftOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/DoubleRightOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$DoubleRightOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/DoubleRightOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var DoubleRightOutlined = function DoubleRightOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$DoubleRightOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![double-right](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUzMy4yIDQ5Mi4zTDI3Ny45IDE2Ni4xYy0zLTMuOS03LjctNi4xLTEyLjYtNi4xSDE4OGMtNi43IDAtMTAuNCA3LjctNi4zIDEyLjlMNDQ3LjEgNTEyIDE4MS43IDg1MS4xQTcuOTggNy45OCAwIDAwMTg4IDg2NGg3Ny4zYzQuOSAwIDkuNi0yLjMgMTIuNi02LjFsMjU1LjMtMzI2LjFjOS4xLTExLjcgOS4xLTI3LjkgMC0zOS41em0zMDQgMEw1ODEuOSAxNjYuMWMtMy0zLjktNy43LTYuMS0xMi42LTYuMUg0OTJjLTYuNyAwLTEwLjQgNy43LTYuMyAxMi45TDc1MS4xIDUxMiA0ODUuNyA4NTEuMUE3Ljk4IDcuOTggMCAwMDQ5MiA4NjRoNzcuM2M0LjkgMCA5LjYtMi4zIDEyLjYtNi4xbDI1NS4zLTMyNi4xYzkuMS0xMS43IDkuMS0yNy45IDAtMzkuNXoiIC8+PC9zdmc+) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](DoubleRightOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'DoubleRightOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/CheckOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$CheckOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/CheckOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var CheckOutlined = function CheckOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$CheckOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![check](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkxMiAxOTBoLTY5LjljLTkuOCAwLTE5LjEgNC41LTI1LjEgMTIuMkw0MDQuNyA3MjQuNSAyMDcgNDc0YTMyIDMyIDAgMDAtMjUuMS0xMi4ySDExMmMtNi43IDAtMTAuNCA3LjctNi4zIDEyLjlsMjczLjkgMzQ3YzEyLjggMTYuMiAzNy40IDE2LjIgNTAuMyAwbDQ4OC40LTYxOC45YzQuMS01LjEuNC0xMi44LTYuMy0xMi44eiIgLz48L3N2Zz4=) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](CheckOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'CheckOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$CloseCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/CloseCircleFilled.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var CloseCircleFilled = function CloseCircleFilled(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$CloseCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![close-circle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdmlld0JveD0iNjQgNjQgODk2IDg5NiIgZm9jdXNhYmxlPSJmYWxzZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTEyIDY0YzI0Ny40IDAgNDQ4IDIwMC42IDQ0OCA0NDhTNzU5LjQgOTYwIDUxMiA5NjAgNjQgNzU5LjQgNjQgNTEyIDI2NC42IDY0IDUxMiA2NHptMTI3Ljk4IDI3NC44MmgtLjA0bC0uMDguMDZMNTEyIDQ2Ni43NSAzODQuMTQgMzM4Ljg4Yy0uMDQtLjA1LS4wNi0uMDYtLjA4LS4wNmEuMTIuMTIgMCAwMC0uMDcgMGMtLjAzIDAtLjA1LjAxLS4wOS4wNWwtNDUuMDIgNDUuMDJhLjIuMiAwIDAwLS4wNS4wOS4xMi4xMiAwIDAwMCAuMDd2LjAyYS4yNy4yNyAwIDAwLjA2LjA2TDQ2Ni43NSA1MTIgMzM4Ljg4IDYzOS44NmMtLjA1LjA0LS4wNi4wNi0uMDYuMDhhLjEyLjEyIDAgMDAwIC4wN2MwIC4wMy4wMS4wNS4wNS4wOWw0NS4wMiA0NS4wMmEuMi4yIDAgMDAuMDkuMDUuMTIuMTIgMCAwMC4wNyAwYy4wMiAwIC4wNC0uMDEuMDgtLjA1TDUxMiA1NTcuMjVsMTI3Ljg2IDEyNy44N2MuMDQuMDQuMDYuMDUuMDguMDVhLjEyLjEyIDAgMDAuMDcgMGMuMDMgMCAuMDUtLjAxLjA5LS4wNWw0NS4wMi00NS4wMmEuMi4yIDAgMDAuMDUtLjA5LjEyLjEyIDAgMDAwLS4wN3YtLjAyYS4yNy4yNyAwIDAwLS4wNS0uMDZMNTU3LjI1IDUxMmwxMjcuODctMTI3Ljg2Yy4wNC0uMDQuMDUtLjA2LjA1LS4wOGEuMTIuMTIgMCAwMDAtLjA3YzAtLjAzLS4wMS0uMDUtLjA1LS4wOWwtNDUuMDItNDUuMDJhLjIuMiAwIDAwLS4wOS0uMDUuMTIuMTIgMCAwMC0uMDcgMHoiIC8+PC9zdmc+) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](CloseCircleFilled);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'CloseCircleFilled';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/SearchOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$SearchOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/SearchOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var SearchOutlined = function SearchOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$SearchOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![search](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkwOS42IDg1NC41TDY0OS45IDU5NC44QzY5MC4yIDU0Mi43IDcxMiA0NzkgNzEyIDQxMmMwLTgwLjItMzEuMy0xNTUuNC04Ny45LTIxMi4xLTU2LjYtNTYuNy0xMzItODcuOS0yMTIuMS04Ny45cy0xNTUuNSAzMS4zLTIxMi4xIDg3LjlDMTQzLjIgMjU2LjUgMTEyIDMzMS44IDExMiA0MTJjMCA4MC4xIDMxLjMgMTU1LjUgODcuOSAyMTIuMUMyNTYuNSA2ODAuOCAzMzEuOCA3MTIgNDEyIDcxMmM2NyAwIDEzMC42LTIxLjggMTgyLjctNjJsMjU5LjcgMjU5LjZhOC4yIDguMiAwIDAwMTEuNiAwbDQzLjYtNDMuNWE4LjIgOC4yIDAgMDAwLTExLjZ6TTU3MC40IDU3MC40QzUyOCA2MTIuNyA0NzEuOCA2MzYgNDEyIDYzNnMtMTE2LTIzLjMtMTU4LjQtNjUuNkMyMTEuMyA1MjggMTg4IDQ3MS44IDE4OCA0MTJzMjMuMy0xMTYuMSA2NS42LTE1OC40QzI5NiAyMTEuMyAzNTIuMiAxODggNDEyIDE4OHMxMTYuMSAyMy4yIDE1OC40IDY1LjZTNjM2IDM1Mi4yIDYzNiA0MTJzLTIzLjMgMTE2LjEtNjUuNiAxNTguNHoiIC8+PC9zdmc+) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](SearchOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'SearchOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/FilterFilled.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$FilterFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/FilterFilled.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var FilterFilled = function FilterFilled(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$FilterFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![filter](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTM0OSA4MzhjMCAxNy43IDE0LjIgMzIgMzEuOCAzMmgyNjIuNGMxNy42IDAgMzEuOC0xNC4zIDMxLjgtMzJWNjQySDM0OXYxOTZ6bTUzMS4xLTY4NEgxNDMuOWMtMjQuNSAwLTM5LjggMjYuNy0yNy41IDQ4bDIyMS4zIDM3NmgzNDguOGwyMjEuMy0zNzZjMTIuMS0yMS4zLTMuMi00OC0yNy43LTQ4eiIgLz48L3N2Zz4=) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](FilterFilled);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'FilterFilled';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/FileOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$FileOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/FileOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var FileOutlined = function FileOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$FileOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![file](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg1NC42IDI4OC42TDYzOS40IDczLjRjLTYtNi0xNC4xLTkuNC0yMi42LTkuNEgxOTJjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjgzMmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg2NDBjMTcuNyAwIDMyLTE0LjMgMzItMzJWMzExLjNjMC04LjUtMy40LTE2LjctOS40LTIyLjd6TTc5MC4yIDMyNkg2MDJWMTM3LjhMNzkwLjIgMzI2em0xLjggNTYySDIzMlYxMzZoMzAydjIxNmE0MiA0MiAwIDAwNDIgNDJoMjE2djQ5NHoiIC8+PC9zdmc+) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](FileOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'FileOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/FolderOpenOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$FolderOpenOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/FolderOpenOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var FolderOpenOutlined = function FolderOpenOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$FolderOpenOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![folder-open](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkyOCA0NDRIODIwVjMzMC40YzAtMTcuNy0xNC4zLTMyLTMyLTMySDQ3M0wzNTUuNyAxODYuMmE4LjE1IDguMTUgMCAwMC01LjUtMi4ySDk2Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnY1OTJjMCAxNy43IDE0LjMgMzIgMzIgMzJoNjk4YzEzIDAgMjQuOC03LjkgMjkuNy0yMGwxMzQtMzMyYzEuNS0zLjggMi4zLTcuOSAyLjMtMTIgMC0xNy43LTE0LjMtMzItMzItMzJ6TTEzNiAyNTZoMTg4LjVsMTE5LjYgMTE0LjRINzQ4VjQ0NEgyMzhjLTEzIDAtMjQuOCA3LjktMjkuNyAyMEwxMzYgNjQzLjJWMjU2em02MzUuMyA1MTJIMTU5bDEwMy4zLTI1Nmg2MTIuNEw3NzEuMyA3Njh6IiAvPjwvc3ZnPg==) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](FolderOpenOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'FolderOpenOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/FolderOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$FolderOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/FolderOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var FolderOutlined = function FolderOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$FolderOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![folder](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg4MCAyOTguNEg1MjFMNDAzLjcgMTg2LjJhOC4xNSA4LjE1IDAgMDAtNS41LTIuMkgxNDRjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjU5MmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg3MzZjMTcuNyAwIDMyLTE0LjMgMzItMzJWMzMwLjRjMC0xNy43LTE0LjMtMzItMzItMzJ6TTg0MCA3NjhIMTg0VjI1NmgxODguNWwxMTkuNiAxMTQuNEg4NDBWNzY4eiIgLz48L3N2Zz4=) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](FolderOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'FolderOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/HolderOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$HolderOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/HolderOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var HolderOutlined = function HolderOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$HolderOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![holder](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMwMCAyNzYuNWE1NiA1NiAwIDEwNTYtOTcgNTYgNTYgMCAwMC01NiA5N3ptMCAyODRhNTYgNTYgMCAxMDU2LTk3IDU2IDU2IDAgMDAtNTYgOTd6TTY0MCAyMjhhNTYgNTYgMCAxMDExMiAwIDU2IDU2IDAgMDAtMTEyIDB6bTAgMjg0YTU2IDU2IDAgMTAxMTIgMCA1NiA1NiAwIDAwLTExMiAwek0zMDAgODQ0LjVhNTYgNTYgMCAxMDU2LTk3IDU2IDU2IDAgMDAtNTYgOTd6TTY0MCA3OTZhNTYgNTYgMCAxMDExMiAwIDU2IDU2IDAgMDAtMTEyIDB6IiAvPjwvc3ZnPg==) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](HolderOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'HolderOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/CaretDownFilled.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$CaretDownFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/CaretDownFilled.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var CaretDownFilled = function CaretDownFilled(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$CaretDownFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![caret-down](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg0MC40IDMwMEgxODMuNmMtMTkuNyAwLTMwLjcgMjAuOC0xOC41IDM1bDMyOC40IDM4MC44YzkuNCAxMC45IDI3LjUgMTAuOSAzNyAwTDg1OC45IDMzNWMxMi4yLTE0LjIgMS4yLTM1LTE4LjUtMzV6IiAvPjwvc3ZnPg==) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](CaretDownFilled);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'CaretDownFilled';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/MinusSquareOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$MinusSquareOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/MinusSquareOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var MinusSquareOutlined = function MinusSquareOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$MinusSquareOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![minus-square](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMyOCA1NDRoMzY4YzQuNCAwIDgtMy42IDgtOHYtNDhjMC00LjQtMy42LTgtOC04SDMyOGMtNC40IDAtOCAzLjYtOCA4djQ4YzAgNC40IDMuNiA4IDggOHoiIC8+PHBhdGggZD0iTTg4MCAxMTJIMTQ0Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnY3MzZjMCAxNy43IDE0LjMgMzIgMzIgMzJoNzM2YzE3LjcgMCAzMi0xNC4zIDMyLTMyVjE0NGMwLTE3LjctMTQuMy0zMi0zMi0zMnptLTQwIDcyOEgxODRWMTg0aDY1NnY2NTZ6IiAvPjwvc3ZnPg==) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](MinusSquareOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'MinusSquareOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/PlusSquareOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$PlusSquareOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/PlusSquareOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var PlusSquareOutlined = function PlusSquareOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$PlusSquareOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![plus-square](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMyOCA1NDRoMTUydjE1MmMwIDQuNCAzLjYgOCA4IDhoNDhjNC40IDAgOC0zLjYgOC04VjU0NGgxNTJjNC40IDAgOC0zLjYgOC04di00OGMwLTQuNC0zLjYtOC04LThINTQ0VjMyOGMwLTQuNC0zLjYtOC04LThoLTQ4Yy00LjQgMC04IDMuNi04IDh2MTUySDMyOGMtNC40IDAtOCAzLjYtOCA4djQ4YzAgNC40IDMuNiA4IDggOHoiIC8+PHBhdGggZD0iTTg4MCAxMTJIMTQ0Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnY3MzZjMCAxNy43IDE0LjMgMzIgMzIgMzJoNzM2YzE3LjcgMCAzMi0xNC4zIDMyLTMyVjE0NGMwLTE3LjctMTQuMy0zMi0zMi0zMnptLTQwIDcyOEgxODRWMTg0aDY1NnY2NTZ6IiAvPjwvc3ZnPg==) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](PlusSquareOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'PlusSquareOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/CaretDownOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$CaretDownOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/CaretDownOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var CaretDownOutlined = function CaretDownOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$CaretDownOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![caret-down](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg0MC40IDMwMEgxODMuNmMtMTkuNyAwLTMwLjcgMjAuOC0xOC41IDM1bDMyOC40IDM4MC44YzkuNCAxMC45IDI3LjUgMTAuOSAzNyAwTDg1OC45IDMzNWMxMi4yLTE0LjIgMS4yLTM1LTE4LjUtMzV6IiAvPjwvc3ZnPg==) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](CaretDownOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'CaretDownOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/CaretUpOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$CaretUpOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/CaretUpOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var CaretUpOutlined = function CaretUpOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$CaretUpOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![caret-up](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg1OC45IDY4OUw1MzAuNSAzMDguMmMtOS40LTEwLjktMjcuNS0xMC45LTM3IDBMMTY1LjEgNjg5Yy0xMi4yIDE0LjItMS4yIDM1IDE4LjUgMzVoNjU2LjhjMTkuNyAwIDMwLjctMjAuOCAxOC41LTM1eiIgLz48L3N2Zz4=) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](CaretUpOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'CaretUpOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$CheckCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/CheckCircleFilled.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var CheckCircleFilled = function CheckCircleFilled(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$CheckCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![check-circle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0xOTMuNSAzMDEuN2wtMjEwLjYgMjkyYTMxLjggMzEuOCAwIDAxLTUxLjcgMEwzMTguNSA0ODQuOWMtMy44LTUuMyAwLTEyLjcgNi41LTEyLjdoNDYuOWMxMC4yIDAgMTkuOSA0LjkgMjUuOSAxMy4zbDcxLjIgOTguOCAxNTcuMi0yMThjNi04LjMgMTUuNi0xMy4zIDI1LjktMTMuM0g2OTljNi41IDAgMTAuMyA3LjQgNi41IDEyLjd6IiAvPjwvc3ZnPg==) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](CheckCircleFilled);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'CheckCircleFilled';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$ExclamationCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/ExclamationCircleFilled.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var ExclamationCircleFilled = function ExclamationCircleFilled(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$ExclamationCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![exclamation-circle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0tMzIgMjMyYzAtNC40IDMuNi04IDgtOGg0OGM0LjQgMCA4IDMuNiA4IDh2MjcyYzAgNC40LTMuNiA4LTggOGgtNDhjLTQuNCAwLTgtMy42LTgtOFYyOTZ6bTMyIDQ0MGE0OC4wMSA0OC4wMSAwIDAxMC05NiA0OC4wMSA0OC4wMSAwIDAxMCA5NnoiIC8+PC9zdmc+) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](ExclamationCircleFilled);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'ExclamationCircleFilled';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$InfoCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/InfoCircleFilled.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var InfoCircleFilled = function InfoCircleFilled(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$InfoCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![info-circle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0zMiA2NjRjMCA0LjQtMy42IDgtOCA4aC00OGMtNC40IDAtOC0zLjYtOC04VjQ1NmMwLTQuNCAzLjYtOCA4LThoNDhjNC40IDAgOCAzLjYgOCA4djI3MnptLTMyLTM0NGE0OC4wMSA0OC4wMSAwIDAxMC05NiA0OC4wMSA0OC4wMSAwIDAxMCA5NnoiIC8+PC9zdmc+) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](InfoCircleFilled);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'InfoCircleFilled';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/QuestionCircleOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$QuestionCircleOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/QuestionCircleOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var QuestionCircleOutlined = function QuestionCircleOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$QuestionCircleOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![question-circle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0wIDgyMGMtMjA1LjQgMC0zNzItMTY2LjYtMzcyLTM3MnMxNjYuNi0zNzIgMzcyLTM3MiAzNzIgMTY2LjYgMzcyIDM3Mi0xNjYuNiAzNzItMzcyIDM3MnoiIC8+PHBhdGggZD0iTTYyMy42IDMxNi43QzU5My42IDI5MC40IDU1NCAyNzYgNTEyIDI3NnMtODEuNiAxNC41LTExMS42IDQwLjdDMzY5LjIgMzQ0IDM1MiAzODAuNyAzNTIgNDIwdjcuNmMwIDQuNCAzLjYgOCA4IDhoNDhjNC40IDAgOC0zLjYgOC04VjQyMGMwLTQ0LjEgNDMuMS04MCA5Ni04MHM5NiAzNS45IDk2IDgwYzAgMzEuMS0yMiA1OS42LTU2LjEgNzIuNy0yMS4yIDguMS0zOS4yIDIyLjMtNTIuMSA0MC45LTEzLjEgMTktMTkuOSA0MS44LTE5LjkgNjQuOVY2MjBjMCA0LjQgMy42IDggOCA4aDQ4YzQuNCAwIDgtMy42IDgtOHYtMjIuN2E0OC4zIDQ4LjMgMCAwMTMwLjktNDQuOGM1OS0yMi43IDk3LjEtNzQuNyA5Ny4xLTEzMi41LjEtMzkuMy0xNy4xLTc2LTQ4LjMtMTAzLjN6TTQ3MiA3MzJhNDAgNDAgMCAxMDgwIDAgNDAgNDAgMCAxMC04MCAweiIgLz48L3N2Zz4=) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](QuestionCircleOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'QuestionCircleOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/EyeInvisibleOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$EyeInvisibleOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/EyeInvisibleOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var EyeInvisibleOutlined = function EyeInvisibleOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$EyeInvisibleOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![eye-invisible](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTk0Mi4yIDQ4Ni4yUTg4OS40NyAzNzUuMTEgODE2LjcgMzA1bC01MC44OCA1MC44OEM4MDcuMzEgMzk1LjUzIDg0My40NSA0NDcuNCA4NzQuNyA1MTIgNzkxLjUgNjg0LjIgNjczLjQgNzY2IDUxMiA3NjZxLTcyLjY3IDAtMTMzLjg3LTIyLjM4TDMyMyA3OTguNzVRNDA4IDgzOCA1MTIgODM4cTI4OC4zIDAgNDMwLjItMzAwLjNhNjAuMjkgNjAuMjkgMCAwMDAtNTEuNXptLTYzLjU3LTMyMC42NEw4MzYgMTIyLjg4YTggOCAwIDAwLTExLjMyIDBMNzE1LjMxIDIzMi4yUTYyNC44NiAxODYgNTEyIDE4NnEtMjg4LjMgMC00MzAuMiAzMDAuM2E2MC4zIDYwLjMgMCAwMDAgNTEuNXE1Ni42OSAxMTkuNCAxMzYuNSAxOTEuNDFMMTEyLjQ4IDgzNWE4IDggMCAwMDAgMTEuMzFMMTU1LjE3IDg4OWE4IDggMCAwMDExLjMxIDBsNzEyLjE1LTcxMi4xMmE4IDggMCAwMDAtMTEuMzJ6TTE0OS4zIDUxMkMyMzIuNiAzMzkuOCAzNTAuNyAyNTggNTEyIDI1OGM1NC41NCAwIDEwNC4xMyA5LjM2IDE0OS4xMiAyOC4zOWwtNzAuMyA3MC4zYTE3NiAxNzYgMCAwMC0yMzguMTMgMjM4LjEzbC04My40MiA4My40MkMyMjMuMSA2MzcuNDkgMTgzLjMgNTgyLjI4IDE0OS4zIDUxMnptMjQ2LjcgMGExMTIuMTEgMTEyLjExIDAgMDExNDYuMi0xMDYuNjlMNDAxLjMxIDU0Ni4yQTExMiAxMTIgMCAwMTM5NiA1MTJ6IiAvPjxwYXRoIGQ9Ik01MDggNjI0Yy0zLjQ2IDAtNi44Ny0uMTYtMTAuMjUtLjQ3bC01Mi44MiA1Mi44MmExNzYuMDkgMTc2LjA5IDAgMDAyMjcuNDItMjI3LjQybC01Mi44MiA1Mi44MmMuMzEgMy4zOC40NyA2Ljc5LjQ3IDEwLjI1YTExMS45NCAxMTEuOTQgMCAwMS0xMTIgMTEyeiIgLz48L3N2Zz4=) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](EyeInvisibleOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'EyeInvisibleOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/EyeOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$EyeOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/EyeOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var EyeOutlined = function EyeOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$EyeOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![eye](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTk0Mi4yIDQ4Ni4yQzg0Ny40IDI4Ni41IDcwNC4xIDE4NiA1MTIgMTg2Yy0xOTIuMiAwLTMzNS40IDEwMC41LTQzMC4yIDMwMC4zYTYwLjMgNjAuMyAwIDAwMCA1MS41QzE3Ni42IDczNy41IDMxOS45IDgzOCA1MTIgODM4YzE5Mi4yIDAgMzM1LjQtMTAwLjUgNDMwLjItMzAwLjMgNy43LTE2LjIgNy43LTM1IDAtNTEuNXpNNTEyIDc2NmMtMTYxLjMgMC0yNzkuNC04MS44LTM2Mi43LTI1NEMyMzIuNiAzMzkuOCAzNTAuNyAyNTggNTEyIDI1OGMxNjEuMyAwIDI3OS40IDgxLjggMzYyLjcgMjU0Qzc5MS41IDY4NC4yIDY3My40IDc2NiA1MTIgNzY2em0tNC00MzBjLTk3LjIgMC0xNzYgNzguOC0xNzYgMTc2czc4LjggMTc2IDE3NiAxNzYgMTc2LTc4LjggMTc2LTE3Ni03OC44LTE3Ni0xNzYtMTc2em0wIDI4OGMtNjEuOSAwLTExMi01MC4xLTExMi0xMTJzNTAuMS0xMTIgMTEyLTExMiAxMTIgNTAuMSAxMTIgMTEyLTUwLjEgMTEyLTExMiAxMTJ6IiAvPjwvc3ZnPg==) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](EyeOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'EyeOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/FileTwoTone.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$FileTwoTone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/FileTwoTone.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var FileTwoTone = function FileTwoTone(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$FileTwoTone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![file](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUzNCAzNTJWMTM2SDIzMnY3NTJoNTYwVjM5NEg1NzZhNDIgNDIgMCAwMS00Mi00MnoiIGZpbGw9IiNlNmY0ZmYiIC8+PHBhdGggZD0iTTg1NC42IDI4OC42TDYzOS40IDczLjRjLTYtNi0xNC4xLTkuNC0yMi42LTkuNEgxOTJjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjgzMmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg2NDBjMTcuNyAwIDMyLTE0LjMgMzItMzJWMzExLjNjMC04LjUtMy40LTE2LjctOS40LTIyLjd6TTYwMiAxMzcuOEw3OTAuMiAzMjZINjAyVjEzNy44ek03OTIgODg4SDIzMlYxMzZoMzAydjIxNmE0MiA0MiAwIDAwNDIgNDJoMjE2djQ5NHoiIGZpbGw9IiMxNjc3ZmYiIC8+PC9zdmc+) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](FileTwoTone);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'FileTwoTone';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/PaperClipOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$PaperClipOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/PaperClipOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var PaperClipOutlined = function PaperClipOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$PaperClipOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![paper-clip](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTc3OS4zIDE5Ni42Yy05NC4yLTk0LjItMjQ3LjYtOTQuMi0zNDEuNyAwbC0yNjEgMjYwLjhjLTEuNyAxLjctMi42IDQtMi42IDYuNHMuOSA0LjcgMi42IDYuNGwzNi45IDM2LjlhOSA5IDAgMDAxMi43IDBsMjYxLTI2MC44YzMyLjQtMzIuNCA3NS41LTUwLjIgMTIxLjMtNTAuMnM4OC45IDE3LjggMTIxLjIgNTAuMmMzMi40IDMyLjQgNTAuMiA3NS41IDUwLjIgMTIxLjIgMCA0NS44LTE3LjggODguOC01MC4yIDEyMS4ybC0yNjYgMjY1LjktNDMuMSA0My4xYy00MC4zIDQwLjMtMTA1LjggNDAuMy0xNDYuMSAwLTE5LjUtMTkuNS0zMC4yLTQ1LjQtMzAuMi03M3MxMC43LTUzLjUgMzAuMi03M2wyNjMuOS0yNjMuOGM2LjctNi42IDE1LjUtMTAuMyAyNC45LTEwLjNoLjFjOS40IDAgMTguMSAzLjcgMjQuNyAxMC4zIDYuNyA2LjcgMTAuMyAxNS41IDEwLjMgMjQuOSAwIDkuMy0zLjcgMTguMS0xMC4zIDI0LjdMMzcyLjQgNjUzYy0xLjcgMS43LTIuNiA0LTIuNiA2LjRzLjkgNC43IDIuNiA2LjRsMzYuOSAzNi45YTkgOSAwIDAwMTIuNyAwbDIxNS42LTIxNS42YzE5LjktMTkuOSAzMC44LTQ2LjMgMzAuOC03NC40cy0xMS01NC42LTMwLjgtNzQuNGMtNDEuMS00MS4xLTEwNy45LTQxLTE0OSAwTDQ2MyAzNjQgMjI0LjggNjAyLjFBMTcyLjIyIDE3Mi4yMiAwIDAwMTc0IDcyNC44YzAgNDYuMyAxOC4xIDg5LjggNTAuOCAxMjIuNSAzMy45IDMzLjggNzguMyA1MC43IDEyMi43IDUwLjcgNDQuNCAwIDg4LjgtMTYuOSAxMjIuNi01MC43bDMwOS4yLTMwOUM4MjQuOCA0OTIuNyA4NTAgNDMyIDg1MCAzNjcuNWMuMS02NC42LTI1LjEtMTI1LjMtNzAuNy0xNzAuOXoiIC8+PC9zdmc+) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](PaperClipOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'PaperClipOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/PictureTwoTone.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$PictureTwoTone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/PictureTwoTone.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var PictureTwoTone = function PictureTwoTone(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$PictureTwoTone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![picture](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkyOCAxNjBIOTZjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjY0MGMwIDE3LjcgMTQuMyAzMiAzMiAzMmg4MzJjMTcuNyAwIDMyLTE0LjMgMzItMzJWMTkyYzAtMTcuNy0xNC4zLTMyLTMyLTMyem0tNDAgNjMySDEzNnYtMzkuOWwxMzguNS0xNjQuMyAxNTAuMSAxNzhMNjU4LjEgNDg5IDg4OCA3NjEuNlY3OTJ6bTAtMTI5LjhMNjY0LjIgMzk2LjhjLTMuMi0zLjgtOS0zLjgtMTIuMiAwTDQyNC42IDY2Ni40bC0xNDQtMTcwLjdjLTMuMi0zLjgtOS0zLjgtMTIuMiAwTDEzNiA2NTIuN1YyMzJoNzUydjQzMC4yeiIgZmlsbD0iIzE2NzdmZiIgLz48cGF0aCBkPSJNNDI0LjYgNzY1LjhsLTE1MC4xLTE3OEwxMzYgNzUyLjFWNzkyaDc1MnYtMzAuNEw2NTguMSA0ODl6IiBmaWxsPSIjZTZmNGZmIiAvPjxwYXRoIGQ9Ik0xMzYgNjUyLjdsMTMyLjQtMTU3YzMuMi0zLjggOS0zLjggMTIuMiAwbDE0NCAxNzAuN0w2NTIgMzk2LjhjMy4yLTMuOCA5LTMuOCAxMi4yIDBMODg4IDY2Mi4yVjIzMkgxMzZ2NDIwLjd6TTMwNCAyODBhODggODggMCAxMTAgMTc2IDg4IDg4IDAgMDEwLTE3NnoiIGZpbGw9IiNlNmY0ZmYiIC8+PHBhdGggZD0iTTI3NiAzNjhhMjggMjggMCAxMDU2IDAgMjggMjggMCAxMC01NiAweiIgZmlsbD0iI2U2ZjRmZiIgLz48cGF0aCBkPSJNMzA0IDQ1NmE4OCA4OCAwIDEwMC0xNzYgODggODggMCAwMDAgMTc2em0wLTExNmMxNS41IDAgMjggMTIuNSAyOCAyOHMtMTIuNSAyOC0yOCAyOC0yOC0xMi41LTI4LTI4IDEyLjUtMjggMjgtMjh6IiBmaWxsPSIjMTY3N2ZmIiAvPjwvc3ZnPg==) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](PictureTwoTone);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'PictureTwoTone';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/DeleteOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$DeleteOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/DeleteOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var DeleteOutlined = function DeleteOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$DeleteOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![delete](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTM2MCAxODRoLThjNC40IDAgOC0zLjYgOC04djhoMzA0di04YzAgNC40IDMuNiA4IDggOGgtOHY3Mmg3MnYtODBjMC0zNS4zLTI4LjctNjQtNjQtNjRIMzUyYy0zNS4zIDAtNjQgMjguNy02NCA2NHY4MGg3MnYtNzJ6bTUwNCA3MkgxNjBjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjMyYzAgNC40IDMuNiA4IDggOGg2MC40bDI0LjcgNTIzYzEuNiAzNC4xIDI5LjggNjEgNjMuOSA2MWg0NTRjMzQuMiAwIDYyLjMtMjYuOCA2My45LTYxbDI0LjctNTIzSDg4OGM0LjQgMCA4LTMuNiA4LTh2LTMyYzAtMTcuNy0xNC4zLTMyLTMyLTMyek03MzEuMyA4NDBIMjkyLjdsLTI0LjItNTEyaDQ4N2wtMjQuMiA1MTJ6IiAvPjwvc3ZnPg==) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](DeleteOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'DeleteOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/DownloadOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$DownloadOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/DownloadOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
;
;
;
;
var DownloadOutlined = function DownloadOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$DownloadOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![download](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUwNS43IDY2MWE4IDggMCAwMDEyLjYgMGwxMTItMTQxLjdjNC4xLTUuMi40LTEyLjktNi4zLTEyLjloLTc0LjFWMTY4YzAtNC40LTMuNi04LTgtOGgtNjBjLTQuNCAwLTggMy42LTggOHYzMzguM0g0MDBjLTYuNyAwLTEwLjQgNy43LTYuMyAxMi45bDExMiAxNDEuOHpNODc4IDYyNmgtNjBjLTQuNCAwLTggMy42LTggOHYxNTRIMjE0VjYzNGMwLTQuNC0zLjYtOC04LThoLTYwYy00LjQgMC04IDMuNi04IDh2MTk4YzAgMTcuNyAxNC4zIDMyIDMyIDMyaDY4NGMxNy43IDAgMzItMTQuMyAzMi0zMlY2MzRjMC00LjQtMy42LTgtOC04eiIgLz48L3N2Zz4=) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](DownloadOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'DownloadOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/EditOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$EditOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/EditOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
const EditOutlined = (props, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$EditOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
/**![edit](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI1Ny43IDc1MmMyIDAgNC0uMiA2LS41TDQzMS45IDcyMmMyLS40IDMuOS0xLjMgNS4zLTIuOGw0MjMuOS00MjMuOWE5Ljk2IDkuOTYgMCAwMDAtMTQuMUw2OTQuOSAxMTQuOWMtMS45LTEuOS00LjQtMi45LTcuMS0yLjlzLTUuMiAxLTcuMSAyLjlMMjU2LjggNTM4LjhjLTEuNSAxLjUtMi40IDMuMy0yLjggNS4zbC0yOS41IDE2OC4yYTMzLjUgMzMuNSAwIDAwOS40IDI5LjhjNi42IDYuNCAxNC45IDkuOSAyMy44IDkuOXptNjcuNC0xNzQuNEw2ODcuOCAyMTVsNzMuMyA3My4zLTM2Mi43IDM2Mi42LTg4LjkgMTUuNyAxNS42LTg5ek04ODAgODM2SDE0NGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2MzZjMCA0LjQgMy42IDggOCA4aDc4NGM0LjQgMCA4LTMuNiA4LTh2LTM2YzAtMTcuNy0xNC4zLTMyLTMyLTMyeiIgLz48L3N2Zz4=) */ const RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](EditOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'EditOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/EditOutlined.js [ssr] (ecmascript) <export default as EditOutlined>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditOutlined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EditOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EditOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/EditOutlined.js [ssr] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/UploadOutlined.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$UploadOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/UploadOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/components/AntdIcon.js [ssr] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
const UploadOutlined = (props, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$UploadOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
/**![upload](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQwMCAzMTcuN2g3My45VjY1NmMwIDQuNCAzLjYgOCA4IDhoNjBjNC40IDAgOC0zLjYgOC04VjMxNy43SDYyNGM2LjcgMCAxMC40LTcuNyA2LjMtMTIuOUw1MTguMyAxNjNhOCA4IDAgMDAtMTIuNiAwbC0xMTIgMTQxLjdjLTQuMSA1LjMtLjQgMTMgNi4zIDEzek04NzggNjI2aC02MGMtNC40IDAtOCAzLjYtOCA4djE1NEgyMTRWNjM0YzAtNC40LTMuNi04LTgtOGgtNjBjLTQuNCAwLTggMy42LTggOHYxOThjMCAxNy43IDE0LjMgMzIgMzIgMzJoNjg0YzE3LjcgMCAzMi0xNC4zIDMyLTMyVjYzNGMwLTQuNC0zLjYtOC04LTh6IiAvPjwvc3ZnPg==) */ const RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](UploadOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'UploadOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/UploadOutlined.js [ssr] (ecmascript) <export default as UploadOutlined>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UploadOutlined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UploadOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UploadOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/UploadOutlined.js [ssr] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/rc-checkbox/es/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useMergedState.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
;
;
var _excluded = [
    "prefixCls",
    "className",
    "style",
    "checked",
    "disabled",
    "defaultChecked",
    "type",
    "title",
    "onChange"
];
;
;
;
;
var Checkbox = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"])(function(props, ref) {
    var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? 'rc-checkbox' : _props$prefixCls, className = props.className, style = props.style, checked = props.checked, disabled = props.disabled, _props$defaultChecked = props.defaultChecked, defaultChecked = _props$defaultChecked === void 0 ? false : _props$defaultChecked, _props$type = props.type, type = _props$type === void 0 ? 'checkbox' : _props$type, title = props.title, onChange = props.onChange, inputProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    var inputRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    var holderRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    var _useMergedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(defaultChecked, {
        value: checked
    }), _useMergedState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_useMergedState, 2), rawValue = _useMergedState2[0], setRawValue = _useMergedState2[1];
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useImperativeHandle"])(ref, function() {
        return {
            focus: function focus(options) {
                var _inputRef$current;
                (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus(options);
            },
            blur: function blur() {
                var _inputRef$current2;
                (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.blur();
            },
            input: inputRef.current,
            nativeElement: holderRef.current
        };
    });
    var classString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, className, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-checked"), rawValue), "".concat(prefixCls, "-disabled"), disabled));
    var handleChange = function handleChange(e) {
        if (disabled) {
            return;
        }
        if (!('checked' in props)) {
            setRawValue(e.target.checked);
        }
        onChange === null || onChange === void 0 || onChange({
            target: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props), {}, {
                type: type,
                checked: e.target.checked
            }),
            stopPropagation: function stopPropagation() {
                e.stopPropagation();
            },
            preventDefault: function preventDefault() {
                e.preventDefault();
            },
            nativeEvent: e.nativeEvent
        });
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", {
        className: classString,
        title: title,
        style: style,
        ref: holderRef
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("input", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, inputProps, {
        className: "".concat(prefixCls, "-input"),
        ref: inputRef,
        onChange: handleChange,
        disabled: disabled,
        checked: !!rawValue,
        type: type
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", {
        className: "".concat(prefixCls, "-inner")
    }));
});
const __TURBOPACK__default__export__ = Checkbox;
}),
"[project]/Downloads/One click/node_modules/rc-field-form/es/useForm.js [ssr] (ecmascript) <export default as useForm>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useForm",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$field$2d$form$2f$es$2f$useForm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$field$2d$form$2f$es$2f$useForm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-field-form/es/useForm.js [ssr] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/rc-field-form/es/List.js [ssr] (ecmascript) <export default as List>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "List",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$field$2d$form$2f$es$2f$List$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$field$2d$form$2f$es$2f$List$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-field-form/es/List.js [ssr] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/rc-field-form/es/useWatch.js [ssr] (ecmascript) <export default as useWatch>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWatch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$field$2d$form$2f$es$2f$useWatch$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$field$2d$form$2f$es$2f$useWatch$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-field-form/es/useWatch.js [ssr] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/rc-field-form/es/Field.js [ssr] (ecmascript) <export default as Field>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Field",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$field$2d$form$2f$es$2f$Field$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$field$2d$form$2f$es$2f$Field$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-field-form/es/Field.js [ssr] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/rc-field-form/es/FieldContext.js [ssr] (ecmascript) <export default as FieldContext>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$field$2d$form$2f$es$2f$FieldContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$field$2d$form$2f$es$2f$FieldContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-field-form/es/FieldContext.js [ssr] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/rc-field-form/es/ListContext.js [ssr] (ecmascript) <export default as ListContext>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$field$2d$form$2f$es$2f$ListContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$field$2d$form$2f$es$2f$ListContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-field-form/es/ListContext.js [ssr] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/compute-scroll-into-view/dist/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compute",
    ()=>r
]);
const t = (t)=>"object" == typeof t && null != t && 1 === t.nodeType, e = (t, e)=>(!e || "hidden" !== t) && "visible" !== t && "clip" !== t, n = (t, n)=>{
    if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
        const o = getComputedStyle(t, null);
        return e(o.overflowY, n) || e(o.overflowX, n) || ((t)=>{
            const e = ((t)=>{
                if (!t.ownerDocument || !t.ownerDocument.defaultView) return null;
                try {
                    return t.ownerDocument.defaultView.frameElement;
                } catch (t) {
                    return null;
                }
            })(t);
            return !!e && (e.clientHeight < t.scrollHeight || e.clientWidth < t.scrollWidth);
        })(t);
    }
    return !1;
}, o = (t, e, n, o, l, r, i, s)=>r < t && i > e || r > t && i < e ? 0 : r <= t && s <= n || i >= e && s >= n ? r - t - o : i > e && s < n || r < t && s > n ? i - e + l : 0, l = (t)=>{
    const e = t.parentElement;
    return null == e ? t.getRootNode().host || null : e;
}, r = (e, r)=>{
    var i, s, d, h;
    if ("undefined" == typeof document) return [];
    const { scrollMode: c, block: f, inline: u, boundary: a, skipOverflowHiddenElements: g } = r, p = "function" == typeof a ? a : (t)=>t !== a;
    if (!t(e)) throw new TypeError("Invalid target");
    const m = document.scrollingElement || document.documentElement, w = [];
    let W = e;
    for(; t(W) && p(W);){
        if (W = l(W), W === m) {
            w.push(W);
            break;
        }
        null != W && W === document.body && n(W) && !n(document.documentElement) || null != W && n(W, g) && w.push(W);
    }
    const b = null != (s = null == (i = window.visualViewport) ? void 0 : i.width) ? s : innerWidth, H = null != (h = null == (d = window.visualViewport) ? void 0 : d.height) ? h : innerHeight, { scrollX: y, scrollY: M } = window, { height: v, width: E, top: x, right: C, bottom: I, left: R } = e.getBoundingClientRect(), { top: T, right: B, bottom: F, left: V } = ((t)=>{
        const e = window.getComputedStyle(t);
        return {
            top: parseFloat(e.scrollMarginTop) || 0,
            right: parseFloat(e.scrollMarginRight) || 0,
            bottom: parseFloat(e.scrollMarginBottom) || 0,
            left: parseFloat(e.scrollMarginLeft) || 0
        };
    })(e);
    let k = "start" === f || "nearest" === f ? x - T : "end" === f ? I + F : x + v / 2 - T + F, D = "center" === u ? R + E / 2 - V + B : "end" === u ? C + B : R - V;
    const L = [];
    for(let t = 0; t < w.length; t++){
        const e = w[t], { height: l, width: r, top: i, right: s, bottom: d, left: h } = e.getBoundingClientRect();
        if ("if-needed" === c && x >= 0 && R >= 0 && I <= H && C <= b && (e === m && !n(e) || x >= i && I <= d && R >= h && C <= s)) return L;
        const a = getComputedStyle(e), g = parseInt(a.borderLeftWidth, 10), p = parseInt(a.borderTopWidth, 10), W = parseInt(a.borderRightWidth, 10), T = parseInt(a.borderBottomWidth, 10);
        let B = 0, F = 0;
        const V = "offsetWidth" in e ? e.offsetWidth - e.clientWidth - g - W : 0, S = "offsetHeight" in e ? e.offsetHeight - e.clientHeight - p - T : 0, X = "offsetWidth" in e ? 0 === e.offsetWidth ? 0 : r / e.offsetWidth : 0, Y = "offsetHeight" in e ? 0 === e.offsetHeight ? 0 : l / e.offsetHeight : 0;
        if (m === e) B = "start" === f ? k : "end" === f ? k - H : "nearest" === f ? o(M, M + H, H, p, T, M + k, M + k + v, v) : k - H / 2, F = "start" === u ? D : "center" === u ? D - b / 2 : "end" === u ? D - b : o(y, y + b, b, g, W, y + D, y + D + E, E), B = Math.max(0, B + M), F = Math.max(0, F + y);
        else {
            B = "start" === f ? k - i - p : "end" === f ? k - d + T + S : "nearest" === f ? o(i, d, l, p, T + S, k, k + v, v) : k - (i + l / 2) + S / 2, F = "start" === u ? D - h - g : "center" === u ? D - (h + r / 2) + V / 2 : "end" === u ? D - s + W + V : o(h, s, r, g, W + V, D, D + E, E);
            const { scrollLeft: t, scrollTop: n } = e;
            B = 0 === Y ? 0 : Math.max(0, Math.min(n + B / Y, e.scrollHeight - l / Y + S)), F = 0 === X ? 0 : Math.max(0, Math.min(t + F / X, e.scrollWidth - r / X + V)), k += n - B, D += t - F;
        }
        L.push({
            el: e,
            top: B,
            left: F
        });
    }
    return L;
};
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Downloads/One click/node_modules/scroll-into-view-if-needed/dist/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>e
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$compute$2d$scroll$2d$into$2d$view$2f$dist$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/compute-scroll-into-view/dist/index.js [ssr] (ecmascript)");
;
const o = (t)=>!1 === t ? {
        block: "end",
        inline: "nearest"
    } : ((t)=>t === Object(t) && 0 !== Object.keys(t).length)(t) ? t : {
        block: "start",
        inline: "nearest"
    };
function e(e, r) {
    if (!e.isConnected || !((t)=>{
        let o = t;
        for(; o && o.parentNode;){
            if (o.parentNode === document) return !0;
            o = o.parentNode instanceof ShadowRoot ? o.parentNode.host : o.parentNode;
        }
        return !1;
    })(e)) return;
    const n = ((t)=>{
        const o = window.getComputedStyle(t);
        return {
            top: parseFloat(o.scrollMarginTop) || 0,
            right: parseFloat(o.scrollMarginRight) || 0,
            bottom: parseFloat(o.scrollMarginBottom) || 0,
            left: parseFloat(o.scrollMarginLeft) || 0
        };
    })(e);
    if (((t)=>"object" == typeof t && "function" == typeof t.behavior)(r)) return r.behavior((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$compute$2d$scroll$2d$into$2d$view$2f$dist$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["compute"])(e, r));
    const l = "boolean" == typeof r || null == r ? void 0 : r.behavior;
    for (const { el: a, top: i, left: s } of (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$compute$2d$scroll$2d$into$2d$view$2f$dist$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["compute"])(e, o(r))){
        const t = i - n.top + n.bottom, o = s - n.left + n.right;
        a.scroll({
            top: t,
            left: o,
            behavior: l
        });
    }
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Downloads/One click/node_modules/rc-pagination/es/locale/zh_CN.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var locale = {
    // Options
    items_per_page: '条/页',
    jump_to: '跳至',
    jump_to_confirm: '确定',
    page: '页',
    // Pagination
    prev_page: '上一页',
    next_page: '下一页',
    prev_5: '向前 5 页',
    next_5: '向后 5 页',
    prev_3: '向前 3 页',
    next_3: '向后 3 页',
    page_size: '页码'
};
const __TURBOPACK__default__export__ = locale;
}),
"[project]/Downloads/One click/node_modules/rc-pagination/es/Options.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/KeyCode.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
var defaultPageSizeOptions = [
    10,
    20,
    50,
    100
];
var Options = function Options(props) {
    var _props$pageSizeOption = props.pageSizeOptions, pageSizeOptions = _props$pageSizeOption === void 0 ? defaultPageSizeOptions : _props$pageSizeOption, locale = props.locale, changeSize = props.changeSize, pageSize = props.pageSize, goButton = props.goButton, quickGo = props.quickGo, rootPrefixCls = props.rootPrefixCls, disabled = props.disabled, buildOptionText = props.buildOptionText, showSizeChanger = props.showSizeChanger, sizeChangerRender = props.sizeChangerRender;
    var _React$useState = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useState(''), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), goInputText = _React$useState2[0], setGoInputText = _React$useState2[1];
    var getValidValue = function getValidValue() {
        return !goInputText || Number.isNaN(goInputText) ? undefined : Number(goInputText);
    };
    var mergeBuildOptionText = typeof buildOptionText === 'function' ? buildOptionText : function(value) {
        return "".concat(value, " ").concat(locale.items_per_page);
    };
    var handleChange = function handleChange(e) {
        setGoInputText(e.target.value);
    };
    var handleBlur = function handleBlur(e) {
        if (goButton || goInputText === '') {
            return;
        }
        setGoInputText('');
        if (e.relatedTarget && (e.relatedTarget.className.indexOf("".concat(rootPrefixCls, "-item-link")) >= 0 || e.relatedTarget.className.indexOf("".concat(rootPrefixCls, "-item")) >= 0)) {
            return;
        }
        quickGo === null || quickGo === void 0 || quickGo(getValidValue());
    };
    var go = function go(e) {
        if (goInputText === '') {
            return;
        }
        if (e.keyCode === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].ENTER || e.type === 'click') {
            setGoInputText('');
            quickGo === null || quickGo === void 0 || quickGo(getValidValue());
        }
    };
    var getPageSizeOptions = function getPageSizeOptions() {
        if (pageSizeOptions.some(function(option) {
            return option.toString() === pageSize.toString();
        })) {
            return pageSizeOptions;
        }
        return pageSizeOptions.concat([
            pageSize
        ]).sort(function(a, b) {
            var numberA = Number.isNaN(Number(a)) ? 0 : Number(a);
            var numberB = Number.isNaN(Number(b)) ? 0 : Number(b);
            return numberA - numberB;
        });
    };
    // ============== cls ==============
    var prefixCls = "".concat(rootPrefixCls, "-options");
    // ============== render ==============
    if (!showSizeChanger && !quickGo) {
        return null;
    }
    var changeSelect = null;
    var goInput = null;
    var gotoButton = null;
    // >>>>> Size Changer
    if (showSizeChanger && sizeChangerRender) {
        changeSelect = sizeChangerRender({
            disabled: disabled,
            size: pageSize,
            onSizeChange: function onSizeChange(nextValue) {
                changeSize === null || changeSize === void 0 || changeSize(Number(nextValue));
            },
            'aria-label': locale.page_size,
            className: "".concat(prefixCls, "-size-changer"),
            options: getPageSizeOptions().map(function(opt) {
                return {
                    label: mergeBuildOptionText(opt),
                    value: opt
                };
            })
        });
    }
    // >>>>> Quick Go
    if (quickGo) {
        if (goButton) {
            gotoButton = typeof goButton === 'boolean' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("button", {
                type: "button",
                onClick: go,
                onKeyUp: go,
                disabled: disabled,
                className: "".concat(prefixCls, "-quick-jumper-button")
            }, locale.jump_to_confirm) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("span", {
                onClick: go,
                onKeyUp: go
            }, goButton);
        }
        goInput = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("div", {
            className: "".concat(prefixCls, "-quick-jumper")
        }, locale.jump_to, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("input", {
            disabled: disabled,
            type: "text",
            value: goInputText,
            onChange: handleChange,
            onKeyUp: go,
            onBlur: handleBlur,
            "aria-label": locale.page
        }), locale.page, gotoButton);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("li", {
        className: prefixCls
    }, changeSelect, goInput);
};
if ("TURBOPACK compile-time truthy", 1) {
    Options.displayName = 'Options';
}
const __TURBOPACK__default__export__ = Options;
}),
"[project]/Downloads/One click/node_modules/rc-pagination/es/Pager.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [ssr] (ecmascript)");
/* eslint react/prop-types: 0 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
var Pager = function Pager(props) {
    var rootPrefixCls = props.rootPrefixCls, page = props.page, active = props.active, className = props.className, showTitle = props.showTitle, onClick = props.onClick, onKeyPress = props.onKeyPress, itemRender = props.itemRender;
    var prefixCls = "".concat(rootPrefixCls, "-item");
    var cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, "".concat(prefixCls, "-").concat(page), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-active"), active), "".concat(prefixCls, "-disabled"), !page), className);
    var handleClick = function handleClick() {
        onClick(page);
    };
    var handleKeyPress = function handleKeyPress(e) {
        onKeyPress(e, onClick, page);
    };
    var pager = itemRender(page, 'page', /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("a", {
        rel: "nofollow"
    }, page));
    return pager ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("li", {
        title: showTitle ? String(page) : null,
        className: cls,
        onClick: handleClick,
        onKeyDown: handleKeyPress,
        tabIndex: 0
    }, pager) : null;
};
if ("TURBOPACK compile-time truthy", 1) {
    Pager.displayName = 'Pager';
}
const __TURBOPACK__default__export__ = Pager;
}),
"[project]/Downloads/One click/node_modules/rc-pagination/es/Pagination.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useMergedState.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/KeyCode.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/pickAttrs.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/warning.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$pagination$2f$es$2f$locale$2f$zh_CN$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-pagination/es/locale/zh_CN.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$pagination$2f$es$2f$Options$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-pagination/es/Options.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$pagination$2f$es$2f$Pager$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-pagination/es/Pager.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var defaultItemRender = function defaultItemRender(page, type, element) {
    return element;
};
function noop() {}
function isInteger(v) {
    var value = Number(v);
    return typeof value === 'number' && !Number.isNaN(value) && isFinite(value) && Math.floor(value) === value;
}
function calculatePage(p, pageSize, total) {
    var _pageSize = typeof p === 'undefined' ? pageSize : p;
    return Math.floor((total - 1) / _pageSize) + 1;
}
var Pagination = function Pagination(props) {
    var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? 'rc-pagination' : _props$prefixCls, _props$selectPrefixCl = props.selectPrefixCls, selectPrefixCls = _props$selectPrefixCl === void 0 ? 'rc-select' : _props$selectPrefixCl, className = props.className, currentProp = props.current, _props$defaultCurrent = props.defaultCurrent, defaultCurrent = _props$defaultCurrent === void 0 ? 1 : _props$defaultCurrent, _props$total = props.total, total = _props$total === void 0 ? 0 : _props$total, pageSizeProp = props.pageSize, _props$defaultPageSiz = props.defaultPageSize, defaultPageSize = _props$defaultPageSiz === void 0 ? 10 : _props$defaultPageSiz, _props$onChange = props.onChange, onChange = _props$onChange === void 0 ? noop : _props$onChange, hideOnSinglePage = props.hideOnSinglePage, align = props.align, _props$showPrevNextJu = props.showPrevNextJumpers, showPrevNextJumpers = _props$showPrevNextJu === void 0 ? true : _props$showPrevNextJu, showQuickJumper = props.showQuickJumper, showLessItems = props.showLessItems, _props$showTitle = props.showTitle, showTitle = _props$showTitle === void 0 ? true : _props$showTitle, _props$onShowSizeChan = props.onShowSizeChange, onShowSizeChange = _props$onShowSizeChan === void 0 ? noop : _props$onShowSizeChan, _props$locale = props.locale, locale = _props$locale === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$pagination$2f$es$2f$locale$2f$zh_CN$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"] : _props$locale, style = props.style, _props$totalBoundaryS = props.totalBoundaryShowSizeChanger, totalBoundaryShowSizeChanger = _props$totalBoundaryS === void 0 ? 50 : _props$totalBoundaryS, disabled = props.disabled, simple = props.simple, showTotal = props.showTotal, _props$showSizeChange = props.showSizeChanger, showSizeChanger = _props$showSizeChange === void 0 ? total > totalBoundaryShowSizeChanger : _props$showSizeChange, sizeChangerRender = props.sizeChangerRender, pageSizeOptions = props.pageSizeOptions, _props$itemRender = props.itemRender, itemRender = _props$itemRender === void 0 ? defaultItemRender : _props$itemRender, jumpPrevIcon = props.jumpPrevIcon, jumpNextIcon = props.jumpNextIcon, prevIcon = props.prevIcon, nextIcon = props.nextIcon;
    var paginationRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useRef(null);
    var _useMergedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(10, {
        value: pageSizeProp,
        defaultValue: defaultPageSize
    }), _useMergedState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_useMergedState, 2), pageSize = _useMergedState2[0], setPageSize = _useMergedState2[1];
    var _useMergedState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(1, {
        value: currentProp,
        defaultValue: defaultCurrent,
        postState: function postState(c) {
            return Math.max(1, Math.min(c, calculatePage(undefined, pageSize, total)));
        }
    }), _useMergedState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_useMergedState3, 2), current = _useMergedState4[0], setCurrent = _useMergedState4[1];
    var _React$useState = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useState(current), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), internalInputVal = _React$useState2[0], setInternalInputVal = _React$useState2[1];
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(function() {
        setInternalInputVal(current);
    }, [
        current
    ]);
    var hasOnChange = onChange !== noop;
    var hasCurrent = 'current' in props;
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(hasCurrent ? hasOnChange : true, 'You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.');
    }
    var jumpPrevPage = Math.max(1, current - (showLessItems ? 3 : 5));
    var jumpNextPage = Math.min(calculatePage(undefined, pageSize, total), current + (showLessItems ? 3 : 5));
    function getItemIcon(icon, label) {
        var iconNode = icon || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("button", {
            type: "button",
            "aria-label": label,
            className: "".concat(prefixCls, "-item-link")
        });
        if (typeof icon === 'function') {
            iconNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(icon, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props));
        }
        return iconNode;
    }
    function getValidValue(e) {
        var inputValue = e.target.value;
        var allPages = calculatePage(undefined, pageSize, total);
        var value;
        if (inputValue === '') {
            value = inputValue;
        } else if (Number.isNaN(Number(inputValue))) {
            value = internalInputVal;
        } else if (inputValue >= allPages) {
            value = allPages;
        } else {
            value = Number(inputValue);
        }
        return value;
    }
    function isValid(page) {
        return isInteger(page) && page !== current && isInteger(total) && total > 0;
    }
    var shouldDisplayQuickJumper = total > pageSize ? showQuickJumper : false;
    /**
   * prevent "up arrow" key reseting cursor position within textbox
   * @see https://stackoverflow.com/a/1081114
   */ function handleKeyDown(event) {
        if (event.keyCode === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].UP || event.keyCode === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].DOWN) {
            event.preventDefault();
        }
    }
    function handleKeyUp(event) {
        var value = getValidValue(event);
        if (value !== internalInputVal) {
            setInternalInputVal(value);
        }
        switch(event.keyCode){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].ENTER:
                handleChange(value);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].UP:
                handleChange(value - 1);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].DOWN:
                handleChange(value + 1);
                break;
            default:
                break;
        }
    }
    function handleBlur(event) {
        handleChange(getValidValue(event));
    }
    function changePageSize(size) {
        var newCurrent = calculatePage(size, pageSize, total);
        var nextCurrent = current > newCurrent && newCurrent !== 0 ? newCurrent : current;
        setPageSize(size);
        setInternalInputVal(nextCurrent);
        onShowSizeChange === null || onShowSizeChange === void 0 || onShowSizeChange(current, size);
        setCurrent(nextCurrent);
        onChange === null || onChange === void 0 || onChange(nextCurrent, size);
    }
    function handleChange(page) {
        if (isValid(page) && !disabled) {
            var currentPage = calculatePage(undefined, pageSize, total);
            var newPage = page;
            if (page > currentPage) {
                newPage = currentPage;
            } else if (page < 1) {
                newPage = 1;
            }
            if (newPage !== internalInputVal) {
                setInternalInputVal(newPage);
            }
            setCurrent(newPage);
            onChange === null || onChange === void 0 || onChange(newPage, pageSize);
            return newPage;
        }
        return current;
    }
    var hasPrev = current > 1;
    var hasNext = current < calculatePage(undefined, pageSize, total);
    function prevHandle() {
        if (hasPrev) handleChange(current - 1);
    }
    function nextHandle() {
        if (hasNext) handleChange(current + 1);
    }
    function jumpPrevHandle() {
        handleChange(jumpPrevPage);
    }
    function jumpNextHandle() {
        handleChange(jumpNextPage);
    }
    function runIfEnter(event, callback) {
        if (event.key === 'Enter' || event.charCode === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].ENTER || event.keyCode === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].ENTER) {
            for(var _len = arguments.length, restParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                restParams[_key - 2] = arguments[_key];
            }
            callback.apply(void 0, restParams);
        }
    }
    function runIfEnterPrev(event) {
        runIfEnter(event, prevHandle);
    }
    function runIfEnterNext(event) {
        runIfEnter(event, nextHandle);
    }
    function runIfEnterJumpPrev(event) {
        runIfEnter(event, jumpPrevHandle);
    }
    function runIfEnterJumpNext(event) {
        runIfEnter(event, jumpNextHandle);
    }
    function renderPrev(prevPage) {
        var prevButton = itemRender(prevPage, 'prev', getItemIcon(prevIcon, 'prev page'));
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].isValidElement(prevButton) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].cloneElement(prevButton, {
            disabled: !hasPrev
        }) : prevButton;
    }
    function renderNext(nextPage) {
        var nextButton = itemRender(nextPage, 'next', getItemIcon(nextIcon, 'next page'));
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].isValidElement(nextButton) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].cloneElement(nextButton, {
            disabled: !hasNext
        }) : nextButton;
    }
    function handleGoTO(event) {
        if (event.type === 'click' || event.keyCode === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].ENTER) {
            handleChange(internalInputVal);
        }
    }
    var jumpPrev = null;
    var dataOrAriaAttributeProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(props, {
        aria: true,
        data: true
    });
    var totalText = showTotal && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("li", {
        className: "".concat(prefixCls, "-total-text")
    }, showTotal(total, [
        total === 0 ? 0 : (current - 1) * pageSize + 1,
        current * pageSize > total ? total : current * pageSize
    ]));
    var jumpNext = null;
    var allPages = calculatePage(undefined, pageSize, total);
    // ================== Render ==================
    // When hideOnSinglePage is true and there is only 1 page, hide the pager
    if (hideOnSinglePage && total <= pageSize) {
        return null;
    }
    var pagerList = [];
    var pagerProps = {
        rootPrefixCls: prefixCls,
        onClick: handleChange,
        onKeyPress: runIfEnter,
        showTitle: showTitle,
        itemRender: itemRender,
        page: -1
    };
    var prevPage = current - 1 > 0 ? current - 1 : 0;
    var nextPage = current + 1 < allPages ? current + 1 : allPages;
    var goButton = showQuickJumper && showQuickJumper.goButton;
    // ================== Simple ==================
    // FIXME: ts type
    var isReadOnly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(simple) === 'object' ? simple.readOnly : !simple;
    var gotoButton = goButton;
    var simplePager = null;
    if (simple) {
        // ====== Simple quick jump ======
        if (goButton) {
            if (typeof goButton === 'boolean') {
                gotoButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("button", {
                    type: "button",
                    onClick: handleGoTO,
                    onKeyUp: handleGoTO
                }, locale.jump_to_confirm);
            } else {
                gotoButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("span", {
                    onClick: handleGoTO,
                    onKeyUp: handleGoTO
                }, goButton);
            }
            gotoButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("li", {
                title: showTitle ? "".concat(locale.jump_to).concat(current, "/").concat(allPages) : null,
                className: "".concat(prefixCls, "-simple-pager")
            }, gotoButton);
        }
        simplePager = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("li", {
            title: showTitle ? "".concat(current, "/").concat(allPages) : null,
            className: "".concat(prefixCls, "-simple-pager")
        }, isReadOnly ? internalInputVal : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("input", {
            type: "text",
            "aria-label": locale.jump_to,
            value: internalInputVal,
            disabled: disabled,
            onKeyDown: handleKeyDown,
            onKeyUp: handleKeyUp,
            onChange: handleKeyUp,
            onBlur: handleBlur,
            size: 3
        }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("span", {
            className: "".concat(prefixCls, "-slash")
        }, "/"), allPages);
    }
    // ====================== Normal ======================
    var pageBufferSize = showLessItems ? 1 : 2;
    if (allPages <= 3 + pageBufferSize * 2) {
        if (!allPages) {
            pagerList.push(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$pagination$2f$es$2f$Pager$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, pagerProps, {
                key: "noPager",
                page: 1,
                className: "".concat(prefixCls, "-item-disabled")
            })));
        }
        for(var i = 1; i <= allPages; i += 1){
            pagerList.push(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$pagination$2f$es$2f$Pager$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, pagerProps, {
                key: i,
                page: i,
                active: current === i
            })));
        }
    } else {
        var prevItemTitle = showLessItems ? locale.prev_3 : locale.prev_5;
        var nextItemTitle = showLessItems ? locale.next_3 : locale.next_5;
        var jumpPrevContent = itemRender(jumpPrevPage, 'jump-prev', getItemIcon(jumpPrevIcon, 'prev page'));
        var jumpNextContent = itemRender(jumpNextPage, 'jump-next', getItemIcon(jumpNextIcon, 'next page'));
        if (showPrevNextJumpers) {
            jumpPrev = jumpPrevContent ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("li", {
                title: showTitle ? prevItemTitle : null,
                key: "prev",
                onClick: jumpPrevHandle,
                tabIndex: 0,
                onKeyDown: runIfEnterJumpPrev,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-jump-prev"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-jump-prev-custom-icon"), !!jumpPrevIcon))
            }, jumpPrevContent) : null;
            jumpNext = jumpNextContent ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("li", {
                title: showTitle ? nextItemTitle : null,
                key: "next",
                onClick: jumpNextHandle,
                tabIndex: 0,
                onKeyDown: runIfEnterJumpNext,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-jump-next"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-jump-next-custom-icon"), !!jumpNextIcon))
            }, jumpNextContent) : null;
        }
        var left = Math.max(1, current - pageBufferSize);
        var right = Math.min(current + pageBufferSize, allPages);
        if (current - 1 <= pageBufferSize) {
            right = 1 + pageBufferSize * 2;
        }
        if (allPages - current <= pageBufferSize) {
            left = allPages - pageBufferSize * 2;
        }
        for(var _i = left; _i <= right; _i += 1){
            pagerList.push(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$pagination$2f$es$2f$Pager$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, pagerProps, {
                key: _i,
                page: _i,
                active: current === _i
            })));
        }
        if (current - 1 >= pageBufferSize * 2 && current !== 1 + 2) {
            pagerList[0] = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].cloneElement(pagerList[0], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-item-after-jump-prev"), pagerList[0].props.className)
            });
            pagerList.unshift(jumpPrev);
        }
        if (allPages - current >= pageBufferSize * 2 && current !== allPages - 2) {
            var lastOne = pagerList[pagerList.length - 1];
            pagerList[pagerList.length - 1] = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].cloneElement(lastOne, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-item-before-jump-next"), lastOne.props.className)
            });
            pagerList.push(jumpNext);
        }
        if (left !== 1) {
            pagerList.unshift(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$pagination$2f$es$2f$Pager$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, pagerProps, {
                key: 1,
                page: 1
            })));
        }
        if (right !== allPages) {
            pagerList.push(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$pagination$2f$es$2f$Pager$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, pagerProps, {
                key: allPages,
                page: allPages
            })));
        }
    }
    var prev = renderPrev(prevPage);
    if (prev) {
        var prevDisabled = !hasPrev || !allPages;
        prev = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("li", {
            title: showTitle ? locale.prev_page : null,
            onClick: prevHandle,
            tabIndex: prevDisabled ? null : 0,
            onKeyDown: runIfEnterPrev,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-prev"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-disabled"), prevDisabled)),
            "aria-disabled": prevDisabled
        }, prev);
    }
    var next = renderNext(nextPage);
    if (next) {
        var nextDisabled, nextTabIndex;
        if (simple) {
            nextDisabled = !hasNext;
            nextTabIndex = hasPrev ? 0 : null;
        } else {
            nextDisabled = !hasNext || !allPages;
            nextTabIndex = nextDisabled ? null : 0;
        }
        next = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("li", {
            title: showTitle ? locale.next_page : null,
            onClick: nextHandle,
            tabIndex: nextTabIndex,
            onKeyDown: runIfEnterNext,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-next"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-disabled"), nextDisabled)),
            "aria-disabled": nextDisabled
        }, next);
    }
    var cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, className, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-start"), align === 'start'), "".concat(prefixCls, "-center"), align === 'center'), "".concat(prefixCls, "-end"), align === 'end'), "".concat(prefixCls, "-simple"), simple), "".concat(prefixCls, "-disabled"), disabled));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("ul", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        className: cls,
        style: style,
        ref: paginationRef
    }, dataOrAriaAttributeProps), totalText, prev, simple ? simplePager : pagerList, next, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$pagination$2f$es$2f$Options$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        locale: locale,
        rootPrefixCls: prefixCls,
        disabled: disabled,
        selectPrefixCls: selectPrefixCls,
        changeSize: changePageSize,
        pageSize: pageSize,
        pageSizeOptions: pageSizeOptions,
        quickGo: shouldDisplayQuickJumper ? handleChange : null,
        goButton: gotoButton,
        showSizeChanger: showSizeChanger,
        sizeChangerRender: sizeChangerRender
    }));
};
if ("TURBOPACK compile-time truthy", 1) {
    Pagination.displayName = 'Pagination';
}
const __TURBOPACK__default__export__ = Pagination;
}),
"[project]/Downloads/One click/node_modules/rc-pagination/es/index.js [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$pagination$2f$es$2f$Pagination$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-pagination/es/Pagination.js [ssr] (ecmascript)");
;
}),
"[project]/Downloads/One click/node_modules/throttle-debounce/esm/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable no-undefined,no-param-reassign,no-shadow */ /**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)
 *                                            are most useful.
 * @param {Function} callback -               A function to be executed after delay milliseconds. The `this` context and all arguments are passed through,
 *                                            as-is, to `callback` when the throttled-function is executed.
 * @param {object} [options] -              An object to configure options.
 * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds
 *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
 *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for
 *                                            `delay` milliseconds, the internal counter is reset).
 * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
 *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
 *                                            callback will never executed if both noLeading = true and noTrailing = true.
 * @param {boolean} [options.debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is
 *                                            false (at end), schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function} A new, throttled, function.
 */ __turbopack_context__.s([
    "debounce",
    ()=>debounce,
    "throttle",
    ()=>throttle
]);
function throttle(delay, callback, options) {
    var _ref = options || {}, _ref$noTrailing = _ref.noTrailing, noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing, _ref$noLeading = _ref.noLeading, noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading, _ref$debounceMode = _ref.debounceMode, debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;
    /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */ var timeoutID;
    var cancelled = false;
    // Keep track of the last time `callback` was executed.
    var lastExec = 0;
    // Function to clear existing timeout
    function clearExistingTimeout() {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
    }
    // Function to cancel next exec
    function cancel(options) {
        var _ref2 = options || {}, _ref2$upcomingOnly = _ref2.upcomingOnly, upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;
        clearExistingTimeout();
        cancelled = !upcomingOnly;
    }
    /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */ function wrapper() {
        for(var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++){
            arguments_[_key] = arguments[_key];
        }
        var self = this;
        var elapsed = Date.now() - lastExec;
        if (cancelled) {
            return;
        }
        // Execute `callback` and update the `lastExec` timestamp.
        function exec() {
            lastExec = Date.now();
            callback.apply(self, arguments_);
        }
        /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */ function clear() {
            timeoutID = undefined;
        }
        if (!noLeading && debounceMode && !timeoutID) {
            /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`
       * and noLeading != true.
       */ exec();
        }
        clearExistingTimeout();
        if (debounceMode === undefined && elapsed > delay) {
            if (noLeading) {
                /*
         * In throttle mode with noLeading, if `delay` time has
         * been exceeded, update `lastExec` and schedule `callback`
         * to execute after `delay` ms.
         */ lastExec = Date.now();
                if (!noTrailing) {
                    timeoutID = setTimeout(debounceMode ? clear : exec, delay);
                }
            } else {
                /*
         * In throttle mode without noLeading, if `delay` time has been exceeded, execute
         * `callback`.
         */ exec();
            }
        } else if (noTrailing !== true) {
            /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */ timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
        }
    }
    wrapper.cancel = cancel;
    // Return the wrapper function.
    return wrapper;
}
/* eslint-disable no-undefined */ /**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param {number} delay -               A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param {Function} callback -          A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                        to `callback` when the debounced-function is executed.
 * @param {object} [options] -           An object to configure options.
 * @param {boolean} [options.atBegin] -  Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                        after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                        (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 *
 * @returns {Function} A new, debounced function.
 */ function debounce(delay, callback, options) {
    var _ref = options || {}, _ref$atBegin = _ref.atBegin, atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;
    return throttle(delay, callback, {
        debounceMode: atBegin !== false
    });
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectDestructuringEmpty
]);
function _objectDestructuringEmpty(t) {
    if (null == t) throw new TypeError("Cannot destructure " + t);
}
;
}),
"[project]/Downloads/One click/node_modules/rc-input/es/utils/commonUtils.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasAddon",
    ()=>hasAddon,
    "hasPrefixSuffix",
    ()=>hasPrefixSuffix,
    "resolveOnChange",
    ()=>resolveOnChange,
    "triggerFocus",
    ()=>triggerFocus
]);
function hasAddon(props) {
    return !!(props.addonBefore || props.addonAfter);
}
function hasPrefixSuffix(props) {
    return !!(props.prefix || props.suffix || props.allowClear);
}
// TODO: It's better to use `Proxy` replace the `element.value`. But we still need support IE11.
function cloneEvent(event, target, value) {
    // A bug report filed on WebKit's Bugzilla tracker, dating back to 2009, specifically addresses the issue of cloneNode() not copying files of <input type="file"> elements.
    // As of the last update, this bug was still marked as "NEW," indicating that it might not have been resolved yet​​.
    // https://bugs.webkit.org/show_bug.cgi?id=28123
    var currentTarget = target.cloneNode(true);
    // click clear icon
    var newEvent = Object.create(event, {
        target: {
            value: currentTarget
        },
        currentTarget: {
            value: currentTarget
        }
    });
    // Fill data
    currentTarget.value = value;
    // Fill selection. Some type like `email` not support selection
    // https://github.com/ant-design/ant-design/issues/47833
    if (typeof target.selectionStart === 'number' && typeof target.selectionEnd === 'number') {
        currentTarget.selectionStart = target.selectionStart;
        currentTarget.selectionEnd = target.selectionEnd;
    }
    currentTarget.setSelectionRange = function() {
        target.setSelectionRange.apply(target, arguments);
    };
    return newEvent;
}
function resolveOnChange(target, e, onChange, targetValue) {
    if (!onChange) {
        return;
    }
    var event = e;
    if (e.type === 'click') {
        // Clone a new target for event.
        // Avoid the following usage, the setQuery method gets the original value.
        //
        // const [query, setQuery] = React.useState('');
        // <Input
        //   allowClear
        //   value={query}
        //   onChange={(e)=> {
        //     setQuery((prevStatus) => e.target.value);
        //   }}
        // />
        event = cloneEvent(e, target, '');
        onChange(event);
        return;
    }
    // Trigger by composition event, this means we need force change the input value
    // https://github.com/ant-design/ant-design/issues/45737
    // https://github.com/ant-design/ant-design/issues/46598
    if (target.type !== 'file' && targetValue !== undefined) {
        event = cloneEvent(e, target, targetValue);
        onChange(event);
        return;
    }
    onChange(event);
}
function triggerFocus(element, option) {
    if (!element) return;
    element.focus(option);
    // Selection content
    var _ref = option || {}, cursor = _ref.cursor;
    if (cursor) {
        var len = element.value.length;
        switch(cursor){
            case 'start':
                element.setSelectionRange(0, 0);
                break;
            case 'end':
                element.setSelectionRange(len, len);
                break;
            default:
                element.setSelectionRange(0, len);
        }
    }
}
}),
"[project]/Downloads/One click/node_modules/rc-input/es/BaseInput.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$utils$2f$commonUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-input/es/utils/commonUtils.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
var BaseInput = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].forwardRef(function(props, ref) {
    var _props, _props2, _props3;
    var inputEl = props.inputElement, children = props.children, prefixCls = props.prefixCls, prefix = props.prefix, suffix = props.suffix, addonBefore = props.addonBefore, addonAfter = props.addonAfter, className = props.className, style = props.style, disabled = props.disabled, readOnly = props.readOnly, focused = props.focused, triggerFocus = props.triggerFocus, allowClear = props.allowClear, value = props.value, handleReset = props.handleReset, hidden = props.hidden, classes = props.classes, classNames = props.classNames, dataAttrs = props.dataAttrs, styles = props.styles, components = props.components, onClear = props.onClear;
    var inputElement = children !== null && children !== void 0 ? children : inputEl;
    var AffixWrapperComponent = (components === null || components === void 0 ? void 0 : components.affixWrapper) || 'span';
    var GroupWrapperComponent = (components === null || components === void 0 ? void 0 : components.groupWrapper) || 'span';
    var WrapperComponent = (components === null || components === void 0 ? void 0 : components.wrapper) || 'span';
    var GroupAddonComponent = (components === null || components === void 0 ? void 0 : components.groupAddon) || 'span';
    var containerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    var onInputClick = function onInputClick(e) {
        var _containerRef$current;
        if ((_containerRef$current = containerRef.current) !== null && _containerRef$current !== void 0 && _containerRef$current.contains(e.target)) {
            triggerFocus === null || triggerFocus === void 0 || triggerFocus();
        }
    };
    var hasAffix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$utils$2f$commonUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hasPrefixSuffix"])(props);
    var element = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["cloneElement"])(inputElement, {
        value: value,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((_props = inputElement.props) === null || _props === void 0 ? void 0 : _props.className, !hasAffix && (classNames === null || classNames === void 0 ? void 0 : classNames.variant)) || null
    });
    // ======================== Ref ======================== //
    var groupRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useImperativeHandle(ref, function() {
        return {
            nativeElement: groupRef.current || containerRef.current
        };
    });
    // ================== Prefix & Suffix ================== //
    if (hasAffix) {
        // ================== Clear Icon ================== //
        var clearIcon = null;
        if (allowClear) {
            var needClear = !disabled && !readOnly && value;
            var clearIconCls = "".concat(prefixCls, "-clear-icon");
            var iconNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(allowClear) === 'object' && allowClear !== null && allowClear !== void 0 && allowClear.clearIcon ? allowClear.clearIcon : '✖';
            clearIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("button", {
                type: "button",
                tabIndex: -1,
                onClick: function onClick(event) {
                    handleReset === null || handleReset === void 0 || handleReset(event);
                    onClear === null || onClear === void 0 || onClear();
                },
                onMouseDown: function onMouseDown(e) {
                    return e.preventDefault();
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(clearIconCls, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(clearIconCls, "-hidden"), !needClear), "".concat(clearIconCls, "-has-suffix"), !!suffix))
            }, iconNode);
        }
        var affixWrapperPrefixCls = "".concat(prefixCls, "-affix-wrapper");
        var affixWrapperCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(affixWrapperPrefixCls, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-disabled"), disabled), "".concat(affixWrapperPrefixCls, "-disabled"), disabled), "".concat(affixWrapperPrefixCls, "-focused"), focused), "".concat(affixWrapperPrefixCls, "-readonly"), readOnly), "".concat(affixWrapperPrefixCls, "-input-with-clear-btn"), suffix && allowClear && value), classes === null || classes === void 0 ? void 0 : classes.affixWrapper, classNames === null || classNames === void 0 ? void 0 : classNames.affixWrapper, classNames === null || classNames === void 0 ? void 0 : classNames.variant);
        var suffixNode = (suffix || allowClear) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-suffix"), classNames === null || classNames === void 0 ? void 0 : classNames.suffix),
            style: styles === null || styles === void 0 ? void 0 : styles.suffix
        }, clearIcon, suffix);
        element = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(AffixWrapperComponent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
            className: affixWrapperCls,
            style: styles === null || styles === void 0 ? void 0 : styles.affixWrapper,
            onClick: onInputClick
        }, dataAttrs === null || dataAttrs === void 0 ? void 0 : dataAttrs.affixWrapper, {
            ref: containerRef
        }), prefix && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-prefix"), classNames === null || classNames === void 0 ? void 0 : classNames.prefix),
            style: styles === null || styles === void 0 ? void 0 : styles.prefix
        }, prefix), element, suffixNode);
    }
    // ================== Addon ================== //
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$utils$2f$commonUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hasAddon"])(props)) {
        var wrapperCls = "".concat(prefixCls, "-group");
        var addonCls = "".concat(wrapperCls, "-addon");
        var groupWrapperCls = "".concat(wrapperCls, "-wrapper");
        var mergedWrapperClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-wrapper"), wrapperCls, classes === null || classes === void 0 ? void 0 : classes.wrapper, classNames === null || classNames === void 0 ? void 0 : classNames.wrapper);
        var mergedGroupClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(groupWrapperCls, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(groupWrapperCls, "-disabled"), disabled), classes === null || classes === void 0 ? void 0 : classes.group, classNames === null || classNames === void 0 ? void 0 : classNames.groupWrapper);
        // Need another wrapper for changing display:table to display:inline-block
        // and put style prop in wrapper
        element = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(GroupWrapperComponent, {
            className: mergedGroupClassName,
            ref: groupRef
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(WrapperComponent, {
            className: mergedWrapperClassName
        }, addonBefore && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(GroupAddonComponent, {
            className: addonCls
        }, addonBefore), element, addonAfter && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(GroupAddonComponent, {
            className: addonCls
        }, addonAfter)));
    }
    // `className` and `style` are always on the root element
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].cloneElement(element, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((_props2 = element.props) === null || _props2 === void 0 ? void 0 : _props2.className, className) || null,
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, (_props3 = element.props) === null || _props3 === void 0 ? void 0 : _props3.style), style),
        hidden: hidden
    });
});
const __TURBOPACK__default__export__ = BaseInput;
}),
"[project]/Downloads/One click/node_modules/rc-input/es/hooks/useCount.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useCount,
    "inCountRange",
    ()=>inCountRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
var _excluded = [
    "show"
];
;
function inCountRange(value, countConfig) {
    if (!countConfig.max) {
        return true;
    }
    var count = countConfig.strategy(value);
    return count <= countConfig.max;
}
function useCount(count, showCount) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](function() {
        var mergedConfig = {};
        if (showCount) {
            mergedConfig.show = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(showCount) === 'object' && showCount.formatter ? showCount.formatter : !!showCount;
        }
        mergedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, mergedConfig), count);
        var _ref = mergedConfig, show = _ref.show, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_ref, _excluded);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, rest), {}, {
            show: !!show,
            showFormatter: typeof show === 'function' ? show : undefined,
            strategy: rest.strategy || function(value) {
                return value.length;
            }
        });
    }, [
        count,
        showCount
    ]);
}
}),
"[project]/Downloads/One click/node_modules/rc-input/es/Input.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useMergedState.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/omit.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$BaseInput$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-input/es/BaseInput.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$hooks$2f$useCount$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-input/es/hooks/useCount.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$utils$2f$commonUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-input/es/utils/commonUtils.js [ssr] (ecmascript)");
;
;
;
;
;
;
var _excluded = [
    "autoComplete",
    "onChange",
    "onFocus",
    "onBlur",
    "onPressEnter",
    "onKeyDown",
    "onKeyUp",
    "prefixCls",
    "disabled",
    "htmlSize",
    "className",
    "maxLength",
    "suffix",
    "showCount",
    "count",
    "type",
    "classes",
    "classNames",
    "styles",
    "onCompositionStart",
    "onCompositionEnd"
];
;
;
;
;
;
;
;
var Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"])(function(props, ref) {
    var autoComplete = props.autoComplete, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, onPressEnter = props.onPressEnter, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? 'rc-input' : _props$prefixCls, disabled = props.disabled, htmlSize = props.htmlSize, className = props.className, maxLength = props.maxLength, suffix = props.suffix, showCount = props.showCount, count = props.count, _props$type = props.type, type = _props$type === void 0 ? 'text' : _props$type, classes = props.classes, classNames = props.classNames, styles = props.styles, _onCompositionStart = props.onCompositionStart, onCompositionEnd = props.onCompositionEnd, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    var _useState = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false), _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_useState, 2), focused = _useState2[0], setFocused = _useState2[1];
    var compositionRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    var keyLockRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    var inputRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    var holderRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    var focus = function focus(option) {
        if (inputRef.current) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$utils$2f$commonUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["triggerFocus"])(inputRef.current, option);
        }
    };
    // ====================== Value =======================
    var _useMergedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(props.defaultValue, {
        value: props.value
    }), _useMergedState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_useMergedState, 2), value = _useMergedState2[0], setValue = _useMergedState2[1];
    var formatValue = value === undefined || value === null ? '' : String(value);
    // =================== Select Range ===================
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null), _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_useState3, 2), selection = _useState4[0], setSelection = _useState4[1];
    // ====================== Count =======================
    var countConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$hooks$2f$useCount$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(count, showCount);
    var mergedMax = countConfig.max || maxLength;
    var valueLength = countConfig.strategy(formatValue);
    var isOutOfRange = !!mergedMax && valueLength > mergedMax;
    // ======================= Ref ========================
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useImperativeHandle"])(ref, function() {
        var _holderRef$current;
        return {
            focus: focus,
            blur: function blur() {
                var _inputRef$current;
                (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.blur();
            },
            setSelectionRange: function setSelectionRange(start, end, direction) {
                var _inputRef$current2;
                (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.setSelectionRange(start, end, direction);
            },
            select: function select() {
                var _inputRef$current3;
                (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 || _inputRef$current3.select();
            },
            input: inputRef.current,
            nativeElement: ((_holderRef$current = holderRef.current) === null || _holderRef$current === void 0 ? void 0 : _holderRef$current.nativeElement) || inputRef.current
        };
    });
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(function() {
        if (keyLockRef.current) {
            keyLockRef.current = false;
        }
        setFocused(function(prev) {
            return prev && disabled ? false : prev;
        });
    }, [
        disabled
    ]);
    var triggerChange = function triggerChange(e, currentValue, info) {
        var cutValue = currentValue;
        if (!compositionRef.current && countConfig.exceedFormatter && countConfig.max && countConfig.strategy(currentValue) > countConfig.max) {
            cutValue = countConfig.exceedFormatter(currentValue, {
                max: countConfig.max
            });
            if (currentValue !== cutValue) {
                var _inputRef$current4, _inputRef$current5;
                setSelection([
                    ((_inputRef$current4 = inputRef.current) === null || _inputRef$current4 === void 0 ? void 0 : _inputRef$current4.selectionStart) || 0,
                    ((_inputRef$current5 = inputRef.current) === null || _inputRef$current5 === void 0 ? void 0 : _inputRef$current5.selectionEnd) || 0
                ]);
            }
        } else if (info.source === 'compositionEnd') {
            // Avoid triggering twice
            // https://github.com/ant-design/ant-design/issues/46587
            return;
        }
        setValue(cutValue);
        if (inputRef.current) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$utils$2f$commonUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resolveOnChange"])(inputRef.current, e, onChange, cutValue);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(function() {
        if (selection) {
            var _inputRef$current6;
            (_inputRef$current6 = inputRef.current) === null || _inputRef$current6 === void 0 || _inputRef$current6.setSelectionRange.apply(_inputRef$current6, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(selection));
        }
    }, [
        selection
    ]);
    var onInternalChange = function onInternalChange(e) {
        triggerChange(e, e.target.value, {
            source: 'change'
        });
    };
    var onInternalCompositionEnd = function onInternalCompositionEnd(e) {
        compositionRef.current = false;
        triggerChange(e, e.currentTarget.value, {
            source: 'compositionEnd'
        });
        onCompositionEnd === null || onCompositionEnd === void 0 || onCompositionEnd(e);
    };
    var handleKeyDown = function handleKeyDown(e) {
        if (onPressEnter && e.key === 'Enter' && !keyLockRef.current) {
            keyLockRef.current = true;
            onPressEnter(e);
        }
        onKeyDown === null || onKeyDown === void 0 || onKeyDown(e);
    };
    var handleKeyUp = function handleKeyUp(e) {
        if (e.key === 'Enter') {
            keyLockRef.current = false;
        }
        onKeyUp === null || onKeyUp === void 0 || onKeyUp(e);
    };
    var handleFocus = function handleFocus(e) {
        setFocused(true);
        onFocus === null || onFocus === void 0 || onFocus(e);
    };
    var handleBlur = function handleBlur(e) {
        if (keyLockRef.current) {
            keyLockRef.current = false;
        }
        setFocused(false);
        onBlur === null || onBlur === void 0 || onBlur(e);
    };
    var handleReset = function handleReset(e) {
        setValue('');
        focus();
        if (inputRef.current) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$utils$2f$commonUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resolveOnChange"])(inputRef.current, e, onChange);
        }
    };
    // ====================== Input =======================
    var outOfRangeCls = isOutOfRange && "".concat(prefixCls, "-out-of-range");
    var getInputElement = function getInputElement() {
        // Fix https://fb.me/react-unknown-prop
        var otherProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(props, [
            'prefixCls',
            'onPressEnter',
            'addonBefore',
            'addonAfter',
            'prefix',
            'suffix',
            'allowClear',
            // Input elements must be either controlled or uncontrolled,
            // specify either the value prop, or the defaultValue prop, but not both.
            'defaultValue',
            'showCount',
            'count',
            'classes',
            'htmlSize',
            'styles',
            'classNames',
            'onClear'
        ]);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("input", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
            autoComplete: autoComplete
        }, otherProps, {
            onChange: onInternalChange,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onKeyDown: handleKeyDown,
            onKeyUp: handleKeyUp,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-disabled"), disabled), classNames === null || classNames === void 0 ? void 0 : classNames.input),
            style: styles === null || styles === void 0 ? void 0 : styles.input,
            ref: inputRef,
            size: htmlSize,
            type: type,
            onCompositionStart: function onCompositionStart(e) {
                compositionRef.current = true;
                _onCompositionStart === null || _onCompositionStart === void 0 || _onCompositionStart(e);
            },
            onCompositionEnd: onInternalCompositionEnd
        }));
    };
    var getSuffix = function getSuffix() {
        // Max length value
        var hasMaxLength = Number(mergedMax) > 0;
        if (suffix || countConfig.show) {
            var dataCount = countConfig.showFormatter ? countConfig.showFormatter({
                value: formatValue,
                count: valueLength,
                maxLength: mergedMax
            }) : "".concat(valueLength).concat(hasMaxLength ? " / ".concat(mergedMax) : '');
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].Fragment, null, countConfig.show && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-show-count-suffix"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-show-count-has-suffix"), !!suffix), classNames === null || classNames === void 0 ? void 0 : classNames.count),
                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, styles === null || styles === void 0 ? void 0 : styles.count)
            }, dataCount), suffix);
        }
        return null;
    };
    // ====================== Render ======================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$BaseInput$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, rest, {
        prefixCls: prefixCls,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(className, outOfRangeCls),
        handleReset: handleReset,
        value: formatValue,
        focused: focused,
        triggerFocus: focus,
        suffix: getSuffix(),
        disabled: disabled,
        classes: classes,
        classNames: classNames,
        styles: styles,
        ref: holderRef
    }), getInputElement());
});
const __TURBOPACK__default__export__ = Input;
}),
"[project]/Downloads/One click/node_modules/rc-input/es/index.js [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$BaseInput$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-input/es/BaseInput.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$Input$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-input/es/Input.js [ssr] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$Input$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Downloads/One click/node_modules/rc-input/es/BaseInput.js [ssr] (ecmascript) <export default as BaseInput>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$BaseInput$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$BaseInput$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-input/es/BaseInput.js [ssr] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/rc-motion/es/CSSMotionList.js [ssr] (ecmascript) <export default as CSSMotionList>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CSSMotionList",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$CSSMotionList$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$CSSMotionList$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/CSSMotionList.js [ssr] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/rc-notification/es/Notice.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/KeyCode.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/pickAttrs.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
var Notify = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](function(props, ref) {
    var prefixCls = props.prefixCls, style = props.style, className = props.className, _props$duration = props.duration, duration = _props$duration === void 0 ? 4.5 : _props$duration, showProgress = props.showProgress, _props$pauseOnHover = props.pauseOnHover, pauseOnHover = _props$pauseOnHover === void 0 ? true : _props$pauseOnHover, eventKey = props.eventKey, content = props.content, closable = props.closable, _props$closeIcon = props.closeIcon, closeIcon = _props$closeIcon === void 0 ? 'x' : _props$closeIcon, divProps = props.props, onClick = props.onClick, onNoticeClose = props.onNoticeClose, times = props.times, forcedHovering = props.hovering;
    var _React$useState = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](false), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), hovering = _React$useState2[0], setHovering = _React$useState2[1];
    var _React$useState3 = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](0), _React$useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState3, 2), percent = _React$useState4[0], setPercent = _React$useState4[1];
    var _React$useState5 = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](0), _React$useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState5, 2), spentTime = _React$useState6[0], setSpentTime = _React$useState6[1];
    var mergedHovering = forcedHovering || hovering;
    var mergedShowProgress = duration > 0 && showProgress;
    // ======================== Close =========================
    var onInternalClose = function onInternalClose() {
        onNoticeClose(eventKey);
    };
    var onCloseKeyDown = function onCloseKeyDown(e) {
        if (e.key === 'Enter' || e.code === 'Enter' || e.keyCode === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].ENTER) {
            onInternalClose();
        }
    };
    // ======================== Effect ========================
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](function() {
        if (!mergedHovering && duration > 0) {
            var start = Date.now() - spentTime;
            var timeout = setTimeout(function() {
                onInternalClose();
            }, duration * 1000 - spentTime);
            return function() {
                if (pauseOnHover) {
                    clearTimeout(timeout);
                }
                setSpentTime(Date.now() - start);
            };
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        duration,
        mergedHovering,
        times
    ]);
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](function() {
        if (!mergedHovering && mergedShowProgress && (pauseOnHover || spentTime === 0)) {
            var start = performance.now();
            var animationFrame;
            var calculate = function calculate() {
                cancelAnimationFrame(animationFrame);
                animationFrame = requestAnimationFrame(function(timestamp) {
                    var runtime = timestamp + spentTime - start;
                    var progress = Math.min(runtime / (duration * 1000), 1);
                    setPercent(progress * 100);
                    if (progress < 1) {
                        calculate();
                    }
                });
            };
            calculate();
            return function() {
                if (pauseOnHover) {
                    cancelAnimationFrame(animationFrame);
                }
            };
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        duration,
        spentTime,
        mergedHovering,
        mergedShowProgress,
        times
    ]);
    // ======================== Closable ========================
    var closableObj = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](function() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(closable) === 'object' && closable !== null) {
            return closable;
        }
        if (closable) {
            return {
                closeIcon: closeIcon
            };
        }
        return {};
    }, [
        closable,
        closeIcon
    ]);
    var ariaProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(closableObj, true);
    // ======================== Progress ========================
    var validPercent = 100 - (!percent || percent < 0 ? 0 : percent > 100 ? 100 : percent);
    // ======================== Render ========================
    var noticePrefixCls = "".concat(prefixCls, "-notice");
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, divProps, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(noticePrefixCls, className, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(noticePrefixCls, "-closable"), closable)),
        style: style,
        onMouseEnter: function onMouseEnter(e) {
            var _divProps$onMouseEnte;
            setHovering(true);
            divProps === null || divProps === void 0 || (_divProps$onMouseEnte = divProps.onMouseEnter) === null || _divProps$onMouseEnte === void 0 || _divProps$onMouseEnte.call(divProps, e);
        },
        onMouseLeave: function onMouseLeave(e) {
            var _divProps$onMouseLeav;
            setHovering(false);
            divProps === null || divProps === void 0 || (_divProps$onMouseLeav = divProps.onMouseLeave) === null || _divProps$onMouseLeav === void 0 || _divProps$onMouseLeav.call(divProps, e);
        },
        onClick: onClick
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        className: "".concat(noticePrefixCls, "-content")
    }, content), closable && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("a", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        tabIndex: 0,
        className: "".concat(noticePrefixCls, "-close"),
        onKeyDown: onCloseKeyDown,
        "aria-label": "Close"
    }, ariaProps, {
        onClick: function onClick(e) {
            e.preventDefault();
            e.stopPropagation();
            onInternalClose();
        }
    }), closableObj.closeIcon), mergedShowProgress && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("progress", {
        className: "".concat(noticePrefixCls, "-progress"),
        max: "100",
        value: validPercent
    }, validPercent + '%'));
});
const __TURBOPACK__default__export__ = Notify;
}),
"[project]/Downloads/One click/node_modules/rc-notification/es/NotificationProvider.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationContext",
    ()=>NotificationContext,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
var NotificationContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createContext({});
var NotificationProvider = function NotificationProvider(_ref) {
    var children = _ref.children, classNames = _ref.classNames;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(NotificationContext.Provider, {
        value: {
            classNames: classNames
        }
    }, children);
};
const __TURBOPACK__default__export__ = NotificationProvider;
}),
"[project]/Downloads/One click/node_modules/rc-notification/es/hooks/useStack.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [ssr] (ecmascript)");
;
var DEFAULT_OFFSET = 8;
var DEFAULT_THRESHOLD = 3;
var DEFAULT_GAP = 16;
var useStack = function useStack(config) {
    var result = {
        offset: DEFAULT_OFFSET,
        threshold: DEFAULT_THRESHOLD,
        gap: DEFAULT_GAP
    };
    if (config && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(config) === 'object') {
        var _config$offset, _config$threshold, _config$gap;
        result.offset = (_config$offset = config.offset) !== null && _config$offset !== void 0 ? _config$offset : DEFAULT_OFFSET;
        result.threshold = (_config$threshold = config.threshold) !== null && _config$threshold !== void 0 ? _config$threshold : DEFAULT_THRESHOLD;
        result.gap = (_config$gap = config.gap) !== null && _config$gap !== void 0 ? _config$gap : DEFAULT_GAP;
    }
    return [
        !!config,
        result
    ];
};
const __TURBOPACK__default__export__ = useStack;
}),
"[project]/Downloads/One click/node_modules/rc-notification/es/NoticeList.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$CSSMotionList$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CSSMotionList$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/CSSMotionList.js [ssr] (ecmascript) <export default as CSSMotionList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$Notice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-notification/es/Notice.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$NotificationProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-notification/es/NotificationProvider.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$hooks$2f$useStack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-notification/es/hooks/useStack.js [ssr] (ecmascript)");
;
;
;
;
;
;
var _excluded = [
    "className",
    "style",
    "classNames",
    "styles"
];
;
;
;
;
;
;
var NoticeList = function NoticeList(props) {
    var configList = props.configList, placement = props.placement, prefixCls = props.prefixCls, className = props.className, style = props.style, motion = props.motion, onAllNoticeRemoved = props.onAllNoticeRemoved, onNoticeClose = props.onNoticeClose, stackConfig = props.stack;
    var _useContext = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$NotificationProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["NotificationContext"]), ctxCls = _useContext.classNames;
    var dictRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])({});
    var _useState = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null), _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_useState, 2), latestNotice = _useState2[0], setLatestNotice = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]), _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_useState3, 2), hoverKeys = _useState4[0], setHoverKeys = _useState4[1];
    var keys = configList.map(function(config) {
        return {
            config: config,
            key: String(config.key)
        };
    });
    var _useStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$hooks$2f$useStack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(stackConfig), _useStack2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_useStack, 2), stack = _useStack2[0], _useStack2$ = _useStack2[1], offset = _useStack2$.offset, threshold = _useStack2$.threshold, gap = _useStack2$.gap;
    var expanded = stack && (hoverKeys.length > 0 || keys.length <= threshold);
    var placementMotion = typeof motion === 'function' ? motion(placement) : motion;
    // Clean hover key
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(function() {
        if (stack && hoverKeys.length > 1) {
            setHoverKeys(function(prev) {
                return prev.filter(function(key) {
                    return keys.some(function(_ref) {
                        var dataKey = _ref.key;
                        return key === dataKey;
                    });
                });
            });
        }
    }, [
        hoverKeys,
        keys,
        stack
    ]);
    // Force update latest notice
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(function() {
        var _keys;
        if (stack && dictRef.current[(_keys = keys[keys.length - 1]) === null || _keys === void 0 ? void 0 : _keys.key]) {
            var _keys2;
            setLatestNotice(dictRef.current[(_keys2 = keys[keys.length - 1]) === null || _keys2 === void 0 ? void 0 : _keys2.key]);
        }
    }, [
        keys,
        stack
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$CSSMotionList$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CSSMotionList$3e$__["CSSMotionList"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        key: placement,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, "".concat(prefixCls, "-").concat(placement), ctxCls === null || ctxCls === void 0 ? void 0 : ctxCls.list, className, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-stack"), !!stack), "".concat(prefixCls, "-stack-expanded"), expanded)),
        style: style,
        keys: keys,
        motionAppear: true
    }, placementMotion, {
        onAllRemoved: function onAllRemoved() {
            onAllNoticeRemoved(placement);
        }
    }), function(_ref2, nodeRef) {
        var config = _ref2.config, motionClassName = _ref2.className, motionStyle = _ref2.style, motionIndex = _ref2.index;
        var _ref3 = config, key = _ref3.key, times = _ref3.times;
        var strKey = String(key);
        var _ref4 = config, configClassName = _ref4.className, configStyle = _ref4.style, configClassNames = _ref4.classNames, configStyles = _ref4.styles, restConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_ref4, _excluded);
        var dataIndex = keys.findIndex(function(item) {
            return item.key === strKey;
        });
        // If dataIndex is -1, that means this notice has been removed in data, but still in dom
        // Should minus (motionIndex - 1) to get the correct index because keys.length is not the same as dom length
        var stackStyle = {};
        if (stack) {
            var index = keys.length - 1 - (dataIndex > -1 ? dataIndex : motionIndex - 1);
            var transformX = placement === 'top' || placement === 'bottom' ? '-50%' : '0';
            if (index > 0) {
                var _dictRef$current$strK, _dictRef$current$strK2, _dictRef$current$strK3;
                stackStyle.height = expanded ? (_dictRef$current$strK = dictRef.current[strKey]) === null || _dictRef$current$strK === void 0 ? void 0 : _dictRef$current$strK.offsetHeight : latestNotice === null || latestNotice === void 0 ? void 0 : latestNotice.offsetHeight;
                // Transform
                var verticalOffset = 0;
                for(var i = 0; i < index; i++){
                    var _dictRef$current$keys;
                    verticalOffset += ((_dictRef$current$keys = dictRef.current[keys[keys.length - 1 - i].key]) === null || _dictRef$current$keys === void 0 ? void 0 : _dictRef$current$keys.offsetHeight) + gap;
                }
                var transformY = (expanded ? verticalOffset : index * offset) * (placement.startsWith('top') ? 1 : -1);
                var scaleX = !expanded && latestNotice !== null && latestNotice !== void 0 && latestNotice.offsetWidth && (_dictRef$current$strK2 = dictRef.current[strKey]) !== null && _dictRef$current$strK2 !== void 0 && _dictRef$current$strK2.offsetWidth ? ((latestNotice === null || latestNotice === void 0 ? void 0 : latestNotice.offsetWidth) - offset * 2 * (index < 3 ? index : 3)) / ((_dictRef$current$strK3 = dictRef.current[strKey]) === null || _dictRef$current$strK3 === void 0 ? void 0 : _dictRef$current$strK3.offsetWidth) : 1;
                stackStyle.transform = "translate3d(".concat(transformX, ", ").concat(transformY, "px, 0) scaleX(").concat(scaleX, ")");
            } else {
                stackStyle.transform = "translate3d(".concat(transformX, ", 0, 0)");
            }
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("div", {
            ref: nodeRef,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-notice-wrapper"), motionClassName, configClassNames === null || configClassNames === void 0 ? void 0 : configClassNames.wrapper),
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, motionStyle), stackStyle), configStyles === null || configStyles === void 0 ? void 0 : configStyles.wrapper),
            onMouseEnter: function onMouseEnter() {
                return setHoverKeys(function(prev) {
                    return prev.includes(strKey) ? prev : [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prev), [
                        strKey
                    ]);
                });
            },
            onMouseLeave: function onMouseLeave() {
                return setHoverKeys(function(prev) {
                    return prev.filter(function(k) {
                        return k !== strKey;
                    });
                });
            }
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$Notice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, restConfig, {
            ref: function ref(node) {
                if (dataIndex > -1) {
                    dictRef.current[strKey] = node;
                } else {
                    delete dictRef.current[strKey];
                }
            },
            prefixCls: prefixCls,
            classNames: configClassNames,
            styles: configStyles,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(configClassName, ctxCls === null || ctxCls === void 0 ? void 0 : ctxCls.notice),
            style: configStyle,
            times: times,
            key: key,
            eventKey: key,
            onNoticeClose: onNoticeClose,
            hovering: stack && hoverKeys.length > 0
        })));
    });
};
if ("TURBOPACK compile-time truthy", 1) {
    NoticeList.displayName = 'NoticeList';
}
const __TURBOPACK__default__export__ = NoticeList;
}),
"[project]/Downloads/One click/node_modules/rc-notification/es/Notifications.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-dom [external] (react-dom, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$NoticeList$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-notification/es/NoticeList.js [ssr] (ecmascript)");
;
;
;
;
;
;
// ant-notification ant-notification-topRight
var Notifications = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](function(props, ref) {
    var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? 'rc-notification' : _props$prefixCls, container = props.container, motion = props.motion, maxCount = props.maxCount, className = props.className, style = props.style, onAllRemoved = props.onAllRemoved, stack = props.stack, renderNotifications = props.renderNotifications;
    var _React$useState = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"]([]), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), configList = _React$useState2[0], setConfigList = _React$useState2[1];
    // ======================== Close =========================
    var onNoticeClose = function onNoticeClose(key) {
        var _config$onClose;
        // Trigger close event
        var config = configList.find(function(item) {
            return item.key === key;
        });
        config === null || config === void 0 || (_config$onClose = config.onClose) === null || _config$onClose === void 0 || _config$onClose.call(config);
        setConfigList(function(list) {
            return list.filter(function(item) {
                return item.key !== key;
            });
        });
    };
    // ========================= Refs =========================
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useImperativeHandle"](ref, function() {
        return {
            open: function open(config) {
                setConfigList(function(list) {
                    var clone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(list);
                    // Replace if exist
                    var index = clone.findIndex(function(item) {
                        return item.key === config.key;
                    });
                    var innerConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, config);
                    if (index >= 0) {
                        var _list$index;
                        innerConfig.times = (((_list$index = list[index]) === null || _list$index === void 0 ? void 0 : _list$index.times) || 0) + 1;
                        clone[index] = innerConfig;
                    } else {
                        innerConfig.times = 0;
                        clone.push(innerConfig);
                    }
                    if (maxCount > 0 && clone.length > maxCount) {
                        clone = clone.slice(-maxCount);
                    }
                    return clone;
                });
            },
            close: function close(key) {
                onNoticeClose(key);
            },
            destroy: function destroy() {
                setConfigList([]);
            }
        };
    });
    // ====================== Placements ======================
    var _React$useState3 = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"]({}), _React$useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState3, 2), placements = _React$useState4[0], setPlacements = _React$useState4[1];
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](function() {
        var nextPlacements = {};
        configList.forEach(function(config) {
            var _config$placement = config.placement, placement = _config$placement === void 0 ? 'topRight' : _config$placement;
            if (placement) {
                nextPlacements[placement] = nextPlacements[placement] || [];
                nextPlacements[placement].push(config);
            }
        });
        // Fill exist placements to avoid empty list causing remove without motion
        Object.keys(placements).forEach(function(placement) {
            nextPlacements[placement] = nextPlacements[placement] || [];
        });
        setPlacements(nextPlacements);
    }, [
        configList
    ]);
    // Clean up container if all notices fade out
    var onAllNoticeRemoved = function onAllNoticeRemoved(placement) {
        setPlacements(function(originPlacements) {
            var clone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, originPlacements);
            var list = clone[placement] || [];
            if (!list.length) {
                delete clone[placement];
            }
            return clone;
        });
    };
    // Effect tell that placements is empty now
    var emptyRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"](false);
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](function() {
        if (Object.keys(placements).length > 0) {
            emptyRef.current = true;
        } else if (emptyRef.current) {
            // Trigger only when from exist to empty
            onAllRemoved === null || onAllRemoved === void 0 || onAllRemoved();
            emptyRef.current = false;
        }
    }, [
        placements
    ]);
    // ======================== Render ========================
    if (!container) {
        return null;
    }
    var placementList = Object.keys(placements);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__["createPortal"])(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Fragment"], null, placementList.map(function(placement) {
        var placementConfigList = placements[placement];
        var list = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$NoticeList$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            key: placement,
            configList: placementConfigList,
            placement: placement,
            prefixCls: prefixCls,
            className: className === null || className === void 0 ? void 0 : className(placement),
            style: style === null || style === void 0 ? void 0 : style(placement),
            motion: motion,
            onNoticeClose: onNoticeClose,
            onAllNoticeRemoved: onAllNoticeRemoved,
            stack: stack
        });
        return renderNotifications ? renderNotifications(list, {
            prefixCls: prefixCls,
            key: placement
        }) : list;
    })), container);
});
if ("TURBOPACK compile-time truthy", 1) {
    Notifications.displayName = 'Notifications';
}
const __TURBOPACK__default__export__ = Notifications;
}),
"[project]/Downloads/One click/node_modules/rc-notification/es/hooks/useNotification.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useNotification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$Notifications$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-notification/es/Notifications.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useEvent.js [ssr] (ecmascript) <export default as useEvent>");
;
;
;
var _excluded = [
    "getContainer",
    "motion",
    "prefixCls",
    "maxCount",
    "className",
    "style",
    "onAllRemoved",
    "stack",
    "renderNotifications"
];
;
;
;
var defaultGetContainer = function defaultGetContainer() {
    return document.body;
};
var uniqueKey = 0;
function mergeConfig() {
    var clone = {};
    for(var _len = arguments.length, objList = new Array(_len), _key = 0; _key < _len; _key++){
        objList[_key] = arguments[_key];
    }
    objList.forEach(function(obj) {
        if (obj) {
            Object.keys(obj).forEach(function(key) {
                var val = obj[key];
                if (val !== undefined) {
                    clone[key] = val;
                }
            });
        }
    });
    return clone;
}
function useNotification() {
    var rootConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _rootConfig$getContai = rootConfig.getContainer, getContainer = _rootConfig$getContai === void 0 ? defaultGetContainer : _rootConfig$getContai, motion = rootConfig.motion, prefixCls = rootConfig.prefixCls, maxCount = rootConfig.maxCount, className = rootConfig.className, style = rootConfig.style, onAllRemoved = rootConfig.onAllRemoved, stack = rootConfig.stack, renderNotifications = rootConfig.renderNotifications, shareConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(rootConfig, _excluded);
    var _React$useState = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), container = _React$useState2[0], setContainer = _React$useState2[1];
    var notificationsRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"]();
    var contextHolder = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$Notifications$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        container: container,
        ref: notificationsRef,
        prefixCls: prefixCls,
        motion: motion,
        maxCount: maxCount,
        className: className,
        style: style,
        onAllRemoved: onAllRemoved,
        stack: stack,
        renderNotifications: renderNotifications
    });
    var _React$useState3 = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"]([]), _React$useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState3, 2), taskQueue = _React$useState4[0], setTaskQueue = _React$useState4[1];
    var open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])(function(config) {
        var mergedConfig = mergeConfig(shareConfig, config);
        if (mergedConfig.key === null || mergedConfig.key === undefined) {
            mergedConfig.key = "rc-notification-".concat(uniqueKey);
            uniqueKey += 1;
        }
        setTaskQueue(function(queue) {
            return [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(queue), [
                {
                    type: 'open',
                    config: mergedConfig
                }
            ]);
        });
    });
    // ========================= Refs =========================
    var api = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](function() {
        return {
            open: open,
            close: function close(key) {
                setTaskQueue(function(queue) {
                    return [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(queue), [
                        {
                            type: 'close',
                            key: key
                        }
                    ]);
                });
            },
            destroy: function destroy() {
                setTaskQueue(function(queue) {
                    return [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(queue), [
                        {
                            type: 'destroy'
                        }
                    ]);
                });
            }
        };
    }, []);
    // ======================= Container ======================
    // React 18 should all in effect that we will check container in each render
    // Which means getContainer should be stable.
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](function() {
        setContainer(getContainer());
    });
    // ======================== Effect ========================
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](function() {
        // Flush task when node ready
        if (notificationsRef.current && taskQueue.length) {
            taskQueue.forEach(function(task) {
                switch(task.type){
                    case 'open':
                        notificationsRef.current.open(task.config);
                        break;
                    case 'close':
                        notificationsRef.current.close(task.key);
                        break;
                    case 'destroy':
                        notificationsRef.current.destroy();
                        break;
                }
            });
            // https://github.com/ant-design/ant-design/issues/52590
            // React `startTransition` will run once `useEffect` but many times `setState`,
            // So `setTaskQueue` with filtered array will cause infinite loop.
            // We cache the first match queue instead.
            var oriTaskQueue;
            var tgtTaskQueue;
            // React 17 will mix order of effect & setState in async
            // - open: setState[0]
            // - effect[0]
            // - open: setState[1]
            // - effect setState([]) * here will clean up [0, 1] in React 17
            setTaskQueue(function(oriQueue) {
                if (oriTaskQueue !== oriQueue || !tgtTaskQueue) {
                    oriTaskQueue = oriQueue;
                    tgtTaskQueue = oriQueue.filter(function(task) {
                        return !taskQueue.includes(task);
                    });
                }
                return tgtTaskQueue;
            });
        }
    }, [
        taskQueue
    ]);
    // ======================== Return ========================
    return [
        api,
        contextHolder
    ];
}
}),
"[project]/Downloads/One click/node_modules/rc-notification/es/index.js [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$hooks$2f$useNotification$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-notification/es/hooks/useNotification.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$Notice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-notification/es/Notice.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$NotificationProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-notification/es/NotificationProvider.js [ssr] (ecmascript)");
;
;
;
;
}),
"[project]/Downloads/One click/node_modules/rc-notification/es/Notice.js [ssr] (ecmascript) <export default as Notice>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Notice",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$Notice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$Notice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-notification/es/Notice.js [ssr] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/rc-notification/es/NotificationProvider.js [ssr] (ecmascript) <export default as NotificationProvider>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$NotificationProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$NotificationProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-notification/es/NotificationProvider.js [ssr] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/rc-notification/es/hooks/useNotification.js [ssr] (ecmascript) <export default as useNotification>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNotification",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$hooks$2f$useNotification$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$hooks$2f$useNotification$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-notification/es/hooks/useNotification.js [ssr] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/rc-dialog/es/context.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RefContext",
    ()=>RefContext
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
var RefContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"]({});
}),
"[project]/Downloads/One click/node_modules/rc-dialog/es/util.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// =============================== Motion ===============================
__turbopack_context__.s([
    "getMotionName",
    ()=>getMotionName,
    "offset",
    ()=>offset
]);
function getMotionName(prefixCls, transitionName, animationName) {
    var motionName = transitionName;
    if (!motionName && animationName) {
        motionName = "".concat(prefixCls, "-").concat(animationName);
    }
    return motionName;
}
// =============================== Offset ===============================
function getScroll(w, top) {
    var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
    var method = "scroll".concat(top ? 'Top' : 'Left');
    if (typeof ret !== 'number') {
        var d = w.document;
        ret = d.documentElement[method];
        if (typeof ret !== 'number') {
            ret = d.body[method];
        }
    }
    return ret;
}
function offset(el) {
    var rect = el.getBoundingClientRect();
    var pos = {
        left: rect.left,
        top: rect.top
    };
    var doc = el.ownerDocument;
    var w = doc.defaultView || doc.parentWindow;
    pos.left += getScroll(w);
    pos.top += getScroll(w, true);
    return pos;
}
}),
"[project]/Downloads/One click/node_modules/rc-dialog/es/Dialog/Content/MemoChildren.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["memo"](function(_ref) {
    var children = _ref.children;
    return children;
}, function(_, _ref2) {
    var shouldUpdate = _ref2.shouldUpdate;
    return !shouldUpdate;
});
}),
"[project]/Downloads/One click/node_modules/rc-dialog/es/Dialog/Content/Panel.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/ref.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-dialog/es/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$Dialog$2f$Content$2f$MemoChildren$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-dialog/es/Dialog/Content/MemoChildren.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/pickAttrs.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
var sentinelStyle = {
    width: 0,
    height: 0,
    overflow: 'hidden',
    outline: 'none'
};
var entityStyle = {
    outline: 'none'
};
var Panel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].forwardRef(function(props, ref) {
    var prefixCls = props.prefixCls, className = props.className, style = props.style, title = props.title, ariaId = props.ariaId, footer = props.footer, closable = props.closable, closeIcon = props.closeIcon, onClose = props.onClose, children = props.children, bodyStyle = props.bodyStyle, bodyProps = props.bodyProps, modalRender = props.modalRender, onMouseDown = props.onMouseDown, onMouseUp = props.onMouseUp, holderRef = props.holderRef, visible = props.visible, forceRender = props.forceRender, width = props.width, height = props.height, modalClassNames = props.classNames, modalStyles = props.styles;
    // ================================= Refs =================================
    var _React$useContext = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["RefContext"]), panelRef = _React$useContext.panel;
    var mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useComposeRef"])(holderRef, panelRef);
    var sentinelStartRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])();
    var sentinelEndRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])();
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useImperativeHandle(ref, function() {
        return {
            focus: function focus() {
                var _sentinelStartRef$cur;
                (_sentinelStartRef$cur = sentinelStartRef.current) === null || _sentinelStartRef$cur === void 0 || _sentinelStartRef$cur.focus({
                    preventScroll: true
                });
            },
            changeActive: function changeActive(next) {
                var _document = document, activeElement = _document.activeElement;
                if (next && activeElement === sentinelEndRef.current) {
                    sentinelStartRef.current.focus({
                        preventScroll: true
                    });
                } else if (!next && activeElement === sentinelStartRef.current) {
                    sentinelEndRef.current.focus({
                        preventScroll: true
                    });
                }
            }
        };
    });
    // ================================ Style =================================
    var contentStyle = {};
    if (width !== undefined) {
        contentStyle.width = width;
    }
    if (height !== undefined) {
        contentStyle.height = height;
    }
    // ================================ Render ================================
    var footerNode = footer ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-footer"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.footer),
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.footer)
    }, footer) : null;
    var headerNode = title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-header"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.header),
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.header)
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("div", {
        className: "".concat(prefixCls, "-title"),
        id: ariaId
    }, title)) : null;
    var closableObj = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(function() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(closable) === 'object' && closable !== null) {
            return closable;
        }
        if (closable) {
            return {
                closeIcon: closeIcon !== null && closeIcon !== void 0 ? closeIcon : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("span", {
                    className: "".concat(prefixCls, "-close-x")
                })
            };
        }
        return {};
    }, [
        closable,
        closeIcon,
        prefixCls
    ]);
    var ariaProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(closableObj, true);
    var closeBtnIsDisabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(closable) === 'object' && closable.disabled;
    var closerNode = closable ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("button", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        type: "button",
        onClick: onClose,
        "aria-label": "Close"
    }, ariaProps, {
        className: "".concat(prefixCls, "-close"),
        disabled: closeBtnIsDisabled
    }), closableObj.closeIcon) : null;
    var content = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-content"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.content),
        style: modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.content
    }, closerNode, headerNode, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-body"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.body),
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, bodyStyle), modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.body)
    }, bodyProps), children), footerNode);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("div", {
        key: "dialog-element",
        role: "dialog",
        "aria-labelledby": title ? ariaId : null,
        "aria-modal": "true",
        ref: mergedRef,
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, style), contentStyle),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, className),
        onMouseDown: onMouseDown,
        onMouseUp: onMouseUp
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("div", {
        ref: sentinelStartRef,
        tabIndex: 0,
        style: entityStyle
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$Dialog$2f$Content$2f$MemoChildren$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        shouldUpdate: visible || forceRender
    }, modalRender ? modalRender(content) : content)), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("div", {
        tabIndex: 0,
        ref: sentinelEndRef,
        style: sentinelStyle
    }));
});
if ("TURBOPACK compile-time truthy", 1) {
    Panel.displayName = 'Panel';
}
const __TURBOPACK__default__export__ = Panel;
}),
"[project]/Downloads/One click/node_modules/rc-dialog/es/Dialog/Content/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-dialog/es/util.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$Dialog$2f$Content$2f$Panel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-dialog/es/Dialog/Content/Panel.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
var Content = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](function(props, ref) {
    var prefixCls = props.prefixCls, title = props.title, style = props.style, className = props.className, visible = props.visible, forceRender = props.forceRender, destroyOnClose = props.destroyOnClose, motionName = props.motionName, ariaId = props.ariaId, onVisibleChanged = props.onVisibleChanged, mousePosition = props.mousePosition;
    var dialogRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])();
    // ============================= Style ==============================
    var _React$useState = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), transformOrigin = _React$useState2[0], setTransformOrigin = _React$useState2[1];
    var contentStyle = {};
    if (transformOrigin) {
        contentStyle.transformOrigin = transformOrigin;
    }
    function onPrepare() {
        var elementOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["offset"])(dialogRef.current);
        setTransformOrigin(mousePosition && (mousePosition.x || mousePosition.y) ? "".concat(mousePosition.x - elementOffset.left, "px ").concat(mousePosition.y - elementOffset.top, "px") : '');
    }
    // ============================= Render =============================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        visible: visible,
        onVisibleChanged: onVisibleChanged,
        onAppearPrepare: onPrepare,
        onEnterPrepare: onPrepare,
        forceRender: forceRender,
        motionName: motionName,
        removeOnLeave: destroyOnClose,
        ref: dialogRef
    }, function(_ref, motionRef) {
        var motionClassName = _ref.className, motionStyle = _ref.style;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$Dialog$2f$Content$2f$Panel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
            ref: ref,
            title: title,
            ariaId: ariaId,
            prefixCls: prefixCls,
            holderRef: motionRef,
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, motionStyle), style), contentStyle),
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(className, motionClassName)
        }));
    });
});
Content.displayName = 'Content';
const __TURBOPACK__default__export__ = Content;
}),
"[project]/Downloads/One click/node_modules/rc-dialog/es/Dialog/Mask.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/index.js [ssr] (ecmascript) <locals>");
;
;
;
;
;
var Mask = function Mask(props) {
    var prefixCls = props.prefixCls, style = props.style, visible = props.visible, maskProps = props.maskProps, motionName = props.motionName, className = props.className;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        key: "mask",
        visible: visible,
        motionName: motionName,
        leavedClassName: "".concat(prefixCls, "-mask-hidden")
    }, function(_ref, ref) {
        var motionClassName = _ref.className, motionStyle = _ref.style;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
            ref: ref,
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, motionStyle), style),
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-mask"), motionClassName, className)
        }, maskProps));
    });
};
const __TURBOPACK__default__export__ = Mask;
}),
"[project]/Downloads/One click/node_modules/rc-dialog/es/Dialog/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$contains$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Dom/contains.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useId.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/KeyCode.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/pickAttrs.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-dialog/es/util.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$Dialog$2f$Content$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-dialog/es/Dialog/Content/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$Dialog$2f$Mask$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-dialog/es/Dialog/Mask.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/warning.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Dialog = function Dialog(props) {
    var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? 'rc-dialog' : _props$prefixCls, zIndex = props.zIndex, _props$visible = props.visible, visible = _props$visible === void 0 ? false : _props$visible, _props$keyboard = props.keyboard, keyboard = _props$keyboard === void 0 ? true : _props$keyboard, _props$focusTriggerAf = props.focusTriggerAfterClose, focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf, wrapStyle = props.wrapStyle, wrapClassName = props.wrapClassName, wrapProps = props.wrapProps, onClose = props.onClose, afterOpenChange = props.afterOpenChange, afterClose = props.afterClose, transitionName = props.transitionName, animation = props.animation, _props$closable = props.closable, closable = _props$closable === void 0 ? true : _props$closable, _props$mask = props.mask, mask = _props$mask === void 0 ? true : _props$mask, maskTransitionName = props.maskTransitionName, maskAnimation = props.maskAnimation, _props$maskClosable = props.maskClosable, maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable, maskStyle = props.maskStyle, maskProps = props.maskProps, rootClassName = props.rootClassName, modalClassNames = props.classNames, modalStyles = props.styles;
    if ("TURBOPACK compile-time truthy", 1) {
        [
            'wrapStyle',
            'bodyStyle',
            'maskStyle'
        ].forEach(function(prop) {
            // (prop in props) && console.error(`Warning: ${prop} is deprecated, please use styles instead.`)
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["warning"])(!(prop in props), "".concat(prop, " is deprecated, please use styles instead."));
        });
        if ('wrapClassName' in props) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["warning"])(false, "wrapClassName is deprecated, please use classNames instead.");
        }
    }
    var lastOutSideActiveElementRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])();
    var wrapperRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])();
    var contentRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])();
    var _React$useState = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](visible), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), animatedVisible = _React$useState2[0], setAnimatedVisible = _React$useState2[1];
    // ========================== Init ==========================
    var ariaId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])();
    function saveLastOutSideActiveElementRef() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$contains$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(wrapperRef.current, document.activeElement)) {
            lastOutSideActiveElementRef.current = document.activeElement;
        }
    }
    function focusDialogContent() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$contains$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(wrapperRef.current, document.activeElement)) {
            var _contentRef$current;
            (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 || _contentRef$current.focus();
        }
    }
    // ========================= Events =========================
    function onDialogVisibleChanged(newVisible) {
        // Try to focus
        if (newVisible) {
            focusDialogContent();
        } else {
            // Clean up scroll bar & focus back
            setAnimatedVisible(false);
            if (mask && lastOutSideActiveElementRef.current && focusTriggerAfterClose) {
                try {
                    lastOutSideActiveElementRef.current.focus({
                        preventScroll: true
                    });
                } catch (e) {
                // Do nothing
                }
                lastOutSideActiveElementRef.current = null;
            }
            // Trigger afterClose only when change visible from true to false
            if (animatedVisible) {
                afterClose === null || afterClose === void 0 || afterClose();
            }
        }
        afterOpenChange === null || afterOpenChange === void 0 || afterOpenChange(newVisible);
    }
    function onInternalClose(e) {
        onClose === null || onClose === void 0 || onClose(e);
    }
    // >>> Content
    var contentClickRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    var contentTimeoutRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])();
    // We need record content click incase content popup out of dialog
    var onContentMouseDown = function onContentMouseDown() {
        clearTimeout(contentTimeoutRef.current);
        contentClickRef.current = true;
    };
    var onContentMouseUp = function onContentMouseUp() {
        contentTimeoutRef.current = setTimeout(function() {
            contentClickRef.current = false;
        });
    };
    // >>> Wrapper
    // Close only when element not on dialog
    var onWrapperClick = null;
    if (maskClosable) {
        onWrapperClick = function onWrapperClick(e) {
            if (contentClickRef.current) {
                contentClickRef.current = false;
            } else if (wrapperRef.current === e.target) {
                onInternalClose(e);
            }
        };
    }
    function onWrapperKeyDown(e) {
        if (keyboard && e.keyCode === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].ESC) {
            e.stopPropagation();
            onInternalClose(e);
            return;
        }
        // keep focus inside dialog
        if (visible && e.keyCode === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].TAB) {
            contentRef.current.changeActive(!e.shiftKey);
        }
    }
    // ========================= Effect =========================
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(function() {
        if (visible) {
            setAnimatedVisible(true);
            saveLastOutSideActiveElementRef();
        }
    }, [
        visible
    ]);
    // Remove direct should also check the scroll bar update
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(function() {
        return function() {
            clearTimeout(contentTimeoutRef.current);
        };
    }, []);
    var mergedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        zIndex: zIndex
    }, wrapStyle), modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.wrapper), {}, {
        display: !animatedVisible ? 'none' : null
    });
    // ========================= Render =========================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-root"), rootClassName)
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(props, {
        data: true
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$Dialog$2f$Mask$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        visible: mask && visible,
        motionName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getMotionName"])(prefixCls, maskTransitionName, maskAnimation),
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
            zIndex: zIndex
        }, maskStyle), modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.mask),
        maskProps: maskProps,
        className: modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.mask
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        tabIndex: -1,
        onKeyDown: onWrapperKeyDown,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-wrap"), wrapClassName, modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.wrapper),
        ref: wrapperRef,
        onClick: onWrapperClick,
        style: mergedStyle
    }, wrapProps), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$Dialog$2f$Content$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        onMouseDown: onContentMouseDown,
        onMouseUp: onContentMouseUp,
        ref: contentRef,
        closable: closable,
        ariaId: ariaId,
        prefixCls: prefixCls,
        visible: visible && animatedVisible,
        onClose: onInternalClose,
        onVisibleChanged: onDialogVisibleChanged,
        motionName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getMotionName"])(prefixCls, transitionName, animation)
    }))));
};
const __TURBOPACK__default__export__ = Dialog;
}),
"[project]/Downloads/One click/node_modules/rc-dialog/es/DialogWrap.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$portal$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@rc-component/portal/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-dialog/es/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$Dialog$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-dialog/es/Dialog/index.js [ssr] (ecmascript)");
;
;
;
;
;
;
// fix issue #10656
/*
 * getContainer remarks
 * Custom container should not be return, because in the Portal component, it will remove the
 * return container element here, if the custom container is the only child of it's component,
 * like issue #10656, It will has a conflict with removeChild method in react-dom.
 * So here should add a child (div element) to custom container.
 * */ var DialogWrap = function DialogWrap(props) {
    var visible = props.visible, getContainer = props.getContainer, forceRender = props.forceRender, _props$destroyOnClose = props.destroyOnClose, destroyOnClose = _props$destroyOnClose === void 0 ? false : _props$destroyOnClose, _afterClose = props.afterClose, panelRef = props.panelRef;
    var _React$useState = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](visible), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), animatedVisible = _React$useState2[0], setAnimatedVisible = _React$useState2[1];
    var refContext = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](function() {
        return {
            panel: panelRef
        };
    }, [
        panelRef
    ]);
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](function() {
        if (visible) {
            setAnimatedVisible(true);
        }
    }, [
        visible
    ]);
    // Destroy on close will remove wrapped div
    if (!forceRender && destroyOnClose && !animatedVisible) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["RefContext"].Provider, {
        value: refContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$portal$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        open: visible || forceRender || animatedVisible,
        autoDestroy: false,
        getContainer: getContainer,
        autoLock: visible || animatedVisible
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$Dialog$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
        destroyOnClose: destroyOnClose,
        afterClose: function afterClose() {
            _afterClose === null || _afterClose === void 0 || _afterClose();
            setAnimatedVisible(false);
        }
    }))));
};
DialogWrap.displayName = 'Dialog';
const __TURBOPACK__default__export__ = DialogWrap;
}),
"[project]/Downloads/One click/node_modules/rc-dialog/es/index.js [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$DialogWrap$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-dialog/es/DialogWrap.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$Dialog$2f$Content$2f$Panel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-dialog/es/Dialog/Content/Panel.js [ssr] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$DialogWrap$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Downloads/One click/node_modules/rc-dialog/es/Dialog/Content/Panel.js [ssr] (ecmascript) <export default as Panel>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Panel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$Dialog$2f$Content$2f$Panel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dialog$2f$es$2f$Dialog$2f$Content$2f$Panel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-dialog/es/Dialog/Content/Panel.js [ssr] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/rc-textarea/es/calculateNodeHeight.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Thanks to https://github.com/andreypopp/react-textarea-autosize/
/**
 * calculateNodeHeight(uiTextNode, useCache = false)
 */ __turbopack_context__.s([
    "calculateNodeStyling",
    ()=>calculateNodeStyling,
    "default",
    ()=>calculateAutoSizeStyle
]);
var HIDDEN_TEXTAREA_STYLE = "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n  pointer-events: none !important;\n";
var SIZING_STYLE = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'font-variant',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing',
    'word-break',
    'white-space'
];
var computedStyleCache = {};
var hiddenTextarea;
function calculateNodeStyling(node) {
    var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');
    if (useCache && computedStyleCache[nodeRef]) {
        return computedStyleCache[nodeRef];
    }
    var style = window.getComputedStyle(node);
    var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');
    var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
    var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
    var sizingStyle = SIZING_STYLE.map(function(name) {
        return "".concat(name, ":").concat(style.getPropertyValue(name));
    }).join(';');
    var nodeInfo = {
        sizingStyle: sizingStyle,
        paddingSize: paddingSize,
        borderSize: borderSize,
        boxSizing: boxSizing
    };
    if (useCache && nodeRef) {
        computedStyleCache[nodeRef] = nodeInfo;
    }
    return nodeInfo;
}
function calculateAutoSizeStyle(uiTextNode) {
    var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var minRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var maxRows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    if (!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea');
        hiddenTextarea.setAttribute('tab-index', '-1');
        hiddenTextarea.setAttribute('aria-hidden', 'true');
        // fix: A form field element should have an id or name attribute
        // A form field element has neither an id nor a name attribute. This might prevent the browser from correctly autofilling the form.
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
        hiddenTextarea.setAttribute('name', 'hiddenTextarea');
        document.body.appendChild(hiddenTextarea);
    }
    // Fix wrap="off" issue
    // https://github.com/ant-design/ant-design/issues/6577
    if (uiTextNode.getAttribute('wrap')) {
        hiddenTextarea.setAttribute('wrap', uiTextNode.getAttribute('wrap'));
    } else {
        hiddenTextarea.removeAttribute('wrap');
    }
    // Copy all CSS properties that have an impact on the height of the content in
    // the textbox
    var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache), paddingSize = _calculateNodeStyling.paddingSize, borderSize = _calculateNodeStyling.borderSize, boxSizing = _calculateNodeStyling.boxSizing, sizingStyle = _calculateNodeStyling.sizingStyle;
    // Need to have the overflow attribute to hide the scrollbar otherwise
    // text-lines will not calculated properly as the shadow will technically be
    // narrower for content
    hiddenTextarea.setAttribute('style', "".concat(sizingStyle, ";").concat(HIDDEN_TEXTAREA_STYLE));
    hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
    var minHeight = undefined;
    var maxHeight = undefined;
    var overflowY;
    var height = hiddenTextarea.scrollHeight;
    if (boxSizing === 'border-box') {
        // border-box: add border, since height = content + padding + border
        height += borderSize;
    } else if (boxSizing === 'content-box') {
        // remove padding, since height = content
        height -= paddingSize;
    }
    if (minRows !== null || maxRows !== null) {
        // measure height of a textarea with a single row
        hiddenTextarea.value = ' ';
        var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
        if (minRows !== null) {
            minHeight = singleRowHeight * minRows;
            if (boxSizing === 'border-box') {
                minHeight = minHeight + paddingSize + borderSize;
            }
            height = Math.max(minHeight, height);
        }
        if (maxRows !== null) {
            maxHeight = singleRowHeight * maxRows;
            if (boxSizing === 'border-box') {
                maxHeight = maxHeight + paddingSize + borderSize;
            }
            overflowY = height > maxHeight ? '' : 'hidden';
            height = Math.min(maxHeight, height);
        }
    }
    var style = {
        height: height,
        overflowY: overflowY,
        resize: 'none'
    };
    if (minHeight) {
        style.minHeight = minHeight;
    }
    if (maxHeight) {
        style.maxHeight = maxHeight;
    }
    return style;
}
}),
"[project]/Downloads/One click/node_modules/rc-textarea/es/ResizableTextArea.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-resize-observer/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useLayoutEffect.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useMergedState.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/raf.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$textarea$2f$es$2f$calculateNodeHeight$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-textarea/es/calculateNodeHeight.js [ssr] (ecmascript)");
;
;
;
;
;
;
var _excluded = [
    "prefixCls",
    "defaultValue",
    "value",
    "autoSize",
    "onResize",
    "className",
    "style",
    "disabled",
    "onChange",
    "onInternalAutoSize"
];
;
;
;
;
;
;
;
var RESIZE_START = 0;
var RESIZE_MEASURING = 1;
var RESIZE_STABLE = 2;
var ResizableTextArea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](function(props, ref) {
    var _ref = props, prefixCls = _ref.prefixCls, defaultValue = _ref.defaultValue, value = _ref.value, autoSize = _ref.autoSize, onResize = _ref.onResize, className = _ref.className, style = _ref.style, disabled = _ref.disabled, onChange = _ref.onChange, onInternalAutoSize = _ref.onInternalAutoSize, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_ref, _excluded);
    // =============================== Value ================================
    var _useMergedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(defaultValue, {
        value: value,
        postState: function postState(val) {
            return val !== null && val !== void 0 ? val : '';
        }
    }), _useMergedState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_useMergedState, 2), mergedValue = _useMergedState2[0], setMergedValue = _useMergedState2[1];
    var onInternalChange = function onInternalChange(event) {
        setMergedValue(event.target.value);
        onChange === null || onChange === void 0 || onChange(event);
    };
    // ================================ Ref =================================
    var textareaRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"]();
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useImperativeHandle"](ref, function() {
        return {
            textArea: textareaRef.current
        };
    });
    // ============================== AutoSize ==============================
    var _React$useMemo = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](function() {
        if (autoSize && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(autoSize) === 'object') {
            return [
                autoSize.minRows,
                autoSize.maxRows
            ];
        }
        return [];
    }, [
        autoSize
    ]), _React$useMemo2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useMemo, 2), minRows = _React$useMemo2[0], maxRows = _React$useMemo2[1];
    var needAutoSize = !!autoSize;
    // =============================== Resize ===============================
    var _React$useState = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](RESIZE_STABLE), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), resizeState = _React$useState2[0], setResizeState = _React$useState2[1];
    var _React$useState3 = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](), _React$useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState3, 2), autoSizeStyle = _React$useState4[0], setAutoSizeStyle = _React$useState4[1];
    var startResize = function startResize() {
        setResizeState(RESIZE_START);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    // Change to trigger resize measure
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        if (needAutoSize) {
            startResize();
        }
    }, [
        value,
        minRows,
        maxRows,
        needAutoSize
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        if (resizeState === RESIZE_START) {
            setResizeState(RESIZE_MEASURING);
        } else if (resizeState === RESIZE_MEASURING) {
            var textareaStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$textarea$2f$es$2f$calculateNodeHeight$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(textareaRef.current, false, minRows, maxRows);
            // Safari has bug that text will keep break line on text cut when it's prev is break line.
            // ZombieJ: This not often happen. So we just skip it.
            // const { selectionStart, selectionEnd, scrollTop } = textareaRef.current;
            // const { value: tmpValue } = textareaRef.current;
            // textareaRef.current.value = '';
            // textareaRef.current.value = tmpValue;
            // if (document.activeElement === textareaRef.current) {
            //   textareaRef.current.scrollTop = scrollTop;
            //   textareaRef.current.setSelectionRange(selectionStart, selectionEnd);
            // }
            setResizeState(RESIZE_STABLE);
            setAutoSizeStyle(textareaStyles);
        } else {
        // https://github.com/react-component/textarea/pull/23
        // Firefox has blink issue before but fixed in latest version.
        }
    }, [
        resizeState
    ]);
    // We lock resize trigger by raf to avoid Safari warning
    var resizeRafRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"]();
    var cleanRaf = function cleanRaf() {
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].cancel(resizeRafRef.current);
    };
    var onInternalResize = function onInternalResize(size) {
        if (resizeState === RESIZE_STABLE) {
            onResize === null || onResize === void 0 || onResize(size);
            if (autoSize) {
                cleanRaf();
                resizeRafRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
                    startResize();
                });
            }
        }
    };
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](function() {
        return cleanRaf;
    }, []);
    // =============================== Render ===============================
    var mergedAutoSizeStyle = needAutoSize ? autoSizeStyle : null;
    var mergedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, style), mergedAutoSizeStyle);
    if (resizeState === RESIZE_START || resizeState === RESIZE_MEASURING) {
        mergedStyle.overflowY = 'hidden';
        mergedStyle.overflowX = 'hidden';
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        onResize: onInternalResize,
        disabled: !(autoSize || onResize)
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("textarea", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, restProps, {
        ref: textareaRef,
        style: mergedStyle,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, className, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-disabled"), disabled)),
        disabled: disabled,
        value: mergedValue,
        onChange: onInternalChange
    })));
});
const __TURBOPACK__default__export__ = ResizableTextArea;
}),
"[project]/Downloads/One click/node_modules/rc-textarea/es/TextArea.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-input/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$BaseInput$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BaseInput$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-input/es/BaseInput.js [ssr] (ecmascript) <export default as BaseInput>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$hooks$2f$useCount$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-input/es/hooks/useCount.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$utils$2f$commonUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-input/es/utils/commonUtils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useMergedState.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$textarea$2f$es$2f$ResizableTextArea$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-textarea/es/ResizableTextArea.js [ssr] (ecmascript)");
;
;
;
;
;
;
var _excluded = [
    "defaultValue",
    "value",
    "onFocus",
    "onBlur",
    "onChange",
    "allowClear",
    "maxLength",
    "onCompositionStart",
    "onCompositionEnd",
    "suffix",
    "prefixCls",
    "showCount",
    "count",
    "className",
    "style",
    "disabled",
    "hidden",
    "classNames",
    "styles",
    "onResize",
    "onClear",
    "onPressEnter",
    "readOnly",
    "autoSize",
    "onKeyDown"
];
;
;
;
;
;
;
;
var TextArea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].forwardRef(function(_ref, ref) {
    var _countConfig$max;
    var defaultValue = _ref.defaultValue, customValue = _ref.value, onFocus = _ref.onFocus, onBlur = _ref.onBlur, onChange = _ref.onChange, allowClear = _ref.allowClear, maxLength = _ref.maxLength, onCompositionStart = _ref.onCompositionStart, onCompositionEnd = _ref.onCompositionEnd, suffix = _ref.suffix, _ref$prefixCls = _ref.prefixCls, prefixCls = _ref$prefixCls === void 0 ? 'rc-textarea' : _ref$prefixCls, showCount = _ref.showCount, count = _ref.count, className = _ref.className, style = _ref.style, disabled = _ref.disabled, hidden = _ref.hidden, classNames = _ref.classNames, styles = _ref.styles, onResize = _ref.onResize, onClear = _ref.onClear, onPressEnter = _ref.onPressEnter, readOnly = _ref.readOnly, autoSize = _ref.autoSize, onKeyDown = _ref.onKeyDown, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_ref, _excluded);
    var _useMergedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(defaultValue, {
        value: customValue,
        defaultValue: defaultValue
    }), _useMergedState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_useMergedState, 2), value = _useMergedState2[0], setValue = _useMergedState2[1];
    var formatValue = value === undefined || value === null ? '' : String(value);
    var _React$useState = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useState(false), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), focused = _React$useState2[0], setFocused = _React$useState2[1];
    var compositionRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useRef(false);
    var _React$useState3 = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useState(null), _React$useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState3, 2), textareaResized = _React$useState4[0], setTextareaResized = _React$useState4[1];
    // =============================== Ref ================================
    var holderRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    var resizableTextAreaRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    var getTextArea = function getTextArea() {
        var _resizableTextAreaRef;
        return (_resizableTextAreaRef = resizableTextAreaRef.current) === null || _resizableTextAreaRef === void 0 ? void 0 : _resizableTextAreaRef.textArea;
    };
    var focus = function focus() {
        getTextArea().focus();
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useImperativeHandle"])(ref, function() {
        var _holderRef$current;
        return {
            resizableTextArea: resizableTextAreaRef.current,
            focus: focus,
            blur: function blur() {
                getTextArea().blur();
            },
            nativeElement: ((_holderRef$current = holderRef.current) === null || _holderRef$current === void 0 ? void 0 : _holderRef$current.nativeElement) || getTextArea()
        };
    });
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(function() {
        setFocused(function(prev) {
            return !disabled && prev;
        });
    }, [
        disabled
    ]);
    // =========================== Select Range ===========================
    var _React$useState5 = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useState(null), _React$useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState5, 2), selection = _React$useState6[0], setSelection = _React$useState6[1];
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useEffect(function() {
        if (selection) {
            var _getTextArea;
            (_getTextArea = getTextArea()).setSelectionRange.apply(_getTextArea, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(selection));
        }
    }, [
        selection
    ]);
    // ============================== Count ===============================
    var countConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$hooks$2f$useCount$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(count, showCount);
    var mergedMax = (_countConfig$max = countConfig.max) !== null && _countConfig$max !== void 0 ? _countConfig$max : maxLength;
    // Max length value
    var hasMaxLength = Number(mergedMax) > 0;
    var valueLength = countConfig.strategy(formatValue);
    var isOutOfRange = !!mergedMax && valueLength > mergedMax;
    // ============================== Change ==============================
    var triggerChange = function triggerChange(e, currentValue) {
        var cutValue = currentValue;
        if (!compositionRef.current && countConfig.exceedFormatter && countConfig.max && countConfig.strategy(currentValue) > countConfig.max) {
            cutValue = countConfig.exceedFormatter(currentValue, {
                max: countConfig.max
            });
            if (currentValue !== cutValue) {
                setSelection([
                    getTextArea().selectionStart || 0,
                    getTextArea().selectionEnd || 0
                ]);
            }
        }
        setValue(cutValue);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$utils$2f$commonUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resolveOnChange"])(e.currentTarget, e, onChange, cutValue);
    };
    // =========================== Value Update ===========================
    var onInternalCompositionStart = function onInternalCompositionStart(e) {
        compositionRef.current = true;
        onCompositionStart === null || onCompositionStart === void 0 || onCompositionStart(e);
    };
    var onInternalCompositionEnd = function onInternalCompositionEnd(e) {
        compositionRef.current = false;
        triggerChange(e, e.currentTarget.value);
        onCompositionEnd === null || onCompositionEnd === void 0 || onCompositionEnd(e);
    };
    var onInternalChange = function onInternalChange(e) {
        triggerChange(e, e.target.value);
    };
    var handleKeyDown = function handleKeyDown(e) {
        if (e.key === 'Enter' && onPressEnter) {
            onPressEnter(e);
        }
        onKeyDown === null || onKeyDown === void 0 || onKeyDown(e);
    };
    var handleFocus = function handleFocus(e) {
        setFocused(true);
        onFocus === null || onFocus === void 0 || onFocus(e);
    };
    var handleBlur = function handleBlur(e) {
        setFocused(false);
        onBlur === null || onBlur === void 0 || onBlur(e);
    };
    // ============================== Reset ===============================
    var handleReset = function handleReset(e) {
        setValue('');
        focus();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$utils$2f$commonUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resolveOnChange"])(getTextArea(), e, onChange);
    };
    var suffixNode = suffix;
    var dataCount;
    if (countConfig.show) {
        if (countConfig.showFormatter) {
            dataCount = countConfig.showFormatter({
                value: formatValue,
                count: valueLength,
                maxLength: mergedMax
            });
        } else {
            dataCount = "".concat(valueLength).concat(hasMaxLength ? " / ".concat(mergedMax) : '');
        }
        suffixNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].Fragment, null, suffixNode, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-data-count"), classNames === null || classNames === void 0 ? void 0 : classNames.count),
            style: styles === null || styles === void 0 ? void 0 : styles.count
        }, dataCount));
    }
    var handleResize = function handleResize(size) {
        var _getTextArea2;
        onResize === null || onResize === void 0 || onResize(size);
        if ((_getTextArea2 = getTextArea()) !== null && _getTextArea2 !== void 0 && _getTextArea2.style.height) {
            setTextareaResized(true);
        }
    };
    var isPureTextArea = !autoSize && !showCount && !allowClear;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$input$2f$es$2f$BaseInput$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BaseInput$3e$__["BaseInput"], {
        ref: holderRef,
        value: formatValue,
        allowClear: allowClear,
        handleReset: handleReset,
        suffix: suffixNode,
        prefixCls: prefixCls,
        classNames: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, classNames), {}, {
            affixWrapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(classNames === null || classNames === void 0 ? void 0 : classNames.affixWrapper, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-show-count"), showCount), "".concat(prefixCls, "-textarea-allow-clear"), allowClear))
        }),
        disabled: disabled,
        focused: focused,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(className, isOutOfRange && "".concat(prefixCls, "-out-of-range")),
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, style), textareaResized && !isPureTextArea ? {
            height: 'auto'
        } : {}),
        dataAttrs: {
            affixWrapper: {
                'data-count': typeof dataCount === 'string' ? dataCount : undefined
            }
        },
        hidden: hidden,
        readOnly: readOnly,
        onClear: onClear
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$textarea$2f$es$2f$ResizableTextArea$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, rest, {
        autoSize: autoSize,
        maxLength: maxLength,
        onKeyDown: handleKeyDown,
        onChange: onInternalChange,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onCompositionStart: onInternalCompositionStart,
        onCompositionEnd: onInternalCompositionEnd,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(classNames === null || classNames === void 0 ? void 0 : classNames.textarea),
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, styles === null || styles === void 0 ? void 0 : styles.textarea), {}, {
            resize: style === null || style === void 0 ? void 0 : style.resize
        }),
        disabled: disabled,
        prefixCls: prefixCls,
        onResize: handleResize,
        ref: resizableTextAreaRef,
        readOnly: readOnly
    })));
});
const __TURBOPACK__default__export__ = TextArea;
}),
"[project]/Downloads/One click/node_modules/rc-textarea/es/index.js [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$textarea$2f$es$2f$TextArea$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-textarea/es/TextArea.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$textarea$2f$es$2f$ResizableTextArea$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-textarea/es/ResizableTextArea.js [ssr] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$textarea$2f$es$2f$TextArea$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Downloads/One click/node_modules/rc-upload/es/attr-accept.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/warning.js [ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = function(file, acceptedFiles) {
    if (file && acceptedFiles) {
        var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
        var fileName = file.name || '';
        var mimeType = file.type || '';
        var baseMimeType = mimeType.replace(/\/.*$/, '');
        return acceptedFilesArray.some(function(type) {
            var validType = type.trim();
            // This is something like */*,*  allow all files
            if (/^\*(\/\*)?$/.test(type)) {
                return true;
            }
            // like .jpg, .png
            if (validType.charAt(0) === '.') {
                var lowerFileName = fileName.toLowerCase();
                var lowerType = validType.toLowerCase();
                var affixList = [
                    lowerType
                ];
                if (lowerType === '.jpg' || lowerType === '.jpeg') {
                    affixList = [
                        '.jpg',
                        '.jpeg'
                    ];
                }
                return affixList.some(function(affix) {
                    return lowerFileName.endsWith(affix);
                });
            }
            // This is something like a image/* mime type
            if (/\/\*$/.test(validType)) {
                return baseMimeType === validType.replace(/\/.*$/, '');
            }
            // Full match
            if (mimeType === validType) {
                return true;
            }
            // Invalidate type should skip
            if (/^\w+$/.test(validType)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(false, "Upload takes an invalidate 'accept' type '".concat(validType, "'.Skip for check."));
                return true;
            }
            return false;
        });
    }
    return true;
};
}),
"[project]/Downloads/One click/node_modules/rc-upload/es/request.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>upload
]);
function getError(option, xhr) {
    var msg = "cannot ".concat(option.method, " ").concat(option.action, " ").concat(xhr.status, "'");
    var err = new Error(msg);
    err.status = xhr.status;
    err.method = option.method;
    err.url = option.action;
    return err;
}
function getBody(xhr) {
    var text = xhr.responseText || xhr.response;
    if (!text) {
        return text;
    }
    try {
        return JSON.parse(text);
    } catch (e) {
        return text;
    }
}
function upload(option) {
    // eslint-disable-next-line no-undef
    var xhr = new XMLHttpRequest();
    if (option.onProgress && xhr.upload) {
        xhr.upload.onprogress = function progress(e) {
            if (e.total > 0) {
                e.percent = e.loaded / e.total * 100;
            }
            option.onProgress(e);
        };
    }
    // eslint-disable-next-line no-undef
    var formData = new FormData();
    if (option.data) {
        Object.keys(option.data).forEach(function(key) {
            var value = option.data[key];
            // support key-value array data
            if (Array.isArray(value)) {
                value.forEach(function(item) {
                    // { list: [ 11, 22 ] }
                    // formData.append('list[]', 11);
                    formData.append("".concat(key, "[]"), item);
                });
                return;
            }
            formData.append(key, value);
        });
    }
    // eslint-disable-next-line no-undef
    if (option.file instanceof Blob) {
        formData.append(option.filename, option.file, option.file.name);
    } else {
        formData.append(option.filename, option.file);
    }
    xhr.onerror = function error(e) {
        option.onError(e);
    };
    xhr.onload = function onload() {
        // allow success when 2xx status
        // see https://github.com/react-component/upload/issues/34
        if (xhr.status < 200 || xhr.status >= 300) {
            return option.onError(getError(option, xhr), getBody(xhr));
        }
        return option.onSuccess(getBody(xhr), xhr);
    };
    xhr.open(option.method, option.action, true);
    // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179
    if (option.withCredentials && 'withCredentials' in xhr) {
        xhr.withCredentials = true;
    }
    var headers = option.headers || {};
    // when set headers['X-Requested-With'] = null , can close default XHR header
    // see https://github.com/react-component/upload/issues/33
    if (headers['X-Requested-With'] !== null) {
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    }
    Object.keys(headers).forEach(function(h) {
        if (headers[h] !== null) {
            xhr.setRequestHeader(h, headers[h]);
        }
    });
    xhr.send(formData);
    return {
        abort: function abort() {
            xhr.abort();
        }
    };
}
}),
"[project]/Downloads/One click/node_modules/rc-upload/es/traverseFileTree.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$asyncToGenerator$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js [ssr] (ecmascript)");
;
;
;
// https://github.com/ant-design/ant-design/issues/50080
var traverseFileTree = /*#__PURE__*/ function() {
    var _ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$asyncToGenerator$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])().mark(function _callee4(files, isAccepted) {
        var flattenFileList, progressFileList, readDirectory, _readDirectory, readFile, _readFile, _traverseFileTree, wipIndex;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])().wrap(function _callee4$(_context4) {
            while(1)switch(_context4.prev = _context4.next){
                case 0:
                    _readFile = function _readFile3() {
                        _readFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$asyncToGenerator$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])().mark(function _callee3(item) {
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])().wrap(function _callee3$(_context3) {
                                while(1)switch(_context3.prev = _context3.next){
                                    case 0:
                                        return _context3.abrupt("return", new Promise(function(reslove) {
                                            item.file(function(file) {
                                                if (isAccepted(file)) {
                                                    // https://github.com/ant-design/ant-design/issues/16426
                                                    if (item.fullPath && !file.webkitRelativePath) {
                                                        Object.defineProperties(file, {
                                                            webkitRelativePath: {
                                                                writable: true
                                                            }
                                                        });
                                                        // eslint-disable-next-line no-param-reassign
                                                        file.webkitRelativePath = item.fullPath.replace(/^\//, '');
                                                        Object.defineProperties(file, {
                                                            webkitRelativePath: {
                                                                writable: false
                                                            }
                                                        });
                                                    }
                                                    reslove(file);
                                                } else {
                                                    reslove(null);
                                                }
                                            });
                                        }));
                                    case 1:
                                    case "end":
                                        return _context3.stop();
                                }
                            }, _callee3);
                        }));
                        return _readFile.apply(this, arguments);
                    };
                    readFile = function _readFile2(_x4) {
                        return _readFile.apply(this, arguments);
                    };
                    _readDirectory = function _readDirectory3() {
                        _readDirectory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$asyncToGenerator$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])().mark(function _callee2(directory) {
                            var dirReader, entries, results, n, i;
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])().wrap(function _callee2$(_context2) {
                                while(1)switch(_context2.prev = _context2.next){
                                    case 0:
                                        dirReader = directory.createReader();
                                        entries = [];
                                    case 2:
                                        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                                        ;
                                        _context2.next = 5;
                                        return new Promise(function(resolve) {
                                            dirReader.readEntries(resolve, function() {
                                                return resolve([]);
                                            });
                                        });
                                    case 5:
                                        results = _context2.sent;
                                        n = results.length;
                                        if (n) {
                                            _context2.next = 9;
                                            break;
                                        }
                                        return _context2.abrupt("break", 12);
                                    case 9:
                                        for(i = 0; i < n; i++){
                                            entries.push(results[i]);
                                        }
                                        _context2.next = 2;
                                        break;
                                    case 12:
                                        return _context2.abrupt("return", entries);
                                    case 13:
                                    case "end":
                                        return _context2.stop();
                                }
                            }, _callee2);
                        }));
                        return _readDirectory.apply(this, arguments);
                    };
                    readDirectory = function _readDirectory2(_x3) {
                        return _readDirectory.apply(this, arguments);
                    };
                    flattenFileList = [];
                    progressFileList = [];
                    files.forEach(function(file) {
                        return progressFileList.push(file.webkitGetAsEntry());
                    });
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    _traverseFileTree = /*#__PURE__*/ function() {
                        var _ref2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$asyncToGenerator$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])().mark(function _callee(item, path) {
                            var _file, entries;
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])().wrap(function _callee$(_context) {
                                while(1)switch(_context.prev = _context.next){
                                    case 0:
                                        if (item) {
                                            _context.next = 2;
                                            break;
                                        }
                                        return _context.abrupt("return");
                                    case 2:
                                        // eslint-disable-next-line no-param-reassign
                                        item.path = path || '';
                                        if (!item.isFile) {
                                            _context.next = 10;
                                            break;
                                        }
                                        _context.next = 6;
                                        return readFile(item);
                                    case 6:
                                        _file = _context.sent;
                                        if (_file) {
                                            flattenFileList.push(_file);
                                        }
                                        _context.next = 15;
                                        break;
                                    case 10:
                                        if (!item.isDirectory) {
                                            _context.next = 15;
                                            break;
                                        }
                                        _context.next = 13;
                                        return readDirectory(item);
                                    case 13:
                                        entries = _context.sent;
                                        progressFileList.push.apply(progressFileList, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(entries));
                                    case 15:
                                    case "end":
                                        return _context.stop();
                                }
                            }, _callee);
                        }));
                        return function _traverseFileTree(_x5, _x6) {
                            return _ref2.apply(this, arguments);
                        };
                    }();
                    wipIndex = 0;
                case 9:
                    if (!(wipIndex < progressFileList.length)) {
                        _context4.next = 15;
                        break;
                    }
                    _context4.next = 12;
                    return _traverseFileTree(progressFileList[wipIndex]);
                case 12:
                    wipIndex++;
                    _context4.next = 9;
                    break;
                case 15:
                    return _context4.abrupt("return", flattenFileList);
                case 16:
                case "end":
                    return _context4.stop();
            }
        }, _callee4);
    }));
    return function traverseFileTree(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();
const __TURBOPACK__default__export__ = traverseFileTree;
}),
"[project]/Downloads/One click/node_modules/rc-upload/es/uid.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>uid
]);
var now = +new Date();
var index = 0;
function uid() {
    // eslint-disable-next-line no-plusplus
    return "rc-upload-".concat(now, "-").concat(++index);
}
}),
"[project]/Downloads/One click/node_modules/rc-upload/es/AjaxUploader.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$asyncToGenerator$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/createClass.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/inherits.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createSuper$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/createSuper.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [ssr] (ecmascript)");
/* eslint react/no-is-mounted:0,react/sort-comp:0,react/prop-types:0 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/pickAttrs.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$upload$2f$es$2f$attr$2d$accept$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-upload/es/attr-accept.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$upload$2f$es$2f$request$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-upload/es/request.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$upload$2f$es$2f$traverseFileTree$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-upload/es/traverseFileTree.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$upload$2f$es$2f$uid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-upload/es/uid.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
var _excluded = [
    "component",
    "prefixCls",
    "className",
    "classNames",
    "disabled",
    "id",
    "name",
    "style",
    "styles",
    "multiple",
    "accept",
    "capture",
    "children",
    "directory",
    "folder",
    "openFileDialogOnClick",
    "onMouseEnter",
    "onMouseLeave",
    "hasControlInside"
];
;
;
;
;
;
;
;
var AjaxUploader = /*#__PURE__*/ function(_Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(AjaxUploader, _Component);
    var _super = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createSuper$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(AjaxUploader);
    function AjaxUploader() {
        var _this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(this, AjaxUploader);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "state", {
            uid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$upload$2f$es$2f$uid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])()
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "reqs", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "fileInput", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "_isMounted", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onChange", function(e) {
            var _this$props = _this.props, accept = _this$props.accept, directory = _this$props.directory;
            var files = e.target.files;
            var acceptedFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(files).filter(function(file) {
                return !directory || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$upload$2f$es$2f$attr$2d$accept$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(file, accept);
            });
            _this.uploadFiles(acceptedFiles);
            _this.reset();
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onClick", function(event) {
            var el = _this.fileInput;
            if (!el) {
                return;
            }
            var target = event.target;
            var onClick = _this.props.onClick;
            if (target && target.tagName === 'BUTTON') {
                var parent = el.parentNode;
                parent.focus();
                target.blur();
            }
            el.click();
            if (onClick) {
                onClick(event);
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onKeyDown", function(e) {
            if (e.key === 'Enter') {
                _this.onClick(e);
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onDataTransferFiles", /*#__PURE__*/ function() {
            var _ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$asyncToGenerator$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])().mark(function _callee(dataTransfer, existFileCallback) {
                var _this$props2, multiple, accept, directory, items, files, acceptFiles;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])().wrap(function _callee$(_context) {
                    while(1)switch(_context.prev = _context.next){
                        case 0:
                            _this$props2 = _this.props, multiple = _this$props2.multiple, accept = _this$props2.accept, directory = _this$props2.directory;
                            items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(dataTransfer.items || []);
                            files = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(dataTransfer.files || []);
                            if (files.length > 0 || items.some(function(item) {
                                return item.kind === 'file';
                            })) {
                                existFileCallback === null || existFileCallback === void 0 || existFileCallback();
                            }
                            if (!directory) {
                                _context.next = 11;
                                break;
                            }
                            _context.next = 7;
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$upload$2f$es$2f$traverseFileTree$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(Array.prototype.slice.call(items), function(_file) {
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$upload$2f$es$2f$attr$2d$accept$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_file, _this.props.accept);
                            });
                        case 7:
                            files = _context.sent;
                            _this.uploadFiles(files);
                            _context.next = 14;
                            break;
                        case 11:
                            acceptFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(files).filter(function(file) {
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$upload$2f$es$2f$attr$2d$accept$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(file, accept);
                            });
                            if (multiple === false) {
                                acceptFiles = files.slice(0, 1);
                            }
                            _this.uploadFiles(acceptFiles);
                        case 14:
                        case "end":
                            return _context.stop();
                    }
                }, _callee);
            }));
            return function(_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onFilePaste", /*#__PURE__*/ function() {
            var _ref2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$asyncToGenerator$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])().mark(function _callee2(e) {
                var pastable, clipboardData;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])().wrap(function _callee2$(_context2) {
                    while(1)switch(_context2.prev = _context2.next){
                        case 0:
                            pastable = _this.props.pastable;
                            if (pastable) {
                                _context2.next = 3;
                                break;
                            }
                            return _context2.abrupt("return");
                        case 3:
                            if (!(e.type === 'paste')) {
                                _context2.next = 6;
                                break;
                            }
                            clipboardData = e.clipboardData;
                            return _context2.abrupt("return", _this.onDataTransferFiles(clipboardData, function() {
                                e.preventDefault();
                            }));
                        case 6:
                        case "end":
                            return _context2.stop();
                    }
                }, _callee2);
            }));
            return function(_x3) {
                return _ref2.apply(this, arguments);
            };
        }());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onFileDragOver", function(e) {
            e.preventDefault();
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onFileDrop", /*#__PURE__*/ function() {
            var _ref3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$asyncToGenerator$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])().mark(function _callee3(e) {
                var dataTransfer;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])().wrap(function _callee3$(_context3) {
                    while(1)switch(_context3.prev = _context3.next){
                        case 0:
                            e.preventDefault();
                            if (!(e.type === 'drop')) {
                                _context3.next = 4;
                                break;
                            }
                            dataTransfer = e.dataTransfer;
                            return _context3.abrupt("return", _this.onDataTransferFiles(dataTransfer));
                        case 4:
                        case "end":
                            return _context3.stop();
                    }
                }, _callee3);
            }));
            return function(_x4) {
                return _ref3.apply(this, arguments);
            };
        }());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "uploadFiles", function(files) {
            var originFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(files);
            var postFiles = originFiles.map(function(file) {
                // eslint-disable-next-line no-param-reassign
                file.uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$upload$2f$es$2f$uid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])();
                return _this.processFile(file, originFiles);
            });
            // Batch upload files
            Promise.all(postFiles).then(function(fileList) {
                var onBatchStart = _this.props.onBatchStart;
                onBatchStart === null || onBatchStart === void 0 || onBatchStart(fileList.map(function(_ref4) {
                    var origin = _ref4.origin, parsedFile = _ref4.parsedFile;
                    return {
                        file: origin,
                        parsedFile: parsedFile
                    };
                }));
                fileList.filter(function(file) {
                    return file.parsedFile !== null;
                }).forEach(function(file) {
                    _this.post(file);
                });
            });
        });
        /**
     * Process file before upload. When all the file is ready, we start upload.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "processFile", /*#__PURE__*/ function() {
            var _ref5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$asyncToGenerator$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])().mark(function _callee4(file, fileList) {
                var beforeUpload, transformedFile, action, mergedAction, data, mergedData, parsedData, parsedFile, mergedParsedFile;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])().wrap(function _callee4$(_context4) {
                    while(1)switch(_context4.prev = _context4.next){
                        case 0:
                            beforeUpload = _this.props.beforeUpload;
                            transformedFile = file;
                            if (!beforeUpload) {
                                _context4.next = 14;
                                break;
                            }
                            _context4.prev = 3;
                            _context4.next = 6;
                            return beforeUpload(file, fileList);
                        case 6:
                            transformedFile = _context4.sent;
                            _context4.next = 12;
                            break;
                        case 9:
                            _context4.prev = 9;
                            _context4.t0 = _context4["catch"](3);
                            // Rejection will also trade as false
                            transformedFile = false;
                        case 12:
                            if (!(transformedFile === false)) {
                                _context4.next = 14;
                                break;
                            }
                            return _context4.abrupt("return", {
                                origin: file,
                                parsedFile: null,
                                action: null,
                                data: null
                            });
                        case 14:
                            // Get latest action
                            action = _this.props.action;
                            if (!(typeof action === 'function')) {
                                _context4.next = 21;
                                break;
                            }
                            _context4.next = 18;
                            return action(file);
                        case 18:
                            mergedAction = _context4.sent;
                            _context4.next = 22;
                            break;
                        case 21:
                            mergedAction = action;
                        case 22:
                            // Get latest data
                            data = _this.props.data;
                            if (!(typeof data === 'function')) {
                                _context4.next = 29;
                                break;
                            }
                            _context4.next = 26;
                            return data(file);
                        case 26:
                            mergedData = _context4.sent;
                            _context4.next = 30;
                            break;
                        case 29:
                            mergedData = data;
                        case 30:
                            parsedData = // string type is from legacy `transformFile`.
                            // Not sure if this will work since no related test case works with it
                            ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(transformedFile) === 'object' || typeof transformedFile === 'string') && transformedFile ? transformedFile : file;
                            if (parsedData instanceof File) {
                                parsedFile = parsedData;
                            } else {
                                parsedFile = new File([
                                    parsedData
                                ], file.name, {
                                    type: file.type
                                });
                            }
                            mergedParsedFile = parsedFile;
                            mergedParsedFile.uid = file.uid;
                            return _context4.abrupt("return", {
                                origin: file,
                                data: mergedData,
                                parsedFile: mergedParsedFile,
                                action: mergedAction
                            });
                        case 35:
                        case "end":
                            return _context4.stop();
                    }
                }, _callee4, null, [
                    [
                        3,
                        9
                    ]
                ]);
            }));
            return function(_x5, _x6) {
                return _ref5.apply(this, arguments);
            };
        }());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "saveFileInput", function(node) {
            _this.fileInput = node;
        });
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(AjaxUploader, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this._isMounted = true;
                var pastable = this.props.pastable;
                if (pastable) {
                    document.addEventListener('paste', this.onFilePaste);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this._isMounted = false;
                this.abort();
                document.removeEventListener('paste', this.onFilePaste);
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                var pastable = this.props.pastable;
                if (pastable && !prevProps.pastable) {
                    document.addEventListener('paste', this.onFilePaste);
                } else if (!pastable && prevProps.pastable) {
                    document.removeEventListener('paste', this.onFilePaste);
                }
            }
        },
        {
            key: "post",
            value: function post(_ref6) {
                var _this2 = this;
                var data = _ref6.data, origin = _ref6.origin, action = _ref6.action, parsedFile = _ref6.parsedFile;
                if (!this._isMounted) {
                    return;
                }
                var _this$props3 = this.props, onStart = _this$props3.onStart, customRequest = _this$props3.customRequest, name = _this$props3.name, headers = _this$props3.headers, withCredentials = _this$props3.withCredentials, method = _this$props3.method;
                var uid = origin.uid;
                var request = customRequest || __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$upload$2f$es$2f$request$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"];
                var requestOption = {
                    action: action,
                    filename: name,
                    data: data,
                    file: parsedFile,
                    headers: headers,
                    withCredentials: withCredentials,
                    method: method || 'post',
                    onProgress: function onProgress(e) {
                        var onProgress = _this2.props.onProgress;
                        onProgress === null || onProgress === void 0 || onProgress(e, parsedFile);
                    },
                    onSuccess: function onSuccess(ret, xhr) {
                        var onSuccess = _this2.props.onSuccess;
                        onSuccess === null || onSuccess === void 0 || onSuccess(ret, parsedFile, xhr);
                        delete _this2.reqs[uid];
                    },
                    onError: function onError(err, ret) {
                        var onError = _this2.props.onError;
                        onError === null || onError === void 0 || onError(err, ret, parsedFile);
                        delete _this2.reqs[uid];
                    }
                };
                onStart(origin);
                this.reqs[uid] = request(requestOption, {
                    defaultRequest: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$upload$2f$es$2f$request$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
                });
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.setState({
                    uid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$upload$2f$es$2f$uid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])()
                });
            }
        },
        {
            key: "abort",
            value: function abort(file) {
                var reqs = this.reqs;
                if (file) {
                    var uid = file.uid ? file.uid : file;
                    if (reqs[uid] && reqs[uid].abort) {
                        reqs[uid].abort();
                    }
                    delete reqs[uid];
                } else {
                    Object.keys(reqs).forEach(function(uid) {
                        if (reqs[uid] && reqs[uid].abort) {
                            reqs[uid].abort();
                        }
                        delete reqs[uid];
                    });
                }
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props4 = this.props, Tag = _this$props4.component, prefixCls = _this$props4.prefixCls, className = _this$props4.className, _this$props4$classNam = _this$props4.classNames, classNames = _this$props4$classNam === void 0 ? {} : _this$props4$classNam, disabled = _this$props4.disabled, id = _this$props4.id, name = _this$props4.name, style = _this$props4.style, _this$props4$styles = _this$props4.styles, styles = _this$props4$styles === void 0 ? {} : _this$props4$styles, multiple = _this$props4.multiple, accept = _this$props4.accept, capture = _this$props4.capture, children = _this$props4.children, directory = _this$props4.directory, folder = _this$props4.folder, openFileDialogOnClick = _this$props4.openFileDialogOnClick, onMouseEnter = _this$props4.onMouseEnter, onMouseLeave = _this$props4.onMouseLeave, hasControlInside = _this$props4.hasControlInside, otherProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_this$props4, _excluded);
                var cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, prefixCls, true), "".concat(prefixCls, "-disabled"), disabled), className, className));
                // because input don't have directory/webkitdirectory type declaration
                var dirProps = directory || folder ? {
                    directory: 'directory',
                    webkitdirectory: 'webkitdirectory'
                } : {};
                var events = disabled ? {} : {
                    onClick: openFileDialogOnClick ? this.onClick : function() {},
                    onKeyDown: openFileDialogOnClick ? this.onKeyDown : function() {},
                    onMouseEnter: onMouseEnter,
                    onMouseLeave: onMouseLeave,
                    onDrop: this.onFileDrop,
                    onDragOver: this.onFileDragOver,
                    tabIndex: hasControlInside ? undefined : '0'
                };
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(Tag, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, events, {
                    className: cls,
                    role: hasControlInside ? undefined : 'button',
                    style: style
                }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("input", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(otherProps, {
                    aria: true,
                    data: true
                }), {
                    id: id,
                    name: name,
                    disabled: disabled,
                    type: "file",
                    ref: this.saveFileInput,
                    onClick: function onClick(e) {
                        return e.stopPropagation();
                    } // https://github.com/ant-design/ant-design/issues/19948
                    ,
                    key: this.state.uid,
                    style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
                        display: 'none'
                    }, styles.input),
                    className: classNames.input,
                    accept: accept
                }, dirProps, {
                    multiple: multiple,
                    onChange: this.onChange
                }, capture != null ? {
                    capture: capture
                } : {})), children);
            }
        }
    ]);
    return AjaxUploader;
}(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Component"]);
const __TURBOPACK__default__export__ = AjaxUploader;
}),
"[project]/Downloads/One click/node_modules/rc-upload/es/Upload.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/createClass.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/inherits.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createSuper$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/createSuper.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [ssr] (ecmascript)");
/* eslint react/prop-types:0 */ var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$upload$2f$es$2f$AjaxUploader$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-upload/es/AjaxUploader.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function empty() {}
var Upload = /*#__PURE__*/ function(_Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(Upload, _Component);
    var _super = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createSuper$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(Upload);
    function Upload() {
        var _this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(this, Upload);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "uploader", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "saveUploader", function(node) {
            _this.uploader = node;
        });
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(Upload, [
        {
            key: "abort",
            value: function abort(file) {
                this.uploader.abort(file);
            }
        },
        {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$upload$2f$es$2f$AjaxUploader$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, this.props, {
                    ref: this.saveUploader
                }));
            }
        }
    ]);
    return Upload;
}(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Component"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(Upload, "defaultProps", {
    component: 'span',
    prefixCls: 'rc-upload',
    data: {},
    headers: {},
    name: 'file',
    multipart: false,
    onStart: empty,
    onError: empty,
    onSuccess: empty,
    multiple: false,
    beforeUpload: null,
    customRequest: null,
    withCredentials: false,
    openFileDialogOnClick: true,
    hasControlInside: false
});
const __TURBOPACK__default__export__ = Upload;
}),
"[project]/Downloads/One click/node_modules/rc-upload/es/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$upload$2f$es$2f$Upload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-upload/es/Upload.js [ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$upload$2f$es$2f$Upload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Downloads/One click/node_modules/rc-progress/es/common.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultProps",
    ()=>defaultProps,
    "useTransitionDuration",
    ()=>useTransitionDuration
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
var defaultProps = {
    percent: 0,
    prefixCls: 'rc-progress',
    strokeColor: '#2db7f5',
    strokeLinecap: 'round',
    strokeWidth: 1,
    trailColor: '#D9D9D9',
    trailWidth: 1,
    gapPosition: 'bottom'
};
var useTransitionDuration = function useTransitionDuration() {
    var pathsRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])([]);
    var prevTimeStamp = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(function() {
        var now = Date.now();
        var updated = false;
        pathsRef.current.forEach(function(path) {
            if (!path) {
                return;
            }
            updated = true;
            var pathStyle = path.style;
            pathStyle.transitionDuration = '.3s, .3s, .3s, .06s';
            if (prevTimeStamp.current && now - prevTimeStamp.current < 100) {
                pathStyle.transitionDuration = '0s, 0s';
            }
        });
        if (updated) {
            prevTimeStamp.current = Date.now();
        }
    });
    return pathsRef.current;
};
}),
"[project]/Downloads/One click/node_modules/rc-progress/es/Line.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$common$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-progress/es/common.js [ssr] (ecmascript)");
;
;
;
var _excluded = [
    "className",
    "percent",
    "prefixCls",
    "strokeColor",
    "strokeLinecap",
    "strokeWidth",
    "style",
    "trailColor",
    "trailWidth",
    "transition"
];
;
;
;
var Line = function Line(props) {
    var _defaultProps$props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$common$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["defaultProps"]), props), className = _defaultProps$props.className, percent = _defaultProps$props.percent, prefixCls = _defaultProps$props.prefixCls, strokeColor = _defaultProps$props.strokeColor, strokeLinecap = _defaultProps$props.strokeLinecap, strokeWidth = _defaultProps$props.strokeWidth, style = _defaultProps$props.style, trailColor = _defaultProps$props.trailColor, trailWidth = _defaultProps$props.trailWidth, transition = _defaultProps$props.transition, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_defaultProps$props, _excluded);
    // eslint-disable-next-line no-param-reassign
    delete restProps.gapPosition;
    var percentList = Array.isArray(percent) ? percent : [
        percent
    ];
    var strokeColorList = Array.isArray(strokeColor) ? strokeColor : [
        strokeColor
    ];
    var paths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$common$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useTransitionDuration"])();
    var center = strokeWidth / 2;
    var right = 100 - strokeWidth / 2;
    var pathString = "M ".concat(strokeLinecap === 'round' ? center : 0, ",").concat(center, "\n         L ").concat(strokeLinecap === 'round' ? right : 100, ",").concat(center);
    var viewBoxString = "0 0 100 ".concat(strokeWidth);
    var stackPtg = 0;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("svg", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-line"), className),
        viewBox: viewBoxString,
        preserveAspectRatio: "none",
        style: style
    }, restProps), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("path", {
        className: "".concat(prefixCls, "-line-trail"),
        d: pathString,
        strokeLinecap: strokeLinecap,
        stroke: trailColor,
        strokeWidth: trailWidth || strokeWidth,
        fillOpacity: "0"
    }), percentList.map(function(ptg, index) {
        var dashPercent = 1;
        switch(strokeLinecap){
            case 'round':
                dashPercent = 1 - strokeWidth / 100;
                break;
            case 'square':
                dashPercent = 1 - strokeWidth / 2 / 100;
                break;
            default:
                dashPercent = 1;
                break;
        }
        var pathStyle = {
            strokeDasharray: "".concat(ptg * dashPercent, "px, 100px"),
            strokeDashoffset: "-".concat(stackPtg, "px"),
            transition: transition || 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear'
        };
        var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];
        stackPtg += ptg;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("path", {
            key: index,
            className: "".concat(prefixCls, "-line-path"),
            d: pathString,
            strokeLinecap: strokeLinecap,
            stroke: color,
            strokeWidth: strokeWidth,
            fillOpacity: "0",
            ref: function ref(elem) {
                // https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
                // React will call the ref callback with the DOM element when the component mounts,
                // and call it with `null` when it unmounts.
                // Refs are guaranteed to be up-to-date before componentDidMount or componentDidUpdate fires.
                paths[index] = elem;
            },
            style: pathStyle
        });
    }));
};
if ("TURBOPACK compile-time truthy", 1) {
    Line.displayName = 'Line';
}
const __TURBOPACK__default__export__ = Line;
}),
"[project]/Downloads/One click/node_modules/rc-progress/es/hooks/useId.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isBrowserClient",
    ()=>isBrowserClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Dom/canUseDom.js [ssr] (ecmascript)");
;
;
;
var uuid = 0;
var isBrowserClient = ("TURBOPACK compile-time value", "development") !== 'test' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])();
/** Get unique id for accessibility usage */ function getUUID() {
    var retId;
    // Test never reach
    /* istanbul ignore if */ if (isBrowserClient) {
        retId = uuid;
        uuid += 1;
    } else {
        retId = 'TEST_OR_SSR';
    }
    return retId;
}
const __TURBOPACK__default__export__ = function(id) {
    // Inner id for accessibility usage. Only work in client side
    var _React$useState = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), innerId = _React$useState2[0], setInnerId = _React$useState2[1];
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](function() {
        setInnerId("rc_progress_".concat(getUUID()));
    }, []);
    return id || innerId;
};
}),
"[project]/Downloads/One click/node_modules/rc-progress/es/Circle/PtgCircle.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
var Block = function Block(_ref) {
    var bg = _ref.bg, children = _ref.children;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        style: {
            width: '100%',
            height: '100%',
            background: bg
        }
    }, children);
};
function getPtgColors(color, scale) {
    return Object.keys(color).map(function(key) {
        var parsedKey = parseFloat(key);
        var ptgKey = "".concat(Math.floor(parsedKey * scale), "%");
        return "".concat(color[key], " ").concat(ptgKey);
    });
}
var PtgCircle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](function(props, ref) {
    var prefixCls = props.prefixCls, color = props.color, gradientId = props.gradientId, radius = props.radius, circleStyleForStack = props.style, ptg = props.ptg, strokeLinecap = props.strokeLinecap, strokeWidth = props.strokeWidth, size = props.size, gapDegree = props.gapDegree;
    var isGradient = color && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(color) === 'object';
    var stroke = isGradient ? "#FFF" : undefined;
    // ========================== Circle ==========================
    var halfSize = size / 2;
    var circleNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("circle", {
        className: "".concat(prefixCls, "-circle-path"),
        r: radius,
        cx: halfSize,
        cy: halfSize,
        stroke: stroke,
        strokeLinecap: strokeLinecap,
        strokeWidth: strokeWidth,
        opacity: ptg === 0 ? 0 : 1,
        style: circleStyleForStack,
        ref: ref
    });
    // ========================== Render ==========================
    if (!isGradient) {
        return circleNode;
    }
    var maskId = "".concat(gradientId, "-conic");
    var fromDeg = gapDegree ? "".concat(180 + gapDegree / 2, "deg") : '0deg';
    var conicColors = getPtgColors(color, (360 - gapDegree) / 360);
    var linearColors = getPtgColors(color, 1);
    var conicColorBg = "conic-gradient(from ".concat(fromDeg, ", ").concat(conicColors.join(', '), ")");
    var linearColorBg = "linear-gradient(to ".concat(gapDegree ? 'bottom' : 'top', ", ").concat(linearColors.join(', '), ")");
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("mask", {
        id: maskId
    }, circleNode), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("foreignObject", {
        x: 0,
        y: 0,
        width: size,
        height: size,
        mask: "url(#".concat(maskId, ")")
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](Block, {
        bg: linearColorBg
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](Block, {
        bg: conicColorBg
    }))));
});
if ("TURBOPACK compile-time truthy", 1) {
    PtgCircle.displayName = 'PtgCircle';
}
const __TURBOPACK__default__export__ = PtgCircle;
}),
"[project]/Downloads/One click/node_modules/rc-progress/es/Circle/util.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VIEW_BOX_SIZE",
    ()=>VIEW_BOX_SIZE,
    "getCircleStyle",
    ()=>getCircleStyle
]);
var VIEW_BOX_SIZE = 100;
var getCircleStyle = function getCircleStyle(perimeter, perimeterWithoutGap, offset, percent, rotateDeg, gapDegree, gapPosition, strokeColor, strokeLinecap, strokeWidth) {
    var stepSpace = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
    var offsetDeg = offset / 100 * 360 * ((360 - gapDegree) / 360);
    var positionDeg = gapDegree === 0 ? 0 : ({
        bottom: 0,
        top: 180,
        left: 90,
        right: -90
    })[gapPosition];
    var strokeDashoffset = (100 - percent) / 100 * perimeterWithoutGap;
    // Fix percent accuracy when strokeLinecap is round
    // https://github.com/ant-design/ant-design/issues/35009
    if (strokeLinecap === 'round' && percent !== 100) {
        strokeDashoffset += strokeWidth / 2;
        // when percent is small enough (<= 1%), keep smallest value to avoid it's disappearance
        if (strokeDashoffset >= perimeterWithoutGap) {
            strokeDashoffset = perimeterWithoutGap - 0.01;
        }
    }
    var halfSize = VIEW_BOX_SIZE / 2;
    return {
        stroke: typeof strokeColor === 'string' ? strokeColor : undefined,
        strokeDasharray: "".concat(perimeterWithoutGap, "px ").concat(perimeter),
        strokeDashoffset: strokeDashoffset + stepSpace,
        transform: "rotate(".concat(rotateDeg + offsetDeg + positionDeg, "deg)"),
        transformOrigin: "".concat(halfSize, "px ").concat(halfSize, "px"),
        transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s',
        fillOpacity: 0
    };
};
}),
"[project]/Downloads/One click/node_modules/rc-progress/es/Circle/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$common$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-progress/es/common.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$hooks$2f$useId$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-progress/es/hooks/useId.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$Circle$2f$PtgCircle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-progress/es/Circle/PtgCircle.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$Circle$2f$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-progress/es/Circle/util.js [ssr] (ecmascript)");
;
;
;
;
var _excluded = [
    "id",
    "prefixCls",
    "steps",
    "strokeWidth",
    "trailWidth",
    "gapDegree",
    "gapPosition",
    "trailColor",
    "strokeLinecap",
    "style",
    "className",
    "strokeColor",
    "percent"
];
;
;
;
;
;
;
function toArray(value) {
    var mergedValue = value !== null && value !== void 0 ? value : [];
    return Array.isArray(mergedValue) ? mergedValue : [
        mergedValue
    ];
}
var Circle = function Circle(props) {
    var _defaultProps$props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$common$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["defaultProps"]), props), id = _defaultProps$props.id, prefixCls = _defaultProps$props.prefixCls, steps = _defaultProps$props.steps, strokeWidth = _defaultProps$props.strokeWidth, trailWidth = _defaultProps$props.trailWidth, _defaultProps$props$g = _defaultProps$props.gapDegree, gapDegree = _defaultProps$props$g === void 0 ? 0 : _defaultProps$props$g, gapPosition = _defaultProps$props.gapPosition, trailColor = _defaultProps$props.trailColor, strokeLinecap = _defaultProps$props.strokeLinecap, style = _defaultProps$props.style, className = _defaultProps$props.className, strokeColor = _defaultProps$props.strokeColor, percent = _defaultProps$props.percent, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_defaultProps$props, _excluded);
    var halfSize = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$Circle$2f$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["VIEW_BOX_SIZE"] / 2;
    var mergedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$hooks$2f$useId$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(id);
    var gradientId = "".concat(mergedId, "-gradient");
    var radius = halfSize - strokeWidth / 2;
    var perimeter = Math.PI * 2 * radius;
    var rotateDeg = gapDegree > 0 ? 90 + gapDegree / 2 : -90;
    var perimeterWithoutGap = perimeter * ((360 - gapDegree) / 360);
    var _ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(steps) === 'object' ? steps : {
        count: steps,
        gap: 2
    }, stepCount = _ref.count, stepGap = _ref.gap;
    var percentList = toArray(percent);
    var strokeColorList = toArray(strokeColor);
    var gradient = strokeColorList.find(function(color) {
        return color && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(color) === 'object';
    });
    var isConicGradient = gradient && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(gradient) === 'object';
    var mergedStrokeLinecap = isConicGradient ? 'butt' : strokeLinecap;
    var circleStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$Circle$2f$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCircleStyle"])(perimeter, perimeterWithoutGap, 0, 100, rotateDeg, gapDegree, gapPosition, trailColor, mergedStrokeLinecap, strokeWidth);
    var paths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$common$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useTransitionDuration"])();
    var getStokeList = function getStokeList() {
        var stackPtg = 0;
        return percentList.map(function(ptg, index) {
            var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];
            var circleStyleForStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$Circle$2f$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCircleStyle"])(perimeter, perimeterWithoutGap, stackPtg, ptg, rotateDeg, gapDegree, gapPosition, color, mergedStrokeLinecap, strokeWidth);
            stackPtg += ptg;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$Circle$2f$PtgCircle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                key: index,
                color: color,
                ptg: ptg,
                radius: radius,
                prefixCls: prefixCls,
                gradientId: gradientId,
                style: circleStyleForStack,
                strokeLinecap: mergedStrokeLinecap,
                strokeWidth: strokeWidth,
                gapDegree: gapDegree,
                ref: function ref(elem) {
                    // https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
                    // React will call the ref callback with the DOM element when the component mounts,
                    // and call it with `null` when it unmounts.
                    // Refs are guaranteed to be up-to-date before componentDidMount or componentDidUpdate fires.
                    paths[index] = elem;
                },
                size: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$Circle$2f$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["VIEW_BOX_SIZE"]
            });
        }).reverse();
    };
    var getStepStokeList = function getStepStokeList() {
        // only show the first percent when pass steps
        var current = Math.round(stepCount * (percentList[0] / 100));
        var stepPtg = 100 / stepCount;
        var stackPtg = 0;
        return new Array(stepCount).fill(null).map(function(_, index) {
            var color = index <= current - 1 ? strokeColorList[0] : trailColor;
            var stroke = color && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(color) === 'object' ? "url(#".concat(gradientId, ")") : undefined;
            var circleStyleForStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$Circle$2f$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCircleStyle"])(perimeter, perimeterWithoutGap, stackPtg, stepPtg, rotateDeg, gapDegree, gapPosition, color, 'butt', strokeWidth, stepGap);
            stackPtg += (perimeterWithoutGap - circleStyleForStack.strokeDashoffset + stepGap) * 100 / perimeterWithoutGap;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("circle", {
                key: index,
                className: "".concat(prefixCls, "-circle-path"),
                r: radius,
                cx: halfSize,
                cy: halfSize,
                stroke: stroke,
                strokeWidth: strokeWidth,
                opacity: 1,
                style: circleStyleForStack,
                ref: function ref(elem) {
                    paths[index] = elem;
                }
            });
        });
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("svg", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-circle"), className),
        viewBox: "0 0 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$Circle$2f$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["VIEW_BOX_SIZE"], " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$Circle$2f$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["VIEW_BOX_SIZE"]),
        style: style,
        id: id,
        role: "presentation"
    }, restProps), !stepCount && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("circle", {
        className: "".concat(prefixCls, "-circle-trail"),
        r: radius,
        cx: halfSize,
        cy: halfSize,
        stroke: trailColor,
        strokeLinecap: mergedStrokeLinecap,
        strokeWidth: trailWidth || strokeWidth,
        style: circleStyle
    }), stepCount ? getStepStokeList() : getStokeList());
};
if ("TURBOPACK compile-time truthy", 1) {
    Circle.displayName = 'Circle';
}
const __TURBOPACK__default__export__ = Circle;
}),
"[project]/Downloads/One click/node_modules/rc-progress/es/index.js [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$Line$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-progress/es/Line.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$Circle$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-progress/es/Circle/index.js [ssr] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = {
    Line: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$Line$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
    Circle: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$Circle$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
};
}),
"[project]/Downloads/One click/node_modules/rc-progress/es/Circle/index.js [ssr] (ecmascript) <export default as Circle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Circle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$Circle$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$Circle$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-progress/es/Circle/index.js [ssr] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/rc-switch/es/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useMergedState.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/KeyCode.js [ssr] (ecmascript)");
;
;
;
;
var _excluded = [
    "prefixCls",
    "className",
    "checked",
    "defaultChecked",
    "disabled",
    "loadingIcon",
    "checkedChildren",
    "unCheckedChildren",
    "onClick",
    "onChange",
    "onKeyDown"
];
;
;
;
;
var Switch = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](function(_ref, ref) {
    var _classNames;
    var _ref$prefixCls = _ref.prefixCls, prefixCls = _ref$prefixCls === void 0 ? 'rc-switch' : _ref$prefixCls, className = _ref.className, checked = _ref.checked, defaultChecked = _ref.defaultChecked, disabled = _ref.disabled, loadingIcon = _ref.loadingIcon, checkedChildren = _ref.checkedChildren, unCheckedChildren = _ref.unCheckedChildren, onClick = _ref.onClick, onChange = _ref.onChange, onKeyDown = _ref.onKeyDown, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_ref, _excluded);
    var _useMergedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(false, {
        value: checked,
        defaultValue: defaultChecked
    }), _useMergedState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_useMergedState, 2), innerChecked = _useMergedState2[0], setInnerChecked = _useMergedState2[1];
    function triggerChange(newChecked, event) {
        var mergedChecked = innerChecked;
        if (!disabled) {
            mergedChecked = newChecked;
            setInnerChecked(mergedChecked);
            onChange === null || onChange === void 0 ? void 0 : onChange(mergedChecked, event);
        }
        return mergedChecked;
    }
    function onInternalKeyDown(e) {
        if (e.which === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].LEFT) {
            triggerChange(false, e);
        } else if (e.which === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].RIGHT) {
            triggerChange(true, e);
        }
        onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
    }
    function onInternalClick(e) {
        var ret = triggerChange(!innerChecked, e);
        // [Legacy] trigger onClick with value
        onClick === null || onClick === void 0 ? void 0 : onClick(ret, e);
    }
    var switchClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, className, (_classNames = {}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_classNames, "".concat(prefixCls, "-checked"), innerChecked), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("button", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, restProps, {
        type: "button",
        role: "switch",
        "aria-checked": innerChecked,
        disabled: disabled,
        className: switchClassName,
        ref: ref,
        onKeyDown: onInternalKeyDown,
        onClick: onInternalClick
    }), loadingIcon, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", {
        className: "".concat(prefixCls, "-inner")
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", {
        className: "".concat(prefixCls, "-inner-checked")
    }, checkedChildren), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", {
        className: "".concat(prefixCls, "-inner-unchecked")
    }, unCheckedChildren)));
});
Switch.displayName = 'Switch';
const __TURBOPACK__default__export__ = Switch;
}),
];

//# sourceMappingURL=f2ed1_a88408ab._.js.map