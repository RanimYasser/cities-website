import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({
  text,
  icon,
  onClick,
  href,
  style = {},
  onHover = false,  // Default to false
  variant = "contained",
  size = "medium",
}) => {
  return (
    <MuiButton
      href={href}
      onClick={onClick}
      variant={variant}
      size={size}
      sx={{
        color: style.color || "#ffffff",
        backgroundColor: style.backgroundColor || "transparent",
        fontSize: style.fontSize || "1rem",
        fontWeight: style.fontWeight || "bold",
        textTransform: style.textTransform || "none",
        display: "flex",
        alignItems: "center",
        gap: style.gap || "0.5em",
        padding: style.padding || "0",
        border: style.border || "none",
        borderRadius: style.borderRadius || "0",
        marginTop: style.marginTop || "1vh",
        boxShadow: style.boxShadow || "none",
        "&:hover": {
          backgroundColor: onHover ? style.hoverBackgroundColor || "#555555" : style.backgroundColor || "transparent",
          color: onHover ? style.hoverColor || "#ffffff" : style.color || "#ffffff",
          boxShadow: onHover ? style.hoverBoxShadow || "none" : "none",
          padding: style.padding || "0",
          border: style.border || "none",
        }
      }}
    >
      {icon && <span>{icon}</span>}
      {text}
    </MuiButton>
  );
};

export default Button;
