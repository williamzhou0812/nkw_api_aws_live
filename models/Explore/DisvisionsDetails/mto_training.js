const mongoose = require('mongoose');


const MTOTrainingSchema = mongoose.Schema({

    title: String,
    logo: String,
    header_background_img: String,
    contact: {
        phone_a: String,
        phone_b: String,
        website: String,
        email: String
    },
    editor_context: String,
    context: [],
    li_a: [],
    li_b: [],
    li_c: [],
    li_d: []
});


module.exports = mongoose.model('mtotraining', MTOTrainingSchema);