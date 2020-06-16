import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notes from "./containers/Notes";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import CreateNote from "./components/CreateNote";
import EditNote from "./components/EditNote"
import ShowNote from "./components/ShowNote"
import { connect } from "react-redux";
import {logoutUser} from "./actions/users"

class App extends React.Component {

  logout = () => {
    this.props.logout()
  }

  render() {
    return (
      <Router>
        <div className='ui grid container'>
          {this.props.loggedIn ? (
            <>
              <Navbar logout={this.props.logout}/>
              <Switch>
                <Route exact path='/notes/new' component={CreateNote} />
                <Route exact path='/notes/:id' component={ShowNote} />
                <Route exact path='/notes/edit/:id' component={EditNote} />
                <Route exact path='/notes' component={Notes} />
              </Switch>
            </>
          ) : (
            <>
              <Route path='/' component={Login} />
            </>
          )}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return { loggedIn: state.users.id };
};

const mapDispatchToProps = dispatch => {
  return { logout: () => dispatch(logoutUser())}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
