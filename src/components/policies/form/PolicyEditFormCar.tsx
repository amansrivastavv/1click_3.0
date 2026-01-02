"use client";

import React from "react";
import { Form, Input, DatePicker, Select, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { FormInstance } from "antd";

interface PolicyEditFormProps {
  form: FormInstance;
  loading: boolean;
  onSubmit: () => void;
  onCancel: () => void;
}

const PolicyEditForm: React.FC<PolicyEditFormProps> = ({
  form,
  loading,
  onSubmit,
  onCancel,
}) => {
  return (
    <div className="bg-white px-2">
      <Form layout="vertical" form={form} requiredMark={false}>
        {/* ===== Policy Document Section ===== */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-3">
            Policy Document
          </h3>
          
          <div className="bg-gray-50 rounded-xl p-4 border border-dashed border-gray-300 hover:border-blue-500 transition-all duration-300 group">
            <Form.Item
              name="policy_pdf"
              valuePropName="fileList"
              getValueFromEvent={(e) => e?.fileList}
              className="mb-0"
            >
              <Upload.Dragger
                beforeUpload={() => false}
                accept=".pdf"
                className="!border-0 !bg-transparent"
                showUploadList={{
                  showRemoveIcon: true,
                }}
              >
                <div className="py-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <UploadOutlined style={{ fontSize: 28, color : '#2563EB' }} />
                  </div>
                  <p className="text-gray-900 text-sm font-medium mb-1">
                    Click or drag file to upload
                  </p>
                  <p className="text-gray-500 text-xs text-center">
                    PDF format only (Max 20MB)
                  </p>
                </div>
              </Upload.Dragger>
            </Form.Item>
          </div>
        </div>

        {/* ===== Policy Information Section ===== */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6 border-l-4 border-blue-600 pl-3">
            Policy Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
            <Form.Item
              name="client_name"
              label={<span className="font-medium text-gray-700">Client Name</span>}
              rules={[{ required: true, message: "Please enter client name" }]}
            >
              <Input placeholder="Enter full name" size="large" className="rounded-lg" />
            </Form.Item>

            <Form.Item
              name="insurer_name"
              label={<span className="font-medium text-gray-700">Insurer Name</span>}
              rules={[{ required: true, message: "Please select insurer name" }]}
            >
              <Select placeholder="Select insurer" size="large" className="rounded-lg">
                <Select.Option value="Reliance Digital">Reliance Digital</Select.Option>
                <Select.Option value="Bajaj Allianz">Bajaj Allianz</Select.Option>
                <Select.Option value="Digit">Digit</Select.Option>
                <Select.Option value="Max Life Insurance">Max Life Insurance</Select.Option>
                <Select.Option value="New India Assurance">New India Assurance</Select.Option>
                <Select.Option value="Tata AIG Insurance">Tata AIG Insurance</Select.Option>
                <Select.Option value="PPAP">PPAP</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="policy_no"
              label={<span className="font-medium text-gray-700">Policy Number</span>}
              rules={[{ required: true, message: "Please enter policy number" }]}
            >
              <Input placeholder="Enter policy number" size="large" className="rounded-lg" />
            </Form.Item>

            <Form.Item
              name="policy_start_date"
              label={<span className="font-medium text-gray-700">Start Date</span>}
              rules={[{ required: true, message: "Please select start date" }]}
            >
              <DatePicker className="w-full rounded-lg" format="DD-MM-YYYY" size="large" />
            </Form.Item>

            <Form.Item
              name="policy_end_date"
              label={<span className="font-medium text-gray-700">End Date</span>}
              rules={[{ required: true, message: "Please select end date" }]}
            >
              <DatePicker className="w-full rounded-lg" format="DD-MM-YYYY" size="large" />
            </Form.Item>

            <Form.Item
              name="sum_insured"
              label={<span className="font-medium text-gray-700">Sum Insured (IDV)</span>}
              rules={[{ required: true, message: "Please enter sum insured" }]}
            >
              <Input placeholder="0.00" prefix="₹" size="large" className="rounded-lg" />
            </Form.Item>

            <Form.Item
              name="gross_premium"
              label={<span className="font-medium text-gray-700">Gross Premium</span>}
              rules={[{ required: true, message: "Please enter gross premium" }]}
            >
              <Input placeholder="0.00" prefix="₹" size="large" className="rounded-lg" />
            </Form.Item>

            <Form.Item
              name="vehicle_number"
              label={<span className="font-medium text-gray-700">Vehicle Number</span>}
              rules={[{ required: true, message: "Please enter vehicle number" }]}
            >
              <Input
                placeholder="UP00XY0000"
                style={{ textTransform: "uppercase" }}
                size="large"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item
              name="fuel_type"
              label={<span className="font-medium text-gray-700">Fuel Type</span>}
              rules={[{ required: true, message: "Please select fuel type" }]}
            >
              <Select placeholder="Select fuel type" size="large" className="rounded-lg">
                <Select.Option value="Petrol">Petrol</Select.Option>
                <Select.Option value="Diesel">Diesel</Select.Option>
                <Select.Option value="CNG">CNG</Select.Option>
                <Select.Option value="Electric">Electric</Select.Option>
              </Select>
            </Form.Item>
          </div>
        </div>

        {/* ===== Action Buttons ===== */}
        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-4 border-t border-gray-100">
          <Button
            size="large"
            onClick={onCancel}
            className="w-full sm:w-auto px-8 rounded-lg"
          >
            Cancel
          </Button>
          <Button
            type="primary"
            size="large"
            loading={loading}
            onClick={onSubmit}
            className="w-full sm:w-auto px-8 rounded-lg bg-blue-600 hover:bg-blue-700"
          >
            Update Policy
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PolicyEditForm;
