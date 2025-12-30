(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/One click/node_modules/antd/es/form/context.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormContext",
    ()=>FormContext,
    "FormItemInputContext",
    ()=>FormItemInputContext,
    "FormItemPrefixContext",
    ()=>FormItemPrefixContext,
    "FormProvider",
    ()=>FormProvider,
    "NoFormStyle",
    ()=>NoFormStyle,
    "NoStyleItemContext",
    ()=>NoStyleItemContext,
    "VariantContext",
    ()=>VariantContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$field$2d$form$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-field-form/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$field$2d$form$2f$es$2f$FormContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-field-form/es/FormContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/omit.js [client] (ecmascript)");
"use client";
;
;
;
const FormContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"]({
    labelAlign: 'right',
    layout: 'horizontal',
    itemRef: ()=>{}
});
const NoStyleItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"](null);
const FormProvider = (props)=>{
    const providerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, [
        'prefixCls'
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$field$2d$form$2f$es$2f$FormContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FormProvider"], Object.assign({}, providerProps));
};
const FormItemPrefixContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"]({
    prefixCls: ''
});
const FormItemInputContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"]({});
if ("TURBOPACK compile-time truthy", 1) {
    FormItemInputContext.displayName = 'FormItemInputContext';
}
const NoFormStyle = (param)=>{
    let { children, status, override } = param;
    const formItemInputContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](FormItemInputContext);
    const newFormItemInputContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "NoFormStyle.useMemo[newFormItemInputContext]": ()=>{
            const newContext = Object.assign({}, formItemInputContext);
            if (override) {
                delete newContext.isFormItemInput;
            }
            if (status) {
                delete newContext.status;
                delete newContext.hasFeedback;
                delete newContext.feedbackIcon;
            }
            return newContext;
        }
    }["NoFormStyle.useMemo[newFormItemInputContext]"], [
        status,
        override,
        formItemInputContext
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](FormItemInputContext.Provider, {
        value: newFormItemInputContext
    }, children);
};
const VariantContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
}),
"[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfigConsumer",
    ()=>ConfigConsumer,
    "ConfigContext",
    ()=>ConfigContext,
    "Variants",
    ()=>Variants,
    "defaultIconPrefixCls",
    ()=>defaultIconPrefixCls,
    "defaultPrefixCls",
    ()=>defaultPrefixCls,
    "useComponentConfig",
    ()=>useComponentConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
const defaultPrefixCls = 'ant';
const defaultIconPrefixCls = 'anticon';
const Variants = [
    'outlined',
    'borderless',
    'filled',
    'underlined'
];
const defaultGetPrefixCls = (suffixCls, customizePrefixCls)=>{
    if (customizePrefixCls) {
        return customizePrefixCls;
    }
    return suffixCls ? "".concat(defaultPrefixCls, "-").concat(suffixCls) : defaultPrefixCls;
};
const ConfigContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"]({
    // We provide a default function for Context without provider
    getPrefixCls: defaultGetPrefixCls,
    iconPrefixCls: defaultIconPrefixCls
});
const { Consumer: ConfigConsumer } = ConfigContext;
const EMPTY_OBJECT = {};
function useComponentConfig(propName) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](ConfigContext);
    const { getPrefixCls, direction, getPopupContainer } = context;
    const propValue = context[propName];
    return Object.assign(Object.assign({
        classNames: EMPTY_OBJECT,
        styles: EMPTY_OBJECT
    }, propValue), {
        getPrefixCls,
        direction,
        getPopupContainer
    });
}
}),
"[project]/Downloads/One click/node_modules/antd/es/config-provider/SizeContext.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SizeContextProvider",
    ()=>SizeContextProvider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
"use client";
;
const SizeContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
const SizeContextProvider = (param)=>{
    let { children, size } = param;
    const originSize = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](SizeContext);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](SizeContext.Provider, {
        value: size || originSize
    }, children);
};
const __TURBOPACK__default__export__ = SizeContext;
}),
"[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useSize.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/SizeContext.js [client] (ecmascript)");
;
;
const useSize = (customSize)=>{
    const size = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
    const mergedSize = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useSize.useMemo[mergedSize]": ()=>{
            if (!customSize) {
                return size;
            }
            if (typeof customSize === 'string') {
                return customSize !== null && customSize !== void 0 ? customSize : size;
            }
            if (typeof customSize === 'function') {
                return customSize(size);
            }
            return size;
        }
    }["useSize.useMemo[mergedSize]"], [
        customSize,
        size
    ]);
    return mergedSize;
};
const __TURBOPACK__default__export__ = useSize;
}),
"[project]/Downloads/One click/node_modules/antd/es/style/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearFix",
    ()=>clearFix,
    "genCommonStyle",
    ()=>genCommonStyle,
    "genFocusOutline",
    ()=>genFocusOutline,
    "genFocusStyle",
    ()=>genFocusStyle,
    "genIconStyle",
    ()=>genIconStyle,
    "genLinkStyle",
    ()=>genLinkStyle,
    "operationUnit",
    ()=>operationUnit,
    "resetComponent",
    ()=>resetComponent,
    "resetIcon",
    ()=>resetIcon,
    "textEllipsis",
    ()=>textEllipsis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [client] (ecmascript)");
"use client";
;
const textEllipsis = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
};
const resetComponent = function(token) {
    let needInheritFontFamily = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        color: token.colorText,
        fontSize: token.fontSize,
        // font-variant: @font-variant-base;
        lineHeight: token.lineHeight,
        listStyle: 'none',
        // font-feature-settings: @font-feature-settings-base;
        fontFamily: needInheritFontFamily ? 'inherit' : token.fontFamily
    };
};
const resetIcon = ()=>({
        display: 'inline-flex',
        alignItems: 'center',
        color: 'inherit',
        fontStyle: 'normal',
        lineHeight: 0,
        textAlign: 'center',
        textTransform: 'none',
        // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
        verticalAlign: '-0.125em',
        textRendering: 'optimizeLegibility',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        '> *': {
            lineHeight: 1
        },
        svg: {
            display: 'inline-block'
        }
    });
const clearFix = ()=>({
        // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
        '&::before': {
            display: 'table',
            content: '""'
        },
        '&::after': {
            // https://github.com/ant-design/ant-design/issues/21864
            display: 'table',
            clear: 'both',
            content: '""'
        }
    });
const genLinkStyle = (token)=>({
        a: {
            color: token.colorLink,
            textDecoration: token.linkDecoration,
            backgroundColor: 'transparent',
            // remove the gray background on active links in IE 10.
            outline: 'none',
            cursor: 'pointer',
            transition: "color ".concat(token.motionDurationSlow),
            '-webkit-text-decoration-skip': 'objects',
            // remove gaps in links underline in iOS 8+ and Safari 8+.
            '&:hover': {
                color: token.colorLinkHover
            },
            '&:active': {
                color: token.colorLinkActive
            },
            '&:active, &:hover': {
                textDecoration: token.linkHoverDecoration,
                outline: 0
            },
            // https://github.com/ant-design/ant-design/issues/22503
            '&:focus': {
                textDecoration: token.linkFocusDecoration,
                outline: 0
            },
            '&[disabled]': {
                color: token.colorTextDisabled,
                cursor: 'not-allowed'
            }
        }
    });
const genCommonStyle = (token, componentPrefixCls, rootCls, resetFont)=>{
    const prefixSelector = '[class^="'.concat(componentPrefixCls, '"], [class*=" ').concat(componentPrefixCls, '"]');
    const rootPrefixSelector = rootCls ? ".".concat(rootCls) : prefixSelector;
    const resetStyle = {
        boxSizing: 'border-box',
        '&::before, &::after': {
            boxSizing: 'border-box'
        }
    };
    let resetFontStyle = {};
    if (resetFont !== false) {
        resetFontStyle = {
            fontFamily: token.fontFamily,
            fontSize: token.fontSize
        };
    }
    return {
        [rootPrefixSelector]: Object.assign(Object.assign(Object.assign({}, resetFontStyle), resetStyle), {
            [prefixSelector]: resetStyle
        })
    };
};
const genFocusOutline = (token, offset)=>({
        outline: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidthFocus), " solid ").concat(token.colorPrimaryBorder),
        outlineOffset: offset !== null && offset !== void 0 ? offset : 1,
        transition: 'outline-offset 0s, outline 0s'
    });
const genFocusStyle = (token, offset)=>({
        '&:focus-visible': genFocusOutline(token, offset)
    });
const genIconStyle = (iconPrefixCls)=>({
        [".".concat(iconPrefixCls)]: Object.assign(Object.assign({}, resetIcon()), {
            [".".concat(iconPrefixCls, " .").concat(iconPrefixCls, "-icon")]: {
                display: 'block'
            }
        })
    });
const operationUnit = (token)=>Object.assign(Object.assign({
        // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
        // And Typography use this to generate link style which should not do this.
        color: token.colorLink,
        textDecoration: token.linkDecoration,
        outline: 'none',
        cursor: 'pointer',
        transition: "all ".concat(token.motionDurationSlow),
        border: 0,
        padding: 0,
        background: 'none',
        userSelect: 'none'
    }, genFocusStyle(token)), {
        '&:hover': {
            color: token.colorLinkHover,
            textDecoration: token.linkHoverDecoration
        },
        '&:focus': {
            color: token.colorLinkHover,
            textDecoration: token.linkFocusDecoration
        },
        '&:active': {
            color: token.colorLinkActive,
            textDecoration: token.linkHoverDecoration
        }
    });
}),
"[project]/Downloads/One click/node_modules/antd/es/version/version.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = '5.29.3';
}),
"[project]/Downloads/One click/node_modules/antd/es/version/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$version$2f$version$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/version/version.js [client] (ecmascript)");
"use client";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$version$2f$version$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/themes/seed.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "defaultPresetColors",
    ()=>defaultPresetColors
]);
const defaultPresetColors = {
    blue: '#1677FF',
    purple: '#722ED1',
    cyan: '#13C2C2',
    green: '#52C41A',
    magenta: '#EB2F96',
    /**
   * @deprecated Use magenta instead
   */ pink: '#EB2F96',
    red: '#F5222D',
    orange: '#FA8C16',
    yellow: '#FADB14',
    volcano: '#FA541C',
    geekblue: '#2F54EB',
    gold: '#FAAD14',
    lime: '#A0D911'
};
const seedToken = Object.assign(Object.assign({}, defaultPresetColors), {
    // Color
    colorPrimary: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1677ff',
    colorLink: '',
    colorTextBase: '',
    colorBgBase: '',
    // Font
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n'Noto Color Emoji'",
    fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontSize: 14,
    // Line
    lineWidth: 1,
    lineType: 'solid',
    // Motion
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    // Radius
    borderRadius: 6,
    // Size
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    // Control Base
    controlHeight: 32,
    // zIndex
    zIndexBase: 0,
    zIndexPopupBase: 1000,
    // Image
    opacityImage: 1,
    // Wireframe
    wireframe: false,
    // Motion
    motion: true
});
const __TURBOPACK__default__export__ = seedToken;
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/themes/shared/genColorMapToken.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>genColorMapToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/fast-color/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/fast-color/es/FastColor.js [client] (ecmascript)");
;
function genColorMapToken(seed, param) {
    let { generateColorPalettes, generateNeutralColorPalettes } = param;
    const { colorSuccess: colorSuccessBase, colorWarning: colorWarningBase, colorError: colorErrorBase, colorInfo: colorInfoBase, colorPrimary: colorPrimaryBase, colorBgBase, colorTextBase } = seed;
    const primaryColors = generateColorPalettes(colorPrimaryBase);
    const successColors = generateColorPalettes(colorSuccessBase);
    const warningColors = generateColorPalettes(colorWarningBase);
    const errorColors = generateColorPalettes(colorErrorBase);
    const infoColors = generateColorPalettes(colorInfoBase);
    const neutralColors = generateNeutralColorPalettes(colorBgBase, colorTextBase);
    // Color Link
    const colorLink = seed.colorLink || seed.colorInfo;
    const linkColors = generateColorPalettes(colorLink);
    const colorErrorBgFilledHover = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FastColor"](errorColors[1]).mix(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FastColor"](errorColors[3]), 50).toHexString();
    return Object.assign(Object.assign({}, neutralColors), {
        colorPrimaryBg: primaryColors[1],
        colorPrimaryBgHover: primaryColors[2],
        colorPrimaryBorder: primaryColors[3],
        colorPrimaryBorderHover: primaryColors[4],
        colorPrimaryHover: primaryColors[5],
        colorPrimary: primaryColors[6],
        colorPrimaryActive: primaryColors[7],
        colorPrimaryTextHover: primaryColors[8],
        colorPrimaryText: primaryColors[9],
        colorPrimaryTextActive: primaryColors[10],
        colorSuccessBg: successColors[1],
        colorSuccessBgHover: successColors[2],
        colorSuccessBorder: successColors[3],
        colorSuccessBorderHover: successColors[4],
        colorSuccessHover: successColors[4],
        colorSuccess: successColors[6],
        colorSuccessActive: successColors[7],
        colorSuccessTextHover: successColors[8],
        colorSuccessText: successColors[9],
        colorSuccessTextActive: successColors[10],
        colorErrorBg: errorColors[1],
        colorErrorBgHover: errorColors[2],
        colorErrorBgFilledHover,
        colorErrorBgActive: errorColors[3],
        colorErrorBorder: errorColors[3],
        colorErrorBorderHover: errorColors[4],
        colorErrorHover: errorColors[5],
        colorError: errorColors[6],
        colorErrorActive: errorColors[7],
        colorErrorTextHover: errorColors[8],
        colorErrorText: errorColors[9],
        colorErrorTextActive: errorColors[10],
        colorWarningBg: warningColors[1],
        colorWarningBgHover: warningColors[2],
        colorWarningBorder: warningColors[3],
        colorWarningBorderHover: warningColors[4],
        colorWarningHover: warningColors[4],
        colorWarning: warningColors[6],
        colorWarningActive: warningColors[7],
        colorWarningTextHover: warningColors[8],
        colorWarningText: warningColors[9],
        colorWarningTextActive: warningColors[10],
        colorInfoBg: infoColors[1],
        colorInfoBgHover: infoColors[2],
        colorInfoBorder: infoColors[3],
        colorInfoBorderHover: infoColors[4],
        colorInfoHover: infoColors[4],
        colorInfo: infoColors[6],
        colorInfoActive: infoColors[7],
        colorInfoTextHover: infoColors[8],
        colorInfoText: infoColors[9],
        colorInfoTextActive: infoColors[10],
        colorLinkHover: linkColors[4],
        colorLink: linkColors[6],
        colorLinkActive: linkColors[7],
        colorBgMask: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FastColor"]('#000').setA(0.45).toRgbString(),
        colorWhite: '#fff'
    });
}
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/themes/shared/genRadius.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const genRadius = (radiusBase)=>{
    let radiusLG = radiusBase;
    let radiusSM = radiusBase;
    let radiusXS = radiusBase;
    let radiusOuter = radiusBase;
    // radiusLG
    if (radiusBase < 6 && radiusBase >= 5) {
        radiusLG = radiusBase + 1;
    } else if (radiusBase < 16 && radiusBase >= 6) {
        radiusLG = radiusBase + 2;
    } else if (radiusBase >= 16) {
        radiusLG = 16;
    }
    // radiusSM
    if (radiusBase < 7 && radiusBase >= 5) {
        radiusSM = 4;
    } else if (radiusBase < 8 && radiusBase >= 7) {
        radiusSM = 5;
    } else if (radiusBase < 14 && radiusBase >= 8) {
        radiusSM = 6;
    } else if (radiusBase < 16 && radiusBase >= 14) {
        radiusSM = 7;
    } else if (radiusBase >= 16) {
        radiusSM = 8;
    }
    // radiusXS
    if (radiusBase < 6 && radiusBase >= 2) {
        radiusXS = 1;
    } else if (radiusBase >= 6) {
        radiusXS = 2;
    }
    // radiusOuter
    if (radiusBase > 4 && radiusBase < 8) {
        radiusOuter = 4;
    } else if (radiusBase >= 8) {
        radiusOuter = 6;
    }
    return {
        borderRadius: radiusBase,
        borderRadiusXS: radiusXS,
        borderRadiusSM: radiusSM,
        borderRadiusLG: radiusLG,
        borderRadiusOuter: radiusOuter
    };
};
const __TURBOPACK__default__export__ = genRadius;
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/themes/shared/genCommonMapToken.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>genCommonMapToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genRadius$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/themes/shared/genRadius.js [client] (ecmascript)");
;
function genCommonMapToken(token) {
    const { motionUnit, motionBase, borderRadius, lineWidth } = token;
    return Object.assign({
        // motion
        motionDurationFast: "".concat((motionBase + motionUnit).toFixed(1), "s"),
        motionDurationMid: "".concat((motionBase + motionUnit * 2).toFixed(1), "s"),
        motionDurationSlow: "".concat((motionBase + motionUnit * 3).toFixed(1), "s"),
        // line
        lineWidthBold: lineWidth + 1
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genRadius$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(borderRadius));
}
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/themes/shared/genControlHeight.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const genControlHeight = (token)=>{
    const { controlHeight } = token;
    return {
        controlHeightSM: controlHeight * 0.75,
        controlHeightXS: controlHeight * 0.5,
        controlHeightLG: controlHeight * 1.25
    };
};
const __TURBOPACK__default__export__ = genControlHeight;
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/themes/shared/genFontSizes.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getFontSizes,
    "getLineHeight",
    ()=>getLineHeight
]);
function getLineHeight(fontSize) {
    return (fontSize + 8) / fontSize;
}
function getFontSizes(base) {
    const fontSizes = Array.from({
        length: 10
    }).map((_, index)=>{
        const i = index - 1;
        const baseSize = base * Math.pow(Math.E, i / 5);
        const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
        // Convert to even
        return Math.floor(intSize / 2) * 2;
    });
    fontSizes[1] = base;
    return fontSizes.map((size)=>({
            size,
            lineHeight: getLineHeight(size)
        }));
}
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/themes/shared/genFontMapToken.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontSizes$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/themes/shared/genFontSizes.js [client] (ecmascript)");
;
const genFontMapToken = (fontSize)=>{
    const fontSizePairs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontSizes$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(fontSize);
    const fontSizes = fontSizePairs.map((pair)=>pair.size);
    const lineHeights = fontSizePairs.map((pair)=>pair.lineHeight);
    const fontSizeMD = fontSizes[1];
    const fontSizeSM = fontSizes[0];
    const fontSizeLG = fontSizes[2];
    const lineHeight = lineHeights[1];
    const lineHeightSM = lineHeights[0];
    const lineHeightLG = lineHeights[2];
    return {
        fontSizeSM,
        fontSize: fontSizeMD,
        fontSizeLG,
        fontSizeXL: fontSizes[3],
        fontSizeHeading1: fontSizes[6],
        fontSizeHeading2: fontSizes[5],
        fontSizeHeading3: fontSizes[4],
        fontSizeHeading4: fontSizes[3],
        fontSizeHeading5: fontSizes[2],
        lineHeight,
        lineHeightLG,
        lineHeightSM,
        fontHeight: Math.round(lineHeight * fontSizeMD),
        fontHeightLG: Math.round(lineHeightLG * fontSizeLG),
        fontHeightSM: Math.round(lineHeightSM * fontSizeSM),
        lineHeightHeading1: lineHeights[6],
        lineHeightHeading2: lineHeights[5],
        lineHeightHeading3: lineHeights[4],
        lineHeightHeading4: lineHeights[3],
        lineHeightHeading5: lineHeights[2]
    };
};
const __TURBOPACK__default__export__ = genFontMapToken;
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/themes/shared/genSizeMapToken.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>genSizeMapToken
]);
function genSizeMapToken(token) {
    const { sizeUnit, sizeStep } = token;
    return {
        sizeXXL: sizeUnit * (sizeStep + 8),
        // 48
        sizeXL: sizeUnit * (sizeStep + 4),
        // 32
        sizeLG: sizeUnit * (sizeStep + 2),
        // 24
        sizeMD: sizeUnit * (sizeStep + 1),
        // 20
        sizeMS: sizeUnit * sizeStep,
        // 16
        size: sizeUnit * sizeStep,
        // 16
        sizeSM: sizeUnit * (sizeStep - 1),
        // 12
        sizeXS: sizeUnit * (sizeStep - 2),
        // 8
        sizeXXS: sizeUnit * (sizeStep - 3) // 4
    };
}
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/themes/default/colorAlgorithm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAlphaColor",
    ()=>getAlphaColor,
    "getSolidColor",
    ()=>getSolidColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/fast-color/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/fast-color/es/FastColor.js [client] (ecmascript)");
;
const getAlphaColor = (baseColor, alpha)=>new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FastColor"](baseColor).setA(alpha).toRgbString();
const getSolidColor = (baseColor, brightness)=>{
    const instance = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FastColor"](baseColor);
    return instance.darken(brightness).toHexString();
};
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/themes/default/colors.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateColorPalettes",
    ()=>generateColorPalettes,
    "generateNeutralColorPalettes",
    ()=>generateNeutralColorPalettes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/colors/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/colors/es/generate.js [client] (ecmascript) <export default as generate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/themes/default/colorAlgorithm.js [client] (ecmascript)");
;
;
const generateColorPalettes = (baseColor)=>{
    const colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__["generate"])(baseColor);
    return {
        1: colors[0],
        2: colors[1],
        3: colors[2],
        4: colors[3],
        5: colors[4],
        6: colors[5],
        7: colors[6],
        8: colors[4],
        9: colors[5],
        10: colors[6]
    };
};
const generateNeutralColorPalettes = (bgBaseColor, textBaseColor)=>{
    const colorBgBase = bgBaseColor || '#fff';
    const colorTextBase = textBaseColor || '#000';
    return {
        colorBgBase,
        colorTextBase,
        colorText: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.88),
        colorTextSecondary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.65),
        colorTextTertiary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.45),
        colorTextQuaternary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.25),
        colorFill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.15),
        colorFillSecondary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.06),
        colorFillTertiary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.04),
        colorFillQuaternary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.02),
        colorBgSolid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 1),
        colorBgSolidHover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.75),
        colorBgSolidActive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.95),
        colorBgLayout: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 4),
        colorBgContainer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 0),
        colorBgElevated: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 0),
        colorBgSpotlight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.85),
        colorBgBlur: 'transparent',
        colorBorder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 15),
        colorBorderSecondary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 6)
    };
};
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/themes/default/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>derivative
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/colors/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/colors/es/generate.js [client] (ecmascript) <export default as generate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/colors/es/presets.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/themes/seed.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genColorMapToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/themes/shared/genColorMapToken.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genCommonMapToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/themes/shared/genCommonMapToken.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genControlHeight$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/themes/shared/genControlHeight.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontMapToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/themes/shared/genFontMapToken.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genSizeMapToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/themes/shared/genSizeMapToken.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colors$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/themes/default/colors.js [client] (ecmascript)");
;
;
;
;
;
;
;
;
function derivative(token) {
    // pink is deprecated name of magenta, keep this for backwards compatibility
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$client$5d$__$28$ecmascript$29$__["presetPrimaryColors"].pink = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$client$5d$__$28$ecmascript$29$__["presetPrimaryColors"].magenta;
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$client$5d$__$28$ecmascript$29$__["presetPalettes"].pink = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$client$5d$__$28$ecmascript$29$__["presetPalettes"].magenta;
    const colorPalettes = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$client$5d$__$28$ecmascript$29$__["defaultPresetColors"]).map((colorKey)=>{
        const colors = token[colorKey] === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$client$5d$__$28$ecmascript$29$__["presetPrimaryColors"][colorKey] ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$client$5d$__$28$ecmascript$29$__["presetPalettes"][colorKey] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__["generate"])(token[colorKey]);
        return Array.from({
            length: 10
        }, ()=>1).reduce((prev, _, i)=>{
            prev["".concat(colorKey, "-").concat(i + 1)] = colors[i];
            prev["".concat(colorKey).concat(i + 1)] = colors[i];
            return prev;
        }, {});
    }).reduce((prev, cur)=>{
        prev = Object.assign(Object.assign({}, prev), cur);
        return prev;
    }, {});
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, token), colorPalettes), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genColorMapToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(token, {
        generateColorPalettes: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colors$2e$js__$5b$client$5d$__$28$ecmascript$29$__["generateColorPalettes"],
        generateNeutralColorPalettes: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colors$2e$js__$5b$client$5d$__$28$ecmascript$29$__["generateNeutralColorPalettes"]
    })), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontMapToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(token.fontSize)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genSizeMapToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(token)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genControlHeight$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(token)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genCommonMapToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(token));
}
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/themes/default/theme.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$theme$2f$createTheme$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/theme/createTheme.js [client] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/themes/default/index.js [client] (ecmascript)");
;
;
const defaultTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$theme$2f$createTheme$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = defaultTheme;
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/themes/default/theme.js [client] (ecmascript) <export default as defaultTheme>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$theme$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$theme$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/themes/default/theme.js [client] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/context.js [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DesignTokenContext",
    ()=>DesignTokenContext,
    "defaultConfig",
    ()=>defaultConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/themes/seed.js [client] (ecmascript)");
;
;
;
const defaultConfig = {
    token: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    override: {
        override: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
    },
    hashed: true
};
const DesignTokenContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createContext(defaultConfig);
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/util/getAlphaColor.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/fast-color/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/fast-color/es/FastColor.js [client] (ecmascript)");
;
function isStableColor(color) {
    return color >= 0 && color <= 255;
}
function getAlphaColor(frontColor, backgroundColor) {
    const { r: fR, g: fG, b: fB, a: originAlpha } = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FastColor"](frontColor).toRgb();
    if (originAlpha < 1) {
        return frontColor;
    }
    const { r: bR, g: bG, b: bB } = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FastColor"](backgroundColor).toRgb();
    for(let fA = 0.01; fA <= 1; fA += 0.01){
        const r = Math.round((fR - bR * (1 - fA)) / fA);
        const g = Math.round((fG - bG * (1 - fA)) / fA);
        const b = Math.round((fB - bB * (1 - fA)) / fA);
        if (isStableColor(r) && isStableColor(g) && isStableColor(b)) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FastColor"]({
                r,
                g,
                b,
                a: Math.round(fA * 100) / 100
            }).toRgbString();
        }
    }
    // fallback
    /* istanbul ignore next */ return new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FastColor"]({
        r: fR,
        g: fG,
        b: fB,
        a: 1
    }).toRgbString();
}
const __TURBOPACK__default__export__ = getAlphaColor;
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/util/alias.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>formatToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/fast-color/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/fast-color/es/FastColor.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/themes/seed.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/getAlphaColor.js [client] (ecmascript)");
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
function formatToken(derivativeToken) {
    const { override } = derivativeToken, restToken = __rest(derivativeToken, [
        "override"
    ]);
    const overrideTokens = Object.assign({}, override);
    Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]).forEach((token)=>{
        delete overrideTokens[token];
    });
    const mergedToken = Object.assign(Object.assign({}, restToken), overrideTokens);
    const screenXS = 480;
    const screenSM = 576;
    const screenMD = 768;
    const screenLG = 992;
    const screenXL = 1200;
    const screenXXL = 1600;
    // Motion
    if (mergedToken.motion === false) {
        const fastDuration = '0s';
        mergedToken.motionDurationFast = fastDuration;
        mergedToken.motionDurationMid = fastDuration;
        mergedToken.motionDurationSlow = fastDuration;
    }
    // Generate alias token
    const aliasToken = Object.assign(Object.assign(Object.assign({}, mergedToken), {
        // ============== Background ============== //
        colorFillContent: mergedToken.colorFillSecondary,
        colorFillContentHover: mergedToken.colorFill,
        colorFillAlter: mergedToken.colorFillQuaternary,
        colorBgContainerDisabled: mergedToken.colorFillTertiary,
        // ============== Split ============== //
        colorBorderBg: mergedToken.colorBgContainer,
        colorSplit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
        // ============== Text ============== //
        colorTextPlaceholder: mergedToken.colorTextQuaternary,
        colorTextDisabled: mergedToken.colorTextQuaternary,
        colorTextHeading: mergedToken.colorText,
        colorTextLabel: mergedToken.colorTextSecondary,
        colorTextDescription: mergedToken.colorTextTertiary,
        colorTextLightSolid: mergedToken.colorWhite,
        colorHighlight: mergedToken.colorError,
        colorBgTextHover: mergedToken.colorFillSecondary,
        colorBgTextActive: mergedToken.colorFill,
        colorIcon: mergedToken.colorTextTertiary,
        colorIconHover: mergedToken.colorText,
        colorErrorOutline: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
        colorWarningOutline: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
        // Font
        fontSizeIcon: mergedToken.fontSizeSM,
        // Line
        lineWidthFocus: mergedToken.lineWidth * 3,
        // Control
        lineWidth: mergedToken.lineWidth,
        controlOutlineWidth: mergedToken.lineWidth * 2,
        // Checkbox size and expand icon size
        controlInteractiveSize: mergedToken.controlHeight / 2,
        controlItemBgHover: mergedToken.colorFillTertiary,
        controlItemBgActive: mergedToken.colorPrimaryBg,
        controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
        controlItemBgActiveDisabled: mergedToken.colorFill,
        controlTmpOutline: mergedToken.colorFillQuaternary,
        controlOutline: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
        lineType: mergedToken.lineType,
        borderRadius: mergedToken.borderRadius,
        borderRadiusXS: mergedToken.borderRadiusXS,
        borderRadiusSM: mergedToken.borderRadiusSM,
        borderRadiusLG: mergedToken.borderRadiusLG,
        fontWeightStrong: 600,
        opacityLoading: 0.65,
        linkDecoration: 'none',
        linkHoverDecoration: 'none',
        linkFocusDecoration: 'none',
        controlPaddingHorizontal: 12,
        controlPaddingHorizontalSM: 8,
        paddingXXS: mergedToken.sizeXXS,
        paddingXS: mergedToken.sizeXS,
        paddingSM: mergedToken.sizeSM,
        padding: mergedToken.size,
        paddingMD: mergedToken.sizeMD,
        paddingLG: mergedToken.sizeLG,
        paddingXL: mergedToken.sizeXL,
        paddingContentHorizontalLG: mergedToken.sizeLG,
        paddingContentVerticalLG: mergedToken.sizeMS,
        paddingContentHorizontal: mergedToken.sizeMS,
        paddingContentVertical: mergedToken.sizeSM,
        paddingContentHorizontalSM: mergedToken.size,
        paddingContentVerticalSM: mergedToken.sizeXS,
        marginXXS: mergedToken.sizeXXS,
        marginXS: mergedToken.sizeXS,
        marginSM: mergedToken.sizeSM,
        margin: mergedToken.size,
        marginMD: mergedToken.sizeMD,
        marginLG: mergedToken.sizeLG,
        marginXL: mergedToken.sizeXL,
        marginXXL: mergedToken.sizeXXL,
        boxShadow: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
        boxShadowSecondary: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
        boxShadowTertiary: "\n      0 1px 2px 0 rgba(0, 0, 0, 0.03),\n      0 1px 6px -1px rgba(0, 0, 0, 0.02),\n      0 2px 4px 0 rgba(0, 0, 0, 0.02)\n    ",
        screenXS,
        screenXSMin: screenXS,
        screenXSMax: screenSM - 1,
        screenSM,
        screenSMMin: screenSM,
        screenSMMax: screenMD - 1,
        screenMD,
        screenMDMin: screenMD,
        screenMDMax: screenLG - 1,
        screenLG,
        screenLGMin: screenLG,
        screenLGMax: screenXL - 1,
        screenXL,
        screenXLMin: screenXL,
        screenXLMax: screenXXL - 1,
        screenXXL,
        screenXXLMin: screenXXL,
        boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
        boxShadowCard: "\n      0 1px 2px -2px ".concat(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FastColor"]('rgba(0, 0, 0, 0.16)').toRgbString(), ",\n      0 3px 6px 0 ").concat(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FastColor"]('rgba(0, 0, 0, 0.12)').toRgbString(), ",\n      0 5px 12px 4px ").concat(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FastColor"]('rgba(0, 0, 0, 0.09)').toRgbString(), "\n    "),
        boxShadowDrawerRight: "\n      -6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      -3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      -9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",
        boxShadowDrawerLeft: "\n      6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",
        boxShadowDrawerUp: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
        boxShadowDrawerDown: "\n      0 -6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 -3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 -9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
        boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
        boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
        boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
        boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)'
    }), overrideTokens);
    return aliasToken;
}
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/useToken.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useToken,
    "getComputedToken",
    ()=>getComputedToken,
    "ignore",
    ()=>ignore,
    "unitless",
    ()=>unitless
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$hooks$2f$useCacheToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useCacheToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/hooks/useCacheToken.js [client] (ecmascript) <export default as useCacheToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$version$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/version/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$theme$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defaultTheme$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/themes/default/theme.js [client] (ecmascript) <export default as defaultTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/context.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/themes/seed.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$alias$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/alias.js [client] (ecmascript)");
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
const unitless = {
    lineHeight: true,
    lineHeightSM: true,
    lineHeightLG: true,
    lineHeightHeading1: true,
    lineHeightHeading2: true,
    lineHeightHeading3: true,
    lineHeightHeading4: true,
    lineHeightHeading5: true,
    opacityLoading: true,
    fontWeightStrong: true,
    zIndexPopupBase: true,
    zIndexBase: true,
    opacityImage: true
};
const ignore = {
    motionBase: true,
    motionUnit: true
};
const preserve = {
    screenXS: true,
    screenXSMin: true,
    screenXSMax: true,
    screenSM: true,
    screenSMMin: true,
    screenSMMax: true,
    screenMD: true,
    screenMDMin: true,
    screenMDMax: true,
    screenLG: true,
    screenLGMin: true,
    screenLGMax: true,
    screenXL: true,
    screenXLMin: true,
    screenXLMax: true,
    screenXXL: true,
    screenXXLMin: true
};
const getComputedToken = (originToken, overrideToken, theme)=>{
    const derivativeToken = theme.getDerivativeToken(originToken);
    const { override } = overrideToken, components = __rest(overrideToken, [
        "override"
    ]);
    // Merge with override
    let mergedDerivativeToken = Object.assign(Object.assign({}, derivativeToken), {
        override
    });
    // Format if needed
    mergedDerivativeToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$alias$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(mergedDerivativeToken);
    if (components) {
        Object.entries(components).forEach((param)=>{
            let [key, value] = param;
            const { theme: componentTheme } = value, componentTokens = __rest(value, [
                "theme"
            ]);
            let mergedComponentToken = componentTokens;
            if (componentTheme) {
                mergedComponentToken = getComputedToken(Object.assign(Object.assign({}, mergedDerivativeToken), componentTokens), {
                    override: componentTokens
                }, componentTheme);
            }
            mergedDerivativeToken[key] = mergedComponentToken;
        });
    }
    return mergedDerivativeToken;
};
function useToken() {
    const { token: rootDesignToken, hashed, theme, override, cssVar } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DesignTokenContext"]);
    const salt = "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$version$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], "-").concat(hashed || '');
    const mergedTheme = theme || __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$theme$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defaultTheme$3e$__["defaultTheme"];
    const [token, hashId, realToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$hooks$2f$useCacheToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useCacheToken$3e$__["useCacheToken"])(mergedTheme, [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
        rootDesignToken
    ], {
        salt,
        override,
        getComputedToken,
        // formatToken will not be consumed after 1.15.0 with getComputedToken.
        // But token will break if @ant-design/cssinjs is under 1.15.0 without it
        formatToken: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$alias$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
        cssVar: cssVar && {
            prefix: cssVar.prefix,
            key: cssVar.key,
            unitless,
            ignore,
            preserve
        }
    });
    return [
        mergedTheme,
        realToken,
        hashed ? hashId : '',
        token,
        cssVar
    ];
}
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genComponentStyleHook",
    ()=>genComponentStyleHook,
    "genStyleHooks",
    ()=>genStyleHooks,
    "genSubStyleComponent",
    ()=>genSubStyleComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genStyleUtils$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/genStyleUtils.js [client] (ecmascript) <export default as genStyleUtils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/useToken.js [client] (ecmascript)");
;
;
;
;
;
const { genStyleHooks, genComponentStyleHook, genSubStyleComponent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genStyleUtils$3e$__["genStyleUtils"])({
    usePrefix: ()=>{
        const { getPrefixCls, iconPrefixCls } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
        const rootPrefixCls = getPrefixCls();
        return {
            rootPrefixCls,
            iconPrefixCls
        };
    },
    useToken: ()=>{
        const [theme, realToken, hashId, token, cssVar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])();
        return {
            theme,
            realToken,
            hashId,
            token,
            cssVar
        };
    },
    useCSP: ()=>{
        const { csp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
        return csp !== null && csp !== void 0 ? csp : {};
    },
    getResetStyles: (token, config)=>{
        var _a;
        const linkStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genLinkStyle"])(token);
        return [
            linkStyle,
            {
                '&': linkStyle
            },
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genIconStyle"])((_a = config === null || config === void 0 ? void 0 : config.prefix.iconPrefixCls) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["defaultIconPrefixCls"])
        ];
    },
    getCommonStyle: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genCommonStyle"],
    getCompUnitless: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unitless"]
});
}),
"[project]/Downloads/One click/node_modules/antd/es/space/style/compact.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [client] (ecmascript)");
;
const genSpaceCompactStyle = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: {
            display: 'inline-flex',
            '&-block': {
                display: 'flex',
                width: '100%'
            },
            '&-vertical': {
                flexDirection: 'column'
            },
            '&-rtl': {
                direction: 'rtl'
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genStyleHooks"])([
    'Space',
    'Compact'
], (token)=>[
        genSpaceCompactStyle(token)
    ], ()=>({}), {
    // Space component don't apply extra font style
    // https://github.com/ant-design/ant-design/issues/40315
    resetStyle: false
});
}),
"[project]/Downloads/One click/node_modules/antd/es/space/Compact.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoCompactStyle",
    ()=>NoCompactStyle,
    "SpaceCompactItemContext",
    ()=>SpaceCompactItemContext,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useCompactItemContext",
    ()=>useCompactItemContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Children/toArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useSize.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$style$2f$compact$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/space/style/compact.js [client] (ecmascript)");
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
const SpaceCompactItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"](null);
const useCompactItemContext = (prefixCls, direction)=>{
    const compactItemContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](SpaceCompactItemContext);
    const compactItemClassnames = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useCompactItemContext.useMemo[compactItemClassnames]": ()=>{
            if (!compactItemContext) {
                return '';
            }
            const { compactDirection, isFirstItem, isLastItem } = compactItemContext;
            const separator = compactDirection === 'vertical' ? '-vertical-' : '-';
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-compact").concat(separator, "item"), {
                ["".concat(prefixCls, "-compact").concat(separator, "first-item")]: isFirstItem,
                ["".concat(prefixCls, "-compact").concat(separator, "last-item")]: isLastItem,
                ["".concat(prefixCls, "-compact").concat(separator, "item-rtl")]: direction === 'rtl'
            });
        }
    }["useCompactItemContext.useMemo[compactItemClassnames]"], [
        prefixCls,
        direction,
        compactItemContext
    ]);
    return {
        compactSize: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize,
        compactDirection: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection,
        compactItemClassnames
    };
};
const NoCompactStyle = (props)=>{
    const { children } = props;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](SpaceCompactItemContext.Provider, {
        value: null
    }, children);
};
const CompactItem = (props)=>{
    const { children } = props, others = __rest(props, [
        "children"
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](SpaceCompactItemContext.Provider, {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
            "CompactItem.useMemo": ()=>others
        }["CompactItem.useMemo"], [
            others
        ])
    }, children);
};
const Compact = (props)=>{
    const { getPrefixCls, direction: directionConfig } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { size, direction, block, prefixCls: customizePrefixCls, className, rootClassName, children } = props, restProps = __rest(props, [
        "size",
        "direction",
        "block",
        "prefixCls",
        "className",
        "rootClassName",
        "children"
    ]);
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "Compact.useSize[mergedSize]": (ctx)=>size !== null && size !== void 0 ? size : ctx
    }["Compact.useSize[mergedSize]"]);
    const prefixCls = getPrefixCls('space-compact', customizePrefixCls);
    const [wrapCSSVar, hashId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$style$2f$compact$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const clx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, hashId, {
        ["".concat(prefixCls, "-rtl")]: directionConfig === 'rtl',
        ["".concat(prefixCls, "-block")]: block,
        ["".concat(prefixCls, "-vertical")]: direction === 'vertical'
    }, className, rootClassName);
    const compactItemContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](SpaceCompactItemContext);
    const childNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(children);
    const nodes = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Compact.useMemo[nodes]": ()=>childNodes.map({
                "Compact.useMemo[nodes]": (child, i)=>{
                    const key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(prefixCls, "-item-").concat(i);
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](CompactItem, {
                        key: key,
                        compactSize: mergedSize,
                        compactDirection: direction,
                        isFirstItem: i === 0 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isFirstItem)),
                        isLastItem: i === childNodes.length - 1 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isLastItem))
                    }, child);
                }
            }["Compact.useMemo[nodes]"])
    }["Compact.useMemo[nodes]"], [
        childNodes,
        compactItemContext,
        direction,
        mergedSize,
        prefixCls
    ]);
    // =========================== Render ===========================
    if (childNodes.length === 0) {
        return null;
    }
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", Object.assign({
        className: clx
    }, restProps), nodes));
};
const __TURBOPACK__default__export__ = Compact;
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/ContextIsolator.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/form/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/space/Compact.js [client] (ecmascript)");
"use client";
;
;
;
const ContextIsolator = (props)=>{
    const { space, form, children } = props;
    if (children === undefined || children === null) {
        return null;
    }
    let result = children;
    if (form) {
        result = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["NoFormStyle"], {
            override: true,
            status: true
        }, result);
    }
    if (space) {
        result = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$client$5d$__$28$ecmascript$29$__["NoCompactStyle"], null, result);
    }
    return result;
};
const __TURBOPACK__default__export__ = ContextIsolator;
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WarningContext",
    ()=>WarningContext,
    "default",
    ()=>__TURBOPACK__default__export__,
    "devUseWarning",
    ()=>devUseWarning,
    "noop",
    ()=>noop,
    "resetWarned",
    ()=>resetWarned
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/warning.js [client] (ecmascript)");
;
;
function noop() {}
let deprecatedWarnList = null;
function resetWarned() {
    deprecatedWarnList = null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["resetWarned"])();
}
let _warning = noop;
if ("TURBOPACK compile-time truthy", 1) {
    _warning = (valid, component, message)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(valid, "[antd: ".concat(component, "] ").concat(message));
        // StrictMode will inject console which will not throw warning in React 17.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
}
const warning = _warning;
const WarningContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"]({});
const devUseWarning = ("TURBOPACK compile-time truthy", 1) ? (component)=>{
    const { strict } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](WarningContext);
    const typeWarning = (valid, type, message)=>{
        if (!valid) {
            if (strict === false && type === 'deprecated') {
                const existWarning = deprecatedWarnList;
                if (!deprecatedWarnList) {
                    deprecatedWarnList = {};
                }
                deprecatedWarnList[component] = deprecatedWarnList[component] || [];
                if (!deprecatedWarnList[component].includes(message || '')) {
                    deprecatedWarnList[component].push(message || '');
                }
                // Warning for the first time
                if (!existWarning) {
                    console.warn('[antd] There exists deprecated usage in your code:', deprecatedWarnList);
                }
            } else {
                ("TURBOPACK compile-time truthy", 1) ? warning(valid, component, message) : "TURBOPACK unreachable";
            }
        }
    };
    typeWarning.deprecated = (valid, oldProp, newProp, message)=>{
        typeWarning(valid, 'deprecated', "`".concat(oldProp, "` is deprecated. Please use `").concat(newProp, "` instead.").concat(message ? " ".concat(message) : ''));
    };
    return typeWarning;
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = warning;
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/zindexContext.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
const zIndexContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createContext(undefined);
if ("TURBOPACK compile-time truthy", 1) {
    zIndexContext.displayName = 'zIndexContext';
}
const __TURBOPACK__default__export__ = zIndexContext;
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/hooks/useZIndex.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTAINER_MAX_OFFSET",
    ()=>CONTAINER_MAX_OFFSET,
    "consumerBaseZIndexOffset",
    ()=>consumerBaseZIndexOffset,
    "containerBaseZIndexOffset",
    ()=>containerBaseZIndexOffset,
    "useZIndex",
    ()=>useZIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/useToken.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/zindexContext.js [client] (ecmascript)");
;
;
;
;
// Z-Index control range
// Container: 1000 + offset 100 (max base + 10 * offset = 2000)
// Popover: offset 50
// Notification: Container Max zIndex + componentOffset
const CONTAINER_OFFSET = 100;
const CONTAINER_OFFSET_MAX_COUNT = 10;
const CONTAINER_MAX_OFFSET = CONTAINER_OFFSET * CONTAINER_OFFSET_MAX_COUNT;
/**
 * Static function will default be the `CONTAINER_MAX_OFFSET`.
 * But it still may have children component like Select, Dropdown.
 * So the warning zIndex should exceed the `CONTAINER_MAX_OFFSET`.
 */ const CONTAINER_MAX_OFFSET_WITH_CHILDREN = CONTAINER_MAX_OFFSET + CONTAINER_OFFSET;
const containerBaseZIndexOffset = {
    Modal: CONTAINER_OFFSET,
    Drawer: CONTAINER_OFFSET,
    Popover: CONTAINER_OFFSET,
    Popconfirm: CONTAINER_OFFSET,
    Tooltip: CONTAINER_OFFSET,
    Tour: CONTAINER_OFFSET,
    FloatButton: CONTAINER_OFFSET
};
const consumerBaseZIndexOffset = {
    SelectLike: 50,
    Dropdown: 50,
    DatePicker: 50,
    Menu: 50,
    ImagePreview: 1
};
function isContainerType(type) {
    return type in containerBaseZIndexOffset;
}
const useZIndex = (componentType, customZIndex)=>{
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])();
    const parentZIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
    const isContainer = isContainerType(componentType);
    let result;
    if (customZIndex !== undefined) {
        result = [
            customZIndex,
            customZIndex
        ];
    } else {
        let zIndex = parentZIndex !== null && parentZIndex !== void 0 ? parentZIndex : 0;
        if (isContainer) {
            zIndex += // Use preset token zIndex by default but not stack when has parent container
            (parentZIndex ? 0 : token.zIndexPopupBase) + // Container offset
            containerBaseZIndexOffset[componentType];
        } else {
            zIndex += consumerBaseZIndexOffset[componentType];
        }
        result = [
            parentZIndex === undefined ? customZIndex : zIndex,
            zIndex
        ];
    }
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["devUseWarning"])(componentType);
        const maxZIndex = token.zIndexPopupBase + CONTAINER_MAX_OFFSET_WITH_CHILDREN;
        const currentZIndex = result[0] || 0;
        ("TURBOPACK compile-time truthy", 1) ? warning(customZIndex !== undefined || currentZIndex <= maxZIndex, 'usage', '`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.') : "TURBOPACK unreachable";
    }
    return result;
};
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/motion.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getTransitionName",
    ()=>getTransitionName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
;
// ================== Collapse Motion ==================
const getCollapsedHeight = ()=>({
        height: 0,
        opacity: 0
    });
const getRealHeight = (node)=>{
    const { scrollHeight } = node;
    return {
        height: scrollHeight,
        opacity: 1
    };
};
const getCurrentHeight = (node)=>({
        height: node ? node.offsetHeight : 0
    });
const skipOpacityTransition = (_, event)=>(event === null || event === void 0 ? void 0 : event.deadline) === true || event.propertyName === 'height';
const initCollapseMotion = function() {
    let rootCls = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["defaultPrefixCls"];
    return {
        motionName: "".concat(rootCls, "-motion-collapse"),
        onAppearStart: getCollapsedHeight,
        onEnterStart: getCollapsedHeight,
        onAppearActive: getRealHeight,
        onEnterActive: getRealHeight,
        onLeaveStart: getCurrentHeight,
        onLeaveActive: getCollapsedHeight,
        onAppearEnd: skipOpacityTransition,
        onEnterEnd: skipOpacityTransition,
        onLeaveEnd: skipOpacityTransition,
        motionDeadline: 500
    };
};
const _SelectPlacements = [
    'bottomLeft',
    'bottomRight',
    'topLeft',
    'topRight'
];
const getTransitionName = (rootPrefixCls, motion, transitionName)=>{
    if (transitionName !== undefined) {
        return transitionName;
    }
    return "".concat(rootPrefixCls, "-").concat(motion);
};
;
const __TURBOPACK__default__export__ = initCollapseMotion;
}),
"[project]/Downloads/One click/node_modules/antd/es/watermark/context.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "usePanelRef",
    ()=>usePanelRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useEvent.js [client] (ecmascript)");
;
;
function voidFunc() {}
const WatermarkContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"]({
    add: voidFunc,
    remove: voidFunc
});
function usePanelRef(panelSelector) {
    const watermark = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](WatermarkContext);
    const panelEleRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "usePanelRef.useEvent[panelRef]": (ele)=>{
            if (ele) {
                const innerContentEle = panelSelector ? ele.querySelector(panelSelector) : ele;
                if (innerContentEle) {
                    watermark.add(innerContentEle);
                    panelEleRef.current = innerContentEle;
                }
            } else {
                watermark.remove(panelEleRef.current);
            }
        }
    }["usePanelRef.useEvent[panelRef]"]);
    return panelRef;
}
const __TURBOPACK__default__export__ = WatermarkContext;
}),
"[project]/Downloads/One click/node_modules/antd/es/locale/context.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
const LocaleContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const __TURBOPACK__default__export__ = LocaleContext;
}),
"[project]/Downloads/One click/node_modules/antd/es/time-picker/locale/en_US.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const locale = {
    placeholder: 'Select time',
    rangePlaceholder: [
        'Start time',
        'End time'
    ]
};
const __TURBOPACK__default__export__ = locale;
}),
"[project]/Downloads/One click/node_modules/antd/es/date-picker/locale/en_US.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$picker$2f$es$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-picker/es/locale/en_US.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$time$2d$picker$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/time-picker/locale/en_US.js [client] (ecmascript)");
;
;
// Merge into a locale object
const locale = {
    lang: Object.assign({
        placeholder: 'Select date',
        yearPlaceholder: 'Select year',
        quarterPlaceholder: 'Select quarter',
        monthPlaceholder: 'Select month',
        weekPlaceholder: 'Select week',
        rangePlaceholder: [
            'Start date',
            'End date'
        ],
        rangeYearPlaceholder: [
            'Start year',
            'End year'
        ],
        rangeQuarterPlaceholder: [
            'Start quarter',
            'End quarter'
        ],
        rangeMonthPlaceholder: [
            'Start month',
            'End month'
        ],
        rangeWeekPlaceholder: [
            'Start week',
            'End week'
        ]
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$picker$2f$es$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]),
    timePickerLocale: Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$time$2d$picker$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])
};
const __TURBOPACK__default__export__ = locale;
}),
"[project]/Downloads/One click/node_modules/antd/es/calendar/locale/en_US.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/date-picker/locale/en_US.js [client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Downloads/One click/node_modules/antd/es/locale/en_US.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$pagination$2f$es$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-pagination/es/locale/en_US.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$calendar$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/calendar/locale/en_US.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/date-picker/locale/en_US.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$time$2d$picker$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/time-picker/locale/en_US.js [client] (ecmascript)");
;
;
;
;
const typeTemplate = '${label} is not a valid ${type}';
const localeValues = {
    locale: 'en',
    Pagination: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$pagination$2f$es$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    DatePicker: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    TimePicker: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$time$2d$picker$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    Calendar: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$calendar$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    global: {
        placeholder: 'Please select',
        close: 'Close'
    },
    Table: {
        filterTitle: 'Filter menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        filterEmptyText: 'No filters',
        filterCheckAll: 'Select all items',
        filterSearchPlaceholder: 'Search in filters',
        emptyText: 'No data',
        selectAll: 'Select current page',
        selectInvert: 'Invert current page',
        selectNone: 'Clear all data',
        selectionAll: 'Select all data',
        sortTitle: 'Sort',
        expand: 'Expand row',
        collapse: 'Collapse row',
        triggerDesc: 'Click to sort descending',
        triggerAsc: 'Click to sort ascending',
        cancelSort: 'Click to cancel sorting'
    },
    Tour: {
        Next: 'Next',
        Previous: 'Previous',
        Finish: 'Finish'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancel',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancel'
    },
    Transfer: {
        titles: [
            '',
            ''
        ],
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items',
        remove: 'Remove',
        selectCurrent: 'Select current page',
        removeCurrent: 'Remove current page',
        selectAll: 'Select all data',
        deselectAll: 'Deselect all data',
        removeAll: 'Remove all data',
        selectInvert: 'Invert current page'
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file',
        downloadFile: 'Download file'
    },
    Empty: {
        description: 'No data'
    },
    Icon: {
        icon: 'icon'
    },
    Text: {
        edit: 'Edit',
        copy: 'Copy',
        copied: 'Copied',
        expand: 'Expand',
        collapse: 'Collapse'
    },
    Form: {
        optional: '(optional)',
        defaultValidateMessages: {
            default: 'Field validation error for ${label}',
            required: 'Please enter ${label}',
            enum: '${label} must be one of [${enum}]',
            whitespace: '${label} cannot be a blank character',
            date: {
                format: '${label} date format is invalid',
                parse: '${label} cannot be converted to a date',
                invalid: '${label} is an invalid date'
            },
            types: {
                string: typeTemplate,
                method: typeTemplate,
                array: typeTemplate,
                object: typeTemplate,
                number: typeTemplate,
                date: typeTemplate,
                boolean: typeTemplate,
                integer: typeTemplate,
                float: typeTemplate,
                regexp: typeTemplate,
                email: typeTemplate,
                url: typeTemplate,
                hex: typeTemplate
            },
            string: {
                len: '${label} must be ${len} characters',
                min: '${label} must be at least ${min} characters',
                max: '${label} must be up to ${max} characters',
                range: '${label} must be between ${min}-${max} characters'
            },
            number: {
                len: '${label} must be equal to ${len}',
                min: '${label} must be minimum ${min}',
                max: '${label} must be maximum ${max}',
                range: '${label} must be between ${min}-${max}'
            },
            array: {
                len: 'Must be ${len} ${label}',
                min: 'At least ${min} ${label}',
                max: 'At most ${max} ${label}',
                range: 'The amount of ${label} must be between ${min}-${max}'
            },
            pattern: {
                mismatch: '${label} does not match the pattern ${pattern}'
            }
        }
    },
    Image: {
        preview: 'Preview'
    },
    QRCode: {
        expired: 'QR code expired',
        refresh: 'Refresh',
        scanned: 'Scanned'
    },
    ColorPicker: {
        presetEmpty: 'Empty',
        transparent: 'Transparent',
        singleColor: 'Single',
        gradientColor: 'Gradient'
    }
};
const __TURBOPACK__default__export__ = localeValues;
}),
"[project]/Downloads/One click/node_modules/antd/es/locale/useLocale.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/locale/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/locale/en_US.js [client] (ecmascript)");
;
;
;
const useLocale = (componentName, defaultLocale)=>{
    const fullLocale = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
    const getLocale = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useLocale.useMemo[getLocale]": ()=>{
            var _a;
            const locale = defaultLocale || __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"][componentName];
            const localeFromContext = (_a = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale[componentName]) !== null && _a !== void 0 ? _a : {};
            return Object.assign(Object.assign({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
        }
    }["useLocale.useMemo[getLocale]"], [
        componentName,
        defaultLocale,
        fullLocale
    ]);
    const getLocaleCode = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useLocale.useMemo[getLocaleCode]": ()=>{
            const localeCode = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.locale;
            // Had use LocaleProvide but didn't set locale
            if ((fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.exist) && !localeCode) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].locale;
            }
            return localeCode;
        }
    }["useLocale.useMemo[getLocaleCode]"], [
        fullLocale
    ]);
    return [
        getLocale,
        getLocaleCode
    ];
};
const __TURBOPACK__default__export__ = useLocale;
}),
"[project]/Downloads/One click/node_modules/antd/es/locale/useLocale.js [client] (ecmascript) <export default as useLocale>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLocale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/locale/useLocale.js [client] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/extendsObject.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function mergeProps() {
    for(var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++){
        items[_key] = arguments[_key];
    }
    const ret = {};
    items.forEach((item)=>{
        if (item) {
            Object.keys(item).forEach((key)=>{
                if (item[key] !== undefined) {
                    ret[key] = item[key];
                }
            });
        }
    });
    return ret;
}
const __TURBOPACK__default__export__ = mergeProps;
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/hooks/useClosable.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pickClosable",
    ()=>pickClosable,
    "useClosable",
    ()=>useClosable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/pickAttrs.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/locale/useLocale.js [client] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/locale/en_US.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$extendsObject$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/extendsObject.js [client] (ecmascript)");
"use client";
;
;
;
;
;
;
function pickClosable(context) {
    if (!context) {
        return undefined;
    }
    const { closable, closeIcon } = context;
    return {
        closable,
        closeIcon
    };
}
/** Convert `closable` and `closeIcon` to config object */ function useClosableConfig(closableCollection) {
    const { closable, closeIcon } = closableCollection || {};
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useClosableConfig.useMemo": ()=>{
            if (// If `closable`, whatever rest be should be true
            !closable && (closable === false || closeIcon === false || closeIcon === null)) {
                return false;
            }
            if (closable === undefined && closeIcon === undefined) {
                return null;
            }
            let closableConfig = {
                closeIcon: typeof closeIcon !== 'boolean' && closeIcon !== null ? closeIcon : undefined
            };
            if (closable && typeof closable === 'object') {
                closableConfig = Object.assign(Object.assign({}, closableConfig), closable);
            }
            return closableConfig;
        }
    }["useClosableConfig.useMemo"], [
        closable,
        closeIcon
    ]);
}
/** Use same object to support `useMemo` optimization */ const EmptyFallbackCloseCollection = {};
const useClosable = function(propCloseCollection, contextCloseCollection) {
    let fallbackCloseCollection = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : EmptyFallbackCloseCollection;
    // Align the `props`, `context` `fallback` to config object first
    const propCloseConfig = useClosableConfig(propCloseCollection);
    const contextCloseConfig = useClosableConfig(contextCloseCollection);
    const [contextLocale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('global', __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].global);
    const closeBtnIsDisabled = typeof propCloseConfig !== 'boolean' ? !!(propCloseConfig === null || propCloseConfig === void 0 ? void 0 : propCloseConfig.disabled) : false;
    const mergedFallbackCloseCollection = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useClosable.useMemo[mergedFallbackCloseCollection]": ()=>Object.assign({
                closeIcon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], null)
            }, fallbackCloseCollection)
    }["useClosable.useMemo[mergedFallbackCloseCollection]"], [
        fallbackCloseCollection
    ]);
    // Use fallback logic to fill the config
    const mergedClosableConfig = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useClosable.useMemo[mergedClosableConfig]": ()=>{
            // ================ Props First ================
            // Skip if prop is disabled
            if (propCloseConfig === false) {
                return false;
            }
            if (propCloseConfig) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$extendsObject$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(mergedFallbackCloseCollection, contextCloseConfig, propCloseConfig);
            }
            // =============== Context Second ==============
            // Skip if context is disabled
            if (contextCloseConfig === false) {
                return false;
            }
            if (contextCloseConfig) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$extendsObject$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(mergedFallbackCloseCollection, contextCloseConfig);
            }
            // ============= Fallback Default ==============
            return !mergedFallbackCloseCollection.closable ? false : mergedFallbackCloseCollection;
        }
    }["useClosable.useMemo[mergedClosableConfig]"], [
        propCloseConfig,
        contextCloseConfig,
        mergedFallbackCloseCollection
    ]);
    // Calculate the final closeIcon
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useClosable.useMemo": ()=>{
            var _a, _b;
            if (mergedClosableConfig === false) {
                return [
                    false,
                    null,
                    closeBtnIsDisabled,
                    {}
                ];
            }
            const { closeIconRender } = mergedFallbackCloseCollection;
            const { closeIcon } = mergedClosableConfig;
            let mergedCloseIcon = closeIcon;
            // Wrap the closeIcon with aria props
            const ariaOrDataProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(mergedClosableConfig, true);
            if (mergedCloseIcon !== null && mergedCloseIcon !== undefined) {
                // Wrap the closeIcon if needed
                if (closeIconRender) {
                    mergedCloseIcon = closeIconRender(closeIcon);
                }
                mergedCloseIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].isValidElement(mergedCloseIcon) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].cloneElement(mergedCloseIcon, Object.assign(Object.assign(Object.assign({}, mergedCloseIcon.props), {
                    'aria-label': (_b = (_a = mergedCloseIcon.props) === null || _a === void 0 ? void 0 : _a['aria-label']) !== null && _b !== void 0 ? _b : contextLocale.close
                }), ariaOrDataProps)) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("span", Object.assign({
                    "aria-label": contextLocale.close
                }, ariaOrDataProps), mergedCloseIcon);
            }
            return [
                true,
                mergedCloseIcon,
                closeBtnIsDisabled,
                ariaOrDataProps
            ];
        }
    }["useClosable.useMemo"], [
        closeBtnIsDisabled,
        contextLocale.close,
        mergedClosableConfig,
        mergedFallbackCloseCollection
    ]);
};
}),
"[project]/Downloads/One click/node_modules/antd/es/skeleton/Element.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
"use client";
;
;
const Element = (props)=>{
    const { prefixCls, className, style, size, shape } = props;
    const sizeCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        ["".concat(prefixCls, "-lg")]: size === 'large',
        ["".concat(prefixCls, "-sm")]: size === 'small'
    });
    const shapeCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        ["".concat(prefixCls, "-circle")]: shape === 'circle',
        ["".concat(prefixCls, "-square")]: shape === 'square',
        ["".concat(prefixCls, "-round")]: shape === 'round'
    });
    const sizeStyle = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Element.useMemo[sizeStyle]": ()=>typeof size === 'number' ? {
                width: size,
                height: size,
                lineHeight: "".concat(size, "px")
            } : {}
    }["Element.useMemo[sizeStyle]"], [
        size
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, sizeCls, shapeCls, className),
        style: Object.assign(Object.assign({}, sizeStyle), style)
    });
};
const __TURBOPACK__default__export__ = Element;
}),
"[project]/Downloads/One click/node_modules/antd/es/skeleton/style/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/Keyframes.js [client] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [client] (ecmascript) <export merge as mergeToken>");
;
;
const skeletonClsLoading = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]("ant-skeleton-loading", {
    '0%': {
        backgroundPosition: '100% 50%'
    },
    '100%': {
        backgroundPosition: '0 50%'
    }
});
const genSkeletonElementCommonSize = (size)=>({
        height: size,
        lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(size)
    });
const genSkeletonElementAvatarSize = (size)=>Object.assign({
        width: size
    }, genSkeletonElementCommonSize(size));
const genSkeletonColor = (token)=>({
        background: token.skeletonLoadingBackground,
        backgroundSize: '400% 100%',
        animationName: skeletonClsLoading,
        animationDuration: token.skeletonLoadingMotionDuration,
        animationTimingFunction: 'ease',
        animationIterationCount: 'infinite'
    });
const genSkeletonElementInputSize = (size, calc)=>Object.assign({
        width: calc(size).mul(5).equal(),
        minWidth: calc(size).mul(5).equal()
    }, genSkeletonElementCommonSize(size));
const genSkeletonElementAvatar = (token)=>{
    const { skeletonAvatarCls, gradientFromColor, controlHeight, controlHeightLG, controlHeightSM } = token;
    return {
        [skeletonAvatarCls]: Object.assign({
            display: 'inline-block',
            verticalAlign: 'top',
            background: gradientFromColor
        }, genSkeletonElementAvatarSize(controlHeight)),
        ["".concat(skeletonAvatarCls).concat(skeletonAvatarCls, "-circle")]: {
            borderRadius: '50%'
        },
        ["".concat(skeletonAvatarCls).concat(skeletonAvatarCls, "-lg")]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightLG)),
        ["".concat(skeletonAvatarCls).concat(skeletonAvatarCls, "-sm")]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightSM))
    };
};
const genSkeletonElementInput = (token)=>{
    const { controlHeight, borderRadiusSM, skeletonInputCls, controlHeightLG, controlHeightSM, gradientFromColor, calc } = token;
    return {
        [skeletonInputCls]: Object.assign({
            display: 'inline-block',
            verticalAlign: 'top',
            background: gradientFromColor,
            borderRadius: borderRadiusSM
        }, genSkeletonElementInputSize(controlHeight, calc)),
        ["".concat(skeletonInputCls, "-lg")]: Object.assign({}, genSkeletonElementInputSize(controlHeightLG, calc)),
        ["".concat(skeletonInputCls, "-sm")]: Object.assign({}, genSkeletonElementInputSize(controlHeightSM, calc))
    };
};
const genSkeletonElementImageSize = (size)=>Object.assign({
        width: size
    }, genSkeletonElementCommonSize(size));
const genSkeletonElementImage = (token)=>{
    const { skeletonImageCls, imageSizeBase, gradientFromColor, borderRadiusSM, calc } = token;
    return {
        [skeletonImageCls]: Object.assign(Object.assign({
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            verticalAlign: 'middle',
            background: gradientFromColor,
            borderRadius: borderRadiusSM
        }, genSkeletonElementImageSize(calc(imageSizeBase).mul(2).equal())), {
            ["".concat(skeletonImageCls, "-path")]: {
                fill: '#bfbfbf'
            },
            ["".concat(skeletonImageCls, "-svg")]: Object.assign(Object.assign({}, genSkeletonElementImageSize(imageSizeBase)), {
                maxWidth: calc(imageSizeBase).mul(4).equal(),
                maxHeight: calc(imageSizeBase).mul(4).equal()
            }),
            ["".concat(skeletonImageCls, "-svg").concat(skeletonImageCls, "-svg-circle")]: {
                borderRadius: '50%'
            }
        }),
        ["".concat(skeletonImageCls).concat(skeletonImageCls, "-circle")]: {
            borderRadius: '50%'
        }
    };
};
const genSkeletonElementButtonShape = (token, size, buttonCls)=>{
    const { skeletonButtonCls } = token;
    return {
        ["".concat(buttonCls).concat(skeletonButtonCls, "-circle")]: {
            width: size,
            minWidth: size,
            borderRadius: '50%'
        },
        ["".concat(buttonCls).concat(skeletonButtonCls, "-round")]: {
            borderRadius: size
        }
    };
};
const genSkeletonElementButtonSize = (size, calc)=>Object.assign({
        width: calc(size).mul(2).equal(),
        minWidth: calc(size).mul(2).equal()
    }, genSkeletonElementCommonSize(size));
const genSkeletonElementButton = (token)=>{
    const { borderRadiusSM, skeletonButtonCls, controlHeight, controlHeightLG, controlHeightSM, gradientFromColor, calc } = token;
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        [skeletonButtonCls]: Object.assign({
            display: 'inline-block',
            verticalAlign: 'top',
            background: gradientFromColor,
            borderRadius: borderRadiusSM,
            width: calc(controlHeight).mul(2).equal(),
            minWidth: calc(controlHeight).mul(2).equal()
        }, genSkeletonElementButtonSize(controlHeight, calc))
    }, genSkeletonElementButtonShape(token, controlHeight, skeletonButtonCls)), {
        ["".concat(skeletonButtonCls, "-lg")]: Object.assign({}, genSkeletonElementButtonSize(controlHeightLG, calc))
    }), genSkeletonElementButtonShape(token, controlHeightLG, "".concat(skeletonButtonCls, "-lg"))), {
        ["".concat(skeletonButtonCls, "-sm")]: Object.assign({}, genSkeletonElementButtonSize(controlHeightSM, calc))
    }), genSkeletonElementButtonShape(token, controlHeightSM, "".concat(skeletonButtonCls, "-sm")));
};
// =============================== Base ===============================
const genBaseStyle = (token)=>{
    const { componentCls, skeletonAvatarCls, skeletonTitleCls, skeletonParagraphCls, skeletonButtonCls, skeletonInputCls, skeletonImageCls, controlHeight, controlHeightLG, controlHeightSM, gradientFromColor, padding, marginSM, borderRadius, titleHeight, blockRadius, paragraphLiHeight, controlHeightXS, paragraphMarginTop } = token;
    return {
        [componentCls]: {
            display: 'table',
            width: '100%',
            ["".concat(componentCls, "-header")]: {
                display: 'table-cell',
                paddingInlineEnd: padding,
                verticalAlign: 'top',
                // Avatar
                [skeletonAvatarCls]: Object.assign({
                    display: 'inline-block',
                    verticalAlign: 'top',
                    background: gradientFromColor
                }, genSkeletonElementAvatarSize(controlHeight)),
                ["".concat(skeletonAvatarCls, "-circle")]: {
                    borderRadius: '50%'
                },
                ["".concat(skeletonAvatarCls, "-lg")]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightLG)),
                ["".concat(skeletonAvatarCls, "-sm")]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightSM))
            },
            ["".concat(componentCls, "-content")]: {
                display: 'table-cell',
                width: '100%',
                verticalAlign: 'top',
                // Title
                [skeletonTitleCls]: {
                    width: '100%',
                    height: titleHeight,
                    background: gradientFromColor,
                    borderRadius: blockRadius,
                    ["+ ".concat(skeletonParagraphCls)]: {
                        marginBlockStart: controlHeightSM
                    }
                },
                // paragraph
                [skeletonParagraphCls]: {
                    padding: 0,
                    '> li': {
                        width: '100%',
                        height: paragraphLiHeight,
                        listStyle: 'none',
                        background: gradientFromColor,
                        borderRadius: blockRadius,
                        '+ li': {
                            marginBlockStart: controlHeightXS
                        }
                    }
                },
                ["".concat(skeletonParagraphCls, "> li:last-child:not(:first-child):not(:nth-child(2))")]: {
                    width: '61%'
                }
            },
            ["&-round ".concat(componentCls, "-content")]: {
                ["".concat(skeletonTitleCls, ", ").concat(skeletonParagraphCls, " > li")]: {
                    borderRadius
                }
            }
        },
        ["".concat(componentCls, "-with-avatar ").concat(componentCls, "-content")]: {
            // Title
            [skeletonTitleCls]: {
                marginBlockStart: marginSM,
                ["+ ".concat(skeletonParagraphCls)]: {
                    marginBlockStart: paragraphMarginTop
                }
            }
        },
        // Skeleton element
        ["".concat(componentCls).concat(componentCls, "-element")]: Object.assign(Object.assign(Object.assign(Object.assign({
            display: 'inline-block',
            width: 'auto'
        }, genSkeletonElementButton(token)), genSkeletonElementAvatar(token)), genSkeletonElementInput(token)), genSkeletonElementImage(token)),
        // Skeleton Block Button, Input
        ["".concat(componentCls).concat(componentCls, "-block")]: {
            width: '100%',
            [skeletonButtonCls]: {
                width: '100%'
            },
            [skeletonInputCls]: {
                width: '100%'
            }
        },
        // With active animation
        ["".concat(componentCls).concat(componentCls, "-active")]: {
            ["\n        ".concat(skeletonTitleCls, ",\n        ").concat(skeletonParagraphCls, " > li,\n        ").concat(skeletonAvatarCls, ",\n        ").concat(skeletonButtonCls, ",\n        ").concat(skeletonInputCls, ",\n        ").concat(skeletonImageCls, "\n      ")]: Object.assign({}, genSkeletonColor(token))
        }
    };
};
const prepareComponentToken = (token)=>{
    const { colorFillContent, colorFill } = token;
    const gradientFromColor = colorFillContent;
    const gradientToColor = colorFill;
    return {
        color: gradientFromColor,
        colorGradientEnd: gradientToColor,
        gradientFromColor,
        gradientToColor,
        titleHeight: token.controlHeight / 2,
        blockRadius: token.borderRadiusSM,
        paragraphMarginTop: token.marginLG + token.marginXXS,
        paragraphLiHeight: token.controlHeight / 2
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Skeleton', (token)=>{
    const { componentCls, calc } = token;
    const skeletonToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        skeletonAvatarCls: "".concat(componentCls, "-avatar"),
        skeletonTitleCls: "".concat(componentCls, "-title"),
        skeletonParagraphCls: "".concat(componentCls, "-paragraph"),
        skeletonButtonCls: "".concat(componentCls, "-button"),
        skeletonInputCls: "".concat(componentCls, "-input"),
        skeletonImageCls: "".concat(componentCls, "-image"),
        imageSizeBase: calc(token.controlHeight).mul(1.5).equal(),
        borderRadius: 100,
        // Large number to make capsule shape
        skeletonLoadingBackground: "linear-gradient(90deg, ".concat(token.gradientFromColor, " 25%, ").concat(token.gradientToColor, " 37%, ").concat(token.gradientFromColor, " 63%)"),
        skeletonLoadingMotionDuration: '1.4s'
    });
    return genBaseStyle(skeletonToken);
}, prepareComponentToken, {
    deprecatedTokens: [
        [
            'color',
            'gradientFromColor'
        ],
        [
            'colorGradientEnd',
            'gradientToColor'
        ]
    ]
});
}),
"[project]/Downloads/One click/node_modules/antd/es/skeleton/Avatar.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/omit.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/skeleton/Element.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/skeleton/style/index.js [client] (ecmascript)");
"use client";
;
;
;
;
;
;
const SkeletonAvatar = (props)=>{
    const { prefixCls: customizePrefixCls, className, rootClassName, active, shape = 'circle', size = 'default' } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const otherProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, [
        'prefixCls',
        'className'
    ]);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, "".concat(prefixCls, "-element"), {
        ["".concat(prefixCls, "-active")]: active
    }, className, rootClassName, hashId, cssVarCls);
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: cls
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], Object.assign({
        prefixCls: "".concat(prefixCls, "-avatar"),
        shape: shape,
        size: size
    }, otherProps))));
};
const __TURBOPACK__default__export__ = SkeletonAvatar;
}),
"[project]/Downloads/One click/node_modules/antd/es/skeleton/Button.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/omit.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/skeleton/Element.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/skeleton/style/index.js [client] (ecmascript)");
"use client";
;
;
;
;
;
;
const SkeletonButton = (props)=>{
    const { prefixCls: customizePrefixCls, className, rootClassName, active, block = false, size = 'default' } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const otherProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, [
        'prefixCls'
    ]);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, "".concat(prefixCls, "-element"), {
        ["".concat(prefixCls, "-active")]: active,
        ["".concat(prefixCls, "-block")]: block
    }, className, rootClassName, hashId, cssVarCls);
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: cls
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], Object.assign({
        prefixCls: "".concat(prefixCls, "-button"),
        size: size
    }, otherProps))));
};
const __TURBOPACK__default__export__ = SkeletonButton;
}),
"[project]/Downloads/One click/node_modules/antd/es/skeleton/Image.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/skeleton/style/index.js [client] (ecmascript)");
"use client";
;
;
;
;
const path = 'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z';
const SkeletonImage = (props)=>{
    const { prefixCls: customizePrefixCls, className, rootClassName, style, active } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, "".concat(prefixCls, "-element"), {
        ["".concat(prefixCls, "-active")]: active
    }, className, rootClassName, hashId, cssVarCls);
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: cls
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-image"), className),
        style: style
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("svg", {
        viewBox: "0 0 1098 1024",
        xmlns: "http://www.w3.org/2000/svg",
        className: "".concat(prefixCls, "-image-svg")
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("title", null, "Image placeholder"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        d: path,
        className: "".concat(prefixCls, "-image-path")
    })))));
};
const __TURBOPACK__default__export__ = SkeletonImage;
}),
"[project]/Downloads/One click/node_modules/antd/es/skeleton/Input.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/omit.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/skeleton/Element.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/skeleton/style/index.js [client] (ecmascript)");
"use client";
;
;
;
;
;
;
const SkeletonInput = (props)=>{
    const { prefixCls: customizePrefixCls, className, rootClassName, active, block, size = 'default' } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const otherProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, [
        'prefixCls'
    ]);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, "".concat(prefixCls, "-element"), {
        ["".concat(prefixCls, "-active")]: active,
        ["".concat(prefixCls, "-block")]: block
    }, className, rootClassName, hashId, cssVarCls);
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: cls
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], Object.assign({
        prefixCls: "".concat(prefixCls, "-input"),
        size: size
    }, otherProps))));
};
const __TURBOPACK__default__export__ = SkeletonInput;
}),
"[project]/Downloads/One click/node_modules/antd/es/skeleton/Node.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/skeleton/style/index.js [client] (ecmascript)");
"use client";
;
;
;
;
const SkeletonNode = (props)=>{
    const { prefixCls: customizePrefixCls, className, rootClassName, style, active, children } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, "".concat(prefixCls, "-element"), {
        ["".concat(prefixCls, "-active")]: active
    }, hashId, className, rootClassName, cssVarCls);
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: cls
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-image"), className),
        style: style
    }, children)));
};
const __TURBOPACK__default__export__ = SkeletonNode;
}),
"[project]/Downloads/One click/node_modules/antd/es/skeleton/Paragraph.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
"use client";
;
;
const getWidth = (index, props)=>{
    const { width, rows = 2 } = props;
    if (Array.isArray(width)) {
        return width[index];
    }
    // last paragraph
    if (rows - 1 === index) {
        return width;
    }
    return undefined;
};
const Paragraph = (props)=>{
    const { prefixCls, className, style, rows = 0 } = props;
    const rowList = Array.from({
        length: rows
    }).map((_, index)=>/*#__PURE__*/ // eslint-disable-next-line react/no-array-index-key
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("li", {
            key: index,
            style: {
                width: getWidth(index, props)
            }
        }));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("ul", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, className),
        style: style
    }, rowList);
};
const __TURBOPACK__default__export__ = Paragraph;
}),
"[project]/Downloads/One click/node_modules/antd/es/skeleton/Title.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/* eslint-disable jsx-a11y/heading-has-content */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
"use client";
;
;
const Title = (param)=>{
    let { prefixCls, className, width, style } = param;
    return(/*#__PURE__*/ // biome-ignore lint/a11y/useHeadingContent: HOC here
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("h3", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, className),
        style: Object.assign({
            width
        }, style)
    }));
};
const __TURBOPACK__default__export__ = Title;
}),
"[project]/Downloads/One click/node_modules/antd/es/skeleton/Skeleton.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Avatar$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/skeleton/Avatar.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Button$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/skeleton/Button.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/skeleton/Element.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Image$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/skeleton/Image.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Input$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/skeleton/Input.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Node$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/skeleton/Node.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Paragraph$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/skeleton/Paragraph.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/skeleton/style/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Title$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/skeleton/Title.js [client] (ecmascript)");
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
function getComponentProps(prop) {
    if (prop && typeof prop === 'object') {
        return prop;
    }
    return {};
}
function getAvatarBasicProps(hasTitle, hasParagraph) {
    if (hasTitle && !hasParagraph) {
        // Square avatar
        return {
            size: 'large',
            shape: 'square'
        };
    }
    return {
        size: 'large',
        shape: 'circle'
    };
}
function getTitleBasicProps(hasAvatar, hasParagraph) {
    if (!hasAvatar && hasParagraph) {
        return {
            width: '38%'
        };
    }
    if (hasAvatar && hasParagraph) {
        return {
            width: '50%'
        };
    }
    return {};
}
function getParagraphBasicProps(hasAvatar, hasTitle) {
    const basicProps = {};
    // Width
    if (!hasAvatar || !hasTitle) {
        basicProps.width = '61%';
    }
    // Rows
    if (!hasAvatar && hasTitle) {
        basicProps.rows = 3;
    } else {
        basicProps.rows = 2;
    }
    return basicProps;
}
const Skeleton = (props)=>{
    const { prefixCls: customizePrefixCls, loading, className, rootClassName, style, children, avatar = false, title = true, paragraph = true, active, round } = props;
    const { getPrefixCls, direction, className: contextClassName, style: contextStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('skeleton');
    const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    if (loading || !('loading' in props)) {
        const hasAvatar = !!avatar;
        const hasTitle = !!title;
        const hasParagraph = !!paragraph;
        // Avatar
        let avatarNode;
        if (hasAvatar) {
            const avatarProps = Object.assign(Object.assign({
                prefixCls: "".concat(prefixCls, "-avatar")
            }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar));
            // We direct use SkeletonElement as avatar in skeleton internal.
            avatarNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
                className: "".concat(prefixCls, "-header")
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], Object.assign({}, avatarProps)));
        }
        let contentNode;
        if (hasTitle || hasParagraph) {
            // Title
            let $title;
            if (hasTitle) {
                const titleProps = Object.assign(Object.assign({
                    prefixCls: "".concat(prefixCls, "-title")
                }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));
                $title = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Title$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], Object.assign({}, titleProps));
            }
            // Paragraph
            let paragraphNode;
            if (hasParagraph) {
                const paragraphProps = Object.assign(Object.assign({
                    prefixCls: "".concat(prefixCls, "-paragraph")
                }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));
                paragraphNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Paragraph$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], Object.assign({}, paragraphProps));
            }
            contentNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
                className: "".concat(prefixCls, "-content")
            }, $title, paragraphNode);
        }
        const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, {
            ["".concat(prefixCls, "-with-avatar")]: hasAvatar,
            ["".concat(prefixCls, "-active")]: active,
            ["".concat(prefixCls, "-rtl")]: direction === 'rtl',
            ["".concat(prefixCls, "-round")]: round
        }, contextClassName, className, rootClassName, hashId, cssVarCls);
        return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: cls,
            style: Object.assign(Object.assign({}, contextStyle), style)
        }, avatarNode, contentNode));
    }
    return children !== null && children !== void 0 ? children : null;
};
Skeleton.Button = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Button$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
Skeleton.Avatar = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Avatar$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
Skeleton.Input = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Input$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
Skeleton.Image = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
Skeleton.Node = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Node$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
if ("TURBOPACK compile-time truthy", 1) {
    Skeleton.displayName = 'Skeleton';
}
const __TURBOPACK__default__export__ = Skeleton;
}),
"[project]/Downloads/One click/node_modules/antd/es/skeleton/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Skeleton$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/skeleton/Skeleton.js [client] (ecmascript)");
"use client";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Skeleton$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Downloads/One click/node_modules/antd/es/drawer/DrawerPanel.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/hooks/useClosable.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/skeleton/index.js [client] (ecmascript)");
"use client";
;
;
;
;
;
const DrawerPanel = (props)=>{
    var _a, _b;
    const { prefixCls, ariaId, title, footer, extra, closable, loading, onClose, headerStyle, bodyStyle, footerStyle, children, classNames: drawerClassNames, styles: drawerStyles } = props;
    const drawerContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('drawer');
    let closablePlacement;
    if (closable === false) {
        closablePlacement = undefined;
    } else if (closable === undefined || closable === true) {
        closablePlacement = 'start';
    } else {
        closablePlacement = (closable === null || closable === void 0 ? void 0 : closable.placement) === 'end' ? 'end' : 'start';
    }
    const customCloseIconRender = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "DrawerPanel.useCallback[customCloseIconRender]": (icon)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("button", {
                type: "button",
                onClick: onClose,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-close"), {
                    ["".concat(prefixCls, "-close-").concat(closablePlacement)]: closablePlacement === 'end'
                })
            }, icon)
    }["DrawerPanel.useCallback[customCloseIconRender]"], [
        onClose,
        prefixCls,
        closablePlacement
    ]);
    const [mergedClosable, mergedCloseIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useClosable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$client$5d$__$28$ecmascript$29$__["pickClosable"])(props), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$client$5d$__$28$ecmascript$29$__["pickClosable"])(drawerContext), {
        closable: true,
        closeIconRender: customCloseIconRender
    });
    const renderHeader = ()=>{
        var _a, _b;
        if (!title && !mergedClosable) {
            return null;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            style: Object.assign(Object.assign(Object.assign({}, (_a = drawerContext.styles) === null || _a === void 0 ? void 0 : _a.header), headerStyle), drawerStyles === null || drawerStyles === void 0 ? void 0 : drawerStyles.header),
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-header"), {
                ["".concat(prefixCls, "-header-close-only")]: mergedClosable && !title && !extra
            }, (_b = drawerContext.classNames) === null || _b === void 0 ? void 0 : _b.header, drawerClassNames === null || drawerClassNames === void 0 ? void 0 : drawerClassNames.header)
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: "".concat(prefixCls, "-header-title")
        }, closablePlacement === 'start' && mergedCloseIcon, title && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: "".concat(prefixCls, "-title"),
            id: ariaId
        }, title)), extra && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: "".concat(prefixCls, "-extra")
        }, extra), closablePlacement === 'end' && mergedCloseIcon);
    };
    const renderFooter = ()=>{
        var _a, _b;
        if (!footer) {
            return null;
        }
        const footerClassName = "".concat(prefixCls, "-footer");
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(footerClassName, (_a = drawerContext.classNames) === null || _a === void 0 ? void 0 : _a.footer, drawerClassNames === null || drawerClassNames === void 0 ? void 0 : drawerClassNames.footer),
            style: Object.assign(Object.assign(Object.assign({}, (_b = drawerContext.styles) === null || _b === void 0 ? void 0 : _b.footer), footerStyle), drawerStyles === null || drawerStyles === void 0 ? void 0 : drawerStyles.footer)
        }, footer);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], null, renderHeader(), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-body"), drawerClassNames === null || drawerClassNames === void 0 ? void 0 : drawerClassNames.body, (_a = drawerContext.classNames) === null || _a === void 0 ? void 0 : _a.body),
        style: Object.assign(Object.assign(Object.assign({}, (_b = drawerContext.styles) === null || _b === void 0 ? void 0 : _b.body), bodyStyle), drawerStyles === null || drawerStyles === void 0 ? void 0 : drawerStyles.body)
    }, loading ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        active: true,
        title: false,
        paragraph: {
            rows: 5
        },
        className: "".concat(prefixCls, "-body-skeleton")
    }) : children), renderFooter());
};
const __TURBOPACK__default__export__ = DrawerPanel;
}),
"[project]/Downloads/One click/node_modules/antd/es/drawer/style/motion.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const getMoveTranslate = (direction)=>{
    const value = '100%';
    return ({
        left: "translateX(-".concat(value, ")"),
        right: "translateX(".concat(value, ")"),
        top: "translateY(-".concat(value, ")"),
        bottom: "translateY(".concat(value, ")")
    })[direction];
};
const getEnterLeaveStyle = (startStyle, endStyle)=>({
        '&-enter, &-appear': Object.assign(Object.assign({}, startStyle), {
            '&-active': endStyle
        }),
        '&-leave': Object.assign(Object.assign({}, endStyle), {
            '&-active': startStyle
        })
    });
const getFadeStyle = (from, duration)=>Object.assign({
        '&-enter, &-appear, &-leave': {
            '&-start': {
                transition: 'none'
            },
            '&-active': {
                transition: "all ".concat(duration)
            }
        }
    }, getEnterLeaveStyle({
        opacity: from
    }, {
        opacity: 1
    }));
const getPanelMotionStyles = (direction, duration)=>[
        getFadeStyle(0.7, duration),
        getEnterLeaveStyle({
            transform: getMoveTranslate(direction)
        }, {
            transform: 'none'
        })
    ];
const genMotionStyle = (token)=>{
    const { componentCls, motionDurationSlow } = token;
    return {
        [componentCls]: {
            // ======================== Mask ========================
            ["".concat(componentCls, "-mask-motion")]: getFadeStyle(0, motionDurationSlow),
            // ======================= Panel ========================
            ["".concat(componentCls, "-panel-motion")]: [
                'left',
                'right',
                'top',
                'bottom'
            ].reduce((obj, direction)=>Object.assign(Object.assign({}, obj), {
                    ["&-".concat(direction)]: getPanelMotionStyles(direction, motionDurationSlow)
                }), {})
        }
    };
};
const __TURBOPACK__default__export__ = genMotionStyle;
}),
"[project]/Downloads/One click/node_modules/antd/es/drawer/style/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$style$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/drawer/style/motion.js [client] (ecmascript)");
;
;
;
;
// =============================== Base ===============================
const genDrawerStyle = (token)=>{
    const { borderRadiusSM, componentCls, zIndexPopup, colorBgMask, colorBgElevated, motionDurationSlow, motionDurationMid, paddingXS, padding, paddingLG, fontSizeLG, lineHeightLG, lineWidth, lineType, colorSplit, marginXS, colorIcon, colorIconHover, colorBgTextHover, colorBgTextActive, colorText, fontWeightStrong, footerPaddingBlock, footerPaddingInline, calc } = token;
    const wrapperCls = "".concat(componentCls, "-content-wrapper");
    return {
        [componentCls]: {
            position: 'fixed',
            inset: 0,
            zIndex: zIndexPopup,
            pointerEvents: 'none',
            color: colorText,
            '&-pure': {
                position: 'relative',
                background: colorBgElevated,
                display: 'flex',
                flexDirection: 'column',
                ["&".concat(componentCls, "-left")]: {
                    boxShadow: token.boxShadowDrawerLeft
                },
                ["&".concat(componentCls, "-right")]: {
                    boxShadow: token.boxShadowDrawerRight
                },
                ["&".concat(componentCls, "-top")]: {
                    boxShadow: token.boxShadowDrawerUp
                },
                ["&".concat(componentCls, "-bottom")]: {
                    boxShadow: token.boxShadowDrawerDown
                }
            },
            '&-inline': {
                position: 'absolute'
            },
            // ====================== Mask ======================
            ["".concat(componentCls, "-mask")]: {
                position: 'absolute',
                inset: 0,
                zIndex: zIndexPopup,
                background: colorBgMask,
                pointerEvents: 'auto'
            },
            // ==================== Content =====================
            [wrapperCls]: {
                position: 'absolute',
                zIndex: zIndexPopup,
                maxWidth: '100vw',
                transition: "all ".concat(motionDurationSlow),
                '&-hidden': {
                    display: 'none'
                }
            },
            // Placement
            ["&-left > ".concat(wrapperCls)]: {
                top: 0,
                bottom: 0,
                left: {
                    _skip_check_: true,
                    value: 0
                },
                boxShadow: token.boxShadowDrawerLeft
            },
            ["&-right > ".concat(wrapperCls)]: {
                top: 0,
                right: {
                    _skip_check_: true,
                    value: 0
                },
                bottom: 0,
                boxShadow: token.boxShadowDrawerRight
            },
            ["&-top > ".concat(wrapperCls)]: {
                top: 0,
                insetInline: 0,
                boxShadow: token.boxShadowDrawerUp
            },
            ["&-bottom > ".concat(wrapperCls)]: {
                bottom: 0,
                insetInline: 0,
                boxShadow: token.boxShadowDrawerDown
            },
            ["".concat(componentCls, "-content")]: {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                overflow: 'auto',
                background: colorBgElevated,
                pointerEvents: 'auto'
            },
            // Header
            ["".concat(componentCls, "-header")]: {
                display: 'flex',
                flex: 0,
                alignItems: 'center',
                padding: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(padding), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(paddingLG)),
                fontSize: fontSizeLG,
                lineHeight: lineHeightLG,
                borderBottom: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth), " ").concat(lineType, " ").concat(colorSplit),
                '&-title': {
                    display: 'flex',
                    flex: 1,
                    alignItems: 'center',
                    minWidth: 0,
                    minHeight: 0
                }
            },
            ["".concat(componentCls, "-extra")]: {
                flex: 'none'
            },
            ["".concat(componentCls, "-close")]: Object.assign({
                display: 'inline-flex',
                width: calc(fontSizeLG).add(paddingXS).equal(),
                height: calc(fontSizeLG).add(paddingXS).equal(),
                borderRadius: borderRadiusSM,
                justifyContent: 'center',
                alignItems: 'center',
                color: colorIcon,
                fontWeight: fontWeightStrong,
                fontSize: fontSizeLG,
                fontStyle: 'normal',
                lineHeight: 1,
                textAlign: 'center',
                textTransform: 'none',
                textDecoration: 'none',
                background: 'transparent',
                border: 0,
                cursor: 'pointer',
                transition: "all ".concat(motionDurationMid),
                textRendering: 'auto',
                ["&".concat(componentCls, "-close-end")]: {
                    marginInlineStart: marginXS
                },
                ["&:not(".concat(componentCls, "-close-end)")]: {
                    marginInlineEnd: marginXS
                },
                '&:hover': {
                    color: colorIconHover,
                    backgroundColor: colorBgTextHover,
                    textDecoration: 'none'
                },
                '&:active': {
                    backgroundColor: colorBgTextActive
                }
            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token)),
            ["".concat(componentCls, "-title")]: {
                flex: 1,
                margin: 0,
                fontWeight: token.fontWeightStrong,
                fontSize: fontSizeLG,
                lineHeight: lineHeightLG
            },
            // Body
            ["".concat(componentCls, "-body")]: {
                flex: 1,
                minWidth: 0,
                minHeight: 0,
                padding: paddingLG,
                overflow: 'auto',
                ["".concat(componentCls, "-body-skeleton")]: {
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }
            },
            // Footer
            ["".concat(componentCls, "-footer")]: {
                flexShrink: 0,
                padding: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(footerPaddingBlock), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(footerPaddingInline)),
                borderTop: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth), " ").concat(lineType, " ").concat(colorSplit)
            },
            // ====================== RTL =======================
            '&-rtl': {
                direction: 'rtl'
            }
        }
    };
};
const prepareComponentToken = (token)=>({
        zIndexPopup: token.zIndexPopupBase,
        footerPaddingBlock: token.paddingXS,
        footerPaddingInline: token.padding
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Drawer', (token)=>{
    const drawerToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {});
    return [
        genDrawerStyle(drawerToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$style$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(drawerToken)
    ];
}, prepareComponentToken);
}),
"[project]/Downloads/One click/node_modules/antd/es/drawer/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$drawer$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-drawer/es/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useId.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/ref.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/ContextIsolator.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/hooks/useZIndex.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/motion.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/zindexContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$watermark$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/watermark/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$DrawerPanel$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/drawer/DrawerPanel.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/drawer/style/index.js [client] (ecmascript)");
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
const _SizeTypes = [
    'default',
    'large'
];
const defaultPushState = {
    distance: 180
};
const Drawer = (props)=>{
    var _a;
    const { rootClassName, width, height, size = 'default', mask = true, push = defaultPushState, open, afterOpenChange, onClose, prefixCls: customizePrefixCls, getContainer: customizeGetContainer, panelRef = null, style, className, 'aria-labelledby': ariaLabelledby, // Deprecated
    visible, afterVisibleChange, maskStyle, drawerStyle, contentWrapperStyle, destroyOnClose, destroyOnHidden } = props, rest = __rest(props, [
        "rootClassName",
        "width",
        "height",
        "size",
        "mask",
        "push",
        "open",
        "afterOpenChange",
        "onClose",
        "prefixCls",
        "getContainer",
        "panelRef",
        "style",
        "className",
        'aria-labelledby',
        "visible",
        "afterVisibleChange",
        "maskStyle",
        "drawerStyle",
        "contentWrapperStyle",
        "destroyOnClose",
        "destroyOnHidden"
    ]);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])();
    const ariaId = rest.title ? id : undefined;
    const { getPopupContainer, getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('drawer');
    const prefixCls = getPrefixCls('drawer', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const getContainer = // 有可能为 false，所以不能直接判断
    customizeGetContainer === undefined && getPopupContainer ? ()=>getPopupContainer(document.body) : customizeGetContainer;
    const drawerClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        'no-mask': !mask,
        ["".concat(prefixCls, "-rtl")]: direction === 'rtl'
    }, rootClassName, hashId, cssVarCls);
    // ========================== Warning ===========================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Drawer');
        [
            [
                'visible',
                'open'
            ],
            [
                'afterVisibleChange',
                'afterOpenChange'
            ],
            [
                'headerStyle',
                'styles.header'
            ],
            [
                'bodyStyle',
                'styles.body'
            ],
            [
                'footerStyle',
                'styles.footer'
            ],
            [
                'contentWrapperStyle',
                'styles.wrapper'
            ],
            [
                'maskStyle',
                'styles.mask'
            ],
            [
                'drawerStyle',
                'styles.content'
            ],
            [
                'destroyInactivePanel',
                'destroyOnHidden'
            ]
        ].forEach((param)=>{
            let [deprecatedName, newName] = param;
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
        if (getContainer !== undefined && ((_a = props.style) === null || _a === void 0 ? void 0 : _a.position) === 'absolute') {
            ("TURBOPACK compile-time truthy", 1) ? warning(false, 'breaking', '`style` is replaced by `rootStyle` in v5. Please check that `position: absolute` is necessary.') : "TURBOPACK unreachable";
        }
    }
    // ============================ Size ============================
    const mergedWidth = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Drawer.useMemo[mergedWidth]": ()=>width !== null && width !== void 0 ? width : size === 'large' ? 736 : 378
    }["Drawer.useMemo[mergedWidth]"], [
        width,
        size
    ]);
    const mergedHeight = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Drawer.useMemo[mergedHeight]": ()=>height !== null && height !== void 0 ? height : size === 'large' ? 736 : 378
    }["Drawer.useMemo[mergedHeight]"], [
        height,
        size
    ]);
    // =========================== Motion ===========================
    const maskMotion = {
        motionName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getTransitionName"])(prefixCls, 'mask-motion'),
        motionAppear: true,
        motionEnter: true,
        motionLeave: true,
        motionDeadline: 500
    };
    const panelMotion = (motionPlacement)=>({
            motionName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getTransitionName"])(prefixCls, "panel-motion-".concat(motionPlacement)),
            motionAppear: true,
            motionEnter: true,
            motionLeave: true,
            motionDeadline: 500
        });
    // ============================ Refs ============================
    // Select `ant-drawer-content` by `panelRef`
    const innerPanelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$watermark$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["usePanelRef"])();
    const mergedPanelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__["composeRef"])(panelRef, innerPanelRef);
    // ============================ zIndex ============================
    const [zIndex, contextZIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useZIndex"])('Drawer', rest.zIndex);
    // =========================== Render ===========================
    const { classNames: propClassNames = {}, styles: propStyles = {} } = rest;
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        form: true,
        space: true
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: contextZIndex
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$drawer$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], Object.assign({
        prefixCls: prefixCls,
        onClose: onClose,
        maskMotion: maskMotion,
        motion: panelMotion
    }, rest, {
        classNames: {
            mask: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(propClassNames.mask, contextClassNames.mask),
            content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(propClassNames.content, contextClassNames.content),
            wrapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(propClassNames.wrapper, contextClassNames.wrapper)
        },
        styles: {
            mask: Object.assign(Object.assign(Object.assign({}, propStyles.mask), maskStyle), contextStyles.mask),
            content: Object.assign(Object.assign(Object.assign({}, propStyles.content), drawerStyle), contextStyles.content),
            wrapper: Object.assign(Object.assign(Object.assign({}, propStyles.wrapper), contentWrapperStyle), contextStyles.wrapper)
        },
        open: open !== null && open !== void 0 ? open : visible,
        mask: mask,
        push: push,
        width: mergedWidth,
        height: mergedHeight,
        style: Object.assign(Object.assign({}, contextStyle), style),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(contextClassName, className),
        rootClassName: drawerClassName,
        getContainer: getContainer,
        afterOpenChange: afterOpenChange !== null && afterOpenChange !== void 0 ? afterOpenChange : afterVisibleChange,
        panelRef: mergedPanelRef,
        zIndex: zIndex,
        "aria-labelledby": ariaLabelledby !== null && ariaLabelledby !== void 0 ? ariaLabelledby : ariaId,
        // TODO: In the future, destroyOnClose in rc-drawer needs to be upgrade to destroyOnHidden
        destroyOnClose: destroyOnHidden !== null && destroyOnHidden !== void 0 ? destroyOnHidden : destroyOnClose
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$DrawerPanel$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], Object.assign({
        prefixCls: prefixCls
    }, rest, {
        ariaId: ariaId,
        onClose: onClose
    }))))));
};
/** @private Internal Component. Do not use in your production. */ const PurePanel = (props)=>{
    const { prefixCls: customizePrefixCls, style, className, placement = 'right' } = props, restProps = __rest(props, [
        "prefixCls",
        "style",
        "className",
        "placement"
    ]);
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('drawer', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, "".concat(prefixCls, "-pure"), "".concat(prefixCls, "-").concat(placement), hashId, cssVarCls, className);
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: cls,
        style: style
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$DrawerPanel$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], Object.assign({
        prefixCls: prefixCls
    }, restProps))));
};
Drawer._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
if ("TURBOPACK compile-time truthy", 1) {
    Drawer.displayName = 'Drawer';
}
const __TURBOPACK__default__export__ = Drawer;
}),
"[project]/Downloads/One click/node_modules/antd/es/drawer/index.js [client] (ecmascript) <export default as Drawer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Drawer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/drawer/index.js [client] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/reactNode.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cloneElement",
    ()=>cloneElement,
    "isFragment",
    ()=>isFragment,
    "replaceElement",
    ()=>replaceElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
function isFragment(child) {
    return child && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].isValidElement(child) && child.type === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment;
}
const replaceElement = (element, replacement, props)=>{
    if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].isValidElement(element)) {
        return replacement;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].cloneElement(element, typeof props === 'function' ? props(element.props || {}) : props);
};
function cloneElement(element, props) {
    return replaceElement(element, element, props);
}
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/wave/style.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [client] (ecmascript)");
;
const genWaveStyle = (token)=>{
    const { componentCls, colorPrimary } = token;
    return {
        [componentCls]: {
            position: 'absolute',
            background: 'transparent',
            pointerEvents: 'none',
            boxSizing: 'border-box',
            color: "var(--wave-color, ".concat(colorPrimary, ")"),
            boxShadow: "0 0 0 0 currentcolor",
            opacity: 0.2,
            // =================== Motion ===================
            '&.wave-motion-appear': {
                transition: [
                    "box-shadow 0.4s ".concat(token.motionEaseOutCirc),
                    "opacity 2s ".concat(token.motionEaseOutCirc)
                ].join(','),
                '&-active': {
                    boxShadow: "0 0 0 6px currentcolor",
                    opacity: 0
                },
                '&.wave-quick': {
                    transition: [
                        "box-shadow ".concat(token.motionDurationSlow, " ").concat(token.motionEaseInOut),
                        "opacity ".concat(token.motionDurationSlow, " ").concat(token.motionEaseInOut)
                    ].join(',')
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genComponentStyleHook"])('Wave', genWaveStyle);
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/wave/interface.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TARGET_CLS",
    ()=>TARGET_CLS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
;
const TARGET_CLS = "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["defaultPrefixCls"], "-wave-target");
}),
"[project]/Downloads/One click/node_modules/antd/es/config-provider/UnstableContext.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstableSetRender",
    ()=>unstableSetRender
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react-dom/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$React$2f$render$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/React/render.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [client] (ecmascript)");
"use client";
;
;
;
;
const defaultReactRender = (node, container)=>{
    // TODO: Remove in v6
    // Warning for React 19
    if ("TURBOPACK compile-time truthy", 1) {
        const majorVersion = Number.parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["version"].split('.')[0], 10);
        const fullKeys = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__);
        ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(majorVersion < 19 || fullKeys.includes('createRoot'), 'compatible', 'antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.') : "TURBOPACK unreachable";
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$React$2f$render$2e$js__$5b$client$5d$__$28$ecmascript$29$__["render"])(node, container);
    return ()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$React$2f$render$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unmount"])(container);
    };
};
let unstableRender = defaultReactRender;
function unstableSetRender(render) {
    if (render) {
        unstableRender = render;
    }
    return unstableRender;
}
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/wave/util.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTargetWaveColor",
    ()=>getTargetWaveColor,
    "isValidWaveColor",
    ()=>isValidWaveColor
]);
function isValidWaveColor(color) {
    return color && color !== '#fff' && color !== '#ffffff' && color !== 'rgb(255, 255, 255)' && color !== 'rgba(255, 255, 255, 1)' && !/rgba\((?:\d*, ){3}0\)/.test(color) && // any transparent rgba color
    color !== 'transparent' && color !== 'canvastext';
}
function getTargetWaveColor(node) {
    var _a;
    const { borderTopColor, borderColor, backgroundColor } = getComputedStyle(node);
    return (_a = [
        borderTopColor,
        borderColor,
        backgroundColor
    ].find(isValidWaveColor)) !== null && _a !== void 0 ? _a : null;
}
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/wave/WaveEffect.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/raf.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/ref.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$UnstableContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/UnstableContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/wave/interface.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$util$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/wave/util.js [client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function validateNum(value) {
    return Number.isNaN(value) ? 0 : value;
}
const WaveEffect = (props)=>{
    const { className, target, component, registerUnmount } = props;
    const divRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](null);
    // ====================== Refs ======================
    const unmountRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "WaveEffect.useEffect": ()=>{
            unmountRef.current = registerUnmount();
        }
    }["WaveEffect.useEffect"], []);
    // ===================== Effect =====================
    const [color, setWaveColor] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [borderRadius, setBorderRadius] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [left, setLeft] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [top, setTop] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [width, setWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [height, setHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [enabled, setEnabled] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false);
    const waveStyle = {
        left,
        top,
        width,
        height,
        borderRadius: borderRadius.map((radius)=>"".concat(radius, "px")).join(' ')
    };
    if (color) {
        waveStyle['--wave-color'] = color;
    }
    function syncPos() {
        const nodeStyle = getComputedStyle(target);
        // Get wave color from target
        setWaveColor((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$util$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getTargetWaveColor"])(target));
        const isStatic = nodeStyle.position === 'static';
        // Rect
        const { borderLeftWidth, borderTopWidth } = nodeStyle;
        setLeft(isStatic ? target.offsetLeft : validateNum(-Number.parseFloat(borderLeftWidth)));
        setTop(isStatic ? target.offsetTop : validateNum(-Number.parseFloat(borderTopWidth)));
        setWidth(target.offsetWidth);
        setHeight(target.offsetHeight);
        // Get border radius
        const { borderTopLeftRadius, borderTopRightRadius, borderBottomLeftRadius, borderBottomRightRadius } = nodeStyle;
        setBorderRadius([
            borderTopLeftRadius,
            borderTopRightRadius,
            borderBottomRightRadius,
            borderBottomLeftRadius
        ].map((radius)=>validateNum(Number.parseFloat(radius))));
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "WaveEffect.useEffect": ()=>{
            if (target) {
                // We need delay to check position here
                // since UI may change after click
                const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
                    "WaveEffect.useEffect.id": ()=>{
                        syncPos();
                        setEnabled(true);
                    }
                }["WaveEffect.useEffect.id"]);
                // Add resize observer to follow size
                let resizeObserver;
                if (typeof ResizeObserver !== 'undefined') {
                    resizeObserver = new ResizeObserver(syncPos);
                    resizeObserver.observe(target);
                }
                return ({
                    "WaveEffect.useEffect": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].cancel(id);
                        resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
                    }
                })["WaveEffect.useEffect"];
            }
        }
    }["WaveEffect.useEffect"], [
        target
    ]);
    if (!enabled) {
        return null;
    }
    const isSmallComponent = (component === 'Checkbox' || component === 'Radio') && (target === null || target === void 0 ? void 0 : target.classList.contains(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["TARGET_CLS"]));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        visible: true,
        motionAppear: true,
        motionName: "wave-motion",
        motionDeadline: 5000,
        onAppearEnd: (_, event)=>{
            var _a, _b;
            if (event.deadline || event.propertyName === 'opacity') {
                const holder = (_a = divRef.current) === null || _a === void 0 ? void 0 : _a.parentElement;
                (_b = unmountRef.current) === null || _b === void 0 ? void 0 : _b.call(unmountRef).then(()=>{
                    holder === null || holder === void 0 ? void 0 : holder.remove();
                });
            }
            return false;
        }
    }, (param, ref)=>{
        let { className: motionClassName } = param;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__["composeRef"])(divRef, ref),
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, motionClassName, {
                'wave-quick': isSmallComponent
            }),
            style: waveStyle
        });
    });
};
const showWaveEffect = (target, info)=>{
    var _a;
    const { component } = info;
    // Skip for unchecked checkbox
    if (component === 'Checkbox' && !((_a = target.querySelector('input')) === null || _a === void 0 ? void 0 : _a.checked)) {
        return;
    }
    // Create holder
    const holder = document.createElement('div');
    holder.style.position = 'absolute';
    holder.style.left = '0px';
    holder.style.top = '0px';
    target === null || target === void 0 ? void 0 : target.insertBefore(holder, target === null || target === void 0 ? void 0 : target.firstChild);
    const reactRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$UnstableContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unstableSetRender"])();
    let unmountCallback = null;
    function registerUnmount() {
        return unmountCallback;
    }
    unmountCallback = reactRender(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](WaveEffect, Object.assign({}, info, {
        target: target,
        registerUnmount: registerUnmount
    })), holder);
};
const __TURBOPACK__default__export__ = showWaveEffect;
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/wave/useWave.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useEvent.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/raf.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/useToken.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/wave/interface.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$WaveEffect$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/wave/WaveEffect.js [client] (ecmascript)");
;
;
;
;
;
;
;
const useWave = (nodeRef, className, component)=>{
    const { wave } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const [, token, hashId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])();
    const showWave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "useWave.useEvent[showWave]": (event)=>{
            const node = nodeRef.current;
            if ((wave === null || wave === void 0 ? void 0 : wave.disabled) || !node) {
                return;
            }
            const targetNode = node.querySelector(".".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["TARGET_CLS"])) || node;
            const { showEffect } = wave || {};
            // Customize wave effect
            (showEffect || __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$WaveEffect$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(targetNode, {
                className,
                token,
                component,
                event,
                hashId
            });
        }
    }["useWave.useEvent[showWave]"]);
    const rafId = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](null);
    // Merge trigger event into one for each frame
    const showDebounceWave = (event)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].cancel(rafId.current);
        rafId.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(()=>{
            showWave(event);
        });
    };
    return showDebounceWave;
};
const __TURBOPACK__default__export__ = useWave;
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/wave/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$isVisible$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Dom/isVisible.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/ref.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/reactNode.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/wave/style.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$useWave$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/wave/useWave.js [client] (ecmascript)");
;
;
;
;
;
;
;
;
const Wave = (props)=>{
    const { children, disabled, component } = props;
    const { getPrefixCls } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ============================== Style ===============================
    const prefixCls = getPrefixCls('wave');
    const [, hashId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    // =============================== Wave ===============================
    const showWave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$useWave$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(containerRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, hashId), component);
    // ============================== Effect ==============================
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Wave.useEffect": ()=>{
            const node = containerRef.current;
            if (!node || node.nodeType !== window.Node.ELEMENT_NODE || disabled) {
                return;
            }
            // Click handler
            const onClick = {
                "Wave.useEffect.onClick": (e)=>{
                    // Fix radio button click twice
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$isVisible$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(e.target) || // No need wave
                    !node.getAttribute || node.getAttribute('disabled') || node.disabled || node.className.includes('disabled') && !node.className.includes('disabled:') || node.getAttribute('aria-disabled') === 'true' || node.className.includes('-leave')) {
                        return;
                    }
                    showWave(e);
                }
            }["Wave.useEffect.onClick"];
            // Bind events
            node.addEventListener('click', onClick, true);
            return ({
                "Wave.useEffect": ()=>{
                    node.removeEventListener('click', onClick, true);
                }
            })["Wave.useEffect"];
        }
    }["Wave.useEffect"], [
        disabled
    ]);
    // ============================== Render ==============================
    if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].isValidElement(children)) {
        return children !== null && children !== void 0 ? children : null;
    }
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supportRef"])(children) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__["composeRef"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getNodeRef"])(children), containerRef) : containerRef;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cloneElement"])(children, {
        ref
    });
};
if ("TURBOPACK compile-time truthy", 1) {
    Wave.displayName = 'Wave';
}
const __TURBOPACK__default__export__ = Wave;
}),
"[project]/Downloads/One click/node_modules/antd/es/config-provider/DisabledContext.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DisabledContextProvider",
    ()=>DisabledContextProvider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
"use client";
;
const DisabledContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"](false);
const DisabledContextProvider = (param)=>{
    let { children, disabled } = param;
    const originDisabled = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](DisabledContext);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](DisabledContext.Provider, {
        value: disabled !== null && disabled !== void 0 ? disabled : originDisabled
    }, children);
};
const __TURBOPACK__default__export__ = DisabledContext;
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/useToken.js [client] (ecmascript) <export default as useToken>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useToken",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/useToken.js [client] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/antd/es/button/button-group.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupSizeContext",
    ()=>GroupSizeContext,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/useToken.js [client] (ecmascript) <export default as useToken>");
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
const GroupSizeContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
const ButtonGroup = (props)=>{
    const { getPrefixCls, direction } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { prefixCls: customizePrefixCls, size, className } = props, others = __rest(props, [
        "prefixCls",
        "size",
        "className"
    ]);
    const prefixCls = getPrefixCls('btn-group', customizePrefixCls);
    const [, , hashId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const sizeCls = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ButtonGroup.useMemo[sizeCls]": ()=>{
            switch(size){
                case 'large':
                    return 'lg';
                case 'small':
                    return 'sm';
                default:
                    return '';
            }
        }
    }["ButtonGroup.useMemo[sizeCls]"], [
        size
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Button.Group');
        warning.deprecated(false, 'Button.Group', 'Space.Compact');
        ("TURBOPACK compile-time truthy", 1) ? warning(!size || [
            'large',
            'small',
            'middle'
        ].includes(size), 'usage', 'Invalid prop `size`.') : "TURBOPACK unreachable";
    }
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, {
        ["".concat(prefixCls, "-").concat(sizeCls)]: sizeCls,
        ["".concat(prefixCls, "-rtl")]: direction === 'rtl'
    }, className, hashId);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](GroupSizeContext.Provider, {
        value: size
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", Object.assign({}, others, {
        className: classes
    })));
};
const __TURBOPACK__default__export__ = ButtonGroup;
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/interface/presetColors.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PresetColors",
    ()=>PresetColors
]);
const PresetColors = [
    'blue',
    'purple',
    'cyan',
    'green',
    'magenta',
    'pink',
    'red',
    'orange',
    'yellow',
    'volcano',
    'geekblue',
    'lime',
    'gold'
];
}),
"[project]/Downloads/One click/node_modules/antd/es/button/buttonHelpers.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_ButtonColorTypes",
    ()=>_ButtonColorTypes,
    "_ButtonVariantTypes",
    ()=>_ButtonVariantTypes,
    "convertLegacyProps",
    ()=>convertLegacyProps,
    "isString",
    ()=>isString,
    "isTwoCNChar",
    ()=>isTwoCNChar,
    "isUnBorderedButtonVariant",
    ()=>isUnBorderedButtonVariant,
    "spaceChildren",
    ()=>spaceChildren
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/reactNode.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/interface/presetColors.js [client] (ecmascript)");
"use client";
;
;
;
;
const rxTwoCNChar = /^[\u4E00-\u9FA5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function convertLegacyProps(type) {
    if (type === 'danger') {
        return {
            danger: true
        };
    }
    return {
        type
    };
}
function isString(str) {
    return typeof str === 'string';
}
function isUnBorderedButtonVariant(type) {
    return type === 'text' || type === 'link';
}
function splitCNCharsBySpace(child, needInserted) {
    if (child === null || child === undefined) {
        return;
    }
    const SPACE = needInserted ? ' ' : '';
    if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
            children: child.props.children.split('').join(SPACE)
        });
    }
    if (isString(child)) {
        return isTwoCNChar(child) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, child.split('').join(SPACE)) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, child);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isFragment"])(child)) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, child);
    }
    return child;
}
function spaceChildren(children, needInserted) {
    let isPrevChildPure = false;
    const childList = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Children.forEach(children, (child)=>{
        const type = typeof child;
        const isCurrentChildPure = type === 'string' || type === 'number';
        if (isPrevChildPure && isCurrentChildPure) {
            const lastIndex = childList.length - 1;
            const lastChild = childList[lastIndex];
            childList[lastIndex] = "".concat(lastChild).concat(child);
        } else {
            childList.push(child);
        }
        isPrevChildPure = isCurrentChildPure;
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Children.map(childList, (child)=>splitCNCharsBySpace(child, needInserted));
}
const _ButtonTypes = [
    'default',
    'primary',
    'dashed',
    'link',
    'text'
];
const _ButtonShapes = [
    'default',
    'circle',
    'round'
];
const _ButtonHTMLTypes = [
    'submit',
    'button',
    'reset'
];
const _ButtonVariantTypes = [
    'outlined',
    'dashed',
    'solid',
    'filled',
    'text',
    'link'
];
const _ButtonColorTypes = [
    'default',
    'primary',
    'danger'
].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$client$5d$__$28$ecmascript$29$__["PresetColors"]));
}),
"[project]/Downloads/One click/node_modules/antd/es/button/IconWrapper.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
"use client";
;
;
const IconWrapper = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { className, style, children, prefixCls } = props;
    const iconWrapperCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-icon"), className);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        ref: ref,
        className: iconWrapperCls,
        style: style
    }, children);
});
const __TURBOPACK__default__export__ = IconWrapper;
}),
"[project]/Downloads/One click/node_modules/antd/es/button/DefaultLoadingIcon.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$IconWrapper$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/button/IconWrapper.js [client] (ecmascript)");
"use client";
;
;
;
;
;
const InnerLoadingIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { prefixCls, className, style, iconClassName } = props;
    const mergedIconCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-loading-icon"), className);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$IconWrapper$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        className: mergedIconCls,
        style: style,
        ref: ref
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        className: iconClassName
    }));
});
const getCollapsedWidth = ()=>({
        width: 0,
        opacity: 0,
        transform: 'scale(0)'
    });
const getRealWidth = (node)=>({
        width: node.scrollWidth,
        opacity: 1,
        transform: 'scale(1)'
    });
const DefaultLoadingIcon = (props)=>{
    const { prefixCls, loading, existIcon, className, style, mount } = props;
    const visible = !!loading;
    if (existIcon) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(InnerLoadingIcon, {
            prefixCls: prefixCls,
            className: className,
            style: style
        });
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        visible: visible,
        // Used for minus flex gap style only
        motionName: "".concat(prefixCls, "-loading-icon-motion"),
        motionAppear: !mount,
        motionEnter: !mount,
        motionLeave: !mount,
        removeOnLeave: true,
        onAppearStart: getCollapsedWidth,
        onAppearActive: getRealWidth,
        onEnterStart: getCollapsedWidth,
        onEnterActive: getRealWidth,
        onLeaveStart: getRealWidth,
        onLeaveActive: getCollapsedWidth
    }, (param, ref)=>{
        let { className: motionCls, style: motionStyle } = param;
        const mergedStyle = Object.assign(Object.assign({}, style), motionStyle);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(InnerLoadingIcon, {
            prefixCls: prefixCls,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, motionCls),
            style: mergedStyle,
            ref: ref
        });
    });
};
const __TURBOPACK__default__export__ = DefaultLoadingIcon;
}),
"[project]/Downloads/One click/node_modules/antd/es/button/style/group.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const genButtonBorderStyle = (buttonTypeCls, borderColor)=>({
        // Border
        ["> span, > ".concat(buttonTypeCls)]: {
            '&:not(:last-child)': {
                ["&, & > ".concat(buttonTypeCls)]: {
                    '&:not(:disabled)': {
                        borderInlineEndColor: borderColor
                    }
                }
            },
            '&:not(:first-child)': {
                ["&, & > ".concat(buttonTypeCls)]: {
                    '&:not(:disabled)': {
                        borderInlineStartColor: borderColor
                    }
                }
            }
        }
    });
const genGroupStyle = (token)=>{
    const { componentCls, fontSize, lineWidth, groupBorderColor, colorErrorHover } = token;
    return {
        ["".concat(componentCls, "-group")]: [
            {
                position: 'relative',
                display: 'inline-flex',
                // Border
                ["> span, > ".concat(componentCls)]: {
                    '&:not(:last-child)': {
                        ["&, & > ".concat(componentCls)]: {
                            borderStartEndRadius: 0,
                            borderEndEndRadius: 0
                        }
                    },
                    '&:not(:first-child)': {
                        marginInlineStart: token.calc(lineWidth).mul(-1).equal(),
                        ["&, & > ".concat(componentCls)]: {
                            borderStartStartRadius: 0,
                            borderEndStartRadius: 0
                        }
                    }
                },
                [componentCls]: {
                    position: 'relative',
                    zIndex: 1,
                    '&:hover, &:focus, &:active': {
                        zIndex: 2
                    },
                    '&[disabled]': {
                        zIndex: 0
                    }
                },
                ["".concat(componentCls, "-icon-only")]: {
                    fontSize
                }
            },
            // Border Color
            genButtonBorderStyle("".concat(componentCls, "-primary"), groupBorderColor),
            genButtonBorderStyle("".concat(componentCls, "-danger"), colorErrorHover)
        ]
    };
};
const __TURBOPACK__default__export__ = genGroupStyle;
}),
"[project]/Downloads/One click/node_modules/antd/es/color-picker/color.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AggregationColor",
    ()=>AggregationColor,
    "getHex",
    ()=>getHex,
    "toHexFormat",
    ()=>toHexFormat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/createClass.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@rc-component/color-picker/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@rc-component/color-picker/es/color.js [client] (ecmascript)");
;
;
;
const toHexFormat = (value, alpha)=>(value === null || value === void 0 ? void 0 : value.replace(/[^\w/]/g, '').slice(0, alpha ? 8 : 6)) || '';
const getHex = (value, alpha)=>value ? toHexFormat(value, alpha) : '';
let AggregationColor = /*#__PURE__*/ function() {
    function AggregationColor(color) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(this, AggregationColor);
        var _a;
        this.cleared = false;
        // Clone from another AggregationColor
        if (color instanceof AggregationColor) {
            this.metaColor = color.metaColor.clone();
            this.colors = (_a = color.colors) === null || _a === void 0 ? void 0 : _a.map((info)=>({
                    color: new AggregationColor(info.color),
                    percent: info.percent
                }));
            this.cleared = color.cleared;
            return;
        }
        const isArray = Array.isArray(color);
        if (isArray && color.length) {
            this.colors = color.map((param)=>{
                let { color: c, percent } = param;
                return {
                    color: new AggregationColor(c),
                    percent
                };
            });
            this.metaColor = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Color"](this.colors[0].color.metaColor);
        } else {
            this.metaColor = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Color"](isArray ? '' : color);
        }
        if (!color || isArray && !this.colors) {
            this.metaColor = this.metaColor.setA(0);
            this.cleared = true;
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(AggregationColor, [
        {
            key: "toHsb",
            value: function toHsb() {
                return this.metaColor.toHsb();
            }
        },
        {
            key: "toHsbString",
            value: function toHsbString() {
                return this.metaColor.toHsbString();
            }
        },
        {
            key: "toHex",
            value: function toHex() {
                return getHex(this.toHexString(), this.metaColor.a < 1);
            }
        },
        {
            key: "toHexString",
            value: function toHexString() {
                return this.metaColor.toHexString();
            }
        },
        {
            key: "toRgb",
            value: function toRgb() {
                return this.metaColor.toRgb();
            }
        },
        {
            key: "toRgbString",
            value: function toRgbString() {
                return this.metaColor.toRgbString();
            }
        },
        {
            key: "isGradient",
            value: function isGradient() {
                return !!this.colors && !this.cleared;
            }
        },
        {
            key: "getColors",
            value: function getColors() {
                return this.colors || [
                    {
                        color: this,
                        percent: 0
                    }
                ];
            }
        },
        {
            key: "toCssString",
            value: function toCssString() {
                const { colors } = this;
                // CSS line-gradient
                if (colors) {
                    const colorsStr = colors.map((c)=>"".concat(c.color.toRgbString(), " ").concat(c.percent, "%")).join(', ');
                    return "linear-gradient(90deg, ".concat(colorsStr, ")");
                }
                return this.metaColor.toRgbString();
            }
        },
        {
            key: "equals",
            value: function equals(color) {
                if (!color || this.isGradient() !== color.isGradient()) {
                    return false;
                }
                if (!this.isGradient()) {
                    return this.toHexString() === color.toHexString();
                }
                return this.colors.length === color.colors.length && this.colors.every((c, i)=>{
                    const target = color.colors[i];
                    return c.percent === target.percent && c.color.equals(target.color);
                });
            }
        }
    ]);
}();
}),
"[project]/Downloads/One click/node_modules/antd/es/collapse/CollapsePanel.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$collapse$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-collapse/es/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
"use client";
;
;
;
;
;
const CollapsePanel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Collapse.Panel');
        warning.deprecated(!('disabled' in props), 'disabled', 'collapsible="disabled"');
    }
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { prefixCls: customizePrefixCls, className, showArrow = true } = props;
    const prefixCls = getPrefixCls('collapse', customizePrefixCls);
    const collapsePanelClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        ["".concat(prefixCls, "-no-arrow")]: !showArrow
    }, className);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$collapse$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Panel, Object.assign({
        ref: ref
    }, props, {
        prefixCls: prefixCls,
        className: collapsePanelClassName
    }));
});
const __TURBOPACK__default__export__ = CollapsePanel;
}),
"[project]/Downloads/One click/node_modules/antd/es/style/motion/collapse.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const genCollapseMotion = (token)=>({
        [token.componentCls]: {
            // For common/openAnimation
            ["".concat(token.antCls, "-motion-collapse-legacy")]: {
                overflow: 'hidden',
                '&-active': {
                    transition: "height ".concat(token.motionDurationMid, " ").concat(token.motionEaseInOut, ",\n        opacity ").concat(token.motionDurationMid, " ").concat(token.motionEaseInOut, " !important")
                }
            },
            ["".concat(token.antCls, "-motion-collapse")]: {
                overflow: 'hidden',
                transition: "height ".concat(token.motionDurationMid, " ").concat(token.motionEaseInOut, ",\n        opacity ").concat(token.motionDurationMid, " ").concat(token.motionEaseInOut, " !important")
            }
        }
    });
const __TURBOPACK__default__export__ = genCollapseMotion;
}),
"[project]/Downloads/One click/node_modules/antd/es/style/motion/collapse.js [client] (ecmascript) <export default as genCollapseMotion>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genCollapseMotion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/motion/collapse.js [client] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/antd/es/collapse/style/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "genBaseStyle",
    ()=>genBaseStyle,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genCollapseMotion$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/motion/collapse.js [client] (ecmascript) <export default as genCollapseMotion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [client] (ecmascript) <export merge as mergeToken>");
;
;
;
;
const genBaseStyle = (token)=>{
    const { componentCls, contentBg, padding, headerBg, headerPadding, collapseHeaderPaddingSM, collapseHeaderPaddingLG, collapsePanelBorderRadius, lineWidth, lineType, colorBorder, colorText, colorTextHeading, colorTextDisabled, fontSizeLG, lineHeight, lineHeightLG, marginSM, paddingSM, paddingLG, paddingXS, motionDurationSlow, fontSizeIcon, contentPadding, fontHeight, fontHeightLG } = token;
    const borderBase = "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth), " ").concat(lineType, " ").concat(colorBorder);
    return {
        [componentCls]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["resetComponent"])(token)), {
            backgroundColor: headerBg,
            border: borderBase,
            borderRadius: collapsePanelBorderRadius,
            '&-rtl': {
                direction: 'rtl'
            },
            ["& > ".concat(componentCls, "-item")]: {
                borderBottom: borderBase,
                '&:first-child': {
                    ["\n            &,\n            & > ".concat(componentCls, "-header")]: {
                        borderRadius: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(collapsePanelBorderRadius), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(collapsePanelBorderRadius), " 0 0")
                    }
                },
                '&:last-child': {
                    ["\n            &,\n            & > ".concat(componentCls, "-header")]: {
                        borderRadius: "0 0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(collapsePanelBorderRadius), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(collapsePanelBorderRadius))
                    }
                },
                ["> ".concat(componentCls, "-header")]: Object.assign(Object.assign({
                    position: 'relative',
                    display: 'flex',
                    flexWrap: 'nowrap',
                    alignItems: 'flex-start',
                    padding: headerPadding,
                    color: colorTextHeading,
                    lineHeight,
                    cursor: 'pointer',
                    transition: "all ".concat(motionDurationSlow, ", visibility 0s")
                }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token)), {
                    ["> ".concat(componentCls, "-header-text")]: {
                        flex: 'auto'
                    },
                    // >>>>> Arrow
                    ["".concat(componentCls, "-expand-icon")]: {
                        height: fontHeight,
                        display: 'flex',
                        alignItems: 'center',
                        paddingInlineEnd: marginSM
                    },
                    ["".concat(componentCls, "-arrow")]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["resetIcon"])()), {
                        fontSize: fontSizeIcon,
                        // when `transform: rotate()` is applied to icon's root element
                        transition: "transform ".concat(motionDurationSlow),
                        // when `transform: rotate()` is applied to icon's child element
                        svg: {
                            transition: "transform ".concat(motionDurationSlow)
                        }
                    }),
                    // >>>>> Text
                    ["".concat(componentCls, "-header-text")]: {
                        marginInlineEnd: 'auto'
                    }
                }),
                ["".concat(componentCls, "-collapsible-header")]: {
                    cursor: 'default',
                    ["".concat(componentCls, "-header-text")]: {
                        flex: 'none',
                        cursor: 'pointer'
                    },
                    ["".concat(componentCls, "-expand-icon")]: {
                        cursor: 'pointer'
                    }
                },
                ["".concat(componentCls, "-collapsible-icon")]: {
                    cursor: 'unset',
                    ["".concat(componentCls, "-expand-icon")]: {
                        cursor: 'pointer'
                    }
                }
            },
            ["".concat(componentCls, "-content")]: {
                color: colorText,
                backgroundColor: contentBg,
                borderTop: borderBase,
                ["& > ".concat(componentCls, "-content-box")]: {
                    padding: contentPadding
                },
                '&-hidden': {
                    display: 'none'
                }
            },
            '&-small': {
                ["> ".concat(componentCls, "-item")]: {
                    ["> ".concat(componentCls, "-header")]: {
                        padding: collapseHeaderPaddingSM,
                        paddingInlineStart: paddingXS,
                        ["> ".concat(componentCls, "-expand-icon")]: {
                            // Arrow offset
                            marginInlineStart: token.calc(paddingSM).sub(paddingXS).equal()
                        }
                    },
                    ["> ".concat(componentCls, "-content > ").concat(componentCls, "-content-box")]: {
                        padding: paddingSM
                    }
                }
            },
            '&-large': {
                ["> ".concat(componentCls, "-item")]: {
                    fontSize: fontSizeLG,
                    lineHeight: lineHeightLG,
                    ["> ".concat(componentCls, "-header")]: {
                        padding: collapseHeaderPaddingLG,
                        paddingInlineStart: padding,
                        ["> ".concat(componentCls, "-expand-icon")]: {
                            height: fontHeightLG,
                            // Arrow offset
                            marginInlineStart: token.calc(paddingLG).sub(padding).equal()
                        }
                    },
                    ["> ".concat(componentCls, "-content > ").concat(componentCls, "-content-box")]: {
                        padding: paddingLG
                    }
                }
            },
            ["".concat(componentCls, "-item:last-child")]: {
                borderBottom: 0,
                ["> ".concat(componentCls, "-content")]: {
                    borderRadius: "0 0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(collapsePanelBorderRadius), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(collapsePanelBorderRadius))
                }
            },
            ["& ".concat(componentCls, "-item-disabled > ").concat(componentCls, "-header")]: {
                ["\n          &,\n          & > .arrow\n        "]: {
                    color: colorTextDisabled,
                    cursor: 'not-allowed'
                }
            },
            // ========================== Icon Position ==========================
            ["&".concat(componentCls, "-icon-position-end")]: {
                ["& > ".concat(componentCls, "-item")]: {
                    ["> ".concat(componentCls, "-header")]: {
                        ["".concat(componentCls, "-expand-icon")]: {
                            order: 1,
                            paddingInlineEnd: 0,
                            paddingInlineStart: marginSM
                        }
                    }
                }
            }
        })
    };
};
const genArrowStyle = (token)=>{
    const { componentCls } = token;
    const fixedSelector = "> ".concat(componentCls, "-item > ").concat(componentCls, "-header ").concat(componentCls, "-arrow");
    return {
        ["".concat(componentCls, "-rtl")]: {
            [fixedSelector]: {
                transform: "rotate(180deg)"
            }
        }
    };
};
const genBorderlessStyle = (token)=>{
    const { componentCls, headerBg, borderlessContentPadding, borderlessContentBg, colorBorder } = token;
    return {
        ["".concat(componentCls, "-borderless")]: {
            backgroundColor: headerBg,
            border: 0,
            ["> ".concat(componentCls, "-item")]: {
                borderBottom: "1px solid ".concat(colorBorder)
            },
            ["\n        > ".concat(componentCls, "-item:last-child,\n        > ").concat(componentCls, "-item:last-child ").concat(componentCls, "-header\n      ")]: {
                borderRadius: 0
            },
            ["> ".concat(componentCls, "-item:last-child")]: {
                borderBottom: 0
            },
            ["> ".concat(componentCls, "-item > ").concat(componentCls, "-content")]: {
                backgroundColor: borderlessContentBg,
                borderTop: 0
            },
            ["> ".concat(componentCls, "-item > ").concat(componentCls, "-content > ").concat(componentCls, "-content-box")]: {
                padding: borderlessContentPadding
            }
        }
    };
};
const genGhostStyle = (token)=>{
    const { componentCls, paddingSM } = token;
    return {
        ["".concat(componentCls, "-ghost")]: {
            backgroundColor: 'transparent',
            border: 0,
            ["> ".concat(componentCls, "-item")]: {
                borderBottom: 0,
                ["> ".concat(componentCls, "-content")]: {
                    backgroundColor: 'transparent',
                    border: 0,
                    ["> ".concat(componentCls, "-content-box")]: {
                        paddingBlock: paddingSM
                    }
                }
            }
        }
    };
};
const prepareComponentToken = (token)=>({
        headerPadding: "".concat(token.paddingSM, "px ").concat(token.padding, "px"),
        headerBg: token.colorFillAlter,
        contentPadding: "".concat(token.padding, "px 16px"),
        // Fixed Value
        contentBg: token.colorBgContainer,
        borderlessContentPadding: "".concat(token.paddingXXS, "px 16px ").concat(token.padding, "px"),
        borderlessContentBg: 'transparent'
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Collapse', (token)=>{
    const collapseToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        collapseHeaderPaddingSM: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingXS), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingSM)),
        collapseHeaderPaddingLG: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(token.padding), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingLG)),
        collapsePanelBorderRadius: token.borderRadiusLG
    });
    return [
        genBaseStyle(collapseToken),
        genBorderlessStyle(collapseToken),
        genGhostStyle(collapseToken),
        genArrowStyle(collapseToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genCollapseMotion$3e$__["genCollapseMotion"])(collapseToken)
    ];
}, prepareComponentToken);
}),
"[project]/Downloads/One click/node_modules/antd/es/collapse/Collapse.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/RightOutlined.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$collapse$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-collapse/es/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Children/toArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/omit.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/motion.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/reactNode.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useSize.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$CollapsePanel$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/collapse/CollapsePanel.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/collapse/style/index.js [client] (ecmascript)");
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
const Collapse = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { getPrefixCls, direction, expandIcon: contextExpandIcon, className: contextClassName, style: contextStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('collapse');
    const { prefixCls: customizePrefixCls, className, rootClassName, style, bordered = true, ghost, size: customizeSize, expandIconPosition = 'start', children, destroyInactivePanel, destroyOnHidden, expandIcon } = props;
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "Collapse.useSize[mergedSize]": (ctx)=>{
            var _a;
            return (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : ctx) !== null && _a !== void 0 ? _a : 'middle';
        }
    }["Collapse.useSize[mergedSize]"]);
    const prefixCls = getPrefixCls('collapse', customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Collapse');
        // Warning if use legacy type `expandIconPosition`
        ("TURBOPACK compile-time truthy", 1) ? warning(expandIconPosition !== 'left' && expandIconPosition !== 'right', 'deprecated', '`expandIconPosition` with `left` or `right` is deprecated. Please use `start` or `end` instead.') : "TURBOPACK unreachable";
        warning.deprecated(!('destroyInactivePanel' in props), 'destroyInactivePanel', 'destroyOnHidden');
    }
    // Align with logic position
    const mergedExpandIconPosition = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Collapse.useMemo[mergedExpandIconPosition]": ()=>{
            if (expandIconPosition === 'left') {
                return 'start';
            }
            return expandIconPosition === 'right' ? 'end' : expandIconPosition;
        }
    }["Collapse.useMemo[mergedExpandIconPosition]"], [
        expandIconPosition
    ]);
    const mergedExpandIcon = expandIcon !== null && expandIcon !== void 0 ? expandIcon : contextExpandIcon;
    const renderExpandIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Collapse.useCallback[renderExpandIcon]": function() {
            let panelProps = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            const icon = typeof mergedExpandIcon === 'function' ? mergedExpandIcon(panelProps) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                rotate: panelProps.isActive ? direction === 'rtl' ? -90 : 90 : undefined,
                "aria-label": panelProps.isActive ? 'expanded' : 'collapsed'
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cloneElement"])(icon, {
                "Collapse.useCallback[renderExpandIcon]": ()=>{
                    var _a;
                    return {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((_a = icon.props) === null || _a === void 0 ? void 0 : _a.className, "".concat(prefixCls, "-arrow"))
                    };
                }
            }["Collapse.useCallback[renderExpandIcon]"]);
        }
    }["Collapse.useCallback[renderExpandIcon]"], [
        mergedExpandIcon,
        prefixCls,
        direction
    ]);
    const collapseClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-icon-position-").concat(mergedExpandIconPosition), {
        ["".concat(prefixCls, "-borderless")]: !bordered,
        ["".concat(prefixCls, "-rtl")]: direction === 'rtl',
        ["".concat(prefixCls, "-ghost")]: !!ghost,
        ["".concat(prefixCls, "-").concat(mergedSize)]: mergedSize !== 'middle'
    }, contextClassName, className, rootClassName, hashId, cssVarCls);
    const openMotion = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Collapse.useMemo[openMotion]": ()=>Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(rootPrefixCls)), {
                motionAppear: false,
                leavedClassName: "".concat(prefixCls, "-content-hidden")
            })
    }["Collapse.useMemo[openMotion]"], [
        rootPrefixCls,
        prefixCls
    ]);
    const items = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Collapse.useMemo[items]": ()=>{
            if (!children) {
                return null;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(children).map({
                "Collapse.useMemo[items]": (child, index)=>{
                    var _a, _b;
                    const childProps = child.props;
                    if (childProps === null || childProps === void 0 ? void 0 : childProps.disabled) {
                        const key = (_a = child.key) !== null && _a !== void 0 ? _a : String(index);
                        const mergedChildProps = Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(child.props, [
                            'disabled'
                        ])), {
                            key,
                            collapsible: (_b = childProps.collapsible) !== null && _b !== void 0 ? _b : 'disabled'
                        });
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, mergedChildProps);
                    }
                    return child;
                }
            }["Collapse.useMemo[items]"]);
        }
    }["Collapse.useMemo[items]"], [
        children
    ]);
    return wrapCSSVar(/*#__PURE__*/ // @ts-ignore
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$collapse$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], Object.assign({
        ref: ref,
        openMotion: openMotion
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, [
        'rootClassName'
    ]), {
        expandIcon: renderExpandIcon,
        prefixCls: prefixCls,
        className: collapseClassName,
        style: Object.assign(Object.assign({}, contextStyle), style),
        // TODO: In the future, destroyInactivePanel in rc-collapse needs to be upgrade to destroyOnHidden
        destroyInactivePanel: destroyOnHidden !== null && destroyOnHidden !== void 0 ? destroyOnHidden : destroyInactivePanel
    }), items));
});
if ("TURBOPACK compile-time truthy", 1) {
    Collapse.displayName = 'Collapse';
}
const __TURBOPACK__default__export__ = Object.assign(Collapse, {
    Panel: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$CollapsePanel$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
});
}),
"[project]/Downloads/One click/node_modules/antd/es/collapse/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$Collapse$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/collapse/Collapse.js [client] (ecmascript)");
"use client";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$Collapse$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Downloads/One click/node_modules/antd/es/color-picker/util.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genAlphaColor",
    ()=>genAlphaColor,
    "generateColor",
    ()=>generateColor,
    "getColorAlpha",
    ()=>getColorAlpha,
    "getGradientPercentColor",
    ()=>getGradientPercentColor,
    "getRoundNumber",
    ()=>getRoundNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@rc-component/color-picker/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@rc-component/color-picker/es/color.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/color-picker/color.js [client] (ecmascript)");
;
;
;
const generateColor = (color)=>{
    if (color instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__["AggregationColor"]) {
        return color;
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__["AggregationColor"](color);
};
const getRoundNumber = (value)=>Math.round(Number(value || 0));
const getColorAlpha = (color)=>getRoundNumber(color.toHsb().a * 100);
const genAlphaColor = (color, alpha)=>{
    const rgba = color.toRgb();
    // Color from hsb input may get `rgb` is (0/0/0) when `hsb.b` is 0
    // So if rgb is empty, we should get from hsb
    if (!rgba.r && !rgba.g && !rgba.b) {
        const hsba = color.toHsb();
        hsba.a = alpha || 1;
        return generateColor(hsba);
    }
    rgba.a = alpha || 1;
    return generateColor(rgba);
};
const getGradientPercentColor = (colors, percent)=>{
    const filledColors = [
        {
            percent: 0,
            color: colors[0].color
        }
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(colors), [
        {
            percent: 100,
            color: colors[colors.length - 1].color
        }
    ]);
    for(let i = 0; i < filledColors.length - 1; i += 1){
        const startPtg = filledColors[i].percent;
        const endPtg = filledColors[i + 1].percent;
        const startColor = filledColors[i].color;
        const endColor = filledColors[i + 1].color;
        if (startPtg <= percent && percent <= endPtg) {
            const dist = endPtg - startPtg;
            if (dist === 0) {
                return startColor;
            }
            const ratio = (percent - startPtg) / dist * 100;
            const startRcColor = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Color"](startColor);
            const endRcColor = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Color"](endColor);
            return startRcColor.mix(endRcColor, ratio).toRgbString();
        }
    }
    // This will never reach
    /* istanbul ignore next */ return '';
};
}),
"[project]/Downloads/One click/node_modules/antd/es/color-picker/components/ColorPresets.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isBright",
    ()=>isBright
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@rc-component/color-picker/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$components$2f$ColorBlock$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ColorBlock$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@rc-component/color-picker/es/components/ColorBlock.js [client] (ecmascript) <export default as ColorBlock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@rc-component/color-picker/es/color.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useMergedState.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/collapse/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/locale/useLocale.js [client] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/useToken.js [client] (ecmascript) <export default as useToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/color-picker/util.js [client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const genPresetColor = (list)=>list.map((value)=>{
        value.colors = value.colors.map(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$client$5d$__$28$ecmascript$29$__["generateColor"]);
        return value;
    });
const isBright = (value, bgColorToken)=>{
    const { r, g, b, a } = value.toRgb();
    const hsv = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Color"](value.toRgbString()).onBackground(bgColorToken).toHsv();
    if (a <= 0.5) {
        // Adapted to dark mode
        return hsv.v > 0.5;
    }
    return r * 0.299 + g * 0.587 + b * 0.114 > 192;
};
const genCollapsePanelKey = (preset, index)=>{
    var _a;
    const mergedKey = (_a = preset.key) !== null && _a !== void 0 ? _a : index;
    return "panel-".concat(mergedKey);
};
const ColorPresets = (param)=>{
    let { prefixCls, presets, value: color, onChange } = param;
    const [locale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('ColorPicker');
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const [presetsValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(genPresetColor(presets), {
        value: genPresetColor(presets),
        postState: genPresetColor
    });
    const colorPresetsPrefixCls = "".concat(prefixCls, "-presets");
    const activeKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ColorPresets.useMemo[activeKeys]": ()=>presetsValue.reduce({
                "ColorPresets.useMemo[activeKeys]": (acc, preset, index)=>{
                    const { defaultOpen = true } = preset;
                    if (defaultOpen) {
                        acc.push(genCollapsePanelKey(preset, index));
                    }
                    return acc;
                }
            }["ColorPresets.useMemo[activeKeys]"], [])
    }["ColorPresets.useMemo[activeKeys]"], [
        presetsValue
    ]);
    const handleClick = (colorValue)=>{
        onChange === null || onChange === void 0 ? void 0 : onChange(colorValue);
    };
    const items = presetsValue.map((preset, index)=>{
        var _a;
        return {
            key: genCollapsePanelKey(preset, index),
            label: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "".concat(colorPresetsPrefixCls, "-label")
            }, preset === null || preset === void 0 ? void 0 : preset.label),
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "".concat(colorPresetsPrefixCls, "-items")
            }, Array.isArray(preset === null || preset === void 0 ? void 0 : preset.colors) && ((_a = preset.colors) === null || _a === void 0 ? void 0 : _a.length) > 0 ? preset.colors.map((presetColor, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$components$2f$ColorBlock$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ColorBlock$3e$__["ColorBlock"], {
                    // eslint-disable-next-line react/no-array-index-key
                    key: "preset-".concat(index, "-").concat(presetColor.toHexString()),
                    color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$client$5d$__$28$ecmascript$29$__["generateColor"])(presetColor).toRgbString(),
                    prefixCls: prefixCls,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(colorPresetsPrefixCls, "-color"), {
                        ["".concat(colorPresetsPrefixCls, "-color-checked")]: presetColor.toHexString() === (color === null || color === void 0 ? void 0 : color.toHexString()),
                        ["".concat(colorPresetsPrefixCls, "-color-bright")]: isBright(presetColor, token.colorBgElevated)
                    }),
                    onClick: ()=>handleClick(presetColor)
                })) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                className: "".concat(colorPresetsPrefixCls, "-empty")
            }, locale.presetEmpty))
        };
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: colorPresetsPrefixCls
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        defaultActiveKey: activeKeys,
        ghost: true,
        items: items
    }));
};
const __TURBOPACK__default__export__ = ColorPresets;
}),
"[project]/Downloads/One click/node_modules/antd/es/button/style/token.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prepareComponentToken",
    ()=>prepareComponentToken,
    "prepareToken",
    ()=>prepareToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/color-picker/color.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorPresets$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/color-picker/components/ColorPresets.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontSizes$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/themes/shared/genFontSizes.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/interface/presetColors.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/getAlphaColor.js [client] (ecmascript)");
;
;
;
;
;
;
const prepareToken = (token)=>{
    const { paddingInline, onlyIconSize } = token;
    const buttonToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        buttonPaddingHorizontal: paddingInline,
        buttonPaddingVertical: 0,
        buttonIconOnlyFontSize: onlyIconSize
    });
    return buttonToken;
};
const prepareComponentToken = (token)=>{
    var _a, _b, _c, _d, _e, _f;
    const contentFontSize = (_a = token.contentFontSize) !== null && _a !== void 0 ? _a : token.fontSize;
    const contentFontSizeSM = (_b = token.contentFontSizeSM) !== null && _b !== void 0 ? _b : token.fontSize;
    const contentFontSizeLG = (_c = token.contentFontSizeLG) !== null && _c !== void 0 ? _c : token.fontSizeLG;
    const contentLineHeight = (_d = token.contentLineHeight) !== null && _d !== void 0 ? _d : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontSizes$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getLineHeight"])(contentFontSize);
    const contentLineHeightSM = (_e = token.contentLineHeightSM) !== null && _e !== void 0 ? _e : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontSizes$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getLineHeight"])(contentFontSizeSM);
    const contentLineHeightLG = (_f = token.contentLineHeightLG) !== null && _f !== void 0 ? _f : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontSizes$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getLineHeight"])(contentFontSizeLG);
    const solidTextColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorPresets$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isBright"])(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$client$5d$__$28$ecmascript$29$__["AggregationColor"](token.colorBgSolid), '#fff') ? '#000' : '#fff';
    const shadowColorTokens = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$client$5d$__$28$ecmascript$29$__["PresetColors"].reduce((prev, colorKey)=>Object.assign(Object.assign({}, prev), {
            ["".concat(colorKey, "ShadowColor")]: "0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(token.controlOutlineWidth), " 0 ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(token["".concat(colorKey, "1")], token.colorBgContainer))
        }), {});
    return Object.assign(Object.assign({}, shadowColorTokens), {
        fontWeight: 400,
        iconGap: token.marginXS,
        defaultShadow: "0 ".concat(token.controlOutlineWidth, "px 0 ").concat(token.controlTmpOutline),
        primaryShadow: "0 ".concat(token.controlOutlineWidth, "px 0 ").concat(token.controlOutline),
        dangerShadow: "0 ".concat(token.controlOutlineWidth, "px 0 ").concat(token.colorErrorOutline),
        primaryColor: token.colorTextLightSolid,
        dangerColor: token.colorTextLightSolid,
        borderColorDisabled: token.colorBorder,
        defaultGhostColor: token.colorBgContainer,
        ghostBg: 'transparent',
        defaultGhostBorderColor: token.colorBgContainer,
        paddingInline: token.paddingContentHorizontal - token.lineWidth,
        paddingInlineLG: token.paddingContentHorizontal - token.lineWidth,
        paddingInlineSM: 8 - token.lineWidth,
        onlyIconSize: 'inherit',
        onlyIconSizeSM: 'inherit',
        onlyIconSizeLG: 'inherit',
        groupBorderColor: token.colorPrimaryHover,
        linkHoverBg: 'transparent',
        textTextColor: token.colorText,
        textTextHoverColor: token.colorText,
        textTextActiveColor: token.colorText,
        textHoverBg: token.colorFillTertiary,
        defaultColor: token.colorText,
        defaultBg: token.colorBgContainer,
        defaultBorderColor: token.colorBorder,
        defaultBorderColorDisabled: token.colorBorder,
        defaultHoverBg: token.colorBgContainer,
        defaultHoverColor: token.colorPrimaryHover,
        defaultHoverBorderColor: token.colorPrimaryHover,
        defaultActiveBg: token.colorBgContainer,
        defaultActiveColor: token.colorPrimaryActive,
        defaultActiveBorderColor: token.colorPrimaryActive,
        solidTextColor,
        contentFontSize,
        contentFontSizeSM,
        contentFontSizeLG,
        contentLineHeight,
        contentLineHeightSM,
        contentLineHeightLG,
        paddingBlock: Math.max((token.controlHeight - contentFontSize * contentLineHeight) / 2 - token.lineWidth, 0),
        paddingBlockSM: Math.max((token.controlHeightSM - contentFontSizeSM * contentLineHeightSM) / 2 - token.lineWidth, 0),
        paddingBlockLG: Math.max((token.controlHeightLG - contentFontSizeLG * contentLineHeightLG) / 2 - token.lineWidth, 0)
    });
};
}),
"[project]/Downloads/One click/node_modules/antd/es/button/style/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/interface/presetColors.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$group$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/button/style/group.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$token$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/button/style/token.js [client] (ecmascript)");
;
;
;
;
;
;
// ============================== Shared ==============================
const genSharedButtonStyle = (token)=>{
    const { componentCls, iconCls, fontWeight, opacityLoading, motionDurationSlow, motionEaseInOut, iconGap, calc } = token;
    return {
        [componentCls]: {
            outline: 'none',
            position: 'relative',
            display: 'inline-flex',
            gap: iconGap,
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight,
            whiteSpace: 'nowrap',
            textAlign: 'center',
            backgroundImage: 'none',
            background: 'transparent',
            border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth), " ").concat(token.lineType, " transparent"),
            cursor: 'pointer',
            transition: "all ".concat(token.motionDurationMid, " ").concat(token.motionEaseInOut),
            userSelect: 'none',
            touchAction: 'manipulation',
            color: token.colorText,
            '&:disabled > *': {
                pointerEvents: 'none'
            },
            // https://github.com/ant-design/ant-design/issues/51380
            ["".concat(componentCls, "-icon > svg")]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["resetIcon"])(),
            '> a': {
                color: 'currentColor'
            },
            '&:not(:disabled)': (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token),
            ["&".concat(componentCls, "-two-chinese-chars::first-letter")]: {
                letterSpacing: '0.34em'
            },
            ["&".concat(componentCls, "-two-chinese-chars > *:not(").concat(iconCls, ")")]: {
                marginInlineEnd: '-0.34em',
                letterSpacing: '0.34em'
            },
            ["&".concat(componentCls, "-icon-only")]: {
                paddingInline: 0,
                // make `btn-icon-only` not too narrow
                ["&".concat(componentCls, "-compact-item")]: {
                    flex: 'none'
                }
            },
            // Loading
            ["&".concat(componentCls, "-loading")]: {
                opacity: opacityLoading,
                cursor: 'default'
            },
            ["".concat(componentCls, "-loading-icon")]: {
                transition: [
                    'width',
                    'opacity',
                    'margin'
                ].map((transition)=>"".concat(transition, " ").concat(motionDurationSlow, " ").concat(motionEaseInOut)).join(',')
            },
            // iconPosition
            ["&:not(".concat(componentCls, "-icon-end)")]: {
                ["".concat(componentCls, "-loading-icon-motion")]: {
                    '&-appear-start, &-enter-start': {
                        marginInlineEnd: calc(iconGap).mul(-1).equal()
                    },
                    '&-appear-active, &-enter-active': {
                        marginInlineEnd: 0
                    },
                    '&-leave-start': {
                        marginInlineEnd: 0
                    },
                    '&-leave-active': {
                        marginInlineEnd: calc(iconGap).mul(-1).equal()
                    }
                }
            },
            '&-icon-end': {
                flexDirection: 'row-reverse',
                ["".concat(componentCls, "-loading-icon-motion")]: {
                    '&-appear-start, &-enter-start': {
                        marginInlineStart: calc(iconGap).mul(-1).equal()
                    },
                    '&-appear-active, &-enter-active': {
                        marginInlineStart: 0
                    },
                    '&-leave-start': {
                        marginInlineStart: 0
                    },
                    '&-leave-active': {
                        marginInlineStart: calc(iconGap).mul(-1).equal()
                    }
                }
            }
        }
    };
};
const genHoverActiveButtonStyle = (btnCls, hoverStyle, activeStyle)=>({
        ["&:not(:disabled):not(".concat(btnCls, "-disabled)")]: {
            '&:hover': hoverStyle,
            '&:active': activeStyle
        }
    });
// ============================== Shape ===============================
const genCircleButtonStyle = (token)=>({
        minWidth: token.controlHeight,
        paddingInline: 0,
        borderRadius: '50%'
    });
const genDisabledStyle = (token)=>({
        cursor: 'not-allowed',
        borderColor: token.borderColorDisabled,
        color: token.colorTextDisabled,
        background: token.colorBgContainerDisabled,
        boxShadow: 'none'
    });
const genGhostButtonStyle = (btnCls, background, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle)=>({
        ["&".concat(btnCls, "-background-ghost")]: Object.assign(Object.assign({
            color: textColor || undefined,
            background,
            borderColor: borderColor || undefined,
            boxShadow: 'none'
        }, genHoverActiveButtonStyle(btnCls, Object.assign({
            background
        }, hoverStyle), Object.assign({
            background
        }, activeStyle))), {
            '&:disabled': {
                cursor: 'not-allowed',
                color: textColorDisabled || undefined,
                borderColor: borderColorDisabled || undefined
            }
        })
    });
const genSolidDisabledButtonStyle = (token)=>({
        ["&:disabled, &".concat(token.componentCls, "-disabled")]: Object.assign({}, genDisabledStyle(token))
    });
const genPureDisabledButtonStyle = (token)=>({
        ["&:disabled, &".concat(token.componentCls, "-disabled")]: {
            cursor: 'not-allowed',
            color: token.colorTextDisabled
        }
    });
// ============================== Variant =============================
const genVariantButtonStyle = (token, hoverStyle, activeStyle, variant)=>{
    const isPureDisabled = variant && [
        'link',
        'text'
    ].includes(variant);
    const genDisabledButtonStyle = isPureDisabled ? genPureDisabledButtonStyle : genSolidDisabledButtonStyle;
    return Object.assign(Object.assign({}, genDisabledButtonStyle(token)), genHoverActiveButtonStyle(token.componentCls, hoverStyle, activeStyle));
};
const genSolidButtonStyle = (token, textColor, background, hoverStyle, activeStyle)=>({
        ["&".concat(token.componentCls, "-variant-solid")]: Object.assign({
            color: textColor,
            background
        }, genVariantButtonStyle(token, hoverStyle, activeStyle))
    });
const genOutlinedDashedButtonStyle = (token, borderColor, background, hoverStyle, activeStyle)=>({
        ["&".concat(token.componentCls, "-variant-outlined, &").concat(token.componentCls, "-variant-dashed")]: Object.assign({
            borderColor,
            background
        }, genVariantButtonStyle(token, hoverStyle, activeStyle))
    });
const genDashedButtonStyle = (token)=>({
        ["&".concat(token.componentCls, "-variant-dashed")]: {
            borderStyle: 'dashed'
        }
    });
const genFilledButtonStyle = (token, background, hoverStyle, activeStyle)=>({
        ["&".concat(token.componentCls, "-variant-filled")]: Object.assign({
            boxShadow: 'none',
            background
        }, genVariantButtonStyle(token, hoverStyle, activeStyle))
    });
const genTextLinkButtonStyle = (token, textColor, variant, hoverStyle, activeStyle)=>({
        ["&".concat(token.componentCls, "-variant-").concat(variant)]: Object.assign({
            color: textColor,
            boxShadow: 'none'
        }, genVariantButtonStyle(token, hoverStyle, activeStyle, variant))
    });
// =============================== Color ==============================
const genPresetColorStyle = (token)=>{
    const { componentCls } = token;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$client$5d$__$28$ecmascript$29$__["PresetColors"].reduce((prev, colorKey)=>{
        const darkColor = token["".concat(colorKey, "6")];
        const lightColor = token["".concat(colorKey, "1")];
        const hoverColor = token["".concat(colorKey, "5")];
        const lightHoverColor = token["".concat(colorKey, "2")];
        const lightBorderColor = token["".concat(colorKey, "3")];
        const activeColor = token["".concat(colorKey, "7")];
        return Object.assign(Object.assign({}, prev), {
            ["&".concat(componentCls, "-color-").concat(colorKey)]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
                color: darkColor,
                boxShadow: token["".concat(colorKey, "ShadowColor")]
            }, genSolidButtonStyle(token, token.colorTextLightSolid, darkColor, {
                background: hoverColor
            }, {
                background: activeColor
            })), genOutlinedDashedButtonStyle(token, darkColor, token.colorBgContainer, {
                color: hoverColor,
                borderColor: hoverColor,
                background: token.colorBgContainer
            }, {
                color: activeColor,
                borderColor: activeColor,
                background: token.colorBgContainer
            })), genDashedButtonStyle(token)), genFilledButtonStyle(token, lightColor, {
                color: darkColor,
                background: lightHoverColor
            }, {
                color: darkColor,
                background: lightBorderColor
            })), genTextLinkButtonStyle(token, darkColor, 'link', {
                color: hoverColor
            }, {
                color: activeColor
            })), genTextLinkButtonStyle(token, darkColor, 'text', {
                color: hoverColor,
                background: lightColor
            }, {
                color: activeColor,
                background: lightBorderColor
            }))
        });
    }, {});
};
const genDefaultButtonStyle = (token)=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: token.defaultColor,
        boxShadow: token.defaultShadow
    }, genSolidButtonStyle(token, token.solidTextColor, token.colorBgSolid, {
        color: token.solidTextColor,
        background: token.colorBgSolidHover
    }, {
        color: token.solidTextColor,
        background: token.colorBgSolidActive
    })), genDashedButtonStyle(token)), genFilledButtonStyle(token, token.colorFillTertiary, {
        color: token.defaultColor,
        background: token.colorFillSecondary
    }, {
        color: token.defaultColor,
        background: token.colorFill
    })), genGhostButtonStyle(token.componentCls, token.ghostBg, token.defaultGhostColor, token.defaultGhostBorderColor, token.colorTextDisabled, token.colorBorder)), genTextLinkButtonStyle(token, token.textTextColor, 'link', {
        color: token.colorLinkHover,
        background: token.linkHoverBg
    }, {
        color: token.colorLinkActive
    }));
const genPrimaryButtonStyle = (token)=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: token.colorPrimary,
        boxShadow: token.primaryShadow
    }, genOutlinedDashedButtonStyle(token, token.colorPrimary, token.colorBgContainer, {
        color: token.colorPrimaryTextHover,
        borderColor: token.colorPrimaryHover,
        background: token.colorBgContainer
    }, {
        color: token.colorPrimaryTextActive,
        borderColor: token.colorPrimaryActive,
        background: token.colorBgContainer
    })), genDashedButtonStyle(token)), genFilledButtonStyle(token, token.colorPrimaryBg, {
        color: token.colorPrimary,
        background: token.colorPrimaryBgHover
    }, {
        color: token.colorPrimary,
        background: token.colorPrimaryBorder
    })), genTextLinkButtonStyle(token, token.colorPrimaryText, 'text', {
        color: token.colorPrimaryTextHover,
        background: token.colorPrimaryBg
    }, {
        color: token.colorPrimaryTextActive,
        background: token.colorPrimaryBorder
    })), genTextLinkButtonStyle(token, token.colorPrimaryText, 'link', {
        color: token.colorPrimaryTextHover,
        background: token.linkHoverBg
    }, {
        color: token.colorPrimaryTextActive
    })), genGhostButtonStyle(token.componentCls, token.ghostBg, token.colorPrimary, token.colorPrimary, token.colorTextDisabled, token.colorBorder, {
        color: token.colorPrimaryHover,
        borderColor: token.colorPrimaryHover
    }, {
        color: token.colorPrimaryActive,
        borderColor: token.colorPrimaryActive
    }));
const genDangerousStyle = (token)=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: token.colorError,
        boxShadow: token.dangerShadow
    }, genSolidButtonStyle(token, token.dangerColor, token.colorError, {
        background: token.colorErrorHover
    }, {
        background: token.colorErrorActive
    })), genOutlinedDashedButtonStyle(token, token.colorError, token.colorBgContainer, {
        color: token.colorErrorHover,
        borderColor: token.colorErrorBorderHover
    }, {
        color: token.colorErrorActive,
        borderColor: token.colorErrorActive
    })), genDashedButtonStyle(token)), genFilledButtonStyle(token, token.colorErrorBg, {
        color: token.colorError,
        background: token.colorErrorBgFilledHover
    }, {
        color: token.colorError,
        background: token.colorErrorBgActive
    })), genTextLinkButtonStyle(token, token.colorError, 'text', {
        color: token.colorErrorHover,
        background: token.colorErrorBg
    }, {
        color: token.colorErrorHover,
        background: token.colorErrorBgActive
    })), genTextLinkButtonStyle(token, token.colorError, 'link', {
        color: token.colorErrorHover
    }, {
        color: token.colorErrorActive
    })), genGhostButtonStyle(token.componentCls, token.ghostBg, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder, {
        color: token.colorErrorHover,
        borderColor: token.colorErrorHover
    }, {
        color: token.colorErrorActive,
        borderColor: token.colorErrorActive
    }));
const genLinkStyle = (token)=>Object.assign(Object.assign({}, genTextLinkButtonStyle(token, token.colorLink, 'link', {
        color: token.colorLinkHover
    }, {
        color: token.colorLinkActive
    })), genGhostButtonStyle(token.componentCls, token.ghostBg, token.colorInfo, token.colorInfo, token.colorTextDisabled, token.colorBorder, {
        color: token.colorInfoHover,
        borderColor: token.colorInfoHover
    }, {
        color: token.colorInfoActive,
        borderColor: token.colorInfoActive
    }));
const genColorButtonStyle = (token)=>{
    const { componentCls } = token;
    return Object.assign({
        ["".concat(componentCls, "-color-default")]: genDefaultButtonStyle(token),
        ["".concat(componentCls, "-color-primary")]: genPrimaryButtonStyle(token),
        ["".concat(componentCls, "-color-dangerous")]: genDangerousStyle(token),
        ["".concat(componentCls, "-color-link")]: genLinkStyle(token)
    }, genPresetColorStyle(token));
};
// =========== Compatible with versions earlier than 5.21.0 ===========
const genCompatibleButtonStyle = (token)=>Object.assign(Object.assign(Object.assign(Object.assign({}, genOutlinedDashedButtonStyle(token, token.defaultBorderColor, token.defaultBg, {
        color: token.defaultHoverColor,
        borderColor: token.defaultHoverBorderColor,
        background: token.defaultHoverBg
    }, {
        color: token.defaultActiveColor,
        borderColor: token.defaultActiveBorderColor,
        background: token.defaultActiveBg
    })), genTextLinkButtonStyle(token, token.textTextColor, 'text', {
        color: token.textTextHoverColor,
        background: token.textHoverBg
    }, {
        color: token.textTextActiveColor,
        background: token.colorBgTextActive
    })), genSolidButtonStyle(token, token.primaryColor, token.colorPrimary, {
        background: token.colorPrimaryHover,
        color: token.primaryColor
    }, {
        background: token.colorPrimaryActive,
        color: token.primaryColor
    })), genTextLinkButtonStyle(token, token.colorLink, 'link', {
        color: token.colorLinkHover,
        background: token.linkHoverBg
    }, {
        color: token.colorLinkActive
    }));
// =============================== Size ===============================
const genButtonStyle = function(token) {
    let prefixCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const { componentCls, controlHeight, fontSize, borderRadius, buttonPaddingHorizontal, iconCls, buttonPaddingVertical, buttonIconOnlyFontSize } = token;
    return [
        {
            [prefixCls]: {
                fontSize,
                height: controlHeight,
                padding: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(buttonPaddingVertical), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(buttonPaddingHorizontal)),
                borderRadius,
                ["&".concat(componentCls, "-icon-only")]: {
                    width: controlHeight,
                    [iconCls]: {
                        fontSize: buttonIconOnlyFontSize
                    }
                }
            }
        },
        // Shape - patch prefixCls again to override solid border radius style
        {
            ["".concat(componentCls).concat(componentCls, "-circle").concat(prefixCls)]: genCircleButtonStyle(token)
        },
        {
            ["".concat(componentCls).concat(componentCls, "-round").concat(prefixCls)]: {
                borderRadius: token.controlHeight,
                ["&:not(".concat(componentCls, "-icon-only)")]: {
                    paddingInline: token.buttonPaddingHorizontal
                }
            }
        }
    ];
};
const genSizeBaseButtonStyle = (token)=>{
    const baseToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        fontSize: token.contentFontSize
    });
    return genButtonStyle(baseToken, token.componentCls);
};
const genSizeSmallButtonStyle = (token)=>{
    const smallToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        controlHeight: token.controlHeightSM,
        fontSize: token.contentFontSizeSM,
        padding: token.paddingXS,
        buttonPaddingHorizontal: token.paddingInlineSM,
        buttonPaddingVertical: 0,
        borderRadius: token.borderRadiusSM,
        buttonIconOnlyFontSize: token.onlyIconSizeSM
    });
    return genButtonStyle(smallToken, "".concat(token.componentCls, "-sm"));
};
const genSizeLargeButtonStyle = (token)=>{
    const largeToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        controlHeight: token.controlHeightLG,
        fontSize: token.contentFontSizeLG,
        buttonPaddingHorizontal: token.paddingInlineLG,
        buttonPaddingVertical: 0,
        borderRadius: token.borderRadiusLG,
        buttonIconOnlyFontSize: token.onlyIconSizeLG
    });
    return genButtonStyle(largeToken, "".concat(token.componentCls, "-lg"));
};
const genBlockButtonStyle = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: {
            ["&".concat(componentCls, "-block")]: {
                width: '100%'
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Button', (token)=>{
    const buttonToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$token$2e$js__$5b$client$5d$__$28$ecmascript$29$__["prepareToken"])(token);
    return [
        // Shared
        genSharedButtonStyle(buttonToken),
        // Size
        genSizeBaseButtonStyle(buttonToken),
        genSizeSmallButtonStyle(buttonToken),
        genSizeLargeButtonStyle(buttonToken),
        // Block
        genBlockButtonStyle(buttonToken),
        // Color
        genColorButtonStyle(buttonToken),
        // https://github.com/ant-design/ant-design/issues/50969
        genCompatibleButtonStyle(buttonToken),
        // Button Group
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$group$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(buttonToken)
    ];
}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$token$2e$js__$5b$client$5d$__$28$ecmascript$29$__["prepareComponentToken"], {
    unitless: {
        fontWeight: true,
        contentLineHeight: true,
        contentLineHeightSM: true,
        contentLineHeightLG: true
    }
});
}),
"[project]/Downloads/One click/node_modules/antd/es/style/compact-item.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// handle border collapse
__turbopack_context__.s([
    "genCompactItemStyle",
    ()=>genCompactItemStyle
]);
function compactItemBorder(token, parentCls, options, prefixCls) {
    const { focusElCls, focus, borderElCls } = options;
    const childCombinator = borderElCls ? '> *' : '';
    const hoverEffects = [
        'hover',
        focus ? 'focus' : null,
        'active'
    ].filter(Boolean).map((n)=>"&:".concat(n, " ").concat(childCombinator)).join(',');
    return {
        ["&-item:not(".concat(parentCls, "-last-item)")]: {
            marginInlineEnd: token.calc(token.lineWidth).mul(-1).equal()
        },
        ["&-item:not(".concat(prefixCls, "-status-success)")]: {
            zIndex: 2
        },
        '&-item': Object.assign(Object.assign({
            [hoverEffects]: {
                zIndex: 3
            }
        }, focusElCls ? {
            ["&".concat(focusElCls)]: {
                zIndex: 3
            }
        } : {}), {
            ["&[disabled] ".concat(childCombinator)]: {
                zIndex: 0
            }
        })
    };
}
// handle border-radius
function compactItemBorderRadius(prefixCls, parentCls, options) {
    const { borderElCls } = options;
    const childCombinator = borderElCls ? "> ".concat(borderElCls) : '';
    return {
        ["&-item:not(".concat(parentCls, "-first-item):not(").concat(parentCls, "-last-item) ").concat(childCombinator)]: {
            borderRadius: 0
        },
        ["&-item:not(".concat(parentCls, "-last-item)").concat(parentCls, "-first-item")]: {
            ["& ".concat(childCombinator, ", &").concat(prefixCls, "-sm ").concat(childCombinator, ", &").concat(prefixCls, "-lg ").concat(childCombinator)]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0
            }
        },
        ["&-item:not(".concat(parentCls, "-first-item)").concat(parentCls, "-last-item")]: {
            ["& ".concat(childCombinator, ", &").concat(prefixCls, "-sm ").concat(childCombinator, ", &").concat(prefixCls, "-lg ").concat(childCombinator)]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
            }
        }
    };
}
function genCompactItemStyle(token) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        focus: true
    };
    const { componentCls } = token;
    const { componentCls: customizePrefixCls } = options;
    const mergedComponentCls = customizePrefixCls || componentCls;
    const compactCls = "".concat(mergedComponentCls, "-compact");
    return {
        [compactCls]: Object.assign(Object.assign({}, compactItemBorder(token, compactCls, options, mergedComponentCls)), compactItemBorderRadius(mergedComponentCls, compactCls, options))
    };
}
}),
"[project]/Downloads/One click/node_modules/antd/es/style/compact-item-vertical.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genCompactItemVerticalStyle",
    ()=>genCompactItemVerticalStyle
]);
function compactItemVerticalBorder(token, parentCls, prefixCls) {
    return {
        // border collapse
        ["&-item:not(".concat(parentCls, "-last-item)")]: {
            marginBottom: token.calc(token.lineWidth).mul(-1).equal()
        },
        ["&-item:not(".concat(prefixCls, "-status-success)")]: {
            zIndex: 2
        },
        '&-item': {
            '&:hover,&:focus,&:active': {
                zIndex: 3
            },
            '&[disabled]': {
                zIndex: 0
            }
        }
    };
}
function compactItemBorderVerticalRadius(prefixCls, parentCls) {
    return {
        ["&-item:not(".concat(parentCls, "-first-item):not(").concat(parentCls, "-last-item)")]: {
            borderRadius: 0
        },
        ["&-item".concat(parentCls, "-first-item:not(").concat(parentCls, "-last-item)")]: {
            ["&, &".concat(prefixCls, "-sm, &").concat(prefixCls, "-lg")]: {
                borderEndEndRadius: 0,
                borderEndStartRadius: 0
            }
        },
        ["&-item".concat(parentCls, "-last-item:not(").concat(parentCls, "-first-item)")]: {
            ["&, &".concat(prefixCls, "-sm, &").concat(prefixCls, "-lg")]: {
                borderStartStartRadius: 0,
                borderStartEndRadius: 0
            }
        }
    };
}
function genCompactItemVerticalStyle(token) {
    const compactCls = "".concat(token.componentCls, "-compact-vertical");
    return {
        [compactCls]: Object.assign(Object.assign({}, compactItemVerticalBorder(token, compactCls, token.componentCls)), compactItemBorderVerticalRadius(token.componentCls, compactCls))
    };
}
}),
"[project]/Downloads/One click/node_modules/antd/es/button/style/compact.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/compact-item.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2d$vertical$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/compact-item-vertical.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$token$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/button/style/token.js [client] (ecmascript)");
;
;
;
;
const genButtonCompactStyle = (token)=>{
    const { componentCls, colorPrimaryHover, lineWidth, calc } = token;
    const insetOffset = calc(lineWidth).mul(-1).equal();
    const getCompactBorderStyle = (vertical)=>{
        const selector = "".concat(componentCls, "-compact").concat(vertical ? '-vertical' : '', "-item").concat(componentCls, "-primary:not([disabled])");
        return {
            ["".concat(selector, " + ").concat(selector, "::before")]: {
                position: 'absolute',
                top: vertical ? insetOffset : 0,
                insetInlineStart: vertical ? 0 : insetOffset,
                backgroundColor: colorPrimaryHover,
                content: '""',
                width: vertical ? '100%' : lineWidth,
                height: vertical ? lineWidth : '100%'
            }
        };
    };
    // Special styles for Primary Button
    return Object.assign(Object.assign({}, getCompactBorderStyle()), getCompactBorderStyle(true));
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genSubStyleComponent"])([
    'Button',
    'compact'
], (token)=>{
    const buttonToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$token$2e$js__$5b$client$5d$__$28$ecmascript$29$__["prepareToken"])(token);
    return [
        // Space Compact
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genCompactItemStyle"])(buttonToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2d$vertical$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genCompactItemVerticalStyle"])(buttonToken),
        genButtonCompactStyle(buttonToken)
    ];
}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$token$2e$js__$5b$client$5d$__$28$ecmascript$29$__["prepareComponentToken"]);
}),
"[project]/Downloads/One click/node_modules/antd/es/button/button.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useLayoutEffect.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/omit.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/ref.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/wave/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/DisabledContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useSize.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/space/Compact.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$button$2d$group$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/button/button-group.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/button/buttonHelpers.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$DefaultLoadingIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/button/DefaultLoadingIcon.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$IconWrapper$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/button/IconWrapper.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/button/style/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$compact$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/button/style/compact.js [client] (ecmascript)");
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
function getLoadingConfig(loading) {
    if (typeof loading === 'object' && loading) {
        let delay = loading === null || loading === void 0 ? void 0 : loading.delay;
        delay = !Number.isNaN(delay) && typeof delay === 'number' ? delay : 0;
        return {
            loading: delay <= 0,
            delay
        };
    }
    return {
        loading: !!loading,
        delay: 0
    };
}
const ButtonTypeMap = {
    default: [
        'default',
        'outlined'
    ],
    primary: [
        'primary',
        'solid'
    ],
    dashed: [
        'default',
        'dashed'
    ],
    // `link` is not a real color but we should compatible with it
    link: [
        'link',
        'link'
    ],
    text: [
        'default',
        'text'
    ]
};
const InternalCompoundedButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    var _a, _b;
    const { loading = false, prefixCls: customizePrefixCls, color, variant, type, danger = false, shape: customizeShape, size: customizeSize, styles, disabled: customDisabled, className, rootClassName, children, icon, iconPosition = 'start', ghost = false, block = false, // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType = 'button', classNames: customClassNames, style: customStyle = {}, autoInsertSpace, autoFocus } = props, rest = __rest(props, [
        "loading",
        "prefixCls",
        "color",
        "variant",
        "type",
        "danger",
        "shape",
        "size",
        "styles",
        "disabled",
        "className",
        "rootClassName",
        "children",
        "icon",
        "iconPosition",
        "ghost",
        "block",
        "htmlType",
        "classNames",
        "style",
        "autoInsertSpace",
        "autoFocus"
    ]);
    // https://github.com/ant-design/ant-design/issues/47605
    // Compatible with original `type` behavior
    const mergedType = type || 'default';
    const { button } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const shape = customizeShape || (button === null || button === void 0 ? void 0 : button.shape) || 'default';
    const [mergedColor, mergedVariant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InternalCompoundedButton.useMemo": ()=>{
            // >>>>> Local
            // Color & Variant
            if (color && variant) {
                return [
                    color,
                    variant
                ];
            }
            // Sugar syntax
            if (type || danger) {
                const colorVariantPair = ButtonTypeMap[mergedType] || [];
                if (danger) {
                    return [
                        'danger',
                        colorVariantPair[1]
                    ];
                }
                return colorVariantPair;
            }
            // >>> Context fallback
            if ((button === null || button === void 0 ? void 0 : button.color) && (button === null || button === void 0 ? void 0 : button.variant)) {
                return [
                    button.color,
                    button.variant
                ];
            }
            return [
                'default',
                'outlined'
            ];
        }
    }["InternalCompoundedButton.useMemo"], [
        color,
        variant,
        type,
        danger,
        button === null || button === void 0 ? void 0 : button.color,
        button === null || button === void 0 ? void 0 : button.variant,
        mergedType
    ]);
    const isDanger = mergedColor === 'danger';
    const mergedColorText = isDanger ? 'dangerous' : mergedColor;
    const { getPrefixCls, direction, autoInsertSpace: contextAutoInsertSpace, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('button');
    const mergedInsertSpace = (_a = autoInsertSpace !== null && autoInsertSpace !== void 0 ? autoInsertSpace : contextAutoInsertSpace) !== null && _a !== void 0 ? _a : true;
    const prefixCls = getPrefixCls('btn', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const disabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    const groupSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$button$2d$group$2e$js__$5b$client$5d$__$28$ecmascript$29$__["GroupSizeContext"]);
    const loadingOrDelay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InternalCompoundedButton.useMemo[loadingOrDelay]": ()=>getLoadingConfig(loading)
    }["InternalCompoundedButton.useMemo[loadingOrDelay]"], [
        loading
    ]);
    const [innerLoading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(loadingOrDelay.loading);
    const [hasTwoCNChar, setHasTwoCNChar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useComposeRef"])(ref, buttonRef);
    const needInserted = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Children"].count(children) === 1 && !icon && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isUnBorderedButtonVariant"])(mergedVariant);
    // ========================= Mount ==========================
    // Record for mount status.
    // This will help to no to show the animation of loading on the first mount.
    const isMountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "InternalCompoundedButton.useEffect": ()=>{
            isMountRef.current = false;
            return ({
                "InternalCompoundedButton.useEffect": ()=>{
                    isMountRef.current = true;
                }
            })["InternalCompoundedButton.useEffect"];
        }
    }["InternalCompoundedButton.useEffect"], []);
    // ========================= Effect =========================
    // Loading. Should use `useLayoutEffect` to avoid low perf multiple click issue.
    // https://github.com/ant-design/ant-design/issues/51325
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "InternalCompoundedButton.useLayoutEffect": ()=>{
            let delayTimer = null;
            if (loadingOrDelay.delay > 0) {
                delayTimer = setTimeout({
                    "InternalCompoundedButton.useLayoutEffect": ()=>{
                        delayTimer = null;
                        setLoading(true);
                    }
                }["InternalCompoundedButton.useLayoutEffect"], loadingOrDelay.delay);
            } else {
                setLoading(loadingOrDelay.loading);
            }
            function cleanupTimer() {
                if (delayTimer) {
                    clearTimeout(delayTimer);
                    delayTimer = null;
                }
            }
            return cleanupTimer;
        }
    }["InternalCompoundedButton.useLayoutEffect"], [
        loadingOrDelay.delay,
        loadingOrDelay.loading
    ]);
    // Two chinese characters check
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InternalCompoundedButton.useEffect": ()=>{
            // FIXME: for HOC usage like <FormatMessage />
            if (!buttonRef.current || !mergedInsertSpace) {
                return;
            }
            const buttonText = buttonRef.current.textContent || '';
            if (needInserted && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isTwoCNChar"])(buttonText)) {
                if (!hasTwoCNChar) {
                    setHasTwoCNChar(true);
                }
            } else if (hasTwoCNChar) {
                setHasTwoCNChar(false);
            }
        }
    }["InternalCompoundedButton.useEffect"]);
    // Auto focus
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InternalCompoundedButton.useEffect": ()=>{
            if (autoFocus && buttonRef.current) {
                buttonRef.current.focus();
            }
        }
    }["InternalCompoundedButton.useEffect"], []);
    // ========================= Events =========================
    const handleClick = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "InternalCompoundedButton.useCallback[handleClick]": (e)=>{
            var _a;
            // FIXME: https://github.com/ant-design/ant-design/issues/30207
            if (innerLoading || mergedDisabled) {
                e.preventDefault();
                return;
            }
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, 'href' in props ? e : e);
        }
    }["InternalCompoundedButton.useCallback[handleClick]"], [
        props.onClick,
        innerLoading,
        mergedDisabled
    ]);
    // ========================== Warn ==========================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Button');
        ("TURBOPACK compile-time truthy", 1) ? warning(!(typeof icon === 'string' && icon.length > 2), 'breaking', "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon, "` at https://ant.design/components/icon")) : "TURBOPACK unreachable";
        ("TURBOPACK compile-time truthy", 1) ? warning(!(ghost && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isUnBorderedButtonVariant"])(mergedVariant)), 'usage', "`link` or `text` button can't be a `ghost` button.") : "TURBOPACK unreachable";
    }
    // ========================== Size ==========================
    const { compactSize, compactItemClassnames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCompactItemContext"])(prefixCls, direction);
    const sizeClassNameMap = {
        large: 'lg',
        small: 'sm',
        middle: undefined
    };
    const sizeFullName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "InternalCompoundedButton.useSize[sizeFullName]": (ctxSize)=>{
            var _a, _b;
            return (_b = (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : groupSize) !== null && _b !== void 0 ? _b : ctxSize;
        }
    }["InternalCompoundedButton.useSize[sizeFullName]"]);
    const sizeCls = sizeFullName ? (_b = sizeClassNameMap[sizeFullName]) !== null && _b !== void 0 ? _b : '' : '';
    const iconType = innerLoading ? 'loading' : icon;
    const linkButtonRestProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(rest, [
        'navigate'
    ]);
    // ========================= Render =========================
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, hashId, cssVarCls, {
        ["".concat(prefixCls, "-").concat(shape)]: shape !== 'default' && shape,
        // Compatible with versions earlier than 5.21.0
        ["".concat(prefixCls, "-").concat(mergedType)]: mergedType,
        ["".concat(prefixCls, "-dangerous")]: danger,
        ["".concat(prefixCls, "-color-").concat(mergedColorText)]: mergedColorText,
        ["".concat(prefixCls, "-variant-").concat(mergedVariant)]: mergedVariant,
        ["".concat(prefixCls, "-").concat(sizeCls)]: sizeCls,
        ["".concat(prefixCls, "-icon-only")]: !children && children !== 0 && !!iconType,
        ["".concat(prefixCls, "-background-ghost")]: ghost && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isUnBorderedButtonVariant"])(mergedVariant),
        ["".concat(prefixCls, "-loading")]: innerLoading,
        ["".concat(prefixCls, "-two-chinese-chars")]: hasTwoCNChar && mergedInsertSpace && !innerLoading,
        ["".concat(prefixCls, "-block")]: block,
        ["".concat(prefixCls, "-rtl")]: direction === 'rtl',
        ["".concat(prefixCls, "-icon-end")]: iconPosition === 'end'
    }, compactItemClassnames, className, rootClassName, contextClassName);
    const fullStyle = Object.assign(Object.assign({}, contextStyle), customStyle);
    const iconClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(customClassNames === null || customClassNames === void 0 ? void 0 : customClassNames.icon, contextClassNames.icon);
    const iconStyle = Object.assign(Object.assign({}, (styles === null || styles === void 0 ? void 0 : styles.icon) || {}), contextStyles.icon || {});
    /**
   * Extract icon node
   * If there is a custom icon and not in loading state: show custom icon
   */ const iconWrapperElement = (child)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$IconWrapper$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            prefixCls: prefixCls,
            className: iconClasses,
            style: iconStyle
        }, child);
    const defaultLoadingIconElement = ()=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$DefaultLoadingIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            existIcon: !!icon,
            prefixCls: prefixCls,
            loading: innerLoading,
            mount: isMountRef.current
        });
    /**
   * Using if-else statements can improve code readability without affecting future expansion.
   */ let iconNode;
    if (icon && !innerLoading) {
        iconNode = iconWrapperElement(icon);
    } else if (loading && typeof loading === 'object' && loading.icon) {
        iconNode = iconWrapperElement(loading.icon);
    } else {
        iconNode = defaultLoadingIconElement();
    }
    const kids = children || children === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$client$5d$__$28$ecmascript$29$__["spaceChildren"])(children, needInserted && mergedInsertSpace) : null;
    if (linkButtonRestProps.href !== undefined) {
        return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("a", Object.assign({}, linkButtonRestProps, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(classes, {
                ["".concat(prefixCls, "-disabled")]: mergedDisabled
            }),
            href: mergedDisabled ? undefined : linkButtonRestProps.href,
            style: fullStyle,
            onClick: handleClick,
            ref: mergedRef,
            tabIndex: mergedDisabled ? -1 : 0,
            "aria-disabled": mergedDisabled
        }), iconNode, kids));
    }
    let buttonNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("button", Object.assign({}, rest, {
        type: htmlType,
        className: classes,
        style: fullStyle,
        onClick: handleClick,
        disabled: mergedDisabled,
        ref: mergedRef
    }), iconNode, kids, compactItemClassnames && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$compact$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls
    }));
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isUnBorderedButtonVariant"])(mergedVariant)) {
        buttonNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            component: "Button",
            disabled: innerLoading
        }, buttonNode);
    }
    return wrapCSSVar(buttonNode);
});
const Button = InternalCompoundedButton;
Button.Group = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$button$2d$group$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
Button.__ANT_BUTTON = true;
if ("TURBOPACK compile-time truthy", 1) {
    Button.displayName = 'Button';
}
const __TURBOPACK__default__export__ = Button;
}),
"[project]/Downloads/One click/node_modules/antd/es/button/index.js [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$button$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/button/button.js [client] (ecmascript)");
"use client";
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$button$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Downloads/One click/node_modules/antd/es/button/index.js [client] (ecmascript) <locals> <export default as Button>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/button/index.js [client] (ecmascript) <locals>");
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/mediaQueryUtil.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addMediaQueryListener",
    ()=>addMediaQueryListener,
    "removeMediaQueryListener",
    ()=>removeMediaQueryListener
]);
const addMediaQueryListener = (mql, handler)=>{
    // Don't delete here, please keep the code compatible
    if (typeof (mql === null || mql === void 0 ? void 0 : mql.addEventListener) !== 'undefined') {
        mql.addEventListener('change', handler);
    } else if (typeof (mql === null || mql === void 0 ? void 0 : mql.addListener) !== 'undefined') {
        mql.addListener(handler);
    }
};
const removeMediaQueryListener = (mql, handler)=>{
    // Don't delete here, please keep the code compatible
    if (typeof (mql === null || mql === void 0 ? void 0 : mql.removeEventListener) !== 'undefined') {
        mql.removeEventListener('change', handler);
    } else if (typeof (mql === null || mql === void 0 ? void 0 : mql.removeListener) !== 'undefined') {
        mql.removeListener(handler);
    }
};
}),
"[project]/Downloads/One click/node_modules/antd/es/layout/context.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayoutContext",
    ()=>LayoutContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
const LayoutContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"]({
    siderHook: {
        addSider: ()=>null,
        removeSider: ()=>null
    }
});
}),
"[project]/Downloads/One click/node_modules/antd/es/layout/style/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEPRECATED_TOKENS",
    ()=>DEPRECATED_TOKENS,
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [client] (ecmascript)");
;
;
const genLayoutStyle = (token)=>{
    const { antCls, // .ant
    componentCls, // .ant-layout
    colorText, footerBg, headerHeight, headerPadding, headerColor, footerPadding, fontSize, bodyBg, headerBg } = token;
    return {
        [componentCls]: {
            display: 'flex',
            flex: 'auto',
            flexDirection: 'column',
            /* fix firefox can't set height smaller than content on flex item */ minHeight: 0,
            background: bodyBg,
            '&, *': {
                boxSizing: 'border-box'
            },
            ["&".concat(componentCls, "-has-sider")]: {
                flexDirection: 'row',
                ["> ".concat(componentCls, ", > ").concat(componentCls, "-content")]: {
                    // https://segmentfault.com/a/1190000019498300
                    width: 0
                }
            },
            ["".concat(componentCls, "-header, &").concat(componentCls, "-footer")]: {
                flex: '0 0 auto'
            },
            // RTL
            '&-rtl': {
                direction: 'rtl'
            }
        },
        // ==================== Header ====================
        ["".concat(componentCls, "-header")]: {
            height: headerHeight,
            padding: headerPadding,
            color: headerColor,
            lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(headerHeight),
            background: headerBg,
            // Other components/menu/style/index.less line:686
            // Integration with header element so menu items have the same height
            ["".concat(antCls, "-menu")]: {
                lineHeight: 'inherit'
            }
        },
        // ==================== Footer ====================
        ["".concat(componentCls, "-footer")]: {
            padding: footerPadding,
            color: colorText,
            fontSize,
            background: footerBg
        },
        // =================== Content ====================
        ["".concat(componentCls, "-content")]: {
            flex: 'auto',
            color: colorText,
            // fix firefox can't set height smaller than content on flex item
            minHeight: 0
        }
    };
};
const prepareComponentToken = (token)=>{
    const { colorBgLayout, controlHeight, controlHeightLG, colorText, controlHeightSM, marginXXS, colorTextLightSolid, colorBgContainer } = token;
    const paddingInline = controlHeightLG * 1.25;
    return {
        // Deprecated
        colorBgHeader: '#001529',
        colorBgBody: colorBgLayout,
        colorBgTrigger: '#002140',
        bodyBg: colorBgLayout,
        headerBg: '#001529',
        headerHeight: controlHeight * 2,
        headerPadding: "0 ".concat(paddingInline, "px"),
        headerColor: colorText,
        footerPadding: "".concat(controlHeightSM, "px ").concat(paddingInline, "px"),
        footerBg: colorBgLayout,
        siderBg: '#001529',
        triggerHeight: controlHeightLG + marginXXS * 2,
        triggerBg: '#002140',
        triggerColor: colorTextLightSolid,
        zeroTriggerWidth: controlHeightLG,
        zeroTriggerHeight: controlHeightLG,
        lightSiderBg: colorBgContainer,
        lightTriggerBg: colorBgContainer,
        lightTriggerColor: colorText
    };
};
const DEPRECATED_TOKENS = [
    [
        'colorBgBody',
        'bodyBg'
    ],
    [
        'colorBgHeader',
        'headerBg'
    ],
    [
        'colorBgTrigger',
        'triggerBg'
    ]
];
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Layout', genLayoutStyle, prepareComponentToken, {
    deprecatedTokens: DEPRECATED_TOKENS
});
}),
"[project]/Downloads/One click/node_modules/antd/es/layout/style/sider.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$layout$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/layout/style/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [client] (ecmascript)");
;
;
;
const genSiderStyle = (token)=>{
    const { componentCls, siderBg, motionDurationMid, motionDurationSlow, antCls, triggerHeight, triggerColor, triggerBg, headerHeight, zeroTriggerWidth, zeroTriggerHeight, borderRadiusLG, lightSiderBg, lightTriggerColor, lightTriggerBg, bodyBg } = token;
    return {
        [componentCls]: {
            position: 'relative',
            // fix firefox can't set width smaller than content on flex item
            minWidth: 0,
            background: siderBg,
            transition: "all ".concat(motionDurationMid, ", background 0s"),
            '&-has-trigger': {
                paddingBottom: triggerHeight
            },
            '&-right': {
                order: 1
            },
            ["".concat(componentCls, "-children")]: {
                height: '100%',
                // Hack for fixing margin collapse bug
                // https://github.com/ant-design/ant-design/issues/7967
                // solution from https://stackoverflow.com/a/33132624/3040605
                marginTop: -0.1,
                paddingTop: 0.1,
                ["".concat(antCls, "-menu").concat(antCls, "-menu-inline-collapsed")]: {
                    width: 'auto'
                }
            },
            ["&-zero-width ".concat(componentCls, "-children")]: {
                overflow: 'hidden'
            },
            ["".concat(componentCls, "-trigger")]: {
                position: 'fixed',
                bottom: 0,
                zIndex: 1,
                height: triggerHeight,
                color: triggerColor,
                lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(triggerHeight),
                textAlign: 'center',
                background: triggerBg,
                cursor: 'pointer',
                transition: "all ".concat(motionDurationMid)
            },
            ["".concat(componentCls, "-zero-width-trigger")]: {
                position: 'absolute',
                top: headerHeight,
                insetInlineEnd: token.calc(zeroTriggerWidth).mul(-1).equal(),
                zIndex: 1,
                width: zeroTriggerWidth,
                height: zeroTriggerHeight,
                color: triggerColor,
                fontSize: token.fontSizeXL,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: siderBg,
                borderRadius: "0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(borderRadiusLG), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(borderRadiusLG), " 0"),
                cursor: 'pointer',
                transition: "background ".concat(motionDurationSlow, " ease"),
                '&::after': {
                    position: 'absolute',
                    inset: 0,
                    background: 'transparent',
                    transition: "all ".concat(motionDurationSlow),
                    content: '""'
                },
                '&:hover::after': {
                    background: "rgba(255, 255, 255, 0.2)"
                },
                '&-right': {
                    insetInlineStart: token.calc(zeroTriggerWidth).mul(-1).equal(),
                    borderRadius: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(borderRadiusLG), " 0 0 ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(borderRadiusLG))
                }
            },
            // Light
            '&-light': {
                background: lightSiderBg,
                ["".concat(componentCls, "-trigger")]: {
                    color: lightTriggerColor,
                    background: lightTriggerBg
                },
                ["".concat(componentCls, "-zero-width-trigger")]: {
                    color: lightTriggerColor,
                    background: lightTriggerBg,
                    border: "1px solid ".concat(bodyBg),
                    // Safe to modify to any other color
                    borderInlineStart: 0
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genStyleHooks"])([
    'Layout',
    'Sider'
], genSiderStyle, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$layout$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["prepareComponentToken"], {
    deprecatedTokens: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$layout$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["DEPRECATED_TOKENS"]
});
}),
"[project]/Downloads/One click/node_modules/antd/es/layout/Sider.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiderContext",
    ()=>SiderContext,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BarsOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/BarsOutlined.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LeftOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/LeftOutlined.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/RightOutlined.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/omit.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$mediaQueryUtil$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/mediaQueryUtil.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$layout$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/layout/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$layout$2f$style$2f$sider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/layout/style/sider.js [client] (ecmascript)");
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
const dimensionMaxMap = {
    xs: '479.98px',
    sm: '575.98px',
    md: '767.98px',
    lg: '991.98px',
    xl: '1199.98px',
    xxl: '1599.98px'
};
const isNumeric = (val)=>!Number.isNaN(Number.parseFloat(val)) && Number.isFinite(Number(val));
const SiderContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"]({});
const generateId = (()=>{
    let i = 0;
    return function() {
        let prefix = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
        i += 1;
        return "".concat(prefix).concat(i);
    };
})();
const Sider = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, className, trigger, children, defaultCollapsed = false, theme = 'dark', style = {}, collapsible = false, reverseArrow = false, width = 200, collapsedWidth = 80, zeroWidthTriggerStyle, breakpoint, onCollapse, onBreakpoint } = props, otherProps = __rest(props, [
        "prefixCls",
        "className",
        "trigger",
        "children",
        "defaultCollapsed",
        "theme",
        "style",
        "collapsible",
        "reverseArrow",
        "width",
        "collapsedWidth",
        "zeroWidthTriggerStyle",
        "breakpoint",
        "onCollapse",
        "onBreakpoint"
    ]);
    const { siderHook } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$layout$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LayoutContext"]);
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('collapsed' in props ? props.collapsed : defaultCollapsed);
    const [below, setBelow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sider.useEffect": ()=>{
            if ('collapsed' in props) {
                setCollapsed(props.collapsed);
            }
        }
    }["Sider.useEffect"], [
        props.collapsed
    ]);
    const handleSetCollapsed = (value, type)=>{
        if (!('collapsed' in props)) {
            setCollapsed(value);
        }
        onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(value, type);
    };
    // =========================== Prefix ===========================
    const { getPrefixCls, direction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$layout$2f$style$2f$sider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    // ========================= Responsive =========================
    const responsiveHandlerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    responsiveHandlerRef.current = (mql)=>{
        setBelow(mql.matches);
        onBreakpoint === null || onBreakpoint === void 0 ? void 0 : onBreakpoint(mql.matches);
        if (collapsed !== mql.matches) {
            handleSetCollapsed(mql.matches, 'responsive');
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sider.useEffect": ()=>{
            function responsiveHandler(mql) {
                var _a;
                return (_a = responsiveHandlerRef.current) === null || _a === void 0 ? void 0 : _a.call(responsiveHandlerRef, mql);
            }
            let mql;
            if (typeof (window === null || window === void 0 ? void 0 : window.matchMedia) !== 'undefined' && breakpoint && breakpoint in dimensionMaxMap) {
                mql = window.matchMedia("screen and (max-width: ".concat(dimensionMaxMap[breakpoint], ")"));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$mediaQueryUtil$2e$js__$5b$client$5d$__$28$ecmascript$29$__["addMediaQueryListener"])(mql, responsiveHandler);
                responsiveHandler(mql);
            }
            return ({
                "Sider.useEffect": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$mediaQueryUtil$2e$js__$5b$client$5d$__$28$ecmascript$29$__["removeMediaQueryListener"])(mql, responsiveHandler);
                }
            })["Sider.useEffect"];
        }
    }["Sider.useEffect"], [
        breakpoint
    ]); // in order to accept dynamic 'breakpoint' property, we need to add 'breakpoint' into dependency array.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sider.useEffect": ()=>{
            const uniqueId = generateId('ant-sider-');
            siderHook.addSider(uniqueId);
            return ({
                "Sider.useEffect": ()=>siderHook.removeSider(uniqueId)
            })["Sider.useEffect"];
        }
    }["Sider.useEffect"], []);
    const toggle = ()=>{
        handleSetCollapsed(!collapsed, 'clickTrigger');
    };
    const divProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(otherProps, [
        'collapsed'
    ]);
    const rawWidth = collapsed ? collapsedWidth : width;
    // use "px" as fallback unit for width
    const siderWidth = isNumeric(rawWidth) ? "".concat(rawWidth, "px") : String(rawWidth);
    // special trigger when collapsedWidth == 0
    const zeroWidthTrigger = Number.parseFloat(String(collapsedWidth || 0)) === 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        onClick: toggle,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-zero-width-trigger"), "".concat(prefixCls, "-zero-width-trigger-").concat(reverseArrow ? 'right' : 'left')),
        style: zeroWidthTriggerStyle
    }, trigger || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BarsOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], null)) : null;
    const reverseIcon = direction === 'rtl' === !reverseArrow;
    const iconObj = {
        expanded: reverseIcon ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LeftOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], null),
        collapsed: reverseIcon ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LeftOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], null)
    };
    const status = collapsed ? 'collapsed' : 'expanded';
    const defaultTrigger = iconObj[status];
    const triggerDom = trigger !== null ? zeroWidthTrigger || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: "".concat(prefixCls, "-trigger"),
        onClick: toggle,
        style: {
            width: siderWidth
        }
    }, trigger || defaultTrigger) : null;
    const divStyle = Object.assign(Object.assign({}, style), {
        flex: "0 0 ".concat(siderWidth),
        maxWidth: siderWidth,
        minWidth: siderWidth,
        width: siderWidth
    });
    const siderCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, "".concat(prefixCls, "-").concat(theme), {
        ["".concat(prefixCls, "-collapsed")]: !!collapsed,
        ["".concat(prefixCls, "-has-trigger")]: collapsible && trigger !== null && !zeroWidthTrigger,
        ["".concat(prefixCls, "-below")]: !!below,
        ["".concat(prefixCls, "-zero-width")]: Number.parseFloat(siderWidth) === 0
    }, className, hashId, cssVarCls);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Sider.useMemo[contextValue]": ()=>({
                siderCollapsed: collapsed
            })
    }["Sider.useMemo[contextValue]"], [
        collapsed
    ]);
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](SiderContext.Provider, {
        value: contextValue
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("aside", Object.assign({
        className: siderCls
    }, divProps, {
        style: divStyle,
        ref: ref
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: "".concat(prefixCls, "-children")
    }, children), collapsible || below && zeroWidthTrigger ? triggerDom : null)));
});
if ("TURBOPACK compile-time truthy", 1) {
    Sider.displayName = 'Sider';
}
const __TURBOPACK__default__export__ = Sider;
}),
"[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/useToken.js [client] (ecmascript) <export default as useToken>");
;
/**
 * This hook is only for cssVar to add root className for components.
 * If root ClassName is needed, this hook could be refactored with `-root`
 * @param prefixCls
 */ const useCSSVarCls = (prefixCls)=>{
    const [, , , , cssVar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    return cssVar ? "".concat(prefixCls, "-css-var") : '';
};
const __TURBOPACK__default__export__ = useCSSVarCls;
}),
"[project]/Downloads/One click/node_modules/antd/es/menu/MenuContext.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
"use client";
;
const MenuContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"])({
    prefixCls: '',
    firstLevel: true,
    inlineCollapsed: false
});
const __TURBOPACK__default__export__ = MenuContext;
}),
"[project]/Downloads/One click/node_modules/antd/es/menu/MenuDivider.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$menu$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-menu/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$menu$2f$es$2f$Divider$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-menu/es/Divider.js [client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
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
const MenuDivider = (props)=>{
    const { prefixCls: customizePrefixCls, className, dashed } = props, restProps = __rest(props, [
        "prefixCls",
        "className",
        "dashed"
    ]);
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('menu', customizePrefixCls);
    const classString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        ["".concat(prefixCls, "-item-divider-dashed")]: !!dashed
    }, className);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$menu$2f$es$2f$Divider$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], Object.assign({
        className: classString
    }, restProps));
};
const __TURBOPACK__default__export__ = MenuDivider;
}),
"[project]/Downloads/One click/node_modules/antd/es/style/roundedArrow.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genRoundedArrow",
    ()=>genRoundedArrow,
    "getArrowToken",
    ()=>getArrowToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [client] (ecmascript)");
;
function getArrowToken(token) {
    const { sizePopupArrow, borderRadiusXS, borderRadiusOuter } = token;
    const unitWidth = sizePopupArrow / 2;
    const ax = 0;
    const ay = unitWidth;
    const bx = borderRadiusOuter * 1 / Math.sqrt(2);
    const by = unitWidth - borderRadiusOuter * (1 - 1 / Math.sqrt(2));
    const cx = unitWidth - borderRadiusXS * (1 / Math.sqrt(2));
    const cy = borderRadiusOuter * (Math.sqrt(2) - 1) + borderRadiusXS * (1 / Math.sqrt(2));
    const dx = 2 * unitWidth - cx;
    const dy = cy;
    const ex = 2 * unitWidth - bx;
    const ey = by;
    const fx = 2 * unitWidth - ax;
    const fy = ay;
    const shadowWidth = unitWidth * Math.sqrt(2) + borderRadiusOuter * (Math.sqrt(2) - 2);
    const polygonOffset = borderRadiusOuter * (Math.sqrt(2) - 1);
    const arrowPolygon = "polygon(".concat(polygonOffset, "px 100%, 50% ").concat(polygonOffset, "px, ").concat(2 * unitWidth - polygonOffset, "px 100%, ").concat(polygonOffset, "px 100%)");
    const arrowPath = "path('M ".concat(ax, " ").concat(ay, " A ").concat(borderRadiusOuter, " ").concat(borderRadiusOuter, " 0 0 0 ").concat(bx, " ").concat(by, " L ").concat(cx, " ").concat(cy, " A ").concat(borderRadiusXS, " ").concat(borderRadiusXS, " 0 0 1 ").concat(dx, " ").concat(dy, " L ").concat(ex, " ").concat(ey, " A ").concat(borderRadiusOuter, " ").concat(borderRadiusOuter, " 0 0 0 ").concat(fx, " ").concat(fy, " Z')");
    return {
        arrowShadowWidth: shadowWidth,
        arrowPath,
        arrowPolygon
    };
}
const genRoundedArrow = (token, bgColor, boxShadow)=>{
    const { sizePopupArrow, arrowPolygon, arrowPath, arrowShadowWidth, borderRadiusXS, calc } = token;
    return {
        pointerEvents: 'none',
        width: sizePopupArrow,
        height: sizePopupArrow,
        overflow: 'hidden',
        '&::before': {
            position: 'absolute',
            bottom: 0,
            insetInlineStart: 0,
            width: sizePopupArrow,
            height: calc(sizePopupArrow).div(2).equal(),
            background: bgColor,
            clipPath: {
                _multi_value_: true,
                value: [
                    arrowPolygon,
                    arrowPath
                ]
            },
            content: '""'
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            width: arrowShadowWidth,
            height: arrowShadowWidth,
            bottom: 0,
            insetInline: 0,
            margin: 'auto',
            borderRadius: {
                _skip_check_: true,
                value: "0 0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(borderRadiusXS), " 0")
            },
            transform: 'translateY(50%) rotate(-135deg)',
            boxShadow,
            zIndex: 0,
            background: 'transparent'
        }
    };
};
}),
"[project]/Downloads/One click/node_modules/antd/es/style/placementArrow.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_VERTICAL_CONTENT_RADIUS",
    ()=>MAX_VERTICAL_CONTENT_RADIUS,
    "default",
    ()=>getArrowStyle,
    "getArrowOffsetToken",
    ()=>getArrowOffsetToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/roundedArrow.js [client] (ecmascript)");
;
;
const MAX_VERTICAL_CONTENT_RADIUS = 8;
function getArrowOffsetToken(options) {
    const { contentRadius, limitVerticalRadius } = options;
    const arrowOffset = contentRadius > 12 ? contentRadius + 2 : 12;
    const arrowOffsetVertical = limitVerticalRadius ? MAX_VERTICAL_CONTENT_RADIUS : arrowOffset;
    return {
        arrowOffsetHorizontal: arrowOffset,
        arrowOffsetVertical
    };
}
function isInject(valid, code) {
    if (!valid) {
        return {};
    }
    return code;
}
function getArrowStyle(token, colorBg, options) {
    const { componentCls, boxShadowPopoverArrow, arrowOffsetVertical, arrowOffsetHorizontal } = token;
    const { arrowDistance = 0, arrowPlacement = {
        left: true,
        right: true,
        top: true,
        bottom: true
    } } = options || {};
    return {
        [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({
            // ============================ Basic ============================
            ["".concat(componentCls, "-arrow")]: [
                Object.assign(Object.assign({
                    position: 'absolute',
                    zIndex: 1,
                    display: 'block'
                }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genRoundedArrow"])(token, colorBg, boxShadowPopoverArrow)), {
                    '&:before': {
                        background: colorBg
                    }
                })
            ]
        }, isInject(!!arrowPlacement.top, {
            [[
                "&-placement-top > ".concat(componentCls, "-arrow"),
                "&-placement-topLeft > ".concat(componentCls, "-arrow"),
                "&-placement-topRight > ".concat(componentCls, "-arrow")
            ].join(',')]: {
                bottom: arrowDistance,
                transform: 'translateY(100%) rotate(180deg)'
            },
            ["&-placement-top > ".concat(componentCls, "-arrow")]: {
                left: {
                    _skip_check_: true,
                    value: '50%'
                },
                transform: 'translateX(-50%) translateY(100%) rotate(180deg)'
            },
            '&-placement-topLeft': {
                '--arrow-offset-horizontal': arrowOffsetHorizontal,
                ["> ".concat(componentCls, "-arrow")]: {
                    left: {
                        _skip_check_: true,
                        value: arrowOffsetHorizontal
                    }
                }
            },
            '&-placement-topRight': {
                '--arrow-offset-horizontal': "calc(100% - ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(arrowOffsetHorizontal), ")"),
                ["> ".concat(componentCls, "-arrow")]: {
                    right: {
                        _skip_check_: true,
                        value: arrowOffsetHorizontal
                    }
                }
            }
        })), isInject(!!arrowPlacement.bottom, {
            [[
                "&-placement-bottom > ".concat(componentCls, "-arrow"),
                "&-placement-bottomLeft > ".concat(componentCls, "-arrow"),
                "&-placement-bottomRight > ".concat(componentCls, "-arrow")
            ].join(',')]: {
                top: arrowDistance,
                transform: "translateY(-100%)"
            },
            ["&-placement-bottom > ".concat(componentCls, "-arrow")]: {
                left: {
                    _skip_check_: true,
                    value: '50%'
                },
                transform: "translateX(-50%) translateY(-100%)"
            },
            '&-placement-bottomLeft': {
                '--arrow-offset-horizontal': arrowOffsetHorizontal,
                ["> ".concat(componentCls, "-arrow")]: {
                    left: {
                        _skip_check_: true,
                        value: arrowOffsetHorizontal
                    }
                }
            },
            '&-placement-bottomRight': {
                '--arrow-offset-horizontal': "calc(100% - ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(arrowOffsetHorizontal), ")"),
                ["> ".concat(componentCls, "-arrow")]: {
                    right: {
                        _skip_check_: true,
                        value: arrowOffsetHorizontal
                    }
                }
            }
        })), isInject(!!arrowPlacement.left, {
            [[
                "&-placement-left > ".concat(componentCls, "-arrow"),
                "&-placement-leftTop > ".concat(componentCls, "-arrow"),
                "&-placement-leftBottom > ".concat(componentCls, "-arrow")
            ].join(',')]: {
                right: {
                    _skip_check_: true,
                    value: arrowDistance
                },
                transform: 'translateX(100%) rotate(90deg)'
            },
            ["&-placement-left > ".concat(componentCls, "-arrow")]: {
                top: {
                    _skip_check_: true,
                    value: '50%'
                },
                transform: 'translateY(-50%) translateX(100%) rotate(90deg)'
            },
            ["&-placement-leftTop > ".concat(componentCls, "-arrow")]: {
                top: arrowOffsetVertical
            },
            ["&-placement-leftBottom > ".concat(componentCls, "-arrow")]: {
                bottom: arrowOffsetVertical
            }
        })), isInject(!!arrowPlacement.right, {
            [[
                "&-placement-right > ".concat(componentCls, "-arrow"),
                "&-placement-rightTop > ".concat(componentCls, "-arrow"),
                "&-placement-rightBottom > ".concat(componentCls, "-arrow")
            ].join(',')]: {
                left: {
                    _skip_check_: true,
                    value: arrowDistance
                },
                transform: 'translateX(-100%) rotate(-90deg)'
            },
            ["&-placement-right > ".concat(componentCls, "-arrow")]: {
                top: {
                    _skip_check_: true,
                    value: '50%'
                },
                transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)'
            },
            ["&-placement-rightTop > ".concat(componentCls, "-arrow")]: {
                top: arrowOffsetVertical
            },
            ["&-placement-rightBottom > ".concat(componentCls, "-arrow")]: {
                bottom: arrowOffsetVertical
            }
        }))
    };
}
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/placements.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getPlacements,
    "getOverflowOptions",
    ()=>getOverflowOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/placementArrow.js [client] (ecmascript)");
;
function getOverflowOptions(placement, arrowOffset, arrowWidth, autoAdjustOverflow) {
    if (autoAdjustOverflow === false) {
        return {
            adjustX: false,
            adjustY: false
        };
    }
    const overflow = autoAdjustOverflow && typeof autoAdjustOverflow === 'object' ? autoAdjustOverflow : {};
    const baseOverflow = {};
    switch(placement){
        case 'top':
        case 'bottom':
            baseOverflow.shiftX = arrowOffset.arrowOffsetHorizontal * 2 + arrowWidth;
            baseOverflow.shiftY = true;
            baseOverflow.adjustY = true;
            break;
        case 'left':
        case 'right':
            baseOverflow.shiftY = arrowOffset.arrowOffsetVertical * 2 + arrowWidth;
            baseOverflow.shiftX = true;
            baseOverflow.adjustX = true;
            break;
    }
    const mergedOverflow = Object.assign(Object.assign({}, baseOverflow), overflow);
    // Support auto shift
    if (!mergedOverflow.shiftX) {
        mergedOverflow.adjustX = true;
    }
    if (!mergedOverflow.shiftY) {
        mergedOverflow.adjustY = true;
    }
    return mergedOverflow;
}
const PlacementAlignMap = {
    left: {
        points: [
            'cr',
            'cl'
        ]
    },
    right: {
        points: [
            'cl',
            'cr'
        ]
    },
    top: {
        points: [
            'bc',
            'tc'
        ]
    },
    bottom: {
        points: [
            'tc',
            'bc'
        ]
    },
    topLeft: {
        points: [
            'bl',
            'tl'
        ]
    },
    leftTop: {
        points: [
            'tr',
            'tl'
        ]
    },
    topRight: {
        points: [
            'br',
            'tr'
        ]
    },
    rightTop: {
        points: [
            'tl',
            'tr'
        ]
    },
    bottomRight: {
        points: [
            'tr',
            'br'
        ]
    },
    rightBottom: {
        points: [
            'bl',
            'br'
        ]
    },
    bottomLeft: {
        points: [
            'tl',
            'bl'
        ]
    },
    leftBottom: {
        points: [
            'br',
            'bl'
        ]
    }
};
const ArrowCenterPlacementAlignMap = {
    topLeft: {
        points: [
            'bl',
            'tc'
        ]
    },
    leftTop: {
        points: [
            'tr',
            'cl'
        ]
    },
    topRight: {
        points: [
            'br',
            'tc'
        ]
    },
    rightTop: {
        points: [
            'tl',
            'cr'
        ]
    },
    bottomRight: {
        points: [
            'tr',
            'bc'
        ]
    },
    rightBottom: {
        points: [
            'bl',
            'cr'
        ]
    },
    bottomLeft: {
        points: [
            'tl',
            'bc'
        ]
    },
    leftBottom: {
        points: [
            'br',
            'cl'
        ]
    }
};
const DisableAutoArrowList = new Set([
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'leftTop',
    'leftBottom',
    'rightTop',
    'rightBottom'
]);
function getPlacements(config) {
    const { arrowWidth, autoAdjustOverflow, arrowPointAtCenter, offset, borderRadius, visibleFirst } = config;
    const halfArrowWidth = arrowWidth / 2;
    const placementMap = {};
    // Dynamic offset
    const arrowOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getArrowOffsetToken"])({
        contentRadius: borderRadius,
        limitVerticalRadius: true
    });
    Object.keys(PlacementAlignMap).forEach((key)=>{
        const template = arrowPointAtCenter && ArrowCenterPlacementAlignMap[key] || PlacementAlignMap[key];
        const placementInfo = Object.assign(Object.assign({}, template), {
            offset: [
                0,
                0
            ],
            dynamicInset: true
        });
        placementMap[key] = placementInfo;
        // Disable autoArrow since design is fixed position
        if (DisableAutoArrowList.has(key)) {
            placementInfo.autoArrow = false;
        }
        // Static offset
        switch(key){
            case 'top':
            case 'topLeft':
            case 'topRight':
                placementInfo.offset[1] = -halfArrowWidth - offset;
                break;
            case 'bottom':
            case 'bottomLeft':
            case 'bottomRight':
                placementInfo.offset[1] = halfArrowWidth + offset;
                break;
            case 'left':
            case 'leftTop':
            case 'leftBottom':
                placementInfo.offset[0] = -halfArrowWidth - offset;
                break;
            case 'right':
            case 'rightTop':
            case 'rightBottom':
                placementInfo.offset[0] = halfArrowWidth + offset;
                break;
        }
        if (arrowPointAtCenter) {
            switch(key){
                case 'topLeft':
                case 'bottomLeft':
                    placementInfo.offset[0] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
                    break;
                case 'topRight':
                case 'bottomRight':
                    placementInfo.offset[0] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
                    break;
                case 'leftTop':
                case 'rightTop':
                    placementInfo.offset[1] = -arrowOffset.arrowOffsetHorizontal * 2 + halfArrowWidth;
                    break;
                case 'leftBottom':
                case 'rightBottom':
                    placementInfo.offset[1] = arrowOffset.arrowOffsetHorizontal * 2 - halfArrowWidth;
                    break;
            }
        }
        // Overflow
        placementInfo.overflow = getOverflowOptions(key, arrowOffset, arrowWidth, autoAdjustOverflow);
        // VisibleFirst
        if (visibleFirst) {
            placementInfo.htmlRegion = 'visibleFirst';
        }
    });
    return placementMap;
}
}),
"[project]/Downloads/One click/node_modules/antd/es/style/motion/motion.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initMotion",
    ()=>initMotion
]);
const initMotionCommon = (duration)=>({
        animationDuration: duration,
        animationFillMode: 'both'
    });
// FIXME: origin less code seems same as initMotionCommon. Maybe we can safe remove
const initMotionCommonLeave = (duration)=>({
        animationDuration: duration,
        animationFillMode: 'both'
    });
const initMotion = function(motionCls, inKeyframes, outKeyframes, duration) {
    let sameLevel = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    const sameLevelPrefix = sameLevel ? '&' : '';
    return {
        ["\n      ".concat(sameLevelPrefix).concat(motionCls, "-enter,\n      ").concat(sameLevelPrefix).concat(motionCls, "-appear\n    ")]: Object.assign(Object.assign({}, initMotionCommon(duration)), {
            animationPlayState: 'paused'
        }),
        ["".concat(sameLevelPrefix).concat(motionCls, "-leave")]: Object.assign(Object.assign({}, initMotionCommonLeave(duration)), {
            animationPlayState: 'paused'
        }),
        ["\n      ".concat(sameLevelPrefix).concat(motionCls, "-enter").concat(motionCls, "-enter-active,\n      ").concat(sameLevelPrefix).concat(motionCls, "-appear").concat(motionCls, "-appear-active\n    ")]: {
            animationName: inKeyframes,
            animationPlayState: 'running'
        },
        ["".concat(sameLevelPrefix).concat(motionCls, "-leave").concat(motionCls, "-leave-active")]: {
            animationName: outKeyframes,
            animationPlayState: 'running',
            pointerEvents: 'none'
        }
    };
};
}),
"[project]/Downloads/One click/node_modules/antd/es/style/motion/zoom.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initZoomMotion",
    ()=>initZoomMotion,
    "zoomBigIn",
    ()=>zoomBigIn,
    "zoomBigOut",
    ()=>zoomBigOut,
    "zoomDownIn",
    ()=>zoomDownIn,
    "zoomDownOut",
    ()=>zoomDownOut,
    "zoomIn",
    ()=>zoomIn,
    "zoomLeftIn",
    ()=>zoomLeftIn,
    "zoomLeftOut",
    ()=>zoomLeftOut,
    "zoomOut",
    ()=>zoomOut,
    "zoomRightIn",
    ()=>zoomRightIn,
    "zoomRightOut",
    ()=>zoomRightOut,
    "zoomUpIn",
    ()=>zoomUpIn,
    "zoomUpOut",
    ()=>zoomUpOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/Keyframes.js [client] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/motion/motion.js [client] (ecmascript)");
;
;
const zoomIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomIn', {
    '0%': {
        transform: 'scale(0.2)',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        opacity: 1
    }
});
const zoomOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomOut', {
    '0%': {
        transform: 'scale(1)'
    },
    '100%': {
        transform: 'scale(0.2)',
        opacity: 0
    }
});
const zoomBigIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomBigIn', {
    '0%': {
        transform: 'scale(0.8)',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        opacity: 1
    }
});
const zoomBigOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomBigOut', {
    '0%': {
        transform: 'scale(1)'
    },
    '100%': {
        transform: 'scale(0.8)',
        opacity: 0
    }
});
const zoomUpIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomUpIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 0%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '50% 0%'
    }
});
const zoomUpOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomUpOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '50% 0%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 0%',
        opacity: 0
    }
});
const zoomLeftIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomLeftIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '0% 50%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '0% 50%'
    }
});
const zoomLeftOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomLeftOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '0% 50%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '0% 50%',
        opacity: 0
    }
});
const zoomRightIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomRightIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '100% 50%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '100% 50%'
    }
});
const zoomRightOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomRightOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '100% 50%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '100% 50%',
        opacity: 0
    }
});
const zoomDownIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomDownIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 100%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '50% 100%'
    }
});
const zoomDownOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomDownOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '50% 100%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 100%',
        opacity: 0
    }
});
const zoomMotion = {
    zoom: {
        inKeyframes: zoomIn,
        outKeyframes: zoomOut
    },
    'zoom-big': {
        inKeyframes: zoomBigIn,
        outKeyframes: zoomBigOut
    },
    'zoom-big-fast': {
        inKeyframes: zoomBigIn,
        outKeyframes: zoomBigOut
    },
    'zoom-left': {
        inKeyframes: zoomLeftIn,
        outKeyframes: zoomLeftOut
    },
    'zoom-right': {
        inKeyframes: zoomRightIn,
        outKeyframes: zoomRightOut
    },
    'zoom-up': {
        inKeyframes: zoomUpIn,
        outKeyframes: zoomUpOut
    },
    'zoom-down': {
        inKeyframes: zoomDownIn,
        outKeyframes: zoomDownOut
    }
};
const initZoomMotion = (token, motionName)=>{
    const { antCls } = token;
    const motionCls = "".concat(antCls, "-").concat(motionName);
    const { inKeyframes, outKeyframes } = zoomMotion[motionName];
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initMotion"])(motionCls, inKeyframes, outKeyframes, motionName === 'zoom-big-fast' ? token.motionDurationFast : token.motionDurationMid),
        {
            ["\n        ".concat(motionCls, "-enter,\n        ").concat(motionCls, "-appear\n      ")]: {
                transform: 'scale(0)',
                opacity: 0,
                animationTimingFunction: token.motionEaseOutCirc,
                '&-prepare': {
                    transform: 'none'
                }
            },
            ["".concat(motionCls, "-leave")]: {
                animationTimingFunction: token.motionEaseInOutCirc
            }
        }
    ];
};
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/util/genPresetColor.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>genPresetColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/interface/presetColors.js [client] (ecmascript)");
;
function genPresetColor(token, genCss) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$client$5d$__$28$ecmascript$29$__["PresetColors"].reduce((prev, colorKey)=>{
        const lightColor = token["".concat(colorKey, "1")];
        const lightBorderColor = token["".concat(colorKey, "3")];
        const darkColor = token["".concat(colorKey, "6")];
        const textColor = token["".concat(colorKey, "7")];
        return Object.assign(Object.assign({}, prev), genCss(colorKey, {
            lightColor,
            lightBorderColor,
            darkColor,
            textColor
        }));
    }, {});
}
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/util/genPresetColor.js [client] (ecmascript) <export default as genPresetColor>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genPresetColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genPresetColor.js [client] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/antd/es/tooltip/style/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/motion/zoom.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/placementArrow.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/roundedArrow.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genPresetColor$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genPresetColor.js [client] (ecmascript) <export default as genPresetColor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [client] (ecmascript) <export merge as mergeToken>");
;
;
;
;
;
;
const genTooltipStyle = (token)=>{
    const { calc, componentCls, // ant-tooltip
    tooltipMaxWidth, tooltipColor, tooltipBg, tooltipBorderRadius, zIndexPopup, controlHeight, boxShadowSecondary, paddingSM, paddingXS, arrowOffsetHorizontal, sizePopupArrow } = token;
    // arrowOffsetHorizontal + arrowWidth + borderRadius
    const edgeAlignMinWidth = calc(tooltipBorderRadius).add(sizePopupArrow).add(arrowOffsetHorizontal).equal();
    // borderRadius * 2 + arrowWidth
    const centerAlignMinWidth = calc(tooltipBorderRadius).mul(2).add(sizePopupArrow).equal();
    return [
        {
            [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["resetComponent"])(token)), {
                position: 'absolute',
                zIndex: zIndexPopup,
                display: 'block',
                width: 'max-content',
                maxWidth: tooltipMaxWidth,
                visibility: 'visible',
                // When use `autoArrow`, origin will follow the arrow position
                '--valid-offset-x': 'var(--arrow-offset-horizontal, var(--arrow-x))',
                transformOrigin: [
                    "var(--valid-offset-x, 50%)",
                    "var(--arrow-y, 50%)"
                ].join(' '),
                '&-hidden': {
                    display: 'none'
                },
                '--antd-arrow-background-color': tooltipBg,
                // Wrapper for the tooltip content
                ["".concat(componentCls, "-inner")]: {
                    minWidth: centerAlignMinWidth,
                    minHeight: controlHeight,
                    padding: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(paddingSM).div(2).equal()), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(paddingXS)),
                    color: "var(--ant-tooltip-color, ".concat(tooltipColor, ")"),
                    textAlign: 'start',
                    textDecoration: 'none',
                    wordWrap: 'break-word',
                    backgroundColor: tooltipBg,
                    borderRadius: tooltipBorderRadius,
                    boxShadow: boxShadowSecondary,
                    boxSizing: 'border-box'
                },
                // Align placement should have another min width
                [[
                    "&-placement-topLeft",
                    "&-placement-topRight",
                    "&-placement-bottomLeft",
                    "&-placement-bottomRight"
                ].join(',')]: {
                    minWidth: edgeAlignMinWidth
                },
                // Limit left and right placement radius
                [[
                    "&-placement-left",
                    "&-placement-leftTop",
                    "&-placement-leftBottom",
                    "&-placement-right",
                    "&-placement-rightTop",
                    "&-placement-rightBottom"
                ].join(',')]: {
                    ["".concat(componentCls, "-inner")]: {
                        borderRadius: token.min(tooltipBorderRadius, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MAX_VERTICAL_CONTENT_RADIUS"])
                    }
                },
                ["".concat(componentCls, "-content")]: {
                    position: 'relative'
                }
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genPresetColor$3e$__["genPresetColor"])(token, (colorKey, param)=>{
                let { darkColor } = param;
                return {
                    ["&".concat(componentCls, "-").concat(colorKey)]: {
                        ["".concat(componentCls, "-inner")]: {
                            backgroundColor: darkColor
                        },
                        ["".concat(componentCls, "-arrow")]: {
                            '--antd-arrow-background-color': darkColor
                        }
                    }
                };
            })), {
                // RTL
                '&-rtl': {
                    direction: 'rtl'
                }
            })
        },
        // Arrow Style
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(token, 'var(--antd-arrow-background-color)'),
        // Pure Render
        {
            ["".concat(componentCls, "-pure")]: {
                position: 'relative',
                maxWidth: 'none',
                margin: token.sizePopupArrow
            }
        }
    ];
};
const prepareComponentToken = (token)=>Object.assign(Object.assign({
        zIndexPopup: token.zIndexPopupBase + 70
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getArrowOffsetToken"])({
        contentRadius: token.borderRadius,
        limitVerticalRadius: true
    })), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getArrowToken"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        borderRadiusOuter: Math.min(token.borderRadiusOuter, 4)
    })));
const __TURBOPACK__default__export__ = function(prefixCls) {
    let injectStyle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    const useStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Tooltip', (token)=>{
        const { borderRadius, colorTextLightSolid, colorBgSpotlight } = token;
        const TooltipToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
            // default variables
            tooltipMaxWidth: 250,
            tooltipColor: colorTextLightSolid,
            tooltipBorderRadius: borderRadius,
            tooltipBg: colorBgSpotlight
        });
        return [
            genTooltipStyle(TooltipToken),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initZoomMotion"])(token, 'zoom-big-fast')
        ];
    }, prepareComponentToken, {
        resetStyle: false,
        // Popover use Tooltip as internal component. We do not need to handle this.
        injectStyle
    });
    return useStyle(prefixCls);
};
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/colors.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PresetStatusColorTypes",
    ()=>PresetStatusColorTypes,
    "isPresetColor",
    ()=>isPresetColor,
    "isPresetStatusColor",
    ()=>isPresetStatusColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/interface/presetColors.js [client] (ecmascript)");
;
;
const inverseColors = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$client$5d$__$28$ecmascript$29$__["PresetColors"].map((color)=>"".concat(color, "-inverse"));
const PresetStatusColorTypes = [
    'success',
    'processing',
    'error',
    'default',
    'warning'
];
function isPresetColor(color) {
    let includeInverse = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (includeInverse) {
        return [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(inverseColors), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$client$5d$__$28$ecmascript$29$__["PresetColors"])).includes(color);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$client$5d$__$28$ecmascript$29$__["PresetColors"].includes(color);
}
function isPresetStatusColor(color) {
    return PresetStatusColorTypes.includes(color);
}
}),
"[project]/Downloads/One click/node_modules/antd/es/tooltip/util.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseColor",
    ()=>parseColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$colors$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/colors.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/color-picker/util.js [client] (ecmascript)");
;
;
;
function parseColor(prefixCls, color) {
    const isInternalColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$colors$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isPresetColor"])(color);
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        ["".concat(prefixCls, "-").concat(color)]: color && isInternalColor
    });
    const overlayStyle = {};
    const arrowStyle = {};
    const rgb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$client$5d$__$28$ecmascript$29$__["generateColor"])(color).toRgb();
    const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    const textColor = luminance < 0.5 ? '#FFF' : '#000';
    if (color && !isInternalColor) {
        overlayStyle.background = color;
        overlayStyle['--ant-tooltip-color'] = textColor;
        // @ts-ignore
        arrowStyle['--antd-arrow-background-color'] = color;
    }
    return {
        className,
        overlayStyle,
        arrowStyle
    };
}
}),
"[project]/Downloads/One click/node_modules/antd/es/tooltip/PurePanel.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tooltip$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-tooltip/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tooltip$2f$es$2f$Popup$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popup$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-tooltip/es/Popup.js [client] (ecmascript) <export default as Popup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tooltip/style/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$util$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tooltip/util.js [client] (ecmascript)");
"use client";
;
;
;
;
;
;
/** @private Internal Component. Do not use in your production. */ const PurePanel = (props)=>{
    const { prefixCls: customizePrefixCls, className, placement = 'top', title, color, overlayInnerStyle } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('tooltip', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    // Color
    const colorInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$util$2e$js__$5b$client$5d$__$28$ecmascript$29$__["parseColor"])(prefixCls, color);
    const arrowContentStyle = colorInfo.arrowStyle;
    const formattedOverlayInnerStyle = Object.assign(Object.assign({}, overlayInnerStyle), colorInfo.overlayStyle);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(hashId, cssVarCls, prefixCls, "".concat(prefixCls, "-pure"), "".concat(prefixCls, "-placement-").concat(placement), className, colorInfo.className);
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: cls,
        style: arrowContentStyle
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: "".concat(prefixCls, "-arrow")
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tooltip$2f$es$2f$Popup$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popup$3e$__["Popup"], Object.assign({}, props, {
        className: hashId,
        prefixCls: prefixCls,
        overlayInnerStyle: formattedOverlayInnerStyle
    }), title)));
};
const __TURBOPACK__default__export__ = PurePanel;
}),
"[project]/Downloads/One click/node_modules/antd/es/tooltip/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tooltip$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-tooltip/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useMergedState.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/ContextIsolator.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/hooks/useZIndex.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/motion.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$placements$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/placements.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/reactNode.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/zindexContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/useToken.js [client] (ecmascript) <export default as useToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$PurePanel$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tooltip/PurePanel.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tooltip/style/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$util$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tooltip/util.js [client] (ecmascript)");
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
const InternalTooltip = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    var _a, _b;
    const { prefixCls: customizePrefixCls, openClassName, getTooltipContainer, color, overlayInnerStyle, children, afterOpenChange, afterVisibleChange, destroyTooltipOnHide, destroyOnHidden, arrow = true, title, overlay, builtinPlacements, arrowPointAtCenter = false, autoAdjustOverflow = true, motion: _motion, getPopupContainer, placement = 'top', mouseEnterDelay = 0.1, mouseLeaveDelay = 0.1, overlayStyle, rootClassName, overlayClassName, styles, classNames: tooltipClassNames } = props, restProps = __rest(props, [
        "prefixCls",
        "openClassName",
        "getTooltipContainer",
        "color",
        "overlayInnerStyle",
        "children",
        "afterOpenChange",
        "afterVisibleChange",
        "destroyTooltipOnHide",
        "destroyOnHidden",
        "arrow",
        "title",
        "overlay",
        "builtinPlacements",
        "arrowPointAtCenter",
        "autoAdjustOverflow",
        "motion",
        "getPopupContainer",
        "placement",
        "mouseEnterDelay",
        "mouseLeaveDelay",
        "overlayStyle",
        "rootClassName",
        "overlayClassName",
        "styles",
        "classNames"
    ]);
    const mergedShowArrow = !!arrow;
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const { getPopupContainer: getContextPopupContainer, getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('tooltip');
    // ============================== Ref ===============================
    const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Tooltip');
    const tooltipRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const forceAlign = ()=>{
        var _a;
        (_a = tooltipRef.current) === null || _a === void 0 ? void 0 : _a.forceAlign();
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "InternalTooltip.useImperativeHandle": ()=>{
            var _a, _b;
            return {
                forceAlign,
                forcePopupAlign: ({
                    "InternalTooltip.useImperativeHandle": ()=>{
                        warning.deprecated(false, 'forcePopupAlign', 'forceAlign');
                        forceAlign();
                    }
                })["InternalTooltip.useImperativeHandle"],
                nativeElement: (_a = tooltipRef.current) === null || _a === void 0 ? void 0 : _a.nativeElement,
                popupElement: (_b = tooltipRef.current) === null || _b === void 0 ? void 0 : _b.popupElement
            };
        }
    }["InternalTooltip.useImperativeHandle"]);
    // ============================== Warn ==============================
    if ("TURBOPACK compile-time truthy", 1) {
        [
            [
                'visible',
                'open'
            ],
            [
                'defaultVisible',
                'defaultOpen'
            ],
            [
                'onVisibleChange',
                'onOpenChange'
            ],
            [
                'afterVisibleChange',
                'afterOpenChange'
            ],
            [
                'destroyTooltipOnHide',
                'destroyOnHidden'
            ],
            [
                'arrowPointAtCenter',
                'arrow={{ pointAtCenter: true }}'
            ],
            [
                'overlayStyle',
                'styles={{ root: {} }}'
            ],
            [
                'overlayInnerStyle',
                'styles={{ body: {} }}'
            ],
            [
                'overlayClassName',
                'classNames={{ root: "" }}'
            ]
        ].forEach((param)=>{
            let [deprecatedName, newName] = param;
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
        ("TURBOPACK compile-time truthy", 1) ? warning(!destroyTooltipOnHide || typeof destroyTooltipOnHide === 'boolean', 'usage', '`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly.') : "TURBOPACK unreachable";
        ("TURBOPACK compile-time truthy", 1) ? warning(!arrow || typeof arrow === 'boolean' || !('arrowPointAtCenter' in arrow), 'deprecated', '`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead.') : "TURBOPACK unreachable";
    }
    // ============================== Open ==============================
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(false, {
        value: (_a = props.open) !== null && _a !== void 0 ? _a : props.visible,
        defaultValue: (_b = props.defaultOpen) !== null && _b !== void 0 ? _b : props.defaultVisible
    });
    const noTitle = !title && !overlay && title !== 0; // overlay for old version compatibility
    const onOpenChange = (vis)=>{
        var _a, _b;
        setOpen(noTitle ? false : vis);
        if (!noTitle) {
            (_a = props.onOpenChange) === null || _a === void 0 ? void 0 : _a.call(props, vis);
            (_b = props.onVisibleChange) === null || _b === void 0 ? void 0 : _b.call(props, vis);
        }
    };
    const tooltipPlacements = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalTooltip.useMemo[tooltipPlacements]": ()=>{
            var _a, _b;
            let mergedArrowPointAtCenter = arrowPointAtCenter;
            if (typeof arrow === 'object') {
                mergedArrowPointAtCenter = (_b = (_a = arrow.pointAtCenter) !== null && _a !== void 0 ? _a : arrow.arrowPointAtCenter) !== null && _b !== void 0 ? _b : arrowPointAtCenter;
            }
            return builtinPlacements || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$placements$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
                arrowPointAtCenter: mergedArrowPointAtCenter,
                autoAdjustOverflow,
                arrowWidth: mergedShowArrow ? token.sizePopupArrow : 0,
                borderRadius: token.borderRadius,
                offset: token.marginXXS,
                visibleFirst: true
            });
        }
    }["InternalTooltip.useMemo[tooltipPlacements]"], [
        arrowPointAtCenter,
        arrow,
        builtinPlacements,
        token
    ]);
    const memoOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalTooltip.useMemo[memoOverlay]": ()=>{
            if (title === 0) {
                return title;
            }
            return overlay || title || '';
        }
    }["InternalTooltip.useMemo[memoOverlay]"], [
        overlay,
        title
    ]);
    const memoOverlayWrapper = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        space: true
    }, typeof memoOverlay === 'function' ? memoOverlay() : memoOverlay);
    const prefixCls = getPrefixCls('tooltip', customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    const injectFromPopover = props['data-popover-inject'];
    let tempOpen = open;
    // Hide tooltip when there is no title
    if (!('open' in props) && !('visible' in props) && noTitle) {
        tempOpen = false;
    }
    // ============================= Render =============================
    const child = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isValidElement"](children) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isFragment"])(children) ? children : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("span", null, children);
    const childProps = child.props;
    const childCls = !childProps.className || typeof childProps.className === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(childProps.className, openClassName || "".concat(prefixCls, "-open")) : childProps.className;
    // Style
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, !injectFromPopover);
    // Color
    const colorInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$util$2e$js__$5b$client$5d$__$28$ecmascript$29$__["parseColor"])(prefixCls, color);
    const arrowContentStyle = colorInfo.arrowStyle;
    const rootClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(overlayClassName, {
        ["".concat(prefixCls, "-rtl")]: direction === 'rtl'
    }, colorInfo.className, rootClassName, hashId, cssVarCls, contextClassName, contextClassNames.root, tooltipClassNames === null || tooltipClassNames === void 0 ? void 0 : tooltipClassNames.root);
    const bodyClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(contextClassNames.body, tooltipClassNames === null || tooltipClassNames === void 0 ? void 0 : tooltipClassNames.body);
    // ============================ zIndex ============================
    const [zIndex, contextZIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useZIndex"])('Tooltip', restProps.zIndex);
    const content = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tooltip$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], Object.assign({}, restProps, {
        zIndex: zIndex,
        showArrow: mergedShowArrow,
        placement: placement,
        mouseEnterDelay: mouseEnterDelay,
        mouseLeaveDelay: mouseLeaveDelay,
        prefixCls: prefixCls,
        classNames: {
            root: rootClassNames,
            body: bodyClassNames
        },
        styles: {
            root: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, arrowContentStyle), contextStyles.root), contextStyle), overlayStyle), styles === null || styles === void 0 ? void 0 : styles.root),
            body: Object.assign(Object.assign(Object.assign(Object.assign({}, contextStyles.body), overlayInnerStyle), styles === null || styles === void 0 ? void 0 : styles.body), colorInfo.overlayStyle)
        },
        getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
        ref: tooltipRef,
        builtinPlacements: tooltipPlacements,
        overlay: memoOverlayWrapper,
        visible: tempOpen,
        onVisibleChange: onOpenChange,
        afterVisibleChange: afterOpenChange !== null && afterOpenChange !== void 0 ? afterOpenChange : afterVisibleChange,
        arrowContent: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: "".concat(prefixCls, "-arrow-content")
        }),
        motion: {
            motionName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getTransitionName"])(rootPrefixCls, 'zoom-big-fast', props.transitionName),
            motionDeadline: 1000
        },
        // TODO: In the future, destroyTooltipOnHide in rc-tooltip needs to be upgrade to destroyOnHidden
        destroyTooltipOnHide: destroyOnHidden !== null && destroyOnHidden !== void 0 ? destroyOnHidden : !!destroyTooltipOnHide
    }), tempOpen ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
        className: childCls
    }) : child);
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: contextZIndex
    }, content));
});
const Tooltip = InternalTooltip;
if ("TURBOPACK compile-time truthy", 1) {
    Tooltip.displayName = 'Tooltip';
}
Tooltip._InternalPanelDoNotUseOrYouWillBeFired = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$PurePanel$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = Tooltip;
}),
"[project]/Downloads/One click/node_modules/antd/es/menu/MenuItem.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$menu$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-menu/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Item$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-menu/es/MenuItem.js [client] (ecmascript) <export default as Item>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Children/toArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/omit.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/reactNode.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$layout$2f$Sider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/layout/Sider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tooltip/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/menu/MenuContext.js [client] (ecmascript)");
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
const MenuItem = (props)=>{
    var _a;
    const { className, children, icon, title, danger, extra } = props;
    const { prefixCls, firstLevel, direction, disableMenuItemTitleTooltip, inlineCollapsed: isInlineCollapsed } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
    const renderItemChildren = (inlineCollapsed)=>{
        const label = children === null || children === void 0 ? void 0 : children[0];
        const wrapNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-title-content"), {
                ["".concat(prefixCls, "-title-content-with-extra")]: !!extra || extra === 0
            })
        }, children);
        // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
        // ref: https://github.com/ant-design/ant-design/pull/23456
        if (!icon || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isValidElement"](children) && children.type === 'span') {
            if (children && inlineCollapsed && firstLevel && typeof label === 'string') {
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
                    className: "".concat(prefixCls, "-inline-collapsed-noicon")
                }, label.charAt(0));
            }
        }
        return wrapNode;
    };
    const { siderCollapsed } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$layout$2f$Sider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SiderContext"]);
    let tooltipTitle = title;
    if (typeof title === 'undefined') {
        tooltipTitle = firstLevel ? children : '';
    } else if (title === false) {
        tooltipTitle = '';
    }
    const tooltipProps = {
        title: tooltipTitle
    };
    if (!siderCollapsed && !isInlineCollapsed) {
        tooltipProps.title = null;
        // Reset `open` to fix control mode tooltip display not correct
        // ref: https://github.com/ant-design/ant-design/issues/16742
        tooltipProps.open = false;
    }
    const childrenLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(children).length;
    let returnNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Item$3e$__["Item"], Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, [
        'title',
        'icon',
        'danger'
    ]), {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
            ["".concat(prefixCls, "-item-danger")]: danger,
            ["".concat(prefixCls, "-item-only-child")]: (icon ? childrenLength + 1 : childrenLength) === 1
        }, className),
        title: typeof title === 'string' ? title : undefined
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cloneElement"])(icon, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isValidElement"](icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : undefined, "".concat(prefixCls, "-item-icon"))
    }), renderItemChildren(isInlineCollapsed));
    if (!disableMenuItemTitleTooltip) {
        returnNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], Object.assign({}, tooltipProps, {
            placement: direction === 'rtl' ? 'left' : 'right',
            classNames: {
                root: "".concat(prefixCls, "-inline-collapsed-tooltip")
            }
        }), returnNode);
    }
    return returnNode;
};
const __TURBOPACK__default__export__ = MenuItem;
}),
"[project]/Downloads/One click/node_modules/antd/es/menu/OverrideContext.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OverrideProvider",
    ()=>OverrideProvider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/ref.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/ContextIsolator.js [client] (ecmascript)");
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
const OverrideContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"](null);
const OverrideProvider = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { children } = props, restProps = __rest(props, [
        "children"
    ]);
    const override = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](OverrideContext);
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "OverrideProvider.useMemo[context]": ()=>Object.assign(Object.assign({}, override), restProps)
    }["OverrideProvider.useMemo[context]"], [
        override,
        restProps.prefixCls,
        // restProps.expandIcon, Not mark as deps since this is a ReactNode
        restProps.mode,
        restProps.selectable,
        restProps.rootClassName
    ]);
    const canRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supportNodeRef"])(children);
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useComposeRef"])(ref, canRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getNodeRef"])(children) : null);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](OverrideContext.Provider, {
        value: context
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        space: true
    }, canRef ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cloneElement"](children, {
        ref: mergedRef
    }) : children));
});
const __TURBOPACK__default__export__ = OverrideContext;
}),
"[project]/Downloads/One click/node_modules/antd/es/style/motion/slide.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initSlideMotion",
    ()=>initSlideMotion,
    "slideDownIn",
    ()=>slideDownIn,
    "slideDownOut",
    ()=>slideDownOut,
    "slideLeftIn",
    ()=>slideLeftIn,
    "slideLeftOut",
    ()=>slideLeftOut,
    "slideRightIn",
    ()=>slideRightIn,
    "slideRightOut",
    ()=>slideRightOut,
    "slideUpIn",
    ()=>slideUpIn,
    "slideUpOut",
    ()=>slideUpOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/Keyframes.js [client] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/motion/motion.js [client] (ecmascript)");
;
;
const slideUpIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideUpIn', {
    '0%': {
        transform: 'scaleY(0.8)',
        transformOrigin: '0% 0%',
        opacity: 0
    },
    '100%': {
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%',
        opacity: 1
    }
});
const slideUpOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideUpOut', {
    '0%': {
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%',
        opacity: 1
    },
    '100%': {
        transform: 'scaleY(0.8)',
        transformOrigin: '0% 0%',
        opacity: 0
    }
});
const slideDownIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideDownIn', {
    '0%': {
        transform: 'scaleY(0.8)',
        transformOrigin: '100% 100%',
        opacity: 0
    },
    '100%': {
        transform: 'scaleY(1)',
        transformOrigin: '100% 100%',
        opacity: 1
    }
});
const slideDownOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideDownOut', {
    '0%': {
        transform: 'scaleY(1)',
        transformOrigin: '100% 100%',
        opacity: 1
    },
    '100%': {
        transform: 'scaleY(0.8)',
        transformOrigin: '100% 100%',
        opacity: 0
    }
});
const slideLeftIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideLeftIn', {
    '0%': {
        transform: 'scaleX(0.8)',
        transformOrigin: '0% 0%',
        opacity: 0
    },
    '100%': {
        transform: 'scaleX(1)',
        transformOrigin: '0% 0%',
        opacity: 1
    }
});
const slideLeftOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideLeftOut', {
    '0%': {
        transform: 'scaleX(1)',
        transformOrigin: '0% 0%',
        opacity: 1
    },
    '100%': {
        transform: 'scaleX(0.8)',
        transformOrigin: '0% 0%',
        opacity: 0
    }
});
const slideRightIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideRightIn', {
    '0%': {
        transform: 'scaleX(0.8)',
        transformOrigin: '100% 0%',
        opacity: 0
    },
    '100%': {
        transform: 'scaleX(1)',
        transformOrigin: '100% 0%',
        opacity: 1
    }
});
const slideRightOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideRightOut', {
    '0%': {
        transform: 'scaleX(1)',
        transformOrigin: '100% 0%',
        opacity: 1
    },
    '100%': {
        transform: 'scaleX(0.8)',
        transformOrigin: '100% 0%',
        opacity: 0
    }
});
const slideMotion = {
    'slide-up': {
        inKeyframes: slideUpIn,
        outKeyframes: slideUpOut
    },
    'slide-down': {
        inKeyframes: slideDownIn,
        outKeyframes: slideDownOut
    },
    'slide-left': {
        inKeyframes: slideLeftIn,
        outKeyframes: slideLeftOut
    },
    'slide-right': {
        inKeyframes: slideRightIn,
        outKeyframes: slideRightOut
    }
};
const initSlideMotion = (token, motionName)=>{
    const { antCls } = token;
    const motionCls = "".concat(antCls, "-").concat(motionName);
    const { inKeyframes, outKeyframes } = slideMotion[motionName];
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initMotion"])(motionCls, inKeyframes, outKeyframes, token.motionDurationMid),
        {
            ["\n      ".concat(motionCls, "-enter,\n      ").concat(motionCls, "-appear\n    ")]: {
                transform: 'scale(0)',
                transformOrigin: '0% 0%',
                opacity: 0,
                animationTimingFunction: token.motionEaseOutQuint,
                '&-prepare': {
                    transform: 'scale(1)'
                }
            },
            ["".concat(motionCls, "-leave")]: {
                animationTimingFunction: token.motionEaseInQuint
            }
        }
    ];
};
}),
"[project]/Downloads/One click/node_modules/antd/es/menu/style/horizontal.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [client] (ecmascript)");
;
const getHorizontalStyle = (token)=>{
    const { componentCls, motionDurationSlow, horizontalLineHeight, colorSplit, lineWidth, lineType, itemPaddingInline } = token;
    return {
        ["".concat(componentCls, "-horizontal")]: {
            lineHeight: horizontalLineHeight,
            border: 0,
            borderBottom: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth), " ").concat(lineType, " ").concat(colorSplit),
            boxShadow: 'none',
            '&::after': {
                display: 'block',
                clear: 'both',
                height: 0,
                content: '"\\20"'
            },
            // ======================= Item =======================
            ["".concat(componentCls, "-item, ").concat(componentCls, "-submenu")]: {
                position: 'relative',
                display: 'inline-block',
                verticalAlign: 'bottom',
                paddingInline: itemPaddingInline
            },
            ["> ".concat(componentCls, "-item:hover,\n        > ").concat(componentCls, "-item-active,\n        > ").concat(componentCls, "-submenu ").concat(componentCls, "-submenu-title:hover")]: {
                backgroundColor: 'transparent'
            },
            ["".concat(componentCls, "-item, ").concat(componentCls, "-submenu-title")]: {
                transition: [
                    "border-color ".concat(motionDurationSlow),
                    "background ".concat(motionDurationSlow)
                ].join(',')
            },
            // ===================== Sub Menu =====================
            ["".concat(componentCls, "-submenu-arrow")]: {
                display: 'none'
            }
        }
    };
};
const __TURBOPACK__default__export__ = getHorizontalStyle;
}),
"[project]/Downloads/One click/node_modules/antd/es/menu/style/rtl.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [client] (ecmascript)");
;
const getRTLStyle = (param)=>{
    let { componentCls, menuArrowOffset, calc } = param;
    return {
        ["".concat(componentCls, "-rtl")]: {
            direction: 'rtl'
        },
        ["".concat(componentCls, "-submenu-rtl")]: {
            transformOrigin: '100% 0'
        },
        // Vertical Arrow
        ["".concat(componentCls, "-rtl").concat(componentCls, "-vertical,\n    ").concat(componentCls, "-submenu-rtl ").concat(componentCls, "-vertical")]: {
            ["".concat(componentCls, "-submenu-arrow")]: {
                '&::before': {
                    transform: "rotate(-45deg) translateY(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(calc(menuArrowOffset).mul(-1).equal()), ")")
                },
                '&::after': {
                    transform: "rotate(45deg) translateY(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(menuArrowOffset), ")")
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = getRTLStyle;
}),
"[project]/Downloads/One click/node_modules/antd/es/menu/style/theme.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [client] (ecmascript)");
;
;
const accessibilityFocus = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genFocusOutline"])(token);
const getThemeStyle = (token, themeSuffix)=>{
    const { componentCls, itemColor, itemSelectedColor, subMenuItemSelectedColor, groupTitleColor, itemBg, subMenuItemBg, itemSelectedBg, activeBarHeight, activeBarWidth, activeBarBorderWidth, motionDurationSlow, motionEaseInOut, motionEaseOut, itemPaddingInline, motionDurationMid, itemHoverColor, lineType, colorSplit, // Disabled
    itemDisabledColor, // Danger
    dangerItemColor, dangerItemHoverColor, dangerItemSelectedColor, dangerItemActiveBg, dangerItemSelectedBg, // Bg
    popupBg, itemHoverBg, itemActiveBg, menuSubMenuBg, // Horizontal
    horizontalItemSelectedColor, horizontalItemSelectedBg, horizontalItemBorderRadius, horizontalItemHoverBg } = token;
    return {
        ["".concat(componentCls, "-").concat(themeSuffix, ", ").concat(componentCls, "-").concat(themeSuffix, " > ").concat(componentCls)]: {
            color: itemColor,
            background: itemBg,
            ["&".concat(componentCls, "-root:focus-visible")]: Object.assign({}, accessibilityFocus(token)),
            // ======================== Item ========================
            ["".concat(componentCls, "-item")]: {
                '&-group-title, &-extra': {
                    color: groupTitleColor
                }
            },
            ["".concat(componentCls, "-submenu-selected > ").concat(componentCls, "-submenu-title")]: {
                color: subMenuItemSelectedColor
            },
            ["".concat(componentCls, "-item, ").concat(componentCls, "-submenu-title")]: {
                color: itemColor,
                ["&:not(".concat(componentCls, "-item-disabled):focus-visible")]: Object.assign({}, accessibilityFocus(token))
            },
            // Disabled
            ["".concat(componentCls, "-item-disabled, ").concat(componentCls, "-submenu-disabled")]: {
                color: "".concat(itemDisabledColor, " !important")
            },
            // Hover
            ["".concat(componentCls, "-item:not(").concat(componentCls, "-item-selected):not(").concat(componentCls, "-submenu-selected)")]: {
                ["&:hover, > ".concat(componentCls, "-submenu-title:hover")]: {
                    color: itemHoverColor
                }
            },
            ["&:not(".concat(componentCls, "-horizontal)")]: {
                ["".concat(componentCls, "-item:not(").concat(componentCls, "-item-selected)")]: {
                    '&:hover': {
                        backgroundColor: itemHoverBg
                    },
                    '&:active': {
                        backgroundColor: itemActiveBg
                    }
                },
                ["".concat(componentCls, "-submenu-title")]: {
                    '&:hover': {
                        backgroundColor: itemHoverBg
                    },
                    '&:active': {
                        backgroundColor: itemActiveBg
                    }
                }
            },
            // Danger - only Item has
            ["".concat(componentCls, "-item-danger")]: {
                color: dangerItemColor,
                ["&".concat(componentCls, "-item:hover")]: {
                    ["&:not(".concat(componentCls, "-item-selected):not(").concat(componentCls, "-submenu-selected)")]: {
                        color: dangerItemHoverColor
                    }
                },
                ["&".concat(componentCls, "-item:active")]: {
                    background: dangerItemActiveBg
                }
            },
            ["".concat(componentCls, "-item a")]: {
                '&, &:hover': {
                    color: 'inherit'
                }
            },
            ["".concat(componentCls, "-item-selected")]: {
                color: itemSelectedColor,
                // Danger
                ["&".concat(componentCls, "-item-danger")]: {
                    color: dangerItemSelectedColor
                },
                'a, a:hover': {
                    color: 'inherit'
                }
            },
            ["& ".concat(componentCls, "-item-selected")]: {
                backgroundColor: itemSelectedBg,
                // Danger
                ["&".concat(componentCls, "-item-danger")]: {
                    backgroundColor: dangerItemSelectedBg
                }
            },
            ["&".concat(componentCls, "-submenu > ").concat(componentCls)]: {
                backgroundColor: menuSubMenuBg
            },
            // ===== 设置浮层的颜色 =======
            // ！dark 模式会被popupBg 会被rest 为 darkPopupBg
            ["&".concat(componentCls, "-popup > ").concat(componentCls)]: {
                backgroundColor: popupBg
            },
            ["&".concat(componentCls, "-submenu-popup > ").concat(componentCls)]: {
                backgroundColor: popupBg
            },
            // ===== 设置浮层的颜色 end =======
            // ====================== Horizontal ======================
            ["&".concat(componentCls, "-horizontal")]: Object.assign(Object.assign({}, themeSuffix === 'dark' ? {
                borderBottom: 0
            } : {}), {
                ["> ".concat(componentCls, "-item, > ").concat(componentCls, "-submenu")]: {
                    top: activeBarBorderWidth,
                    marginTop: token.calc(activeBarBorderWidth).mul(-1).equal(),
                    marginBottom: 0,
                    borderRadius: horizontalItemBorderRadius,
                    '&::after': {
                        position: 'absolute',
                        insetInline: itemPaddingInline,
                        bottom: 0,
                        borderBottom: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(activeBarHeight), " solid transparent"),
                        transition: "border-color ".concat(motionDurationSlow, " ").concat(motionEaseInOut),
                        content: '""'
                    },
                    '&:hover, &-active, &-open': {
                        background: horizontalItemHoverBg,
                        '&::after': {
                            borderBottomWidth: activeBarHeight,
                            borderBottomColor: horizontalItemSelectedColor
                        }
                    },
                    '&-selected': {
                        color: horizontalItemSelectedColor,
                        backgroundColor: horizontalItemSelectedBg,
                        '&:hover': {
                            backgroundColor: horizontalItemSelectedBg
                        },
                        '&::after': {
                            borderBottomWidth: activeBarHeight,
                            borderBottomColor: horizontalItemSelectedColor
                        }
                    }
                }
            }),
            // ================== Inline & Vertical ===================
            //
            ["&".concat(componentCls, "-root")]: {
                ["&".concat(componentCls, "-inline, &").concat(componentCls, "-vertical")]: {
                    borderInlineEnd: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(activeBarBorderWidth), " ").concat(lineType, " ").concat(colorSplit)
                }
            },
            // ======================== Inline ========================
            ["&".concat(componentCls, "-inline")]: {
                // Sub
                ["".concat(componentCls, "-sub").concat(componentCls, "-inline")]: {
                    background: subMenuItemBg
                },
                ["".concat(componentCls, "-item")]: {
                    position: 'relative',
                    '&::after': {
                        position: 'absolute',
                        insetBlock: 0,
                        insetInlineEnd: 0,
                        borderInlineEnd: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(activeBarWidth), " solid ").concat(itemSelectedColor),
                        transform: 'scaleY(0.0001)',
                        opacity: 0,
                        transition: [
                            "transform ".concat(motionDurationMid, " ").concat(motionEaseOut),
                            "opacity ".concat(motionDurationMid, " ").concat(motionEaseOut)
                        ].join(','),
                        content: '""'
                    },
                    // Danger
                    ["&".concat(componentCls, "-item-danger")]: {
                        '&::after': {
                            borderInlineEndColor: dangerItemSelectedColor
                        }
                    }
                },
                ["".concat(componentCls, "-selected, ").concat(componentCls, "-item-selected")]: {
                    '&::after': {
                        transform: 'scaleY(1)',
                        opacity: 1,
                        transition: [
                            "transform ".concat(motionDurationMid, " ").concat(motionEaseInOut),
                            "opacity ".concat(motionDurationMid, " ").concat(motionEaseInOut)
                        ].join(',')
                    }
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = getThemeStyle;
}),
"[project]/Downloads/One click/node_modules/antd/es/menu/style/vertical.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [client] (ecmascript)");
;
;
const getVerticalInlineStyle = (token)=>{
    const { componentCls, itemHeight, itemMarginInline, padding, menuArrowSize, marginXS, itemMarginBlock, itemWidth, itemPaddingInline } = token;
    const paddingWithArrow = token.calc(menuArrowSize).add(padding).add(marginXS).equal();
    return {
        ["".concat(componentCls, "-item")]: {
            position: 'relative',
            overflow: 'hidden'
        },
        ["".concat(componentCls, "-item, ").concat(componentCls, "-submenu-title")]: {
            height: itemHeight,
            lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(itemHeight),
            paddingInline: itemPaddingInline,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            marginInline: itemMarginInline,
            marginBlock: itemMarginBlock,
            width: itemWidth
        },
        ["> ".concat(componentCls, "-item,\n            > ").concat(componentCls, "-submenu > ").concat(componentCls, "-submenu-title")]: {
            height: itemHeight,
            lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(itemHeight)
        },
        ["".concat(componentCls, "-item-group-list ").concat(componentCls, "-submenu-title,\n            ").concat(componentCls, "-submenu-title")]: {
            paddingInlineEnd: paddingWithArrow
        }
    };
};
const getVerticalStyle = (token)=>{
    const { componentCls, iconCls, itemHeight, colorTextLightSolid, dropdownWidth, controlHeightLG, motionEaseOut, paddingXL, itemMarginInline, fontSizeLG, motionDurationFast, motionDurationSlow, paddingXS, boxShadowSecondary, collapsedWidth, collapsedIconSize } = token;
    const inlineItemStyle = {
        height: itemHeight,
        lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(itemHeight),
        listStylePosition: 'inside',
        listStyleType: 'disc'
    };
    return [
        {
            [componentCls]: {
                '&-inline, &-vertical': Object.assign({
                    ["&".concat(componentCls, "-root")]: {
                        boxShadow: 'none'
                    }
                }, getVerticalInlineStyle(token))
            },
            ["".concat(componentCls, "-submenu-popup")]: {
                ["".concat(componentCls, "-vertical")]: Object.assign(Object.assign({}, getVerticalInlineStyle(token)), {
                    boxShadow: boxShadowSecondary
                })
            }
        },
        // Vertical only
        {
            ["".concat(componentCls, "-submenu-popup ").concat(componentCls, "-vertical").concat(componentCls, "-sub")]: {
                minWidth: dropdownWidth,
                maxHeight: "calc(100vh - ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(controlHeightLG).mul(2.5).equal()), ")"),
                padding: '0',
                overflow: 'hidden',
                borderInlineEnd: 0,
                // https://github.com/ant-design/ant-design/issues/22244
                // https://github.com/ant-design/ant-design/issues/26812
                "&:not([class*='-active'])": {
                    overflowX: 'hidden',
                    overflowY: 'auto'
                }
            }
        },
        // Inline Only
        {
            ["".concat(componentCls, "-inline")]: {
                width: '100%',
                // Motion enhance for first level
                ["&".concat(componentCls, "-root")]: {
                    ["".concat(componentCls, "-item, ").concat(componentCls, "-submenu-title")]: {
                        display: 'flex',
                        alignItems: 'center',
                        transition: [
                            "border-color ".concat(motionDurationSlow),
                            "background ".concat(motionDurationSlow),
                            "padding ".concat(motionDurationFast, " ").concat(motionEaseOut)
                        ].join(','),
                        ["> ".concat(componentCls, "-title-content")]: {
                            flex: 'auto',
                            minWidth: 0,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        },
                        '> *': {
                            flex: 'none'
                        }
                    }
                },
                // >>>>> Sub
                ["".concat(componentCls, "-sub").concat(componentCls, "-inline")]: {
                    padding: 0,
                    border: 0,
                    borderRadius: 0,
                    boxShadow: 'none',
                    ["& > ".concat(componentCls, "-submenu > ").concat(componentCls, "-submenu-title")]: inlineItemStyle,
                    ["& ".concat(componentCls, "-item-group-title")]: {
                        paddingInlineStart: paddingXL
                    }
                },
                // >>>>> Item
                ["".concat(componentCls, "-item")]: inlineItemStyle
            }
        },
        // Inline Collapse Only
        {
            ["".concat(componentCls, "-inline-collapsed")]: {
                width: collapsedWidth,
                ["&".concat(componentCls, "-root")]: {
                    ["".concat(componentCls, "-item, ").concat(componentCls, "-submenu ").concat(componentCls, "-submenu-title")]: {
                        ["> ".concat(componentCls, "-inline-collapsed-noicon")]: {
                            fontSize: fontSizeLG,
                            textAlign: 'center'
                        }
                    }
                },
                ["> ".concat(componentCls, "-item,\n          > ").concat(componentCls, "-item-group > ").concat(componentCls, "-item-group-list > ").concat(componentCls, "-item,\n          > ").concat(componentCls, "-item-group > ").concat(componentCls, "-item-group-list > ").concat(componentCls, "-submenu > ").concat(componentCls, "-submenu-title,\n          > ").concat(componentCls, "-submenu > ").concat(componentCls, "-submenu-title")]: {
                    insetInlineStart: 0,
                    paddingInline: "calc(50% - ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(collapsedIconSize).div(2).equal()), " - ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(itemMarginInline), ")"),
                    textOverflow: 'clip',
                    ["\n            ".concat(componentCls, "-submenu-arrow,\n            ").concat(componentCls, "-submenu-expand-icon\n          ")]: {
                        opacity: 0
                    },
                    ["".concat(componentCls, "-item-icon, ").concat(iconCls)]: {
                        margin: 0,
                        fontSize: collapsedIconSize,
                        lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(itemHeight),
                        '+ span': {
                            display: 'inline-block',
                            opacity: 0
                        }
                    }
                },
                ["".concat(componentCls, "-item-icon, ").concat(iconCls)]: {
                    display: 'inline-block'
                },
                '&-tooltip': {
                    pointerEvents: 'none',
                    ["".concat(componentCls, "-item-icon, ").concat(iconCls)]: {
                        display: 'none'
                    },
                    'a, a:hover': {
                        color: colorTextLightSolid
                    }
                },
                ["".concat(componentCls, "-item-group-title")]: Object.assign(Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["textEllipsis"]), {
                    paddingInline: paddingXS
                })
            }
        }
    ];
};
const __TURBOPACK__default__export__ = getVerticalStyle;
}),
"[project]/Downloads/One click/node_modules/antd/es/menu/style/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/fast-color/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/fast-color/es/FastColor.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genCollapseMotion$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/motion/collapse.js [client] (ecmascript) <export default as genCollapseMotion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/motion/slide.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/motion/zoom.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$style$2f$horizontal$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/menu/style/horizontal.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$style$2f$rtl$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/menu/style/rtl.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$style$2f$theme$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/menu/style/theme.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$style$2f$vertical$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/menu/style/vertical.js [client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const genMenuItemStyle = (token)=>{
    const { componentCls, motionDurationSlow, motionDurationMid, motionEaseInOut, motionEaseOut, iconCls, iconSize, iconMarginInlineEnd } = token;
    return {
        // >>>>> Item
        ["".concat(componentCls, "-item, ").concat(componentCls, "-submenu-title")]: {
            position: 'relative',
            display: 'block',
            margin: 0,
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            transition: [
                "border-color ".concat(motionDurationSlow),
                "background ".concat(motionDurationSlow),
                "padding calc(".concat(motionDurationSlow, " + 0.1s) ").concat(motionEaseInOut)
            ].join(','),
            ["".concat(componentCls, "-item-icon, ").concat(iconCls)]: {
                minWidth: iconSize,
                fontSize: iconSize,
                transition: [
                    "font-size ".concat(motionDurationMid, " ").concat(motionEaseOut),
                    "margin ".concat(motionDurationSlow, " ").concat(motionEaseInOut),
                    "color ".concat(motionDurationSlow)
                ].join(','),
                '+ span': {
                    marginInlineStart: iconMarginInlineEnd,
                    opacity: 1,
                    transition: [
                        "opacity ".concat(motionDurationSlow, " ").concat(motionEaseInOut),
                        "margin ".concat(motionDurationSlow),
                        "color ".concat(motionDurationSlow)
                    ].join(',')
                }
            },
            ["".concat(componentCls, "-item-icon")]: Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["resetIcon"])()),
            ["&".concat(componentCls, "-item-only-child")]: {
                ["> ".concat(iconCls, ", > ").concat(componentCls, "-item-icon")]: {
                    marginInlineEnd: 0
                }
            }
        },
        // Disabled state sets text to gray and nukes hover/tab effects
        ["".concat(componentCls, "-item-disabled, ").concat(componentCls, "-submenu-disabled")]: {
            background: 'none !important',
            cursor: 'not-allowed',
            '&::after': {
                borderColor: 'transparent !important'
            },
            a: {
                color: 'inherit !important',
                cursor: 'not-allowed',
                pointerEvents: 'none'
            },
            ["> ".concat(componentCls, "-submenu-title")]: {
                color: 'inherit !important',
                cursor: 'not-allowed'
            }
        }
    };
};
const genSubMenuArrowStyle = (token)=>{
    const { componentCls, motionDurationSlow, motionEaseInOut, borderRadius, menuArrowSize, menuArrowOffset } = token;
    return {
        ["".concat(componentCls, "-submenu")]: {
            '&-expand-icon, &-arrow': {
                position: 'absolute',
                top: '50%',
                insetInlineEnd: token.margin,
                width: menuArrowSize,
                color: 'currentcolor',
                transform: 'translateY(-50%)',
                transition: "transform ".concat(motionDurationSlow, " ").concat(motionEaseInOut, ", opacity ").concat(motionDurationSlow)
            },
            '&-arrow': {
                // →
                '&::before, &::after': {
                    position: 'absolute',
                    width: token.calc(menuArrowSize).mul(0.6).equal(),
                    height: token.calc(menuArrowSize).mul(0.15).equal(),
                    backgroundColor: 'currentcolor',
                    borderRadius,
                    transition: [
                        "background ".concat(motionDurationSlow, " ").concat(motionEaseInOut),
                        "transform ".concat(motionDurationSlow, " ").concat(motionEaseInOut),
                        "top ".concat(motionDurationSlow, " ").concat(motionEaseInOut),
                        "color ".concat(motionDurationSlow, " ").concat(motionEaseInOut)
                    ].join(','),
                    content: '""'
                },
                '&::before': {
                    transform: "rotate(45deg) translateY(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(menuArrowOffset).mul(-1).equal()), ")")
                },
                '&::after': {
                    transform: "rotate(-45deg) translateY(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(menuArrowOffset), ")")
                }
            }
        }
    };
};
// =============================== Base ===============================
const getBaseStyle = (token)=>{
    const { antCls, componentCls, fontSize, motionDurationSlow, motionDurationMid, motionEaseInOut, paddingXS, padding, colorSplit, lineWidth, zIndexPopup, borderRadiusLG, subMenuItemBorderRadius, menuArrowSize, menuArrowOffset, lineType, groupTitleLineHeight, groupTitleFontSize } = token;
    return [
        // Misc
        {
            '': {
                [componentCls]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["clearFix"])()), {
                    // Hidden
                    '&-hidden': {
                        display: 'none'
                    }
                })
            },
            ["".concat(componentCls, "-submenu-hidden")]: {
                display: 'none'
            }
        },
        {
            [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["resetComponent"])(token)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["clearFix"])()), {
                marginBottom: 0,
                paddingInlineStart: 0,
                // Override default ul/ol
                fontSize,
                lineHeight: 0,
                listStyle: 'none',
                outline: 'none',
                // Magic cubic here but smooth transition
                transition: "width ".concat(motionDurationSlow, " cubic-bezier(0.2, 0, 0, 1) 0s"),
                'ul, ol': {
                    margin: 0,
                    padding: 0,
                    listStyle: 'none'
                },
                // Overflow ellipsis
                '&-overflow': {
                    display: 'flex',
                    ["".concat(componentCls, "-item")]: {
                        flex: 'none'
                    }
                },
                ["".concat(componentCls, "-item, ").concat(componentCls, "-submenu, ").concat(componentCls, "-submenu-title")]: {
                    borderRadius: token.itemBorderRadius
                },
                ["".concat(componentCls, "-item-group-title")]: {
                    padding: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(paddingXS), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(padding)),
                    fontSize: groupTitleFontSize,
                    lineHeight: groupTitleLineHeight,
                    transition: "all ".concat(motionDurationSlow)
                },
                ["&-horizontal ".concat(componentCls, "-submenu")]: {
                    transition: [
                        "border-color ".concat(motionDurationSlow, " ").concat(motionEaseInOut),
                        "background ".concat(motionDurationSlow, " ").concat(motionEaseInOut)
                    ].join(',')
                },
                ["".concat(componentCls, "-submenu, ").concat(componentCls, "-submenu-inline")]: {
                    transition: [
                        "border-color ".concat(motionDurationSlow, " ").concat(motionEaseInOut),
                        "background ".concat(motionDurationSlow, " ").concat(motionEaseInOut),
                        "padding ".concat(motionDurationMid, " ").concat(motionEaseInOut)
                    ].join(',')
                },
                ["".concat(componentCls, "-submenu ").concat(componentCls, "-sub")]: {
                    cursor: 'initial',
                    transition: [
                        "background ".concat(motionDurationSlow, " ").concat(motionEaseInOut),
                        "padding ".concat(motionDurationSlow, " ").concat(motionEaseInOut)
                    ].join(',')
                },
                ["".concat(componentCls, "-title-content")]: {
                    transition: "color ".concat(motionDurationSlow),
                    '&-with-extra': {
                        display: 'inline-flex',
                        alignItems: 'center',
                        width: '100%'
                    },
                    // https://github.com/ant-design/ant-design/issues/41143
                    ["> ".concat(antCls, "-typography-ellipsis-single-line")]: {
                        display: 'inline',
                        verticalAlign: 'unset'
                    },
                    ["".concat(componentCls, "-item-extra")]: {
                        marginInlineStart: 'auto',
                        paddingInlineStart: token.padding
                    }
                },
                ["".concat(componentCls, "-item a")]: {
                    '&::before': {
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'transparent',
                        content: '""'
                    }
                },
                // Removed a Badge related style seems it's safe
                // https://github.com/ant-design/ant-design/issues/19809
                // >>>>> Divider
                ["".concat(componentCls, "-item-divider")]: {
                    overflow: 'hidden',
                    lineHeight: 0,
                    borderColor: colorSplit,
                    borderStyle: lineType,
                    borderWidth: 0,
                    borderTopWidth: lineWidth,
                    marginBlock: lineWidth,
                    padding: 0,
                    '&-dashed': {
                        borderStyle: 'dashed'
                    }
                }
            }), genMenuItemStyle(token)), {
                ["".concat(componentCls, "-item-group")]: {
                    ["".concat(componentCls, "-item-group-list")]: {
                        margin: 0,
                        padding: 0,
                        ["".concat(componentCls, "-item, ").concat(componentCls, "-submenu-title")]: {
                            paddingInline: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(fontSize).mul(2).equal()), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(padding))
                        }
                    }
                },
                // ======================= Sub Menu =======================
                '&-submenu': {
                    '&-popup': {
                        position: 'absolute',
                        zIndex: zIndexPopup,
                        borderRadius: borderRadiusLG,
                        boxShadow: 'none',
                        transformOrigin: '0 0',
                        ["&".concat(componentCls, "-submenu")]: {
                            background: 'transparent'
                        },
                        // https://github.com/ant-design/ant-design/issues/13955
                        '&::before': {
                            position: 'absolute',
                            inset: 0,
                            zIndex: -1,
                            width: '100%',
                            height: '100%',
                            opacity: 0,
                            content: '""'
                        },
                        ["> ".concat(componentCls)]: Object.assign(Object.assign(Object.assign({
                            borderRadius: borderRadiusLG
                        }, genMenuItemStyle(token)), genSubMenuArrowStyle(token)), {
                            ["".concat(componentCls, "-item, ").concat(componentCls, "-submenu > ").concat(componentCls, "-submenu-title")]: {
                                borderRadius: subMenuItemBorderRadius
                            },
                            ["".concat(componentCls, "-submenu-title::after")]: {
                                transition: "transform ".concat(motionDurationSlow, " ").concat(motionEaseInOut)
                            }
                        })
                    },
                    ["\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          "]: {
                        transformOrigin: '100% 0'
                    },
                    ["\n          &-placement-leftBottom,\n          &-placement-topRight,\n          "]: {
                        transformOrigin: '100% 100%'
                    },
                    ["\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          "]: {
                        transformOrigin: '0 100%'
                    },
                    ["\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          "]: {
                        transformOrigin: '0 0'
                    },
                    ["\n          &-placement-leftTop,\n          &-placement-leftBottom\n          "]: {
                        paddingInlineEnd: token.paddingXS
                    },
                    ["\n          &-placement-rightTop,\n          &-placement-rightBottom\n          "]: {
                        paddingInlineStart: token.paddingXS
                    },
                    ["\n          &-placement-topRight,\n          &-placement-topLeft\n          "]: {
                        paddingBottom: token.paddingXS
                    },
                    ["\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          "]: {
                        paddingTop: token.paddingXS
                    }
                }
            }), genSubMenuArrowStyle(token)), {
                ["&-inline-collapsed ".concat(componentCls, "-submenu-arrow,\n        &-inline ").concat(componentCls, "-submenu-arrow")]: {
                    // ↓
                    '&::before': {
                        transform: "rotate(-45deg) translateX(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(menuArrowOffset), ")")
                    },
                    '&::after': {
                        transform: "rotate(45deg) translateX(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(menuArrowOffset).mul(-1).equal()), ")")
                    }
                },
                ["".concat(componentCls, "-submenu-open").concat(componentCls, "-submenu-inline > ").concat(componentCls, "-submenu-title > ").concat(componentCls, "-submenu-arrow")]: {
                    // ↑
                    transform: "translateY(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(menuArrowSize).mul(0.2).mul(-1).equal()), ")"),
                    '&::after': {
                        transform: "rotate(-45deg) translateX(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(menuArrowOffset).mul(-1).equal()), ")")
                    },
                    '&::before': {
                        transform: "rotate(45deg) translateX(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(menuArrowOffset), ")")
                    }
                }
            })
        },
        // Integration with header element so menu items have the same height
        {
            ["".concat(antCls, "-layout-header")]: {
                [componentCls]: {
                    lineHeight: 'inherit'
                }
            }
        }
    ];
};
const prepareComponentToken = (token)=>{
    var _a, _b, _c;
    const { colorPrimary, colorError, colorTextDisabled, colorErrorBg, colorText, colorTextDescription, colorBgContainer, colorFillAlter, colorFillContent, lineWidth, lineWidthBold, controlItemBgActive, colorBgTextHover, controlHeightLG, lineHeight, colorBgElevated, marginXXS, padding, fontSize, controlHeightSM, fontSizeLG, colorTextLightSolid, colorErrorHover } = token;
    const activeBarWidth = (_a = token.activeBarWidth) !== null && _a !== void 0 ? _a : 0;
    const activeBarBorderWidth = (_b = token.activeBarBorderWidth) !== null && _b !== void 0 ? _b : lineWidth;
    const itemMarginInline = (_c = token.itemMarginInline) !== null && _c !== void 0 ? _c : token.marginXXS;
    const colorTextDark = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FastColor"](colorTextLightSolid).setA(0.65).toRgbString();
    return {
        dropdownWidth: 160,
        zIndexPopup: token.zIndexPopupBase + 50,
        radiusItem: token.borderRadiusLG,
        itemBorderRadius: token.borderRadiusLG,
        radiusSubMenuItem: token.borderRadiusSM,
        subMenuItemBorderRadius: token.borderRadiusSM,
        colorItemText: colorText,
        itemColor: colorText,
        colorItemTextHover: colorText,
        itemHoverColor: colorText,
        colorItemTextHoverHorizontal: colorPrimary,
        horizontalItemHoverColor: colorPrimary,
        colorGroupTitle: colorTextDescription,
        groupTitleColor: colorTextDescription,
        colorItemTextSelected: colorPrimary,
        itemSelectedColor: colorPrimary,
        subMenuItemSelectedColor: colorPrimary,
        colorItemTextSelectedHorizontal: colorPrimary,
        horizontalItemSelectedColor: colorPrimary,
        colorItemBg: colorBgContainer,
        itemBg: colorBgContainer,
        colorItemBgHover: colorBgTextHover,
        itemHoverBg: colorBgTextHover,
        colorItemBgActive: colorFillContent,
        itemActiveBg: controlItemBgActive,
        colorSubItemBg: colorFillAlter,
        subMenuItemBg: colorFillAlter,
        colorItemBgSelected: controlItemBgActive,
        itemSelectedBg: controlItemBgActive,
        colorItemBgSelectedHorizontal: 'transparent',
        horizontalItemSelectedBg: 'transparent',
        colorActiveBarWidth: 0,
        activeBarWidth,
        colorActiveBarHeight: lineWidthBold,
        activeBarHeight: lineWidthBold,
        colorActiveBarBorderSize: lineWidth,
        activeBarBorderWidth,
        // Disabled
        colorItemTextDisabled: colorTextDisabled,
        itemDisabledColor: colorTextDisabled,
        // Danger
        colorDangerItemText: colorError,
        dangerItemColor: colorError,
        colorDangerItemTextHover: colorError,
        dangerItemHoverColor: colorError,
        colorDangerItemTextSelected: colorError,
        dangerItemSelectedColor: colorError,
        colorDangerItemBgActive: colorErrorBg,
        dangerItemActiveBg: colorErrorBg,
        colorDangerItemBgSelected: colorErrorBg,
        dangerItemSelectedBg: colorErrorBg,
        itemMarginInline,
        horizontalItemBorderRadius: 0,
        horizontalItemHoverBg: 'transparent',
        itemHeight: controlHeightLG,
        groupTitleLineHeight: lineHeight,
        collapsedWidth: controlHeightLG * 2,
        popupBg: colorBgElevated,
        itemMarginBlock: marginXXS,
        itemPaddingInline: padding,
        horizontalLineHeight: "".concat(controlHeightLG * 1.15, "px"),
        iconSize: fontSize,
        iconMarginInlineEnd: controlHeightSM - fontSize,
        collapsedIconSize: fontSizeLG,
        groupTitleFontSize: fontSize,
        // Disabled
        darkItemDisabledColor: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FastColor"](colorTextLightSolid).setA(0.25).toRgbString(),
        // Dark
        darkItemColor: colorTextDark,
        darkDangerItemColor: colorError,
        darkItemBg: '#001529',
        darkPopupBg: '#001529',
        darkSubMenuItemBg: '#000c17',
        darkItemSelectedColor: colorTextLightSolid,
        darkItemSelectedBg: colorPrimary,
        darkDangerItemSelectedBg: colorError,
        darkItemHoverBg: 'transparent',
        darkGroupTitleColor: colorTextDark,
        darkItemHoverColor: colorTextLightSolid,
        darkDangerItemHoverColor: colorErrorHover,
        darkDangerItemSelectedColor: colorTextLightSolid,
        darkDangerItemActiveBg: colorError,
        // internal
        itemWidth: activeBarWidth ? "calc(100% + ".concat(activeBarBorderWidth, "px)") : "calc(100% - ".concat(itemMarginInline * 2, "px)")
    };
};
const __TURBOPACK__default__export__ = function(prefixCls) {
    let rootCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : prefixCls, injectStyle = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    const useStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Menu', (token)=>{
        const { colorBgElevated, controlHeightLG, fontSize, darkItemColor, darkDangerItemColor, darkItemBg, darkSubMenuItemBg, darkItemSelectedColor, darkItemSelectedBg, darkDangerItemSelectedBg, darkItemHoverBg, darkGroupTitleColor, darkItemHoverColor, darkItemDisabledColor, darkDangerItemHoverColor, darkDangerItemSelectedColor, darkDangerItemActiveBg, popupBg, darkPopupBg } = token;
        const menuArrowSize = token.calc(fontSize).div(7).mul(5).equal();
        // Menu Token
        const menuToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
            menuArrowSize,
            menuHorizontalHeight: token.calc(controlHeightLG).mul(1.15).equal(),
            menuArrowOffset: token.calc(menuArrowSize).mul(0.25).equal(),
            menuSubMenuBg: colorBgElevated,
            calc: token.calc,
            popupBg
        });
        const menuDarkToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(menuToken, {
            itemColor: darkItemColor,
            itemHoverColor: darkItemHoverColor,
            groupTitleColor: darkGroupTitleColor,
            itemSelectedColor: darkItemSelectedColor,
            subMenuItemSelectedColor: darkItemSelectedColor,
            itemBg: darkItemBg,
            popupBg: darkPopupBg,
            subMenuItemBg: darkSubMenuItemBg,
            itemActiveBg: 'transparent',
            itemSelectedBg: darkItemSelectedBg,
            activeBarHeight: 0,
            activeBarBorderWidth: 0,
            itemHoverBg: darkItemHoverBg,
            // Disabled
            itemDisabledColor: darkItemDisabledColor,
            // Danger
            dangerItemColor: darkDangerItemColor,
            dangerItemHoverColor: darkDangerItemHoverColor,
            dangerItemSelectedColor: darkDangerItemSelectedColor,
            dangerItemActiveBg: darkDangerItemActiveBg,
            dangerItemSelectedBg: darkDangerItemSelectedBg,
            menuSubMenuBg: darkSubMenuItemBg,
            // Horizontal
            horizontalItemSelectedColor: darkItemSelectedColor,
            horizontalItemSelectedBg: darkItemSelectedBg
        });
        return [
            // Basic
            getBaseStyle(menuToken),
            // Horizontal
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$style$2f$horizontal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(menuToken),
            // Hard code for some light style
            // Vertical
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$style$2f$vertical$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(menuToken),
            // Hard code for some light style
            // Theme
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$style$2f$theme$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(menuToken, 'light'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$style$2f$theme$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(menuDarkToken, 'dark'),
            // RTL
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$style$2f$rtl$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(menuToken),
            // Motion
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genCollapseMotion$3e$__["genCollapseMotion"])(menuToken),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initSlideMotion"])(menuToken, 'slide-up'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initSlideMotion"])(menuToken, 'slide-down'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initZoomMotion"])(menuToken, 'zoom-big')
        ];
    }, prepareComponentToken, {
        deprecatedTokens: [
            [
                'colorGroupTitle',
                'groupTitleColor'
            ],
            [
                'radiusItem',
                'itemBorderRadius'
            ],
            [
                'radiusSubMenuItem',
                'subMenuItemBorderRadius'
            ],
            [
                'colorItemText',
                'itemColor'
            ],
            [
                'colorItemTextHover',
                'itemHoverColor'
            ],
            [
                'colorItemTextHoverHorizontal',
                'horizontalItemHoverColor'
            ],
            [
                'colorItemTextSelected',
                'itemSelectedColor'
            ],
            [
                'colorItemTextSelectedHorizontal',
                'horizontalItemSelectedColor'
            ],
            [
                'colorItemTextDisabled',
                'itemDisabledColor'
            ],
            [
                'colorDangerItemText',
                'dangerItemColor'
            ],
            [
                'colorDangerItemTextHover',
                'dangerItemHoverColor'
            ],
            [
                'colorDangerItemTextSelected',
                'dangerItemSelectedColor'
            ],
            [
                'colorDangerItemBgActive',
                'dangerItemActiveBg'
            ],
            [
                'colorDangerItemBgSelected',
                'dangerItemSelectedBg'
            ],
            [
                'colorItemBg',
                'itemBg'
            ],
            [
                'colorItemBgHover',
                'itemHoverBg'
            ],
            [
                'colorSubItemBg',
                'subMenuItemBg'
            ],
            [
                'colorItemBgActive',
                'itemActiveBg'
            ],
            [
                'colorItemBgSelectedHorizontal',
                'horizontalItemSelectedBg'
            ],
            [
                'colorActiveBarWidth',
                'activeBarWidth'
            ],
            [
                'colorActiveBarHeight',
                'activeBarHeight'
            ],
            [
                'colorActiveBarBorderSize',
                'activeBarBorderWidth'
            ],
            [
                'colorItemBgSelected',
                'itemSelectedBg'
            ]
        ],
        // Dropdown will handle menu style self. We do not need to handle this.
        injectStyle,
        unitless: {
            groupTitleLineHeight: true
        }
    });
    return useStyle(prefixCls, rootCls);
};
}),
"[project]/Downloads/One click/node_modules/antd/es/menu/SubMenu.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$menu$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-menu/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$menu$2f$es$2f$SubMenu$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SubMenu$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-menu/es/SubMenu/index.js [client] (ecmascript) <export default as SubMenu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-menu/es/context/PathContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/omit.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/hooks/useZIndex.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/reactNode.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/menu/MenuContext.js [client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const SubMenu = (props)=>{
    var _a;
    const { popupClassName, icon, title, theme: customTheme } = props;
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
    const { prefixCls, inlineCollapsed, theme: contextTheme } = context;
    const parentPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useFullPath"])();
    let titleNode;
    if (!icon) {
        titleNode = inlineCollapsed && !parentPath.length && title && typeof title === 'string' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: "".concat(prefixCls, "-inline-collapsed-noicon")
        }, title.charAt(0)) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: "".concat(prefixCls, "-title-content")
        }, title);
    } else {
        // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
        // ref: https://github.com/ant-design/ant-design/pull/23456
        const titleIsSpan = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isValidElement"](title) && title.type === 'span';
        titleNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cloneElement"])(icon, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isValidElement"](icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : undefined, "".concat(prefixCls, "-item-icon"))
        }), titleIsSpan ? title : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: "".concat(prefixCls, "-title-content")
        }, title));
    }
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SubMenu.useMemo[contextValue]": ()=>Object.assign(Object.assign({}, context), {
                firstLevel: false
            })
    }["SubMenu.useMemo[contextValue]"], [
        context
    ]);
    // ============================ zIndex ============================
    const [zIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useZIndex"])('Menu');
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: contextValue
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$menu$2f$es$2f$SubMenu$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SubMenu$3e$__["SubMenu"], Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, [
        'icon'
    ]), {
        title: titleNode,
        popupClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, popupClassName, "".concat(prefixCls, "-").concat(customTheme || contextTheme)),
        popupStyle: Object.assign({
            zIndex
        }, props.popupStyle)
    })));
};
const __TURBOPACK__default__export__ = SubMenu;
}),
"[project]/Downloads/One click/node_modules/antd/es/menu/menu.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EllipsisOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$menu$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-menu/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useEvent.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/omit.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/motion.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/reactNode.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/menu/MenuContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuDivider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/menu/MenuDivider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/menu/MenuItem.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$OverrideContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/menu/OverrideContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/menu/style/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$SubMenu$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/menu/SubMenu.js [client] (ecmascript)");
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
function isEmptyIcon(icon) {
    return icon === null || icon === false;
}
const MENU_COMPONENTS = {
    item: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    submenu: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$SubMenu$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    divider: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuDivider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
};
const InternalMenu = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    var _a;
    const override = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$OverrideContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
    const overrideObj = override || {};
    const { getPrefixCls, getPopupContainer, direction, menu } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const rootPrefixCls = getPrefixCls();
    const { prefixCls: customizePrefixCls, className, style, theme = 'light', expandIcon, _internalDisableMenuItemTitleTooltip, inlineCollapsed, siderCollapsed, rootClassName, mode, selectable, onClick, overflowedIndicatorPopupClassName } = props, restProps = __rest(props, [
        "prefixCls",
        "className",
        "style",
        "theme",
        "expandIcon",
        "_internalDisableMenuItemTitleTooltip",
        "inlineCollapsed",
        "siderCollapsed",
        "rootClassName",
        "mode",
        "selectable",
        "onClick",
        "overflowedIndicatorPopupClassName"
    ]);
    const passedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(restProps, [
        'collapsedWidth'
    ]);
    // ======================== Warning ==========================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Menu');
        ("TURBOPACK compile-time truthy", 1) ? warning(!('inlineCollapsed' in props && mode !== 'inline'), 'usage', '`inlineCollapsed` should only be used when `mode` is inline.') : "TURBOPACK unreachable";
        warning.deprecated('items' in props && !props.children, 'children', 'items');
    }
    (_a = overrideObj.validator) === null || _a === void 0 ? void 0 : _a.call(overrideObj, {
        mode
    });
    // ========================== Click ==========================
    // Tell dropdown that item clicked
    const onItemClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "InternalMenu.useEvent[onItemClick]": function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _a;
            onClick === null || onClick === void 0 ? void 0 : onClick.apply(void 0, args);
            (_a = overrideObj.onClick) === null || _a === void 0 ? void 0 : _a.call(overrideObj);
        }
    }["InternalMenu.useEvent[onItemClick]"]);
    // ========================== Mode ===========================
    const mergedMode = overrideObj.mode || mode;
    // ======================= Selectable ========================
    const mergedSelectable = selectable !== null && selectable !== void 0 ? selectable : overrideObj.selectable;
    // ======================== Collapsed ========================
    // Inline Collapsed
    const mergedInlineCollapsed = inlineCollapsed !== null && inlineCollapsed !== void 0 ? inlineCollapsed : siderCollapsed;
    const defaultMotions = {
        horizontal: {
            motionName: "".concat(rootPrefixCls, "-slide-up")
        },
        inline: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(rootPrefixCls),
        other: {
            motionName: "".concat(rootPrefixCls, "-zoom-big")
        }
    };
    const prefixCls = getPrefixCls('menu', customizePrefixCls || overrideObj.prefixCls);
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls, !override);
    const menuClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-").concat(theme), menu === null || menu === void 0 ? void 0 : menu.className, className);
    // ====================== ExpandIcon ========================
    const mergedExpandIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalMenu.useMemo[mergedExpandIcon]": ()=>{
            var _a, _b;
            if (typeof expandIcon === 'function' || isEmptyIcon(expandIcon)) {
                return expandIcon || null;
            }
            if (typeof overrideObj.expandIcon === 'function' || isEmptyIcon(overrideObj.expandIcon)) {
                return overrideObj.expandIcon || null;
            }
            if (typeof (menu === null || menu === void 0 ? void 0 : menu.expandIcon) === 'function' || isEmptyIcon(menu === null || menu === void 0 ? void 0 : menu.expandIcon)) {
                return (menu === null || menu === void 0 ? void 0 : menu.expandIcon) || null;
            }
            const mergedIcon = (_a = expandIcon !== null && expandIcon !== void 0 ? expandIcon : overrideObj === null || overrideObj === void 0 ? void 0 : overrideObj.expandIcon) !== null && _a !== void 0 ? _a : menu === null || menu === void 0 ? void 0 : menu.expandIcon;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cloneElement"])(mergedIcon, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-submenu-expand-icon"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isValidElement"](mergedIcon) ? (_b = mergedIcon.props) === null || _b === void 0 ? void 0 : _b.className : undefined)
            });
        }
    }["InternalMenu.useMemo[mergedExpandIcon]"], [
        expandIcon,
        overrideObj === null || overrideObj === void 0 ? void 0 : overrideObj.expandIcon,
        menu === null || menu === void 0 ? void 0 : menu.expandIcon,
        prefixCls
    ]);
    // ======================== Context ==========================
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalMenu.useMemo[contextValue]": ()=>({
                prefixCls,
                inlineCollapsed: mergedInlineCollapsed || false,
                direction,
                firstLevel: true,
                theme,
                mode: mergedMode,
                disableMenuItemTitleTooltip: _internalDisableMenuItemTitleTooltip
            })
    }["InternalMenu.useMemo[contextValue]"], [
        prefixCls,
        mergedInlineCollapsed,
        direction,
        _internalDisableMenuItemTitleTooltip,
        theme
    ]);
    // ========================= Render ==========================
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$OverrideContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: null
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: contextValue
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$menu$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], Object.assign({
        getPopupContainer: getPopupContainer,
        overflowedIndicator: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EllipsisOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], null),
        overflowedIndicatorPopupClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, "".concat(prefixCls, "-").concat(theme), overflowedIndicatorPopupClassName),
        mode: mergedMode,
        selectable: mergedSelectable,
        onClick: onItemClick
    }, passedProps, {
        inlineCollapsed: mergedInlineCollapsed,
        style: Object.assign(Object.assign({}, menu === null || menu === void 0 ? void 0 : menu.style), style),
        className: menuClassName,
        prefixCls: prefixCls,
        direction: direction,
        defaultMotions: defaultMotions,
        expandIcon: mergedExpandIcon,
        ref: ref,
        rootClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(rootClassName, hashId, overrideObj.rootClassName, cssVarCls, rootCls),
        _internalComponents: MENU_COMPONENTS
    })))));
});
const __TURBOPACK__default__export__ = InternalMenu;
}),
"[project]/Downloads/One click/node_modules/antd/es/menu/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$menu$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-menu/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItemGroup$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ItemGroup$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-menu/es/MenuItemGroup.js [client] (ecmascript) <export default as ItemGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$layout$2f$Sider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/layout/Sider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$menu$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/menu/menu.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuDivider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/menu/MenuDivider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/menu/MenuItem.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$SubMenu$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/menu/SubMenu.js [client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const Menu = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$layout$2f$Sider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SiderContext"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "Menu.useImperativeHandle": ()=>({
                menu: menuRef.current,
                focus: ({
                    "Menu.useImperativeHandle": (options)=>{
                        var _a;
                        (_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.focus(options);
                    }
                })["Menu.useImperativeHandle"]
            })
    }["Menu.useImperativeHandle"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$menu$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], Object.assign({
        ref: menuRef
    }, props, context));
});
Menu.Item = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
Menu.SubMenu = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$SubMenu$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
Menu.Divider = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuDivider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
Menu.ItemGroup = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItemGroup$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ItemGroup$3e$__["ItemGroup"];
if ("TURBOPACK compile-time truthy", 1) {
    Menu.displayName = 'Menu';
}
const __TURBOPACK__default__export__ = Menu;
}),
"[project]/Downloads/One click/node_modules/antd/es/menu/index.js [client] (ecmascript) <export default as Menu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/menu/index.js [client] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/isPrimitive.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const isPrimitive = (value)=>typeof value !== 'object' && typeof value !== 'function' || value === null;
const __TURBOPACK__default__export__ = isPrimitive;
}),
"[project]/Downloads/One click/node_modules/antd/es/form/validateMessagesContext.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
"use client";
;
const __TURBOPACK__default__export__ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
}),
"[project]/Downloads/One click/node_modules/antd/es/modal/locale.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "changeConfirmLocale",
    ()=>changeConfirmLocale,
    "getConfirmLocale",
    ()=>getConfirmLocale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/locale/en_US.js [client] (ecmascript)");
;
let runtimeLocale = Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Modal);
let localeList = [];
const generateLocale = ()=>localeList.reduce((merged, locale)=>Object.assign(Object.assign({}, merged), locale), __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Modal);
function changeConfirmLocale(newLocale) {
    if (newLocale) {
        const cloneLocale = Object.assign({}, newLocale);
        localeList.push(cloneLocale);
        runtimeLocale = generateLocale();
        return ()=>{
            localeList = localeList.filter((locale)=>locale !== cloneLocale);
            runtimeLocale = generateLocale();
        };
    }
    runtimeLocale = Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Modal);
}
function getConfirmLocale() {
    return runtimeLocale;
}
}),
"[project]/Downloads/One click/node_modules/antd/es/locale/index.js [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ANT_MARK",
    ()=>ANT_MARK,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$modal$2f$locale$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/modal/locale.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/locale/context.js [client] (ecmascript)");
"use client";
;
;
;
;
;
const ANT_MARK = 'internalMark';
const LocaleProvider = (props)=>{
    const { locale = {}, children, _ANT_MARK__ } = props;
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["devUseWarning"])('LocaleProvider');
        ("TURBOPACK compile-time truthy", 1) ? warning(_ANT_MARK__ === ANT_MARK, 'deprecated', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale') : "TURBOPACK unreachable";
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "LocaleProvider.useEffect": ()=>{
            const clearLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$modal$2f$locale$2e$js__$5b$client$5d$__$28$ecmascript$29$__["changeConfirmLocale"])(locale === null || locale === void 0 ? void 0 : locale.Modal);
            return clearLocale;
        }
    }["LocaleProvider.useEffect"], [
        locale
    ]);
    const getMemoizedContextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "LocaleProvider.useMemo[getMemoizedContextValue]": ()=>Object.assign(Object.assign({}, locale), {
                exist: true
            })
    }["LocaleProvider.useMemo[getMemoizedContextValue]"], [
        locale
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: getMemoizedContextValue
    }, children);
};
if ("TURBOPACK compile-time truthy", 1) {
    LocaleProvider.displayName = 'LocaleProvider';
}
const __TURBOPACK__default__export__ = LocaleProvider;
}),
"[project]/Downloads/One click/node_modules/antd/es/config-provider/cssVariables.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStyle",
    ()=>getStyle,
    "registerTheme",
    ()=>registerTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/colors/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/colors/es/generate.js [client] (ecmascript) <export default as generate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/fast-color/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/fast-color/es/FastColor.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Dom/canUseDom.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$dynamicCSS$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Dom/dynamicCSS.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [client] (ecmascript)");
;
;
;
;
;
const dynamicStyleMark = "-ant-".concat(Date.now(), "-").concat(Math.random());
function getStyle(globalPrefixCls, theme) {
    const variables = {};
    const formatColor = (color, updater)=>{
        let clone = color.clone();
        clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
        return clone.toRgbString();
    };
    const fillColor = (colorVal, type)=>{
        const baseColor = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FastColor"](colorVal);
        const colorPalettes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__["generate"])(baseColor.toRgbString());
        variables["".concat(type, "-color")] = formatColor(baseColor);
        variables["".concat(type, "-color-disabled")] = colorPalettes[1];
        variables["".concat(type, "-color-hover")] = colorPalettes[4];
        variables["".concat(type, "-color-active")] = colorPalettes[6];
        variables["".concat(type, "-color-outline")] = baseColor.clone().setA(0.2).toRgbString();
        variables["".concat(type, "-color-deprecated-bg")] = colorPalettes[0];
        variables["".concat(type, "-color-deprecated-border")] = colorPalettes[2];
    };
    // ================ Primary Color ================
    if (theme.primaryColor) {
        fillColor(theme.primaryColor, 'primary');
        const primaryColor = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FastColor"](theme.primaryColor);
        const primaryColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__["generate"])(primaryColor.toRgbString());
        // Legacy - We should use semantic naming standard
        primaryColors.forEach((color, index)=>{
            variables["primary-".concat(index + 1)] = color;
        });
        // Deprecated
        variables['primary-color-deprecated-l-35'] = formatColor(primaryColor, (c)=>c.lighten(35));
        variables['primary-color-deprecated-l-20'] = formatColor(primaryColor, (c)=>c.lighten(20));
        variables['primary-color-deprecated-t-20'] = formatColor(primaryColor, (c)=>c.tint(20));
        variables['primary-color-deprecated-t-50'] = formatColor(primaryColor, (c)=>c.tint(50));
        variables['primary-color-deprecated-f-12'] = formatColor(primaryColor, (c)=>c.setA(c.a * 0.12));
        const primaryActiveColor = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FastColor"](primaryColors[0]);
        variables['primary-color-active-deprecated-f-30'] = formatColor(primaryActiveColor, (c)=>c.setA(c.a * 0.3));
        variables['primary-color-active-deprecated-d-02'] = formatColor(primaryActiveColor, (c)=>c.darken(2));
    }
    // ================ Success Color ================
    if (theme.successColor) {
        fillColor(theme.successColor, 'success');
    }
    // ================ Warning Color ================
    if (theme.warningColor) {
        fillColor(theme.warningColor, 'warning');
    }
    // ================= Error Color =================
    if (theme.errorColor) {
        fillColor(theme.errorColor, 'error');
    }
    // ================= Info Color ==================
    if (theme.infoColor) {
        fillColor(theme.infoColor, 'info');
    }
    // Convert to css variables
    const cssList = Object.keys(variables).map((key)=>"--".concat(globalPrefixCls, "-").concat(key, ": ").concat(variables[key], ";"));
    return "\n  :root {\n    ".concat(cssList.join('\n'), "\n  }\n  ").trim();
}
function registerTheme(globalPrefixCls, theme) {
    const style = getStyle(globalPrefixCls, theme);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])()) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$dynamicCSS$2e$js__$5b$client$5d$__$28$ecmascript$29$__["updateCSS"])(style, "".concat(dynamicStyleMark, "-dynamic-theme"));
    } else {
        ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(false, 'ConfigProvider', 'SSR do not support dynamic theme with css variables.') : "TURBOPACK unreachable";
    }
}
}),
"[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useConfig.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/DisabledContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/SizeContext.js [client] (ecmascript)");
;
;
;
function useConfig() {
    const componentDisabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
    const componentSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
    return {
        componentDisabled,
        componentSize
    };
}
const __TURBOPACK__default__export__ = useConfig;
}),
"[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useThemeKey.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
const fullClone = Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__);
const { useId } = fullClone;
const useEmptyId = ()=>'';
const useThemeKey = typeof useId === 'undefined' ? useEmptyId : useId;
const __TURBOPACK__default__export__ = useThemeKey;
}),
"[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useTheme.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMemo$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useMemo.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$isEqual$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/isEqual.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/context.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useThemeKey$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useThemeKey.js [client] (ecmascript)");
;
;
;
;
;
function useTheme(theme, parentTheme, config) {
    var _a, _b;
    const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["devUseWarning"])('ConfigProvider');
    const themeConfig = theme || {};
    const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? Object.assign(Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultConfig"]), {
        hashed: (_a = parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.hashed) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultConfig"].hashed,
        cssVar: parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.cssVar
    }) : parentTheme;
    const themeKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useThemeKey$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])();
    if ("TURBOPACK compile-time truthy", 1) {
        const cssVarEnabled = themeConfig.cssVar || parentThemeConfig.cssVar;
        const validKey = !!(typeof themeConfig.cssVar === 'object' && ((_b = themeConfig.cssVar) === null || _b === void 0 ? void 0 : _b.key) || themeKey);
        ("TURBOPACK compile-time truthy", 1) ? warning(!cssVarEnabled || validKey, 'breaking', 'Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.') : "TURBOPACK unreachable";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMemo$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "useTheme.useMemo": ()=>{
            var _a, _b;
            if (!theme) {
                return parentTheme;
            }
            // Override
            const mergedComponents = Object.assign({}, parentThemeConfig.components);
            Object.keys(theme.components || {}).forEach({
                "useTheme.useMemo": (componentName)=>{
                    mergedComponents[componentName] = Object.assign(Object.assign({}, mergedComponents[componentName]), theme.components[componentName]);
                }
            }["useTheme.useMemo"]);
            const cssVarKey = "css-var-".concat(themeKey.replace(/:/g, ''));
            const mergedCssVar = ((_a = themeConfig.cssVar) !== null && _a !== void 0 ? _a : parentThemeConfig.cssVar) && Object.assign(Object.assign(Object.assign({
                prefix: config === null || config === void 0 ? void 0 : config.prefixCls
            }, typeof parentThemeConfig.cssVar === 'object' ? parentThemeConfig.cssVar : {}), typeof themeConfig.cssVar === 'object' ? themeConfig.cssVar : {}), {
                key: typeof themeConfig.cssVar === 'object' && ((_b = themeConfig.cssVar) === null || _b === void 0 ? void 0 : _b.key) || cssVarKey
            });
            // Base token
            return Object.assign(Object.assign(Object.assign({}, parentThemeConfig), themeConfig), {
                token: Object.assign(Object.assign({}, parentThemeConfig.token), themeConfig.token),
                components: mergedComponents,
                cssVar: mergedCssVar
            });
        }
    }["useTheme.useMemo"], [
        themeConfig,
        parentThemeConfig
    ], {
        "useTheme.useMemo": (prev, next)=>prev.some({
                "useTheme.useMemo": (prevTheme, index)=>{
                    const nextTheme = next[index];
                    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$isEqual$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prevTheme, nextTheme, true);
                }
            }["useTheme.useMemo"])
    }["useTheme.useMemo"]);
}
}),
"[project]/Downloads/One click/node_modules/antd/es/config-provider/MotionWrapper.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MotionWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Provider$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/context.js [client] (ecmascript) <export default as Provider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/useToken.js [client] (ecmascript) <export default as useToken>");
"use client";
;
;
;
const MotionCacheContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"](true);
if ("TURBOPACK compile-time truthy", 1) {
    MotionCacheContext.displayName = 'MotionCacheContext';
}
function MotionWrapper(props) {
    const parentMotion = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](MotionCacheContext);
    const { children } = props;
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const { motion } = token;
    const needWrapMotionProviderRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](false);
    needWrapMotionProviderRef.current || (needWrapMotionProviderRef.current = parentMotion !== motion);
    if (needWrapMotionProviderRef.current) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](MotionCacheContext.Provider, {
            value: motion
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Provider$3e$__["Provider"], {
            motion: motion
        }, children));
    }
    return children;
}
}),
"[project]/Downloads/One click/node_modules/antd/es/config-provider/PropWarning.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [client] (ecmascript)");
"use client";
;
;
/**
 * Warning for ConfigProviderProps.
 * This will be empty function in production.
 */ const PropWarning = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["memo"]((param)=>{
    let { dropdownMatchSelectWidth } = param;
    const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["devUseWarning"])('ConfigProvider');
    warning.deprecated(dropdownMatchSelectWidth === undefined, 'dropdownMatchSelectWidth', 'popupMatchSelectWidth');
    return null;
});
if ("TURBOPACK compile-time truthy", 1) {
    PropWarning.displayName = 'PropWarning';
}
const __TURBOPACK__default__export__ = ("TURBOPACK compile-time truthy", 1) ? PropWarning : "TURBOPACK unreachable";
}),
"[project]/Downloads/One click/node_modules/antd/es/theme/util/useResetIconStyle.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$hooks$2f$useStyleRegister$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useStyleRegister$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/hooks/useStyleRegister.js [client] (ecmascript) <export default as useStyleRegister>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/useToken.js [client] (ecmascript)");
;
;
;
const useResetIconStyle = (iconPrefixCls, csp)=>{
    const [theme, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])();
    // Generate style for icons
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$hooks$2f$useStyleRegister$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useStyleRegister$3e$__["useStyleRegister"])({
        theme,
        token,
        hashId: '',
        path: [
            'ant-design-icons',
            iconPrefixCls
        ],
        nonce: {
            "useResetIconStyle.useStyleRegister": ()=>csp === null || csp === void 0 ? void 0 : csp.nonce
        }["useResetIconStyle.useStyleRegister"],
        layer: {
            name: 'antd'
        }
    }, {
        "useResetIconStyle.useStyleRegister": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genIconStyle"])(iconPrefixCls)
    }["useResetIconStyle.useStyleRegister"]);
};
const __TURBOPACK__default__export__ = useResetIconStyle;
}),
"[project]/Downloads/One click/node_modules/antd/es/config-provider/index.js [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "configConsumerProps",
    ()=>configConsumerProps,
    "default",
    ()=>__TURBOPACK__default__export__,
    "globalConfig",
    ()=>globalConfig,
    "warnContext",
    ()=>warnContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$theme$2f$createTheme$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/theme/createTheme.js [client] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$StyleContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StyleContext$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/StyleContext.js [client] (ecmascript) <export default as StyleContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$Context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/Context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMemo$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useMemo.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$utils$2f$set$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/utils/set.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$validateMessagesContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/form/validateMessagesContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/locale/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/locale/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/locale/en_US.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$theme$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defaultTheme$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/themes/default/theme.js [client] (ecmascript) <export default as defaultTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/context.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/themes/seed.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$cssVariables$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/cssVariables.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/DisabledContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useConfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useConfig.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useTheme$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useTheme.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$MotionWrapper$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/MotionWrapper.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$PropWarning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/PropWarning.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/SizeContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$useResetIconStyle$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/useResetIconStyle.js [client] (ecmascript)");
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
/**
 * Since too many feedback using static method like `Modal.confirm` not getting theme, we record the
 * theme register info here to help developer get warning info.
 */ let existThemeConfig = false;
const warnContext = ("TURBOPACK compile-time truthy", 1) ? (componentName)=>{
    ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(!existThemeConfig, componentName, "Static function can not consume context like dynamic theme. Please use 'App' component instead.") : "TURBOPACK unreachable";
} : /* istanbul ignore next */ "TURBOPACK unreachable";
;
const configConsumerProps = [
    'getTargetContainer',
    'getPopupContainer',
    'rootPrefixCls',
    'getPrefixCls',
    'renderEmpty',
    'csp',
    'autoInsertSpaceInButton',
    'locale'
];
// These props is used by `useContext` directly in sub component
const PASSED_PROPS = [
    'getTargetContainer',
    'getPopupContainer',
    'renderEmpty',
    'input',
    'pagination',
    'form',
    'select',
    'button'
];
let globalPrefixCls;
let globalIconPrefixCls;
let globalTheme;
let globalHolderRender;
function getGlobalPrefixCls() {
    return globalPrefixCls || __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["defaultPrefixCls"];
}
function getGlobalIconPrefixCls() {
    return globalIconPrefixCls || __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["defaultIconPrefixCls"];
}
function isLegacyTheme(theme) {
    return Object.keys(theme).some((key)=>key.endsWith('Color'));
}
const setGlobalConfig = (props)=>{
    const { prefixCls, iconPrefixCls, theme, holderRender } = props;
    if (prefixCls !== undefined) {
        globalPrefixCls = prefixCls;
    }
    if (iconPrefixCls !== undefined) {
        globalIconPrefixCls = iconPrefixCls;
    }
    if ('holderRender' in props) {
        globalHolderRender = holderRender;
    }
    if (theme) {
        if (isLegacyTheme(theme)) {
            ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(false, 'ConfigProvider', '`config` of css variable theme is not work in v5. Please use new `theme` config instead.') : "TURBOPACK unreachable";
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$cssVariables$2e$js__$5b$client$5d$__$28$ecmascript$29$__["registerTheme"])(getGlobalPrefixCls(), theme);
        } else {
            globalTheme = theme;
        }
    }
};
const globalConfig = ()=>({
        getPrefixCls: (suffixCls, customizePrefixCls)=>{
            if (customizePrefixCls) {
                return customizePrefixCls;
            }
            return suffixCls ? "".concat(getGlobalPrefixCls(), "-").concat(suffixCls) : getGlobalPrefixCls();
        },
        getIconPrefixCls: getGlobalIconPrefixCls,
        getRootPrefixCls: ()=>{
            // If Global prefixCls provided, use this
            if (globalPrefixCls) {
                return globalPrefixCls;
            }
            // Fallback to default prefixCls
            return getGlobalPrefixCls();
        },
        getTheme: ()=>globalTheme,
        holderRender: globalHolderRender
    });
const ProviderChildren = (props)=>{
    const { children, csp: customCsp, autoInsertSpaceInButton, alert, anchor, form, locale, componentSize, direction, space, splitter, virtual, dropdownMatchSelectWidth, popupMatchSelectWidth, popupOverflow, legacyLocale, parentContext, iconPrefixCls: customIconPrefixCls, theme, componentDisabled, segmented, statistic, spin, calendar, carousel, cascader, collapse, typography, checkbox, descriptions, divider, drawer, skeleton, steps, image, layout, list, mentions, modal, progress, result, slider, breadcrumb, menu, pagination, input, textArea, empty, badge, radio, rate, switch: SWITCH, transfer, avatar, message, tag, table, card, tabs, timeline, timePicker, upload, notification, tree, colorPicker, datePicker, rangePicker, flex, wave, dropdown, warning: warningConfig, tour, tooltip, popover, popconfirm, floatButton, floatButtonGroup, variant, inputNumber, treeSelect } = props;
    // =================================== Context ===================================
    const getPrefixCls = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "ProviderChildren.useCallback[getPrefixCls]": (suffixCls, customizePrefixCls)=>{
            const { prefixCls } = props;
            if (customizePrefixCls) {
                return customizePrefixCls;
            }
            const mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
            return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
        }
    }["ProviderChildren.useCallback[getPrefixCls]"], [
        parentContext.getPrefixCls,
        props.prefixCls
    ]);
    const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["defaultIconPrefixCls"];
    const csp = customCsp || parentContext.csp;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$useResetIconStyle$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(iconPrefixCls, csp);
    const mergedTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useTheme$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(theme, parentContext.theme, {
        prefixCls: getPrefixCls('')
    });
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        existThemeConfig = existThemeConfig || !!mergedTheme;
    }
    const baseConfig = {
        csp,
        autoInsertSpaceInButton,
        alert,
        anchor,
        locale: locale || legacyLocale,
        direction,
        space,
        splitter,
        virtual,
        popupMatchSelectWidth: popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth,
        popupOverflow,
        getPrefixCls,
        iconPrefixCls,
        theme: mergedTheme,
        segmented,
        statistic,
        spin,
        calendar,
        carousel,
        cascader,
        collapse,
        typography,
        checkbox,
        descriptions,
        divider,
        drawer,
        skeleton,
        steps,
        image,
        input,
        textArea,
        layout,
        list,
        mentions,
        modal,
        progress,
        result,
        slider,
        breadcrumb,
        menu,
        pagination,
        empty,
        badge,
        radio,
        rate,
        switch: SWITCH,
        transfer,
        avatar,
        message,
        tag,
        table,
        card,
        tabs,
        timeline,
        timePicker,
        upload,
        notification,
        tree,
        colorPicker,
        datePicker,
        rangePicker,
        flex,
        wave,
        dropdown,
        warning: warningConfig,
        tour,
        tooltip,
        popover,
        popconfirm,
        floatButton,
        floatButtonGroup,
        variant,
        inputNumber,
        treeSelect
    };
    if ("TURBOPACK compile-time truthy", 1) {
        const warningFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["devUseWarning"])('ConfigProvider');
        warningFn(!('autoInsertSpaceInButton' in props), 'deprecated', '`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.');
    }
    const config = Object.assign({}, parentContext);
    Object.keys(baseConfig).forEach((key)=>{
        if (baseConfig[key] !== undefined) {
            config[key] = baseConfig[key];
        }
    });
    // Pass the props used by `useContext` directly with child component.
    // These props should merged into `config`.
    PASSED_PROPS.forEach((propName)=>{
        const propValue = props[propName];
        if (propValue) {
            config[propName] = propValue;
        }
    });
    if (typeof autoInsertSpaceInButton !== 'undefined') {
        // merge deprecated api
        config.button = Object.assign({
            autoInsertSpace: autoInsertSpaceInButton
        }, config.button);
    }
    // https://github.com/ant-design/ant-design/issues/27617
    const memoedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMemo$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "ProviderChildren.useMemo[memoedConfig]": ()=>config
    }["ProviderChildren.useMemo[memoedConfig]"], config, {
        "ProviderChildren.useMemo[memoedConfig]": (prevConfig, currentConfig)=>{
            const prevKeys = Object.keys(prevConfig);
            const currentKeys = Object.keys(currentConfig);
            return prevKeys.length !== currentKeys.length || prevKeys.some({
                "ProviderChildren.useMemo[memoedConfig]": (key)=>prevConfig[key] !== currentConfig[key]
            }["ProviderChildren.useMemo[memoedConfig]"]);
        }
    }["ProviderChildren.useMemo[memoedConfig]"]);
    const { layer } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$StyleContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StyleContext$3e$__["StyleContext"]);
    const memoIconContextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ProviderChildren.useMemo[memoIconContextValue]": ()=>({
                prefixCls: iconPrefixCls,
                csp,
                layer: layer ? 'antd' : undefined
            })
    }["ProviderChildren.useMemo[memoIconContextValue]"], [
        iconPrefixCls,
        csp,
        layer
    ]);
    let childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$PropWarning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        dropdownMatchSelectWidth: dropdownMatchSelectWidth
    }), children);
    const validateMessages = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ProviderChildren.useMemo[validateMessages]": ()=>{
            var _a, _b, _c, _d;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$utils$2f$set$2e$js__$5b$client$5d$__$28$ecmascript$29$__["merge"])(((_a = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || {}, ((_c = (_b = memoedConfig.locale) === null || _b === void 0 ? void 0 : _b.Form) === null || _c === void 0 ? void 0 : _c.defaultValidateMessages) || {}, ((_d = memoedConfig.form) === null || _d === void 0 ? void 0 : _d.validateMessages) || {}, (form === null || form === void 0 ? void 0 : form.validateMessages) || {});
        }
    }["ProviderChildren.useMemo[validateMessages]"], [
        memoedConfig,
        form === null || form === void 0 ? void 0 : form.validateMessages
    ]);
    if (Object.keys(validateMessages).length > 0) {
        childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$validateMessagesContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: validateMessages
        }, childNode);
    }
    if (locale) {
        childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            locale: locale,
            _ANT_MARK__: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ANT_MARK"]
        }, childNode);
    }
    if (iconPrefixCls || csp) {
        childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$Context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: memoIconContextValue
        }, childNode);
    }
    if (componentSize) {
        childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SizeContextProvider"], {
            size: componentSize
        }, childNode);
    }
    // =================================== Motion ===================================
    childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$MotionWrapper$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], null, childNode);
    // ================================ Dynamic theme ================================
    const memoTheme = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ProviderChildren.useMemo[memoTheme]": ()=>{
            const _a = mergedTheme || {}, { algorithm, token, components, cssVar } = _a, rest = __rest(_a, [
                "algorithm",
                "token",
                "components",
                "cssVar"
            ]);
            const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$theme$2f$createTheme$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])(algorithm) : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$theme$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defaultTheme$3e$__["defaultTheme"];
            const parsedComponents = {};
            Object.entries(components || {}).forEach({
                "ProviderChildren.useMemo[memoTheme]": (param)=>{
                    let [componentName, componentToken] = param;
                    const parsedToken = Object.assign({}, componentToken);
                    if ('algorithm' in parsedToken) {
                        if (parsedToken.algorithm === true) {
                            parsedToken.theme = themeObj;
                        } else if (Array.isArray(parsedToken.algorithm) || typeof parsedToken.algorithm === 'function') {
                            parsedToken.theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$theme$2f$createTheme$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])(parsedToken.algorithm);
                        }
                        delete parsedToken.algorithm;
                    }
                    parsedComponents[componentName] = parsedToken;
                }
            }["ProviderChildren.useMemo[memoTheme]"]);
            const mergedToken = Object.assign(Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]), token);
            return Object.assign(Object.assign({}, rest), {
                theme: themeObj,
                token: mergedToken,
                components: parsedComponents,
                override: Object.assign({
                    override: mergedToken
                }, parsedComponents),
                cssVar: cssVar
            });
        }
    }["ProviderChildren.useMemo[memoTheme]"], [
        mergedTheme
    ]);
    if (theme) {
        childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DesignTokenContext"].Provider, {
            value: memoTheme
        }, childNode);
    }
    // ================================== Warning ===================================
    if (memoedConfig.warning) {
        childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WarningContext"].Provider, {
            value: memoedConfig.warning
        }, childNode);
    }
    // =================================== Render ===================================
    if (componentDisabled !== undefined) {
        childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["DisabledContextProvider"], {
            disabled: componentDisabled
        }, childNode);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"].Provider, {
        value: memoedConfig
    }, childNode);
};
const ConfigProvider = (props)=>{
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const antLocale = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$locale$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](ProviderChildren, Object.assign({
        parentContext: context,
        legacyLocale: antLocale
    }, props));
};
ConfigProvider.ConfigContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"];
ConfigProvider.SizeContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
ConfigProvider.config = setGlobalConfig;
ConfigProvider.useConfig = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useConfig$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
Object.defineProperty(ConfigProvider, 'SizeContext', {
    get: ()=>{
        ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(false, 'ConfigProvider', 'ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead.') : "TURBOPACK unreachable";
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
    }
});
if ("TURBOPACK compile-time truthy", 1) {
    ConfigProvider.displayName = 'ConfigProvider';
}
const __TURBOPACK__default__export__ = ConfigProvider;
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/PurePanel.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "withPureRenderTheme",
    ()=>withPureRenderTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useMergedState.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
"use client";
;
;
;
function withPureRenderTheme(Component) {
    return (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            theme: {
                token: {
                    motion: false,
                    zIndexPopupBase: 0
                }
            }
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](Component, Object.assign({}, props)));
}
/* istanbul ignore next */ const genPurePanel = (Component, alignPropName, postProps, defaultPrefixCls, getDropdownCls)=>{
    const PurePanel = (props)=>{
        const { prefixCls: customizePrefixCls, style } = props;
        const holderRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](null);
        const [popupHeight, setPopupHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](0);
        const [popupWidth, setPopupWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](0);
        const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(false, {
            value: props.open
        });
        const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
        const prefixCls = getPrefixCls(defaultPrefixCls || 'select', customizePrefixCls);
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "genPurePanel.PurePanel.useEffect": ()=>{
                // We do not care about ssr
                setOpen(true);
                if (typeof ResizeObserver !== 'undefined') {
                    const resizeObserver = new ResizeObserver({
                        "genPurePanel.PurePanel.useEffect": (entries)=>{
                            const element = entries[0].target;
                            setPopupHeight(element.offsetHeight + 8);
                            setPopupWidth(element.offsetWidth);
                        }
                    }["genPurePanel.PurePanel.useEffect"]);
                    const interval = setInterval({
                        "genPurePanel.PurePanel.useEffect.interval": ()=>{
                            var _a;
                            const dropdownCls = getDropdownCls ? ".".concat(getDropdownCls(prefixCls)) : ".".concat(prefixCls, "-dropdown");
                            const popup = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(dropdownCls);
                            if (popup) {
                                clearInterval(interval);
                                resizeObserver.observe(popup);
                            }
                        }
                    }["genPurePanel.PurePanel.useEffect.interval"], 10);
                    return ({
                        "genPurePanel.PurePanel.useEffect": ()=>{
                            clearInterval(interval);
                            resizeObserver.disconnect();
                        }
                    })["genPurePanel.PurePanel.useEffect"];
                }
            }
        }["genPurePanel.PurePanel.useEffect"], [
            prefixCls
        ]);
        let mergedProps = Object.assign(Object.assign({}, props), {
            style: Object.assign(Object.assign({}, style), {
                margin: 0
            }),
            open,
            visible: open,
            getPopupContainer: ()=>holderRef.current
        });
        if (postProps) {
            mergedProps = postProps(mergedProps);
        }
        if (alignPropName) {
            Object.assign(mergedProps, {
                [alignPropName]: {
                    overflow: {
                        adjustX: false,
                        adjustY: false
                    }
                }
            });
        }
        const mergedStyle = {
            paddingBottom: popupHeight,
            position: 'relative',
            minWidth: popupWidth
        };
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            ref: holderRef,
            style: mergedStyle
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](Component, Object.assign({}, mergedProps)));
    };
    return withPureRenderTheme(PurePanel);
};
const __TURBOPACK__default__export__ = genPurePanel;
}),
"[project]/Downloads/One click/node_modules/antd/es/style/motion/move.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initMoveMotion",
    ()=>initMoveMotion,
    "moveDownIn",
    ()=>moveDownIn,
    "moveDownOut",
    ()=>moveDownOut,
    "moveLeftIn",
    ()=>moveLeftIn,
    "moveLeftOut",
    ()=>moveLeftOut,
    "moveRightIn",
    ()=>moveRightIn,
    "moveRightOut",
    ()=>moveRightOut,
    "moveUpIn",
    ()=>moveUpIn,
    "moveUpOut",
    ()=>moveUpOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/Keyframes.js [client] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/motion/motion.js [client] (ecmascript)");
;
;
const moveDownIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antMoveDownIn', {
    '0%': {
        transform: 'translate3d(0, 100%, 0)',
        transformOrigin: '0 0',
        opacity: 0
    },
    '100%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    }
});
const moveDownOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antMoveDownOut', {
    '0%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    },
    '100%': {
        transform: 'translate3d(0, 100%, 0)',
        transformOrigin: '0 0',
        opacity: 0
    }
});
const moveLeftIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antMoveLeftIn', {
    '0%': {
        transform: 'translate3d(-100%, 0, 0)',
        transformOrigin: '0 0',
        opacity: 0
    },
    '100%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    }
});
const moveLeftOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antMoveLeftOut', {
    '0%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    },
    '100%': {
        transform: 'translate3d(-100%, 0, 0)',
        transformOrigin: '0 0',
        opacity: 0
    }
});
const moveRightIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antMoveRightIn', {
    '0%': {
        transform: 'translate3d(100%, 0, 0)',
        transformOrigin: '0 0',
        opacity: 0
    },
    '100%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    }
});
const moveRightOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antMoveRightOut', {
    '0%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    },
    '100%': {
        transform: 'translate3d(100%, 0, 0)',
        transformOrigin: '0 0',
        opacity: 0
    }
});
const moveUpIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antMoveUpIn', {
    '0%': {
        transform: 'translate3d(0, -100%, 0)',
        transformOrigin: '0 0',
        opacity: 0
    },
    '100%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    }
});
const moveUpOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antMoveUpOut', {
    '0%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    },
    '100%': {
        transform: 'translate3d(0, -100%, 0)',
        transformOrigin: '0 0',
        opacity: 0
    }
});
const moveMotion = {
    'move-up': {
        inKeyframes: moveUpIn,
        outKeyframes: moveUpOut
    },
    'move-down': {
        inKeyframes: moveDownIn,
        outKeyframes: moveDownOut
    },
    'move-left': {
        inKeyframes: moveLeftIn,
        outKeyframes: moveLeftOut
    },
    'move-right': {
        inKeyframes: moveRightIn,
        outKeyframes: moveRightOut
    }
};
const initMoveMotion = (token, motionName)=>{
    const { antCls } = token;
    const motionCls = "".concat(antCls, "-").concat(motionName);
    const { inKeyframes, outKeyframes } = moveMotion[motionName];
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initMotion"])(motionCls, inKeyframes, outKeyframes, token.motionDurationMid),
        {
            ["\n        ".concat(motionCls, "-enter,\n        ").concat(motionCls, "-appear\n      ")]: {
                opacity: 0,
                animationTimingFunction: token.motionEaseOutCirc
            },
            ["".concat(motionCls, "-leave")]: {
                animationTimingFunction: token.motionEaseInOutCirc
            }
        }
    ];
};
}),
"[project]/Downloads/One click/node_modules/antd/es/dropdown/style/status.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const genStatusStyle = (token)=>{
    const { componentCls, menuCls, colorError, colorTextLightSolid } = token;
    const itemCls = "".concat(menuCls, "-item");
    return {
        ["".concat(componentCls, ", ").concat(componentCls, "-menu-submenu")]: {
            ["".concat(menuCls, " ").concat(itemCls)]: {
                ["&".concat(itemCls, "-danger:not(").concat(itemCls, "-disabled)")]: {
                    color: colorError,
                    '&:hover': {
                        color: colorTextLightSolid,
                        backgroundColor: colorError
                    }
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = genStatusStyle;
}),
"[project]/Downloads/One click/node_modules/antd/es/dropdown/style/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs/es/util/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$move$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/motion/move.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/motion/slide.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/motion/zoom.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/placementArrow.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/roundedArrow.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$style$2f$status$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/dropdown/style/status.js [client] (ecmascript)");
;
;
;
;
;
;
;
// =============================== Base ===============================
const genBaseStyle = (token)=>{
    const { componentCls, menuCls, zIndexPopup, dropdownArrowDistance, sizePopupArrow, antCls, iconCls, motionDurationMid, paddingBlock, fontSize, dropdownEdgeChildPadding, colorTextDisabled, fontSizeIcon, controlPaddingHorizontal, colorBgElevated } = token;
    return [
        {
            [componentCls]: {
                position: 'absolute',
                top: -9999,
                left: {
                    _skip_check_: true,
                    value: -9999
                },
                zIndex: zIndexPopup,
                display: 'block',
                // A placeholder out of dropdown visible range to avoid close when user moving
                '&::before': {
                    position: 'absolute',
                    insetBlock: token.calc(sizePopupArrow).div(2).sub(dropdownArrowDistance).equal(),
                    // insetInlineStart: -7, // FIXME: Seems not work for hidden element
                    zIndex: -9999,
                    opacity: 0.0001,
                    content: '""'
                },
                // Makes vertical dropdowns have a scrollbar once they become taller than the viewport.
                '&-menu-vertical': {
                    maxHeight: '100vh',
                    overflowY: 'auto'
                },
                ["&-trigger".concat(antCls, "-btn")]: {
                    ["& > ".concat(iconCls, "-down, & > ").concat(antCls, "-btn-icon > ").concat(iconCls, "-down")]: {
                        fontSize: fontSizeIcon
                    }
                },
                ["".concat(componentCls, "-wrap")]: {
                    position: 'relative',
                    ["".concat(antCls, "-btn > ").concat(iconCls, "-down")]: {
                        fontSize: fontSizeIcon
                    },
                    ["".concat(iconCls, "-down::before")]: {
                        transition: "transform ".concat(motionDurationMid)
                    }
                },
                ["".concat(componentCls, "-wrap-open")]: {
                    ["".concat(iconCls, "-down::before")]: {
                        transform: "rotate(180deg)"
                    }
                },
                ["\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      "]: {
                    display: 'none'
                },
                // =============================================================
                // ==                         Motion                          ==
                // =============================================================
                // When position is not enough for dropdown, the placement will revert.
                // We will handle this with revert motion name.
                ["&".concat(antCls, "-slide-down-enter").concat(antCls, "-slide-down-enter-active").concat(componentCls, "-placement-bottomLeft,\n          &").concat(antCls, "-slide-down-appear").concat(antCls, "-slide-down-appear-active").concat(componentCls, "-placement-bottomLeft,\n          &").concat(antCls, "-slide-down-enter").concat(antCls, "-slide-down-enter-active").concat(componentCls, "-placement-bottom,\n          &").concat(antCls, "-slide-down-appear").concat(antCls, "-slide-down-appear-active").concat(componentCls, "-placement-bottom,\n          &").concat(antCls, "-slide-down-enter").concat(antCls, "-slide-down-enter-active").concat(componentCls, "-placement-bottomRight,\n          &").concat(antCls, "-slide-down-appear").concat(antCls, "-slide-down-appear-active").concat(componentCls, "-placement-bottomRight")]: {
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$client$5d$__$28$ecmascript$29$__["slideUpIn"]
                },
                ["&".concat(antCls, "-slide-up-enter").concat(antCls, "-slide-up-enter-active").concat(componentCls, "-placement-topLeft,\n          &").concat(antCls, "-slide-up-appear").concat(antCls, "-slide-up-appear-active").concat(componentCls, "-placement-topLeft,\n          &").concat(antCls, "-slide-up-enter").concat(antCls, "-slide-up-enter-active").concat(componentCls, "-placement-top,\n          &").concat(antCls, "-slide-up-appear").concat(antCls, "-slide-up-appear-active").concat(componentCls, "-placement-top,\n          &").concat(antCls, "-slide-up-enter").concat(antCls, "-slide-up-enter-active").concat(componentCls, "-placement-topRight,\n          &").concat(antCls, "-slide-up-appear").concat(antCls, "-slide-up-appear-active").concat(componentCls, "-placement-topRight")]: {
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$client$5d$__$28$ecmascript$29$__["slideDownIn"]
                },
                ["&".concat(antCls, "-slide-down-leave").concat(antCls, "-slide-down-leave-active").concat(componentCls, "-placement-bottomLeft,\n          &").concat(antCls, "-slide-down-leave").concat(antCls, "-slide-down-leave-active").concat(componentCls, "-placement-bottom,\n          &").concat(antCls, "-slide-down-leave").concat(antCls, "-slide-down-leave-active").concat(componentCls, "-placement-bottomRight")]: {
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$client$5d$__$28$ecmascript$29$__["slideUpOut"]
                },
                ["&".concat(antCls, "-slide-up-leave").concat(antCls, "-slide-up-leave-active").concat(componentCls, "-placement-topLeft,\n          &").concat(antCls, "-slide-up-leave").concat(antCls, "-slide-up-leave-active").concat(componentCls, "-placement-top,\n          &").concat(antCls, "-slide-up-leave").concat(antCls, "-slide-up-leave-active").concat(componentCls, "-placement-topRight")]: {
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$client$5d$__$28$ecmascript$29$__["slideDownOut"]
                }
            }
        },
        // =============================================================
        // ==                        Arrow style                      ==
        // =============================================================
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(token, colorBgElevated, {
            arrowPlacement: {
                top: true,
                bottom: true
            }
        }),
        {
            // =============================================================
            // ==                          Menu                           ==
            // =============================================================
            ["".concat(componentCls, " ").concat(menuCls)]: {
                position: 'relative',
                margin: 0
            },
            ["".concat(menuCls, "-submenu-popup")]: {
                position: 'absolute',
                zIndex: zIndexPopup,
                background: 'transparent',
                boxShadow: 'none',
                transformOrigin: '0 0',
                'ul, li': {
                    listStyle: 'none',
                    margin: 0
                }
            },
            ["".concat(componentCls, ", ").concat(componentCls, "-menu-submenu")]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["resetComponent"])(token)), {
                [menuCls]: Object.assign(Object.assign({
                    padding: dropdownEdgeChildPadding,
                    listStyleType: 'none',
                    backgroundColor: colorBgElevated,
                    backgroundClip: 'padding-box',
                    borderRadius: token.borderRadiusLG,
                    outline: 'none',
                    boxShadow: token.boxShadowSecondary
                }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token)), {
                    '&:empty': {
                        padding: 0,
                        boxShadow: 'none'
                    },
                    ["".concat(menuCls, "-item-group-title")]: {
                        padding: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(paddingBlock), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(controlPaddingHorizontal)),
                        color: token.colorTextDescription,
                        transition: "all ".concat(motionDurationMid)
                    },
                    // ======================= Item Content =======================
                    ["".concat(menuCls, "-item")]: {
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center'
                    },
                    ["".concat(menuCls, "-item-icon")]: {
                        minWidth: fontSize,
                        marginInlineEnd: token.marginXS,
                        fontSize: token.fontSizeSM
                    },
                    ["".concat(menuCls, "-title-content")]: {
                        flex: 'auto',
                        '&-with-extra': {
                            display: 'inline-flex',
                            alignItems: 'center',
                            width: '100%'
                        },
                        '> a': {
                            color: 'inherit',
                            transition: "all ".concat(motionDurationMid),
                            '&:hover': {
                                color: 'inherit'
                            },
                            '&::after': {
                                position: 'absolute',
                                inset: 0,
                                content: '""'
                            }
                        },
                        ["".concat(menuCls, "-item-extra")]: {
                            paddingInlineStart: token.padding,
                            marginInlineStart: 'auto',
                            fontSize: token.fontSizeSM,
                            color: token.colorTextDescription
                        }
                    },
                    // =========================== Item ===========================
                    ["".concat(menuCls, "-item, ").concat(menuCls, "-submenu-title")]: Object.assign(Object.assign({
                        display: 'flex',
                        margin: 0,
                        padding: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(paddingBlock), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(controlPaddingHorizontal)),
                        color: token.colorText,
                        fontWeight: 'normal',
                        fontSize,
                        lineHeight: token.lineHeight,
                        cursor: 'pointer',
                        transition: "all ".concat(motionDurationMid),
                        borderRadius: token.borderRadiusSM,
                        '&:hover, &-active': {
                            backgroundColor: token.controlItemBgHover
                        }
                    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token)), {
                        '&-selected': {
                            color: token.colorPrimary,
                            backgroundColor: token.controlItemBgActive,
                            '&:hover, &-active': {
                                backgroundColor: token.controlItemBgActiveHover
                            }
                        },
                        '&-disabled': {
                            color: colorTextDisabled,
                            cursor: 'not-allowed',
                            '&:hover': {
                                color: colorTextDisabled,
                                backgroundColor: colorBgElevated,
                                cursor: 'not-allowed'
                            },
                            a: {
                                pointerEvents: 'none'
                            }
                        },
                        '&-divider': {
                            height: 1,
                            // By design
                            margin: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(token.marginXXS), " 0"),
                            overflow: 'hidden',
                            lineHeight: 0,
                            backgroundColor: token.colorSplit
                        },
                        ["".concat(componentCls, "-menu-submenu-expand-icon")]: {
                            position: 'absolute',
                            insetInlineEnd: token.paddingXS,
                            ["".concat(componentCls, "-menu-submenu-arrow-icon")]: {
                                marginInlineEnd: '0 !important',
                                color: token.colorIcon,
                                fontSize: fontSizeIcon,
                                fontStyle: 'normal'
                            }
                        }
                    }),
                    ["".concat(menuCls, "-item-group-list")]: {
                        margin: "0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unit"])(token.marginXS)),
                        padding: 0,
                        listStyle: 'none'
                    },
                    ["".concat(menuCls, "-submenu-title")]: {
                        paddingInlineEnd: token.calc(controlPaddingHorizontal).add(token.fontSizeSM).equal()
                    },
                    ["".concat(menuCls, "-submenu-vertical")]: {
                        position: 'relative'
                    },
                    ["".concat(menuCls, "-submenu").concat(menuCls, "-submenu-disabled ").concat(componentCls, "-menu-submenu-title")]: {
                        ["&, ".concat(componentCls, "-menu-submenu-arrow-icon")]: {
                            color: colorTextDisabled,
                            backgroundColor: colorBgElevated,
                            cursor: 'not-allowed'
                        }
                    },
                    // https://github.com/ant-design/ant-design/issues/19264
                    ["".concat(menuCls, "-submenu-selected ").concat(componentCls, "-menu-submenu-title")]: {
                        color: token.colorPrimary
                    }
                })
            })
        },
        // Follow code may reuse in other components
        [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initSlideMotion"])(token, 'slide-up'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initSlideMotion"])(token, 'slide-down'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$move$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initMoveMotion"])(token, 'move-up'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$move$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initMoveMotion"])(token, 'move-down'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initZoomMotion"])(token, 'zoom-big')
        ]
    ];
};
const prepareComponentToken = (token)=>Object.assign(Object.assign({
        zIndexPopup: token.zIndexPopupBase + 50,
        paddingBlock: (token.controlHeight - token.fontSize * token.lineHeight) / 2
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getArrowOffsetToken"])({
        contentRadius: token.borderRadiusLG,
        limitVerticalRadius: true
    })), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getArrowToken"])(token));
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Dropdown', (token)=>{
    const { marginXXS, sizePopupArrow, paddingXXS, componentCls } = token;
    const dropdownToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        menuCls: "".concat(componentCls, "-menu"),
        dropdownArrowDistance: token.calc(sizePopupArrow).div(2).add(marginXXS).equal(),
        dropdownEdgeChildPadding: paddingXXS
    });
    return [
        genBaseStyle(dropdownToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$style$2f$status$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(dropdownToken)
    ];
}, prepareComponentToken, {
    resetStyle: false
});
}),
"[project]/Downloads/One click/node_modules/antd/es/dropdown/dropdown.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LeftOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/LeftOutlined.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/RightOutlined.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dropdown$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-dropdown/es/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useEvent.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useMergedState.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/omit.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/hooks/useZIndex.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$isPrimitive$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/isPrimitive.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$placements$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/placements.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$PurePanel$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/PurePanel.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/reactNode.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/warning.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/zindexContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/menu/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$OverrideContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/menu/OverrideContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/useToken.js [client] (ecmascript) <export default as useToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/dropdown/style/index.js [client] (ecmascript)");
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
;
;
;
;
;
const _Placements = [
    'topLeft',
    'topCenter',
    'topRight',
    'bottomLeft',
    'bottomCenter',
    'bottomRight',
    'top',
    'bottom'
];
const Dropdown = (props)=>{
    var _a;
    const { menu, arrow, prefixCls: customizePrefixCls, children, trigger, disabled, dropdownRender, popupRender, getPopupContainer, overlayClassName, rootClassName, overlayStyle, open, onOpenChange, // Deprecated
    visible, onVisibleChange, mouseEnterDelay = 0.15, mouseLeaveDelay = 0.1, autoAdjustOverflow = true, placement = '', overlay, transitionName, destroyOnHidden, destroyPopupOnHide } = props;
    const { getPopupContainer: getContextPopupContainer, getPrefixCls, direction, dropdown } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const mergedPopupRender = popupRender || dropdownRender;
    // Warning for deprecated usage
    const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Dropdown');
    if ("TURBOPACK compile-time truthy", 1) {
        const deprecatedProps = {
            visible: 'open',
            onVisibleChange: 'onOpenChange',
            overlay: 'menu',
            dropdownRender: 'popupRender',
            destroyPopupOnHide: 'destroyOnHidden'
        };
        Object.entries(deprecatedProps).forEach((param)=>{
            let [deprecatedName, newName] = param;
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
        if (placement.includes('Center')) {
            warning.deprecated(!placement.includes('Center'), "placement: ".concat(placement), "placement: ".concat(placement.slice(0, placement.indexOf('Center'))));
        }
    }
    const memoTransitionName = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Dropdown.useMemo[memoTransitionName]": ()=>{
            const rootPrefixCls = getPrefixCls();
            if (transitionName !== undefined) {
                return transitionName;
            }
            if (placement.includes('top')) {
                return "".concat(rootPrefixCls, "-slide-down");
            }
            return "".concat(rootPrefixCls, "-slide-up");
        }
    }["Dropdown.useMemo[memoTransitionName]"], [
        getPrefixCls,
        placement,
        transitionName
    ]);
    const memoPlacement = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Dropdown.useMemo[memoPlacement]": ()=>{
            if (!placement) {
                return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
            }
            if (placement.includes('Center')) {
                return placement.slice(0, placement.indexOf('Center'));
            }
            return placement;
        }
    }["Dropdown.useMemo[memoPlacement]"], [
        placement,
        direction
    ]);
    const prefixCls = getPrefixCls('dropdown', customizePrefixCls);
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const child = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Children"].only((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$isPrimitive$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(children) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("span", null, children) : children);
    const popupTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-trigger"), {
            ["".concat(prefixCls, "-rtl")]: direction === 'rtl'
        }, child.props.className),
        disabled: (_a = child.props.disabled) !== null && _a !== void 0 ? _a : disabled
    });
    const triggerActions = disabled ? [] : trigger;
    const alignPoint = !!(triggerActions === null || triggerActions === void 0 ? void 0 : triggerActions.includes('contextMenu'));
    // =========================== Open ============================
    const [mergedOpen, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(false, {
        value: open !== null && open !== void 0 ? open : visible
    });
    const onInnerOpenChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "Dropdown.useEvent[onInnerOpenChange]": (nextOpen)=>{
            onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(nextOpen, {
                source: 'trigger'
            });
            onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(nextOpen);
            setOpen(nextOpen);
        }
    }["Dropdown.useEvent[onInnerOpenChange]"]);
    // =========================== Overlay ============================
    const overlayClassNameCustomized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(overlayClassName, rootClassName, hashId, cssVarCls, rootCls, dropdown === null || dropdown === void 0 ? void 0 : dropdown.className, {
        ["".concat(prefixCls, "-rtl")]: direction === 'rtl'
    });
    const builtinPlacements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$placements$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        arrowPointAtCenter: typeof arrow === 'object' && arrow.pointAtCenter,
        autoAdjustOverflow,
        offset: token.marginXXS,
        arrowWidth: arrow ? token.sizePopupArrow : 0,
        borderRadius: token.borderRadius
    });
    const onMenuClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "Dropdown.useEvent[onMenuClick]": ()=>{
            if ((menu === null || menu === void 0 ? void 0 : menu.selectable) && (menu === null || menu === void 0 ? void 0 : menu.multiple)) {
                return;
            }
            onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(false, {
                source: 'menu'
            });
            setOpen(false);
        }
    }["Dropdown.useEvent[onMenuClick]"]);
    const renderOverlay = ()=>{
        // rc-dropdown already can process the function of overlay, but we have check logic here.
        // So we need render the element to check and pass back to rc-dropdown.
        let overlayNode;
        if (menu === null || menu === void 0 ? void 0 : menu.items) {
            overlayNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], Object.assign({}, menu));
        } else if (typeof overlay === 'function') {
            overlayNode = overlay();
        } else {
            overlayNode = overlay;
        }
        if (mergedPopupRender) {
            overlayNode = mergedPopupRender(overlayNode);
        }
        overlayNode = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Children"].only(typeof overlayNode === 'string' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("span", null, overlayNode) : overlayNode);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$OverrideContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["OverrideProvider"], {
            prefixCls: "".concat(prefixCls, "-menu"),
            rootClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(cssVarCls, rootCls),
            expandIcon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
                className: "".concat(prefixCls, "-menu-submenu-arrow")
            }, direction === 'rtl' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LeftOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                className: "".concat(prefixCls, "-menu-submenu-arrow-icon")
            }) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                className: "".concat(prefixCls, "-menu-submenu-arrow-icon")
            })),
            mode: "vertical",
            selectable: false,
            onClick: onMenuClick,
            validator: (param)=>{
                let { mode } = param;
                // Warning if use other mode
                ("TURBOPACK compile-time truthy", 1) ? warning(!mode || mode === 'vertical', 'usage', 'mode="'.concat(mode, "\" is not supported for Dropdown's Menu.")) : "TURBOPACK unreachable";
            }
        }, overlayNode);
    };
    // =========================== zIndex ============================
    const [zIndex, contextZIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useZIndex"])('Dropdown', overlayStyle === null || overlayStyle === void 0 ? void 0 : overlayStyle.zIndex);
    // ============================ Render ============================
    let renderNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dropdown$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], Object.assign({
        alignPoint: alignPoint
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, [
        'rootClassName'
    ]), {
        mouseEnterDelay: mouseEnterDelay,
        mouseLeaveDelay: mouseLeaveDelay,
        visible: mergedOpen,
        builtinPlacements: builtinPlacements,
        arrow: !!arrow,
        overlayClassName: overlayClassNameCustomized,
        prefixCls: prefixCls,
        getPopupContainer: getPopupContainer || getContextPopupContainer,
        transitionName: memoTransitionName,
        trigger: triggerActions,
        overlay: renderOverlay,
        placement: memoPlacement,
        onVisibleChange: onInnerOpenChange,
        overlayStyle: Object.assign(Object.assign(Object.assign({}, dropdown === null || dropdown === void 0 ? void 0 : dropdown.style), overlayStyle), {
            zIndex
        }),
        autoDestroy: destroyOnHidden !== null && destroyOnHidden !== void 0 ? destroyOnHidden : destroyPopupOnHide
    }), popupTrigger);
    if (zIndex) {
        renderNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: contextZIndex
        }, renderNode);
    }
    return wrapCSSVar(renderNode);
};
// We don't care debug panel
const PurePanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$PurePanel$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(Dropdown, 'align', undefined, 'dropdown', (prefixCls)=>prefixCls);
/* istanbul ignore next */ const WrapPurePanel = (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](PurePanel, Object.assign({}, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("span", null));
Dropdown._InternalPanelDoNotUseOrYouWillBeFired = WrapPurePanel;
if ("TURBOPACK compile-time truthy", 1) {
    Dropdown.displayName = 'Dropdown';
}
const __TURBOPACK__default__export__ = Dropdown;
}),
"[project]/Downloads/One click/node_modules/antd/es/_util/gapSize.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPresetSize",
    ()=>isPresetSize,
    "isValidGapNumber",
    ()=>isValidGapNumber
]);
function isPresetSize(size) {
    return [
        'small',
        'middle',
        'large'
    ].includes(size);
}
function isValidGapNumber(size) {
    if (!size) {
        // The case of size = 0 is deliberately excluded here, because the default value of the gap attribute in CSS is 0, so if the user passes 0 in, we can directly ignore it.
        return false;
    }
    return typeof size === 'number' && !Number.isNaN(size);
}
}),
"[project]/Downloads/One click/node_modules/antd/es/space/style/addon.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/style/compact-item.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [client] (ecmascript)");
;
;
const genSpaceAddonStyle = (token)=>{
    const { componentCls, borderRadius, paddingSM, colorBorder, paddingXS, fontSizeLG, fontSizeSM, borderRadiusLG, borderRadiusSM, colorBgContainerDisabled, lineWidth } = token;
    return {
        [componentCls]: [
            {
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0,
                paddingInline: paddingSM,
                margin: 0,
                background: colorBgContainerDisabled,
                borderWidth: lineWidth,
                borderStyle: 'solid',
                borderColor: colorBorder,
                borderRadius,
                '&-large': {
                    fontSize: fontSizeLG,
                    borderRadius: borderRadiusLG
                },
                '&-small': {
                    paddingInline: paddingXS,
                    borderRadius: borderRadiusSM,
                    fontSize: fontSizeSM
                },
                '&-compact-last-item': {
                    borderEndStartRadius: 0,
                    borderStartStartRadius: 0
                },
                '&-compact-first-item': {
                    borderEndEndRadius: 0,
                    borderStartEndRadius: 0
                },
                '&-compact-item:not(:first-child):not(:last-child)': {
                    borderRadius: 0
                },
                '&-compact-item:not(:last-child)': {
                    borderInlineEndWidth: 0
                }
            },
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genCompactItemStyle"])(token, {
                focus: false
            })
        ]
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genStyleHooks"])([
    'Space',
    'Addon'
], (token)=>[
        genSpaceAddonStyle(token)
    ]);
}),
"[project]/Downloads/One click/node_modules/antd/es/space/Addon.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/space/Compact.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$style$2f$addon$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/space/style/addon.js [client] (ecmascript)");
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
const SpaceAddon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    const { className, children, style, prefixCls: customizePrefixCls } = props, restProps = __rest(props, [
        "className",
        "children",
        "style",
        "prefixCls"
    ]);
    const { getPrefixCls, direction: directionConfig } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('space-addon', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$style$2f$addon$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const { compactItemClassnames, compactSize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCompactItemContext"])(prefixCls, directionConfig);
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, hashId, compactItemClassnames, cssVarCls, {
        ["".concat(prefixCls, "-").concat(compactSize)]: compactSize
    }, className);
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("div", Object.assign({
        ref: ref,
        className: classes,
        style: style
    }, restProps), children));
});
const __TURBOPACK__default__export__ = SpaceAddon;
}),
"[project]/Downloads/One click/node_modules/antd/es/space/context.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpaceContext",
    ()=>SpaceContext,
    "SpaceContextProvider",
    ()=>SpaceContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
const SpaceContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createContext({
    latestIndex: 0
});
const SpaceContextProvider = SpaceContext.Provider;
}),
"[project]/Downloads/One click/node_modules/antd/es/space/Item.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/space/context.js [client] (ecmascript)");
"use client";
;
;
const Item = (param)=>{
    let { className, index, children, split, style } = param;
    const { latestIndex } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SpaceContext"]);
    if (children === null || children === undefined) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: className,
        style: style
    }, children), index < latestIndex && split && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: "".concat(className, "-split")
    }, split));
};
const __TURBOPACK__default__export__ = Item;
}),
"[project]/Downloads/One click/node_modules/antd/es/space/style/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/theme/util/genStyleUtils.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [client] (ecmascript) <export merge as mergeToken>");
;
const genSpaceStyle = (token)=>{
    const { componentCls, antCls } = token;
    return {
        [componentCls]: {
            display: 'inline-flex',
            '&-rtl': {
                direction: 'rtl'
            },
            '&-vertical': {
                flexDirection: 'column'
            },
            '&-align': {
                flexDirection: 'column',
                '&-center': {
                    alignItems: 'center'
                },
                '&-start': {
                    alignItems: 'flex-start'
                },
                '&-end': {
                    alignItems: 'flex-end'
                },
                '&-baseline': {
                    alignItems: 'baseline'
                }
            },
            ["".concat(componentCls, "-item:empty")]: {
                display: 'none'
            },
            // https://github.com/ant-design/ant-design/issues/47875
            ["".concat(componentCls, "-item > ").concat(antCls, "-badge-not-a-wrapper:only-child")]: {
                display: 'block'
            }
        }
    };
};
const genSpaceGapStyle = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: {
            '&-gap-row-small': {
                rowGap: token.spaceGapSmallSize
            },
            '&-gap-row-middle': {
                rowGap: token.spaceGapMiddleSize
            },
            '&-gap-row-large': {
                rowGap: token.spaceGapLargeSize
            },
            '&-gap-col-small': {
                columnGap: token.spaceGapSmallSize
            },
            '&-gap-col-middle': {
                columnGap: token.spaceGapMiddleSize
            },
            '&-gap-col-large': {
                columnGap: token.spaceGapLargeSize
            }
        }
    };
};
const prepareComponentToken = ()=>({});
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Space', (token)=>{
    const spaceToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        spaceGapSmallSize: token.paddingXS,
        spaceGapMiddleSize: token.padding,
        spaceGapLargeSize: token.paddingLG
    });
    return [
        genSpaceStyle(spaceToken),
        genSpaceGapStyle(spaceToken)
    ];
}, ()=>({}), {
    // Space component don't apply extra font style
    // https://github.com/ant-design/ant-design/issues/40315
    resetStyle: false
});
}),
"[project]/Downloads/One click/node_modules/antd/es/space/index.js [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Children/toArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$gapSize$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/_util/gapSize.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/space/Compact.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$Addon$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/space/Addon.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/space/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$Item$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/space/Item.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/space/style/index.js [client] (ecmascript)");
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
const InternalSpace = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    var _a;
    const { getPrefixCls, direction: directionConfig, size: contextSize, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('space');
    const { size = contextSize !== null && contextSize !== void 0 ? contextSize : 'small', align, className, rootClassName, children, direction = 'horizontal', prefixCls: customizePrefixCls, split, style, wrap = false, classNames: customClassNames, styles } = props, otherProps = __rest(props, [
        "size",
        "align",
        "className",
        "rootClassName",
        "children",
        "direction",
        "prefixCls",
        "split",
        "style",
        "wrap",
        "classNames",
        "styles"
    ]);
    const [horizontalSize, verticalSize] = Array.isArray(size) ? size : [
        size,
        size
    ];
    const isPresetVerticalSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$gapSize$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isPresetSize"])(verticalSize);
    const isPresetHorizontalSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$gapSize$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isPresetSize"])(horizontalSize);
    const isValidVerticalSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$gapSize$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isValidGapNumber"])(verticalSize);
    const isValidHorizontalSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$_util$2f$gapSize$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isValidGapNumber"])(horizontalSize);
    const childNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(children, {
        keepEmpty: true
    });
    const mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
    const prefixCls = getPrefixCls('space', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$style$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, contextClassName, hashId, "".concat(prefixCls, "-").concat(direction), {
        ["".concat(prefixCls, "-rtl")]: directionConfig === 'rtl',
        ["".concat(prefixCls, "-align-").concat(mergedAlign)]: mergedAlign,
        ["".concat(prefixCls, "-gap-row-").concat(verticalSize)]: isPresetVerticalSize,
        ["".concat(prefixCls, "-gap-col-").concat(horizontalSize)]: isPresetHorizontalSize
    }, className, rootClassName, cssVarCls);
    const itemClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-item"), (_a = customClassNames === null || customClassNames === void 0 ? void 0 : customClassNames.item) !== null && _a !== void 0 ? _a : contextClassNames.item);
    const mergedItemStyle = Object.assign(Object.assign({}, contextStyles.item), styles === null || styles === void 0 ? void 0 : styles.item);
    // Calculate latest one
    const renderedItems = childNodes.map((child, i)=>{
        const key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(itemClassName, "-").concat(i);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$Item$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            className: itemClassName,
            key: key,
            index: i,
            split: split,
            style: mergedItemStyle
        }, child);
    });
    const memoizedSpaceContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalSpace.useMemo[memoizedSpaceContext]": ()=>{
            const calcLatestIndex = childNodes.reduce({
                "InternalSpace.useMemo[memoizedSpaceContext].calcLatestIndex": (latest, child, i)=>child !== null && child !== undefined ? i : latest
            }["InternalSpace.useMemo[memoizedSpaceContext].calcLatestIndex"], 0);
            return {
                latestIndex: calcLatestIndex
            };
        }
    }["InternalSpace.useMemo[memoizedSpaceContext]"], [
        childNodes
    ]);
    // =========================== Render ===========================
    if (childNodes.length === 0) {
        return null;
    }
    const gapStyle = {};
    if (wrap) {
        gapStyle.flexWrap = 'wrap';
    }
    if (!isPresetHorizontalSize && isValidHorizontalSize) {
        gapStyle.columnGap = horizontalSize;
    }
    if (!isPresetVerticalSize && isValidVerticalSize) {
        gapStyle.rowGap = verticalSize;
    }
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", Object.assign({
        ref: ref,
        className: cls,
        style: Object.assign(Object.assign(Object.assign({}, gapStyle), contextStyle), style)
    }, otherProps), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SpaceContextProvider"], {
        value: memoizedSpaceContext
    }, renderedItems)));
});
const Space = InternalSpace;
Space.Compact = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
Space.Addon = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$Addon$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
if ("TURBOPACK compile-time truthy", 1) {
    Space.displayName = 'Space';
}
const __TURBOPACK__default__export__ = Space;
}),
"[project]/Downloads/One click/node_modules/antd/es/dropdown/dropdown-button.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EllipsisOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/button/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/config-provider/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/space/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/space/Compact.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$dropdown$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/dropdown/dropdown.js [client] (ecmascript)");
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
const DropdownButton = (props)=>{
    const { getPopupContainer: getContextPopupContainer, getPrefixCls, direction } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { prefixCls: customizePrefixCls, type = 'default', danger, disabled, loading, onClick, htmlType, children, className, menu, arrow, autoFocus, overlay, trigger, align, open, onOpenChange, placement, getPopupContainer, href, icon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EllipsisOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], null), title, buttonsRender = (buttons)=>buttons, mouseEnterDelay, mouseLeaveDelay, overlayClassName, overlayStyle, destroyOnHidden, destroyPopupOnHide, dropdownRender, popupRender } = props, restProps = __rest(props, [
        "prefixCls",
        "type",
        "danger",
        "disabled",
        "loading",
        "onClick",
        "htmlType",
        "children",
        "className",
        "menu",
        "arrow",
        "autoFocus",
        "overlay",
        "trigger",
        "align",
        "open",
        "onOpenChange",
        "placement",
        "getPopupContainer",
        "href",
        "icon",
        "title",
        "buttonsRender",
        "mouseEnterDelay",
        "mouseLeaveDelay",
        "overlayClassName",
        "overlayStyle",
        "destroyOnHidden",
        "destroyPopupOnHide",
        "dropdownRender",
        "popupRender"
    ]);
    const prefixCls = getPrefixCls('dropdown', customizePrefixCls);
    const buttonPrefixCls = "".concat(prefixCls, "-button");
    const mergedPopupRender = popupRender || dropdownRender;
    const dropdownProps = {
        menu,
        arrow,
        autoFocus,
        align,
        disabled,
        trigger: disabled ? [] : trigger,
        onOpenChange,
        getPopupContainer: getPopupContainer || getContextPopupContainer,
        mouseEnterDelay,
        mouseLeaveDelay,
        overlayClassName,
        overlayStyle,
        destroyOnHidden,
        popupRender: mergedPopupRender
    };
    const { compactSize, compactItemClassnames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCompactItemContext"])(prefixCls, direction);
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(buttonPrefixCls, compactItemClassnames, className);
    if ('destroyPopupOnHide' in props) {
        dropdownProps.destroyPopupOnHide = destroyPopupOnHide;
    }
    if ('overlay' in props) {
        dropdownProps.overlay = overlay;
    }
    if ('open' in props) {
        dropdownProps.open = open;
    }
    if ('placement' in props) {
        dropdownProps.placement = placement;
    } else {
        dropdownProps.placement = direction === 'rtl' ? 'bottomLeft' : 'bottomRight';
    }
    const leftButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        type: type,
        danger: danger,
        disabled: disabled,
        loading: loading,
        onClick: onClick,
        htmlType: htmlType,
        href: href,
        title: title
    }, children);
    const rightButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        type: type,
        danger: danger,
        icon: icon
    });
    const [leftButtonToRender, rightButtonToRender] = buttonsRender([
        leftButton,
        rightButton
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].Compact, Object.assign({
        className: classes,
        size: compactSize,
        block: true
    }, restProps), leftButtonToRender, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$dropdown$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], Object.assign({}, dropdownProps), rightButtonToRender));
};
DropdownButton.__ANT_BUTTON = true;
const __TURBOPACK__default__export__ = DropdownButton;
}),
"[project]/Downloads/One click/node_modules/antd/es/dropdown/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$dropdown$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/dropdown/dropdown.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$dropdown$2d$button$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/dropdown/dropdown-button.js [client] (ecmascript)");
"use client";
;
;
const Dropdown = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$dropdown$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
Dropdown.Button = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$dropdown$2d$button$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = Dropdown;
}),
"[project]/Downloads/One click/node_modules/antd/es/dropdown/index.js [client] (ecmascript) <export default as Dropdown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dropdown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/dropdown/index.js [client] (ecmascript)");
}),
]);

//# sourceMappingURL=f2ed1_antd_es_2267f49d._.js.map