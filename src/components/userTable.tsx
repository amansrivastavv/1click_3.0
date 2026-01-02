import React, { useState, useEffect } from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import axios from "axios";
import { API_CONFIG, API_ENDPOINTS } from "@/api/config";

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

interface UserDataType {
  key: React.Key;
  id: string;
  full_name: string;
  email: string;
  mobile: string;
  dob: string | null;
  gender: string | null;
  state_id: string | null;
}

const columns: TableColumnsType<UserDataType> = [
  { title: "Name", dataIndex: "full_name" },
  { title: "Email", dataIndex: "email" },
  { title: "Mobile", dataIndex: "mobile" },
  { title: "DOB", dataIndex: "dob" },
  { title: "Gender", dataIndex: "gender" },
];

const UserTable: React.FC = () => {
  const [dataSource, setDataSource] = useState<UserDataType[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_CONFIG.BASE_URL}${API_ENDPOINTS.GET_USERS_DATA}`
        );
        const result = response.data;

        if (result.status === "success") {
          const formattedData = result.data.map((item: any) => ({
            key: item.id,
            ...item,
          }));
          setDataSource(formattedData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<UserDataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          const newSelectedRowKeys = changeableRowKeys.filter(
            (_, index) => index % 2 === 0
          );
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          const newSelectedRowKeys = changeableRowKeys.filter(
            (_, index) => index % 2 !== 0
          );
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Users</h1>
      </div>
      <Table<UserDataType>
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
      />
    </>
  );
};

export default UserTable;
