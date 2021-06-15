const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const MONGOURL = "mongodb+srv://admin:admin@cluster0.u3nlr.mongodb.net/EcomApp?retryWrites=true&w=majority"
const BuyerRouter = require('../router/BuyerAPI')
const { response } = require('express')
mongoose.connect(MONGOURL,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("db connect");
}).catch(()=>{
    console.log("db not connect");
})
const app = express()
app.use(cors())
app.use(express.json())
app.use('/buyer',BuyerRouter)

app.listen(8000,()=>{
    console.log("db started");
})