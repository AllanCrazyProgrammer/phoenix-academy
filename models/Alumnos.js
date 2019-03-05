const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alumnoSchema = new Schema({
    title: {
        alumno: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    curp: {
        type: Number,
        required: true
    },
    enfermedad: {
        type: String,
        required: false
    }
});

const Alumno = mongoose.model('Alumno', alumnoSchema);

module.exports = Book;