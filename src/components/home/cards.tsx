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
        max-w-sm 
        sm:max-w-md 
        lg:max-w-lg 
        xl:max-w-xl 
        2xl:max-w-2xl
        shadow-md 
        rounded-2xl 
        border-none 
        bg-white 
        hover:shadow-lg 
        transition-all 
        duration-300
      "
      bodyStyle={{ padding: "1.2rem 1.5rem" }}
    >
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Icon Circle */}
        <div
          className="
            flex 
            items-center 
            justify-center 
            rounded-full 
            aspect-square 
            w-12 
            sm:w-14 
            md:w-16
            text-white
          "
          style={{ backgroundColor: color || "#edf1f5" }}
        >
          <div className="text-xl sm:text-2xl md:text-3xl">{icon}</div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <Text
            className="
              text-gray-500 
              text-xs 
              sm:text-sm 
              md:text-base 
              font-medium
            "
          >
            {title}
          </Text>
          <Title
            level={4}
            className="
              !m-0 
              text-lg 
              sm:text-xl 
              md:text-2xl 
              font-semibold 
              text-[#1F2143]
            "
          >
            {value}
          </Title>
        </div>
      </div>
    </Card>
  );
};

export default Cards;
