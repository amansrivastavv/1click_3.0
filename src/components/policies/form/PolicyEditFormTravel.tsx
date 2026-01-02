"use client";

import React from "react";
import { Form, Input, DatePicker, Select, Upload } from "antd";
import { User, Plane, Calendar, FileText, Upload as UploadIcon, Info, Globe } from "lucide-react";
import type { FormInstance } from "antd";
import PolicyLayout from "./PolicyLayout";
import PDFPreview from "./PDFPreview";

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
    <PolicyLayout
      title="Edit Travel Policy"
      subtitle="Manage travel insurance details"
      icon={<Plane className="w-6 h-6" />}
      themeColor="cyan"
      sections={[
        { id: "basic", label: "Basic Info", icon: <User className="w-4 h-4" /> },
        { id: "trip", label: "Trip Details", icon: <Globe className="w-4 h-4" /> },
        { id: "coverage", label: "Coverage", icon: <Info className="w-4 h-4" /> },
        { id: "documents", label: "Documents", icon: <FileText className="w-4 h-4" /> },
      ]}
      onCancel={onCancel}
      onSave={onSubmit}
      loading={loading}
    >
      <Form layout="vertical" form={form} requiredMark={false} className="py-2">
        
        {/* ================= BASIC INFO ================= */}
        <div id="basic" className="scroll-mt-6 mb-12">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center">
                    <User size={16} />
                </div>
                Basic Information
            </h3>
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Form.Item
                    name="client_name"
                    label="Client Name"
                    rules={[{ required: true, message: "Required" }]}
                >
                    <Input size="large" placeholder="Full Client Name" className="rounded-lg" prefix={<User className="w-4 h-4 text-gray-400 mr-2" />} />
                </Form.Item>

                <Form.Item
                    name="insurer_name"
                    label="Insurer Company"
                    rules={[{ required: true, message: "Required" }]}
                >
                    <Select size="large" placeholder="Select Insurer" className="rounded-lg" showSearch>
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
                    label="Policy Number"
                    rules={[{ required: true, message: "Required" }]}
                    className="md:col-span-2"
                >
                    <Input size="large" placeholder="Enter Policy Number" className="rounded-lg font-medium" />
                </Form.Item>
                </div>
            </div>
        </div>

        {/* ================= TRIP DETAILS ================= */}
        <div id="trip" className="scroll-mt-6 mb-12">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center">
                    <Globe size={16} />
                </div>
                Trip Details
            </h3>
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Form.Item
                    name="destination_type"
                    label="Destination Type"
                    rules={[{ required: true, message: "Required" }]}
                    >
                    <Select size="large" placeholder="Select Destination" className="rounded-lg">
                        <Select.Option value="Domestic">Domestic</Select.Option>
                        <Select.Option value="International">International</Select.Option>
                        <Select.Option value="Europe">Europe</Select.Option>
                        <Select.Option value="Asia">Asia</Select.Option>
                        <Select.Option value="USA / Canada">USA / Canada</Select.Option>
                        <Select.Option value="Other">Other</Select.Option>
                    </Select>
                    </Form.Item>

                    <Form.Item
                    name="trip_duration"
                    label="Trip Duration"
                    rules={[{ required: true, message: "Required" }]}
                    >
                    <Input size="large" placeholder="e.g. 15 days" className="rounded-lg" />
                    </Form.Item>

                    <Form.Item
                        name="policy_start_date"
                        label="Trip Start Date"
                        rules={[{ required: true, message: "Required" }]}
                    >
                        <DatePicker size="large" className="w-full rounded-lg" format="DD-MM-YYYY" suffixIcon={<Calendar className="w-4 h-4" />} />
                    </Form.Item>

                    <Form.Item
                        name="policy_end_date"
                        label="Trip End Date"
                        rules={[{ required: true, message: "Required" }]}
                    >
                        <DatePicker size="large" className="w-full rounded-lg" format="DD-MM-YYYY" suffixIcon={<Calendar className="w-4 h-4" />} />
                    </Form.Item>
                </div>
            </div>
        </div>

        {/* ================= COVERAGE ================= */}
        <div id="coverage" className="scroll-mt-6 mb-12">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center">
                    <Info size={16} />
                </div>
                Coverage
            </h3>
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Form.Item
                        name="sum_insured"
                        label="Sum Insured"
                        rules={[{ required: true, message: "Required" }]}
                    >
                         <Input
                            size="large"
                            placeholder="e.g. 50000"
                            type="number"
                            className="rounded-lg"
                            addonBefore={
                              <Form.Item name="sum_currency" noStyle initialValue="USD">
                                <Select style={{ width: 80 }} className="bg-gray-50 border-r-0" variant="borderless">
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
                        name="gross_premium"
                        label="Gross Premium (INR)"
                        rules={[{ required: true, message: "Required" }]}
                    >
                        <Input size="large" prefix="₹" placeholder="0.00" className="rounded-lg font-semibold" type="number" />
                    </Form.Item>
                </div>
            </div>
        </div>

        {/* ================= DOCUMENTS ================= */}
        <div id="documents" className="scroll-mt-6 mb-12">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center">
                    <FileText size={16} />
                </div>
                Documents
            </h3>
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <div className="h-[500px] grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Upload */}
                    <div className="flex flex-col gap-4">
                        <div className="bg-gray-50/50 p-4 rounded-xl border border-gray-200 border-dashed">
                             <Form.Item
                                name="policy_pdf"
                                valuePropName="fileList"
                                getValueFromEvent={(e) => e?.fileList}
                                className="mb-0"
                            >
                                <Upload.Dragger
                                    beforeUpload={() => false}
                                    accept=".pdf"
                                    maxCount={1}
                                    className="!bg-transparent hover:!border-cyan-400 transition-all rounded-lg overflow-hidden"
                                    showUploadList={{ showRemoveIcon: true }}
                                    height={150}
                                >
                                    <div className="flex flex-col items-center justify-center p-4">
                                        <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center mb-2 text-cyan-500">
                                            <UploadIcon size={20} />
                                        </div>
                                        <p className="text-gray-900 font-medium text-sm">Click or drag PDF</p>
                                        <p className="text-gray-400 text-xs mt-1">Max 20MB</p>
                                    </div>
                                </Upload.Dragger>
                            </Form.Item>
                        </div>
                        <div className="bg-cyan-50 p-4 rounded-xl flex-1 border border-cyan-100">
                             <h4 className="font-semibold text-cyan-900 mb-2 text-sm">Travel Policy Tips</h4>
                             <ul className="text-xs text-cyan-700 space-y-2 list-disc pl-4">
                                <li>Check destination and duration match tickets.</li>
                                <li>Ensure Sum Insured currency is correct.</li>
                             </ul>
                        </div>
                    </div>

                    {/* Preview */}
                    <div className="h-full bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                         <Form.Item
                            noStyle
                            shouldUpdate={(prev, curr) => prev.policy_pdf !== curr.policy_pdf}
                        >
                            {({ getFieldValue }) => (
                                <PDFPreview fileList={getFieldValue('policy_pdf')} />
                            )}
                        </Form.Item>
                    </div>
                </div>
            </div>
        </div>

      </Form>
    </PolicyLayout>
  );
};

export default PolicyEditFormTravel;
