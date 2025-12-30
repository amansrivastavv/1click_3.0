import React from "react";
import { Card, List } from "antd";

export interface RenewalItem {
  id: number;
  name: string;
  user: string;
  daysLeft: number;
  renewalDate: string;
}

interface RenewalListProps {
  title?: string;
  data: RenewalItem[];
}

const RenewalList: React.FC<RenewalListProps> = ({
  title = "Renewal in 30 Days",
  data,
}) => {
  return (
    <Card title={title} className="mt-6">
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.name}
              description={`Customer: ${item.user}`}
            />
            <div>{item.daysLeft} days left</div>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default RenewalList;
