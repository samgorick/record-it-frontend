import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Notes from "./containers/Notes";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import CreateNote from "./components/CreateNote";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='ui grid container'>
          {this.props.loggedIn ? (
            <>
              <Navbar />
              <Route exact path='/notes/new' component={CreateNote} />
              <Route exact path='/notes' component={Notes} />
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

export default connect(mapStateToProps)(App);
