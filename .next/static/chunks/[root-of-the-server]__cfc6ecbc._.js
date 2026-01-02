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
"[project]/Downloads/One click/src/pages/login.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/navigation.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$auth$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/auth.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/image.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Login = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Login.useEffect": ()=>{
            setMounted(true);
            const checkAuth = {
                "Login.useEffect.checkAuth": ()=>{
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$auth$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["authApi"].isAuthenticated()) {
                        router.replace("/dashboard");
                    }
                }
            }["Login.useEffect.checkAuth"];
            checkAuth();
        }
    }["Login.useEffect"], [
        router
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$auth$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["authApi"].login({
                email,
                password
            });
            if (response.status === "success") {
                setTimeout(()=>{
                    router.replace("/dashboard");
                }, 100);
            } else {
                setError(response.message || "Invalid email or password");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        } finally{
            setLoading(false);
        }
    };
    if (!mounted) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex w-1/2 items-center justify-center relative ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-10 bottom-10 left-10 right-10 bg-[url('/login.svg')] bg-no-repeat bg-right rounded-xl bg-cover "
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/pages/login.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/pages/login.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full md:w-1/2 items-center justify-center min-h-screen bg-gray-50 p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md rounded-2xl bg-white shadow-xl p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/1click-logo.png",
                                alt: "Logo",
                                className: "h-20 w-auto",
                                width: 140,
                                height: 70
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/pages/login.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/pages/login.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-extrabold text-center text-gray-900",
                            children: [
                                "Sign in to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-blue-600",
                                    children: "1ClickPolicy"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/pages/login.tsx",
                                    lineNumber: 88,
                                    columnNumber: 24
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/pages/login.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 mb-6 text-center text-gray-600 text-sm",
                            children: "Secure your future with just one click."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/pages/login.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "space-y-5",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1 text-gray-700",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/pages/login.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            placeholder: "Enter your email",
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none  placeholder:text-gray-400 text-gray-900 transition",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/pages/login.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/One click/src/pages/login.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1 text-gray-700",
                                            children: "Password"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/pages/login.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value),
                                            placeholder: "Enter your password",
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none  placeholder:text-gray-400 text-gray-900 transition",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/One click/src/pages/login.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/One click/src/pages/login.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: loading,
                                    className: "w-full flex items-center justify-center py-2.5 rounded-lg font-semibold transition \n          ".concat(loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700", " \n          text-white shadow-md"),
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "animate-spin h-5 w-5 text-white",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                className: "opacity-25",
                                                cx: "12",
                                                cy: "12",
                                                r: "10",
                                                stroke: "currentColor",
                                                strokeWidth: "4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/pages/login.tsx",
                                                lineNumber: 151,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                className: "opacity-75",
                                                fill: "currentColor",
                                                d: "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/One click/src/pages/login.tsx",
                                                lineNumber: 159,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/One click/src/pages/login.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : "Login"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/pages/login.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/pages/login.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-600 text-sm mt-4 text-center font-medium",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/pages/login.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/pages/login.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/pages/login.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/One click/src/pages/login.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Login, "5OWT8ZQUogEgwpnkA4lGMSYNDow=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Login;
const __TURBOPACK__default__export__ = Login;
var _c;
__turbopack_context__.k.register(_c, "Login");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/Downloads/One click/src/pages/login.tsx [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/login";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/Downloads/One click/src/pages/login.tsx [client] (ecmascript)");
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
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/Downloads/One click/src/pages/login\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/Downloads/One click/src/pages/login.tsx [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__cfc6ecbc._.js.map