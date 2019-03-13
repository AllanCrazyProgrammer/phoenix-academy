import React, { Component } from 'react';
import API from "../utils/API"
import ButtonCheckbox from "../components/buttonCheckbox"
import Table from 'react-bootstrap/Table'


class AllAlumnos extends Component {
    state = {
        alumnos: []
    }

    componentDidMount() {
        this.loadAlumnos();
    }

    loadAlumnos = () => {
        API.getAlumnos()
            .then(res => {
                this.setState({
                    alumnos: res.data
                })
            })
            .catch(err =>

                console.log("FALLANDO" + err));
    };
    render() {
        return (
            <container fluid>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Direccion</th>
                            <th>Curp</th>
                            <th>Enfermedad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.alumnos.map(alumno => (
                                <tr>
                                    <td>{alumno.alumno}</td>
                                    <td>{alumno.edad}</td>
                                    <td>{alumno.direccion}</td>
                                    <td>{alumno.curp}</td>
                                    <td>{alumno.enfermedad}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>;

            </container>
        );
    }
}

export default AllAlumnos;