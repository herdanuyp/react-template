import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import "./index.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from 'axios';

import DetailSpecifyEntry from "./detailSpecifyEntry";
// import { TubularData } from './fakeData';


const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class TabularView extends Component {
  state = {
    tubularData: [],
    dataSpecify: [],
    right: false
  };
  
  componentDidMount(){
    axios.get(`http://localhost:8888/view/tabular-data`, {
      headers: {
        'Authorization': `Bearer ${this.props.auth.getAccessToken()}`
      }
    })
    .then((response) => {
      this.setState({
        tubularData: response.data
      })
    })
  }

  getTableRowData = rowData => {
    this.setState({
      dataSpecify: rowData
    });
  };

  toggleDrawer = open => {
    this.setState({
      right: open
    });
  };

  render() {
    const { classes } = this.props;
    const { tubularData } = this.state;

    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">First In</TableCell>
                <TableCell align="right">First Out</TableCell>
                <TableCell align="right">Total Hours</TableCell>
                <TableCell align="right">Working Hours</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="right">Regularization</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tubularData.map(row => (
                <TableRow
                  key={row.id}
                  onClick={() => {
                    if (row.status.substr(0, 7).toLowerCase() === "weekend") {
                      alert("There is no data specify due to weekend");
                    } else {
                      this.toggleDrawer(true);
                      this.getTableRowData(row);
                    }
                  }}
                >
                  <TableCell>{row.date}</TableCell>
                  <TableCell align="right">
                    <span className="little-round" />
                    {row.firstIn}
                  </TableCell>
                  <TableCell align="right">
                    <span className="little-round" />
                    {row.firstOut}
                  </TableCell>
                  <TableCell align="right">
                    <span className="little-round" />
                    {row.totalHours}
                  </TableCell>
                  <TableCell align="right">
                    <span className="little-round" />
                    {row.workingHours}
                  </TableCell>
                  <TableCell align="left">
                    <span
                      className={`dot-${row.status.substr(0, 7).toLowerCase()}`}
                    />
                    {row.status}
                  </TableCell>
                  <TableCell align="right">
                    <span className="little-round" />
                    {row.regularization}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <DetailSpecifyEntry
          state={this.state}
          toggleDrawer={this.toggleDrawer}
        />
      </div>
    );
  }
}

export default withStyles(styles)(TabularView);
