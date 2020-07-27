import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoteContainer from '../note/NoteContainer';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';
import NoteCreate from '../note/NoteCreate';
import NoteEdit from '../note/NoteEdit';
import NoteFullShow from '../note/NoteFullShow';
import FollowContainer from '../follow/FollowContainer'
import { connect } from 'react-redux';
import { logoutUser } from './userActions';
import { Container } from 'semantic-ui-react';

const App = props => (
      <Router>
        {props.loggedIn ? (
          <>
            <Navbar logoutUser={props.logoutUser} />
            <Container>
              <Switch>
                <Route exact path='/notes/new' component={NoteCreate} />
                <Route exact path='/notes/:id' component={NoteFullShow} />
                <Route exact path='/notes/edit/:id' component={NoteEdit} />
                <Route exact path='/explore' component={FollowContainer} />
                <Route exact path='/notes' component={NoteContainer} />
              </Switch>
            </Container>
          </>
        ) : (
          <Container className='max-height'>
            <Route path='/signup' component={Signup} />
            <Route path='/' component={Login} />
          </Container>
        )}
      </Router>
    );

export default connect(state => ({loggedIn: state.users.id}), { logoutUser })(App);
