import React from "react";
import { Typography, Box } from "@mui/material";

const Text = ({ content, style = {} }) => {
  return (
    <Box sx={{ textAlign: "center", padding: "2vh 0" }}>
      {content.map((textItem, index) => (
        <Typography
          key={index}
          sx={{
            color: textItem.color || style.color || "#fff", 
            fontSize: textItem.fontSize || style.fontSize || "1rem",
            fontWeight: textItem.fontWeight || style.fontWeight || "normal",
            marginBottom: textItem.marginBottom || "8px"
          }}
        >
          {textItem.text}
        </Typography>
      ))}
    </Box>
  );
};

export default Text;
