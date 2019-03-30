import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import "./signIn.css";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class SignInPage extends React.Component {
  login = () => {
    this.props.auth.login();
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="sign-in-page">
        <Paper className={classes.root} elevation={4}>
          <h1>
            This app is using Auth0 to sign in, please click button below to
            proceed
          </h1>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={this.login}
          >
            Sign In
          </Button>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(SignInPage);
