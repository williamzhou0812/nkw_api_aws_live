const mongoose = require('mongoose');


const OurteamPageSchema = mongoose.Schema({
    page_title: String,
    page_header_bg_img: String,
    page_header_title: String,
    page_header_sub_title: String,
    team_details: [{ 
        img: String,
        name: String,
        job: String
    }]
});


module.exports = mongoose.model('ourteampage', OurteamPageSchema);