import React from "react";

interface IconProps {
  src: string;
  alt: string;
  height?: number | string;
  width?: number | string;
}

const Icon: React.FC<IconProps> = ({ src, alt, height, width }) => {
  return <img src={src} alt={alt} height={height} width={width} />;
};

export default Icon;
