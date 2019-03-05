const router = require('express').Router();
const alumnoRoutes = require('./alumnos');

router.use('/api/alumnos', alumnoRoutes);

module.exports = router;