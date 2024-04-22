import React from 'react';
import { AppBar, Toolbar, Avatar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ height: 64 }}>
      <Toolbar>
        <Avatar alt="User Avatar" src="https://via.placeholder.com/150" style={{ marginRight: 8 }} />
        <Typography variant="h6" component="div" style={{ display: 'none' }}>
          John Doe
        </Typography>
        {/* Intégration du composant Profile */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
