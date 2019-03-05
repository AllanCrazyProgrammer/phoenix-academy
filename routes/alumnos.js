
const router = require('express').Router();
const alumnosController = require("../controllers/alumnosController");


router
    .route('/')
    .get(alumnosController.findAll)
    .post(alumnosController.create);

router
    .route('/:id')
    .get(alumnosController.findById)
    .put(alumnosController.update)
    .delete(alumnosController.remove);

module.exports = router;