"use client";

import React, { useState } from "react";
import { Dropdown, MenuProps } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { authApi } from "@/api/auth";

const Navbar: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      setIsLoading(true);

      await authApi.logout();

      // Clear tokens from localstorage
      localStorage.removeItem("token");

      // Redirect to login
      // router.push("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const menuItems: MenuProps["items"] = [
    {
      key: "logout",
      label: (
        <div
          onClick={handleLogout}
          className={`flex items-center justify-center w-full cursor-pointer ${
            isLoading ? "opacity-50 pointer-events-none" : "text-red-600"
          }`}
        >
          <LogoutOutlined className="mr-2" />
          {isLoading ? "Logging out..." : "Logout"}
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-white min-h-[80px] flex items-center justify-end px-10">
      <Dropdown
        menu={{ items: menuItems }}
        trigger={["click"]}
        placement="bottomRight"
        overlayClassName="rounded-lg shadow-lg"
      >
        <div className="flex items-center gap-2 cursor-pointer px-2 py-1 border border-gray-300 rounded-full hover:bg-[#3399FF] hover:text-white group">
          {/* Settings Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#2196f3] group-hover:text-white"
          >
            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
          </svg>
        </div>
      </Dropdown>
    </div>
  );
};

export default Navbar;
