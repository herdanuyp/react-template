import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import GroupAdd from '@material-ui/icons/GroupAdd';
import AttachMoney from '@material-ui/icons/AttachMoney';
import AccessTime from '@material-ui/icons/AccessTime';
import Event from '@material-ui/icons/Event';
import School from '@material-ui/icons/School';
import AirplanemodeActive from '@material-ui/icons/AirplanemodeActive';
import Money from '@material-ui/icons/Money';
import AccountBalance from '@material-ui/icons/AccountBalance';
import Check from '@material-ui/icons/Check';
import Assignment from '@material-ui/icons/Assignment';
import AssignmentReturned from '@material-ui/icons/AssignmentReturned';
import Build from '@material-ui/icons/Build';
import { NavLink } from 'react-router-dom';

import './listItems.css'

export const mainListItems = (
  <div id="side-bar-main-list">
  <NavLink to='/dashboard/'>
    <ListItem button>
      <ListItemIcon>
        <Home />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    </NavLink>
    <ListItem button>
      <ListItemIcon>
        <AccountCircle />
      </ListItemIcon>
      <ListItemText primary="Employee Management" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GroupAdd />
      </ListItemIcon>
      <ListItemText primary="Recruitment" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AttachMoney />
      </ListItemIcon>
      <ListItemText primary="Payroll" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccessTime />
      </ListItemIcon>
      <ListItemText primary="Leave" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Event />
      </ListItemIcon>
      <ListItemText primary="Training" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <School />
      </ListItemIcon>
      <ListItemText primary="Appraisal" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AirplanemodeActive />
      </ListItemIcon>
      <ListItemText primary="Travel" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Money />
      </ListItemIcon>
      <ListItemText primary="Advance/Loans" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountBalance />
      </ListItemIcon>
      <ListItemText primary="Assests/Claims" />
    </ListItem>
      <NavLink to='/dashboard/attendance-views'>
    <ListItem button>
      <ListItemIcon>
        <Check />
      </ListItemIcon>
      <ListItemText primary="Attendance" />
    </ListItem>
      </NavLink>
    <ListItem button>
      <ListItemIcon>
        <Assignment />
      </ListItemIcon>
      <ListItemText primary="Task Management" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentReturned />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Build />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
);