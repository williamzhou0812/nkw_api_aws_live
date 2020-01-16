const mongoose =  require('mongoose');


const  CampManagementExpDetailSchema = mongoose.Schema({
    title: String,
    header_background_img: String,
    cotegory_footer_img: String,
    subtitle: [],
    context_editor_one: String,
})


module.exports = mongoose.model('campmanagementexpdetail', CampManagementExpDetailSchema);