import React from 'react';
import { connect } from 'react-redux';
import { signupUser } from './userActions';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
  username: Yup.string().required('Please enter your username'),
  password: Yup.string().required('Please enter your password'),
  passwordConfirmation: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

class Signup extends React.Component {
  
  handleSubmit = values => {
      delete values.passwordConfirmation;
      this.props.signupUser(values, this.props.history);
    }

  render() {
    return (
      <Grid centered columns={2} className='max-height' verticalAlign='middle'>
        <Grid.Column>
          <Header as='h1' textAlign='center'>
            Sign Up
          </Header>
          <Segment>
            <Formik
              initialValues={{ username: '', password: '', passwordConfirmation: '' }}
              validationSchema={signupSchema}
              onSubmit={values => this.handleSubmit(values)}
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
                  <Form.Input
                    fluid
                    error={
                      errors.passwordConfirmation && touched.passwordConfirmation ? { content: errors.passwordConfirmation, pointing: 'below' } : undefined
                    }
                    icon='key'
                    iconPosition='left'
                    type='password'
                    name='passwordConfirmation'
                    value={values.passwordConfirmation}
                    placeholder='Confirm Password...'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Button fluid color='blue' size='large' type='submit'>
                    Sign Up
                  </Button>
                  <Header as='h3' textAlign='center'>
                    <Link to='/login'>Already Signed Up? Log in instead!</Link>
                  </Header>
                </Form>
              )}
            </Formik>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(null, { signupUser })(Signup);
