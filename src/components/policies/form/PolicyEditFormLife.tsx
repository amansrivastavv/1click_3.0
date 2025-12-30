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
    <div className="bg-white">
      <Form layout="vertical" form={form}>
        {/* ===== Policy Document Section ===== */}
        <div className="rounded-none sm:rounded-xl shadow-md overflow-hidden mb-4 sm:mb-6">
          <div className="bg-gradient-to-r from-purple-600 to-purple-500 px-4 sm:px-6 py-3 text-white">
            <h3 className="font-semibold text-base sm:text-lg m-0">
              Policy Document
            </h3>
            <p className="text-xs sm:text-sm font-normal text-purple-100 mt-1 mb-0">
              Upload your life policy PDF document
            </p>
          </div>

          <div className="p-4 sm:p-6 bg-white">
            <Form.Item
              name="policy_pdf"
              valuePropName="fileList"
              getValueFromEvent={(e) => e?.fileList}
              className="mb-0"
            >
              <Upload.Dragger
                beforeUpload={() => false}
                accept=".pdf"
                className="hover:border-purple-500 transition-colors"
                style={{ padding: "20px" }}
              >
                <p className="ant-upload-drag-icon text-purple-600 mb-2">
                  <UploadOutlined style={{ fontSize: 40 }} />
                </p>
                <p className="text-base sm:text-lg font-semibold mb-1">
                  Drop your Life Policy PDF here
                </p>
                <p className="text-gray-500 text-xs sm:text-sm mb-0">
                  or click to browse
                  <br />
                  PDF only · Maximum size 20MB
                </p>
              </Upload.Dragger>
            </Form.Item>
          </div>
        </div>

        {/* ===== Life Insurance Policy Section ===== */}
        <div className="rounded-none sm:rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-purple-500 px-4 sm:px-6 py-3 text-white">
            <h3 className="font-semibold text-base sm:text-lg m-0">
              Life Insurance Policy
            </h3>
            <p className="text-xs sm:text-sm font-normal text-purple-100 mt-1 mb-0">
              Enter your life policy details accurately
            </p>
          </div>

          <div className="p-4 sm:p-6 bg-white">
            <div className="grid grid-cols-1 gap-4">
              {/* Remarks - Full Width */}
              <Form.Item name="remarks" label="Remarks" className="mb-4">
                <Input.TextArea
                  placeholder="Add any additional notes or comments"
                  size="large"
                  rows={3}
                />
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Form.Item
                name="client_name"
                label="Client Name"
                rules={[
                  { required: true, message: "Please enter client name" },
                ]}
                className="mb-4"
              >
                <Input placeholder="Your full name" size="large" />
              </Form.Item>

              <Form.Item
                name="insurer_name"
                label="Insurer Name"
                rules={[
                  { required: true, message: "Please select insurer name" },
                ]}
                className="mb-4"
              >
                <Select placeholder="Select insurer" size="large">
                  <Select.Option value="Reliance Digital">
                    Reliance Digital
                  </Select.Option>
                  <Select.Option value="Bajaj Allianz">
                    Bajaj Allianz
                  </Select.Option>
                  <Select.Option value="Digit">Digit</Select.Option>
                  <Select.Option value="Max Life Insurance">
                    Max Life Insurance
                  </Select.Option>
                  <Select.Option value="New India Assurance">
                    New India Assurance
                  </Select.Option>
                  <Select.Option value="Tata AIG Insurance">
                    Tata AIG Insurance
                  </Select.Option>
                  <Select.Option value="PPAP">PPAP</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="policy_no"
                label="Policy Number"
                rules={[
                  { required: true, message: "Please enter policy number" },
                ]}
                className="mb-4"
              >
                <Input placeholder="e.g. LIFE123456789" size="large" />
              </Form.Item>

              <Form.Item
                name="policy_name"
                label="Policy Name"
                rules={[
                  { required: true, message: "Please enter policy name" },
                ]}
                className="mb-4"
              >
                <Input placeholder="e.g. Term Life Insurance" size="large" />
              </Form.Item>

              <Form.Item
                name="policy_start_date"
                label="Policy Start Date"
                rules={[
                  { required: true, message: "Please select start date" },
                ]}
                className="mb-4"
              >
                <DatePicker
                  className="w-full"
                  format="DD-MM-YYYY"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="policy_end_date"
                label="Policy End Date"
                rules={[{ required: true, message: "Please select end date" }]}
                className="mb-4"
              >
                <DatePicker
                  className="w-full"
                  format="DD-MM-YYYY"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="sum_insured"
                label="Sum Insured / Assured"
                rules={[
                  { required: true, message: "Please enter sum insured" },
                ]}
                className="mb-4"
              >
                <Input
                  placeholder="e.g. 5000000.00"
                  size="large"
                  type="number"
                />
              </Form.Item>

              <Form.Item
                name="policy_term"
                label="Policy Term (in years)"
                rules={[
                  { required: true, message: "Please enter policy term" },
                ]}
                className="mb-4"
              >
                <Input
                  placeholder="e.g. 20"
                  size="large"
                  type="number"
                  min="1"
                />
              </Form.Item>

              <Form.Item
                name="premium_paying_term"
                label="Premium Paying Term (in years)"
                rules={[
                  {
                    required: true,
                    message: "Please enter premium paying term",
                  },
                ]}
                className="mb-4"
              >
                <Input
                  placeholder="e.g. 15"
                  size="large"
                  type="number"
                  min="1"
                />
              </Form.Item>

              <Form.Item
                name="gross_premium"
                label="Gross Premium"
                rules={[
                  { required: true, message: "Please enter gross premium" },
                ]}
                className="mb-4"
              >
                <Input placeholder="e.g. 25000.00" size="large" type="number" />
              </Form.Item>

              <Form.Item
                name="policy_status"
                label="Policy Status"
                rules={[
                  { required: true, message: "Please select policy status" },
                ]}
                className="mb-4"
              >
                <Select placeholder="Select status" size="large">
                  <Select.Option value="Active">Active</Select.Option>
                  <Select.Option value="Lapsed">Lapsed</Select.Option>
                  <Select.Option value="Paid-up">Paid-up</Select.Option>
                  <Select.Option value="Matured">Matured</Select.Option>
                  <Select.Option value="Surrendered">Surrendered</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="address_city"
                label="Address / City"
                rules={[{ required: true, message: "Please enter address" }]}
                className="mb-4"
              >
                <Input placeholder="Enter your city or address" size="large" />
              </Form.Item>

              <Form.Item
                name="pincode"
                label="Pincode"
                rules={[
                  { required: true, message: "Please enter pincode" },
                  {
                    pattern: /^[0-9]{6}$/,
                    message: "Please enter valid 6-digit pincode",
                  },
                ]}
                className="mb-4"
              >
                <Input placeholder="e.g. 110001" size="large" maxLength={6} />
              </Form.Item>
            </div>

            {/* ===== Action Buttons ===== */}
            <div className="flex flex-col-reverse sm:flex-row justify-center gap-3 mt-6 pb-2">
              <Button
                size="large"
                onClick={onCancel}
                className="w-full sm:w-auto min-w-[120px] rounded-lg"
              >
                Cancel
              </Button>
              <Button
                type="primary"
                size="large"
                loading={loading}
                onClick={onSubmit}
                className="w-full sm:w-auto min-w-[140px] rounded-lg bg-purple-600 hover:bg-purple-700"
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

export default PolicyEditFormLife;
