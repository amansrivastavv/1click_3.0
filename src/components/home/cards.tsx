"use client";
import React from "react";

interface SummaryCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  color?: string;
}

const Cards: React.FC<SummaryCardProps> = ({ icon, title, value, color }) => {
  return (
    <div
      className="
        group
        relative
        bg-white
        rounded-2xl
        p-6
        shadow-sm
        border
        border-gray-100
        hover:shadow-xl
        hover:border-transparent
        transition-all
        duration-300
        transform
        hover:-translate-y-1
        overflow-hidden
      "
    >
      {/* Decorative Background Blob */}
      <div
        className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full opacity-[0.08] transition-all duration-500 group-hover:scale-150"
        style={{ backgroundColor: color || "#3b82f6" }}
      />

      <div className="flex items-center justify-between relative z-10">
        <div className="flex flex-col">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">
            {title}
          </p>
          <h3 className="text-3xl font-bold text-gray-800 tracking-tight">
            {value}
          </h3>
        </div>

        <div
          className="
            flex
            items-center
            justify-center
            rounded-xl
            w-14
            h-14
            shadow-inner
            transition-transform
            duration-300
            group-hover:scale-110
            group-hover:rotate-3
          "
          style={{
            backgroundColor: color ? `${color}15` : "#f3f4f6",
            color: color || "#6b7280",
          }}
        >
          <div className="text-2xl">{icon}</div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ease-out"
        style={{ backgroundColor: color || "#3b82f6" }}
      />
    </div>
  );
};

export default Cards;
