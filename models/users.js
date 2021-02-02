const mongoose = require('mongoose')

const users = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    } , 
    password: {
        type: String, 
        required: true
    }, 
    hscdipstream: {
        type: String, 
        required: true
    }, 
    degree: {
        type: String, 
        required: true
    }, 
    degreestream: {
        type: String, 
        required: true
    }, 
    in_sub: {
        type: String, 
        required: true
    }, 
    in_sports: {
        type: String, 
        required: true
    }, 
    in_loc: {
        type: String, 
        required: true
    }
})

users.pre('find', (next) => {
    console.log("In users Model");
    next()
})

module.exports = mongoose.model('users', users)
