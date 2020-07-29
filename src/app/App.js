import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoaderComponent from './loader/Loader';
import NoteContainer from '../note/NoteContainer';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';
import NoteCreate from '../note/NoteCreate';
import NoteEdit from '../note/NoteEdit';
import NoteFullShow from '../note/NoteFullShow';
import FollowContainer from '../follow/FollowContainer';
import { connect } from 'react-redux';
import { logoutUser, getCurrentUser } from './userActions';
import { Container } from 'semantic-ui-react';

class App extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.getCurrentUser(token);
    }
  }

  render() {
    return (
      <Router>
        {this.props.loading ? (
          <LoaderComponent />
        ) : this.props.loggedIn ? (
          <>
            <Navbar logoutUser={this.props.logoutUser} />
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
  }
}

export default connect(state => ({ loggedIn: state.users.id, loading: state.loading }), { logoutUser, getCurrentUser })(App);
