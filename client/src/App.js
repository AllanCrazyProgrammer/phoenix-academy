import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ButtonCheckbox from "./components/buttonCheckbox"
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ButtonCheckbox />
      </React.Fragment>
    );
  }
}

export default App;
