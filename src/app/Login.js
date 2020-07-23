import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from './userActions';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { Formik } from 'formik';

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (username, history) => dispatch(loginUser(username, history))
  };
};

class Login extends React.Component {
  handleSubmit = values => {
    this.props.loginUser(values, this.props.history);
  };

  render() {
    return (
      <Grid centered columns={2} className='max-height' verticalAlign='middle'>
        <Grid.Column>
          <Header as='h1' textAlign='center'>
            Login
          </Header>
          <Segment>
            <Formik
              initialValues={{ username: '', password: '' }}
              validate={values => {
                const errors = {};
                if (!values.username) {
                  errors.username = 'Required';
                }
                return errors;
              }}
              onSubmit={values => this.handleSubmit(values)}
            >
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <Form size='large' onSubmit={handleSubmit}>
                  {errors.username && touched.username ? (
             <Header>{errors.username}</Header>
           ) : null}
                  <Form.Input
                    fluid
                    icon='user'
                    iconPosition='left'
                    type='text'
                    name='username'
                    value={values.username}
                    placeholder='Enter username...'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && errors.password}
                  <Form.Input
                    fluid
                    icon='key'
                    iconPosition='left'
                    type='password'
                    name='password'
                    value={values.password}
                    placeholder='Enter password...'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Button fluid color='blue' size='large' type='submit'>
                    Login
                  </Button>
                  <Link to='/signup'>Sign Up</Link>
                </Form>
              )}
            </Formik>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(null, mapDispatchToProps)(Login);
