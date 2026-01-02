"use client";

import React from "react";
import { Form, Input, DatePicker, Select, Upload } from "antd";
import { User, Activity, Calendar, FileText, Upload as UploadIcon, Users, HeartPulse } from "lucide-react";
import type { FormInstance } from "antd";
import PolicyLayout from "./PolicyLayout";
import PDFPreview from "./PDFPreview";

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
    <PolicyLayout
      title="Edit Health Policy"
      subtitle="Manage health coverage & members"
      icon={<Activity className="w-6 h-6" />}
      themeColor="green"
      sections={[
        { id: "basic", label: "Basic Info", icon: <User className="w-4 h-4" /> },
        { id: "details", label: "Policy Details", icon: <HeartPulse className="w-4 h-4" /> },
        { id: "coverage", label: "Coverage & Members", icon: <Users className="w-4 h-4" /> },
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
                <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
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
                        <Select.Option value="Star Health">Star Health</Select.Option>
                        <Select.Option value="Care Health">Care Health</Select.Option>
                        <Select.Option value="Niva Bupa">Niva Bupa</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="policy_no"
                    label="Policy Number"
                    rules={[{ required: true, message: "Required" }]}
                >
                    <Input size="large" placeholder="Enter Policy Number" className="rounded-lg font-medium" />
                </Form.Item>

                <Form.Item
                    name="policy_name"
                    label="Policy Name / Product"
                    rules={[{ required: true, message: "Required" }]}
                >
                    <Input size="large" placeholder="e.g. Optima Restore" className="rounded-lg" />
                </Form.Item>
                </div>
            </div>
        </div>

        {/* ================= POLICY DETAILS ================= */}
        <div id="details" className="scroll-mt-6 mb-12">
             <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                    <HeartPulse size={16} />
                </div>
                Policy Details
            </h3>
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Form.Item
                    name="type_of_business"
                    label="Type of Business"
                    rules={[{ required: true, message: "Required" }]}
                >
                    <Select size="large" placeholder="Select Type" className="rounded-lg">
                    <Select.Option value="New">New Policy</Select.Option>
                    <Select.Option value="Renewal">Renewal</Select.Option>
                    <Select.Option value="Port">Portability</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="plan_type"
                    label="Plan Type"
                    rules={[{ required: true, message: "Required" }]}
                >
                    <Select size="large" placeholder="Select Plan Type" className="rounded-lg">
                    <Select.Option value="Family Floater">Family Floater</Select.Option>
                    <Select.Option value="Individual">Individual</Select.Option>
                    <Select.Option value="Multi Individual">Multi Individual</Select.Option>
                    <Select.Option value="Top Up">Top Up</Select.Option>
                    <Select.Option value="Super Top Up">Super Top Up</Select.Option>
                    </Select>
                </Form.Item>

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
                    name="tpa"
                    label="TPA (Third Party Administrator)"
                    >
                    <Input size="large" placeholder="e.g. Medi Assist" className="rounded-lg" />
                </Form.Item>
                </div>
            </div>
        </div>

        {/* ================= COVERAGE ================= */}
        <div id="coverage" className="scroll-mt-6 mb-12">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                    <Users size={16} />
                </div>
                Coverage & Members
            </h3>
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Form.Item
                    name="sum_insured"
                    label="Sum Insured"
                    rules={[{ required: true, message: "Required" }]}
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
                    name="number_of_insured"
                    label="Number of Insured Members"
                    rules={[{ required: true, message: "Required" }]}
                >
                    <Input
                    size="large"
                    placeholder="e.g. 4"
                    type="number"
                    min="1"
                    className="rounded-lg"
                    suffix={<Users className="w-4 h-4 text-gray-400" />}
                    />
                </Form.Item>
                </div>
            </div>
        </div>

        {/* ================= DOCUMENTS ================= */}
        <div id="documents" className="scroll-mt-6 mb-12">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
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
                                    className="!bg-transparent hover:!border-green-400 transition-all rounded-lg overflow-hidden"
                                    showUploadList={{ showRemoveIcon: true }}
                                    height={150}
                                >
                                    <div className="flex flex-col items-center justify-center p-4">
                                        <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center mb-2 text-green-500">
                                            <UploadIcon size={20} />
                                        </div>
                                        <p className="text-gray-900 font-medium text-sm">Click or drag PDF</p>
                                        <p className="text-gray-400 text-xs mt-1">Max 20MB</p>
                                    </div>
                                </Upload.Dragger>
                            </Form.Item>
                        </div>
                        <div className="bg-green-50 p-4 rounded-xl flex-1 border border-green-100">
                             <h4 className="font-semibold text-green-900 mb-2 text-sm">Health Policy Tips</h4>
                             <p className="text-xs text-green-700 leading-relaxed">
                                Ensure the member details in the policy match exactly with the uploaded document to avoid ID card issuance delays.
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

export default PolicyEditFormHealth;
