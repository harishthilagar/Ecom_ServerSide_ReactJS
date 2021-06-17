const express = require("express")
const router = express.Router()
const Product = require("../models/Product")

router.post("/user",(request,response)=>{
    Product.create(request.body).then((res)=>{
        response.send("data added")
    }).catch(()=>{
        response.send("data not added")
    })
})

router.get("/user",(request,response)=>{
    Product.find().then((result)=>{
        response.send(result)
    }).catch((err)=>{
        response.send(err)
    })
})

module.exports = router