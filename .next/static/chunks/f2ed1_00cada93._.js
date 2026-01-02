(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/One click/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/Downloads/One click/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/Downloads/One click/node_modules/@swc/helpers/cjs/_define_property.cjs [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
exports._ = _define_property;
}),
"[project]/Downloads/One click/node_modules/@swc/helpers/cjs/_class_private_field_loose_base.cjs [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _class_private_field_loose_base(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
        throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
}
exports._ = _class_private_field_loose_base;
}),
"[project]/Downloads/One click/node_modules/@swc/helpers/cjs/_class_private_field_loose_key.cjs [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var id = 0;
function _class_private_field_loose_key(name) {
    return "__private_" + id++ + "_" + name;
}
exports._ = _class_private_field_loose_key;
}),
"[project]/Downloads/One click/node_modules/@swc/helpers/esm/_define_property.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_define_property
]);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
;
}),
"[project]/Downloads/One click/node_modules/@swc/helpers/esm/_tagged_template_literal.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_tagged_template_literal
]);
function _tagged_template_literal(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
;
}),
"[project]/Downloads/One click/node_modules/react/cjs/react.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
            get: function() {
                console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
            }
        });
    }
    function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = !0);
    }
    function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {}
    function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(oldElement.type, newKey, void 0, void 0, oldElement._owner, oldElement.props, oldElement._debugStack, oldElement._debugTask);
        oldElement._store && (newKey._store.validated = oldElement._store.validated);
        return newKey;
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
        var escaperLookup = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + key.replace(/[=:]/g, function(match) {
            return escaperLookup[match];
        });
    }
    function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
    }
    function noop$1() {}
    function resolveThenable(thenable) {
        switch(thenable.status){
            case "fulfilled":
                return thenable.value;
            case "rejected":
                throw thenable.reason;
            default:
                switch("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
                    "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                }, function(error) {
                    "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                })), thenable.status){
                    case "fulfilled":
                        return thenable.value;
                    case "rejected":
                        throw thenable.reason;
                }
        }
        throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = !1;
        if (null === children) invokeCallback = !0;
        else switch(type){
            case "bigint":
            case "string":
            case "number":
                invokeCallback = !0;
                break;
            case "object":
                switch(children.$$typeof){
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                        invokeCallback = !0;
                        break;
                    case REACT_LAZY_TYPE:
                        return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
                }
        }
        if (invokeCallback) {
            invokeCallback = children;
            callback = callback(invokeCallback);
            var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
            isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
                return c;
            })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
            return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children)) for(var i = 0; i < children.length; i++)nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
        else if (i = getIteratorFn(children), "function" === typeof i) for(i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0), children = i.call(children), i = 0; !(nameSoFar = children.next()).done;)nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
        else if ("object" === type) {
            if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
            array = String(children);
            throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
        }
        return invokeCallback;
    }
    function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
        });
        return result;
    }
    function lazyInitializer(payload) {
        if (-1 === payload._status) {
            var ctor = payload._result;
            ctor = ctor();
            ctor.then(function(moduleObject) {
                if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
            }, function(error) {
                if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
            });
            -1 === payload._status && (payload._status = 0, payload._result = ctor);
        }
        if (1 === payload._status) return ctor = payload._result, void 0 === ctor && console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", ctor), "default" in ctor || console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", ctor), ctor.default;
        throw payload._result;
    }
    function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher;
    }
    function noop() {}
    function enqueueTask(task) {
        if (null === enqueueTaskImpl) try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module && module[requireString]).call(module, "timers").setImmediate;
        } catch (_err) {
            enqueueTaskImpl = function(callback) {
                !1 === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = !0, "undefined" === typeof MessageChannel && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
            };
        }
        return enqueueTaskImpl(task);
    }
    function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
    }
    function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
        actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue) if (0 !== queue.length) try {
            flushActQueue(queue);
            enqueueTask(function() {
                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
            return;
        } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
        }
        else ReactSharedInternals.actQueue = null;
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
    }
    function flushActQueue(queue) {
        if (!isFlushing) {
            isFlushing = !0;
            var i = 0;
            try {
                for(; i < queue.length; i++){
                    var callback = queue[i];
                    do {
                        ReactSharedInternals.didUsePromise = !1;
                        var continuation = callback(!1);
                        if (null !== continuation) {
                            if (ReactSharedInternals.didUsePromise) {
                                queue[i] = callback;
                                queue.splice(0, i);
                                return;
                            }
                            callback = continuation;
                        } else break;
                    }while (1)
                }
                queue.length = 0;
            } catch (error) {
                queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
            } finally{
                isFlushing = !1;
            }
        }
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function(publicInstance) {
            warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
            warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
            warnNoop(publicInstance, "setState");
        }
    }, assign = Object.assign, emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
        isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
    }, fnName;
    for(fnName in deprecatedAPIs)deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = !0;
    var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
    }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    deprecatedAPIs = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = deprecatedAPIs["react-stack-bottom-frame"].bind(deprecatedAPIs, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutMaps = !1, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
            var event = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
                error: error
            });
            if (!window.dispatchEvent(event)) return;
        } else if ("object" === typeof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] && "function" === typeof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].emit) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].emit("uncaughtException", error);
            return;
        }
        console.error(error);
    }, didWarnAboutMessageChannel = !1, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = !1, isFlushing = !1, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
            return queueMicrotask(callback);
        });
    } : enqueueTask;
    deprecatedAPIs = Object.freeze({
        __proto__: null,
        c: function(size) {
            return resolveDispatcher().useMemoCache(size);
        }
    });
    exports.Children = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
                forEachFunc.apply(this, arguments);
            }, forEachContext);
        },
        count: function(children) {
            var n = 0;
            mapChildren(children, function() {
                n++;
            });
            return n;
        },
        toArray: function(children) {
            return mapChildren(children, function(child) {
                return child;
            }) || [];
        },
        only: function(children) {
            if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
            return children;
        }
    };
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.__COMPILER_RUNTIME = deprecatedAPIs;
    exports.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = !1;
        try {
            var result = callback();
        } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length) throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
            var thenable = result;
            queueSeveralMicrotasks(function() {
                didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            });
            return {
                then: function(resolve, reject) {
                    didAwaitActCall = !0;
                    thenable.then(function(returnValue) {
                        popActScope(prevActQueue, prevActScopeDepth);
                        if (0 === prevActScopeDepth) {
                            try {
                                flushActQueue(queue), enqueueTask(function() {
                                    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                });
                            } catch (error$0) {
                                ReactSharedInternals.thrownErrors.push(error$0);
                            }
                            if (0 < ReactSharedInternals.thrownErrors.length) {
                                var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);
                                ReactSharedInternals.thrownErrors.length = 0;
                                reject(_thrownError);
                            }
                        } else resolve(returnValue);
                    }, function(error) {
                        popActScope(prevActQueue, prevActScopeDepth);
                        0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                    });
                }
            };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length) throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
            then: function(resolve, reject) {
                didAwaitActCall = !0;
                0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
                    return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);
                })) : resolve(returnValue$jscomp$0);
            }
        };
    };
    exports.cache = function(fn) {
        return function() {
            return fn.apply(null, arguments);
        };
    };
    exports.captureOwnerStack = function() {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
    };
    exports.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
            var JSCompiler_inline_result;
            a: {
                if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
                    JSCompiler_inline_result = !1;
                    break a;
                }
                JSCompiler_inline_result = void 0 !== config.ref;
            }
            JSCompiler_inline_result && (owner = getOwner());
            hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
            for(propName in config)!hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
            JSCompiler_inline_result = Array(propName);
            for(var i = 0; i < propName; i++)JSCompiler_inline_result[i] = arguments[i + 2];
            props.children = JSCompiler_inline_result;
        }
        props = ReactElement(element.type, key, void 0, void 0, owner, props, element._debugStack, element._debugTask);
        for(key = 2; key < arguments.length; key++)owner = arguments[key], isValidElement(owner) && owner._store && (owner._store.validated = 1);
        return props;
    };
    exports.createContext = function(defaultValue) {
        defaultValue = {
            $$typeof: REACT_CONTEXT_TYPE,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
            $$typeof: REACT_CONSUMER_TYPE,
            _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
    };
    exports.createElement = function(type, config, children) {
        for(var i = 2; i < arguments.length; i++){
            var node = arguments[i];
            isValidElement(node) && node._store && (node._store.validated = 1);
        }
        i = {};
        node = null;
        if (null != config) for(propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = !0, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), node = "" + config.key), config)hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i.children = children;
        else if (1 < childrenLength) {
            for(var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)childArray[_i] = arguments[_i + 2];
            Object.freeze && Object.freeze(childArray);
            i.children = childArray;
        }
        if (type && type.defaultProps) for(propName in childrenLength = type.defaultProps, childrenLength)void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        node && defineKeyPropWarningGetter(i, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return ReactElement(type, node, void 0, void 0, getOwner(), i, propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack, propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
    exports.createRef = function() {
        var refObject = {
            current: null
        };
        Object.seal(refObject);
        return refObject;
    };
    exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : "function" !== typeof render ? console.error("forwardRef requires a render function but was given %s.", null === render ? "null" : typeof render) : 0 !== render.length && 2 !== render.length && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", 1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
        null != render && null != render.defaultProps && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
        var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
        }, ownName;
        Object.defineProperty(elementType, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                render.name || render.displayName || (Object.defineProperty(render, "name", {
                    value: name
                }), render.displayName = name);
            }
        });
        return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
        return {
            $$typeof: REACT_LAZY_TYPE,
            _payload: {
                _status: -1,
                _result: ctor
            },
            _init: lazyInitializer
        };
    };
    exports.memo = function(type, compare) {
        null == type && console.error("memo: The first argument must be a component. Instead received: %s", null === type ? "null" : typeof type);
        compare = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                type.name || type.displayName || (Object.defineProperty(type, "name", {
                    value: name
                }), type.displayName = name);
            }
        });
        return compare;
    };
    exports.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        ReactSharedInternals.T = currentTransition;
        currentTransition._updatedFibers = new Set();
        try {
            var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
            null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
            "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
        } catch (error) {
            reportGlobalError(error);
        } finally{
            null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), ReactSharedInternals.T = prevTransition;
        }
    };
    exports.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
    };
    exports.use = function(usable) {
        return resolveDispatcher().use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?");
        return dispatcher.useContext(Context);
    };
    exports.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create, createDeps, update) {
        null == create && console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?");
        var dispatcher = resolveDispatcher();
        if ("function" === typeof update) throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return dispatcher.useEffect(create, createDeps);
    };
    exports.useId = function() {
        return resolveDispatcher().useId();
    };
    exports.useImperativeHandle = function(ref, create, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function(create, deps) {
        null == create && console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?");
        return resolveDispatcher().useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function(create, deps) {
        null == create && console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?");
        return resolveDispatcher().useLayoutEffect(create, deps);
    };
    exports.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
    };
    exports.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
    };
    exports.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    };
    exports.useTransition = function() {
        return resolveDispatcher().useTransition();
    };
    exports.version = "19.1.0";
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Downloads/One click/node_modules/react/cjs/react.development.js [client] (ecmascript)");
}
}),
"[project]/Downloads/One click/node_modules/react/cjs/react-jsx-runtime.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsx = function(type, config, maybeKey, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, !1, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
    exports.jsxs = function(type, config, maybeKey, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, !0, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Downloads/One click/node_modules/react/jsx-runtime.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Downloads/One click/node_modules/react/cjs/react-jsx-runtime.development.js [client] (ecmascript)");
}
}),
"[project]/Downloads/One click/node_modules/react/cjs/react-jsx-dev-runtime.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Downloads/One click/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Downloads/One click/node_modules/react/cjs/react-jsx-dev-runtime.development.js [client] (ecmascript)");
}
}),
"[project]/Downloads/One click/node_modules/scheduler/cjs/scheduler.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function performWorkUntilDeadline() {
        needsPaint = !1;
        if (isMessageLoopRunning) {
            var currentTime = exports.unstable_now();
            startTime = currentTime;
            var hasMoreWork = !0;
            try {
                a: {
                    isHostCallbackScheduled = !1;
                    isHostTimeoutScheduled && (isHostTimeoutScheduled = !1, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
                    isPerformingWork = !0;
                    var previousPriorityLevel = currentPriorityLevel;
                    try {
                        b: {
                            advanceTimers(currentTime);
                            for(currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost());){
                                var callback = currentTask.callback;
                                if ("function" === typeof callback) {
                                    currentTask.callback = null;
                                    currentPriorityLevel = currentTask.priorityLevel;
                                    var continuationCallback = callback(currentTask.expirationTime <= currentTime);
                                    currentTime = exports.unstable_now();
                                    if ("function" === typeof continuationCallback) {
                                        currentTask.callback = continuationCallback;
                                        advanceTimers(currentTime);
                                        hasMoreWork = !0;
                                        break b;
                                    }
                                    currentTask === peek(taskQueue) && pop(taskQueue);
                                    advanceTimers(currentTime);
                                } else pop(taskQueue);
                                currentTask = peek(taskQueue);
                            }
                            if (null !== currentTask) hasMoreWork = !0;
                            else {
                                var firstTimer = peek(timerQueue);
                                null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
                                hasMoreWork = !1;
                            }
                        }
                        break a;
                    } finally{
                        currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = !1;
                    }
                    hasMoreWork = void 0;
                }
            } finally{
                hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = !1;
            }
        }
    }
    function push(heap, node) {
        var index = heap.length;
        heap.push(node);
        a: for(; 0 < index;){
            var parentIndex = index - 1 >>> 1, parent = heap[parentIndex];
            if (0 < compare(parent, node)) heap[parentIndex] = node, heap[index] = parent, index = parentIndex;
            else break a;
        }
    }
    function peek(heap) {
        return 0 === heap.length ? null : heap[0];
    }
    function pop(heap) {
        if (0 === heap.length) return null;
        var first = heap[0], last = heap.pop();
        if (last !== first) {
            heap[0] = last;
            a: for(var index = 0, length = heap.length, halfLength = length >>> 1; index < halfLength;){
                var leftIndex = 2 * (index + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
                if (0 > compare(left, last)) rightIndex < length && 0 > compare(right, left) ? (heap[index] = right, heap[rightIndex] = last, index = rightIndex) : (heap[index] = left, heap[leftIndex] = last, index = leftIndex);
                else if (rightIndex < length && 0 > compare(right, last)) heap[index] = right, heap[rightIndex] = last, index = rightIndex;
                else break a;
            }
        }
        return first;
    }
    function compare(a, b) {
        var diff = a.sortIndex - b.sortIndex;
        return 0 !== diff ? diff : a.id - b.id;
    }
    function advanceTimers(currentTime) {
        for(var timer = peek(timerQueue); null !== timer;){
            if (null === timer.callback) pop(timerQueue);
            else if (timer.startTime <= currentTime) pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
            else break;
            timer = peek(timerQueue);
        }
    }
    function handleTimeout(currentTime) {
        isHostTimeoutScheduled = !1;
        advanceTimers(currentTime);
        if (!isHostCallbackScheduled) if (null !== peek(taskQueue)) isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline());
        else {
            var firstTimer = peek(timerQueue);
            null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
        }
    }
    function shouldYieldToHost() {
        return needsPaint ? !0 : exports.unstable_now() - startTime < frameInterval ? !1 : !0;
    }
    function requestHostTimeout(callback, ms) {
        taskTimeoutID = localSetTimeout(function() {
            callback(exports.unstable_now());
        }, ms);
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    exports.unstable_now = void 0;
    if ("object" === typeof performance && "function" === typeof performance.now) {
        var localPerformance = performance;
        exports.unstable_now = function() {
            return localPerformance.now();
        };
    } else {
        var localDate = Date, initialTime = localDate.now();
        exports.unstable_now = function() {
            return localDate.now() - initialTime;
        };
    }
    var taskQueue = [], timerQueue = [], taskIdCounter = 1, currentTask = null, currentPriorityLevel = 3, isPerformingWork = !1, isHostCallbackScheduled = !1, isHostTimeoutScheduled = !1, needsPaint = !1, localSetTimeout = "function" === typeof setTimeout ? setTimeout : null, localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null, localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null, isMessageLoopRunning = !1, taskTimeoutID = -1, frameInterval = 5, startTime = -1;
    if ("function" === typeof localSetImmediate) var schedulePerformWorkUntilDeadline = function() {
        localSetImmediate(performWorkUntilDeadline);
    };
    else if ("undefined" !== typeof MessageChannel) {
        var channel = new MessageChannel(), port = channel.port2;
        channel.port1.onmessage = performWorkUntilDeadline;
        schedulePerformWorkUntilDeadline = function() {
            port.postMessage(null);
        };
    } else schedulePerformWorkUntilDeadline = function() {
        localSetTimeout(performWorkUntilDeadline, 0);
    };
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(task) {
        task.callback = null;
    };
    exports.unstable_forceFrameRate = function(fps) {
        0 > fps || 125 < fps ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
        return currentPriorityLevel;
    };
    exports.unstable_next = function(eventHandler) {
        switch(currentPriorityLevel){
            case 1:
            case 2:
            case 3:
                var priorityLevel = 3;
                break;
            default:
                priorityLevel = currentPriorityLevel;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    };
    exports.unstable_requestPaint = function() {
        needsPaint = !0;
    };
    exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
        switch(priorityLevel){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                priorityLevel = 3;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    };
    exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
        var currentTime = exports.unstable_now();
        "object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
        switch(priorityLevel){
            case 1:
                var timeout = -1;
                break;
            case 2:
                timeout = 250;
                break;
            case 5:
                timeout = 1073741823;
                break;
            case 4:
                timeout = 1e4;
                break;
            default:
                timeout = 5e3;
        }
        timeout = options + timeout;
        priorityLevel = {
            id: taskIdCounter++,
            callback: callback,
            priorityLevel: priorityLevel,
            startTime: options,
            expirationTime: timeout,
            sortIndex: -1
        };
        options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = !0, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline())));
        return priorityLevel;
    };
    exports.unstable_shouldYield = shouldYieldToHost;
    exports.unstable_wrapCallback = function(callback) {
        var parentPriorityLevel = currentPriorityLevel;
        return function() {
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = parentPriorityLevel;
            try {
                return callback.apply(this, arguments);
            } finally{
                currentPriorityLevel = previousPriorityLevel;
            }
        };
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/Downloads/One click/node_modules/scheduler/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Downloads/One click/node_modules/scheduler/cjs/scheduler.development.js [client] (ecmascript)");
}
}),
"[project]/Downloads/One click/node_modules/styled-jsx/dist/index/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
__turbopack_context__.r("[project]/Downloads/One click/node_modules/next/dist/compiled/client-only/index.js [client] (ecmascript)");
var React = __turbopack_context__.r("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/ function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var isProd = typeof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env && ("TURBOPACK compile-time value", "development") === "production";
var isString = function(o) {
    return Object.prototype.toString.call(o) === "[object String]";
};
var StyleSheet = /*#__PURE__*/ function() {
    function StyleSheet(param) {
        var ref = param === void 0 ? {} : param, _name = ref.name, name = _name === void 0 ? "stylesheet" : _name, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? isProd : _optimizeForSpeed;
        invariant$1(isString(name), "`name` must be a string");
        this._name = name;
        this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
        invariant$1(typeof optimizeForSpeed === "boolean", "`optimizeForSpeed` must be a boolean");
        this._optimizeForSpeed = optimizeForSpeed;
        this._serverSheet = undefined;
        this._tags = [];
        this._injected = false;
        this._rulesCount = 0;
        var node = typeof window !== "undefined" && document.querySelector('meta[property="csp-nonce"]');
        this._nonce = node ? node.getAttribute("content") : null;
    }
    var _proto = StyleSheet.prototype;
    _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
        invariant$1(typeof bool === "boolean", "`setOptimizeForSpeed` accepts a boolean");
        invariant$1(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted");
        this.flush();
        this._optimizeForSpeed = bool;
        this.inject();
    };
    _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
        return this._optimizeForSpeed;
    };
    _proto.inject = function inject() {
        var _this = this;
        invariant$1(!this._injected, "sheet already injected");
        this._injected = true;
        if (typeof window !== "undefined" && this._optimizeForSpeed) {
            this._tags[0] = this.makeStyleTag(this._name);
            this._optimizeForSpeed = "insertRule" in this.getSheet();
            if (!this._optimizeForSpeed) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.");
                }
                this.flush();
                this._injected = true;
            }
            return;
        }
        this._serverSheet = {
            cssRules: [],
            insertRule: function(rule, index) {
                if (typeof index === "number") {
                    _this._serverSheet.cssRules[index] = {
                        cssText: rule
                    };
                } else {
                    _this._serverSheet.cssRules.push({
                        cssText: rule
                    });
                }
                return index;
            },
            deleteRule: function(index) {
                _this._serverSheet.cssRules[index] = null;
            }
        };
    };
    _proto.getSheetForTag = function getSheetForTag(tag) {
        if (tag.sheet) {
            return tag.sheet;
        }
        // this weirdness brought to you by firefox
        for(var i = 0; i < document.styleSheets.length; i++){
            if (document.styleSheets[i].ownerNode === tag) {
                return document.styleSheets[i];
            }
        }
    };
    _proto.getSheet = function getSheet() {
        return this.getSheetForTag(this._tags[this._tags.length - 1]);
    };
    _proto.insertRule = function insertRule(rule, index) {
        invariant$1(isString(rule), "`insertRule` accepts only strings");
        if (typeof window === "undefined") {
            if (typeof index !== "number") {
                index = this._serverSheet.cssRules.length;
            }
            this._serverSheet.insertRule(rule, index);
            return this._rulesCount++;
        }
        if (this._optimizeForSpeed) {
            var sheet = this.getSheet();
            if (typeof index !== "number") {
                index = sheet.cssRules.length;
            }
            // this weirdness for perf, and chrome's weird bug
            // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                return -1;
            }
        } else {
            var insertionPoint = this._tags[index];
            this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
        }
        return this._rulesCount++;
    };
    _proto.replaceRule = function replaceRule(index, rule) {
        if (this._optimizeForSpeed || typeof window === "undefined") {
            var sheet = typeof window !== "undefined" ? this.getSheet() : this._serverSheet;
            if (!rule.trim()) {
                rule = this._deletedRulePlaceholder;
            }
            if (!sheet.cssRules[index]) {
                // @TBD Should we throw an error?
                return index;
            }
            sheet.deleteRule(index);
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                // In order to preserve the indices we insert a deleteRulePlaceholder
                sheet.insertRule(this._deletedRulePlaceholder, index);
            }
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "old rule at index `" + index + "` not found");
            tag.textContent = rule;
        }
        return index;
    };
    _proto.deleteRule = function deleteRule(index) {
        if (typeof window === "undefined") {
            this._serverSheet.deleteRule(index);
            return;
        }
        if (this._optimizeForSpeed) {
            this.replaceRule(index, "");
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "rule at index `" + index + "` not found");
            tag.parentNode.removeChild(tag);
            this._tags[index] = null;
        }
    };
    _proto.flush = function flush() {
        this._injected = false;
        this._rulesCount = 0;
        if (typeof window !== "undefined") {
            this._tags.forEach(function(tag) {
                return tag && tag.parentNode.removeChild(tag);
            });
            this._tags = [];
        } else {
            // simpler on server
            this._serverSheet.cssRules = [];
        }
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        if (typeof window === "undefined") {
            return this._serverSheet.cssRules;
        }
        return this._tags.reduce(function(rules, tag) {
            if (tag) {
                rules = rules.concat(Array.prototype.map.call(_this.getSheetForTag(tag).cssRules, function(rule) {
                    return rule.cssText === _this._deletedRulePlaceholder ? null : rule;
                }));
            } else {
                rules.push(null);
            }
            return rules;
        }, []);
    };
    _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
        if (cssString) {
            invariant$1(isString(cssString), "makeStyleTag accepts only strings as second parameter");
        }
        var tag = document.createElement("style");
        if (this._nonce) tag.setAttribute("nonce", this._nonce);
        tag.type = "text/css";
        tag.setAttribute("data-" + name, "");
        if (cssString) {
            tag.appendChild(document.createTextNode(cssString));
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        if (relativeToTag) {
            head.insertBefore(tag, relativeToTag);
        } else {
            head.appendChild(tag);
        }
        return tag;
    };
    _createClass(StyleSheet, [
        {
            key: "length",
            get: function get() {
                return this._rulesCount;
            }
        }
    ]);
    return StyleSheet;
}();
function invariant$1(condition, message) {
    if (!condition) {
        throw new Error("StyleSheet: " + message + ".");
    }
}
function hash(str) {
    var _$hash = 5381, i = str.length;
    while(i){
        _$hash = _$hash * 33 ^ str.charCodeAt(--i);
    }
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */ return _$hash >>> 0;
}
var stringHash = hash;
var sanitize = function(rule) {
    return rule.replace(/\/style/gi, "\\/style");
};
var cache = {};
/**
 * computeId
 *
 * Compute and memoize a jsx id from a basedId and optionally props.
 */ function computeId(baseId, props) {
    if (!props) {
        return "jsx-" + baseId;
    }
    var propsToString = String(props);
    var key = baseId + propsToString;
    if (!cache[key]) {
        cache[key] = "jsx-" + stringHash(baseId + "-" + propsToString);
    }
    return cache[key];
}
/**
 * computeSelector
 *
 * Compute and memoize dynamic selectors.
 */ function computeSelector(id, css) {
    var selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    // Sanitize SSR-ed CSS.
    // Client side code doesn't need to be sanitized since we use
    // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
    if (typeof window === "undefined") {
        css = sanitize(css);
    }
    var idcss = id + css;
    if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
    }
    return cache[idcss];
}
function mapRulesToStyle(cssRules, options) {
    if (options === void 0) options = {};
    return cssRules.map(function(args) {
        var id = args[0];
        var css = args[1];
        return /*#__PURE__*/ React__default["default"].createElement("style", {
            id: "__" + id,
            // Avoid warnings upon render with a key
            key: "__" + id,
            nonce: options.nonce ? options.nonce : undefined,
            dangerouslySetInnerHTML: {
                __html: css
            }
        });
    });
}
var StyleSheetRegistry = /*#__PURE__*/ function() {
    function StyleSheetRegistry(param) {
        var ref = param === void 0 ? {} : param, _styleSheet = ref.styleSheet, styleSheet = _styleSheet === void 0 ? null : _styleSheet, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? false : _optimizeForSpeed;
        this._sheet = styleSheet || new StyleSheet({
            name: "styled-jsx",
            optimizeForSpeed: optimizeForSpeed
        });
        this._sheet.inject();
        if (styleSheet && typeof optimizeForSpeed === "boolean") {
            this._sheet.setOptimizeForSpeed(optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    }
    var _proto = StyleSheetRegistry.prototype;
    _proto.add = function add(props) {
        var _this = this;
        if (undefined === this._optimizeForSpeed) {
            this._optimizeForSpeed = Array.isArray(props.children);
            this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        if (typeof window !== "undefined" && !this._fromServer) {
            this._fromServer = this.selectFromServer();
            this._instancesCounts = Object.keys(this._fromServer).reduce(function(acc, tagName) {
                acc[tagName] = 0;
                return acc;
            }, {});
        }
        var ref = this.getIdAndRules(props), styleId = ref.styleId, rules = ref.rules;
        // Deduping: just increase the instances count.
        if (styleId in this._instancesCounts) {
            this._instancesCounts[styleId] += 1;
            return;
        }
        var indices = rules.map(function(rule) {
            return _this._sheet.insertRule(rule);
        }) // Filter out invalid rules
        .filter(function(index) {
            return index !== -1;
        });
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
    };
    _proto.remove = function remove(props) {
        var _this = this;
        var styleId = this.getIdAndRules(props).styleId;
        invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
        this._instancesCounts[styleId] -= 1;
        if (this._instancesCounts[styleId] < 1) {
            var tagFromServer = this._fromServer && this._fromServer[styleId];
            if (tagFromServer) {
                tagFromServer.parentNode.removeChild(tagFromServer);
                delete this._fromServer[styleId];
            } else {
                this._indices[styleId].forEach(function(index) {
                    return _this._sheet.deleteRule(index);
                });
                delete this._indices[styleId];
            }
            delete this._instancesCounts[styleId];
        }
    };
    _proto.update = function update(props, nextProps) {
        this.add(nextProps);
        this.remove(props);
    };
    _proto.flush = function flush() {
        this._sheet.flush();
        this._sheet.inject();
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function(styleId) {
            return [
                styleId,
                _this._fromServer[styleId]
            ];
        }) : [];
        var cssRules = this._sheet.cssRules();
        return fromServer.concat(Object.keys(this._indices).map(function(styleId) {
            return [
                styleId,
                _this._indices[styleId].map(function(index) {
                    return cssRules[index].cssText;
                }).join(_this._optimizeForSpeed ? "" : "\n")
            ];
        }) // filter out empty rules
        .filter(function(rule) {
            return Boolean(rule[1]);
        }));
    };
    _proto.styles = function styles(options) {
        return mapRulesToStyle(this.cssRules(), options);
    };
    _proto.getIdAndRules = function getIdAndRules(props) {
        var css = props.children, dynamic = props.dynamic, id = props.id;
        if (dynamic) {
            var styleId = computeId(id, dynamic);
            return {
                styleId: styleId,
                rules: Array.isArray(css) ? css.map(function(rule) {
                    return computeSelector(styleId, rule);
                }) : [
                    computeSelector(styleId, css)
                ]
            };
        }
        return {
            styleId: computeId(id),
            rules: Array.isArray(css) ? css : [
                css
            ]
        };
    };
    /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */ _proto.selectFromServer = function selectFromServer() {
        var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
        return elements.reduce(function(acc, element) {
            var id = element.id.slice(2);
            acc[id] = element;
            return acc;
        }, {});
    };
    return StyleSheetRegistry;
}();
function invariant(condition, message) {
    if (!condition) {
        throw new Error("StyleSheetRegistry: " + message + ".");
    }
}
var StyleSheetContext = /*#__PURE__*/ React.createContext(null);
StyleSheetContext.displayName = "StyleSheetContext";
function createStyleRegistry() {
    return new StyleSheetRegistry();
}
function StyleRegistry(param) {
    var configuredRegistry = param.registry, children = param.children;
    var rootRegistry = React.useContext(StyleSheetContext);
    var ref = React.useState({
        "StyleRegistry.useState[ref]": function() {
            return rootRegistry || configuredRegistry || createStyleRegistry();
        }
    }["StyleRegistry.useState[ref]"]), registry = ref[0];
    return /*#__PURE__*/ React__default["default"].createElement(StyleSheetContext.Provider, {
        value: registry
    }, children);
}
function useStyleRegistry() {
    return React.useContext(StyleSheetContext);
}
// Opt-into the new `useInsertionEffect` API in React 18, fallback to `useLayoutEffect`.
// https://github.com/reactwg/react-18/discussions/110
var useInsertionEffect = React__default["default"].useInsertionEffect || React__default["default"].useLayoutEffect;
var defaultRegistry = typeof window !== "undefined" ? createStyleRegistry() : undefined;
function JSXStyle(props) {
    var registry = defaultRegistry ? defaultRegistry : useStyleRegistry();
    // If `registry` does not exist, we do nothing here.
    if (!registry) {
        return null;
    }
    if (typeof window === "undefined") {
        registry.add(props);
        return null;
    }
    useInsertionEffect({
        "JSXStyle.useInsertionEffect": function() {
            registry.add(props);
            return ({
                "JSXStyle.useInsertionEffect": function() {
                    registry.remove(props);
                }
            })["JSXStyle.useInsertionEffect"];
        // props.children can be string[], will be striped since id is identical
        }
    }["JSXStyle.useInsertionEffect"], [
        props.id,
        String(props.dynamic)
    ]);
    return null;
}
JSXStyle.dynamic = function(info) {
    return info.map(function(tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return computeId(baseId, props);
    }).join(" ");
};
exports.StyleRegistry = StyleRegistry;
exports.createStyleRegistry = createStyleRegistry;
exports.style = JSXStyle;
exports.useStyleRegistry = useStyleRegistry;
}),
"[project]/Downloads/One click/node_modules/styled-jsx/style.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Downloads/One click/node_modules/styled-jsx/dist/index/index.js [client] (ecmascript)").style;
}),
"[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ /* global define */ (function() {
    'use strict';
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
        var classes = '';
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (arg) {
                classes = appendClass(classes, parseValue(arg));
            }
        }
        return classes;
    }
    function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
            return arg;
        }
        if (typeof arg !== 'object') {
            return '';
        }
        if (Array.isArray(arg)) {
            return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
            return arg.toString();
        }
        var classes = '';
        for(var key in arg){
            if (hasOwn.call(arg, key) && arg[key]) {
                classes = appendClass(classes, key);
            }
        }
        return classes;
    }
    function appendClass(value, newClass) {
        if (!newClass) {
            return value;
        }
        if (value) {
            return value + ' ' + newClass;
        }
        return value + newClass;
    }
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        // register as 'classnames', consistent with npm package name
        ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
            return classNames;
        }());
    } else {
        window.classNames = classNames;
    }
})();
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_typeof
]);
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toPrimitive.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toPrimitive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [client] (ecmascript)");
;
function toPrimitive(t, r) {
    if ("object" != (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toPropertyKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPrimitive$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toPrimitive.js [client] (ecmascript)");
;
;
function toPropertyKey(t) {
    var i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPrimitive$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(t, "string");
    return "symbol" == (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(i) ? i : i + "";
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_defineProperty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [client] (ecmascript)");
;
function _defineProperty(e, r, t) {
    return (r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectSpread2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [client] (ecmascript)");
;
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_arrayWithHoles
]);
function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_iterableToArrayLimit
]);
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_arrayLikeToArray
]);
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_unsupportedIterableToArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayLikeToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js [client] (ecmascript)");
;
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayLikeToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayLikeToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(r, a) : void 0;
    }
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_nonIterableRest
]);
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_slicedToArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayWithHoles$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$iterableToArrayLimit$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$unsupportedIterableToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$nonIterableRest$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js [client] (ecmascript)");
;
;
;
;
function _slicedToArray(r, e) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayWithHoles$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$iterableToArrayLimit$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(r, e) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$unsupportedIterableToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(r, e) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$nonIterableRest$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])();
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_arrayWithoutHoles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayLikeToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js [client] (ecmascript)");
;
function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayLikeToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(r);
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/iterableToArray.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_iterableToArray
]);
function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_nonIterableSpread
]);
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_toConsumableArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayWithoutHoles$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$iterableToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/iterableToArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$unsupportedIterableToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$nonIterableSpread$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js [client] (ecmascript)");
;
;
;
;
function _toConsumableArray(r) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayWithoutHoles$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$iterableToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$unsupportedIterableToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$nonIterableSpread$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])();
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_extends
]);
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectWithoutPropertiesLoose
]);
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectWithoutProperties
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [client] (ecmascript)");
;
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_classCallCheck
]);
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/createClass.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_createClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [client] (ecmascript)");
;
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_setPrototypeOf
]);
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/inherits.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_inherits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [client] (ecmascript)");
;
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(t, e);
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_getPrototypeOf
]);
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_isNativeReflectConstruct
]);
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_assertThisInitialized
]);
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_possibleConstructorReturn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [client] (ecmascript)");
;
;
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(t);
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/createSuper.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_createSuper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$isNativeReflectConstruct$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$possibleConstructorReturn$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js [client] (ecmascript)");
;
;
;
function _createSuper(t) {
    var r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$isNativeReflectConstruct$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])();
    return function() {
        var e, o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(t);
        if (r) {
            var s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(this).constructor;
            e = Reflect.construct(o, arguments, s);
        } else e = o.apply(this, arguments);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$possibleConstructorReturn$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(this, e);
    };
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toArray.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_toArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayWithHoles$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$iterableToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/iterableToArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$unsupportedIterableToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$nonIterableRest$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js [client] (ecmascript)");
;
;
;
;
function _toArray(r) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayWithHoles$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$iterableToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$unsupportedIterableToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$nonIterableRest$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])();
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/OverloadYield.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_OverloadYield
]);
function _OverloadYield(e, d) {
    this.v = e, this.k = d;
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/regeneratorDefine.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_regeneratorDefine
]);
function _regeneratorDefine(e, r, n, t) {
    var i = Object.defineProperty;
    try {
        i({}, "", {});
    } catch (e) {
        i = 0;
    }
    _regeneratorDefine = function regeneratorDefine(e, r, n, t) {
        function o(r, n) {
            _regeneratorDefine(e, r, function(e) {
                return this._invoke(r, n, e);
            });
        }
        r ? i ? i(e, r, {
            value: n,
            enumerable: !t,
            configurable: !t,
            writable: !t
        }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
    }, _regeneratorDefine(e, r, n, t);
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/regenerator.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_regenerator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorDefine$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/regeneratorDefine.js [client] (ecmascript)");
;
function _regenerator() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag";
    function i(r, n, o, i) {
        var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorDefine$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(u, "_invoke", function(r, n, o) {
            var i, c, u, f = 0, p = o || [], y = !1, G = {
                p: 0,
                n: 0,
                v: e,
                a: d,
                f: d.bind(e, 4),
                d: function d(t, r) {
                    return i = t, c = 0, u = e, G.n = r, a;
                }
            };
            function d(r, n) {
                for(c = r, u = n, t = 0; !y && f && !o && t < p.length; t++){
                    var o, i = p[t], d = G.p, l = i[2];
                    r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
                }
                if (o || r > 1) return a;
                throw y = !0, n;
            }
            return function(o, p, l) {
                if (f > 1) throw TypeError("Generator is already running");
                for(y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;){
                    i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
                    try {
                        if (f = 2, i) {
                            if (c || (o = "next"), t = i[o]) {
                                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                                if (!t.done) return t;
                                u = t.value, c < 2 && (c = 0);
                            } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
                            i = e;
                        } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
                    } catch (t) {
                        i = e, c = 1, u = t;
                    } finally{
                        f = 1;
                    }
                }
                return {
                    value: t,
                    done: y
                };
            };
        }(r, o, i), !0), u;
    }
    var a = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    t = Object.getPrototypeOf;
    var c = [][n] ? t(t([][n]())) : ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorDefine$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(t = {}, n, function() {
        return this;
    }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
    function f(e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorDefine$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorDefine$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(u, "constructor", GeneratorFunctionPrototype), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorDefine$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorDefine$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(GeneratorFunctionPrototype, o, "GeneratorFunction"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorDefine$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(u), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorDefine$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(u, o, "Generator"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorDefine$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(u, n, function() {
        return this;
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorDefine$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(u, "toString", function() {
        return "[object Generator]";
    }), (_regenerator = function _regenerator() {
        return {
            w: i,
            m: f
        };
    })();
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/regeneratorAsyncIterator.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AsyncIterator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$OverloadYield$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/OverloadYield.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorDefine$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/regeneratorDefine.js [client] (ecmascript)");
;
;
function AsyncIterator(t, e) {
    function n(r, o, i, f) {
        try {
            var c = t[r](o), u = c.value;
            return u instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$OverloadYield$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] ? e.resolve(u.v).then(function(t) {
                n("next", t, i, f);
            }, function(t) {
                n("throw", t, i, f);
            }) : e.resolve(u).then(function(t) {
                c.value = t, i(c);
            }, function(t) {
                return n("throw", t, i, f);
            });
        } catch (t) {
            f(t);
        }
    }
    var r;
    this.next || ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorDefine$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(AsyncIterator.prototype), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorDefine$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(AsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function() {
        return this;
    })), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorDefine$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(this, "_invoke", function(t, o, i) {
        function f() {
            return new e(function(e, r) {
                n(t, i, e, r);
            });
        }
        return r = r ? r.then(f, f) : f();
    }, !0);
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/regeneratorAsyncGen.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_regeneratorAsyncGen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regenerator$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/regenerator.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorAsyncIterator$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/regeneratorAsyncIterator.js [client] (ecmascript)");
;
;
function _regeneratorAsyncGen(r, e, t, o, n) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorAsyncIterator$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regenerator$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().w(r, e, t, o), n || Promise);
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/regeneratorAsync.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_regeneratorAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorAsyncGen$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/regeneratorAsyncGen.js [client] (ecmascript)");
;
function _regeneratorAsync(n, e, r, t, o) {
    var a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorAsyncGen$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(n, e, r, t, o);
    return a.next().then(function(n) {
        return n.done ? n.value : a.next();
    });
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/regeneratorKeys.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_regeneratorKeys
]);
function _regeneratorKeys(e) {
    var n = Object(e), r = [];
    for(var t in n)r.unshift(t);
    return function e() {
        for(; r.length;)if ((t = r.pop()) in n) return e.value = t, e.done = !1, e;
        return e.done = !0, e;
    };
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/regeneratorValues.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_regeneratorValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [client] (ecmascript)");
;
function _regeneratorValues(e) {
    if (null != e) {
        var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0;
        if (t) return t.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) return {
            next: function next() {
                return e && r >= e.length && (e = void 0), {
                    value: e && e[r++],
                    done: !e
                };
            }
        };
    }
    throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(e) + " is not iterable");
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_regeneratorRuntime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$OverloadYield$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/OverloadYield.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regenerator$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/regenerator.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorAsync$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/regeneratorAsync.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorAsyncGen$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/regeneratorAsyncGen.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorAsyncIterator$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/regeneratorAsyncIterator.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorKeys$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/regeneratorKeys.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorValues$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/regeneratorValues.js [client] (ecmascript)");
;
;
;
;
;
;
;
function _regeneratorRuntime() {
    "use strict";
    var r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regenerator$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(), e = r.m(_regeneratorRuntime), t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;
    function n(r) {
        var e = "function" == typeof r && r.constructor;
        return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name));
    }
    var o = {
        "throw": 1,
        "return": 2,
        "break": 3,
        "continue": 3
    };
    function a(r) {
        var e, t;
        return function(n) {
            e || (e = {
                stop: function stop() {
                    return t(n.a, 2);
                },
                "catch": function _catch() {
                    return n.v;
                },
                abrupt: function abrupt(r, e) {
                    return t(n.a, o[r], e);
                },
                delegateYield: function delegateYield(r, o, a) {
                    return e.resultName = o, t(n.d, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorValues$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(r), a);
                },
                finish: function finish(r) {
                    return t(n.f, r);
                }
            }, t = function t(r, _t, o) {
                n.p = e.prev, n.n = e.next;
                try {
                    return r(_t, o);
                } finally{
                    e.next = n.n;
                }
            }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;
            try {
                return r.call(this, e);
            } finally{
                n.p = e.prev, n.n = e.next;
            }
        };
    }
    return (_regeneratorRuntime = function _regeneratorRuntime() {
        return {
            wrap: function wrap(e, t, n, o) {
                return r.w(a(e), t, n, o && o.reverse());
            },
            isGeneratorFunction: n,
            mark: r.m,
            awrap: function awrap(r, e) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$OverloadYield$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"](r, e);
            },
            AsyncIterator: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorAsyncIterator$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
            async: function async(r, e, t, o, u) {
                return (n(e) ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorAsyncGen$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorAsync$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(a(r), e, t, o, u);
            },
            keys: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorKeys$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
            values: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorValues$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
        };
    })();
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_asyncToGenerator
]);
function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n) {
        return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
            }
            function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
            }
            _next(void 0);
        });
    };
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_isNativeFunction
]);
function _isNativeFunction(t) {
    try {
        return -1 !== Function.toString.call(t).indexOf("[native code]");
    } catch (n) {
        return "function" == typeof t;
    }
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/construct.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_construct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$isNativeReflectConstruct$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [client] (ecmascript)");
;
;
function _construct(t, e, r) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$isNativeReflectConstruct$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])()) return Reflect.construct.apply(null, arguments);
    var o = [
        null
    ];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(p, r.prototype), p;
}
;
}),
"[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_wrapNativeSuper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$isNativeFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$construct$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/construct.js [client] (ecmascript)");
;
;
;
;
function _wrapNativeSuper(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return _wrapNativeSuper = function _wrapNativeSuper(t) {
        if (null === t || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$isNativeFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(t)) return t;
        if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== r) {
            if (r.has(t)) return r.get(t);
            r.set(t, Wrapper);
        }
        function Wrapper() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$construct$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(t, arguments, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(this).constructor);
        }
        return Wrapper.prototype = Object.create(t.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(Wrapper, t);
    }, _wrapNativeSuper(t);
}
;
}),
"[project]/Downloads/One click/node_modules/rc-util/es/Dom/canUseDom.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>canUseDom
]);
function canUseDom() {
    return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}
}),
"[project]/Downloads/One click/node_modules/rc-util/es/warning.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable no-console */ __turbopack_context__.s([
    "call",
    ()=>call,
    "default",
    ()=>__TURBOPACK__default__export__,
    "note",
    ()=>note,
    "noteOnce",
    ()=>noteOnce,
    "preMessage",
    ()=>preMessage,
    "resetWarned",
    ()=>resetWarned,
    "warning",
    ()=>warning,
    "warningOnce",
    ()=>warningOnce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var warned = {};
var preWarningFns = [];
var preMessage = function preMessage(fn) {
    preWarningFns.push(fn);
};
function warning(valid, message) {
    if (("TURBOPACK compile-time value", "development") !== 'production' && !valid && console !== undefined) {
        var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
            return preMessageFn(msg !== null && msg !== void 0 ? msg : '', 'warning');
        }, message);
        if (finalMessage) {
            console.error("Warning: ".concat(finalMessage));
        }
    }
}
function note(valid, message) {
    if (("TURBOPACK compile-time value", "development") !== 'production' && !valid && console !== undefined) {
        var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
            return preMessageFn(msg !== null && msg !== void 0 ? msg : '', 'note');
        }, message);
        if (finalMessage) {
            console.warn("Note: ".concat(finalMessage));
        }
    }
}
function resetWarned() {
    warned = {};
}
function call(method, valid, message) {
    if (!valid && !warned[message]) {
        method(false, message);
        warned[message] = true;
    }
}
function warningOnce(valid, message) {
    call(warning, valid, message);
}
function noteOnce(valid, message) {
    call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
const __TURBOPACK__default__export__ = warningOnce;
}),
"[project]/Downloads/One click/node_modules/rc-util/es/hooks/useMemo.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useMemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
function useMemo(getValue, condition, shouldUpdate) {
    var cacheRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"]({});
    if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
        cacheRef.current.value = getValue();
        cacheRef.current.condition = condition;
    }
    return cacheRef.current.value;
}
}),
"[project]/Downloads/One click/node_modules/rc-util/es/React/isFragment.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isFragment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [client] (ecmascript)");
;
var REACT_ELEMENT_TYPE_18 = Symbol.for('react.element');
var REACT_ELEMENT_TYPE_19 = Symbol.for('react.transitional.element');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
function isFragment(object) {
    return(// Base object type
    object && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(object) === 'object' && (// React Element type
    object.$$typeof === REACT_ELEMENT_TYPE_18 || object.$$typeof === REACT_ELEMENT_TYPE_19) && // React Fragment type
    object.type === REACT_FRAGMENT_TYPE);
}
}),
"[project]/Downloads/One click/node_modules/rc-util/es/ref.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "composeRef",
    ()=>composeRef,
    "fillRef",
    ()=>fillRef,
    "getNodeRef",
    ()=>getNodeRef,
    "supportNodeRef",
    ()=>supportNodeRef,
    "supportRef",
    ()=>supportRef,
    "useComposeRef",
    ()=>useComposeRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/node_modules/react-is/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMemo$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useMemo.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$React$2f$isFragment$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/React/isFragment.js [client] (ecmascript)");
;
;
;
;
;
var ReactMajorVersion = Number(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["version"].split('.')[0]);
var fillRef = function fillRef(ref, node) {
    if (typeof ref === 'function') {
        ref(node);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(ref) === 'object' && ref && 'current' in ref) {
        ref.current = node;
    }
};
var composeRef = function composeRef() {
    for(var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++){
        refs[_key] = arguments[_key];
    }
    var refList = refs.filter(Boolean);
    if (refList.length <= 1) {
        return refList[0];
    }
    return function(node) {
        refs.forEach(function(ref) {
            fillRef(ref, node);
        });
    };
};
var useComposeRef = function useComposeRef() {
    for(var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
        refs[_key2] = arguments[_key2];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMemo$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "useComposeRef.useMemo": function() {
            return composeRef.apply(void 0, refs);
        }
    }["useComposeRef.useMemo"], refs, {
        "useComposeRef.useMemo": function(prev, next) {
            return prev.length !== next.length || prev.every({
                "useComposeRef.useMemo": function(ref, i) {
                    return ref !== next[i];
                }
            }["useComposeRef.useMemo"]);
        }
    }["useComposeRef.useMemo"]);
};
var supportRef = function supportRef(nodeOrComponent) {
    var _type$prototype, _nodeOrComponent$prot;
    if (!nodeOrComponent) {
        return false;
    }
    // React 19 no need `forwardRef` anymore. So just pass if is a React element.
    if (isReactElement(nodeOrComponent) && ReactMajorVersion >= 19) {
        return true;
    }
    var type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isMemo"])(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;
    // Function component node
    if (typeof type === 'function' && !((_type$prototype = type.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render) && type.$$typeof !== __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ForwardRef"]) {
        return false;
    }
    // Class component
    if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render) && nodeOrComponent.$$typeof !== __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ForwardRef"]) {
        return false;
    }
    return true;
};
function isReactElement(node) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isValidElement"])(node) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$React$2f$isFragment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(node);
}
var supportNodeRef = function supportNodeRef(node) {
    return isReactElement(node) && supportRef(node);
};
var getNodeRef = function getNodeRef(node) {
    if (node && isReactElement(node)) {
        var ele = node;
        // Source from:
        // https://github.com/mui/material-ui/blob/master/packages/mui-utils/src/getReactNodeRef/getReactNodeRef.ts
        return ele.props.propertyIsEnumerable('ref') ? ele.props.ref : ele.ref;
    }
    return null;
};
}),
"[project]/Downloads/One click/node_modules/rc-util/es/hooks/useLayoutEffect.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useLayoutUpdateEffect",
    ()=>useLayoutUpdateEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Dom/canUseDom.js [client] (ecmascript)");
;
;
/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */ var useInternalLayoutEffect = ("TURBOPACK compile-time value", "development") !== 'test' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])() ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"];
var useLayoutEffect = function useLayoutEffect(callback, deps) {
    var firstMountRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](true);
    useInternalLayoutEffect({
        "useLayoutEffect.useInternalLayoutEffect": function() {
            return callback(firstMountRef.current);
        }
    }["useLayoutEffect.useInternalLayoutEffect"], deps);
    // We tell react that first mount has passed
    useInternalLayoutEffect({
        "useLayoutEffect.useInternalLayoutEffect": function() {
            firstMountRef.current = false;
            return ({
                "useLayoutEffect.useInternalLayoutEffect": function() {
                    firstMountRef.current = true;
                }
            })["useLayoutEffect.useInternalLayoutEffect"];
        }
    }["useLayoutEffect.useInternalLayoutEffect"], []);
};
var useLayoutUpdateEffect = function useLayoutUpdateEffect(callback, deps) {
    useLayoutEffect({
        "useLayoutUpdateEffect.useLayoutEffect": function(firstMount) {
            if (!firstMount) {
                return callback();
            }
        }
    }["useLayoutUpdateEffect.useLayoutEffect"], deps);
};
const __TURBOPACK__default__export__ = useLayoutEffect;
}),
"[project]/Downloads/One click/node_modules/rc-util/es/Dom/contains.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>contains
]);
function contains(root, n) {
    if (!root) {
        return false;
    }
    // Use native if support
    if (root.contains) {
        return root.contains(n);
    }
    // `document.contains` not support with IE11
    var node = n;
    while(node){
        if (node === root) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}
}),
"[project]/Downloads/One click/node_modules/rc-util/es/Dom/dynamicCSS.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearContainerCache",
    ()=>clearContainerCache,
    "injectCSS",
    ()=>injectCSS,
    "removeCSS",
    ()=>removeCSS,
    "updateCSS",
    ()=>updateCSS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Dom/canUseDom.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$contains$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Dom/contains.js [client] (ecmascript)");
;
;
;
var APPEND_ORDER = 'data-rc-order';
var APPEND_PRIORITY = 'data-rc-priority';
var MARK_KEY = "rc-util-key";
var containerCache = new Map();
function getMark() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, mark = _ref.mark;
    if (mark) {
        return mark.startsWith('data-') ? mark : "data-".concat(mark);
    }
    return MARK_KEY;
}
function getContainer(option) {
    if (option.attachTo) {
        return option.attachTo;
    }
    var head = document.querySelector('head');
    return head || document.body;
}
function getOrder(prepend) {
    if (prepend === 'queue') {
        return 'prependQueue';
    }
    return prepend ? 'prepend' : 'append';
}
/**
 * Find style which inject by rc-util
 */ function findStyles(container) {
    return Array.from((containerCache.get(container) || container).children).filter(function(node) {
        return node.tagName === 'STYLE';
    });
}
function injectCSS(css) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])()) {
        return null;
    }
    var csp = option.csp, prepend = option.prepend, _option$priority = option.priority, priority = _option$priority === void 0 ? 0 : _option$priority;
    var mergedOrder = getOrder(prepend);
    var isPrependQueue = mergedOrder === 'prependQueue';
    var styleNode = document.createElement('style');
    styleNode.setAttribute(APPEND_ORDER, mergedOrder);
    if (isPrependQueue && priority) {
        styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
    }
    if (csp !== null && csp !== void 0 && csp.nonce) {
        styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
    }
    styleNode.innerHTML = css;
    var container = getContainer(option);
    var firstChild = container.firstChild;
    if (prepend) {
        // If is queue `prepend`, it will prepend first style and then append rest style
        if (isPrependQueue) {
            var existStyle = (option.styles || findStyles(container)).filter(function(node) {
                // Ignore style which not injected by rc-util with prepend
                if (![
                    'prepend',
                    'prependQueue'
                ].includes(node.getAttribute(APPEND_ORDER))) {
                    return false;
                }
                // Ignore style which priority less then new style
                var nodePriority = Number(node.getAttribute(APPEND_PRIORITY) || 0);
                return priority >= nodePriority;
            });
            if (existStyle.length) {
                container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
                return styleNode;
            }
        }
        // Use `insertBefore` as `prepend`
        container.insertBefore(styleNode, firstChild);
    } else {
        container.appendChild(styleNode);
    }
    return styleNode;
}
function findExistNode(key) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var container = getContainer(option);
    return (option.styles || findStyles(container)).find(function(node) {
        return node.getAttribute(getMark(option)) === key;
    });
}
function removeCSS(key) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var existNode = findExistNode(key, option);
    if (existNode) {
        var container = getContainer(option);
        container.removeChild(existNode);
    }
}
/**
 * qiankun will inject `appendChild` to insert into other
 */ function syncRealContainer(container, option) {
    var cachedRealContainer = containerCache.get(container);
    // Find real container when not cached or cached container removed
    if (!cachedRealContainer || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$contains$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(document, cachedRealContainer)) {
        var placeholderStyle = injectCSS('', option);
        var parentNode = placeholderStyle.parentNode;
        containerCache.set(container, parentNode);
        container.removeChild(placeholderStyle);
    }
}
function clearContainerCache() {
    containerCache.clear();
}
function updateCSS(css, key) {
    var originOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var container = getContainer(originOption);
    var styles = findStyles(container);
    var option = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, originOption), {}, {
        styles: styles
    });
    // Sync real parent
    syncRealContainer(container, option);
    var existNode = findExistNode(key, option);
    if (existNode) {
        var _option$csp, _option$csp2;
        if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
            var _option$csp3;
            existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
        }
        if (existNode.innerHTML !== css) {
            existNode.innerHTML = css;
        }
        return existNode;
    }
    var newNode = injectCSS(css, option);
    newNode.setAttribute(getMark(option), key);
    return newNode;
}
}),
"[project]/Downloads/One click/node_modules/rc-util/es/getScrollBarSize.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable no-param-reassign */ __turbopack_context__.s([
    "default",
    ()=>getScrollBarSize,
    "getTargetScrollBarSize",
    ()=>getTargetScrollBarSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$dynamicCSS$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Dom/dynamicCSS.js [client] (ecmascript)");
;
var cached;
function measureScrollbarSize(ele) {
    var randomId = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7));
    var measureEle = document.createElement('div');
    measureEle.id = randomId;
    // Create Style
    var measureStyle = measureEle.style;
    measureStyle.position = 'absolute';
    measureStyle.left = '0';
    measureStyle.top = '0';
    measureStyle.width = '100px';
    measureStyle.height = '100px';
    measureStyle.overflow = 'scroll';
    // Clone Style if needed
    var fallbackWidth;
    var fallbackHeight;
    if (ele) {
        var targetStyle = getComputedStyle(ele);
        measureStyle.scrollbarColor = targetStyle.scrollbarColor;
        measureStyle.scrollbarWidth = targetStyle.scrollbarWidth;
        // Set Webkit style
        var webkitScrollbarStyle = getComputedStyle(ele, '::-webkit-scrollbar');
        var width = parseInt(webkitScrollbarStyle.width, 10);
        var height = parseInt(webkitScrollbarStyle.height, 10);
        // Try wrap to handle CSP case
        try {
            var widthStyle = width ? "width: ".concat(webkitScrollbarStyle.width, ";") : '';
            var heightStyle = height ? "height: ".concat(webkitScrollbarStyle.height, ";") : '';
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$dynamicCSS$2e$js__$5b$client$5d$__$28$ecmascript$29$__["updateCSS"])("\n#".concat(randomId, "::-webkit-scrollbar {\n").concat(widthStyle, "\n").concat(heightStyle, "\n}"), randomId);
        } catch (e) {
            // Can't wrap, just log error
            console.error(e);
            // Get from style directly
            fallbackWidth = width;
            fallbackHeight = height;
        }
    }
    document.body.appendChild(measureEle);
    // Measure. Get fallback style if provided
    var scrollWidth = ele && fallbackWidth && !isNaN(fallbackWidth) ? fallbackWidth : measureEle.offsetWidth - measureEle.clientWidth;
    var scrollHeight = ele && fallbackHeight && !isNaN(fallbackHeight) ? fallbackHeight : measureEle.offsetHeight - measureEle.clientHeight;
    // Clean up
    document.body.removeChild(measureEle);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$dynamicCSS$2e$js__$5b$client$5d$__$28$ecmascript$29$__["removeCSS"])(randomId);
    return {
        width: scrollWidth,
        height: scrollHeight
    };
}
function getScrollBarSize(fresh) {
    if (typeof document === 'undefined') {
        return 0;
    }
    if (fresh || cached === undefined) {
        cached = measureScrollbarSize();
    }
    return cached.width;
}
function getTargetScrollBarSize(target) {
    if (typeof document === 'undefined' || !target || !(target instanceof Element)) {
        return {
            width: 0,
            height: 0
        };
    }
    return measureScrollbarSize(target);
}
}),
"[project]/Downloads/One click/node_modules/rc-util/es/Dom/findDOMNode.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>findDOMNode,
    "getDOM",
    ()=>getDOM,
    "isDOM",
    ()=>isDOM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react-dom/index.js [client] (ecmascript)");
;
;
;
function isDOM(node) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element
    // Since XULElement is also subclass of Element, we only need HTMLElement and SVGElement
    return node instanceof HTMLElement || node instanceof SVGElement;
}
function getDOM(node) {
    if (node && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(node) === 'object' && isDOM(node.nativeElement)) {
        return node.nativeElement;
    }
    if (isDOM(node)) {
        return node;
    }
    return null;
}
function findDOMNode(node) {
    var domNode = getDOM(node);
    if (domNode) {
        return domNode;
    }
    if (node instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Component) {
        var _ReactDOM$findDOMNode;
        return (_ReactDOM$findDOMNode = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].findDOMNode) === null || _ReactDOM$findDOMNode === void 0 ? void 0 : _ReactDOM$findDOMNode.call(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], node);
    }
    return null;
}
}),
"[project]/Downloads/One click/node_modules/rc-util/es/hooks/useEvent.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
function useEvent(callback) {
    var fnRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"]();
    fnRef.current = callback;
    var memoFn = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useEvent.useCallback[memoFn]": function() {
            var _fnRef$current;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [
                fnRef
            ].concat(args));
        }
    }["useEvent.useCallback[memoFn]"], []);
    return memoFn;
}
}),
"[project]/Downloads/One click/node_modules/rc-util/es/hooks/useState.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useSafeState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
;
function useSafeState(defaultValue) {
    var destroyRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](false);
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](defaultValue), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), value = _React$useState2[0], setValue = _React$useState2[1];
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useSafeState.useEffect": function() {
            destroyRef.current = false;
            return ({
                "useSafeState.useEffect": function() {
                    destroyRef.current = true;
                }
            })["useSafeState.useEffect"];
        }
    }["useSafeState.useEffect"], []);
    function safeSetState(updater, ignoreDestroy) {
        if (ignoreDestroy && destroyRef.current) {
            return;
        }
        setValue(updater);
    }
    return [
        value,
        safeSetState
    ];
}
}),
"[project]/Downloads/One click/node_modules/rc-util/es/hooks/useMergedState.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useMergedState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useEvent.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useLayoutEffect.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useState$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useState.js [client] (ecmascript)");
;
;
;
;
/** We only think `undefined` is empty */ function hasValue(value) {
    return value !== undefined;
}
function useMergedState(defaultStateValue, option) {
    var _ref = option || {}, defaultValue = _ref.defaultValue, value = _ref.value, onChange = _ref.onChange, postState = _ref.postState;
    // ======================= Init =======================
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useState$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "useMergedState.useState[_useState]": function() {
            if (hasValue(value)) {
                return value;
            } else if (hasValue(defaultValue)) {
                return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
            } else {
                return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
            }
        }
    }["useMergedState.useState[_useState]"]), _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_useState, 2), innerValue = _useState2[0], setInnerValue = _useState2[1];
    var mergedValue = value !== undefined ? value : innerValue;
    var postMergedValue = postState ? postState(mergedValue) : mergedValue;
    // ====================== Change ======================
    var onChangeFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(onChange);
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useState$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])([
        mergedValue
    ]), _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_useState3, 2), prevValue = _useState4[0], setPrevValue = _useState4[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLayoutUpdateEffect"])({
        "useMergedState.useLayoutUpdateEffect": function() {
            var prev = prevValue[0];
            if (innerValue !== prev) {
                onChangeFn(innerValue, prev);
            }
        }
    }["useMergedState.useLayoutUpdateEffect"], [
        prevValue
    ]);
    // Sync value back to `undefined` when it from control to un-control
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLayoutUpdateEffect"])({
        "useMergedState.useLayoutUpdateEffect": function() {
            if (!hasValue(value)) {
                setInnerValue(value);
            }
        }
    }["useMergedState.useLayoutUpdateEffect"], [
        value
    ]);
    // ====================== Update ======================
    var triggerChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "useMergedState.useEvent[triggerChange]": function(updater, ignoreDestroy) {
            setInnerValue(updater, ignoreDestroy);
            setPrevValue([
                mergedValue
            ], ignoreDestroy);
        }
    }["useMergedState.useEvent[triggerChange]"]);
    return [
        postMergedValue,
        triggerChange
    ];
}
}),
"[project]/Downloads/One click/node_modules/rc-util/es/utils/get.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>get
]);
function get(entity, path) {
    var current = entity;
    for(var i = 0; i < path.length; i += 1){
        if (current === null || current === undefined) {
            return undefined;
        }
        current = current[path[i]];
    }
    return current;
}
}),
"[project]/Downloads/One click/node_modules/rc-util/es/utils/set.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>set,
    "merge",
    ()=>merge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$utils$2f$get$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/utils/get.js [client] (ecmascript)");
;
;
;
;
;
function internalSet(entity, paths, value, removeIfUndefined) {
    if (!paths.length) {
        return value;
    }
    var _paths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(paths), path = _paths[0], restPath = _paths.slice(1);
    var clone;
    if (!entity && typeof path === 'number') {
        clone = [];
    } else if (Array.isArray(entity)) {
        clone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(entity);
    } else {
        clone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, entity);
    }
    // Delete prop if `removeIfUndefined` and value is undefined
    if (removeIfUndefined && value === undefined && restPath.length === 1) {
        delete clone[path][restPath[0]];
    } else {
        clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
    }
    return clone;
}
function set(entity, paths, value) {
    var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    // Do nothing if `removeIfUndefined` and parent object not exist
    if (paths.length && removeIfUndefined && value === undefined && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$utils$2f$get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(entity, paths.slice(0, -1))) {
        return entity;
    }
    return internalSet(entity, paths, value, removeIfUndefined);
}
function isObject(obj) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(obj) === 'object' && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
function createEmpty(source) {
    return Array.isArray(source) ? [] : {};
}
var keys = typeof Reflect === 'undefined' ? Object.keys : Reflect.ownKeys;
function merge() {
    for(var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++){
        sources[_key] = arguments[_key];
    }
    var clone = createEmpty(sources[0]);
    sources.forEach(function(src) {
        function internalMerge(path, parentLoopSet) {
            var loopSet = new Set(parentLoopSet);
            var value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$utils$2f$get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(src, path);
            var isArr = Array.isArray(value);
            if (isArr || isObject(value)) {
                // Only add not loop obj
                if (!loopSet.has(value)) {
                    loopSet.add(value);
                    var originValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$utils$2f$get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(clone, path);
                    if (isArr) {
                        // Array will always be override
                        clone = set(clone, path, []);
                    } else if (!originValue || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(originValue) !== 'object') {
                        // Init container if not exist
                        clone = set(clone, path, createEmpty(value));
                    }
                    keys(value).forEach(function(key) {
                        internalMerge([].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(path), [
                            key
                        ]), loopSet);
                    });
                }
            } else {
                clone = set(clone, path, value);
            }
        }
        internalMerge([]);
    });
    return clone;
}
}),
"[project]/Downloads/One click/node_modules/rc-util/es/index.js [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useEvent.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useMergedState.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/ref.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$utils$2f$get$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/utils/get.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$utils$2f$set$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/utils/set.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/warning.js [client] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/Downloads/One click/node_modules/rc-util/es/hooks/useEvent.js [client] (ecmascript) <export default as useEvent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEvent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useEvent.js [client] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/rc-util/es/hooks/useSyncState.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useSyncState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useEvent.js [client] (ecmascript)");
;
;
;
function useSyncState(defaultValue) {
    var _React$useReducer = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useReducer"]({
        "useSyncState.useReducer[_React$useReducer]": function(x) {
            return x + 1;
        }
    }["useSyncState.useReducer[_React$useReducer]"], 0), _React$useReducer2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_React$useReducer, 2), forceUpdate = _React$useReducer2[1];
    var currentValueRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](defaultValue);
    var getValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "useSyncState.useEvent[getValue]": function() {
            return currentValueRef.current;
        }
    }["useSyncState.useEvent[getValue]"]);
    var setValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "useSyncState.useEvent[setValue]": function(updater) {
            currentValueRef.current = typeof updater === 'function' ? updater(currentValueRef.current) : updater;
            forceUpdate();
        }
    }["useSyncState.useEvent[setValue]"]);
    return [
        getValue,
        setValue
    ];
}
}),
"[project]/Downloads/One click/node_modules/rc-util/es/raf.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var raf = function raf(callback) {
    return +setTimeout(callback, 16);
};
var caf = function caf(num) {
    return clearTimeout(num);
};
if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
    raf = function raf(callback) {
        return window.requestAnimationFrame(callback);
    };
    caf = function caf(handle) {
        return window.cancelAnimationFrame(handle);
    };
}
var rafUUID = 0;
var rafIds = new Map();
function cleanup(id) {
    rafIds.delete(id);
}
var wrapperRaf = function wrapperRaf(callback) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    rafUUID += 1;
    var id = rafUUID;
    function callRef(leftTimes) {
        if (leftTimes === 0) {
            // Clean up
            cleanup(id);
            // Trigger
            callback();
        } else {
            // Next raf
            var realId = raf(function() {
                callRef(leftTimes - 1);
            });
            // Bind real raf id
            rafIds.set(id, realId);
        }
    }
    callRef(times);
    return id;
};
wrapperRaf.cancel = function(id) {
    var realId = rafIds.get(id);
    cleanup(id);
    return caf(realId);
};
if ("TURBOPACK compile-time truthy", 1) {
    wrapperRaf.ids = function() {
        return rafIds;
    };
}
const __TURBOPACK__default__export__ = wrapperRaf;
}),
"[project]/Downloads/One click/node_modules/rc-util/es/KeyCode.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var KeyCode = {
    /**
   * MAC_ENTER
   */ MAC_ENTER: 3,
    /**
   * BACKSPACE
   */ BACKSPACE: 8,
    /**
   * TAB
   */ TAB: 9,
    /**
   * NUMLOCK on FF/Safari Mac
   */ NUM_CENTER: 12,
    // NUMLOCK on FF/Safari Mac
    /**
   * ENTER
   */ ENTER: 13,
    /**
   * SHIFT
   */ SHIFT: 16,
    /**
   * CTRL
   */ CTRL: 17,
    /**
   * ALT
   */ ALT: 18,
    /**
   * PAUSE
   */ PAUSE: 19,
    /**
   * CAPS_LOCK
   */ CAPS_LOCK: 20,
    /**
   * ESC
   */ ESC: 27,
    /**
   * SPACE
   */ SPACE: 32,
    /**
   * PAGE_UP
   */ PAGE_UP: 33,
    // also NUM_NORTH_EAST
    /**
   * PAGE_DOWN
   */ PAGE_DOWN: 34,
    // also NUM_SOUTH_EAST
    /**
   * END
   */ END: 35,
    // also NUM_SOUTH_WEST
    /**
   * HOME
   */ HOME: 36,
    // also NUM_NORTH_WEST
    /**
   * LEFT
   */ LEFT: 37,
    // also NUM_WEST
    /**
   * UP
   */ UP: 38,
    // also NUM_NORTH
    /**
   * RIGHT
   */ RIGHT: 39,
    // also NUM_EAST
    /**
   * DOWN
   */ DOWN: 40,
    // also NUM_SOUTH
    /**
   * PRINT_SCREEN
   */ PRINT_SCREEN: 44,
    /**
   * INSERT
   */ INSERT: 45,
    // also NUM_INSERT
    /**
   * DELETE
   */ DELETE: 46,
    // also NUM_DELETE
    /**
   * ZERO
   */ ZERO: 48,
    /**
   * ONE
   */ ONE: 49,
    /**
   * TWO
   */ TWO: 50,
    /**
   * THREE
   */ THREE: 51,
    /**
   * FOUR
   */ FOUR: 52,
    /**
   * FIVE
   */ FIVE: 53,
    /**
   * SIX
   */ SIX: 54,
    /**
   * SEVEN
   */ SEVEN: 55,
    /**
   * EIGHT
   */ EIGHT: 56,
    /**
   * NINE
   */ NINE: 57,
    /**
   * QUESTION_MARK
   */ QUESTION_MARK: 63,
    // needs localization
    /**
   * A
   */ A: 65,
    /**
   * B
   */ B: 66,
    /**
   * C
   */ C: 67,
    /**
   * D
   */ D: 68,
    /**
   * E
   */ E: 69,
    /**
   * F
   */ F: 70,
    /**
   * G
   */ G: 71,
    /**
   * H
   */ H: 72,
    /**
   * I
   */ I: 73,
    /**
   * J
   */ J: 74,
    /**
   * K
   */ K: 75,
    /**
   * L
   */ L: 76,
    /**
   * M
   */ M: 77,
    /**
   * N
   */ N: 78,
    /**
   * O
   */ O: 79,
    /**
   * P
   */ P: 80,
    /**
   * Q
   */ Q: 81,
    /**
   * R
   */ R: 82,
    /**
   * S
   */ S: 83,
    /**
   * T
   */ T: 84,
    /**
   * U
   */ U: 85,
    /**
   * V
   */ V: 86,
    /**
   * W
   */ W: 87,
    /**
   * X
   */ X: 88,
    /**
   * Y
   */ Y: 89,
    /**
   * Z
   */ Z: 90,
    /**
   * META
   */ META: 91,
    // WIN_KEY_LEFT
    /**
   * WIN_KEY_RIGHT
   */ WIN_KEY_RIGHT: 92,
    /**
   * CONTEXT_MENU
   */ CONTEXT_MENU: 93,
    /**
   * NUM_ZERO
   */ NUM_ZERO: 96,
    /**
   * NUM_ONE
   */ NUM_ONE: 97,
    /**
   * NUM_TWO
   */ NUM_TWO: 98,
    /**
   * NUM_THREE
   */ NUM_THREE: 99,
    /**
   * NUM_FOUR
   */ NUM_FOUR: 100,
    /**
   * NUM_FIVE
   */ NUM_FIVE: 101,
    /**
   * NUM_SIX
   */ NUM_SIX: 102,
    /**
   * NUM_SEVEN
   */ NUM_SEVEN: 103,
    /**
   * NUM_EIGHT
   */ NUM_EIGHT: 104,
    /**
   * NUM_NINE
   */ NUM_NINE: 105,
    /**
   * NUM_MULTIPLY
   */ NUM_MULTIPLY: 106,
    /**
   * NUM_PLUS
   */ NUM_PLUS: 107,
    /**
   * NUM_MINUS
   */ NUM_MINUS: 109,
    /**
   * NUM_PERIOD
   */ NUM_PERIOD: 110,
    /**
   * NUM_DIVISION
   */ NUM_DIVISION: 111,
    /**
   * F1
   */ F1: 112,
    /**
   * F2
   */ F2: 113,
    /**
   * F3
   */ F3: 114,
    /**
   * F4
   */ F4: 115,
    /**
   * F5
   */ F5: 116,
    /**
   * F6
   */ F6: 117,
    /**
   * F7
   */ F7: 118,
    /**
   * F8
   */ F8: 119,
    /**
   * F9
   */ F9: 120,
    /**
   * F10
   */ F10: 121,
    /**
   * F11
   */ F11: 122,
    /**
   * F12
   */ F12: 123,
    /**
   * NUMLOCK
   */ NUMLOCK: 144,
    /**
   * SEMICOLON
   */ SEMICOLON: 186,
    // needs localization
    /**
   * DASH
   */ DASH: 189,
    // needs localization
    /**
   * EQUALS
   */ EQUALS: 187,
    // needs localization
    /**
   * COMMA
   */ COMMA: 188,
    // needs localization
    /**
   * PERIOD
   */ PERIOD: 190,
    // needs localization
    /**
   * SLASH
   */ SLASH: 191,
    // needs localization
    /**
   * APOSTROPHE
   */ APOSTROPHE: 192,
    // needs localization
    /**
   * SINGLE_QUOTE
   */ SINGLE_QUOTE: 222,
    // needs localization
    /**
   * OPEN_SQUARE_BRACKET
   */ OPEN_SQUARE_BRACKET: 219,
    // needs localization
    /**
   * BACKSLASH
   */ BACKSLASH: 220,
    // needs localization
    /**
   * CLOSE_SQUARE_BRACKET
   */ CLOSE_SQUARE_BRACKET: 221,
    // needs localization
    /**
   * WIN_KEY
   */ WIN_KEY: 224,
    /**
   * MAC_FF_META
   */ MAC_FF_META: 224,
    // Firefox (Gecko) fires this for the meta key instead of 91
    /**
   * WIN_IME
   */ WIN_IME: 229,
    // ======================== Function ========================
    /**
   * whether text and modified key is entered at the same time.
   */ isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
        var keyCode = e.keyCode;
        if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
        keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
            return false;
        }
        // The following keys are quite harmless, even in combination with
        // CTRL, ALT or SHIFT.
        switch(keyCode){
            case KeyCode.ALT:
            case KeyCode.CAPS_LOCK:
            case KeyCode.CONTEXT_MENU:
            case KeyCode.CTRL:
            case KeyCode.DOWN:
            case KeyCode.END:
            case KeyCode.ESC:
            case KeyCode.HOME:
            case KeyCode.INSERT:
            case KeyCode.LEFT:
            case KeyCode.MAC_FF_META:
            case KeyCode.META:
            case KeyCode.NUMLOCK:
            case KeyCode.NUM_CENTER:
            case KeyCode.PAGE_DOWN:
            case KeyCode.PAGE_UP:
            case KeyCode.PAUSE:
            case KeyCode.PRINT_SCREEN:
            case KeyCode.RIGHT:
            case KeyCode.SHIFT:
            case KeyCode.UP:
            case KeyCode.WIN_KEY:
            case KeyCode.WIN_KEY_RIGHT:
                return false;
            default:
                return true;
        }
    },
    /**
   * whether character is entered.
   */ isCharacterKey: function isCharacterKey(keyCode) {
        if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
            return true;
        }
        if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
            return true;
        }
        if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
            return true;
        }
        // Safari sends zero key code for non-latin characters.
        if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
            return true;
        }
        switch(keyCode){
            case KeyCode.SPACE:
            case KeyCode.QUESTION_MARK:
            case KeyCode.NUM_PLUS:
            case KeyCode.NUM_MINUS:
            case KeyCode.NUM_PERIOD:
            case KeyCode.NUM_DIVISION:
            case KeyCode.SEMICOLON:
            case KeyCode.DASH:
            case KeyCode.EQUALS:
            case KeyCode.COMMA:
            case KeyCode.PERIOD:
            case KeyCode.SLASH:
            case KeyCode.APOSTROPHE:
            case KeyCode.SINGLE_QUOTE:
            case KeyCode.OPEN_SQUARE_BRACKET:
            case KeyCode.BACKSLASH:
            case KeyCode.CLOSE_SQUARE_BRACKET:
                return true;
            default:
                return false;
        }
    }
};
const __TURBOPACK__default__export__ = KeyCode;
}),
"[project]/Downloads/One click/node_modules/rc-util/es/pickAttrs.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>pickAttrs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [client] (ecmascript)");
;
var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
/* eslint-enable max-len */ var ariaPrefix = 'aria-';
var dataPrefix = 'data-';
function match(key, prefix) {
    return key.indexOf(prefix) === 0;
}
function pickAttrs(props) {
    var ariaOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var mergedConfig;
    if (ariaOnly === false) {
        mergedConfig = {
            aria: true,
            data: true,
            attr: true
        };
    } else if (ariaOnly === true) {
        mergedConfig = {
            aria: true
        };
    } else {
        mergedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, ariaOnly);
    }
    var attrs = {};
    Object.keys(props).forEach(function(key) {
        if (// Aria
        mergedConfig.aria && (key === 'role' || match(key, ariaPrefix)) || // Data
        mergedConfig.data && match(key, dataPrefix) || // Attr
        mergedConfig.attr && propList.includes(key)) {
            attrs[key] = props[key];
        }
    });
    return attrs;
}
}),
"[project]/Downloads/One click/node_modules/rc-util/es/hooks/useId.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "resetUuid",
    ()=>resetUuid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
;
;
function getUseId() {
    // We need fully clone React function here to avoid webpack warning React 17 do not export `useId`
    var fullClone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__);
    return fullClone.useId;
}
var uuid = 0;
function resetUuid() {
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        uuid = 0;
    }
}
var useOriginId = getUseId();
const __TURBOPACK__default__export__ = useOriginId ? // Use React `useId`
function useId(id) {
    var reactId = useOriginId();
    // Developer passed id is single source of truth
    if (id) {
        return id;
    }
    // Test env always return mock id
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return reactId;
} : // Use compatible of `useId`
function useCompatId(id) {
    // Inner id for accessibility usage. Only work in client side
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.useState('ssr-id'), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), innerId = _React$useState2[0], setInnerId = _React$useState2[1];
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__.useEffect({
        "useCompatId.useEffect": function() {
            var nextId = uuid;
            uuid += 1;
            setInnerId("rc_unique_".concat(nextId));
        }
    }["useCompatId.useEffect"], []);
    // Developer passed id is single source of truth
    if (id) {
        return id;
    }
    // Test env always return mock id
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Return react native id or inner id
    return innerId;
};
}),
"[project]/Downloads/One click/node_modules/rc-util/es/Children/toArray.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$React$2f$isFragment$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/React/isFragment.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
;
function toArray(children) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var ret = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Children.forEach(children, function(child) {
        if ((child === undefined || child === null) && !option.keepEmpty) {
            return;
        }
        if (Array.isArray(child)) {
            ret = ret.concat(toArray(child));
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$React$2f$isFragment$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(child) && child.props) {
            ret = ret.concat(toArray(child.props.children, option));
        } else {
            ret.push(child);
        }
    });
    return ret;
}
}),
"[project]/Downloads/One click/node_modules/rc-util/es/isEqual.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/warning.js [client] (ecmascript)");
;
;
/**
 * Deeply compares two object literals.
 * @param obj1 object 1
 * @param obj2 object 2
 * @param shallow shallow compare
 * @returns
 */ function isEqual(obj1, obj2) {
    var shallow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    // https://github.com/mapbox/mapbox-gl-js/pull/5979/files#diff-fde7145050c47cc3a306856efd5f9c3016e86e859de9afbd02c879be5067e58f
    var refSet = new Set();
    function deepEqual(a, b) {
        var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var circular = refSet.has(a);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(!circular, 'Warning: There may be circular references');
        if (circular) {
            return false;
        }
        if (a === b) {
            return true;
        }
        if (shallow && level > 1) {
            return false;
        }
        refSet.add(a);
        var newLevel = level + 1;
        if (Array.isArray(a)) {
            if (!Array.isArray(b) || a.length !== b.length) {
                return false;
            }
            for(var i = 0; i < a.length; i++){
                if (!deepEqual(a[i], b[i], newLevel)) {
                    return false;
                }
            }
            return true;
        }
        if (a && b && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(a) === 'object' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(b) === 'object') {
            var keys = Object.keys(a);
            if (keys.length !== Object.keys(b).length) {
                return false;
            }
            return keys.every(function(key) {
                return deepEqual(a[key], b[key], newLevel);
            });
        }
        // other
        return false;
    }
    return deepEqual(obj1, obj2);
}
const __TURBOPACK__default__export__ = isEqual;
}),
"[project]/Downloads/One click/node_modules/rc-util/es/utils/get.js [client] (ecmascript) <export default as getValue>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$utils$2f$get$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$utils$2f$get$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/utils/get.js [client] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/rc-util/es/utils/set.js [client] (ecmascript) <export default as setValue>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$utils$2f$set$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$utils$2f$set$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/utils/set.js [client] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/rc-util/es/omit.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>omit
]);
function omit(obj, fields) {
    var clone = Object.assign({}, obj);
    if (Array.isArray(fields)) {
        fields.forEach(function(key) {
            delete clone[key];
        });
    }
    return clone;
}
}),
"[project]/Downloads/One click/node_modules/rc-util/es/warning.js [client] (ecmascript) <export default as warning>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "warning",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/warning.js [client] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/rc-util/es/Dom/shadow.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getShadowRoot",
    ()=>getShadowRoot,
    "inShadow",
    ()=>inShadow
]);
function getRoot(ele) {
    var _ele$getRootNode;
    return ele === null || ele === void 0 || (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
}
function inShadow(ele) {
    return getRoot(ele) instanceof ShadowRoot;
}
function getShadowRoot(ele) {
    return inShadow(ele) ? getRoot(ele) : null;
}
}),
"[project]/Downloads/One click/node_modules/rc-util/es/Dom/isVisible.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = function(element) {
    if (!element) {
        return false;
    }
    if (element instanceof Element) {
        if (element.offsetParent) {
            return true;
        }
        if (element.getBBox) {
            var _getBBox = element.getBBox(), width = _getBBox.width, height = _getBBox.height;
            if (width || height) {
                return true;
            }
        }
        if (element.getBoundingClientRect) {
            var _element$getBoundingC = element.getBoundingClientRect(), _width = _element$getBoundingC.width, _height = _element$getBoundingC.height;
            if (_width || _height) {
                return true;
            }
        }
    }
    return false;
};
}),
"[project]/Downloads/One click/node_modules/rc-util/es/React/render.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_r",
    ()=>_r,
    "_u",
    ()=>_u,
    "render",
    ()=>render,
    "unmount",
    ()=>unmount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$asyncToGenerator$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react-dom/index.js [client] (ecmascript)");
;
;
;
;
;
// Let compiler not to search module usage
var fullClone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__);
var version = fullClone.version, reactRender = fullClone.render, unmountComponentAtNode = fullClone.unmountComponentAtNode;
var createRoot;
try {
    var mainVersion = Number((version || '').split('.')[0]);
    if (mainVersion >= 18) {
        createRoot = fullClone.createRoot;
    }
} catch (e) {
// Do nothing;
}
function toggleWarning(skip) {
    var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === 'object') {
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
    }
}
var MARK = '__rc_react_root__';
// ========================== Render ==========================
function modernRender(node, container) {
    toggleWarning(true);
    var root = container[MARK] || createRoot(container);
    toggleWarning(false);
    root.render(node);
    container[MARK] = root;
}
function legacyRender(node, container) {
    reactRender === null || reactRender === void 0 || reactRender(node, container);
}
function _r(node, container) {
    if ("TURBOPACK compile-time truthy", 1) {
        return legacyRender(node, container);
    }
}
function render(node, container) {
    if (createRoot) {
        modernRender(node, container);
        return;
    }
    legacyRender(node, container);
}
// ========================= Unmount ==========================
function modernUnmount(_x) {
    return _modernUnmount.apply(this, arguments);
}
function _modernUnmount() {
    _modernUnmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$asyncToGenerator$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().mark(function _callee(container) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().wrap(function _callee$(_context) {
            while(1)switch(_context.prev = _context.next){
                case 0:
                    return _context.abrupt("return", Promise.resolve().then(function() {
                        var _container$MARK;
                        (_container$MARK = container[MARK]) === null || _container$MARK === void 0 || _container$MARK.unmount();
                        delete container[MARK];
                    }));
                case 1:
                case "end":
                    return _context.stop();
            }
        }, _callee);
    }));
    return _modernUnmount.apply(this, arguments);
}
function legacyUnmount(container) {
    unmountComponentAtNode(container);
}
function _u(container) {
    if ("TURBOPACK compile-time truthy", 1) {
        return legacyUnmount(container);
    }
}
function unmount(_x2) {
    return _unmount.apply(this, arguments);
}
function _unmount() {
    _unmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$asyncToGenerator$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().mark(function _callee2(container) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])().wrap(function _callee2$(_context2) {
            while(1)switch(_context2.prev = _context2.next){
                case 0:
                    if (!(createRoot !== undefined)) {
                        _context2.next = 2;
                        break;
                    }
                    return _context2.abrupt("return", modernUnmount(container));
                case 2:
                    legacyUnmount(container);
                case 3:
                case "end":
                    return _context2.stop();
            }
        }, _callee2);
    }));
    return _unmount.apply(this, arguments);
}
}),
"[project]/Downloads/One click/node_modules/rc-util/es/hooks/useMergedState.js [client] (ecmascript) <export default as useMergedState>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMergedState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useMergedState.js [client] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/rc-util/es/Dom/focus.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backLastFocusNode",
    ()=>backLastFocusNode,
    "clearLastFocusNode",
    ()=>clearLastFocusNode,
    "getFocusNodeList",
    ()=>getFocusNodeList,
    "limitTabRange",
    ()=>limitTabRange,
    "saveLastFocusNode",
    ()=>saveLastFocusNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$isVisible$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Dom/isVisible.js [client] (ecmascript)");
;
;
function focusable(node) {
    var includePositive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$isVisible$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(node)) {
        var nodeName = node.nodeName.toLowerCase();
        var isFocusableElement = // Focusable element
        [
            'input',
            'select',
            'textarea',
            'button'
        ].includes(nodeName) || // Editable element
        node.isContentEditable || // Anchor with href element
        nodeName === 'a' && !!node.getAttribute('href');
        // Get tabIndex
        var tabIndexAttr = node.getAttribute('tabindex');
        var tabIndexNum = Number(tabIndexAttr);
        // Parse as number if validate
        var tabIndex = null;
        if (tabIndexAttr && !Number.isNaN(tabIndexNum)) {
            tabIndex = tabIndexNum;
        } else if (isFocusableElement && tabIndex === null) {
            tabIndex = 0;
        }
        // Block focusable if disabled
        if (isFocusableElement && node.disabled) {
            tabIndex = null;
        }
        return tabIndex !== null && (tabIndex >= 0 || includePositive && tabIndex < 0);
    }
    return false;
}
function getFocusNodeList(node) {
    var includePositive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(node.querySelectorAll('*')).filter(function(child) {
        return focusable(child, includePositive);
    });
    if (focusable(node, includePositive)) {
        res.unshift(node);
    }
    return res;
}
var lastFocusElement = null;
function saveLastFocusNode() {
    lastFocusElement = document.activeElement;
}
function clearLastFocusNode() {
    lastFocusElement = null;
}
function backLastFocusNode() {
    if (lastFocusElement) {
        try {
            // 元素可能已经被移动了
            lastFocusElement.focus();
        /* eslint-disable no-empty */ } catch (e) {
        // empty
        }
    /* eslint-enable no-empty */ }
}
function limitTabRange(node, e) {
    if (e.keyCode === 9) {
        var tabNodeList = getFocusNodeList(node);
        var lastTabNode = tabNodeList[e.shiftKey ? 0 : tabNodeList.length - 1];
        var leavingTab = lastTabNode === document.activeElement || node === document.activeElement;
        if (leavingTab) {
            var target = tabNodeList[e.shiftKey ? tabNodeList.length - 1 : 0];
            target.focus();
            e.preventDefault();
        }
    }
}
}),
"[project]/Downloads/One click/node_modules/rc-util/es/isMobile.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = function() {
    if (typeof navigator === 'undefined' || typeof window === 'undefined') {
        return false;
    }
    var agent = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4));
};
}),
"[project]/Downloads/One click/node_modules/rc-util/node_modules/react-is/cjs/react-is.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // ATTENTION
        // When adding new symbols to this file,
        // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
        // The Symbol used to tag the ReactElement-like types.
        var REACT_ELEMENT_TYPE = Symbol.for('react.element');
        var REACT_PORTAL_TYPE = Symbol.for('react.portal');
        var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
        var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
        var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
        var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
        var REACT_CONTEXT_TYPE = Symbol.for('react.context');
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
        var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
        var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
        var REACT_MEMO_TYPE = Symbol.for('react.memo');
        var REACT_LAZY_TYPE = Symbol.for('react.lazy');
        var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
        // -----------------------------------------------------------------------------
        var enableScopeAPI = false; // Experimental Create Event Handle API.
        var enableCacheElement = false;
        var enableTransitionTracing = false; // No known bugs, but needs performance testing
        var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
        // stuff. Intended to enable React core members to more easily debug scheduling
        // issues in DEV builds.
        var enableDebugTracing = false; // Track which Fiber(s) schedule render work.
        var REACT_MODULE_REFERENCE;
        {
            REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
        }
        function isValidElementType(type) {
            if (typeof type === 'string' || typeof type === 'function') {
                return true;
            } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
                return true;
            }
            if (typeof type === 'object' && type !== null) {
                if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
                // types supported by any Flight configuration anywhere since
                // we don't know which Flight build this will end up being used
                // with.
                type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
                    return true;
                }
            }
            return false;
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                            case REACT_SUSPENSE_LIST_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_SERVER_CONTEXT_TYPE:
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
                }
            }
            return false;
        }
        function isConcurrentMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
                    hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
                }
            }
            return false;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object) {
            return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.SuspenseList = SuspenseList;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isSuspenseList = isSuspenseList;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/Downloads/One click/node_modules/rc-util/node_modules/react-is/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Downloads/One click/node_modules/rc-util/node_modules/react-is/cjs/react-is.development.js [client] (ecmascript)");
}
}),
"[project]/Downloads/One click/node_modules/rc-drawer/es/context.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RefContext",
    ()=>RefContext,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
var DrawerContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"](null);
var RefContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"]({});
const __TURBOPACK__default__export__ = DrawerContext;
}),
"[project]/Downloads/One click/node_modules/rc-drawer/es/DrawerPanel.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$drawer$2f$es$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-drawer/es/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/pickAttrs.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/ref.js [client] (ecmascript)");
;
;
var _excluded = [
    "prefixCls",
    "className",
    "containerRef"
];
;
;
;
;
;
var DrawerPanel = function DrawerPanel(props) {
    var prefixCls = props.prefixCls, className = props.className, containerRef = props.containerRef, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$drawer$2f$es$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["RefContext"]), panelRef = _React$useContext.panel;
    var mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useComposeRef"])(panelRef, containerRef);
    // =============================== Render ===============================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-content"), className),
        role: "dialog",
        ref: mergedRef
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, {
        aria: true
    }), {
        "aria-modal": "true"
    }, restProps));
};
if ("TURBOPACK compile-time truthy", 1) {
    DrawerPanel.displayName = 'DrawerPanel';
}
const __TURBOPACK__default__export__ = DrawerPanel;
}),
"[project]/Downloads/One click/node_modules/rc-drawer/es/util.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseWidthHeight",
    ()=>parseWidthHeight,
    "warnCheck",
    ()=>warnCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/warning.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Dom/canUseDom.js [client] (ecmascript)");
;
;
function parseWidthHeight(value) {
    if (typeof value === 'string' && String(Number(value)) === value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(false, 'Invalid value type of `width` or `height` which should be number type instead.');
        return Number(value);
    }
    return value;
}
function warnCheck(props) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(!('wrapperClassName' in props), "'wrapperClassName' is removed. Please use 'rootClassName' instead.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])() || !props.open, "Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.");
}
}),
"[project]/Downloads/One click/node_modules/rc-drawer/es/DrawerPopup.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/KeyCode.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/pickAttrs.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$drawer$2f$es$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-drawer/es/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$drawer$2f$es$2f$DrawerPanel$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-drawer/es/DrawerPanel.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$drawer$2f$es$2f$util$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-drawer/es/util.js [client] (ecmascript)");
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
var sentinelStyle = {
    width: 0,
    height: 0,
    overflow: 'hidden',
    outline: 'none',
    position: 'absolute'
};
function DrawerPopup(props, ref) {
    var _ref, _pushConfig$distance, _pushConfig;
    var prefixCls = props.prefixCls, open = props.open, placement = props.placement, inline = props.inline, push = props.push, forceRender = props.forceRender, autoFocus = props.autoFocus, keyboard = props.keyboard, drawerClassNames = props.classNames, rootClassName = props.rootClassName, rootStyle = props.rootStyle, zIndex = props.zIndex, className = props.className, id = props.id, style = props.style, motion = props.motion, width = props.width, height = props.height, children = props.children, mask = props.mask, maskClosable = props.maskClosable, maskMotion = props.maskMotion, maskClassName = props.maskClassName, maskStyle = props.maskStyle, afterOpenChange = props.afterOpenChange, onClose = props.onClose, onMouseEnter = props.onMouseEnter, onMouseOver = props.onMouseOver, onMouseLeave = props.onMouseLeave, onClick = props.onClick, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, styles = props.styles, drawerRender = props.drawerRender;
    // ================================ Refs ================================
    var panelRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"]();
    var sentinelStartRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"]();
    var sentinelEndRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "DrawerPopup.useImperativeHandle": function() {
            return panelRef.current;
        }
    }["DrawerPopup.useImperativeHandle"]);
    var onPanelKeyDown = function onPanelKeyDown(event) {
        var keyCode = event.keyCode, shiftKey = event.shiftKey;
        switch(keyCode){
            // Tab active
            case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].TAB:
                {
                    if (keyCode === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].TAB) {
                        if (!shiftKey && document.activeElement === sentinelEndRef.current) {
                            var _sentinelStartRef$cur;
                            (_sentinelStartRef$cur = sentinelStartRef.current) === null || _sentinelStartRef$cur === void 0 || _sentinelStartRef$cur.focus({
                                preventScroll: true
                            });
                        } else if (shiftKey && document.activeElement === sentinelStartRef.current) {
                            var _sentinelEndRef$curre;
                            (_sentinelEndRef$curre = sentinelEndRef.current) === null || _sentinelEndRef$curre === void 0 || _sentinelEndRef$curre.focus({
                                preventScroll: true
                            });
                        }
                    }
                    break;
                }
            // Close
            case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].ESC:
                {
                    if (onClose && keyboard) {
                        event.stopPropagation();
                        onClose(event);
                    }
                    break;
                }
        }
    };
    // ========================== Control ===========================
    // Auto Focus
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DrawerPopup.useEffect": function() {
            if (open && autoFocus) {
                var _panelRef$current;
                (_panelRef$current = panelRef.current) === null || _panelRef$current === void 0 || _panelRef$current.focus({
                    preventScroll: true
                });
            }
        }
    }["DrawerPopup.useEffect"], [
        open
    ]);
    // ============================ Push ============================
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), pushed = _React$useState2[0], setPushed = _React$useState2[1];
    var parentContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$drawer$2f$es$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
    // Merge push distance
    var pushConfig;
    if (typeof push === 'boolean') {
        pushConfig = push ? {} : {
            distance: 0
        };
    } else {
        pushConfig = push || {};
    }
    var pushDistance = (_ref = (_pushConfig$distance = (_pushConfig = pushConfig) === null || _pushConfig === void 0 ? void 0 : _pushConfig.distance) !== null && _pushConfig$distance !== void 0 ? _pushConfig$distance : parentContext === null || parentContext === void 0 ? void 0 : parentContext.pushDistance) !== null && _ref !== void 0 ? _ref : 180;
    var mergedContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "DrawerPopup.useMemo[mergedContext]": function() {
            return {
                pushDistance: pushDistance,
                push: function push() {
                    setPushed(true);
                },
                pull: function pull() {
                    setPushed(false);
                }
            };
        }
    }["DrawerPopup.useMemo[mergedContext]"], [
        pushDistance
    ]);
    // ========================= ScrollLock =========================
    // Tell parent to push
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DrawerPopup.useEffect": function() {
            if (open) {
                var _parentContext$push;
                parentContext === null || parentContext === void 0 || (_parentContext$push = parentContext.push) === null || _parentContext$push === void 0 || _parentContext$push.call(parentContext);
            } else {
                var _parentContext$pull;
                parentContext === null || parentContext === void 0 || (_parentContext$pull = parentContext.pull) === null || _parentContext$pull === void 0 || _parentContext$pull.call(parentContext);
            }
        }
    }["DrawerPopup.useEffect"], [
        open
    ]);
    // Clean up
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DrawerPopup.useEffect": function() {
            return ({
                "DrawerPopup.useEffect": function() {
                    var _parentContext$pull2;
                    parentContext === null || parentContext === void 0 || (_parentContext$pull2 = parentContext.pull) === null || _parentContext$pull2 === void 0 || _parentContext$pull2.call(parentContext);
                }
            })["DrawerPopup.useEffect"];
        }
    }["DrawerPopup.useEffect"], []);
    // ============================ Mask ============================
    var maskNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        key: "mask"
    }, maskMotion, {
        visible: mask && open
    }), function(_ref2, maskRef) {
        var motionMaskClassName = _ref2.className, motionMaskStyle = _ref2.style;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-mask"), motionMaskClassName, drawerClassNames === null || drawerClassNames === void 0 ? void 0 : drawerClassNames.mask, maskClassName),
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, motionMaskStyle), maskStyle), styles === null || styles === void 0 ? void 0 : styles.mask),
            onClick: maskClosable && open ? onClose : undefined,
            ref: maskRef
        });
    });
    // =========================== Panel ============================
    var motionProps = typeof motion === 'function' ? motion(placement) : motion;
    var wrapperStyle = {};
    if (pushed && pushDistance) {
        switch(placement){
            case 'top':
                wrapperStyle.transform = "translateY(".concat(pushDistance, "px)");
                break;
            case 'bottom':
                wrapperStyle.transform = "translateY(".concat(-pushDistance, "px)");
                break;
            case 'left':
                wrapperStyle.transform = "translateX(".concat(pushDistance, "px)");
                break;
            default:
                wrapperStyle.transform = "translateX(".concat(-pushDistance, "px)");
                break;
        }
    }
    if (placement === 'left' || placement === 'right') {
        wrapperStyle.width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$drawer$2f$es$2f$util$2e$js__$5b$client$5d$__$28$ecmascript$29$__["parseWidthHeight"])(width);
    } else {
        wrapperStyle.height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$drawer$2f$es$2f$util$2e$js__$5b$client$5d$__$28$ecmascript$29$__["parseWidthHeight"])(height);
    }
    var eventHandlers = {
        onMouseEnter: onMouseEnter,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave,
        onClick: onClick,
        onKeyDown: onKeyDown,
        onKeyUp: onKeyUp
    };
    var panelNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        key: "panel"
    }, motionProps, {
        visible: open,
        forceRender: forceRender,
        onVisibleChanged: function onVisibleChanged(nextVisible) {
            afterOpenChange === null || afterOpenChange === void 0 || afterOpenChange(nextVisible);
        },
        removeOnLeave: false,
        leavedClassName: "".concat(prefixCls, "-content-wrapper-hidden")
    }), function(_ref3, motionRef) {
        var motionClassName = _ref3.className, motionStyle = _ref3.style;
        var content = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$drawer$2f$es$2f$DrawerPanel$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
            id: id,
            containerRef: motionRef,
            prefixCls: prefixCls,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, drawerClassNames === null || drawerClassNames === void 0 ? void 0 : drawerClassNames.content),
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, style), styles === null || styles === void 0 ? void 0 : styles.content)
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, {
            aria: true
        }), eventHandlers), children);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-content-wrapper"), drawerClassNames === null || drawerClassNames === void 0 ? void 0 : drawerClassNames.wrapper, motionClassName),
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, wrapperStyle), motionStyle), styles === null || styles === void 0 ? void 0 : styles.wrapper)
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, {
            data: true
        })), drawerRender ? drawerRender(content) : content);
    });
    // =========================== Render ===========================
    var containerStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, rootStyle);
    if (zIndex) {
        containerStyle.zIndex = zIndex;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$drawer$2f$es$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: mergedContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, "".concat(prefixCls, "-").concat(placement), rootClassName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-open"), open), "".concat(prefixCls, "-inline"), inline)),
        style: containerStyle,
        tabIndex: -1,
        ref: panelRef,
        onKeyDown: onPanelKeyDown
    }, maskNode, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        tabIndex: 0,
        ref: sentinelStartRef,
        style: sentinelStyle,
        "aria-hidden": "true",
        "data-sentinel": "start"
    }), panelNode, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        tabIndex: 0,
        ref: sentinelEndRef,
        style: sentinelStyle,
        "aria-hidden": "true",
        "data-sentinel": "end"
    })));
}
var RefDrawerPopup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](DrawerPopup);
if ("TURBOPACK compile-time truthy", 1) {
    RefDrawerPopup.displayName = 'DrawerPopup';
}
const __TURBOPACK__default__export__ = RefDrawerPopup;
}),
"[project]/Downloads/One click/node_modules/rc-drawer/es/Drawer.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$portal$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@rc-component/portal/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useLayoutEffect.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$drawer$2f$es$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-drawer/es/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$drawer$2f$es$2f$DrawerPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-drawer/es/DrawerPopup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$drawer$2f$es$2f$util$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-drawer/es/util.js [client] (ecmascript)");
;
;
;
;
;
;
;
;
var Drawer = function Drawer(props) {
    var _props$open = props.open, open = _props$open === void 0 ? false : _props$open, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? 'rc-drawer' : _props$prefixCls, _props$placement = props.placement, placement = _props$placement === void 0 ? 'right' : _props$placement, _props$autoFocus = props.autoFocus, autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus, _props$keyboard = props.keyboard, keyboard = _props$keyboard === void 0 ? true : _props$keyboard, _props$width = props.width, width = _props$width === void 0 ? 378 : _props$width, _props$mask = props.mask, mask = _props$mask === void 0 ? true : _props$mask, _props$maskClosable = props.maskClosable, maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable, getContainer = props.getContainer, forceRender = props.forceRender, afterOpenChange = props.afterOpenChange, destroyOnClose = props.destroyOnClose, onMouseEnter = props.onMouseEnter, onMouseOver = props.onMouseOver, onMouseLeave = props.onMouseLeave, onClick = props.onClick, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, panelRef = props.panelRef;
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), animatedVisible = _React$useState2[0], setAnimatedVisible = _React$useState2[1];
    // ============================= Warn =============================
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$drawer$2f$es$2f$util$2e$js__$5b$client$5d$__$28$ecmascript$29$__["warnCheck"])(props);
    }
    // ============================= Open =============================
    var _React$useState3 = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](false), _React$useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_React$useState3, 2), mounted = _React$useState4[0], setMounted = _React$useState4[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "Drawer.useLayoutEffect": function() {
            setMounted(true);
        }
    }["Drawer.useLayoutEffect"], []);
    var mergedOpen = mounted ? open : false;
    // ============================ Focus =============================
    var popupRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"]();
    var lastActiveRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"]();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "Drawer.useLayoutEffect": function() {
            if (mergedOpen) {
                lastActiveRef.current = document.activeElement;
            }
        }
    }["Drawer.useLayoutEffect"], [
        mergedOpen
    ]);
    // ============================= Open =============================
    var internalAfterOpenChange = function internalAfterOpenChange(nextVisible) {
        var _popupRef$current;
        setAnimatedVisible(nextVisible);
        afterOpenChange === null || afterOpenChange === void 0 || afterOpenChange(nextVisible);
        if (!nextVisible && lastActiveRef.current && !((_popupRef$current = popupRef.current) !== null && _popupRef$current !== void 0 && _popupRef$current.contains(lastActiveRef.current))) {
            var _lastActiveRef$curren;
            (_lastActiveRef$curren = lastActiveRef.current) === null || _lastActiveRef$curren === void 0 || _lastActiveRef$curren.focus({
                preventScroll: true
            });
        }
    };
    // =========================== Context ============================
    var refContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Drawer.useMemo[refContext]": function() {
            return {
                panel: panelRef
            };
        }
    }["Drawer.useMemo[refContext]"], [
        panelRef
    ]);
    // ============================ Render ============================
    if (!forceRender && !animatedVisible && !mergedOpen && destroyOnClose) {
        return null;
    }
    var eventHandlers = {
        onMouseEnter: onMouseEnter,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave,
        onClick: onClick,
        onKeyDown: onKeyDown,
        onKeyUp: onKeyUp
    };
    var drawerPopupProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, props), {}, {
        open: mergedOpen,
        prefixCls: prefixCls,
        placement: placement,
        autoFocus: autoFocus,
        keyboard: keyboard,
        width: width,
        mask: mask,
        maskClosable: maskClosable,
        inline: getContainer === false,
        afterOpenChange: internalAfterOpenChange,
        ref: popupRef
    }, eventHandlers);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$drawer$2f$es$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["RefContext"].Provider, {
        value: refContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$portal$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        open: mergedOpen || forceRender || animatedVisible,
        autoDestroy: false,
        getContainer: getContainer,
        autoLock: mask && (mergedOpen || animatedVisible)
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$drawer$2f$es$2f$DrawerPopup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], drawerPopupProps)));
};
if ("TURBOPACK compile-time truthy", 1) {
    Drawer.displayName = 'Drawer';
}
const __TURBOPACK__default__export__ = Drawer;
}),
"[project]/Downloads/One click/node_modules/rc-drawer/es/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// export this package's api
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$drawer$2f$es$2f$Drawer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-drawer/es/Drawer.js [client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$drawer$2f$es$2f$Drawer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Downloads/One click/node_modules/rc-motion/es/context.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Context",
    ()=>Context,
    "default",
    ()=>MotionProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
var _excluded = [
    "children"
];
;
var Context = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"]({});
function MotionProvider(_ref) {
    var children = _ref.children, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_ref, _excluded);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](Context.Provider, {
        value: props
    }, children);
}
}),
"[project]/Downloads/One click/node_modules/rc-motion/es/DomWrapper.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/createClass.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/inherits.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createSuper$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/createSuper.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
;
;
;
;
var DomWrapper = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(DomWrapper, _React$Component);
    var _super = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createSuper$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(DomWrapper);
    function DomWrapper() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(this, DomWrapper);
        return _super.apply(this, arguments);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(DomWrapper, [
        {
            key: "render",
            value: function render() {
                return this.props.children;
            }
        }
    ]);
    return DomWrapper;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Component"]);
const __TURBOPACK__default__export__ = DomWrapper;
}),
"[project]/Downloads/One click/node_modules/rc-motion/es/interface.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STATUS_APPEAR",
    ()=>STATUS_APPEAR,
    "STATUS_ENTER",
    ()=>STATUS_ENTER,
    "STATUS_LEAVE",
    ()=>STATUS_LEAVE,
    "STATUS_NONE",
    ()=>STATUS_NONE,
    "STEP_ACTIVATED",
    ()=>STEP_ACTIVATED,
    "STEP_ACTIVE",
    ()=>STEP_ACTIVE,
    "STEP_NONE",
    ()=>STEP_NONE,
    "STEP_PREPARE",
    ()=>STEP_PREPARE,
    "STEP_PREPARED",
    ()=>STEP_PREPARED,
    "STEP_START",
    ()=>STEP_START
]);
var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';
var STEP_NONE = 'none';
var STEP_PREPARE = 'prepare';
var STEP_START = 'start';
var STEP_ACTIVE = 'active';
var STEP_ACTIVATED = 'end';
var STEP_PREPARED = 'prepared';
}),
"[project]/Downloads/One click/node_modules/rc-motion/es/util/motion.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animationEndName",
    ()=>animationEndName,
    "getTransitionName",
    ()=>getTransitionName,
    "getVendorPrefixedEventName",
    ()=>getVendorPrefixedEventName,
    "getVendorPrefixes",
    ()=>getVendorPrefixes,
    "supportTransition",
    ()=>supportTransition,
    "transitionEndName",
    ()=>transitionEndName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Dom/canUseDom.js [client] (ecmascript)");
;
;
// ================= Transition =================
// Event wrapper. Copy from react source code
function makePrefixMap(styleProp, eventName) {
    var prefixes = {};
    prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
    prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
    prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
    prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
    prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
    return prefixes;
}
function getVendorPrefixes(domSupport, win) {
    var prefixes = {
        animationend: makePrefixMap('Animation', 'AnimationEnd'),
        transitionend: makePrefixMap('Transition', 'TransitionEnd')
    };
    if (domSupport) {
        if (!('AnimationEvent' in win)) {
            delete prefixes.animationend.animation;
        }
        if (!('TransitionEvent' in win)) {
            delete prefixes.transitionend.transition;
        }
    }
    return prefixes;
}
var vendorPrefixes = getVendorPrefixes((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(), typeof window !== 'undefined' ? window : {});
var style = {};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])()) {
    var _document$createEleme = document.createElement('div');
    style = _document$createEleme.style;
}
var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
    if (prefixedEventNames[eventName]) {
        return prefixedEventNames[eventName];
    }
    var prefixMap = vendorPrefixes[eventName];
    if (prefixMap) {
        var stylePropList = Object.keys(prefixMap);
        var len = stylePropList.length;
        for(var i = 0; i < len; i += 1){
            var styleProp = stylePropList[i];
            if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
                prefixedEventNames[eventName] = prefixMap[styleProp];
                return prefixedEventNames[eventName];
            }
        }
    }
    return '';
}
var internalAnimationEndName = getVendorPrefixedEventName('animationend');
var internalTransitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || 'animationend';
var transitionEndName = internalTransitionEndName || 'transitionend';
function getTransitionName(transitionName, transitionType) {
    if (!transitionName) return null;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(transitionName) === 'object') {
        var type = transitionType.replace(/-\w/g, function(match) {
            return match[1].toUpperCase();
        });
        return transitionName[type];
    }
    return "".concat(transitionName, "-").concat(transitionType);
}
}),
"[project]/Downloads/One click/node_modules/rc-motion/es/hooks/useDomMotionEvents.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$util$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/util/motion.js [client] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = function(onInternalMotionEnd) {
    var cacheElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])();
    // Remove events
    function removeMotionEvents(element) {
        if (element) {
            element.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$util$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__["transitionEndName"], onInternalMotionEnd);
            element.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$util$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__["animationEndName"], onInternalMotionEnd);
        }
    }
    // Patch events
    function patchMotionEvents(element) {
        if (cacheElementRef.current && cacheElementRef.current !== element) {
            removeMotionEvents(cacheElementRef.current);
        }
        if (element && element !== cacheElementRef.current) {
            element.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$util$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__["transitionEndName"], onInternalMotionEnd);
            element.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$util$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__["animationEndName"], onInternalMotionEnd);
            // Save as cache in case dom removed trigger by `motionDeadline`
            cacheElementRef.current = element;
        }
    }
    // Clean up when removed
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useEffect": function() {
            return ({
                "useEffect": function() {
                    removeMotionEvents(cacheElementRef.current);
                }
            })["useEffect"];
        }
    }["useEffect"], []);
    return [
        patchMotionEvents,
        removeMotionEvents
    ];
};
}),
"[project]/Downloads/One click/node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Dom/canUseDom.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
;
// It's safe to use `useLayoutEffect` but the warning is annoying
var useIsomorphicLayoutEffect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])() ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"];
const __TURBOPACK__default__export__ = useIsomorphicLayoutEffect;
}),
"[project]/Downloads/One click/node_modules/rc-motion/es/hooks/useNextFrame.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/raf.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = function() {
    var nextFrameRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](null);
    function cancelNextFrame() {
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].cancel(nextFrameRef.current);
    }
    function nextFrame(callback) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
        cancelNextFrame();
        var nextFrameId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(function() {
            if (delay <= 1) {
                callback({
                    isCanceled: function isCanceled() {
                        return nextFrameId !== nextFrameRef.current;
                    }
                });
            } else {
                nextFrame(callback, delay - 1);
            }
        });
        nextFrameRef.current = nextFrameId;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useEffect": function() {
            return ({
                "useEffect": function() {
                    cancelNextFrame();
                }
            })["useEffect"];
        }
    }["useEffect"], []);
    return [
        nextFrame,
        cancelNextFrame
    ];
};
}),
"[project]/Downloads/One click/node_modules/rc-motion/es/hooks/useStepQueue.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DoStep",
    ()=>DoStep,
    "SkipStep",
    ()=>SkipStep,
    "default",
    ()=>__TURBOPACK__default__export__,
    "isActive",
    ()=>isActive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useState$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useState.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/interface.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$hooks$2f$useNextFrame$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/hooks/useNextFrame.js [client] (ecmascript)");
;
;
;
;
;
;
var FULL_STEP_QUEUE = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_PREPARE"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_START"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_ACTIVE"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_ACTIVATED"]
];
var SIMPLE_STEP_QUEUE = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_PREPARE"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_PREPARED"]
];
var SkipStep = false;
var DoStep = true;
function isActive(step) {
    return step === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_ACTIVE"] || step === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_ACTIVATED"];
}
const __TURBOPACK__default__export__ = function(status, prepareOnly, callback) {
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useState$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_NONE"]), _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_useState, 2), step = _useState2[0], setStep = _useState2[1];
    var _useNextFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$hooks$2f$useNextFrame$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(), _useNextFrame2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_useNextFrame, 2), nextFrame = _useNextFrame2[0], cancelNextFrame = _useNextFrame2[1];
    function startQueue() {
        setStep(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_PREPARE"], true);
    }
    var STEP_QUEUE = prepareOnly ? SIMPLE_STEP_QUEUE : FULL_STEP_QUEUE;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "useIsomorphicLayoutEffect": function() {
            if (step !== __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_NONE"] && step !== __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_ACTIVATED"]) {
                var index = STEP_QUEUE.indexOf(step);
                var nextStep = STEP_QUEUE[index + 1];
                var result = callback(step);
                if (result === SkipStep) {
                    // Skip when no needed
                    setStep(nextStep, true);
                } else if (nextStep) {
                    // Do as frame for step update
                    nextFrame({
                        "useIsomorphicLayoutEffect": function(info) {
                            function doNext() {
                                // Skip since current queue is ood
                                if (info.isCanceled()) return;
                                setStep(nextStep, true);
                            }
                            if (result === true) {
                                doNext();
                            } else {
                                // Only promise should be async
                                Promise.resolve(result).then(doNext);
                            }
                        }
                    }["useIsomorphicLayoutEffect"]);
                }
            }
        }
    }["useIsomorphicLayoutEffect"], [
        status,
        step
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useEffect": function() {
            return ({
                "useEffect": function() {
                    cancelNextFrame();
                }
            })["useEffect"];
        }
    }["useEffect"], []);
    return [
        startQueue,
        step
    ];
};
}),
"[project]/Downloads/One click/node_modules/rc-motion/es/hooks/useStatus.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useEvent.js [client] (ecmascript) <export default as useEvent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useState$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useState.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useSyncState$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useSyncState.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/interface.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$hooks$2f$useDomMotionEvents$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/hooks/useDomMotionEvents.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$hooks$2f$useStepQueue$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/hooks/useStepQueue.js [client] (ecmascript)");
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
function useStatus(supportMotion, visible, getElement, _ref) {
    var _ref$motionEnter = _ref.motionEnter, motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter, _ref$motionAppear = _ref.motionAppear, motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear, _ref$motionLeave = _ref.motionLeave, motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave, motionDeadline = _ref.motionDeadline, motionLeaveImmediately = _ref.motionLeaveImmediately, onAppearPrepare = _ref.onAppearPrepare, onEnterPrepare = _ref.onEnterPrepare, onLeavePrepare = _ref.onLeavePrepare, onAppearStart = _ref.onAppearStart, onEnterStart = _ref.onEnterStart, onLeaveStart = _ref.onLeaveStart, onAppearActive = _ref.onAppearActive, onEnterActive = _ref.onEnterActive, onLeaveActive = _ref.onLeaveActive, onAppearEnd = _ref.onAppearEnd, onEnterEnd = _ref.onEnterEnd, onLeaveEnd = _ref.onLeaveEnd, onVisibleChanged = _ref.onVisibleChanged;
    // Used for outer render usage to avoid `visible: false & status: none` to render nothing
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useState$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(), _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_useState, 2), asyncVisible = _useState2[0], setAsyncVisible = _useState2[1];
    var _useSyncState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useSyncState$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_NONE"]), _useSyncState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_useSyncState, 2), getStatus = _useSyncState2[0], setStatus = _useSyncState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useState$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(null), _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_useState3, 2), style = _useState4[0], setStyle = _useState4[1];
    var currentStatus = getStatus();
    var mountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var deadlineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // =========================== Dom Node ===========================
    function getDomElement() {
        return getElement();
    }
    // ========================== Motion End ==========================
    var activeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    /**
   * Clean up status & style
   */ function updateMotionEndStatus() {
        setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_NONE"]);
        setStyle(null, true);
    }
    var onInternalMotionEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "useStatus.useEvent[onInternalMotionEnd]": function(event) {
            var status = getStatus();
            // Do nothing since not in any transition status.
            // This may happen when `motionDeadline` trigger.
            if (status === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_NONE"]) {
                return;
            }
            var element = getDomElement();
            if (event && !event.deadline && event.target !== element) {
                // event exists
                // not initiated by deadline
                // transitionEnd not fired by inner elements
                return;
            }
            var currentActive = activeRef.current;
            var canEnd;
            if (status === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_APPEAR"] && currentActive) {
                canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
            } else if (status === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_ENTER"] && currentActive) {
                canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
            } else if (status === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_LEAVE"] && currentActive) {
                canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
            }
            // Only update status when `canEnd` and not destroyed
            if (currentActive && canEnd !== false) {
                updateMotionEndStatus();
            }
        }
    }["useStatus.useEvent[onInternalMotionEnd]"]);
    var _useDomMotionEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$hooks$2f$useDomMotionEvents$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(onInternalMotionEnd), _useDomMotionEvents2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_useDomMotionEvents, 1), patchMotionEvents = _useDomMotionEvents2[0];
    // ============================= Step =============================
    var getEventHandlers = function getEventHandlers(targetStatus) {
        switch(targetStatus){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_APPEAR"]:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_PREPARE"], onAppearPrepare), __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_START"], onAppearStart), __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_ACTIVE"], onAppearActive);
            case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_ENTER"]:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_PREPARE"], onEnterPrepare), __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_START"], onEnterStart), __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_ACTIVE"], onEnterActive);
            case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_LEAVE"]:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_PREPARE"], onLeavePrepare), __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_START"], onLeaveStart), __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_ACTIVE"], onLeaveActive);
            default:
                return {};
        }
    };
    var eventHandlers = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useStatus.useMemo[eventHandlers]": function() {
            return getEventHandlers(currentStatus);
        }
    }["useStatus.useMemo[eventHandlers]"], [
        currentStatus
    ]);
    var _useStepQueue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$hooks$2f$useStepQueue$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(currentStatus, !supportMotion, {
        "useStatus.useStepQueue[_useStepQueue]": function(newStep) {
            // Only prepare step can be skip
            if (newStep === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_PREPARE"]) {
                var onPrepare = eventHandlers[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_PREPARE"]];
                if (!onPrepare) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$hooks$2f$useStepQueue$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SkipStep"];
                }
                return onPrepare(getDomElement());
            }
            // Rest step is sync update
            if (step in eventHandlers) {
                var _eventHandlers$step;
                setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
            }
            if (step === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_ACTIVE"] && currentStatus !== __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_NONE"]) {
                // Patch events when motion needed
                patchMotionEvents(getDomElement());
                if (motionDeadline > 0) {
                    clearTimeout(deadlineRef.current);
                    deadlineRef.current = setTimeout({
                        "useStatus.useStepQueue[_useStepQueue]": function() {
                            onInternalMotionEnd({
                                deadline: true
                            });
                        }
                    }["useStatus.useStepQueue[_useStepQueue]"], motionDeadline);
                }
            }
            if (step === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_PREPARED"]) {
                updateMotionEndStatus();
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$hooks$2f$useStepQueue$2e$js__$5b$client$5d$__$28$ecmascript$29$__["DoStep"];
        }
    }["useStatus.useStepQueue[_useStepQueue]"]), _useStepQueue2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_useStepQueue, 2), startStep = _useStepQueue2[0], step = _useStepQueue2[1];
    var active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$hooks$2f$useStepQueue$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isActive"])(step);
    activeRef.current = active;
    // ============================ Status ============================
    var visibleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Update with new status
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "useStatus.useIsomorphicLayoutEffect": function() {
            // When use Suspense, the `visible` will repeat trigger,
            // But not real change of the `visible`, we need to skip it.
            // https://github.com/ant-design/ant-design/issues/44379
            if (mountedRef.current && visibleRef.current === visible) {
                return;
            }
            setAsyncVisible(visible);
            var isMounted = mountedRef.current;
            mountedRef.current = true;
            // if (!supportMotion) {
            //   return;
            // }
            var nextStatus;
            // Appear
            if (!isMounted && visible && motionAppear) {
                nextStatus = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_APPEAR"];
            }
            // Enter
            if (isMounted && visible && motionEnter) {
                nextStatus = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_ENTER"];
            }
            // Leave
            if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
                nextStatus = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_LEAVE"];
            }
            var nextEventHandlers = getEventHandlers(nextStatus);
            // Update to next status
            if (nextStatus && (supportMotion || nextEventHandlers[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_PREPARE"]])) {
                setStatus(nextStatus);
                startStep();
            } else {
                // Set back in case no motion but prev status has prepare step
                setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_NONE"]);
            }
            visibleRef.current = visible;
        }
    }["useStatus.useIsomorphicLayoutEffect"], [
        visible
    ]);
    // ============================ Effect ============================
    // Reset when motion changed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStatus.useEffect": function() {
            if (// Cancel appear
            currentStatus === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_APPEAR"] && !motionAppear || // Cancel enter
            currentStatus === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_ENTER"] && !motionEnter || // Cancel leave
            currentStatus === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_LEAVE"] && !motionLeave) {
                setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_NONE"]);
            }
        }
    }["useStatus.useEffect"], [
        motionAppear,
        motionEnter,
        motionLeave
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStatus.useEffect": function() {
            return ({
                "useStatus.useEffect": function() {
                    mountedRef.current = false;
                    clearTimeout(deadlineRef.current);
                }
            })["useStatus.useEffect"];
        }
    }["useStatus.useEffect"], []);
    // Trigger `onVisibleChanged`
    var firstMountChangeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStatus.useEffect": function() {
            // [visible & motion not end] => [!visible & motion end] still need trigger onVisibleChanged
            if (asyncVisible) {
                firstMountChangeRef.current = true;
            }
            if (asyncVisible !== undefined && currentStatus === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_NONE"]) {
                // Skip first render is invisible since it's nothing changed
                if (firstMountChangeRef.current || asyncVisible) {
                    onVisibleChanged === null || onVisibleChanged === void 0 || onVisibleChanged(asyncVisible);
                }
                firstMountChangeRef.current = true;
            }
        }
    }["useStatus.useEffect"], [
        asyncVisible,
        currentStatus
    ]);
    // ============================ Styles ============================
    var mergedStyle = style;
    if (eventHandlers[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_PREPARE"]] && step === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_START"]) {
        mergedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
            transition: 'none'
        }, mergedStyle);
    }
    return [
        currentStatus,
        step,
        mergedStyle,
        asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible
    ];
}
}),
"[project]/Downloads/One click/node_modules/rc-motion/es/CSSMotion.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "genCSSMotion",
    ()=>genCSSMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [client] (ecmascript)");
/* eslint-disable react/default-props-match-prop-types, react/no-multi-comp, react/prop-types */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Dom/findDOMNode.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/ref.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$DomWrapper$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/DomWrapper.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$hooks$2f$useStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/hooks/useStatus.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$hooks$2f$useStepQueue$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/hooks/useStepQueue.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/interface.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$util$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/util/motion.js [client] (ecmascript)");
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
function genCSSMotion(config) {
    var transitionSupport = config;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(config) === 'object') {
        transitionSupport = config.transitionSupport;
    }
    function isSupportTransition(props, contextMotion) {
        return !!(props.motionName && transitionSupport && contextMotion !== false);
    }
    var CSSMotion = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](function(props, ref) {
        var _props$visible = props.visible, visible = _props$visible === void 0 ? true : _props$visible, _props$removeOnLeave = props.removeOnLeave, removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave, forceRender = props.forceRender, children = props.children, motionName = props.motionName, leavedClassName = props.leavedClassName, eventProps = props.eventProps;
        var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Context"]), contextMotion = _React$useContext.motion;
        var supportMotion = isSupportTransition(props, contextMotion);
        // Ref to the react node, it may be a HTMLElement
        var nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])();
        // Ref to the dom wrapper in case ref can not pass to HTMLElement
        var wrapperNodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])();
        function getDomElement() {
            try {
                // Here we're avoiding call for findDOMNode since it's deprecated
                // in strict mode. We're calling it only when node ref is not
                // an instance of DOM HTMLElement. Otherwise use
                // findDOMNode as a final resort
                return nodeRef.current instanceof HTMLElement ? nodeRef.current : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(wrapperNodeRef.current);
            } catch (e) {
                // Only happen when `motionDeadline` trigger but element removed.
                return null;
            }
        }
        var _useStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$hooks$2f$useStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(supportMotion, visible, getDomElement, props), _useStatus2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_useStatus, 4), status = _useStatus2[0], statusStep = _useStatus2[1], statusStyle = _useStatus2[2], mergedVisible = _useStatus2[3];
        // Record whether content has rendered
        // Will return null for un-rendered even when `removeOnLeave={false}`
        var renderedRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](mergedVisible);
        if (mergedVisible) {
            renderedRef.current = true;
        }
        // ====================== Refs ======================
        var setNodeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "genCSSMotion.CSSMotion.useCallback[setNodeRef]": function(node) {
                nodeRef.current = node;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__["fillRef"])(ref, node);
            }
        }["genCSSMotion.CSSMotion.useCallback[setNodeRef]"], [
            ref
        ]);
        // ===================== Render =====================
        var motionChildren;
        var mergedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, eventProps), {}, {
            visible: visible
        });
        if (!children) {
            // No children
            motionChildren = null;
        } else if (status === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_NONE"]) {
            // Stable children
            if (mergedVisible) {
                motionChildren = children((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, mergedProps), setNodeRef);
            } else if (!removeOnLeave && renderedRef.current && leavedClassName) {
                motionChildren = children((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, mergedProps), {}, {
                    className: leavedClassName
                }), setNodeRef);
            } else if (forceRender || !removeOnLeave && !leavedClassName) {
                motionChildren = children((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, mergedProps), {}, {
                    style: {
                        display: 'none'
                    }
                }), setNodeRef);
            } else {
                motionChildren = null;
            }
        } else {
            // In motion
            var statusSuffix;
            if (statusStep === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_PREPARE"]) {
                statusSuffix = 'prepare';
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$hooks$2f$useStepQueue$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isActive"])(statusStep)) {
                statusSuffix = 'active';
            } else if (statusStep === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$interface$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STEP_START"]) {
                statusSuffix = 'start';
            }
            var motionCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$util$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getTransitionName"])(motionName, "".concat(status, "-").concat(statusSuffix));
            motionChildren = children((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, mergedProps), {}, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$util$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getTransitionName"])(motionName, status), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, motionCls, motionCls && statusSuffix), motionName, typeof motionName === 'string')),
                style: statusStyle
            }), setNodeRef);
        }
        // Auto inject ref if child node not have `ref` props
        if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isValidElement"](motionChildren) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supportRef"])(motionChildren)) {
            var originNodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getNodeRef"])(motionChildren);
            if (!originNodeRef) {
                motionChildren = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cloneElement"](motionChildren, {
                    ref: setNodeRef
                });
            }
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$DomWrapper$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            ref: wrapperNodeRef
        }, motionChildren);
    });
    CSSMotion.displayName = 'CSSMotion';
    return CSSMotion;
}
const __TURBOPACK__default__export__ = genCSSMotion(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$util$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supportTransition"]);
}),
"[project]/Downloads/One click/node_modules/rc-motion/es/util/diff.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STATUS_ADD",
    ()=>STATUS_ADD,
    "STATUS_KEEP",
    ()=>STATUS_KEEP,
    "STATUS_REMOVE",
    ()=>STATUS_REMOVE,
    "STATUS_REMOVED",
    ()=>STATUS_REMOVED,
    "diffKeys",
    ()=>diffKeys,
    "parseKeys",
    ()=>parseKeys,
    "wrapKeyToObject",
    ()=>wrapKeyToObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [client] (ecmascript)");
;
;
var STATUS_ADD = 'add';
var STATUS_KEEP = 'keep';
var STATUS_REMOVE = 'remove';
var STATUS_REMOVED = 'removed';
function wrapKeyToObject(key) {
    var keyObj;
    if (key && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(key) === 'object' && 'key' in key) {
        keyObj = key;
    } else {
        keyObj = {
            key: key
        };
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, keyObj), {}, {
        key: String(keyObj.key)
    });
}
function parseKeys() {
    var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return keys.map(wrapKeyToObject);
}
function diffKeys() {
    var prevKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var list = [];
    var currentIndex = 0;
    var currentLen = currentKeys.length;
    var prevKeyObjects = parseKeys(prevKeys);
    var currentKeyObjects = parseKeys(currentKeys);
    // Check prev keys to insert or keep
    prevKeyObjects.forEach(function(keyObj) {
        var hit = false;
        for(var i = currentIndex; i < currentLen; i += 1){
            var currentKeyObj = currentKeyObjects[i];
            if (currentKeyObj.key === keyObj.key) {
                // New added keys should add before current key
                if (currentIndex < i) {
                    list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function(obj) {
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, obj), {}, {
                            status: STATUS_ADD
                        });
                    }));
                    currentIndex = i;
                }
                list.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, currentKeyObj), {}, {
                    status: STATUS_KEEP
                }));
                currentIndex += 1;
                hit = true;
                break;
            }
        }
        // If not hit, it means key is removed
        if (!hit) {
            list.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, keyObj), {}, {
                status: STATUS_REMOVE
            }));
        }
    });
    // Add rest to the list
    if (currentIndex < currentLen) {
        list = list.concat(currentKeyObjects.slice(currentIndex).map(function(obj) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, obj), {}, {
                status: STATUS_ADD
            });
        }));
    }
    /**
   * Merge same key when it remove and add again:
   *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
   */ var keys = {};
    list.forEach(function(_ref) {
        var key = _ref.key;
        keys[key] = (keys[key] || 0) + 1;
    });
    var duplicatedKeys = Object.keys(keys).filter(function(key) {
        return keys[key] > 1;
    });
    duplicatedKeys.forEach(function(matchKey) {
        // Remove `STATUS_REMOVE` node.
        list = list.filter(function(_ref2) {
            var key = _ref2.key, status = _ref2.status;
            return key !== matchKey || status !== STATUS_REMOVE;
        });
        // Update `STATUS_ADD` to `STATUS_KEEP`
        list.forEach(function(node) {
            if (node.key === matchKey) {
                // eslint-disable-next-line no-param-reassign
                node.status = STATUS_KEEP;
            }
        });
    });
    return list;
}
}),
"[project]/Downloads/One click/node_modules/rc-motion/es/CSSMotionList.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "genCSSMotionList",
    ()=>genCSSMotionList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/createClass.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/inherits.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createSuper$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/createSuper.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [client] (ecmascript)");
/* eslint react/prop-types: 0 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$CSSMotion$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/CSSMotion.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$util$2f$diff$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/util/diff.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$util$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/util/motion.js [client] (ecmascript)");
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
    "children",
    "onVisibleChanged",
    "onAllRemoved"
], _excluded2 = [
    "status"
];
;
;
;
;
var MOTION_PROP_NAMES = [
    'eventProps',
    'visible',
    'children',
    'motionName',
    'motionAppear',
    'motionEnter',
    'motionLeave',
    'motionLeaveImmediately',
    'motionDeadline',
    'removeOnLeave',
    'leavedClassName',
    'onAppearPrepare',
    'onAppearStart',
    'onAppearActive',
    'onAppearEnd',
    'onEnterStart',
    'onEnterActive',
    'onEnterEnd',
    'onLeaveStart',
    'onLeaveActive',
    'onLeaveEnd'
];
function genCSSMotionList(transitionSupport) {
    var CSSMotion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$CSSMotion$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
    var CSSMotionList = /*#__PURE__*/ function(_React$Component) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(CSSMotionList, _React$Component);
        var _super = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createSuper$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(CSSMotionList);
        function CSSMotionList() {
            var _this;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(this, CSSMotionList);
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [
                this
            ].concat(args));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_this), "state", {
                keyEntities: []
            });
            // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_this), "removeKey", function(removeKey) {
                _this.setState(function(prevState) {
                    var nextKeyEntities = prevState.keyEntities.map(function(entity) {
                        if (entity.key !== removeKey) return entity;
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, entity), {}, {
                            status: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$util$2f$diff$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_REMOVED"]
                        });
                    });
                    return {
                        keyEntities: nextKeyEntities
                    };
                }, function() {
                    var keyEntities = _this.state.keyEntities;
                    var restKeysCount = keyEntities.filter(function(_ref) {
                        var status = _ref.status;
                        return status !== __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$util$2f$diff$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_REMOVED"];
                    }).length;
                    if (restKeysCount === 0 && _this.props.onAllRemoved) {
                        _this.props.onAllRemoved();
                    }
                });
            });
            return _this;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(CSSMotionList, [
            {
                key: "render",
                value: function render() {
                    var _this2 = this;
                    var keyEntities = this.state.keyEntities;
                    var _this$props = this.props, component = _this$props.component, children = _this$props.children, _onVisibleChanged = _this$props.onVisibleChanged, onAllRemoved = _this$props.onAllRemoved, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_this$props, _excluded);
                    var Component = component || __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"];
                    var motionProps = {};
                    MOTION_PROP_NAMES.forEach(function(prop) {
                        motionProps[prop] = restProps[prop];
                        delete restProps[prop];
                    });
                    delete restProps.keys;
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](Component, restProps, keyEntities.map(function(_ref2, index) {
                        var status = _ref2.status, eventProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_ref2, _excluded2);
                        var visible = status === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$util$2f$diff$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_ADD"] || status === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$util$2f$diff$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_KEEP"];
                        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](CSSMotion, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, motionProps, {
                            key: eventProps.key,
                            visible: visible,
                            eventProps: eventProps,
                            onVisibleChanged: function onVisibleChanged(changedVisible) {
                                _onVisibleChanged === null || _onVisibleChanged === void 0 || _onVisibleChanged(changedVisible, {
                                    key: eventProps.key
                                });
                                if (!changedVisible) {
                                    _this2.removeKey(eventProps.key);
                                }
                            }
                        }), function(props, ref) {
                            return children((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, props), {}, {
                                index: index
                            }), ref);
                        });
                    }));
                }
            }
        ], [
            {
                key: "getDerivedStateFromProps",
                value: function getDerivedStateFromProps(_ref3, _ref4) {
                    var keys = _ref3.keys;
                    var keyEntities = _ref4.keyEntities;
                    var parsedKeyObjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$util$2f$diff$2e$js__$5b$client$5d$__$28$ecmascript$29$__["parseKeys"])(keys);
                    var mixedKeyEntities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$util$2f$diff$2e$js__$5b$client$5d$__$28$ecmascript$29$__["diffKeys"])(keyEntities, parsedKeyObjects);
                    return {
                        keyEntities: mixedKeyEntities.filter(function(entity) {
                            var prevEntity = keyEntities.find(function(_ref5) {
                                var key = _ref5.key;
                                return entity.key === key;
                            });
                            // Remove if already mark as removed
                            if (prevEntity && prevEntity.status === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$util$2f$diff$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_REMOVED"] && entity.status === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$util$2f$diff$2e$js__$5b$client$5d$__$28$ecmascript$29$__["STATUS_REMOVE"]) {
                                return false;
                            }
                            return true;
                        })
                    };
                }
            }
        ]);
        return CSSMotionList;
    }(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Component"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(CSSMotionList, "defaultProps", {
        component: 'div'
    });
    return CSSMotionList;
}
const __TURBOPACK__default__export__ = genCSSMotionList(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$util$2f$motion$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supportTransition"]);
}),
"[project]/Downloads/One click/node_modules/rc-motion/es/index.js [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$CSSMotion$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/CSSMotion.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$CSSMotionList$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/CSSMotionList.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/context.js [client] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$CSSMotion$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Downloads/One click/node_modules/rc-motion/es/context.js [client] (ecmascript) <export default as Provider>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Provider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/context.js [client] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/@emotion/hash/dist/hash.browser.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable */ // Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function murmur2(str) {
    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.
    // const m = 0x5bd1e995;
    // const r = 24;
    // Initialize the hash
    var h = 0; // Mix 4 bytes at a time into the hash
    var k, i = 0, len = str.length;
    for(; len >= 4; ++i, len -= 4){
        k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
        k = /* Math.imul(k, m): */ (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
        k ^= /* k >>> r: */ k >>> 24;
        h = /* Math.imul(k, m): */ (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Handle the last few bytes of the input array
    switch(len){
        case 3:
            h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
        case 2:
            h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
        case 1:
            h ^= str.charCodeAt(i) & 0xff;
            h = /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.
    h ^= h >>> 13;
    h = /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
}
const __TURBOPACK__default__export__ = murmur2;
}),
"[project]/Downloads/One click/node_modules/@emotion/unitless/dist/unitless.browser.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
};
const __TURBOPACK__default__export__ = unitlessKeys;
}),
"[project]/Downloads/One click/node_modules/stylis/src/Enum.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHARSET",
    ()=>CHARSET,
    "COMMENT",
    ()=>COMMENT,
    "COUNTER_STYLE",
    ()=>COUNTER_STYLE,
    "DECLARATION",
    ()=>DECLARATION,
    "DOCUMENT",
    ()=>DOCUMENT,
    "FONT_FACE",
    ()=>FONT_FACE,
    "FONT_FEATURE_VALUES",
    ()=>FONT_FEATURE_VALUES,
    "IMPORT",
    ()=>IMPORT,
    "KEYFRAMES",
    ()=>KEYFRAMES,
    "LAYER",
    ()=>LAYER,
    "MEDIA",
    ()=>MEDIA,
    "MOZ",
    ()=>MOZ,
    "MS",
    ()=>MS,
    "NAMESPACE",
    ()=>NAMESPACE,
    "PAGE",
    ()=>PAGE,
    "RULESET",
    ()=>RULESET,
    "SCOPE",
    ()=>SCOPE,
    "SUPPORTS",
    ()=>SUPPORTS,
    "VIEWPORT",
    ()=>VIEWPORT,
    "WEBKIT",
    ()=>WEBKIT
]);
var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';
var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var PAGE = '@page';
var MEDIA = '@media';
var IMPORT = '@import';
var CHARSET = '@charset';
var VIEWPORT = '@viewport';
var SUPPORTS = '@supports';
var DOCUMENT = '@document';
var NAMESPACE = '@namespace';
var KEYFRAMES = '@keyframes';
var FONT_FACE = '@font-face';
var COUNTER_STYLE = '@counter-style';
var FONT_FEATURE_VALUES = '@font-feature-values';
var LAYER = '@layer';
var SCOPE = '@scope';
}),
"[project]/Downloads/One click/node_modules/stylis/src/Utility.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @param {number}
 * @return {number}
 */ __turbopack_context__.s([
    "abs",
    ()=>abs,
    "append",
    ()=>append,
    "assign",
    ()=>assign,
    "charat",
    ()=>charat,
    "combine",
    ()=>combine,
    "filter",
    ()=>filter,
    "from",
    ()=>from,
    "hash",
    ()=>hash,
    "indexof",
    ()=>indexof,
    "match",
    ()=>match,
    "replace",
    ()=>replace,
    "sizeof",
    ()=>sizeof,
    "strlen",
    ()=>strlen,
    "substr",
    ()=>substr,
    "trim",
    ()=>trim
]);
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length) {
    return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
    return value.trim();
}
function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
}
function indexof(value, search, position) {
    return value.indexOf(search, position);
}
function charat(value, index) {
    return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
    return value.slice(begin, end);
}
function strlen(value) {
    return value.length;
}
function sizeof(value) {
    return value.length;
}
function append(value, array) {
    return array.push(value), value;
}
function combine(array, callback) {
    return array.map(callback).join('');
}
function filter(array, pattern) {
    return array.filter(function(value) {
        return !match(value, pattern);
    });
}
}),
"[project]/Downloads/One click/node_modules/stylis/src/Tokenizer.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alloc",
    ()=>alloc,
    "caret",
    ()=>caret,
    "char",
    ()=>char,
    "character",
    ()=>character,
    "characters",
    ()=>characters,
    "column",
    ()=>column,
    "commenter",
    ()=>commenter,
    "copy",
    ()=>copy,
    "dealloc",
    ()=>dealloc,
    "delimit",
    ()=>delimit,
    "delimiter",
    ()=>delimiter,
    "escaping",
    ()=>escaping,
    "identifier",
    ()=>identifier,
    "length",
    ()=>length,
    "lift",
    ()=>lift,
    "line",
    ()=>line,
    "next",
    ()=>next,
    "node",
    ()=>node,
    "peek",
    ()=>peek,
    "position",
    ()=>position,
    "prev",
    ()=>prev,
    "slice",
    ()=>slice,
    "token",
    ()=>token,
    "tokenize",
    ()=>tokenize,
    "tokenizer",
    ()=>tokenizer,
    "whitespace",
    ()=>whitespace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/stylis/src/Utility.js [client] (ecmascript)");
;
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';
function node(value, root, parent, type, props, children, length, siblings) {
    return {
        value: value,
        root: root,
        parent: parent,
        type: type,
        props: props,
        children: children,
        line: line,
        column: column,
        length: length,
        return: '',
        siblings: siblings
    };
}
function copy(root, props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["assign"])(node('', null, null, '', null, null, 0, root.siblings), root, {
        length: -root.length
    }, props);
}
function lift(root) {
    while(root.root)root = copy(root.root, {
        children: [
            root
        ]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["append"])(root, root.siblings);
}
function char() {
    return character;
}
function prev() {
    character = position > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(characters, --position) : 0;
    if (column--, character === 10) column = 1, line--;
    return character;
}
function next() {
    character = position < length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(characters, position++) : 0;
    if (column++, character === 10) column = 1, line++;
    return character;
}
function peek() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(characters, position);
}
function caret() {
    return position;
}
function slice(begin, end) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["substr"])(characters, begin, end);
}
function token(type) {
    switch(type){
        // \0 \t \n \r \s whitespace token
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        // ! + , / > @ ~ isolate token
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        // ; { } breakpoint token
        case 59:
        case 123:
        case 125:
            return 4;
        // : accompanied token
        case 58:
            return 3;
        // " ' ( [ opening delimit token
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        // ) ] closing delimit token
        case 41:
        case 93:
            return 1;
    }
    return 0;
}
function alloc(value) {
    return line = column = 1, length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(characters = value), position = 0, [];
}
function dealloc(value) {
    return characters = '', value;
}
function delimit(type) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["trim"])(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function tokenize(value) {
    return dealloc(tokenizer(alloc(value)));
}
function whitespace(type) {
    while(character = peek())if (character < 33) next();
    else break;
    return token(type) > 2 || token(character) > 3 ? '' : ' ';
}
function tokenizer(children) {
    while(next())switch(token(character)){
        case 0:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["append"])(identifier(position - 1), children);
            break;
        case 2:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["append"])(delimit(character), children);
            break;
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["append"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["from"])(character), children);
    }
    return children;
}
function escaping(index, count) {
    while(--count && next())// not 0-9 A-F a-f
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
    return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
    while(next())switch(character){
        // ] ) " '
        case type:
            return position;
        // " '
        case 34:
        case 39:
            if (type !== 34 && type !== 39) delimiter(character);
            break;
        // (
        case 40:
            if (type === 41) delimiter(type);
            break;
        // \
        case 92:
            next();
            break;
    }
    return position;
}
function commenter(type, index) {
    while(next())// //
    if (type + character === 47 + 10) break;
    else if (type + character === 42 + 42 && peek() === 47) break;
    return '/*' + slice(index, position - 1) + '*' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["from"])(type === 47 ? type : next());
}
function identifier(index) {
    while(!token(peek()))next();
    return slice(index, position);
}
}),
"[project]/Downloads/One click/node_modules/stylis/src/Parser.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "comment",
    ()=>comment,
    "compile",
    ()=>compile,
    "declaration",
    ()=>declaration,
    "parse",
    ()=>parse,
    "ruleset",
    ()=>ruleset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/stylis/src/Enum.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/stylis/src/Utility.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/stylis/src/Tokenizer.js [client] (ecmascript)");
;
;
;
function compile(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["dealloc"])(parse('', null, null, null, [
        ''
    ], value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["alloc"])(value), 0, [
        0
    ], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character = 0;
    var type = '';
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters = type;
    while(scanning)switch(previous = character, character = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["next"])()){
        // (
        case 40:
            if (previous != 108 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(characters, length - 1) == 58) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["indexof"])(characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["delimit"])(character), '&', '&\f'), '&\f', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["abs"])(index ? points[index - 1] : 0)) != -1) ampersand = -1;
                break;
            }
        // " ' [
        case 34:
        case 39:
        case 91:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["delimit"])(character);
            break;
        // \t \n \r \s
        case 9:
        case 10:
        case 13:
        case 32:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["whitespace"])(previous);
            break;
        // \
        case 92:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["escaping"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["caret"])() - 1, 7);
            continue;
        // /
        case 47:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["peek"])()){
                case 42:
                case 47:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["append"])(comment((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["commenter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["next"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["caret"])()), root, parent, declarations), declarations);
                    if (((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["token"])(previous || 1) == 5 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["token"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["peek"])() || 1) == 5) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(characters) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["substr"])(characters, -1, void 0) !== ' ') characters += ' ';
                    break;
                default:
                    characters += '/';
            }
            break;
        // {
        case 123 * variable:
            points[index++] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(characters) * ampersand;
        // } ; \0
        case 125 * variable:
        case 59:
        case 0:
            switch(character){
                // \0 }
                case 0:
                case 125:
                    scanning = 0;
                // ;
                case 59 + offset:
                    if (ampersand == -1) characters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(characters, /\f/g, '');
                    if (property > 0 && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(characters) - length || variable === 0 && previous === 47)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["append"])(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations);
                    break;
                // @ ;
                case 59:
                    characters += ';';
                // { rule/at-rule
                default:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["append"])(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets);
                    if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);
                    else {
                        switch(atrule){
                            // c(ontainer)
                            case 99:
                                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(characters, 3) === 110) break;
                            // l(ayer)
                            case 108:
                                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["charat"])(characters, 2) === 97) break;
                            default:
                                offset = 0;
                            // d(ocument) m(edia) s(upports)
                            case 100:
                            case 109:
                            case 115:
                        }
                        if (offset) parse(value, reference, reference, rule && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["append"])(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children);
                        else parse(characters, reference, reference, reference, [
                            ''
                        ], children, 0, points, children);
                    }
            }
            index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
            break;
        // :
        case 58:
            length = 1 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(characters), property = previous;
        default:
            if (variable < 1) {
                if (character == 123) --variable;
                else if (character == 125 && variable++ == 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["prev"])() == 125) continue;
            }
            switch(characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["from"])(character), character * variable){
                // &
                case 38:
                    ampersand = offset > 0 ? 1 : (characters += '\f', -1);
                    break;
                // ,
                case 44:
                    points[index++] = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(characters) - 1) * ampersand, ampersand = 1;
                    break;
                // @
                case 64:
                    // -
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["peek"])() === 45) characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["delimit"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["next"])());
                    atrule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["peek"])(), offset = length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(type = characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["identifier"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["caret"])())), character++;
                    break;
                // -
                case 45:
                    if (previous === 45 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(characters) == 2) variable = 0;
            }
    }
    return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [
        ''
    ];
    var size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sizeof"])(rule);
    for(var i = 0, j = 0, k = 0; i < index; ++i)for(var x = 0, y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["substr"])(value, post + 1, post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["abs"])(j = points[i])), z = value; x < size; ++x)if (z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["trim"])(j > 0 ? rule[x] + ' ' + y : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["replace"])(y, /&\f/g, rule[x]))) props[k++] = z;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["node"])(value, root, parent, offset === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["RULESET"] : type, props, children, length, siblings);
}
function comment(value, root, parent, siblings) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["node"])(value, root, parent, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["COMMENT"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["from"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["char"])()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["substr"])(value, 2, -2), 0, siblings);
}
function declaration(value, root, parent, length, siblings) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["node"])(value, root, parent, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["DECLARATION"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["substr"])(value, 0, length), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["substr"])(value, length + 1, -1), length, siblings);
}
}),
"[project]/Downloads/One click/node_modules/stylis/src/Serializer.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serialize",
    ()=>serialize,
    "stringify",
    ()=>stringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/stylis/src/Enum.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/stylis/src/Utility.js [client] (ecmascript)");
;
;
function serialize(children, callback) {
    var output = '';
    for(var i = 0; i < children.length; i++)output += callback(children[i], i, children, callback) || '';
    return output;
}
function stringify(element, index, children, callback) {
    switch(element.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["LAYER"]:
            if (element.children.length) break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["IMPORT"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["NAMESPACE"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["DECLARATION"]:
            return element.return = element.return || element.value;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["COMMENT"]:
            return '';
        case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["KEYFRAMES"]:
            return element.return = element.value + '{' + serialize(element.children, callback) + '}';
        case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$client$5d$__$28$ecmascript$29$__["RULESET"]:
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(element.value = element.props.join(','))) return '';
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["strlen"])(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : '';
}
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/Context.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
var IconContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"])({});
const __TURBOPACK__default__export__ = IconContext;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/utils.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generate",
    ()=>generate,
    "getSecondaryColor",
    ()=>getSecondaryColor,
    "iconStyles",
    ()=>iconStyles,
    "isIconDefinition",
    ()=>isIconDefinition,
    "normalizeAttrs",
    ()=>normalizeAttrs,
    "normalizeTwoToneColors",
    ()=>normalizeTwoToneColors,
    "svgBaseProps",
    ()=>svgBaseProps,
    "useInsertStyles",
    ()=>useInsertStyles,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/colors/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/colors/es/generate.js [client] (ecmascript) <export default as generate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$dynamicCSS$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Dom/dynamicCSS.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$shadow$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Dom/shadow.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/warning.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$Context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/Context.js [client] (ecmascript)");
;
;
;
;
;
;
;
;
function camelCase(input) {
    return input.replace(/-(.)/g, function(match, g) {
        return g.toUpperCase();
    });
}
function warning(valid, message) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(target.icon) === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.keys(attrs).reduce(function(acc, key) {
        var val = attrs[key];
        switch(key){
            case 'class':
                acc.className = val;
                delete acc.class;
                break;
            default:
                delete acc[key];
                acc[camelCase(key)] = val;
        }
        return acc;
    }, {});
}
function generate(node, key, rootProps) {
    if (!rootProps) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(node.tag, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
            key: key
        }, normalizeAttrs(node.attrs)), (node.children || []).map(function(child, index) {
            return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
        }));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(node.tag, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        key: key
    }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function(child, index) {
        return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
}
function getSecondaryColor(primaryColor) {
    // choose the second color
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__["generate"])(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
    if (!twoToneColor) {
        return [];
    }
    return Array.isArray(twoToneColor) ? twoToneColor : [
        twoToneColor
    ];
}
var svgBaseProps = {
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true',
    focusable: 'false'
};
var iconStyles = "\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles(eleRef) {
    var _useContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$Context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]), csp = _useContext.csp, prefixCls = _useContext.prefixCls, layer = _useContext.layer;
    var mergedStyleStr = iconStyles;
    if (prefixCls) {
        mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
    }
    if (layer) {
        mergedStyleStr = "@layer ".concat(layer, " {\n").concat(mergedStyleStr, "\n}");
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInsertStyles.useEffect": function() {
            var ele = eleRef.current;
            var shadowRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$shadow$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getShadowRoot"])(ele);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$dynamicCSS$2e$js__$5b$client$5d$__$28$ecmascript$29$__["updateCSS"])(mergedStyleStr, '@ant-design-icons', {
                prepend: !layer,
                csp: csp,
                attachTo: shadowRoot
            });
        }
    }["useInsertStyles.useEffect"], []);
};
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/IconBase.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/utils.js [client] (ecmascript)");
;
;
var _excluded = [
    "icon",
    "className",
    "onClick",
    "style",
    "primaryColor",
    "secondaryColor"
];
;
;
var twoToneColorPalette = {
    primaryColor: '#333',
    secondaryColor: '#E6E6E6',
    calculated: false
};
function setTwoToneColors(_ref) {
    var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
    twoToneColorPalette.primaryColor = primaryColor;
    twoToneColorPalette.secondaryColor = secondaryColor || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getSecondaryColor"])(primaryColor);
    twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, twoToneColorPalette);
}
var IconBase = function IconBase(props) {
    var icon = props.icon, className = props.className, onClick = props.onClick, style = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    var svgRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"]();
    var colors = twoToneColorPalette;
    if (primaryColor) {
        colors = {
            primaryColor: primaryColor,
            secondaryColor: secondaryColor || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getSecondaryColor"])(primaryColor)
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useInsertStyles"])(svgRef);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["warning"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isIconDefinition"])(icon), "icon should be icon definiton, but got ".concat(icon));
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isIconDefinition"])(icon)) {
        return null;
    }
    var target = icon;
    if (target && typeof target.icon === 'function') {
        target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, target), {}, {
            icon: target.icon(colors.primaryColor, colors.secondaryColor)
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["generate"])(target.icon, "svg-".concat(target.name), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        className: className,
        onClick: onClick,
        style: style,
        'data-icon': target.name,
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        'aria-hidden': 'true'
    }, restProps), {}, {
        ref: svgRef
    }));
};
IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
const __TURBOPACK__default__export__ = IconBase;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTwoToneColor",
    ()=>getTwoToneColor,
    "setTwoToneColor",
    ()=>setTwoToneColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$IconBase$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/IconBase.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/utils.js [client] (ecmascript)");
;
;
;
function setTwoToneColor(twoToneColor) {
    var _normalizeTwoToneColo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["normalizeTwoToneColors"])(twoToneColor), _normalizeTwoToneColo2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$IconBase$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].setTwoToneColors({
        primaryColor: primaryColor,
        secondaryColor: secondaryColor
    });
}
function getTwoToneColor() {
    var colors = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$IconBase$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].getTwoToneColors();
    if (!colors.calculated) {
        return colors.primaryColor;
    }
    return [
        colors.primaryColor,
        colors.secondaryColor
    ];
}
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/colors/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/colors/es/presets.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$Context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/Context.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$IconBase$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/IconBase.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$twoTonePrimaryColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/utils.js [client] (ecmascript)");
'use client';
;
;
;
;
var _excluded = [
    "className",
    "icon",
    "spin",
    "rotate",
    "tabIndex",
    "onClick",
    "twoToneColor"
];
;
;
;
;
;
;
;
// Initial setting
// should move it to antd main repo?
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$twoTonePrimaryColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["setTwoToneColor"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$client$5d$__$28$ecmascript$29$__["blue"].primary);
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34757#issuecomment-488848720
var Icon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](function(props, ref) {
    var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$Context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre, rootClassName = _React$useContext.rootClassName;
    var classString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(rootClassName, prefixCls, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), "".concat(prefixCls, "-spin"), !!spin || icon.name === 'loading'), className);
    var iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) {
        iconTabIndex = -1;
    }
    var svgStyle = rotate ? {
        msTransform: "rotate(".concat(rotate, "deg)"),
        transform: "rotate(".concat(rotate, "deg)")
    } : undefined;
    var _normalizeTwoToneColo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["normalizeTwoToneColors"])(twoToneColor), _normalizeTwoToneColo2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("span", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        role: "img",
        "aria-label": icon.name
    }, restProps, {
        ref: ref,
        tabIndex: iconTabIndex,
        onClick: onClick,
        className: classString
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$IconBase$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        icon: icon,
        primaryColor: primaryColor,
        secondaryColor: secondaryColor,
        style: svgStyle
    }));
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$twoTonePrimaryColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getTwoToneColor"];
Icon.setTwoToneColor = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$twoTonePrimaryColor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["setTwoToneColor"];
const __TURBOPACK__default__export__ = Icon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$CloseOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/CloseOutlined.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [client] (ecmascript)");
;
;
;
;
var CloseOutlined = function CloseOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$CloseOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![close](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdmlld0JveD0iNjQgNjQgODk2IDg5NiIgZm9jdXNhYmxlPSJmYWxzZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNzk5Ljg2IDE2Ni4zMWMuMDIgMCAuMDQuMDIuMDguMDZsNTcuNjkgNTcuN2MuMDQuMDMuMDUuMDUuMDYuMDhhLjEyLjEyIDAgMDEwIC4wNmMwIC4wMy0uMDIuMDUtLjA2LjA5TDU2OS45MyA1MTJsMjg3LjcgMjg3LjdjLjA0LjA0LjA1LjA2LjA2LjA5YS4xMi4xMiAwIDAxMCAuMDdjMCAuMDItLjAyLjA0LS4wNi4wOGwtNTcuNyA1Ny42OWMtLjAzLjA0LS4wNS4wNS0uMDcuMDZhLjEyLjEyIDAgMDEtLjA3IDBjLS4wMyAwLS4wNS0uMDItLjA5LS4wNkw1MTIgNTY5LjkzbC0yODcuNyAyODcuN2MtLjA0LjA0LS4wNi4wNS0uMDkuMDZhLjEyLjEyIDAgMDEtLjA3IDBjLS4wMiAwLS4wNC0uMDItLjA4LS4wNmwtNTcuNjktNTcuN2MtLjA0LS4wMy0uMDUtLjA1LS4wNi0uMDdhLjEyLjEyIDAgMDEwLS4wN2MwLS4wMy4wMi0uMDUuMDYtLjA5TDQ1NC4wNyA1MTJsLTI4Ny43LTI4Ny43Yy0uMDQtLjA0LS4wNS0uMDYtLjA2LS4wOWEuMTIuMTIgMCAwMTAtLjA3YzAtLjAyLjAyLS4wNC4wNi0uMDhsNTcuNy01Ny42OWMuMDMtLjA0LjA1LS4wNS4wNy0uMDZhLjEyLjEyIDAgMDEuMDcgMGMuMDMgMCAuMDUuMDIuMDkuMDZMNTEyIDQ1NC4wN2wyODcuNy0yODcuN2MuMDQtLjA0LjA2LS4wNS4wOS0uMDZhLjEyLjEyIDAgMDEuMDcgMHoiIC8+PC9zdmc+) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](CloseOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'CloseOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$LoadingOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/LoadingOutlined.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [client] (ecmascript)");
;
;
;
;
var LoadingOutlined = function LoadingOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$LoadingOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![loading](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTk4OCA1NDhjLTE5LjkgMC0zNi0xNi4xLTM2LTM2IDAtNTkuNC0xMS42LTExNy0zNC42LTE3MS4zYTQ0MC40NSA0NDAuNDUgMCAwMC05NC4zLTEzOS45IDQzNy43MSA0MzcuNzEgMCAwMC0xMzkuOS05NC4zQzYyOSA4My42IDU3MS40IDcyIDUxMiA3MmMtMTkuOSAwLTM2LTE2LjEtMzYtMzZzMTYuMS0zNiAzNi0zNmM2OS4xIDAgMTM2LjIgMTMuNSAxOTkuMyA0MC4zQzc3Mi4zIDY2IDgyNyAxMDMgODc0IDE1MGM0NyA0NyA4My45IDEwMS44IDEwOS43IDE2Mi43IDI2LjcgNjMuMSA0MC4yIDEzMC4yIDQwLjIgMTk5LjMuMSAxOS45LTE2IDM2LTM1LjkgMzZ6IiAvPjwvc3ZnPg==) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](LoadingOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'LoadingOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/RightOutlined.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$RightOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/RightOutlined.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [client] (ecmascript)");
;
;
;
;
var RightOutlined = function RightOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$RightOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![right](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTc2NS43IDQ4Ni44TDMxNC45IDEzNC43QTcuOTcgNy45NyAwIDAwMzAyIDE0MXY3Ny4zYzAgNC45IDIuMyA5LjYgNi4xIDEyLjZsMzYwIDI4MS4xLTM2MCAyODEuMWMtMy45IDMtNi4xIDcuNy02LjEgMTIuNlY4ODNjMCA2LjcgNy43IDEwLjQgMTIuOSA2LjNsNDUwLjgtMzUyLjFhMzEuOTYgMzEuOTYgMCAwMDAtNTAuNHoiIC8+PC9zdmc+) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](RightOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'RightOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/BarsOutlined.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$BarsOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/BarsOutlined.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [client] (ecmascript)");
;
;
;
;
var BarsOutlined = function BarsOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$BarsOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![bars](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkxMiAxOTJIMzI4Yy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4aDU4NGM0LjQgMCA4LTMuNiA4LTh2LTU2YzAtNC40LTMuNi04LTgtOHptMCAyODRIMzI4Yy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4aDU4NGM0LjQgMCA4LTMuNiA4LTh2LTU2YzAtNC40LTMuNi04LTgtOHptMCAyODRIMzI4Yy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4aDU4NGM0LjQgMCA4LTMuNiA4LTh2LTU2YzAtNC40LTMuNi04LTgtOHpNMTA0IDIyOGE1NiA1NiAwIDEwMTEyIDAgNTYgNTYgMCAxMC0xMTIgMHptMCAyODRhNTYgNTYgMCAxMDExMiAwIDU2IDU2IDAgMTAtMTEyIDB6bTAgMjg0YTU2IDU2IDAgMTAxMTIgMCA1NiA1NiAwIDEwLTExMiAweiIgLz48L3N2Zz4=) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](BarsOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'BarsOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/LeftOutlined.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$LeftOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/LeftOutlined.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [client] (ecmascript)");
;
;
;
;
var LeftOutlined = function LeftOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$LeftOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![left](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcyNCAyMTguM1YxNDFjMC02LjctNy43LTEwLjQtMTIuOS02LjNMMjYwLjMgNDg2LjhhMzEuODYgMzEuODYgMCAwMDAgNTAuM2w0NTAuOCAzNTIuMWM1LjMgNC4xIDEyLjkuNCAxMi45LTYuM3YtNzcuM2MwLTQuOS0yLjMtOS42LTYuMS0xMi42bC0zNjAtMjgxIDM2MC0yODEuMWMzLjgtMyA2LjEtNy43IDYuMS0xMi42eiIgLz48L3N2Zz4=) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](LeftOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'LeftOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$EllipsisOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons-svg/es/asn/EllipsisOutlined.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js [client] (ecmascript)");
;
;
;
;
var EllipsisOutlined = function EllipsisOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$EllipsisOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![ellipsis](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3NiA1MTFhNTYgNTYgMCAxMDExMiAwIDU2IDU2IDAgMTAtMTEyIDB6bTI4MCAwYTU2IDU2IDAgMTAxMTIgMCA1NiA1NiAwIDEwLTExMiAwem0yODAgMGE1NiA1NiAwIDEwMTEyIDAgNTYgNTYgMCAxMC0xMTIgMHoiIC8+PC9zdmc+) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](EllipsisOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'EllipsisOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Downloads/One click/node_modules/rc-pagination/es/locale/en_US.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var locale = {
    // Options
    items_per_page: '/ page',
    jump_to: 'Go to',
    jump_to_confirm: 'confirm',
    page: 'Page',
    // Pagination
    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
    page_size: 'Page Size'
};
const __TURBOPACK__default__export__ = locale;
}),
"[project]/Downloads/One click/node_modules/rc-picker/es/locale/common.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "commonLocale",
    ()=>commonLocale
]);
var commonLocale = {
    yearFormat: 'YYYY',
    dayFormat: 'D',
    cellMeridiemFormat: 'A',
    monthBeforeYear: true
};
}),
"[project]/Downloads/One click/node_modules/rc-picker/es/locale/en_US.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$picker$2f$es$2f$locale$2f$common$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-picker/es/locale/common.js [client] (ecmascript)");
;
;
var locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$picker$2f$es$2f$locale$2f$common$2e$js__$5b$client$5d$__$28$ecmascript$29$__["commonLocale"]), {}, {
    locale: 'en_US',
    today: 'Today',
    now: 'Now',
    backToToday: 'Back to today',
    ok: 'OK',
    clear: 'Clear',
    week: 'Week',
    month: 'Month',
    year: 'Year',
    timeSelect: 'select time',
    dateSelect: 'select date',
    weekSelect: 'Choose a week',
    monthSelect: 'Choose a month',
    yearSelect: 'Choose a year',
    decadeSelect: 'Choose a decade',
    dateFormat: 'M/D/YYYY',
    dateTimeFormat: 'M/D/YYYY HH:mm:ss',
    previousMonth: 'Previous month (PageUp)',
    nextMonth: 'Next month (PageDown)',
    previousYear: 'Last year (Control + left)',
    nextYear: 'Next year (Control + right)',
    previousDecade: 'Last decade',
    nextDecade: 'Next decade',
    previousCentury: 'Last century',
    nextCentury: 'Next century'
});
const __TURBOPACK__default__export__ = locale;
}),
"[project]/Downloads/One click/node_modules/rc-collapse/es/PanelContent.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
;
;
;
var PanelContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function(props, ref) {
    var prefixCls = props.prefixCls, forceRender = props.forceRender, className = props.className, style = props.style, children = props.children, isActive = props.isActive, role = props.role, customizeClassNames = props.classNames, styles = props.styles;
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useState(isActive || forceRender), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), rendered = _React$useState2[0], setRendered = _React$useState2[1];
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "PanelContent.useEffect": function() {
            if (forceRender || isActive) {
                setRendered(true);
            }
        }
    }["PanelContent.useEffect"], [
        forceRender,
        isActive
    ]);
    if (!rendered) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-content"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-content-active"), isActive), "".concat(prefixCls, "-content-inactive"), !isActive), className),
        style: style,
        role: role
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-content-box"), customizeClassNames === null || customizeClassNames === void 0 ? void 0 : customizeClassNames.body),
        style: styles === null || styles === void 0 ? void 0 : styles.body
    }, children));
});
PanelContent.displayName = 'PanelContent';
const __TURBOPACK__default__export__ = PanelContent;
}),
"[project]/Downloads/One click/node_modules/rc-collapse/es/Panel.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-motion/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/KeyCode.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$collapse$2f$es$2f$PanelContent$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-collapse/es/PanelContent.js [client] (ecmascript)");
;
;
;
;
var _excluded = [
    "showArrow",
    "headerClass",
    "isActive",
    "onItemClick",
    "forceRender",
    "className",
    "classNames",
    "styles",
    "prefixCls",
    "collapsible",
    "accordion",
    "panelKey",
    "extra",
    "header",
    "expandIcon",
    "openMotion",
    "destroyInactivePanel",
    "children"
];
;
;
;
;
;
var CollapsePanel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function(props, ref) {
    var _props$showArrow = props.showArrow, showArrow = _props$showArrow === void 0 ? true : _props$showArrow, headerClass = props.headerClass, isActive = props.isActive, onItemClick = props.onItemClick, forceRender = props.forceRender, className = props.className, _props$classNames = props.classNames, customizeClassNames = _props$classNames === void 0 ? {} : _props$classNames, _props$styles = props.styles, styles = _props$styles === void 0 ? {} : _props$styles, prefixCls = props.prefixCls, collapsible = props.collapsible, accordion = props.accordion, panelKey = props.panelKey, extra = props.extra, header = props.header, expandIcon = props.expandIcon, openMotion = props.openMotion, destroyInactivePanel = props.destroyInactivePanel, children = props.children, resetProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    var disabled = collapsible === 'disabled';
    var ifExtraExist = extra !== null && extra !== undefined && typeof extra !== 'boolean';
    var collapsibleProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        onClick: function onClick() {
            onItemClick === null || onItemClick === void 0 || onItemClick(panelKey);
        },
        onKeyDown: function onKeyDown(e) {
            if (e.key === 'Enter' || e.keyCode === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].ENTER || e.which === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].ENTER) {
                onItemClick === null || onItemClick === void 0 || onItemClick(panelKey);
            }
        },
        role: accordion ? 'tab' : 'button'
    }, 'aria-expanded', isActive), 'aria-disabled', disabled), "tabIndex", disabled ? -1 : 0);
    // ======================== Icon ========================
    var iconNodeInner = typeof expandIcon === 'function' ? expandIcon(props) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("i", {
        className: "arrow"
    });
    var iconNode = iconNodeInner && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        className: "".concat(prefixCls, "-expand-icon")
    }, [
        'header',
        'icon'
    ].includes(collapsible) ? collapsibleProps : {}), iconNodeInner);
    var collapsePanelClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-item"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-item-active"), isActive), "".concat(prefixCls, "-item-disabled"), disabled), className);
    var headerClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(headerClass, "".concat(prefixCls, "-header"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-collapsible-").concat(collapsible), !!collapsible), customizeClassNames.header);
    // ======================== HeaderProps ========================
    var headerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        className: headerClassName,
        style: styles.header
    }, [
        'header',
        'icon'
    ].includes(collapsible) ? {} : collapsibleProps);
    // ======================== Render ========================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, resetProps, {
        ref: ref,
        className: collapsePanelClassNames
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("div", headerProps, showArrow && iconNode, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("span", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        className: "".concat(prefixCls, "-header-text")
    }, collapsible === 'header' ? collapsibleProps : {}), header), ifExtraExist && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "".concat(prefixCls, "-extra")
    }, extra)), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        visible: isActive,
        leavedClassName: "".concat(prefixCls, "-content-hidden")
    }, openMotion, {
        forceRender: forceRender,
        removeOnLeave: destroyInactivePanel
    }), function(_ref, motionRef) {
        var motionClassName = _ref.className, motionStyle = _ref.style;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$collapse$2f$es$2f$PanelContent$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            ref: motionRef,
            prefixCls: prefixCls,
            className: motionClassName,
            classNames: customizeClassNames,
            style: motionStyle,
            styles: styles,
            isActive: isActive,
            forceRender: forceRender,
            role: accordion ? 'tabpanel' : void 0
        }, children);
    }));
});
const __TURBOPACK__default__export__ = CollapsePanel;
}),
"[project]/Downloads/One click/node_modules/rc-collapse/es/hooks/useItems.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Children/toArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$collapse$2f$es$2f$Panel$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-collapse/es/Panel.js [client] (ecmascript)");
;
;
var _excluded = [
    "children",
    "label",
    "key",
    "collapsible",
    "onItemClick",
    "destroyInactivePanel"
];
;
;
;
var convertItemsToNodes = function convertItemsToNodes(items, props) {
    var prefixCls = props.prefixCls, accordion = props.accordion, collapsible = props.collapsible, destroyInactivePanel = props.destroyInactivePanel, onItemClick = props.onItemClick, activeKey = props.activeKey, openMotion = props.openMotion, expandIcon = props.expandIcon;
    return items.map(function(item, index) {
        var children = item.children, label = item.label, rawKey = item.key, rawCollapsible = item.collapsible, rawOnItemClick = item.onItemClick, rawDestroyInactivePanel = item.destroyInactivePanel, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(item, _excluded);
        // You may be puzzled why you want to convert them all into strings, me too.
        // Maybe: https://github.com/react-component/collapse/blob/aac303a8b6ff30e35060b4f8fecde6f4556fcbe2/src/Collapse.tsx#L15
        var key = String(rawKey !== null && rawKey !== void 0 ? rawKey : index);
        var mergeCollapsible = rawCollapsible !== null && rawCollapsible !== void 0 ? rawCollapsible : collapsible;
        var mergeDestroyInactivePanel = rawDestroyInactivePanel !== null && rawDestroyInactivePanel !== void 0 ? rawDestroyInactivePanel : destroyInactivePanel;
        var handleItemClick = function handleItemClick(value) {
            if (mergeCollapsible === 'disabled') return;
            onItemClick(value);
            rawOnItemClick === null || rawOnItemClick === void 0 || rawOnItemClick(value);
        };
        var isActive = false;
        if (accordion) {
            isActive = activeKey[0] === key;
        } else {
            isActive = activeKey.indexOf(key) > -1;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$collapse$2f$es$2f$Panel$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, restProps, {
            prefixCls: prefixCls,
            key: key,
            panelKey: key,
            isActive: isActive,
            accordion: accordion,
            openMotion: openMotion,
            expandIcon: expandIcon,
            header: label,
            collapsible: mergeCollapsible,
            onItemClick: handleItemClick,
            destroyInactivePanel: mergeDestroyInactivePanel
        }), children);
    });
};
/**
 * @deprecated The next major version will be removed
 */ var getNewChild = function getNewChild(child, index, props) {
    if (!child) return null;
    var prefixCls = props.prefixCls, accordion = props.accordion, collapsible = props.collapsible, destroyInactivePanel = props.destroyInactivePanel, onItemClick = props.onItemClick, activeKey = props.activeKey, openMotion = props.openMotion, expandIcon = props.expandIcon;
    var key = child.key || String(index);
    var _child$props = child.props, header = _child$props.header, headerClass = _child$props.headerClass, childDestroyInactivePanel = _child$props.destroyInactivePanel, childCollapsible = _child$props.collapsible, childOnItemClick = _child$props.onItemClick;
    var isActive = false;
    if (accordion) {
        isActive = activeKey[0] === key;
    } else {
        isActive = activeKey.indexOf(key) > -1;
    }
    var mergeCollapsible = childCollapsible !== null && childCollapsible !== void 0 ? childCollapsible : collapsible;
    var handleItemClick = function handleItemClick(value) {
        if (mergeCollapsible === 'disabled') return;
        onItemClick(value);
        childOnItemClick === null || childOnItemClick === void 0 || childOnItemClick(value);
    };
    var childProps = {
        key: key,
        panelKey: key,
        header: header,
        headerClass: headerClass,
        isActive: isActive,
        prefixCls: prefixCls,
        destroyInactivePanel: childDestroyInactivePanel !== null && childDestroyInactivePanel !== void 0 ? childDestroyInactivePanel : destroyInactivePanel,
        openMotion: openMotion,
        accordion: accordion,
        children: child.props.children,
        onItemClick: handleItemClick,
        expandIcon: expandIcon,
        collapsible: mergeCollapsible
    };
    // https://github.com/ant-design/ant-design/issues/20479
    if (typeof child.type === 'string') {
        return child;
    }
    Object.keys(childProps).forEach(function(propName) {
        if (typeof childProps[propName] === 'undefined') {
            delete childProps[propName];
        }
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].cloneElement(child, childProps);
};
function useItems(items, rawChildren, props) {
    if (Array.isArray(items)) {
        return convertItemsToNodes(items, props);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(rawChildren).map(function(child, index) {
        return getNewChild(child, index, props);
    });
}
const __TURBOPACK__default__export__ = useItems;
}),
"[project]/Downloads/One click/node_modules/rc-collapse/es/Collapse.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useMergedState.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/warning.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$collapse$2f$es$2f$hooks$2f$useItems$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-collapse/es/hooks/useItems.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$collapse$2f$es$2f$Panel$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-collapse/es/Panel.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/pickAttrs.js [client] (ecmascript)");
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
function getActiveKeysArray(activeKey) {
    var currentActiveKey = activeKey;
    if (!Array.isArray(currentActiveKey)) {
        var activeKeyType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(currentActiveKey);
        currentActiveKey = activeKeyType === 'number' || activeKeyType === 'string' ? [
            currentActiveKey
        ] : [];
    }
    return currentActiveKey.map(function(key) {
        return String(key);
    });
}
var Collapse = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function(props, ref) {
    var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? 'rc-collapse' : _props$prefixCls, _props$destroyInactiv = props.destroyInactivePanel, destroyInactivePanel = _props$destroyInactiv === void 0 ? false : _props$destroyInactiv, style = props.style, accordion = props.accordion, className = props.className, children = props.children, collapsible = props.collapsible, openMotion = props.openMotion, expandIcon = props.expandIcon, rawActiveKey = props.activeKey, defaultActiveKey = props.defaultActiveKey, _onChange = props.onChange, items = props.items;
    var collapseClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, className);
    var _useMergedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])([], {
        value: rawActiveKey,
        onChange: function onChange(v) {
            return _onChange === null || _onChange === void 0 ? void 0 : _onChange(v);
        },
        defaultValue: defaultActiveKey,
        postState: getActiveKeysArray
    }), _useMergedState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_useMergedState, 2), activeKey = _useMergedState2[0], setActiveKey = _useMergedState2[1];
    var onItemClick = function onItemClick(key) {
        return setActiveKey(function() {
            if (accordion) {
                return activeKey[0] === key ? [] : [
                    key
                ];
            }
            var index = activeKey.indexOf(key);
            var isActive = index > -1;
            if (isActive) {
                return activeKey.filter(function(item) {
                    return item !== key;
                });
            }
            return [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(activeKey), [
                key
            ]);
        });
    };
    // ======================== Children ========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(!children, '[rc-collapse] `children` will be removed in next major version. Please use `items` instead.');
    var mergedChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$collapse$2f$es$2f$hooks$2f$useItems$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(items, children, {
        prefixCls: prefixCls,
        accordion: accordion,
        openMotion: openMotion,
        expandIcon: expandIcon,
        collapsible: collapsible,
        destroyInactivePanel: destroyInactivePanel,
        onItemClick: onItemClick,
        activeKey: activeKey
    });
    // ======================== Render ========================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        ref: ref,
        className: collapseClassName,
        style: style,
        role: accordion ? 'tablist' : undefined
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, {
        aria: true,
        data: true
    })), mergedChildren);
});
const __TURBOPACK__default__export__ = Object.assign(Collapse, {
    /**
   * @deprecated use `items` instead, will be removed in `v4.0.0`
   */ Panel: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$collapse$2f$es$2f$Panel$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
});
}),
"[project]/Downloads/One click/node_modules/rc-collapse/es/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Panel",
    ()=>Panel,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$collapse$2f$es$2f$Collapse$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-collapse/es/Collapse.js [client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$collapse$2f$es$2f$Collapse$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
/**
 * @deprecated use `items` instead, will be removed in `v4.0.0`
 */ var Panel = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$collapse$2f$es$2f$Collapse$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Panel;
;
}),
"[project]/Downloads/One click/node_modules/rc-resize-observer/es/Collection.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Collection",
    ()=>Collection,
    "CollectionContext",
    ()=>CollectionContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
var CollectionContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"](null);
function Collection(_ref) {
    var children = _ref.children, onBatchResize = _ref.onBatchResize;
    var resizeIdRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](0);
    var resizeInfosRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"]([]);
    var onCollectionResize = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](CollectionContext);
    var onResize = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Collection.useCallback[onResize]": function(size, element, data) {
            resizeIdRef.current += 1;
            var currentId = resizeIdRef.current;
            resizeInfosRef.current.push({
                size: size,
                element: element,
                data: data
            });
            Promise.resolve().then({
                "Collection.useCallback[onResize]": function() {
                    if (currentId === resizeIdRef.current) {
                        onBatchResize === null || onBatchResize === void 0 || onBatchResize(resizeInfosRef.current);
                        resizeInfosRef.current = [];
                    }
                }
            }["Collection.useCallback[onResize]"]);
            // Continue bubbling if parent exist
            onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(size, element, data);
        }
    }["Collection.useCallback[onResize]"], [
        onBatchResize,
        onCollectionResize
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](CollectionContext.Provider, {
        value: onResize
    }, children);
}
}),
"[project]/Downloads/One click/node_modules/rc-resize-observer/es/utils/observerUtil.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_el",
    ()=>_el,
    "_rs",
    ()=>_rs,
    "observe",
    ()=>observe,
    "unobserve",
    ()=>unobserve
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$resize$2d$observer$2d$polyfill$2f$dist$2f$ResizeObserver$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js [client] (ecmascript)");
;
// =============================== Const ===============================
var elementListeners = new Map();
function onResize(entities) {
    entities.forEach(function(entity) {
        var _elementListeners$get;
        var target = entity.target;
        (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 || _elementListeners$get.forEach(function(listener) {
            return listener(target);
        });
    });
}
// Note: ResizeObserver polyfill not support option to measure border-box resize
var resizeObserver = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$resize$2d$observer$2d$polyfill$2f$dist$2f$ResizeObserver$2e$es$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"](onResize);
var _el = ("TURBOPACK compile-time truthy", 1) ? elementListeners : "TURBOPACK unreachable"; // eslint-disable-line
var _rs = ("TURBOPACK compile-time truthy", 1) ? onResize : "TURBOPACK unreachable"; // eslint-disable-line
function observe(element, callback) {
    if (!elementListeners.has(element)) {
        elementListeners.set(element, new Set());
        resizeObserver.observe(element);
    }
    elementListeners.get(element).add(callback);
}
function unobserve(element, callback) {
    if (elementListeners.has(element)) {
        elementListeners.get(element).delete(callback);
        if (!elementListeners.get(element).size) {
            resizeObserver.unobserve(element);
            elementListeners.delete(element);
        }
    }
}
}),
"[project]/Downloads/One click/node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DomWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/createClass.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/inherits.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createSuper$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/createSuper.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
;
;
;
;
/**
 * Fallback to findDOMNode if origin ref do not provide any dom element
 */ var DomWrapper = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(DomWrapper, _React$Component);
    var _super = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createSuper$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(DomWrapper);
    function DomWrapper() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(this, DomWrapper);
        return _super.apply(this, arguments);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(DomWrapper, [
        {
            key: "render",
            value: function render() {
                return this.props.children;
            }
        }
    ]);
    return DomWrapper;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Component"]);
;
}),
"[project]/Downloads/One click/node_modules/rc-resize-observer/es/SingleObserver/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/typeof.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Dom/findDOMNode.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/ref.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$Collection$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-resize-observer/es/Collection.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$utils$2f$observerUtil$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-resize-observer/es/utils/observerUtil.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$SingleObserver$2f$DomWrapper$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js [client] (ecmascript)");
;
;
;
;
;
;
;
;
function SingleObserver(props, ref) {
    var children = props.children, disabled = props.disabled;
    var elementRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](null);
    var wrapperRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](null);
    var onCollectionResize = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$Collection$2e$js__$5b$client$5d$__$28$ecmascript$29$__["CollectionContext"]);
    // =========================== Children ===========================
    var isRenderProps = typeof children === 'function';
    var mergedChildren = isRenderProps ? children(elementRef) : children;
    // ============================= Size =============================
    var sizeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"]({
        width: -1,
        height: -1,
        offsetWidth: -1,
        offsetHeight: -1
    });
    // ============================= Ref ==============================
    var canRef = !isRenderProps && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isValidElement"](mergedChildren) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supportRef"])(mergedChildren);
    var originRef = canRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getNodeRef"])(mergedChildren) : null;
    var mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useComposeRef"])(originRef, elementRef);
    var getDom = function getDom() {
        var _elementRef$current;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(elementRef.current) || (// Support `nativeElement` format
        elementRef.current && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(elementRef.current) === 'object' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.nativeElement) : null) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(wrapperRef.current);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "SingleObserver.useImperativeHandle": function() {
            return getDom();
        }
    }["SingleObserver.useImperativeHandle"]);
    // =========================== Observe ============================
    var propsRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](props);
    propsRef.current = props;
    // Handler
    var onInternalResize = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "SingleObserver.useCallback[onInternalResize]": function(target) {
            var _propsRef$current = propsRef.current, onResize = _propsRef$current.onResize, data = _propsRef$current.data;
            var _target$getBoundingCl = target.getBoundingClientRect(), width = _target$getBoundingCl.width, height = _target$getBoundingCl.height;
            var offsetWidth = target.offsetWidth, offsetHeight = target.offsetHeight;
            /**
     * Resize observer trigger when content size changed.
     * In most case we just care about element size,
     * let's use `boundary` instead of `contentRect` here to avoid shaking.
     */ var fixedWidth = Math.floor(width);
            var fixedHeight = Math.floor(height);
            if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
                var size = {
                    width: fixedWidth,
                    height: fixedHeight,
                    offsetWidth: offsetWidth,
                    offsetHeight: offsetHeight
                };
                sizeRef.current = size;
                // IE is strange, right?
                var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
                var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
                var sizeInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, size), {}, {
                    offsetWidth: mergedOffsetWidth,
                    offsetHeight: mergedOffsetHeight
                });
                // Let collection know what happened
                onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(sizeInfo, target, data);
                if (onResize) {
                    // defer the callback but not defer to next frame
                    Promise.resolve().then({
                        "SingleObserver.useCallback[onInternalResize]": function() {
                            onResize(sizeInfo, target);
                        }
                    }["SingleObserver.useCallback[onInternalResize]"]);
                }
            }
        }
    }["SingleObserver.useCallback[onInternalResize]"], []);
    // Dynamic observe
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SingleObserver.useEffect": function() {
            var currentElement = getDom();
            if (currentElement && !disabled) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$utils$2f$observerUtil$2e$js__$5b$client$5d$__$28$ecmascript$29$__["observe"])(currentElement, onInternalResize);
            }
            return ({
                "SingleObserver.useEffect": function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$utils$2f$observerUtil$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unobserve"])(currentElement, onInternalResize);
                }
            })["SingleObserver.useEffect"];
        }
    }["SingleObserver.useEffect"], [
        elementRef.current,
        disabled
    ]);
    // ============================ Render ============================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$SingleObserver$2f$DomWrapper$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        ref: wrapperRef
    }, canRef ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cloneElement"](mergedChildren, {
        ref: mergedRef
    }) : mergedChildren);
}
var RefSingleObserver = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](SingleObserver);
if ("TURBOPACK compile-time truthy", 1) {
    RefSingleObserver.displayName = 'SingleObserver';
}
const __TURBOPACK__default__export__ = RefSingleObserver;
}),
"[project]/Downloads/One click/node_modules/rc-resize-observer/es/index.js [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/Children/toArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/warning.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$SingleObserver$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-resize-observer/es/SingleObserver/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$Collection$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-resize-observer/es/Collection.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$utils$2f$observerUtil$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-resize-observer/es/utils/observerUtil.js [client] (ecmascript)");
;
;
;
;
;
;
var INTERNAL_PREFIX_KEY = 'rc-observer-key';
;
;
function ResizeObserver(props, ref) {
    var children = props.children;
    var childNodes = typeof children === 'function' ? [
        children
    ] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(children);
    if ("TURBOPACK compile-time truthy", 1) {
        if (childNodes.length > 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["warning"])(false, 'Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.');
        } else if (childNodes.length === 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$client$5d$__$28$ecmascript$29$__["warning"])(false, '`children` of ResizeObserver is empty. Nothing is in observe.');
        }
    }
    return childNodes.map(function(child, index) {
        var key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$SingleObserver$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
            key: key,
            ref: index === 0 ? ref : undefined
        }), child);
    });
}
var RefResizeObserver = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](ResizeObserver);
if ("TURBOPACK compile-time truthy", 1) {
    RefResizeObserver.displayName = 'ResizeObserver';
}
RefResizeObserver.Collection = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$Collection$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Collection"];
const __TURBOPACK__default__export__ = RefResizeObserver;
}),
"[project]/Downloads/One click/node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */ /* eslint-disable require-jsdoc, valid-jsdoc */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var MapShim = function() {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */ function getIndex(arr, key) {
        var result = -1;
        arr.some(function(entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return function() {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */ get: function() {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */ class_1.prototype.get = function(key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */ class_1.prototype.set = function(key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            } else {
                this.__entries__.push([
                    key,
                    value
                ]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */ class_1.prototype.delete = function(key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */ class_1.prototype.has = function(key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */ class_1.prototype.clear = function() {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */ class_1.prototype.forEach = function(callback, ctx) {
            if (ctx === void 0) {
                ctx = null;
            }
            for(var _i = 0, _a = this.__entries__; _i < _a.length; _i++){
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }();
}();
/**
 * Detects whether window and document objects are available in current environment.
 */ var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;
// Returns global object of a current environment.
var global$1 = function() {
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && /*TURBOPACK member replacement*/ __turbopack_context__.g.Math === Math) {
        return /*TURBOPACK member replacement*/ __turbopack_context__.g;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
}();
/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */ var requestAnimationFrame$1 = function() {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function(callback) {
        return setTimeout(function() {
            return callback(Date.now());
        }, 1000 / 60);
    };
}();
// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */ function throttle(callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */ function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */ function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */ function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        } else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}
// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = [
    'top',
    'right',
    'bottom',
    'left',
    'width',
    'height',
    'size',
    'weight'
];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */ var ResizeObserverController = function() {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */ function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */ this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */ this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */ this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */ this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */ ResizeObserverController.prototype.addObserver = function(observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */ ResizeObserverController.prototype.removeObserver = function(observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */ ResizeObserverController.prototype.refresh = function() {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */ ResizeObserverController.prototype.updateObservers_ = function() {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function(observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function(observer) {
            return observer.broadcastActive();
        });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */ ResizeObserverController.prototype.connect_ = function() {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        } else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */ ResizeObserverController.prototype.disconnect_ = function() {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */ ResizeObserverController.prototype.onTransitionEnd_ = function(_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function(key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */ ResizeObserverController.getInstance = function() {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */ ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}();
/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */ var defineConfigurable = function(target, props) {
    for(var _i = 0, _a = Object.keys(props); _i < _a.length; _i++){
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
};
/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */ var getWindowOf = function(target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
};
// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */ function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */ function getBordersSize(styles) {
    var positions = [];
    for(var _i = 1; _i < arguments.length; _i++){
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function(size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */ function getPaddings(styles) {
    var positions = [
        'top',
        'right',
        'bottom',
        'left'
    ];
    var paddings = {};
    for(var _i = 0, positions_1 = positions; _i < positions_1.length; _i++){
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */ function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */ function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */ var isSVGGraphicsElement = function() {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function(target) {
            return target instanceof getWindowOf(target).SVGGraphicsElement;
        };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function(target) {
        return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
    };
}();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */ function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */ function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */ function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x,
        y: y,
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */ function createRectInit(x, y, width, height) {
    return {
        x: x,
        y: y,
        width: width,
        height: height
    };
}
/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */ var ResizeObservation = function() {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */ function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */ this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */ this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */ this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */ ResizeObservation.prototype.isActive = function() {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */ ResizeObservation.prototype.broadcastRect = function() {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}();
var ResizeObserverEntry = function() {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */ function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, {
            target: target,
            contentRect: contentRect
        });
    }
    return ResizeObserverEntry;
}();
var ResizeObserverSPI = function() {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */ function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */ this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */ this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */ ResizeObserverSPI.prototype.observe = function(target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */ ResizeObserverSPI.prototype.unobserve = function(target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.disconnect = function() {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.gatherActive = function() {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function(observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.broadcastActive = function() {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function(observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.clearActive = function() {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */ ResizeObserverSPI.prototype.hasActive = function() {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}();
// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */ var ResizeObserver = function() {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */ function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}();
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function(method) {
    ResizeObserver.prototype[method] = function() {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});
var index = function() {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
}();
const __TURBOPACK__default__export__ = index;
}),
"[project]/Downloads/One click/node_modules/rc-overflow/es/Item.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-resize-observer/es/index.js [client] (ecmascript) <locals>");
;
;
;
var _excluded = [
    "prefixCls",
    "invalidate",
    "item",
    "renderItem",
    "responsive",
    "responsiveDisabled",
    "registerSize",
    "itemKey",
    "className",
    "style",
    "children",
    "display",
    "order",
    "component"
];
;
;
;
// Use shared variable to save bundle size
var UNDEFINED = undefined;
function InternalItem(props, ref) {
    var prefixCls = props.prefixCls, invalidate = props.invalidate, item = props.item, renderItem = props.renderItem, responsive = props.responsive, responsiveDisabled = props.responsiveDisabled, registerSize = props.registerSize, itemKey = props.itemKey, className = props.className, style = props.style, children = props.children, display = props.display, order = props.order, _props$component = props.component, Component = _props$component === void 0 ? 'div' : _props$component, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    var mergedHidden = responsive && !display;
    // ================================ Effect ================================
    function internalRegisterSize(width) {
        registerSize(itemKey, width);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "InternalItem.useEffect": function() {
            return ({
                "InternalItem.useEffect": function() {
                    internalRegisterSize(null);
                }
            })["InternalItem.useEffect"];
        }
    }["InternalItem.useEffect"], []);
    // ================================ Render ================================
    var childNode = renderItem && item !== UNDEFINED ? renderItem(item, {
        index: order
    }) : children;
    var overflowStyle;
    if (!invalidate) {
        overflowStyle = {
            opacity: mergedHidden ? 0 : 1,
            height: mergedHidden ? 0 : UNDEFINED,
            overflowY: mergedHidden ? 'hidden' : UNDEFINED,
            order: responsive ? order : UNDEFINED,
            pointerEvents: mergedHidden ? 'none' : UNDEFINED,
            position: mergedHidden ? 'absolute' : UNDEFINED
        };
    }
    var overflowProps = {};
    if (mergedHidden) {
        overflowProps['aria-hidden'] = true;
    }
    var itemNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](Component, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(!invalidate && prefixCls, className),
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, overflowStyle), style)
    }, overflowProps, restProps, {
        ref: ref
    }), childNode);
    if (responsive) {
        itemNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            onResize: function onResize(_ref) {
                var offsetWidth = _ref.offsetWidth;
                internalRegisterSize(offsetWidth);
            },
            disabled: responsiveDisabled
        }, itemNode);
    }
    return itemNode;
}
var Item = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](InternalItem);
Item.displayName = 'Item';
const __TURBOPACK__default__export__ = Item;
}),
"[project]/Downloads/One click/node_modules/rc-overflow/es/hooks/channelUpdate.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>channelUpdate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/raf.js [client] (ecmascript)");
;
function channelUpdate(callback) {
    if (typeof MessageChannel === 'undefined') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(callback);
    } else {
        var channel = new MessageChannel();
        channel.port1.onmessage = function() {
            return callback();
        };
        channel.port2.postMessage(undefined);
    }
}
}),
"[project]/Downloads/One click/node_modules/rc-overflow/es/hooks/useEffectState.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useEffectState,
    "useBatcher",
    ()=>useBatcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useEvent.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react-dom/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$hooks$2f$channelUpdate$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-overflow/es/hooks/channelUpdate.js [client] (ecmascript)");
;
;
;
;
;
function useBatcher() {
    // Updater Trigger
    var updateFuncRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](null);
    // Notify update
    var notifyEffectUpdate = function notifyEffectUpdate(callback) {
        if (!updateFuncRef.current) {
            updateFuncRef.current = [];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$hooks$2f$channelUpdate$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(function() {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["unstable_batchedUpdates"])(function() {
                    updateFuncRef.current.forEach(function(fn) {
                        fn();
                    });
                    updateFuncRef.current = null;
                });
            });
        }
        updateFuncRef.current.push(callback);
    };
    return notifyEffectUpdate;
}
function useEffectState(notifyEffectUpdate, defaultValue) {
    // Value
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](defaultValue), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), stateValue = _React$useState2[0], setStateValue = _React$useState2[1];
    // Set State
    var setEffectVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "useEffectState.useEvent[setEffectVal]": function(nextValue) {
            notifyEffectUpdate({
                "useEffectState.useEvent[setEffectVal]": function() {
                    setStateValue(nextValue);
                }
            }["useEffectState.useEvent[setEffectVal]"]);
        }
    }["useEffectState.useEvent[setEffectVal]"]);
    return [
        stateValue,
        setEffectVal
    ];
}
}),
"[project]/Downloads/One click/node_modules/rc-overflow/es/context.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OverflowContext",
    ()=>OverflowContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
var OverflowContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
}),
"[project]/Downloads/One click/node_modules/rc-overflow/es/RawItem.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$Item$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-overflow/es/Item.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-overflow/es/context.js [client] (ecmascript)");
;
;
var _excluded = [
    "component"
], _excluded2 = [
    "className"
], _excluded3 = [
    "className"
];
;
;
;
;
var InternalRawItem = function InternalRawItem(props, ref) {
    var context = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["OverflowContext"]);
    // Render directly when context not provided
    if (!context) {
        var _props$component = props.component, Component = _props$component === void 0 ? 'div' : _props$component, _restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](Component, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, _restProps, {
            ref: ref
        }));
    }
    var contextClassName = context.className, restContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(context, _excluded2);
    var className = props.className, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded3);
    // Do not pass context to sub item to avoid multiple measure
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["OverflowContext"].Provider, {
        value: null
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$Item$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(contextClassName, className)
    }, restContext, restProps)));
};
var RawItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](InternalRawItem);
RawItem.displayName = 'RawItem';
const __TURBOPACK__default__export__ = RawItem;
}),
"[project]/Downloads/One click/node_modules/rc-overflow/es/Overflow.js [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-resize-observer/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useLayoutEffect.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$Item$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-overflow/es/Item.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$hooks$2f$useEffectState$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-overflow/es/hooks/useEffectState.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$RawItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-overflow/es/RawItem.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-overflow/es/context.js [client] (ecmascript)");
;
;
;
;
var _excluded = [
    "prefixCls",
    "data",
    "renderItem",
    "renderRawItem",
    "itemKey",
    "itemWidth",
    "ssr",
    "style",
    "className",
    "maxCount",
    "renderRest",
    "renderRawRest",
    "suffix",
    "component",
    "itemComponent",
    "onVisibleChange"
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
var RESPONSIVE = 'responsive';
var INVALIDATE = 'invalidate';
;
function defaultRenderRest(omittedItems) {
    return "+ ".concat(omittedItems.length, " ...");
}
function Overflow(props, ref) {
    var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? 'rc-overflow' : _props$prefixCls, _props$data = props.data, data = _props$data === void 0 ? [] : _props$data, renderItem = props.renderItem, renderRawItem = props.renderRawItem, itemKey = props.itemKey, _props$itemWidth = props.itemWidth, itemWidth = _props$itemWidth === void 0 ? 10 : _props$itemWidth, ssr = props.ssr, style = props.style, className = props.className, maxCount = props.maxCount, renderRest = props.renderRest, renderRawRest = props.renderRawRest, suffix = props.suffix, _props$component = props.component, Component = _props$component === void 0 ? 'div' : _props$component, itemComponent = props.itemComponent, onVisibleChange = props.onVisibleChange, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    var fullySSR = ssr === 'full';
    var notifyEffectUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$hooks$2f$useEffectState$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBatcher"])();
    var _useEffectState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$hooks$2f$useEffectState$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(notifyEffectUpdate, null), _useEffectState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_useEffectState, 2), containerWidth = _useEffectState2[0], setContainerWidth = _useEffectState2[1];
    var mergedContainerWidth = containerWidth || 0;
    var _useEffectState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$hooks$2f$useEffectState$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(notifyEffectUpdate, new Map()), _useEffectState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_useEffectState3, 2), itemWidths = _useEffectState4[0], setItemWidths = _useEffectState4[1];
    var _useEffectState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$hooks$2f$useEffectState$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(notifyEffectUpdate, 0), _useEffectState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_useEffectState5, 2), prevRestWidth = _useEffectState6[0], setPrevRestWidth = _useEffectState6[1];
    var _useEffectState7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$hooks$2f$useEffectState$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(notifyEffectUpdate, 0), _useEffectState8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_useEffectState7, 2), restWidth = _useEffectState8[0], setRestWidth = _useEffectState8[1];
    var _useEffectState9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$hooks$2f$useEffectState$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(notifyEffectUpdate, 0), _useEffectState10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_useEffectState9, 2), suffixWidth = _useEffectState10[0], setSuffixWidth = _useEffectState10[1];
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null), _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_useState, 2), suffixFixedStart = _useState2[0], setSuffixFixedStart = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null), _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_useState3, 2), displayCount = _useState4[0], setDisplayCount = _useState4[1];
    var mergedDisplayCount = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Overflow.useMemo[mergedDisplayCount]": function() {
            if (displayCount === null && fullySSR) {
                return Number.MAX_SAFE_INTEGER;
            }
            return displayCount || 0;
        }
    }["Overflow.useMemo[mergedDisplayCount]"], [
        displayCount,
        containerWidth
    ]);
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false), _useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_useState5, 2), restReady = _useState6[0], setRestReady = _useState6[1];
    var itemPrefixCls = "".concat(prefixCls, "-item");
    // Always use the max width to avoid blink
    var mergedRestWidth = Math.max(prevRestWidth, restWidth);
    // ================================= Data =================================
    var isResponsive = maxCount === RESPONSIVE;
    var shouldResponsive = data.length && isResponsive;
    var invalidate = maxCount === INVALIDATE;
    /**
   * When is `responsive`, we will always render rest node to get the real width of it for calculation
   */ var showRest = shouldResponsive || typeof maxCount === 'number' && data.length > maxCount;
    var mergedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Overflow.useMemo[mergedData]": function() {
            var items = data;
            if (shouldResponsive) {
                if (containerWidth === null && fullySSR) {
                    items = data;
                } else {
                    items = data.slice(0, Math.min(data.length, mergedContainerWidth / itemWidth));
                }
            } else if (typeof maxCount === 'number') {
                items = data.slice(0, maxCount);
            }
            return items;
        }
    }["Overflow.useMemo[mergedData]"], [
        data,
        itemWidth,
        containerWidth,
        maxCount,
        shouldResponsive
    ]);
    var omittedItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Overflow.useMemo[omittedItems]": function() {
            if (shouldResponsive) {
                return data.slice(mergedDisplayCount + 1);
            }
            return data.slice(mergedData.length);
        }
    }["Overflow.useMemo[omittedItems]"], [
        data,
        mergedData,
        shouldResponsive,
        mergedDisplayCount
    ]);
    // ================================= Item =================================
    var getKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Overflow.useCallback[getKey]": function(item, index) {
            var _ref;
            if (typeof itemKey === 'function') {
                return itemKey(item);
            }
            return (_ref = itemKey && (item === null || item === void 0 ? void 0 : item[itemKey])) !== null && _ref !== void 0 ? _ref : index;
        }
    }["Overflow.useCallback[getKey]"], [
        itemKey
    ]);
    var mergedRenderItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])(renderItem || ({
        "Overflow.useCallback[mergedRenderItem]": function(item) {
            return item;
        }
    })["Overflow.useCallback[mergedRenderItem]"], [
        renderItem
    ]);
    function updateDisplayCount(count, suffixFixedStartVal, notReady) {
        // React 18 will sync render even when the value is same in some case.
        // We take `mergedData` as deps which may cause dead loop if it's dynamic generate.
        // ref: https://github.com/ant-design/ant-design/issues/36559
        if (displayCount === count && (suffixFixedStartVal === undefined || suffixFixedStartVal === suffixFixedStart)) {
            return;
        }
        setDisplayCount(count);
        if (!notReady) {
            setRestReady(count < data.length - 1);
            onVisibleChange === null || onVisibleChange === void 0 || onVisibleChange(count);
        }
        if (suffixFixedStartVal !== undefined) {
            setSuffixFixedStart(suffixFixedStartVal);
        }
    }
    // ================================= Size =================================
    function onOverflowResize(_, element) {
        setContainerWidth(element.clientWidth);
    }
    function registerSize(key, width) {
        setItemWidths(function(origin) {
            var clone = new Map(origin);
            if (width === null) {
                clone.delete(key);
            } else {
                clone.set(key, width);
            }
            return clone;
        });
    }
    function registerOverflowSize(_, width) {
        setRestWidth(width);
        setPrevRestWidth(restWidth);
    }
    function registerSuffixSize(_, width) {
        setSuffixWidth(width);
    }
    // ================================ Effect ================================
    function getItemWidth(index) {
        return itemWidths.get(getKey(mergedData[index], index));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "Overflow.useLayoutEffect": function() {
            if (mergedContainerWidth && typeof mergedRestWidth === 'number' && mergedData) {
                var totalWidth = suffixWidth;
                var len = mergedData.length;
                var lastIndex = len - 1;
                // When data count change to 0, reset this since not loop will reach
                if (!len) {
                    updateDisplayCount(0, null);
                    return;
                }
                for(var i = 0; i < len; i += 1){
                    var currentItemWidth = getItemWidth(i);
                    // Fully will always render
                    if (fullySSR) {
                        currentItemWidth = currentItemWidth || 0;
                    }
                    // Break since data not ready
                    if (currentItemWidth === undefined) {
                        updateDisplayCount(i - 1, undefined, true);
                        break;
                    }
                    // Find best match
                    totalWidth += currentItemWidth;
                    if (// Only one means `totalWidth` is the final width
                    lastIndex === 0 && totalWidth <= mergedContainerWidth || // Last two width will be the final width
                    i === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth) {
                        // Additional check if match the end
                        updateDisplayCount(lastIndex, null);
                        break;
                    } else if (totalWidth + mergedRestWidth > mergedContainerWidth) {
                        // Can not hold all the content to show rest
                        updateDisplayCount(i - 1, totalWidth - currentItemWidth - suffixWidth + restWidth);
                        break;
                    }
                }
                if (suffix && getItemWidth(0) + suffixWidth > mergedContainerWidth) {
                    setSuffixFixedStart(null);
                }
            }
        }
    }["Overflow.useLayoutEffect"], [
        mergedContainerWidth,
        itemWidths,
        restWidth,
        suffixWidth,
        getKey,
        mergedData
    ]);
    // ================================ Render ================================
    var displayRest = restReady && !!omittedItems.length;
    var suffixStyle = {};
    if (suffixFixedStart !== null && shouldResponsive) {
        suffixStyle = {
            position: 'absolute',
            left: suffixFixedStart,
            top: 0
        };
    }
    var itemSharedProps = {
        prefixCls: itemPrefixCls,
        responsive: shouldResponsive,
        component: itemComponent,
        invalidate: invalidate
    };
    // >>>>> Choice render fun by `renderRawItem`
    var internalRenderItemNode = renderRawItem ? function(item, index) {
        var key = getKey(item, index);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["OverflowContext"].Provider, {
            key: key,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, itemSharedProps), {}, {
                order: index,
                item: item,
                itemKey: key,
                registerSize: registerSize,
                display: index <= mergedDisplayCount
            })
        }, renderRawItem(item, index));
    } : function(item, index) {
        var key = getKey(item, index);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$Item$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, itemSharedProps, {
            order: index,
            key: key,
            item: item,
            renderItem: mergedRenderItem,
            itemKey: key,
            registerSize: registerSize,
            display: index <= mergedDisplayCount
        }));
    };
    // >>>>> Rest node
    var restContextProps = {
        order: displayRest ? mergedDisplayCount : Number.MAX_SAFE_INTEGER,
        className: "".concat(itemPrefixCls, "-rest"),
        registerSize: registerOverflowSize,
        display: displayRest
    };
    var mergedRenderRest = renderRest || defaultRenderRest;
    var restNode = renderRawRest ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$context$2e$js__$5b$client$5d$__$28$ecmascript$29$__["OverflowContext"].Provider, {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, itemSharedProps), restContextProps)
    }, renderRawRest(omittedItems)) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$Item$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, itemSharedProps, restContextProps), typeof mergedRenderRest === 'function' ? mergedRenderRest(omittedItems) : mergedRenderRest);
    var overflowNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](Component, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(!invalidate && prefixCls, className),
        style: style,
        ref: ref
    }, restProps), mergedData.map(internalRenderItemNode), showRest ? restNode : null, suffix && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$Item$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, itemSharedProps, {
        responsive: isResponsive,
        responsiveDisabled: !shouldResponsive,
        order: mergedDisplayCount,
        className: "".concat(itemPrefixCls, "-suffix"),
        registerSize: registerSuffixSize,
        display: true,
        style: suffixStyle
    }), suffix));
    return isResponsive ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        onResize: onOverflowResize,
        disabled: !shouldResponsive
    }, overflowNode) : overflowNode;
}
var ForwardOverflow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](Overflow);
ForwardOverflow.displayName = 'Overflow';
ForwardOverflow.Item = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$RawItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
ForwardOverflow.RESPONSIVE = RESPONSIVE;
ForwardOverflow.INVALIDATE = INVALIDATE;
const __TURBOPACK__default__export__ = ForwardOverflow;
}),
"[project]/Downloads/One click/node_modules/rc-overflow/es/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$Overflow$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-overflow/es/Overflow.js [client] (ecmascript) <locals>");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$overflow$2f$es$2f$Overflow$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"];
}),
"[project]/Downloads/One click/node_modules/rc-tooltip/es/Popup.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Popup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
;
function Popup(props) {
    var children = props.children, prefixCls = props.prefixCls, id = props.id, innerStyle = props.overlayInnerStyle, bodyClassName = props.bodyClassName, className = props.className, style = props.style;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-content"), className),
        style: style
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-inner"), bodyClassName),
        id: id,
        role: "tooltip",
        style: innerStyle
    }, typeof children === 'function' ? children() : children));
}
}),
"[project]/Downloads/One click/node_modules/rc-tooltip/es/placements.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "placements",
    ()=>placements
]);
var autoAdjustOverflowTopBottom = {
    shiftX: 64,
    adjustY: 1
};
var autoAdjustOverflowLeftRight = {
    adjustX: 1,
    shiftY: true
};
var targetOffset = [
    0,
    0
];
var placements = {
    left: {
        points: [
            'cr',
            'cl'
        ],
        overflow: autoAdjustOverflowLeftRight,
        offset: [
            -4,
            0
        ],
        targetOffset: targetOffset
    },
    right: {
        points: [
            'cl',
            'cr'
        ],
        overflow: autoAdjustOverflowLeftRight,
        offset: [
            4,
            0
        ],
        targetOffset: targetOffset
    },
    top: {
        points: [
            'bc',
            'tc'
        ],
        overflow: autoAdjustOverflowTopBottom,
        offset: [
            0,
            -4
        ],
        targetOffset: targetOffset
    },
    bottom: {
        points: [
            'tc',
            'bc'
        ],
        overflow: autoAdjustOverflowTopBottom,
        offset: [
            0,
            4
        ],
        targetOffset: targetOffset
    },
    topLeft: {
        points: [
            'bl',
            'tl'
        ],
        overflow: autoAdjustOverflowTopBottom,
        offset: [
            0,
            -4
        ],
        targetOffset: targetOffset
    },
    leftTop: {
        points: [
            'tr',
            'tl'
        ],
        overflow: autoAdjustOverflowLeftRight,
        offset: [
            -4,
            0
        ],
        targetOffset: targetOffset
    },
    topRight: {
        points: [
            'br',
            'tr'
        ],
        overflow: autoAdjustOverflowTopBottom,
        offset: [
            0,
            -4
        ],
        targetOffset: targetOffset
    },
    rightTop: {
        points: [
            'tl',
            'tr'
        ],
        overflow: autoAdjustOverflowLeftRight,
        offset: [
            4,
            0
        ],
        targetOffset: targetOffset
    },
    bottomRight: {
        points: [
            'tr',
            'br'
        ],
        overflow: autoAdjustOverflowTopBottom,
        offset: [
            0,
            4
        ],
        targetOffset: targetOffset
    },
    rightBottom: {
        points: [
            'bl',
            'br'
        ],
        overflow: autoAdjustOverflowLeftRight,
        offset: [
            4,
            0
        ],
        targetOffset: targetOffset
    },
    bottomLeft: {
        points: [
            'tl',
            'bl'
        ],
        overflow: autoAdjustOverflowTopBottom,
        offset: [
            0,
            4
        ],
        targetOffset: targetOffset
    },
    leftBottom: {
        points: [
            'br',
            'bl'
        ],
        overflow: autoAdjustOverflowLeftRight,
        offset: [
            -4,
            0
        ],
        targetOffset: targetOffset
    }
};
const __TURBOPACK__default__export__ = placements;
}),
"[project]/Downloads/One click/node_modules/rc-tooltip/es/Tooltip.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@rc-component/trigger/es/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tooltip$2f$es$2f$placements$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-tooltip/es/placements.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tooltip$2f$es$2f$Popup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-tooltip/es/Popup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/hooks/useId.js [client] (ecmascript)");
;
;
;
var _excluded = [
    "overlayClassName",
    "trigger",
    "mouseEnterDelay",
    "mouseLeaveDelay",
    "overlayStyle",
    "prefixCls",
    "children",
    "onVisibleChange",
    "afterVisibleChange",
    "transitionName",
    "animation",
    "motion",
    "placement",
    "align",
    "destroyTooltipOnHide",
    "defaultVisible",
    "getTooltipContainer",
    "overlayInnerStyle",
    "arrowContent",
    "overlay",
    "id",
    "showArrow",
    "classNames",
    "styles"
];
;
;
;
;
;
;
;
var Tooltip = function Tooltip(props, ref) {
    var overlayClassName = props.overlayClassName, _props$trigger = props.trigger, trigger = _props$trigger === void 0 ? [
        'hover'
    ] : _props$trigger, _props$mouseEnterDela = props.mouseEnterDelay, mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0 : _props$mouseEnterDela, _props$mouseLeaveDela = props.mouseLeaveDelay, mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela, overlayStyle = props.overlayStyle, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? 'rc-tooltip' : _props$prefixCls, children = props.children, onVisibleChange = props.onVisibleChange, afterVisibleChange = props.afterVisibleChange, transitionName = props.transitionName, animation = props.animation, motion = props.motion, _props$placement = props.placement, placement = _props$placement === void 0 ? 'right' : _props$placement, _props$align = props.align, align = _props$align === void 0 ? {} : _props$align, _props$destroyTooltip = props.destroyTooltipOnHide, destroyTooltipOnHide = _props$destroyTooltip === void 0 ? false : _props$destroyTooltip, defaultVisible = props.defaultVisible, getTooltipContainer = props.getTooltipContainer, overlayInnerStyle = props.overlayInnerStyle, arrowContent = props.arrowContent, overlay = props.overlay, id = props.id, _props$showArrow = props.showArrow, showArrow = _props$showArrow === void 0 ? true : _props$showArrow, tooltipClassNames = props.classNames, tooltipStyles = props.styles, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    var mergedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(id);
    var triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "Tooltip.useImperativeHandle": function() {
            return triggerRef.current;
        }
    }["Tooltip.useImperativeHandle"]);
    var extraProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, restProps);
    if ('visible' in props) {
        extraProps.popupVisible = props.visible;
    }
    var getPopupElement = function getPopupElement() {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tooltip$2f$es$2f$Popup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            key: "content",
            prefixCls: prefixCls,
            id: mergedId,
            bodyClassName: tooltipClassNames === null || tooltipClassNames === void 0 ? void 0 : tooltipClassNames.body,
            overlayInnerStyle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, overlayInnerStyle), tooltipStyles === null || tooltipStyles === void 0 ? void 0 : tooltipStyles.body)
        }, overlay);
    };
    var getChildren = function getChildren() {
        var child = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Children"].only(children);
        var originalProps = (child === null || child === void 0 ? void 0 : child.props) || {};
        var childProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, originalProps), {}, {
            'aria-describedby': overlay ? mergedId : null
        });
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cloneElement"](children, childProps);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        popupClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(overlayClassName, tooltipClassNames === null || tooltipClassNames === void 0 ? void 0 : tooltipClassNames.root),
        prefixCls: prefixCls,
        popup: getPopupElement,
        action: trigger,
        builtinPlacements: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tooltip$2f$es$2f$placements$2e$js__$5b$client$5d$__$28$ecmascript$29$__["placements"],
        popupPlacement: placement,
        ref: triggerRef,
        popupAlign: align,
        getPopupContainer: getTooltipContainer,
        onPopupVisibleChange: onVisibleChange,
        afterPopupVisibleChange: afterVisibleChange,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        popupMotion: motion,
        defaultPopupVisible: defaultVisible,
        autoDestroy: destroyTooltipOnHide,
        mouseLeaveDelay: mouseLeaveDelay,
        popupStyle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, overlayStyle), tooltipStyles === null || tooltipStyles === void 0 ? void 0 : tooltipStyles.root),
        mouseEnterDelay: mouseEnterDelay,
        arrow: showArrow
    }, extraProps), getChildren());
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"])(Tooltip);
}),
"[project]/Downloads/One click/node_modules/rc-tooltip/es/index.js [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tooltip$2f$es$2f$Popup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-tooltip/es/Popup.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tooltip$2f$es$2f$Tooltip$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-tooltip/es/Tooltip.js [client] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tooltip$2f$es$2f$Tooltip$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Downloads/One click/node_modules/rc-tooltip/es/Popup.js [client] (ecmascript) <export default as Popup>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tooltip$2f$es$2f$Popup$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$tooltip$2f$es$2f$Popup$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-tooltip/es/Popup.js [client] (ecmascript)");
}),
"[project]/Downloads/One click/node_modules/rc-dropdown/es/hooks/useAccessibility.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useAccessibility
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/KeyCode.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/raf.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
;
;
var ESC = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].ESC, TAB = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].TAB;
function useAccessibility(_ref) {
    var visible = _ref.visible, triggerRef = _ref.triggerRef, onVisibleChange = _ref.onVisibleChange, autoFocus = _ref.autoFocus, overlayRef = _ref.overlayRef;
    var focusMenuRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](false);
    var handleCloseMenuAndReturnFocus = function handleCloseMenuAndReturnFocus() {
        if (visible) {
            var _triggerRef$current, _triggerRef$current$f;
            (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 || (_triggerRef$current$f = _triggerRef$current.focus) === null || _triggerRef$current$f === void 0 || _triggerRef$current$f.call(_triggerRef$current);
            onVisibleChange === null || onVisibleChange === void 0 || onVisibleChange(false);
        }
    };
    var focusMenu = function focusMenu() {
        var _overlayRef$current;
        if ((_overlayRef$current = overlayRef.current) !== null && _overlayRef$current !== void 0 && _overlayRef$current.focus) {
            overlayRef.current.focus();
            focusMenuRef.current = true;
            return true;
        }
        return false;
    };
    var handleKeyDown = function handleKeyDown(event) {
        switch(event.keyCode){
            case ESC:
                handleCloseMenuAndReturnFocus();
                break;
            case TAB:
                {
                    var focusResult = false;
                    if (!focusMenuRef.current) {
                        focusResult = focusMenu();
                    }
                    if (focusResult) {
                        event.preventDefault();
                    } else {
                        handleCloseMenuAndReturnFocus();
                    }
                    break;
                }
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useAccessibility.useEffect": function() {
            if (visible) {
                window.addEventListener("keydown", handleKeyDown);
                if (autoFocus) {
                    // FIXME: hack with raf
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(focusMenu, 3);
                }
                return ({
                    "useAccessibility.useEffect": function() {
                        window.removeEventListener("keydown", handleKeyDown);
                        focusMenuRef.current = false;
                    }
                })["useAccessibility.useEffect"];
            }
            return ({
                "useAccessibility.useEffect": function() {
                    focusMenuRef.current = false;
                }
            })["useAccessibility.useEffect"];
        }
    }["useAccessibility.useEffect"], [
        visible
    ]); // eslint-disable-line react-hooks/exhaustive-deps
}
}),
"[project]/Downloads/One click/node_modules/rc-dropdown/es/Overlay.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/ref.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
;
;
var Overlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var overlay = props.overlay, arrow = props.arrow, prefixCls = props.prefixCls;
    var overlayNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Overlay.useMemo[overlayNode]": function() {
            var overlayElement;
            if (typeof overlay === 'function') {
                overlayElement = overlay();
            } else {
                overlayElement = overlay;
            }
            return overlayElement;
        }
    }["Overlay.useMemo[overlayNode]"], [
        overlay
    ]);
    var composedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__["composeRef"])(ref, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getNodeRef"])(overlayNode));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, arrow && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "".concat(prefixCls, "-arrow")
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].cloneElement(overlayNode, {
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supportRef"])(overlayNode) ? composedRef : undefined
    }));
});
const __TURBOPACK__default__export__ = Overlay;
}),
"[project]/Downloads/One click/node_modules/rc-dropdown/es/placements.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var autoAdjustOverflow = {
    adjustX: 1,
    adjustY: 1
};
var targetOffset = [
    0,
    0
];
var placements = {
    topLeft: {
        points: [
            'bl',
            'tl'
        ],
        overflow: autoAdjustOverflow,
        offset: [
            0,
            -4
        ],
        targetOffset: targetOffset
    },
    top: {
        points: [
            'bc',
            'tc'
        ],
        overflow: autoAdjustOverflow,
        offset: [
            0,
            -4
        ],
        targetOffset: targetOffset
    },
    topRight: {
        points: [
            'br',
            'tr'
        ],
        overflow: autoAdjustOverflow,
        offset: [
            0,
            -4
        ],
        targetOffset: targetOffset
    },
    bottomLeft: {
        points: [
            'tl',
            'bl'
        ],
        overflow: autoAdjustOverflow,
        offset: [
            0,
            4
        ],
        targetOffset: targetOffset
    },
    bottom: {
        points: [
            'tc',
            'bc'
        ],
        overflow: autoAdjustOverflow,
        offset: [
            0,
            4
        ],
        targetOffset: targetOffset
    },
    bottomRight: {
        points: [
            'tr',
            'br'
        ],
        overflow: autoAdjustOverflow,
        offset: [
            0,
            4
        ],
        targetOffset: targetOffset
    }
};
const __TURBOPACK__default__export__ = placements;
}),
"[project]/Downloads/One click/node_modules/rc-dropdown/es/Dropdown.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/extends.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/defineProperty.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@rc-component/trigger/es/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-util/es/ref.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dropdown$2f$es$2f$hooks$2f$useAccessibility$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-dropdown/es/hooks/useAccessibility.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dropdown$2f$es$2f$Overlay$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-dropdown/es/Overlay.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dropdown$2f$es$2f$placements$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-dropdown/es/placements.js [client] (ecmascript)");
;
;
;
;
var _excluded = [
    "arrow",
    "prefixCls",
    "transitionName",
    "animation",
    "align",
    "placement",
    "placements",
    "getPopupContainer",
    "showAction",
    "hideAction",
    "overlayClassName",
    "overlayStyle",
    "visible",
    "trigger",
    "autoFocus",
    "overlay",
    "children",
    "onVisibleChange"
];
;
;
;
;
;
;
;
function Dropdown(props, ref) {
    var _children$props;
    var _props$arrow = props.arrow, arrow = _props$arrow === void 0 ? false : _props$arrow, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? 'rc-dropdown' : _props$prefixCls, transitionName = props.transitionName, animation = props.animation, align = props.align, _props$placement = props.placement, placement = _props$placement === void 0 ? 'bottomLeft' : _props$placement, _props$placements = props.placements, placements = _props$placements === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dropdown$2f$es$2f$placements$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] : _props$placements, getPopupContainer = props.getPopupContainer, showAction = props.showAction, hideAction = props.hideAction, overlayClassName = props.overlayClassName, overlayStyle = props.overlayStyle, visible = props.visible, _props$trigger = props.trigger, trigger = _props$trigger === void 0 ? [
        'hover'
    ] : _props$trigger, autoFocus = props.autoFocus, overlay = props.overlay, children = props.children, onVisibleChange = props.onVisibleChange, otherProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useState(), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), triggerVisible = _React$useState2[0], setTriggerVisible = _React$useState2[1];
    var mergedVisible = 'visible' in props ? visible : triggerVisible;
    var triggerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    var overlayRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    var childRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useImperativeHandle(ref, {
        "Dropdown.useImperativeHandle": function() {
            return triggerRef.current;
        }
    }["Dropdown.useImperativeHandle"]);
    var handleVisibleChange = function handleVisibleChange(newVisible) {
        setTriggerVisible(newVisible);
        onVisibleChange === null || onVisibleChange === void 0 || onVisibleChange(newVisible);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dropdown$2f$es$2f$hooks$2f$useAccessibility$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        visible: mergedVisible,
        triggerRef: childRef,
        onVisibleChange: handleVisibleChange,
        autoFocus: autoFocus,
        overlayRef: overlayRef
    });
    var onClick = function onClick(e) {
        var onOverlayClick = props.onOverlayClick;
        setTriggerVisible(false);
        if (onOverlayClick) {
            onOverlayClick(e);
        }
    };
    var getMenuElement = function getMenuElement() {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dropdown$2f$es$2f$Overlay$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            ref: overlayRef,
            overlay: overlay,
            prefixCls: prefixCls,
            arrow: arrow
        });
    };
    var getMenuElementOrLambda = function getMenuElementOrLambda() {
        if (typeof overlay === 'function') {
            return getMenuElement;
        }
        return getMenuElement();
    };
    var getMinOverlayWidthMatchTrigger = function getMinOverlayWidthMatchTrigger() {
        var minOverlayWidthMatchTrigger = props.minOverlayWidthMatchTrigger, alignPoint = props.alignPoint;
        if ('minOverlayWidthMatchTrigger' in props) {
            return minOverlayWidthMatchTrigger;
        }
        return !alignPoint;
    };
    var getOpenClassName = function getOpenClassName() {
        var openClassName = props.openClassName;
        if (openClassName !== undefined) {
            return openClassName;
        }
        return "".concat(prefixCls, "-open");
    };
    var childrenNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].cloneElement(children, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])((_children$props = children.props) === null || _children$props === void 0 ? void 0 : _children$props.className, mergedVisible && getOpenClassName()),
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supportRef"])(children) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__["composeRef"])(childRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getNodeRef"])(children)) : undefined
    });
    var triggerHideAction = hideAction;
    if (!triggerHideAction && trigger.indexOf('contextMenu') !== -1) {
        triggerHideAction = [
            'click'
        ];
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        builtinPlacements: placements
    }, otherProps, {
        prefixCls: prefixCls,
        ref: triggerRef,
        popupClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(overlayClassName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-show-arrow"), arrow)),
        popupStyle: overlayStyle,
        action: trigger,
        showAction: showAction,
        hideAction: triggerHideAction,
        popupPlacement: placement,
        popupAlign: align,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        popupVisible: mergedVisible,
        stretch: getMinOverlayWidthMatchTrigger() ? 'minWidth' : '',
        popup: getMenuElementOrLambda(),
        onPopupVisibleChange: handleVisibleChange,
        onPopupClick: onClick,
        getPopupContainer: getPopupContainer
    }), childrenNode);
}
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].forwardRef(Dropdown);
}),
"[project]/Downloads/One click/node_modules/rc-dropdown/es/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dropdown$2f$es$2f$Dropdown$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/rc-dropdown/es/Dropdown.js [client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$rc$2d$dropdown$2f$es$2f$Dropdown$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Downloads/One click/node_modules/goober/dist/goober.modern.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "css",
    ()=>u,
    "extractCss",
    ()=>r,
    "glob",
    ()=>b,
    "keyframes",
    ()=>h,
    "setup",
    ()=>m,
    "styled",
    ()=>j
]);
let e = {
    data: ""
}, t = (t)=>"object" == typeof window ? ((t ? t.querySelector("#_goober") : window._goober) || Object.assign((t || document.head).appendChild(document.createElement("style")), {
        innerHTML: " ",
        id: "_goober"
    })).firstChild : t || e, r = (e)=>{
    let r = t(e), l = r.data;
    return r.data = "", l;
}, l = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, a = /\/\*[^]*?\*\/|  +/g, n = /\n+/g, o = (e, t)=>{
    let r = "", l = "", a = "";
    for(let n in e){
        let c = e[n];
        "@" == n[0] ? "i" == n[1] ? r = n + " " + c + ";" : l += "f" == n[1] ? o(c, n) : n + "{" + o(c, "k" == n[1] ? "" : t) + "}" : "object" == typeof c ? l += o(c, t ? t.replace(/([^,])+/g, (e)=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (t)=>/&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)) : n) : null != c && (n = /^--/.test(n) ? n : n.replace(/[A-Z]/g, "-$&").toLowerCase(), a += o.p ? o.p(n, c) : n + ":" + c + ";");
    }
    return r + (t && a ? t + "{" + a + "}" : a) + l;
}, c = {}, s = (e)=>{
    if ("object" == typeof e) {
        let t = "";
        for(let r in e)t += r + s(e[r]);
        return t;
    }
    return e;
}, i = (e, t, r, i, p)=>{
    let u = s(e), d = c[u] || (c[u] = ((e)=>{
        let t = 0, r = 11;
        for(; t < e.length;)r = 101 * r + e.charCodeAt(t++) >>> 0;
        return "go" + r;
    })(u));
    if (!c[d]) {
        let t = u !== e ? e : ((e)=>{
            let t, r, o = [
                {}
            ];
            for(; t = l.exec(e.replace(a, ""));)t[4] ? o.shift() : t[3] ? (r = t[3].replace(n, " ").trim(), o.unshift(o[0][r] = o[0][r] || {})) : o[0][t[1]] = t[2].replace(n, " ").trim();
            return o[0];
        })(e);
        c[d] = o(p ? {
            ["@keyframes " + d]: t
        } : t, r ? "" : "." + d);
    }
    let f = r && c.g ? c.g : null;
    return r && (c.g = c[d]), ((e, t, r, l)=>{
        l ? t.data = t.data.replace(l, e) : -1 === t.data.indexOf(e) && (t.data = r ? e + t.data : t.data + e);
    })(c[d], t, i, f), d;
}, p = (e, t, r)=>e.reduce((e, l, a)=>{
        let n = t[a];
        if (n && n.call) {
            let e = n(r), t = e && e.props && e.props.className || /^go/.test(e) && e;
            n = t ? "." + t : e && "object" == typeof e ? e.props ? "" : o(e, "") : !1 === e ? "" : e;
        }
        return e + l + (null == n ? "" : n);
    }, "");
function u(e) {
    let r = this || {}, l = e.call ? e(r.p) : e;
    return i(l.unshift ? l.raw ? p(l, [].slice.call(arguments, 1), r.p) : l.reduce((e, t)=>Object.assign(e, t && t.call ? t(r.p) : t), {}) : l, t(r.target), r.g, r.o, r.k);
}
let d, f, g, b = u.bind({
    g: 1
}), h = u.bind({
    k: 1
});
function m(e, t, r, l) {
    o.p = t, d = e, f = r, g = l;
}
function j(e, t) {
    let r = this || {};
    return function() {
        let l = arguments;
        function a(n, o) {
            let c = Object.assign({}, n), s = c.className || a.className;
            r.p = Object.assign({
                theme: f && f()
            }, c), r.o = / *go\d+/.test(s), c.className = u.apply(r, l) + (s ? " " + s : ""), t && (c.ref = o);
            let i = e;
            return e[0] && (i = c.as || e, delete c.as), g && i[0] && g(c), d(i, c);
        }
        return t ? t(a) : a;
    };
}
;
}),
"[project]/Downloads/One click/node_modules/react-hot-toast/dist/index.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckmarkIcon",
    ()=>L,
    "ErrorIcon",
    ()=>C,
    "LoaderIcon",
    ()=>F,
    "ToastBar",
    ()=>N,
    "ToastIcon",
    ()=>$,
    "Toaster",
    ()=>Fe,
    "default",
    ()=>zt,
    "resolveValue",
    ()=>h,
    "toast",
    ()=>n,
    "useToaster",
    ()=>w,
    "useToasterStore",
    ()=>V
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@swc/helpers/esm/_tagged_template_literal.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/goober/dist/goober.modern.js [client] (ecmascript)");
"use client";
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])([
        "\nfrom {\n  transform: scale(0) rotate(45deg);\n	opacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])([
        "\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])([
        "\nfrom {\n  transform: scale(0) rotate(90deg);\n	opacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n	opacity: 1;\n}"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",
        ";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: ",
        " 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: ",
        " 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",
        ";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: ",
        " 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
function _templateObject4() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"
    ]);
    _templateObject4 = function() {
        return data;
    };
    return data;
}
function _templateObject5() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",
        ";\n  border-right-color: ",
        ";\n  animation: ",
        " 1s linear infinite;\n"
    ]);
    _templateObject5 = function() {
        return data;
    };
    return data;
}
function _templateObject6() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])([
        "\nfrom {\n  transform: scale(0) rotate(45deg);\n	opacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n	opacity: 1;\n}"
    ]);
    _templateObject6 = function() {
        return data;
    };
    return data;
}
function _templateObject7() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])([
        "\n0% {\n	height: 0;\n	width: 0;\n	opacity: 0;\n}\n40% {\n  height: 0;\n	width: 6px;\n	opacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"
    ]);
    _templateObject7 = function() {
        return data;
    };
    return data;
}
function _templateObject8() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",
        ";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: ",
        " 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: ",
        " 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",
        ";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"
    ]);
    _templateObject8 = function() {
        return data;
    };
    return data;
}
function _templateObject9() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n"
    ]);
    _templateObject9 = function() {
        return data;
    };
    return data;
}
function _templateObject10() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"
    ]);
    _templateObject10 = function() {
        return data;
    };
    return data;
}
function _templateObject11() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])([
        "\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"
    ]);
    _templateObject11 = function() {
        return data;
    };
    return data;
}
function _templateObject12() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: ",
        " 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"
    ]);
    _templateObject12 = function() {
        return data;
    };
    return data;
}
function _templateObject13() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"
    ]);
    _templateObject13 = function() {
        return data;
    };
    return data;
}
function _templateObject14() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"
    ]);
    _templateObject14 = function() {
        return data;
    };
    return data;
}
function _templateObject15() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"
    ]);
    _templateObject15 = function() {
        return data;
    };
    return data;
}
var Z = (e)=>typeof e == "function", h = (e, t)=>Z(e) ? e(t) : e;
var W = (()=>{
    let e = 0;
    return ()=>(++e).toString();
})(), E = (()=>{
    let e;
    return ()=>{
        if (e === void 0 && typeof window < "u") {
            let t = matchMedia("(prefers-reduced-motion: reduce)");
            e = !t || t.matches;
        }
        return e;
    };
})();
;
var re = 20, k = "default";
var H = (e, t)=>{
    let { toastLimit: o } = e.settings;
    switch(t.type){
        case 0:
            return {
                ...e,
                toasts: [
                    t.toast,
                    ...e.toasts
                ].slice(0, o)
            };
        case 1:
            return {
                ...e,
                toasts: e.toasts.map((r)=>r.id === t.toast.id ? {
                        ...r,
                        ...t.toast
                    } : r)
            };
        case 2:
            let { toast: s } = t;
            return H(e, {
                type: e.toasts.find((r)=>r.id === s.id) ? 1 : 0,
                toast: s
            });
        case 3:
            let { toastId: a } = t;
            return {
                ...e,
                toasts: e.toasts.map((r)=>r.id === a || a === void 0 ? {
                        ...r,
                        dismissed: !0,
                        visible: !1
                    } : r)
            };
        case 4:
            return t.toastId === void 0 ? {
                ...e,
                toasts: []
            } : {
                ...e,
                toasts: e.toasts.filter((r)=>r.id !== t.toastId)
            };
        case 5:
            return {
                ...e,
                pausedAt: t.time
            };
        case 6:
            let i = t.time - (e.pausedAt || 0);
            return {
                ...e,
                pausedAt: void 0,
                toasts: e.toasts.map((r)=>({
                        ...r,
                        pauseDuration: r.pauseDuration + i
                    }))
            };
    }
}, v = [], j = {
    toasts: [],
    pausedAt: void 0,
    settings: {
        toastLimit: re
    }
}, f = {}, Y = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : k;
    f[t] = H(f[t] || j, e), v.forEach((param)=>{
        let [o, s] = param;
        o === t && s(f[t]);
    });
}, _ = (e)=>Object.keys(f).forEach((t)=>Y(e, t)), Q = (e)=>Object.keys(f).find((t)=>f[t].toasts.some((o)=>o.id === e)), S = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : k;
    return (t)=>{
        Y(t, e);
    };
}, se = {
    blank: 4e3,
    error: 4e3,
    success: 2e3,
    loading: 1 / 0,
    custom: 4e3
}, V = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : k;
    let [o, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(f[t] || j), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(f[t]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>(a.current !== f[t] && s(f[t]), v.push([
            t,
            s
        ]), ()=>{
            let r = v.findIndex((param)=>{
                let [l] = param;
                return l === t;
            });
            r > -1 && v.splice(r, 1);
        }), [
        t
    ]);
    let i = o.toasts.map((r)=>{
        var l, g, T;
        return {
            ...e,
            ...e[r.type],
            ...r,
            removeDelay: r.removeDelay || ((l = e[r.type]) == null ? void 0 : l.removeDelay) || (e == null ? void 0 : e.removeDelay),
            duration: r.duration || ((g = e[r.type]) == null ? void 0 : g.duration) || (e == null ? void 0 : e.duration) || se[r.type],
            style: {
                ...e.style,
                ...(T = e[r.type]) == null ? void 0 : T.style,
                ...r.style
            }
        };
    });
    return {
        ...o,
        toasts: i
    };
};
var ie = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "blank", o = arguments.length > 2 ? arguments[2] : void 0;
    return {
        createdAt: Date.now(),
        visible: !0,
        dismissed: !1,
        type: t,
        ariaProps: {
            role: "status",
            "aria-live": "polite"
        },
        message: e,
        pauseDuration: 0,
        ...o,
        id: (o == null ? void 0 : o.id) || W()
    };
}, P = (e)=>(t, o)=>{
        let s = ie(t, e, o);
        return S(s.toasterId || Q(s.id))({
            type: 2,
            toast: s
        }), s.id;
    }, n = (e, t)=>P("blank")(e, t);
n.error = P("error");
n.success = P("success");
n.loading = P("loading");
n.custom = P("custom");
n.dismiss = (e, t)=>{
    let o = {
        type: 3,
        toastId: e
    };
    t ? S(t)(o) : _(o);
};
n.dismissAll = (e)=>n.dismiss(void 0, e);
n.remove = (e, t)=>{
    let o = {
        type: 4,
        toastId: e
    };
    t ? S(t)(o) : _(o);
};
n.removeAll = (e)=>n.remove(void 0, e);
n.promise = (e, t, o)=>{
    let s = n.loading(t.loading, {
        ...o,
        ...o == null ? void 0 : o.loading
    });
    return typeof e == "function" && (e = e()), e.then((a)=>{
        let i = t.success ? h(t.success, a) : void 0;
        return i ? n.success(i, {
            id: s,
            ...o,
            ...o == null ? void 0 : o.success
        }) : n.dismiss(s), a;
    }).catch((a)=>{
        let i = t.error ? h(t.error, a) : void 0;
        i ? n.error(i, {
            id: s,
            ...o,
            ...o == null ? void 0 : o.error
        }) : n.dismiss(s);
    }), e;
};
;
var ce = 1e3, w = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
    let { toasts: o, pausedAt: s } = V(e, t), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(new Map).current, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])(function(c) {
        let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ce;
        if (a.has(c)) return;
        let p = setTimeout(()=>{
            a.delete(c), r({
                type: 4,
                toastId: c
            });
        }, m);
        a.set(c, p);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (s) return;
        let c = Date.now(), m = o.map((p)=>{
            if (p.duration === 1 / 0) return;
            let R = (p.duration || 0) + p.pauseDuration - (c - p.createdAt);
            if (R < 0) {
                p.visible && n.dismiss(p.id);
                return;
            }
            return setTimeout(()=>n.dismiss(p.id, t), R);
        });
        return ()=>{
            m.forEach((p)=>p && clearTimeout(p));
        };
    }, [
        o,
        s,
        t
    ]);
    let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])(S(t), [
        t
    ]), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        r({
            type: 5,
            time: Date.now()
        });
    }, [
        r
    ]), g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])((c, m)=>{
        r({
            type: 1,
            toast: {
                id: c,
                height: m
            }
        });
    }, [
        r
    ]), T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        s && r({
            type: 6,
            time: Date.now()
        });
    }, [
        s,
        r
    ]), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])((c, m)=>{
        let { reverseOrder: p = !1, gutter: R = 8, defaultPosition: z } = m || {}, O = o.filter((u)=>(u.position || z) === (c.position || z) && u.height), K = O.findIndex((u)=>u.id === c.id), B = O.filter((u, I)=>I < K && u.visible).length;
        return O.filter((u)=>u.visible).slice(...p ? [
            B + 1
        ] : [
            0,
            B
        ]).reduce((u, I)=>u + (I.height || 0) + R, 0);
    }, [
        o
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        o.forEach((c)=>{
            if (c.dismissed) i(c.id, c.removeDelay);
            else {
                let m = a.get(c.id);
                m && (clearTimeout(m), a.delete(c.id));
            }
        });
    }, [
        o,
        i
    ]), {
        toasts: o,
        handlers: {
            updateHeight: g,
            startPause: l,
            endPause: T,
            calculateOffset: d
        }
    };
};
;
;
;
;
;
var de = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject()), me = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject1()), le = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject2()), C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["styled"])("div")(_templateObject3(), (e)=>e.primary || "#ff4b4b", de, me, (e)=>e.secondary || "#fff", le);
;
var Te = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject4()), F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["styled"])("div")(_templateObject5(), (e)=>e.secondary || "#e0e0e0", (e)=>e.primary || "#616161", Te);
;
var ge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject6()), he = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject7()), L = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["styled"])("div")(_templateObject8(), (e)=>e.primary || "#61d345", ge, he, (e)=>e.secondary || "#fff");
var be = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["styled"])("div")(_templateObject9()), Se = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["styled"])("div")(_templateObject10()), Ae = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject11()), Pe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["styled"])("div")(_templateObject12(), Ae), $ = (param)=>{
    let { toast: e } = param;
    let { icon: t, type: o, iconTheme: s } = e;
    return t !== void 0 ? typeof t == "string" ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](Pe, null, t) : t : o === "blank" ? null : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](Se, null, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](F, {
        ...s
    }), o !== "loading" && __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](be, null, o === "error" ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](C, {
        ...s
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](L, {
        ...s
    })));
};
var Re = (e)=>"\n0% {transform: translate3d(0,".concat(e * -200, "%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"), Ee = (e)=>"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(e * -150, "%,-1px) scale(.6); opacity:0;}\n"), ve = "0%{opacity:0;} 100%{opacity:1;}", De = "0%{opacity:1;} 100%{opacity:0;}", Oe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["styled"])("div")(_templateObject13()), Ie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["styled"])("div")(_templateObject14()), ke = (e, t)=>{
    let s = e.includes("top") ? 1 : -1, [a, i] = E() ? [
        ve,
        De
    ] : [
        Re(s),
        Ee(s)
    ];
    return {
        animation: t ? "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["keyframes"])(a), " 0.35s cubic-bezier(.21,1.02,.73,1) forwards") : "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["keyframes"])(i), " 0.4s forwards cubic-bezier(.06,.71,.55,1)")
    };
}, N = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["memo"]((param)=>{
    let { toast: e, position: t, style: o, children: s } = param;
    let a = e.height ? ke(e.position || t || "top-center", e.visible) : {
        opacity: 0
    }, i = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]($, {
        toast: e
    }), r = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](Ie, {
        ...e.ariaProps
    }, h(e.message, e));
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](Oe, {
        className: e.className,
        style: {
            ...a,
            ...o,
            ...e.style
        }
    }, typeof s == "function" ? s({
        icon: i,
        message: r
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], null, i, r));
});
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["setup"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]);
var we = (param)=>{
    let { id: e, className: t, style: o, onHeightUpdate: s, children: a } = param;
    let i = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "we.useCallback[i]": (r)=>{
            if (r) {
                let l = {
                    "we.useCallback[i].l": ()=>{
                        let g = r.getBoundingClientRect().height;
                        s(e, g);
                    }
                }["we.useCallback[i].l"];
                l(), new MutationObserver(l).observe(r, {
                    subtree: !0,
                    childList: !0,
                    characterData: !0
                });
            }
        }
    }["we.useCallback[i]"], [
        e,
        s
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: i,
        className: t,
        style: o
    }, a);
}, Me = (e, t)=>{
    let o = e.includes("top"), s = o ? {
        top: 0
    } : {
        bottom: 0
    }, a = e.includes("center") ? {
        justifyContent: "center"
    } : e.includes("right") ? {
        justifyContent: "flex-end"
    } : {};
    return {
        left: 0,
        right: 0,
        display: "flex",
        position: "absolute",
        transition: E() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
        transform: "translateY(".concat(t * (o ? 1 : -1), "px)"),
        ...s,
        ...a
    };
}, Ce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$goober$2f$dist$2f$goober$2e$modern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["css"])(_templateObject15()), D = 16, Fe = (param)=>{
    let { reverseOrder: e, position: t = "top-center", toastOptions: o, gutter: s, children: a, toasterId: i, containerStyle: r, containerClassName: l } = param;
    let { toasts: g, handlers: T } = w(o, i);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        "data-rht-toaster": i || "",
        style: {
            position: "fixed",
            zIndex: 9999,
            top: D,
            left: D,
            right: D,
            bottom: D,
            pointerEvents: "none",
            ...r
        },
        className: l,
        onMouseEnter: T.startPause,
        onMouseLeave: T.endPause
    }, g.map((d)=>{
        let c = d.position || t, m = T.calculateOffset(d, {
            reverseOrder: e,
            gutter: s,
            defaultPosition: t
        }), p = Me(c, m);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](we, {
            id: d.id,
            key: d.id,
            onHeightUpdate: T.updateHeight,
            className: d.visible ? Ce : "",
            style: p
        }, d.type === "custom" ? h(d.message, d) : a ? a(d) : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"](N, {
            toast: d,
            position: c
        }));
    }));
};
var zt = n;
;
 //# sourceMappingURL=index.mjs.map
}),
]);

//# sourceMappingURL=f2ed1_00cada93._.js.map