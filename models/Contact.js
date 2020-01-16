const mongoose = require('mongoose');

const  ContactSchema = mongoose.Schema({
   title: String,
   header_background_img: String,
   context_editor_one: String,
   context_editor_two: String
});


module.exports = mongoose.model('contactpage', ContactSchema);