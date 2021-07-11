

const express = require('express');
const mongoose = require('mongoose');
const cors  = require('cors');
require('dotenv').config();

const port = process.env.USER_PORT;

/******************************/

const incomeRouter = require('./routes/IncomeRouter')
const expenseRouter = require('./routes/ExpenseRouter')
const userRouter = require('./routes/UserRouter')



/******************************/

const  app = express();
app.use(cors());
app.use(express.json())

mongoose.connect(
    'mongodb://127.0.0.1:27017/moneybag',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    }
).then(()=>{

    app.listen(port, ()=>{
       console.log(`Moneybag API running on ${port}`);
    });

}).catch((error)=>{
    console.log(error)
})

/******************************/

app.use('/Income',incomeRouter)
app.use('/Expense',expenseRouter)
app.use('/User',userRouter)

