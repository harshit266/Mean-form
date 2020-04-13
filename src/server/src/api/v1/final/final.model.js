const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const terms = new Schema({

    entity: {
        type: String,
    },
    name: {
        type: String,
    },
    brand: {
        type:String
    },
    email: {
        type:String
    },
    year: {
        type: String,
    },
    principal: {
        type: String,
    },
    students: {
        type:Number
    },
    level: {
        type:String
    },
    address: {
        type: String,
    },
    state: {
        type: String,
    },
    city: {
        type:String
    },
    postcode: {
        type:Number
    },
    number:{
     type:Number   
    }

})

var Terms = mongoose.model('Terms', terms)
module.exports = Terms;