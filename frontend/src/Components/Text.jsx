import React from 'react';
import { Typography } from '@mui/material';

const Text = ({ content, style }) => {
  return (
    <Typography
      sx={{
        color: style.color,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
      }}
    >
      {content}
    </Typography>
  );
};

export default Text;
