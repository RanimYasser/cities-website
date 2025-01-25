import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 2rem' }}>
    
        <Typography variant="h6" sx={{ fontWeight: 'bold', letterSpacing: '0.1rem' }}>
          CITIES.OS
        </Typography>


        <Box sx={{ display: 'flex', gap: '2rem' }}>
          <Button sx={{ color: 'black', fontSize: '1rem', textTransform: 'none' }}>Home</Button>
          <Button sx={{ color: 'black', fontSize: '1rem', textTransform: 'none' }}>Services</Button>
          <Button sx={{ color: 'black', fontSize: '1rem', textTransform: 'none' }}>Digital Cities</Button>
          <Button sx={{ color: 'black', fontSize: '1rem', textTransform: 'none' }}>About Us</Button>
          <Button sx={{ color: 'black', fontSize: '1rem', textTransform: 'none' }}>Blog</Button>
          <Button sx={{ color: 'black', fontSize: '1rem', textTransform: 'none' }}>Contact Us</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
