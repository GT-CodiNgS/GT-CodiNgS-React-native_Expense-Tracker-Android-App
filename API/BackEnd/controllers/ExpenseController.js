const ExpenseSchema = require ('../models/ExpenseSchema');


const save = (req,res)=>{
    const expense = new ExpenseSchema({
        date: req.body.date,
        amount: req.body.amount,
        category: req.body.category,
        note: req.body.note,
    })
    expense.save().then(saveResponse=>{
        res.status(200).json({message: 'Success',state:true})
    }).catch(saveResponseError=>{
        res.status(500).json({message:'internal Server Error',state:false,error:saveResponseError})
    })
}

const getAll = async ( req , res ) => {
    try {
        const expense = await ExpenseSchema.find()
        console.log(expense)
        res.status(200).json({message: "AllExpenses received" , state: true , data: expense})
    } catch (error) {

    }
}

module.exports={
    save,
    getAll

}