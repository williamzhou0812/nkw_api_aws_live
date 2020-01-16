const mongoose = require('mongoose');

const ShowCaseSchema = mongoose.Schema({
    video: String,
    middle_banner: String,
    footer_banner: String
});

module.exports = mongoose.model('showcase', ShowCaseSchema);