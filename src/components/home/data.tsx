"use client";

import React, { useState } from "react";
import { Drawer } from "antd";
import "antd/dist/reset.css";

import { API_CONFIG, API_ENDPOINTS } from "@/api/config";

type ReadCsvResponse = {
  status: boolean;
  sheet_id: string;
  total_records: number;
  inserted_records: number;
  duplicate_count: number;
  duplicate_policy_numbers: string[];
};

type SyncCsvResponse = {
  status: boolean;
  insurers: {
    inserted: string[];
    existing: string[];
    failed: string[];
  };
  users: {
    inserted: string[];
    existing: string[];
    skipped: string[];
    failed: string[];
  };
  policies: {
    inserted: string[];
    skipped: string[];
    failed: string[];
  };
};

const DEFAULT_READ_DATA: ReadCsvResponse = {
  status: false,
  sheet_id: "NA",
  total_records: 0,
  inserted_records: 0,
  duplicate_count: 0,
  duplicate_policy_numbers: [],
};

const DEFAULT_SYNC_DATA: SyncCsvResponse = {
  status: false,
  insurers: {
    inserted: [],
    existing: [],
    failed: [],
  },
  users: {
    inserted: [],
    existing: [],
    skipped: [],
    failed: [],
  },
  policies: {
    inserted: [],
    skipped: [],
    failed: [],
  },
};

const AdminCsvSync: React.FC = () => {
  const [readResult, setReadResult] =
    useState<ReadCsvResponse>(DEFAULT_READ_DATA);
  const [syncResult, setSyncResult] =
    useState<SyncCsvResponse>(DEFAULT_SYNC_DATA);
  const [loadingRead, setLoadingRead] = useState(false);
  const [loadingSync, setLoadingSync] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showDrawer, setShowDrawer] = useState(false);

  const readCsv = async () => {
    setLoadingRead(true);
    setError(null);

    try {
      const res = await fetch(
        `${API_CONFIG.BASE_URL}${API_ENDPOINTS.GET_read_csv}`
      );
      const data: ReadCsvResponse = await res.json();
      setReadResult(data);
    } catch {
      setError("Failed to read CSV");
    } finally {
      setLoadingRead(false);
    }
  };

  const syncCsv = async () => {
    setLoadingSync(true);
    setError(null);

    try {
      const res = await fetch(
        `${API_CONFIG.BASE_URL}${API_ENDPOINTS.GET_sync_csv}`
      );
      const data: SyncCsvResponse = await res.json();
      setSyncResult(data);
    } catch {
      setError("Failed to sync CSV");
    } finally {
      setLoadingSync(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6  bg-gradient-to-b from-gray-100 to-gray-50 rounded-xl shadow-lg">
      <div className="flex gap-4 mb-6">
        <button
          onClick={readCsv}
          disabled={loadingRead}
          className="px-6 py-2 bg-blue-600 !text-[#fff] font-semibold rounded-lg shadow hover:bg-blue-700  transition"
        >
          {loadingRead ? "Reading..." : "Read CSV"}
        </button>

        <button
          onClick={syncCsv}
          disabled={loadingSync}
          className="px-6 py-2 bg-green-600 !text-white font-semibold rounded-lg shadow hover:bg-green-700 disabled:opacity-50 transition"
        >
          {loadingSync ? "Syncing..." : "Sync CSV"}
        </button>
      </div>

      {error && <p className="text-red-600 font-medium mb-4">{error}</p>}

      <div className="border-l-8 border-blue-500 p-4 rounded mb-6 bg-blue-50 shadow-sm hover:shadow-md transition">
        <h2 className="text-lg font-bold mb-3 text-blue-800">
          Read CSV Result
        </h2>

        <p>
          Sheet ID: <b>{readResult.sheet_id}</b>
        </p>
        <p>
          Total Records: <b>{readResult.total_records}</b>
        </p>
        <p>
          Inserted Records: <b>{readResult.inserted_records}</b>
        </p>
        <p>
          Duplicate Count: <b>{readResult.duplicate_count}</b>
        </p>

        {readResult.duplicate_count > 0 && (
          <button
            onClick={() => setShowDrawer(true)}
            className="mt-3 px-4 py-1 bg-yellow-500 !text-white rounded-lg shadow hover:bg-yellow-600 transition"
          >
            View Duplicate Policies
          </button>
        )}
      </div>

      <div className="border-l-8 border-green-500 p-4 rounded bg-green-50 shadow-sm hover:shadow-md transition">
        <h2 className="text-lg font-bold mb-3 text-green-800">
          Sync CSV Result
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ResultBlock
            title="Insurers"
            data={syncResult.insurers}
            color="green"
          />
          <ResultBlock title="Users" data={syncResult.users} color="teal" />
          <ResultBlock
            title="Policies"
            data={syncResult.policies}
            color="purple"
          />
        </div>
      </div>

      <Drawer
        title="Duplicate Policy Numbers"
        placement="right"
        width={420}
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        maskStyle={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0,0,0,0.25)",
        }}
      >
        {readResult.duplicate_policy_numbers.length ? (
          <ol className="list-decimal list-inside space-y-2 text-red-600 font-medium">
            {readResult.duplicate_policy_numbers.map((policy) => (
              <li key={policy}>{policy}</li>
            ))}
          </ol>
        ) : (
          <p className="text-gray-500">No duplicate policies</p>
        )}
      </Drawer>
    </div>
  );
};

const ResultBlock = ({ title, data, color }: any) => {
  const borderColor =
    color === "green"
      ? "border-green-400"
      : color === "teal"
      ? "border-teal-400"
      : "border-purple-400";

  const bgColor =
    color === "green"
      ? "bg-green-50"
      : color === "teal"
      ? "bg-teal-50"
      : "bg-purple-50";

  const textColor =
    color === "green"
      ? "text-green-800"
      : color === "teal"
      ? "text-teal-800"
      : "text-purple-800";

  return (
    <div
      className={`border-l-4 ${borderColor} p-3 rounded ${bgColor} shadow-sm hover:shadow-md transition`}
    >
      <h3 className={`font-semibold mb-2 ${textColor}`}>{title}</h3>
      <p>Inserted: {data.inserted.length || 0}</p>
      <p>Existing: {data.existing?.length || 0}</p>
      <p>Skipped: {data.skipped?.length || 0}</p>
      <p>Failed: {data.failed.length || 0}</p>
    </div>
  );
};

export default AdminCsvSync;
