import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import * as firebase from 'firebase';

class CompleteRegistrationModal extends React.Component {

  constructor(props) {
    super(props);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      password: ''
    };
  }



  handleEmailChange(event, email) {
    this.setState({
      email: email
    });
  }

  handlePasswordChange(event, password) {
    this.setState({
      password: password
    });
  }

  handleSubmit() {
    const creds = this.state;
    firebase.auth().createUserWithEmailAndPassword(creds.email, creds.password).then(function() {
      // const user = firebase.auth().currentUser;
      // console.log(user);
      //logUser(user); // Optional
    }, function() {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // console.log(errorCode, errorMessage);
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleClose}
        key='cancelButton'
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={this.state.password.length === 0 || this.state.email.length === 0}
        onTouchTap={this.handleSubmit}
        key='submitButton'
      />,
    ];

    return (
      <Dialog
        title="Register New Account"
        actions={actions}
        modal={true}
        open={this.props.open}
      >
        Thanks for registering!
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
}

export default CompleteRegistrationModal;
