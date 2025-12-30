module.exports = [
"[project]/Downloads/One click/node_modules/antd/es/_util/hooks/useMultipleSelect.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMultipleSelect",
    ()=>useMultipleSelect
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
const useMultipleSelect = (getKey)=>{
    const [prevSelectedIndex, setPrevSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const multipleSelect = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((currentSelectedIndex, data, selectedKeys)=>{
        const configPrevSelectedIndex = prevSelectedIndex !== null && prevSelectedIndex !== void 0 ? prevSelectedIndex : currentSelectedIndex;
        // add/delete the selected range
        const startIndex = Math.min(configPrevSelectedIndex || 0, currentSelectedIndex);
        const endIndex = Math.max(configPrevSelectedIndex || 0, currentSelectedIndex);
        const rangeKeys = data.slice(startIndex, endIndex + 1).map(getKey);
        const shouldSelected = rangeKeys.some((rangeKey)=>!selectedKeys.has(rangeKey));
        const changedKeys = [];
        rangeKeys.forEach((item)=>{
            if (shouldSelected) {
                if (!selectedKeys.has(item)) {
                    changedKeys.push(item);
                }
                selectedKeys.add(item);
            } else {
                selectedKeys.delete(item);
                changedKeys.push(item);
            }
        });
        setPrevSelectedIndex(shouldSelected ? endIndex : null);
        return changedKeys;
    }, [
        prevSelectedIndex
    ]);
    return [
        multipleSelect,
        setPrevSelectedIndex
    ];
};
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/hooks/useProxyImperativeHandle.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Proxy the dom ref with `{ nativeElement, otherFn }` type
// ref: https://github.com/ant-design/ant-design/discussions/45242
__turbopack_context__.s([
    "useProxyImperativeHandle",
    ()=>useProxyImperativeHandle
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
function fillProxy(element, handler) {
    element._antProxy = element._antProxy || {};
    Object.keys(handler).forEach((key)=>{
        if (!(key in element._antProxy)) {
            const ori = element[key];
            element._antProxy[key] = ori;
            element[key] = handler[key];
        }
    });
    return element;
}
const useProxyImperativeHandle = (ref, init)=>{
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useImperativeHandle"])(ref, ()=>{
        const refObj = init();
        const { nativeElement } = refObj;
        if (typeof Proxy !== 'undefined') {
            return new Proxy(nativeElement, {
                get (obj, prop) {
                    if (refObj[prop]) {
                        return refObj[prop];
                    }
                    return Reflect.get(obj, prop);
                }
            });
        }
        // Fallback of IE
        return fillProxy(nativeElement, refObj);
    });
};
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/easings.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easeInOutCubic",
    ()=>easeInOutCubic
]);
function easeInOutCubic(t, b, c, d) {
    const cc = c - b;
    t /= d / 2;
    if (t < 1) {
        return cc / 2 * t * t * t + b;
    }
    // biome-ignore lint: it is a common easing function
    return cc / 2 * ((t -= 2) * t * t + 2) + b;
}
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/getScroll.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isWindow",
    ()=>isWindow
]);
function isWindow(obj) {
    return obj !== null && obj !== undefined && obj === obj.window;
}
const getScroll = (target)=>{
    var _a, _b;
    if ("TURBOPACK compile-time truthy", 1) {
        /* istanbul ignore next */ return 0;
    }
    //TURBOPACK unreachable
    ;
    let result;
};
const __TURBOPACK__default__export__ = getScroll;
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/scrollTo.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>scrollTo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/raf.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$easings$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/easings.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$getScroll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/getScroll.js [ssr] (ecmascript)");
;
;
;
function scrollTo(y, options = {}) {
    const { getContainer = ()=>window, callback, duration = 450 } = options;
    const container = getContainer();
    const scrollTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$getScroll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(container);
    const startTime = Date.now();
    const frameFunc = ()=>{
        const timestamp = Date.now();
        const time = timestamp - startTime;
        const nextScrollTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$easings$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["easeInOutCubic"])(time > duration ? duration : time, scrollTop, y, duration);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$getScroll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["isWindow"])(container)) {
            container.scrollTo(window.pageXOffset, nextScrollTop);
        } else if (container instanceof Document || container.constructor.name === 'HTMLDocument') {
            container.documentElement.scrollTop = nextScrollTop;
        } else {
            container.scrollTop = nextScrollTop;
        }
        if (time < duration) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(frameFunc);
        } else if (typeof callback === 'function') {
            callback();
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(frameFunc);
}
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/hooks/useForceUpdate.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useForceUpdate",
    ()=>useForceUpdate
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
const useForceUpdate = ()=>{
    return __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useReducer((ori)=>ori + 1, 0);
};
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/responsiveObserver.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "matchScreen",
    ()=>matchScreen,
    "responsiveArray",
    ()=>responsiveArray
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/useToken.js [ssr] (ecmascript) <export default as useToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$mediaQueryUtil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/mediaQueryUtil.js [ssr] (ecmascript)");
;
;
;
const responsiveArray = [
    'xxl',
    'xl',
    'lg',
    'md',
    'sm',
    'xs'
];
const getResponsiveMap = (token)=>({
        xs: `(max-width: ${token.screenXSMax}px)`,
        sm: `(min-width: ${token.screenSM}px)`,
        md: `(min-width: ${token.screenMD}px)`,
        lg: `(min-width: ${token.screenLG}px)`,
        xl: `(min-width: ${token.screenXL}px)`,
        xxl: `(min-width: ${token.screenXXL}px)`
    });
/**
 * Ensures that the breakpoints token are valid, in good order
 * For each breakpoint : screenMin <= screen <= screenMax and screenMax <= nextScreenMin
 */ const validateBreakpoints = (token)=>{
    const indexableToken = token;
    const revBreakpoints = [].concat(responsiveArray).reverse();
    revBreakpoints.forEach((breakpoint, i)=>{
        const breakpointUpper = breakpoint.toUpperCase();
        const screenMin = `screen${breakpointUpper}Min`;
        const screen = `screen${breakpointUpper}`;
        if (!(indexableToken[screenMin] <= indexableToken[screen])) {
            throw new Error(`${screenMin}<=${screen} fails : !(${indexableToken[screenMin]}<=${indexableToken[screen]})`);
        }
        if (i < revBreakpoints.length - 1) {
            const screenMax = `screen${breakpointUpper}Max`;
            if (!(indexableToken[screen] <= indexableToken[screenMax])) {
                throw new Error(`${screen}<=${screenMax} fails : !(${indexableToken[screen]}<=${indexableToken[screenMax]})`);
            }
            const nextBreakpointUpperMin = revBreakpoints[i + 1].toUpperCase();
            const nextScreenMin = `screen${nextBreakpointUpperMin}Min`;
            if (!(indexableToken[screenMax] <= indexableToken[nextScreenMin])) {
                throw new Error(`${screenMax}<=${nextScreenMin} fails : !(${indexableToken[screenMax]}<=${indexableToken[nextScreenMin]})`);
            }
        }
    });
    return token;
};
const matchScreen = (screens, screenSizes)=>{
    if (!screenSizes) {
        return;
    }
    for (const breakpoint of responsiveArray){
        if (screens[breakpoint] && (screenSizes === null || screenSizes === void 0 ? void 0 : screenSizes[breakpoint]) !== undefined) {
            return screenSizes[breakpoint];
        }
    }
};
const useResponsiveObserver = ()=>{
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const responsiveMap = getResponsiveMap(validateBreakpoints(token));
    // To avoid repeat create instance, we add `useMemo` here.
    return __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useMemo(()=>{
        const subscribers = new Map();
        let subUid = -1;
        let screens = {};
        return {
            responsiveMap,
            matchHandlers: {},
            dispatch (pointMap) {
                screens = pointMap;
                subscribers.forEach((func)=>func(screens));
                return subscribers.size >= 1;
            },
            subscribe (func) {
                if (!subscribers.size) {
                    this.register();
                }
                subUid += 1;
                subscribers.set(subUid, func);
                func(screens);
                return subUid;
            },
            unsubscribe (paramToken) {
                subscribers.delete(paramToken);
                if (!subscribers.size) {
                    this.unregister();
                }
            },
            register () {
                Object.entries(responsiveMap).forEach(([screen, mediaQuery])=>{
                    const listener = ({ matches })=>{
                        this.dispatch(Object.assign(Object.assign({}, screens), {
                            [screen]: matches
                        }));
                    };
                    const mql = window.matchMedia(mediaQuery);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$mediaQueryUtil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["addMediaQueryListener"])(mql, listener);
                    this.matchHandlers[mediaQuery] = {
                        mql,
                        listener
                    };
                    listener(mql);
                });
            },
            unregister () {
                Object.values(responsiveMap).forEach((mediaQuery)=>{
                    const handler = this.matchHandlers[mediaQuery];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$mediaQueryUtil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["removeMediaQueryListener"])(handler === null || handler === void 0 ? void 0 : handler.mql, handler === null || handler === void 0 ? void 0 : handler.listener);
                });
                subscribers.clear();
            }
        };
    }, [
        responsiveMap
    ]);
};
const __TURBOPACK__default__export__ = useResponsiveObserver;
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/statusUtils.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMergedStatus",
    ()=>getMergedStatus,
    "getStatusClassNames",
    ()=>getStatusClassNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
;
const _InputStatuses = [
    'warning',
    'error',
    ''
];
function getStatusClassNames(prefixCls, status, hasFeedback) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        [`${prefixCls}-status-success`]: status === 'success',
        [`${prefixCls}-status-warning`]: status === 'warning',
        [`${prefixCls}-status-error`]: status === 'error',
        [`${prefixCls}-status-validating`]: status === 'validating',
        [`${prefixCls}-has-feedback`]: hasFeedback
    });
}
const getMergedStatus = (contextStatus, customStatus)=>customStatus || contextStatus;
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/hooks/useSyncState.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSyncState",
    ()=>useSyncState
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useForceUpdate$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/hooks/useForceUpdate.js [ssr] (ecmascript)");
;
;
const useSyncState = (initialValue)=>{
    const ref = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"](initialValue);
    const [, forceUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useForceUpdate$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useForceUpdate"])();
    return [
        ()=>ref.current,
        (newValue)=>{
            ref.current = newValue;
            // re-render
            forceUpdate();
        }
    ];
};
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/getAllowClear.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js [ssr] (ecmascript)");
"use client";
;
;
const getAllowClear = (allowClear)=>{
    let mergedAllowClear;
    if (typeof allowClear === 'object' && (allowClear === null || allowClear === void 0 ? void 0 : allowClear.clearIcon)) {
        mergedAllowClear = allowClear;
    } else if (allowClear) {
        mergedAllowClear = {
            clearIcon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null)
        };
    }
    return mergedAllowClear;
};
const __TURBOPACK__default__export__ = getAllowClear;
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/capitalize.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>capitalize
]);
function capitalize(str) {
    if (typeof str !== 'string') {
        return str;
    }
    const ret = str.charAt(0).toUpperCase() + str.slice(1);
    return ret;
}
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/ActionButton.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useState.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/button/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/button/buttonHelpers.js [ssr] (ecmascript)");
"use client";
;
;
;
;
const isThenable = (thing)=>{
    return typeof (thing === null || thing === void 0 ? void 0 : thing.then) === 'function';
};
const ActionButton = (props)=>{
    const { type, children, prefixCls, buttonProps, close, autoFocus, emitEvent, isSilent, quitOnNullishReturnValue, actionFn } = props;
    const clickedRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"](false);
    const buttonRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"](null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(false);
    const onInternalClose = (...args)=>{
        close === null || close === void 0 ? void 0 : close.apply(void 0, args);
    };
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](()=>{
        let timeoutId = null;
        if (autoFocus) {
            timeoutId = setTimeout(()=>{
                var _a;
                (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.focus({
                    preventScroll: true
                });
            });
        }
        return ()=>{
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [
        autoFocus
    ]);
    const handlePromiseOnOk = (returnValueOfOnOk)=>{
        if (!isThenable(returnValueOfOnOk)) {
            return;
        }
        setLoading(true);
        returnValueOfOnOk.then((...args)=>{
            setLoading(false, true);
            onInternalClose.apply(void 0, args);
            clickedRef.current = false;
        }, (e)=>{
            // See: https://github.com/ant-design/ant-design/issues/6183
            setLoading(false, true);
            clickedRef.current = false;
            // Do not throw if is `await` mode
            if (isSilent === null || isSilent === void 0 ? void 0 : isSilent()) {
                return;
            }
            return Promise.reject(e);
        });
    };
    const onClick = (e)=>{
        if (clickedRef.current) {
            return;
        }
        clickedRef.current = true;
        if (!actionFn) {
            onInternalClose();
            return;
        }
        let returnValueOfOnOk;
        if (emitEvent) {
            returnValueOfOnOk = actionFn(e);
            if (quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
                clickedRef.current = false;
                onInternalClose(e);
                return;
            }
        } else if (actionFn.length) {
            returnValueOfOnOk = actionFn(close);
            // https://github.com/ant-design/ant-design/issues/23358
            clickedRef.current = false;
        } else {
            returnValueOfOnOk = actionFn();
            if (!isThenable(returnValueOfOnOk)) {
                onInternalClose();
                return;
            }
        }
        handlePromiseOnOk(returnValueOfOnOk);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["convertLegacyProps"])(type), {
        onClick: onClick,
        loading: loading,
        prefixCls: prefixCls
    }, buttonProps, {
        ref: buttonRef
    }), children);
};
const __TURBOPACK__default__export__ = ActionButton;
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/styleChecker.js [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canUseDocElement",
    ()=>canUseDocElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Dom/canUseDom.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$styleChecker$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Dom/styleChecker.js [ssr] (ecmascript)");
;
;
const canUseDocElement = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])() && window.document.documentElement;
;
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/hooks/usePatchElement.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePatchElement",
    ()=>usePatchElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
const usePatchElement = ()=>{
    const [elements, setElements] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"]([]);
    const patchElement = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"]((element)=>{
        // append a new element to elements (and create a new ref)
        setElements((originElements)=>[].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(originElements), [
                element
            ]));
        // return a function that removes the new element out of elements (and create a new ref)
        // it works a little like useEffect
        return ()=>{
            setElements((originElements)=>originElements.filter((ele)=>ele !== element));
        };
    }, []);
    return [
        elements,
        patchElement
    ];
};
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/convertToTooltipProps.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
function convertToTooltipProps(tooltip) {
    // isNil
    if (tooltip === undefined || tooltip === null) {
        return null;
    }
    if (typeof tooltip === 'object' && !/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["isValidElement"])(tooltip)) {
        return tooltip;
    }
    return {
        title: tooltip
    };
}
const __TURBOPACK__default__export__ = convertToTooltipProps;
}),
"[project]/Downloads/One click/node_modules/antd/es/checkbox/GroupContext.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
const GroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createContext(null);
const __TURBOPACK__default__export__ = GroupContext;
}),
"[project]/Downloads/One click/node_modules/antd/es/checkbox/style/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "genCheckboxStyle",
    ()=>genCheckboxStyle,
    "getStyle",
    ()=>getStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [ssr] (ecmascript) <export merge as mergeToken>");
;
;
;
const genCheckboxStyle = (token)=>{
    const { checkboxCls } = token;
    const wrapperCls = `${checkboxCls}-wrapper`;
    return [
        // ===================== Basic =====================
        {
            // Group
            [`${checkboxCls}-group`]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token)), {
                display: 'inline-flex',
                flexWrap: 'wrap',
                columnGap: token.marginXS,
                // Group > Grid
                [`> ${token.antCls}-row`]: {
                    flex: 1
                }
            }),
            // Wrapper
            [wrapperCls]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token)), {
                display: 'inline-flex',
                alignItems: 'baseline',
                cursor: 'pointer',
                // Fix checkbox & radio in flex align #30260
                '&:after': {
                    display: 'inline-block',
                    width: 0,
                    overflow: 'hidden',
                    content: "'\\a0'"
                },
                // Checkbox near checkbox
                [`& + ${wrapperCls}`]: {
                    marginInlineStart: 0
                },
                [`&${wrapperCls}-in-form-item`]: {
                    'input[type="checkbox"]': {
                        width: 14,
                        // FIXME: magic
                        height: 14 // FIXME: magic
                    }
                }
            }),
            // Wrapper > Checkbox
            [checkboxCls]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token)), {
                position: 'relative',
                whiteSpace: 'nowrap',
                lineHeight: 1,
                cursor: 'pointer',
                borderRadius: token.borderRadiusSM,
                // To make alignment right when `controlHeight` is changed
                // Ref: https://github.com/ant-design/ant-design/issues/41564
                alignSelf: 'center',
                // Wrapper > Checkbox > input
                [`${checkboxCls}-input`]: {
                    position: 'absolute',
                    // Since baseline align will get additional space offset,
                    // we need to move input to top to make it align with text.
                    // Ref: https://github.com/ant-design/ant-design/issues/38926#issuecomment-1486137799
                    inset: 0,
                    zIndex: 1,
                    cursor: 'pointer',
                    opacity: 0,
                    margin: 0,
                    [`&:focus-visible + ${checkboxCls}-inner`]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genFocusOutline"])(token)
                },
                // Wrapper > Checkbox > inner
                [`${checkboxCls}-inner`]: {
                    boxSizing: 'border-box',
                    display: 'block',
                    width: token.checkboxSize,
                    height: token.checkboxSize,
                    direction: 'ltr',
                    backgroundColor: token.colorBgContainer,
                    border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
                    borderRadius: token.borderRadiusSM,
                    borderCollapse: 'separate',
                    transition: `all ${token.motionDurationSlow}`,
                    '&:after': {
                        boxSizing: 'border-box',
                        position: 'absolute',
                        top: '50%',
                        insetInlineStart: '25%',
                        display: 'table',
                        width: token.calc(token.checkboxSize).div(14).mul(5).equal(),
                        height: token.calc(token.checkboxSize).div(14).mul(8).equal(),
                        border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidthBold)} solid ${token.colorWhite}`,
                        borderTop: 0,
                        borderInlineStart: 0,
                        transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
                        opacity: 0,
                        content: '""',
                        transition: `all ${token.motionDurationFast} ${token.motionEaseInBack}, opacity ${token.motionDurationFast}`
                    }
                },
                // Wrapper > Checkbox + Text
                '& + span': {
                    paddingInlineStart: token.paddingXS,
                    paddingInlineEnd: token.paddingXS
                }
            })
        },
        // ===================== Hover =====================
        {
            // Wrapper & Wrapper > Checkbox
            [`
        ${wrapperCls}:not(${wrapperCls}-disabled),
        ${checkboxCls}:not(${checkboxCls}-disabled)
      `]: {
                [`&:hover ${checkboxCls}-inner`]: {
                    borderColor: token.colorPrimary
                }
            },
            [`${wrapperCls}:not(${wrapperCls}-disabled)`]: {
                [`&:hover ${checkboxCls}-checked:not(${checkboxCls}-disabled) ${checkboxCls}-inner`]: {
                    backgroundColor: token.colorPrimaryHover,
                    borderColor: 'transparent'
                },
                [`&:hover ${checkboxCls}-checked:not(${checkboxCls}-disabled):after`]: {
                    borderColor: token.colorPrimaryHover
                }
            }
        },
        // ==================== Checked ====================
        {
            // Wrapper > Checkbox
            [`${checkboxCls}-checked`]: {
                [`${checkboxCls}-inner`]: {
                    backgroundColor: token.colorPrimary,
                    borderColor: token.colorPrimary,
                    '&:after': {
                        opacity: 1,
                        transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
                        transition: `all ${token.motionDurationMid} ${token.motionEaseOutBack} ${token.motionDurationFast}`
                    }
                }
            },
            [`
        ${wrapperCls}-checked:not(${wrapperCls}-disabled),
        ${checkboxCls}-checked:not(${checkboxCls}-disabled)
      `]: {
                [`&:hover ${checkboxCls}-inner`]: {
                    backgroundColor: token.colorPrimaryHover,
                    borderColor: 'transparent'
                }
            }
        },
        // ================= Indeterminate =================
        {
            [checkboxCls]: {
                '&-indeterminate': {
                    '&': {
                        // Wrapper > Checkbox > inner
                        [`${checkboxCls}-inner`]: {
                            backgroundColor: `${token.colorBgContainer}`,
                            borderColor: `${token.colorBorder}`,
                            '&:after': {
                                top: '50%',
                                insetInlineStart: '50%',
                                width: token.calc(token.fontSizeLG).div(2).equal(),
                                height: token.calc(token.fontSizeLG).div(2).equal(),
                                backgroundColor: token.colorPrimary,
                                border: 0,
                                transform: 'translate(-50%, -50%) scale(1)',
                                opacity: 1,
                                content: '""'
                            }
                        },
                        // https://github.com/ant-design/ant-design/issues/50074
                        [`&:hover ${checkboxCls}-inner`]: {
                            backgroundColor: `${token.colorBgContainer}`,
                            borderColor: `${token.colorPrimary}`
                        }
                    }
                }
            }
        },
        // ==================== Disable ====================
        {
            // Wrapper
            [`${wrapperCls}-disabled`]: {
                cursor: 'not-allowed'
            },
            // Wrapper > Checkbox
            [`${checkboxCls}-disabled`]: {
                // Wrapper > Checkbox > input
                [`&, ${checkboxCls}-input`]: {
                    cursor: 'not-allowed',
                    // Disabled for native input to enable Tooltip event handler
                    // ref: https://github.com/ant-design/ant-design/issues/39822#issuecomment-1365075901
                    pointerEvents: 'none'
                },
                // Wrapper > Checkbox > inner
                [`${checkboxCls}-inner`]: {
                    background: token.colorBgContainerDisabled,
                    borderColor: token.colorBorder,
                    '&:after': {
                        borderColor: token.colorTextDisabled
                    }
                },
                '&:after': {
                    display: 'none'
                },
                '& + span': {
                    color: token.colorTextDisabled
                },
                [`&${checkboxCls}-indeterminate ${checkboxCls}-inner::after`]: {
                    background: token.colorTextDisabled
                }
            }
        }
    ];
};
function getStyle(prefixCls, token) {
    const checkboxToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        checkboxCls: `.${prefixCls}`,
        checkboxSize: token.controlInteractiveSize
    });
    return genCheckboxStyle(checkboxToken);
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])('Checkbox', (token, { prefixCls })=>[
        getStyle(prefixCls, token)
    ]);
}),
"[project]/Downloads/One click/node_modules/antd/es/checkbox/useBubbleLock.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useBubbleLock
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/raf.js [ssr] (ecmascript)");
;
;
function useBubbleLock(onOriginInputClick) {
    const labelClickLockRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useRef(null);
    const clearLock = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].cancel(labelClickLockRef.current);
        labelClickLockRef.current = null;
    };
    const onLabelClick = ()=>{
        clearLock();
        labelClickLockRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
            labelClickLockRef.current = null;
        });
    };
    const onInputClick = (e)=>{
        if (labelClickLockRef.current) {
            e.stopPropagation();
            clearLock();
        }
        onOriginInputClick === null || onOriginInputClick === void 0 ? void 0 : onOriginInputClick(e);
    };
    return [
        onLabelClick,
        onInputClick
    ];
}
}),
"[project]/Downloads/One click/node_modules/antd/es/checkbox/Checkbox.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$checkbox$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-checkbox/es/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/ref.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/wave/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$interface$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/wave/interface.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/DisabledContext.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/form/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$GroupContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/checkbox/GroupContext.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/checkbox/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$useBubbleLock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/checkbox/useBubbleLock.js [ssr] (ecmascript)");
"use client";
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
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
const InternalCheckbox = (props, ref)=>{
    var _a;
    const { prefixCls: customizePrefixCls, className, rootClassName, children, indeterminate = false, style, onMouseEnter, onMouseLeave, skipGroup = false, disabled } = props, restProps = __rest(props, [
        "prefixCls",
        "className",
        "rootClassName",
        "children",
        "indeterminate",
        "style",
        "onMouseEnter",
        "onMouseLeave",
        "skipGroup",
        "disabled"
    ]);
    const { getPrefixCls, direction, checkbox } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const checkboxGroup = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$GroupContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]);
    const { isFormItemInput } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FormItemInputContext"]);
    const contextDisabled = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = (_a = (checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.disabled) || disabled) !== null && _a !== void 0 ? _a : contextDisabled;
    const prevValue = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"](restProps.value);
    const checkboxRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"](null);
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["composeRef"])(ref, checkboxRef);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])('Checkbox');
        ("TURBOPACK compile-time truthy", 1) ? warning('checked' in restProps || !!checkboxGroup || !('value' in restProps), 'usage', '`value` is not a valid prop, do you mean `checked`?') : "TURBOPACK unreachable";
    }
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](()=>{
        checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.registerValue(restProps.value);
    }, []);
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](()=>{
        if (skipGroup) {
            return;
        }
        if (restProps.value !== prevValue.current) {
            checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.cancelValue(prevValue.current);
            checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.registerValue(restProps.value);
            prevValue.current = restProps.value;
        }
        return ()=>checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.cancelValue(restProps.value);
    }, [
        restProps.value
    ]);
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](()=>{
        var _a;
        if ((_a = checkboxRef.current) === null || _a === void 0 ? void 0 : _a.input) {
            checkboxRef.current.input.indeterminate = indeterminate;
        }
    }, [
        indeterminate
    ]);
    const prefixCls = getPrefixCls('checkbox', customizePrefixCls);
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const checkboxProps = Object.assign({}, restProps);
    if (checkboxGroup && !skipGroup) {
        checkboxProps.onChange = (...args)=>{
            if (restProps.onChange) {
                restProps.onChange.apply(restProps, args);
            }
            if (checkboxGroup.toggleOption) {
                checkboxGroup.toggleOption({
                    label: children,
                    value: restProps.value
                });
            }
        };
        checkboxProps.name = checkboxGroup.name;
        checkboxProps.checked = checkboxGroup.value.includes(restProps.value);
    }
    const classString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-wrapper`, {
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-wrapper-checked`]: checkboxProps.checked,
        [`${prefixCls}-wrapper-disabled`]: mergedDisabled,
        [`${prefixCls}-wrapper-in-form-item`]: isFormItemInput
    }, checkbox === null || checkbox === void 0 ? void 0 : checkbox.className, className, rootClassName, cssVarCls, rootCls, hashId);
    const checkboxClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        [`${prefixCls}-indeterminate`]: indeterminate
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$interface$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["TARGET_CLS"], hashId);
    // ============================ Event Lock ============================
    const [onLabelClick, onInputClick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$useBubbleLock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(checkboxProps.onClick);
    // ============================== Render ==============================
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        component: "Checkbox",
        disabled: mergedDisabled
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("label", {
        className: classString,
        style: Object.assign(Object.assign({}, checkbox === null || checkbox === void 0 ? void 0 : checkbox.style), style),
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onClick: onLabelClick
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$checkbox$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], Object.assign({}, checkboxProps, {
        onClick: onInputClick,
        prefixCls: prefixCls,
        className: checkboxClass,
        disabled: mergedDisabled,
        ref: mergedRef
    })), children !== undefined && children !== null && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", {
        className: `${prefixCls}-label`
    }, children))));
};
const Checkbox = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](InternalCheckbox);
if ("TURBOPACK compile-time truthy", 1) {
    Checkbox.displayName = 'Checkbox';
}
const __TURBOPACK__default__export__ = Checkbox;
}),
"[project]/Downloads/One click/node_modules/antd/es/checkbox/Group.js [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/omit.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$Checkbox$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/checkbox/Checkbox.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$GroupContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/checkbox/GroupContext.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/checkbox/style/index.js [ssr] (ecmascript)");
"use client";
;
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
;
;
;
;
const CheckboxGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"]((props, ref)=>{
    const { defaultValue, children, options = [], prefixCls: customizePrefixCls, className, rootClassName, style, onChange } = props, restProps = __rest(props, [
        "defaultValue",
        "children",
        "options",
        "prefixCls",
        "className",
        "rootClassName",
        "style",
        "onChange"
    ]);
    const { getPrefixCls, direction } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const [value, setValue] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](restProps.value || defaultValue || []);
    const [registeredValues, setRegisteredValues] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"]([]);
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](()=>{
        if ('value' in restProps) {
            setValue(restProps.value || []);
        }
    }, [
        restProps.value
    ]);
    const memoizedOptions = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](()=>options.map((option)=>{
            if (typeof option === 'string' || typeof option === 'number') {
                return {
                    label: option,
                    value: option
                };
            }
            return option;
        }), [
        options
    ]);
    const cancelValue = (val)=>{
        setRegisteredValues((prevValues)=>prevValues.filter((v)=>v !== val));
    };
    const registerValue = (val)=>{
        setRegisteredValues((prevValues)=>[].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prevValues), [
                val
            ]));
    };
    const toggleOption = (option)=>{
        const optionIndex = value.indexOf(option.value);
        const newValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(value);
        if (optionIndex === -1) {
            newValue.push(option.value);
        } else {
            newValue.splice(optionIndex, 1);
        }
        if (!('value' in restProps)) {
            setValue(newValue);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue.filter((val)=>registeredValues.includes(val)).sort((a, b)=>{
            const indexA = memoizedOptions.findIndex((opt)=>opt.value === a);
            const indexB = memoizedOptions.findIndex((opt)=>opt.value === b);
            return indexA - indexB;
        }));
    };
    const prefixCls = getPrefixCls('checkbox', customizePrefixCls);
    const groupPrefixCls = `${prefixCls}-group`;
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const domProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(restProps, [
        'value',
        'disabled'
    ]);
    const childrenNode = options.length ? memoizedOptions.map((option)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$Checkbox$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            prefixCls: prefixCls,
            key: option.value.toString(),
            disabled: 'disabled' in option ? option.disabled : restProps.disabled,
            value: option.value,
            checked: value.includes(option.value),
            onChange: option.onChange,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${groupPrefixCls}-item`, option.className),
            style: option.style,
            title: option.title,
            id: option.id,
            required: option.required
        }, option.label)) : children;
    const memoizedContext = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](()=>({
            toggleOption,
            value,
            disabled: restProps.disabled,
            name: restProps.name,
            // https://github.com/ant-design/ant-design/issues/16376
            registerValue,
            cancelValue
        }), [
        toggleOption,
        value,
        restProps.disabled,
        restProps.name,
        registerValue,
        cancelValue
    ]);
    const classString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(groupPrefixCls, {
        [`${groupPrefixCls}-rtl`]: direction === 'rtl'
    }, className, rootClassName, cssVarCls, rootCls, hashId);
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", Object.assign({
        className: classString,
        style: style
    }, domProps, {
        ref: ref
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$GroupContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: memoizedContext
    }, childrenNode)));
});
;
const __TURBOPACK__default__export__ = CheckboxGroup;
}),
"[project]/Downloads/One click/node_modules/antd/es/checkbox/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$Checkbox$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/checkbox/Checkbox.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$Group$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/checkbox/Group.js [ssr] (ecmascript) <locals>");
"use client";
;
;
const Checkbox = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$Checkbox$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"];
Checkbox.Group = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$Group$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"];
Checkbox.__ANT_CHECKBOX = true;
if ("TURBOPACK compile-time truthy", 1) {
    Checkbox.displayName = 'Checkbox';
}
const __TURBOPACK__default__export__ = Checkbox;
}),
"[project]/Downloads/One click/node_modules/antd/es/radio/context.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RadioGroupContextProvider",
    ()=>RadioGroupContextProvider,
    "RadioOptionTypeContext",
    ()=>RadioOptionTypeContext,
    "RadioOptionTypeContextProvider",
    ()=>RadioOptionTypeContextProvider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
const RadioGroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"](null);
const RadioGroupContextProvider = RadioGroupContext.Provider;
const __TURBOPACK__default__export__ = RadioGroupContext;
const RadioOptionTypeContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"](null);
const RadioOptionTypeContextProvider = RadioOptionTypeContext.Provider;
}),
"[project]/Downloads/One click/node_modules/antd/es/radio/style/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [ssr] (ecmascript) <export merge as mergeToken>");
;
;
;
// ============================== Styles ==============================
// styles from RadioGroup only
const getGroupRadioStyle = (token)=>{
    const { componentCls, antCls } = token;
    const groupPrefixCls = `${componentCls}-group`;
    return {
        [groupPrefixCls]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token)), {
            display: 'inline-block',
            fontSize: 0,
            // RTL
            [`&${groupPrefixCls}-rtl`]: {
                direction: 'rtl'
            },
            [`&${groupPrefixCls}-block`]: {
                display: 'flex'
            },
            [`${antCls}-badge ${antCls}-badge-count`]: {
                zIndex: 1
            },
            [`> ${antCls}-badge:not(:first-child) > ${antCls}-button-wrapper`]: {
                borderInlineStart: 'none'
            }
        })
    };
};
// Styles from radio-wrapper
const getRadioBasicStyle = (token)=>{
    const { componentCls, wrapperMarginInlineEnd, colorPrimary, radioSize, motionDurationSlow, motionDurationMid, motionEaseInOutCirc, colorBgContainer, colorBorder, lineWidth, colorBgContainerDisabled, colorTextDisabled, paddingXS, dotColorDisabled, lineType, radioColor, radioBgColor, calc } = token;
    const radioInnerPrefixCls = `${componentCls}-inner`;
    const dotPadding = 4;
    const radioDotDisabledSize = calc(radioSize).sub(calc(dotPadding).mul(2));
    const radioSizeCalc = calc(1).mul(radioSize).equal({
        unit: true
    });
    return {
        [`${componentCls}-wrapper`]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token)), {
            display: 'inline-flex',
            alignItems: 'baseline',
            marginInlineStart: 0,
            marginInlineEnd: wrapperMarginInlineEnd,
            cursor: 'pointer',
            '&:last-child': {
                marginInlineEnd: 0
            },
            // RTL
            [`&${componentCls}-wrapper-rtl`]: {
                direction: 'rtl'
            },
            '&-disabled': {
                cursor: 'not-allowed',
                color: token.colorTextDisabled
            },
            '&::after': {
                display: 'inline-block',
                width: 0,
                overflow: 'hidden',
                content: '"\\a0"'
            },
            '&-block': {
                flex: 1,
                justifyContent: 'center'
            },
            // hashId 在 wrapper 上，只能铺平
            [`${componentCls}-checked::after`]: {
                position: 'absolute',
                insetBlockStart: 0,
                insetInlineStart: 0,
                width: '100%',
                height: '100%',
                border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} ${lineType} ${colorPrimary}`,
                borderRadius: '50%',
                visibility: 'hidden',
                opacity: 0,
                content: '""'
            },
            [componentCls]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token)), {
                position: 'relative',
                display: 'inline-block',
                outline: 'none',
                cursor: 'pointer',
                alignSelf: 'center',
                borderRadius: '50%'
            }),
            [`${componentCls}-wrapper:hover &,
        &:hover ${radioInnerPrefixCls}`]: {
                borderColor: colorPrimary
            },
            [`${componentCls}-input:focus-visible + ${radioInnerPrefixCls}`]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genFocusOutline"])(token),
            [`${componentCls}:hover::after, ${componentCls}-wrapper:hover &::after`]: {
                visibility: 'visible'
            },
            [`${componentCls}-inner`]: {
                '&::after': {
                    boxSizing: 'border-box',
                    position: 'absolute',
                    insetBlockStart: '50%',
                    insetInlineStart: '50%',
                    display: 'block',
                    width: radioSizeCalc,
                    height: radioSizeCalc,
                    marginBlockStart: calc(1).mul(radioSize).div(-2).equal({
                        unit: true
                    }),
                    marginInlineStart: calc(1).mul(radioSize).div(-2).equal({
                        unit: true
                    }),
                    backgroundColor: radioColor,
                    borderBlockStart: 0,
                    borderInlineStart: 0,
                    borderRadius: radioSizeCalc,
                    transform: 'scale(0)',
                    opacity: 0,
                    transition: `all ${motionDurationSlow} ${motionEaseInOutCirc}`,
                    content: '""'
                },
                boxSizing: 'border-box',
                position: 'relative',
                insetBlockStart: 0,
                insetInlineStart: 0,
                display: 'block',
                width: radioSizeCalc,
                height: radioSizeCalc,
                backgroundColor: colorBgContainer,
                borderColor: colorBorder,
                borderStyle: 'solid',
                borderWidth: lineWidth,
                borderRadius: '50%',
                transition: `all ${motionDurationMid}`
            },
            [`${componentCls}-input`]: {
                position: 'absolute',
                inset: 0,
                zIndex: 1,
                cursor: 'pointer',
                opacity: 0
            },
            // 选中状态
            [`${componentCls}-checked`]: {
                [radioInnerPrefixCls]: {
                    borderColor: colorPrimary,
                    backgroundColor: radioBgColor,
                    '&::after': {
                        transform: `scale(${token.calc(token.dotSize).div(radioSize).equal()})`,
                        opacity: 1,
                        transition: `all ${motionDurationSlow} ${motionEaseInOutCirc}`
                    }
                }
            },
            [`${componentCls}-disabled`]: {
                cursor: 'not-allowed',
                [radioInnerPrefixCls]: {
                    backgroundColor: colorBgContainerDisabled,
                    borderColor: colorBorder,
                    cursor: 'not-allowed',
                    '&::after': {
                        backgroundColor: dotColorDisabled
                    }
                },
                [`${componentCls}-input`]: {
                    cursor: 'not-allowed'
                },
                [`${componentCls}-disabled + span`]: {
                    color: colorTextDisabled,
                    cursor: 'not-allowed'
                },
                [`&${componentCls}-checked`]: {
                    [radioInnerPrefixCls]: {
                        '&::after': {
                            transform: `scale(${calc(radioDotDisabledSize).div(radioSize).equal()})`
                        }
                    }
                }
            },
            [`span${componentCls} + *`]: {
                paddingInlineStart: paddingXS,
                paddingInlineEnd: paddingXS
            }
        })
    };
};
// Styles from radio-button
const getRadioButtonStyle = (token)=>{
    const { buttonColor, controlHeight, componentCls, lineWidth, lineType, colorBorder, motionDurationMid, buttonPaddingInline, fontSize, buttonBg, fontSizeLG, controlHeightLG, controlHeightSM, paddingXS, borderRadius, borderRadiusSM, borderRadiusLG, buttonCheckedBg, buttonSolidCheckedColor, colorTextDisabled, colorBgContainerDisabled, buttonCheckedBgDisabled, buttonCheckedColorDisabled, colorPrimary, colorPrimaryHover, colorPrimaryActive, buttonSolidCheckedBg, buttonSolidCheckedHoverBg, buttonSolidCheckedActiveBg, calc } = token;
    return {
        [`${componentCls}-button-wrapper`]: {
            position: 'relative',
            display: 'inline-block',
            height: controlHeight,
            margin: 0,
            paddingInline: buttonPaddingInline,
            paddingBlock: 0,
            color: buttonColor,
            fontSize,
            lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(calc(controlHeight).sub(calc(lineWidth).mul(2)).equal()),
            background: buttonBg,
            border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} ${lineType} ${colorBorder}`,
            // strange align fix for chrome but works
            // https://gw.alipayobjects.com/zos/rmsportal/VFTfKXJuogBAXcvfAUWJ.gif
            borderBlockStartWidth: calc(lineWidth).add(0.02).equal(),
            borderInlineEndWidth: lineWidth,
            cursor: 'pointer',
            transition: [
                `color ${motionDurationMid}`,
                `background ${motionDurationMid}`,
                `box-shadow ${motionDurationMid}`
            ].join(','),
            a: {
                color: buttonColor
            },
            [`> ${componentCls}-button`]: {
                position: 'absolute',
                insetBlockStart: 0,
                insetInlineStart: 0,
                zIndex: -1,
                width: '100%',
                height: '100%'
            },
            '&:not(:last-child)': {
                marginInlineEnd: calc(lineWidth).mul(-1).equal()
            },
            '&:first-child': {
                borderInlineStart: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} ${lineType} ${colorBorder}`,
                borderStartStartRadius: borderRadius,
                borderEndStartRadius: borderRadius
            },
            '&:last-child': {
                borderStartEndRadius: borderRadius,
                borderEndEndRadius: borderRadius
            },
            '&:first-child:last-child': {
                borderRadius
            },
            [`${componentCls}-group-large &`]: {
                height: controlHeightLG,
                fontSize: fontSizeLG,
                lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(calc(controlHeightLG).sub(calc(lineWidth).mul(2)).equal()),
                '&:first-child': {
                    borderStartStartRadius: borderRadiusLG,
                    borderEndStartRadius: borderRadiusLG
                },
                '&:last-child': {
                    borderStartEndRadius: borderRadiusLG,
                    borderEndEndRadius: borderRadiusLG
                }
            },
            [`${componentCls}-group-small &`]: {
                height: controlHeightSM,
                paddingInline: calc(paddingXS).sub(lineWidth).equal(),
                paddingBlock: 0,
                lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(calc(controlHeightSM).sub(calc(lineWidth).mul(2)).equal()),
                '&:first-child': {
                    borderStartStartRadius: borderRadiusSM,
                    borderEndStartRadius: borderRadiusSM
                },
                '&:last-child': {
                    borderStartEndRadius: borderRadiusSM,
                    borderEndEndRadius: borderRadiusSM
                }
            },
            '&:hover': {
                position: 'relative',
                color: colorPrimary
            },
            '&:has(:focus-visible)': (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genFocusOutline"])(token),
            [`${componentCls}-inner, input[type='checkbox'], input[type='radio']`]: {
                width: 0,
                height: 0,
                opacity: 0,
                pointerEvents: 'none'
            },
            [`&-checked:not(${componentCls}-button-wrapper-disabled)`]: {
                zIndex: 1,
                color: colorPrimary,
                background: buttonCheckedBg,
                borderColor: colorPrimary,
                '&::before': {
                    backgroundColor: colorPrimary
                },
                '&:first-child': {
                    borderColor: colorPrimary
                },
                '&:hover': {
                    color: colorPrimaryHover,
                    borderColor: colorPrimaryHover,
                    '&::before': {
                        backgroundColor: colorPrimaryHover
                    }
                },
                '&:active': {
                    color: colorPrimaryActive,
                    borderColor: colorPrimaryActive,
                    '&::before': {
                        backgroundColor: colorPrimaryActive
                    }
                }
            },
            [`${componentCls}-group-solid &-checked:not(${componentCls}-button-wrapper-disabled)`]: {
                color: buttonSolidCheckedColor,
                background: buttonSolidCheckedBg,
                borderColor: buttonSolidCheckedBg,
                '&:hover': {
                    color: buttonSolidCheckedColor,
                    background: buttonSolidCheckedHoverBg,
                    borderColor: buttonSolidCheckedHoverBg
                },
                '&:active': {
                    color: buttonSolidCheckedColor,
                    background: buttonSolidCheckedActiveBg,
                    borderColor: buttonSolidCheckedActiveBg
                }
            },
            '&-disabled': {
                color: colorTextDisabled,
                backgroundColor: colorBgContainerDisabled,
                borderColor: colorBorder,
                cursor: 'not-allowed',
                '&:first-child, &:hover': {
                    color: colorTextDisabled,
                    backgroundColor: colorBgContainerDisabled,
                    borderColor: colorBorder
                }
            },
            [`&-disabled${componentCls}-button-wrapper-checked`]: {
                color: buttonCheckedColorDisabled,
                backgroundColor: buttonCheckedBgDisabled,
                borderColor: colorBorder,
                boxShadow: 'none'
            },
            '&-block': {
                flex: 1,
                textAlign: 'center'
            }
        }
    };
};
const prepareComponentToken = (token)=>{
    const { wireframe, padding, marginXS, lineWidth, fontSizeLG, colorText, colorBgContainer, colorTextDisabled, controlItemBgActiveDisabled, colorTextLightSolid, colorPrimary, colorPrimaryHover, colorPrimaryActive, colorWhite } = token;
    const dotPadding = 4; // Fixed value
    const radioSize = fontSizeLG;
    const radioDotSize = wireframe ? radioSize - dotPadding * 2 : radioSize - (dotPadding + lineWidth) * 2;
    return {
        // Radio
        radioSize,
        dotSize: radioDotSize,
        dotColorDisabled: colorTextDisabled,
        // Radio buttons
        buttonSolidCheckedColor: colorTextLightSolid,
        buttonSolidCheckedBg: colorPrimary,
        buttonSolidCheckedHoverBg: colorPrimaryHover,
        buttonSolidCheckedActiveBg: colorPrimaryActive,
        buttonBg: colorBgContainer,
        buttonCheckedBg: colorBgContainer,
        buttonColor: colorText,
        buttonCheckedBgDisabled: controlItemBgActiveDisabled,
        buttonCheckedColorDisabled: colorTextDisabled,
        buttonPaddingInline: padding - lineWidth,
        wrapperMarginInlineEnd: marginXS,
        // internal
        radioColor: wireframe ? colorPrimary : colorWhite,
        radioBgColor: wireframe ? colorBgContainer : colorPrimary
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])('Radio', (token)=>{
    const { controlOutline, controlOutlineWidth } = token;
    const radioFocusShadow = `0 0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(controlOutlineWidth)} ${controlOutline}`;
    const radioButtonFocusShadow = radioFocusShadow;
    const radioToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        radioFocusShadow,
        radioButtonFocusShadow
    });
    return [
        getGroupRadioStyle(radioToken),
        getRadioBasicStyle(radioToken),
        getRadioButtonStyle(radioToken)
    ];
}, prepareComponentToken, {
    unitless: {
        radioSize: true,
        dotSize: true
    }
});
}),
"[project]/Downloads/One click/node_modules/antd/es/radio/radio.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$checkbox$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-checkbox/es/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/ref.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/wave/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$interface$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/wave/interface.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$useBubbleLock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/checkbox/useBubbleLock.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/DisabledContext.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/form/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$radio$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/radio/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$radio$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/radio/style/index.js [ssr] (ecmascript)");
"use client";
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
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
const InternalRadio = (props, ref)=>{
    var _a, _b;
    const groupContext = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$radio$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]);
    const radioOptionTypeContext = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$radio$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["RadioOptionTypeContext"]);
    const { getPrefixCls, direction, radio } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const innerRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"](null);
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["composeRef"])(ref, innerRef);
    const { isFormItemInput } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FormItemInputContext"]);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])('Radio');
        ("TURBOPACK compile-time truthy", 1) ? warning(!('optionType' in props), 'usage', '`optionType` is only support in Radio.Group.') : "TURBOPACK unreachable";
    }
    const onChange = (e)=>{
        var _a, _b;
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
        (_b = groupContext === null || groupContext === void 0 ? void 0 : groupContext.onChange) === null || _b === void 0 ? void 0 : _b.call(groupContext, e);
    };
    const { prefixCls: customizePrefixCls, className, rootClassName, children, style, title } = props, restProps = __rest(props, [
        "prefixCls",
        "className",
        "rootClassName",
        "children",
        "style",
        "title"
    ]);
    const radioPrefixCls = getPrefixCls('radio', customizePrefixCls);
    const isButtonType = ((groupContext === null || groupContext === void 0 ? void 0 : groupContext.optionType) || radioOptionTypeContext) === 'button';
    const prefixCls = isButtonType ? `${radioPrefixCls}-button` : radioPrefixCls;
    // Style
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(radioPrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$radio$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(radioPrefixCls, rootCls);
    const radioProps = Object.assign({}, restProps);
    // ===================== Disabled =====================
    const disabled = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]);
    if (groupContext) {
        radioProps.name = groupContext.name;
        radioProps.onChange = onChange;
        radioProps.checked = props.value === groupContext.value;
        radioProps.disabled = (_a = radioProps.disabled) !== null && _a !== void 0 ? _a : groupContext.disabled;
    }
    radioProps.disabled = (_b = radioProps.disabled) !== null && _b !== void 0 ? _b : disabled;
    const wrapperClassString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-wrapper`, {
        [`${prefixCls}-wrapper-checked`]: radioProps.checked,
        [`${prefixCls}-wrapper-disabled`]: radioProps.disabled,
        [`${prefixCls}-wrapper-rtl`]: direction === 'rtl',
        [`${prefixCls}-wrapper-in-form-item`]: isFormItemInput,
        [`${prefixCls}-wrapper-block`]: !!(groupContext === null || groupContext === void 0 ? void 0 : groupContext.block)
    }, radio === null || radio === void 0 ? void 0 : radio.className, className, rootClassName, hashId, cssVarCls, rootCls);
    // ============================ Event Lock ============================
    const [onLabelClick, onInputClick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$useBubbleLock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(radioProps.onClick);
    // ============================== Render ==============================
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        component: "Radio",
        disabled: radioProps.disabled
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("label", {
        className: wrapperClassString,
        style: Object.assign(Object.assign({}, radio === null || radio === void 0 ? void 0 : radio.style), style),
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        title: title,
        onClick: onLabelClick
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$checkbox$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], Object.assign({}, radioProps, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(radioProps.className, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$interface$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["TARGET_CLS"]]: !isButtonType
        }),
        type: "radio",
        prefixCls: prefixCls,
        ref: mergedRef,
        onClick: onInputClick
    })), children !== undefined ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", {
        className: `${prefixCls}-label`
    }, children) : null)));
};
const Radio = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](InternalRadio);
if ("TURBOPACK compile-time truthy", 1) {
    Radio.displayName = 'Radio';
}
const __TURBOPACK__default__export__ = Radio;
}),
"[project]/Downloads/One click/node_modules/antd/es/radio/group.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useId.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useMergedState.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/pickAttrs.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useSize.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$radio$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/radio/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$radio$2f$radio$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/radio/radio.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$radio$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/radio/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/form/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useForm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/form/hooks/useForm.js [ssr] (ecmascript)");
"use client";
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
const RadioGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"]((props, ref)=>{
    const { getPrefixCls, direction } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { name: formItemName } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FormItemInputContext"]);
    const defaultName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useForm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["toNamePathStr"])(formItemName));
    const { prefixCls: customizePrefixCls, className, rootClassName, options, buttonStyle = 'outline', disabled, children, size: customizeSize, style, id, optionType, name = defaultName, defaultValue, value: customizedValue, block = false, onChange, onMouseEnter, onMouseLeave, onFocus, onBlur } = props;
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(defaultValue, {
        value: customizedValue
    });
    const onRadioChange = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"]((event)=>{
        const lastValue = value;
        const val = event.target.value;
        if (!('value' in props)) {
            setValue(val);
        }
        if (val !== lastValue) {
            onChange === null || onChange === void 0 ? void 0 : onChange(event);
        }
    }, [
        value,
        setValue,
        onChange
    ]);
    const prefixCls = getPrefixCls('radio', customizePrefixCls);
    const groupPrefixCls = `${prefixCls}-group`;
    // Style
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$radio$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    let childrenToRender = children;
    // 如果存在 options, 优先使用
    if (options && options.length > 0) {
        childrenToRender = options.map((option)=>{
            if (typeof option === 'string' || typeof option === 'number') {
                // 此处类型自动推导为 string
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$radio$2f$radio$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    key: option.toString(),
                    prefixCls: prefixCls,
                    disabled: disabled,
                    value: option,
                    checked: value === option
                }, option);
            }
            // 此处类型自动推导为 { label: string value: string }
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$radio$2f$radio$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                key: `radio-group-value-options-${option.value}`,
                prefixCls: prefixCls,
                disabled: option.disabled || disabled,
                value: option.value,
                checked: value === option.value,
                title: option.title,
                style: option.style,
                className: option.className,
                id: option.id,
                required: option.required
            }, option.label);
        });
    }
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(customizeSize);
    const classString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(groupPrefixCls, `${groupPrefixCls}-${buttonStyle}`, {
        [`${groupPrefixCls}-${mergedSize}`]: mergedSize,
        [`${groupPrefixCls}-rtl`]: direction === 'rtl',
        [`${groupPrefixCls}-block`]: block
    }, className, rootClassName, hashId, cssVarCls, rootCls);
    const memoizedValue = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](()=>({
            onChange: onRadioChange,
            value,
            disabled,
            name,
            optionType,
            block
        }), [
        onRadioChange,
        value,
        disabled,
        name,
        optionType,
        block
    ]);
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(props, {
        aria: true,
        data: true
    }), {
        className: classString,
        style: style,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onFocus: onFocus,
        onBlur: onBlur,
        id: id,
        ref: ref
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$radio$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["RadioGroupContextProvider"], {
        value: memoizedValue
    }, childrenToRender)));
});
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["memo"](RadioGroup);
}),
"[project]/Downloads/One click/node_modules/antd/es/radio/radioButton.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$radio$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/radio/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$radio$2f$radio$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/radio/radio.js [ssr] (ecmascript)");
"use client";
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
const RadioButton = (props, ref)=>{
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { prefixCls: customizePrefixCls } = props, radioProps = __rest(props, [
        "prefixCls"
    ]);
    const prefixCls = getPrefixCls('radio', customizePrefixCls);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$radio$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["RadioOptionTypeContextProvider"], {
        value: "button"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$radio$2f$radio$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], Object.assign({
        prefixCls: prefixCls
    }, radioProps, {
        type: "radio",
        ref: ref
    })));
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](RadioButton);
}),
"[project]/Downloads/One click/node_modules/antd/es/radio/index.js [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$radio$2f$group$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/radio/group.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$radio$2f$radio$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/radio/radio.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$radio$2f$radioButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/radio/radioButton.js [ssr] (ecmascript)");
"use client";
;
;
;
;
const Radio = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$radio$2f$radio$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"];
Radio.Button = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$radio$2f$radioButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"];
Radio.Group = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$radio$2f$group$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"];
Radio.__ANT_RADIO = true;
const __TURBOPACK__default__export__ = Radio;
}),
"[project]/Downloads/One click/node_modules/antd/es/empty/empty.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/fast-color/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/fast-color/es/FastColor.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/locale/useLocale.js [ssr] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/useToken.js [ssr] (ecmascript) <export default as useToken>");
"use client";
;
;
;
;
const Empty = ()=>{
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const [locale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('Empty');
    const bgColor = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FastColor"](token.colorBgBase);
    // Dark Theme need more dark of this
    const themeStyle = bgColor.toHsl().l < 0.5 ? {
        opacity: 0.65
    } : {};
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("svg", {
        style: themeStyle,
        width: "184",
        height: "152",
        viewBox: "0 0 184 152",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("title", null, (locale === null || locale === void 0 ? void 0 : locale.description) || 'Empty'), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("g", {
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("g", {
        transform: "translate(24 31.67)"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("ellipse", {
        fillOpacity: ".8",
        fill: "#F5F5F7",
        cx: "67.797",
        cy: "106.89",
        rx: "67.797",
        ry: "12.668"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("path", {
        d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
        fill: "#AEB8C2"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("path", {
        d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
        fill: "url(#linearGradient-1)",
        transform: "translate(13.56)"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("path", {
        d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
        fill: "#F5F5F7"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("path", {
        d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
        fill: "#DCE0E6"
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("path", {
        d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
        fill: "#DCE0E6"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("g", {
        transform: "translate(149.65 15.383)",
        fill: "#FFF"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("ellipse", {
        cx: "20.654",
        cy: "3.167",
        rx: "2.849",
        ry: "2.815"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("path", {
        d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
    }))));
};
if ("TURBOPACK compile-time truthy", 1) {
    Empty.displayName = 'EmptyImage';
}
const __TURBOPACK__default__export__ = Empty;
}),
"[project]/Downloads/One click/node_modules/antd/es/empty/simple.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/fast-color/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/fast-color/es/FastColor.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/useToken.js [ssr] (ecmascript) <export default as useToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/locale/useLocale.js [ssr] (ecmascript) <export default as useLocale>");
"use client";
;
;
;
;
;
const Simple = ()=>{
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const [locale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('Empty');
    const { colorFill, colorFillTertiary, colorFillQuaternary, colorBgContainer } = token;
    const { borderColor, shadowColor, contentColor } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>({
            borderColor: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FastColor"](colorFill).onBackground(colorBgContainer).toHexString(),
            shadowColor: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FastColor"](colorFillTertiary).onBackground(colorBgContainer).toHexString(),
            contentColor: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FastColor"](colorFillQuaternary).onBackground(colorBgContainer).toHexString()
        }), [
        colorFill,
        colorFillTertiary,
        colorFillQuaternary,
        colorBgContainer
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("svg", {
        width: "64",
        height: "41",
        viewBox: "0 0 64 41",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("title", null, (locale === null || locale === void 0 ? void 0 : locale.description) || 'Empty'), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("g", {
        transform: "translate(0 1)",
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("ellipse", {
        fill: shadowColor,
        cx: "32",
        cy: "33",
        rx: "32",
        ry: "7"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("g", {
        fillRule: "nonzero",
        stroke: borderColor
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("path", {
        d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("path", {
        d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
        fill: contentColor
    }))));
};
if ("TURBOPACK compile-time truthy", 1) {
    Simple.displayName = 'SimpleImage';
}
const __TURBOPACK__default__export__ = Simple;
}),
"[project]/Downloads/One click/node_modules/antd/es/empty/style/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [ssr] (ecmascript) <export merge as mergeToken>");
;
// ============================== Shared ==============================
const genSharedEmptyStyle = (token)=>{
    const { componentCls, margin, marginXS, marginXL, fontSize, lineHeight } = token;
    return {
        [componentCls]: {
            marginInline: marginXS,
            fontSize,
            lineHeight,
            textAlign: 'center',
            // 原来 &-image 没有父子结构，现在为了外层承担我们的 hashId，改成父子结构
            [`${componentCls}-image`]: {
                height: token.emptyImgHeight,
                marginBottom: marginXS,
                opacity: token.opacityImage,
                img: {
                    height: '100%'
                },
                svg: {
                    maxWidth: '100%',
                    height: '100%',
                    margin: 'auto'
                }
            },
            [`${componentCls}-description`]: {
                color: token.colorTextDescription
            },
            // 原来 &-footer 没有父子结构，现在为了外层承担我们的 hashId，改成父子结构
            [`${componentCls}-footer`]: {
                marginTop: margin
            },
            '&-normal': {
                marginBlock: marginXL,
                color: token.colorTextDescription,
                [`${componentCls}-description`]: {
                    color: token.colorTextDescription
                },
                [`${componentCls}-image`]: {
                    height: token.emptyImgHeightMD
                }
            },
            '&-small': {
                marginBlock: marginXS,
                color: token.colorTextDescription,
                [`${componentCls}-image`]: {
                    height: token.emptyImgHeightSM
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])('Empty', (token)=>{
    const { componentCls, controlHeightLG, calc } = token;
    const emptyToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        emptyImgCls: `${componentCls}-img`,
        emptyImgHeight: calc(controlHeightLG).mul(2.5).equal(),
        emptyImgHeightMD: controlHeightLG,
        emptyImgHeightSM: calc(controlHeightLG).mul(0.875).equal()
    });
    return genSharedEmptyStyle(emptyToken);
});
}),
"[project]/Downloads/One click/node_modules/antd/es/empty/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/locale/useLocale.js [ssr] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$empty$2f$empty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/empty/empty.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$empty$2f$simple$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/empty/simple.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$empty$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/empty/style/index.js [ssr] (ecmascript)");
"use client";
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
;
;
;
;
const defaultEmptyImg = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$empty$2f$empty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null);
const simpleEmptyImg = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$empty$2f$simple$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null);
const Empty = (props)=>{
    var _a;
    const { className, rootClassName, prefixCls: customizePrefixCls, image, description, children, imageStyle, style, classNames: emptyClassNames, styles } = props, restProps = __rest(props, [
        "className",
        "rootClassName",
        "prefixCls",
        "image",
        "description",
        "children",
        "imageStyle",
        "style",
        "classNames",
        "styles"
    ]);
    const { getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles, image: contextImage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useComponentConfig"])('empty');
    const prefixCls = getPrefixCls('empty', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$empty$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [locale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('Empty');
    const des = typeof description !== 'undefined' ? description : locale === null || locale === void 0 ? void 0 : locale.description;
    const alt = typeof des === 'string' ? des : 'empty';
    const mergedImage = (_a = image !== null && image !== void 0 ? image : contextImage) !== null && _a !== void 0 ? _a : defaultEmptyImg;
    let imageNode = null;
    if (typeof mergedImage === 'string') {
        imageNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("img", {
            draggable: false,
            alt: alt,
            src: mergedImage
        });
    } else {
        imageNode = mergedImage;
    }
    // ============================= Warning ==============================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])('Empty');
        [
            [
                'imageStyle',
                'styles: { image: {} }'
            ]
        ].forEach(([deprecatedName, newName])=>{
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
    }
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", Object.assign({
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(hashId, cssVarCls, prefixCls, contextClassName, {
            [`${prefixCls}-normal`]: mergedImage === simpleEmptyImg,
            [`${prefixCls}-rtl`]: direction === 'rtl'
        }, className, rootClassName, contextClassNames.root, emptyClassNames === null || emptyClassNames === void 0 ? void 0 : emptyClassNames.root),
        style: Object.assign(Object.assign(Object.assign(Object.assign({}, contextStyles.root), contextStyle), styles === null || styles === void 0 ? void 0 : styles.root), style)
    }, restProps), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-image`, contextClassNames.image, emptyClassNames === null || emptyClassNames === void 0 ? void 0 : emptyClassNames.image),
        style: Object.assign(Object.assign(Object.assign({}, imageStyle), contextStyles.image), styles === null || styles === void 0 ? void 0 : styles.image)
    }, imageNode), des && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-description`, contextClassNames.description, emptyClassNames === null || emptyClassNames === void 0 ? void 0 : emptyClassNames.description),
        style: Object.assign(Object.assign({}, contextStyles.description), styles === null || styles === void 0 ? void 0 : styles.description)
    }, des), children && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-footer`, contextClassNames.footer, emptyClassNames === null || emptyClassNames === void 0 ? void 0 : emptyClassNames.footer),
        style: Object.assign(Object.assign({}, contextStyles.footer), styles === null || styles === void 0 ? void 0 : styles.footer)
    }, children)));
};
Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
if ("TURBOPACK compile-time truthy", 1) {
    Empty.displayName = 'Empty';
}
const __TURBOPACK__default__export__ = Empty;
}),
"[project]/Downloads/One click/node_modules/antd/es/config-provider/defaultRenderEmpty.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/empty/index.js [ssr] (ecmascript)");
"use client";
;
;
;
const DefaultRenderEmpty = (props)=>{
    const { componentName } = props;
    const { getPrefixCls } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefix = getPrefixCls('empty');
    switch(componentName){
        case 'Table':
        case 'List':
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                image: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].PRESENTED_IMAGE_SIMPLE
            });
        case 'Select':
        case 'TreeSelect':
        case 'Cascader':
        case 'Transfer':
        case 'Mentions':
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                image: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].PRESENTED_IMAGE_SIMPLE,
                className: `${prefix}-small`
            });
        /**
     * This type of component should satisfy the nullish coalescing operator(??) on the left-hand side.
     * to let the component itself implement the logic.
     * For example `Table.filter`.
     */ case 'Table.filter':
            // why `null`? legacy react16 node type `undefined` is not allowed.
            return null;
        default:
            // Should never hit if we take all the component into consider.
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null);
    }
};
const __TURBOPACK__default__export__ = DefaultRenderEmpty;
}),
"[project]/Downloads/One click/node_modules/antd/es/grid/hooks/useBreakpoint.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useLayoutEffect.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useForceUpdate$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/hooks/useForceUpdate.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/responsiveObserver.js [ssr] (ecmascript)");
"use client";
;
;
;
;
function useBreakpoint(refreshOnChange = true, defaultScreens = {}) {
    const screensRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(defaultScreens);
    const [, forceUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useForceUpdate$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useForceUpdate"])();
    const responsiveObserver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        const token = responsiveObserver.subscribe((supportScreens)=>{
            screensRef.current = supportScreens;
            if (refreshOnChange) {
                forceUpdate();
            }
        });
        return ()=>responsiveObserver.unsubscribe(token);
    }, []);
    return screensRef.current;
}
const __TURBOPACK__default__export__ = useBreakpoint;
}),
"[project]/Downloads/One click/node_modules/antd/es/grid/style/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMediaSize",
    ()=>getMediaSize,
    "prepareColComponentToken",
    ()=>prepareColComponentToken,
    "prepareRowComponentToken",
    ()=>prepareRowComponentToken,
    "useColStyle",
    ()=>useColStyle,
    "useRowStyle",
    ()=>useRowStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [ssr] (ecmascript) <export merge as mergeToken>");
;
;
// ============================== Row-Shared ==============================
const genGridRowStyle = (token)=>{
    const { componentCls } = token;
    return {
        // Grid system
        [componentCls]: {
            display: 'flex',
            flexFlow: 'row wrap',
            minWidth: 0,
            '&::before, &::after': {
                display: 'flex'
            },
            '&-no-wrap': {
                flexWrap: 'nowrap'
            },
            // The origin of the X-axis
            '&-start': {
                justifyContent: 'flex-start'
            },
            // The center of the X-axis
            '&-center': {
                justifyContent: 'center'
            },
            // The opposite of the X-axis
            '&-end': {
                justifyContent: 'flex-end'
            },
            '&-space-between': {
                justifyContent: 'space-between'
            },
            '&-space-around': {
                justifyContent: 'space-around'
            },
            '&-space-evenly': {
                justifyContent: 'space-evenly'
            },
            // Align at the top
            '&-top': {
                alignItems: 'flex-start'
            },
            // Align at the center
            '&-middle': {
                alignItems: 'center'
            },
            '&-bottom': {
                alignItems: 'flex-end'
            }
        }
    };
};
// ============================== Col-Shared ==============================
const genGridColStyle = (token)=>{
    const { componentCls } = token;
    return {
        // Grid system
        [componentCls]: {
            position: 'relative',
            maxWidth: '100%',
            // Prevent columns from collapsing when empty
            minHeight: 1
        }
    };
};
const genLoopGridColumnsStyle = (token, sizeCls)=>{
    const { prefixCls, componentCls, gridColumns } = token;
    const gridColumnsStyle = {};
    for(let i = gridColumns; i >= 0; i--){
        if (i === 0) {
            gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = {
                display: 'none'
            };
            gridColumnsStyle[`${componentCls}-push-${i}`] = {
                insetInlineStart: 'auto'
            };
            gridColumnsStyle[`${componentCls}-pull-${i}`] = {
                insetInlineEnd: 'auto'
            };
            gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
                insetInlineStart: 'auto'
            };
            gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
                insetInlineEnd: 'auto'
            };
            gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
                marginInlineStart: 0
            };
            gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
                order: 0
            };
        } else {
            gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = [
                // https://github.com/ant-design/ant-design/issues/44456
                // Form set `display: flex` on Col which will override `display: block`.
                // Let's get it from css variable to support override.
                {
                    ['--ant-display']: 'block',
                    // Fallback to display if variable not support
                    display: 'block'
                },
                {
                    display: 'var(--ant-display)',
                    flex: `0 0 ${i / gridColumns * 100}%`,
                    maxWidth: `${i / gridColumns * 100}%`
                }
            ];
            gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
                insetInlineStart: `${i / gridColumns * 100}%`
            };
            gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
                insetInlineEnd: `${i / gridColumns * 100}%`
            };
            gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
                marginInlineStart: `${i / gridColumns * 100}%`
            };
            gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
                order: i
            };
        }
    }
    // Flex CSS Var
    gridColumnsStyle[`${componentCls}${sizeCls}-flex`] = {
        flex: `var(--${prefixCls}${sizeCls}-flex)`
    };
    return gridColumnsStyle;
};
const genGridStyle = (token, sizeCls)=>genLoopGridColumnsStyle(token, sizeCls);
const genGridMediaStyle = (token, screenSize, sizeCls)=>({
        [`@media (min-width: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(screenSize)})`]: Object.assign({}, genGridStyle(token, sizeCls))
    });
const prepareRowComponentToken = ()=>({});
const prepareColComponentToken = ()=>({});
const useRowStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])('Grid', genGridRowStyle, prepareRowComponentToken);
const getMediaSize = (token)=>{
    const mediaSizesMap = {
        xs: token.screenXSMin,
        sm: token.screenSMMin,
        md: token.screenMDMin,
        lg: token.screenLGMin,
        xl: token.screenXLMin,
        xxl: token.screenXXLMin
    };
    return mediaSizesMap;
};
const useColStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])('Grid', (token)=>{
    const gridToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        gridColumns: 24 // Row is divided into 24 parts in Grid
    });
    const gridMediaSizesMap = getMediaSize(gridToken);
    delete gridMediaSizesMap.xs;
    return [
        genGridColStyle(gridToken),
        genGridStyle(gridToken, ''),
        genGridStyle(gridToken, '-xs'),
        Object.keys(gridMediaSizesMap).map((key)=>genGridMediaStyle(gridToken, gridMediaSizesMap[key], `-${key}`)).reduce((pre, cur)=>Object.assign(Object.assign({}, pre), cur), {})
    ];
}, prepareColComponentToken);
}),
"[project]/Downloads/One click/node_modules/antd/es/grid/hooks/useGutter.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useGutter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/responsiveObserver.js [ssr] (ecmascript)");
;
function useGutter(gutter, screens) {
    const results = [
        undefined,
        undefined
    ];
    const normalizedGutter = Array.isArray(gutter) ? gutter : [
        gutter,
        undefined
    ];
    // By default use as `xs`
    const mergedScreens = screens || {
        xs: true,
        sm: true,
        md: true,
        lg: true,
        xl: true,
        xxl: true
    };
    normalizedGutter.forEach((g, index)=>{
        if (typeof g === 'object' && g !== null) {
            for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["responsiveArray"].length; i++){
                const breakpoint = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["responsiveArray"][i];
                if (mergedScreens[breakpoint] && g[breakpoint] !== undefined) {
                    results[index] = g[breakpoint];
                    break;
                }
            }
        } else {
            results[index] = g;
        }
    });
    return results;
}
}),
"[project]/Downloads/One click/node_modules/antd/es/grid/RowContext.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
const RowContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"])({});
const __TURBOPACK__default__export__ = RowContext;
}),
"[project]/Downloads/One click/node_modules/antd/es/grid/row.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/responsiveObserver.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$grid$2f$hooks$2f$useBreakpoint$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/grid/hooks/useBreakpoint.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$grid$2f$hooks$2f$useGutter$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/grid/hooks/useGutter.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$grid$2f$RowContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/grid/RowContext.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$grid$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/grid/style/index.js [ssr] (ecmascript)");
"use client";
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
;
;
;
;
const _RowAligns = [
    'top',
    'middle',
    'bottom',
    'stretch'
];
const _RowJustify = [
    'start',
    'end',
    'center',
    'space-around',
    'space-between',
    'space-evenly'
];
function useMergedPropByScreen(oriProp, screen) {
    const [prop, setProp] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](typeof oriProp === 'string' ? oriProp : '');
    const calcMergedAlignOrJustify = ()=>{
        if (typeof oriProp === 'string') {
            setProp(oriProp);
        }
        if (typeof oriProp !== 'object') {
            return;
        }
        for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["responsiveArray"].length; i++){
            const breakpoint = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["responsiveArray"][i];
            // if do not match, do nothing
            if (!screen || !screen[breakpoint]) {
                continue;
            }
            const curVal = oriProp[breakpoint];
            if (curVal !== undefined) {
                setProp(curVal);
                return;
            }
        }
    };
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](()=>{
        calcMergedAlignOrJustify();
    }, [
        JSON.stringify(oriProp),
        screen
    ]);
    return prop;
}
const Row = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, justify, align, className, style, children, gutter = 0, wrap } = props, others = __rest(props, [
        "prefixCls",
        "justify",
        "align",
        "className",
        "style",
        "children",
        "gutter",
        "wrap"
    ]);
    const { getPrefixCls, direction } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const screens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$grid$2f$hooks$2f$useBreakpoint$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(true, null);
    const mergedAlign = useMergedPropByScreen(align, screens);
    const mergedJustify = useMergedPropByScreen(justify, screens);
    const prefixCls = getPrefixCls('row', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$grid$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRowStyle"])(prefixCls);
    const gutters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$grid$2f$hooks$2f$useGutter$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(gutter, screens);
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, {
        [`${prefixCls}-no-wrap`]: wrap === false,
        [`${prefixCls}-${mergedJustify}`]: mergedJustify,
        [`${prefixCls}-${mergedAlign}`]: mergedAlign,
        [`${prefixCls}-rtl`]: direction === 'rtl'
    }, className, hashId, cssVarCls);
    // Add gutter related style
    const rowStyle = {};
    if (gutters === null || gutters === void 0 ? void 0 : gutters[0]) {
        const horizontalGutter = typeof gutters[0] === 'number' ? `${gutters[0] / -2}px` : `calc(${gutters[0]} / -2)`;
        rowStyle.marginLeft = horizontalGutter;
        rowStyle.marginRight = horizontalGutter;
    }
    // "gutters" is a new array in each rendering phase, it'll make 'React.useMemo' effectless.
    // So we deconstruct "gutters" variable here.
    const [gutterH, gutterV] = gutters;
    rowStyle.rowGap = gutterV;
    const rowContext = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](()=>({
            gutter: [
                gutterH,
                gutterV
            ],
            wrap
        }), [
        gutterH,
        gutterV,
        wrap
    ]);
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$grid$2f$RowContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: rowContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", Object.assign({}, others, {
        className: classes,
        style: Object.assign(Object.assign({}, rowStyle), style),
        ref: ref
    }), children)));
});
if ("TURBOPACK compile-time truthy", 1) {
    Row.displayName = 'Row';
}
const __TURBOPACK__default__export__ = Row;
}),
"[project]/Downloads/One click/node_modules/antd/es/grid/row.js [ssr] (ecmascript) <export default as Row>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Row",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$grid$2f$row$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$grid$2f$row$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/grid/row.js [ssr] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/antd/es/grid/col.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$grid$2f$RowContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/grid/RowContext.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$grid$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/grid/style/index.js [ssr] (ecmascript)");
"use client";
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
;
function parseFlex(flex) {
    if (flex === 'auto') {
        return '1 1 auto';
    }
    if (typeof flex === 'number') {
        return `${flex} ${flex} auto`;
    }
    if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
        return `0 0 ${flex}`;
    }
    return flex;
}
const sizes = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl'
];
const Col = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"]((props, ref)=>{
    const { getPrefixCls, direction } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { gutter, wrap } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$grid$2f$RowContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]);
    const { prefixCls: customizePrefixCls, span, order, offset, push, pull, className, children, flex, style } = props, others = __rest(props, [
        "prefixCls",
        "span",
        "order",
        "offset",
        "push",
        "pull",
        "className",
        "children",
        "flex",
        "style"
    ]);
    const prefixCls = getPrefixCls('col', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$grid$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useColStyle"])(prefixCls);
    // ===================== Size ======================
    const sizeStyle = {};
    let sizeClassObj = {};
    sizes.forEach((size)=>{
        let sizeProps = {};
        const propSize = props[size];
        if (typeof propSize === 'number') {
            sizeProps.span = propSize;
        } else if (typeof propSize === 'object') {
            sizeProps = propSize || {};
        }
        delete others[size];
        sizeClassObj = Object.assign(Object.assign({}, sizeClassObj), {
            [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
            [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
            [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
            [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
            [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
            [`${prefixCls}-rtl`]: direction === 'rtl'
        });
        // Responsive flex layout
        if (sizeProps.flex) {
            sizeClassObj[`${prefixCls}-${size}-flex`] = true;
            sizeStyle[`--${prefixCls}-${size}-flex`] = parseFlex(sizeProps.flex);
        }
    });
    // ==================== Normal =====================
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, {
        [`${prefixCls}-${span}`]: span !== undefined,
        [`${prefixCls}-order-${order}`]: order,
        [`${prefixCls}-offset-${offset}`]: offset,
        [`${prefixCls}-push-${push}`]: push,
        [`${prefixCls}-pull-${pull}`]: pull
    }, className, sizeClassObj, hashId, cssVarCls);
    const mergedStyle = {};
    // Horizontal gutter use padding
    if (gutter === null || gutter === void 0 ? void 0 : gutter[0]) {
        const horizontalGutter = typeof gutter[0] === 'number' ? `${gutter[0] / 2}px` : `calc(${gutter[0]} / 2)`;
        mergedStyle.paddingLeft = horizontalGutter;
        mergedStyle.paddingRight = horizontalGutter;
    }
    if (flex) {
        mergedStyle.flex = parseFlex(flex);
        // Hack for Firefox to avoid size issue
        // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
        if (wrap === false && !mergedStyle.minWidth) {
            mergedStyle.minWidth = 0;
        }
    }
    // ==================== Render =====================
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", Object.assign({}, others, {
        style: Object.assign(Object.assign(Object.assign({}, mergedStyle), style), sizeStyle),
        className: classes,
        ref: ref
    }), children));
});
if ("TURBOPACK compile-time truthy", 1) {
    Col.displayName = 'Col';
}
const __TURBOPACK__default__export__ = Col;
}),
"[project]/Downloads/One click/node_modules/antd/es/select/mergedBuiltinPlacements.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const getBuiltInPlacements = (popupOverflow)=>{
    const htmlRegion = popupOverflow === 'scroll' ? 'scroll' : 'visible';
    const sharedConfig = {
        overflow: {
            adjustX: true,
            adjustY: true,
            shiftY: true
        },
        htmlRegion,
        dynamicInset: true
    };
    return {
        bottomLeft: Object.assign(Object.assign({}, sharedConfig), {
            points: [
                'tl',
                'bl'
            ],
            offset: [
                0,
                4
            ]
        }),
        bottomRight: Object.assign(Object.assign({}, sharedConfig), {
            points: [
                'tr',
                'br'
            ],
            offset: [
                0,
                4
            ]
        }),
        topLeft: Object.assign(Object.assign({}, sharedConfig), {
            points: [
                'bl',
                'tl'
            ],
            offset: [
                0,
                -4
            ]
        }),
        topRight: Object.assign(Object.assign({}, sharedConfig), {
            points: [
                'br',
                'tr'
            ],
            offset: [
                0,
                -4
            ]
        })
    };
};
function mergedBuiltinPlacements(buildInPlacements, popupOverflow) {
    return buildInPlacements || getBuiltInPlacements(popupOverflow);
}
const __TURBOPACK__default__export__ = mergedBuiltinPlacements;
}),
"[project]/Downloads/One click/node_modules/antd/es/select/style/dropdown.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$move$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/motion/move.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/motion/slide.js [ssr] (ecmascript)");
;
;
const genItemStyle = (token)=>{
    const { optionHeight, optionFontSize, optionLineHeight, optionPadding } = token;
    return {
        position: 'relative',
        display: 'block',
        minHeight: optionHeight,
        padding: optionPadding,
        color: token.colorText,
        fontWeight: 'normal',
        fontSize: optionFontSize,
        lineHeight: optionLineHeight,
        boxSizing: 'border-box'
    };
};
const genSingleStyle = (token)=>{
    const { antCls, componentCls } = token;
    const selectItemCls = `${componentCls}-item`;
    const slideUpEnterActive = `&${antCls}-slide-up-enter${antCls}-slide-up-enter-active`;
    const slideUpAppearActive = `&${antCls}-slide-up-appear${antCls}-slide-up-appear-active`;
    const slideUpLeaveActive = `&${antCls}-slide-up-leave${antCls}-slide-up-leave-active`;
    const dropdownPlacementCls = `${componentCls}-dropdown-placement-`;
    const selectedItemCls = `${selectItemCls}-option-selected`;
    return [
        {
            [`${componentCls}-dropdown`]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token)), {
                position: 'absolute',
                top: -9999,
                zIndex: token.zIndexPopup,
                boxSizing: 'border-box',
                padding: token.paddingXXS,
                overflow: 'hidden',
                fontSize: token.fontSize,
                // Fix select render lag of long text in chrome
                // https://github.com/ant-design/ant-design/issues/11456
                // https://github.com/ant-design/ant-design/issues/11843
                fontVariant: 'initial',
                backgroundColor: token.colorBgElevated,
                borderRadius: token.borderRadiusLG,
                outline: 'none',
                boxShadow: token.boxShadowSecondary,
                [`
          ${slideUpEnterActive}${dropdownPlacementCls}bottomLeft,
          ${slideUpAppearActive}${dropdownPlacementCls}bottomLeft
        `]: {
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["slideUpIn"]
                },
                [`
          ${slideUpEnterActive}${dropdownPlacementCls}topLeft,
          ${slideUpAppearActive}${dropdownPlacementCls}topLeft,
          ${slideUpEnterActive}${dropdownPlacementCls}topRight,
          ${slideUpAppearActive}${dropdownPlacementCls}topRight
        `]: {
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["slideDownIn"]
                },
                [`${slideUpLeaveActive}${dropdownPlacementCls}bottomLeft`]: {
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["slideUpOut"]
                },
                [`
          ${slideUpLeaveActive}${dropdownPlacementCls}topLeft,
          ${slideUpLeaveActive}${dropdownPlacementCls}topRight
        `]: {
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["slideDownOut"]
                },
                '&-hidden': {
                    display: 'none'
                },
                [selectItemCls]: Object.assign(Object.assign({}, genItemStyle(token)), {
                    cursor: 'pointer',
                    transition: `background ${token.motionDurationSlow} ease`,
                    borderRadius: token.borderRadiusSM,
                    // =========== Group ============
                    '&-group': {
                        color: token.colorTextDescription,
                        fontSize: token.fontSizeSM,
                        cursor: 'default'
                    },
                    // =========== Option ===========
                    '&-option': {
                        display: 'flex',
                        '&-content': Object.assign({
                            flex: 'auto'
                        }, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["textEllipsis"]),
                        '&-state': {
                            flex: 'none',
                            display: 'flex',
                            alignItems: 'center'
                        },
                        [`&-active:not(${selectItemCls}-option-disabled)`]: {
                            backgroundColor: token.optionActiveBg
                        },
                        [`&-selected:not(${selectItemCls}-option-disabled)`]: {
                            color: token.optionSelectedColor,
                            fontWeight: token.optionSelectedFontWeight,
                            backgroundColor: token.optionSelectedBg,
                            [`${selectItemCls}-option-state`]: {
                                color: token.colorPrimary
                            }
                        },
                        '&-disabled': {
                            [`&${selectItemCls}-option-selected`]: {
                                backgroundColor: token.colorBgContainerDisabled
                            },
                            color: token.colorTextDisabled,
                            cursor: 'not-allowed'
                        },
                        '&-grouped': {
                            paddingInlineStart: token.calc(token.controlPaddingHorizontal).mul(2).equal()
                        }
                    },
                    '&-empty': Object.assign(Object.assign({}, genItemStyle(token)), {
                        color: token.colorTextDisabled
                    })
                }),
                // https://github.com/ant-design/ant-design/pull/46646
                [`${selectedItemCls}:has(+ ${selectedItemCls})`]: {
                    borderEndStartRadius: 0,
                    borderEndEndRadius: 0,
                    [`& + ${selectedItemCls}`]: {
                        borderStartStartRadius: 0,
                        borderStartEndRadius: 0
                    }
                },
                // =========================== RTL ===========================
                '&-rtl': {
                    direction: 'rtl'
                }
            })
        },
        // Follow code may reuse in other components
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["initSlideMotion"])(token, 'slide-up'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["initSlideMotion"])(token, 'slide-down'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$move$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["initMoveMotion"])(token, 'move-up'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$move$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["initMoveMotion"])(token, 'move-down')
    ];
};
const __TURBOPACK__default__export__ = genSingleStyle;
}),
"[project]/Downloads/One click/node_modules/antd/es/select/style/multiple.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "genOverflowStyle",
    ()=>genOverflowStyle,
    "getMultipleSelectorUnit",
    ()=>getMultipleSelectorUnit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [ssr] (ecmascript) <export merge as mergeToken>");
;
;
;
const getMultipleSelectorUnit = (token)=>{
    const { multipleSelectItemHeight, paddingXXS, lineWidth, INTERNAL_FIXED_ITEM_MARGIN } = token;
    const basePadding = token.max(token.calc(paddingXXS).sub(lineWidth).equal(), 0);
    const containerPadding = token.max(token.calc(basePadding).sub(INTERNAL_FIXED_ITEM_MARGIN).equal(), 0);
    return {
        basePadding,
        containerPadding,
        itemHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(multipleSelectItemHeight),
        itemLineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.calc(multipleSelectItemHeight).sub(token.calc(token.lineWidth).mul(2)).equal())
    };
};
const getSelectItemStyle = (token)=>{
    const { multipleSelectItemHeight, selectHeight, lineWidth } = token;
    const selectItemDist = token.calc(selectHeight).sub(multipleSelectItemHeight).div(2).sub(lineWidth).equal();
    return selectItemDist;
};
const genOverflowStyle = (token)=>{
    const { componentCls, iconCls, borderRadiusSM, motionDurationSlow, paddingXS, multipleItemColorDisabled, multipleItemBorderColorDisabled, colorIcon, colorIconHover, INTERNAL_FIXED_ITEM_MARGIN } = token;
    const selectOverflowPrefixCls = `${componentCls}-selection-overflow`;
    return {
        /**
     * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
     * may update to redesign with its align logic.
     */ // =========================== Overflow ===========================
        [selectOverflowPrefixCls]: {
            position: 'relative',
            display: 'flex',
            flex: 'auto',
            flexWrap: 'wrap',
            maxWidth: '100%',
            '&-item': {
                flex: 'none',
                alignSelf: 'center',
                // https://github.com/ant-design/ant-design/issues/54179
                maxWidth: 'calc(100% - 4px)',
                display: 'inline-flex'
            },
            // ======================== Selections ==========================
            [`${componentCls}-selection-item`]: {
                display: 'flex',
                alignSelf: 'center',
                flex: 'none',
                boxSizing: 'border-box',
                maxWidth: '100%',
                marginBlock: INTERNAL_FIXED_ITEM_MARGIN,
                borderRadius: borderRadiusSM,
                cursor: 'default',
                transition: `font-size ${motionDurationSlow}, line-height ${motionDurationSlow}, height ${motionDurationSlow}`,
                marginInlineEnd: token.calc(INTERNAL_FIXED_ITEM_MARGIN).mul(2).equal(),
                paddingInlineStart: paddingXS,
                paddingInlineEnd: token.calc(paddingXS).div(2).equal(),
                [`${componentCls}-disabled&`]: {
                    color: multipleItemColorDisabled,
                    borderColor: multipleItemBorderColorDisabled,
                    cursor: 'not-allowed'
                },
                // It's ok not to do this, but 24px makes bottom narrow in view should adjust
                '&-content': {
                    display: 'inline-block',
                    marginInlineEnd: token.calc(paddingXS).div(2).equal(),
                    overflow: 'hidden',
                    whiteSpace: 'pre',
                    // fix whitespace wrapping. custom tags display all whitespace within.
                    textOverflow: 'ellipsis'
                },
                '&-remove': Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetIcon"])()), {
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: colorIcon,
                    fontWeight: 'bold',
                    fontSize: 10,
                    lineHeight: 'inherit',
                    cursor: 'pointer',
                    [`> ${iconCls}`]: {
                        verticalAlign: '-0.2em'
                    },
                    '&:hover': {
                        color: colorIconHover
                    }
                })
            }
        }
    };
};
const genSelectionStyle = (token, suffix)=>{
    const { componentCls, INTERNAL_FIXED_ITEM_MARGIN } = token;
    const selectOverflowPrefixCls = `${componentCls}-selection-overflow`;
    const selectItemHeight = token.multipleSelectItemHeight;
    const selectItemDist = getSelectItemStyle(token);
    const suffixCls = suffix ? `${componentCls}-${suffix}` : '';
    const multipleSelectorUnit = getMultipleSelectorUnit(token);
    return {
        [`${componentCls}-multiple${suffixCls}`]: Object.assign(Object.assign({}, genOverflowStyle(token)), {
            // ========================= Selector =========================
            [`${componentCls}-selector`]: {
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                // Multiple is little different that horizontal is follow the vertical
                paddingInline: multipleSelectorUnit.basePadding,
                paddingBlock: multipleSelectorUnit.containerPadding,
                borderRadius: token.borderRadius,
                [`${componentCls}-disabled&`]: {
                    background: token.multipleSelectorBgDisabled,
                    cursor: 'not-allowed'
                },
                '&:after': {
                    display: 'inline-block',
                    width: 0,
                    margin: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(INTERNAL_FIXED_ITEM_MARGIN)} 0`,
                    lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(selectItemHeight),
                    visibility: 'hidden',
                    content: '"\\a0"'
                }
            },
            // ======================== Selections ========================
            [`${componentCls}-selection-item`]: {
                height: multipleSelectorUnit.itemHeight,
                lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(multipleSelectorUnit.itemLineHeight)
            },
            // ========================== Wrap ===========================
            [`${componentCls}-selection-wrap`]: {
                alignSelf: 'flex-start',
                '&:after': {
                    lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(selectItemHeight),
                    marginBlock: INTERNAL_FIXED_ITEM_MARGIN
                }
            },
            // ========================== Input ==========================
            [`${componentCls}-prefix`]: {
                marginInlineStart: token.calc(token.inputPaddingHorizontalBase).sub(multipleSelectorUnit.basePadding).equal()
            },
            [`${selectOverflowPrefixCls}-item + ${selectOverflowPrefixCls}-item,
        ${componentCls}-prefix + ${componentCls}-selection-wrap
      `]: {
                [`${componentCls}-selection-search`]: {
                    marginInlineStart: 0
                },
                [`${componentCls}-selection-placeholder`]: {
                    insetInlineStart: 0
                }
            },
            // https://github.com/ant-design/ant-design/issues/44754
            // Same as `wrap:after`
            [`${selectOverflowPrefixCls}-item-suffix`]: {
                minHeight: multipleSelectorUnit.itemHeight,
                marginBlock: INTERNAL_FIXED_ITEM_MARGIN
            },
            [`${componentCls}-selection-search`]: {
                display: 'inline-flex',
                position: 'relative',
                maxWidth: '100%',
                marginInlineStart: token.calc(token.inputPaddingHorizontalBase).sub(selectItemDist).equal(),
                [`
          &-input,
          &-mirror
        `]: {
                    height: selectItemHeight,
                    fontFamily: token.fontFamily,
                    lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(selectItemHeight),
                    transition: `all ${token.motionDurationSlow}`
                },
                '&-input': {
                    width: '100%',
                    minWidth: 4.1 // fix search cursor missing
                },
                '&-mirror': {
                    position: 'absolute',
                    top: 0,
                    insetInlineStart: 0,
                    insetInlineEnd: 'auto',
                    zIndex: 999,
                    whiteSpace: 'pre',
                    // fix whitespace wrapping caused width calculation bug
                    visibility: 'hidden'
                }
            },
            // ======================= Placeholder =======================
            [`${componentCls}-selection-placeholder`]: {
                position: 'absolute',
                top: '50%',
                insetInlineStart: token.calc(token.inputPaddingHorizontalBase).sub(multipleSelectorUnit.basePadding).equal(),
                insetInlineEnd: token.inputPaddingHorizontalBase,
                transform: 'translateY(-50%)',
                transition: `all ${token.motionDurationSlow}`
            }
        })
    };
};
function genSizeStyle(token, suffix) {
    const { componentCls } = token;
    const suffixCls = suffix ? `${componentCls}-${suffix}` : '';
    const rawStyle = {
        [`${componentCls}-multiple${suffixCls}`]: {
            fontSize: token.fontSize,
            // ========================= Selector =========================
            [`${componentCls}-selector`]: {
                [`${componentCls}-show-search&`]: {
                    cursor: 'text'
                }
            },
            [`
        &${componentCls}-show-arrow ${componentCls}-selector,
        &${componentCls}-allow-clear ${componentCls}-selector
      `]: {
                paddingInlineEnd: token.calc(token.fontSizeIcon).add(token.controlPaddingHorizontal).equal()
            }
        }
    };
    return [
        genSelectionStyle(token, suffix),
        rawStyle
    ];
}
const genMultipleStyle = (token)=>{
    const { componentCls } = token;
    const smallToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        selectHeight: token.controlHeightSM,
        multipleSelectItemHeight: token.multipleItemHeightSM,
        borderRadius: token.borderRadiusSM,
        borderRadiusSM: token.borderRadiusXS
    });
    const largeToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        fontSize: token.fontSizeLG,
        selectHeight: token.controlHeightLG,
        multipleSelectItemHeight: token.multipleItemHeightLG,
        borderRadius: token.borderRadiusLG,
        borderRadiusSM: token.borderRadius
    });
    return [
        genSizeStyle(token),
        // ======================== Small ========================
        genSizeStyle(smallToken, 'sm'),
        // Padding
        {
            [`${componentCls}-multiple${componentCls}-sm`]: {
                [`${componentCls}-selection-placeholder`]: {
                    insetInline: token.calc(token.controlPaddingHorizontalSM).sub(token.lineWidth).equal()
                },
                // https://github.com/ant-design/ant-design/issues/29559
                [`${componentCls}-selection-search`]: {
                    marginInlineStart: 2 // Magic Number
                }
            }
        },
        // ======================== Large ========================
        genSizeStyle(largeToken, 'lg')
    ];
};
const __TURBOPACK__default__export__ = genMultipleStyle;
}),
"[project]/Downloads/One click/node_modules/antd/es/select/style/single.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>genSingleStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [ssr] (ecmascript) <export merge as mergeToken>");
;
;
;
function genSizeStyle(token, suffix) {
    const { componentCls, inputPaddingHorizontalBase, borderRadius } = token;
    const selectHeightWithoutBorder = token.calc(token.controlHeight).sub(token.calc(token.lineWidth).mul(2)).equal();
    const suffixCls = suffix ? `${componentCls}-${suffix}` : '';
    return {
        [`${componentCls}-single${suffixCls}`]: {
            fontSize: token.fontSize,
            height: token.controlHeight,
            // ========================= Selector =========================
            [`${componentCls}-selector`]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token, true)), {
                display: 'flex',
                borderRadius,
                flex: '1 1 auto',
                [`${componentCls}-selection-wrap:after`]: {
                    lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(selectHeightWithoutBorder)
                },
                [`${componentCls}-selection-search`]: {
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    '&-input': {
                        width: '100%',
                        WebkitAppearance: 'textfield'
                    }
                },
                [`
          ${componentCls}-selection-item,
          ${componentCls}-selection-placeholder
        `]: {
                    display: 'block',
                    padding: 0,
                    lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(selectHeightWithoutBorder),
                    transition: `all ${token.motionDurationSlow}, visibility 0s`,
                    alignSelf: 'center'
                },
                [`${componentCls}-selection-placeholder`]: {
                    transition: 'none',
                    pointerEvents: 'none'
                },
                // For common baseline align
                [[
                    '&:after',
                    /* For '' value baseline align */ `${componentCls}-selection-item:empty:after`,
                    /* For undefined value baseline align */ `${componentCls}-selection-placeholder:empty:after`
                ].join(',')]: {
                    display: 'inline-block',
                    width: 0,
                    visibility: 'hidden',
                    content: '"\\a0"'
                }
            }),
            [`
        &${componentCls}-show-arrow ${componentCls}-selection-item,
        &${componentCls}-show-arrow ${componentCls}-selection-search,
        &${componentCls}-show-arrow ${componentCls}-selection-placeholder
      `]: {
                paddingInlineEnd: token.showArrowPaddingInlineEnd
            },
            // Opacity selection if open
            [`&${componentCls}-open ${componentCls}-selection-item`]: {
                color: token.colorTextPlaceholder
            },
            // ========================== Input ==========================
            // We only change the style of non-customize input which is only support by `combobox` mode.
            // Not customize
            [`&:not(${componentCls}-customize-input)`]: {
                [`${componentCls}-selector`]: {
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(inputPaddingHorizontalBase)}`,
                    [`${componentCls}-selection-search-input`]: {
                        height: selectHeightWithoutBorder,
                        fontSize: token.fontSize
                    },
                    '&:after': {
                        lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(selectHeightWithoutBorder)
                    }
                }
            },
            [`&${componentCls}-customize-input`]: {
                [`${componentCls}-selector`]: {
                    '&:after': {
                        display: 'none'
                    },
                    [`${componentCls}-selection-search`]: {
                        position: 'static',
                        width: '100%'
                    },
                    [`${componentCls}-selection-placeholder`]: {
                        position: 'absolute',
                        insetInlineStart: 0,
                        insetInlineEnd: 0,
                        padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(inputPaddingHorizontalBase)}`,
                        '&:after': {
                            display: 'none'
                        }
                    }
                }
            }
        }
    };
}
function genSingleStyle(token) {
    const { componentCls } = token;
    const inputPaddingHorizontalSM = token.calc(token.controlPaddingHorizontalSM).sub(token.lineWidth).equal();
    return [
        genSizeStyle(token),
        // ======================== Small ========================
        // Shared
        genSizeStyle((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
            controlHeight: token.controlHeightSM,
            borderRadius: token.borderRadiusSM
        }), 'sm'),
        // padding
        {
            [`${componentCls}-single${componentCls}-sm`]: {
                [`&:not(${componentCls}-customize-input)`]: {
                    [`${componentCls}-selector`]: {
                        padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(inputPaddingHorizontalSM)}`
                    },
                    // With arrow should provides `padding-right` to show the arrow
                    [`&${componentCls}-show-arrow ${componentCls}-selection-search`]: {
                        insetInlineEnd: token.calc(inputPaddingHorizontalSM).add(token.calc(token.fontSize).mul(1.5)).equal()
                    },
                    [`
            &${componentCls}-show-arrow ${componentCls}-selection-item,
            &${componentCls}-show-arrow ${componentCls}-selection-placeholder
          `]: {
                        paddingInlineEnd: token.calc(token.fontSize).mul(1.5).equal()
                    }
                }
            }
        },
        // ======================== Large ========================
        // Shared
        genSizeStyle((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
            controlHeight: token.singleItemHeightLG,
            fontSize: token.fontSizeLG,
            borderRadius: token.borderRadiusLG
        }), 'lg')
    ];
}
}),
"[project]/Downloads/One click/node_modules/antd/es/select/style/token.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
const prepareComponentToken = (token)=>{
    const { fontSize, lineHeight, lineWidth, controlHeight, controlHeightSM, controlHeightLG, paddingXXS, controlPaddingHorizontal, zIndexPopupBase, colorText, fontWeightStrong, controlItemBgActive, controlItemBgHover, colorBgContainer, colorFillSecondary, colorBgContainerDisabled, colorTextDisabled, colorPrimaryHover, colorPrimary, controlOutline } = token;
    // Item height default use `controlHeight - 2 * paddingXXS`,
    // but some case `paddingXXS=0`.
    // Let's fallback it.
    const dblPaddingXXS = paddingXXS * 2;
    const dblLineWidth = lineWidth * 2;
    const multipleItemHeight = Math.min(controlHeight - dblPaddingXXS, controlHeight - dblLineWidth);
    const multipleItemHeightSM = Math.min(controlHeightSM - dblPaddingXXS, controlHeightSM - dblLineWidth);
    const multipleItemHeightLG = Math.min(controlHeightLG - dblPaddingXXS, controlHeightLG - dblLineWidth);
    // FIXED_ITEM_MARGIN is a hardcode calculation since calc not support rounding
    const INTERNAL_FIXED_ITEM_MARGIN = Math.floor(paddingXXS / 2);
    return {
        INTERNAL_FIXED_ITEM_MARGIN,
        zIndexPopup: zIndexPopupBase + 50,
        optionSelectedColor: colorText,
        optionSelectedFontWeight: fontWeightStrong,
        optionSelectedBg: controlItemBgActive,
        optionActiveBg: controlItemBgHover,
        optionPadding: `${(controlHeight - fontSize * lineHeight) / 2}px ${controlPaddingHorizontal}px`,
        optionFontSize: fontSize,
        optionLineHeight: lineHeight,
        optionHeight: controlHeight,
        selectorBg: colorBgContainer,
        clearBg: colorBgContainer,
        singleItemHeightLG: controlHeightLG,
        multipleItemBg: colorFillSecondary,
        multipleItemBorderColor: 'transparent',
        multipleItemHeight,
        multipleItemHeightSM,
        multipleItemHeightLG,
        multipleSelectorBgDisabled: colorBgContainerDisabled,
        multipleItemColorDisabled: colorTextDisabled,
        multipleItemBorderColorDisabled: 'transparent',
        showArrowPaddingInlineEnd: Math.ceil(token.fontSize * 1.25),
        hoverBorderColor: colorPrimaryHover,
        activeBorderColor: colorPrimary,
        activeOutlineColor: controlOutline,
        selectAffixPadding: paddingXXS
    };
};
}),
"[project]/Downloads/One click/node_modules/antd/es/select/style/variants.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [ssr] (ecmascript)");
;
// =====================================================
// ==                  Outlined                       ==
// =====================================================
const genBaseOutlinedStyle = (token, options)=>{
    const { componentCls, antCls, controlOutlineWidth } = token;
    return {
        [`&:not(${componentCls}-customize-input) ${componentCls}-selector`]: {
            border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${options.borderColor}`,
            background: token.selectorBg
        },
        [`&:not(${componentCls}-disabled):not(${componentCls}-customize-input):not(${antCls}-pagination-size-changer)`]: {
            [`&:hover ${componentCls}-selector`]: {
                borderColor: options.hoverBorderHover
            },
            [`${componentCls}-focused& ${componentCls}-selector`]: {
                borderColor: options.activeBorderColor,
                boxShadow: `0 0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(controlOutlineWidth)} ${options.activeOutlineColor}`,
                outline: 0
            },
            [`${componentCls}-prefix`]: {
                color: options.color
            }
        }
    };
};
const genOutlinedStatusStyle = (token, options)=>({
        [`&${token.componentCls}-status-${options.status}`]: Object.assign({}, genBaseOutlinedStyle(token, options))
    });
const genOutlinedStyle = (token)=>({
        '&-outlined': Object.assign(Object.assign(Object.assign(Object.assign({}, genBaseOutlinedStyle(token, {
            borderColor: token.colorBorder,
            hoverBorderHover: token.hoverBorderColor,
            activeBorderColor: token.activeBorderColor,
            activeOutlineColor: token.activeOutlineColor,
            color: token.colorText
        })), genOutlinedStatusStyle(token, {
            status: 'error',
            borderColor: token.colorError,
            hoverBorderHover: token.colorErrorHover,
            activeBorderColor: token.colorError,
            activeOutlineColor: token.colorErrorOutline,
            color: token.colorError
        })), genOutlinedStatusStyle(token, {
            status: 'warning',
            borderColor: token.colorWarning,
            hoverBorderHover: token.colorWarningHover,
            activeBorderColor: token.colorWarning,
            activeOutlineColor: token.colorWarningOutline,
            color: token.colorWarning
        })), {
            [`&${token.componentCls}-disabled`]: {
                [`&:not(${token.componentCls}-customize-input) ${token.componentCls}-selector`]: {
                    background: token.colorBgContainerDisabled,
                    color: token.colorTextDisabled
                }
            },
            [`&${token.componentCls}-multiple ${token.componentCls}-selection-item`]: {
                background: token.multipleItemBg,
                border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.multipleItemBorderColor}`
            }
        })
    });
// =====================================================
// ==                   Filled                        ==
// =====================================================
const genBaseFilledStyle = (token, options)=>{
    const { componentCls, antCls } = token;
    return {
        [`&:not(${componentCls}-customize-input) ${componentCls}-selector`]: {
            background: options.bg,
            border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} transparent`,
            color: options.color
        },
        [`&:not(${componentCls}-disabled):not(${componentCls}-customize-input):not(${antCls}-pagination-size-changer)`]: {
            [`&:hover ${componentCls}-selector`]: {
                background: options.hoverBg
            },
            [`${componentCls}-focused& ${componentCls}-selector`]: {
                background: token.selectorBg,
                borderColor: options.activeBorderColor,
                outline: 0
            }
        }
    };
};
const genFilledStatusStyle = (token, options)=>({
        [`&${token.componentCls}-status-${options.status}`]: Object.assign({}, genBaseFilledStyle(token, options))
    });
const genFilledStyle = (token)=>({
        '&-filled': Object.assign(Object.assign(Object.assign(Object.assign({}, genBaseFilledStyle(token, {
            bg: token.colorFillTertiary,
            hoverBg: token.colorFillSecondary,
            activeBorderColor: token.activeBorderColor,
            color: token.colorText
        })), genFilledStatusStyle(token, {
            status: 'error',
            bg: token.colorErrorBg,
            hoverBg: token.colorErrorBgHover,
            activeBorderColor: token.colorError,
            color: token.colorError
        })), genFilledStatusStyle(token, {
            status: 'warning',
            bg: token.colorWarningBg,
            hoverBg: token.colorWarningBgHover,
            activeBorderColor: token.colorWarning,
            color: token.colorWarning
        })), {
            [`&${token.componentCls}-disabled`]: {
                [`&:not(${token.componentCls}-customize-input) ${token.componentCls}-selector`]: {
                    borderColor: token.colorBorder,
                    background: token.colorBgContainerDisabled,
                    color: token.colorTextDisabled
                }
            },
            [`&${token.componentCls}-multiple ${token.componentCls}-selection-item`]: {
                background: token.colorBgContainer,
                border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
            }
        })
    });
// =====================================================
// ==                 Borderless                      ==
// =====================================================
const genBorderlessStyle = (token)=>({
        '&-borderless': {
            [`${token.componentCls}-selector`]: {
                background: 'transparent',
                border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} transparent`
            },
            [`&${token.componentCls}-disabled`]: {
                [`&:not(${token.componentCls}-customize-input) ${token.componentCls}-selector`]: {
                    color: token.colorTextDisabled
                }
            },
            [`&${token.componentCls}-multiple ${token.componentCls}-selection-item`]: {
                background: token.multipleItemBg,
                border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.multipleItemBorderColor}`
            },
            // Status
            [`&${token.componentCls}-status-error`]: {
                [`${token.componentCls}-prefix, ${token.componentCls}-selection-item`]: {
                    color: token.colorError
                }
            },
            [`&${token.componentCls}-status-warning`]: {
                [`${token.componentCls}-prefix, ${token.componentCls}-selection-item`]: {
                    color: token.colorWarning
                }
            }
        }
    });
// =====================================================
// ==                 Underlined                      ==
// =====================================================
const genBaseUnderlinedStyle = (token, options)=>{
    const { componentCls, antCls } = token;
    return {
        [`&:not(${componentCls}-customize-input) ${componentCls}-selector`]: {
            borderWidth: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} 0`,
            borderStyle: `${token.lineType} none`,
            borderColor: `transparent transparent ${options.borderColor} transparent`,
            background: token.selectorBg,
            borderRadius: 0
        },
        [`&:not(${componentCls}-disabled):not(${componentCls}-customize-input):not(${antCls}-pagination-size-changer)`]: {
            [`&:hover ${componentCls}-selector`]: {
                borderColor: `transparent transparent ${options.hoverBorderHover} transparent`
            },
            [`${componentCls}-focused& ${componentCls}-selector`]: {
                borderColor: `transparent transparent ${options.activeBorderColor} transparent`,
                outline: 0
            },
            [`${componentCls}-prefix`]: {
                color: options.color
            }
        }
    };
};
const genUnderlinedStatusStyle = (token, options)=>({
        [`&${token.componentCls}-status-${options.status}`]: Object.assign({}, genBaseUnderlinedStyle(token, options))
    });
const genUnderlinedStyle = (token)=>({
        '&-underlined': Object.assign(Object.assign(Object.assign(Object.assign({}, genBaseUnderlinedStyle(token, {
            borderColor: token.colorBorder,
            hoverBorderHover: token.hoverBorderColor,
            activeBorderColor: token.activeBorderColor,
            activeOutlineColor: token.activeOutlineColor,
            color: token.colorText
        })), genUnderlinedStatusStyle(token, {
            status: 'error',
            borderColor: token.colorError,
            hoverBorderHover: token.colorErrorHover,
            activeBorderColor: token.colorError,
            activeOutlineColor: token.colorErrorOutline,
            color: token.colorError
        })), genUnderlinedStatusStyle(token, {
            status: 'warning',
            borderColor: token.colorWarning,
            hoverBorderHover: token.colorWarningHover,
            activeBorderColor: token.colorWarning,
            activeOutlineColor: token.colorWarningOutline,
            color: token.colorWarning
        })), {
            [`&${token.componentCls}-disabled`]: {
                [`&:not(${token.componentCls}-customize-input) ${token.componentCls}-selector`]: {
                    color: token.colorTextDisabled
                }
            },
            [`&${token.componentCls}-multiple ${token.componentCls}-selection-item`]: {
                background: token.multipleItemBg,
                border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.multipleItemBorderColor}`
            }
        })
    });
const genVariantsStyle = (token)=>({
        [token.componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, genOutlinedStyle(token)), genFilledStyle(token)), genBorderlessStyle(token)), genUnderlinedStyle(token))
    });
const __TURBOPACK__default__export__ = genVariantsStyle;
}),
"[project]/Downloads/One click/node_modules/antd/es/select/style/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/compact-item.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [ssr] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$dropdown$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/select/style/dropdown.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$multiple$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/select/style/multiple.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$single$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/select/style/single.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$token$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/select/style/token.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$variants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/select/style/variants.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
// ============================= Selector =============================
const genSelectorStyle = (token)=>{
    const { componentCls } = token;
    return {
        position: 'relative',
        transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
        input: {
            cursor: 'pointer'
        },
        [`${componentCls}-show-search&`]: {
            cursor: 'text',
            input: {
                cursor: 'auto',
                color: 'inherit',
                height: '100%'
            }
        },
        [`${componentCls}-disabled&`]: {
            cursor: 'not-allowed',
            input: {
                cursor: 'not-allowed'
            }
        }
    };
};
// ============================== Styles ==============================
// /* Reset search input style */
const getSearchInputWithoutBorderStyle = (token)=>{
    const { componentCls } = token;
    return {
        [`${componentCls}-selection-search-input`]: {
            margin: 0,
            padding: 0,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            appearance: 'none',
            fontFamily: 'inherit',
            '&::-webkit-search-cancel-button': {
                display: 'none',
                appearance: 'none'
            }
        }
    };
};
// =============================== Base ===============================
const genBaseStyle = (token)=>{
    const { antCls, componentCls, inputPaddingHorizontalBase, iconCls } = token;
    const hoverShowClearStyle = {
        [`${componentCls}-clear`]: {
            opacity: 1,
            background: token.colorBgBase,
            borderRadius: '50%'
        }
    };
    return {
        [componentCls]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token)), {
            position: 'relative',
            display: 'inline-flex',
            cursor: 'pointer',
            [`&:not(${componentCls}-customize-input) ${componentCls}-selector`]: Object.assign(Object.assign({}, genSelectorStyle(token)), getSearchInputWithoutBorderStyle(token)),
            // ======================== Selection ========================
            [`${componentCls}-selection-item`]: Object.assign(Object.assign({
                flex: 1,
                fontWeight: 'normal',
                position: 'relative',
                userSelect: 'none'
            }, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["textEllipsis"]), {
                // https://github.com/ant-design/ant-design/issues/40421
                [`> ${antCls}-typography`]: {
                    display: 'inline'
                }
            }),
            // ======================= Placeholder =======================
            [`${componentCls}-selection-placeholder`]: Object.assign(Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["textEllipsis"]), {
                flex: 1,
                color: token.colorTextPlaceholder,
                pointerEvents: 'none'
            }),
            // ========================== Arrow ==========================
            [`${componentCls}-arrow`]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetIcon"])()), {
                position: 'absolute',
                top: '50%',
                insetInlineStart: 'auto',
                insetInlineEnd: inputPaddingHorizontalBase,
                height: token.fontSizeIcon,
                marginTop: token.calc(token.fontSizeIcon).mul(-1).div(2).equal(),
                color: token.colorTextQuaternary,
                fontSize: token.fontSizeIcon,
                lineHeight: 1,
                textAlign: 'center',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                transition: `opacity ${token.motionDurationSlow} ease`,
                [iconCls]: {
                    verticalAlign: 'top',
                    transition: `transform ${token.motionDurationSlow}`,
                    '> svg': {
                        verticalAlign: 'top'
                    },
                    [`&:not(${componentCls}-suffix)`]: {
                        pointerEvents: 'auto'
                    }
                },
                [`${componentCls}-disabled &`]: {
                    cursor: 'not-allowed'
                },
                '> *:not(:last-child)': {
                    marginInlineEnd: 8 // FIXME: magic
                }
            }),
            // ========================== Wrap ===========================
            [`${componentCls}-selection-wrap`]: {
                display: 'flex',
                width: '100%',
                position: 'relative',
                minWidth: 0,
                // https://github.com/ant-design/ant-design/issues/51669
                '&:after': {
                    content: '"\\a0"',
                    width: 0,
                    overflow: 'hidden'
                }
            },
            // ========================= Prefix ==========================
            [`${componentCls}-prefix`]: {
                flex: 'none',
                marginInlineEnd: token.selectAffixPadding
            },
            // ========================== Clear ==========================
            [`${componentCls}-clear`]: {
                position: 'absolute',
                top: '50%',
                insetInlineStart: 'auto',
                insetInlineEnd: inputPaddingHorizontalBase,
                zIndex: 1,
                display: 'inline-block',
                width: token.fontSizeIcon,
                height: token.fontSizeIcon,
                marginTop: token.calc(token.fontSizeIcon).mul(-1).div(2).equal(),
                color: token.colorTextQuaternary,
                fontSize: token.fontSizeIcon,
                fontStyle: 'normal',
                lineHeight: 1,
                textAlign: 'center',
                textTransform: 'none',
                cursor: 'pointer',
                opacity: 0,
                transition: `color ${token.motionDurationMid} ease, opacity ${token.motionDurationSlow} ease`,
                textRendering: 'auto',
                // https://github.com/ant-design/ant-design/issues/54205
                // Force GPU compositing on Safari to prevent flickering on opacity/transform transitions
                transform: 'translateZ(0)',
                '&:before': {
                    display: 'block'
                },
                '&:hover': {
                    color: token.colorIcon
                }
            },
            '@media(hover:none)': hoverShowClearStyle,
            '&:hover': hoverShowClearStyle
        }),
        // ========================= Feedback ==========================
        [`${componentCls}-status`]: {
            '&-error, &-warning, &-success, &-validating': {
                [`&${componentCls}-has-feedback`]: {
                    [`${componentCls}-clear`]: {
                        insetInlineEnd: token.calc(inputPaddingHorizontalBase).add(token.fontSize).add(token.paddingXS).equal()
                    }
                }
            }
        }
    };
};
// ============================== Styles ==============================
const genSelectStyle = (token)=>{
    const { componentCls } = token;
    return [
        {
            [componentCls]: {
                // ==================== In Form ====================
                [`&${componentCls}-in-form-item`]: {
                    width: '100%'
                }
            }
        },
        // =====================================================
        // ==                       LTR                       ==
        // =====================================================
        // Base
        genBaseStyle(token),
        // Single
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$single$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(token),
        // Multiple
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$multiple$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(token),
        // Dropdown
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$dropdown$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(token),
        // =====================================================
        // ==                       RTL                       ==
        // =====================================================
        {
            [`${componentCls}-rtl`]: {
                direction: 'rtl'
            }
        },
        // =====================================================
        // ==             Space Compact                       ==
        // =====================================================
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genCompactItemStyle"])(token, {
            borderElCls: `${componentCls}-selector`,
            focusElCls: `${componentCls}-focused`
        })
    ];
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])('Select', (token, { rootPrefixCls })=>{
    const selectToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        rootPrefixCls,
        inputPaddingHorizontalBase: token.calc(token.paddingSM).sub(1).equal(),
        multipleSelectItemHeight: token.multipleItemHeight,
        selectHeight: token.controlHeight
    });
    return [
        genSelectStyle(selectToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$variants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(selectToken)
    ];
}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$token$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["prepareComponentToken"], {
    unitless: {
        optionLineHeight: true,
        optionSelectedFontWeight: true
    }
});
}),
"[project]/Downloads/One click/node_modules/antd/es/select/useIcons.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useIcons
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/CheckOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DownOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/DownOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SearchOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/SearchOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function useIcons({ suffixIcon, clearIcon, menuItemSelectedIcon, removeIcon, loading, multiple, hasFeedback, prefixCls, showSuffixIcon, feedbackIcon, showArrow, componentName }) {
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])(componentName);
        warning.deprecated(!clearIcon, 'clearIcon', 'allowClear={{ clearIcon: React.ReactNode }}');
    }
    // Clear Icon
    const mergedClearIcon = clearIcon !== null && clearIcon !== void 0 ? clearIcon : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null);
    // Validation Feedback Icon
    const getSuffixIconNode = (arrowIcon)=>{
        if (suffixIcon === null && !hasFeedback && !showArrow) {
            return null;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Fragment"], null, showSuffixIcon !== false && arrowIcon, hasFeedback && feedbackIcon);
    };
    // Arrow item icon
    let mergedSuffixIcon = null;
    if (suffixIcon !== undefined) {
        mergedSuffixIcon = getSuffixIconNode(suffixIcon);
    } else if (loading) {
        mergedSuffixIcon = getSuffixIconNode(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            spin: true
        }));
    } else {
        const iconCls = `${prefixCls}-suffix`;
        mergedSuffixIcon = ({ open, showSearch })=>{
            if (open && showSearch) {
                return getSuffixIconNode(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SearchOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: iconCls
                }));
            }
            return getSuffixIconNode(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DownOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: iconCls
            }));
        };
    }
    // Checked item icon
    let mergedItemIcon = null;
    if (menuItemSelectedIcon !== undefined) {
        mergedItemIcon = menuItemSelectedIcon;
    } else if (multiple) {
        mergedItemIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null);
    } else {
        mergedItemIcon = null;
    }
    let mergedRemoveIcon = null;
    if (removeIcon !== undefined) {
        mergedRemoveIcon = removeIcon;
    } else {
        mergedRemoveIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null);
    }
    return {
        clearIcon: mergedClearIcon,
        suffixIcon: mergedSuffixIcon,
        itemIcon: mergedItemIcon,
        removeIcon: mergedRemoveIcon
    };
}
}),
"[project]/Downloads/One click/node_modules/antd/es/select/usePopupRender.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/ContextIsolator.js [ssr] (ecmascript)");
"use client";
;
;
function usePopupRender(renderFn) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useMemo(()=>{
        if (!renderFn) {
            return undefined;
        }
        return (...args)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                space: true
            }, renderFn.apply(void 0, args));
    }, [
        renderFn
    ]);
}
const __TURBOPACK__default__export__ = usePopupRender;
}),
"[project]/Downloads/One click/node_modules/antd/es/select/useShowArrow.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Since Select, TreeSelect, Cascader is same Select like component.
 * We just use same hook to handle this logic.
 *
 * If `suffixIcon` is not equal to `null`, always show it.
 */ __turbopack_context__.s([
    "default",
    ()=>useShowArrow
]);
function useShowArrow(suffixIcon, showArrow) {
    return showArrow !== undefined ? showArrow : suffixIcon !== null;
}
}),
"[project]/Downloads/One click/node_modules/antd/es/select/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// TODO: 4.0 - codemod should help to change `filterOption` to support node props.
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$select$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-select/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$select$2f$es$2f$OptGroup$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__OptGroup$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-select/es/OptGroup.js [ssr] (ecmascript) <export default as OptGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$select$2f$es$2f$Option$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Option$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-select/es/Option.js [ssr] (ecmascript) <export default as Option>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/omit.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/hooks/useZIndex.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/motion.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$PurePanel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/PurePanel.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/statusUtils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$defaultRenderEmpty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/defaultRenderEmpty.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/DisabledContext.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useSize.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/form/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/form/hooks/useVariants.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/space/Compact.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/useToken.js [ssr] (ecmascript) <export default as useToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$mergedBuiltinPlacements$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/select/mergedBuiltinPlacements.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/select/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$useIcons$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/select/useIcons.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$usePopupRender$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/select/usePopupRender.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$useShowArrow$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/select/useShowArrow.js [ssr] (ecmascript)");
"use client";
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
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
;
;
;
;
;
const SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
const InternalSelect = (props, ref)=>{
    var _a, _b, _c, _d, _e;
    const { prefixCls: customizePrefixCls, bordered, className, rootClassName, getPopupContainer, popupClassName, dropdownClassName, listHeight = 256, placement, listItemHeight: customListItemHeight, size: customizeSize, disabled: customDisabled, notFoundContent, status: customStatus, builtinPlacements, dropdownMatchSelectWidth, popupMatchSelectWidth, direction: propDirection, style, allowClear, variant: customizeVariant, dropdownStyle, transitionName, tagRender, maxCount, prefix, dropdownRender, popupRender, onDropdownVisibleChange, onOpenChange, styles, classNames } = props, rest = __rest(props, [
        "prefixCls",
        "bordered",
        "className",
        "rootClassName",
        "getPopupContainer",
        "popupClassName",
        "dropdownClassName",
        "listHeight",
        "placement",
        "listItemHeight",
        "size",
        "disabled",
        "notFoundContent",
        "status",
        "builtinPlacements",
        "dropdownMatchSelectWidth",
        "popupMatchSelectWidth",
        "direction",
        "style",
        "allowClear",
        "variant",
        "dropdownStyle",
        "transitionName",
        "tagRender",
        "maxCount",
        "prefix",
        "dropdownRender",
        "popupRender",
        "onDropdownVisibleChange",
        "onOpenChange",
        "styles",
        "classNames"
    ]);
    const { getPopupContainer: getContextPopupContainer, getPrefixCls, renderEmpty, direction: contextDirection, virtual, popupMatchSelectWidth: contextPopupMatchSelectWidth, popupOverflow } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { showSearch, style: contextStyle, styles: contextStyles, className: contextClassName, classNames: contextClassNames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useComponentConfig"])('select');
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const listItemHeight = customListItemHeight !== null && customListItemHeight !== void 0 ? customListItemHeight : token === null || token === void 0 ? void 0 : token.controlHeight;
    const prefixCls = getPrefixCls('select', customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    const direction = propDirection !== null && propDirection !== void 0 ? propDirection : contextDirection;
    const { compactSize, compactItemClassnames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useCompactItemContext"])(prefixCls, direction);
    const [variant, enableVariantCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])('select', customizeVariant, bordered);
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const mode = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](()=>{
        const { mode: m } = props;
        if (m === 'combobox') {
            return undefined;
        }
        if (m === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
            return 'combobox';
        }
        return m;
    }, [
        props.mode
    ]);
    const isMultiple = mode === 'multiple' || mode === 'tags';
    const showSuffixIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$useShowArrow$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(props.suffixIcon, props.showArrow);
    const mergedPopupMatchSelectWidth = (_a = popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth) !== null && _a !== void 0 ? _a : contextPopupMatchSelectWidth;
    const mergedPopupStyle = ((_b = styles === null || styles === void 0 ? void 0 : styles.popup) === null || _b === void 0 ? void 0 : _b.root) || ((_c = contextStyles.popup) === null || _c === void 0 ? void 0 : _c.root) || dropdownStyle;
    const mergedPopupRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$usePopupRender$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(popupRender || dropdownRender);
    const mergedOnOpenChange = onOpenChange || onDropdownVisibleChange;
    // ===================== Form Status =====================
    const { status: contextStatus, hasFeedback, isFormItemInput, feedbackIcon } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FormItemInputContext"]);
    const mergedStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getMergedStatus"])(contextStatus, customStatus);
    // ===================== Empty =====================
    let mergedNotFound;
    if (notFoundContent !== undefined) {
        mergedNotFound = notFoundContent;
    } else if (mode === 'combobox') {
        mergedNotFound = null;
    } else {
        mergedNotFound = (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty('Select')) || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$defaultRenderEmpty$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            componentName: "Select"
        });
    }
    // ===================== Icons =====================
    const { suffixIcon, itemIcon, removeIcon, clearIcon } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$useIcons$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(Object.assign(Object.assign({}, rest), {
        multiple: isMultiple,
        hasFeedback,
        feedbackIcon,
        showSuffixIcon,
        prefixCls,
        componentName: 'Select'
    }));
    const mergedAllowClear = allowClear === true ? {
        clearIcon
    } : allowClear;
    const selectProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(rest, [
        'suffixIcon',
        'itemIcon'
    ]);
    const mergedPopupClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(((_d = classNames === null || classNames === void 0 ? void 0 : classNames.popup) === null || _d === void 0 ? void 0 : _d.root) || ((_e = contextClassNames === null || contextClassNames === void 0 ? void 0 : contextClassNames.popup) === null || _e === void 0 ? void 0 : _e.root) || popupClassName || dropdownClassName, {
        [`${prefixCls}-dropdown-${direction}`]: direction === 'rtl'
    }, rootClassName, contextClassNames.root, classNames === null || classNames === void 0 ? void 0 : classNames.root, cssVarCls, rootCls, hashId);
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((ctx)=>{
        var _a;
        return (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : ctx;
    });
    // ===================== Disabled =====================
    const disabled = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    const mergedClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        [`${prefixCls}-lg`]: mergedSize === 'large',
        [`${prefixCls}-sm`]: mergedSize === 'small',
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-${variant}`]: enableVariantCls,
        [`${prefixCls}-in-form-item`]: isFormItemInput
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getStatusClassNames"])(prefixCls, mergedStatus, hasFeedback), compactItemClassnames, contextClassName, className, contextClassNames.root, classNames === null || classNames === void 0 ? void 0 : classNames.root, rootClassName, cssVarCls, rootCls, hashId);
    // ===================== Placement =====================
    const memoPlacement = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](()=>{
        if (placement !== undefined) {
            return placement;
        }
        return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
    }, [
        placement,
        direction
    ]);
    // ====================== Warning ======================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])('Select');
        const deprecatedProps = {
            dropdownMatchSelectWidth: 'popupMatchSelectWidth',
            dropdownStyle: 'styles.popup.root',
            dropdownClassName: 'classNames.popup.root',
            popupClassName: 'classNames.popup.root',
            dropdownRender: 'popupRender',
            onDropdownVisibleChange: 'onOpenChange',
            bordered: 'variant'
        };
        Object.entries(deprecatedProps).forEach(([oldProp, newProp])=>{
            warning.deprecated(!(oldProp in props), oldProp, newProp);
        });
        ("TURBOPACK compile-time truthy", 1) ? warning(!('showArrow' in props), 'deprecated', '`showArrow` is deprecated which will be removed in next major version. It will be a default behavior, you can hide it by setting `suffixIcon` to null.') : "TURBOPACK unreachable";
        ("TURBOPACK compile-time truthy", 1) ? warning(!(typeof maxCount !== 'undefined' && !isMultiple), 'usage', '`maxCount` only works with mode `multiple` or `tags`') : "TURBOPACK unreachable";
    }
    // ====================== zIndex =========================
    const [zIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useZIndex"])('SelectLike', mergedPopupStyle === null || mergedPopupStyle === void 0 ? void 0 : mergedPopupStyle.zIndex);
    // ====================== Render =======================
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$select$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], Object.assign({
        ref: ref,
        virtual: virtual,
        showSearch: showSearch
    }, selectProps, {
        style: Object.assign(Object.assign(Object.assign(Object.assign({}, contextStyles.root), styles === null || styles === void 0 ? void 0 : styles.root), contextStyle), style),
        dropdownMatchSelectWidth: mergedPopupMatchSelectWidth,
        transitionName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getTransitionName"])(rootPrefixCls, 'slide-up', transitionName),
        builtinPlacements: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$mergedBuiltinPlacements$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(builtinPlacements, popupOverflow),
        listHeight: listHeight,
        listItemHeight: listItemHeight,
        mode: mode,
        prefixCls: prefixCls,
        placement: memoPlacement,
        direction: direction,
        prefix: prefix,
        suffixIcon: suffixIcon,
        menuItemSelectedIcon: itemIcon,
        removeIcon: removeIcon,
        allowClear: mergedAllowClear,
        notFoundContent: mergedNotFound,
        className: mergedClassName,
        getPopupContainer: getPopupContainer || getContextPopupContainer,
        dropdownClassName: mergedPopupClassName,
        disabled: mergedDisabled,
        dropdownStyle: Object.assign(Object.assign({}, mergedPopupStyle), {
            zIndex
        }),
        maxCount: isMultiple ? maxCount : undefined,
        tagRender: isMultiple ? tagRender : undefined,
        dropdownRender: mergedPopupRender,
        onDropdownVisibleChange: mergedOnOpenChange
    })));
};
if ("TURBOPACK compile-time truthy", 1) {
    InternalSelect.displayName = 'Select';
}
const Select = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](InternalSelect);
// We don't care debug panel
/* istanbul ignore next */ const PurePanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$PurePanel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(Select, 'dropdownAlign');
Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
Select.Option = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$select$2f$es$2f$Option$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Option$3e$__["Option"];
Select.OptGroup = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$select$2f$es$2f$OptGroup$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__OptGroup$3e$__["OptGroup"];
Select._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
if ("TURBOPACK compile-time truthy", 1) {
    Select.displayName = 'Select';
}
const __TURBOPACK__default__export__ = Select;
}),
"[project]/Downloads/One click/node_modules/antd/es/pagination/style/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken,
    "prepareToken",
    ()=>prepareToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/input/style/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/input/style/token.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$variants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/input/style/variants.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [ssr] (ecmascript) <export merge as mergeToken>");
;
;
;
;
;
const genPaginationDisabledStyle = (token)=>{
    const { componentCls } = token;
    return {
        [`${componentCls}-disabled`]: {
            '&, &:hover': {
                cursor: 'not-allowed',
                [`${componentCls}-item-link`]: {
                    color: token.colorTextDisabled,
                    cursor: 'not-allowed'
                }
            },
            '&:focus-visible': {
                cursor: 'not-allowed',
                [`${componentCls}-item-link`]: {
                    color: token.colorTextDisabled,
                    cursor: 'not-allowed'
                }
            }
        },
        [`&${componentCls}-disabled`]: {
            cursor: 'not-allowed',
            [`${componentCls}-item`]: {
                cursor: 'not-allowed',
                backgroundColor: 'transparent',
                '&:hover, &:active': {
                    backgroundColor: 'transparent'
                },
                a: {
                    color: token.colorTextDisabled,
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'not-allowed'
                },
                '&-active': {
                    borderColor: token.colorBorder,
                    backgroundColor: token.itemActiveBgDisabled,
                    '&:hover, &:active': {
                        backgroundColor: token.itemActiveBgDisabled
                    },
                    a: {
                        color: token.itemActiveColorDisabled
                    }
                }
            },
            [`${componentCls}-item-link`]: {
                color: token.colorTextDisabled,
                cursor: 'not-allowed',
                '&:hover, &:active': {
                    backgroundColor: 'transparent'
                },
                [`${componentCls}-simple&`]: {
                    backgroundColor: 'transparent',
                    '&:hover, &:active': {
                        backgroundColor: 'transparent'
                    }
                }
            },
            [`${componentCls}-simple-pager`]: {
                color: token.colorTextDisabled
            },
            [`${componentCls}-jump-prev, ${componentCls}-jump-next`]: {
                [`${componentCls}-item-link-icon`]: {
                    opacity: 0
                },
                [`${componentCls}-item-ellipsis`]: {
                    opacity: 1
                }
            }
        }
    };
};
const genPaginationMiniStyle = (token)=>{
    const { componentCls } = token;
    return {
        [`&${componentCls}-mini ${componentCls}-total-text, &${componentCls}-mini ${componentCls}-simple-pager`]: {
            height: token.itemSizeSM,
            lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.itemSizeSM)
        },
        [`&${componentCls}-mini ${componentCls}-item`]: {
            minWidth: token.itemSizeSM,
            height: token.itemSizeSM,
            margin: 0,
            lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.calc(token.itemSizeSM).sub(2).equal())
        },
        [`&${componentCls}-mini ${componentCls}-prev, &${componentCls}-mini ${componentCls}-next`]: {
            minWidth: token.itemSizeSM,
            height: token.itemSizeSM,
            margin: 0,
            lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.itemSizeSM)
        },
        [`&${componentCls}-mini:not(${componentCls}-disabled)`]: {
            [`${componentCls}-prev, ${componentCls}-next`]: {
                [`&:hover ${componentCls}-item-link`]: {
                    backgroundColor: token.colorBgTextHover
                },
                [`&:active ${componentCls}-item-link`]: {
                    backgroundColor: token.colorBgTextActive
                },
                [`&${componentCls}-disabled:hover ${componentCls}-item-link`]: {
                    backgroundColor: 'transparent'
                }
            }
        },
        [`
    &${componentCls}-mini ${componentCls}-prev ${componentCls}-item-link,
    &${componentCls}-mini ${componentCls}-next ${componentCls}-item-link
    `]: {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            '&::after': {
                height: token.itemSizeSM,
                lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.itemSizeSM)
            }
        },
        [`&${componentCls}-mini ${componentCls}-jump-prev, &${componentCls}-mini ${componentCls}-jump-next`]: {
            height: token.itemSizeSM,
            marginInlineEnd: 0,
            lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.itemSizeSM)
        },
        [`&${componentCls}-mini ${componentCls}-options`]: {
            marginInlineStart: token.paginationMiniOptionsMarginInlineStart,
            '&-size-changer': {
                top: token.miniOptionsSizeChangerTop
            },
            '&-quick-jumper': {
                height: token.itemSizeSM,
                lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.itemSizeSM),
                input: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["genInputSmallStyle"])(token)), {
                    width: token.paginationMiniQuickJumperInputWidth,
                    height: token.controlHeightSM
                })
            }
        }
    };
};
const genPaginationSimpleStyle = (token)=>{
    const { componentCls } = token;
    return {
        [`&${componentCls}-simple`]: {
            [`${componentCls}-prev, ${componentCls}-next`]: {
                height: token.itemSize,
                lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.itemSize),
                verticalAlign: 'top',
                [`${componentCls}-item-link`]: {
                    height: token.itemSize,
                    backgroundColor: 'transparent',
                    border: 0,
                    '&:hover': {
                        backgroundColor: token.colorBgTextHover
                    },
                    '&:active': {
                        backgroundColor: token.colorBgTextActive
                    },
                    '&::after': {
                        height: token.itemSize,
                        lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.itemSize)
                    }
                }
            },
            [`${componentCls}-simple-pager`]: {
                display: 'inline-flex',
                alignItems: 'center',
                height: token.itemSize,
                marginInlineEnd: token.marginXS,
                input: {
                    boxSizing: 'border-box',
                    height: '100%',
                    width: token.quickJumperInputWidth,
                    padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.paginationItemPaddingInline)}`,
                    textAlign: 'center',
                    backgroundColor: token.itemInputBg,
                    border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
                    borderRadius: token.borderRadius,
                    outline: 'none',
                    transition: `border-color ${token.motionDurationMid}`,
                    color: 'inherit',
                    '&:hover': {
                        borderColor: token.colorPrimary
                    },
                    '&:focus': {
                        borderColor: token.colorPrimaryHover,
                        boxShadow: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.inputOutlineOffset)} 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.controlOutlineWidth)} ${token.controlOutline}`
                    },
                    '&[disabled]': {
                        color: token.colorTextDisabled,
                        backgroundColor: token.colorBgContainerDisabled,
                        borderColor: token.colorBorder,
                        cursor: 'not-allowed'
                    }
                }
            },
            [`&${componentCls}-disabled`]: {
                [`${componentCls}-prev, ${componentCls}-next`]: {
                    [`${componentCls}-item-link`]: {
                        '&:hover, &:active': {
                            backgroundColor: 'transparent'
                        }
                    }
                }
            },
            [`&${componentCls}-mini`]: {
                [`${componentCls}-prev, ${componentCls}-next`]: {
                    height: token.itemSizeSM,
                    lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.itemSizeSM),
                    [`${componentCls}-item-link`]: {
                        height: token.itemSizeSM,
                        '&::after': {
                            height: token.itemSizeSM,
                            lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.itemSizeSM)
                        }
                    }
                },
                [`${componentCls}-simple-pager`]: {
                    height: token.itemSizeSM,
                    input: {
                        width: token.paginationMiniQuickJumperInputWidth
                    }
                }
            }
        }
    };
};
const genPaginationJumpStyle = (token)=>{
    const { componentCls } = token;
    return {
        [`${componentCls}-jump-prev, ${componentCls}-jump-next`]: {
            outline: 0,
            [`${componentCls}-item-container`]: {
                position: 'relative',
                [`${componentCls}-item-link-icon`]: {
                    color: token.colorPrimary,
                    fontSize: token.fontSizeSM,
                    opacity: 0,
                    transition: `all ${token.motionDurationMid}`,
                    '&-svg': {
                        top: 0,
                        insetInlineEnd: 0,
                        bottom: 0,
                        insetInlineStart: 0,
                        margin: 'auto'
                    }
                },
                [`${componentCls}-item-ellipsis`]: {
                    position: 'absolute',
                    top: 0,
                    insetInlineEnd: 0,
                    bottom: 0,
                    insetInlineStart: 0,
                    display: 'block',
                    margin: 'auto',
                    color: token.colorTextDisabled,
                    letterSpacing: token.paginationEllipsisLetterSpacing,
                    textAlign: 'center',
                    textIndent: token.paginationEllipsisTextIndent,
                    opacity: 1,
                    transition: `all ${token.motionDurationMid}`
                }
            },
            '&:hover': {
                [`${componentCls}-item-link-icon`]: {
                    opacity: 1
                },
                [`${componentCls}-item-ellipsis`]: {
                    opacity: 0
                }
            }
        },
        [`
    ${componentCls}-prev,
    ${componentCls}-jump-prev,
    ${componentCls}-jump-next
    `]: {
            marginInlineEnd: token.marginXS
        },
        [`
    ${componentCls}-prev,
    ${componentCls}-next,
    ${componentCls}-jump-prev,
    ${componentCls}-jump-next
    `]: {
            display: 'inline-block',
            minWidth: token.itemSize,
            height: token.itemSize,
            color: token.colorText,
            fontFamily: token.fontFamily,
            lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.itemSize),
            textAlign: 'center',
            verticalAlign: 'middle',
            listStyle: 'none',
            borderRadius: token.borderRadius,
            cursor: 'pointer',
            transition: `all ${token.motionDurationMid}`
        },
        [`${componentCls}-prev, ${componentCls}-next`]: {
            outline: 0,
            button: {
                color: token.colorText,
                cursor: 'pointer',
                userSelect: 'none'
            },
            [`${componentCls}-item-link`]: {
                display: 'block',
                width: '100%',
                height: '100%',
                padding: 0,
                fontSize: token.fontSizeSM,
                textAlign: 'center',
                backgroundColor: 'transparent',
                border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} transparent`,
                borderRadius: token.borderRadius,
                outline: 'none',
                transition: `all ${token.motionDurationMid}`
            },
            [`&:hover ${componentCls}-item-link`]: {
                backgroundColor: token.colorBgTextHover
            },
            [`&:active ${componentCls}-item-link`]: {
                backgroundColor: token.colorBgTextActive
            },
            [`&${componentCls}-disabled:hover`]: {
                [`${componentCls}-item-link`]: {
                    backgroundColor: 'transparent'
                }
            }
        },
        [`${componentCls}-slash`]: {
            marginInlineEnd: token.paginationSlashMarginInlineEnd,
            marginInlineStart: token.paginationSlashMarginInlineStart
        },
        [`${componentCls}-options`]: {
            display: 'inline-block',
            marginInlineStart: token.margin,
            verticalAlign: 'middle',
            '&-size-changer': {
                display: 'inline-block',
                width: 'auto'
            },
            '&-quick-jumper': {
                display: 'inline-block',
                height: token.controlHeight,
                marginInlineStart: token.marginXS,
                lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.controlHeight),
                verticalAlign: 'top',
                input: Object.assign(Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["genBasicInputStyle"])(token)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$variants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genBaseOutlinedStyle"])(token, {
                    borderColor: token.colorBorder,
                    hoverBorderColor: token.colorPrimaryHover,
                    activeBorderColor: token.colorPrimary,
                    activeShadow: token.activeShadow
                })), {
                    '&[disabled]': Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$variants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genDisabledStyle"])(token)),
                    width: token.quickJumperInputWidth,
                    height: token.controlHeight,
                    boxSizing: 'border-box',
                    margin: 0,
                    marginInlineStart: token.marginXS,
                    marginInlineEnd: token.marginXS
                })
            }
        }
    };
};
const genPaginationItemStyle = (token)=>{
    const { componentCls } = token;
    return {
        [`${componentCls}-item`]: {
            display: 'inline-block',
            minWidth: token.itemSize,
            height: token.itemSize,
            marginInlineEnd: token.marginXS,
            fontFamily: token.fontFamily,
            lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.calc(token.itemSize).sub(2).equal()),
            textAlign: 'center',
            verticalAlign: 'middle',
            listStyle: 'none',
            backgroundColor: token.itemBg,
            border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} transparent`,
            borderRadius: token.borderRadius,
            outline: 0,
            cursor: 'pointer',
            userSelect: 'none',
            a: {
                display: 'block',
                padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.paginationItemPaddingInline)}`,
                color: token.colorText,
                '&:hover': {
                    textDecoration: 'none'
                }
            },
            [`&:not(${componentCls}-item-active)`]: {
                '&:hover': {
                    transition: `all ${token.motionDurationMid}`,
                    backgroundColor: token.colorBgTextHover
                },
                '&:active': {
                    backgroundColor: token.colorBgTextActive
                }
            },
            '&-active': {
                fontWeight: token.fontWeightStrong,
                backgroundColor: token.itemActiveBg,
                borderColor: token.colorPrimary,
                a: {
                    color: token.itemActiveColor
                },
                '&:hover': {
                    borderColor: token.colorPrimaryHover
                },
                '&:hover a': {
                    color: token.itemActiveColorHover
                }
            }
        }
    };
};
const genPaginationStyle = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token)), {
            display: 'flex',
            flexWrap: 'wrap',
            rowGap: token.paddingXS,
            '&-start': {
                justifyContent: 'start'
            },
            '&-center': {
                justifyContent: 'center'
            },
            '&-end': {
                justifyContent: 'end'
            },
            'ul, ol': {
                margin: 0,
                padding: 0,
                listStyle: 'none'
            },
            '&::after': {
                display: 'block',
                clear: 'both',
                height: 0,
                overflow: 'hidden',
                visibility: 'hidden',
                content: '""'
            },
            [`${componentCls}-total-text`]: {
                display: 'inline-block',
                height: token.itemSize,
                marginInlineEnd: token.marginXS,
                lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.calc(token.itemSize).sub(2).equal()),
                verticalAlign: 'middle'
            }
        }), genPaginationItemStyle(token)), genPaginationJumpStyle(token)), genPaginationSimpleStyle(token)), genPaginationMiniStyle(token)), genPaginationDisabledStyle(token)), {
            // media query style
            [`@media only screen and (max-width: ${token.screenLG}px)`]: {
                [`${componentCls}-item`]: {
                    '&-after-jump-prev, &-before-jump-next': {
                        display: 'none'
                    }
                }
            },
            [`@media only screen and (max-width: ${token.screenSM}px)`]: {
                [`${componentCls}-options`]: {
                    display: 'none'
                }
            }
        }),
        // rtl style
        [`&${token.componentCls}-rtl`]: {
            direction: 'rtl'
        }
    };
};
const genPaginationFocusStyle = (token)=>{
    const { componentCls } = token;
    return {
        [`${componentCls}:not(${componentCls}-disabled)`]: {
            [`${componentCls}-item`]: Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genFocusStyle"])(token)),
            [`${componentCls}-jump-prev, ${componentCls}-jump-next`]: {
                '&:focus-visible': Object.assign({
                    [`${componentCls}-item-link-icon`]: {
                        opacity: 1
                    },
                    [`${componentCls}-item-ellipsis`]: {
                        opacity: 0
                    }
                }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genFocusOutline"])(token))
            },
            [`${componentCls}-prev, ${componentCls}-next`]: {
                [`&:focus-visible ${componentCls}-item-link`]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genFocusOutline"])(token)
            }
        }
    };
};
const prepareComponentToken = (token)=>Object.assign({
        itemBg: token.colorBgContainer,
        itemSize: token.controlHeight,
        itemSizeSM: token.controlHeightSM,
        itemActiveBg: token.colorBgContainer,
        itemActiveColor: token.colorPrimary,
        itemActiveColorHover: token.colorPrimaryHover,
        itemLinkBg: token.colorBgContainer,
        itemActiveColorDisabled: token.colorTextDisabled,
        itemActiveBgDisabled: token.controlItemBgActiveDisabled,
        itemInputBg: token.colorBgContainer,
        miniOptionsSizeChangerTop: 0
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["initComponentToken"])(token));
const prepareToken = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        inputOutlineOffset: 0,
        quickJumperInputWidth: token.calc(token.controlHeightLG).mul(1.25).equal(),
        paginationMiniOptionsMarginInlineStart: token.calc(token.marginXXS).div(2).equal(),
        paginationMiniQuickJumperInputWidth: token.calc(token.controlHeightLG).mul(1.1).equal(),
        paginationItemPaddingInline: token.calc(token.marginXXS).mul(1.5).equal(),
        paginationEllipsisLetterSpacing: token.calc(token.marginXXS).div(2).equal(),
        paginationSlashMarginInlineStart: token.marginSM,
        paginationSlashMarginInlineEnd: token.marginSM,
        paginationEllipsisTextIndent: '0.13em' // magic for ui experience
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["initInputToken"])(token));
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])('Pagination', (token)=>{
    const paginationToken = prepareToken(token);
    return [
        genPaginationStyle(paginationToken),
        genPaginationFocusStyle(paginationToken)
    ];
}, prepareComponentToken);
}),
"[project]/Downloads/One click/node_modules/antd/es/pagination/style/bordered.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$pagination$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/pagination/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [ssr] (ecmascript)");
;
;
;
const genBorderedStyle = (token)=>{
    const { componentCls } = token;
    return {
        [`${componentCls}${componentCls}-bordered${componentCls}-disabled:not(${componentCls}-mini)`]: {
            '&, &:hover': {
                [`${componentCls}-item-link`]: {
                    borderColor: token.colorBorder
                }
            },
            '&:focus-visible': {
                [`${componentCls}-item-link`]: {
                    borderColor: token.colorBorder
                }
            },
            [`${componentCls}-item, ${componentCls}-item-link`]: {
                backgroundColor: token.colorBgContainerDisabled,
                borderColor: token.colorBorder,
                [`&:hover:not(${componentCls}-item-active)`]: {
                    backgroundColor: token.colorBgContainerDisabled,
                    borderColor: token.colorBorder,
                    a: {
                        color: token.colorTextDisabled
                    }
                },
                [`&${componentCls}-item-active`]: {
                    backgroundColor: token.itemActiveBgDisabled
                }
            },
            [`${componentCls}-prev, ${componentCls}-next`]: {
                '&:hover button': {
                    backgroundColor: token.colorBgContainerDisabled,
                    borderColor: token.colorBorder,
                    color: token.colorTextDisabled
                },
                [`${componentCls}-item-link`]: {
                    backgroundColor: token.colorBgContainerDisabled,
                    borderColor: token.colorBorder
                }
            }
        },
        [`${componentCls}${componentCls}-bordered:not(${componentCls}-mini)`]: {
            [`${componentCls}-prev, ${componentCls}-next`]: {
                '&:hover button': {
                    borderColor: token.colorPrimaryHover,
                    backgroundColor: token.itemBg
                },
                [`${componentCls}-item-link`]: {
                    backgroundColor: token.itemLinkBg,
                    borderColor: token.colorBorder
                },
                [`&:hover ${componentCls}-item-link`]: {
                    borderColor: token.colorPrimary,
                    backgroundColor: token.itemBg,
                    color: token.colorPrimary
                },
                [`&${componentCls}-disabled`]: {
                    [`${componentCls}-item-link`]: {
                        borderColor: token.colorBorder,
                        color: token.colorTextDisabled
                    }
                }
            },
            [`${componentCls}-item`]: {
                backgroundColor: token.itemBg,
                border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
                [`&:hover:not(${componentCls}-item-active)`]: {
                    borderColor: token.colorPrimary,
                    backgroundColor: token.itemBg,
                    a: {
                        color: token.colorPrimary
                    }
                },
                '&-active': {
                    borderColor: token.colorPrimary
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genSubStyleComponent"])([
    'Pagination',
    'bordered'
], (token)=>{
    const paginationToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$pagination$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["prepareToken"])(token);
    return genBorderedStyle(paginationToken);
}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$pagination$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["prepareComponentToken"]);
}),
"[project]/Downloads/One click/node_modules/antd/es/pagination/useShowSizeChanger.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useShowSizeChanger
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
function useShowSizeChanger(showSizeChanger) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (typeof showSizeChanger === 'boolean') {
            return [
                showSizeChanger,
                {}
            ];
        }
        if (showSizeChanger && typeof showSizeChanger === 'object') {
            return [
                true,
                showSizeChanger
            ];
        }
        return [
            undefined,
            undefined
        ];
    }, [
        showSizeChanger
    ]);
}
}),
"[project]/Downloads/One click/node_modules/antd/es/pagination/Pagination.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DoubleLeftOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/DoubleLeftOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DoubleRightOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/DoubleRightOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LeftOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/LeftOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/RightOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$pagination$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-pagination/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$pagination$2f$es$2f$Pagination$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-pagination/es/Pagination.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$pagination$2f$es$2f$locale$2f$en_US$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-pagination/es/locale/en_US.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useSize.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$grid$2f$hooks$2f$useBreakpoint$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/grid/hooks/useBreakpoint.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/locale/useLocale.js [ssr] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/select/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/useToken.js [ssr] (ecmascript) <export default as useToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$pagination$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/pagination/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$pagination$2f$style$2f$bordered$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/pagination/style/bordered.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$pagination$2f$useShowSizeChanger$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/pagination/useShowSizeChanger.js [ssr] (ecmascript)");
"use client";
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
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
const Pagination = (props)=>{
    const { align, prefixCls: customizePrefixCls, selectPrefixCls: customizeSelectPrefixCls, className, rootClassName, style, size: customizeSize, locale: customLocale, responsive, showSizeChanger, selectComponentClass, pageSizeOptions } = props, restProps = __rest(props, [
        "align",
        "prefixCls",
        "selectPrefixCls",
        "className",
        "rootClassName",
        "style",
        "size",
        "locale",
        "responsive",
        "showSizeChanger",
        "selectComponentClass",
        "pageSizeOptions"
    ]);
    const { xs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$grid$2f$hooks$2f$useBreakpoint$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(responsive);
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const { getPrefixCls, direction, showSizeChanger: contextShowSizeChangerConfig, className: contextClassName, style: contextStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useComponentConfig"])('pagination');
    const prefixCls = getPrefixCls('pagination', customizePrefixCls);
    // Style
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$pagination$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    // ============================== Size ==============================
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(customizeSize);
    const isSmall = mergedSize === 'small' || !!(xs && !mergedSize && responsive);
    // ============================= Locale =============================
    const [contextLocale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('Pagination', __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$pagination$2f$es$2f$locale$2f$en_US$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]);
    const locale = Object.assign(Object.assign({}, contextLocale), customLocale);
    // ========================== Size Changer ==========================
    // Merge the props showSizeChanger
    const [propShowSizeChanger, propSizeChangerSelectProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$pagination$2f$useShowSizeChanger$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(showSizeChanger);
    const [contextShowSizeChanger, contextSizeChangerSelectProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$pagination$2f$useShowSizeChanger$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(contextShowSizeChangerConfig);
    const mergedShowSizeChanger = propShowSizeChanger !== null && propShowSizeChanger !== void 0 ? propShowSizeChanger : contextShowSizeChanger;
    const mergedShowSizeChangerSelectProps = propSizeChangerSelectProps !== null && propSizeChangerSelectProps !== void 0 ? propSizeChangerSelectProps : contextSizeChangerSelectProps;
    const SizeChanger = selectComponentClass || __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"];
    // Generate options
    const mergedPageSizeOptions = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](()=>{
        return pageSizeOptions ? pageSizeOptions.map((option)=>Number(option)) : undefined;
    }, [
        pageSizeOptions
    ]);
    // Render size changer
    const sizeChangerRender = (info)=>{
        var _a;
        const { disabled, size: pageSize, onSizeChange, 'aria-label': ariaLabel, className: sizeChangerClassName, options } = info;
        const { className: propSizeChangerClassName, onChange: propSizeChangerOnChange } = mergedShowSizeChangerSelectProps || {};
        // Origin Select is using Select.Option,
        // So it make the option value must be string
        // Just for compatible
        const selectedValue = (_a = options.find((option)=>String(option.value) === String(pageSize))) === null || _a === void 0 ? void 0 : _a.value;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](SizeChanger, Object.assign({
            disabled: disabled,
            showSearch: true,
            popupMatchSelectWidth: false,
            getPopupContainer: (triggerNode)=>triggerNode.parentNode,
            "aria-label": ariaLabel,
            options: options
        }, mergedShowSizeChangerSelectProps, {
            value: selectedValue,
            onChange: (nextSize, option)=>{
                onSizeChange === null || onSizeChange === void 0 ? void 0 : onSizeChange(nextSize);
                propSizeChangerOnChange === null || propSizeChangerOnChange === void 0 ? void 0 : propSizeChangerOnChange(nextSize, option);
            },
            size: isSmall ? 'small' : 'middle',
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(sizeChangerClassName, propSizeChangerClassName)
        }));
    };
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])('Pagination');
        ("TURBOPACK compile-time truthy", 1) ? warning(!selectComponentClass, 'usage', '`selectComponentClass` is not official api which will be removed.') : "TURBOPACK unreachable";
    }
    // ============================= Render =============================
    const iconsProps = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](()=>{
        const ellipsis = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", {
            className: `${prefixCls}-item-ellipsis`
        }, "\u2022\u2022\u2022");
        const prevIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("button", {
            className: `${prefixCls}-item-link`,
            type: "button",
            tabIndex: -1
        }, direction === 'rtl' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LeftOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null));
        const nextIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("button", {
            className: `${prefixCls}-item-link`,
            type: "button",
            tabIndex: -1
        }, direction === 'rtl' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LeftOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null));
        const jumpPrevIcon = /*#__PURE__*/ // biome-ignore lint/a11y/useValidAnchor: it is hard to refactor
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("a", {
            className: `${prefixCls}-item-link`
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
            className: `${prefixCls}-item-container`
        }, direction === 'rtl' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DoubleRightOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: `${prefixCls}-item-link-icon`
        }) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DoubleLeftOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: `${prefixCls}-item-link-icon`
        }), ellipsis));
        const jumpNextIcon = /*#__PURE__*/ // biome-ignore lint/a11y/useValidAnchor: it is hard to refactor
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("a", {
            className: `${prefixCls}-item-link`
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
            className: `${prefixCls}-item-container`
        }, direction === 'rtl' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DoubleLeftOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: `${prefixCls}-item-link-icon`
        }) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DoubleRightOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: `${prefixCls}-item-link-icon`
        }), ellipsis));
        return {
            prevIcon,
            nextIcon,
            jumpPrevIcon,
            jumpNextIcon
        };
    }, [
        direction,
        prefixCls
    ]);
    const selectPrefixCls = getPrefixCls('select', customizeSelectPrefixCls);
    const extendedClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        [`${prefixCls}-${align}`]: !!align,
        [`${prefixCls}-mini`]: isSmall,
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-bordered`]: token.wireframe
    }, contextClassName, className, rootClassName, hashId, cssVarCls);
    const mergedStyle = Object.assign(Object.assign({}, contextStyle), style);
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Fragment"], null, token.wireframe && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$pagination$2f$style$2f$bordered$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$pagination$2f$es$2f$Pagination$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], Object.assign({}, iconsProps, restProps, {
        style: mergedStyle,
        prefixCls: prefixCls,
        selectPrefixCls: selectPrefixCls,
        className: extendedClassName,
        locale: locale,
        pageSizeOptions: mergedPageSizeOptions,
        showSizeChanger: mergedShowSizeChanger,
        sizeChangerRender: sizeChangerRender
    }))));
};
if ("TURBOPACK compile-time truthy", 1) {
    Pagination.displayName = 'Pagination';
}
const __TURBOPACK__default__export__ = Pagination;
}),
"[project]/Downloads/One click/node_modules/antd/es/pagination/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$pagination$2f$Pagination$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/pagination/Pagination.js [ssr] (ecmascript)");
"use client";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$pagination$2f$Pagination$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Downloads/One click/node_modules/antd/es/spin/Indicator/Progress.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useLayoutEffect.js [ssr] (ecmascript)");
"use client";
;
;
;
const viewSize = 100;
const borderWidth = viewSize / 5;
const radius = viewSize / 2 - borderWidth / 2;
const circumference = radius * 2 * Math.PI;
const position = 50;
const CustomCircle = (props)=>{
    const { dotClassName, style, hasCircleCls } = props;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("circle", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${dotClassName}-circle`, {
            [`${dotClassName}-circle-bg`]: hasCircleCls
        }),
        r: radius,
        cx: position,
        cy: position,
        strokeWidth: borderWidth,
        style: style
    });
};
const Progress = ({ percent, prefixCls })=>{
    const dotClassName = `${prefixCls}-dot`;
    const holderClassName = `${dotClassName}-holder`;
    const hideClassName = `${holderClassName}-hidden`;
    const [render, setRender] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](false);
    // ==================== Visible =====================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        if (percent !== 0) {
            setRender(true);
        }
    }, [
        percent !== 0
    ]);
    // ==================== Progress ====================
    const safePtg = Math.max(Math.min(percent, 100), 0);
    // ===================== Render =====================
    if (!render) {
        return null;
    }
    const circleStyle = {
        strokeDashoffset: `${circumference / 4}`,
        strokeDasharray: `${circumference * safePtg / 100} ${circumference * (100 - safePtg) / 100}`
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(holderClassName, `${dotClassName}-progress`, safePtg <= 0 && hideClassName)
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("svg", {
        viewBox: `0 0 ${viewSize} ${viewSize}`,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": safePtg
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](CustomCircle, {
        dotClassName: dotClassName,
        hasCircleCls: true
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](CustomCircle, {
        dotClassName: dotClassName,
        style: circleStyle
    })));
};
const __TURBOPACK__default__export__ = Progress;
}),
"[project]/Downloads/One click/node_modules/antd/es/spin/Indicator/Looper.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Looper
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$spin$2f$Indicator$2f$Progress$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/spin/Indicator/Progress.js [ssr] (ecmascript)");
"use client";
;
;
;
function Looper(props) {
    const { prefixCls, percent = 0 } = props;
    const dotClassName = `${prefixCls}-dot`;
    const holderClassName = `${dotClassName}-holder`;
    const hideClassName = `${holderClassName}-hidden`;
    // ===================== Render =====================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(holderClassName, percent > 0 && hideClassName)
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(dotClassName, `${prefixCls}-dot-spin`)
    }, [
        1,
        2,
        3,
        4
    ].map((i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("i", {
            className: `${prefixCls}-dot-item`,
            key: i
        })))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$spin$2f$Indicator$2f$Progress$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        percent: percent
    }));
}
}),
"[project]/Downloads/One click/node_modules/antd/es/spin/Indicator/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Indicator
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/reactNode.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$spin$2f$Indicator$2f$Looper$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/spin/Indicator/Looper.js [ssr] (ecmascript)");
"use client";
;
;
;
;
function Indicator(props) {
    var _a;
    const { prefixCls, indicator, percent } = props;
    const dotClassName = `${prefixCls}-dot`;
    if (indicator && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["isValidElement"](indicator)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(indicator, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((_a = indicator.props) === null || _a === void 0 ? void 0 : _a.className, dotClassName),
            percent
        });
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$spin$2f$Indicator$2f$Looper$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        percent: percent
    });
}
}),
"[project]/Downloads/One click/node_modules/antd/es/spin/style/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/Keyframes.js [ssr] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [ssr] (ecmascript) <export merge as mergeToken>");
;
;
;
const antSpinMove = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSpinMove', {
    to: {
        opacity: 1
    }
});
const antRotate = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antRotate', {
    to: {
        transform: 'rotate(405deg)'
    }
});
const genSpinStyle = (token)=>{
    const { componentCls, calc } = token;
    return {
        [componentCls]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token)), {
            position: 'absolute',
            display: 'none',
            color: token.colorPrimary,
            fontSize: 0,
            textAlign: 'center',
            verticalAlign: 'middle',
            opacity: 0,
            transition: `transform ${token.motionDurationSlow} ${token.motionEaseInOutCirc}`,
            '&-spinning': {
                position: 'relative',
                display: 'inline-block',
                opacity: 1
            },
            [`${componentCls}-text`]: {
                fontSize: token.fontSize,
                paddingTop: calc(calc(token.dotSize).sub(token.fontSize)).div(2).add(2).equal()
            },
            '&-fullscreen': {
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                backgroundColor: token.colorBgMask,
                zIndex: token.zIndexPopupBase,
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                opacity: 0,
                visibility: 'hidden',
                transition: `all ${token.motionDurationMid}`,
                '&-show': {
                    opacity: 1,
                    visibility: 'visible'
                },
                [componentCls]: {
                    [`${componentCls}-dot-holder`]: {
                        color: token.colorWhite
                    },
                    [`${componentCls}-text`]: {
                        color: token.colorTextLightSolid
                    }
                }
            },
            '&-nested-loading': {
                position: 'relative',
                [`> div > ${componentCls}`]: {
                    position: 'absolute',
                    top: 0,
                    insetInlineStart: 0,
                    zIndex: 4,
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    maxHeight: token.contentHeight,
                    [`${componentCls}-dot`]: {
                        position: 'absolute',
                        top: '50%',
                        insetInlineStart: '50%',
                        margin: calc(token.dotSize).mul(-1).div(2).equal()
                    },
                    [`${componentCls}-text`]: {
                        position: 'absolute',
                        top: '50%',
                        width: '100%',
                        textShadow: `0 1px 2px ${token.colorBgContainer}` // FIXME: shadow
                    },
                    [`&${componentCls}-show-text ${componentCls}-dot`]: {
                        marginTop: calc(token.dotSize).div(2).mul(-1).sub(10).equal()
                    },
                    '&-sm': {
                        [`${componentCls}-dot`]: {
                            margin: calc(token.dotSizeSM).mul(-1).div(2).equal()
                        },
                        [`${componentCls}-text`]: {
                            paddingTop: calc(calc(token.dotSizeSM).sub(token.fontSize)).div(2).add(2).equal()
                        },
                        [`&${componentCls}-show-text ${componentCls}-dot`]: {
                            marginTop: calc(token.dotSizeSM).div(2).mul(-1).sub(10).equal()
                        }
                    },
                    '&-lg': {
                        [`${componentCls}-dot`]: {
                            margin: calc(token.dotSizeLG).mul(-1).div(2).equal()
                        },
                        [`${componentCls}-text`]: {
                            paddingTop: calc(calc(token.dotSizeLG).sub(token.fontSize)).div(2).add(2).equal()
                        },
                        [`&${componentCls}-show-text ${componentCls}-dot`]: {
                            marginTop: calc(token.dotSizeLG).div(2).mul(-1).sub(10).equal()
                        }
                    }
                },
                [`${componentCls}-container`]: {
                    position: 'relative',
                    transition: `opacity ${token.motionDurationSlow}`,
                    '&::after': {
                        position: 'absolute',
                        top: 0,
                        insetInlineEnd: 0,
                        bottom: 0,
                        insetInlineStart: 0,
                        zIndex: 10,
                        width: '100%',
                        height: '100%',
                        background: token.colorBgContainer,
                        opacity: 0,
                        transition: `all ${token.motionDurationSlow}`,
                        content: '""',
                        pointerEvents: 'none'
                    }
                },
                [`${componentCls}-blur`]: {
                    clear: 'both',
                    opacity: 0.5,
                    userSelect: 'none',
                    pointerEvents: 'none',
                    '&::after': {
                        opacity: 0.4,
                        pointerEvents: 'auto'
                    }
                }
            },
            // tip
            // ------------------------------
            '&-tip': {
                color: token.spinDotDefault
            },
            // holder
            // ------------------------------
            [`${componentCls}-dot-holder`]: {
                width: '1em',
                height: '1em',
                fontSize: token.dotSize,
                display: 'inline-block',
                transition: `transform ${token.motionDurationSlow} ease, opacity ${token.motionDurationSlow} ease`,
                transformOrigin: '50% 50%',
                lineHeight: 1,
                color: token.colorPrimary,
                '&-hidden': {
                    transform: 'scale(0.3)',
                    opacity: 0
                }
            },
            // progress
            // ------------------------------
            [`${componentCls}-dot-progress`]: {
                position: 'absolute',
                inset: 0
            },
            // dots
            // ------------------------------
            [`${componentCls}-dot`]: {
                position: 'relative',
                display: 'inline-block',
                fontSize: token.dotSize,
                width: '1em',
                height: '1em',
                '&-item': {
                    position: 'absolute',
                    display: 'block',
                    width: calc(token.dotSize).sub(calc(token.marginXXS).div(2)).div(2).equal(),
                    height: calc(token.dotSize).sub(calc(token.marginXXS).div(2)).div(2).equal(),
                    background: 'currentColor',
                    borderRadius: '100%',
                    transform: 'scale(0.75)',
                    transformOrigin: '50% 50%',
                    opacity: 0.3,
                    animationName: antSpinMove,
                    animationDuration: '1s',
                    animationIterationCount: 'infinite',
                    animationTimingFunction: 'linear',
                    animationDirection: 'alternate',
                    '&:nth-child(1)': {
                        top: 0,
                        insetInlineStart: 0,
                        animationDelay: '0s'
                    },
                    '&:nth-child(2)': {
                        top: 0,
                        insetInlineEnd: 0,
                        animationDelay: '0.4s'
                    },
                    '&:nth-child(3)': {
                        insetInlineEnd: 0,
                        bottom: 0,
                        animationDelay: '0.8s'
                    },
                    '&:nth-child(4)': {
                        bottom: 0,
                        insetInlineStart: 0,
                        animationDelay: '1.2s'
                    }
                },
                '&-spin': {
                    transform: 'rotate(45deg)',
                    animationName: antRotate,
                    animationDuration: '1.2s',
                    animationIterationCount: 'infinite',
                    animationTimingFunction: 'linear'
                },
                '&-circle': {
                    strokeLinecap: 'round',
                    transition: [
                        'stroke-dashoffset',
                        'stroke-dasharray',
                        'stroke',
                        'stroke-width',
                        'opacity'
                    ].map((item)=>`${item} ${token.motionDurationSlow} ease`).join(','),
                    fillOpacity: 0,
                    stroke: 'currentcolor'
                },
                '&-circle-bg': {
                    stroke: token.colorFillSecondary
                }
            },
            // small
            [`&-sm ${componentCls}-dot`]: {
                '&, &-holder': {
                    fontSize: token.dotSizeSM
                }
            },
            [`&-sm ${componentCls}-dot-holder`]: {
                i: {
                    width: calc(calc(token.dotSizeSM).sub(calc(token.marginXXS).div(2))).div(2).equal(),
                    height: calc(calc(token.dotSizeSM).sub(calc(token.marginXXS).div(2))).div(2).equal()
                }
            },
            // large
            [`&-lg ${componentCls}-dot`]: {
                '&, &-holder': {
                    fontSize: token.dotSizeLG
                }
            },
            [`&-lg ${componentCls}-dot-holder`]: {
                i: {
                    width: calc(calc(token.dotSizeLG).sub(token.marginXXS)).div(2).equal(),
                    height: calc(calc(token.dotSizeLG).sub(token.marginXXS)).div(2).equal()
                }
            },
            [`&${componentCls}-show-text ${componentCls}-text`]: {
                display: 'block'
            }
        })
    };
};
const prepareComponentToken = (token)=>{
    const { controlHeightLG, controlHeight } = token;
    return {
        contentHeight: 400,
        dotSize: controlHeightLG / 2,
        dotSizeSM: controlHeightLG * 0.35,
        dotSizeLG: controlHeight
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])('Spin', (token)=>{
    const spinToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        spinDotDefault: token.colorTextDescription
    });
    return genSpinStyle(spinToken);
}, prepareComponentToken);
}),
"[project]/Downloads/One click/node_modules/antd/es/spin/usePercent.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>usePercent
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
const AUTO_INTERVAL = 200;
const STEP_BUCKETS = [
    [
        30,
        0.05
    ],
    [
        70,
        0.03
    ],
    [
        96,
        0.01
    ]
];
function usePercent(spinning, percent) {
    const [mockPercent, setMockPercent] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](0);
    const mockIntervalRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"](null);
    const isAuto = percent === 'auto';
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](()=>{
        if (isAuto && spinning) {
            setMockPercent(0);
            mockIntervalRef.current = setInterval(()=>{
                setMockPercent((prev)=>{
                    const restPTG = 100 - prev;
                    for(let i = 0; i < STEP_BUCKETS.length; i += 1){
                        const [limit, stepPtg] = STEP_BUCKETS[i];
                        if (prev <= limit) {
                            return prev + restPTG * stepPtg;
                        }
                    }
                    return prev;
                });
            }, AUTO_INTERVAL);
        }
        return ()=>{
            if (mockIntervalRef.current) {
                clearInterval(mockIntervalRef.current);
                mockIntervalRef.current = null;
            }
        };
    }, [
        isAuto,
        spinning
    ]);
    return isAuto ? mockPercent : percent;
}
}),
"[project]/Downloads/One click/node_modules/antd/es/spin/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$throttle$2d$debounce$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/throttle-debounce/esm/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$spin$2f$Indicator$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/spin/Indicator/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$spin$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/spin/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$spin$2f$usePercent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/spin/usePercent.js [ssr] (ecmascript)");
"use client";
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
;
;
;
;
const _SpinSizes = [
    'small',
    'default',
    'large'
];
// Render indicator
let defaultIndicator;
function shouldDelay(spinning, delay) {
    return !!spinning && !!delay && !Number.isNaN(Number(delay));
}
const Spin = (props)=>{
    var _a;
    const { prefixCls: customizePrefixCls, spinning: customSpinning = true, delay = 0, className, rootClassName, size = 'default', tip, wrapperClassName, style, children, fullscreen = false, indicator, percent } = props, restProps = __rest(props, [
        "prefixCls",
        "spinning",
        "delay",
        "className",
        "rootClassName",
        "size",
        "tip",
        "wrapperClassName",
        "style",
        "children",
        "fullscreen",
        "indicator",
        "percent"
    ]);
    const { getPrefixCls, direction, className: contextClassName, style: contextStyle, indicator: contextIndicator } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useComponentConfig"])('spin');
    const prefixCls = getPrefixCls('spin', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$spin$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [spinning, setSpinning] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](()=>customSpinning && !shouldDelay(customSpinning, delay));
    const mergedPercent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$spin$2f$usePercent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(spinning, percent);
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](()=>{
        if (customSpinning) {
            const showSpinning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$throttle$2d$debounce$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["debounce"])(delay, ()=>{
                setSpinning(true);
            });
            showSpinning();
            return ()=>{
                var _a;
                (_a = showSpinning === null || showSpinning === void 0 ? void 0 : showSpinning.cancel) === null || _a === void 0 ? void 0 : _a.call(showSpinning);
            };
        }
        setSpinning(false);
    }, [
        delay,
        customSpinning
    ]);
    const isNestedPattern = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](()=>typeof children !== 'undefined' && !fullscreen, [
        children,
        fullscreen
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])('Spin');
        ("TURBOPACK compile-time truthy", 1) ? warning(!tip || isNestedPattern || fullscreen, 'usage', '`tip` only work in nest or fullscreen pattern.') : "TURBOPACK unreachable";
    }
    const spinClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, contextClassName, {
        [`${prefixCls}-sm`]: size === 'small',
        [`${prefixCls}-lg`]: size === 'large',
        [`${prefixCls}-spinning`]: spinning,
        [`${prefixCls}-show-text`]: !!tip,
        [`${prefixCls}-rtl`]: direction === 'rtl'
    }, className, !fullscreen && rootClassName, hashId, cssVarCls);
    const containerClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-container`, {
        [`${prefixCls}-blur`]: spinning
    });
    const mergedIndicator = (_a = indicator !== null && indicator !== void 0 ? indicator : contextIndicator) !== null && _a !== void 0 ? _a : defaultIndicator;
    const mergedStyle = Object.assign(Object.assign({}, contextStyle), style);
    const spinElement = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", Object.assign({}, restProps, {
        style: mergedStyle,
        className: spinClassName,
        "aria-live": "polite",
        "aria-busy": spinning
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$spin$2f$Indicator$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        indicator: mergedIndicator,
        percent: mergedPercent
    }), tip && (isNestedPattern || fullscreen) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        className: `${prefixCls}-text`
    }, tip) : null);
    if (isNestedPattern) {
        return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", Object.assign({}, restProps, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-nested-loading`, wrapperClassName, hashId, cssVarCls)
        }), spinning && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
            key: "loading"
        }, spinElement), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
            className: containerClassName,
            key: "container"
        }, children)));
    }
    if (fullscreen) {
        return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-fullscreen`, {
                [`${prefixCls}-fullscreen-show`]: spinning
            }, rootClassName, hashId, cssVarCls)
        }, spinElement));
    }
    return wrapCSSVar(spinElement);
};
Spin.setDefaultIndicator = (indicator)=>{
    defaultIndicator = indicator;
};
if ("TURBOPACK compile-time truthy", 1) {
    Spin.displayName = 'Spin';
}
const __TURBOPACK__default__export__ = Spin;
}),
"[project]/Downloads/One click/node_modules/antd/es/tree/style/directory.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================ Directory =============================
__turbopack_context__.s([
    "genDirectoryStyle",
    ()=>genDirectoryStyle
]);
const genDirectoryStyle = ({ treeCls, treeNodeCls, directoryNodeSelectedBg, directoryNodeSelectedColor, motionDurationMid, borderRadius, controlItemBgHover })=>({
        [`${treeCls}${treeCls}-directory ${treeNodeCls}`]: {
            // >>> Title
            [`${treeCls}-node-content-wrapper`]: {
                position: 'static',
                [`&:has(${treeCls}-drop-indicator)`]: {
                    position: 'relative'
                },
                [`> *:not(${treeCls}-drop-indicator)`]: {
                    position: 'relative'
                },
                '&:hover': {
                    background: 'transparent'
                },
                // Expand interactive area to whole line
                '&:before': {
                    position: 'absolute',
                    inset: 0,
                    transition: `background-color ${motionDurationMid}`,
                    content: '""',
                    borderRadius
                },
                '&:hover:before': {
                    background: controlItemBgHover
                }
            },
            [`${treeCls}-switcher, ${treeCls}-checkbox, ${treeCls}-draggable-icon`]: {
                zIndex: 1
            },
            // ============= Selected =============
            '&-selected': {
                background: directoryNodeSelectedBg,
                borderRadius,
                [`${treeCls}-switcher, ${treeCls}-draggable-icon`]: {
                    color: directoryNodeSelectedColor
                },
                // >>> Title
                [`${treeCls}-node-content-wrapper`]: {
                    color: directoryNodeSelectedColor,
                    background: 'transparent',
                    '&, &:hover': {
                        color: directoryNodeSelectedColor
                    },
                    '&:before, &:hover:before': {
                        background: directoryNodeSelectedBg
                    }
                }
            }
        }
    });
}),
"[project]/Downloads/One click/node_modules/antd/es/tree/style/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "genBaseStyle",
    ()=>genBaseStyle,
    "genTreeStyle",
    ()=>genTreeStyle,
    "initComponentToken",
    ()=>initComponentToken,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/Keyframes.js [ssr] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/checkbox/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__genCollapseMotion$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/motion/collapse.js [ssr] (ecmascript) <export default as genCollapseMotion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [ssr] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tree$2f$style$2f$directory$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tree/style/directory.js [ssr] (ecmascript)");
;
;
;
;
;
;
// ============================ Keyframes =============================
const treeNodeFX = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('ant-tree-node-fx-do-not-use', {
    '0%': {
        opacity: 0
    },
    '100%': {
        opacity: 1
    }
});
// ============================== Switch ==============================
const getSwitchStyle = (prefixCls, token)=>({
        [`.${prefixCls}-switcher-icon`]: {
            display: 'inline-block',
            fontSize: 10,
            verticalAlign: 'baseline',
            svg: {
                transition: `transform ${token.motionDurationSlow}`
            }
        }
    });
// =============================== Drop ===============================
const getDropIndicatorStyle = (prefixCls, token)=>({
        [`.${prefixCls}-drop-indicator`]: {
            position: 'absolute',
            // it should displayed over the following node
            zIndex: 1,
            height: 2,
            backgroundColor: token.colorPrimary,
            borderRadius: 1,
            pointerEvents: 'none',
            '&:after': {
                position: 'absolute',
                top: -3,
                insetInlineStart: -6,
                width: 8,
                height: 8,
                backgroundColor: 'transparent',
                border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidthBold)} solid ${token.colorPrimary}`,
                borderRadius: '50%',
                content: '""'
            }
        }
    });
const genBaseStyle = (prefixCls, token)=>{
    const { treeCls, treeNodeCls, treeNodePadding, titleHeight, indentSize, nodeSelectedBg, nodeHoverBg, colorTextQuaternary, controlItemBgActiveDisabled } = token;
    return {
        [treeCls]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token)), {
            // fix https://github.com/ant-design/ant-design/issues/50316
            ['--rc-virtual-list-scrollbar-bg']: token.colorSplit,
            background: token.colorBgContainer,
            borderRadius: token.borderRadius,
            transition: `background-color ${token.motionDurationSlow}`,
            '&-rtl': {
                direction: 'rtl'
            },
            [`&${treeCls}-rtl ${treeCls}-switcher_close ${treeCls}-switcher-icon svg`]: {
                transform: 'rotate(90deg)'
            },
            [`&-focused:not(:hover):not(${treeCls}-active-focused)`]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genFocusOutline"])(token),
            // =================== Virtual List ===================
            [`${treeCls}-list-holder-inner`]: {
                alignItems: 'flex-start'
            },
            [`&${treeCls}-block-node`]: {
                [`${treeCls}-list-holder-inner`]: {
                    alignItems: 'stretch',
                    // >>> Title
                    [`${treeCls}-node-content-wrapper`]: {
                        flex: 'auto'
                    },
                    // >>> Drag
                    [`${treeNodeCls}.dragging:after`]: {
                        position: 'absolute',
                        inset: 0,
                        border: `1px solid ${token.colorPrimary}`,
                        opacity: 0,
                        animationName: treeNodeFX,
                        animationDuration: token.motionDurationSlow,
                        animationPlayState: 'running',
                        animationFillMode: 'forwards',
                        content: '""',
                        pointerEvents: 'none',
                        borderRadius: token.borderRadius
                    }
                }
            },
            // ===================== TreeNode =====================
            [treeNodeCls]: {
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: treeNodePadding,
                lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(titleHeight),
                position: 'relative',
                // 非常重要，避免 drop-indicator 在拖拽过程中闪烁
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    zIndex: 1,
                    insetInlineStart: 0,
                    width: '100%',
                    top: '100%',
                    height: treeNodePadding
                },
                // Disabled
                [`&-disabled ${treeCls}-node-content-wrapper`]: {
                    color: token.colorTextDisabled,
                    cursor: 'not-allowed',
                    '&:hover': {
                        background: 'transparent'
                    }
                },
                [`${treeCls}-checkbox-disabled + ${treeCls}-node-selected,&${treeNodeCls}-disabled${treeNodeCls}-selected ${treeCls}-node-content-wrapper`]: {
                    backgroundColor: controlItemBgActiveDisabled
                },
                // we can not set pointer-events to none for checkbox in tree
                // ref: https://github.com/ant-design/ant-design/issues/39822#issuecomment-2605234058
                [`${treeCls}-checkbox-disabled`]: {
                    pointerEvents: 'unset'
                },
                // not disable
                [`&:not(${treeNodeCls}-disabled)`]: {
                    // >>> Title
                    [`${treeCls}-node-content-wrapper`]: {
                        '&:hover': {
                            color: token.nodeHoverColor
                        }
                    }
                },
                [`&-active ${treeCls}-node-content-wrapper`]: {
                    background: token.controlItemBgHover
                },
                [`&:not(${treeNodeCls}-disabled).filter-node ${treeCls}-title`]: {
                    color: token.colorPrimary,
                    fontWeight: token.fontWeightStrong
                },
                '&-draggable': {
                    cursor: 'grab',
                    [`${treeCls}-draggable-icon`]: {
                        // https://github.com/ant-design/ant-design/issues/41915
                        flexShrink: 0,
                        width: titleHeight,
                        textAlign: 'center',
                        visibility: 'visible',
                        color: colorTextQuaternary
                    },
                    [`&${treeNodeCls}-disabled ${treeCls}-draggable-icon`]: {
                        visibility: 'hidden'
                    }
                }
            },
            // >>> Indent
            [`${treeCls}-indent`]: {
                alignSelf: 'stretch',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                '&-unit': {
                    display: 'inline-block',
                    width: indentSize
                }
            },
            // >>> Drag Handler
            [`${treeCls}-draggable-icon`]: {
                visibility: 'hidden'
            },
            // Switcher / Checkbox
            [`${treeCls}-switcher, ${treeCls}-checkbox`]: {
                marginInlineEnd: token.calc(token.calc(titleHeight).sub(token.controlInteractiveSize)).div(2).equal()
            },
            // >>> Switcher
            [`${treeCls}-switcher`]: Object.assign(Object.assign({}, getSwitchStyle(prefixCls, token)), {
                position: 'relative',
                flex: 'none',
                alignSelf: 'stretch',
                width: titleHeight,
                textAlign: 'center',
                cursor: 'pointer',
                userSelect: 'none',
                transition: `all ${token.motionDurationSlow}`,
                '&-noop': {
                    cursor: 'unset'
                },
                '&:before': {
                    pointerEvents: 'none',
                    content: '""',
                    width: titleHeight,
                    height: titleHeight,
                    position: 'absolute',
                    left: {
                        _skip_check_: true,
                        value: 0
                    },
                    top: 0,
                    borderRadius: token.borderRadius,
                    transition: `all ${token.motionDurationSlow}`
                },
                [`&:not(${treeCls}-switcher-noop):hover:before`]: {
                    backgroundColor: token.colorBgTextHover
                },
                [`&_close ${treeCls}-switcher-icon svg`]: {
                    transform: 'rotate(-90deg)'
                },
                '&-loading-icon': {
                    color: token.colorPrimary
                },
                '&-leaf-line': {
                    position: 'relative',
                    zIndex: 1,
                    display: 'inline-block',
                    width: '100%',
                    height: '100%',
                    // https://github.com/ant-design/ant-design/issues/31884
                    '&:before': {
                        position: 'absolute',
                        top: 0,
                        insetInlineEnd: token.calc(titleHeight).div(2).equal(),
                        bottom: token.calc(treeNodePadding).mul(-1).equal(),
                        marginInlineStart: -1,
                        borderInlineEnd: `1px solid ${token.colorBorder}`,
                        content: '""'
                    },
                    '&:after': {
                        position: 'absolute',
                        width: token.calc(token.calc(titleHeight).div(2).equal()).mul(0.8).equal(),
                        height: token.calc(titleHeight).div(2).equal(),
                        borderBottom: `1px solid ${token.colorBorder}`,
                        content: '""'
                    }
                }
            }),
            // >>> Title
            // add `${treeCls}-checkbox + span` to cover checkbox `${checkboxCls} + span`
            [`${treeCls}-node-content-wrapper`]: Object.assign(Object.assign({
                position: 'relative',
                minHeight: titleHeight,
                paddingBlock: 0,
                paddingInline: token.paddingXS,
                background: 'transparent',
                borderRadius: token.borderRadius,
                cursor: 'pointer',
                transition: `all ${token.motionDurationMid}, border 0s, line-height 0s, box-shadow 0s`
            }, getDropIndicatorStyle(prefixCls, token)), {
                '&:hover': {
                    backgroundColor: nodeHoverBg
                },
                [`&${treeCls}-node-selected`]: {
                    color: token.nodeSelectedColor,
                    backgroundColor: nodeSelectedBg
                },
                // Icon
                [`${treeCls}-iconEle`]: {
                    display: 'inline-block',
                    width: titleHeight,
                    height: titleHeight,
                    textAlign: 'center',
                    verticalAlign: 'top',
                    '&:empty': {
                        display: 'none'
                    }
                }
            }),
            // https://github.com/ant-design/ant-design/issues/28217
            [`${treeCls}-unselectable ${treeCls}-node-content-wrapper:hover`]: {
                backgroundColor: 'transparent'
            },
            [`${treeNodeCls}.drop-container > [draggable]`]: {
                boxShadow: `0 0 0 2px ${token.colorPrimary}`
            },
            // ==================== Show Line =====================
            '&-show-line': {
                // ================ Indent lines ================
                [`${treeCls}-indent-unit`]: {
                    position: 'relative',
                    height: '100%',
                    '&:before': {
                        position: 'absolute',
                        top: 0,
                        insetInlineEnd: token.calc(titleHeight).div(2).equal(),
                        bottom: token.calc(treeNodePadding).mul(-1).equal(),
                        borderInlineEnd: `1px solid ${token.colorBorder}`,
                        content: '""'
                    },
                    '&-end:before': {
                        display: 'none'
                    }
                },
                // ============== Cover Background ==============
                [`${treeCls}-switcher`]: {
                    background: 'transparent',
                    '&-line-icon': {
                        // https://github.com/ant-design/ant-design/issues/32813
                        verticalAlign: '-0.15em'
                    }
                }
            },
            [`${treeNodeCls}-leaf-last ${treeCls}-switcher-leaf-line:before`]: {
                top: 'auto !important',
                bottom: 'auto !important',
                height: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.calc(titleHeight).div(2).equal())} !important`
            }
        })
    };
};
const genTreeStyle = (prefixCls, token, /**
 * @descCN 是否启用目录树样式
 * @descEN Whether to enable directory style
 * @default true
 */ enableDirectory = true)=>{
    const treeCls = `.${prefixCls}`;
    const treeNodeCls = `${treeCls}-treenode`;
    const treeNodePadding = token.calc(token.paddingXS).div(2).equal();
    const treeToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        treeCls,
        treeNodeCls,
        treeNodePadding
    });
    return [
        // Basic
        genBaseStyle(prefixCls, treeToken),
        // Directory
        enableDirectory && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tree$2f$style$2f$directory$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genDirectoryStyle"])(treeToken)
    ].filter(Boolean);
};
const initComponentToken = (token)=>{
    const { controlHeightSM, controlItemBgHover, controlItemBgActive } = token;
    const titleHeight = controlHeightSM;
    return {
        titleHeight,
        indentSize: titleHeight,
        nodeHoverBg: controlItemBgHover,
        nodeHoverColor: token.colorText,
        nodeSelectedBg: controlItemBgActive,
        nodeSelectedColor: token.colorText
    };
};
const prepareComponentToken = (token)=>{
    const { colorTextLightSolid, colorPrimary } = token;
    return Object.assign(Object.assign({}, initComponentToken(token)), {
        directoryNodeSelectedColor: colorTextLightSolid,
        directoryNodeSelectedBg: colorPrimary
    });
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])('Tree', (token, { prefixCls })=>[
        {
            [token.componentCls]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getStyle"])(`${prefixCls}-checkbox`, token)
        },
        genTreeStyle(prefixCls, token),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__genCollapseMotion$3e$__["genCollapseMotion"])(token)
    ], prepareComponentToken);
}),
"[project]/Downloads/One click/node_modules/antd/es/tree/utils/dropIndicator.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "offset",
    ()=>offset
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
"use client";
;
const offset = 4;
function dropIndicatorRender(props) {
    const { dropPosition, dropLevelOffset, prefixCls, indent, direction = 'ltr' } = props;
    const startPosition = direction === 'ltr' ? 'left' : 'right';
    const endPosition = direction === 'ltr' ? 'right' : 'left';
    const style = {
        [startPosition]: -dropLevelOffset * indent + offset,
        [endPosition]: 0
    };
    switch(dropPosition){
        case -1:
            style.top = -3;
            break;
        case 1:
            style.bottom = -3;
            break;
        default:
            // dropPosition === 0
            style.bottom = -3;
            style[startPosition] = indent + offset;
            break;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("div", {
        style: style,
        className: `${prefixCls}-drop-indicator`
    });
}
const __TURBOPACK__default__export__ = dropIndicatorRender;
}),
"[project]/Downloads/One click/node_modules/antd/es/tree/utils/iconUtil.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CaretDownFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/CaretDownFilled.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FileOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/FileOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MinusSquareOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/MinusSquareOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PlusSquareOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/PlusSquareOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/reactNode.js [ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const SwitcherIconCom = (props)=>{
    var _a, _b;
    const { prefixCls, switcherIcon, treeNodeProps, showLine, switcherLoadingIcon } = props;
    const { isLeaf, expanded, loading } = treeNodeProps;
    if (loading) {
        if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["isValidElement"](switcherLoadingIcon)) {
            return switcherLoadingIcon;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: `${prefixCls}-switcher-loading-icon`
        });
    }
    let showLeafIcon;
    if (showLine && typeof showLine === 'object') {
        showLeafIcon = showLine.showLeafIcon;
    }
    if (isLeaf) {
        if (!showLine) {
            return null;
        }
        if (typeof showLeafIcon !== 'boolean' && !!showLeafIcon) {
            const leafIcon = typeof showLeafIcon === 'function' ? showLeafIcon(treeNodeProps) : showLeafIcon;
            const leafCls = `${prefixCls}-switcher-line-custom-icon`;
            if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["isValidElement"](leafIcon)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(leafIcon, {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((_a = leafIcon.props) === null || _a === void 0 ? void 0 : _a.className, leafCls)
                });
            }
            return leafIcon;
        }
        return showLeafIcon ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FileOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: `${prefixCls}-switcher-line-icon`
        }) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", {
            className: `${prefixCls}-switcher-leaf-line`
        });
    }
    const switcherCls = `${prefixCls}-switcher-icon`;
    const switcher = typeof switcherIcon === 'function' ? switcherIcon(treeNodeProps) : switcherIcon;
    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["isValidElement"](switcher)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(switcher, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((_b = switcher.props) === null || _b === void 0 ? void 0 : _b.className, switcherCls)
        });
    }
    if (switcher !== undefined) {
        return switcher;
    }
    if (showLine) {
        return expanded ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MinusSquareOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: `${prefixCls}-switcher-line-icon`
        }) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PlusSquareOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: `${prefixCls}-switcher-line-icon`
        });
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CaretDownFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: switcherCls
    });
};
const __TURBOPACK__default__export__ = SwitcherIconCom;
}),
"[project]/Downloads/One click/node_modules/antd/es/tree/Tree.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HolderOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/HolderOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tree$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-tree/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/motion.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/DisabledContext.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/useToken.js [ssr] (ecmascript) <export default as useToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tree$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tree/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tree$2f$utils$2f$dropIndicator$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tree/utils/dropIndicator.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tree$2f$utils$2f$iconUtil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tree/utils/iconUtil.js [ssr] (ecmascript)");
"use client";
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
const Tree = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].forwardRef((props, ref)=>{
    var _a;
    const { getPrefixCls, direction, virtual, tree } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { prefixCls: customizePrefixCls, className, showIcon = false, showLine, switcherIcon, switcherLoadingIcon, blockNode = false, children, checkable = false, selectable = true, draggable, disabled, motion: customMotion, style } = props;
    const prefixCls = getPrefixCls('tree', customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    const contextDisabled = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = disabled !== null && disabled !== void 0 ? disabled : contextDisabled;
    const motion = customMotion !== null && customMotion !== void 0 ? customMotion : Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(rootPrefixCls)), {
        motionAppear: false
    });
    const newProps = Object.assign(Object.assign({}, props), {
        checkable,
        selectable,
        showIcon,
        motion,
        blockNode,
        disabled: mergedDisabled,
        showLine: Boolean(showLine),
        dropIndicatorRender: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tree$2f$utils$2f$dropIndicator$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    });
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tree$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const itemHeight = token.paddingXS / 2 + (((_a = token.Tree) === null || _a === void 0 ? void 0 : _a.titleHeight) || token.controlHeightSM);
    const draggableConfig = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useMemo(()=>{
        if (!draggable) {
            return false;
        }
        let mergedDraggable = {};
        switch(typeof draggable){
            case 'function':
                mergedDraggable.nodeDraggable = draggable;
                break;
            case 'object':
                mergedDraggable = Object.assign({}, draggable);
                break;
            default:
                break;
        }
        if (mergedDraggable.icon !== false) {
            mergedDraggable.icon = mergedDraggable.icon || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HolderOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null);
        }
        return mergedDraggable;
    }, [
        draggable
    ]);
    const renderSwitcherIcon = (nodeProps)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tree$2f$utils$2f$iconUtil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            prefixCls: prefixCls,
            switcherIcon: switcherIcon,
            switcherLoadingIcon: switcherLoadingIcon,
            treeNodeProps: nodeProps,
            showLine: showLine
        });
    return wrapCSSVar(/*#__PURE__*/ // @ts-ignore
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tree$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], Object.assign({
        itemHeight: itemHeight,
        ref: ref,
        virtual: virtual
    }, newProps, {
        // newProps may contain style so declare style below it
        style: Object.assign(Object.assign({}, tree === null || tree === void 0 ? void 0 : tree.style), style),
        prefixCls: prefixCls,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
            [`${prefixCls}-icon-hide`]: !showIcon,
            [`${prefixCls}-block-node`]: blockNode,
            [`${prefixCls}-unselectable`]: !selectable,
            [`${prefixCls}-rtl`]: direction === 'rtl',
            [`${prefixCls}-disabled`]: mergedDisabled
        }, tree === null || tree === void 0 ? void 0 : tree.className, className, hashId, cssVarCls),
        direction: direction,
        checkable: checkable ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement("span", {
            className: `${prefixCls}-checkbox-inner`
        }) : checkable,
        selectable: selectable,
        switcherIcon: renderSwitcherIcon,
        draggable: draggableConfig
    }), children));
});
if ("TURBOPACK compile-time truthy", 1) {
    Tree.displayName = 'Tree';
}
const __TURBOPACK__default__export__ = Tree;
}),
"[project]/Downloads/One click/node_modules/antd/es/tree/utils/dictUtil.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calcRangeKeys",
    ()=>calcRangeKeys,
    "convertDirectoryKeysToNodes",
    ()=>convertDirectoryKeysToNodes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-tree/es/utils/treeUtil.js [ssr] (ecmascript)");
;
;
const RECORD_NONE = 0;
const RECORD_START = 1;
const RECORD_END = 2;
function traverseNodesKey(treeData, callback, fieldNames) {
    const { key: fieldKey, children: fieldChildren } = fieldNames;
    function processNode(dataNode) {
        const key = dataNode[fieldKey];
        const children = dataNode[fieldChildren];
        if (callback(key, dataNode) !== false) {
            traverseNodesKey(children || [], callback, fieldNames);
        }
    }
    treeData.forEach(processNode);
}
function calcRangeKeys({ treeData, expandedKeys, startKey, endKey, fieldNames }) {
    const keys = [];
    let record = RECORD_NONE;
    if (startKey && startKey === endKey) {
        return [
            startKey
        ];
    }
    if (!startKey || !endKey) {
        return [];
    }
    function matchKey(key) {
        return key === startKey || key === endKey;
    }
    traverseNodesKey(treeData, (key)=>{
        if (record === RECORD_END) {
            return false;
        }
        if (matchKey(key)) {
            // Match test
            keys.push(key);
            if (record === RECORD_NONE) {
                record = RECORD_START;
            } else if (record === RECORD_START) {
                record = RECORD_END;
                return false;
            }
        } else if (record === RECORD_START) {
            // Append selection
            keys.push(key);
        }
        return expandedKeys.includes(key);
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fillFieldNames"])(fieldNames));
    return keys;
}
function convertDirectoryKeysToNodes(treeData, keys, fieldNames) {
    const restKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(keys);
    const nodes = [];
    traverseNodesKey(treeData, (key, node)=>{
        const index = restKeys.indexOf(key);
        if (index !== -1) {
            nodes.push(node);
            restKeys.splice(index, 1);
        }
        return !!restKeys.length;
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fillFieldNames"])(fieldNames));
    return nodes;
}
}),
"[project]/Downloads/One click/node_modules/antd/es/tree/DirectoryTree.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FileOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/FileOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FolderOpenOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/FolderOpenOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FolderOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/FolderOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-tree/es/util.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-tree/es/utils/treeUtil.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tree$2f$Tree$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tree/Tree.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tree$2f$utils$2f$dictUtil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tree/utils/dictUtil.js [ssr] (ecmascript)");
"use client";
;
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
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
function getIcon(props) {
    const { isLeaf, expanded } = props;
    if (isLeaf) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FileOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null);
    }
    return expanded ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FolderOpenOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FolderOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null);
}
function getTreeData({ treeData, children }) {
    return treeData || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["convertTreeToData"])(children);
}
const DirectoryTree = (_a, ref)=>{
    var { defaultExpandAll, defaultExpandParent, defaultExpandedKeys } = _a, props = __rest(_a, [
        "defaultExpandAll",
        "defaultExpandParent",
        "defaultExpandedKeys"
    ]);
    // Shift click usage
    const lastSelectedKey = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"](null);
    const cachedSelectedKeys = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"](null);
    const getInitExpandedKeys = ()=>{
        const { keyEntities } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["convertDataToEntities"])(getTreeData(props), {
            fieldNames: props.fieldNames
        });
        let initExpandedKeys;
        // Expanded keys
        if (defaultExpandAll) {
            initExpandedKeys = Object.keys(keyEntities);
        } else if (defaultExpandParent) {
            initExpandedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["conductExpandParent"])(props.expandedKeys || defaultExpandedKeys || [], keyEntities);
        } else {
            initExpandedKeys = props.expandedKeys || defaultExpandedKeys || [];
        }
        return initExpandedKeys;
    };
    const [selectedKeys, setSelectedKeys] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](props.selectedKeys || props.defaultSelectedKeys || []);
    const [expandedKeys, setExpandedKeys] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](()=>getInitExpandedKeys());
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](()=>{
        if ('selectedKeys' in props) {
            setSelectedKeys(props.selectedKeys);
        }
    }, [
        props.selectedKeys
    ]);
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](()=>{
        if ('expandedKeys' in props) {
            setExpandedKeys(props.expandedKeys);
        }
    }, [
        props.expandedKeys
    ]);
    const onExpand = (keys, info)=>{
        var _a;
        if (!('expandedKeys' in props)) {
            setExpandedKeys(keys);
        }
        // Call origin function
        return (_a = props.onExpand) === null || _a === void 0 ? void 0 : _a.call(props, keys, info);
    };
    const onSelect = (keys, event)=>{
        var _a;
        const { multiple, fieldNames } = props;
        const { node, nativeEvent } = event;
        const { key = '' } = node;
        const treeData = getTreeData(props);
        // const newState: DirectoryTreeState = {};
        // We need wrap this event since some value is not same
        const newEvent = Object.assign(Object.assign({}, event), {
            selected: true
        });
        // Windows / Mac single pick
        const ctrlPick = (nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.ctrlKey) || (nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.metaKey);
        const shiftPick = nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.shiftKey;
        // Generate new selected keys
        let newSelectedKeys;
        if (multiple && ctrlPick) {
            // Control click
            newSelectedKeys = keys;
            lastSelectedKey.current = key;
            cachedSelectedKeys.current = newSelectedKeys;
            newEvent.selectedNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tree$2f$utils$2f$dictUtil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["convertDirectoryKeysToNodes"])(treeData, newSelectedKeys, fieldNames);
        } else if (multiple && shiftPick) {
            // Shift click
            newSelectedKeys = Array.from(new Set([].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(cachedSelectedKeys.current || []), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tree$2f$utils$2f$dictUtil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["calcRangeKeys"])({
                treeData,
                expandedKeys,
                startKey: key,
                endKey: lastSelectedKey.current,
                fieldNames
            })))));
            newEvent.selectedNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tree$2f$utils$2f$dictUtil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["convertDirectoryKeysToNodes"])(treeData, newSelectedKeys, fieldNames);
        } else {
            // Single click
            newSelectedKeys = [
                key
            ];
            lastSelectedKey.current = key;
            cachedSelectedKeys.current = newSelectedKeys;
            newEvent.selectedNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tree$2f$utils$2f$dictUtil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["convertDirectoryKeysToNodes"])(treeData, newSelectedKeys, fieldNames);
        }
        (_a = props.onSelect) === null || _a === void 0 ? void 0 : _a.call(props, newSelectedKeys, newEvent);
        if (!('selectedKeys' in props)) {
            setSelectedKeys(newSelectedKeys);
        }
    };
    const { getPrefixCls, direction } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { prefixCls: customizePrefixCls, className, showIcon = true, expandAction = 'click' } = props, otherProps = __rest(props, [
        "prefixCls",
        "className",
        "showIcon",
        "expandAction"
    ]);
    const prefixCls = getPrefixCls('tree', customizePrefixCls);
    const connectClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-directory`, {
        [`${prefixCls}-directory-rtl`]: direction === 'rtl'
    }, className);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tree$2f$Tree$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], Object.assign({
        icon: getIcon,
        ref: ref,
        blockNode: true
    }, otherProps, {
        showIcon: showIcon,
        expandAction: expandAction,
        prefixCls: prefixCls,
        className: connectClassName,
        expandedKeys: expandedKeys,
        selectedKeys: selectedKeys,
        onSelect: onSelect,
        onExpand: onExpand
    }));
};
const ForwardDirectoryTree = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](DirectoryTree);
if ("TURBOPACK compile-time truthy", 1) {
    ForwardDirectoryTree.displayName = 'DirectoryTree';
}
const __TURBOPACK__default__export__ = ForwardDirectoryTree;
}),
"[project]/Downloads/One click/node_modules/antd/es/tree/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tree$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-tree/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tree$2f$es$2f$TreeNode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TreeNode$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-tree/es/TreeNode.js [ssr] (ecmascript) <export default as TreeNode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tree$2f$DirectoryTree$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tree/DirectoryTree.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tree$2f$Tree$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tree/Tree.js [ssr] (ecmascript)");
"use client";
;
;
;
const Tree = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tree$2f$Tree$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"];
Tree.DirectoryTree = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tree$2f$DirectoryTree$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"];
Tree.TreeNode = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tree$2f$es$2f$TreeNode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TreeNode$3e$__["TreeNode"];
const __TURBOPACK__default__export__ = Tree;
}),
"[project]/Downloads/One click/node_modules/antd/es/app/context.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppConfigContext",
    ()=>AppConfigContext,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
const AppConfigContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createContext({});
const AppContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createContext({
    message: {},
    notification: {},
    modal: {}
});
const __TURBOPACK__default__export__ = AppContext;
}),
"[project]/Downloads/One click/node_modules/antd/es/message/style/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/Keyframes.js [ssr] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/hooks/useZIndex.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [ssr] (ecmascript) <export merge as mergeToken>");
;
;
;
;
const genMessageStyle = (token)=>{
    const { componentCls, iconCls, boxShadow, colorText, colorSuccess, colorError, colorWarning, colorInfo, fontSizeLG, motionEaseInOutCirc, motionDurationSlow, marginXS, paddingXS, borderRadiusLG, zIndexPopup, // Custom token
    contentPadding, contentBg } = token;
    const noticeCls = `${componentCls}-notice`;
    const messageMoveIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('MessageMoveIn', {
        '0%': {
            padding: 0,
            transform: 'translateY(-100%)',
            opacity: 0
        },
        '100%': {
            padding: paddingXS,
            transform: 'translateY(0)',
            opacity: 1
        }
    });
    const messageMoveOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('MessageMoveOut', {
        '0%': {
            maxHeight: token.height,
            padding: paddingXS,
            opacity: 1
        },
        '100%': {
            maxHeight: 0,
            padding: 0,
            opacity: 0
        }
    });
    const noticeStyle = {
        padding: paddingXS,
        textAlign: 'center',
        [`${componentCls}-custom-content`]: {
            display: 'flex',
            alignItems: 'center'
        },
        [`${componentCls}-custom-content > ${iconCls}`]: {
            marginInlineEnd: marginXS,
            // affected by ltr or rtl
            fontSize: fontSizeLG
        },
        [`${noticeCls}-content`]: {
            display: 'inline-block',
            padding: contentPadding,
            background: contentBg,
            borderRadius: borderRadiusLG,
            boxShadow,
            pointerEvents: 'all'
        },
        [`${componentCls}-success > ${iconCls}`]: {
            color: colorSuccess
        },
        [`${componentCls}-error > ${iconCls}`]: {
            color: colorError
        },
        [`${componentCls}-warning > ${iconCls}`]: {
            color: colorWarning
        },
        [`${componentCls}-info > ${iconCls},
      ${componentCls}-loading > ${iconCls}`]: {
            color: colorInfo
        }
    };
    return [
        // ============================ Holder ============================
        {
            [componentCls]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token)), {
                color: colorText,
                position: 'fixed',
                top: marginXS,
                width: '100%',
                pointerEvents: 'none',
                zIndex: zIndexPopup,
                [`${componentCls}-move-up`]: {
                    animationFillMode: 'forwards'
                },
                [`
        ${componentCls}-move-up-appear,
        ${componentCls}-move-up-enter
      `]: {
                    animationName: messageMoveIn,
                    animationDuration: motionDurationSlow,
                    animationPlayState: 'paused',
                    animationTimingFunction: motionEaseInOutCirc
                },
                [`
        ${componentCls}-move-up-appear${componentCls}-move-up-appear-active,
        ${componentCls}-move-up-enter${componentCls}-move-up-enter-active
      `]: {
                    animationPlayState: 'running'
                },
                [`${componentCls}-move-up-leave`]: {
                    animationName: messageMoveOut,
                    animationDuration: motionDurationSlow,
                    animationPlayState: 'paused',
                    animationTimingFunction: motionEaseInOutCirc
                },
                [`${componentCls}-move-up-leave${componentCls}-move-up-leave-active`]: {
                    animationPlayState: 'running'
                },
                '&-rtl': {
                    direction: 'rtl',
                    span: {
                        direction: 'rtl'
                    }
                }
            })
        },
        // ============================ Notice ============================
        {
            [componentCls]: {
                [`${noticeCls}-wrapper`]: Object.assign({}, noticeStyle)
            }
        },
        // ============================= Pure =============================
        {
            [`${componentCls}-notice-pure-panel`]: Object.assign(Object.assign({}, noticeStyle), {
                padding: 0,
                textAlign: 'start'
            })
        }
    ];
};
const prepareComponentToken = (token)=>({
        zIndexPopup: token.zIndexPopupBase + __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["CONTAINER_MAX_OFFSET"] + 10,
        contentBg: token.colorBgElevated,
        contentPadding: `${(token.controlHeightLG - token.fontSize * token.lineHeight) / 2}px ${token.paddingSM}px`
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])('Message', (token)=>{
    // Gen-style functions here
    const combinedToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        height: 150
    });
    return genMessageStyle(combinedToken);
}, prepareComponentToken);
}),
"[project]/Downloads/One click/node_modules/antd/es/message/PurePanel.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PureContent",
    ()=>PureContent,
    "TypeIcon",
    ()=>TypeIcon,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ExclamationCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$InfoCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-notification/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$Notice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Notice$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-notification/es/Notice.js [ssr] (ecmascript) <export default as Notice>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/message/style/index.js [ssr] (ecmascript)");
"use client";
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
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
const TypeIcon = {
    info: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$InfoCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null),
    success: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null),
    error: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null),
    warning: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ExclamationCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null),
    loading: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null)
};
const PureContent = ({ prefixCls, type, icon, children })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-custom-content`, `${prefixCls}-${type}`)
    }, icon || TypeIcon[type], /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", null, children));
/** @private Internal Component. Do not use in your production. */ const PurePanel = (props)=>{
    const { prefixCls: staticPrefixCls, className, type, icon, content } = props, restProps = __rest(props, [
        "prefixCls",
        "className",
        "type",
        "icon",
        "content"
    ]);
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = staticPrefixCls || getPrefixCls('message');
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$Notice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Notice$3e$__["Notice"], Object.assign({}, restProps, {
        prefixCls: prefixCls,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(className, hashId, `${prefixCls}-notice-pure-panel`, cssVarCls, rootCls),
        eventKey: "pure",
        duration: null,
        content: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](PureContent, {
            prefixCls: prefixCls,
            type: type,
            icon: icon
        }, content)
    })));
};
const __TURBOPACK__default__export__ = PurePanel;
}),
"[project]/Downloads/One click/node_modules/antd/es/message/util.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMotion",
    ()=>getMotion,
    "wrapPromiseFn",
    ()=>wrapPromiseFn
]);
function getMotion(prefixCls, transitionName) {
    return {
        motionName: transitionName !== null && transitionName !== void 0 ? transitionName : `${prefixCls}-move-up`
    };
}
function wrapPromiseFn(openFn) {
    let closeFn;
    const closePromise = new Promise((resolve)=>{
        closeFn = openFn(()=>{
            resolve(true);
        });
    });
    const result = ()=>{
        closeFn === null || closeFn === void 0 ? void 0 : closeFn();
    };
    result.then = (filled, rejected)=>closePromise.then(filled, rejected);
    result.promise = closePromise;
    return result;
}
}),
"[project]/Downloads/One click/node_modules/antd/es/message/useMessage.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useMessage,
    "useInternalMessage",
    ()=>useInternalMessage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-notification/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$NotificationProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NotificationProvider$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-notification/es/NotificationProvider.js [ssr] (ecmascript) <export default as NotificationProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$hooks$2f$useNotification$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useNotification$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-notification/es/hooks/useNotification.js [ssr] (ecmascript) <export default as useNotification>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$PurePanel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/message/PurePanel.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/message/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/message/util.js [ssr] (ecmascript)");
"use client";
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
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
const DEFAULT_OFFSET = 8;
const DEFAULT_DURATION = 3;
const Wrapper = ({ children, prefixCls })=>{
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$NotificationProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NotificationProvider$3e$__["NotificationProvider"], {
        classNames: {
            list: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(hashId, cssVarCls, rootCls)
        }
    }, children));
};
const renderNotifications = (node, { prefixCls, key })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](Wrapper, {
        prefixCls: prefixCls,
        key: key
    }, node);
const Holder = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"]((props, ref)=>{
    const { top, prefixCls: staticPrefixCls, getContainer: staticGetContainer, maxCount, duration = DEFAULT_DURATION, rtl, transitionName, onAllRemoved } = props;
    const { getPrefixCls, getPopupContainer, message, direction } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = staticPrefixCls || getPrefixCls('message');
    // =============================== Style ===============================
    const getStyle = ()=>({
            left: '50%',
            transform: 'translateX(-50%)',
            top: top !== null && top !== void 0 ? top : DEFAULT_OFFSET
        });
    const getClassName = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
            [`${prefixCls}-rtl`]: rtl !== null && rtl !== void 0 ? rtl : direction === 'rtl'
        });
    // ============================== Motion ===============================
    const getNotificationMotion = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getMotion"])(prefixCls, transitionName);
    // ============================ Close Icon =============================
    const mergedCloseIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", {
        className: `${prefixCls}-close-x`
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: `${prefixCls}-close-icon`
    }));
    // ============================== Origin ===============================
    const [api, holder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$notification$2f$es$2f$hooks$2f$useNotification$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useNotification$3e$__["useNotification"])({
        prefixCls,
        style: getStyle,
        className: getClassName,
        motion: getNotificationMotion,
        closable: false,
        closeIcon: mergedCloseIcon,
        duration,
        getContainer: ()=>(staticGetContainer === null || staticGetContainer === void 0 ? void 0 : staticGetContainer()) || (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer()) || document.body,
        maxCount,
        onAllRemoved,
        renderNotifications
    });
    // ================================ Ref ================================
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useImperativeHandle"](ref, ()=>Object.assign(Object.assign({}, api), {
            prefixCls,
            message
        }));
    return holder;
});
// ==============================================================================
// ==                                   Hook                                   ==
// ==============================================================================
let keyIndex = 0;
function useInternalMessage(messageConfig) {
    const holderRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"](null);
    const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])('Message');
    // ================================ API ================================
    const wrapAPI = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](()=>{
        // Wrap with notification content
        // >>> close
        const close = (key)=>{
            var _a;
            (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.close(key);
        };
        // >>> Open
        const open = (config)=>{
            if (!holderRef.current) {
                ("TURBOPACK compile-time truthy", 1) ? warning(false, 'usage', 'You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.') : "TURBOPACK unreachable";
                const fakeResult = ()=>{};
                // eslint-disable-next-line react-hooks/immutability
                fakeResult.then = ()=>{};
                return fakeResult;
            }
            const { open: originOpen, prefixCls, message } = holderRef.current;
            const noticePrefixCls = `${prefixCls}-notice`;
            const { content, icon, type, key, className, style, onClose } = config, restConfig = __rest(config, [
                "content",
                "icon",
                "type",
                "key",
                "className",
                "style",
                "onClose"
            ]);
            let mergedKey = key;
            if (mergedKey === undefined || mergedKey === null) {
                keyIndex += 1;
                mergedKey = `antd-message-${keyIndex}`;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["wrapPromiseFn"])((resolve)=>{
                originOpen(Object.assign(Object.assign({}, restConfig), {
                    key: mergedKey,
                    content: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$PurePanel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["PureContent"], {
                        prefixCls: prefixCls,
                        type: type,
                        icon: icon
                    }, content),
                    placement: 'top',
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(type && `${noticePrefixCls}-${type}`, className, message === null || message === void 0 ? void 0 : message.className),
                    style: Object.assign(Object.assign({}, message === null || message === void 0 ? void 0 : message.style), style),
                    onClose: ()=>{
                        onClose === null || onClose === void 0 ? void 0 : onClose();
                        resolve();
                    }
                }));
                // Return close function
                return ()=>{
                    close(mergedKey);
                };
            });
        };
        // >>> destroy
        const destroy = (key)=>{
            var _a;
            if (key !== undefined) {
                close(key);
            } else {
                (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
            }
        };
        const clone = {
            open,
            destroy
        };
        const keys = [
            'info',
            'success',
            'warning',
            'error',
            'loading'
        ];
        keys.forEach((type)=>{
            const typeOpen = (jointContent, duration, onClose)=>{
                let config;
                if (jointContent && typeof jointContent === 'object' && 'content' in jointContent) {
                    config = jointContent;
                } else {
                    config = {
                        content: jointContent
                    };
                }
                // Params
                let mergedDuration;
                let mergedOnClose;
                if (typeof duration === 'function') {
                    mergedOnClose = duration;
                } else {
                    mergedDuration = duration;
                    mergedOnClose = onClose;
                }
                const mergedConfig = Object.assign(Object.assign({
                    onClose: mergedOnClose,
                    duration: mergedDuration
                }, config), {
                    type
                });
                return open(mergedConfig);
            };
            clone[type] = typeOpen;
        });
        return clone;
    }, []);
    // ============================== Return ===============================
    return [
        wrapAPI,
        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](Holder, Object.assign({
            key: "message-holder"
        }, messageConfig, {
            ref: holderRef
        }))
    ];
}
function useMessage(messageConfig) {
    return useInternalMessage(messageConfig);
}
}),
"[project]/Downloads/One click/node_modules/antd/es/message/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "actDestroy",
    ()=>actDestroy,
    "actWrapper",
    ()=>actWrapper,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$app$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/app/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$UnstableContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/UnstableContext.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$PurePanel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/message/PurePanel.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$useMessage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/message/useMessage.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/message/util.js [ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
let message = null;
let act = (callback)=>callback();
let taskQueue = [];
let defaultGlobalConfig = {};
function getGlobalContext() {
    const { getContainer, duration, rtl, maxCount, top } = defaultGlobalConfig;
    const mergedContainer = (getContainer === null || getContainer === void 0 ? void 0 : getContainer()) || document.body;
    return {
        getContainer: ()=>mergedContainer,
        duration,
        rtl,
        maxCount,
        top
    };
}
const GlobalHolder = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].forwardRef((props, ref)=>{
    const { messageConfig, sync } = props;
    const { getPrefixCls } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = defaultGlobalConfig.prefixCls || getPrefixCls('message');
    const appConfig = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$app$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["AppConfigContext"]);
    const [api, holder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$useMessage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useInternalMessage"])(Object.assign(Object.assign(Object.assign({}, messageConfig), {
        prefixCls
    }), appConfig.message));
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useImperativeHandle(ref, ()=>{
        const instance = Object.assign({}, api);
        Object.keys(instance).forEach((method)=>{
            instance[method] = (...args)=>{
                sync();
                return api[method].apply(api, args);
            };
        });
        return {
            instance,
            sync
        };
    });
    return holder;
});
const GlobalHolderWrapper = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].forwardRef((_, ref)=>{
    const [messageConfig, setMessageConfig] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useState(getGlobalContext);
    const sync = ()=>{
        setMessageConfig(getGlobalContext);
    };
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useEffect(sync, []);
    const global = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["globalConfig"])();
    const rootPrefixCls = global.getRootPrefixCls();
    const rootIconPrefixCls = global.getIconPrefixCls();
    const theme = global.getTheme();
    const dom = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(GlobalHolder, {
        ref: ref,
        sync: sync,
        messageConfig: messageConfig
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        prefixCls: rootPrefixCls,
        iconPrefixCls: rootIconPrefixCls,
        theme: theme
    }, global.holderRender ? global.holderRender(dom) : dom);
});
const flushMessageQueue = ()=>{
    if (!message) {
        const holderFragment = document.createDocumentFragment();
        const newMessage = {
            fragment: holderFragment
        };
        message = newMessage;
        // Delay render to avoid sync issue
        act(()=>{
            const reactRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$UnstableContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unstableSetRender"])();
            reactRender(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(GlobalHolderWrapper, {
                ref: (node)=>{
                    const { instance, sync } = node || {};
                    // React 18 test env will throw if call immediately in ref
                    Promise.resolve().then(()=>{
                        if (!newMessage.instance && instance) {
                            newMessage.instance = instance;
                            newMessage.sync = sync;
                            flushMessageQueue();
                        }
                    });
                }
            }), holderFragment);
        });
        return;
    }
    // Notification not ready
    if (!message.instance) {
        return;
    }
    // >>> Execute task
    taskQueue.forEach((task)=>{
        const { type, skipped } = task;
        // Only `skipped` when user call notice but cancel it immediately
        // and instance not ready
        if (!skipped) {
            switch(type){
                case 'open':
                    {
                        act(()=>{
                            const closeFn = message.instance.open(Object.assign(Object.assign({}, defaultGlobalConfig), task.config));
                            closeFn === null || closeFn === void 0 ? void 0 : closeFn.then(task.resolve);
                            task.setCloseFn(closeFn);
                        });
                        break;
                    }
                case 'destroy':
                    act(()=>{
                        message === null || message === void 0 ? void 0 : message.instance.destroy(task.key);
                    });
                    break;
                // Other type open
                default:
                    {
                        act(()=>{
                            var _message$instance;
                            const closeFn = (_message$instance = message.instance)[type].apply(_message$instance, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(task.args));
                            closeFn === null || closeFn === void 0 ? void 0 : closeFn.then(task.resolve);
                            task.setCloseFn(closeFn);
                        });
                    }
            }
        }
    });
    // Clean up
    taskQueue = [];
};
// ==============================================================================
// ==                                  Export                                  ==
// ==============================================================================
function setMessageGlobalConfig(config) {
    defaultGlobalConfig = Object.assign(Object.assign({}, defaultGlobalConfig), config);
    // Trigger sync for it
    act(()=>{
        var _a;
        (_a = message === null || message === void 0 ? void 0 : message.sync) === null || _a === void 0 ? void 0 : _a.call(message);
    });
}
function open(config) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["wrapPromiseFn"])((resolve)=>{
        let closeFn;
        const task = {
            type: 'open',
            config,
            resolve,
            setCloseFn: (fn)=>{
                closeFn = fn;
            }
        };
        taskQueue.push(task);
        return ()=>{
            if (closeFn) {
                act(()=>{
                    closeFn();
                });
            } else {
                task.skipped = true;
            }
        };
    });
    flushMessageQueue();
    return result;
}
function typeOpen(type, args) {
    const global = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["globalConfig"])();
    if (("TURBOPACK compile-time value", "development") !== 'production' && !global.holderRender) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["warnContext"])('message');
    }
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["wrapPromiseFn"])((resolve)=>{
        let closeFn;
        const task = {
            type,
            args,
            resolve,
            setCloseFn: (fn)=>{
                closeFn = fn;
            }
        };
        taskQueue.push(task);
        return ()=>{
            if (closeFn) {
                act(()=>{
                    closeFn();
                });
            } else {
                task.skipped = true;
            }
        };
    });
    flushMessageQueue();
    return result;
}
const destroy = (key)=>{
    taskQueue.push({
        type: 'destroy',
        key
    });
    flushMessageQueue();
};
const methods = [
    'success',
    'info',
    'warning',
    'error',
    'loading'
];
const baseStaticMethods = {
    open,
    destroy,
    config: setMessageGlobalConfig,
    useMessage: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$useMessage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
    _InternalPanelDoNotUseOrYouWillBeFired: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$PurePanel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
};
const staticMethods = baseStaticMethods;
methods.forEach((type)=>{
    staticMethods[type] = (...args)=>typeOpen(type, args);
});
// ==============================================================================
// ==                                   Test                                   ==
// ==============================================================================
const noop = ()=>{};
let _actWrapper = noop;
if (("TURBOPACK compile-time value", "development") === 'test') {
    _actWrapper = (wrapper)=>{
        act = wrapper;
    };
}
const actWrapper = _actWrapper;
;
let _actDestroy = noop;
if (("TURBOPACK compile-time value", "development") === 'test') {
    _actDestroy = ()=>{
        message = null;
    };
}
const actDestroy = _actDestroy;
;
const __TURBOPACK__default__export__ = staticMethods;
}),
"[project]/Downloads/One click/node_modules/antd/es/message/index.js [ssr] (ecmascript) <export default as message>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "message",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/message/index.js [ssr] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/antd/es/tag/style/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken,
    "prepareToken",
    ()=>prepareToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/fast-color/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/fast-color/es/FastColor.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [ssr] (ecmascript) <export merge as mergeToken>");
;
;
;
;
// ============================== Styles ==============================
const genBaseStyle = (token)=>{
    const { paddingXXS, lineWidth, tagPaddingHorizontal, componentCls, calc } = token;
    const paddingInline = calc(tagPaddingHorizontal).sub(lineWidth).equal();
    const iconMarginInline = calc(paddingXXS).sub(lineWidth).equal();
    return {
        // Result
        [componentCls]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token)), {
            display: 'inline-block',
            height: 'auto',
            // https://github.com/ant-design/ant-design/pull/47504
            marginInlineEnd: token.marginXS,
            paddingInline,
            fontSize: token.tagFontSize,
            lineHeight: token.tagLineHeight,
            whiteSpace: 'nowrap',
            background: token.defaultBg,
            border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
            borderRadius: token.borderRadiusSM,
            opacity: 1,
            transition: `all ${token.motionDurationMid}`,
            textAlign: 'start',
            position: 'relative',
            // RTL
            [`&${componentCls}-rtl`]: {
                direction: 'rtl'
            },
            '&, a, a:hover': {
                color: token.defaultColor
            },
            [`${componentCls}-close-icon`]: {
                marginInlineStart: iconMarginInline,
                fontSize: token.tagIconSize,
                color: token.colorIcon,
                cursor: 'pointer',
                transition: `all ${token.motionDurationMid}`,
                '&:hover': {
                    color: token.colorTextHeading
                }
            },
            [`&${componentCls}-has-color`]: {
                borderColor: 'transparent',
                [`&, a, a:hover, ${token.iconCls}-close, ${token.iconCls}-close:hover`]: {
                    color: token.colorTextLightSolid
                }
            },
            '&-checkable': {
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                cursor: 'pointer',
                [`&:not(${componentCls}-checkable-checked):hover`]: {
                    color: token.colorPrimary,
                    backgroundColor: token.colorFillSecondary
                },
                '&:active, &-checked': {
                    color: token.colorTextLightSolid
                },
                '&-checked': {
                    backgroundColor: token.colorPrimary,
                    '&:hover': {
                        backgroundColor: token.colorPrimaryHover
                    }
                },
                '&:active': {
                    backgroundColor: token.colorPrimaryActive
                }
            },
            '&-hidden': {
                display: 'none'
            },
            // To ensure that a space will be placed between character and `Icon`.
            [`> ${token.iconCls} + span, > span + ${token.iconCls}`]: {
                marginInlineStart: paddingInline
            }
        }),
        [`${componentCls}-borderless`]: {
            borderColor: 'transparent',
            background: token.tagBorderlessBg
        }
    };
};
const prepareToken = (token)=>{
    const { lineWidth, fontSizeIcon, calc } = token;
    const tagFontSize = token.fontSizeSM;
    const tagToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        tagFontSize,
        tagLineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(calc(token.lineHeightSM).mul(tagFontSize).equal()),
        tagIconSize: calc(fontSizeIcon).sub(calc(lineWidth).mul(2)).equal(),
        // Tag icon is much smaller
        tagPaddingHorizontal: 8,
        // Fixed padding.
        tagBorderlessBg: token.defaultBg
    });
    return tagToken;
};
const prepareComponentToken = (token)=>({
        defaultBg: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FastColor"](token.colorFillQuaternary).onBackground(token.colorBgContainer).toHexString(),
        defaultColor: token.colorText
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])('Tag', (token)=>{
    const tagToken = prepareToken(token);
    return genBaseStyle(tagToken);
}, prepareComponentToken);
}),
"[project]/Downloads/One click/node_modules/antd/es/tag/CheckableTag.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tag/style/index.js [ssr] (ecmascript)");
"use client";
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
const CheckableTag = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, style, className, checked, children, icon, onChange, onClick } = props, restProps = __rest(props, [
        "prefixCls",
        "style",
        "className",
        "checked",
        "children",
        "icon",
        "onChange",
        "onClick"
    ]);
    const { getPrefixCls, tag } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const handleClick = (e)=>{
        onChange === null || onChange === void 0 ? void 0 : onChange(!checked);
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    };
    const prefixCls = getPrefixCls('tag', customizePrefixCls);
    // Style
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, `${prefixCls}-checkable`, {
        [`${prefixCls}-checkable-checked`]: checked
    }, tag === null || tag === void 0 ? void 0 : tag.className, className, hashId, cssVarCls);
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", Object.assign({}, restProps, {
        ref: ref,
        style: Object.assign(Object.assign({}, style), tag === null || tag === void 0 ? void 0 : tag.style),
        className: cls,
        onClick: handleClick
    }), icon, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", null, children)));
});
const __TURBOPACK__default__export__ = CheckableTag;
}),
"[project]/Downloads/One click/node_modules/antd/es/tag/style/presetCmp.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Style as status component
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tag/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__genPresetColor$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genPresetColor.js [ssr] (ecmascript) <export default as genPresetColor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [ssr] (ecmascript)");
;
;
// ============================== Preset ==============================
const genPresetStyle = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__genPresetColor$3e$__["genPresetColor"])(token, (colorKey, { textColor, lightBorderColor, lightColor, darkColor })=>({
            [`${token.componentCls}${token.componentCls}-${colorKey}`]: {
                color: textColor,
                background: lightColor,
                borderColor: lightBorderColor,
                // Inverse color
                '&-inverse': {
                    color: token.colorTextLightSolid,
                    background: darkColor,
                    borderColor: darkColor
                },
                [`&${token.componentCls}-borderless`]: {
                    borderColor: 'transparent'
                }
            }
        }));
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genSubStyleComponent"])([
    'Tag',
    'preset'
], (token)=>{
    const tagToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["prepareToken"])(token);
    return genPresetStyle(tagToken);
}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["prepareComponentToken"]);
}),
"[project]/Downloads/One click/node_modules/antd/es/tag/style/statusCmp.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tag/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$capitalize$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/capitalize.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [ssr] (ecmascript)");
;
;
;
const genTagStatusStyle = (token, status, cssVariableType)=>{
    const capitalizedCssVariableType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$capitalize$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(cssVariableType);
    return {
        [`${token.componentCls}${token.componentCls}-${status}`]: {
            color: token[`color${cssVariableType}`],
            background: token[`color${capitalizedCssVariableType}Bg`],
            borderColor: token[`color${capitalizedCssVariableType}Border`],
            [`&${token.componentCls}-borderless`]: {
                borderColor: 'transparent'
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genSubStyleComponent"])([
    'Tag',
    'status'
], (token)=>{
    const tagToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["prepareToken"])(token);
    return [
        genTagStatusStyle(tagToken, 'success', 'Success'),
        genTagStatusStyle(tagToken, 'processing', 'Info'),
        genTagStatusStyle(tagToken, 'error', 'Error'),
        genTagStatusStyle(tagToken, 'warning', 'Warning')
    ];
}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["prepareComponentToken"]);
}),
"[project]/Downloads/One click/node_modules/antd/es/tag/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/omit.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$colors$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/colors.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/hooks/useClosable.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/reactNode.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/wave/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$CheckableTag$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tag/CheckableTag.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tag/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$presetCmp$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tag/style/presetCmp.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$statusCmp$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tag/style/statusCmp.js [ssr] (ecmascript)");
"use client";
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
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
const InternalTag = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"]((tagProps, ref)=>{
    const { prefixCls: customizePrefixCls, className, rootClassName, style, children, icon, color, onClose, bordered = true, visible: deprecatedVisible } = tagProps, props = __rest(tagProps, [
        "prefixCls",
        "className",
        "rootClassName",
        "style",
        "children",
        "icon",
        "color",
        "onClose",
        "bordered",
        "visible"
    ]);
    const { getPrefixCls, direction, tag: tagContext } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const [visible, setVisible] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](true);
    const domProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(props, [
        'closeIcon',
        'closable'
    ]);
    // Warning for deprecated usage
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])('Tag');
        warning.deprecated(!('visible' in tagProps), 'visible', 'visible && <Tag />');
    }
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](()=>{
        if (deprecatedVisible !== undefined) {
            setVisible(deprecatedVisible);
        }
    }, [
        deprecatedVisible
    ]);
    const isPreset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$colors$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["isPresetColor"])(color);
    const isStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$colors$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["isPresetStatusColor"])(color);
    const isInternalColor = isPreset || isStatus;
    const tagStyle = Object.assign(Object.assign({
        backgroundColor: color && !isInternalColor ? color : undefined
    }, tagContext === null || tagContext === void 0 ? void 0 : tagContext.style), style);
    const prefixCls = getPrefixCls('tag', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    // Style
    const tagClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, tagContext === null || tagContext === void 0 ? void 0 : tagContext.className, {
        [`${prefixCls}-${color}`]: isInternalColor,
        [`${prefixCls}-has-color`]: color && !isInternalColor,
        [`${prefixCls}-hidden`]: !visible,
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-borderless`]: !bordered
    }, className, rootClassName, hashId, cssVarCls);
    const handleCloseClick = (e)=>{
        e.stopPropagation();
        onClose === null || onClose === void 0 ? void 0 : onClose(e);
        if (e.defaultPrevented) {
            return;
        }
        setVisible(false);
    };
    const [, mergedCloseIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useClosable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["pickClosable"])(tagProps), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["pickClosable"])(tagContext), {
        closable: false,
        closeIconRender: (iconNode)=>{
            const replacement = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", {
                className: `${prefixCls}-close-icon`,
                onClick: handleCloseClick
            }, iconNode);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["replaceElement"])(iconNode, replacement, (originProps)=>({
                    onClick: (e)=>{
                        var _a;
                        (_a = originProps === null || originProps === void 0 ? void 0 : originProps.onClick) === null || _a === void 0 ? void 0 : _a.call(originProps, e);
                        handleCloseClick(e);
                    },
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(originProps === null || originProps === void 0 ? void 0 : originProps.className, `${prefixCls}-close-icon`)
                }));
        }
    });
    const isNeedWave = typeof props.onClick === 'function' || children && children.type === 'a';
    const iconNode = icon || null;
    const kids = iconNode ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Fragment"], null, iconNode, children && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", null, children)) : children;
    const tagNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", Object.assign({}, domProps, {
        ref: ref,
        className: tagClassName,
        style: tagStyle
    }), kids, mergedCloseIcon, isPreset && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$presetCmp$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        key: "preset",
        prefixCls: prefixCls
    }), isStatus && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$statusCmp$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        key: "status",
        prefixCls: prefixCls
    }));
    return wrapCSSVar(isNeedWave ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        component: "Tag"
    }, tagNode) : tagNode);
});
const Tag = InternalTag;
if ("TURBOPACK compile-time truthy", 1) {
    Tag.displayName = 'Tag';
}
Tag.CheckableTag = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$CheckableTag$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = Tag;
}),
"[project]/Downloads/One click/node_modules/antd/es/tag/index.js [ssr] (ecmascript) <export default as Tag>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tag/index.js [ssr] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/antd/es/style/motion/fade.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fadeIn",
    ()=>fadeIn,
    "fadeOut",
    ()=>fadeOut,
    "initFadeMotion",
    ()=>initFadeMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/Keyframes.js [ssr] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/motion/motion.js [ssr] (ecmascript)");
;
;
const fadeIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antFadeIn', {
    '0%': {
        opacity: 0
    },
    '100%': {
        opacity: 1
    }
});
const fadeOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antFadeOut', {
    '0%': {
        opacity: 1
    },
    '100%': {
        opacity: 0
    }
});
const initFadeMotion = (token, sameLevel = false)=>{
    const { antCls } = token;
    const motionCls = `${antCls}-fade`;
    const sameLevelPrefix = sameLevel ? '&' : '';
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["initMotion"])(motionCls, fadeIn, fadeOut, token.motionDurationMid, sameLevel),
        {
            [`
        ${sameLevelPrefix}${motionCls}-enter,
        ${sameLevelPrefix}${motionCls}-appear
      `]: {
                opacity: 0,
                animationTimingFunction: 'linear'
            },
            [`${sameLevelPrefix}${motionCls}-leave`]: {
                animationTimingFunction: 'linear'
            }
        }
    ];
};
}),
"[project]/Downloads/One click/node_modules/antd/es/upload/style/dragger.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [ssr] (ecmascript)");
;
const genDraggerStyle = (token)=>{
    const { componentCls, iconCls } = token;
    return {
        [`${componentCls}-wrapper`]: {
            [`${componentCls}-drag`]: {
                position: 'relative',
                width: '100%',
                height: '100%',
                textAlign: 'center',
                background: token.colorFillAlter,
                border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} dashed ${token.colorBorder}`,
                borderRadius: token.borderRadiusLG,
                cursor: 'pointer',
                transition: `border-color ${token.motionDurationSlow}`,
                [componentCls]: {
                    padding: token.padding
                },
                [`${componentCls}-btn`]: {
                    display: 'table',
                    width: '100%',
                    height: '100%',
                    outline: 'none',
                    borderRadius: token.borderRadiusLG,
                    '&:focus-visible': {
                        outline: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidthFocus)} solid ${token.colorPrimaryBorder}`
                    }
                },
                [`${componentCls}-drag-container`]: {
                    display: 'table-cell',
                    verticalAlign: 'middle'
                },
                [`
          &:not(${componentCls}-disabled):hover,
          &-hover:not(${componentCls}-disabled)
        `]: {
                    borderColor: token.colorPrimaryHover
                },
                [`p${componentCls}-drag-icon`]: {
                    marginBottom: token.margin,
                    [iconCls]: {
                        color: token.colorPrimary,
                        fontSize: token.uploadThumbnailSize
                    }
                },
                [`p${componentCls}-text`]: {
                    margin: `0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.marginXXS)}`,
                    color: token.colorTextHeading,
                    fontSize: token.fontSizeLG
                },
                [`p${componentCls}-hint`]: {
                    color: token.colorTextDescription,
                    fontSize: token.fontSize
                },
                // ===================== Disabled =====================
                [`&${componentCls}-disabled`]: {
                    [`p${componentCls}-drag-icon ${iconCls},
            p${componentCls}-text,
            p${componentCls}-hint
          `]: {
                        color: token.colorTextDisabled
                    }
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = genDraggerStyle;
}),
"[project]/Downloads/One click/node_modules/antd/es/upload/style/list.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [ssr] (ecmascript)");
;
;
const genListStyle = (token)=>{
    const { componentCls, iconCls, fontSize, lineHeight, calc } = token;
    const itemCls = `${componentCls}-list-item`;
    const actionsCls = `${itemCls}-actions`;
    const actionCls = `${itemCls}-action`;
    return {
        [`${componentCls}-wrapper`]: {
            [`${componentCls}-list`]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["clearFix"])()), {
                lineHeight: token.lineHeight,
                [itemCls]: {
                    position: 'relative',
                    height: calc(token.lineHeight).mul(fontSize).equal(),
                    marginTop: token.marginXS,
                    fontSize,
                    display: 'flex',
                    alignItems: 'center',
                    transition: `background-color ${token.motionDurationSlow}`,
                    borderRadius: token.borderRadiusSM,
                    '&:hover': {
                        backgroundColor: token.controlItemBgHover
                    },
                    [`${itemCls}-name`]: Object.assign(Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["textEllipsis"]), {
                        padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.paddingXS)}`,
                        lineHeight,
                        flex: 'auto',
                        transition: `all ${token.motionDurationSlow}`
                    }),
                    [actionsCls]: {
                        whiteSpace: 'nowrap',
                        [actionCls]: {
                            opacity: 0
                        },
                        [iconCls]: {
                            color: token.actionsColor,
                            transition: `all ${token.motionDurationSlow}`
                        },
                        [`
              ${actionCls}:focus-visible,
              &.picture ${actionCls}
            `]: {
                            opacity: 1
                        }
                    },
                    [`${componentCls}-icon ${iconCls}`]: {
                        color: token.colorIcon,
                        fontSize
                    },
                    [`${itemCls}-progress`]: {
                        position: 'absolute',
                        bottom: token.calc(token.uploadProgressOffset).mul(-1).equal(),
                        width: '100%',
                        paddingInlineStart: calc(fontSize).add(token.paddingXS).equal(),
                        fontSize,
                        lineHeight: 0,
                        pointerEvents: 'none',
                        '> div': {
                            margin: 0
                        }
                    }
                },
                [`${itemCls}:hover ${actionCls}`]: {
                    opacity: 1
                },
                [`${itemCls}-error`]: {
                    color: token.colorError,
                    [`${itemCls}-name, ${componentCls}-icon ${iconCls}`]: {
                        color: token.colorError
                    },
                    [actionsCls]: {
                        [`${iconCls}, ${iconCls}:hover`]: {
                            color: token.colorError
                        },
                        [actionCls]: {
                            opacity: 1
                        }
                    }
                },
                [`${componentCls}-list-item-container`]: {
                    transition: `opacity ${token.motionDurationSlow}, height ${token.motionDurationSlow}`,
                    // For smooth removing animation
                    '&::before': {
                        display: 'table',
                        width: 0,
                        height: 0,
                        content: '""'
                    }
                }
            })
        }
    };
};
const __TURBOPACK__default__export__ = genListStyle;
}),
"[project]/Downloads/One click/node_modules/antd/es/upload/style/motion.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/Keyframes.js [ssr] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$fade$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/motion/fade.js [ssr] (ecmascript)");
;
;
// =========================== Motion ===========================
const genMotionStyle = (token)=>{
    const { componentCls } = token;
    const uploadAnimateInlineIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('uploadAnimateInlineIn', {
        from: {
            width: 0,
            height: 0,
            padding: 0,
            opacity: 0,
            margin: token.calc(token.marginXS).div(-2).equal()
        }
    });
    const uploadAnimateInlineOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('uploadAnimateInlineOut', {
        to: {
            width: 0,
            height: 0,
            padding: 0,
            opacity: 0,
            margin: token.calc(token.marginXS).div(-2).equal()
        }
    });
    const inlineCls = `${componentCls}-animate-inline`;
    return [
        {
            [`${componentCls}-wrapper`]: {
                [`${inlineCls}-appear, ${inlineCls}-enter, ${inlineCls}-leave`]: {
                    animationDuration: token.motionDurationSlow,
                    animationTimingFunction: token.motionEaseInOutCirc,
                    animationFillMode: 'forwards'
                },
                [`${inlineCls}-appear, ${inlineCls}-enter`]: {
                    animationName: uploadAnimateInlineIn
                },
                [`${inlineCls}-leave`]: {
                    animationName: uploadAnimateInlineOut
                }
            }
        },
        {
            [`${componentCls}-wrapper`]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$fade$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["initFadeMotion"])(token)
        },
        uploadAnimateInlineIn,
        uploadAnimateInlineOut
    ];
};
const __TURBOPACK__default__export__ = genMotionStyle;
}),
"[project]/Downloads/One click/node_modules/antd/es/upload/style/picture.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genPictureCardStyle",
    ()=>genPictureCardStyle,
    "genPictureStyle",
    ()=>genPictureStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/colors/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/colors/es/presets.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [ssr] (ecmascript)");
;
;
;
const genPictureStyle = (token)=>{
    const { componentCls, iconCls, uploadThumbnailSize, uploadProgressOffset, calc } = token;
    const listCls = `${componentCls}-list`;
    const itemCls = `${listCls}-item`;
    return {
        [`${componentCls}-wrapper`]: {
            // ${listCls} 增加优先级
            [`
        ${listCls}${listCls}-picture,
        ${listCls}${listCls}-picture-card,
        ${listCls}${listCls}-picture-circle
      `]: {
                [itemCls]: {
                    position: 'relative',
                    height: calc(uploadThumbnailSize).add(calc(token.lineWidth).mul(2)).add(calc(token.paddingXS).mul(2)).equal(),
                    padding: token.paddingXS,
                    border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
                    borderRadius: token.borderRadiusLG,
                    '&:hover': {
                        background: 'transparent'
                    },
                    [`${itemCls}-thumbnail`]: Object.assign(Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["textEllipsis"]), {
                        width: uploadThumbnailSize,
                        height: uploadThumbnailSize,
                        lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(calc(uploadThumbnailSize).add(token.paddingSM).equal()),
                        textAlign: 'center',
                        flex: 'none',
                        [iconCls]: {
                            fontSize: token.fontSizeHeading2,
                            color: token.colorPrimary
                        },
                        img: {
                            display: 'block',
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden'
                        }
                    }),
                    [`${itemCls}-progress`]: {
                        bottom: uploadProgressOffset,
                        width: `calc(100% - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(calc(token.paddingSM).mul(2).equal())})`,
                        marginTop: 0,
                        paddingInlineStart: calc(uploadThumbnailSize).add(token.paddingXS).equal()
                    }
                },
                [`${itemCls}-error`]: {
                    borderColor: token.colorError,
                    // Adjust the color of the error icon : https://github.com/ant-design/ant-design/pull/24160
                    [`${itemCls}-thumbnail ${iconCls}`]: {
                        [`svg path[fill='${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["blue"][0]}']`]: {
                            fill: token.colorErrorBg
                        },
                        [`svg path[fill='${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["blue"].primary}']`]: {
                            fill: token.colorError
                        }
                    }
                },
                [`${itemCls}-uploading`]: {
                    borderStyle: 'dashed',
                    [`${itemCls}-name`]: {
                        marginBottom: uploadProgressOffset
                    }
                }
            },
            [`${listCls}${listCls}-picture-circle ${itemCls}`]: {
                [`&, &::before, ${itemCls}-thumbnail`]: {
                    borderRadius: '50%'
                }
            }
        }
    };
};
const genPictureCardStyle = (token)=>{
    const { componentCls, iconCls, fontSizeLG, colorTextLightSolid, calc } = token;
    const listCls = `${componentCls}-list`;
    const itemCls = `${listCls}-item`;
    const uploadPictureCardSize = token.uploadPicCardSize;
    return {
        [`
      ${componentCls}-wrapper${componentCls}-picture-card-wrapper,
      ${componentCls}-wrapper${componentCls}-picture-circle-wrapper
    `]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["clearFix"])()), {
            display: 'block',
            [`${componentCls}${componentCls}-select`]: {
                width: uploadPictureCardSize,
                height: uploadPictureCardSize,
                textAlign: 'center',
                verticalAlign: 'top',
                backgroundColor: token.colorFillAlter,
                border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} dashed ${token.colorBorder}`,
                borderRadius: token.borderRadiusLG,
                cursor: 'pointer',
                transition: `border-color ${token.motionDurationSlow}`,
                [`> ${componentCls}`]: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    textAlign: 'center'
                },
                [`&:not(${componentCls}-disabled):hover`]: {
                    borderColor: token.colorPrimary
                }
            },
            // list
            [`${listCls}${listCls}-picture-card, ${listCls}${listCls}-picture-circle`]: {
                display: 'flex',
                flexWrap: 'wrap',
                '@supports not (gap: 1px)': {
                    '& > *': {
                        marginBlockEnd: token.marginXS,
                        marginInlineEnd: token.marginXS
                    }
                },
                '@supports (gap: 1px)': {
                    gap: token.marginXS
                },
                [`${listCls}-item-container`]: {
                    display: 'inline-block',
                    width: uploadPictureCardSize,
                    height: uploadPictureCardSize,
                    verticalAlign: 'top'
                },
                '&::after': {
                    display: 'none'
                },
                '&::before': {
                    display: 'none'
                },
                [itemCls]: {
                    height: '100%',
                    margin: 0,
                    '&::before': {
                        position: 'absolute',
                        zIndex: 1,
                        width: `calc(100% - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(calc(token.paddingXS).mul(2).equal())})`,
                        height: `calc(100% - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(calc(token.paddingXS).mul(2).equal())})`,
                        backgroundColor: token.colorBgMask,
                        opacity: 0,
                        transition: `all ${token.motionDurationSlow}`,
                        content: '" "'
                    }
                },
                [`${itemCls}:hover`]: {
                    [`&::before, ${itemCls}-actions`]: {
                        opacity: 1
                    }
                },
                [`${itemCls}-actions`]: {
                    position: 'absolute',
                    insetInlineStart: 0,
                    zIndex: 10,
                    width: '100%',
                    whiteSpace: 'nowrap',
                    textAlign: 'center',
                    opacity: 0,
                    transition: `all ${token.motionDurationSlow}`,
                    [`
            ${iconCls}-eye,
            ${iconCls}-download,
            ${iconCls}-delete
          `]: {
                        zIndex: 10,
                        width: fontSizeLG,
                        margin: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.marginXXS)}`,
                        fontSize: fontSizeLG,
                        cursor: 'pointer',
                        transition: `all ${token.motionDurationSlow}`,
                        color: colorTextLightSolid,
                        '&:hover': {
                            color: colorTextLightSolid
                        },
                        svg: {
                            verticalAlign: 'baseline'
                        }
                    }
                },
                [`${itemCls}-thumbnail, ${itemCls}-thumbnail img`]: {
                    position: 'static',
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                },
                [`${itemCls}-name`]: {
                    display: 'none',
                    textAlign: 'center'
                },
                [`${itemCls}-file + ${itemCls}-name`]: {
                    position: 'absolute',
                    bottom: token.margin,
                    display: 'block',
                    width: `calc(100% - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(calc(token.paddingXS).mul(2).equal())})`
                },
                [`${itemCls}-uploading`]: {
                    [`&${itemCls}`]: {
                        backgroundColor: token.colorFillAlter
                    },
                    [`&::before, ${iconCls}-eye, ${iconCls}-download, ${iconCls}-delete`]: {
                        display: 'none'
                    }
                },
                [`${itemCls}-progress`]: {
                    bottom: token.marginXL,
                    width: `calc(100% - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(calc(token.paddingXS).mul(2).equal())})`,
                    paddingInlineStart: 0
                }
            }
        }),
        [`${componentCls}-wrapper${componentCls}-picture-circle-wrapper`]: {
            [`${componentCls}${componentCls}-select`]: {
                borderRadius: '50%'
            }
        }
    };
};
;
}),
"[project]/Downloads/One click/node_modules/antd/es/upload/style/rtl.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// =========================== Motion ===========================
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const genRtlStyle = (token)=>{
    const { componentCls } = token;
    return {
        [`${componentCls}-rtl`]: {
            direction: 'rtl'
        }
    };
};
const __TURBOPACK__default__export__ = genRtlStyle;
}),
"[project]/Downloads/One click/node_modules/antd/es/upload/style/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__genCollapseMotion$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/motion/collapse.js [ssr] (ecmascript) <export default as genCollapseMotion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [ssr] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$dragger$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/upload/style/dragger.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$list$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/upload/style/list.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$motion$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/upload/style/motion.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$picture$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/upload/style/picture.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$rtl$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/upload/style/rtl.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const genBaseStyle = (token)=>{
    const { componentCls, colorTextDisabled } = token;
    return {
        [`${componentCls}-wrapper`]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token)), {
            [componentCls]: {
                outline: 0,
                "input[type='file']": {
                    cursor: 'pointer'
                }
            },
            [`${componentCls}-select`]: {
                display: 'inline-block'
            },
            [`${componentCls}-hidden`]: {
                display: 'none'
            },
            [`${componentCls}-disabled`]: {
                color: colorTextDisabled,
                cursor: 'not-allowed'
            }
        })
    };
};
const prepareComponentToken = (token)=>({
        actionsColor: token.colorIcon,
        pictureCardSize: token.controlHeightLG * 2.55
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])('Upload', (token)=>{
    const { fontSizeHeading3, fontHeight, lineWidth, pictureCardSize, calc } = token;
    const uploadToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        uploadThumbnailSize: calc(fontSizeHeading3).mul(2).equal(),
        uploadProgressOffset: calc(calc(fontHeight).div(2)).add(lineWidth).equal(),
        uploadPicCardSize: pictureCardSize
    });
    return [
        genBaseStyle(uploadToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$dragger$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(uploadToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$picture$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genPictureStyle"])(uploadToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$picture$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genPictureCardStyle"])(uploadToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$list$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(uploadToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$motion$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(uploadToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$rtl$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(uploadToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__genCollapseMotion$3e$__["genCollapseMotion"])(uploadToken)
    ];
}, prepareComponentToken);
}),
"[project]/Downloads/One click/node_modules/antd/es/upload/utils.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "file2Obj",
    ()=>file2Obj,
    "getFileItem",
    ()=>getFileItem,
    "isImageUrl",
    ()=>isImageUrl,
    "previewImage",
    ()=>previewImage,
    "removeFileItem",
    ()=>removeFileItem,
    "updateFileList",
    ()=>updateFileList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [ssr] (ecmascript)");
;
function file2Obj(file) {
    return Object.assign(Object.assign({}, file), {
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
        name: file.name,
        size: file.size,
        type: file.type,
        uid: file.uid,
        percent: 0,
        originFileObj: file
    });
}
function updateFileList(file, fileList) {
    const nextFileList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(fileList);
    const fileIndex = nextFileList.findIndex(({ uid })=>uid === file.uid);
    if (fileIndex === -1) {
        nextFileList.push(file);
    } else {
        nextFileList[fileIndex] = file;
    }
    return nextFileList;
}
function getFileItem(file, fileList) {
    const matchKey = file.uid !== undefined ? 'uid' : 'name';
    return fileList.filter((item)=>item[matchKey] === file[matchKey])[0];
}
function removeFileItem(file, fileList) {
    const matchKey = file.uid !== undefined ? 'uid' : 'name';
    const removed = fileList.filter((item)=>item[matchKey] !== file[matchKey]);
    if (removed.length === fileList.length) {
        return null;
    }
    return removed;
}
// ==================== Default Image Preview ====================
const extname = (url = '')=>{
    const temp = url.split('/');
    const filename = temp[temp.length - 1];
    const filenameWithoutSuffix = filename.split(/#|\?/)[0];
    return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [
        ''
    ])[0];
};
const isImageFileType = (type)=>type.indexOf('image/') === 0;
const isImageUrl = (file)=>{
    if (file.type && !file.thumbUrl) {
        return isImageFileType(file.type);
    }
    const url = file.thumbUrl || file.url || '';
    const extension = extname(url);
    if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico|heic|heif)$/i.test(extension)) {
        return true;
    }
    if (/^data:/.test(url)) {
        // other file types of base64
        return false;
    }
    if (extension) {
        // other file types which have extension
        return false;
    }
    return true;
};
const MEASURE_SIZE = 200;
function previewImage(file) {
    return new Promise((resolve)=>{
        if (!file.type || !isImageFileType(file.type)) {
            resolve('');
            return;
        }
        const canvas = document.createElement('canvas');
        canvas.width = MEASURE_SIZE;
        canvas.height = MEASURE_SIZE;
        canvas.style.cssText = `position: fixed; left: 0; top: 0; width: ${MEASURE_SIZE}px; height: ${MEASURE_SIZE}px; z-index: 9999; display: none;`;
        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.onload = ()=>{
            const { width, height } = img;
            let drawWidth = MEASURE_SIZE;
            let drawHeight = MEASURE_SIZE;
            let offsetX = 0;
            let offsetY = 0;
            if (width > height) {
                drawHeight = height * (MEASURE_SIZE / width);
                offsetY = -(drawHeight - drawWidth) / 2;
            } else {
                drawWidth = width * (MEASURE_SIZE / height);
                offsetX = -(drawWidth - drawHeight) / 2;
            }
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            const dataURL = canvas.toDataURL();
            document.body.removeChild(canvas);
            window.URL.revokeObjectURL(img.src);
            resolve(dataURL);
        };
        img.crossOrigin = 'anonymous';
        if (file.type.startsWith('image/svg+xml')) {
            const reader = new FileReader();
            reader.onload = ()=>{
                if (reader.result && typeof reader.result === 'string') {
                    img.src = reader.result;
                }
            };
            reader.readAsDataURL(file);
        } else if (file.type.startsWith('image/gif')) {
            const reader = new FileReader();
            reader.onload = ()=>{
                if (reader.result) {
                    resolve(reader.result);
                }
            };
            reader.readAsDataURL(file);
        } else {
            img.src = window.URL.createObjectURL(file);
        }
    });
}
}),
"[project]/Downloads/One click/node_modules/antd/es/upload/UploadList/ListItem.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DeleteOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/DeleteOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DownloadOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/DownloadOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EyeOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/EyeOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/progress/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tooltip/index.js [ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const ListItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](({ prefixCls, className, style, locale, listType, file, items, progress: progressProps, iconRender, actionIconRender, itemRender, isImgUrl, showPreviewIcon, showRemoveIcon, showDownloadIcon, previewIcon: customPreviewIcon, removeIcon: customRemoveIcon, downloadIcon: customDownloadIcon, extra: customExtra, onPreview, onDownload, onClose }, ref)=>{
    var _a, _b;
    // Status: which will ignore `removed` status
    const { status } = file;
    const [mergedStatus, setMergedStatus] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](status);
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](()=>{
        if (status !== 'removed') {
            setMergedStatus(status);
        }
    }, [
        status
    ]);
    // Delay to show the progress bar
    const [showProgress, setShowProgress] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](()=>{
        const timer = setTimeout(()=>{
            setShowProgress(true);
        }, 300);
        return ()=>{
            clearTimeout(timer);
        };
    }, []);
    const iconNode = iconRender(file);
    let icon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        className: `${prefixCls}-icon`
    }, iconNode);
    if (listType === 'picture' || listType === 'picture-card' || listType === 'picture-circle') {
        if (mergedStatus === 'uploading' || !file.thumbUrl && !file.url) {
            const uploadingClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-list-item-thumbnail`, {
                [`${prefixCls}-list-item-file`]: mergedStatus !== 'uploading'
            });
            icon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
                className: uploadingClassName
            }, iconNode);
        } else {
            const thumbnail = (isImgUrl === null || isImgUrl === void 0 ? void 0 : isImgUrl(file)) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("img", {
                src: file.thumbUrl || file.url,
                alt: file.name,
                className: `${prefixCls}-list-item-image`,
                crossOrigin: file.crossOrigin
            }) : iconNode;
            const aClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-list-item-thumbnail`, {
                [`${prefixCls}-list-item-file`]: isImgUrl && !isImgUrl(file)
            });
            icon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("a", {
                className: aClassName,
                onClick: (e)=>onPreview(file, e),
                href: file.url || file.thumbUrl,
                target: "_blank",
                rel: "noopener noreferrer"
            }, thumbnail);
        }
    }
    const listItemClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-list-item`, `${prefixCls}-list-item-${mergedStatus}`);
    const linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
    const removeIcon = (typeof showRemoveIcon === 'function' ? showRemoveIcon(file) : showRemoveIcon) ? actionIconRender((typeof customRemoveIcon === 'function' ? customRemoveIcon(file) : customRemoveIcon) || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DeleteOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null), ()=>onClose(file), prefixCls, locale.removeFile, // acceptUploadDisabled is true, only remove icon will follow Upload disabled prop
    // https://github.com/ant-design/ant-design/issues/46171
    true) : null;
    const downloadIcon = (typeof showDownloadIcon === 'function' ? showDownloadIcon(file) : showDownloadIcon) && mergedStatus === 'done' ? actionIconRender((typeof customDownloadIcon === 'function' ? customDownloadIcon(file) : customDownloadIcon) || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DownloadOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null), ()=>onDownload(file), prefixCls, locale.downloadFile) : null;
    const downloadOrDelete = listType !== 'picture-card' && listType !== 'picture-circle' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", {
        key: "download-delete",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-list-item-actions`, {
            picture: listType === 'picture'
        })
    }, downloadIcon, removeIcon);
    const extraContent = typeof customExtra === 'function' ? customExtra(file) : customExtra;
    const extra = extraContent && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", {
        className: `${prefixCls}-list-item-extra`
    }, extraContent);
    const listItemNameClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-list-item-name`);
    const fileName = file.url ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("a", Object.assign({
        key: "view",
        target: "_blank",
        rel: "noopener noreferrer",
        className: listItemNameClass,
        title: file.name
    }, linkProps, {
        href: file.url,
        onClick: (e)=>onPreview(file, e)
    }), file.name, extra) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", {
        key: "view",
        className: listItemNameClass,
        onClick: (e)=>onPreview(file, e),
        title: file.name
    }, file.name, extra);
    const previewIcon = (typeof showPreviewIcon === 'function' ? showPreviewIcon(file) : showPreviewIcon) && (file.url || file.thumbUrl) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("a", {
        href: file.url || file.thumbUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        onClick: (e)=>onPreview(file, e),
        title: locale.previewFile
    }, typeof customPreviewIcon === 'function' ? customPreviewIcon(file) : customPreviewIcon || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EyeOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null)) : null;
    const pictureCardActions = (listType === 'picture-card' || listType === 'picture-circle') && mergedStatus !== 'uploading' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", {
        className: `${prefixCls}-list-item-actions`
    }, previewIcon, mergedStatus === 'done' && downloadIcon, removeIcon);
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const rootPrefixCls = getPrefixCls();
    const dom = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        className: listItemClassName
    }, icon, fileName, downloadOrDelete, pictureCardActions, showProgress && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        motionName: `${rootPrefixCls}-fade`,
        visible: mergedStatus === 'uploading',
        motionDeadline: 2000
    }, ({ className: motionClassName })=>{
        // show loading icon if upload progress listener is disabled
        const loadingProgress = 'percent' in file ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], Object.assign({
            type: "line",
            percent: file.percent,
            "aria-label": file['aria-label'],
            "aria-labelledby": file['aria-labelledby']
        }, progressProps)) : null;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-list-item-progress`, motionClassName)
        }, loadingProgress);
    }));
    const message = file.response && typeof file.response === 'string' ? file.response : ((_a = file.error) === null || _a === void 0 ? void 0 : _a.statusText) || ((_b = file.error) === null || _b === void 0 ? void 0 : _b.message) || locale.uploadError;
    const item = mergedStatus === 'error' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        title: message,
        getPopupContainer: (node)=>node.parentNode
    }, dom) : dom;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-list-item-container`, className),
        style: style,
        ref: ref
    }, itemRender ? itemRender(item, file, items, {
        download: onDownload.bind(null, file),
        preview: onPreview.bind(null, file),
        remove: onClose.bind(null, file)
    }) : item);
});
const __TURBOPACK__default__export__ = ListItem;
}),
"[project]/Downloads/One click/node_modules/antd/es/upload/UploadList/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FileTwoTone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/FileTwoTone.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PaperClipOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/PaperClipOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PictureTwoTone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/PictureTwoTone.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$CSSMotionList$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CSSMotionList$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/CSSMotionList.js [ssr] (ecmascript) <export default as CSSMotionList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/omit.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useForceUpdate$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/hooks/useForceUpdate.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/motion.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/reactNode.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/button/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/upload/utils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$UploadList$2f$ListItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/upload/UploadList/ListItem.js [ssr] (ecmascript)");
"use client";
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
const InternalUploadList = (props, ref)=>{
    const { listType = 'text', previewFile = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["previewImage"], onPreview, onDownload, onRemove, locale, iconRender, isImageUrl: isImgUrl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["isImageUrl"], prefixCls: customizePrefixCls, items = [], showPreviewIcon = true, showRemoveIcon = true, showDownloadIcon = false, removeIcon, previewIcon, downloadIcon, extra, progress = {
        size: [
            -1,
            2
        ],
        showInfo: false
    }, appendAction, appendActionVisible = true, itemRender, disabled } = props;
    const [, forceUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useForceUpdate$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useForceUpdate"])();
    const [motionAppear, setMotionAppear] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](false);
    const isPictureCardOrCirle = [
        'picture-card',
        'picture-circle'
    ].includes(listType);
    // ============================= Effect =============================
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](()=>{
        if (!listType.startsWith('picture')) {
            return;
        }
        (items || []).forEach((file)=>{
            if (!(file.originFileObj instanceof File || file.originFileObj instanceof Blob) || file.thumbUrl !== undefined) {
                return;
            }
            file.thumbUrl = '';
            previewFile === null || previewFile === void 0 ? void 0 : previewFile(file.originFileObj).then((previewDataUrl)=>{
                // Need append '' to avoid dead loop
                file.thumbUrl = previewDataUrl || '';
                forceUpdate();
            });
        });
    }, [
        listType,
        items,
        previewFile
    ]);
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](()=>{
        setMotionAppear(true);
    }, []);
    // ============================= Events =============================
    const onInternalPreview = (file, e)=>{
        if (!onPreview) {
            return;
        }
        e === null || e === void 0 ? void 0 : e.preventDefault();
        return onPreview(file);
    };
    const onInternalDownload = (file)=>{
        if (typeof onDownload === 'function') {
            onDownload(file);
        } else if (file.url) {
            window.open(file.url);
        }
    };
    const onInternalClose = (file)=>{
        onRemove === null || onRemove === void 0 ? void 0 : onRemove(file);
    };
    const internalIconRender = (file)=>{
        if (iconRender) {
            return iconRender(file, listType);
        }
        const isLoading = file.status === 'uploading';
        if (listType.startsWith('picture')) {
            const loadingIcon = listType === 'picture' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null) : locale.uploading;
            const fileIcon = (isImgUrl === null || isImgUrl === void 0 ? void 0 : isImgUrl(file)) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PictureTwoTone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FileTwoTone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null);
            return isLoading ? loadingIcon : fileIcon;
        }
        return isLoading ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PaperClipOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null);
    };
    const actionIconRender = (customIcon, callback, prefixCls, title, acceptUploadDisabled)=>{
        const btnProps = {
            type: 'text',
            size: 'small',
            title,
            onClick: (e)=>{
                var _a, _b;
                callback();
                if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["isValidElement"](customIcon)) {
                    (_b = (_a = customIcon.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a, e);
                }
            },
            className: `${prefixCls}-list-item-action`,
            disabled: acceptUploadDisabled ? disabled : false
        };
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["isValidElement"](customIcon) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], Object.assign({}, btnProps, {
            icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(customIcon, Object.assign(Object.assign({}, customIcon.props), {
                onClick: ()=>{}
            }))
        })) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], Object.assign({}, btnProps), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", null, customIcon));
    };
    // ============================== Ref ===============================
    // Test needs
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useImperativeHandle"](ref, ()=>({
            handlePreview: onInternalPreview,
            handleDownload: onInternalDownload
        }));
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    // ============================= Render =============================
    const prefixCls = getPrefixCls('upload', customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    const listClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-list`, `${prefixCls}-list-${listType}`);
    const listItemMotion = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(rootPrefixCls), [
            'onAppearEnd',
            'onEnterEnd',
            'onLeaveEnd'
        ]), [
        rootPrefixCls
    ]);
    const motionConfig = Object.assign(Object.assign({}, isPictureCardOrCirle ? {} : listItemMotion), {
        motionDeadline: 2000,
        motionName: `${prefixCls}-${isPictureCardOrCirle ? 'animate-inline' : 'animate'}`,
        keys: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(items.map((file)=>({
                key: file.uid,
                file
            }))),
        motionAppear
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        className: listClassNames
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$CSSMotionList$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CSSMotionList$3e$__["CSSMotionList"], Object.assign({}, motionConfig, {
        component: false
    }), ({ key, file, className: motionClassName, style: motionStyle })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$UploadList$2f$ListItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            key: key,
            locale: locale,
            prefixCls: prefixCls,
            className: motionClassName,
            style: motionStyle,
            file: file,
            items: items,
            progress: progress,
            listType: listType,
            isImgUrl: isImgUrl,
            showPreviewIcon: showPreviewIcon,
            showRemoveIcon: showRemoveIcon,
            showDownloadIcon: showDownloadIcon,
            removeIcon: removeIcon,
            previewIcon: previewIcon,
            downloadIcon: downloadIcon,
            extra: extra,
            iconRender: internalIconRender,
            actionIconRender: actionIconRender,
            itemRender: itemRender,
            onPreview: onInternalPreview,
            onDownload: onInternalDownload,
            onClose: onInternalClose
        })), appendAction && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], Object.assign({}, motionConfig, {
        visible: appendActionVisible,
        forceRender: true
    }), ({ className: motionClassName, style: motionStyle })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(appendAction, (oriProps)=>({
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(oriProps.className, motionClassName),
                style: Object.assign(Object.assign(Object.assign({}, motionStyle), {
                    // prevent the element has hover css pseudo-class that may cause animation to end prematurely.
                    pointerEvents: motionClassName ? 'none' : undefined
                }), oriProps.style)
            }))));
};
const UploadList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](InternalUploadList);
if ("TURBOPACK compile-time truthy", 1) {
    UploadList.displayName = 'UploadList';
}
const __TURBOPACK__default__export__ = UploadList;
}),
"[project]/Downloads/One click/node_modules/antd/es/upload/Upload.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LIST_IGNORE",
    ()=>LIST_IGNORE,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-dom [external] (react-dom, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$upload$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-upload/es/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useMergedState.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/DisabledContext.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/locale/useLocale.js [ssr] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/locale/en_US.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/upload/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$UploadList$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/upload/UploadList/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/upload/utils.js [ssr] (ecmascript)");
"use client";
;
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const LIST_IGNORE = `__LIST_IGNORE_${Date.now()}__`;
const InternalUpload = (props, ref)=>{
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useComponentConfig"])('upload');
    const { fileList, defaultFileList, onRemove, showUploadList = true, listType = 'text', onPreview, onDownload, onChange, onDrop, previewFile, disabled: customDisabled, locale: propLocale, iconRender, isImageUrl, progress, prefixCls: customizePrefixCls, className, type = 'select', children, style, itemRender, maxCount, data = {}, multiple = false, hasControlInside = true, action = '', accept = '', supportServerRender = true, rootClassName } = props;
    // ===================== Disabled =====================
    const disabled = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    const customRequest = props.customRequest || config.customRequest;
    const [mergedFileList, setMergedFileList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(defaultFileList || [], {
        value: fileList,
        postState: (list)=>list !== null && list !== void 0 ? list : []
    });
    const [dragState, setDragState] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"]('drop');
    const upload = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"](null);
    const wrapRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"](null);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])('Upload');
        ("TURBOPACK compile-time truthy", 1) ? warning('fileList' in props || !('value' in props), 'usage', '`value` is not a valid prop, do you mean `fileList`?') : "TURBOPACK unreachable";
        warning.deprecated(!('transformFile' in props), 'transformFile', 'beforeUpload');
    }
    // Control mode will auto fill file uid if not provided
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](()=>{
        // eslint-disable-next-line react-hooks/purity
        const timestamp = Date.now();
        (fileList || []).forEach((file, index)=>{
            if (!file.uid && !Object.isFrozen(file)) {
                file.uid = `__AUTO__${timestamp}_${index}__`;
            }
        });
    }, [
        fileList
    ]);
    const onInternalChange = (file, changedFileList, event)=>{
        let cloneList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(changedFileList);
        let exceedMaxCount = false;
        // Cut to match count
        if (maxCount === 1) {
            cloneList = cloneList.slice(-1);
        } else if (maxCount) {
            exceedMaxCount = cloneList.length > maxCount;
            cloneList = cloneList.slice(0, maxCount);
        }
        // Prevent React18 auto batch since input[upload] trigger process at same time
        // which makes fileList closure problem
        // eslint-disable-next-line react-dom/no-flush-sync
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__["flushSync"])(()=>{
            setMergedFileList(cloneList);
        });
        const changeInfo = {
            file: file,
            fileList: cloneList
        };
        if (event) {
            changeInfo.event = event;
        }
        if (!exceedMaxCount || file.status === 'removed' || // We should ignore event if current file is exceed `maxCount`
        cloneList.some((f)=>f.uid === file.uid)) {
            // eslint-disable-next-line react-dom/no-flush-sync
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__["flushSync"])(()=>{
                onChange === null || onChange === void 0 ? void 0 : onChange(changeInfo);
            });
        }
    };
    const mergedBeforeUpload = (file, fileListArgs)=>__awaiter(void 0, void 0, void 0, function*() {
            const { beforeUpload, transformFile } = props;
            let parsedFile = file;
            if (beforeUpload) {
                const result = yield beforeUpload(file, fileListArgs);
                if (result === false) {
                    return false;
                }
                // Hack for LIST_IGNORE, we add additional info to remove from the list
                delete file[LIST_IGNORE];
                if (result === LIST_IGNORE) {
                    Object.defineProperty(file, LIST_IGNORE, {
                        value: true,
                        configurable: true
                    });
                    return false;
                }
                if (typeof result === 'object' && result) {
                    parsedFile = result;
                }
            }
            if (transformFile) {
                parsedFile = yield transformFile(parsedFile);
            }
            return parsedFile;
        });
    const onBatchStart = (batchFileInfoList)=>{
        // Skip file which marked as `LIST_IGNORE`, these file will not add to file list
        const filteredFileInfoList = batchFileInfoList.filter((info)=>!info.file[LIST_IGNORE]);
        // Nothing to do since no file need upload
        if (!filteredFileInfoList.length) {
            return;
        }
        const objectFileList = filteredFileInfoList.map((info)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["file2Obj"])(info.file));
        // Concat new files with prev files
        let newFileList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(mergedFileList);
        objectFileList.forEach((fileObj)=>{
            // Replace file if exist
            newFileList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["updateFileList"])(fileObj, newFileList);
        });
        objectFileList.forEach((fileObj, index)=>{
            // Repeat trigger `onChange` event for compatible
            let triggerFileObj = fileObj;
            if (!filteredFileInfoList[index].parsedFile) {
                // `beforeUpload` return false
                const { originFileObj } = fileObj;
                let clone;
                try {
                    clone = new File([
                        originFileObj
                    ], originFileObj.name, {
                        type: originFileObj.type
                    });
                } catch (_a) {
                    clone = new Blob([
                        originFileObj
                    ], {
                        type: originFileObj.type
                    });
                    clone.name = originFileObj.name;
                    clone.lastModifiedDate = new Date();
                    clone.lastModified = new Date().getTime();
                }
                clone.uid = fileObj.uid;
                triggerFileObj = clone;
            } else {
                // Inject `uploading` status
                fileObj.status = 'uploading';
            }
            onInternalChange(triggerFileObj, newFileList);
        });
    };
    const onSuccess = (response, file, xhr)=>{
        try {
            if (typeof response === 'string') {
                response = JSON.parse(response);
            }
        } catch (_a) {
        /* do nothing */ }
        // removed
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getFileItem"])(file, mergedFileList)) {
            return;
        }
        const targetItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["file2Obj"])(file);
        targetItem.status = 'done';
        targetItem.percent = 100;
        targetItem.response = response;
        targetItem.xhr = xhr;
        const nextFileList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["updateFileList"])(targetItem, mergedFileList);
        onInternalChange(targetItem, nextFileList);
    };
    const onProgress = (e, file)=>{
        // removed
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getFileItem"])(file, mergedFileList)) {
            return;
        }
        const targetItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["file2Obj"])(file);
        targetItem.status = 'uploading';
        targetItem.percent = e.percent;
        const nextFileList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["updateFileList"])(targetItem, mergedFileList);
        onInternalChange(targetItem, nextFileList, e);
    };
    const onError = (error, response, file)=>{
        // removed
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getFileItem"])(file, mergedFileList)) {
            return;
        }
        const targetItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["file2Obj"])(file);
        targetItem.error = error;
        targetItem.response = response;
        targetItem.status = 'error';
        const nextFileList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["updateFileList"])(targetItem, mergedFileList);
        onInternalChange(targetItem, nextFileList);
    };
    const handleRemove = (file)=>{
        let currentFile;
        Promise.resolve(typeof onRemove === 'function' ? onRemove(file) : onRemove).then((ret)=>{
            var _a;
            // Prevent removing file
            if (ret === false) {
                return;
            }
            const removedFileList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["removeFileItem"])(file, mergedFileList);
            if (removedFileList) {
                currentFile = Object.assign(Object.assign({}, file), {
                    status: 'removed'
                });
                mergedFileList === null || mergedFileList === void 0 ? void 0 : mergedFileList.forEach((item)=>{
                    const matchKey = currentFile.uid !== undefined ? 'uid' : 'name';
                    if (item[matchKey] === currentFile[matchKey] && !Object.isFrozen(item)) {
                        item.status = 'removed';
                    }
                });
                (_a = upload.current) === null || _a === void 0 ? void 0 : _a.abort(currentFile);
                onInternalChange(currentFile, removedFileList);
            }
        });
    };
    const onFileDrop = (e)=>{
        setDragState(e.type);
        if (e.type === 'drop') {
            onDrop === null || onDrop === void 0 ? void 0 : onDrop(e);
        }
    };
    // Test needs
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useImperativeHandle"](ref, ()=>({
            onBatchStart,
            onSuccess,
            onProgress,
            onError,
            fileList: mergedFileList,
            upload: upload.current,
            nativeElement: wrapRef.current
        }));
    const { getPrefixCls, direction, upload: ctxUpload } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('upload', customizePrefixCls);
    const rcUploadProps = Object.assign(Object.assign({
        onBatchStart,
        onError,
        onProgress,
        onSuccess
    }, props), {
        customRequest,
        data,
        multiple,
        action,
        accept,
        supportServerRender,
        prefixCls,
        disabled: mergedDisabled,
        beforeUpload: mergedBeforeUpload,
        onChange: undefined,
        hasControlInside
    });
    delete rcUploadProps.className;
    delete rcUploadProps.style;
    // Remove id to avoid open by label when trigger is hidden
    // !children: https://github.com/ant-design/ant-design/issues/14298
    // disabled: https://github.com/ant-design/ant-design/issues/16478
    //           https://github.com/ant-design/ant-design/issues/24197
    if (!children || mergedDisabled) {
        delete rcUploadProps.id;
    }
    const wrapperCls = `${prefixCls}-wrapper`;
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, wrapperCls);
    const [contextLocale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('Upload', __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].Upload);
    const { showRemoveIcon, showPreviewIcon, showDownloadIcon, removeIcon, previewIcon, downloadIcon, extra } = typeof showUploadList === 'boolean' ? {} : showUploadList;
    // use showRemoveIcon if it is specified explicitly
    const realShowRemoveIcon = typeof showRemoveIcon === 'undefined' ? !mergedDisabled : showRemoveIcon;
    const renderUploadList = (button, buttonVisible)=>{
        if (!showUploadList) {
            return button;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$UploadList$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            prefixCls: prefixCls,
            listType: listType,
            items: mergedFileList,
            previewFile: previewFile,
            onPreview: onPreview,
            onDownload: onDownload,
            onRemove: handleRemove,
            showRemoveIcon: realShowRemoveIcon,
            showPreviewIcon: showPreviewIcon,
            showDownloadIcon: showDownloadIcon,
            removeIcon: removeIcon,
            previewIcon: previewIcon,
            downloadIcon: downloadIcon,
            iconRender: iconRender,
            extra: extra,
            locale: Object.assign(Object.assign({}, contextLocale), propLocale),
            isImageUrl: isImageUrl,
            progress: progress,
            appendAction: button,
            appendActionVisible: buttonVisible,
            itemRender: itemRender,
            disabled: mergedDisabled
        });
    };
    const mergedCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(wrapperCls, className, rootClassName, hashId, cssVarCls, ctxUpload === null || ctxUpload === void 0 ? void 0 : ctxUpload.className, {
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-picture-card-wrapper`]: listType === 'picture-card',
        [`${prefixCls}-picture-circle-wrapper`]: listType === 'picture-circle'
    });
    const mergedStyle = Object.assign(Object.assign({}, ctxUpload === null || ctxUpload === void 0 ? void 0 : ctxUpload.style), style);
    // ======================== Render ========================
    if (type === 'drag') {
        const dragCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(hashId, prefixCls, `${prefixCls}-drag`, {
            [`${prefixCls}-drag-uploading`]: mergedFileList.some((file)=>file.status === 'uploading'),
            [`${prefixCls}-drag-hover`]: dragState === 'dragover',
            [`${prefixCls}-disabled`]: mergedDisabled,
            [`${prefixCls}-rtl`]: direction === 'rtl'
        });
        return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", {
            className: mergedCls,
            ref: wrapRef
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
            className: dragCls,
            style: mergedStyle,
            onDrop: onFileDrop,
            onDragOver: onFileDrop,
            onDragLeave: onFileDrop
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$upload$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], Object.assign({}, rcUploadProps, {
            ref: upload,
            className: `${prefixCls}-btn`
        }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
            className: `${prefixCls}-drag-container`
        }, children))), renderUploadList()));
    }
    const uploadBtnCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, `${prefixCls}-select`, {
        [`${prefixCls}-disabled`]: mergedDisabled,
        [`${prefixCls}-hidden`]: !children
    });
    const uploadButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        className: uploadBtnCls,
        style: mergedStyle
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$upload$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], Object.assign({}, rcUploadProps, {
        ref: upload
    })));
    if (listType === 'picture-card' || listType === 'picture-circle') {
        return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", {
            className: mergedCls,
            ref: wrapRef
        }, renderUploadList(uploadButton, !!children)));
    }
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", {
        className: mergedCls,
        ref: wrapRef
    }, uploadButton, renderUploadList()));
};
const Upload = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](InternalUpload);
if ("TURBOPACK compile-time truthy", 1) {
    Upload.displayName = 'Upload';
}
const __TURBOPACK__default__export__ = Upload;
}),
"[project]/Downloads/One click/node_modules/antd/es/upload/Dragger.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$Upload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/upload/Upload.js [ssr] (ecmascript)");
"use client";
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
const Dragger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"]((props, ref)=>{
    const { style, height, hasControlInside = false, children } = props, restProps = __rest(props, [
        "style",
        "height",
        "hasControlInside",
        "children"
    ]);
    const mergedStyle = Object.assign(Object.assign({}, style), {
        height
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$Upload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], Object.assign({
        ref: ref,
        hasControlInside: hasControlInside
    }, restProps, {
        style: mergedStyle,
        type: "drag"
    }), children);
});
if ("TURBOPACK compile-time truthy", 1) {
    Dragger.displayName = 'Dragger';
}
const __TURBOPACK__default__export__ = Dragger;
}),
"[project]/Downloads/One click/node_modules/antd/es/upload/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$Dragger$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/upload/Dragger.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$Upload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/upload/Upload.js [ssr] (ecmascript)");
"use client";
;
;
const Upload = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$Upload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"];
Upload.Dragger = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$Dragger$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"];
Upload.LIST_IGNORE = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$Upload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["LIST_IGNORE"];
const __TURBOPACK__default__export__ = Upload;
}),
"[project]/Downloads/One click/node_modules/antd/es/upload/index.js [ssr] (ecmascript) <export default as Upload>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Upload",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/upload/index.js [ssr] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/antd/es/progress/utils.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPercentage",
    ()=>getPercentage,
    "getSize",
    ()=>getSize,
    "getStrokeColor",
    ()=>getStrokeColor,
    "getSuccessPercent",
    ()=>getSuccessPercent,
    "validProgress",
    ()=>validProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/colors/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/colors/es/presets.js [ssr] (ecmascript)");
;
function validProgress(progress) {
    if (!progress || progress < 0) {
        return 0;
    }
    if (progress > 100) {
        return 100;
    }
    return progress;
}
function getSuccessPercent({ success, successPercent }) {
    let percent = successPercent;
    /** @deprecated Use `percent` instead */ if (success && 'progress' in success) {
        percent = success.progress;
    }
    if (success && 'percent' in success) {
        percent = success.percent;
    }
    return percent;
}
const getPercentage = ({ percent, success, successPercent })=>{
    const realSuccessPercent = validProgress(getSuccessPercent({
        success,
        successPercent
    }));
    return [
        realSuccessPercent,
        validProgress(validProgress(percent) - realSuccessPercent)
    ];
};
const getStrokeColor = ({ success = {}, strokeColor })=>{
    const { strokeColor: successColor } = success;
    return [
        successColor || __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["presetPrimaryColors"].green,
        strokeColor || null
    ];
};
const getSize = (size, type, extra)=>{
    var _a, _b, _c, _d;
    let width = -1;
    let height = -1;
    if (type === 'step') {
        const steps = extra.steps;
        const strokeWidth = extra.strokeWidth;
        if (typeof size === 'string' || typeof size === 'undefined') {
            width = size === 'small' ? 2 : 14;
            height = strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 8;
        } else if (typeof size === 'number') {
            [width, height] = [
                size,
                size
            ];
        } else {
            [width = 14, height = 8] = Array.isArray(size) ? size : [
                size.width,
                size.height
            ];
        }
        width *= steps;
    } else if (type === 'line') {
        const strokeWidth = extra === null || extra === void 0 ? void 0 : extra.strokeWidth;
        if (typeof size === 'string' || typeof size === 'undefined') {
            height = strokeWidth || (size === 'small' ? 6 : 8);
        } else if (typeof size === 'number') {
            [width, height] = [
                size,
                size
            ];
        } else {
            [width = -1, height = 8] = Array.isArray(size) ? size : [
                size.width,
                size.height
            ];
        }
    } else if (type === 'circle' || type === 'dashboard') {
        if (typeof size === 'string' || typeof size === 'undefined') {
            [width, height] = size === 'small' ? [
                60,
                60
            ] : [
                120,
                120
            ];
        } else if (typeof size === 'number') {
            [width, height] = [
                size,
                size
            ];
        } else if (Array.isArray(size)) {
            width = (_b = (_a = size[0]) !== null && _a !== void 0 ? _a : size[1]) !== null && _b !== void 0 ? _b : 120;
            height = (_d = (_c = size[0]) !== null && _c !== void 0 ? _c : size[1]) !== null && _d !== void 0 ? _d : 120;
        }
    }
    return [
        width,
        height
    ];
};
}),
"[project]/Downloads/One click/node_modules/antd/es/progress/Circle.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-progress/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$Circle$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-progress/es/Circle/index.js [ssr] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tooltip/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/progress/utils.js [ssr] (ecmascript)");
"use client";
;
;
;
;
;
const CIRCLE_MIN_STROKE_WIDTH = 3;
const getMinPercent = (width)=>CIRCLE_MIN_STROKE_WIDTH / width * 100;
const Circle = (props)=>{
    const { prefixCls, trailColor = null, strokeLinecap = 'round', gapPosition, gapDegree, width: originWidth = 120, type, children, success, size = originWidth, steps } = props;
    const [width, height] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getSize"])(size, 'circle');
    let { strokeWidth } = props;
    if (strokeWidth === undefined) {
        strokeWidth = Math.max(getMinPercent(width), 6);
    }
    const circleStyle = {
        width,
        height,
        fontSize: width * 0.15 + 6
    };
    const realGapDegree = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](()=>{
        // Support gapDeg = 0 when type = 'dashboard'
        if (gapDegree || gapDegree === 0) {
            return gapDegree;
        }
        if (type === 'dashboard') {
            return 75;
        }
        return undefined;
    }, [
        gapDegree,
        type
    ]);
    const percentArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getPercentage"])(props);
    const gapPos = gapPosition || type === 'dashboard' && 'bottom' || undefined;
    // using className to style stroke color
    const isGradient = Object.prototype.toString.call(props.strokeColor) === '[object Object]';
    const strokeColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getStrokeColor"])({
        success,
        strokeColor: props.strokeColor
    });
    const wrapperClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-inner`, {
        [`${prefixCls}-circle-gradient`]: isGradient
    });
    const circleContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$progress$2f$es$2f$Circle$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
        steps: steps,
        percent: steps ? percentArray[1] : percentArray,
        strokeWidth: strokeWidth,
        trailWidth: strokeWidth,
        strokeColor: steps ? strokeColor[1] : strokeColor,
        strokeLinecap: strokeLinecap,
        trailColor: trailColor,
        prefixCls: prefixCls,
        gapDegree: realGapDegree,
        gapPosition: gapPos
    });
    const smallCircle = width <= 20;
    const node = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        className: wrapperClassName,
        style: circleStyle
    }, circleContent, !smallCircle && children);
    if (smallCircle) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            title: children
        }, node);
    }
    return node;
};
const __TURBOPACK__default__export__ = Circle;
}),
"[project]/Downloads/One click/node_modules/antd/es/progress/style/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LineStrokeColorVar",
    ()=>LineStrokeColorVar,
    "Percent",
    ()=>Percent,
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/Keyframes.js [ssr] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [ssr] (ecmascript) <export merge as mergeToken>");
;
;
;
const LineStrokeColorVar = '--progress-line-stroke-color';
const Percent = '--progress-percent';
const genAntProgressActive = (isRtl)=>{
    const direction = isRtl ? '100%' : '-100%';
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"](`antProgress${isRtl ? 'RTL' : 'LTR'}Active`, {
        '0%': {
            transform: `translateX(${direction}) scaleX(0)`,
            opacity: 0.1
        },
        '20%': {
            transform: `translateX(${direction}) scaleX(0)`,
            opacity: 0.5
        },
        to: {
            transform: 'translateX(0) scaleX(1)',
            opacity: 0
        }
    });
};
const genBaseStyle = (token)=>{
    const { componentCls: progressCls, iconCls: iconPrefixCls } = token;
    return {
        [progressCls]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token)), {
            display: 'inline-block',
            '&-rtl': {
                direction: 'rtl'
            },
            '&-line': {
                position: 'relative',
                width: '100%',
                fontSize: token.fontSize
            },
            [`${progressCls}-outer`]: {
                display: 'inline-flex',
                alignItems: 'center',
                width: '100%'
            },
            [`${progressCls}-inner`]: {
                position: 'relative',
                display: 'inline-block',
                width: '100%',
                flex: 1,
                overflow: 'hidden',
                verticalAlign: 'middle',
                backgroundColor: token.remainingColor,
                borderRadius: token.lineBorderRadius
            },
            [`${progressCls}-inner:not(${progressCls}-circle-gradient)`]: {
                [`${progressCls}-circle-path`]: {
                    stroke: token.defaultColor
                }
            },
            [`${progressCls}-success-bg, ${progressCls}-bg`]: {
                position: 'relative',
                background: token.defaultColor,
                borderRadius: token.lineBorderRadius,
                transition: `all ${token.motionDurationSlow} ${token.motionEaseInOutCirc}`
            },
            [`${progressCls}-layout-bottom`]: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                [`${progressCls}-text`]: {
                    width: 'max-content',
                    marginInlineStart: 0,
                    marginTop: token.marginXXS
                }
            },
            [`${progressCls}-bg`]: {
                overflow: 'hidden',
                '&::after': {
                    content: '""',
                    background: {
                        _multi_value_: true,
                        value: [
                            'inherit',
                            `var(${LineStrokeColorVar})`
                        ]
                    },
                    height: '100%',
                    width: `calc(1 / var(${Percent}) * 100%)`,
                    display: 'block'
                },
                [`&${progressCls}-bg-inner`]: {
                    minWidth: 'max-content',
                    '&::after': {
                        content: 'none'
                    },
                    [`${progressCls}-text-inner`]: {
                        color: token.colorWhite,
                        [`&${progressCls}-text-bright`]: {
                            color: 'rgba(0, 0, 0, 0.45)'
                        }
                    }
                }
            },
            [`${progressCls}-success-bg`]: {
                position: 'absolute',
                insetBlockStart: 0,
                insetInlineStart: 0,
                backgroundColor: token.colorSuccess
            },
            [`${progressCls}-text`]: {
                display: 'inline-block',
                marginInlineStart: token.marginXS,
                color: token.colorText,
                lineHeight: 1,
                width: '2em',
                whiteSpace: 'nowrap',
                textAlign: 'start',
                verticalAlign: 'middle',
                wordBreak: 'normal',
                [iconPrefixCls]: {
                    fontSize: token.fontSize
                },
                [`&${progressCls}-text-outer`]: {
                    width: 'max-content'
                },
                [`&${progressCls}-text-outer${progressCls}-text-start`]: {
                    width: 'max-content',
                    marginInlineStart: 0,
                    marginInlineEnd: token.marginXS
                }
            },
            [`${progressCls}-text-inner`]: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                marginInlineStart: 0,
                padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(token.paddingXXS)}`,
                [`&${progressCls}-text-start`]: {
                    justifyContent: 'start'
                },
                [`&${progressCls}-text-end`]: {
                    justifyContent: 'end'
                }
            },
            [`&${progressCls}-status-active`]: {
                [`${progressCls}-bg::before`]: {
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: token.colorBgContainer,
                    borderRadius: token.lineBorderRadius,
                    opacity: 0,
                    animationName: genAntProgressActive(),
                    animationDuration: token.progressActiveMotionDuration,
                    animationTimingFunction: token.motionEaseOutQuint,
                    animationIterationCount: 'infinite',
                    content: '""'
                }
            },
            [`&${progressCls}-rtl${progressCls}-status-active`]: {
                [`${progressCls}-bg::before`]: {
                    animationName: genAntProgressActive(true)
                }
            },
            [`&${progressCls}-status-exception`]: {
                [`${progressCls}-bg`]: {
                    backgroundColor: token.colorError
                },
                [`${progressCls}-text`]: {
                    color: token.colorError
                }
            },
            [`&${progressCls}-status-exception ${progressCls}-inner:not(${progressCls}-circle-gradient)`]: {
                [`${progressCls}-circle-path`]: {
                    stroke: token.colorError
                }
            },
            [`&${progressCls}-status-success`]: {
                [`${progressCls}-bg`]: {
                    backgroundColor: token.colorSuccess
                },
                [`${progressCls}-text`]: {
                    color: token.colorSuccess
                }
            },
            [`&${progressCls}-status-success ${progressCls}-inner:not(${progressCls}-circle-gradient)`]: {
                [`${progressCls}-circle-path`]: {
                    stroke: token.colorSuccess
                }
            }
        })
    };
};
const genCircleStyle = (token)=>{
    const { componentCls: progressCls, iconCls: iconPrefixCls } = token;
    return {
        [progressCls]: {
            [`${progressCls}-circle-trail`]: {
                stroke: token.remainingColor
            },
            [`&${progressCls}-circle ${progressCls}-inner`]: {
                position: 'relative',
                lineHeight: 1,
                backgroundColor: 'transparent'
            },
            [`&${progressCls}-circle ${progressCls}-text`]: {
                position: 'absolute',
                insetBlockStart: '50%',
                insetInlineStart: 0,
                width: '100%',
                margin: 0,
                padding: 0,
                color: token.circleTextColor,
                fontSize: token.circleTextFontSize,
                lineHeight: 1,
                whiteSpace: 'normal',
                textAlign: 'center',
                transform: 'translateY(-50%)',
                [iconPrefixCls]: {
                    fontSize: token.circleIconFontSize
                }
            },
            [`${progressCls}-circle&-status-exception`]: {
                [`${progressCls}-text`]: {
                    color: token.colorError
                }
            },
            [`${progressCls}-circle&-status-success`]: {
                [`${progressCls}-text`]: {
                    color: token.colorSuccess
                }
            }
        },
        [`${progressCls}-inline-circle`]: {
            lineHeight: 1,
            [`${progressCls}-inner`]: {
                verticalAlign: 'bottom'
            }
        }
    };
};
const genStepStyle = (token)=>{
    const { componentCls: progressCls } = token;
    return {
        [progressCls]: {
            [`${progressCls}-steps`]: {
                display: 'inline-block',
                '&-outer': {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                },
                '&-item': {
                    flexShrink: 0,
                    minWidth: token.progressStepMinWidth,
                    marginInlineEnd: token.progressStepMarginInlineEnd,
                    backgroundColor: token.remainingColor,
                    transition: `all ${token.motionDurationSlow}`,
                    '&-active': {
                        backgroundColor: token.defaultColor
                    }
                }
            }
        }
    };
};
const genSmallLine = (token)=>{
    const { componentCls: progressCls, iconCls: iconPrefixCls } = token;
    return {
        [progressCls]: {
            [`${progressCls}-small&-line, ${progressCls}-small&-line ${progressCls}-text ${iconPrefixCls}`]: {
                fontSize: token.fontSizeSM
            }
        }
    };
};
const prepareComponentToken = (token)=>({
        circleTextColor: token.colorText,
        defaultColor: token.colorInfo,
        remainingColor: token.colorFillSecondary,
        lineBorderRadius: 100,
        // magic for capsule shape, should be a very large number
        circleTextFontSize: '1em',
        circleIconFontSize: `${token.fontSize / token.fontSizeSM}em`
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])('Progress', (token)=>{
    const progressStepMarginInlineEnd = token.calc(token.marginXXS).div(2).equal();
    const progressToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        progressStepMarginInlineEnd,
        progressStepMinWidth: progressStepMarginInlineEnd,
        progressActiveMotionDuration: '2.4s'
    });
    return [
        genBaseStyle(progressToken),
        genCircleStyle(progressToken),
        genStepStyle(progressToken),
        genSmallLine(progressToken)
    ];
}, prepareComponentToken);
}),
"[project]/Downloads/One click/node_modules/antd/es/progress/Line.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "handleGradient",
    ()=>handleGradient,
    "sortGradient",
    ()=>sortGradient
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/colors/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/colors/es/presets.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/progress/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/progress/utils.js [ssr] (ecmascript)");
"use client";
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
;
;
const sortGradient = (gradients)=>{
    let tempArr = [];
    Object.keys(gradients).forEach((key)=>{
        const formattedKey = Number.parseFloat(key.replace(/%/g, ''));
        if (!Number.isNaN(formattedKey)) {
            tempArr.push({
                key: formattedKey,
                value: gradients[key]
            });
        }
    });
    tempArr = tempArr.sort((a, b)=>a.key - b.key);
    return tempArr.map(({ key, value })=>`${value} ${key}%`).join(', ');
};
const handleGradient = (strokeColor, directionConfig)=>{
    const { from = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["presetPrimaryColors"].blue, to = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["presetPrimaryColors"].blue, direction = directionConfig === 'rtl' ? 'to left' : 'to right' } = strokeColor, rest = __rest(strokeColor, [
        "from",
        "to",
        "direction"
    ]);
    if (Object.keys(rest).length !== 0) {
        const sortedGradients = sortGradient(rest);
        const background = `linear-gradient(${direction}, ${sortedGradients})`;
        return {
            background,
            [__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["LineStrokeColorVar"]]: background
        };
    }
    const background = `linear-gradient(${direction}, ${from}, ${to})`;
    return {
        background,
        [__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["LineStrokeColorVar"]]: background
    };
};
const Line = (props)=>{
    const { prefixCls, direction: directionConfig, percent, size, strokeWidth, strokeColor, strokeLinecap = 'round', children, trailColor = null, percentPosition, success } = props;
    const { align: infoAlign, type: infoPosition } = percentPosition;
    const backgroundProps = strokeColor && typeof strokeColor !== 'string' ? handleGradient(strokeColor, directionConfig) : {
        [__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["LineStrokeColorVar"]]: strokeColor,
        background: strokeColor
    };
    const borderRadius = strokeLinecap === 'square' || strokeLinecap === 'butt' ? 0 : undefined;
    const mergedSize = size !== null && size !== void 0 ? size : [
        -1,
        strokeWidth || (size === 'small' ? 6 : 8)
    ];
    const [width, height] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getSize"])(mergedSize, 'line', {
        strokeWidth
    });
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])('Progress');
        warning.deprecated(!('strokeWidth' in props), 'strokeWidth', 'size');
    }
    const trailStyle = {
        backgroundColor: trailColor || undefined,
        borderRadius
    };
    const percentStyle = Object.assign(Object.assign({
        width: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["validProgress"])(percent)}%`,
        height,
        borderRadius
    }, backgroundProps), {
        [__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Percent"]]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["validProgress"])(percent) / 100
    });
    const successPercent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getSuccessPercent"])(props);
    const successPercentStyle = {
        width: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["validProgress"])(successPercent)}%`,
        height,
        borderRadius,
        backgroundColor: success === null || success === void 0 ? void 0 : success.strokeColor
    };
    const outerStyle = {
        width: width < 0 ? '100%' : width
    };
    const lineInner = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        className: `${prefixCls}-inner`,
        style: trailStyle
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-bg`, `${prefixCls}-bg-${infoPosition}`),
        style: percentStyle
    }, infoPosition === 'inner' && children), successPercent !== undefined && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        className: `${prefixCls}-success-bg`,
        style: successPercentStyle
    }));
    const isOuterStart = infoPosition === 'outer' && infoAlign === 'start';
    const isOuterEnd = infoPosition === 'outer' && infoAlign === 'end';
    return infoPosition === 'outer' && infoAlign === 'center' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        className: `${prefixCls}-layout-bottom`
    }, lineInner, children) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        className: `${prefixCls}-outer`,
        style: outerStyle
    }, isOuterStart && children, lineInner, isOuterEnd && children);
};
const __TURBOPACK__default__export__ = Line;
}),
"[project]/Downloads/One click/node_modules/antd/es/progress/Steps.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/progress/utils.js [ssr] (ecmascript)");
"use client";
;
;
;
const Steps = (props)=>{
    const { size, steps, rounding: customRounding = Math.round, percent = 0, strokeWidth = 8, strokeColor, trailColor = null, prefixCls, children } = props;
    const current = customRounding(steps * (percent / 100));
    const stepWidth = size === 'small' ? 2 : 14;
    const mergedSize = size !== null && size !== void 0 ? size : [
        stepWidth,
        strokeWidth
    ];
    const [width, height] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getSize"])(mergedSize, 'step', {
        steps,
        strokeWidth
    });
    const unitWidth = width / steps;
    const styledSteps = Array.from({
        length: steps
    });
    for(let i = 0; i < steps; i++){
        const color = Array.isArray(strokeColor) ? strokeColor[i] : strokeColor;
        styledSteps[i] = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
            key: i,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-steps-item`, {
                [`${prefixCls}-steps-item-active`]: i <= current - 1
            }),
            style: {
                backgroundColor: i <= current - 1 ? color : trailColor,
                width: unitWidth,
                height
            }
        });
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        className: `${prefixCls}-steps-outer`
    }, styledSteps, children);
};
const __TURBOPACK__default__export__ = Steps;
}),
"[project]/Downloads/One click/node_modules/antd/es/progress/progress.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProgressTypes",
    ()=>ProgressTypes,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/fast-color/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/fast-color/es/FastColor.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/CheckOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/omit.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$Circle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/progress/Circle.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$Line$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/progress/Line.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$Steps$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/progress/Steps.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/progress/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/progress/utils.js [ssr] (ecmascript)");
"use client";
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
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
const ProgressTypes = [
    'line',
    'circle',
    'dashboard'
];
const ProgressStatuses = [
    'normal',
    'exception',
    'active',
    'success'
];
const Progress = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, className, rootClassName, steps, strokeColor, percent = 0, size = 'default', showInfo = true, type = 'line', status, format, style, percentPosition = {} } = props, restProps = __rest(props, [
        "prefixCls",
        "className",
        "rootClassName",
        "steps",
        "strokeColor",
        "percent",
        "size",
        "showInfo",
        "type",
        "status",
        "format",
        "style",
        "percentPosition"
    ]);
    const { align: infoAlign = 'end', type: infoPosition = 'outer' } = percentPosition;
    const strokeColorNotArray = Array.isArray(strokeColor) ? strokeColor[0] : strokeColor;
    const strokeColorNotGradient = typeof strokeColor === 'string' || Array.isArray(strokeColor) ? strokeColor : undefined;
    const strokeColorIsBright = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](()=>{
        if (strokeColorNotArray) {
            const color = typeof strokeColorNotArray === 'string' ? strokeColorNotArray : Object.values(strokeColorNotArray)[0];
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FastColor"](color).isLight();
        }
        return false;
    }, [
        strokeColor
    ]);
    const percentNumber = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](()=>{
        var _a, _b;
        const successPercent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getSuccessPercent"])(props);
        return Number.parseInt(successPercent !== undefined ? (_a = successPercent !== null && successPercent !== void 0 ? successPercent : 0) === null || _a === void 0 ? void 0 : _a.toString() : (_b = percent !== null && percent !== void 0 ? percent : 0) === null || _b === void 0 ? void 0 : _b.toString(), 10);
    }, [
        percent,
        props.success,
        props.successPercent
    ]);
    const progressStatus = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](()=>{
        if (!ProgressStatuses.includes(status) && percentNumber >= 100) {
            return 'success';
        }
        return status || 'normal';
    }, [
        status,
        percentNumber
    ]);
    const { getPrefixCls, direction, progress: progressStyle } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('progress', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const isLineType = type === 'line';
    const isPureLineType = isLineType && !steps;
    const progressInfo = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](()=>{
        if (!showInfo) {
            return null;
        }
        const successPercent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getSuccessPercent"])(props);
        let text;
        const textFormatter = format || ((number)=>`${number}%`);
        const isBrightInnerColor = isLineType && strokeColorIsBright && infoPosition === 'inner';
        if (infoPosition === 'inner' || format || progressStatus !== 'exception' && progressStatus !== 'success') {
            text = textFormatter((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["validProgress"])(percent), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["validProgress"])(successPercent));
        } else if (progressStatus === 'exception') {
            text = isLineType ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null);
        } else if (progressStatus === 'success') {
            text = isLineType ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], null);
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-text`, {
                [`${prefixCls}-text-bright`]: isBrightInnerColor,
                [`${prefixCls}-text-${infoAlign}`]: isPureLineType,
                [`${prefixCls}-text-${infoPosition}`]: isPureLineType
            }),
            title: typeof text === 'string' ? text : undefined
        }, text);
    }, [
        showInfo,
        percent,
        percentNumber,
        progressStatus,
        type,
        prefixCls,
        format
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])('Progress');
        warning.deprecated(!('successPercent' in props), 'successPercent', 'success.percent');
        warning.deprecated(!('width' in props), 'width', 'size');
        if (type === 'circle' || type === 'dashboard') {
            if (Array.isArray(size)) {
                ("TURBOPACK compile-time truthy", 1) ? warning(false, 'usage', 'Type "circle" and "dashboard" do not accept array as `size`, please use number or preset size instead.') : "TURBOPACK unreachable";
            } else if (typeof size === 'object') {
                ("TURBOPACK compile-time truthy", 1) ? warning(false, 'usage', 'Type "circle" and "dashboard" do not accept object as `size`, please use number or preset size instead.') : "TURBOPACK unreachable";
            }
        }
        if (props.success && 'progress' in props.success) {
            warning.deprecated(false, 'success.progress', 'success.percent');
        }
    }
    let progress;
    // Render progress shape
    if (type === 'line') {
        progress = steps ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$Steps$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], Object.assign({}, props, {
            strokeColor: strokeColorNotGradient,
            prefixCls: prefixCls,
            steps: typeof steps === 'object' ? steps.count : steps
        }), progressInfo) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$Line$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], Object.assign({}, props, {
            strokeColor: strokeColorNotArray,
            prefixCls: prefixCls,
            direction: direction,
            percentPosition: {
                align: infoAlign,
                type: infoPosition
            }
        }), progressInfo);
    } else if (type === 'circle' || type === 'dashboard') {
        progress = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$Circle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], Object.assign({}, props, {
            strokeColor: strokeColorNotArray,
            prefixCls: prefixCls,
            progressStatus: progressStatus
        }), progressInfo);
    }
    const classString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, `${prefixCls}-status-${progressStatus}`, {
        [`${prefixCls}-${type === 'dashboard' && 'circle' || type}`]: type !== 'line',
        [`${prefixCls}-inline-circle`]: type === 'circle' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getSize"])(size, 'circle')[0] <= 20,
        [`${prefixCls}-line`]: isPureLineType,
        [`${prefixCls}-line-align-${infoAlign}`]: isPureLineType,
        [`${prefixCls}-line-position-${infoPosition}`]: isPureLineType,
        [`${prefixCls}-steps`]: steps,
        [`${prefixCls}-show-info`]: showInfo,
        [`${prefixCls}-${size}`]: typeof size === 'string',
        [`${prefixCls}-rtl`]: direction === 'rtl'
    }, progressStyle === null || progressStyle === void 0 ? void 0 : progressStyle.className, className, rootClassName, hashId, cssVarCls);
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", Object.assign({
        ref: ref,
        style: Object.assign(Object.assign({}, progressStyle === null || progressStyle === void 0 ? void 0 : progressStyle.style), style),
        className: classString,
        role: "progressbar",
        "aria-valuenow": percentNumber,
        "aria-valuemin": 0,
        "aria-valuemax": 100
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(restProps, [
        'trailColor',
        'strokeWidth',
        'width',
        'gapDegree',
        'gapPosition',
        'strokeLinecap',
        'success',
        'successPercent'
    ])), progress));
});
if ("TURBOPACK compile-time truthy", 1) {
    Progress.displayName = 'Progress';
}
const __TURBOPACK__default__export__ = Progress;
}),
"[project]/Downloads/One click/node_modules/antd/es/progress/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$progress$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/progress/progress.js [ssr] (ecmascript)");
"use client";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$progress$2f$progress$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Downloads/One click/node_modules/antd/es/switch/style/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/fast-color/es/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/fast-color/es/FastColor.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [ssr] (ecmascript) <export merge as mergeToken>");
;
;
;
;
const genSwitchSmallStyle = (token)=>{
    const { componentCls, trackHeightSM, trackPadding, trackMinWidthSM, innerMinMarginSM, innerMaxMarginSM, handleSizeSM, calc } = token;
    const switchInnerCls = `${componentCls}-inner`;
    const trackPaddingCalc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(calc(handleSizeSM).add(calc(trackPadding).mul(2)).equal());
    const innerMaxMarginCalc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(calc(innerMaxMarginSM).mul(2).equal());
    return {
        [componentCls]: {
            [`&${componentCls}-small`]: {
                minWidth: trackMinWidthSM,
                height: trackHeightSM,
                lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(trackHeightSM),
                [`${componentCls}-inner`]: {
                    paddingInlineStart: innerMaxMarginSM,
                    paddingInlineEnd: innerMinMarginSM,
                    [`${switchInnerCls}-checked, ${switchInnerCls}-unchecked`]: {
                        minHeight: trackHeightSM
                    },
                    [`${switchInnerCls}-checked`]: {
                        marginInlineStart: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`,
                        marginInlineEnd: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`
                    },
                    [`${switchInnerCls}-unchecked`]: {
                        marginTop: calc(trackHeightSM).mul(-1).equal(),
                        marginInlineStart: 0,
                        marginInlineEnd: 0
                    }
                },
                [`${componentCls}-handle`]: {
                    width: handleSizeSM,
                    height: handleSizeSM
                },
                [`${componentCls}-loading-icon`]: {
                    top: calc(calc(handleSizeSM).sub(token.switchLoadingIconSize)).div(2).equal(),
                    fontSize: token.switchLoadingIconSize
                },
                [`&${componentCls}-checked`]: {
                    [`${componentCls}-inner`]: {
                        paddingInlineStart: innerMinMarginSM,
                        paddingInlineEnd: innerMaxMarginSM,
                        [`${switchInnerCls}-checked`]: {
                            marginInlineStart: 0,
                            marginInlineEnd: 0
                        },
                        [`${switchInnerCls}-unchecked`]: {
                            marginInlineStart: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`,
                            marginInlineEnd: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`
                        }
                    },
                    [`${componentCls}-handle`]: {
                        insetInlineStart: `calc(100% - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(calc(handleSizeSM).add(trackPadding).equal())})`
                    }
                },
                [`&:not(${componentCls}-disabled):active`]: {
                    [`&:not(${componentCls}-checked) ${switchInnerCls}`]: {
                        [`${switchInnerCls}-unchecked`]: {
                            marginInlineStart: calc(token.marginXXS).div(2).equal(),
                            marginInlineEnd: calc(token.marginXXS).mul(-1).div(2).equal()
                        }
                    },
                    [`&${componentCls}-checked ${switchInnerCls}`]: {
                        [`${switchInnerCls}-checked`]: {
                            marginInlineStart: calc(token.marginXXS).mul(-1).div(2).equal(),
                            marginInlineEnd: calc(token.marginXXS).div(2).equal()
                        }
                    }
                }
            }
        }
    };
};
const genSwitchLoadingStyle = (token)=>{
    const { componentCls, handleSize, calc } = token;
    return {
        [componentCls]: {
            [`${componentCls}-loading-icon${token.iconCls}`]: {
                position: 'relative',
                top: calc(calc(handleSize).sub(token.fontSize)).div(2).equal(),
                color: token.switchLoadingIconColor,
                verticalAlign: 'top'
            },
            [`&${componentCls}-checked ${componentCls}-loading-icon`]: {
                color: token.switchColor
            }
        }
    };
};
const genSwitchHandleStyle = (token)=>{
    const { componentCls, trackPadding, handleBg, handleShadow, handleSize, calc } = token;
    const switchHandleCls = `${componentCls}-handle`;
    return {
        [componentCls]: {
            [switchHandleCls]: {
                position: 'absolute',
                top: trackPadding,
                insetInlineStart: trackPadding,
                width: handleSize,
                height: handleSize,
                transition: `all ${token.switchDuration} ease-in-out`,
                '&::before': {
                    position: 'absolute',
                    top: 0,
                    insetInlineEnd: 0,
                    bottom: 0,
                    insetInlineStart: 0,
                    backgroundColor: handleBg,
                    borderRadius: calc(handleSize).div(2).equal(),
                    boxShadow: handleShadow,
                    transition: `all ${token.switchDuration} ease-in-out`,
                    content: '""'
                }
            },
            [`&${componentCls}-checked ${switchHandleCls}`]: {
                insetInlineStart: `calc(100% - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(calc(handleSize).add(trackPadding).equal())})`
            },
            [`&:not(${componentCls}-disabled):active`]: {
                [`${switchHandleCls}::before`]: {
                    insetInlineEnd: token.switchHandleActiveInset,
                    insetInlineStart: 0
                },
                [`&${componentCls}-checked ${switchHandleCls}::before`]: {
                    insetInlineEnd: 0,
                    insetInlineStart: token.switchHandleActiveInset
                }
            }
        }
    };
};
const genSwitchInnerStyle = (token)=>{
    const { componentCls, trackHeight, trackPadding, innerMinMargin, innerMaxMargin, handleSize, calc } = token;
    const switchInnerCls = `${componentCls}-inner`;
    const trackPaddingCalc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(calc(handleSize).add(calc(trackPadding).mul(2)).equal());
    const innerMaxMarginCalc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(calc(innerMaxMargin).mul(2).equal());
    return {
        [componentCls]: {
            [switchInnerCls]: {
                display: 'block',
                overflow: 'hidden',
                borderRadius: 100,
                height: '100%',
                paddingInlineStart: innerMaxMargin,
                paddingInlineEnd: innerMinMargin,
                transition: `padding-inline-start ${token.switchDuration} ease-in-out, padding-inline-end ${token.switchDuration} ease-in-out`,
                [`${switchInnerCls}-checked, ${switchInnerCls}-unchecked`]: {
                    display: 'block',
                    color: token.colorTextLightSolid,
                    fontSize: token.fontSizeSM,
                    transition: `margin-inline-start ${token.switchDuration} ease-in-out, margin-inline-end ${token.switchDuration} ease-in-out`,
                    pointerEvents: 'none',
                    minHeight: trackHeight
                },
                [`${switchInnerCls}-checked`]: {
                    marginInlineStart: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`,
                    marginInlineEnd: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`
                },
                [`${switchInnerCls}-unchecked`]: {
                    marginTop: calc(trackHeight).mul(-1).equal(),
                    marginInlineStart: 0,
                    marginInlineEnd: 0
                }
            },
            [`&${componentCls}-checked ${switchInnerCls}`]: {
                paddingInlineStart: innerMinMargin,
                paddingInlineEnd: innerMaxMargin,
                [`${switchInnerCls}-checked`]: {
                    marginInlineStart: 0,
                    marginInlineEnd: 0
                },
                [`${switchInnerCls}-unchecked`]: {
                    marginInlineStart: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`,
                    marginInlineEnd: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`
                }
            },
            [`&:not(${componentCls}-disabled):active`]: {
                [`&:not(${componentCls}-checked) ${switchInnerCls}`]: {
                    [`${switchInnerCls}-unchecked`]: {
                        marginInlineStart: calc(trackPadding).mul(2).equal(),
                        marginInlineEnd: calc(trackPadding).mul(-1).mul(2).equal()
                    }
                },
                [`&${componentCls}-checked ${switchInnerCls}`]: {
                    [`${switchInnerCls}-checked`]: {
                        marginInlineStart: calc(trackPadding).mul(-1).mul(2).equal(),
                        marginInlineEnd: calc(trackPadding).mul(2).equal()
                    }
                }
            }
        }
    };
};
const genSwitchStyle = (token)=>{
    const { componentCls, trackHeight, trackMinWidth } = token;
    return {
        [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token)), {
            position: 'relative',
            display: 'inline-block',
            boxSizing: 'border-box',
            minWidth: trackMinWidth,
            height: trackHeight,
            lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["unit"])(trackHeight),
            verticalAlign: 'middle',
            background: token.colorTextQuaternary,
            border: '0',
            borderRadius: 100,
            cursor: 'pointer',
            transition: `all ${token.motionDurationMid}`,
            userSelect: 'none',
            [`&:hover:not(${componentCls}-disabled)`]: {
                background: token.colorTextTertiary
            }
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genFocusStyle"])(token)), {
            [`&${componentCls}-checked`]: {
                background: token.switchColor,
                [`&:hover:not(${componentCls}-disabled)`]: {
                    background: token.colorPrimaryHover
                }
            },
            [`&${componentCls}-loading, &${componentCls}-disabled`]: {
                cursor: 'not-allowed',
                opacity: token.switchDisabledOpacity,
                '*': {
                    boxShadow: 'none',
                    cursor: 'not-allowed'
                }
            },
            // rtl style
            [`&${componentCls}-rtl`]: {
                direction: 'rtl'
            }
        })
    };
};
const prepareComponentToken = (token)=>{
    const { fontSize, lineHeight, controlHeight, colorWhite } = token;
    const height = fontSize * lineHeight;
    const heightSM = controlHeight / 2;
    const padding = 2; // Fixed value
    const handleSize = height - padding * 2;
    const handleSizeSM = heightSM - padding * 2;
    return {
        trackHeight: height,
        trackHeightSM: heightSM,
        trackMinWidth: handleSize * 2 + padding * 4,
        trackMinWidthSM: handleSizeSM * 2 + padding * 2,
        trackPadding: padding,
        // Fixed value
        handleBg: colorWhite,
        handleSize,
        handleSizeSM,
        handleShadow: `0 2px 4px 0 ${new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FastColor"]('#00230b').setA(0.2).toRgbString()}`,
        innerMinMargin: handleSize / 2,
        innerMaxMargin: handleSize + padding + padding * 2,
        innerMinMarginSM: handleSizeSM / 2,
        innerMaxMarginSM: handleSizeSM + padding + padding * 2
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])('Switch', (token)=>{
    const switchToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        switchDuration: token.motionDurationMid,
        switchColor: token.colorPrimary,
        switchDisabledOpacity: token.opacityLoading,
        switchLoadingIconSize: token.calc(token.fontSizeIcon).mul(0.75).equal(),
        switchLoadingIconColor: `rgba(0, 0, 0, ${token.opacityLoading})`,
        switchHandleActiveInset: '-30%'
    });
    return [
        genSwitchStyle(switchToken),
        // inner style
        genSwitchInnerStyle(switchToken),
        // handle style
        genSwitchHandleStyle(switchToken),
        // loading style
        genSwitchLoadingStyle(switchToken),
        // small style
        genSwitchSmallStyle(switchToken)
    ];
}, prepareComponentToken);
}),
"[project]/Downloads/One click/node_modules/antd/es/switch/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$switch$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-switch/es/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useMergedState.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/wave/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/DisabledContext.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useSize.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$switch$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/switch/style/index.js [ssr] (ecmascript)");
"use client";
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
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
const InternalSwitch = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, size: customizeSize, disabled: customDisabled, loading, className, rootClassName, style, checked: checkedProp, value, defaultChecked: defaultCheckedProp, defaultValue, onChange } = props, restProps = __rest(props, [
        "prefixCls",
        "size",
        "disabled",
        "loading",
        "className",
        "rootClassName",
        "style",
        "checked",
        "value",
        "defaultChecked",
        "defaultValue",
        "onChange"
    ]);
    const [checked, setChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(false, {
        value: checkedProp !== null && checkedProp !== void 0 ? checkedProp : value,
        defaultValue: defaultCheckedProp !== null && defaultCheckedProp !== void 0 ? defaultCheckedProp : defaultValue
    });
    const { getPrefixCls, direction, switch: SWITCH } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    // ===================== Disabled =====================
    const disabled = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = (customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled) || loading;
    const prefixCls = getPrefixCls('switch', customizePrefixCls);
    const loadingIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"]("div", {
        className: `${prefixCls}-handle`
    }, loading && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: `${prefixCls}-loading-icon`
    }));
    // Style
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$switch$2f$style$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(customizeSize);
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(SWITCH === null || SWITCH === void 0 ? void 0 : SWITCH.className, {
        [`${prefixCls}-small`]: mergedSize === 'small',
        [`${prefixCls}-loading`]: loading,
        [`${prefixCls}-rtl`]: direction === 'rtl'
    }, className, rootClassName, hashId, cssVarCls);
    const mergedStyle = Object.assign(Object.assign({}, SWITCH === null || SWITCH === void 0 ? void 0 : SWITCH.style), style);
    const changeHandler = (...args)=>{
        setChecked(args[0]);
        onChange === null || onChange === void 0 ? void 0 : onChange.apply(void 0, args);
    };
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        component: "Switch",
        disabled: mergedDisabled
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$switch$2f$es$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], Object.assign({}, restProps, {
        checked: checked,
        onChange: changeHandler,
        prefixCls: prefixCls,
        className: classes,
        style: mergedStyle,
        disabled: mergedDisabled,
        ref: ref,
        loadingIcon: loadingIcon
    }))));
});
const Switch = InternalSwitch;
Switch.__ANT_SWITCH = true;
if ("TURBOPACK compile-time truthy", 1) {
    Switch.displayName = 'Switch';
}
const __TURBOPACK__default__export__ = Switch;
}),
"[project]/Downloads/One click/node_modules/antd/es/switch/index.js [ssr] (ecmascript) <export default as Switch>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$switch$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$switch$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/switch/index.js [ssr] (ecmascript)");
}),
];

//# sourceMappingURL=f2ed1_antd_es_f279060a._.js.map