import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Auth from '../Auth/auth';
import './signIn.css'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaperSheet(props) {
  const { classes } = props;
  const auth = new Auth();

  const login = () => {
    auth.login();
  }

  return (
    <div className='sign-in-page'>
      <Paper className={classes.root} elevation={4}>
        <h1>This app is using Auth0 to sign in, please click button below to proceed</h1>
      <Button variant="contained" color="secondary" className={classes.button} onClick={login}>
        Sign In
      </Button>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);