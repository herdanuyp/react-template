import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Popover from "@material-ui/core/Popover";
import { withStyles } from "@material-ui/core/styles";
import LocationOn from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";

import MapsDetailSpecifyEntry from "./mapsDetailSpecifyEntry";

const styles = theme => ({
  popover: {
    pointerEvents: "none"
  },
  paper: {
    padding: theme.spacing.unit,
    width: "23%",
    height: "35%"
  }
});

class DetailSpecifyEntry extends React.Component {
  state = {
    anchorEl: null
  };

  handlePopoverOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };

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

    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Drawer
          anchor="right"
          open={this.props.state.right}
          onClose={() => this.props.toggleDrawer(false)}
        >
          <div tabIndex={0}>
            <div className="detail-specify-entry-content">
              <div className="date-now">{newdate}</div>
              <hr />
              <div className="specify-entry-time-and-place">
                <Grid container spacing={8}>
                  <Grid item xs={6}>
                    <div>
                      <h3>Check-In</h3>
                      {this.props.state.dataSpecify.firstIn}
                      <div
                        className="location-detail"
                        aria-owns={open ? "mouse-over-popover" : undefined}
                        aria-haspopup="true"
                        onMouseEnter={this.handlePopoverOpen}
                        onMouseLeave={this.handlePopoverClose}
                      >
                        <small>
                          <span className="location-icon">
                            <LocationOn />
                          </span>
                          <span className="location-name">
                            {this.props.state.dataSpecify.locationName}
                          </span>
                        </small>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div>
                      <h3>Check-Out</h3>
                      {this.props.state.dataSpecify.firstOut}
                      <div
                        className="location-detail"
                        aria-owns={open ? "mouse-over-popover" : undefined}
                        aria-haspopup="true"
                        onMouseEnter={this.handlePopoverOpen}
                        onMouseLeave={this.handlePopoverClose}
                      >
                        <small>
                          <span className="location-icon">
                            <LocationOn />
                          </span>
                          <span className="location-name">
                            {this.props.state.dataSpecify.locationName}
                          </span>
                        </small>
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Popover
                  id="mouse-over-popover"
                  className={classes.popover}
                  classes={{
                    paper: classes.paper
                  }}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                  }}
                  onClose={this.handlePopoverClose}
                  disableRestoreFocus
                >
                  <MapsDetailSpecifyEntry />
                </Popover>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(DetailSpecifyEntry);
