import React from "react";
import { Table, Button, Tag } from "antd";
import { Company, InsuranceType } from "@/api/types";
import { EditOutlined } from "@ant-design/icons";
import { ColumnType } from "antd/es/table";

interface InsuranceTableProps {
  data: InsuranceType[];
  onEdit: (record: InsuranceType) => void;
  loading: boolean;
}

const InsuranceTable: React.FC<InsuranceTableProps> = ({
  data,
  onEdit,
  loading,
}) => {
  const columns: ColumnType<InsuranceType>[] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      align: "left",
    },
    {
      title: "Insurance Type",
      dataIndex: "name",
      key: "name",
      align: "left",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "left",
      render: (status: string) => {
        const isActive = status.toLowerCase() === "active";
        return (
          <Tag color={isActive ? "green" : "red"}>
            {isActive ? "Active" : "Inactive"}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      align: "right",
      render: (_: unknown, record: InsuranceType) => (
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
      rowKey={(record) => `${record.id}-${record.status}`}
      loading={loading}
      pagination={{ pageSize: 8 }}
    />
  );
};

export default InsuranceTable;
