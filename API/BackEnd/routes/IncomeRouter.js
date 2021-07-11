const express = require('express');
const incomeController = require ('../controllers/IncomeController');

const router = express.Router();

router.post('/save',incomeController.save);
router.get('/getAll',incomeController.getAll);



module.exports = router;