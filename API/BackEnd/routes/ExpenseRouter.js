const express = require('express');
const expenseController = require ('../controllers/ExpenseController');

const router = express.Router();

router.post('/save',expenseController.save);
router.get('/getAll',expenseController.getAll);

// router.get('/expense',expenseController.getAllIncome);


module.exports = router;