module.exports = [
"[project]/Downloads/One click/src/api/companies.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "companiesApi",
    ()=>companiesApi,
    "insuranceApi",
    ()=>insuranceApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/client.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/config.ts [ssr] (ecmascript)");
;
;
const companiesApi = {
    /**
   * Fetch all companies
   * @returns GetCompaniesResponse - API response containing company array
   */ async getComapines () {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].GET_COMPANIES);
        // Ensure response is shaped like GetCompaniesResponse
        return {
            status: response.status,
            message: response.message,
            count: response.data?.length || 0,
            data: response.data || []
        };
    },
    /**
   * Create uplpad api
   */ async uploadCompany (company, file) {
        const formData = new FormData();
        formData.append("name", company.name);
        formData.append("id", company.id);
        formData.append("status", company.status);
        if (file) formData.append("file", file);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["apiClient"].upload(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].SAVE_COMPANIE, formData);
        return response;
    }
};
const insuranceApi = {
    /**
   * Fetch all insurance types
   * @returns GetInsuranceTypesResponse - API response containing insurance array
   */ async getInsurances () {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].GET_INSURANCE);
        return {
            status: response.status,
            message: response.message,
            count: response.count || response.data?.length || 0,
            data: response.data || []
        };
    },
    /**
   * Create or update insurance type
   */ async saveInsurance (insurance) {
        const formData = new FormData();
        if (insurance.id) formData.append("id", insurance.id); // optional for update
        formData.append("name", insurance.name);
        formData.append("status", insurance.status);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["apiClient"].upload(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].SAVE_INSURANCE, formData);
        return response;
    }
};
}),
"[project]/Downloads/One click/src/pages/companies.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$table$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/table/index.js [ssr] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/button/index.js [ssr] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/message/index.js [ssr] (ecmascript) <export default as message>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tag/index.js [ssr] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/modal/index.js [ssr] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/form/index.js [ssr] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/input/index.js [ssr] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/upload/index.js [ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$switch$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Switch$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/switch/index.js [ssr] (ecmascript) <export default as Switch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EditOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EditOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/EditOutlined.js [ssr] (ecmascript) <export default as EditOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UploadOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/UploadOutlined.js [ssr] (ecmascript) <export default as UploadOutlined>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-hot-toast [external] (react-hot-toast, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$companies$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/companies.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/config.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"use client";
;
;
;
;
;
;
;
const CompaniesPage = ()=>{
    const [companies, setCompanies] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [editingCompany, setEditingCompany] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [form] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].useForm();
    const [fileList, setFileList] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // For image modal
    const [isImageModalOpen, setIsImageModalOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [selectedLogo, setSelectedLogo] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [selectedCompanyName, setSelectedCompanyName] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    // Track logo errors
    const [logoErrorMap, setLogoErrorMap] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({});
    const loadCompanies = async ()=>{
        setLoading(true);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$companies$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["companiesApi"].getComapines();
            const companiesData = response?.data || [];
            setCompanies(companiesData);
        } catch (err) {
            console.error("Error fetching companies:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].error("Failed to fetch companies.");
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        loadCompanies();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (editingCompany) {
            form.setFieldsValue({
                name: editingCompany.name,
                status: editingCompany.status === "Active"
            });
            if (editingCompany.image_url) {
                setFileList([
                    {
                        uid: "-1",
                        name: "logo.png",
                        status: "done",
                        url: editingCompany.image_url
                    }
                ]);
            }
        } else {
            form.resetFields();
            form.setFieldsValue({
                status: true
            });
            setFileList([]);
        }
    }, [
        editingCompany,
        form,
        modalOpen
    ]);
    const handleSave = async ()=>{
        try {
            const values = await form.validateFields();
            setSaving(true);
            const file = fileList[0]?.originFileObj;
            const company = {
                id: editingCompany?.id || "-1",
                name: values.name,
                status: values.status ? "Active" : "Inactive",
                logo: file,
                image_url: editingCompany?.image_url || ""
            };
            const response = await __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].promise(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$companies$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["companiesApi"].uploadCompany(company, file), {
                loading: "Saving company...",
                success: "Company saved successfully!",
                error: "Failed to save company"
            });
            if (response.status === "success") {
                loadCompanies();
                setModalOpen(false);
                setEditingCompany(null);
                form.resetFields();
                setFileList([]);
            } else {
                throw new Error(response.message || "Failed to save company");
            }
        } catch (err) {
            console.error("Error saving company:", err);
        } finally{
            setSaving(false);
        }
    };
    const handleLogoClick = (logo, name)=>{
        setSelectedLogo(logo);
        setSelectedCompanyName(name);
        setIsImageModalOpen(true);
    };
    const handleUploadChange = ({ fileList })=>{
        setFileList(fileList);
    };
    const handleLogoError = (id)=>{
        setLogoErrorMap((prev)=>({
                ...prev,
                [id]: true
            }));
    };
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            align: "left"
        },
        {
            title: "Logo",
            dataIndex: "image_url",
            key: "logo",
            align: "left",
            render: (logo, record)=>{
                const isError = logoErrorMap[record.id];
                if (!logo || isError) return "No Logo";
                let fullUrl = logo;
                if (!logo.startsWith("http")) {
                    const baseUrl = typeof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL.replace(/\/api\/proxy$/, '') : "";
                    const domain = baseUrl.startsWith("http") ? baseUrl : "https://appapi.1clickpolicy.com";
                    const cleanPath = logo.startsWith("/") ? logo : `/${logo}`;
                    fullUrl = `${domain}${cleanPath}`;
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                    src: fullUrl,
                    alt: "logo",
                    width: 50,
                    style: {
                        cursor: "pointer"
                    },
                    onClick: ()=>handleLogoClick(fullUrl, record.name),
                    onError: ()=>handleLogoError(record.id)
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/pages/companies.tsx",
                    lineNumber: 167,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            }
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            align: "left",
            render: (status)=>{
                const isActive = status.toLowerCase() === "active";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                    color: isActive ? "green" : "red",
                    children: status
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/pages/companies.tsx",
                    lineNumber: 185,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            }
        },
        {
            title: "Actions",
            key: "actions",
            align: "right",
            render: (_, record)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    type: "primary",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EditOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EditOutlined$3e$__["EditOutlined"], {}, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/pages/companies.tsx",
                        lineNumber: 195,
                        columnNumber: 17
                    }, void 0),
                    onClick: ()=>{
                        setEditingCompany(record);
                        setModalOpen(true);
                    },
                    children: "Edit"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/pages/companies.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-semibold",
                        children: "Companies"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/pages/companies.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        type: "primary",
                        onClick: ()=>{
                            setEditingCompany(null);
                            setModalOpen(true);
                        },
                        children: "Add Company"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/pages/companies.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/One click/src/pages/companies.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$table$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                columns: columns,
                dataSource: companies,
                loading: loading,
                rowKey: "id"
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/pages/companies.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                title: editingCompany ? "Edit Company" : "Add New Company",
                open: modalOpen,
                onCancel: ()=>{
                    setModalOpen(false);
                    setEditingCompany(null);
                    form.resetFields();
                    setFileList([]);
                },
                onOk: handleSave,
                confirmLoading: saving,
                centered: true,
                destroyOnClose: true,
                okText: editingCompany ? "Update" : "Submit",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"], {
                    layout: "vertical",
                    form: form,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                            label: "Company Name",
                            name: "name",
                            rules: [
                                {
                                    required: true,
                                    message: "Please enter company name"
                                }
                            ],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                placeholder: "Enter company name"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/pages/companies.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/pages/companies.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                            label: "Logo",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$upload$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                listType: "picture",
                                fileList: fileList,
                                beforeUpload: ()=>false,
                                onChange: handleUploadChange,
                                maxCount: 1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UploadOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadOutlined$3e$__["UploadOutlined"], {}, void 0, false, {
                                        fileName: "[project]/Downloads/One click/src/pages/companies.tsx",
                                        lineNumber: 262,
                                        columnNumber: 29
                                    }, void 0),
                                    children: "Select Logo"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/pages/companies.tsx",
                                    lineNumber: 262,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/pages/companies.tsx",
                                lineNumber: 255,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/pages/companies.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                            label: "Status",
                            name: "status",
                            valuePropName: "checked",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$switch$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Switch$3e$__["Switch"], {
                                checkedChildren: "Active",
                                unCheckedChildren: "Inactive"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/pages/companies.tsx",
                                lineNumber: 267,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/pages/companies.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/pages/companies.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/pages/companies.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                open: isImageModalOpen,
                footer: null,
                onCancel: ()=>setIsImageModalOpen(false),
                centered: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        style: {
                            textAlign: "center",
                            marginBottom: 16
                        },
                        children: selectedCompanyName
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/pages/companies.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                        src: selectedLogo || "",
                        alt: "Company Logo",
                        style: {
                            width: "100%",
                            maxHeight: "400px",
                            objectFit: "contain"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/pages/companies.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/One click/src/pages/companies.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/One click/src/pages/companies.tsx",
        lineNumber: 208,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CompaniesPage;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__be117cc2._.js.map