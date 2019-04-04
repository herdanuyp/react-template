import React from "react";
import "./roundList.css";
import AccountCircle from "@material-ui/icons/AccountCircle";
import GroupAdd from "@material-ui/icons/GroupAdd";
import AttachMoney from "@material-ui/icons/AttachMoney";
import AccessTime from "@material-ui/icons/AccessTime";
import Event from "@material-ui/icons/Event";
import School from "@material-ui/icons/School";
import AirplanemodeActive from "@material-ui/icons/AirplanemodeActive";
import Money from "@material-ui/icons/Money";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Check from "@material-ui/icons/Check";
import Assignment from "@material-ui/icons/Assignment";
import AssignmentReturned from "@material-ui/icons/AssignmentReturned";
import Build from "@material-ui/icons/Build";
import { NavLink } from "react-router-dom";

// let color = ['red', 'pink', 'purple', 'blue', 'orange', 'cadetblue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'brown', 'grey']
// const 'red' () => {
//     let randomNumber = Math.floor(Math.random() * color.length);
//     let randomColor = color[randomNumber];
//     return randomColor;
// }

export const RoundList = () => {
  return (
    <div className="round-list-items">
      <div className="title-dashboard-home">dashboard</div>
      <div id="roundListWrapper">
      <div className="rounded-wrapper" style={{ backgroundColor: "red" }}>
        <div className="icon-rounded">
          <AccountCircle />
        </div>
        <div className="description-rounded"> Employee Management </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "pink" }}>
        <div className="icon-rounded">
          <GroupAdd />
        </div>
        <div className="description-rounded">Recruitment </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "purple" }}>
        <div className="icon-rounded">
          <AttachMoney />
        </div>
        <div className="description-rounded">Payroll </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "blue" }}>
        <div className="icon-rounded">
          <AccessTime />
        </div>
        <div className="description-rounded">Leave </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "orange" }}>
        <div className="icon-rounded">
          <Event />
        </div>
        <div className="description-rounded">Training </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "teal" }}>
        <div className="icon-rounded">
          <School />
        </div>
        <div className="description-rounded">Appraisal </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "salmon" }}>
        <div className="icon-rounded">
          <AirplanemodeActive />
        </div>
        <div className="description-rounded">Travel </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "cornflowerblue" }}>
        <div className="icon-rounded"> 
          <Money />
        </div>
        <div className="description-rounded">
          Advances/Loans
        </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "green" }}>
        <div className="icon-rounded"> 
          <AccountBalance />
        </div>
        <div className="description-rounded">
          Assets/Claims
        </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "yellowgreen" }}>
        <NavLink to="/dashboard/attendance-views">
          <div className="icon-rounded">
            <Check />
          </div>
          <div className="description-rounded">
            Attendance
          </div>
        </NavLink>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "brown" }}>
        <div className="icon-rounded">
          <Assignment />
        </div>
        <div className="description-rounded">
          Task Management
        </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "gold" }}>
        <div className="icon-rounded">
          <AssignmentReturned />
        </div>
        <div className="description-rounded">Reports </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "grey" }}>
        <div className="icon-rounded">
          <Build />
        </div>
        <div className="description-rounded">Settings </div>
      </div>
      </div>
    </div>
  );
};
