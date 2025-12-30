import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

interface LoaderProps {
  size?: "small" | "default" | "large";
  style?: React.CSSProperties;
}

const Loader: React.FC<LoaderProps> = ({ size = "default", style }) => {
  return (
    <Spin indicator={<LoadingOutlined spin style={style} />} size={size} />
  );
};

export default Loader;
