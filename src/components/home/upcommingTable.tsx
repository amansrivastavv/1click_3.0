import React from "react";
import { Table, Button, Tag } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { ColumnType } from "antd/es/table";
import { UpcomingExpiryPolicy } from "@/api/types";

interface UpcomingExpiryTableProps {
  data: UpcomingExpiryPolicy[];
  onEdit: (record: UpcomingExpiryPolicy) => void;
  loading: boolean;
}

const UpcomingExpiryTable: React.FC<UpcomingExpiryTableProps> = ({
  data,
  onEdit,
  loading,
}) => {
  const columns: ColumnType<UpcomingExpiryPolicy>[] = [
    {
      title: "User",
      dataIndex: "policy_holder_name",
      key: "user",
      align: "left",
    },
    {
      title: "Policy",
      dataIndex: "policy_number",
      key: "policy",
      align: "left",
    },
    {
      title: "Expiry",
      dataIndex: "end_date",
      key: "expiry",
      align: "left",
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Status",
      key: "status",
      align: "left",
      render: (_: unknown, record: UpcomingExpiryPolicy) => {
        const today = new Date();
        const expiryDate = new Date(record.end_date);

        if (expiryDate < today) return <Tag color="red">Expired</Tag>;
        if (
          (expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24) <=
          30
        )
          return <Tag color="orange">Expiring Soon</Tag>;
        return <Tag color="green">Active</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      align: "right",
      render: (_: unknown, record: UpcomingExpiryPolicy) => (
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => onEdit(record)}
        >
          Edit
        </Button>
      ),
    },
  ];

  return (
    <Table
      dataSource={data}
      columns={columns}
      rowKey={(record) => record.id}
      loading={loading}
      pagination={{ pageSize: 5 }}
      locale={{ emptyText: "No upcoming policies found" }}
    />
  );
};

export default UpcomingExpiryTable;
