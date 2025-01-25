import React from 'react';
import { Box, Typography } from '@mui/material';

const MediaWithText = ({ media, text, style }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
      }}
    >
      {media.type === 'video' ? (
        <Box
          component="video"
          src={media.src}
          alt={media.alt}
          controls
          sx={{
            width: style.mediaWidth,
            borderRadius: '8px',
          }}
        />
      ) : (
        <Box
          component="img"
          src={media.src}
          alt={media.alt}
          sx={{
            width: style.mediaWidth,
            borderRadius: '8px',
          }}
        />
      )}
      <Typography
        sx={{
          color: style.textColor,
          fontSize: style.fontSize,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default MediaWithText;
