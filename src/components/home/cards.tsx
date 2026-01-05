"use client";
import React from "react";
import { Card, Typography } from "antd";

const { Title, Text } = Typography;

interface SummaryCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  color?: string;
}

const Cards: React.FC<SummaryCardProps> = ({ icon, title, value, color }) => {
  return (
    <Card
      className="
        w-full
        shadow-md
        rounded-2xl
        border-none
        bg-white
        hover:shadow-lg
        transition-all
        duration-300
      "
      bodyStyle={{ padding: 0 }}
    >
      <div className="flex items-center gap-4 p-4 sm:p-5 md:p-6">
        {/* Icon */}
        <div
          className="
            flex
            items-center
            justify-center
            rounded-full
            w-12
            h-12
            sm:w-14
            sm:h-14
            md:w-16
            md:h-16
            text-white
            shrink-0
          "
          style={{ backgroundColor: color || "#edf1f5" }}
        >
          <div className="text-xl sm:text-2xl md:text-3xl">
            {icon}
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <Text className="text-gray-500 text-xs sm:text-sm md:text-base font-medium leading-tight">
            {title}
          </Text>
          <Title
            level={4}
            className="!m-0 mt-1 text-lg sm:text-xl md:text-2xl font-semibold text-[#1F2143]"
          >
            {value}
          </Title>
        </div>
      </div>
    </Card>
  );
};

export default Cards;
