// src/components/policies/PolicyEditFormBike.tsx
"use client";

import React from "react";
import { Form, Input, DatePicker, Select, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { FormInstance } from "antd";

interface PolicyEditFormBikeProps {
  form: FormInstance;
  loading: boolean;
  onSubmit: () => void;
  onCancel: () => void;
}

const PolicyEditFormBike: React.FC<PolicyEditFormBikeProps> = ({
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-4 sm:px-6 py-3 text-white">
            <h3 className="font-semibold text-base sm:text-lg m-0">
              Policy Document
            </h3>
            <p className="text-xs sm:text-sm font-normal text-blue-100 mt-1 mb-0">
              Upload your bike policy PDF document
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
                className="hover:border-blue-500 transition-colors"
                style={{ padding: "20px" }}
              >
                <p className="ant-upload-drag-icon text-blue-600 mb-2">
                  <UploadOutlined style={{ fontSize: 40 }} />
                </p>
                <p className="text-base sm:text-lg font-semibold mb-1">
                  Drop your Bike Policy PDF here
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

        {/* ===== Bike Insurance Policy Section ===== */}
        <div className="rounded-none sm:rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-4 sm:px-6 py-3 text-white">
            <h3 className="font-semibold text-base sm:text-lg m-0">
              Bike Insurance Policy
            </h3>
            <p className="text-xs sm:text-sm font-normal text-blue-100 mt-1 mb-0">
              Enter your bike policy details accurately
            </p>
          </div>

          <div className="p-4 sm:p-6 bg-white">
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
                <Input placeholder="e.g. BIKE123456" size="large" />
              </Form.Item>

              <Form.Item
                name="type_of_business"
                label="Type of Business"
                rules={[
                  { required: true, message: "Please select business type" },
                ]}
                className="mb-4"
              >
                <Select placeholder="Select type" size="large">
                  <Select.Option value="New">New</Select.Option>
                  <Select.Option value="Port">Port</Select.Option>
                  <Select.Option value="Renewal">Renewal</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="policy_name"
                label="Policy Name"
                rules={[
                  { required: true, message: "Please enter policy name" },
                ]}
                className="mb-4"
              >
                <Input
                  placeholder="e.g. Comprehensive Bike Insurance"
                  size="large"
                />
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
                label="Sum Insured / Vehicle IDV"
                rules={[
                  { required: true, message: "Please enter sum insured" },
                ]}
                className="mb-4"
              >
                <Input placeholder="e.g. 85000.00" size="large" type="number" />
              </Form.Item>

              <Form.Item
                name="gross_premium"
                label="Gross Premium"
                rules={[
                  { required: true, message: "Please enter gross premium" },
                ]}
                className="mb-4"
              >
                <Input placeholder="e.g. 3500.00" size="large" type="number" />
              </Form.Item>

              <Form.Item
                name="vehicle_number"
                label="Bike Number"
                rules={[
                  { required: true, message: "Please enter bike number" },
                ]}
                className="mb-4"
              >
                <Input
                  placeholder="e.g. DL01AB1234"
                  style={{ textTransform: "uppercase" }}
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="fuel_type"
                label="Fuel Type"
                rules={[{ required: true, message: "Please select fuel type" }]}
                className="mb-4"
              >
                <Select placeholder="Select fuel type" size="large">
                  <Select.Option value="Petrol">Petrol</Select.Option>
                  <Select.Option value="Electric">Electric</Select.Option>
                  <Select.Option value="CNG">CNG</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="no_claim_bonus"
                label="No Claim Bonus (%)"
                className="mb-4"
              >
                <Input placeholder="e.g. 20" size="large" type="number" />
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
                className="w-full sm:w-auto min-w-[140px] rounded-lg"
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

export default PolicyEditFormBike;
