import React from "react";
import { Table, Button } from "antd";
import Image from "next/image";
import { Company } from "@/api/types";
import { API_CONFIG } from "@/api/config";

interface CompanyTableProps {
  companies: Company[];
  onEdit: (company: Company) => void;
  loading: boolean;
}

const LogoCell = ({ src }: { src: string }) => {
  const [error, setError] = React.useState(false);

  // Filter out obviously bad data
  if (!src || src === "null" || src.trim() === "") {
    return <span className="text-gray-400 text-xs text-center block">No Logo</span>;
  }

  if (error) {
    return <span className="text-gray-400 text-xs text-center block">No Logo</span>;
  }

  // Handle URL construction
  let imageUrl = src;
  if (src && !src.startsWith("http")) {
      let baseUrl = API_CONFIG.BASE_URL;
      if (baseUrl.endsWith('/api/proxy')) {
           baseUrl = baseUrl.replace('/api/proxy', ''); 
      } else if (baseUrl.endsWith('/')) {
           baseUrl = baseUrl.slice(0, -1);
      }
      
      const cleanPath = src.startsWith('/') ? src : `/${src}`;
      imageUrl = `${baseUrl}${cleanPath}`;
  }

  return (
    <img
      src={imageUrl}
      alt="logo"
      style={{ 
          width: '50px', 
          height: '50px', 
          objectFit: 'contain' 
      }}
      onError={() => setError(true)}
    />
  );
};

// Main Component
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
      render: (text: string) => <LogoCell src={text} />,
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
