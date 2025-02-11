import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import "./Counter.css";

const Counter = ({ items }) => {
  const theme = useTheme();

  return (
    <Box className="counter-section">
      {items.map((item, index) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
          const increment = Math.max(1, Math.floor(item.number / 100));
          const intervalSpeed = Math.max(20, 2000 / item.number);

          if (count < item.number) {
            const interval = setInterval(() => {
              setCount((prev) => (prev + increment >= item.number ? item.number : prev + increment));
            }, intervalSpeed);

            return () => clearInterval(interval);
          }
        }, [count, item.number]);

        return (
          <Box key={index} className="counter-item">
            <Typography className="counter-number" sx={{ color: theme.palette.primary.contrastText }}>
              {count.toLocaleString()} <span className="counter-suffix">{item.suffix}</span>
            </Typography>
            <Typography className="counter-label" sx={{ color: theme.palette.text.secondary }}>
              {item.label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Counter;
