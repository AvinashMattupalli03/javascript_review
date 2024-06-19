import React from "react";
import Typography from "@mui/material/Typography";

interface TypographyElementProps {
  content: string;
  variant: "h6" | "subtitle1" | "subtitle2" | "caption";
}

const TypographyElement: React.FC<TypographyElementProps> = ({
  content,
  variant,
}) => {
  return <Typography variant={variant}>{content}</Typography>;
};

export default TypographyElement;
