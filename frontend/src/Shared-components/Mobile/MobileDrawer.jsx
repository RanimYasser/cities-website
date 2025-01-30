import React from 'react';
import { Drawer, Box, List, ListItem, ListItemText, IconButton, InputBase, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

const MobileDrawer = ({ isOpen, toggleDrawer, menuItems, searchQuery, setSearchQuery }) => {
  return (
    <Drawer
      anchor="top"
      open={isOpen}
      onClose={toggleDrawer(false)}
      PaperProps={{
        sx: {
          width: '100%',
          height: '70vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '16px',
          backgroundColor: 'background.default',
          color: 'text.primary',
        },
      }}
    >
      {/* Search Bar and Close Button */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
            backgroundColor: 'grey.100',
            borderRadius: '8px',
            padding: '4px 8px',
          }}
        >
          <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
          <InputBase
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              flexGrow: 1,
              fontSize: '1rem',
              color: 'text.primary',
            }}
          />
        </Box>
        <IconButton onClick={toggleDrawer(false)} sx={{ color: 'text.primary',marginRight:"7vw" }}>
          <CloseIcon />
        </IconButton>
      </Box>

     
      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{
              padding: '12px 16px',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
            onClick={toggleDrawer(false)}
          >
            <ListItemText primary={item} primaryTypographyProps={{ fontSize: '1rem', fontWeight: 500 }} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default MobileDrawer;
