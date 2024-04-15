import React from 'react'
import { Container } from '@mui/material';
import logo from '../../assets/logo.png';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const drawerWidth = 300;
const navItems = ['캠핑장 찾기', '가볼만한 곳', '공공우수야영장'];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography component="h1">
        <img src={logo} alt="Go Camping" />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <header>
      <AppBar component="nav" maxWidth="xl" sx={{ display: 'flex', backgroundColor: "var(--main-background-color)" }}>
        <Container maxWidth="xl">
          <Toolbar sx={{
            position:"relative",
            justifyContent:{
              xs: "center", md:"space-between"
            },
            alignItems:"center"
            
          }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={ handleDrawerToggle }
              sx={{ 
                position:"absolute",
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
                display: { 
                  md: 'none', 
                  color:"red"
                } 
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
            <Typography component="h1"><img src={logo} alt="Go Camping" /></Typography>
            <Box sx={{ 
              display: { xs: 'none', md: 'block' }
            }}>
              {navItems.map((item) => (
                <Button key={item} size="large" sx={{ color: 'var(--main-font-color)' }}>{item}</Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
    </header>
  )
}

export default Header