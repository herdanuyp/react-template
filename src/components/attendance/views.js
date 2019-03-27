import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import TabularView from './tabularView/index'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class ViewTabs extends React.Component {
  state = {
    value: 1,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color='default'>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="List View" />
            <Tab label="Tabular View" />
            <Tab label="Calendar View" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>List View</TabContainer>}
        {value === 1 && <TabContainer><TabularView /></TabContainer>}
        {value === 2 && <TabContainer>Calendar View</TabContainer>}
      </div>
    );
  }
}

export default withStyles(styles)(ViewTabs);