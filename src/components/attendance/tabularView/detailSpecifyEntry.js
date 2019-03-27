import React from "react";
import Drawer from "@material-ui/core/Drawer";

import MapsDetailSpecifyEntry from './mapsDetailSpecifyEntry';

class DetailSpecifyEntry extends React.Component {
  render() {
    let dateObj = new Date();
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let month = months[dateObj.getMonth()];
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let dayNumber = dateObj.getDay();

    let newdate = days[dayNumber] + ", " + month + " " + day + " " + year;
    return (
      <div>
        <Drawer
          anchor="right"
          open={this.props.state.right}
          onClose={() => this.props.toggleDrawer(false)}
        >
          <div
            tabIndex={0}
          >
            <div className="detail-specify-entry-content">
              <div className="date-now">{newdate}</div>
              <hr/>
              <div className="specify-entry-time-and-place">
                <div>
                  {this.props.state.dataSpecify.firstIn}
                  {this.props.state.dataSpecify.firstOut}
                </div>
                <MapsDetailSpecifyEntry />
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default DetailSpecifyEntry;
