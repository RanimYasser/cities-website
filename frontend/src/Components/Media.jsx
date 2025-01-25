import React from 'react';
import { Box } from '@mui/material';

const Media = ({ src, alt, mediaType, style }) => {
  return (
    <Box>
      {mediaType === 'video' ? (
        <Box
          component="video"
          src={src}
          controls
          alt={alt}
          sx={{
            width: style.width,
            borderRadius: style.borderRadius,
          }}
        />
      ) : (
        <Box
          component="img"
          src={src}
          alt={alt}
          sx={{
            width: style.width,
            borderRadius: style.borderRadius,
          }}
        />
      )}
    </Box>
  );
};

export default Media;
