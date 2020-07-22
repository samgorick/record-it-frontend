import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { loginUser } from './userActions';
import { Button, Form, Grid, Header, Segment, Loader } from 'semantic-ui-react';

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (username, history) => dispatch(loginUser(username, history))
  };
};

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    isLoading: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    delete this.state.isLoading
    this.props.loginUser(this.state, this.props.history);
    this.setState({
      username: '',
      isLoading: false
    });
  };

  handleLoad = event => {
    event.preventDefault();
    this.setState({
      isLoading: true
    });
    setTimeout(this.handleSubmit, 1000);
  };

  render() {
    return (
      <Grid centered columns={2} className='max-height' verticalAlign='middle'>
        <Grid.Column>
          <Header as='h1' textAlign='center'>
            Login
          </Header>
          {this.state.isLoading ? <Loader active /> : null}
          <Segment>
            <Form size='large' onSubmit={this.handleLoad}>
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
              <Form.Input
                fluid
                icon='key'
                iconPosition='left'
                type='password'
                name='password'
                value={this.state.password}
                placeholder='Enter password...'
                onChange={this.handleChange}
              />
              <Button fluid color='blue' size='large' type='submit'>
                Login
              </Button>
              <Link to="/signup">Sign Up</Link>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(null, mapDispatchToProps)(Login);
