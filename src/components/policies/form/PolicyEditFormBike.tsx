"use client";

import React from "react";
import { Form, Input, DatePicker, Select, Upload } from "antd";
import { User, Bike, Calendar, FileText, Upload as UploadIcon, ShieldCheck } from "lucide-react";
import type { FormInstance } from "antd";
import PolicyLayout from "./PolicyLayout";
import PDFPreview from "./PDFPreview";

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
    <PolicyLayout
      title="Edit Bike Policy"
      subtitle="Update two-wheeler details"
      icon={<Bike className="w-6 h-6" />}
      themeColor="blue"
      sections={[
        { id: "basic", label: "Basic Info", icon: <User className="w-4 h-4" /> },
        { id: "vehicle", label: "Bike Details", icon: <Bike className="w-4 h-4" /> },
        { id: "coverage", label: "Coverage & Premium", icon: <ShieldCheck className="w-4 h-4" /> },
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
                 <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
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

        {/* ================= BIKE DETAILS ================= */}
        <div id="vehicle" className="scroll-mt-6 mb-12">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Bike size={16} />
                </div>
                Bike Details
            </h3>
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Form.Item
                    name="vehicle_no"
                    label="Vehicle Registration No"
                    rules={[{ required: true, message: "Required" }]}
                    >
                    <Input size="large" placeholder="e.g. MH 04 XY 9876" className="rounded-lg uppercase font-semibold text-gray-700" />
                    </Form.Item>

                    <Form.Item
                    name="make_model"
                    label="Make & Model"
                    rules={[{ required: true, message: "Required" }]}
                    >
                    <Input size="large" placeholder="e.g. Royal Enfield Classic 350" className="rounded-lg" />
                    </Form.Item>

                    <Form.Item
                    name="mfg_year"
                    label="Manufacturing Year"
                    >
                    <Input size="large" placeholder="YYYY" className="rounded-lg" />
                    </Form.Item>
                </div>
            </div>
        </div>

        {/* ================= COVERAGE ================= */}
        <div id="coverage" className="scroll-mt-6 mb-12">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <ShieldCheck size={16} />
                </div>
                Coverage & Premium
            </h3>
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Form.Item
                        name="policy_start_date"
                        label="Policy Start Date"
                        rules={[{ required: true, message: "Required" }]}
                    >
                        <DatePicker size="large" className="w-full rounded-lg" format="DD-MM-YYYY" suffixIcon={<Calendar className="w-4 h-4" />} />
                    </Form.Item>

                    <Form.Item
                        name="policy_end_date"
                        label="Policy End Date"
                        rules={[{ required: true, message: "Required" }]}
                    >
                        <DatePicker size="large" className="w-full rounded-lg" format="DD-MM-YYYY" suffixIcon={<Calendar className="w-4 h-4" />} />
                    </Form.Item>

                    <Form.Item
                        name="idv"
                        label="IDV (Sum Insured)"
                    >
                        <Input size="large" prefix="₹" placeholder="0.00" className="rounded-lg" type="number" />
                    </Form.Item>

                    <Form.Item
                        name="gross_premium"
                        label="Gross Premium"
                        rules={[{ required: true, message: "Required" }]}
                    >
                        <Input size="large" prefix="₹" placeholder="0.00" className="rounded-lg font-semibold" type="number" />
                    </Form.Item>

                    <Form.Item
                        name="ncb"
                        label="NCB %"
                    >
                        <Select size="large" placeholder="0%" className="rounded-lg">
                        <Select.Option value="0">0%</Select.Option>
                        <Select.Option value="20">20%</Select.Option>
                        <Select.Option value="25">25%</Select.Option>
                        <Select.Option value="35">35%</Select.Option>
                        <Select.Option value="45">45%</Select.Option>
                        <Select.Option value="50">50%</Select.Option>
                        </Select>
                    </Form.Item>
                </div>
            </div>
        </div>

        {/* ================= DOCUMENTS ================= */}
        <div id="documents" className="scroll-mt-6 mb-12">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
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
                                    className="!bg-transparent hover:!border-blue-400 transition-all rounded-lg overflow-hidden"
                                    showUploadList={{ showRemoveIcon: true }}
                                    height={150}
                                >
                                    <div className="flex flex-col items-center justify-center p-4">
                                        <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center mb-2 text-blue-500">
                                            <UploadIcon size={20} />
                                        </div>
                                        <p className="text-gray-900 font-medium text-sm">Click or drag PDF</p>
                                        <p className="text-gray-400 text-xs mt-1">Max 20MB</p>
                                    </div>
                                </Upload.Dragger>
                            </Form.Item>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-xl flex-1 border border-blue-100">
                             <h4 className="font-semibold text-blue-900 mb-2 text-sm">Two-Wheeler Policy Tips</h4>
                             <p className="text-xs text-blue-700 leading-relaxed">
                                Upload the policy schedule page showing the Engine No. and Chassis No. clearly.
                             </p>
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

export default PolicyEditFormBike;
