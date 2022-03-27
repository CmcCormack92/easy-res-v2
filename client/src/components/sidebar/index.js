import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Home from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/icons-material/Menu';




const listItems = [
  {
    listIcon: <Home />,
    listText: "Home"
  },
  {
    listIcon: <DashboardIcon/>,
    listText: "Dashboard"
  },
  {
    listIcon: <PersonIcon />,
    listText: "Owned Restaurants"
  },
  {
    listIcon: <EmailIcon />,
    listText: "Contact Us"
  }
];

export default function App() {
  
  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };

  const SideList = () => (
    <Box sx={{width: 250,
        background: "#511",
        height: "100%"}} component="div">
      <Avatar
        sx={{margin: "0.5rem auto",
        padding: "1rem",
        width: '',
        height: ''}}
        src=""
      />
      <Divider />
      <List>
        {listItems.map((listItem, index) => (
          <ListItem style={{color:'tan'}} button key={index}>
            <ListItemIcon style={{color:'tan'}}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText primary={listItem.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />

      <Box component="nav">
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={toggleSlider}>
              <Menu />
            </IconButton>
            <Typography></Typography>
            <Drawer open={open} anchor="right" onClose={toggleSlider}>
              {SideList()}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
