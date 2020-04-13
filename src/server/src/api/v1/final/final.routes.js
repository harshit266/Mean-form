const express = require('express')
const termsController =require('./final.controller')

const router =express.Router();


router.post('/final',function(req,res){
    termsController.final(req,res)
})


module.exports =  router;