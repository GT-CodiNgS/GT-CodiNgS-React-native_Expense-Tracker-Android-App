const IncomeSchema = require ('../models/IncomeSchema');


const save = (req,res)=>{
    const income = new IncomeSchema({
        date: req.body.date,
        amount: req.body.amount,
        category: req.body.category,
        note: req.body.note,
    })
    income.save().then(saveResponse=>{
        res.status(200).json({message: 'Success',state:true})
    }).catch(saveResponseError=>{
        res.status(500).json({message:'internal Server Error',state:false,error:saveResponseError})
    })
}

const getAll = async( req , res ) => {
    try {
        const income = await IncomeSchema.find()
        console.log(income)
        res.status(200).json({message: "AllIncomes" , state: true , data: income})
    } catch (error) {

    }
}

module.exports={
    save,
    getAll

}