"use client";

import React from "react";
import { Form, Input, DatePicker, Select, Upload } from "antd";
import { User, HeartHandshake, Calendar, FileText, Upload as UploadIcon, Info, Hourglass, ShieldCheck, MapPin } from "lucide-react";
import type { FormInstance } from "antd";
import PolicyLayout from "./PolicyLayout";
import PDFPreview from "./PDFPreview";

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
    <PolicyLayout
      title="Edit Life Policy"
      subtitle="Manage life insurance & terms"
      icon={<HeartHandshake className="w-6 h-6" />}
      themeColor="purple"
      sections={[
        { id: "basic", label: "Basic Info", icon: <User className="w-4 h-4" /> },
        { id: "terms", label: "Terms & Dates", icon: <Hourglass className="w-4 h-4" /> },
        { id: "premium", label: "Premium & Sum", icon: <ShieldCheck className="w-4 h-4" /> },
        { id: "address", label: "Address", icon: <MapPin className="w-4 h-4" /> },
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
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
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
                        <Select.Option value="LIC">LIC</Select.Option>
                        <Select.Option value="HDFC Life">HDFC Life</Select.Option>
                        <Select.Option value="SBI Life">SBI Life</Select.Option>
                        <Select.Option value="ICICI Prudential">ICICI Prudential</Select.Option>
                        <Select.Option value="Max Life">Max Life</Select.Option>
                        <Select.Option value="Tata AIA">Tata AIA</Select.Option>
                        <Select.Option value="Bajaj Allianz">Bajaj Allianz</Select.Option>
                        <Select.Option value="Kotak Life">Kotak Life</Select.Option>
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
                    label="Policy Name / Plan"
                    rules={[{ required: true, message: "Required" }]}
                >
                    <Input size="large" placeholder="e.g. Jeevan Anand" className="rounded-lg" />
                </Form.Item>
                
                <Form.Item
                    name="policy_status"
                    label="Policy Status"
                    rules={[{ required: true, message: "Required" }]}
                    >
                    <Select size="large" placeholder="Select status" className="rounded-lg">
                        <Select.Option value="Active">Active</Select.Option>
                        <Select.Option value="Lapsed">Lapsed</Select.Option>
                        <Select.Option value="Paid-up">Paid-up</Select.Option>
                        <Select.Option value="Matured">Matured</Select.Option>
                        <Select.Option value="Surrendered">Surrendered</Select.Option>
                    </Select>
                    </Form.Item>
                </div>
            </div>
        </div>

        {/* ================= TERMS ================= */}
        <div id="terms" className="scroll-mt-6 mb-12">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                    <Hourglass size={16} />
                </div>
                Terms & Dates
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
                    name="policy_term"
                    label="Policy Term (Years)"
                    rules={[{ required: true, message: "Required" }]}
                    >
                    <Input size="large" placeholder="e.g. 20" type="number" className="rounded-lg" />
                    </Form.Item>

                    <Form.Item
                    name="premium_paying_term"
                    label="Premium Paying Term (Years)"
                    rules={[{ required: true, message: "Required" }]}
                    >
                    <Input size="large" placeholder="e.g. 15" type="number" className="rounded-lg" />
                    </Form.Item>
                </div>
            </div>
        </div>

        {/* ================= PREMIUM ================= */}
        <div id="premium" className="scroll-mt-6 mb-12">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                    <ShieldCheck size={16} />
                </div>
                Premium & Sum Assured
            </h3>
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Form.Item
                        name="sum_insured"
                        label="Sum Assured"
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
                </div>
            </div>
        </div>

        {/* ================= ADDRESS ================= */}
        <div id="address" className="scroll-mt-6 mb-12">
             <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                    <MapPin size={16} />
                </div>
                Address
            </h3>
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Form.Item
                        name="pincode"
                        label="Pincode"
                        rules={[{ required: true, message: "Required" }, { pattern: /^[0-9]{6}$/, message: "Invalid Pincode" }]}
                        className="mb-0"
                    >
                        <Input placeholder="110001" maxLength={6} className="rounded-lg" size="large" />
                    </Form.Item>

                    <Form.Item
                        name="address_city"
                        label="Address / City"
                        rules={[{ required: true, message: "Required" }]}
                        className="mb-0"
                    >
                        <Input placeholder="Enter address details" className="rounded-lg" size="large" />
                    </Form.Item>
                </div>
            </div>
        </div>

        {/* ================= DOCUMENTS ================= */}
        <div id="documents" className="scroll-mt-6 mb-12">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
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
                                    className="!bg-transparent hover:!border-purple-400 transition-all rounded-lg overflow-hidden"
                                    showUploadList={{ showRemoveIcon: true }}
                                    height={150}
                                >
                                    <div className="flex flex-col items-center justify-center p-4">
                                        <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center mb-2 text-purple-500">
                                            <UploadIcon size={20} />
                                        </div>
                                        <p className="text-gray-900 font-medium text-sm">Click or drag PDF</p>
                                        <p className="text-gray-400 text-xs mt-1">Max 20MB</p>
                                    </div>
                                </Upload.Dragger>
                            </Form.Item>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-xl flex-1 border border-purple-100">
                             <h4 className="font-semibold text-purple-900 mb-2 text-sm">Notes & Remarks</h4>
                             <Form.Item name="remarks" className="mb-0">
                                <Input.TextArea
                                  placeholder="Any additional info..."
                                  className="rounded-lg border-purple-200 bg-white"
                                  rows={4}
                                />
                              </Form.Item>
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

export default PolicyEditFormLife;
