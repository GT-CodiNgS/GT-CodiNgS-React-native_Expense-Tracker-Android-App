const UserSchema = require ('../models/UserSchema');


const save = (req,res)=>{
    const user = new UserSchema({
        name: req.body.name,
        pw: req.body.pw

    })
    user.save().then(saveResponse=>{
        res.status(200).json({message: 'Success',state:true})
    }).catch(saveResponseError=>{
        res.status(500).json({message:'internal Server Error',state:false,error:saveResponseError})
    })
}
const getAll = async( req , res ) => {
    try {
        const users = await UserSchema.find()

        res.status(200).json({message: "AllUsers" , state: true , data: users})
    } catch (error) {

    }
}


module.exports={
    save,
    getAll
}