import React, { Component } from 'react';
import ButtonCheckbox from "./components/buttonCheckbox"
import AddModal from "./components/addModal"
import DivideModal from "./components/addModal"
import MinusModal from "./components/addModal"
import MultiplyModal from "./components/addModal"

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <FileReader />
        <ButtonCheckbox />
        <AddModal />
        <DivideModal/>
        <MinusModal/>
        <MultiplyModal/>

      </React.Fragment>
    );
  }
}

export default App;
