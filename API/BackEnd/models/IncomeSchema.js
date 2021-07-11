const mongoose = require('mongoose')
const IncomeSchema = new mongoose.Schema({
    date: {
        type: String,
        require: true
    },

    amount: {
        type: Number,
        require: true
    },

    category: {
        type: String,
        require: true
    },
    note: {
        type: String,

    }
});

module.exports = mongoose.model('Income' , IncomeSchema)