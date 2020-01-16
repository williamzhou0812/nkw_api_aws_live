const mongoose = require('mongoose');


const ExpacpngSchema = mongoose.Schema({
     title: String,
     logo: String,
     header_background_img: String,
     content: [{type: String}],
     contact: {
         name: String,
         jobs: String,
         phone_a: String,
         phone_b: String
     },
     editor_context_one: String,
     editor_context_two: String,
     editor_context_three: String
})



module.exports = mongoose.model('expac_png', ExpacpngSchema );
