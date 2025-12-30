// src/pages/policies.tsx
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Skeleton, message } from "antd";
import {
  UserOutlined,
  FileProtectOutlined,
  ReloadOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import SummaryCard from "../components/home/cards";
import PoliciesTypeHome from "@/components/policies/policiesTypeHome";
import { Policy } from "@/api/types";
import { API_CONFIG, API_ENDPOINTS } from "@/api/config";

interface GetPoliciesResponse {
  status: "success" | "error";
  data: Policy[];
  count: number;
  pending_count: number;
  approved_count: number;
  rejectedCount: number;
  total_records: number;
  total_pages?: number;
  current_page?: number;
}

interface StatCard {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

const Policies: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<StatCard[]>([]);
  const [policies, setPolicies] = useState<Policy[]>([]);

  const fetchDashboardData = async () => {
    try {
      const res = await axios.get<GetPoliciesResponse>(
        `${API_CONFIG.BASE_URL}${API_ENDPOINTS.ADMIN_GET_USER_POLICIES}`,
        {
          params: {
            is_verified: -1,
          },
        }
      );

      if (res.data?.status === "success") {
        setLoading(true);
        const {
          data,
          pending_count,
          approved_count,
          rejectedCount,
          count,
          total_records,
        } = res.data;
        setPolicies(data || []);
        setStats([
          {
            title: "Pending Policies",
            value: pending_count,
            icon: <UserOutlined />,
            color: "#1f2add",
          },
          {
            title: "Approved Policy",
            value: approved_count,
            icon: <FileProtectOutlined />,
            color: "#faad14",
          },
          {
            title: "Total Policies",
            value: total_records,
            icon: (
              <ReloadOutlined
                style={{
                  color: "#ffff",
                }}
              />
            ),
            color: "#00de81",
          },
          {
            title: "Rejected Count",
            value: rejectedCount,
            icon: <CalendarOutlined />,
            color: "#ff4d4f",
          },
        ]);
      } else {
        message.warning("Failed to fetch policies.");
      }
    } catch (err) {
      console.error("Error loading data:", err);
      message.error("Network error: Unable to fetch data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <Row gutter={[16, 16]} justify="center">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <Col key={index} xs={24} sm={12} lg={6}>
                <div
                  style={{
                    padding: "20px",
                    background: "#fff",
                    borderRadius: "8px",
                  }}
                >
                  <Skeleton active />
                </div>
              </Col>
            ))
          : stats.map((item, index) => (
              <Col key={index} xs={24} sm={12} lg={6}>
                <SummaryCard
                  title={item.title}
                  value={item.value}
                  icon={item.icon}
                  color={item.color}
                />
              </Col>
            ))}
      </Row>
      <div className="mt-6">
        <PoliciesTypeHome
          policies={policies}
          showFilter={true}
          onDataChange={fetchDashboardData}
        />
      </div>
    </div>
  );
};

export default Policies;
