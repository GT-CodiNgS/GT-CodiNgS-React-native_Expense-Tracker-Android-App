const express = require('express');
const userController = require('../controllers/UserController');
const router = express.Router();



router.post('/save', userController.save);
router.get('/getAll', userController.getAll);


module.exports = router;