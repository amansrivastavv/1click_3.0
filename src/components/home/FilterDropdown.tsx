"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterDropdownProps {
  onFilterChange: (value: string) => void;
}

export default function FilterDropdown({
  onFilterChange,
}: FilterDropdownProps) {
  const [selectedValue, setSelectedValue] = useState("-1");
  const [open, setOpen] = useState(false);

  const options: FilterOption[] = [
    { label: "All", value: "-1" },
    { label: "Pending", value: "2" },
    { label: "Approved", value: "1" },
    { label: "Rejected", value: "0" },
  ];

  useEffect(() => {
    onFilterChange("-1");
  }, []);

  const handleSelect = (option: FilterOption) => {
    setSelectedValue(option.value);
    onFilterChange(option.value);
    setOpen(false);
  };

  const selectedLabel =
    options.find((opt) => opt.value === selectedValue)?.label || "All";

  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-sm font-medium text-black">Filter by:</span>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setOpen(!open)}
          className={`flex items-center justify-between gap-2 min-w-[140px] px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border ${
            open
              ? "bg-gray-500 text-white border-gray-700"
              : "bg-white text-black border-gray-300"
          }`}
        >
          {selectedLabel}
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="absolute right-0 mt-2 w-44 rounded-xl shadow-xl border border-gray-300 bg-white z-20 overflow-hidden"
          >
            {options.map((option) => (
              <motion.button
                key={option.value}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#f3f4f6", // Tailwind gray-100
                  color: "#111827", // Tailwind gray-900
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleSelect(option)}
                className={`block w-full text-left px-4 py-2.5 text-sm font-medium transition-all ${
                  selectedValue === option.value
                    ? "bg-gray-500 text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {option.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
