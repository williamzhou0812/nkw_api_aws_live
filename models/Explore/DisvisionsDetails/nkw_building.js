const mongoose =  require('mongoose');


const  nkwbuildingSchema = mongoose.Schema({
    title: String,
    logo: String,
    header_background_img: String,
    contact:{
        phone_a: String,
        phone_b: String,
        email: String
    },
    context: {
        p: {
            p_a: String,
            p_b: String
        },
        sub_title: [],
        sub_lists: {
            li_a: [],
            li_b: [],
            li_c: []
        }
    },
    editor_context: String
    
})


module.exports = mongoose.model('nkwbuilding', nkwbuildingSchema)