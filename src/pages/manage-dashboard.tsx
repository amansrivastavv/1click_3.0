import { useEffect, useState } from "react";
import { Skeleton, Button, Input, Empty } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { Search, Edit3, Image as ImageIcon } from "lucide-react";

import { API_CONFIG, API_ENDPOINTS } from "@/api/config";
import { InsuranceItem } from "@/api/types";
import EditPolicyModal from "@/components/manageDashboard/EditPolicyModal";

const showValue = (value?: string | null) =>
  value && value.trim() !== "" ? value : "NA";

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
        <div className="w-full md:w-80">
          <Input
            placeholder="Search policies..."
            prefix={<Search className="text-gray-400" size={16} />}
            allowClear
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>

      {/* GRID SECTION */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 p-4 h-72 flex flex-col gap-4"
            >
              <Skeleton.Image active className="!w-full !h-32" />
              <Skeleton active paragraph={{ rows: 2 }} />
            </div>
          ))}
        </div>
      ) : filteredData.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 bg-white rounded-xl border border-dashed border-gray-300">
          <Empty
            description={<span className="text-gray-500">No cards found</span>}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col relative overflow-hidden"
            >
              {/* Badge */}
              <div
                className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-bold rounded shadow-sm z-10"
                style={{
                  backgroundColor: item.badge_color || "#000000",
                  color: "#ffffff",
                }}
              >
                {showValue(item.badge)}
              </div>

              {/* Image Area */}
              <div className="h-32 w-full flex items-center justify-center mb-3 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
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
              <div className="flex-1 flex flex-col min-h-0">
                <h2
                  className="font-bold text-base text-gray-800 leading-tight mb-1 truncate"
                  title={showValue(item.title)}
                >
                  {showValue(item.title)}
                </h2>
                <p className="text-xs text-gray-500 line-clamp-2 mb-3 h-8">
                  {showValue(item.subtitle)}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <span
                    className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded"
                    style={{
                      backgroundColor: item.tag_color || "#f3f4f6",
                      color: item.tag_text_color || "#1f2937",
                    }}
                  >
                    {showValue(item.tag)}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <Button
                type="primary"
                className="mt-3 w-full h-8 text-xs font-medium"
                icon={<Edit3 size={14} />}
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
