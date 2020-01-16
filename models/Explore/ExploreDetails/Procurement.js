const mongoose =  require('mongoose');


const  ProcurementExpDetailSchema = mongoose.Schema({
    title: String,
    logo1: String,
    logo2: String,
    header_background_img: String,
    cotegory_footer_img: String,
    subtitle: [],
    context_editor_one: String,
    context_editor_two: String,
})


module.exports = mongoose.model('procurementexpdetail', ProcurementExpDetailSchema);