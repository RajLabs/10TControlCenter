import React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { MoreVert, NotificationsActive } from '@mui/icons-material';
// import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import DrawerList from './DrawerList';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`
  }
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}));
// const useStyles = makeStyles({
//   appBarMenu: {
//     float: 'right',
//     marginRight: '5%'
//   },
//   avatar: {
//     backgroundColor: '#5346A0'
//   },
//   notification: {
//     float: ''
//   }
// });
export default function Console() {
  // const theme = useTheme();
  // const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        {/* <CssBaseline /> */}
        <AppBar
          position="fixed"
          open={open}
          style={{ backgroundColor: 'white' }}
        >
          <Toolbar>
            <Grid container spacing={1}>
              <Grid item md={10}>
                <IconButton
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    marginRight: '36px',
                    ...(open && { display: 'inline' })
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item md={2}>
                <div style={{ marginTop: '10px' }}>
                  <NotificationsActive
                    style={{
                      color: '#707070',
                      float: 'left',
                      fontSize: '20px',
                      marginLeft: '10px',
                      marginTop: '8px'
                    }}
                  />
                  <span
                    style={{
                      backgroundColor: '#5346A0',
                      color: '#fff',
                      width: '35px',
                      height: '35px',
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 0,
                      float: 'left',
                      fontSize: '12px',
                      marginLeft: '10px'
                    }}
                  >
                    MK
                  </span>
                  <span
                    style={{
                      color: '#000',
                      fontSize: 15,
                      float: 'left',
                      paddingLeft: '10px',
                      paddingTop: '5px'
                    }}
                  >
                    Mahesh Srinivasan
                  </span>
                  <MoreVert
                    style={{
                      color: '#707070',
                      float: 'left',
                      marginTop: '2px'
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>Logo</DrawerHeader>
          <Divider />
          <DrawerList />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          hi
        </Box>
      </Box>
    </div>
  );
}
