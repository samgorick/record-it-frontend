import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Notes from "./containers/Notes";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Route path='/login' component={Login} />
        <Route path='/notes' component={Notes} />
      </div>
    </Router>
  );
}

export default App;
