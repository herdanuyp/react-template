import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import "./index.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DetailSpecifyEntry from "./detailSpecifyEntry";

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

let id = 0;
function createData(
  date,
  firstIn,
  firstOut,
  totalHours,
  workingHours,
  status,
  regularization
) {
  id += 1;
  return {
    id,
    date,
    firstIn,
    firstOut,
    totalHours,
    workingHours,
    status,
    regularization
  };
}

const rows = [
  createData("Mon, 03-18-2019", "-", "-", "-", "-", "Weekend", ""),
  createData(
    "Tue, 03-19-2019",
    "09:11AM",
    "06:29PM",
    "09:18",
    "08:18",
    "Present",
    ""
  ),
  createData(
    "Wed, 03-20-2019",
    "09:11AM",
    "06:02PM",
    "08:50",
    "07:50",
    "Present",
    ""
  ),
  createData(
    "Thurs, 03-21-2019",
    "09:58AM",
    "06:36PM",
    "08:37",
    "07:37",
    "Present",
    ""
  ),
  createData(
    "Fri, 03-22-2019",
    "01:58AM",
    "07:10PM",
    "05:12",
    "04:12",
    "Present, test(Restricted)",
    ""
  ),
  createData(
    "Sat, 03-23-2019",
    "10:28AM",
    "06:33PM",
    "08:05",
    "07:05",
    "Present",
    ""
  ),
  createData("Sun, 03-24-2019", "-", "-", "-", "-", "Weekend", "")
];

class TabularView extends Component {
  state = {
    dataSpecify: [],
    right: false
  };

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
              {rows.map(row => (
                <TableRow
                  key={row.id}
                  onClick={() => {
                    if (row.firstIn === "-") {
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
