const mongoose = require('mongoose');


const HVCSchema = mongoose.Schema({
     title: String,
     logo: String,
     header_background_img: String,
     content: [{type: String}],
     contact: {
         name: String,
         jobs: String,
         phone_a: String,
         phone_b: String,
         email: String
     },
     editor_context: String
})



module.exports = mongoose.model('hvc', HVCSchema);
