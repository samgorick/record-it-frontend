import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/users";
import { NavLink } from "react-router-dom";

class Login extends React.Component {
  state = {
    username: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.loginUser(this.state.username);
    this.setState({
      username: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='username'
          value={this.state.username}
          placeholder='Enter username...'
          onChange={this.handleChange}
        ></input>
        <NavLink to='/notes'>
          <input type='submit'></input>
        </NavLink>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: username => dispatch(loginUser(username))
  };
};

export default connect(null, mapDispatchToProps)(Login);
