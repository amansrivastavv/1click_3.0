import { useEffect, useState } from "react";
import { Skeleton, Button, Input, Empty } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { Search, Edit3, Image as ImageIcon } from "lucide-react";

import { API_CONFIG, API_ENDPOINTS } from "@/api/config";
import { InsuranceItem } from "@/api/types";
import EditPolicyModal from "@/components/manageDashboard/EditPolicyModal";

const showValue = (value?: string | null) => {
  if (!value) return null;
  const trimmed = value.trim();
  if (trimmed === "") return null;
  const upper = trimmed.toUpperCase();
  return ["NA", "N/A", "NULL", "UNDEFINED"].includes(upper) ? null : trimmed;
};

const ManageDashboard = () => {
  const [data, setData] = useState<InsuranceItem[]>([]);
  const [filteredData, setFilteredData] = useState<InsuranceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<InsuranceItem | null>(null);

  /* ---------- Fetch Data ---------- */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${API_CONFIG.BASE_URL}${API_ENDPOINTS.GET_POLICY_OPTIONS}`
        );
        if (res.data?.status) {
          const list = res.data.data || [];
          setData(list);
          setFilteredData(list);
        }
      } catch (error) {
        toast.error("Failed to load policies");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* ---------- Search Logic ---------- */
  useEffect(() => {
    const lowerSearch = searchText.toLowerCase();
    const filtered = data.filter(
      (item) =>
        (item.title || "").toLowerCase().includes(lowerSearch) ||
        (item.subtitle || "").toLowerCase().includes(lowerSearch) ||
        (item.tag || "").toLowerCase().includes(lowerSearch)
    );
    setFilteredData(filtered);
  }, [searchText, data]);

  /* ---------- Handlers ---------- */
  const openModal = (item: InsuranceItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Called when Child Modal successfully updates via API
  const handleUpdateSuccess = (updatedItem: InsuranceItem) => {
    const newData = data.map((item) =>
      Number(item.id) === Number(updatedItem.id) ? updatedItem : item
    );
    setData(newData);
    // Filter will update automatically via effect
    closeModal();
  };

  return (
    <div>
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl font-semibold flex items-center">
            Manage Dashboard
          </h1>
          {/* <p className="text-gray-500 text-sm mt-1">
            Customize appearance of dashboard cards.
          </p> */}
        </div>

        {/* Search Bar */}
        {/* <div className="w-full md:w-80">
          <Input
            placeholder="Search policies..."
            prefix={<Search className="text-gray-400" size={16} />}
            allowClear
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div> */}
      </div>

      {/* GRID SECTION */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 p-5 h-80 flex flex-col gap-4"
            >
              <Skeleton.Image active className="!w-full !h-36" />
              <Skeleton active paragraph={{ rows: 2 }} />
            </div>
          ))}
        </div>
      ) : filteredData.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl border border-dashed border-gray-300">
          <Empty
            description={<span className="text-gray-500">No cards found</span>}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl p-5 shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col relative overflow-hidden h-full"
            >
              {/* Badge */}
              {showValue(item.badge) && (
                <div
                  className="absolute top-4 right-4 px-2.5 py-1 text-[10px] font-bold rounded-md shadow-sm z-10"
                  style={{
                    backgroundColor: item.badge_color || "#000000",
                    color: "#ffffff",
                  }}
                >
                  {showValue(item.badge)}
                </div>
              )}

              {/* Image Area */}
              <div className="h-36 w-full flex items-center justify-center mb-4 bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shrink-0">
                {item.image ? (
                  <img
                    src={item.image}
                    className="h-full object-contain p-2"
                    alt="card"
                  />
                ) : (
                  <ImageIcon className="text-gray-300" size={32} />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col min-h-0">
                <h2
                  className="font-bold text-lg text-gray-800 leading-tight mb-1 truncate"
                  title={showValue(item.title) || ""}
                >
                  {showValue(item.title) || "Untitled Policy"}
                </h2>
                {showValue(item.subtitle) && (
                  <p className="text-sm text-gray-500 line-clamp-2 mb-1 leading-relaxed">
                    {showValue(item.subtitle)}
                  </p>
                )}

                {showValue(item.tag) && (
                  <div className="mt-1 flex items-center justify-between">
                    <span
                      className="inline-block px-2.5 py-0.5 text-[11px] font-semibold rounded-md"
                      style={{
                        backgroundColor: item.tag_color || "#f3f4f6",
                        color: item.tag_text_color || "#1f2937",
                      }}
                    >
                      {showValue(item.tag)}
                    </span>
                  </div>
                )}
              </div>

              {/* Spacer to push button to bottom */}
              <div className="flex-grow min-h-[0.5rem]" />

              {/* Action Button */}
              <Button
                type="primary"
                className="w-full h-9 text-sm font-medium rounded-lg mt-auto"
                icon={<Edit3 size={15} />}
                onClick={() => openModal(item)}
              >
                Edit
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* ----------EDIT MODAL ---------- */}
      <EditPolicyModal
        open={isModalOpen}
        item={selectedItem}
        onCancel={closeModal}
        onSuccess={handleUpdateSuccess}
      />
    </div>
  );
};

export default ManageDashboard;
