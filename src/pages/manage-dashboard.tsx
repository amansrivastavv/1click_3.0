import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Skeleton, Modal, Form, Input, Button } from "antd";
import { HexColorPicker } from "react-colorful";
import axios from "axios";
import toast from "react-hot-toast";

import { API_CONFIG, API_ENDPOINTS } from "@/api/config";
import { InsuranceItem } from "@/api/types";

const showValue = (value?: string | null) =>
  value && value.trim() !== "" ? value : "NA";

/* ---------- Color Picker Field ---------- */
const ColorPickerField = ({
  label,
  color,
  onClick,
}: {
  label: string;
  color: string;
  onClick: () => void;
}) => (
  <div>
    <label className="block mb-1 font-medium text-sm">{label}</label>
    <div
      className="h-8 w-full border rounded cursor-pointer"
      style={{ backgroundColor: color }}
      onClick={onClick}
    />
    <span className="text-xs text-gray-500">{color}</span>
  </div>
);

const Home: NextPage = () => {
  const [data, setData] = useState<InsuranceItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<InsuranceItem | null>(null);

  const [form] = Form.useForm();

  const [tagColor, setTagColor] = useState("#ffffff");
  const [tagTextColor, setTagTextColor] = useState("#000000");
  const [badgeColor, setBadgeColor] = useState("#ffffff");

  const [tempColor, setTempColor] = useState("#ffffff");
  const [activePicker, setActivePicker] = useState<
    "tagBg" | "tagText" | "badge" | null
  >(null);

  /* ---------- Fetch Data ---------- */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${API_CONFIG.BASE_URL}${API_ENDPOINTS.GET_POLICY_OPTIONS}`
        );
        if (res.data?.status) setData(res.data.data || []);
      } catch (error) {
        toast.error("Failed to load policies");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* ---------- Modal Open ---------- */
  const openModal = (item: InsuranceItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);

    form.setFieldsValue({
      title: item.title,
      subtitle: item.subtitle,
      tag: item.tag,
      badge: item.badge,
      url: item.url,
      image: item.image,
    });

    setTagColor(item.tag_color || "#ffffff");
    setTagTextColor(item.tag_text_color || "#000000");
    setBadgeColor(item.badge_color || "#ffffff");
  };

  /* ---------- Modal Close ---------- */
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    setActivePicker(null);
    form.resetFields();
  };

  /* ---------- Save ---------- */
  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      if (!selectedItem?.id) return;

      const payload = {
        id: selectedItem.id,
        fields: {
          ...values,
          tag_color: tagColor,
          tag_text_color: tagTextColor,
          badge_color: badgeColor,
        },
      };

      const res = await toast.promise(
        axios.post(
          `${API_CONFIG.BASE_URL}${API_ENDPOINTS.UPDATE_POLICY_OPTIONS}`,
          payload,
          { headers: { "Content-Type": "application/json" } }
        ),
        {
          loading: "Updating policy...",
          success: "Policy updated successfully",
          error: "Update failed",
        }
      );

      if (res.data?.status) {
        setData((prev) =>
          prev.map((item) =>
            Number(item.id) === Number(selectedItem.id)
              ? { ...item, ...payload.fields }
              : item
          )
        );
        closeModal();
      }
    } catch {
      toast.error("Something went wrong");
    }
  };

  const openPicker = (type: "tagBg" | "tagText" | "badge", color: string) => {
    setTempColor(color);
    setActivePicker(type);
  };

  const applyColor = () => {
    if (activePicker === "tagBg") setTagColor(tempColor);
    if (activePicker === "tagText") setTagTextColor(tempColor);
    if (activePicker === "badge") setBadgeColor(tempColor);
    setActivePicker(null);
  };

  if (loading) return <Skeleton active />;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="shadow-lg rounded-xl p-4 bg-white flex flex-col hover:scale-105 transition"
          >
            <span
              className="absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded"
              style={{
                backgroundColor: item.badge_color || "#000000",
                color: "#ffffff",
              }}
            >
              {showValue(item.badge)}
            </span>

            <img
              src={item.image || "/no-image.png"}
              className="h-32 mx-auto mb-4"
              alt="card"
            />

            <h2 className="font-bold">{showValue(item.title)}</h2>
            <p className="text-sm text-gray-500">{showValue(item.subtitle)}</p>

            <span
              className="inline-block mt-3 px-2 py-1 text-xs rounded w-fit"
              style={{
                backgroundColor: item.tag_color || "#fff",
                color: item.tag_text_color || "#000",
              }}
            >
              {showValue(item.tag)}
            </span>
            <br />
            <Button
              className="mt-auto w-full my-4"
              type="primary"
              onClick={() => openModal(item)}
            >
              Edit Card
            </Button>
          </div>
        ))}
      </div>

      {/* ---------- MODAL ---------- */}
      <Modal
        title="Edit Card"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={closeModal}
        width={900}
        okText="Save"
      >
        <div className="flex gap-6">
          {/* LEFT */}
          <div className="w-1/2">
            <Form form={form} layout="vertical">
              <Form.Item name="title" label="Title">
                <Input />
              </Form.Item>
              <Form.Item name="subtitle" label="Subtitle">
                <Input />
              </Form.Item>
              <Form.Item name="tag" label="Tag Text">
                <Input />
              </Form.Item>
              <Form.Item name="badge" label="Badge Text">
                <Input />
              </Form.Item>
              <Form.Item name="url" label="URL">
                <Input />
              </Form.Item>
              <Form.Item name="image" label="Image">
                <Input />
              </Form.Item>
            </Form>
          </div>

          {/* RIGHT */}
          <div className="w-1/2">
            <div className="grid grid-cols-3 gap-4">
              <ColorPickerField
                label="Tag BG"
                color={tagColor}
                onClick={() => openPicker("tagBg", tagColor)}
              />
              <ColorPickerField
                label="Tag Text"
                color={tagTextColor}
                onClick={() => openPicker("tagText", tagTextColor)}
              />
              <ColorPickerField
                label="Badge"
                color={badgeColor}
                onClick={() => openPicker("badge", badgeColor)}
              />
            </div>

            {activePicker && (
              <div className="border p-3 rounded mt-4 w-[100%]">
                <HexColorPicker
                  color={tempColor}
                  onChange={setTempColor}
                  style={{ width: 180, height: 120 }}
                />
                <br />
                <Input
                  className="mt-3"
                  value={tempColor}
                  onChange={(e) => setTempColor(e.target.value)}
                  maxLength={7}
                />
                <br />
                <div className="flex justify-end gap-2 mt-3">
                  <Button onClick={() => setActivePicker(null)}>Cancel</Button>
                  <Button type="primary" onClick={applyColor}>
                    OK
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
