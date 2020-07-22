import React from 'react';
import { connect } from 'react-redux';
import { signupUser } from './userActions';
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

const mapDispatchToProps = dispatch => {
  return {
    signupUser: (user, history) => dispatch(signupUser(user, history))
  };
};

class Signup extends React.Component {
  state = {
    username: '',
    password: '',
    confirmation: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    if (this.state.password === this.state.confirmation) {
      delete this.state.confirmation
      this.props.signupUser(this.state, this.props.history);
    } else {
        alert('Password must match, nobbo!')
    } 
    this.setState({
      username: '',
      password: '',
      confirmation: ''
    });
  };

  render() {
    return (
      <Grid centered columns={2} className='max-height' verticalAlign='middle'>
        <Grid.Column>
          <Header as='h1' textAlign='center'>
            Sign Up
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
              <Form.Input
                fluid
                icon='key'
                iconPosition='left'
                type='password'
                name='confirmation'
                value={this.state.confirmation}
                placeholder='Confirm Password...'
                onChange={this.handleChange}
              />
              <Button fluid color='blue' size='large' type='submit'>
                Sign Up
              </Button>
              <Link to="/login">Already Signed Up? Log in instead!</Link>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(null, mapDispatchToProps)(Signup);
