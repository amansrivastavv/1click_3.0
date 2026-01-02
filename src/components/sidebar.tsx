import React, { useState } from "react";
import { Drawer, Button, Menu } from "antd";
import {
  BankOutlined,
  UserOutlined,
  LogoutOutlined,
  MenuOutlined,
  SafetyOutlined,
  HomeOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { authApi } from "@/api/auth";

const menuItems = [
  {
    key: "/dashboard",
    icon: <HomeOutlined />,
    label: <Link href="/dashboard">Home</Link>,
  },
  // {
  //   key: "/insuranceTypes",
  //   icon: <SafetyOutlined />,
  //   label: <Link href="/insuranceTypes">Insurance Types</Link>,
  // },
  {
    key: "/companies",
    icon: <BankOutlined />,
    label: <Link href="/companies">Companies</Link>,
  },
  {
    key: "/upcomingExpiries",
    icon: <ProfileOutlined />,
    label: <Link href="/upcomingExpiries">Upcoming Expiries</Link>,
  },
  {
    key: "/policies",
    icon: <ProfileOutlined />,
    label: <Link href="/policies">Policies</Link>,
  },
  {
    key: "/users",
    icon: <UserOutlined />,
    label: <Link href="/users">Users</Link>,
  },
  {
    key: "/manage-dashboard",
    icon: <UserOutlined />,
    label: <Link href="/manage-dashboard">Manage Dashboard</Link>,
  },
];

const Sidebar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // const handleLogout = async () => {
  //   setIsLoading(true);
  //   try {
  //     localStorage.removeItem("isAuthenticated");
  //     router.push("/login");
  //   } catch (error) {
  //     console.error("Logout Error:", error);
  //     router.push("/login");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleLogout = async () => {
    try {
      setIsLoading(true);

      await authApi.logout();

      // Redirect manually after clearing tokens
      // router.push("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow-sm border-b border-gray-200">
        <Image
          src={process.env.NEXT_PUBLIC_LOGO_URL || "/1click-logo.png"}
          alt="Logo"
          width={120}
          height={32}
          className="h-8 w-auto"
          onError={() => console.error("Failed to load logo")}
        />
        <Button
          type="text"
          icon={<MenuOutlined className="text-xl" />}
          onClick={() => setDrawerOpen(true)}
          className="flex items-center justify-center"
          disabled={isLoading}
        />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col justify-between w-64 h-screen bg-gradient-to-b from-white to-gray-50 border-r border-gray-200 shadow-sm">
        <div
          className="flex items-center justify-start gap-2 h-20 pl-4 cursor-pointer mx-4"
          onClick={() => router.push("/dashboard")}
        >
          <Image
            src={process.env.NEXT_PUBLIC_LOGO_URL || "/1click-logo.png"}
            alt="Logo"
            width={120}
            height={56}
            onError={() => console.error("Failed to load logo")}
          />
        </div>

        <div className="flex-1 px-2 py-4">
          <Menu
            mode="inline"
            selectedKeys={[router.pathname]}
            items={menuItems}
            style={{ borderRight: "none" }}
          />
        </div>

        <div className="p-4 border-t border-gray-200">
          <Button
            type="default"
            icon={<LogoutOutlined />}
            className="w-full flex items-center gap-2 px-3 py-2 bg-red-600 text-white hover:bg-red-700 hover:text-white transition-all logout-button"
            onClick={handleLogout}
            loading={isLoading}
            disabled={isLoading}
          >
            Logout
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="flex items-start gap-2">
            <Image
              src={process.env.NEXT_PUBLIC_LOGO_URL || "/1click-logo.png"}
              alt="Logo"
              width={120}
              height={40}
              className="h-10 w-auto hidden md:block"
              onError={() => console.error("Failed to load logo")}
            />
          </div>
        }
        placement="left"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        className="md:hidden"
      >
        <div className="px-2 py-4">
          <Menu
            mode="inline"
            selectedKeys={[router.pathname]}
            items={menuItems}
            className="custom-menu"
          />
        </div>
        <div className="p-4 border-t border-gray-200">
          <Button
            type="default"
            icon={<LogoutOutlined />}
            className="w-full flex items-center gap-2 px-3 py-2 bg-red-500 text-white hover:bg-red-600 hover:text-white transition-all logout-button"
            onClick={handleLogout}
            loading={isLoading}
            disabled={isLoading}
          >
            Logout
          </Button>
        </div>
      </Drawer>

      <style jsx global>
        {`
          .custom-menu .ant-menu-item {
            border-radius: 10px;
            margin: 6px 0;
            padding: 10px 16px !important;
            display: flex;
            align-items: center;
            font-weight: 500;
            transition: all 0.3s ease;
          }
          .custom-menu .ant-menu-title-content {
            display: flex;
            align-items: center;
          }
          .custom-menu .ant-menu-item:hover {
            background: #f5f7ff !important;
            color: #1a5fcc !important;
          }
          .custom-menu .ant-menu-item-selected {
            background: #e6f0ff !important;
            color: #1a5fcc !important;
            font-weight: 600;
          }
          .custom-menu .ant-menu-item-selected .anticon {
            color: #1a5fcc !important;
          }
          .logout-button.ant-btn {
            background: #dc2626 !important; /* Tailwind's bg-red-600 */
            color: #ffffff !important;
            border-color: #dc2626 !important;
          }
          .logout-button.ant-btn:hover {
            background: #b91c1c !important; /* Tailwind's bg-red-700 */
            color: #ffffff !important;
            border-color: #b91c1c !important;
          }
          .logout-button.ant-btn[disabled] {
            background: #fca5a5 !important; /* Tailwind's bg-red-300 for disabled */
            color: #ffffff !important;
            border-color: #fca5a5 !important;
          }
        `}
      </style>
    </>
  );
};

export default Sidebar;
