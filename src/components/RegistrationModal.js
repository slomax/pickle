import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {grey500, white} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import * as firebase from 'firebase';

class RegistrationModal extends React.Component {

  constructor(props) {
    super(props);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      password: ''
    }
  }



  handleEmailChange(event, email) {
    this.setState({
      email: email
    })
  }

  handlePasswordChange(event, password) {
    this.setState({
      password: password
    })
  }

  handleSubmit() {
    const f = firebase;
    debugger;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={this.state.password.length === 0 || this.state.email.length === 0}
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (
      <Dialog
        title="Register New Account"
        actions={actions}
        modal={true}
        open={this.props.open}
      >
        <TextField
          hintText="e-mail"
          floatingLabelText="e-mail"
          fullWidth={true}
          onChange={this.handleEmailChange}
        />
        <TextField
          hintText="password"
          floatingLabelText="password"
          fullWidth={true}
          type="password"
          onChange={this.handlePasswordChange}
        />
      </Dialog>
    );
  }
};

export default RegistrationModal;
