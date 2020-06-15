import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/users'

class Login extends React.Component {

  state = {
    username: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.username)
    this.props.loginUser(this.state.username)
    this.setState({
      username: ""
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" value={this.state.username} placeholder="Enter username..." onChange={this.handleChange}>
        </input>
        <input type="submit">
        </input>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (username) => dispatch(loginUser(username))
    }
  }

export default connect(null, mapDispatchToProps)(Login)