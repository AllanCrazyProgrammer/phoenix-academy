import React, { Component } from 'react';
import AddModal from "../pages/addModal"
import AllAlumnos from "../pages/AllAlumnos"
class NavButtons extends Component {
    state = {}
    render() {
        return (
            <>
                <AddModal />
                <AllAlumnos />
            </>
        );
    }
}

export default NavButtons;