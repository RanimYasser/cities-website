import React from "react";
import { Typography, Box } from "@mui/material";
import { CenterFocusStrong } from "@mui/icons-material";

const Text = ({ content = [], style = {} }) => {
  if (!Array.isArray(content) || content.length === 0) {
    return null; // Prevents `map()` from breaking if `content` is undefined or empty
  }

  return (
    <Box sx={{ textAlign: "center", padding: "2vh 0" }}>
      {content.map((textItem, index) => (
        <Typography
          key={index}
          sx={{
            color: textItem?.color || style?.color || "#fff", 
            fontSize: textItem?.fontSize || style?.fontSize || "1rem",
            fontWeight: textItem?.fontWeight || style?.fontWeight || "normal",
            marginBottom: textItem?.marginBottom || "8px",
            width: textItem?.width||"40vw",
            marginLeft:textItem?.marginLeft||"25vw",
          
          }}
        >
          {textItem?.text || ""}
        </Typography>
      ))}
    </Box>
  );
};

export default Text;
