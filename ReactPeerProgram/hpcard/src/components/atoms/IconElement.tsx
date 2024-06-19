import React from "react";

interface IconElementProps {
  src: string;
  alt: string;
  height?: number | string;
  width?: number | string;
}

const IconElement: React.FC<IconElementProps> = ({
  src,
  alt,
  height,
  width,
}) => {
  return <img src={src} alt={alt} height={height} width={width} />;
};

export default IconElement;
