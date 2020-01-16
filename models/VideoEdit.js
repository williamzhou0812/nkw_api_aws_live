const mongoose = require('mongoose');

const VideoEditSchema = mongoose.Schema({
    header_background_img: String,
    header_title: String,
    video1_title: String,
    video1_link: String,
    video2_title: String,
    video2_link: String,
    video3_title: String,
    video3_link: String
});

module.exports = mongoose.model('videoedit', VideoEditSchema);