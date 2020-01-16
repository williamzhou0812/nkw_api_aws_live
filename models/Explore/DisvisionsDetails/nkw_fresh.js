const mongoose = require('mongoose');


const NKWFreshSchema = mongoose.Schema({
        title: String,
        header_background_img: String,
        logo: String,
        phone_a: String,
        phone_b: String,
        email: String,
        imgs: [{type: String}],
        content: [{type: String}],
        context_editor_one: String,
        context_editor_two: String,
        context_editor_three: String,
        context_editor_four: String
        
      
})



module.exports = mongoose.model('nkw_fresh', NKWFreshSchema )
