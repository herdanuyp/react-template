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

// let color = ['red', 'pink', 'purple', 'blue', 'orange', 'cadetblue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'brown', 'grey']
// const 'red' () => {
//     let randomNumber = Math.floor(Math.random() * color.length);
//     let randomColor = color[randomNumber];
//     return randomColor;
// }

export const RoundList = () => {
  return (
    <div>
      <div className="title-dashboard-home">dashboard</div>
      <div id="roundListWrapper">
      <div className="rounded-wrapper" style={{ backgroundColor: "red" }}>
        <div class="icon-rounded">
          <AccountCircle />
        </div>
        <div className="description-rounded"> Employee Management </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "pink" }}>
        <div class="icon-rounded">
          <GroupAdd />
        </div>
        <div className="description-rounded">Recruitment </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "purple" }}>
        <div class="icon-rounded">
          <AttachMoney />
        </div>
        <div className="description-rounded">Payroll </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "blue" }}>
        <div class="icon-rounded">
          <AccessTime />
        </div>
        <div className="description-rounded">Leave </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "orange" }}>
        <div class="icon-rounded">
          <Event />
        </div>
        <div className="description-rounded">Training </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "teal" }}>
        <div class="icon-rounded">
          <School />
        </div>
        <div className="description-rounded">Appraisal </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "salmon" }}>
        <div class="icon-rounded">
          <AirplanemodeActive />
        </div>
        <div className="description-rounded">Travel </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "cornflowerblue" }}>
        <div class="icon-rounded"> 
          <Money />
        </div>
        <div className="description-rounded">
          Advances/Loans
        </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "green" }}>
        <div class="icon-rounded"> 
          <AccountBalance />
        </div>
        <div className="description-rounded">
          Assets/Claims
        </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "yellowgreen" }}>
        <div class="icon-rounded">
          <Check />
        </div>
        <div className="description-rounded">
          Attendance
        </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "brown" }}>
        <div class="icon-rounded">
          <Assignment />
        </div>
        <div className="description-rounded">
          Task Management
        </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "gold" }}>
        <div class="icon-rounded">
          <AssignmentReturned />
        </div>
        <div className="description-rounded">Reports </div>
      </div>
      <div className="rounded-wrapper" style={{ backgroundColor: "grey" }}>
        <div class="icon-rounded">
          <Build />
        </div>
        <div className="description-rounded">Settings </div>
      </div>
      </div>
    </div>
  );
};
