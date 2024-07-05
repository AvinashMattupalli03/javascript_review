import React from "react";
import { Typography as MuiTypography } from "@mui/material";

interface TypographyProps {
  variant: "h6" | "subtitle1" | "subtitle2" | "caption";
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
  return <MuiTypography variant={variant}>{children}</MuiTypography>;
};

export default Typography;
