const express = require('express')
const router = express.Router()
const Buyer = require('../models/Buyer')

router.post('/user', (request, response) => {
    Buyer.create(request.body).then((res) => {
        response.sendStatus(200)
    }).catch((err) => {
        response.sendStatus(405)
    })
})

router.get('/user',(request,response)=>{
    Buyer.find().then((result)=>{
        response.send(result)
    }).catch((err)=>{
        console.log(err);
    })
})

router.post('/user/signin',(req,res)=>{
    Buyer.countDocuments(req.body).then((result)=>{
        if(result===1){
            let part1=req.body.email.slice(1,8)
            let part2 =req.body.password.slice(1,5)
            res.send({"token":part1+part2})
        }
        else{
            res.send({"token":null})
        }
    }).catch((err)=>{
        console.log(err);
    })
})

router.delete('/user',(request,response)=>{
    console.log(request.body);
    Buyer.findOneAndDelete(request.body).then((res)=>{
        if(res===null){
            response.send({"user":false})
        }
        else{
            response.send({"user":true})
        }
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router