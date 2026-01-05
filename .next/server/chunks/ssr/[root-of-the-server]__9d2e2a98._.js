module.exports = [
"[externals]/axios [external] (axios, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("axios");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/Downloads/One click/src/components/home/renewalList.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$card$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/card/index.js [ssr] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$list$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/list/index.js [ssr] (ecmascript) <export default as List>");
;
;
const RenewalList = ({ title = "Renewal in 30 Days", data })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$card$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
        title: title,
        className: "mt-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$list$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
            dataSource: data,
            renderItem: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$list$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"].Item, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$list$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"].Item.Meta, {
                            title: item.name,
                            description: `Customer: ${item.user}`
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/renewalList.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                item.daysLeft,
                                " days left"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/home/renewalList.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/home/renewalList.tsx",
                    lineNumber: 26,
                    columnNumber: 11
                }, void 0)
        }, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/home/renewalList.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/One click/src/components/home/renewalList.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = RenewalList;
}),
"[project]/Downloads/One click/src/components/home/pieChart.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PieChartWithCustomizedLabel
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/recharts/es6/chart/PieChart.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/recharts/es6/polar/Pie.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/recharts/es6/component/Cell.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/recharts/es6/component/Tooltip.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/recharts/es6/component/ResponsiveContainer.js [ssr] (ecmascript)");
"use client";
;
;
const RADIAN = Math.PI / 180;
// Correctly typed label renderer with safe checks
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent })=>{
    if (typeof cx !== "number" || typeof cy !== "number" || typeof midAngle !== "number" || typeof innerRadius !== "number" || typeof outerRadius !== "number" || typeof percent !== "number") {
        return null;
    }
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("text", {
        x: x,
        y: y,
        fill: "white",
        textAnchor: x > cx ? "start" : "end",
        dominantBaseline: "central",
        fontSize: "0.9em",
        children: `${(percent * 100).toFixed(0)}%`
    }, void 0, false, {
        fileName: "[project]/Downloads/One click/src/components/home/pieChart.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#A28DD0"
];
function PieChartWithCustomizedLabel({ data, width = "100%", height = 300 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
        width: width,
        height: height,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["PieChart"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Pie"], {
                    data: data,
                    dataKey: "value",
                    nameKey: "name",
                    cx: "50%",
                    cy: "50%",
                    outerRadius: Math.min(height / 2, 120),
                    labelLine: false,
                    label: renderCustomizedLabel,
                    children: data.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Cell"], {
                            fill: COLORS[index % COLORS.length]
                        }, `cell-${index}`, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/pieChart.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/home/pieChart.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/home/pieChart.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/One click/src/components/home/pieChart.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/One click/src/components/home/pieChart.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/One click/src/components/home/DrillDownBarChart.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/recharts/es6/chart/BarChart.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/recharts/es6/cartesian/Bar.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/recharts/es6/cartesian/XAxis.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/recharts/es6/cartesian/YAxis.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/recharts/es6/cartesian/CartesianGrid.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/recharts/es6/component/Tooltip.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/recharts/es6/component/ResponsiveContainer.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/config.ts [ssr] (ecmascript)");
"use client";
;
;
;
;
const API_BASE = `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].GET_USER_CHART_DATA}`;
const DrillDownBarChart = ()=>{
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("year");
    const [selectedYear, setSelectedYear] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [selectedMonth, setSelectedMonth] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [yearlyData, setYearlyData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [monthlyData, setMonthlyData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [dailyData, setDailyData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (level !== "year") return;
        const fetchYearly = async ()=>{
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`${API_BASE}?action=signup_stats&group_by=year`);
                const result = await response.json();
                if (result.status === "success") {
                    const data = result.data.map((item)=>({
                            period: item.year,
                            value: Number(item.signups)
                        })).sort((a, b)=>parseInt(a.period) - parseInt(b.period));
                    setYearlyData(data);
                } else {
                    setError("Failed to load yearly data");
                }
            } catch (err) {
                setError("Network error while fetching yearly data");
            } finally{
                setLoading(false);
            }
        };
        fetchYearly();
    }, [
        level
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (level !== "month" || !selectedYear) return;
        const fetchMonthly = async ()=>{
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`${API_BASE}?action=signup_stats&group_by=month&year=${selectedYear}`);
                const result = await response.json();
                if (result.status === "success") {
                    const monthNames = [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                    ];
                    const data = result.data.map((item)=>({
                            period: monthNames[item.month - 1],
                            value: Number(item.signups)
                        })).sort((a, b)=>monthNames.indexOf(a.period) - monthNames.indexOf(b.period));
                    setMonthlyData(data);
                } else {
                    setError("Failed to load monthly data");
                }
            } catch (err) {
                setError("Network error while fetching monthly data");
            } finally{
                setLoading(false);
            }
        };
        fetchMonthly();
    }, [
        level,
        selectedYear
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (level !== "day" || !selectedYear || !selectedMonth) return;
        const fetchDaily = async ()=>{
            setLoading(true);
            setError(null);
            const monthNames = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ];
            const monthNumber = monthNames.indexOf(selectedMonth) + 1;
            try {
                const response = await fetch(`${API_BASE}?action=signup_stats&group_by=day&year=${selectedYear}&month=${monthNumber}`);
                const result = await response.json();
                if (result.status === "success") {
                    const data = result.data.map((item)=>({
                            period: `${item.day}`,
                            value: Number(item.signups)
                        })).sort((a, b)=>parseInt(a.period) - parseInt(b.period));
                    setDailyData(data);
                } else {
                    setError("Failed to load daily data");
                }
            } catch (err) {
                setError("Network error while fetching daily data");
            } finally{
                setLoading(false);
            }
        };
        fetchDaily();
    }, [
        level,
        selectedYear,
        selectedMonth
    ]);
    const chartData = level === "year" ? yearlyData : level === "month" ? monthlyData : dailyData;
    const handleBarClick = (data)=>{
        if (!data?.period) return;
        if (level === "year") {
            setSelectedYear(data.period);
            setLevel("month");
            setMonthlyData([]);
            setDailyData([]);
        } else if (level === "month") {
            setSelectedMonth(data.period);
            setLevel("day");
            setDailyData([]);
        }
    };
    const handleBack = ()=>{
        if (level === "day") {
            setLevel("month");
            setSelectedMonth(null);
            setDailyData([]);
        } else if (level === "month") {
            setLevel("year");
            setSelectedYear(null);
            setSelectedMonth(null);
            setMonthlyData([]);
            setDailyData([]);
        }
    };
    const title = level === "year" ? "Yearly Signups Overview" : level === "month" ? `Monthly Breakdown – ${selectedYear}` : `Daily Signups – ${selectedMonth} ${selectedYear}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-gray-800 mb-6",
                children: title
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/home/DrillDownBarChart.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            level !== "year" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                onClick: handleBack,
                className: "mb-6 px-5 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 shadow-md hover:shadow-lg transition-all duration-200",
                children: "← Back"
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/home/DrillDownBarChart.tsx",
                lineNumber: 218,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center h-96",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "text-gray-500",
                    children: "Loading data..."
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/home/DrillDownBarChart.tsx",
                    lineNumber: 228,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/home/DrillDownBarChart.tsx",
                lineNumber: 227,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center h-96",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "text-red-500",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/home/DrillDownBarChart.tsx",
                    lineNumber: 234,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/home/DrillDownBarChart.tsx",
                lineNumber: 233,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !loading && !error && chartData.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center h-96",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "text-gray-500",
                    children: "No data available"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/home/DrillDownBarChart.tsx",
                    lineNumber: 240,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/home/DrillDownBarChart.tsx",
                lineNumber: 239,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !loading && !error && chartData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: 400,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                    data: chartData,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                            strokeDasharray: "3 3",
                            stroke: "#e0e0e0"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/DrillDownBarChart.tsx",
                            lineNumber: 247,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                            dataKey: "period",
                            tick: {
                                fontSize: 12
                            },
                            angle: level === "day" ? -45 : 0,
                            textAnchor: level === "day" ? "end" : "middle",
                            height: level === "day" ? 80 : 60
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/DrillDownBarChart.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                            tick: {
                                fontSize: 12
                            }
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/DrillDownBarChart.tsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                            formatter: (value)=>[
                                    `${value} signups`,
                                    "Signups"
                                ],
                            contentStyle: {
                                backgroundColor: "#fff",
                                borderRadius: "8px"
                            },
                            labelFormatter: ()=>{
                                if (level === "day") {
                                    return `${selectedMonth} ${selectedYear}`;
                                }
                                return "";
                            }
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/DrillDownBarChart.tsx",
                            lineNumber: 256,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                            dataKey: "value",
                            fill: "#3b82f6",
                            radius: [
                                8,
                                8,
                                0,
                                0
                            ],
                            cursor: level !== "day" ? "pointer" : "default",
                            onClick: level !== "day" ? handleBarClick : undefined
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/DrillDownBarChart.tsx",
                            lineNumber: 266,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/home/DrillDownBarChart.tsx",
                    lineNumber: 246,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/home/DrillDownBarChart.tsx",
                lineNumber: 245,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/One click/src/components/home/DrillDownBarChart.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = DrillDownBarChart;
}),
"[project]/Downloads/One click/src/utils/axios.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const api = __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__["default"].create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 15000
});
const __TURBOPACK__default__export__ = api;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/modal/index.js [ssr] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$descriptions$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Descriptions$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/descriptions/index.js [ssr] (ecmascript) <locals> <export default as Descriptions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$image$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/image/index.js [ssr] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/select/index.js [ssr] (ecmascript) <export default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/tag/index.js [ssr] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EyeOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/EyeOutlined.js [ssr] (ecmascript) <export default as EyeOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$NotificationOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NotificationOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/NotificationOutlined.js [ssr] (ecmascript) <export default as NotificationOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MailOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MailOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/MailOutlined.js [ssr] (ecmascript) <export default as MailOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/MessageOutlined.js [ssr] (ecmascript) <export default as MessageOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$WhatsAppOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WhatsAppOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/WhatsAppOutlined.js [ssr] (ecmascript) <export default as WhatsAppOutlined>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-hot-toast [external] (react-hot-toast, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/config.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$utils$2f$axios$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/utils/axios.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$utils$2f$axios$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$utils$2f$axios$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"use client";
;
;
;
;
;
;
;
const { Option } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"];
const UpcomingExpiries = ({ showFilter = false, defaultFilter = "all" })=>{
    const [allData, setAllData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [selectedPolicy, setSelectedPolicy] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [filterType, setFilterType] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(defaultFilter);
    const [loadingNotification, setLoadingNotification] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [loadingEmail, setLoadingEmail] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [loadingSMS, setLoadingSMS] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [loadingWhatsApp, setLoadingWhatsApp] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const fetchUpcomingExpiries = async ()=>{
        try {
            setLoading(true);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$utils$2f$axios$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].VIEW_UPCOMMING}`);
            if (res.data?.status === "success") {
                setAllData(res.data.data || []);
                setData(res.data.data || []);
            } else {
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error(res.data?.message || "Failed to fetch upcoming expiries");
            }
        } catch (err) {
            console.error(err);
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error("Failed to fetch upcoming expiries");
        } finally{
            setLoading(false);
        }
    };
    // Client-side filtering
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const today = new Date();
        const next30Days = new Date();
        next30Days.setDate(today.getDate() + 30);
        if (filterType === "all") {
            setData(allData);
        } else if (filterType === "expiring") {
            const filtered = allData.filter((item)=>{
                if (!item.policy_end_date) return false;
                const expiryDate = new Date(item.policy_end_date);
                return expiryDate >= today && expiryDate <= next30Days;
            });
            setData(filtered);
        } else if (filterType === "renewal") {
            const filtered = allData.filter((item)=>{
                if (!item.next_payment_date) return false;
                const renewalDate = new Date(item.next_payment_date);
                return renewalDate >= today && renewalDate <= next30Days;
            });
            setData(filtered);
        }
    }, [
        filterType,
        allData
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        fetchUpcomingExpiries();
    }, []);
    const handleView = (record)=>{
        setSelectedPolicy(record);
        setIsModalOpen(true);
    };
    const handleCloseModal = ()=>{
        setSelectedPolicy(null);
        setIsModalOpen(false);
    };
    const handleSendNotification = async (policy)=>{
        if (!policy) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error("No policy selected");
            return;
        }
        setLoadingNotification(true);
        try {
            const url = `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].NOTIFICATIONS_SEND}?user_id=${policy.user_id}`;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$utils$2f$axios$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].post(url, {
                title: "Policy Expiry Reminder",
                body: `Hello ${policy.client_name}, your policy ${policy.policy_no} will expire on ${policy.policy_end_date}.`
            });
            if (res.data.success) {
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].success(res.data.message || "Notification sent successfully!");
            } else {
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error(res.data.message || "Failed to send notification");
            }
        } catch (err) {
            console.error(err);
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error("Error sending notification");
        } finally{
            setLoadingNotification(false);
        }
    };
    const handleSendEmail = async (policy)=>{
        if (!policy) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error("No policy selected");
            return;
        }
        setLoadingEmail(true);
        try {
            const url = `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].EMAIL_SEND}?user_id=${policy.user_id}&policy_id=${policy.id}`;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$utils$2f$axios$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].post(url, {
                title: "Policy Expiry Reminder",
                body: `Hello ${policy.client_name}, your policy ${policy.policy_no} will expire on ${policy.policy_end_date}.`
            });
            if (res.data.status === "success") {
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].success(res.data.message || `Email sent to ${policy.client_name}`);
            } else {
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error(res.data.message || "Failed to send email");
            }
        } catch (err) {
            console.error(err);
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error("Error sending email");
        } finally{
            setLoadingEmail(false);
        }
    };
    const handleSendSMS = async (policy)=>{
        if (!policy) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error("No policy selected");
            return;
        }
        setLoadingSMS(true);
        try {
            const url = `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].SMS_SEND}?user_id=${policy.user_id}&policy_id=${policy.id}`;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$utils$2f$axios$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].post(url, {
                body: `Hello ${policy.client_name}, your policy ${policy.policy_no} will expire on ${policy.policy_end_date}.`
            });
            if (res.data.success) {
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].success(res.data.message || `SMS sent to ${policy.client_name}`);
            } else {
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error(res.data.message || "Failed to send SMS");
            }
        } catch (err) {
            console.error(err);
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error("Error sending SMS");
        } finally{
            setLoadingSMS(false);
        }
    };
    const handleSendWhatsapp = async (policy)=>{
        if (!policy) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error("No policy selected");
            return;
        }
        setLoadingWhatsApp(true);
        try {
            const url = `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].WHATSAPP_SEND}?user_id=${policy.user_id}&policy_id=${policy.id}`;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$utils$2f$axios$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].post(url, {
                body: `Hello ${policy.client_name}, your policy ${policy.policy_no} will expire on ${policy.policy_end_date}.`
            });
            if (res.data.success) {
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].success(res.data.message || `WhatsApp message sent to ${policy.client_name}`);
            } else {
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error(res.data.message || "Failed to send WhatsApp message");
            }
        } catch (err) {
            console.error(err);
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error("Error sending WhatsApp message");
        } finally{
            setLoadingWhatsApp(false);
        }
    };
    const columns = [
        {
            title: "User",
            dataIndex: "client_name",
            key: "user",
            align: "left"
        },
        {
            title: "Policy",
            dataIndex: "policy_no",
            key: "policy",
            align: "left"
        },
        {
            title: "Expiry",
            dataIndex: "policy_end_date",
            key: "expiry",
            align: "left",
            render: (date)=>new Date(date).toLocaleDateString()
        },
        {
            title: "Status",
            key: "status",
            align: "left",
            render: (_, record)=>{
                const today = new Date();
                const expiryDate = new Date(record.policy_end_date);
                if (expiryDate < today) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                    color: "red",
                    children: "Expired"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                    lineNumber: 285,
                    columnNumber: 40
                }, ("TURBOPACK compile-time value", void 0));
                if ((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24) <= 30) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                    color: "orange",
                    children: "Expiring Soon"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                    lineNumber: 290,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0));
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                    color: "green",
                    children: "Active"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                    lineNumber: 291,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            }
        },
        {
            title: "Action",
            key: "action",
            align: "right",
            render: (_, record)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    type: "primary",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EyeOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOutlined$3e$__["EyeOutlined"], {}, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                        lineNumber: 301,
                        columnNumber: 17
                    }, void 0),
                    onClick: ()=>handleView(record),
                    children: "View"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                    lineNumber: 299,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: "Upcoming Expiries"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    showFilter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                        value: filterType,
                        onChange: (val)=>setFilterType(val),
                        style: {
                            width: 200
                        },
                        placeholder: "Filter policies...",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Option, {
                                value: "all",
                                children: "All Policies"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Option, {
                                value: "expiring",
                                children: "Upcoming Expiring"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Option, {
                                value: "renewal",
                                children: "Upcoming Renewal"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                                lineNumber: 323,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                        lineNumber: 315,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "overflow-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$table$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                    dataSource: data,
                    columns: columns,
                    rowKey: (record)=>record.id,
                    loading: loading,
                    pagination: {
                        pageSize: 5
                    },
                    locale: {
                        emptyText: "No upcoming policies found"
                    }
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                    lineNumber: 329,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                lineNumber: 328,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                title: `Policy Details - ${selectedPolicy?.policy_no}`,
                open: isModalOpen,
                onCancel: handleCloseModal,
                footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        gap: 12
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            type: "primary",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$NotificationOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NotificationOutlined$3e$__["NotificationOutlined"], {}, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                                lineNumber: 347,
                                columnNumber: 21
                            }, void 0),
                            loading: loadingNotification,
                            onClick: ()=>handleSendNotification(selectedPolicy),
                            children: "Send Notification"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                            lineNumber: 345,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            type: "primary",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MailOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MailOutlined$3e$__["MailOutlined"], {}, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                                lineNumber: 355,
                                columnNumber: 21
                            }, void 0),
                            loading: loadingEmail,
                            onClick: ()=>handleSendEmail(selectedPolicy),
                            children: "Send Email"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                            lineNumber: 353,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            type: "primary",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageOutlined$3e$__["MessageOutlined"], {}, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                                lineNumber: 363,
                                columnNumber: 21
                            }, void 0),
                            loading: loadingSMS,
                            onClick: ()=>handleSendSMS(selectedPolicy),
                            children: "Send SMS"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                            lineNumber: 361,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            type: "primary",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$WhatsAppOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WhatsAppOutlined$3e$__["WhatsAppOutlined"], {}, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                                lineNumber: 371,
                                columnNumber: 21
                            }, void 0),
                            style: {
                                backgroundColor: "#25D366",
                                borderColor: "#25D366",
                                color: "#fff"
                            },
                            loading: loadingWhatsApp,
                            onClick: ()=>handleSendWhatsapp(selectedPolicy),
                            children: "Send WhatsApp"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                            lineNumber: 369,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                    lineNumber: 344,
                    columnNumber: 11
                }, void 0),
                width: 1024,
                children: selectedPolicy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$descriptions$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Descriptions$3e$__["Descriptions"], {
                    bordered: true,
                    column: 2,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$descriptions$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Descriptions$3e$__["Descriptions"].Item, {
                            label: "Policy Holder",
                            children: selectedPolicy.client_name
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                            lineNumber: 388,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$descriptions$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Descriptions$3e$__["Descriptions"].Item, {
                            label: "Policy Number",
                            children: selectedPolicy.policy_no
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                            lineNumber: 391,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$descriptions$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Descriptions$3e$__["Descriptions"].Item, {
                            label: "Insurer Name",
                            children: selectedPolicy.insurer_name
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                            lineNumber: 394,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$descriptions$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Descriptions$3e$__["Descriptions"].Item, {
                            label: "Policy Name",
                            children: selectedPolicy.policy_name
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                            lineNumber: 397,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$descriptions$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Descriptions$3e$__["Descriptions"].Item, {
                            label: "Type of Business",
                            children: selectedPolicy.type_of_business
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                            lineNumber: 400,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$descriptions$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Descriptions$3e$__["Descriptions"].Item, {
                            label: "Sum Insured",
                            children: [
                                selectedPolicy.sum_currency,
                                " ",
                                selectedPolicy.sum_insured
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                            lineNumber: 403,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$descriptions$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Descriptions$3e$__["Descriptions"].Item, {
                            label: "Premium Amount",
                            children: selectedPolicy.gross_premium
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                            lineNumber: 408,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$descriptions$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Descriptions$3e$__["Descriptions"].Item, {
                            label: "Insurance Category",
                            children: selectedPolicy.insurance_category
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                            lineNumber: 411,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$descriptions$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Descriptions$3e$__["Descriptions"].Item, {
                            label: "Duration (Years)",
                            children: selectedPolicy.trip_duration
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                            lineNumber: 414,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$descriptions$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Descriptions$3e$__["Descriptions"].Item, {
                            label: "Start Date",
                            children: selectedPolicy.policy_start_date
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                            lineNumber: 417,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$descriptions$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Descriptions$3e$__["Descriptions"].Item, {
                            label: "End Date",
                            children: selectedPolicy.policy_end_date
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                            lineNumber: 420,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$descriptions$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Descriptions$3e$__["Descriptions"].Item, {
                            label: "Next Payment Date",
                            children: selectedPolicy.next_payment_date
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                            lineNumber: 423,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$descriptions$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Descriptions$3e$__["Descriptions"].Item, {
                            label: "Notes",
                            children: selectedPolicy.notes || "-"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                            lineNumber: 426,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        selectedPolicy.company_logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$descriptions$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Descriptions$3e$__["Descriptions"].Item, {
                            label: "Company Logo",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$image$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                width: 40,
                                src: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/uploads/${selectedPolicy.company_logo}`,
                                alt: selectedPolicy.insurance_company
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                                lineNumber: 431,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                            lineNumber: 430,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                    lineNumber: 387,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx",
        lineNumber: 311,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = UpcomingExpiries;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Downloads/One click/src/components/home/cards.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
"use client";
;
const Cards = ({ icon, title, value, color })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: " group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-300 transform hover:-translate-y-1 overflow-hidden ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full opacity-[0.08] transition-all duration-500 group-hover:scale-150",
                style: {
                    backgroundColor: color || "#3b82f6"
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/home/cards.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-xs font-bold uppercase tracking-wider mb-2",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/home/cards.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "text-3xl font-bold text-gray-800 tracking-tight",
                                children: value
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/home/cards.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/One click/src/components/home/cards.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: " flex items-center justify-center rounded-xl w-14 h-14 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ",
                        style: {
                            backgroundColor: color ? `${color}15` : "#f3f4f6",
                            color: color || "#6b7280"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "text-2xl",
                            children: icon
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/cards.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/home/cards.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/One click/src/components/home/cards.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ease-out",
                style: {
                    backgroundColor: color || "#3b82f6"
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/home/cards.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/One click/src/components/home/cards.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Cards;
}),
"[project]/Downloads/One click/src/components/policies/PoliciesComponents.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// src/components/policies/PoliciesComponents.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$row$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/row/index.js [ssr] (ecmascript) <export default as Row>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/col/index.js [ssr] (ecmascript) <export default as Col>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/skeleton/index.js [ssr] (ecmascript) <export default as Skeleton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/message/index.js [ssr] (ecmascript) <export default as message>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/UserOutlined.js [ssr] (ecmascript) <export default as UserOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/CheckCircleOutlined.js [ssr] (ecmascript) <export default as CheckCircleOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloseCircleOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/CloseCircleOutlined.js [ssr] (ecmascript) <export default as CloseCircleOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ReloadOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ReloadOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/ReloadOutlined.js [ssr] (ecmascript) <export default as ReloadOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$home$2f$cards$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/home/cards.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/config.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"use client";
;
;
;
;
;
;
;
const PoliciesComponents = ()=>{
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [policies, setPolicies] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const fetchDashboardData = async ()=>{
        try {
            setLoading(true);
            const res = await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__["default"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ADMIN_GET_USER_POLICIES}`, {
                params: {
                    is_verified: -1
                }
            });
            if (res.data?.status === "success") {
                const { data = [], pending_count = 0, approved_count = 0, rejected_count = 0, total_records = 0 } = res.data;
                setPolicies(data);
                setStats([
                    {
                        title: "Pending Policies",
                        value: pending_count,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__["UserOutlined"], {
                            style: {
                                fontSize: 24
                            }
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/PoliciesComponents.tsx",
                            lineNumber: 70,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        color: "#f39c12"
                    },
                    {
                        title: "Approved Policies",
                        value: approved_count,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleOutlined$3e$__["CheckCircleOutlined"], {
                            style: {
                                fontSize: 24
                            }
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/PoliciesComponents.tsx",
                            lineNumber: 76,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        color: "#00de81"
                    },
                    {
                        title: "Rejected Policies",
                        value: rejected_count,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloseCircleOutlined$3e$__["CloseCircleOutlined"], {
                            style: {
                                fontSize: 24
                            }
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/PoliciesComponents.tsx",
                            lineNumber: 82,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        color: "#ff4d4f"
                    },
                    {
                        title: "Total Policies",
                        value: total_records,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ReloadOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ReloadOutlined$3e$__["ReloadOutlined"], {
                            style: {
                                fontSize: 24
                            }
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/components/policies/PoliciesComponents.tsx",
                            lineNumber: 88,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        color: "#00de81"
                    }
                ]);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].warning("Failed to fetch dashboard data.");
            }
        } catch (err) {
            console.error("Error fetching dashboard data:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].error(err?.response?.data?.message || "Unable to load dashboard data.");
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        fetchDashboardData();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$row$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
            gutter: [
                16,
                24
            ],
            children: loading ? Array.from({
                length: 4
            }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                    xs: 24,
                    sm: 12,
                    md: 6,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                        active: true,
                        paragraph: {
                            rows: 3
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/policies/PoliciesComponents.tsx",
                        lineNumber: 115,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, index, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/PoliciesComponents.tsx",
                    lineNumber: 114,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0))) : stats.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                    xs: 24,
                    sm: 12,
                    md: 6,
                    lg: 6,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$home$2f$cards$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        title: item.title,
                        value: item.value,
                        icon: item.icon,
                        color: item.color
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/policies/PoliciesComponents.tsx",
                        lineNumber: 120,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, index, false, {
                    fileName: "[project]/Downloads/One click/src/components/policies/PoliciesComponents.tsx",
                    lineNumber: 119,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/Downloads/One click/src/components/policies/PoliciesComponents.tsx",
            lineNumber: 111,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/One click/src/components/policies/PoliciesComponents.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = PoliciesComponents;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Downloads/One click/src/components/home/data.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/drawer/index.js [ssr] (ecmascript) <export default as Drawer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/config.ts [ssr] (ecmascript)");
"use client";
;
;
;
;
;
const DEFAULT_READ_DATA = {
    status: false,
    sheet_id: "NA",
    total_records: 0,
    inserted_records: 0,
    duplicate_count: 0,
    duplicate_policy_numbers: []
};
const DEFAULT_SYNC_DATA = {
    status: false,
    insurers: {
        inserted: [],
        existing: [],
        failed: []
    },
    users: {
        inserted: [],
        existing: [],
        skipped: [],
        failed: []
    },
    policies: {
        inserted: [],
        skipped: [],
        failed: []
    }
};
const AdminCsvSync = ()=>{
    const [readResult, setReadResult] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(DEFAULT_READ_DATA);
    const [syncResult, setSyncResult] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(DEFAULT_SYNC_DATA);
    const [loadingRead, setLoadingRead] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [loadingSync, setLoadingSync] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [showDrawer, setShowDrawer] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const readCsv = async ()=>{
        setLoadingRead(true);
        setError(null);
        try {
            const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].GET_read_csv}`);
            const data = await res.json();
            setReadResult(data);
        } catch  {
            setError("Failed to read CSV");
        } finally{
            setLoadingRead(false);
        }
    };
    const syncCsv = async ()=>{
        setLoadingSync(true);
        setError(null);
        try {
            const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].GET_sync_csv}`);
            const data = await res.json();
            setSyncResult(data);
        } catch  {
            setError("Failed to sync CSV");
        } finally{
            setLoadingSync(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "max-w-5xl mx-auto p-6  bg-gradient-to-b from-gray-100 to-gray-50 rounded-xl shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: readCsv,
                        disabled: loadingRead,
                        className: "px-6 py-2 bg-blue-600 !text-[#fff] font-semibold rounded-lg shadow hover:bg-blue-700  transition",
                        children: loadingRead ? "Reading..." : "Read CSV"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: syncCsv,
                        disabled: loadingSync,
                        className: "px-6 py-2 bg-green-600 !text-white font-semibold rounded-lg shadow hover:bg-green-700 disabled:opacity-50 transition",
                        children: loadingSync ? "Syncing..." : "Sync CSV"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "text-red-600 font-medium mb-4",
                children: error
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                lineNumber: 131,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "border-l-8 border-blue-500 p-4 rounded mb-6 bg-blue-50 shadow-sm hover:shadow-md transition",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold mb-3 text-blue-800",
                        children: "Read CSV Result"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "Sheet ID: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("b", {
                                children: readResult.sheet_id
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                                lineNumber: 139,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "Total Records: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("b", {
                                children: readResult.total_records
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                                lineNumber: 142,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "Inserted Records: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("b", {
                                children: readResult.inserted_records
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                                lineNumber: 145,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "Duplicate Count: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("b", {
                                children: readResult.duplicate_count
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                                lineNumber: 148,
                                columnNumber: 28
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    readResult.duplicate_count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowDrawer(true),
                        className: "mt-3 px-4 py-1 bg-yellow-500 !text-white rounded-lg shadow hover:bg-yellow-600 transition",
                        children: "View Duplicate Policies"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "border-l-8 border-green-500 p-4 rounded bg-green-50 shadow-sm hover:shadow-md transition",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold mb-3 text-green-800",
                        children: "Sync CSV Result"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ResultBlock, {
                                title: "Insurers",
                                data: syncResult.insurers,
                                color: "green"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ResultBlock, {
                                title: "Users",
                                data: syncResult.users,
                                color: "teal"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ResultBlock, {
                                title: "Policies",
                                data: syncResult.policies,
                                color: "purple"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__["Drawer"], {
                title: "Duplicate Policy Numbers",
                placement: "right",
                width: 420,
                open: showDrawer,
                onClose: ()=>setShowDrawer(false),
                maskStyle: {
                    backdropFilter: "blur(10px)",
                    backgroundColor: "rgba(0,0,0,0.25)"
                },
                children: readResult.duplicate_policy_numbers.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ol", {
                    className: "list-decimal list-inside space-y-2 text-red-600 font-medium",
                    children: readResult.duplicate_policy_numbers.map((policy)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                            children: policy
                        }, policy, false, {
                            fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                            lineNumber: 195,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                    lineNumber: 193,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "text-gray-500",
                    children: "No duplicate policies"
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                    lineNumber: 199,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ResultBlock = ({ title, data, color })=>{
    const borderColor = color === "green" ? "border-green-400" : color === "teal" ? "border-teal-400" : "border-purple-400";
    const bgColor = color === "green" ? "bg-green-50" : color === "teal" ? "bg-teal-50" : "bg-purple-50";
    const textColor = color === "green" ? "text-green-800" : color === "teal" ? "text-teal-800" : "text-purple-800";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: `border-l-4 ${borderColor} p-3 rounded ${bgColor} shadow-sm hover:shadow-md transition`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                className: `font-semibold mb-2 ${textColor}`,
                children: title
            }, void 0, false, {
                fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                children: [
                    "Inserted: ",
                    data.inserted.length || 0
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                children: [
                    "Existing: ",
                    data.existing?.length || 0
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                children: [
                    "Skipped: ",
                    data.skipped?.length || 0
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                children: [
                    "Failed: ",
                    data.failed.length || 0
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/One click/src/components/home/data.tsx",
        lineNumber: 229,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AdminCsvSync;
}),
"[project]/Downloads/One click/src/pages/dashboard/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/antd/es/skeleton/index.js [ssr] (ecmascript) <export default as Skeleton>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/config.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FileProtectOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileProtectOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/FileProtectOutlined.js [ssr] (ecmascript) <export default as FileProtectOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/UserOutlined.js [ssr] (ecmascript) <export default as UserOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ReloadOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ReloadOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/ReloadOutlined.js [ssr] (ecmascript) <export default as ReloadOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CalendarOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarOutlined$3e$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/@ant-design/icons/es/icons/CalendarOutlined.js [ssr] (ecmascript) <export default as CalendarOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$home$2f$renewalList$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/home/renewalList.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$home$2f$pieChart$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/home/pieChart.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$home$2f$DrillDownBarChart$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/home/DrillDownBarChart.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$home$2f$insuranceTypeHome$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/home/insuranceTypeHome.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$PoliciesComponents$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/policies/PoliciesComponents.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$auth$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/api/auth.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$home$2f$data$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/One click/src/components/home/data.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$home$2f$insuranceTypeHome$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$PoliciesComponents$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$home$2f$insuranceTypeHome$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$PoliciesComponents$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const Dashboard = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [renewals, setRenewals] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const sampleData2 = [
        {
            name: "Life Insurance",
            value: 400
        },
        {
            name: "Health Insurance",
            value: 300
        },
        {
            name: "Car Insurance",
            value: 300
        },
        {
            name: "Home Insurance",
            value: 200
        }
    ];
    const sampleAreaData = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        setMounted(true);
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$auth$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["authApi"].isAuthenticated()) {
            router.replace("/login");
            return;
        }
        const fetchDashboardData = async ()=>{
            try {
                const res = await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__["default"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$api$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].DASHBOARD_CARDS_DATA}`);
                if (res.data.status === "success") {
                    const d = res.data.data;
                    setStats([
                        {
                            title: "Pending Policies",
                            value: d.total_users,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__["UserOutlined"], {}, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
                                lineNumber: 83,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            color: "#1f2add"
                        },
                        {
                            title: "Total Insurances",
                            value: d.total_insurances,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FileProtectOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileProtectOutlined$3e$__["FileProtectOutlined"], {}, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
                                lineNumber: 89,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            color: "#00de81"
                        },
                        {
                            title: "Expiring Soon",
                            value: d.expiring_insurances,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ReloadOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ReloadOutlined$3e$__["ReloadOutlined"], {}, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
                                lineNumber: 95,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            color: "#faad14"
                        },
                        {
                            title: "Renewal Soon",
                            value: 14,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CalendarOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarOutlined$3e$__["CalendarOutlined"], {}, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
                                lineNumber: 101,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            color: "#ff4d4f"
                        }
                    ]);
                }
            } catch (err) {
                console.error("Failed to load dashboard summary", err);
            } finally{
                setLoading(false);
            }
        };
        fetchDashboardData();
    }, [
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$policies$2f$PoliciesComponents$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 xl:grid-cols-2 gap-4 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "bg-white shadow-md rounded-lg p-6 px-4 min-h-[400px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$home$2f$DrillDownBarChart$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "bg-white shadow-md rounded-lg p-6 min-h-[400px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Notifications by Channel"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                                    active: true,
                                    paragraph: {
                                        rows: 6
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$home$2f$pieChart$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    data: sampleData2,
                                    height: 350
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "bg-white shadow-md rounded-lg p-6 px-4 min-h-[400px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Excel Data"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$home$2f$data$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
                                    lineNumber: 151,
                                    columnNumber: 24
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$home$2f$data$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
                                    lineNumber: 151,
                                    columnNumber: 43
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "bg-white shadow-md rounded-lg p-6 px-4 min-h-[400px]",
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                                active: true,
                                paragraph: {
                                    rows: 8
                                }
                            }, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$home$2f$insuranceTypeHome$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
                                lineNumber: 159,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                        active: true,
                        paragraph: {
                            rows: 6
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
                        lineNumber: 167,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$One__click$2f$src$2f$components$2f$home$2f$renewalList$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        data: renewals
                    }, void 0, false, {
                        fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
                        lineNumber: 169,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/One click/src/pages/dashboard/index.tsx",
            lineNumber: 118,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = Dashboard;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9d2e2a98._.js.map