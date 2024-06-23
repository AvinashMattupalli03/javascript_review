import React from "react";
import styled from "@emotion/styled";

interface IconProps {
  src: string;
  alt: string;
}

const StyledIcon = styled.img<{ size?: string }>`
  ${({ size }) => (size ? `height: ${size}; width: ${size};` : "")}
`;

const Icon: React.FC<IconProps & { size?: string }> = ({ src, alt, size }) => {
  return <StyledIcon src={src} alt={alt} size={size} />;
};

export default Icon;
