import axios from 'axios';

export default {
    // Gets all alumnos
    getAlumnos: function () {
        console.log("getAlumnos API");
        return axios.get('/api/alumnos/');
    },
    // Gets the alumno with the given id
    getOneAlumno: function (id) {
        return axios.get('/api/alumnos/' + id);
    },
    // Deletes the alumno with the given id
    deleteAlumno: function (id) {
        return axios.delete('/api/alumnos/' + id);
    },
    // Saves a alumno to the database
    saveAlumno: function (alumnoData) {
        return axios.post('/api/alumnos', alumnoData);
    }
};