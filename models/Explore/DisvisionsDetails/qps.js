const mongoose = require('mongoose');


const QPSSchema = mongoose.Schema({
    title: String,
    logo: String,
    header_background_img: String,
    content: [{type: String}],
    gallery:[{
        img: String,
        img_title: String,
    }],
    editor_context: String
})



module.exports = mongoose.model('qps', QPSSchema );
