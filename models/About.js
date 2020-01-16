const mongoose = require('mongoose');


const AboutSchema = mongoose.Schema({

        about_page_header_bg_image: String,
        about_page_header_title: String,
        about_page_header_sub_title: String,
        about_page_nav1: String,
        about_page_nav2: String,
        about_page_nav3: String,
        about_page_nav4: String,

        about_page_section1: String,

        about_page_section2: String,

        about_page_section3_title: String,
        about_page_section3_p1: String,
        about_page_section3_p2: String,
        about_page_section3_p3: String,
        about_page_section3_img1: String,
        about_page_section3_img2: String,
        about_page_section3_left: String,
        about_page_section3_right: String,

        about_page_section4_t1: String,
        about_page_section4_t2: String,
        about_page_section4_t3: String,
        about_page_section4_p1: String,
        about_page_section4_p2: String,
        about_page_section4_p3: String,

// about page  Meet our team 
       
        about_page_section5_title: String,

        about_page_section5_img1: String,
        about_page_section5_img_title1: String,
        about_page_section5_img_sub_title1: String,

        about_page_section5_img2: String,
        about_page_section5_img_title2: String,
        about_page_section5_img_sub_title2: String,

        about_page_section5_img3: String,
        about_page_section5_img_title3: String,
        about_page_section5_img_sub_title3: String,

        about_page_section5_img4: String,
        about_page_section5_img_title4: String,
        about_page_section5_img_sub_title4: String,

        about_page_section5_button_text: String,
        about_page_section5_button_link: String,

 // CEO Message
        about_page_section6_title: String,
        about_page_section6_p1: String,
        about_page_section6_p2: String,
        about_page_section6_p3: String,
        about_page_section6_p4: String,
        about_page_section6_img1: String,
        about_page_section6_img_title1: String,
        about_page_section6_img_sub_title1: String,
        
        about_page_section6_editor_three: String,
        

// footer button section
        about_page_section7_p1: String,
        about_page_section7_p2: String,
        about_page_section7_p3: String,
        about_page_section7_link3: String,

// About diaing data
        nkw_group_chart: String,


        nkw_group_capability_statement1: String,
        nkw_group_capability_statement2: String,
        nkw_group_capability_statement3: String,
        nkw_group_capability_statement4: String,
        nkw_group_capability_statement5: String,
        nkw_group_capability_statement6: String,
        nkw_group_capability_statement7: String,
        nkw_group_capability_statement8: String,
        nkw_group_capability_statement9: String

// ** Todo */


    // about_header_section: {
    //     main_title_img: String,
    //     main_title: String,
    //     sub_title: String,
    //     nav_a: String,
    //     nav_b: String,
    //     nav_c: String,
    //     nav_d: String,
    //     short_intro: String
    // },
    // service_details_info: {
    //     sdi_a: {
    //         img_logo_s_a: String,
    //         name_s_a: String,
    //         des_s_a: String
    //     },
    //     sdi_b: {
    //         img_logo_s_b: String,
    //         name_s_b: String,
    //         des_s_b: String
    //     },
    //     sdi_c: {
    //         img_logo_s_c: String,
    //         name_s_c: String,
    //         des_s_c: String
    //     },
    //     sdi_d: {
    //         img_logo_s_d: String,
    //         name_s_d: String,
    //         des_s_d: String
    //     }
        
    // },
    // about_who_we_are : {
    //     img_one: String,
    //     img_two: String,
    //     title: String,
    //     p_a: String,
    //     p_b: String,
    //     p_c: String,
    // },
    // about_mission_vision_value: {
    //     mission :{
    //         mission_name: String,
    //         mission_des: String
    //     },
    //     vision: {
    //         vision_name: String,
    //         vision_des: String
    //     },
    //     values: {
    //         values_name: String,
    //         values_des: String
    //     }
    // },
    // ceo_message: {
    //     ceo_title: String,
    //     ceo_p_a: String,
    //     ceo_p_b: String,
    //     ceo_p_c: String,
    //     ceo_p_d: String,
        
    // }



});


module.exports = mongoose.model('abouts', AboutSchema);