// src/components/policies/policiesTypeHome.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Table, Space, Tag, Button, Modal, Form, Tooltip, Dropdown } from "antd";
import { EditOutlined, EyeOutlined, MoreOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";
import toast from "react-hot-toast";
import FilterDropdown from "@/components/home/FilterDropdown";
import { API_CONFIG, API_ENDPOINTS } from "@/api/config";
import { apiClient } from "@/api/client";
import { storage } from "@/api/storage";
import dayjs from "dayjs";

// forms
import PolicyEditForm from "./form/PolicyEditFormCar";
import PolicyEditFormBike from "./form/PolicyEditFormBike";
import PolicyEditFormHealth from "./form/PolicyEditFormHealth";
import PolicyEditFormLife from "./form/PolicyEditFormLife";
import PolicyEditFormTravel from "./form/PolicyEditFormTravel";
import PolicyEditFormOther from "./form/PolicyEditFormOther";

interface Policy {
  id: string;
  user_id: string;
  client_name: string;
  policy_no: string;
  insurance_category: string;
  insurer_name: string;
  policy_start_date: string;
  policy_end_date: string;
  sum_insured: string;
  sum_currency: string;
  gross_premium: string;
  vehicle_number: string;
  fuel_type: string | null;
  next_payment_date: string | null;
  policy_status: string;
  is_verified: string;
  created_at: string;
  updated_at: string;
  image_url: string;
  policy_pdf?: string;
  file_url?: string;
  insurer_id?: string;
}

interface Props {
  policies: Policy[];
  showFilter?: boolean;
  onDataChange?: () => void;
}

const PoliciesTypeHome: React.FC<Props> = ({
  policies: initialPolicies,
  showFilter = false,
  onDataChange,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [editingPolicy, setEditingPolicy] = useState<Policy | null>(null);
  const [policies, setPolicies] = useState<Policy[]>(initialPolicies);
  const [filterStatus, setFilterStatus] = useState("-1");

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [totalRecords, setTotalRecords] = useState(0);

  /* ================= FETCH ================= */
  const fetchFilteredPolicies = async (
    status: string,
    page = 1,
    search = ""
  ) => {
    try {
      setLoading(true);

      const params: any = { page, limit: pageSize };
      if (status !== "-1") params.is_verified = status;
      if (search) params.search = search;

      const res = await axios.get(
        `${API_CONFIG.BASE_URL}${API_ENDPOINTS.ADMIN_GET_USER_POLICIES}`,
        { params }
      );

      setPolicies(res.data?.data || []);
      setTotalRecords(res.data?.total_records || 0);
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Fetch failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilteredPolicies(filterStatus, currentPage);
  }, [filterStatus, currentPage]);

  /* ================= EDIT ================= */
  const handleEdit = (record: Policy) => {
    setEditingPolicy(record);

    let fileList: { uid: string; name: string; status: string; url: string }[] =
      [];

    const rawUrl = record.file_url || record.policy_pdf || record.image_url;

    if (rawUrl && rawUrl !== "null" && rawUrl.trim() !== "") {
      let finalUrl = rawUrl;

      if (!rawUrl.startsWith("http")) {
        finalUrl = rawUrl;
      }

      const fileName = rawUrl.split("/").pop() || "Document.pdf";

      fileList = [
        {
          uid: "-1",
          name: fileName,
          status: "done",
          url: finalUrl,
        },
      ];
    }

    form.setFieldsValue({
      ...record,
      policy_pdf: fileList as any,
      policy_start_date: record.policy_start_date
        ? dayjs(record.policy_start_date)
        : null,
      policy_end_date: record.policy_end_date
        ? dayjs(record.policy_end_date)
        : null,
    });
  };

  /* ================= UPDATE ================= */
  const handleUpdate = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();

      const formData = new FormData();

      // Append ID (Send both 'policy_id' and 'id' to be safe for backend compatibility)
      if (editingPolicy?.id) {
        formData.append("policy_id", editingPolicy.id);
        formData.append("id", editingPolicy.id);
      }

      // Append User ID (Critical: Found in working Postman payload)
      if (editingPolicy?.user_id) {
        formData.append("user_id", editingPolicy.user_id);
      }

      // Handle dates specifically
      if (values.policy_start_date) {
        formData.append(
          "policy_start_date",
          values.policy_start_date.format("YYYY-MM-DD")
        );
      }
      if (values.policy_end_date) {
        formData.append(
          "policy_end_date",
          values.policy_end_date.format("YYYY-MM-DD")
        );
      }

      // Handle File Upload
      if (values.policy_pdf && values.policy_pdf.length > 0) {
        const file = values.policy_pdf[0].originFileObj;
        if (file) {
          formData.append("policy_pdf", file);
          formData.append("file", file);
        }
      }

      // Append other fields
      const { policy_pdf, policy_start_date, policy_end_date, ...otherValues } =
        values;

      Object.keys(otherValues).forEach((key) => {
        const val = otherValues[key];

        if (val !== undefined && val !== null && val !== "null") {
          const cleanVal = typeof val === "string" ? val.trim() : String(val);
          if (cleanVal.length > 0) {
            formData.append(key, cleanVal);
          }
        }
      });

      console.log("Sending Update Payload (FormData with customAuthorization)");

      // form-data with customAuthorization header
      const res = await apiClient.upload(
        API_ENDPOINTS.ADMIN_UPDATE_POLICY,
        formData
      );

      if (res.status === "error") {
        throw new Error(res.message);
      }

      toast.success("Policy updated successfully");
      setEditingPolicy(null);
      onDataChange?.();
      fetchFilteredPolicies(filterStatus, currentPage);
    } catch (err: any) {
      console.error(err);
      toast.error(err?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  /* ================= VERIFY ================= */
  const toggleVerification = async (record: Policy, status: "0" | "1") => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("policy_id", record.id);
      formData.append("id", record.id); 
      formData.append("user_id", record.user_id);
      
  
      formData.append("ids[]", record.id);

      formData.append("is_verified", status); 
      
    
      
      if (status === "1") {
          formData.append("policy_status", "Active");
      } else {
          formData.append("policy_status", "Pending");
      }

      console.log("Sending toggleVerification:", {
        id: record.id,
        is_verified: status,
        policy_status: formData.get("policy_status")
      });

      const res = await apiClient.upload(API_ENDPOINTS.ADMIN_UPDATE_POLICY, formData);

      if (res.status === "error") {
        if (res.message?.includes("Insurer not found")) {
            throw new Error(`Invalid Insurer Name: "${record.insurer_name}". Please Click Edit -> Re-select Insurer -> Save.`);
        }
        throw new Error(res.message);
      }

      toast.success(status === "1" ? "Approved" : "Rejected");
      
      setPolicies((prev) =>
        prev.map((p) => (p.id === record.id ? { ...p, is_verified: status } : p))
      );

      // Delay re-fetch to allow server consistency
      setTimeout(() => {
        fetchFilteredPolicies(filterStatus, currentPage);
      }, 1500);
    } catch (err: any) {
      console.error(err);
      toast.error(err?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  /* ================= TABLE ================= */
  const columns: ColumnsType<Policy> = [
    {
      title: "Client",
      dataIndex: "client_name",
      ellipsis: true,
      responsive: ["md"] as any,
    },
    {
      title: "Policy No",
      dataIndex: "policy_no",
      ellipsis: true,
      render: (text) => <span className="text-xs sm:text-sm">{text}</span>,
    },
    {
      title: "Vehicle",
      dataIndex: "vehicle_number",
      responsive: ["lg"] as any,
    },
    {
      title: "Sum Insured",
      responsive: ["xl"] as any,
      render: (_, r) =>
        `${r.sum_currency} ${Number(r.sum_insured).toLocaleString("en-IN")}`,
    },
    {
      title: "Premium",
      render: (_, r) => (
        <span className="text-xs sm:text-sm whitespace-nowrap">
          {r.sum_currency} {Number(r.gross_premium).toLocaleString("en-IN")}
        </span>
      ),
    },
    {
      title: "Category",
      dataIndex: "insurance_category",
      ellipsis: true,
      responsive: ["lg"] as any,
      render: (text) => <span className="text-xs sm:text-sm">{text}</span>,
    },
    {
      title: "Start",
      dataIndex: "policy_start_date",
      responsive: ["xl"] as any,
      render: (text) => <span className="text-xs">{text}</span>,
    },
    {
      title: "End",
      dataIndex: "policy_end_date",
      responsive: ["xl"] as any,
      render: (text) => <span className="text-xs">{text}</span>,
    },
    {
      title: "Status",
      dataIndex: "is_verified",
      render: (v, r) => {
        // Fallback: If is_verified is not saving (backend issue), check policy_status
        const isApproved = v === "1" || r.policy_status?.toLowerCase() === "active";
        
        if (isApproved) {
            return <Tag color="green" className="text-xs">Approved</Tag>;
        }
        
        return v === "0" ? (
          <Tag color="red" className="text-xs">Rejected</Tag>
        ) : (
          <Tag color="orange" className="text-xs">Pending</Tag>
        );
      },

    },
    {
      title: "Action",
      fixed: "right" as any,
      width: 80,
      render: (_, r) => {
        const items = [
            {
                key: 'view',
                label: 'View Document',
                icon: <EyeOutlined />,
                onClick: () => {
                    const fileUrl = r.file_url || r.policy_pdf || r.image_url;

                    if (fileUrl && fileUrl !== "null" && fileUrl.trim() !== "") {
                        if (fileUrl.startsWith("http")) {
                            window.open(fileUrl, "_blank");
                            return;
                        }

                        let baseUrl = API_CONFIG.BASE_URL;
                        if (baseUrl.endsWith("/")) {
                            baseUrl = baseUrl.slice(0, -1);
                        }

                        const cleanPath = fileUrl.startsWith("/")
                            ? fileUrl.substring(1)
                            : fileUrl;
                        const finalUrl = `${baseUrl}/${cleanPath}`;

                        console.log("Opening document:", finalUrl);
                        window.open(finalUrl, "_blank");
                    } else {
                        toast.error("No document attached");
                    }
                }
            },
            {
                key: 'edit',
                label: 'Edit Policy',
                icon: <EditOutlined />,
                onClick: () => handleEdit(r)
            }
        ];

        return (
            <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
                <Button 
                    type="text" 
                    className="flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full w-8 h-8"
                >
                    <MoreOutlined style={{ fontSize: '18px' }} />
                </Button>
            </Dropdown>
        );
      },
    },
    {
      title: "Verify",
      fixed: "right" as any,
      width: 100,
      render: (_, r) => (
        <Space direction="vertical" size="small" className="w-full">
          {r.is_verified !== "1" && (
            <Button
              size="small"
              style={{ background: "#00de81", color: "#fff" }}
              onClick={() => toggleVerification(r, "1")}
              className="w-full text-xs"
            >
              Approve
            </Button>
          )}
          {r.is_verified !== "0" && (
            <Button
              size="small"
              danger
              onClick={() => toggleVerification(r, "0")}
              className="w-full text-xs"
            >
              Reject
            </Button>
          )}
        </Space>
      ),
    },
  ];

  return (
    <>
      {showFilter && <FilterDropdown onFilterChange={setFilterStatus} />}

      <div className="overflow-x-auto mx-auto sm:mx-0">
        <Table
          rowKey="id"
          loading={loading}
          columns={columns}
          dataSource={policies}
          // scroll={{ x: "max-content" }}
          pagination={{
            current: currentPage,
            pageSize,
            total: totalRecords,
            onChange: setCurrentPage,
            showSizeChanger: false,
            showTotal: (total, range) => (
              <span className="text-xs sm:text-sm">
                {range[0]}-{range[1]} of {total} items
              </span>
            ),
            className: "px-4 sm:px-0",
          }}
          className="policies-table"
        />
      </div>

      <Modal
        open={!!editingPolicy}
        title={null}
        onCancel={() => setEditingPolicy(null)}
        footer={null}
        centered
        width={1000}
        style={{ top: 20 }}
        styles={{
          body: {
            height: "80vh",
            maxHeight: "800px",
            overflow: "hidden",
            padding: 0,
            borderRadius: "0.75rem", // rounded-xl
            display: "flex",
            flexDirection: "column",
          },
          content: {
            padding: 0,
            borderRadius: "0.75rem",
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            background: "transparent",
          },
          wrapper: {
             backdropFilter: "blur(4px)",
          }
        }}
        destroyOnClose
      >
        <div className="max-h-[calc(100vh-100px)] overflow-y-auto">
          {editingPolicy?.insurance_category?.toLowerCase() === "bike" ? (
            <PolicyEditFormBike
              form={form}
              loading={loading}
              onSubmit={handleUpdate}
              onCancel={() => setEditingPolicy(null)}
            />
          ) : editingPolicy?.insurance_category?.toLowerCase() === "health" ? (
            <PolicyEditFormHealth
              form={form}
              loading={loading}
              onSubmit={handleUpdate}
              onCancel={() => setEditingPolicy(null)}
            />
          ) : editingPolicy?.insurance_category?.toLowerCase() === "life" ? (
            <PolicyEditFormLife
              form={form}
              loading={loading}
              onSubmit={handleUpdate}
              onCancel={() => setEditingPolicy(null)}
            />
          ) : editingPolicy?.insurance_category?.toLowerCase() === "travel" ? (
            <PolicyEditFormTravel
              form={form}
              loading={loading}
              onSubmit={handleUpdate}
              onCancel={() => setEditingPolicy(null)}
            />
          ) : editingPolicy?.insurance_category?.toLowerCase() === "other" ? (
            <PolicyEditFormOther
              form={form}
              loading={loading}
              onSubmit={handleUpdate}
              onCancel={() => setEditingPolicy(null)}
            />
          ) : (
            <PolicyEditForm
              form={form}
              loading={loading}
              onSubmit={handleUpdate}
              onCancel={() => setEditingPolicy(null)}
            />
          )}
        </div>
      </Modal>
    </>
  );
};

export default PoliciesTypeHome;
