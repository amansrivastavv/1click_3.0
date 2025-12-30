import React from "react";
import { Table, Button } from "antd";
import Image from "next/image";
import { Company } from "@/api/types";

interface CompanyTableProps {
  companies: Company[];
  onEdit: (company: Company) => void;
  loading: boolean;
}

const CompanyTable: React.FC<CompanyTableProps> = ({
  companies,
  onEdit,
  loading,
}) => {
  const columns = [
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
      render: (text: string) =>
        text ? (
          <Image
            src={text}
            alt="logo"
            width={50} // specify width
            height={50} // specify height (Next.js maintains aspect ratio if you use 'style={{ objectFit: "contain" }}')
            style={{ objectFit: "contain" }} // optional, maintains aspect ratio
          />
        ) : (
          "-"
        ),
    },

    {
      title: "Company Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <span
          style={{
            color: status === "Inactive" ? "red" : "green",
            fontWeight: 500,
          }}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: unknown, record: Company) => (
        <Button type="link" onClick={() => onEdit(record)}>
          Edit
        </Button>
      ),
    },
  ];

  return (
    <Table
      dataSource={companies}
      columns={columns}
      rowKey="id"
      loading={loading}
      pagination={{ pageSize: 10 }}
    />
  );
};

export default CompanyTable;
