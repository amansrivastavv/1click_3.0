"use client";

import React, { useEffect, useState } from "react";
import { Card, Row, Col, Spin, message } from "antd";
import api from "@/utils/axios";
import { GetDashboardSummaryResponse, DashboardSummary } from "@/api/types";

const DashboardCards: React.FC = () => {
  const [data, setData] = useState<DashboardSummary | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const res = await api.get<GetDashboardSummaryResponse>(
        "/admin_dashboard_values.php"
      );

      if (res.data.status === "success" && res.data.data) {
        setData(res.data.data);
      } else {
        message.error(res.data?.message || "Failed to fetch dashboard data");
      }
    } catch (err) {
      console.error(err);
      message.error("Failed to fetch dashboard data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (loading) return <Spin tip="Loading..." />;

  return (
    <Row gutter={[16, 16]}>
      <Col span={6}>
        <Card title="Total Users" bordered={false}>
          {data?.total_users || 0}
        </Card>
      </Col>
      <Col span={6}>
        <Card title="Total Policies" bordered={false}>
          {data?.total_insurances || 0}
        </Card>
      </Col>
      <Col span={6}>
        <Card title="Expiring Policies" bordered={false}>
          {data?.expiring_insurances || 0}
        </Card>
      </Col>
      <Col span={6}>
        <Card title="Another Card" bordered={false}>
          0
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardCards;
