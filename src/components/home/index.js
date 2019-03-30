import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { LeftList, RightList } from "./listItems";
import Paper from "@material-ui/core/Paper";
import { RoundList } from "./roundList";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paperRoot: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }, rounderRoot : {
    marginTop: 20
  }
});

class HomeMenu extends React.Component {
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paperRoot}>
          <Grid container>
            <Grid item xs={12} md={6}>
              {LeftList}
            </Grid>
            <Grid item xs={12} md={6}>
              {RightList}
            </Grid>
          </Grid>
        </Paper>
        <div>
          
        <Paper className={classes.rounderRoot}>
          <RoundList />
          </Paper>
        </div>
      </div>
    );
  }
    
  }

export default withStyles(styles)(HomeMenu);
