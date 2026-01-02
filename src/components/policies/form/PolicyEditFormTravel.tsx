// src/components/policies/PolicyEditFormTravel.tsx
"use client";

import React from "react";
import { Form, Input, DatePicker, Select, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { FormInstance } from "antd";

interface PolicyEditFormTravelProps {
  form: FormInstance;
  loading: boolean;
  onSubmit: () => void;
  onCancel: () => void;
}

const PolicyEditFormTravel: React.FC<PolicyEditFormTravelProps> = ({
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
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-cyan-500 pl-3">
            Policy Document
          </h3>
          
          <div className="bg-gray-50 rounded-xl p-4 border border-dashed border-gray-300 hover:border-cyan-500 transition-all duration-300 group">
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
                  <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <UploadOutlined style={{ fontSize: 28, color: '#06b6d4' }} />
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

        {/* ===== Travel Insurance Policy Section ===== */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6 border-l-4 border-cyan-500 pl-3">
            Travel Insurance Policy
          </h3>

          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 mb-6">
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
                <Input placeholder="e.g. TRV123456789" size="large" className="rounded-lg" />
              </Form.Item>

              <Form.Item
                name="destination_type"
                label={<span className="font-medium text-gray-700">Destination Type</span>}
                rules={[{ required: true, message: "Please select destination type" }]}
              >
                <Select placeholder="Select destination" size="large" className="rounded-lg">
                  <Select.Option value="Domestic">Domestic</Select.Option>
                  <Select.Option value="International">International</Select.Option>
                  <Select.Option value="Europe">Europe</Select.Option>
                  <Select.Option value="Asia">Asia</Select.Option>
                  <Select.Option value="USA / Canada">USA / Canada</Select.Option>
                  <Select.Option value="Other">Other</Select.Option>
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
                label={<span className="font-medium text-gray-700">Sum Insured</span>}
                rules={[{ required: true, message: "Please enter sum insured" }]}
              >
                <Input
                  placeholder="e.g. 50000"
                  size="large"
                  type="number"
                  className="rounded-lg"
                  addonBefore={
                    <Form.Item name="sum_currency" noStyle initialValue="USD">
                      <Select style={{ width: 80 }} className="bg-gray-50">
                        <Select.Option value="USD">USD</Select.Option>
                        <Select.Option value="EUR">EUR</Select.Option>
                        <Select.Option value="INR">INR</Select.Option>
                        <Select.Option value="GBP">GBP</Select.Option>
                      </Select>
                    </Form.Item>
                  }
                />
              </Form.Item>

              <Form.Item
                name="trip_duration"
                label={<span className="font-medium text-gray-700">Trip Duration</span>}
                rules={[{ required: true, message: "Please enter trip duration" }]}
              >
                <Input placeholder="e.g. 15 days" size="large" className="rounded-lg" />
              </Form.Item>

              <Form.Item
                name="gross_premium"
                label={<span className="font-medium text-gray-700">Gross Premium</span>}
                rules={[{ required: true, message: "Please enter gross premium" }]}
              >
                <Input placeholder="e.g. 2500.00" size="large" type="number" className="rounded-lg" />
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
                className="w-full sm:w-auto px-8 rounded-lg bg-cyan-600 hover:bg-cyan-700"
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

export default PolicyEditFormTravel;
