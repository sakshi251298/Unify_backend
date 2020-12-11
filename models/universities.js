const mongoose = require('mongoose')

const Courses = new mongoose.Schema({
    name:  String,
    type:  String,
    field:  String,
});

const Universities = new mongoose.Schema({
   name: {
        type: String,
        required: true
    }, 
    address:  {
        street: String,
        city:  String,
        postcode: String,
        website: String,
    },
    tel: String,
    year: String,
    academicyear:  String,
    requirements:  String,
    tutionfees:  String,
    courses: [Courses],
    degree: [String],
})

module.exports = mongoose.model('Universities',  Universities)
