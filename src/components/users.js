import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/userActions';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Users extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: { username: '', profilePic: '' }
    };

    this.setUser = this.setUser.bind(this);
    this.addUser = this.addUser.bind(this);
    this.userRow = this.userRow.bind(this);
  }

  setUser(event) {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({user: user});
  }

  addUser() {
    this.props.actions.createUser(this.state.user);
  }

  userRow(user, index) {
    return <div key={index}>
      <p>Username: {user.username}</p>
      <p>Profile Picture: {user.profilePic}</p>
      <br></br>
    </div>
  }

    render() {
        return (
            <div className="flex-column container content-center">
                <h3>Add User</h3>
                <TextField
                  hintText="Name"
                  onChange={this.setUser}
                  name="username"
                  value={this.state.user.username}
                />
                <TextField
                  hintText="Profile Pic"
                  name="profilePic"
                  onChange={this.setUser}
                  value={this.state.user.profilePic}
                />
                <RaisedButton onClick={this.addUser} label="Add User" primary={true} />
                <h3>Overview</h3>
                {this.props.users.map(this.userRow)}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
