import { Drawer } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import AllLocation from 'modules/location/component/AllLocation';
import React, { useState } from 'react';
// import DashboardRouter from 'router/DashboardRouter';
import useBreakpoint from 'utils/useBreakpoint.js';
import AppBar from './AppBar';
import DrawerList from './DrawerList';

const drawerWidth = 250;
const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  backgroundColor: '#F5F8FD',
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  })
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}));

export default function Console() {
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const point = useBreakpoint();

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <AppBar
          open={open}
          setOpen={setOpen}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
        <Drawer
          sx={{
            display: {
              xs: 'none',
              sm: 'block'
            },
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box'
            }
          }}
          variant={point === 'sm' ? 'permanent' : 'persistent'}
          anchor="left"
          open={open}
        >
          <DrawerHeader
            style={{
              paddingRight: '100px',
              fontSize: '30px',
              color: '#5346A0'
            }}
          >
            ESP
          </DrawerHeader>
          <Divider />
          <DrawerList />
        </Drawer>
        <Drawer
          open={mobileOpen}
          onClose={toggleDrawer}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: {
              xs: 'block',
              sm: 'none'
            },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          <DrawerHeader
            style={{
              paddingRight: '100px',
              fontSize: '30px',
              color: '#5346A0'
            }}
          >
            ESP
          </DrawerHeader>
          <Divider />
          <DrawerList />
        </Drawer>
        <Main open={open} style={{ padding: 0 }}>
          <AllLocation />
        </Main>
      </Box>
    </div>
  );
}
