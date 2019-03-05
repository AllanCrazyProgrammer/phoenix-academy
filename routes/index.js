const router = require('express').Router();
const bookRoutes = require('./alumnos');

router.use('/api/alumnos', alumnoRoutes);

module.exports = router;