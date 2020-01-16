const  mongoose = require('mongoose');


const  APSSchema = mongoose.Schema({
    title: String,
    logo: String,
    header_background_img: String,
    sub_nav: [],
    contact: { 
        name: String,
        job: String
    },
    context: {
        p:[],
        subtitle: [],
        sub_li_a: [],
        sub_li_b: [],
        sub_li_c: [],
        sub_li_d: []

    },
    editor_context: String

})




module.exports  = mongoose.model('aps', APSSchema )