const mongoose = require('mongoose');


const PcsCardsSchema = mongoose.Schema({
     card_title: String,
     card_editor_contents: String
});


module.exports = mongoose.model('pcscards', PcsCardsSchema);
