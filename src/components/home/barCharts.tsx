"use client";

import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Spin, Empty, Select } from "antd";
import toast from "react-hot-toast";
import api from "@/utils/axios";
import { API_CONFIG, API_ENDPOINTS } from "@/api/config";
import type { GetChartDataResponse } from "@/api/types";

const { Option } = Select;

export type BiaxialData = {
  name: string;
  pv: number;
};

interface ChartYearData {
  year: string;
  months: {
    [key: string]: { days: { day: number; count: number }[] };
  };
}

interface BiaxialBarChartProps {
  width?: string | number;
  height?: string | number;
}

const BiaxialBarChartWithApi: React.FC<BiaxialBarChartProps> = ({
  width = "100%",
  height = 350,
}) => {
  const [data, setData] = useState<BiaxialData[]>([]);
  const [loading, setLoading] = useState(true);
  const [years, setYears] = useState<ChartYearData[]>([]);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [months, setMonths] = useState<string[]>([]);

  const fetchChartData = async () => {
    try {
      setLoading(true);
      const res = await api.get<GetChartDataResponse>(
        `${API_CONFIG.BASE_URL}${API_ENDPOINTS.GETBAR_CHART}`
      );

      if (res.data.status === "success" && res.data.data.length > 0) {
        const yearData = res.data.data as ChartYearData[];
        console.log("Fetched chart data:", yearData);
        setYears(yearData);

        const latestYearObj = yearData[yearData.length - 1];
        const latestYearStr = String(latestYearObj.year);
        const monthNames = Object.keys(latestYearObj.months).sort();
        const latestMonth = monthNames[monthNames.length - 1];

        setSelectedYear(latestYearStr);
        setSelectedMonth(latestMonth);
        setMonths(monthNames);

        const monthData = latestYearObj.months[latestMonth];
        const chartData: BiaxialData[] = monthData.days
          .map((day) => ({
            name: String(day.day),
            pv: Number(day.count) || 0,
          }))
          .sort((a, b) => Number(a.name) - Number(b.name));

        setData(chartData);
      } else {
        toast.error("No chart data available");
        setData([]);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch chart data");
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChartData();
  }, []);

  useEffect(() => {
    if (selectedYear && selectedMonth && years.length > 0) {
      const yearData = years.find((y) => y.year === selectedYear);
      if (yearData && yearData.months[selectedMonth]) {
        const monthData = yearData.months[selectedMonth];
        const chartData: BiaxialData[] = monthData.days
          .map((day) => ({
            name: String(day.day),
            pv: Number(day.count) || 0,
          }))
          .sort((a, b) => Number(a.name) - Number(b.name));
        setData(chartData);
      } else {
        setData([]);
      }
    }
  }, [selectedYear, selectedMonth, years]);

  useEffect(() => {
    if (selectedYear && years.length > 0) {
      const yearData = years.find((y) => y.year === selectedYear);
      if (yearData) {
        const monthNames = Object.keys(yearData.months).sort();
        setMonths(monthNames);
        const latestMonth = monthNames[monthNames.length - 1] || null;
        setSelectedMonth(latestMonth);
      } else {
        setMonths([]);
        setSelectedMonth(null);
        setData([]);
      }
    }
  }, [selectedYear, years]);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload?.[0]) {
      return (
        <div className="bg-white px-4 py-2 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-sm font-medium text-gray-900">
            Day {payload[0].payload.name}
          </p>
          <p className="text-sm text-blue-600 font-semibold mt-1">
            {payload[0].value.toLocaleString()} Policies
          </p>
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center" style={{ height }}>
        <Spin size="large" />
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="flex justify-center items-center" style={{ height }}>
        <Empty description="No data available" />
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <div className="flex gap-4 mb-4">
        <Select
          value={selectedYear}
          onChange={(value) => setSelectedYear(value)}
          placeholder="Select Year"
          style={{ width: 120 }}
          allowClear={false}
        >
          {years.map((year) => (
            <Option key={year.year} value={year.year}>
              {year.year}
            </Option>
          ))}
        </Select>
        <Select
          value={selectedMonth}
          onChange={(value) => setSelectedMonth(value)}
          placeholder="Select Month"
          style={{ width: 140 }}
          disabled={!selectedYear || months.length === 0}
        >
          {months.map((month) => (
            <Option key={month} value={month}>
              {new Date(`2020-${month}-01`).toLocaleString("default", {
                month: "long",
              })}
            </Option>
          ))}
        </Select>
      </div>

      <ResponsiveContainer width={width} height={height}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="name"
            label={{
              value: "Day of Month",
              position: "insideBottom",
              offset: -10,
              style: { fontWeight: 600, fill: "#374151" },
            }}
            tick={{ fontSize: 12, fill: "#6b7280" }}
            stroke="#9ca3af"
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            label={{
              value: "Number of Policies",
              angle: -90,
              position: "insideLeft",
              style: { fontWeight: 600, fill: "#374151" },
            }}
            tick={{ fontSize: 12, fill: "#6b7280" }}
            stroke="#9ca3af"
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(59, 130, 246, 0.05)" }}
          />
          <Bar
            yAxisId="left"
            dataKey="pv"
            fill="#3b82f6"
            radius={[6, 6, 0, 0]}
            maxBarSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BiaxialBarChartWithApi;
