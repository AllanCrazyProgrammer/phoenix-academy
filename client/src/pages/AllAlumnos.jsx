import React, { Component } from 'react';
import API from "../utils/API"
import ButtonCheckbox from "../components/buttonCheckbox"
import Table from 'react-bootstrap/Table'


class AllAlumnos extends Component {
    state = {
        nombre: "",
        edad: "",
        direccion: "",
        curp: "",
        enfermedad: ""
    }

    componentDidMount() {
        this.loadAlumnos();
    }

    loadAlumnos = () => {
        API.getAlumnos()
            .then(res => {
                console.log(res)
                this.setState({
                    nombre: res.data,
                    edad: res.data,
                    direccion: res.data,
                    curp: res.data,
                    enfermedad: res.data
                })
            })
            .catch(err =>

                console.log("FALLANDO" + err));
    };
    render() {
        return (
            <container fluid>
                <ButtonCheckbox method={"get"} />
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

                        }
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>;

            </container>
        );
    }
}

export default AllAlumnos;