// Here is About page Route 

const express = require('express');
const router = express.Router();

// Import About Model
const About = require('../models/About');

/// Todo list


//Static Post set Init Date Route

router.post('/', async (req, res) => {

    try {
        about = new About({
            about_page_header_bg_image: 'http://localhost:5000/about/nkwofficethinkbanner-19x10.jpg',
            about_page_header_title: 'About NKW Group',
            about_page_header_sub_title: 'A leading provider of diverse, short and long-term special projects',
            about_page_nav1: 'Who We Are',
            about_page_nav2: 'NKW Mission, Vision & Values',
            about_page_nav3: 'Meet Our Team',
            about_page_nav4: 'CEO Message',
    
            about_page_section1: `NKW Group has developed into a leading provider of diverse, short and long-term special projects and services. Our commitment to delivering high quality service is evident both in our ability to develop strong partnerships and work alongside our Clients to increase potential and maintain a professional workforce that offers solutions specific to customer needs.`,
    
            about_page_section2: `http://localhost:5000/about/AboutUs_Image.png`,
    
            about_page_section3_title: `Who We Are`,
            about_page_section3_p1: `Our commitment to delivering high quality service is evident both in our ability to develop strong partnerships with our clients and maintaining a professional workforce that is able to offer solutions that are tailor-made for customers.`,
            about_page_section3_p2: `NKW Holdings Limited, also known as NKW Group, is a wholly owned partnership of three Landowner Groups based in Wau, Morobe Province, Papua New Guinea. They are, Nauti Investment Limited (NIL), Kuembu Investment Limited (KIL) and Winima Investment Limited (WIL).`,
            about_page_section3_p3: `NKW was formed under the Memorandum of Agreement (MoA) signed in August 2004 to enable the landowners of the Hidden Valley mining project to participate in the development by way of the supply of goods and services. This gives the landowners a sense of ownership of the development thereby lessening possible disruption of mining activities.`,
            about_page_section3_img1: `http://localhost:5000/about/AboutUs_Who_we_are_1.png`,
            about_page_section3_img2: `http://localhost:5000/about/NKW%20Category%20Images_Training.png`,
    
            about_page_section4_t1: `Our Mission`,
            about_page_section4_t2: `Our Vision`,
            about_page_section4_t3: `Our Values`,
            about_page_section4_p1: `Our  mission is to increase the accessibility of our services by offering solutions which are industry specific and customer focused.`,
            about_page_section4_p2: `To be a 1st choice industry service provider in Papua New Guinea, every service must offer a positive outcome for our customers, communities and the environment in which we operate.`,
            about_page_section4_p3: `Our values are based on the belief that every aspect of our work is important and unique.`,


            about_page_section5_title: `Meet Our Team`,

            about_page_section5_img1: `http://localhost:5000/ourteam/MarlenBrunskill.jpg`,
            about_page_section5_img_title1: `Marlen Brunskill`,
            about_page_section5_img_sub_title1: `CEO`,
    
            about_page_section5_img2: `http://localhost:5000/ourteam/OurTeamClark.png`,
            about_page_section5_img_title2: `Paul Clark`,
            about_page_section5_img_sub_title2: `CFO`,
    
            about_page_section5_img3: `http://localhost:5000/ourteam/OurTeamFranklin.png`,
            about_page_section5_img_title3: `Phil Franklin`,
            about_page_section5_img_sub_title3: `COO`,
    
            about_page_section5_img4: `http://localhost:5000/ourteam/OurTeamKolomaga.png`,
            about_page_section5_img_title4: `Chris Kolomaga`,
            about_page_section5_img_sub_title4: `Financial Controller`,
    
            about_page_section5_button_text: ` View Our Full Team`,
            about_page_section5_button_link: `/ourteam`,

            // CEO Message
            about_page_section6_title: `CEO Message`,
            about_page_section6_p1: `NKW Holdings Limited invests for growth, we are building a company that will stand the test of time; a company that understands the challenges it faces and the responsibilities it carries. Health, Safety, Environment and Community responsibility is at the very heart of everything we achieve and we are pleased that our example continues to be the benchmark for our Corporate Partners.`,
            about_page_section6_p2: `As I look at the growth over the years since our inception in 2004, I am extremely proud of what we have achieved, and even more excited about our outlook for an equally promising future. We have successfully converted from a local Wau start-up business to become a reputable multi-facetted entity, garnering business from across Papua New Guinea, while earning our clients’ trust along the way.`,
            about_page_section6_p3: `It is satisfying to know that we are able to help our clients and partners build strategies to enable them to operate the critical aspects of their business activities more efficiently and economically. Contract performance for the client is of the utmost importance and we hold ourselves to the highest standard of quality and safety with unending respect for our environment and community.`,
            about_page_section6_p4: `Our clients are continually informed about their solution options and they continue to select NKW Holdings as their partner of choice because of our hands on experience, commitment to quality, community, and integrity.`,
            about_page_section6_img1: `http://localhost:5000/ourteam/MarlenBrunskill.jpg`,
            about_page_section6_img_title1: `Marlen Brunskill`,
            about_page_section6_img_sub_title1: `CEO`,
        
        

// footer button section
            about_page_section7_p1: `Corporate Structure`,
            about_page_section7_p2: `Capability Statement`,
            about_page_section7_p3: `NKW Videos`,
            about_page_section7_link3: `/videos`,

// About diaing data



        nkw_group_chart: `http://localhost:5000/about/NKWGroupOrgChart.jpg`,


        nkw_group_capability_statement1: `http://localhost:5000/about/NKW-Group-Capability-Statement-2019.jpg`,
        nkw_group_capability_statement2: `http://localhost:5000/about/NKW-Group-Capability-Statement-20192.jpg`,
        nkw_group_capability_statement3: `http://localhost:5000/about/NKW-Group-Capability-Statement-20193.jpg`,
        nkw_group_capability_statement4: `http://localhost:5000/about/NKW-Group-Capability-Statement-20194.jpg`,
        nkw_group_capability_statement5: `http://localhost:5000/about/NKW-Group-Capability-Statement-20195.jpg`,
        nkw_group_capability_statement6: `http://localhost:5000/about/NKW-Group-Capability-Statement-20196.jpg`,
        nkw_group_capability_statement7: `http://localhost:5000/about/NKW-Group-Capability-Statement-20197.jpg`,
        nkw_group_capability_statement8: `http://localhost:5000/about/NKW-Group-Capability-Statement-20198.jpg`,
        nkw_group_capability_statement9: `http://localhost:5000/about/NKW-Group-Capability-Statement-20199.jpg`
/** 
 *  // about_header_section: {
            //     main_title_img: 'http://nkwgroup.com/wp-content/uploads/2019/02/nkwofficethinkbanner-19x10.jpg',
            //     main_title: 'About NKW Group',
            //     sub_title: 'A leading provider of diverse, short and long-term special projects',
            //     nav_a: 'Who We Are',
            //     nav_b: 'NKW Miss, Vision & Values',
            //     nav_c: 'Meet Our Team',
            //     nav_d: 'CEO Message',
            //     short_intro: 'NKW Group has developer into a leading provider of diverse, short and long-term special projects and services. ... '
            // },
            // service_details_info: {
            //     sdi_a: {
            //         img_logo_s_a: 'http://nkwgroup.com/wp-content/uploads/2019/03/nkwteambanner.jpg',
            //         name_s_a: 'SAFETY',
            //         des_s_a: 'At NKW safety is paramount.'
            //     },
            //     sdi_b: {
            //         img_logo_s_b: 'http://nkwgroup.com/wp-content/uploads/2019/03/nkwteambanner.jpg',
            //         name_s_b: 'PEOPLE',
            //         des_s_b: 'We respect our people, they are our most valuable asset.'
            //     },
            //     sdi_c: {
            //         img_logo_s_c: 'http://nkwgroup.com/wp-content/uploads/2019/03/nkwteambanner.jpg',
            //         name_s_c: 'CONSIDERATION',
            //         des_s_c: 'We carefully assess every situation and take the best possible actions without prejudice or pride.'
            //     },
            //     sdi_d: {
            //         img_logo_s_d: 'http://nkwgroup.com/wp-content/uploads/2019/03/nkwteambanner.jpg',
            //         name_s_d: 'TEAMWORK & PARTNERSHIPS',
            //         des_s_d: 'We believe in creating and maintaining strong partnerships based on a cohesive and engaging team environment.'
            //     }
                
            // },
            // about_who_we_are : {
            //     img_one: 'http://nkwgroup.com/wp-content/uploads/2019/03/nkwteambanner.jpg',
            //     img_two: 'http://nkwgroup.com/wp-content/uploads/2019/03/nkwteambanner.jpg',
            //     title: 'Who We Are',
            //     p_a: 'Our commitment to delivering high quality service is evident both in our ability to develop strong partnerships with our clients and maintaining a professional workforce that is able to offer solutions that are tailor-made for customers.',
            //     p_b: 'NKW Holdings Limited, also known as NKW Group, is a wholly owned partnership of three Landowner Groups based in Wau, Morobe Province, Papua New Guinea. They are, Nauti Investment Limited (NIL), Kuembu Investment Limited (KIL) and Winima Investment Limited (WIL).',
            //     p_c: 'NKW was formed under the Memorandum of Agreement (MoA) signed in August 2004 to enable the landowners of the Hidden Valley mining project to participate in the development by way of the supply of goods and services. This gives the landowners a sense of ownership of the development thereby lessening possible disruption of mining activities.',
            // },
            // about_mission_vision_value: {
            //     mission :{
            //         mission_name: 'Our Mission',
            //         mission_des: 'Our  mission is to increase the accessibility of our services by offering solutions which are industry specific and customer focused.'
            //     },
            //     vision: {
            //         vision_name: 'Our Vision',
            //         vision_des: 'To be a 1st choice industry service provider in Papua New Guinea, every service must offer a positive outcome for our customers, communities and the environment in which we operate.'
            //     },
            //     values: {
            //         values_name: 'Our Values',
            //         values_des: 'Our values are based on the belief that every aspect of our work is important and unique.'
            //     }
            // },
            // ceo_message: {
            //     ceo_title: 'CEO Message',
            //     ceo_p_a: 'NKW Holdings Limited invests for growth, we are building a company that will stand the test of time; a company that understands the challenges it faces and the responsibilities it carries. Health, Safety, Environment and Community responsibility is at the very heart of everything we achieve and we are pleased that our example continues to be the benchmark for our Corporate Partners.',
            //     ceo_p_b: 'As I look at the growth over the years since our inception in 2004, I am extremely proud of what we have achieved, and even more excited about our outlook for an equally promising future. We have successfully converted from a local Wau start-up business to become a reputable multi-facetted entity, garnering business from across Papua New Guinea, while earning our clients’ trust along the way.',
            //     ceo_p_c: 'It is satisfying to know that we are able to help our clients and partners build strategies to enable them to operate the critical aspects of their business activities more efficiently and economically. Contract performance for the client is of the utmost importance and we hold ourselves to the highest standard of quality and safety with unending respect for our environment and community.',
            //     ceo_p_d: 'Our clients are continually informed about their solution options and they continue to select NKW Holdings as their partner of choice because of our hands on experience, commitment to quality, community, and integrity.',
                
            // }
*/  
           
        
        });

        await about.save();
        res.send('About Init Data Saved');

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server ERROR');
    }



    // res.send('HERE is About page Api Post');
});


router.get('/', async (req, res) => {

    try {
        const about = await About.find();
        res.json(about);

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server ERROR');
    }
    // res.send('about get router working');
});


router.put('/:id', async (req, res) => {

   const { 

    about_page_header_bg_image,
    about_page_header_title,
    about_page_header_sub_title,
    about_page_nav1,
    about_page_nav2,
    about_page_nav3,
    about_page_nav4,

    about_page_section1,

    about_page_section2,

    about_page_section3_title,
    about_page_section3_p1,
    about_page_section3_p2,
    about_page_section3_p3,
    about_page_section3_img1,
    about_page_section3_img2,

    about_page_section3_left,
    about_page_section3_right,

    about_page_section4_t1,
    about_page_section4_t2,
    about_page_section4_t3,
    about_page_section4_p1,
    about_page_section4_p2,
    about_page_section4_p3,

   
    about_page_section5_title,

    about_page_section5_img1,
    about_page_section5_img_title1,
    about_page_section5_img_sub_title1,

    about_page_section5_img2,
    about_page_section5_img_title2,
    about_page_section5_img_sub_title2,

    about_page_section5_img3,
    about_page_section5_img_title3,
    about_page_section5_img_sub_title3,

    about_page_section5_img4,
    about_page_section5_img_title4,
    about_page_section5_img_sub_title4,

    about_page_section5_button_text,
    about_page_section5_button_link,

    about_page_section6_title,
    about_page_section6_p1,
    about_page_section6_p2,
    about_page_section6_p3,
    about_page_section6_p4,
    about_page_section6_img1,
    about_page_section6_img_title1,
    about_page_section6_img_sub_title1,
    about_page_section6_editor_three,
    
    about_page_section7_p1,
    about_page_section7_p2,
    about_page_section7_p3,
    about_page_section7_link3,

    nkw_group_chart,


    nkw_group_capability_statement1,
    nkw_group_capability_statement2,
    nkw_group_capability_statement3,
    nkw_group_capability_statement4,
    nkw_group_capability_statement5,
    nkw_group_capability_statement6,
    nkw_group_capability_statement7,
    nkw_group_capability_statement8,
    nkw_group_capability_statement9



   } = req.body;

   const newAbout = {
    about_page_header_bg_image,
    about_page_header_title,
    about_page_header_sub_title,
    about_page_nav1,
    about_page_nav2,
    about_page_nav3,
    about_page_nav4,

    about_page_section1,

    about_page_section2,

    about_page_section3_title,
    about_page_section3_p1,
    about_page_section3_p2,
    about_page_section3_p3,
    about_page_section3_img1,
    about_page_section3_img2,
    about_page_section3_left,
    about_page_section3_right,

    about_page_section4_t1,
    about_page_section4_t2,
    about_page_section4_t3,
    about_page_section4_p1,
    about_page_section4_p2,
    about_page_section4_p3,

   
    about_page_section5_title,

    about_page_section5_img1,
    about_page_section5_img_title1,
    about_page_section5_img_sub_title1,

    about_page_section5_img2,
    about_page_section5_img_title2,
    about_page_section5_img_sub_title2,

    about_page_section5_img3,
    about_page_section5_img_title3,
    about_page_section5_img_sub_title3,

    about_page_section5_img4,
    about_page_section5_img_title4,
    about_page_section5_img_sub_title4,

    about_page_section5_button_text,
    about_page_section5_button_link,

    about_page_section6_title,
    about_page_section6_p1,
    about_page_section6_p2,
    about_page_section6_p3,
    about_page_section6_p4,
    about_page_section6_img1,
    about_page_section6_img_title1,
    about_page_section6_img_sub_title1,
    about_page_section6_editor_three,
    
    about_page_section7_p1,
    about_page_section7_p2,
    about_page_section7_p3,
    about_page_section7_link3,

    nkw_group_chart,


    nkw_group_capability_statement1,
    nkw_group_capability_statement2,
    nkw_group_capability_statement3,
    nkw_group_capability_statement4,
    nkw_group_capability_statement5,
    nkw_group_capability_statement6,
    nkw_group_capability_statement7,
    nkw_group_capability_statement8,
    nkw_group_capability_statement9
     };

try { 
   let about = await About.findById(req.params.id);

   about = await About.findByIdAndUpdate(
        req.params.id,
        {$set: newAbout},
        {new: true}
   );
   res.json(about);

} catch (err) {
        console.error(err.message);
        res.status(500).send('Server ERROR');
};

    // res.json(newAbout);
});



router.delete('/:id', async (req, res) => {
    try {
        let about = await About.findById(req.params.id);
        if(!about) {
            return res.status(404).json({msg: `About Data not Found`});
        }

        await About.findByIdAndRemove(req.params.id);
        res.json({msg: 'About Data by Removed'});
 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

    res.send('about delect router working');
});

module.exports = router;