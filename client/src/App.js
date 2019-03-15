import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ButtonCheckbox from "./components/buttonCheckbox"
import FileReader from "./components/FileReader"
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <FileReader />
        <ButtonCheckbox />
      </React.Fragment>
    );
  }
}

export default App;
