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
"[project]/Downloads/One click/src/api/auth.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// authApi.ts
__turbopack_context__.s([
    "authApi",
    ()=>authApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/client.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/config.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/storage.ts [client] (ecmascript)");
;
;
;
const authApi = {
    async login (credentials) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$client$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].LOGIN, credentials, {
            requiresAuth: false
        });
        if (response.status === "success") {
            var _maybeAny_data, _maybeAny_data_data, _maybeAny_data1;
            const maybeAny = response;
            var _maybeAny_token, _ref;
            const token = (_ref = (_maybeAny_token = maybeAny.token) !== null && _maybeAny_token !== void 0 ? _maybeAny_token : (_maybeAny_data = maybeAny.data) === null || _maybeAny_data === void 0 ? void 0 : _maybeAny_data.token) !== null && _ref !== void 0 ? _ref : (_maybeAny_data1 = maybeAny.data) === null || _maybeAny_data1 === void 0 ? void 0 : (_maybeAny_data_data = _maybeAny_data1.data) === null || _maybeAny_data_data === void 0 ? void 0 : _maybeAny_data_data.token;
            if (token) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].setToken(token);
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].setUser({
                    email: credentials.email
                });
            }
        }
        return response;
    },
    async logout () {
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].clearAuth();
        if ("TURBOPACK compile-time truthy", 1) {
            window.location.replace("/login");
        }
    },
    isAuthenticated () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].isAuthenticated();
    },
    getToken () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].getToken();
    },
    getUser () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].getUser();
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/One click/src/components/sidebar.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/styled-jsx/style.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/drawer/index.js [client] (ecmascript) <export default as Drawer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/button/index.js [client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/menu/index.js [client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BankOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BankOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/BankOutlined.js [client] (ecmascript) <export default as BankOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/UserOutlined.js [client] (ecmascript) <export default as UserOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LogoutOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogoutOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/LogoutOutlined.js [client] (ecmascript) <export default as LogoutOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MenuOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/MenuOutlined.js [client] (ecmascript) <export default as MenuOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HomeOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HomeOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/HomeOutlined.js [client] (ecmascript) <export default as HomeOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ProfileOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ProfileOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/ProfileOutlined.js [client] (ecmascript) <export default as ProfileOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DashboardOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DashboardOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/DashboardOutlined.js [client] (ecmascript) <export default as DashboardOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/image.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$auth$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/auth.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
const menuItems = [
    {
        key: "/dashboard",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HomeOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HomeOutlined$3e$__["HomeOutlined"], {}, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
            lineNumber: 21,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/dashboard",
            children: "Home"
        }, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
            lineNumber: 22,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0))
    },
    // {
    //   key: "/insuranceTypes",
    //   icon: <SafetyOutlined />,
    //   label: <Link href="/insuranceTypes">Insurance Types</Link>,
    // },
    {
        key: "/companies",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BankOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BankOutlined$3e$__["BankOutlined"], {}, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
            lineNumber: 31,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/companies",
            children: "Companies"
        }, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
            lineNumber: 32,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        key: "/upcomingExpiries",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ProfileOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ProfileOutlined$3e$__["ProfileOutlined"], {}, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
            lineNumber: 36,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/upcomingExpiries",
            children: "Upcoming Expiries"
        }, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
            lineNumber: 37,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        key: "/policies",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ProfileOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ProfileOutlined$3e$__["ProfileOutlined"], {}, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
            lineNumber: 41,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/policies",
            children: "Policies"
        }, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
            lineNumber: 42,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        key: "/users",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__["UserOutlined"], {}, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
            lineNumber: 46,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/users",
            children: "Users"
        }, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
            lineNumber: 47,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        key: "/manage-dashboard",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DashboardOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DashboardOutlined$3e$__["DashboardOutlined"], {}, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
            lineNumber: 51,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/manage-dashboard",
            children: "Manage Dashboard"
        }, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
            lineNumber: 52,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const Sidebar = ()=>{
    _s();
    const [drawerOpen, setDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // const handleLogout = async () => {
    //   setIsLoading(true);
    //   try {
    //     localStorage.removeItem("isAuthenticated");
    //     router.push("/login");
    //   } catch (error) {
    //     console.error("Logout Error:", error);
    //     router.push("/login");
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    const handleLogout = async ()=>{
        try {
            setIsLoading(true);
            await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$auth$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["authApi"].logout();
        // Redirect manually after clearing tokens
        // router.push("/login");
        } catch (err) {
            console.error("Logout failed:", err);
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-8690af268b2bee6a" + " " + "md:hidden flex items-center justify-between p-4 bg-white shadow-sm border-b border-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_LOGO_URL || "/1click-logo.png",
                        alt: "Logo",
                        width: 120,
                        height: 32,
                        className: "h-8 w-auto",
                        onError: ()=>console.error("Failed to load logo")
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        type: "text",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MenuOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuOutlined$3e$__["MenuOutlined"], {
                            className: "text-xl"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
                            lineNumber: 103,
                            columnNumber: 17
                        }, void 0),
                        onClick: ()=>setDrawerOpen(true),
                        className: "flex items-center justify-center",
                        disabled: isLoading
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-8690af268b2bee6a" + " " + "hidden md:flex flex-col justify-between w-64 h-screen bg-gradient-to-b from-white to-gray-50 border-r border-gray-200 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>router.push("/dashboard"),
                        className: "jsx-8690af268b2bee6a" + " " + "flex items-center justify-start gap-2 h-20 pl-4 cursor-pointer mx-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_LOGO_URL || "/1click-logo.png",
                            alt: "Logo",
                            width: 120,
                            height: 56,
                            onError: ()=>console.error("Failed to load logo")
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8690af268b2bee6a" + " " + "flex-1 px-2 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            mode: "inline",
                            selectedKeys: [
                                router.pathname
                            ],
                            items: menuItems,
                            style: {
                                borderRight: "none"
                            }
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8690af268b2bee6a" + " " + "p-4 border-t border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            type: "default",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LogoutOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogoutOutlined$3e$__["LogoutOutlined"], {}, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
                                lineNumber: 137,
                                columnNumber: 19
                            }, void 0),
                            className: "w-full flex items-center gap-2 px-3 py-2 bg-red-600 text-white hover:bg-red-700 hover:text-white transition-all logout-button",
                            onClick: handleLogout,
                            loading: isLoading,
                            disabled: isLoading,
                            children: "Logout"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__["Drawer"], {
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-8690af268b2bee6a" + " " + "flex items-start gap-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_LOGO_URL || "/1click-logo.png",
                        alt: "Logo",
                        width: 120,
                        height: 40,
                        className: "h-10 w-auto hidden md:block",
                        onError: ()=>console.error("Failed to load logo")
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
                        lineNumber: 152,
                        columnNumber: 13
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
                    lineNumber: 151,
                    columnNumber: 11
                }, void 0),
                placement: "left",
                onClose: ()=>setDrawerOpen(false),
                open: drawerOpen,
                className: "md:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8690af268b2bee6a" + " " + "px-2 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$menu$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            mode: "inline",
                            selectedKeys: [
                                router.pathname
                            ],
                            items: menuItems,
                            className: "custom-menu"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8690af268b2bee6a" + " " + "p-4 border-t border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            type: "default",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LogoutOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogoutOutlined$3e$__["LogoutOutlined"], {}, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
                                lineNumber: 178,
                                columnNumber: 19
                            }, void 0),
                            className: "w-full flex items-center gap-2 px-3 py-2 bg-red-500 text-white hover:bg-red-600 hover:text-white transition-all logout-button",
                            onClick: handleLogout,
                            loading: isLoading,
                            disabled: isLoading,
                            children: "Logout"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/One click/src/components/sidebar.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                id: "8690af268b2bee6a",
                children: ".custom-menu .ant-menu-item{border-radius:10px;align-items:center;margin:6px 0;font-weight:500;transition:all .3s;display:flex;padding:10px 16px!important}.custom-menu .ant-menu-title-content{align-items:center;display:flex}.custom-menu .ant-menu-item:hover{color:#1a5fcc!important;background:#f5f7ff!important}.custom-menu .ant-menu-item-selected{font-weight:600;color:#1a5fcc!important;background:#e6f0ff!important}.custom-menu .ant-menu-item-selected .anticon{color:#1a5fcc!important}.logout-button.ant-btn{color:#fff!important;background:#dc2626!important;border-color:#dc2626!important}.logout-button.ant-btn:hover{color:#fff!important;background:#b91c1c!important;border-color:#b91c1c!important}.logout-button.ant-btn[disabled]{color:#fff!important;background:#fca5a5!important;border-color:#fca5a5!important}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Sidebar, "Aa/KEN6Pc7TT2VInJwHH5F+Q0dI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Sidebar;
const __TURBOPACK__default__export__ = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/One click/src/components/navbar.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/dropdown/index.js [client] (ecmascript) <export default as Dropdown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LogoutOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogoutOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/LogoutOutlined.js [client] (ecmascript) <export default as LogoutOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/navigation.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$auth$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/auth.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Navbar = ()=>{
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLogout = async ()=>{
        try {
            setIsLoading(true);
            await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$auth$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["authApi"].logout();
            // Clear tokens from localstorage
            localStorage.removeItem("token");
        // Redirect to login
        // router.push("/login");
        } catch (err) {
            console.error("Logout failed:", err);
        } finally{
            setIsLoading(false);
        }
    };
    const menuItems = [
        {
            key: "logout",
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: handleLogout,
                className: "flex items-center justify-center w-full cursor-pointer ".concat(isLoading ? "opacity-50 pointer-events-none" : "text-red-600"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LogoutOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogoutOutlined$3e$__["LogoutOutlined"], {
                        className: "mr-2"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/navbar.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    isLoading ? "Logging out..." : "Logout"
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/One click/src/components/navbar.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-white min-h-[80px] flex items-center justify-end px-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"], {
            menu: {
                items: menuItems
            },
            trigger: [
                "click"
            ],
            placement: "bottomRight",
            overlayClassName: "rounded-lg shadow-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 cursor-pointer px-2 py-1 border border-gray-300 rounded-full hover:bg-[#3399FF] hover:text-white group",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24px",
                    height: "24px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "text-[#2196f3] group-hover:text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/navbar.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/navbar.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/navbar.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/navbar.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/navbar.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/One click/src/components/navbar.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navbar, "oofmIDu+Prn0iTOh5nKhCcpj4zQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/One click/src/components/layout.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/storage.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/navigation.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$sidebar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/sidebar.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$navbar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/navbar.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react-hot-toast/dist/index.mjs [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const Layout = (param)=>{
    let { children } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const globalToastOptions = {
        position: "top-center",
        duration: 3000,
        style: {
            borderRadius: "12px",
            background: "#8155ff",
            color: "#FFFFFF",
            fontWeight: 500,
            fontSize: "14px",
            padding: "8px 16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            backdropFilter: "blur(8px)"
        },
        iconTheme: {
            primary: "#FFFFFF",
            secondary: "#1A1A2E"
        },
        ariaProps: {
            role: "status",
            "aria-live": "polite"
        },
        className: "toast-custom"
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Layout.useEffect": ()=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].isAuthenticated()) {
                router.replace("/login");
            }
        }
    }["Layout.useEffect"], [
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-screen sticky top-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$sidebar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/layout.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/layout.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$navbar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/layout.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/layout.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["Toaster"], {
                        toastOptions: globalToastOptions
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/layout.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 overflow-auto p-2 md:p-4 lg:p-4 bg-[#edf1f5] rounded mr-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto rounded-2xl",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/layout.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/layout.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/One click/src/components/layout.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/One click/src/components/layout.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Layout, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Layout;
const __TURBOPACK__default__export__ = Layout;
var _c;
__turbopack_context__.k.register(_c, "Layout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/One click/src/pages/_app.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$layout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/layout.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$auth$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/auth.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function App(param) {
    let { Component, pageProps } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const noLayoutPages = [
        "/login",
        "/"
    ];
    const showLayout = !noLayoutPages.includes(router.pathname);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            setMounted(true);
        }
    }["App.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (!mounted) return;
            const protectedPages = [
                "/dashboard"
            ];
            const isProtectedPage = protectedPages.some({
                "App.useEffect.isProtectedPage": (page)=>router.pathname.startsWith(page)
            }["App.useEffect.isProtectedPage"]);
            if (isProtectedPage && !__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$auth$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["authApi"].isAuthenticated()) {
                router.replace("/login");
            } else if (router.pathname === "/login" && __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$auth$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["authApi"].isAuthenticated()) {
                router.replace("/dashboard");
            }
        }
    }["App.useEffect"], [
        router.pathname,
        mounted,
        router
    ]);
    if (!mounted) {
        return null;
    }
    const PageComponent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        ...pageProps
    }, void 0, false, {
        fileName: "[project]/Downloads/One click/src/pages/_app.tsx",
        lineNumber: 39,
        columnNumber: 25
    }, this);
    return showLayout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$layout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        children: PageComponent
    }, void 0, false, {
        fileName: "[project]/Downloads/One click/src/pages/_app.tsx",
        lineNumber: 40,
        columnNumber: 23
    }, this) : PageComponent;
}
_s(App, "uammy8dd1Ia+OYqB+reBs7Z89o0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/Downloads/One click/src/pages/_app.tsx [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/_app";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/Downloads/One click/src/pages/_app.tsx [client] (ecmascript)");
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
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/Downloads/One click/src/pages/_app\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/Downloads/One click/src/pages/_app.tsx [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__0f9cd907._.js.map