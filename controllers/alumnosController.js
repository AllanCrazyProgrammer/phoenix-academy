const Alumno = require('../models/Alumnos');

// Defining all methods and business logic for routes

module.exports = {
	findAll: function(req, res) {
		alumno.find(req.query)
			.then(alumnos => res.json(alumnos))
			.catch(err => res.status(422).json(err));
	},
	findById: function(req, res) {
		alumno.findById(req.params.id)
			.then(alumno => res.json(alumno))
			.catch(err => res.status(422).json(err));
	},
	create: function(req, res) {
		alumno.create(req.body)
			.then(newalumno => res.json(newalumno))
			.catch(err => res.status(422).json(err));
	},
	update: function(req, res) {
		alumno.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(alumno => res.json(alumno))
			.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		alumno.findById({ _id: req.params.id })
			.then(alumno => alumno.remove())
			.then(allalumnos => res.json(allalumnos))
			.catch(err => res.status(422).json(err));
	}
};