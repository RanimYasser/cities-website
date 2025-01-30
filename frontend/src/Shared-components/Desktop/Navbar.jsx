import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MobileDrawer from '../Mobile/MobileDrawer';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const menuItems = ['Home', 'Services', 'Digital Cities', 'About Us', 'Blog', 'Contact Us'];

  return (
    <AppBar position="absolute" sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 2rem' }}>
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', letterSpacing: '0.1rem', color: 'black' }}
        >
          CITIES.OS
        </Typography>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' }, // Hidden on small screens
            gap: '2rem',
          }}
        >
          {menuItems.map((item, index) => (
            <Button
              key={index}
              sx={{
                color: 'black',
                fontSize: '1rem',
                textTransform: 'none',
              }}
            >
              {item}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          sx={{ display: { xs: 'block', md: 'none' }, color: 'black' }} // Shown only on small screens
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <MobileDrawer
          isOpen={isDrawerOpen}
          toggleDrawer={toggleDrawer}
          menuItems={menuItems}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
