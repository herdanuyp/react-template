import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PrintDisabled from "@material-ui/icons/PrintDisabled";
import Cake from "@material-ui/icons/Cake";
import CreditCard from "@material-ui/icons/CreditCard";
import AssignmentLate from "@material-ui/icons/AssignmentLate";
import AccessibilityNew from "@material-ui/icons/AccessibilityNew";
import BorderColor from "@material-ui/icons/BorderColor";
import Avatar from "@material-ui/core/Avatar";
import deepPurple from "@material-ui/core/colors/deepPurple";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import deepOrange from "@material-ui/core/colors/deepOrange";
import blue from "@material-ui/core/colors/blue";
import yellow from "@material-ui/core/colors/yellow";

const styles = {
  purpleAvatar: {
    color: "#fff",
    backgroundColor: deepPurple[500]
  },
  redAvatar: {
    color: "#fff",
    backgroundColor: red[500]
  },
  greenAvatar: {
    color: "#fff",
    backgroundColor: green[500]
  },
  orangeAvatar: {
    color: "#fff",
    backgroundColor: deepOrange[500]
  },
  blueAvatar: {
    color: "#fff",
    backgroundColor: blue[500]
  },
  yellowAvatar: {
    color: "#fff",
    backgroundColor: yellow[500]
  }
};

export const LeftList = (
  <div className='left-list-items'>
    <ListItem button>
      <ListItemIcon>
        <PrintDisabled />
      </ListItemIcon>
      <ListItemText primary="Pending Leave Approvals" />
      <Avatar style={styles.orangeAvatar}>0</Avatar>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Cake />
      </ListItemIcon>
      <ListItemText primary="Upcoming Birthdays" />
      <Avatar style={styles.redAvatar}>0</Avatar>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CreditCard />
      </ListItemIcon>
      <ListItemText primary="Expiry Alerts" />
      <Avatar style={styles.greenAvatar}>0</Avatar>
    </ListItem>
  </div>
);

export const RightList = (
  <div className='right-list-items'>
    <ListItem button>
      <ListItemIcon>
        <AssignmentLate />
      </ListItemIcon>
      <ListItemText primary="Documents Not Submitted" />
      <Avatar style={styles.orangeAvatar}>0</Avatar>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccessibilityNew />
      </ListItemIcon>
      <ListItemText primary="Job Openings" />
      <Avatar style={styles.blueAvatar}>0</Avatar>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BorderColor />
      </ListItemIcon>
      <ListItemText primary="Attendances Not Marked" />
      <Avatar style={styles.yellowAvatar}>0</Avatar>
    </ListItem>
  </div>
);
