import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from './userActions';
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Please enter your username'),
  password: Yup.string().required('Please enter your password')
});

const Login = props => (
  <Grid centered columns={2} className='max-height' verticalAlign='middle'>
    <Grid.Column>
      <Header as='h1' textAlign='center'>
        Login
      </Header>
      <Segment>
        {props.user.error ? (
          <Message error header={props.user.error} content='Try again, or sign up if this is your first time here' />
        ) : null}
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={values => props.loginUser(values, props.history)}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <Form size='large' onSubmit={handleSubmit}>
              <Form.Input
                fluid
                error={
                  errors.username && touched.username ? { content: errors.username, pointing: 'below' } : undefined
                }
                icon='user'
                iconPosition='left'
                type='text'
                name='username'
                value={values.username}
                placeholder='Enter username...'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Form.Input
                fluid
                error={
                  errors.password && touched.password ? { content: errors.password, pointing: 'below' } : undefined
                }
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
            </Form>
          )}
        </Formik>
      </Segment>
      <Header as='h3' textAlign='center'>
        <Link to='/signup'>Not registered? Sign Up</Link>
      </Header>
    </Grid.Column>
  </Grid>
);

export default connect(state => ({ user: state.users }), { loginUser })(Login);
