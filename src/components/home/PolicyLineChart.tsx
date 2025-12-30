"use client";

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const getTodayLabel = () => {
  const today = new Date();
  return today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const generateYearlyData = () => {
  const years = [];
  for (let year = 1975; year <= 2025; year++) {
    years.push({
      period: year.toString(),
      car: Math.floor(Math.random() * 500),
      health: Math.floor(Math.random() * 400),
      life: Math.floor(Math.random() * 300),
    });
  }
  return years;
};

const allData = {
  day: [
    { period: getTodayLabel(), car: 5, health: 3, life: 7 },
    { period: "Mon", car: 3, health: 2, life: 7 },
    { period: "Tue", car: 3, health: 2, life: 4 },
    { period: "Wed", car: 4, health: 3, life: 3 },
    { period: "Thu", car: 3, health: 2, life: 5 },
    { period: "Fri", car: 5, health: 4, life: 8 },
    { period: "Sat", car: 6, health: 5, life: 2 },
    { period: "Sun", car: 4, health: 3, life: 6 },
  ],
  week: [
    { period: "Week 1", car: 10, health: 6, life: 7 },
    { period: "Week 2", car: 14, health: 9, life: 2 },
    { period: "Week 3", car: 18, health: 12, life: 5 },
    { period: "Week 4", car: 12, health: 8, life: 1 },
  ],
  month: [
    { period: "Jan", car: 40, health: 30, life: 7 },
    { period: "Feb", car: 35, health: 25, life: 7 },
    { period: "Mar", car: 50, health: 40, life: 7 },
    { period: "Apr", car: 45, health: 35, life: 7 },
    { period: "May", car: 60, health: 50, life: 7 },
    { period: "Jun", car: 55, health: 45, life: 7 },
    { period: "Jul", car: 70, health: 60, life: 7 },
    { period: "Aug", car: 65, health: 55, life: 7 },
    { period: "Sep", car: 75, health: 65, life: 7 },
    { period: "Oct", car: 80, health: 70, life: 7 },
    { period: "Nov", car: 85, health: 75, life: 7 },
    { period: "Dec", car: 90, health: 80, life: 7 },
  ],
  year: [
    { period: "2022", car: 240, health: 180, life: 7 },
    { period: "2023", car: 300, health: 210, life: 7 },
    { period: "2024", car: 350, health: 260, life: 7 },
  ],
  fullYear: generateYearlyData(),
};

const PolicyLineChart = () => {
  const [view, setView] = useState<
    "day" | "week" | "month" | "year" | "fullYear"
  >("day");

  const titleMap: Record<typeof view, string> = {
    day: "Daily Trends",
    week: "Weekly Trends",
    month: "Monthly Trends",
    year: "Yearly Trends",
    fullYear: "All Years (1975–2025)",
  };

  return (
    <>
      <h2 className="text-lg font-semibold mb-4">
        Policy Trends – {titleMap[view]}
      </h2>

      <div className="flex justify-center gap-4 flex-wrap mb-10">
        {["day", "week", "month", "year", "fullYear"].map((type) => (
          <button
            key={type}
            onClick={() => setView(type as typeof view)}
            className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-200 ease-in-out shadow-sm ${
              view === type
                ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
          >
            {type === "fullYear"
              ? "All Years"
              : type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className="w-full h-[400px] rounded-xl  bg-white p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={allData[view]}>
            <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
            <XAxis dataKey="period" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#f9fafb",
                borderRadius: "0.5rem",
                border: "1px solid #d1d5db",
              }}
              labelStyle={{ fontWeight: "600", color: "#374151" }}
            />
            <Legend wrapperStyle={{ fontSize: "14px" }} />
            <Line
              type="monotone"
              dataKey="car"
              stroke="#3b82f6"
              strokeWidth={3}
              name="Car Insurance"
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="health"
              stroke="#10b981"
              strokeWidth={3}
              name="Health Insurance"
            />

            <Line
              type="monotone"
              dataKey="life"
              stroke="#c10007"
              strokeWidth={3}
              name="Life Insurance"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default PolicyLineChart;
