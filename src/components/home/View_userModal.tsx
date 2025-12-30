"use client";

import React from "react";
import { Modal, Descriptions, Image } from "antd";
import { UpcomingExpiryPolicy } from "@/api/types";
import { API_CONFIG } from "@/api/config";
interface PolicyDetailsModalProps {
  visible: boolean;
  onClose: () => void;
  policy?: UpcomingExpiryPolicy;
}

const PolicyDetailsModal: React.FC<PolicyDetailsModalProps> = ({
  visible,
  onClose,
  policy,
}) => {
  if (!policy) return null;

  return (
    <Modal
      title={`Policy Details - ${policy.policy_number}`}
      open={visible}
      onCancel={onClose}
      footer={null}
      width={1024}
    >
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Policy Holder">
          {policy.policy_holder_name}
        </Descriptions.Item>
        <Descriptions.Item label="Policy Number">
          {policy.policy_number}
        </Descriptions.Item>
        <Descriptions.Item label="Insurance Type">
          {policy.insurance_type}
        </Descriptions.Item>
        <Descriptions.Item label="Insurance Company">
          {policy.insurance_company}
        </Descriptions.Item>
        <Descriptions.Item label="Details">{policy.details}</Descriptions.Item>
        <Descriptions.Item label="Sum Insured">
          {policy.sum_insured_amount}
        </Descriptions.Item>
        <Descriptions.Item label="Premium Amount">
          {policy.premium_amount}
        </Descriptions.Item>
        <Descriptions.Item label="Payment Cycle">
          {policy.payment_cycle}
        </Descriptions.Item>
        <Descriptions.Item label="Duration (Years)">
          {policy.duration}
        </Descriptions.Item>
        <Descriptions.Item label="Start Date">
          {policy.start_date}
        </Descriptions.Item>
        <Descriptions.Item label="End Date">
          {policy.end_date}
        </Descriptions.Item>
        <Descriptions.Item label="Next Payment Date">
          {policy.next_payment_date}
        </Descriptions.Item>
        <Descriptions.Item label="Notes">
          {policy.notes || "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Company Logo">
          {policy.company_logo && (
            <Image
              width={40}
              src={`${API_CONFIG.BASE_URL}/uploads/${policy.company_logo}`}
              alt={policy.insurance_company}
            />
          )}
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default PolicyDetailsModal;
