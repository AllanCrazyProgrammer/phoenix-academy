import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavButtons from "./pages/NavButtons"
import './App.css';
import EditModal from './components/editModal';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={NavButtons} />
            <Route exact path="/:id" component={EditModal} />
          </Switch>
        </>
      </Router>

    );
  }
}

export default App;
