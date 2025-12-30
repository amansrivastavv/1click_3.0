import { storage } from "../api/storage";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { Toaster, ToastOptions } from "react-hot-toast";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const globalToastOptions: ToastOptions = {
    position: "top-center",
    duration: 3000,
    style: {
      borderRadius: "12px",
      background: "#8155ff",
      color: "#FFFFFF",
      fontWeight: 500,
      fontSize: "14px",
      padding: "8px 16px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      backdropFilter: "blur(8px)",
    },
    iconTheme: {
      primary: "#FFFFFF",
      secondary: "#1A1A2E",
    },
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
    className: "toast-custom",
  };

  useEffect(() => {
    if (!storage.isAuthenticated()) {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="h-screen sticky top-0">
        <Sidebar />
      </div>

      {/* Right side */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>

        {/* Global Toaster */}
        <Toaster toastOptions={globalToastOptions} />

        {/* Main content */}
        <main className="flex-1 overflow-auto p-2 md:p-4 lg:p-4 bg-[#edf1f5] rounded mr-2">
          <div className="max-w-7xl mx-auto rounded-2xl">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
