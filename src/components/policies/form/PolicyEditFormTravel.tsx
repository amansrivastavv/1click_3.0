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
    <div className="bg-white">
      <Form layout="vertical" form={form}>
        {/* ===== Policy Document Section ===== */}
        <div className="rounded-none sm:rounded-xl shadow-md overflow-hidden mb-4 sm:mb-6">
          <div className="bg-gradient-to-r from-cyan-600 to-cyan-500 px-4 sm:px-6 py-3 text-white">
            <h3 className="font-semibold text-base sm:text-lg m-0">
              Policy Document
            </h3>
            <p className="text-xs sm:text-sm font-normal text-cyan-100 mt-1 mb-0">
              Upload your travel policy PDF document
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
                className="hover:border-cyan-500 transition-colors"
                style={{ padding: "20px" }}
              >
                <p className="ant-upload-drag-icon text-cyan-600 mb-2">
                  <UploadOutlined style={{ fontSize: 40 }} />
                </p>
                <p className="text-base sm:text-lg font-semibold mb-1">
                  Drop your Travel Policy PDF here
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

        {/* ===== Travel Insurance Policy Section ===== */}
        <div className="rounded-none sm:rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-600 to-cyan-500 px-4 sm:px-6 py-3 text-white">
            <h3 className="font-semibold text-base sm:text-lg m-0">
              Travel Insurance Policy
            </h3>
            <p className="text-xs sm:text-sm font-normal text-cyan-100 mt-1 mb-0">
              Enter your travel policy details accurately
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
                <Input placeholder="e.g. TRV123456789" size="large" />
              </Form.Item>

              <Form.Item
                name="destination_type"
                label="Destination Type"
                rules={[
                  { required: true, message: "Please select destination type" },
                ]}
                className="mb-4"
              >
                <Select placeholder="Select destination" size="large">
                  <Select.Option value="Domestic">Domestic</Select.Option>
                  <Select.Option value="International">
                    International
                  </Select.Option>
                  <Select.Option value="Europe">Europe</Select.Option>
                  <Select.Option value="Asia">Asia</Select.Option>
                  <Select.Option value="USA / Canada">
                    USA / Canada
                  </Select.Option>
                  <Select.Option value="Other">Other</Select.Option>
                </Select>
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
                label="Sum Insured / Assured (Euro / Dollar)"
                rules={[
                  { required: true, message: "Please enter sum insured" },
                ]}
                className="mb-4"
              >
                <Input
                  placeholder="e.g. 50000"
                  size="large"
                  type="number"
                  addonBefore={
                    <Form.Item name="sum_currency" noStyle initialValue="USD">
                      <Select style={{ width: 80 }}>
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
                label="Trip Duration"
                rules={[
                  { required: true, message: "Please enter trip duration" },
                ]}
                className="mb-4"
              >
                <Input placeholder="e.g. 15 days" size="large" />
              </Form.Item>

              <Form.Item
                name="gross_premium"
                label="Gross Premium"
                rules={[
                  { required: true, message: "Please enter gross premium" },
                ]}
                className="mb-4"
              >
                <Input placeholder="e.g. 2500.00" size="large" type="number" />
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
                className="w-full sm:w-auto min-w-[140px] rounded-lg bg-cyan-600 hover:bg-cyan-700"
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
