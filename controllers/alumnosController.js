const Alumno = require('../models/Alumnos');

// Defining all methods and business logic for routes

module.exports = {
	findAll: function(req, res) {
		Alumno.find(req.query)
			.then(alumnos => res.json(alumnos))
			.catch(err => res.status(422).json(err));
	},
	findById: function(req, res) {
		Alumno.findById(req.params.id)
			.then(alumno => res.json(alumno))
			.catch(err => res.status(422).json(err));
	},
	create: function(req, res) {
		Alumno.create(req.body)
			.then(newalumno => res.json(newalumno))
			.catch(err => res.status(422).json(err));
	},
	update: function(req, res) {
		Alumno.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(alumno => res.json(alumno))
			.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		Alumno.findById({ _id: req.params.id })
			.then(alumno => alumno.remove())
			.then(allalumnos => res.json(allalumnos))
			.catch(err => res.status(422).json(err));
	}
};