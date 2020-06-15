import React from 'react';
import Navbar from './components/Navbar'
import Notes from './containers/Notes'
import Login from './components/Login'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Notes />
    </div>
  );
}

export default App;
