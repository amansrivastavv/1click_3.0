// src/components/policies/PolicyEditFormHealth.tsx
"use client";

import React from "react";
import { Form, Input, DatePicker, Select, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { FormInstance } from "antd";

interface PolicyEditFormHealthProps {
  form: FormInstance;
  loading: boolean;
  onSubmit: () => void;
  onCancel: () => void;
}

const PolicyEditFormHealth: React.FC<PolicyEditFormHealthProps> = ({
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
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-green-600 pl-3">
            Policy Document
          </h3>
          
          <div className="bg-gray-50 rounded-xl p-4 border border-dashed border-gray-300 hover:border-green-500 transition-all duration-300 group">
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
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <UploadOutlined style={{ fontSize: 28, color: '#16A34A' }} />
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

        {/* ===== Health Insurance Policy Section ===== */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6 border-l-4 border-green-600 pl-3">
            Health Insurance Policy
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
            <Form.Item
              name="client_name"
              label={<span className="font-medium text-gray-700">Client Name</span>}
              rules={[{ required: true, message: "Please enter client name" }]}
            >
              <Input placeholder="Your full name" size="large" className="rounded-lg" />
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
              <Input placeholder="e.g. HLTH123456" size="large" className="rounded-lg" />
            </Form.Item>

            <Form.Item
              name="type_of_business"
              label={<span className="font-medium text-gray-700">Type of Business</span>}
              rules={[{ required: true, message: "Please select business type" }]}
            >
              <Select placeholder="Select type" size="large" className="rounded-lg">
                <Select.Option value="New">New</Select.Option>
                <Select.Option value="Port">Port</Select.Option>
                <Select.Option value="Renewal">Renewal</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="plan_type"
              label={<span className="font-medium text-gray-700">Plan Type</span>}
              rules={[{ required: true, message: "Please select plan type" }]}
            >
              <Select placeholder="Select plan type" size="large" className="rounded-lg">
                <Select.Option value="Family Floater">Family Floater</Select.Option>
                <Select.Option value="Individual">Individual</Select.Option>
                <Select.Option value="Multi Individual">Multi Individual</Select.Option>
                <Select.Option value="Top Up">Top Up</Select.Option>
                <Select.Option value="Super Top Up">Super Top Up</Select.Option>
              </Select>
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
              label={<span className="font-medium text-gray-700">Sum Insured / Assured</span>}
              rules={[{ required: true, message: "Please enter sum insured" }]}
            >
              <Input placeholder="e.g. 500000.00" size="large" type="number" className="rounded-lg" />
            </Form.Item>

            <Form.Item
              name="gross_premium"
              label={<span className="font-medium text-gray-700">Gross Premium</span>}
              rules={[{ required: true, message: "Please enter gross premium" }]}
            >
              <Input placeholder="e.g. 15000.00" size="large" type="number" className="rounded-lg" />
            </Form.Item>

            <Form.Item
              name="number_of_insured"
              label={<span className="font-medium text-gray-700">Number of Insured</span>}
              rules={[{ required: true, message: "Please enter number of insured" }]}
            >
              <Input
                placeholder="e.g. 4"
                size="large"
                type="number"
                min="1"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item
              name="no_claim_bonus"
              label={<span className="font-medium text-gray-700">No Claim Bonus</span>}
            >
              <Input placeholder="e.g. 10% or 50000" size="large" className="rounded-lg" />
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
            className="w-full sm:w-auto px-8 rounded-lg bg-green-600 hover:bg-green-700"
          >
            Update Policy
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PolicyEditFormHealth;
