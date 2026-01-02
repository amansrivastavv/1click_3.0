"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  message,
  Tag,
  Modal,
  Form,
  Input,
  Upload,
  Switch,
} from "antd";
import { EditOutlined, UploadOutlined } from "@ant-design/icons";
import { ColumnType } from "antd/es/table";
import toast from "react-hot-toast";
import type { UploadFile } from "antd/es/upload/interface";
import { Company } from "@/api/types";
import { companiesApi } from "@/api/companies";
import { API_CONFIG } from "@/api/config";

const CompaniesPage: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCompany, setEditingCompany] = useState<Company | null>(null);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [saving, setSaving] = useState(false);

  // For image modal
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState<string | null>(null);
  const [selectedCompanyName, setSelectedCompanyName] = useState<string>("");

  // Track logo errors
  const [logoErrorMap, setLogoErrorMap] = useState<{ [id: string]: boolean }>(
    {}
  );

  const loadCompanies = async () => {
    setLoading(true);
    try {
      const response = await companiesApi.getComapines();
      const companiesData: Company[] = response?.data || [];
      setCompanies(companiesData);
    } catch (err) {
      console.error("Error fetching companies:", err);
      message.error("Failed to fetch companies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCompanies();
  }, []);

  useEffect(() => {
    if (editingCompany) {
      form.setFieldsValue({
        name: editingCompany.name,
        status: editingCompany.status === "Active",
      });
      if (editingCompany.image_url) {
        setFileList([
          {
            uid: "-1",
            name: "logo.png",
            status: "done",
            url: editingCompany.image_url,
          },
        ]);
      }
    } else {
      form.resetFields();
      form.setFieldsValue({ status: true });
      setFileList([]);
    }
  }, [editingCompany, form, modalOpen]);

  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      setSaving(true);

      const file = fileList[0]?.originFileObj as File;

      const company: Company = {
        id: editingCompany?.id || "-1",
        name: values.name,
        status: values.status ? "Active" : "Inactive",
        logo: file,
        image_url: editingCompany?.image_url || "",
      };

      const response = await toast.promise(
        companiesApi.uploadCompany(company, file),
        {
          loading: "Saving company...",
          success: "Company saved successfully!",
          error: "Failed to save company",
        }
      );

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
    } finally {
      setSaving(false);
    }
  };

  const handleLogoClick = (logo: string, name: string) => {
    setSelectedLogo(logo);
    setSelectedCompanyName(name);
    setIsImageModalOpen(true);
  };

  const handleUploadChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setFileList(fileList);
  };

  const handleLogoError = (id: string) => {
    setLogoErrorMap((prev) => ({ ...prev, [id]: true }));
  };

  const columns: ColumnType<Company>[] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "left",
    },
    {
      title: "Logo",
      dataIndex: "image_url",
      key: "logo",
      align: "left",
      render: (logo: string, record: Company) => {
        const isError = logoErrorMap[record.id];
        
        if (!logo || isError) return "No Logo";

        let fullUrl = logo;
        if (!logo.startsWith("http")) {
            const baseUrl = typeof API_CONFIG.BASE_URL === 'string' 
                ? API_CONFIG.BASE_URL.replace(/\/api\/proxy$/, '') 
                : "";
            
            const domain = baseUrl.startsWith("http") ? baseUrl : "https://appapi.1clickpolicy.com";
            
            const cleanPath = logo.startsWith("/") ? logo : `/${logo}`;
            fullUrl = `${domain}${cleanPath}`;
        }

        return (
          <img
            src={fullUrl}
            alt="logo"
            width={50}
            style={{ cursor: "pointer" }}
            onClick={() => handleLogoClick(fullUrl, record.name)}
            onError={() => handleLogoError(record.id)}
          />
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "left",
      render: (status: string) => {
        const isActive = status.toLowerCase() === "active";
        return <Tag color={isActive ? "green" : "red"}>{status}</Tag>;
      },
    },
    {
      title: "Actions",
      key: "actions",
      align: "right",
      render: (_: unknown, record: Company) => (
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => {
            setEditingCompany(record);
            setModalOpen(true);
          }}
        >
          Edit
        </Button>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Companies</h1>
        <Button
          type="primary"
          onClick={() => {
            setEditingCompany(null);
            setModalOpen(true);
          }}
        >
          Add Company
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={companies}
        loading={loading}
        rowKey="id"
      />

      {/* Modal for Add/Edit */}
      <Modal
        title={editingCompany ? "Edit Company" : "Add New Company"}
        open={modalOpen}
        onCancel={() => {
          setModalOpen(false);
          setEditingCompany(null);
          form.resetFields();
          setFileList([]);
        }}
        onOk={handleSave}
        confirmLoading={saving}
        centered
        destroyOnClose
        okText={editingCompany ? "Update" : "Submit"}
      >
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Company Name"
            name="name"
            rules={[{ required: true, message: "Please enter company name" }]}
          >
            <Input placeholder="Enter company name" />
          </Form.Item>

          <Form.Item label="Logo">
            <Upload
              listType="picture"
              fileList={fileList}
              beforeUpload={() => false}
              onChange={handleUploadChange}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Select Logo</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Status" name="status" valuePropName="checked">
            <Switch checkedChildren="Active" unCheckedChildren="Inactive" />
          </Form.Item>
        </Form>
      </Modal>

      {/* Modal to view full logo */}
      <Modal
        open={isImageModalOpen}
        footer={null}
        onCancel={() => setIsImageModalOpen(false)}
        centered
      >
        <h2 style={{ textAlign: "center", marginBottom: 16 }}>
          {selectedCompanyName}
        </h2>
        <img
          src={selectedLogo || ""}
          alt="Company Logo"
          style={{ width: "100%", maxHeight: "400px", objectFit: "contain" }}
        />
      </Modal>
    </div>
  );
};

export default CompaniesPage;
