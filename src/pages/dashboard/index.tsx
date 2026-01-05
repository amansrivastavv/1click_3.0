"use client";
import React, { useState, useEffect } from "react";
import { Row, Col, Skeleton } from "antd";
import axios from "axios";
import { API_CONFIG, API_ENDPOINTS } from "@/api/config";
import {
  FileProtectOutlined,
  UserOutlined,
  ReloadOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import SummaryCard from "../../components/home/cards";
import RenewalList from "../../components/home/renewalList";
import BiaxialBarChart from "../../components/home/barCharts";
import PieChartWithCustomizedLabel, {
  PieDatum,
} from "../../components/home/pieChart";
import SimpleAreaChart, {
  SimpleAreaDatum,
} from "../../components/home/areaChart";
import PolicyLineChart from "../../components/home/PolicyLineChart";
import DrillDownBarChart from "../../components/home/DrillDownBarChart";
import InsuranceTypes from "../../components/home/insuranceTypeHome";
import PolicyComponents from "@/components/policies/PoliciesComponents";
import BiaxialBarChartWithApi from "@/components/home/barCharts";
// import BiaxialBarChartWithApi from "../../components/home/barCharts";
import { RenewalItem } from "@/components/home/renewalList";
import { useRouter } from "next/router";
import { authApi } from "@/api/auth";
import AdminCsvSync from "@/components/home/data";
interface DashboardSummary {
  total_users: string;
  total_insurances: string;
  expiring_insurances: string;
  renewal_insurance: string;
}

interface GetDashboardSummaryResponse {
  status: "success" | "error";
  data: DashboardSummary;
}

const Dashboard = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<unknown[]>([]);
  const [renewals, setRenewals] = useState<RenewalItem[]>([]);
  const [mounted, setMounted] = useState(false);

  const sampleData2: PieDatum[] = [
    { name: "Life Insurance", value: 400 },
    { name: "Health Insurance", value: 300 },
    { name: "Car Insurance", value: 300 },
    { name: "Home Insurance", value: 200 },
  ];

  const sampleAreaData: SimpleAreaDatum[] = [
    { name: "Page A", uv: 4000, pv: 2400 },
    { name: "Page B", uv: 3000, pv: 1398 },
    { name: "Page C", uv: 2000, pv: 9800 },
    { name: "Page D", uv: 2780, pv: 3908 },
  ];

  useEffect(() => {
    setMounted(true);

    if (!authApi.isAuthenticated()) {
      router.replace("/login");
      return;
    }
    const fetchDashboardData = async () => {
      try {
        const res = await axios.get<GetDashboardSummaryResponse>(
          `${API_CONFIG.BASE_URL}${API_ENDPOINTS.DASHBOARD_CARDS_DATA}`
        );

        if (res.data.status === "success") {
          const d = res.data.data;
          setStats([
            {
              title: "Pending Policies",
              value: d.total_users,
              icon: <UserOutlined />,
              color: "#1f2add",
            },
            {
              title: "Total Insurances",
              value: d.total_insurances,
              icon: <FileProtectOutlined />,
              color: "#00de81",
            },
            {
              title: "Expiring Soon",
              value: d.expiring_insurances,
              icon: <ReloadOutlined />,
              color: "#faad14",
            },
            {
              title: "Renewal Soon",
              value: 14,
              icon: <CalendarOutlined />,
              color: "#ff4d4f",
            },
          ]);
        }
      } catch (err) {
        console.error("Failed to load dashboard summary", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [router]);

  return (
    <>
      <div className="space-y-8">
        <PolicyComponents />
        {/* <BiaxialBarChartWithApi /> */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full">
          {/* <div className="bg-white shadow-md rounded-lg p-6 min-h-[400px]">
          <h1 className="text-lg font-semibold mb-4">Policy Added Per Month</h1>
          {loading ? (
            <Skeleton active paragraph={{ rows: 6 }} />
          ) : (
            <BiaxialBarChart width="100%" height={350} />
          )}
        </div> */}
          <div className="bg-white shadow-md rounded-lg p-6 px-4 min-h-[400px]">
            <DrillDownBarChart />
          </div>
          {/* <div className="bg-white shadow-md rounded-lg p-6 px-4 min-h-[400px]">
          <PolicyLineChart />
        </div> */}
          <div className="bg-white shadow-md rounded-lg p-6 min-h-[400px]">
            <h1 className="text-lg font-semibold mb-4">
              Notifications by Channel
            </h1>
            {loading ? (
              <Skeleton active paragraph={{ rows: 6 }} />
            ) : (
              <PieChartWithCustomizedLabel data={sampleData2} height={350} />
            )}
          </div>

          {/* Area Chart & Table */}

          <div className="bg-white shadow-md rounded-lg p-6 px-4 min-h-[400px]">
            <h1 className="text-lg font-semibold mb-4">Excel Data</h1>
            {loading ? <AdminCsvSync /> : <AdminCsvSync />}
          </div>

          {/* Insurance Table */}
          <div className="bg-white shadow-md rounded-lg p-6 px-4 min-h-[400px]">
            {loading ? (
              <Skeleton active paragraph={{ rows: 8 }} />
            ) : (
              <InsuranceTypes />
            )}
          </div>
        </div>

        {/* Renewal List */}
        <div>
          {loading ? (
            <Skeleton active paragraph={{ rows: 6 }} />
          ) : (
            <RenewalList data={renewals} />
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
