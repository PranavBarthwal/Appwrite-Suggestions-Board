import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { flexbox } from '@mui/system';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ 
        bgcolor: 'rgba(253,54,110)', 
        backdropFilter: 'blur(100px)', 
        boxShadow: '10px 10px 10px rgba(0,0,0,0.1)', 
        borderRadius: '10px', 
        width: '40%',
        margin: `2rem auto`,

     }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Box display="flex" justifyContent="center" width="100%">
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              
              display: { xs: 'none', sm: 'block' },
              fontFamily: 'default',
              fontWeight: 700,
              color: '#EDEDF0',
              textDecoration: 'none',
            }}
          >
            SUGGESTIONS BOARD
          </Typography>
         </Box>
          

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
