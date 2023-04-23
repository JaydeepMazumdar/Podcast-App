import React from "react";
import Button from "@mui/material/Button";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
// import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
// import TurnedInRoundedIcon from '@mui/icons-material/TurnedInRounded';
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="sidenav">
        <div className="logobox"></div>
        <List
          sx={{
            width: "80%",
            maxWidth: 360,
            bgcolor: "#002147",
            color: "#EBE7D9"
          }}
          className="nav-menu"
        >
          <ListItem className="listItem">
            <ListItemAvatar>
              <Avatar className="avatar">
                <HomeOutlinedIcon  style={{color: "#002147"}}/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem className="listItem">
            <ListItemAvatar>
              <Avatar className="avatar">
                <TurnedInNotOutlinedIcon style={{color: "#002147"}} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Your Library" />
          </ListItem>
          <ListItem className="listItem">
            <ListItemAvatar>
              <Avatar className="avatar">
                <NotificationsOutlinedIcon  style={{color: "#002147"}}/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Notifications" />
          </ListItem>
        </List>
      </div>
      <nav>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search all your favourite podcasts..."
          />
          <Button>
            <SearchRoundedIcon />
          </Button>
        </div>
        <div className="auth-btn">
          <Button variant="outlined" className="login a-btn">
            Login
          </Button>
          <Button variant="contained" className="signup a-btn">
            Sign up
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
