const mongoose =  require('mongoose');


const  MTOTrainingExpDetailSchema = mongoose.Schema({
    title: String,
    logo1: String,
    header_background_img: String,
    cotegory_footer_img: String,
    subtitle: [],
    context_editor_one: String,
})


module.exports = mongoose.model('mtotrainingexpdetail', MTOTrainingExpDetailSchema);