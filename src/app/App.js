import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoteContainer from '../note/NoteContainer';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';
import NoteCreate from '../note/NoteCreate';
import NoteEdit from '../note/NoteEdit';
import NoteFullShow from '../note/NoteFullShow';
import { connect } from 'react-redux';
import { logoutUser } from './userActions';
import { Container } from 'semantic-ui-react';

const mapStateToProps = state => {
  return { loggedIn: state.users.id };
};

const mapDispatchToProps = dispatch => {
  return { logout: () => dispatch(logoutUser()) };
};

class App extends React.Component {
  render() {
    return (
      <Router>
        {this.props.loggedIn ? (
          <>
            <Navbar logout={this.props.logout} />
            <Container>
              <Switch>
                <Route exact path='/notes/new' component={NoteCreate} />
                <Route exact path='/notes/:id' component={NoteFullShow} />
                <Route exact path='/notes/edit/:id' component={NoteEdit} />
                <Route exact path='/notes' component={NoteContainer} />
              </Switch>
            </Container>
          </>
        ) : (
          <Container className='max-height'>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
          </Container>
        )}
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
