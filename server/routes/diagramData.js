const router= require('express').Router();
const Controller= require('../controllers/diagramController');

router.get("/", Controller.fetchDiagramData)

module.exports= router