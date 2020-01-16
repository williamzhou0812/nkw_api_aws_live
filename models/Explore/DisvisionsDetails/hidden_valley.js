const mongoose = require('mongoose');


const HiddenValleySchema  = mongoose.Schema({
    title: '',
    sub_title: '',
    header_background_img: String,
    logo: '',
    content: [{type: String}],
    contact: {
        name: String,
        job: String
    },
    editor_context: String
});

module.exports = mongoose.model('hiddenvalley', HiddenValleySchema);
