const mongoose =  require('mongoose');


const  nkwCateringExpDetailSchema = mongoose.Schema({
    title: String,
    logo1: String,
    logo2: String,
    logo3: String,
    header_background_img: String,
    cotegory_footer_img: String,
    subtitle: [],
    context_editor_one: String,
    context_editor_two: String,
    context_editor_three: String,
    context_editor_four: String,
    context_editor_five: String
})


module.exports = mongoose.model('nkwCateringExpDetail', nkwCateringExpDetailSchema);