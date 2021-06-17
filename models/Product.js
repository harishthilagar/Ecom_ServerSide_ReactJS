const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = new Schema({
    productName:{
        type:String,
        required:[true,"enter product name"]
    },
    productImage:{
        type:String,
        require:[true,"enter product url"]
    },
    productPrice:{
        type:String,
        require:[true,"enter product price"]
    },
    productOffer:{
        type:String,
        require:[true,"enter product offer"]
    },
    productSeller:{
        type:String,
        require:[true,"enter product seller"]
    }
    
})
const products = mongoose.model("Product",productSchema)
module.exports = products