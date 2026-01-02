// src/components/policies/PolicyEditFormOther.tsx
"use client";

import React from "react";
import { Form, Input, DatePicker, Select, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { FormInstance } from "antd";

interface PolicyEditFormOtherProps {
  form: FormInstance;
  loading: boolean;
  onSubmit: () => void;
  onCancel: () => void;
}

const PolicyEditFormOther: React.FC<PolicyEditFormOtherProps> = ({
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
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-gray-600 pl-3">
            Policy Document
          </h3>
          
          <div className="bg-gray-50 rounded-xl p-4 border border-dashed border-gray-300 hover:border-gray-500 transition-all duration-300 group">
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
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <UploadOutlined style={{ fontSize: 28, color: '#4B5563' }} />
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

        {/* ===== Other Insurance Policy Section ===== */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6 border-l-4 border-gray-600 pl-3">
            Other Insurance Policy
          </h3>

          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
              <Form.Item
                name="policy_nick_name"
                label={<span className="font-medium text-gray-700">Policy Nick Name</span>}
                rules={[{ required: true, message: "Please enter policy nick name" }]}
              >
                <Input placeholder="e.g. Home Insurance" size="large" className="rounded-lg" />
              </Form.Item>

              <Form.Item
                name="insurance_category"
                label={<span className="font-medium text-gray-700">Insurance Category</span>}
                rules={[{ required: true, message: "Please select insurance category" }]}
              >
                <Select placeholder="Select category" size="large" className="rounded-lg">
                  <Select.Option value="Home Insurance">Home Insurance</Select.Option>
                  <Select.Option value="Fire Insurance">Fire Insurance</Select.Option>
                  <Select.Option value="Marine Insurance">Marine Insurance</Select.Option>
                  <Select.Option value="Property Insurance">Property Insurance</Select.Option>
                  <Select.Option value="Liability Insurance">Liability Insurance</Select.Option>
                  <Select.Option value="Professional Indemnity">Professional Indemnity</Select.Option>
                  <Select.Option value="Cyber Insurance">Cyber Insurance</Select.Option>
                  <Select.Option value="Pet Insurance">Pet Insurance</Select.Option>
                  <Select.Option value="Other">Other</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="insurer_name"
                label={<span className="font-medium text-gray-700">Insurer</span>}
                rules={[{ required: true, message: "Please select insurer" }]}
              >
                <Select placeholder="Select insurer" size="large" className="rounded-lg">
                  <Select.Option value="ICICI Lombard">ICICI Lombard</Select.Option>
                  <Select.Option value="HDFC ERGO">HDFC ERGO</Select.Option>
                  <Select.Option value="Bajaj Allianz">Bajaj Allianz</Select.Option>
                  <Select.Option value="TATA AIG">TATA AIG</Select.Option>
                  <Select.Option value="Reliance General">Reliance General</Select.Option>
                  <Select.Option value="National Insurance">National Insurance</Select.Option>
                  <Select.Option value="Oriental Insurance">Oriental Insurance</Select.Option>
                  <Select.Option value="New India Assurance">New India Assurance</Select.Option>
                  <Select.Option value="United India Insurance">United India Insurance</Select.Option>
                  <Select.Option value="Other">Other</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="next_payment_date"
                label={<span className="font-medium text-gray-700">Next Payment Date</span>}
                rules={[{ required: true, message: "Please select next payment date" }]}
              >
                <DatePicker className="w-full rounded-lg" format="DD-MM-YYYY" size="large" />
              </Form.Item>

              <Form.Item
                name="plan_name"
                label={<span className="font-medium text-gray-700">Plan Name</span>}
                rules={[{ required: true, message: "Please enter plan name" }]}
              >
                <Input placeholder="e.g. Comprehensive Plan" size="large" className="rounded-lg" />
              </Form.Item>

              <Form.Item
                name="policy_no"
                label={<span className="font-medium text-gray-700">Policy Number</span>}
              >
                <Input placeholder="e.g. POL123456" size="large" className="rounded-lg" />
              </Form.Item>

              <Form.Item
                name="policy_start_date"
                label={<span className="font-medium text-gray-700">Policy Start Date</span>}
              >
                <DatePicker className="w-full rounded-lg" format="DD-MM-YYYY" size="large" />
              </Form.Item>

              <Form.Item
                name="policy_end_date"
                label={<span className="font-medium text-gray-700">Policy End Date</span>}
              >
                <DatePicker className="w-full rounded-lg" format="DD-MM-YYYY" size="large" />
              </Form.Item>

              <Form.Item
                name="sum_insured"
                label={<span className="font-medium text-gray-700">Sum Insured</span>}
              >
                <Input placeholder="e.g. 1000000.00" size="large" type="number" className="rounded-lg" />
              </Form.Item>

              <Form.Item
                name="gross_premium"
                label={<span className="font-medium text-gray-700">Gross Premium</span>}
              >
                <Input placeholder="e.g. 8000.00" size="large" type="number" className="rounded-lg" />
              </Form.Item>

              <Form.Item
                name="client_name"
                label={<span className="font-medium text-gray-700">Client Name</span>}
              >
                <Input placeholder="Your full name" size="large" className="rounded-lg" />
              </Form.Item>
            </div>

            {/* ===== Action Buttons ===== */}
            <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-4 border-t border-gray-100 mt-4">
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
                className="w-full sm:w-auto px-8 rounded-lg bg-gray-700 hover:bg-gray-800"
              >
                Update Policy
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PolicyEditFormOther;
