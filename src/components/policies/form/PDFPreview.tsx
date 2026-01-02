// src/components/policies/form/PDFPreview.tsx
import React, { useEffect, useState } from 'react';
import { Empty, Spin } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';
import { API_CONFIG } from '../../../api/config';
import { apiClient } from '../../../api/client';

interface PDFPreviewProps {
  fileList?: UploadFile[];
  height?: string | number;
}

const PDFPreview: React.FC<PDFPreviewProps> = ({ fileList, height = "100%" }) => {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPdf = async () => {
        if (!fileList || fileList.length === 0) {
            setBlobUrl(null);
            return;
        }

        const file = fileList[0];
        setError(null);

        // 1. New Local File (Upload)
        if (file.originFileObj) {
            const url = URL.createObjectURL(file.originFileObj);
            setBlobUrl(url);
            return;
        }

        // 2. Existing Server File
        let path = file.url || (file.response as string);
        if (!path) return;

        // Use direct URL for iframe to avoid CORS issues with fetch(blob)
        // (Iframes are not blocked by CORS, only by X-Frame-Options)
        if (path.startsWith('http')) {
             setBlobUrl(path);
        } else {
             // Handle relative paths
             const baseUrl = API_CONFIG.BASE_URL.replace(/\/api\/?$/, ''); 
             const cleanPath = path.startsWith('/') ? path : `/${path}`;
             setBlobUrl(`${baseUrl}${cleanPath}`);
        }
        
        setLoading(false);
    };

    loadPdf();

    // Cleanup
    return () => {
        if (blobUrl && blobUrl.startsWith('blob:')) {
            URL.revokeObjectURL(blobUrl);
        }
    };
  }, [fileList]);


  if (loading) {
      return (
        <div className="w-full h-full bg-gray-50 rounded-xl flex items-center justify-center p-6 border border-gray-200" style={{ minHeight: 500 }}>
            <Spin tip="Loading PDF..." />
        </div>
      );
  }

  if (!blobUrl || error) {
    // Construct fallback URL for the button
    let fallbackUrl = "";
    if (fileList && fileList.length > 0) {
        const file = fileList[0];
        const rawPath = file.url || (file.response as string);
        if (rawPath) {
             if (rawPath.startsWith('http')) {
                 fallbackUrl = rawPath;
             } else {
               
                 const baseUrl = API_CONFIG.BASE_URL.replace(/\/api\/?$/, ''); 
                 const cleanPath = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
                 fallbackUrl = `${baseUrl}${cleanPath}`;
             }
        }
    }

    return (
      <div 
        className="w-full h-full bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center p-6 text-center"
        style={{ minHeight: 300 }}
      >
        <Empty 
            image={Empty.PRESENTED_IMAGE_SIMPLE} 
            description={
                <div className="flex flex-col items-center gap-2">
                    <span className="text-gray-500 font-medium">{error || "No PDF selected"}</span>
                    {fallbackUrl && (
                        <a 
                            href={fallbackUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-2 text-blue-600 hover:text-blue-800 underline text-sm"
                        >
                            Try opening directly
                        </a>
                    )}
                </div>
            }
        />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-slate-800 rounded-xl overflow-hidden border border-gray-200 shadow-sm relative group">
       <iframe
          src={`${blobUrl}#toolbar=0&navpanes=0&scrollbar=0`}
          className="w-full h-full min-h-[500px]"
          title="PDF Preview"
        />
        
        {/* Fallback overlay if iframe fails visually (rare with blob) or just as controls */}
       <div className="absolute top-2 right-2 flex gap-2">
            <a 
                href={blobUrl} 
                download="document.pdf"
                className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 hover:bg-black/80 text-white text-xs px-3 py-1.5 rounded backdrop-blur-sm flex items-center gap-2"
            >
                Download
            </a>
       </div>
    </div>
  );
};

export default PDFPreview;
