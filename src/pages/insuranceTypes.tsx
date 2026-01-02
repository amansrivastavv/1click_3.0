"use client";

import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select, message, Modal, Switch } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import InsuranceTable from "@/components/insuranceTypes/InsuranceTable";
import { InsuranceType } from "@/api/types";
import api from "@/utils/axios";
import toast from "react-hot-toast";
import { API_CONFIG, API_ENDPOINTS } from "@/api/config";

const { Option } = Select;
interface InsuranceItem {
  id: string;
  name: string;
  status: "active" | "inactive";
}

interface GetInsuranceResponse {
  status: "success" | "error";
  count: number;
  data: InsuranceItem[];
  message?: string;
}

const InsuranceTypes: React.FC = () => {
  const [data, setData] = useState<InsuranceType[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [saving, setSaving] = useState(false);

  //  Fetch insurance types
  const fetchInsuranceTypes = async () => {
    try {
      setLoading(true);

      const res = await api.get<GetInsuranceResponse>(
        `${API_CONFIG.BASE_URL}${API_ENDPOINTS.GET_INSURANCE}`
      );

      console.log("API response:", res.data);

      if (res.data?.status === "success") {
        setData(res.data.data || []);
      } else {
        message.error(res.data?.message || "Failed to fetch insurance types");
      }
    } catch (err) {
      message.error("Failed to fetch insurance types");
    } finally {
      setLoading(false);
    }
  };


  const saveInsuranceType = async () => {
    try {
      setSaving(true);
      const values = await form.validateFields();


      const status = values.status ? "active" : "inactive";

      const payload = {
        id: values.id, 
        name: values.name,
        status,
      };


      const apiUrl = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.SAVE_INSURANCE}`;


      const res = await toast.promise(api.post(apiUrl, payload), {
        loading: "Saving insurance type...",
        success: "Insurance type saved successfully!",
        error: "Failed to save insurance type",
      });

      if (res.data?.status === "success") {
        // Reload table
        await fetchInsuranceTypes();

        // Close modal and reset form
        setModalOpen(false);
        form.resetFields();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    fetchInsuranceTypes();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Insurance Types</h2>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setModalOpen(true)}
        >
          Add Insurance Type
        </Button>
      </div>

      {/*  Insurance Types Table */}
      <InsuranceTable
        data={data}
        loading={loading}
        onEdit={(record) => {
          setModalOpen(true);
          form.setFieldsValue(record); // pre-fill form for editing
        }}
      />

      {/*  Modal for adding/editing insurance type */}
      <Modal
        title="Add / Edit Insurance Type"
        centered
        open={modalOpen}
        onOk={saveInsuranceType} // Save action
        onCancel={() => setModalOpen(false)} // Cancel action
        okText="Save"
        confirmLoading={saving} // Loader on Save button
      >
        <Form form={form} layout="vertical">
          <Form.Item name="id" hidden>
            <Input type="hidden" />
          </Form.Item>

          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please enter insurance type name" },
            ]}
          >
            <Input placeholder="Enter insurance type name" />
          </Form.Item>

          <Form.Item
            label="Status"
            name="status"
            valuePropName="checked" 
          >
            <Switch checkedChildren="Active" unCheckedChildren="Inactive" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default InsuranceTypes;
