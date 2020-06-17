import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/users";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

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
    console.log(this.props)
    return (
      <Grid centered columns={2} className='max-height' verticalAlign='middle'>
        <Grid.Column>
          <Header as='h1' textAlign='center'>
            Login
          </Header>
          <Segment>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                type='text'
                name='username'
                value={this.state.username}
                placeholder='Enter username...'
                onChange={this.handleChange}
              />
              <Button fluid color='blue' size='large' type='submit'>
                Login
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (username, history) => dispatch(loginUser(username, history))
  };
};

export default connect(null, mapDispatchToProps)(Login);
