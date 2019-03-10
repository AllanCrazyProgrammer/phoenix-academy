import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Alumnos from "./pages/AllAlumnos"
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Alumnos />
      </React.Fragment>
    );
  }
}

export default App;
