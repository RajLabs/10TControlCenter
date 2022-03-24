import { MoreVert } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import styles from './Console.module.css';

const drawerWidth = 250;
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const NavBar = styled(MuiAppBar, {
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

export default function AppBar({
  open,
  setOpen,
  mobileOpen,
  setMobileOpen
}: any) {
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div>
      <NavBar position="fixed" open={open} style={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Grid container spacing={1}>
            <Grid item md={2} xs={2} lg={2}>
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
            <Grid item md={10} xs={10} lg={10}>
              <div style={{ float: 'right', marginRight: '20px' }}>
                <div className={styles.userInfo}>
                  <span className={styles.avatar}>MK</span>
                  <span className={styles.userName}>Mahesh Srinivasan</span>
                  <MoreVert className={styles.menuList} />
                </div>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </NavBar>
    </div>
  );
}
