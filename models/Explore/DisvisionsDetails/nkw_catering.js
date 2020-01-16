const mongoose = require('mongoose');


const NKWCateringSchema  = mongoose.Schema({
    title: String,
    sub_title: String,
    logo: String,
    header_background_img: String, 
    content: [{type: String}],
    contact: {
        name: String,
        job: String,
        phone_a: String,
        phone_b: String, 
        email: String
    },
    editor_context: String
});

module.exports = mongoose.model('nkwcatering', NKWCateringSchema);
