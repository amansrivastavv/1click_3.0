"use client";

import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { API_CONFIG, API_ENDPOINTS } from "@/api/config";

type DataPoint = { period: string; value: number };

const API_BASE = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.GET_USER_CHART_DATA}`;

const DrillDownBarChart = () => {
  const [level, setLevel] = useState<"year" | "month" | "day">("year");
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const [yearlyData, setYearlyData] = useState<DataPoint[]>([]);
  const [monthlyData, setMonthlyData] = useState<DataPoint[]>([]);
  const [dailyData, setDailyData] = useState<DataPoint[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (level !== "year") return;

    const fetchYearly = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${API_BASE}?action=signup_stats&group_by=year`
        );
        const result = await response.json();

        if (result.status === "success") {
          const data: DataPoint[] = result.data
            .map((item: { year: string; signups: string | number }) => ({
              period: item.year,
              value: Number(item.signups),
            }))
            .sort(
              (a: DataPoint, b: DataPoint) =>
                parseInt(a.period) - parseInt(b.period)
            );

          setYearlyData(data);
        } else {
          setError("Failed to load yearly data");
        }
      } catch (err) {
        setError("Network error while fetching yearly data");
      } finally {
        setLoading(false);
      }
    };

    fetchYearly();
  }, [level]);

  useEffect(() => {
    if (level !== "month" || !selectedYear) return;

    const fetchMonthly = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${API_BASE}?action=signup_stats&group_by=month&year=${selectedYear}`
        );
        const result = await response.json();

        if (result.status === "success") {
          const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];

          const data: DataPoint[] = result.data
            .map((item: { month: number; signups: string | number }) => ({
              period: monthNames[item.month - 1],
              value: Number(item.signups),
            }))
            .sort(
              (a: DataPoint, b: DataPoint) =>
                monthNames.indexOf(a.period) - monthNames.indexOf(b.period)
            );

          setMonthlyData(data);
        } else {
          setError("Failed to load monthly data");
        }
      } catch (err) {
        setError("Network error while fetching monthly data");
      } finally {
        setLoading(false);
      }
    };

    fetchMonthly();
  }, [level, selectedYear]);

  useEffect(() => {
    if (level !== "day" || !selectedYear || !selectedMonth) return;

    const fetchDaily = async () => {
      setLoading(true);
      setError(null);

      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const monthNumber = monthNames.indexOf(selectedMonth) + 1;

      try {
        const response = await fetch(
          `${API_BASE}?action=signup_stats&group_by=day&year=${selectedYear}&month=${monthNumber}`
        );
        const result = await response.json();

        if (result.status === "success") {
          const data: DataPoint[] = result.data
            .map((item: { day: number; signups: string | number }) => ({
              period: `${item.day}`,
              value: Number(item.signups),
            }))
            .sort(
              (a: DataPoint, b: DataPoint) =>
                parseInt(a.period) - parseInt(b.period)
            );

          setDailyData(data);
        } else {
          setError("Failed to load daily data");
        }
      } catch (err) {
        setError("Network error while fetching daily data");
      } finally {
        setLoading(false);
      }
    };

    fetchDaily();
  }, [level, selectedYear, selectedMonth]);

  const chartData =
    level === "year" ? yearlyData : level === "month" ? monthlyData : dailyData;

  const handleBarClick = (data: any) => {
    if (!data?.period) return;

    if (level === "year") {
      setSelectedYear(data.period);
      setLevel("month");
      setMonthlyData([]);
      setDailyData([]);
    } else if (level === "month") {
      setSelectedMonth(data.period);
      setLevel("day");
      setDailyData([]);
    }
  };

  const handleBack = () => {
    if (level === "day") {
      setLevel("month");
      setSelectedMonth(null);
      setDailyData([]);
    } else if (level === "month") {
      setLevel("year");
      setSelectedYear(null);
      setSelectedMonth(null);
      setMonthlyData([]);
      setDailyData([]);
    }
  };

  const title =
    level === "year"
      ? "Yearly Signups Overview"
      : level === "month"
      ? `Monthly Breakdown – ${selectedYear}`
      : `Daily Signups – ${selectedMonth} ${selectedYear}`;

  return (
    <div className="bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>

      {level !== "year" && (
        <button
          onClick={handleBack}
          className="mb-6 px-5 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 shadow-md hover:shadow-lg transition-all duration-200"
        >
          ← Back
        </button>
      )}

      {loading && (
        <div className="flex items-center justify-center h-96">
          <p className="text-gray-500">Loading data...</p>
        </div>
      )}

      {error && (
        <div className="flex items-center justify-center h-96">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      {!loading && !error && chartData.length === 0 && (
        <div className="flex items-center justify-center h-96">
          <p className="text-gray-500">No data available</p>
        </div>
      )}

      {!loading && !error && chartData.length > 0 && (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis
              dataKey="period"
              tick={{ fontSize: 12 }}
              angle={level === "day" ? -45 : 0}
              textAnchor={level === "day" ? "end" : "middle"}
              height={level === "day" ? 80 : 60}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              formatter={(value: number) => [`${value} signups`, "Signups"]}
              contentStyle={{ backgroundColor: "#fff", borderRadius: "8px" }}
              labelFormatter={() => {
                if (level === "day") {
                  return `${selectedMonth} ${selectedYear}`;
                }
                return "";
              }}
            />
            <Bar
              dataKey="value"
              fill="#3b82f6"
              radius={[8, 8, 0, 0]}
              cursor={level !== "day" ? "pointer" : "default"}
              onClick={level !== "day" ? handleBarClick : undefined}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default DrillDownBarChart;
