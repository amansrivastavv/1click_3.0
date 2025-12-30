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
    <div className="bg-white">
      <Form layout="vertical" form={form}>
        {/* ===== Policy Document Section ===== */}
        <div className="rounded-none sm:rounded-xl shadow-md overflow-hidden mb-4 sm:mb-6">
          <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-4 sm:px-6 py-3 text-white">
            <h3 className="font-semibold text-base sm:text-lg m-0">
              Policy Document
            </h3>
            <p className="text-xs sm:text-sm font-normal text-gray-200 mt-1 mb-0">
              Upload your policy PDF document
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
                className="hover:border-gray-500 transition-colors"
                style={{ padding: "20px" }}
              >
                <p className="ant-upload-drag-icon text-gray-600 mb-2">
                  <UploadOutlined style={{ fontSize: 40 }} />
                </p>
                <p className="text-base sm:text-lg font-semibold mb-1">
                  Drop your Policy PDF here
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

        {/* ===== Other Insurance Policy Section ===== */}
        <div className="rounded-none sm:rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-4 sm:px-6 py-3 text-white">
            <h3 className="font-semibold text-base sm:text-lg m-0">
              Other Insurance Policy
            </h3>
            <p className="text-xs sm:text-sm font-normal text-gray-200 mt-1 mb-0">
              Enter your policy details accurately
            </p>
          </div>

          <div className="p-4 sm:p-6 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Form.Item
                name="policy_nick_name"
                label="Policy Nick Name"
                rules={[
                  { required: true, message: "Please enter policy nick name" },
                ]}
                className="mb-4"
              >
                <Input placeholder="e.g. Home Insurance" size="large" />
              </Form.Item>

              <Form.Item
                name="insurance_category"
                label="Insurance Category"
                rules={[
                  {
                    required: true,
                    message: "Please select insurance category",
                  },
                ]}
                className="mb-4"
              >
                <Select placeholder="Select category" size="large">
                  <Select.Option value="Home Insurance">
                    Home Insurance
                  </Select.Option>
                  <Select.Option value="Fire Insurance">
                    Fire Insurance
                  </Select.Option>
                  <Select.Option value="Marine Insurance">
                    Marine Insurance
                  </Select.Option>
                  <Select.Option value="Property Insurance">
                    Property Insurance
                  </Select.Option>
                  <Select.Option value="Liability Insurance">
                    Liability Insurance
                  </Select.Option>
                  <Select.Option value="Professional Indemnity">
                    Professional Indemnity
                  </Select.Option>
                  <Select.Option value="Cyber Insurance">
                    Cyber Insurance
                  </Select.Option>
                  <Select.Option value="Pet Insurance">
                    Pet Insurance
                  </Select.Option>
                  <Select.Option value="Other">Other</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="insurer_name"
                label="Insurer"
                rules={[{ required: true, message: "Please select insurer" }]}
                className="mb-4"
              >
                <Select placeholder="Select insurer" size="large">
                  <Select.Option value="ICICI Lombard">
                    ICICI Lombard
                  </Select.Option>
                  <Select.Option value="HDFC ERGO">HDFC ERGO</Select.Option>
                  <Select.Option value="Bajaj Allianz">
                    Bajaj Allianz
                  </Select.Option>
                  <Select.Option value="TATA AIG">TATA AIG</Select.Option>
                  <Select.Option value="Reliance General">
                    Reliance General
                  </Select.Option>
                  <Select.Option value="National Insurance">
                    National Insurance
                  </Select.Option>
                  <Select.Option value="Oriental Insurance">
                    Oriental Insurance
                  </Select.Option>
                  <Select.Option value="New India Assurance">
                    New India Assurance
                  </Select.Option>
                  <Select.Option value="United India Insurance">
                    United India Insurance
                  </Select.Option>
                  <Select.Option value="Other">Other</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="next_payment_date"
                label="Next Payment Date"
                rules={[
                  {
                    required: true,
                    message: "Please select next payment date",
                  },
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
                name="plan_name"
                label="Plan Name"
                rules={[{ required: true, message: "Please enter plan name" }]}
                className="mb-4"
              >
                <Input placeholder="e.g. Comprehensive Plan" size="large" />
              </Form.Item>

              <Form.Item
                name="policy_no"
                label="Policy Number"
                className="mb-4"
              >
                <Input placeholder="e.g. POL123456" size="large" />
              </Form.Item>

              <Form.Item
                name="policy_start_date"
                label="Policy Start Date"
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
                label="Sum Insured"
                className="mb-4"
              >
                <Input
                  placeholder="e.g. 1000000.00"
                  size="large"
                  type="number"
                />
              </Form.Item>

              <Form.Item
                name="gross_premium"
                label="Gross Premium"
                className="mb-4"
              >
                <Input placeholder="e.g. 8000.00" size="large" type="number" />
              </Form.Item>

              <Form.Item
                name="client_name"
                label="Client Name"
                className="mb-4"
              >
                <Input placeholder="Your full name" size="large" />
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
                className="w-full sm:w-auto min-w-[140px] rounded-lg bg-gray-700 hover:bg-gray-800"
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
