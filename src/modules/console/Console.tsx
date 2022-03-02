import { MoreVert, NotificationsActive } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Grid } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import useBreakpoint from 'utils/useBreakpoint.js';
import React, { useState } from 'react';
import styles from './Console.module.css';
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
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  backgroundColor: '#B6121B',
  [theme.breakpoints.up('md')]: {
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    })
  },
  [theme.breakpoints.between('sm', 'md')]: {
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    })
  }
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

  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"
          open={open}
          style={{ backgroundColor: 'white' }}
        >
          <Toolbar>
            <Grid container spacing={1}>
              <Grid item md={7} xs={10} lg={9}>
                <IconButton
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  className={styles.menuIcon}
                  edge="start"
                  sx={{
                    mr: 2,
                    display: {
                      xs: 'none',
                      sm: 'block'
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <IconButton
                  aria-label="open drawer"
                  onClick={toggleDrawer}
                  className={styles.menuIcon}
                  edge="start"
                  sx={{
                    mr: 2,
                    display: {
                      xs: 'block',
                      sm: 'none'
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item md={5} xs={2} lg={3}>
                <div className={styles.userInfo}>
                  <NotificationsActive className={styles.notificationIcon} />
                  <span className={styles.avatar}>MK</span>
                  <span className={styles.userName}>Mahesh Srinivasan</span>
                </div>
                <div style={{ marginTop: '8px' }}>
                  <MoreVert className={styles.menuList} />
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
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
        <Main style={{ backgroundColor: '#F5F8FD', height: 900 }}>hi</Main>
      </Box>
    </div>
  );
}
