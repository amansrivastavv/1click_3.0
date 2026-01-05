(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect(param) {
    let { addMessageListener, sendMessage, onUpdateError = console.error } = param;
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: (param)=>{
            let [chunkPath, callback] = param;
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        var _updateA_modules;
        const deletedModules = new Set((_updateA_modules = updateA.modules) !== null && _updateA_modules !== void 0 ? _updateA_modules : []);
        var _updateB_modules;
        const addedModules = new Set((_updateB_modules = updateB.modules) !== null && _updateB_modules !== void 0 ? _updateB_modules : []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        var _updateA_added, _updateB_added;
        const added = new Set([
            ...(_updateA_added = updateA.added) !== null && _updateA_added !== void 0 ? _updateA_added : [],
            ...(_updateB_added = updateB.added) !== null && _updateB_added !== void 0 ? _updateB_added : []
        ]);
        var _updateA_deleted, _updateB_deleted;
        const deleted = new Set([
            ...(_updateA_deleted = updateA.deleted) !== null && _updateA_deleted !== void 0 ? _updateA_deleted : [],
            ...(_updateB_deleted = updateB.deleted) !== null && _updateB_deleted !== void 0 ? _updateB_deleted : []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        var _updateA_modules1, _updateB_added1;
        const modules = new Set([
            ...(_updateA_modules1 = updateA.modules) !== null && _updateA_modules1 !== void 0 ? _updateA_modules1 : [],
            ...(_updateB_added1 = updateB.added) !== null && _updateB_added1 !== void 0 ? _updateB_added1 : []
        ]);
        var _updateB_deleted1;
        for (const moduleId of (_updateB_deleted1 = updateB.deleted) !== null && _updateB_deleted1 !== void 0 ? _updateB_deleted1 : []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        var _updateB_modules1;
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set((_updateB_modules1 = updateB.modules) !== null && _updateB_modules1 !== void 0 ? _updateB_modules1 : []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error("Invariant: ".concat(message));
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[project]/Downloads/One click/src/components/home/cards.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$card$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/card/index.js [client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/typography/index.js [client] (ecmascript) <export default as Typography>");
"use client";
;
;
const { Title, Text } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const Cards = (param)=>{
    let { icon, title, value, color } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$card$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
        className: " w-full shadow-md rounded-2xl border-none bg-white hover:shadow-lg transition-all duration-300 ",
        bodyStyle: {
            padding: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 p-4 sm:p-5 md:p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " flex items-center justify-center rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white shrink-0 ",
                    style: {
                        backgroundColor: color || "#edf1f5"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl sm:text-2xl md:text-3xl",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/home/cards.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/home/cards.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                            className: "text-gray-500 text-xs sm:text-sm md:text-base font-medium leading-tight",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/cards.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                            level: 4,
                            className: "!m-0 mt-1 text-lg sm:text-xl md:text-2xl font-semibold text-[#1F2143]",
                            children: value
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/cards.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/home/cards.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/One click/src/components/home/cards.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/One click/src/components/home/cards.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Cards;
const __TURBOPACK__default__export__ = Cards;
var _c;
__turbopack_context__.k.register(_c, "Cards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/One click/src/components/home/FilterDropdown.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FilterDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/chevron-down.js [client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FilterDropdown(param) {
    let { onFilterChange } = param;
    var _options_find;
    _s();
    const [selectedValue, setSelectedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("-1");
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const options = [
        {
            label: "All",
            value: "-1"
        },
        {
            label: "Pending",
            value: "2"
        },
        {
            label: "Approved",
            value: "1"
        },
        {
            label: "Rejected",
            value: "0"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FilterDropdown.useEffect": ()=>{
            onFilterChange("-1");
        }
    }["FilterDropdown.useEffect"], []);
    const handleSelect = (option)=>{
        setSelectedValue(option.value);
        onFilterChange(option.value);
        setOpen(false);
    };
    const selectedLabel = ((_options_find = options.find((opt)=>opt.value === selectedValue)) === null || _options_find === void 0 ? void 0 : _options_find.label) || "All";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative inline-block text-left",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-black",
                        children: "Filter by:"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/home/FilterDropdown.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.97
                        },
                        onClick: ()=>setOpen(!open),
                        className: "flex items-center justify-between gap-2 min-w-[140px] px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border ".concat(open ? "bg-gray-500 text-white border-gray-700" : "bg-white text-black border-gray-300"),
                        children: [
                            selectedLabel,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    rotate: open ? 180 : 0
                                },
                                transition: {
                                    duration: 0.25
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/home/FilterDropdown.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/home/FilterDropdown.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/One click/src/components/home/FilterDropdown.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/One click/src/components/home/FilterDropdown.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -8
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -8
                    },
                    transition: {
                        duration: 0.25
                    },
                    className: "absolute right-0 mt-2 w-44 rounded-xl shadow-xl border border-gray-300 bg-white z-20 overflow-hidden",
                    children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            whileHover: {
                                scale: 1.02,
                                backgroundColor: "#f3f4f6",
                                color: "#111827"
                            },
                            whileTap: {
                                scale: 0.97
                            },
                            onClick: ()=>handleSelect(option),
                            className: "block w-full text-left px-4 py-2.5 text-sm font-medium transition-all ".concat(selectedValue === option.value ? "bg-gray-500 text-white" : "text-gray-500 hover:bg-gray-100"),
                            children: option.label
                        }, option.value, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/FilterDropdown.tsx",
                            lineNumber: 77,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/home/FilterDropdown.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/home/FilterDropdown.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/One click/src/components/home/FilterDropdown.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(FilterDropdown, "jtpfIJm2Dz2d3+ENNJnIYhKHQDk=");
_c = FilterDropdown;
var _c;
__turbopack_context__.k.register(_c, "FilterDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/One click/src/api/config.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_CONFIG",
    ()=>API_CONFIG,
    "API_ENDPOINTS",
    ()=>API_ENDPOINTS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
const isProd = ("TURBOPACK compile-time value", "development") === "production";
const API_CONFIG = {
    BASE_URL: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "/api/proxy",
    TOKEN_KEY: "auth_token",
    USER_KEY: "user_data"
};
const API_ENDPOINTS = {
    LOGIN: "/admin_login.php",
    GET_COMPANIES: "/admin_get_insurance_companies.php",
    SAVE_COMPANIE: "/admin_update_insurance_companies.php",
    // Add more endpoints here
    // DASHBOARD: '/dashboard.php',
    // USERS: '/users.php',
    GET_INSURANCE: "/admin_get_insurance_types.php",
    SAVE_INSURANCE: "/add_update_insurance_types.php",
    GET_UPCOMMING: "/admin_getUserInsurances_v2.php",
    DASHBOARD_CARDS_DATA: "/admin_dashboard_values.php",
    VIEW_UPCOMMING: "/admin_getUserInsurances_v2.php",
    //For notification send
    NOTIFICATIONS_SEND: "/firebase_notificationv2.php?user_id=5",
    //For Send Email
    EMAIL_SEND: "/email_notificationv2.php?user_id=8&policy_id=1",
    SMS_SEND: "/email_notificationv2.php?user_id=8&policy_id=1",
    WHATSAPP_SEND: "/email_notificationv2.php?user_id=8&policy_id=1",
    //for bar chart
    GETBAR_CHART: "/admin_get_user_registration_chart.php",
    ADMIN_GET_USER_POLICIES: "/admin_get_user_policy_v2.php",
    ADMIN_UPDATE_POLICY: "/admin_upload_policy_v2.php",
    //Bar chart Data yearly/monthly/daily
    GET_USER_CHART_DATA: "/admin_barchart_report.php",
    //user data
    GET_USERS_DATA: "/user_policy_data.php",
    //Data
    GET_read_csv: "/admin_read-csv.php",
    GET_sync_csv: "/admin_sync_csv.php",
    // Manage Dashboard
    GET_POLICY_OPTIONS: "/get_policy_options.php",
    UPDATE_POLICY_OPTIONS: "/admin_update_policy_option.php"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/One click/src/api/storage.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// storage.ts
__turbopack_context__.s([
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/config.ts [client] (ecmascript)");
;
class StorageManager {
    /**
   * Check if we're in browser (not SSR)
   */ isBrowser() {
        return "object" !== "undefined";
    }
    setToken(token) {
        if (this.isBrowser()) {
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].TOKEN_KEY, token);
        }
    }
    getToken() {
        if (this.isBrowser()) {
            return localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].TOKEN_KEY);
        }
        return null;
    }
    setUser(user) {
        if (this.isBrowser()) {
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].USER_KEY, JSON.stringify(user));
        }
    }
    getUser() {
        if (this.isBrowser()) {
            const user = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].USER_KEY);
            return user ? JSON.parse(user) : null;
        }
        return null;
    }
    clearAuth() {
        if (this.isBrowser()) {
            localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].TOKEN_KEY);
            localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].USER_KEY);
        }
    }
    isAuthenticated() {
        return !!this.getToken();
    }
}
const storage = new StorageManager();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/One click/src/api/client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiClient",
    ()=>apiClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@swc/helpers/esm/_define_property.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/config.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/storage.ts [client] (ecmascript)");
;
;
;
class ApiClient {
    /**
   * Build headers for request
   * WHAT IT DOES:
   * - Adds Content-Type header
   * - Adds Authorization header (if token exists)
   * - Adds any custom headers
   *
   * @param customHeaders - Optional custom headers
   * @param requiresAuth - Should we add token?
   * @returns Headers object
   */ getHeaders(customHeaders) {
        let requiresAuth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        const headers = {
            "Content-Type": "application/json",
            ...customHeaders
        };
        if (requiresAuth) {
            const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].getToken();
            if (token) {
                headers["customAuthorization"] = "Bearer ".concat(token);
            }
        }
        return headers;
    }
    /**
   * Handle API response
   * WHAT IT DOES:
   * - Converts response to JSON
   * - Checks if request was successful
   * - Returns standardized response
   *
   * @param response - Fetch API response object
   * @returns Standardized ApiResponse
   */ async handleResponse(response) {
        // 1. Check for success status codes that might have no content (204 No Content)
        if (response.status === 204) {
            return {
                status: "success",
                message: "Success"
            };
        }
        const text = await response.text(); // Read text first to debug
        try {
            // 2. Try parsing JSON
            // Clean up common PHP issues where text/HTML is prepended to JSON
            let responseText = text;
            const jsonStart = text.search(/[{\[]/);
            if (jsonStart > 0) {
                responseText = text.substring(jsonStart);
            }
            // If text is empty string, JSON.parse throws. Handle it.
            if (!responseText) {
                if (response.ok) {
                    console.warn("API returned 200 OK but empty body");
                    return {
                        status: "success",
                        message: "Success (Empty Body)"
                    };
                }
                throw new Error("Empty response from server (Status: ".concat(response.status, ")"));
            }
            const data = JSON.parse(responseText);
            // Check if API returned error status
            if (data.status === "error") {
                return {
                    status: "error",
                    message: data.message || "An error occurred"
                };
            }
            // Return successful response
            return data;
        } catch (error) {
            // 3. Fallback for non-JSON response (likely HTML error or simple string)
            console.error("Failed to parse response:", error);
            console.log("Raw Response Text:", text); // Log raw text for debugging
            if (!response.ok) {
                // If server returned error (500, 404, etc)
                return {
                    status: "error",
                    message: "API Error (".concat(response.status, "): ").concat(text.substring(0, 100))
                };
            }
            return {
                status: "error",
                message: "Failed to parse API response. Check console for details."
            };
        }
    }
    /**
   * Main request method (PRIVATE - used internally)
   * WHAT IT DOES:
   * - Builds complete URL
   * - Adds headers
   * - Makes fetch request
   * - Handles authentication errors
   *
   * @param endpoint - API endpoint (e.g., '/users.php')
   * @param options - Request options (method, body, etc.)
   * @returns API response
   */ async request(endpoint) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        // Extract our custom options
        const { requiresAuth = true, customHeaders, ...fetchOptions } = options;
        // Build complete URL
        const url = "".concat(this.baseURL).concat(endpoint);
        // Get headers with token
        const headers = this.getHeaders(customHeaders, requiresAuth);
        try {
            // Make HTTP request
            const response = await fetch(url, {
                ...fetchOptions,
                headers
            });
            // Parse response
            const result = await this.handleResponse(response);
            // Handle unauthorized (401) or token expired
            if (response.status === 401 || result.status === "error" && result.message.toLowerCase().includes("unauthorized")) {
                // Clear saved data
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].clearAuth();
                // Redirect to login
                window.location.href = "/login";
            }
            return result;
        } catch (error) {
            // Network error or other error
            console.error("API request failed:", error);
            return {
                status: "error",
                message: error instanceof Error ? error.message : "Network error"
            };
        }
    }
    /**
   * GET request
   * USE WHEN: Fetching data from server
   * EXAMPLE: Get list of users
   *
   * @param endpoint - API endpoint
   * @param config - Optional configuration
   * @returns API response with data
   */ async get(endpoint, config) {
        return this.request(endpoint, {
            ...config,
            method: "GET"
        });
    }
    /**
   * POST request
   * USE WHEN: Creating new data or sending data to server
   * EXAMPLE: Login, create user, submit form
   *
   * @param endpoint - API endpoint
   * @param body - Data to send (will be converted to JSON)
   * @param config - Optional configuration
   * @returns API response
   */ async post(endpoint, body, config) {
        return this.request(endpoint, {
            ...config,
            method: "POST",
            body: JSON.stringify(body)
        });
    }
    /**
   * PUT request
   * USE WHEN: Updating existing data (complete replacement)
   * EXAMPLE: Update entire user profile
   *
   * @param endpoint - API endpoint
   * @param body - Data to send
   * @param config - Optional configuration
   * @returns API response
   */ async put(endpoint, body, config) {
        return this.request(endpoint, {
            ...config,
            method: "PUT",
            body: JSON.stringify(body)
        });
    }
    /**
   * DELETE request
   * USE WHEN: Deleting data
   * EXAMPLE: Delete user, remove item
   *
   * @param endpoint - API endpoint
   * @param config - Optional configuration
   * @returns API response
   */ async delete(endpoint, config) {
        return this.request(endpoint, {
            ...config,
            method: "DELETE"
        });
    }
    /**
   * GET BLOB request
   * USE WHEN: Fetching files (PDFs, Images) ensuring Auth headers are sent
   */ async getBlob(endpoint) {
        const url = endpoint.startsWith("http") ? endpoint : "".concat(this.baseURL).concat(endpoint);
        const headers = this.getHeaders({}, true);
        console.log("[ApiClient] getBlob requesting:", url);
        try {
            const response = await fetch(url, {
                method: "GET",
                headers
            });
            if (!response.ok) {
                console.error("Failed to fetch blob:", response.statusText);
                return null;
            }
            return await response.blob();
        } catch (error) {
            console.error("Network error fetching blob:", error);
            return null;
        }
    }
    /**
   * UPLOAD file
   * USE WHEN: Uploading files (images, documents, etc.)
   *
   * NOTE: Different from other methods because:
   * - Uses FormData instead of JSON
   * - Doesn't set Content-Type (browser sets it automatically)
   *
   * @param endpoint - API endpoint
   * @param formData - FormData object with file
   * @param config - Optional configuration
   * @returns API response
   */ async upload(endpoint, formData, config) {
        const { requiresAuth = true, customHeaders } = config || {};
        const url = "".concat(this.baseURL).concat(endpoint);
        // Build headers (no Content-Type for file upload)
        const headers = {
            ...customHeaders
        };
        if (requiresAuth) {
            const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].getToken();
            if (token) {
                headers["customAuthorization"] = "Bearer ".concat(token);
            }
        }
        try {
            const response = await fetch(url, {
                method: "POST",
                headers,
                body: formData
            });
            return this.handleResponse(response);
        } catch (error) {
            console.error("Upload failed:", error);
            return {
                status: "error",
                message: error instanceof Error ? error.message : "Upload failed"
            };
        }
    }
    /**
   * Constructor - runs when creating new ApiClient
   * @param baseURL - Base URL of API
   */ constructor(baseURL){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(this, "baseURL", void 0); // Store base URL
        this.baseURL = baseURL;
    }
}
const apiClient = new ApiClient(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/policies/form/PolicyLayout.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/button/index.js [client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const PolicyLayout = (param)=>{
    let { title, subtitle, icon, themeColor, sections, children, onCancel, onSave, loading } = param;
    var _sections_;
    _s();
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(((_sections_ = sections[0]) === null || _sections_ === void 0 ? void 0 : _sections_.id) || "");
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Dynamic Tailwind classes mapping
    const themeClasses = {
        blue: {
            bg: "bg-blue-50",
            text: "text-blue-600",
            border: "border-blue-500",
            pill: "bg-blue-100 text-blue-700"
        },
        green: {
            bg: "bg-green-50",
            text: "text-green-600",
            border: "border-green-500",
            pill: "bg-green-100 text-green-700"
        },
        purple: {
            bg: "bg-purple-50",
            text: "text-purple-600",
            border: "border-purple-500",
            pill: "bg-purple-100 text-purple-700"
        },
        cyan: {
            bg: "bg-cyan-50",
            text: "text-cyan-600",
            border: "border-cyan-500",
            pill: "bg-cyan-100 text-cyan-700"
        },
        gray: {
            bg: "bg-gray-100",
            text: "text-gray-600",
            border: "border-gray-500",
            pill: "bg-gray-200 text-gray-700"
        },
        default: {
            bg: "bg-blue-50",
            text: "text-blue-600",
            border: "border-blue-500",
            pill: "bg-blue-100 text-blue-700"
        }
    };
    const theme = themeClasses[themeColor] || themeClasses.default;
    // Scroll to section handler
    const scrollToSection = (id)=>{
        const element = document.getElementById(id);
        if (element && scrollRef.current) {
            // Calculate offset to account for any sticky headers or padding if needed
            const offset = 20;
            const elementPosition = element.offsetTop - offset;
            scrollRef.current.scrollTo({
                top: elementPosition,
                behavior: "smooth"
            });
            setActiveId(id); // Optimistic update
        }
    };
    // Intersection Observer for Scroll Spy
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PolicyLayout.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "PolicyLayout.useEffect": (entries)=>{
                    entries.forEach({
                        "PolicyLayout.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                setActiveId(entry.target.id);
                            }
                        }
                    }["PolicyLayout.useEffect"]);
                }
            }["PolicyLayout.useEffect"], {
                root: scrollRef.current,
                threshold: 0.3,
                rootMargin: "-10% 0px -70% 0px"
            });
            sections.forEach({
                "PolicyLayout.useEffect": (section)=>{
                    const element = document.getElementById(section.id);
                    if (element) observer.observe(element);
                }
            }["PolicyLayout.useEffect"]);
            return ({
                "PolicyLayout.useEffect": ()=>observer.disconnect()
            })["PolicyLayout.useEffect"];
        }
    }["PolicyLayout.useEffect"], [
        sections
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full h-full bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[280px] flex-shrink-0 bg-gray-50/80 border-r border-gray-100 flex flex-col backdrop-blur-sm z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 pb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-xl ".concat(theme.bg, " flex items-center justify-center ").concat(theme.text, " mb-4 shadow-sm"),
                                children: icon
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-gray-800 leading-tight mb-1",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 font-medium tracking-wide uppercase",
                                children: subtitle || "Policy Management"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 py-4 px-3 space-y-1 overflow-y-auto custom-scrollbar",
                        children: sections.map((section)=>{
                            const isActive = activeId === section.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollToSection(section.id),
                                className: "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all duration-300 group text-left\n                            ".concat(isActive ? "bg-white shadow-sm ring-1 ring-gray-100" : "hover:bg-gray-100/80 text-gray-500", "\n                        "),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center justify-center transition-colors duration-300\n                            ".concat(isActive ? theme.text : "text-gray-400 group-hover:text-gray-600", "\n                        "),
                                        children: section.icon
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block font-semibold transition-colors duration-300 ".concat(isActive ? "text-gray-800" : "text-gray-500 group-hover:text-gray-700"),
                                            children: section.label
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx",
                                            lineNumber: 179,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        layoutId: "activeIndicator",
                                        className: "w-1.5 h-1.5 rounded-full ".concat(theme.bg.replace("bg-", "bg-"))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx",
                                        lineNumber: 191,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, section.id, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx",
                                lineNumber: 155,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t border-gray-200/60 bg-gray-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 justify-center"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col h-full bg-white relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: scrollRef,
                        className: "flex-1 overflow-y-auto p-8 pb-32 scroll-smooth relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto space-y-10",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 p-5 bg-white/95 backdrop-blur-md border-t border-gray-100 flex justify-end items-center z-30 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.05)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                    size: "large",
                                    onClick: onCancel,
                                    className: "bg-white border-gray-200 text-gray-600 hover:text-gray-800 px-8 rounded-lg font-medium",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                    type: "primary",
                                    size: "large",
                                    loading: loading,
                                    onClick: onSave,
                                    className: "".concat(theme.bg.replace("50", "600").replace("bg-", "bg-"), " hover:brightness-110 !border-0 shadow-lg shadow-blue-100 px-10 rounded-lg font-semibold h-11 tracking-wide"),
                                    children: "Save Changes"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PolicyLayout, "AIpqMMakbY+a1mX5f7Cx/zYhsOI=");
_c = PolicyLayout;
const __TURBOPACK__default__export__ = PolicyLayout;
var _c;
__turbopack_context__.k.register(_c, "PolicyLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/One click/src/components/policies/form/PDFPreview.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/policies/form/PDFPreview.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/empty/index.js [client] (ecmascript) <export default as Empty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spin$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/spin/index.js [client] (ecmascript) <export default as Spin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/config.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const PDFPreview = (param)=>{
    let { fileList, height = "100%" } = param;
    _s();
    const [blobUrl, setBlobUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PDFPreview.useEffect": ()=>{
            const loadPdf = {
                "PDFPreview.useEffect.loadPdf": async ()=>{
                    if (!fileList || fileList.length === 0) {
                        setBlobUrl(null);
                        return;
                    }
                    const file = fileList[0];
                    setError(null);
                    // 1. New Local File (Upload)
                    if (file.originFileObj) {
                        const url = URL.createObjectURL(file.originFileObj);
                        setBlobUrl(url);
                        return;
                    }
                    // 2. Existing Server File
                    let path = file.url || file.response;
                    if (!path) return;
                    // Use direct URL for iframe to avoid CORS issues with fetch(blob)
                    // (Iframes are not blocked by CORS, only by X-Frame-Options)
                    if (path.startsWith('http')) {
                        setBlobUrl(path);
                    } else {
                        // Handle relative paths
                        const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL.replace(/\/api\/?$/, '');
                        const cleanPath = path.startsWith('/') ? path : "/".concat(path);
                        setBlobUrl("".concat(baseUrl).concat(cleanPath));
                    }
                    setLoading(false);
                }
            }["PDFPreview.useEffect.loadPdf"];
            loadPdf();
            // Cleanup
            return ({
                "PDFPreview.useEffect": ()=>{
                    if (blobUrl && blobUrl.startsWith('blob:')) {
                        URL.revokeObjectURL(blobUrl);
                    }
                }
            })["PDFPreview.useEffect"];
        }
    }["PDFPreview.useEffect"], [
        fileList
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full bg-gray-50 rounded-xl flex items-center justify-center p-6 border border-gray-200",
            style: {
                minHeight: 500
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spin$3e$__["Spin"], {
                tip: "Loading PDF..."
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/policies/form/PDFPreview.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/policies/form/PDFPreview.tsx",
            lineNumber: 66,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!blobUrl || error) {
        // Construct fallback URL for the button
        let fallbackUrl = "";
        if (fileList && fileList.length > 0) {
            const file = fileList[0];
            const rawPath = file.url || file.response;
            if (rawPath) {
                if (rawPath.startsWith('http')) {
                    fallbackUrl = rawPath;
                } else {
                    const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL.replace(/\/api\/?$/, '');
                    const cleanPath = rawPath.startsWith('/') ? rawPath : "/".concat(rawPath);
                    fallbackUrl = "".concat(baseUrl).concat(cleanPath);
                }
            }
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center p-6 text-center",
            style: {
                minHeight: 300
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"], {
                image: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"].PRESENTED_IMAGE_SIMPLE,
                description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500 font-medium",
                            children: error || "No PDF selected"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PDFPreview.tsx",
                            lineNumber: 99,
                            columnNumber: 21
                        }, void 0),
                        fallbackUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: fallbackUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "mt-2 text-blue-600 hover:text-blue-800 underline text-sm",
                            children: "Try opening directly"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PDFPreview.tsx",
                            lineNumber: 101,
                            columnNumber: 25
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PDFPreview.tsx",
                    lineNumber: 98,
                    columnNumber: 17
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/policies/form/PDFPreview.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/policies/form/PDFPreview.tsx",
            lineNumber: 91,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-slate-800 rounded-xl overflow-hidden border border-gray-200 shadow-sm relative group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                src: "".concat(blobUrl, "#toolbar=0&navpanes=0&scrollbar=0"),
                className: "w-full h-full min-h-[500px]",
                title: "PDF Preview"
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/policies/form/PDFPreview.tsx",
                lineNumber: 119,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2 right-2 flex gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: blobUrl,
                    download: "document.pdf",
                    className: "opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 hover:bg-black/80 text-white text-xs px-3 py-1.5 rounded backdrop-blur-sm flex items-center gap-2",
                    children: "Download"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PDFPreview.tsx",
                    lineNumber: 127,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/policies/form/PDFPreview.tsx",
                lineNumber: 126,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/One click/src/components/policies/form/PDFPreview.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PDFPreview, "+GUJ2csqkUt3Zb8wZkLtYkwNpSU=");
_c = PDFPreview;
const __TURBOPACK__default__export__ = PDFPreview;
var _c;
__turbopack_context__.k.register(_c, "PDFPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/form/index.js [client] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/input/index.js [client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/date-picker/index.js [client] (ecmascript) <export default as DatePicker>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/select/index.js [client] (ecmascript) <export default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/upload/index.js [client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/user.js [client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/car.js [client] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/calendar.js [client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/file-text.js [client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/upload.js [client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/shield-check.js [client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyLayout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PDFPreview$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/policies/form/PDFPreview.tsx [client] (ecmascript)");
"use client";
;
;
;
;
;
const PolicyEditFormCar = (param)=>{
    let { form, loading, onSubmit, onCancel } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyLayout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Edit Car Policy",
        subtitle: "Update vehicle coverage details",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
            lineNumber: 27,
            columnNumber: 13
        }, void 0),
        themeColor: "blue",
        sections: [
            {
                id: "basic",
                label: "Basic Info",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                    lineNumber: 30,
                    columnNumber: 51
                }, void 0)
            },
            {
                id: "vehicle",
                label: "Vehicle Details",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                    lineNumber: 31,
                    columnNumber: 58
                }, void 0)
            },
            {
                id: "coverage",
                label: "Coverage & Premium",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                    lineNumber: 32,
                    columnNumber: 62
                }, void 0)
            },
            {
                id: "documents",
                label: "Documents",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                    lineNumber: 33,
                    columnNumber: 54
                }, void 0)
            }
        ],
        onCancel: onCancel,
        onSave: onSubmit,
        loading: loading,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"], {
            layout: "vertical",
            form: form,
            requiredMark: false,
            className: "py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "basic",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                        lineNumber: 45,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                    lineNumber: 44,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Basic Information"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-100 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "client_name",
                                        label: "Client Name",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "Full Client Name",
                                            className: "rounded-lg",
                                            prefix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "w-4 h-4 text-gray-400 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                lineNumber: 56,
                                                columnNumber: 103
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                            lineNumber: 56,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                        lineNumber: 51,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "insurer_name",
                                        label: "Insurer Company",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                            size: "large",
                                            placeholder: "Select Insurer",
                                            className: "rounded-lg",
                                            showSearch: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Reliance Digital",
                                                    children: "Reliance Digital"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Bajaj Allianz",
                                                    children: "Bajaj Allianz"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Digit",
                                                    children: "Digit"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Max Life Insurance",
                                                    children: "Max Life Insurance"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "New India Assurance",
                                                    children: "New India Assurance"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Tata AIG Insurance",
                                                    children: "Tata AIG Insurance"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "PPAP",
                                                    children: "PPAP"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                            lineNumber: 64,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                        lineNumber: 59,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_no",
                                        label: "Policy Number",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        className: "md:col-span-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "Enter Policy Number",
                                            className: "rounded-lg font-medium"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                            lineNumber: 81,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                        lineNumber: 75,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                lineNumber: 50,
                                columnNumber: 18
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "vehicle",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                        lineNumber: 91,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Vehicle Details"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                            lineNumber: 89,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-100 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "vehicle_no",
                                        label: "Vehicle Registration No",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "e.g. MH 02 AB 1234",
                                            className: "rounded-lg uppercase font-semibold text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                            lineNumber: 102,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                        lineNumber: 97,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "make_model",
                                        label: "Make & Model",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "e.g. Honda City",
                                            className: "rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                            lineNumber: 110,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                        lineNumber: 105,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "mfg_year",
                                        label: "Manufacturing Year",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "YYYY",
                                            className: "rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                            lineNumber: 117,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                        lineNumber: 113,
                                        columnNumber: 22
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "fuel_type",
                                        label: "Fuel Type",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                            size: "large",
                                            placeholder: "Select Fuel",
                                            className: "rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Petrol",
                                                    children: "Petrol"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Diesel",
                                                    children: "Diesel"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "CNG",
                                                    children: "CNG"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Electric",
                                                    children: "Electric"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                            lineNumber: 124,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                        lineNumber: 120,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                lineNumber: 96,
                                columnNumber: 18
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "coverage",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                        lineNumber: 139,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                    lineNumber: 138,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Coverage & Premium"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-100 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_start_date",
                                        label: "Policy Start Date",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__["DatePicker"], {
                                            size: "large",
                                            className: "w-full rounded-lg",
                                            format: "DD-MM-YYYY",
                                            suffixIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                lineNumber: 150,
                                                columnNumber: 112
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                            lineNumber: 150,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                        lineNumber: 145,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_end_date",
                                        label: "Policy End Date",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__["DatePicker"], {
                                            size: "large",
                                            className: "w-full rounded-lg",
                                            format: "DD-MM-YYYY",
                                            suffixIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                lineNumber: 158,
                                                columnNumber: 112
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                            lineNumber: 158,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                        lineNumber: 153,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "idv",
                                        label: "IDV (Insured Declared Value)",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            prefix: "₹",
                                            placeholder: "0.00",
                                            className: "rounded-lg",
                                            type: "number"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                            lineNumber: 165,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                        lineNumber: 161,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "gross_premium",
                                        label: "Gross Premium",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            prefix: "₹",
                                            placeholder: "0.00",
                                            className: "rounded-lg font-semibold",
                                            type: "number"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                            lineNumber: 173,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                        lineNumber: 168,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "ncb",
                                        label: "No Claim Bonus (NCB)",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                            size: "large",
                                            placeholder: "0%",
                                            className: "rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "0",
                                                    children: "0%"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 28
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "20",
                                                    children: "20%"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 28
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "25",
                                                    children: "25%"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 28
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "35",
                                                    children: "35%"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 28
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "45",
                                                    children: "45%"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 28
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "50",
                                                    children: "50%"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 28
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                            lineNumber: 180,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                        lineNumber: 176,
                                        columnNumber: 22
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                lineNumber: 144,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "documents",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                        lineNumber: 197,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                    lineNumber: 196,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Policy Documents"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                            lineNumber: 195,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-100 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[500px] grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gray-50/50 p-4 rounded-xl border border-gray-200 border-dashed",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                                    name: "policy_pdf",
                                                    valuePropName: "fileList",
                                                    getValueFromEvent: (e)=>e === null || e === void 0 ? void 0 : e.fileList,
                                                    className: "mb-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"].Dragger, {
                                                        beforeUpload: ()=>false,
                                                        accept: ".pdf",
                                                        maxCount: 1,
                                                        className: "!bg-transparent hover:!border-blue-400 transition-all rounded-lg overflow-hidden",
                                                        showUploadList: {
                                                            showRemoveIcon: true
                                                        },
                                                        height: 150,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center justify-center p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center mb-2 text-blue-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                        size: 20
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                                        lineNumber: 222,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                                    lineNumber: 221,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-900 font-medium text-sm",
                                                                    children: "Click or drag PDF"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                                    lineNumber: 224,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-400 text-xs mt-1",
                                                                    children: "Max 20MB"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                                    lineNumber: 225,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 34
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 29
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                lineNumber: 205,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-blue-50 p-4 rounded-xl flex-1 border border-blue-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold text-blue-900 mb-2 text-sm",
                                                        children: "Document Tips"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 30
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-blue-700 leading-relaxed",
                                                        children: "Upload a clear PDF of the policy schedule. It will be used for verification."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 30
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                lineNumber: 231,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                        lineNumber: 204,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-gray-100 rounded-xl overflow-hidden border border-gray-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                            noStyle: true,
                                            shouldUpdate: (prev, curr)=>prev.policy_pdf !== curr.policy_pdf,
                                            children: (param)=>{
                                                let { getFieldValue } = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PDFPreview$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                    fileList: getFieldValue('policy_pdf')
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0));
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                            lineNumber: 241,
                                            columnNumber: 26
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                        lineNumber: 240,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                                lineNumber: 202,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PolicyEditFormCar;
const __TURBOPACK__default__export__ = PolicyEditFormCar;
var _c;
__turbopack_context__.k.register(_c, "PolicyEditFormCar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/form/index.js [client] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/input/index.js [client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/date-picker/index.js [client] (ecmascript) <export default as DatePicker>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/select/index.js [client] (ecmascript) <export default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/upload/index.js [client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/user.js [client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bike$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bike$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/bike.js [client] (ecmascript) <export default as Bike>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/calendar.js [client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/file-text.js [client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/upload.js [client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/shield-check.js [client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyLayout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PDFPreview$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/policies/form/PDFPreview.tsx [client] (ecmascript)");
"use client";
;
;
;
;
;
const PolicyEditFormBike = (param)=>{
    let { form, loading, onSubmit, onCancel } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyLayout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Edit Bike Policy",
        subtitle: "Update two-wheeler details",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bike$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bike$3e$__["Bike"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
            lineNumber: 27,
            columnNumber: 13
        }, void 0),
        themeColor: "blue",
        sections: [
            {
                id: "basic",
                label: "Basic Info",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                    lineNumber: 30,
                    columnNumber: 51
                }, void 0)
            },
            {
                id: "vehicle",
                label: "Bike Details",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bike$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bike$3e$__["Bike"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                    lineNumber: 31,
                    columnNumber: 55
                }, void 0)
            },
            {
                id: "coverage",
                label: "Coverage & Premium",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                    lineNumber: 32,
                    columnNumber: 62
                }, void 0)
            },
            {
                id: "documents",
                label: "Documents",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                    lineNumber: 33,
                    columnNumber: 54
                }, void 0)
            }
        ],
        onCancel: onCancel,
        onSave: onSubmit,
        loading: loading,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"], {
            layout: "vertical",
            form: form,
            requiredMark: false,
            className: "py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "basic",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                        lineNumber: 45,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                    lineNumber: 44,
                                    columnNumber: 18
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Basic Information"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-100 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "client_name",
                                        label: "Client Name",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "Full Client Name",
                                            className: "rounded-lg",
                                            prefix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "w-4 h-4 text-gray-400 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                lineNumber: 56,
                                                columnNumber: 103
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                            lineNumber: 56,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "insurer_name",
                                        label: "Insurer Company",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                            size: "large",
                                            placeholder: "Select Insurer",
                                            className: "rounded-lg",
                                            showSearch: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Reliance Digital",
                                                    children: "Reliance Digital"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Bajaj Allianz",
                                                    children: "Bajaj Allianz"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Digit",
                                                    children: "Digit"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Max Life Insurance",
                                                    children: "Max Life Insurance"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "New India Assurance",
                                                    children: "New India Assurance"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Tata AIG Insurance",
                                                    children: "Tata AIG Insurance"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "PPAP",
                                                    children: "PPAP"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                            lineNumber: 64,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_no",
                                        label: "Policy Number",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        className: "md:col-span-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "Enter Policy Number",
                                            className: "rounded-lg font-medium"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                            lineNumber: 81,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                lineNumber: 50,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "vehicle",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bike$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bike$3e$__["Bike"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                        lineNumber: 91,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Bike Details"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-100 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "vehicle_no",
                                        label: "Vehicle Registration No",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "e.g. MH 04 XY 9876",
                                            className: "rounded-lg uppercase font-semibold text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                            lineNumber: 102,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                        lineNumber: 97,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "make_model",
                                        label: "Make & Model",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "e.g. Royal Enfield Classic 350",
                                            className: "rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                            lineNumber: 110,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                        lineNumber: 105,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "mfg_year",
                                        label: "Manufacturing Year",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "YYYY",
                                            className: "rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                            lineNumber: 117,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                        lineNumber: 113,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                lineNumber: 96,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "coverage",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                        lineNumber: 127,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                    lineNumber: 126,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Coverage & Premium"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-100 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_start_date",
                                        label: "Policy Start Date",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__["DatePicker"], {
                                            size: "large",
                                            className: "w-full rounded-lg",
                                            format: "DD-MM-YYYY",
                                            suffixIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                lineNumber: 138,
                                                columnNumber: 112
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                            lineNumber: 138,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                        lineNumber: 133,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_end_date",
                                        label: "Policy End Date",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__["DatePicker"], {
                                            size: "large",
                                            className: "w-full rounded-lg",
                                            format: "DD-MM-YYYY",
                                            suffixIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                lineNumber: 146,
                                                columnNumber: 112
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                            lineNumber: 146,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                        lineNumber: 141,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "idv",
                                        label: "IDV (Sum Insured)",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            prefix: "₹",
                                            placeholder: "0.00",
                                            className: "rounded-lg",
                                            type: "number"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                            lineNumber: 153,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                        lineNumber: 149,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "gross_premium",
                                        label: "Gross Premium",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            prefix: "₹",
                                            placeholder: "0.00",
                                            className: "rounded-lg font-semibold",
                                            type: "number"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                            lineNumber: 161,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                        lineNumber: 156,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "ncb",
                                        label: "NCB %",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                            size: "large",
                                            placeholder: "0%",
                                            className: "rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "0",
                                                    children: "0%"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "20",
                                                    children: "20%"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "25",
                                                    children: "25%"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "35",
                                                    children: "35%"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "45",
                                                    children: "45%"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "50",
                                                    children: "50%"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                            lineNumber: 168,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                        lineNumber: 164,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                lineNumber: 132,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "documents",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                        lineNumber: 185,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                    lineNumber: 184,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Documents"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                            lineNumber: 183,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-100 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[500px] grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gray-50/50 p-4 rounded-xl border border-gray-200 border-dashed",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                                    name: "policy_pdf",
                                                    valuePropName: "fileList",
                                                    getValueFromEvent: (e)=>e === null || e === void 0 ? void 0 : e.fileList,
                                                    className: "mb-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"].Dragger, {
                                                        beforeUpload: ()=>false,
                                                        accept: ".pdf",
                                                        maxCount: 1,
                                                        className: "!bg-transparent hover:!border-blue-400 transition-all rounded-lg overflow-hidden",
                                                        showUploadList: {
                                                            showRemoveIcon: true
                                                        },
                                                        height: 150,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center justify-center p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center mb-2 text-blue-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                        size: 20
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                                        lineNumber: 210,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                                    lineNumber: 209,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-900 font-medium text-sm",
                                                                    children: "Click or drag PDF"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                                    lineNumber: 212,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-400 text-xs mt-1",
                                                                    children: "Max 20MB"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                                    lineNumber: 213,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 30
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                lineNumber: 193,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-blue-50 p-4 rounded-xl flex-1 border border-blue-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold text-blue-900 mb-2 text-sm",
                                                        children: "Two-Wheeler Policy Tips"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 30
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-blue-700 leading-relaxed",
                                                        children: "Upload the policy schedule page showing the Engine No. and Chassis No. clearly."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 30
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                lineNumber: 218,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                        lineNumber: 192,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-gray-100 rounded-xl overflow-hidden border border-gray-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                            noStyle: true,
                                            shouldUpdate: (prev, curr)=>prev.policy_pdf !== curr.policy_pdf,
                                            children: (param)=>{
                                                let { getFieldValue } = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PDFPreview$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                    fileList: getFieldValue('policy_pdf')
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0));
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                            lineNumber: 228,
                                            columnNumber: 26
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                        lineNumber: 227,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                                lineNumber: 190,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                            lineNumber: 189,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PolicyEditFormBike;
const __TURBOPACK__default__export__ = PolicyEditFormBike;
var _c;
__turbopack_context__.k.register(_c, "PolicyEditFormBike");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/form/index.js [client] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/input/index.js [client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/date-picker/index.js [client] (ecmascript) <export default as DatePicker>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/select/index.js [client] (ecmascript) <export default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/upload/index.js [client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/user.js [client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/activity.js [client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/calendar.js [client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/file-text.js [client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/upload.js [client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/users.js [client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/heart-pulse.js [client] (ecmascript) <export default as HeartPulse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyLayout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PDFPreview$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/policies/form/PDFPreview.tsx [client] (ecmascript)");
"use client";
;
;
;
;
;
const PolicyEditFormHealth = (param)=>{
    let { form, loading, onSubmit, onCancel } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyLayout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Edit Health Policy",
        subtitle: "Manage health coverage & members",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
            lineNumber: 27,
            columnNumber: 13
        }, void 0),
        themeColor: "green",
        sections: [
            {
                id: "basic",
                label: "Basic Info",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                    lineNumber: 30,
                    columnNumber: 51
                }, void 0)
            },
            {
                id: "details",
                label: "Policy Details",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                    lineNumber: 31,
                    columnNumber: 57
                }, void 0)
            },
            {
                id: "coverage",
                label: "Coverage & Members",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                    lineNumber: 32,
                    columnNumber: 62
                }, void 0)
            },
            {
                id: "documents",
                label: "Documents",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                    lineNumber: 33,
                    columnNumber: 54
                }, void 0)
            }
        ],
        onCancel: onCancel,
        onSave: onSubmit,
        loading: loading,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"], {
            layout: "vertical",
            form: form,
            requiredMark: false,
            className: "py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "basic",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                        lineNumber: 45,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                    lineNumber: 44,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Basic Information"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-100 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "client_name",
                                        label: "Client Name",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "Full Client Name",
                                            className: "rounded-lg",
                                            prefix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "w-4 h-4 text-gray-400 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                lineNumber: 56,
                                                columnNumber: 103
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                            lineNumber: 56,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "insurer_name",
                                        label: "Insurer Company",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                            size: "large",
                                            placeholder: "Select Insurer",
                                            className: "rounded-lg",
                                            showSearch: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Reliance Digital",
                                                    children: "Reliance Digital"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Bajaj Allianz",
                                                    children: "Bajaj Allianz"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Digit",
                                                    children: "Digit"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Max Life Insurance",
                                                    children: "Max Life Insurance"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "New India Assurance",
                                                    children: "New India Assurance"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Tata AIG Insurance",
                                                    children: "Tata AIG Insurance"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "PPAP",
                                                    children: "PPAP"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Star Health",
                                                    children: "Star Health"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Care Health",
                                                    children: "Care Health"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Niva Bupa",
                                                    children: "Niva Bupa"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                            lineNumber: 64,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_no",
                                        label: "Policy Number",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "Enter Policy Number",
                                            className: "rounded-lg font-medium"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                            lineNumber: 83,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_name",
                                        label: "Policy Name / Product",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "e.g. Optima Restore",
                                            className: "rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                            lineNumber: 91,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                lineNumber: 50,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "details",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                        lineNumber: 101,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Policy Details"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                            lineNumber: 99,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-100 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "type_of_business",
                                        label: "Type of Business",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                            size: "large",
                                            placeholder: "Select Type",
                                            className: "rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "New",
                                                    children: "New Policy"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Renewal",
                                                    children: "Renewal"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Port",
                                                    children: "Portability"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                            lineNumber: 112,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "plan_type",
                                        label: "Plan Type",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                            size: "large",
                                            placeholder: "Select Plan Type",
                                            className: "rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Family Floater",
                                                    children: "Family Floater"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Individual",
                                                    children: "Individual"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Multi Individual",
                                                    children: "Multi Individual"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Top Up",
                                                    children: "Top Up"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Super Top Up",
                                                    children: "Super Top Up"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                            lineNumber: 124,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_start_date",
                                        label: "Policy Start Date",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__["DatePicker"], {
                                            size: "large",
                                            className: "w-full rounded-lg",
                                            format: "DD-MM-YYYY",
                                            suffixIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                lineNumber: 138,
                                                columnNumber: 108
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                            lineNumber: 138,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_end_date",
                                        label: "Policy End Date",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__["DatePicker"], {
                                            size: "large",
                                            className: "w-full rounded-lg",
                                            format: "DD-MM-YYYY",
                                            suffixIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                lineNumber: 146,
                                                columnNumber: 108
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                            lineNumber: 146,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "tpa",
                                        label: "TPA (Third Party Administrator)",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "e.g. Medi Assist",
                                            className: "rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                            lineNumber: 153,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                        lineNumber: 149,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                lineNumber: 106,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "coverage",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                        lineNumber: 163,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                    lineNumber: 162,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Coverage & Members"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-100 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "sum_insured",
                                        label: "Sum Insured",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            prefix: "₹",
                                            placeholder: "0.00",
                                            className: "rounded-lg",
                                            type: "number"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                            lineNumber: 174,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "gross_premium",
                                        label: "Gross Premium",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            prefix: "₹",
                                            placeholder: "0.00",
                                            className: "rounded-lg font-semibold",
                                            type: "number"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                            lineNumber: 182,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "number_of_insured",
                                        label: "Number of Insured Members",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "e.g. 4",
                                            type: "number",
                                            min: "1",
                                            className: "rounded-lg",
                                            suffix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "w-4 h-4 text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                lineNumber: 196,
                                                columnNumber: 29
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                            lineNumber: 190,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                lineNumber: 168,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "documents",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                        lineNumber: 207,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                    lineNumber: 206,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Documents"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                            lineNumber: 205,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-100 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[500px] grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gray-50/50 p-4 rounded-xl border border-gray-200 border-dashed",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                                    name: "policy_pdf",
                                                    valuePropName: "fileList",
                                                    getValueFromEvent: (e)=>e === null || e === void 0 ? void 0 : e.fileList,
                                                    className: "mb-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"].Dragger, {
                                                        beforeUpload: ()=>false,
                                                        accept: ".pdf",
                                                        maxCount: 1,
                                                        className: "!bg-transparent hover:!border-green-400 transition-all rounded-lg overflow-hidden",
                                                        showUploadList: {
                                                            showRemoveIcon: true
                                                        },
                                                        height: 150,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center justify-center p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center mb-2 text-green-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                        size: 20
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                                        lineNumber: 232,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                                    lineNumber: 231,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-900 font-medium text-sm",
                                                                    children: "Click or drag PDF"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                                    lineNumber: 234,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-400 text-xs mt-1",
                                                                    children: "Max 20MB"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                                    lineNumber: 235,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 30
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                lineNumber: 215,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-green-50 p-4 rounded-xl flex-1 border border-green-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold text-green-900 mb-2 text-sm",
                                                        children: "Health Policy Tips"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 30
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-green-700 leading-relaxed",
                                                        children: "Ensure the member details in the policy match exactly with the uploaded document to avoid ID card issuance delays."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 30
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                lineNumber: 240,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                        lineNumber: 214,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-gray-100 rounded-xl overflow-hidden border border-gray-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                            noStyle: true,
                                            shouldUpdate: (prev, curr)=>prev.policy_pdf !== curr.policy_pdf,
                                            children: (param)=>{
                                                let { getFieldValue } = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PDFPreview$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                    fileList: getFieldValue('policy_pdf')
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0));
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                            lineNumber: 250,
                                            columnNumber: 26
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                        lineNumber: 249,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                                lineNumber: 212,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PolicyEditFormHealth;
const __TURBOPACK__default__export__ = PolicyEditFormHealth;
var _c;
__turbopack_context__.k.register(_c, "PolicyEditFormHealth");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/form/index.js [client] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/input/index.js [client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/date-picker/index.js [client] (ecmascript) <export default as DatePicker>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/select/index.js [client] (ecmascript) <export default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/upload/index.js [client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/user.js [client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/heart-handshake.js [client] (ecmascript) <export default as HeartHandshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/calendar.js [client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/file-text.js [client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/upload.js [client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hourglass$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hourglass$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/hourglass.js [client] (ecmascript) <export default as Hourglass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/shield-check.js [client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/map-pin.js [client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyLayout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PDFPreview$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/policies/form/PDFPreview.tsx [client] (ecmascript)");
"use client";
;
;
;
;
;
const PolicyEditFormLife = (param)=>{
    let { form, loading, onSubmit, onCancel } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyLayout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Edit Life Policy",
        subtitle: "Manage life insurance & terms",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__["HeartHandshake"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
            lineNumber: 27,
            columnNumber: 13
        }, void 0),
        themeColor: "purple",
        sections: [
            {
                id: "basic",
                label: "Basic Info",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                    lineNumber: 30,
                    columnNumber: 51
                }, void 0)
            },
            {
                id: "terms",
                label: "Terms & Dates",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hourglass$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hourglass$3e$__["Hourglass"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                    lineNumber: 31,
                    columnNumber: 54
                }, void 0)
            },
            {
                id: "premium",
                label: "Premium & Sum",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                    lineNumber: 32,
                    columnNumber: 56
                }, void 0)
            },
            {
                id: "address",
                label: "Address",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                    lineNumber: 33,
                    columnNumber: 50
                }, void 0)
            },
            {
                id: "documents",
                label: "Documents",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                    lineNumber: 34,
                    columnNumber: 54
                }, void 0)
            }
        ],
        onCancel: onCancel,
        onSave: onSubmit,
        loading: loading,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"], {
            layout: "vertical",
            form: form,
            requiredMark: false,
            className: "py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "basic",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                        lineNumber: 46,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                    lineNumber: 45,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Basic Information"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                            lineNumber: 44,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-100 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "client_name",
                                        label: "Client Name",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "Full Client Name",
                                            className: "rounded-lg",
                                            prefix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "w-4 h-4 text-gray-400 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                lineNumber: 57,
                                                columnNumber: 103
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                            lineNumber: 57,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "insurer_name",
                                        label: "Insurer Company",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                            size: "large",
                                            placeholder: "Select Insurer",
                                            className: "rounded-lg",
                                            showSearch: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "LIC",
                                                    children: "LIC"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "HDFC Life",
                                                    children: "HDFC Life"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "SBI Life",
                                                    children: "SBI Life"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "ICICI Prudential",
                                                    children: "ICICI Prudential"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Max Life",
                                                    children: "Max Life"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Tata AIA",
                                                    children: "Tata AIA"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Bajaj Allianz",
                                                    children: "Bajaj Allianz"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Kotak Life",
                                                    children: "Kotak Life"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                            lineNumber: 65,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_no",
                                        label: "Policy Number",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "Enter Policy Number",
                                            className: "rounded-lg font-medium"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                            lineNumber: 82,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_name",
                                        label: "Policy Name / Plan",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "e.g. Jeevan Anand",
                                            className: "rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                            lineNumber: 90,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_status",
                                        label: "Policy Status",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                            size: "large",
                                            placeholder: "Select status",
                                            className: "rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Active",
                                                    children: "Active"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Lapsed",
                                                    children: "Lapsed"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Paid-up",
                                                    children: "Paid-up"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Matured",
                                                    children: "Matured"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Surrendered",
                                                    children: "Surrendered"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                            lineNumber: 98,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                lineNumber: 51,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "terms",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hourglass$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hourglass$3e$__["Hourglass"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                        lineNumber: 114,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Terms & Dates"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-100 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_start_date",
                                        label: "Policy Start Date",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__["DatePicker"], {
                                            size: "large",
                                            className: "w-full rounded-lg",
                                            format: "DD-MM-YYYY",
                                            suffixIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                lineNumber: 125,
                                                columnNumber: 112
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                            lineNumber: 125,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                        lineNumber: 120,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_end_date",
                                        label: "Policy End Date",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__["DatePicker"], {
                                            size: "large",
                                            className: "w-full rounded-lg",
                                            format: "DD-MM-YYYY",
                                            suffixIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                lineNumber: 133,
                                                columnNumber: 112
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                            lineNumber: 133,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                        lineNumber: 128,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_term",
                                        label: "Policy Term (Years)",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "e.g. 20",
                                            type: "number",
                                            className: "rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                            lineNumber: 141,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                        lineNumber: 136,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "premium_paying_term",
                                        label: "Premium Paying Term (Years)",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "e.g. 15",
                                            type: "number",
                                            className: "rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                            lineNumber: 149,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                        lineNumber: 144,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                lineNumber: 119,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "premium",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                        lineNumber: 159,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                    lineNumber: 158,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Premium & Sum Assured"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-100 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "sum_insured",
                                        label: "Sum Assured",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            prefix: "₹",
                                            placeholder: "0.00",
                                            className: "rounded-lg",
                                            type: "number"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                            lineNumber: 170,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                        lineNumber: 165,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "gross_premium",
                                        label: "Gross Premium",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            prefix: "₹",
                                            placeholder: "0.00",
                                            className: "rounded-lg font-semibold",
                                            type: "number"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                            lineNumber: 178,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                        lineNumber: 173,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                lineNumber: 164,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "address",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                        lineNumber: 188,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                    lineNumber: 187,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Address"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                            lineNumber: 186,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-100 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "pincode",
                                        label: "Pincode",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            },
                                            {
                                                pattern: /^[0-9]{6}$/,
                                                message: "Invalid Pincode"
                                            }
                                        ],
                                        className: "mb-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            placeholder: "110001",
                                            maxLength: 6,
                                            className: "rounded-lg",
                                            size: "large"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                            lineNumber: 200,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                        lineNumber: 194,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "address_city",
                                        label: "Address / City",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        className: "mb-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            placeholder: "Enter address details",
                                            className: "rounded-lg",
                                            size: "large"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                            lineNumber: 209,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                        lineNumber: 203,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                lineNumber: 193,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "documents",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                        lineNumber: 219,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                    lineNumber: 218,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Documents"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                            lineNumber: 217,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-100 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[500px] grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gray-50/50 p-4 rounded-xl border border-gray-200 border-dashed",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                                    name: "policy_pdf",
                                                    valuePropName: "fileList",
                                                    getValueFromEvent: (e)=>e === null || e === void 0 ? void 0 : e.fileList,
                                                    className: "mb-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"].Dragger, {
                                                        beforeUpload: ()=>false,
                                                        accept: ".pdf",
                                                        maxCount: 1,
                                                        className: "!bg-transparent hover:!border-purple-400 transition-all rounded-lg overflow-hidden",
                                                        showUploadList: {
                                                            showRemoveIcon: true
                                                        },
                                                        height: 150,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center justify-center p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center mb-2 text-purple-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                        size: 20
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                                        lineNumber: 244,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-900 font-medium text-sm",
                                                                    children: "Click or drag PDF"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                                    lineNumber: 246,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-400 text-xs mt-1",
                                                                    children: "Max 20MB"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                                    lineNumber: 247,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                            lineNumber: 242,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 30
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                lineNumber: 227,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-purple-50 p-4 rounded-xl flex-1 border border-purple-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold text-purple-900 mb-2 text-sm",
                                                        children: "Notes & Remarks"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 30
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                                        name: "remarks",
                                                        className: "mb-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"].TextArea, {
                                                            placeholder: "Any additional info...",
                                                            className: "rounded-lg border-purple-200 bg-white",
                                                            rows: 4
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 33
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 30
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                lineNumber: 252,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                        lineNumber: 226,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-gray-100 rounded-xl overflow-hidden border border-gray-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                            noStyle: true,
                                            shouldUpdate: (prev, curr)=>prev.policy_pdf !== curr.policy_pdf,
                                            children: (param)=>{
                                                let { getFieldValue } = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PDFPreview$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                    fileList: getFieldValue('policy_pdf')
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0));
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                            lineNumber: 266,
                                            columnNumber: 26
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                        lineNumber: 265,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                                lineNumber: 224,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                            lineNumber: 223,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PolicyEditFormLife;
const __TURBOPACK__default__export__ = PolicyEditFormLife;
var _c;
__turbopack_context__.k.register(_c, "PolicyEditFormLife");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/form/index.js [client] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/input/index.js [client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/date-picker/index.js [client] (ecmascript) <export default as DatePicker>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/select/index.js [client] (ecmascript) <export default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/upload/index.js [client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/user.js [client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/plane.js [client] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/calendar.js [client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/file-text.js [client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/upload.js [client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/info.js [client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/globe.js [client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyLayout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PDFPreview$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/policies/form/PDFPreview.tsx [client] (ecmascript)");
"use client";
;
;
;
;
;
const PolicyEditFormTravel = (param)=>{
    let { form, loading, onSubmit, onCancel } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyLayout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Edit Travel Policy",
        subtitle: "Manage travel insurance details",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
            lineNumber: 27,
            columnNumber: 13
        }, void 0),
        themeColor: "cyan",
        sections: [
            {
                id: "basic",
                label: "Basic Info",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                    lineNumber: 30,
                    columnNumber: 51
                }, void 0)
            },
            {
                id: "trip",
                label: "Trip Details",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                    lineNumber: 31,
                    columnNumber: 52
                }, void 0)
            },
            {
                id: "coverage",
                label: "Coverage",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                    lineNumber: 32,
                    columnNumber: 52
                }, void 0)
            },
            {
                id: "documents",
                label: "Documents",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                    lineNumber: 33,
                    columnNumber: 54
                }, void 0)
            }
        ],
        onCancel: onCancel,
        onSave: onSubmit,
        loading: loading,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"], {
            layout: "vertical",
            form: form,
            requiredMark: false,
            className: "py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "basic",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                        lineNumber: 45,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                    lineNumber: 44,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Basic Information"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-100 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "client_name",
                                        label: "Client Name",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "Full Client Name",
                                            className: "rounded-lg",
                                            prefix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "w-4 h-4 text-gray-400 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                lineNumber: 56,
                                                columnNumber: 103
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                            lineNumber: 56,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "insurer_name",
                                        label: "Insurer Company",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                            size: "large",
                                            placeholder: "Select Insurer",
                                            className: "rounded-lg",
                                            showSearch: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Reliance Digital",
                                                    children: "Reliance Digital"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Bajaj Allianz",
                                                    children: "Bajaj Allianz"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Digit",
                                                    children: "Digit"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Max Life Insurance",
                                                    children: "Max Life Insurance"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "New India Assurance",
                                                    children: "New India Assurance"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Tata AIG Insurance",
                                                    children: "Tata AIG Insurance"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "PPAP",
                                                    children: "PPAP"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                            lineNumber: 64,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_no",
                                        label: "Policy Number",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        className: "md:col-span-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "Enter Policy Number",
                                            className: "rounded-lg font-medium"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                            lineNumber: 81,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                lineNumber: 50,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "trip",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                        lineNumber: 91,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Trip Details"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-100 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "destination_type",
                                        label: "Destination Type",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                            size: "large",
                                            placeholder: "Select Destination",
                                            className: "rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Domestic",
                                                    children: "Domestic"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "International",
                                                    children: "International"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Europe",
                                                    children: "Europe"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Asia",
                                                    children: "Asia"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "USA / Canada",
                                                    children: "USA / Canada"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Other",
                                                    children: "Other"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                            lineNumber: 102,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                        lineNumber: 97,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "trip_duration",
                                        label: "Trip Duration",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "e.g. 15 days",
                                            className: "rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                            lineNumber: 117,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                        lineNumber: 112,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_start_date",
                                        label: "Trip Start Date",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__["DatePicker"], {
                                            size: "large",
                                            className: "w-full rounded-lg",
                                            format: "DD-MM-YYYY",
                                            suffixIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                lineNumber: 125,
                                                columnNumber: 112
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                            lineNumber: 125,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                        lineNumber: 120,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_end_date",
                                        label: "Trip End Date",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__["DatePicker"], {
                                            size: "large",
                                            className: "w-full rounded-lg",
                                            format: "DD-MM-YYYY",
                                            suffixIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                lineNumber: 133,
                                                columnNumber: 112
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                            lineNumber: 133,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                        lineNumber: 128,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                lineNumber: 96,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "coverage",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                        lineNumber: 143,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                    lineNumber: 142,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Coverage"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-100 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "sum_insured",
                                        label: "Sum Insured",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "e.g. 50000",
                                            type: "number",
                                            className: "rounded-lg",
                                            addonBefore: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                                name: "sum_currency",
                                                noStyle: true,
                                                initialValue: "USD",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                                    style: {
                                                        width: 80
                                                    },
                                                    className: "bg-gray-50 border-r-0",
                                                    variant: "borderless",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                            value: "USD",
                                                            children: "USD"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 35
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                            value: "EUR",
                                                            children: "EUR"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 35
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                            value: "INR",
                                                            children: "INR"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 35
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                            value: "GBP",
                                                            children: "GBP"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 35
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 33
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                lineNumber: 160,
                                                columnNumber: 31
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                            lineNumber: 154,
                                            columnNumber: 26
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                        lineNumber: 149,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "gross_premium",
                                        label: "Gross Premium (INR)",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            prefix: "₹",
                                            placeholder: "0.00",
                                            className: "rounded-lg font-semibold",
                                            type: "number"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                            lineNumber: 177,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                        lineNumber: 172,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                lineNumber: 148,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                            lineNumber: 147,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "documents",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                        lineNumber: 187,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                    lineNumber: 186,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Documents"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-100 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[500px] grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gray-50/50 p-4 rounded-xl border border-gray-200 border-dashed",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                                    name: "policy_pdf",
                                                    valuePropName: "fileList",
                                                    getValueFromEvent: (e)=>e === null || e === void 0 ? void 0 : e.fileList,
                                                    className: "mb-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"].Dragger, {
                                                        beforeUpload: ()=>false,
                                                        accept: ".pdf",
                                                        maxCount: 1,
                                                        className: "!bg-transparent hover:!border-cyan-400 transition-all rounded-lg overflow-hidden",
                                                        showUploadList: {
                                                            showRemoveIcon: true
                                                        },
                                                        height: 150,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center justify-center p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center mb-2 text-cyan-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                        size: 20
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                                        lineNumber: 212,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                                    lineNumber: 211,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-900 font-medium text-sm",
                                                                    children: "Click or drag PDF"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                                    lineNumber: 214,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-400 text-xs mt-1",
                                                                    children: "Max 20MB"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                                    lineNumber: 215,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 30
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                lineNumber: 195,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-cyan-50 p-4 rounded-xl flex-1 border border-cyan-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold text-cyan-900 mb-2 text-sm",
                                                        children: "Travel Policy Tips"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 30
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "text-xs text-cyan-700 space-y-2 list-disc pl-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Check destination and duration match tickets."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                                lineNumber: 223,
                                                                columnNumber: 33
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Ensure Sum Insured currency is correct."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                                lineNumber: 224,
                                                                columnNumber: 33
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 30
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                lineNumber: 220,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                        lineNumber: 194,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-gray-100 rounded-xl overflow-hidden border border-gray-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                            noStyle: true,
                                            shouldUpdate: (prev, curr)=>prev.policy_pdf !== curr.policy_pdf,
                                            children: (param)=>{
                                                let { getFieldValue } = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PDFPreview$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                    fileList: getFieldValue('policy_pdf')
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0));
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                            lineNumber: 231,
                                            columnNumber: 26
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                        lineNumber: 230,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                                lineNumber: 192,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PolicyEditFormTravel;
const __TURBOPACK__default__export__ = PolicyEditFormTravel;
var _c;
__turbopack_context__.k.register(_c, "PolicyEditFormTravel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/form/index.js [client] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/input/index.js [client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/date-picker/index.js [client] (ecmascript) <export default as DatePicker>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/select/index.js [client] (ecmascript) <export default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/upload/index.js [client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/user.js [client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/layers.js [client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/calendar.js [client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/file-text.js [client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/upload.js [client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/shield.js [client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/lucide-react/dist/esm/icons/tag.js [client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyLayout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/policies/form/PolicyLayout.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PDFPreview$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/policies/form/PDFPreview.tsx [client] (ecmascript)");
"use client";
;
;
;
;
;
const PolicyEditFormOther = (param)=>{
    let { form, loading, onSubmit, onCancel } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyLayout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Edit Policy",
        subtitle: "Manage other insurance types",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
            lineNumber: 27,
            columnNumber: 13
        }, void 0),
        themeColor: "gray",
        sections: [
            {
                id: "basic",
                label: "Basic Info",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                    lineNumber: 30,
                    columnNumber: 51
                }, void 0)
            },
            {
                id: "details",
                label: "Policy Details",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                    lineNumber: 31,
                    columnNumber: 57
                }, void 0)
            },
            {
                id: "coverage",
                label: "Coverage & Premium",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                    lineNumber: 32,
                    columnNumber: 62
                }, void 0)
            },
            {
                id: "documents",
                label: "Documents",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                    lineNumber: 33,
                    columnNumber: 54
                }, void 0)
            }
        ],
        onCancel: onCancel,
        onSave: onSubmit,
        loading: loading,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"], {
            layout: "vertical",
            form: form,
            requiredMark: false,
            className: "py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "basic",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                        lineNumber: 45,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                    lineNumber: 44,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Basic Information"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-200 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "client_name",
                                        label: "Client Name",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "Full Client Name",
                                            className: "rounded-lg",
                                            prefix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "w-4 h-4 text-gray-400 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                lineNumber: 56,
                                                columnNumber: 103
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                            lineNumber: 56,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "insurer_name",
                                        label: "Insurer Company",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "Enter insurer name",
                                            className: "rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                            lineNumber: 64,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_no",
                                        label: "Policy Number",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "Enter Policy Number",
                                            className: "rounded-lg font-medium"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                            lineNumber: 72,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_name",
                                        label: "Policy Name / Product",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            placeholder: "e.g. Factory All Risk",
                                            className: "rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                            lineNumber: 80,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                lineNumber: 50,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "details",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                        lineNumber: 90,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Policy Details"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-200 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_sub_type",
                                        label: "Insurance Type",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                            size: "large",
                                            placeholder: "Select Type",
                                            className: "rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Fire",
                                                    children: "Fire Insurance"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Marine",
                                                    children: "Marine Insurance"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Engineering",
                                                    children: "Engineering"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Shopkeeper",
                                                    children: "Shopkeeper"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "WC",
                                                    children: "Workmen Compensation"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "GMC",
                                                    children: "GMC (Group Mediclaim)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "GPA",
                                                    children: "GPA (Group Personal Accident)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                                                    value: "Misc",
                                                    children: "Miscellaneous"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                            lineNumber: 101,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                        lineNumber: 96,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_start_date",
                                        label: "Policy Start Date",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__["DatePicker"], {
                                            size: "large",
                                            className: "w-full rounded-lg",
                                            format: "DD-MM-YYYY",
                                            suffixIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                lineNumber: 118,
                                                columnNumber: 112
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                            lineNumber: 118,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                        lineNumber: 113,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "policy_end_date",
                                        label: "Policy End Date",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__["DatePicker"], {
                                            size: "large",
                                            className: "w-full rounded-lg",
                                            format: "DD-MM-YYYY",
                                            suffixIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                lineNumber: 126,
                                                columnNumber: 112
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                            lineNumber: 126,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                        lineNumber: 121,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                lineNumber: 95,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "coverage",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                        lineNumber: 136,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Coverage & Premium"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-200 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "sum_insured",
                                        label: "Sum Insured",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            prefix: "₹",
                                            placeholder: "0.00",
                                            className: "rounded-lg",
                                            type: "number"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                            lineNumber: 147,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                        lineNumber: 142,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "gross_premium",
                                        label: "Gross Premium",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Required"
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            size: "large",
                                            prefix: "₹",
                                            placeholder: "0.00",
                                            className: "rounded-lg font-semibold",
                                            type: "number"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                            lineNumber: 155,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                        lineNumber: 150,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                        name: "remarks",
                                        className: "md:col-span-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"].TextArea, {
                                            placeholder: "Additional coverage details...",
                                            className: "rounded-lg",
                                            rows: 3
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                            lineNumber: 159,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                        lineNumber: 158,
                                        columnNumber: 22
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                lineNumber: 141,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "documents",
                    className: "scroll-mt-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 mb-6 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                        lineNumber: 173,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                    lineNumber: 172,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Documents"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                            lineNumber: 171,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-200 p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[500px] grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gray-50/50 p-4 rounded-xl border border-gray-200 border-dashed",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                                    name: "policy_pdf",
                                                    valuePropName: "fileList",
                                                    getValueFromEvent: (e)=>e === null || e === void 0 ? void 0 : e.fileList,
                                                    className: "mb-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"].Dragger, {
                                                        beforeUpload: ()=>false,
                                                        accept: ".pdf",
                                                        maxCount: 1,
                                                        className: "!bg-transparent hover:!border-gray-400 transition-all rounded-lg overflow-hidden",
                                                        showUploadList: {
                                                            showRemoveIcon: true
                                                        },
                                                        height: 150,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center justify-center p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center mb-2 text-gray-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                        size: 20
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                                        lineNumber: 198,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                                    lineNumber: 197,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-900 font-medium text-sm",
                                                                    children: "Click or drag PDF"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                                    lineNumber: 200,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-400 text-xs mt-1",
                                                                    children: "Max 20MB"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                                    lineNumber: 201,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 30
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                lineNumber: 181,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gray-100 p-4 rounded-xl flex-1 border border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold text-gray-700 mb-2 text-sm",
                                                        children: "General Tips"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 30
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 leading-relaxed",
                                                        children: "Upload the complete policy schedule. For large commercial policies, attach the main schedule page."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 30
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                lineNumber: 206,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                        lineNumber: 180,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-gray-100 rounded-xl overflow-hidden border border-gray-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                            noStyle: true,
                                            shouldUpdate: (prev, curr)=>prev.policy_pdf !== curr.policy_pdf,
                                            children: (param)=>{
                                                let { getFieldValue } = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PDFPreview$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                    fileList: getFieldValue('policy_pdf')
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0));
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                            lineNumber: 216,
                                            columnNumber: 26
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                        lineNumber: 215,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                                lineNumber: 178,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PolicyEditFormOther;
const __TURBOPACK__default__export__ = PolicyEditFormOther;
var _c;
__turbopack_context__.k.register(_c, "PolicyEditFormOther");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/policies/policiesTypeHome.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$table$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/table/index.js [client] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/space/index.js [client] (ecmascript) <locals> <export default as Space>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tag/index.js [client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/button/index.js [client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/modal/index.js [client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/form/index.js [client] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tooltip/index.js [client] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EditOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EditOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/EditOutlined.js [client] (ecmascript) <export default as EditOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EyeOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/EyeOutlined.js [client] (ecmascript) <export default as EyeOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/axios/lib/axios.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react-hot-toast/dist/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$home$2f$FilterDropdown$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/home/FilterDropdown.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/config.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/client.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/dayjs/dayjs.min.js [client] (ecmascript)");
// forms
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyEditFormCar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/policies/form/PolicyEditFormCar.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyEditFormBike$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/policies/form/PolicyEditFormBike.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyEditFormHealth$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/policies/form/PolicyEditFormHealth.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyEditFormLife$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/policies/form/PolicyEditFormLife.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyEditFormTravel$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/policies/form/PolicyEditFormTravel.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyEditFormOther$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/policies/form/PolicyEditFormOther.tsx [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const PoliciesTypeHome = (param)=>{
    let { policies: initialPolicies, showFilter = false, onDataChange } = param;
    var _editingPolicy_insurance_category, _editingPolicy_insurance_category1, _editingPolicy_insurance_category2, _editingPolicy_insurance_category3, _editingPolicy_insurance_category4;
    _s();
    const [form] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].useForm();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingPolicy, setEditingPolicy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [policies, setPolicies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(initialPolicies);
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("-1");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const pageSize = 10;
    const [totalRecords, setTotalRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    /* ================= FETCH ================= */ const fetchFilteredPolicies = async function(status) {
        let page = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, search = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
        try {
            var _res_data, _res_data1;
            setLoading(true);
            const params = {
                page,
                limit: pageSize
            };
            if (status !== "-1") params.is_verified = status;
            if (search) params.search = search;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].get("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL).concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ADMIN_GET_USER_POLICIES), {
                params
            });
            setPolicies(((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.data) || []);
            setTotalRecords(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.total_records) || 0);
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].error((err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Fetch failed");
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PoliciesTypeHome.useEffect": ()=>{
            fetchFilteredPolicies(filterStatus, currentPage);
        }
    }["PoliciesTypeHome.useEffect"], [
        filterStatus,
        currentPage
    ]);
    /* ================= EDIT ================= */ const handleEdit = (record)=>{
        setEditingPolicy(record);
        let fileList = [];
        const rawUrl = record.file_url || record.policy_pdf || record.image_url;
        if (rawUrl && rawUrl !== "null" && rawUrl.trim() !== "") {
            let finalUrl = rawUrl;
            if (!rawUrl.startsWith("http")) {
                finalUrl = rawUrl;
            }
            const fileName = rawUrl.split("/").pop() || "Document.pdf";
            fileList = [
                {
                    uid: "-1",
                    name: fileName,
                    status: "done",
                    url: finalUrl
                }
            ];
        }
        form.setFieldsValue({
            ...record,
            policy_pdf: fileList,
            policy_start_date: record.policy_start_date ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(record.policy_start_date) : null,
            policy_end_date: record.policy_end_date ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(record.policy_end_date) : null
        });
    };
    /* ================= UPDATE ================= */ const handleUpdate = async ()=>{
        try {
            setLoading(true);
            const values = await form.validateFields();
            const formData = new FormData();
            // Append ID (Send both 'policy_id' and 'id' to be safe for backend compatibility)
            if (editingPolicy === null || editingPolicy === void 0 ? void 0 : editingPolicy.id) {
                formData.append("policy_id", editingPolicy.id);
                formData.append("id", editingPolicy.id);
            }
            // Append User ID (Critical: Found in working Postman payload)
            if (editingPolicy === null || editingPolicy === void 0 ? void 0 : editingPolicy.user_id) {
                formData.append("user_id", editingPolicy.user_id);
            }
            // Handle dates specifically
            if (values.policy_start_date) {
                formData.append("policy_start_date", values.policy_start_date.format("YYYY-MM-DD"));
            }
            if (values.policy_end_date) {
                formData.append("policy_end_date", values.policy_end_date.format("YYYY-MM-DD"));
            }
            // Handle File Upload
            if (values.policy_pdf && values.policy_pdf.length > 0) {
                const file = values.policy_pdf[0].originFileObj;
                if (file) {
                    formData.append("policy_pdf", file);
                    formData.append("file", file);
                }
            }
            // Append other fields
            const { policy_pdf, policy_start_date, policy_end_date, ...otherValues } = values;
            Object.keys(otherValues).forEach((key)=>{
                const val = otherValues[key];
                if (val !== undefined && val !== null && val !== "null") {
                    const cleanVal = typeof val === "string" ? val.trim() : String(val);
                    if (cleanVal.length > 0) {
                        formData.append(key, cleanVal);
                    }
                }
            });
            console.log("Sending Update Payload (FormData with customAuthorization)");
            // form-data with customAuthorization header
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["apiClient"].upload(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ADMIN_UPDATE_POLICY, formData);
            if (res.status === "error") {
                throw new Error(res.message);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].success("Policy updated successfully");
            setEditingPolicy(null);
            onDataChange === null || onDataChange === void 0 ? void 0 : onDataChange();
            fetchFilteredPolicies(filterStatus, currentPage);
        } catch (err) {
            console.error(err);
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].error((err === null || err === void 0 ? void 0 : err.message) || "Update failed");
        } finally{
            setLoading(false);
        }
    };
    /* ================= VERIFY ================= */ const toggleVerification = async (record, status)=>{
        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("policy_id", record.id);
            formData.append("id", record.id);
            formData.append("user_id", record.user_id);
            formData.append("ids[]", record.id);
            formData.append("is_verified", status);
            if (status === "1") {
                formData.append("policy_status", "Active");
            } else {
                formData.append("policy_status", "Pending");
            }
            console.log("Sending toggleVerification:", {
                id: record.id,
                is_verified: status,
                policy_status: formData.get("policy_status")
            });
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["apiClient"].upload(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ADMIN_UPDATE_POLICY, formData);
            if (res.status === "error") {
                var _res_message;
                if ((_res_message = res.message) === null || _res_message === void 0 ? void 0 : _res_message.includes("Insurer not found")) {
                    throw new Error('Invalid Insurer Name: "'.concat(record.insurer_name, '". Please Click Edit -> Re-select Insurer -> Save.'));
                }
                throw new Error(res.message);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].success(status === "1" ? "Approved" : "Rejected");
            setPolicies((prev)=>prev.map((p)=>p.id === record.id ? {
                        ...p,
                        is_verified: status
                    } : p));
            // Delay re-fetch to allow server consistency
            setTimeout(()=>{
                fetchFilteredPolicies(filterStatus, currentPage);
            }, 1500);
        } catch (err) {
            console.error(err);
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].error((err === null || err === void 0 ? void 0 : err.message) || "Update failed");
        } finally{
            setLoading(false);
        }
    };
    /* ================= TABLE ================= */ const columns = [
        {
            title: "Client",
            dataIndex: "client_name",
            responsive: [
                "md"
            ]
        },
        {
            title: "Policy No",
            dataIndex: "policy_no",
            render: (text)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs sm:text-sm",
                    children: text
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                    lineNumber: 288,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0))
        },
        {
            title: "Vehicle",
            dataIndex: "vehicle_number",
            responsive: [
                "lg"
            ]
        },
        {
            title: "Sum Insured",
            responsive: [
                "xl"
            ],
            render: (_, r)=>"".concat(r.sum_currency, " ").concat(Number(r.sum_insured).toLocaleString("en-IN"))
        },
        {
            title: "Premium",
            render: (_, r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs sm:text-sm whitespace-nowrap",
                    children: [
                        r.sum_currency,
                        " ",
                        Number(r.gross_premium).toLocaleString("en-IN")
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                    lineNumber: 304,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
        },
        {
            title: "Category",
            dataIndex: "insurance_category",
            responsive: [
                "lg"
            ],
            render: (text)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs sm:text-sm",
                    children: text
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                    lineNumber: 313,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0))
        },
        {
            title: "Start",
            dataIndex: "policy_start_date",
            responsive: [
                "xl"
            ],
            render: (text)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs",
                    children: text
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                    lineNumber: 319,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0))
        },
        {
            title: "End",
            dataIndex: "policy_end_date",
            responsive: [
                "xl"
            ],
            render: (text)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs",
                    children: text
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                    lineNumber: 325,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0))
        },
        {
            title: "Status",
            dataIndex: "is_verified",
            render: (v, r)=>{
                var _r_policy_status;
                // Fallback: If is_verified is not saving (backend issue), check policy_status
                const isApproved = v === "1" || ((_r_policy_status = r.policy_status) === null || _r_policy_status === void 0 ? void 0 : _r_policy_status.toLowerCase()) === "active";
                if (isApproved) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                        color: "green",
                        className: "text-xs",
                        children: "Approved"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                        lineNumber: 335,
                        columnNumber: 20
                    }, ("TURBOPACK compile-time value", void 0));
                }
                return v === "0" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                    color: "red",
                    className: "text-xs",
                    children: "Rejected"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                    lineNumber: 339,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                    color: "orange",
                    className: "text-xs",
                    children: "Pending"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                    lineNumber: 341,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            }
        },
        {
            title: "Actions",
            fixed: "right",
            width: 100,
            render: (_, r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                    size: "small",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                            title: "View Document",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                type: "link",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EyeOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOutlined$3e$__["EyeOutlined"], {}, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                                    lineNumber: 356,
                                    columnNumber: 21
                                }, void 0),
                                className: "text-blue-500 hover:text-blue-700",
                                onClick: ()=>{
                                    const fileUrl = r.file_url || r.policy_pdf || r.image_url;
                                    if (fileUrl && fileUrl !== "null" && fileUrl.trim() !== "") {
                                        // If it's already a full URL (http/https), use it directly
                                        if (fileUrl.startsWith("http")) {
                                            window.open(fileUrl, "_blank");
                                            return;
                                        }
                                        let baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL;
                                        if (baseUrl.endsWith("/")) {
                                            baseUrl = baseUrl.slice(0, -1);
                                        }
                                        const cleanPath = fileUrl.startsWith("/") ? fileUrl.substring(1) : fileUrl;
                                        const finalUrl = "".concat(baseUrl, "/").concat(cleanPath);
                                        console.log("Opening document:", finalUrl);
                                        window.open(finalUrl, "_blank");
                                    } else {
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].error("No document attached");
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                                lineNumber: 354,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                            lineNumber: 353,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                            title: "Edit Policy",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                type: "link",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EditOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EditOutlined$3e$__["EditOutlined"], {}, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                                    lineNumber: 393,
                                    columnNumber: 21
                                }, void 0),
                                className: "text-green-600 hover:text-green-800",
                                onClick: ()=>handleEdit(r)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                                lineNumber: 391,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                            lineNumber: 390,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                    lineNumber: 351,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
        },
        {
            title: "Verify",
            fixed: "right",
            width: 140,
            render: (_, r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                    direction: "vertical",
                    size: "small",
                    className: "w-full",
                    children: [
                        r.is_verified !== "1" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            size: "small",
                            style: {
                                background: "#00de81",
                                color: "#fff"
                            },
                            onClick: ()=>toggleVerification(r, "1"),
                            className: "w-full text-xs",
                            children: "Approve"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                            lineNumber: 408,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        r.is_verified !== "0" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            size: "small",
                            danger: true,
                            onClick: ()=>toggleVerification(r, "0"),
                            className: "w-full text-xs",
                            children: "Reject"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                            lineNumber: 418,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                    lineNumber: 406,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showFilter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$home$2f$FilterDropdown$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                onFilterChange: setFilterStatus
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                lineNumber: 434,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto mx-auto sm:mx-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$table$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                    rowKey: "id",
                    loading: loading,
                    columns: columns,
                    dataSource: policies,
                    scroll: {
                        x: "max-content"
                    },
                    pagination: {
                        current: currentPage,
                        pageSize,
                        total: totalRecords,
                        onChange: setCurrentPage,
                        showSizeChanger: false,
                        showTotal: (total, range)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs sm:text-sm",
                                children: [
                                    range[0],
                                    "-",
                                    range[1],
                                    " of ",
                                    total,
                                    " items"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                                lineNumber: 450,
                                columnNumber: 15
                            }, void 0),
                        className: "px-4 sm:px-0"
                    },
                    className: "policies-table"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                    lineNumber: 437,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                open: !!editingPolicy,
                title: null,
                onCancel: ()=>setEditingPolicy(null),
                footer: null,
                centered: true,
                width: 1000,
                style: {
                    top: 20
                },
                styles: {
                    body: {
                        height: "80vh",
                        maxHeight: "800px",
                        overflow: "hidden",
                        padding: 0,
                        borderRadius: "0.75rem",
                        display: "flex",
                        flexDirection: "column"
                    },
                    content: {
                        padding: 0,
                        borderRadius: "0.75rem",
                        overflow: "hidden",
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                        background: "transparent"
                    },
                    wrapper: {
                        backdropFilter: "blur(4px)"
                    }
                },
                destroyOnClose: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[calc(100vh-100px)] overflow-y-auto",
                    children: (editingPolicy === null || editingPolicy === void 0 ? void 0 : (_editingPolicy_insurance_category = editingPolicy.insurance_category) === null || _editingPolicy_insurance_category === void 0 ? void 0 : _editingPolicy_insurance_category.toLowerCase()) === "bike" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyEditFormBike$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        form: form,
                        loading: loading,
                        onSubmit: handleUpdate,
                        onCancel: ()=>setEditingPolicy(null)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                        lineNumber: 493,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : (editingPolicy === null || editingPolicy === void 0 ? void 0 : (_editingPolicy_insurance_category1 = editingPolicy.insurance_category) === null || _editingPolicy_insurance_category1 === void 0 ? void 0 : _editingPolicy_insurance_category1.toLowerCase()) === "health" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyEditFormHealth$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        form: form,
                        loading: loading,
                        onSubmit: handleUpdate,
                        onCancel: ()=>setEditingPolicy(null)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                        lineNumber: 500,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : (editingPolicy === null || editingPolicy === void 0 ? void 0 : (_editingPolicy_insurance_category2 = editingPolicy.insurance_category) === null || _editingPolicy_insurance_category2 === void 0 ? void 0 : _editingPolicy_insurance_category2.toLowerCase()) === "life" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyEditFormLife$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        form: form,
                        loading: loading,
                        onSubmit: handleUpdate,
                        onCancel: ()=>setEditingPolicy(null)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                        lineNumber: 507,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : (editingPolicy === null || editingPolicy === void 0 ? void 0 : (_editingPolicy_insurance_category3 = editingPolicy.insurance_category) === null || _editingPolicy_insurance_category3 === void 0 ? void 0 : _editingPolicy_insurance_category3.toLowerCase()) === "travel" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyEditFormTravel$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        form: form,
                        loading: loading,
                        onSubmit: handleUpdate,
                        onCancel: ()=>setEditingPolicy(null)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                        lineNumber: 514,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : (editingPolicy === null || editingPolicy === void 0 ? void 0 : (_editingPolicy_insurance_category4 = editingPolicy.insurance_category) === null || _editingPolicy_insurance_category4 === void 0 ? void 0 : _editingPolicy_insurance_category4.toLowerCase()) === "other" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyEditFormOther$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        form: form,
                        loading: loading,
                        onSubmit: handleUpdate,
                        onCancel: ()=>setEditingPolicy(null)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                        lineNumber: 521,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$form$2f$PolicyEditFormCar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        form: form,
                        loading: loading,
                        onSubmit: handleUpdate,
                        onCancel: ()=>setEditingPolicy(null)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                        lineNumber: 528,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                    lineNumber: 491,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx",
                lineNumber: 460,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(PoliciesTypeHome, "eiAHnYP4NFOMdODNxRKrPeYh3vw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].useForm
    ];
});
_c = PoliciesTypeHome;
const __TURBOPACK__default__export__ = PoliciesTypeHome;
var _c;
__turbopack_context__.k.register(_c, "PoliciesTypeHome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/One click/src/pages/policies.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/pages/policies.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/axios/lib/axios.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$row$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/row/index.js [client] (ecmascript) <export default as Row>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/col/index.js [client] (ecmascript) <export default as Col>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/skeleton/index.js [client] (ecmascript) <export default as Skeleton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/message/index.js [client] (ecmascript) <export default as message>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/UserOutlined.js [client] (ecmascript) <export default as UserOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FileProtectOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileProtectOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/FileProtectOutlined.js [client] (ecmascript) <export default as FileProtectOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ReloadOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ReloadOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/ReloadOutlined.js [client] (ecmascript) <export default as ReloadOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CalendarOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/CalendarOutlined.js [client] (ecmascript) <export default as CalendarOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$home$2f$cards$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/home/cards.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$policiesTypeHome$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/policies/policiesTypeHome.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/config.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const Policies = ()=>{
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [policies, setPolicies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const fetchDashboardData = async ()=>{
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].get("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL).concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ADMIN_GET_USER_POLICIES), {
                params: {
                    is_verified: -1
                }
            });
            if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.status) === "success") {
                setLoading(true);
                const { data, pending_count, approved_count, rejectedCount, count, total_records } = res.data;
                setPolicies(data || []);
                setStats([
                    {
                        title: "Pending Policies",
                        value: pending_count,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__["UserOutlined"], {}, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/pages/policies.tsx",
                            lineNumber: 68,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        color: "#1f2add"
                    },
                    {
                        title: "Approved Policy",
                        value: approved_count,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FileProtectOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileProtectOutlined$3e$__["FileProtectOutlined"], {}, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/pages/policies.tsx",
                            lineNumber: 74,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        color: "#faad14"
                    },
                    {
                        title: "Total Policies",
                        value: total_records,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ReloadOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ReloadOutlined$3e$__["ReloadOutlined"], {
                            style: {
                                color: "#ffff"
                            }
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/pages/policies.tsx",
                            lineNumber: 81,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        color: "#00de81"
                    },
                    {
                        title: "Rejected Count",
                        value: rejectedCount,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CalendarOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarOutlined$3e$__["CalendarOutlined"], {}, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/pages/policies.tsx",
                            lineNumber: 92,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        color: "#ff4d4f"
                    }
                ]);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].warning("Failed to fetch policies.");
            }
        } catch (err) {
            console.error("Error loading data:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].error("Network error: Unable to fetch data.");
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Policies.useEffect": ()=>{
            fetchDashboardData();
        }
    }["Policies.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-6 max-w-7xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$row$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                gutter: [
                    16,
                    16
                ],
                justify: "center",
                children: loading ? Array.from({
                    length: 4
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                        xs: 24,
                        sm: 12,
                        lg: 6,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "20px",
                                background: "#fff",
                                borderRadius: "8px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                                active: true
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/pages/policies.tsx",
                                lineNumber: 124,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/pages/policies.tsx",
                            lineNumber: 117,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, index, false, {
                        fileName: "[project]/Downloads/One click/src/pages/policies.tsx",
                        lineNumber: 116,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))) : stats.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                        xs: 24,
                        sm: 12,
                        lg: 6,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$home$2f$cards$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            title: item.title,
                            value: item.value,
                            icon: item.icon,
                            color: item.color
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/pages/policies.tsx",
                            lineNumber: 130,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, index, false, {
                        fileName: "[project]/Downloads/One click/src/pages/policies.tsx",
                        lineNumber: 129,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/pages/policies.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$policiesTypeHome$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    policies: policies,
                    showFilter: true,
                    onDataChange: fetchDashboardData
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/pages/policies.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/pages/policies.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/One click/src/pages/policies.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Policies, "wndmMS+LFj8udovWGOj2oW0/8Y8=");
_c = Policies;
const __TURBOPACK__default__export__ = Policies;
var _c;
__turbopack_context__.k.register(_c, "Policies");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/Downloads/One click/src/pages/policies.tsx [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/policies";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/Downloads/One click/src/pages/policies.tsx [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/Downloads/One click/src/pages/policies\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/Downloads/One click/src/pages/policies.tsx [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__d7d2089e._.js.map