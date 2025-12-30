"use client";

import React, { useEffect, useState } from "react";
import { Modal, Button, Input, Switch, Form, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile } from "antd/es/upload/interface";
import { Company } from "@/api/types";

interface CompanyModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (company: Company, file?: File) => void;
  editingCompany: Company | null;
}

const CompanyModal: React.FC<CompanyModalProps> = ({
  open,
  onClose,
  onSave,
  editingCompany,
}) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (editingCompany) {
      form.setFieldsValue({
        name: editingCompany.name,
        status: editingCompany.status === "Active",
      });
      if (editingCompany.image_url) {
        setFileList([
          {
            uid: "-1",
            name: "logo.png",
            status: "done",
            url: editingCompany.image_url,
          },
        ]);
      }
    } else {
      form.resetFields();
      form.setFieldsValue({ status: true });
      setFileList([]);
    }
  }, [editingCompany, form, open]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setSaving(true);

      const file = fileList[0]?.originFileObj as File;

      const company: Company = {
        id: editingCompany?.id || "-1",
        name: values.name,
        status: values.status ? "Active" : "Inactive",
        logo: file,
        image_url: editingCompany?.image_url || "",
      };

      await onSave(company, file); // call parent save function
      form.resetFields();
      setFileList([]);
    } catch (err) {
      message.error("Please fill all required fields correctly.");
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleUploadChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setFileList(fileList);
  };

  return (
    <Modal
      title={editingCompany ? "Edit Company" : "Add New Company"}
      open={open}
      onCancel={onClose}
      onOk={handleSubmit}
      confirmLoading={saving}
      destroyOnClose
      centered
      okText={editingCompany ? "Update" : "Submit"}
    >
      <Form layout="vertical" form={form}>
        <Form.Item
          label="Company Name"
          name="name"
          rules={[{ required: true, message: "Please enter company name" }]}
        >
          <Input placeholder="Enter company name" />
        </Form.Item>

        <Form.Item label="Logo">
          <Upload
            listType="picture"
            fileList={fileList}
            beforeUpload={() => false} // prevent auto upload
            onChange={handleUploadChange}
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Select Logo</Button>
          </Upload>
        </Form.Item>

        <Form.Item label="Status" name="status" valuePropName="checked">
          <Switch checkedChildren="Active" unCheckedChildren="Inactive" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CompanyModal;
