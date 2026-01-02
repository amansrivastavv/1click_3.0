// src/components/policies/form/PolicyLayout.tsx
import React, { useEffect, useState, useRef } from "react";
import { Button } from "antd";
import { motion } from "framer-motion";

export interface PolicySection {
  id: string;
  label: string;
  icon: React.ReactNode;
  description?: string;
}

interface PolicyLayoutProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  themeColor: string; // e.g. "blue", "green", "purple"
  sections: PolicySection[];
  children: React.ReactNode;

  // Footer Actions
  onCancel: () => void;
  onSave: () => void;
  loading?: boolean;

  // Optional: keep these for API compatibility but ignore or use for initial state
  activeSection?: string;
  onSectionChange?: (id: string) => void;
}

const PolicyLayout: React.FC<PolicyLayoutProps> = ({
  title,
  subtitle,
  icon,
  themeColor,
  sections,
  children,
  onCancel,
  onSave,
  loading,
}) => {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Dynamic Tailwind classes mapping
  const themeClasses: Record<
    string,
    { bg: string; text: string; border: string; pill: string }
  > = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-500",
      pill: "bg-blue-100 text-blue-700",
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-600",
      border: "border-green-500",
      pill: "bg-green-100 text-green-700",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-500",
      pill: "bg-purple-100 text-purple-700",
    },
    cyan: {
      bg: "bg-cyan-50",
      text: "text-cyan-600",
      border: "border-cyan-500",
      pill: "bg-cyan-100 text-cyan-700",
    },
    gray: {
      bg: "bg-gray-100",
      text: "text-gray-600",
      border: "border-gray-500",
      pill: "bg-gray-200 text-gray-700",
    },
    default: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-500",
      pill: "bg-blue-100 text-blue-700",
    },
  };

  const theme = themeClasses[themeColor] || themeClasses.default;

  // Scroll to section handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element && scrollRef.current) {
      // Calculate offset to account for any sticky headers or padding if needed
      const offset = 20;
      const elementPosition = element.offsetTop - offset;

      scrollRef.current.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setActiveId(id); // Optimistic update
    }
  };

  // Intersection Observer for Scroll Spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: scrollRef.current,
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: "-10% 0px -70% 0px", // Bias towards top of container
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="flex w-full h-full bg-white">
      {/* ================= SIDEBAR ================= */}
      <div className="w-[280px] flex-shrink-0 bg-gray-50/80 border-r border-gray-100 flex flex-col backdrop-blur-sm z-20">
        {/* Sidebar Header */}
        <div className="p-6 pb-2">
          <div
            className={`w-12 h-12 rounded-xl ${theme.bg} flex items-center justify-center ${theme.text} mb-4 shadow-sm`}
          >
            {icon}
          </div>
          <h2 className="text-xl font-bold text-gray-800 leading-tight mb-1">
            {title}
          </h2>
          <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">
            {subtitle || "Policy Management"}
          </p>
        </div>

        {/* Navigation Anchors */}
        <div className="flex-1 py-4 px-3 space-y-1 overflow-y-auto custom-scrollbar">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all duration-300 group text-left
                            ${
                              isActive
                                ? "bg-white shadow-sm ring-1 ring-gray-100"
                                : "hover:bg-gray-100/80 text-gray-500"
                            }
                        `}
              >
                <span
                  className={`flex items-center justify-center transition-colors duration-300
                            ${
                              isActive
                                ? theme.text
                                : "text-gray-400 group-hover:text-gray-600"
                            }
                        `}
                >
                  {section.icon}
                </span>

                <div className="flex-1">
                  <span
                    className={`block font-semibold transition-colors duration-300 ${
                      isActive
                        ? "text-gray-800"
                        : "text-gray-500 group-hover:text-gray-700"
                    }`}
                  >
                    {section.label}
                  </span>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`w-1.5 h-1.5 rounded-full ${theme.bg.replace(
                      "bg-",
                      "bg-"
                    )}`}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-200/60 bg-gray-50">
          <div className="flex items-center gap-2 justify-center">
            {/* <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-gray-500">Live Editing</span> */}
          </div>
        </div>
      </div>

      {/* ================= CONTENT AREA ================= */}
      <div className="flex-1 flex flex-col h-full bg-white relative overflow-hidden">
        {/* Scrollable Form Content */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-8 pb-32 scroll-smooth relative"
        >
          <div className="max-w-4xl mx-auto space-y-10">{children}</div>
        </div>

        {/* Sticky Action Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-white/95 backdrop-blur-md border-t border-gray-100 flex justify-end items-center z-30 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.05)]">
          {/* <div className="text-xs text-gray-400 font-medium px-2">
            Last autosaved: Just now
          </div> */}
          <div className="flex gap-3">
            <Button
              size="large"
              onClick={onCancel}
              className="bg-white border-gray-200 text-gray-600 hover:text-gray-800 px-8 rounded-lg font-medium"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              size="large"
              loading={loading}
              onClick={onSave}
              className={`${theme.bg
                .replace("50", "600")
                .replace(
                  "bg-",
                  "bg-"
                )} hover:brightness-110 !border-0 shadow-lg shadow-blue-100 px-10 rounded-lg font-semibold h-11 tracking-wide`}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyLayout;
