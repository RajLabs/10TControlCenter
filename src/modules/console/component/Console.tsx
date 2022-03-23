import { Drawer } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Dashboard from 'modules/dashboard/Dashboard';
import AllEquipment from 'modules/equipment/component/AllEquipment';
import CreateEquipment from 'modules/equipment/component/CreateEquipment';
import EquipmentList from 'modules/equipment/component/EquipmentList';
import AllLocation from 'modules/location/component/AllLocation';
import CreateLocation from 'modules/location/component/CreateLocation';
import AllOrganization from 'modules/organization/component/AllOrganization';
import CreateOrganization from 'modules/organization/component/CreateOrganization';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import useBreakpoint from 'utils/useBreakpoint.js';
import Logo from '../../../assets/img/Logo.png';
import AppBar from './AppBar';
import DrawerList from './DrawerList';


const drawerWidth = 250;

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
              marginBottom: '20px',
              marginTop: '20px',
              color: '#5346A0'
            }}
          >
            <img src={Logo} alt="logo" />
          </DrawerHeader>
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
              marginBottom: '20px',
              marginTop: '20px',
              color: '#5346A0'
            }}
          >
            <img src={Logo} alt="logo" />
          </DrawerHeader>
          <DrawerList />
        </Drawer>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="createorganization" element={<CreateOrganization />} />
          <Route path="allorganization" element={<AllOrganization />} />
          <Route path="createlocation" element={<CreateLocation />} />
          <Route path="alllocation" element={<AllLocation />} />
          <Route path="createequipment" element={<CreateEquipment />} />
          <Route path="allequipment" element={<AllEquipment />} />
          <Route path="equipmentlist" element={<EquipmentList />} />
        </Routes>
      </Box>
    </div>
  );
}
