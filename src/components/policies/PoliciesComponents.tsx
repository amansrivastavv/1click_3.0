// src/components/policies/PoliciesComponents.tsx
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Skeleton, message } from "antd";
import {
  UserOutlined,
  CheckCircleOutlined,
  FileProtectOutlined,
  CloseCircleOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import SummaryCard from "@/components/home/cards";
import { Policy } from "@/api/types";
import { API_CONFIG, API_ENDPOINTS } from "@/api/config";

interface GetPoliciesResponse {
  status: "success" | "error";
  data: Policy[];
  count: number;
  pending_count: number;
  approved_count: number;
  rejected_count: number; // consistent naming
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

const PoliciesComponents: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [stats, setStats] = useState<StatCard[]>([]);
  const [policies, setPolicies] = useState<Policy[]>([]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      const res = await axios.get<GetPoliciesResponse>(
        `${API_CONFIG.BASE_URL}${API_ENDPOINTS.ADMIN_GET_USER_POLICIES}`,
        {
          params: {
            is_verified: -1, // All policies (no filter) — backend param sahi naam se
          },
        }
      );

      if (res.data?.status === "success") {
        const {
          data = [],
          pending_count = 0,
          approved_count = 0,
          rejected_count = 0,
          total_records = 0,
        } = res.data;

        setPolicies(data);

        setStats([
          {
            title: "Pending Policies",
            value: pending_count,
            icon: <UserOutlined style={{ fontSize: 24, color: "#fff" }} />,
            color: "#f39c12", // Orange for pending
          },
          {
            title: "Approved Policies",
            value: approved_count,
            icon: (
              <CheckCircleOutlined style={{ fontSize: 24, color: "#fff" }} />
            ),
            color: "#00de81", // Green for approved
          },
          {
            title: "Rejected Policies",
            value: rejected_count,
            icon: (
              <CloseCircleOutlined style={{ fontSize: 24, color: "#fff" }} />
            ),
            color: "#ff4d4f", // Red for rejected
          },
          {
            title: "Total Policies",
            value: total_records,
            icon: (
              <ReloadOutlined style={{ fontSize: 24, color: "#fff" }} />
            ),
            color: "#00de81",
          },
        ]);
      } else {
        message.warning("Failed to fetch dashboard data.");
      }
    } catch (err: any) {
      console.error("Error fetching dashboard data:", err);
      message.error(
        err?.response?.data?.message || "Unable to load dashboard data."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="space-y-8 bg-[#edf1f5] p-6">
      <Row gutter={[16, 24]}>
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Skeleton active paragraph={{ rows: 3 }} />
              </Col>
            ))
          : stats.map((item, index) => (
              <Col xs={24} sm={12} md={6} lg={6} key={index}>
                <SummaryCard
                  title={item.title}
                  value={item.value}
                  icon={item.icon}
                  color={item.color}
                />
              </Col>
            ))}
      </Row>

     
    </div>
  );
};

export default PoliciesComponents;
