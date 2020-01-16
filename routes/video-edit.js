const  express = require('express');
const  router = express.Router();

//import  express-validator 

const  VideoEditPage = require('../models/VideoEdit');
// OurTeam Model


router.post('/', async (req, res) => { 
      
        try {
                video_edit_page = new VideoEditPage({
                    header_background_img: 'http://localhost:5000/videos/Headers_NKW_Videos.png',
                    header_title: 'NKW Group Videos',
                    video1_title: 'NKW Fresh | Innvoation',
                    video1_link: 'http://localhost:5000/videos/NKWFreshafreshapproachfor%20armersinPapuaNewGuinea.mp4',
                    video2_title: 'NKW Fresh New Crops',
                    video2_link: 'http://localhost:5000/videos/NKWFreshafreshapproachfor%20armersinPapuaNewGuinea.mp4',
                    video3_title: 'NKW Fresh | A fresh approach for farmers in Papua New Guines',
                    video3_link: 'http://localhost:5000/videos/NKWFreshafreshapproachfor%20armersinPapuaNewGuinea.mp4'
                       
                });
                
                await video_edit_page.save();

                const  video_edit_page_res = await VideoEditPage.find();

                 res.json(video_edit_page_res);
                
        } catch (err) {
                console.log(err.message);
                res.status(500).send('Server Error');
        }

       
});


// @Get OurTeam data

router.get('/', async (req, res) => {
        try {
                const video_edit_page_res  = await VideoEditPage.find();
                res.json(video_edit_page_res);
        } catch (err) {
                console.error(err.message);
                res.status(500).send('Server Error');
        }

});


//@put / update


router.put('/:id', async (req, res) => {

        try {
               
            await VideoEditPage.findByIdAndUpdate(
                req.params.id,
                {$set: req.body},
                {new: true}
         );

         const video_edit_page_res = await VideoEditPage.find();
         res.json(video_edit_page_res);
      
        } catch (err)  {
                console.error(err.message);
                res.status(500).send('Server Error');
        }
});

// router.put('/:idp/:idc', async (req, res) => {
//     try {
      

//         await OurteamPage.findOneAndUpdate(
//             {_id:req.params.idp},
//             {$set: {team_details: req.params.idc}}

//         );
//         const ourteam_page_res = await OurteamPage.find();
//         res.json(ourteam_page_res);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// })


// @Delete ourteam router

router.delete('/:id', async (req, res) => {
        try {
            const video_edit_page = await VideoEditPage.findById(req.params.id);
            
            if (!video_edit_page) {
                    return res.status(404).json({msg: 'can not found in ourteam'});
            }
            await VideoEditPage.findByIdAndRemove(req.params.id);
            res.json({msg: 'removed from ourteam'});
        } catch (err) {
                console.error(err.message);
                res.status(500).send('Serve ERROR');
        }
});





module.exports = router;