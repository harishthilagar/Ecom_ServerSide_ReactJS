const mongoose = require('mongoose')
const Schema = mongoose.Schema

const buyerSchema = new Schema({
    username:{
        type:String,
        required:[true,"enter username"]
    },
    password:{
        type:String,
        required:[true,'enter password']
    },
    email:{
        type:String,
        unique:true,
        required:[true,'enter email']
    },
    createdon:{
        type:Date,
        default:Date.now
    }

})

const Buyer = mongoose.model('BuyerDetail',buyerSchema)
module.exports  = Buyer