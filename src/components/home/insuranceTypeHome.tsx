"use client";

import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Descriptions, Image, Select, Tag } from "antd";
import {
  EyeOutlined,
  NotificationOutlined,
  MailOutlined,
  MessageOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import toast from "react-hot-toast";
import { API_CONFIG, API_ENDPOINTS } from "@/api/config";
import api from "@/utils/axios";
import { ColumnsType } from "antd/es/table";

interface UpcomingExpiryPolicy {
  id: string;
  user_id: string;
  client_name: string;
  policy_no: string;
  policy_end_date: string;
  insurance_type: string;
  insurance_company: string;
  details: string;
  sum_insured_amount: number;
  premium_amount: number;
  payment_cycle: string;
  duration: number;
  policy_start_date: string;
  next_payment_date: string;
  notes?: string;
  company_logo?: string;
  insurer_name?: string;
  policy_name?: string;
  type_of_business: string;
  sum_currency: string;
  sum_insured: number;
  gross_premium: number;
  insurance_category: string;
  trip_duration: number;
}

interface GetUpcomingExpiryPoliciesResponse {
  status: string;
  data?: UpcomingExpiryPolicy[];
  message?: string;
}

interface NotificationApiResponse {
  success: boolean;
  message?: string;
}

interface EmailApiResponse {
  status: string;
  message?: string;
}

interface UpcomingExpiriesProps {
  showFilter?: boolean;
  defaultFilter?: "all" | "expiring" | "renewal";
}

const { Option } = Select;

const UpcomingExpiries: React.FC<UpcomingExpiriesProps> = ({
  showFilter = false,
  defaultFilter = "all",
}) => {
  const [allData, setAllData] = useState<UpcomingExpiryPolicy[]>([]);
  const [data, setData] = useState<UpcomingExpiryPolicy[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedPolicy, setSelectedPolicy] =
    useState<UpcomingExpiryPolicy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterType, setFilterType] = useState<string>(defaultFilter);
  const [loadingNotification, setLoadingNotification] = useState(false);
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingSMS, setLoadingSMS] = useState(false);
  const [loadingWhatsApp, setLoadingWhatsApp] = useState(false);

  const fetchUpcomingExpiries = async () => {
    try {
      setLoading(true);
      const res = await api.get<GetUpcomingExpiryPoliciesResponse>(
        `${API_CONFIG.BASE_URL}${API_ENDPOINTS.VIEW_UPCOMMING}`
      );

      if (res.data?.status === "success") {
        setAllData(res.data.data || []);
        setData(res.data.data || []);
      } else {
        toast.error(res.data?.message || "Failed to fetch upcoming expiries");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch upcoming expiries");
    } finally {
      setLoading(false);
    }
  };

  // Client-side filtering
  useEffect(() => {
    const today = new Date();
    const next30Days = new Date();
    next30Days.setDate(today.getDate() + 30);

    if (filterType === "all") {
      setData(allData);
    } else if (filterType === "expiring") {
      const filtered = allData.filter((item) => {
        if (!item.policy_end_date) return false;
        const expiryDate = new Date(item.policy_end_date);
        return expiryDate >= today && expiryDate <= next30Days;
      });
      setData(filtered);
    } else if (filterType === "renewal") {
      const filtered = allData.filter((item) => {
        if (!item.next_payment_date) return false;
        const renewalDate = new Date(item.next_payment_date);
        return renewalDate >= today && renewalDate <= next30Days;
      });
      setData(filtered);
    }
  }, [filterType, allData]);

  useEffect(() => {
    fetchUpcomingExpiries();
  }, []);

  const handleView = (record: UpcomingExpiryPolicy) => {
    setSelectedPolicy(record);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPolicy(null);
    setIsModalOpen(false);
  };

  const handleSendNotification = async (
    policy: UpcomingExpiryPolicy | null
  ) => {
    if (!policy) {
      toast.error("No policy selected");
      return;
    }

    setLoadingNotification(true);
    try {
      const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.NOTIFICATIONS_SEND}?user_id=${policy.user_id}`;

      const res = await api.post<NotificationApiResponse>(url, {
        title: "Policy Expiry Reminder",
        body: `Hello ${policy.client_name}, your policy ${policy.policy_no} will expire on ${policy.policy_end_date}.`,
      });

      if (res.data.success) {
        toast.success(res.data.message || "Notification sent successfully!");
      } else {
        toast.error(res.data.message || "Failed to send notification");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error sending notification");
    } finally {
      setLoadingNotification(false);
    }
  };

  const handleSendEmail = async (policy: UpcomingExpiryPolicy | null) => {
    if (!policy) {
      toast.error("No policy selected");
      return;
    }

    setLoadingEmail(true);
    try {
      const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.EMAIL_SEND}?user_id=${policy.user_id}&policy_id=${policy.id}`;

      const res = await api.post<EmailApiResponse>(url, {
        title: "Policy Expiry Reminder",
        body: `Hello ${policy.client_name}, your policy ${policy.policy_no} will expire on ${policy.policy_end_date}.`,
      });

      if (res.data.status === "success") {
        toast.success(
          res.data.message || `Email sent to ${policy.client_name}`
        );
      } else {
        toast.error(res.data.message || "Failed to send email");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error sending email");
    } finally {
      setLoadingEmail(false);
    }
  };

  const handleSendSMS = async (policy: UpcomingExpiryPolicy | null) => {
    if (!policy) {
      toast.error("No policy selected");
      return;
    }

    setLoadingSMS(true);
    try {
      const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.SMS_SEND}?user_id=${policy.user_id}&policy_id=${policy.id}`;
      const res = await api.post<NotificationApiResponse>(url, {
        body: `Hello ${policy.client_name}, your policy ${policy.policy_no} will expire on ${policy.policy_end_date}.`,
      });

      if (res.data.success) {
        toast.success(res.data.message || `SMS sent to ${policy.client_name}`);
      } else {
        toast.error(res.data.message || "Failed to send SMS");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error sending SMS");
    } finally {
      setLoadingSMS(false);
    }
  };

  const handleSendWhatsapp = async (policy: UpcomingExpiryPolicy | null) => {
    if (!policy) {
      toast.error("No policy selected");
      return;
    }

    setLoadingWhatsApp(true);
    try {
      const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.WHATSAPP_SEND}?user_id=${policy.user_id}&policy_id=${policy.id}`;
      const res = await api.post<NotificationApiResponse>(url, {
        body: `Hello ${policy.client_name}, your policy ${policy.policy_no} will expire on ${policy.policy_end_date}.`,
      });

      if (res.data.success) {
        toast.success(
          res.data.message || `WhatsApp message sent to ${policy.client_name}`
        );
      } else {
        toast.error(res.data.message || "Failed to send WhatsApp message");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error sending WhatsApp message");
    } finally {
      setLoadingWhatsApp(false);
    }
  };

  const columns: ColumnsType<UpcomingExpiryPolicy> = [
    {
      title: "User",
      dataIndex: "client_name",
      key: "user",
      align: "left",
    },
    {
      title: "Policy",
      dataIndex: "policy_no",
      key: "policy",
      align: "left",
    },
    {
      title: "Expiry",
      dataIndex: "policy_end_date",
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
        const expiryDate = new Date(record.policy_end_date);

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
          icon={<EyeOutlined />}
          onClick={() => handleView(record)}
        >
          View
        </Button>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Upcoming Expiries</h2>
        {showFilter && (
          <Select
            value={filterType}
            onChange={(val) => setFilterType(val)}
            style={{ width: 200 }}
            placeholder="Filter policies..."
          >
            <Option value="all">All Policies</Option>
            <Option value="expiring">Upcoming Expiring</Option>
            <Option value="renewal">Upcoming Renewal</Option>
          </Select>
        )}
      </div>

      <div className="overflow-auto">
        <Table
          dataSource={data}
          columns={columns}
          rowKey={(record) => record.id}
          loading={loading}
          pagination={{ pageSize: 5 }}
          locale={{ emptyText: "No upcoming policies found" }}
        />
      </div>

      <Modal
        title={`Policy Details - ${selectedPolicy?.policy_no}`}
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={
          <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            <Button
              type="primary"
              icon={<NotificationOutlined />}
              loading={loadingNotification}
              onClick={() => handleSendNotification(selectedPolicy)}
            >
              Send Notification
            </Button>
            <Button
              type="primary"
              icon={<MailOutlined />}
              loading={loadingEmail}
              onClick={() => handleSendEmail(selectedPolicy)}
            >
              Send Email
            </Button>
            <Button
              type="primary"
              icon={<MessageOutlined />}
              loading={loadingSMS}
              onClick={() => handleSendSMS(selectedPolicy)}
            >
              Send SMS
            </Button>
            <Button
              type="primary"
              icon={<WhatsAppOutlined />}
              style={{
                backgroundColor: "#25D366",
                borderColor: "#25D366",
                color: "#fff",
              }}
              loading={loadingWhatsApp}
              onClick={() => handleSendWhatsapp(selectedPolicy)}
            >
              Send WhatsApp
            </Button>
          </div>
        }
        width={1024}
      >
        {selectedPolicy && (
          <Descriptions bordered column={2}>
            <Descriptions.Item label="Policy Holder">
              {selectedPolicy.client_name}
            </Descriptions.Item>
            <Descriptions.Item label="Policy Number">
              {selectedPolicy.policy_no}
            </Descriptions.Item>
            <Descriptions.Item label="Insurer Name">
              {selectedPolicy.insurer_name}
            </Descriptions.Item>
            <Descriptions.Item label="Policy Name">
              {selectedPolicy.policy_name}
            </Descriptions.Item>
            <Descriptions.Item label="Type of Business">
              {selectedPolicy.type_of_business}
            </Descriptions.Item>
            <Descriptions.Item label="Sum Insured">
              {selectedPolicy.sum_currency}
              &nbsp;
              {selectedPolicy.sum_insured}
            </Descriptions.Item>
            <Descriptions.Item label="Premium Amount">
              {selectedPolicy.gross_premium}
            </Descriptions.Item>
            <Descriptions.Item label="Insurance Category">
              {selectedPolicy.insurance_category}
            </Descriptions.Item>
            <Descriptions.Item label="Duration (Years)">
              {selectedPolicy.trip_duration}
            </Descriptions.Item>
            <Descriptions.Item label="Start Date">
              {selectedPolicy.policy_start_date}
            </Descriptions.Item>
            <Descriptions.Item label="End Date">
              {selectedPolicy.policy_end_date}
            </Descriptions.Item>
            <Descriptions.Item label="Next Payment Date">
              {selectedPolicy.next_payment_date}
            </Descriptions.Item>
            <Descriptions.Item label="Notes">
              {selectedPolicy.notes || "-"}
            </Descriptions.Item>
            {selectedPolicy.company_logo && (
              <Descriptions.Item label="Company Logo">
                <Image
                  width={40}
                  src={`${API_CONFIG.BASE_URL}/uploads/${selectedPolicy.company_logo}`}
                  alt={selectedPolicy.insurance_company}
                />
              </Descriptions.Item>
            )}
          </Descriptions>
        )}
      </Modal>
    </div>
  );
};

export default UpcomingExpiries;
