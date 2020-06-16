import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/users";

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
    this.props.loginUser(this.state.username, this.props.history);
    this.setState({
      username: ""
    });
  };

  render() {
    return (
      <div className='ui centered ten wide column grid'>
        <div className='column'>
          <h1 className='ui center aligned header'>Login</h1>
          <form className='ui large form' onSubmit={this.handleSubmit}>
            <div className='ui stacked segment'>
              <div className='field'>
                <div className='ui left icon input'>
                  <i className='user icon'></i>
                  <input
                    type='text'
                    name='username'
                    value={this.state.username}
                    placeholder='Enter username...'
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
              <button className='ui fluid large primary button' type='submit'>Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (username, history) => dispatch(loginUser(username, history))
  };
};

export default connect(null, mapDispatchToProps)(Login);
