import React from "react";
import { Modal } from "antd";

interface CustomModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  onSubmit?: () => void;
  children: React.ReactNode;
  confirmLoading?: boolean;
}

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  title,
  onClose,
  onSubmit,
  children,
  confirmLoading = false,
}) => {
  return (
    <Modal
      title={title}
      centered
      open={open}
      onOk={onSubmit}
      onCancel={onClose}
      confirmLoading={confirmLoading}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
