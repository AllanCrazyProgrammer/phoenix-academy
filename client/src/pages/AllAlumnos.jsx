import React, { Component } from 'react';
import API from "../utils/API"
import ButtonCheckbox from "../components/buttonCheckbox"
import { Link } from 'react-router-dom';


class AllAlumnos extends Component {
    state = {
        nombre: "",
        edad: "",
        direccion: "",
        curp: "",
        enfermedad: ""
    }

    loadAlumnos = () => {
        API.getAlumno()
            .then(res => this.setState({
                nombre: res.data,
                edad: res.data,
                direccion: res.data,
                curp: res.data,
                enfermedad: res.data
            }))
            .catch(err => console.log(err));
    };
    render() {
        return (
            <container fluid>
                <ButtonCheckbox method={"get"} />


            </container>
        );
    }
}

export default AllAlumnos;