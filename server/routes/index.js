const router= require('express').Router();
const accountRouter= require('./accountRouter');
const diagramData= require('./diagramData');
const authentication= require('../middlewares/authentication');

router.use("/users", accountRouter)
router.use(authentication)
router.use("/diagram-data", diagramData)

module.exports= router