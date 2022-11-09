const router= require('express').Router();
const Controller= require('../controllers/userController');

router.post("/login", Controller.login)
router.post("/register", Controller.register)

module.exports= router