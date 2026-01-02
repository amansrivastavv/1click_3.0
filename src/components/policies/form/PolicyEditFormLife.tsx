// src/components/policies/PolicyEditFormLife.tsx
"use client";

import React from "react";
import { Form, Input, DatePicker, Select, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { FormInstance } from "antd";

interface PolicyEditFormLifeProps {
  form: FormInstance;
  loading: boolean;
  onSubmit: () => void;
  onCancel: () => void;
}

const PolicyEditFormLife: React.FC<PolicyEditFormLifeProps> = ({
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
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-purple-600 pl-3">
            Policy Document
          </h3>
          
          <div className="bg-gray-50 rounded-xl p-4 border border-dashed border-gray-300 hover:border-purple-500 transition-all duration-300 group">
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
                  <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <UploadOutlined style={{ fontSize: 28, color: '#9333EA' }} />
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

        {/* ===== Life Insurance Policy Section ===== */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6 border-l-4 border-purple-600 pl-3">
            Life Insurance Policy
          </h3>

          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 mb-6">
             <Form.Item name="remarks" label={<span className="font-medium text-gray-700">Remarks</span>} className="mb-0">
                <Input.TextArea
                  placeholder="Add any additional notes or comments..."
                  className="rounded-lg border-gray-300"
                  rows={3}
                />
              </Form.Item>
          </div>

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
              <Input placeholder="e.g. LIFE123456789" size="large" className="rounded-lg" />
            </Form.Item>

            <Form.Item
              name="policy_name"
              label={<span className="font-medium text-gray-700">Policy Name</span>}
              rules={[{ required: true, message: "Please enter policy name" }]}
            >
              <Input placeholder="e.g. Term Life Insurance" size="large" className="rounded-lg" />
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
              <Input placeholder="e.g. 5000000.00" size="large" type="number" className="rounded-lg" />
            </Form.Item>

            <Form.Item
              name="policy_term"
              label={<span className="font-medium text-gray-700">Policy Term (Years)</span>}
              rules={[{ required: true, message: "Please enter policy term" }]}
            >
              <Input placeholder="e.g. 20" size="large" type="number" min="1" className="rounded-lg" />
            </Form.Item>

            <Form.Item
              name="premium_paying_term"
              label={<span className="font-medium text-gray-700">Premium Paying Term</span>}
              rules={[{ required: true, message: "Please enter term" }]}
            >
              <Input placeholder="e.g. 15" size="large" type="number" min="1" className="rounded-lg" />
            </Form.Item>

            <Form.Item
              name="gross_premium"
              label={<span className="font-medium text-gray-700">Gross Premium</span>}
              rules={[{ required: true, message: "Please enter gross premium" }]}
            >
              <Input placeholder="e.g. 25000.00" size="large" type="number" className="rounded-lg" />
            </Form.Item>

            <Form.Item
              name="policy_status"
              label={<span className="font-medium text-gray-700">Policy Status</span>}
              rules={[{ required: true, message: "Please select policy status" }]}
            >
              <Select placeholder="Select status" size="large" className="rounded-lg">
                <Select.Option value="Active">Active</Select.Option>
                <Select.Option value="Lapsed">Lapsed</Select.Option>
                <Select.Option value="Paid-up">Paid-up</Select.Option>
                <Select.Option value="Matured">Matured</Select.Option>
                <Select.Option value="Surrendered">Surrendered</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="address_city"
              label={<span className="font-medium text-gray-700">Address / City</span>}
              rules={[{ required: true, message: "Please enter address" }]}
            >
              <Input placeholder="Enter your city or address" size="large" className="rounded-lg" />
            </Form.Item>

            <Form.Item
              name="pincode"
              label={<span className="font-medium text-gray-700">Pincode</span>}
              rules={[
                { required: true, message: "Please enter pincode" },
                { pattern: /^[0-9]{6}$/, message: "Valid 6-digit pincode" },
              ]}
            >
              <Input placeholder="e.g. 110001" size="large" maxLength={6} className="rounded-lg" />
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
            className="w-full sm:w-auto px-8 rounded-lg bg-purple-600 hover:bg-purple-700"
          >
            Update Policy
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PolicyEditFormLife;
