const  mongoose = require('mongoose');

const  JETSchema = mongoose.Schema({
    title: String,
    logo: String,
    header_background_img: String,
    contact: { 
        name: String,
        job: String,
        phone_a: String,
        phone_b: String,
        email: String
    },
    context: {
        p:[],
        subtitle: [],
        sub_li_a: [],
    },
    editor_context: String
})




module.exports  = mongoose.model('jet', JETSchema )