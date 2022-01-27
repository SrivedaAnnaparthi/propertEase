import * as React from 'react';
import { styled, } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, Route, Routes } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
// import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import Dashboard from '../Components/DashboardComponents';
import { Tooltip } from '@mui/material';
// import LoginPage from './LoginPage';
import Transaction from './TransactionDetails';
import GuestDetails from './GuestDetails';
import Form from './Form';
import NoticeList from './NoticeList';
import Receipt from './Receipt';
// import { lightGreen } from '@mui/material/colors';



const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer)(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    start:'edge',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  return (
    < div >

      <div>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar sx={{
            // keep right padding when drawer closed

          }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SRI LAKSHMI HEAVENS PG
            </Typography>
            <Tooltip title="logout"><Link to="/" style={{ color: '#FFF' }} > <LogoutIcon /></Link></Tooltip>
          </Toolbar>

        </AppBar>
      </div>
      <div>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <DrawerHeader 
          >
          </DrawerHeader>
          <Divider />
          <Link to="/home" style={{ textDecoration: 'none', }}   >
            <ListItem button>
              <ListItemIcon>

              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
          <Divider/>
          <Link to="/form" style={{ textDecoration: 'none' }} color='default'>
            <ListItem button>
              <ListItemIcon>

              </ListItemIcon>
              <ListItemText primary="Guest Check-In" />
            </ListItem>
          </Link>
          <Divider/>
          <Link to="/NoticeList" style={{ textDecoration: 'none' }} color='default'>
          <ListItem button>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="NoticeList" />
          </ListItem>
          </Link>
          <Divider/>
          <Link to="/transaction" style={{ textDecoration: 'none' }} color='default'>
            <ListItem button>
              <ListItemIcon>

              </ListItemIcon>
              <ListItemText primary="Transaction" />
            </ListItem>
          </Link>
          <Divider/>
          <Link to="/userdetails" style={{ textDecoration: 'none' }} color='default'>
            <ListItem button>
              <ListItemIcon>

              </ListItemIcon>
              <ListItemText primary="Guest Details" />
            </ListItem>
          </Link>
          <Divider/>
          <Link to="/receipt" style={{ textDecoration: 'none', }} color='default'>
          <ListItem button>
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText primary="Receipt" />
          </ListItem>
          </Link>
          <Divider/>
        </Drawer>
      </div>
      <Box component="main" sx={{ flexGrow: 1, paddingTop: 12 }}>
        <Routes>
          <Route exact path="/home" element={<Dashboard />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/transaction" element={<Transaction />} />
          <Route exact path="/userdetails" element={<GuestDetails />} />
          <Route exact path="/Noticelist" element={<NoticeList />} />
          <Route exact path="/receipt" element={<Receipt />} />
        
        </Routes>
      </Box>

    </div >
  );
}