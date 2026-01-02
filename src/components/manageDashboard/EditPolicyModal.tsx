import { useEffect, useState } from "react";
import { Modal, Form, Input, Button, Popover, Tooltip, Row, Col, Divider } from "antd";
import { HexColorPicker } from "react-colorful";
import axios from "axios";
import toast from "react-hot-toast";
import { 
    Type, 
    Tag, 
    Link as LinkIcon, 
    Image as ImageIcon, 
    Palette, 
    Check, 
    BadgeCheck,
    LayoutTemplate,
    Edit3
} from "lucide-react";

import { API_CONFIG, API_ENDPOINTS } from "@/api/config";
import { InsuranceItem } from "@/api/types";

// ======================= HELPER COMPONENTS =======================

const ColorPickerPopover = ({
  color,
  onChange,
  label
}: {
  color: string;
  onChange: (c: string) => void;
  label: string;
}) => {
  return (
    <div className="flex flex-col gap-1.5">
       <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1">
         <Palette size={12} /> {label}
       </span>
       <Popover
        trigger="click"
        placement="bottomLeft"
        content={
            <div className="p-2">
                <HexColorPicker color={color} onChange={onChange} />
                <div className="mt-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded border border-gray-200" style={{ backgroundColor: color }} />
                    <Input 
                        size="small" 
                        value={color} 
                        onChange={(e) => onChange(e.target.value)} 
                        className="font-mono text-xs"
                    />
                </div>
            </div>
        }
       >
            <div 
                className="h-10 w-full rounded-lg border border-gray-200 shadow-sm flex items-center gap-3 px-3 cursor-pointer hover:border-blue-400 transition-colors bg-white group"
            >
                <div 
                    className="w-6 h-6 rounded-full border border-gray-200 shadow-inner" 
                    style={{ backgroundColor: color }} 
                />
                <span className="font-mono text-sm text-gray-600 group-hover:text-blue-600">{color}</span>
            </div>
       </Popover>
    </div>
  );
};

// ======================= LIVE PREVIEW CARD =======================

const CardPreview = ({ values }: { values: Partial<InsuranceItem> }) => {
    // Default Fallbacks
    const title = values.title || "Policy Title";
    const subtitle = values.subtitle || "Policy Subtitle Description";
    const tag = values.tag || "Tag Text";
    const badge = values.badge || "Badge";
    const image = values.image || "/no-image.png";
    
    // Color Fallbacks
    const badgeColor = values.badge_color || "#000000";
    const tagColor = values.tag_color || "#f3f4f6";
    const tagTextColor = values.tag_text_color || "#1f2937";

    return (
        <div className="w-full h-full bg-gray-50 rounded-2xl flex flex-col items-center justify-center p-8 border border-gray-200">
             <div className="text-sm font-semibold text-gray-400 mb-6 uppercase tracking-widest flex items-center gap-2">
                <LayoutTemplate size={16} /> Live Preview
             </div>
             
             {/* THE CARD (Exact replica of Manage Dashboard) */}
             <div className="w-full max-w-[280px] bg-white rounded-xl shadow-sm border border-gray-200 p-4 transition-all duration-200 flex flex-col relative overflow-hidden group hover:shadow-md hover:border-blue-300">
                {/* Badge */}
                <div 
                    className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-bold rounded shadow-sm z-10"
                    style={{ backgroundColor: badgeColor, color: "#ffffff" }}
                >
                    {badge}
                </div>

                {/* Image */}
                <div className="h-32 w-full flex items-center justify-center mb-3 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                    {values.image ? (
                        <img src={image} className="h-full object-contain p-2" alt="preview" />
                    ) : (
                        <ImageIcon className="text-gray-300" size={32} />
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col min-h-0">
                    <h2 className="font-bold text-base text-gray-800 leading-tight mb-1 truncate" title={title}>
                        {title}
                    </h2>
                    <p className="text-xs text-gray-500 line-clamp-2 mb-3 h-8">
                        {subtitle}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                         <span
                            className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded"
                            style={{ backgroundColor: tagColor, color: tagTextColor }}
                        >
                            {tag}
                        </span>
                    </div>
                </div>

                {/* Button Mock */}
                <Button
                    type="primary"
                    className="mt-3 w-full h-8 text-xs font-medium"
                    icon={<Edit3 size={14} />}
                >
                    Edit
                </Button>
             </div>
        </div>
    );
};

// ======================= MAIN MODAL =======================

interface EditPolicyModalProps {
  open: boolean;
  onCancel: () => void;
  item: InsuranceItem | null;
  onSuccess: (updatedItem: InsuranceItem) => void;
}

const EditPolicyModal = ({
  open,
  onCancel,
  item,
  onSuccess,
}: EditPolicyModalProps) => {
  const [form] = Form.useForm();
  
  // Local state for live preview (syncs with form values)
  const [previewData, setPreviewData] = useState<Partial<InsuranceItem>>({});
  const [loading, setLoading] = useState(false);

  // Initialize form
  useEffect(() => {
    if (open && item) {
      form.setFieldsValue({
        title: item.title,
        subtitle: item.subtitle,
        tag: item.tag,
        badge: item.badge,
        url: item.url,
        image: item.image,
        // Colors
        tag_color: item.tag_color || "#ffffff",
        tag_text_color: item.tag_text_color || "#000000",
        badge_color: item.badge_color || "#000000"
      });
      setPreviewData(item);
    } else {
        form.resetFields();
        setPreviewData({});
    }
  }, [open, item, form]);

  // Handle Form Change -> Update Preview
  const handleValuesChange = (_: any, allValues: any) => {
      setPreviewData(allValues);
  };

  const handleOk = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      if (!item?.id) return;

      const payload = {
        id: item.id,
        fields: values,
      };

      const res = await axios.post(
          `${API_CONFIG.BASE_URL}${API_ENDPOINTS.UPDATE_POLICY_OPTIONS}`,
          payload,
          { headers: { "Content-Type": "application/json" } }
      );

      if (res.data?.status) {
        toast.success("Policy updated successfully");
        onSuccess({ ...item, ...values });
        onCancel();
      } else {
        throw new Error(res.data?.message || "Failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update policy");
    } finally {
        setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onOk={handleOk}
      onCancel={onCancel}
      width={1000}
      centered
      footer={null}
      destroyOnClose
      className="rounded-2xl overflow-hidden"
      wrapClassName="backdrop-blur-sm"
      closeIcon={null} // Cleaner look
    >
      <div className="flex h-[600px]">
        {/* LEFT: EDITOR */}
        <div className="w-[55%] p-8 overflow-y-auto scrollbar-hide">
            
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Edit Dashboard Card</h2>
                <p className="text-gray-500">Customize the appearance of this card on the main dashboard.</p>
            </div>

            <Form 
                form={form} 
                layout="vertical" 
                onValuesChange={handleValuesChange}
                requiredMark={false}
            >
                {/* 1. Content Section */}
                <div className="mb-8">
                    <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Type size={16} className="text-blue-500" /> Content
                    </h3>
                    
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item name="title" label="Title" rules={[{ required: true }]}>
                                <Input size="large" prefix={<Type size={16} className="text-gray-400" />} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item name="subtitle" label="Subtitle">
                                <Input size="large" prefix={<Type size={16} className="text-gray-400" />} />
                            </Form.Item>
                        </Col>
                    </Row>
                </div>

                <Divider className="my-6 border-gray-100" />

                {/* 2. Visuals Section */}
                <div className="mb-8">
                    <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Palette size={16} className="text-purple-500" /> Visuals
                    </h3>

                    <Row gutter={16} className="mb-4">
                        <Col span={12}>
                             <Form.Item name="tag_color" className="mb-1">
                                <div /> 
                            </Form.Item>
                            <ColorPickerPopover 
                                label="Tag Background"
                                color={previewData.tag_color || "#ffffff"} 
                                onChange={(c) => {
                                    form.setFieldValue("tag_color", c);
                                    setPreviewData(prev => ({ ...prev, tag_color: c }));
                                }} 
                            />
                        </Col>
                         <Col span={12}>
                            <Form.Item name="tag_text_color" className="mb-1">
                                <div />
                            </Form.Item>
                             <ColorPickerPopover 
                                label="Tag Text Color"
                                color={previewData.tag_text_color || "#000000"} 
                                onChange={(c) => {
                                    form.setFieldValue("tag_text_color", c);
                                    setPreviewData(prev => ({ ...prev, tag_text_color: c }));
                                }} 
                            />
                        </Col>
                    </Row>
                     <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item name="badge_color" className="mb-1">
                                <div />
                            </Form.Item>
                             <ColorPickerPopover 
                                label="Badge Color"
                                color={previewData.badge_color || "#000000"} 
                                onChange={(c) => {
                                    form.setFieldValue("badge_color", c);
                                    setPreviewData(prev => ({ ...prev, badge_color: c }));
                                }} 
                            />
                        </Col>
                     </Row>
                </div>

                 <Divider className="my-6 border-gray-100" />

                {/* 3. Badges & Links */}
                <div>
                     <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <BadgeCheck size={16} className="text-green-500" /> Badges & Links
                    </h3>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item name="tag" label="Tag Text">
                                <Input prefix={<Tag size={16} className="text-gray-400" />} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="badge" label="Badge Text">
                                <Input prefix={<BadgeCheck size={16} className="text-gray-400" />} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item name="url" label="Target URL">
                                <Input prefix={<LinkIcon size={16} className="text-gray-400" />} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item name="image" label="Image URL">
                                <Input prefix={<ImageIcon size={16} className="text-gray-400" />} />
                            </Form.Item>
                        </Col>
                    </Row>
                </div>

                <div className="h-12" /> {/* Spacer */}
            </Form>
        </div>

        {/* RIGHT: LIVE PREVIEW SIDEBAR */}
        <div className="w-[45%] bg-gray-50 border-l border-gray-100 p-6 flex flex-col">
            <CardPreview values={previewData} />
            
            <div className="mt-6 flex flex-col gap-3">
                 <Button 
                    type="primary" 
                    size="large" 
                    onClick={handleOk} 
                    loading={loading}
                    className="h-12 text-base font-semibold shadow-lg shadow-blue-200"
                    block
                    icon={<Check size={18} />}
                >
                    Save Changes
                </Button>
                <Button 
                    size="large" 
                    onClick={onCancel} 
                    block
                    className="text-gray-500"
                >
                    Cancel
                </Button>
            </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditPolicyModal;
