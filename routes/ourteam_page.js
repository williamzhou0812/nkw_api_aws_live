const  express = require('express');
const  router = express.Router();

//import  express-validator 

const  OurteamPage = require('../models/OurteamPage');
// OurTeam Model


router.post('/', async (req, res) => { 
      
        try {
                ourteam_page = new OurteamPage({
                    
                    page_title: 'Our Team',
                    page_header_bg_img: 'http://localhost:5000/ourteam/nkwsuccesstogether.jpg',
                    page_header_title: 'Our Team',
                    page_header_sub_title: 'We respect our people, they are our most valuable asset',
                    team_details: [
                        {
                            img: 'http://localhost:5000/ourteam/MarlenBrunskill.jpg',
                            name: 'Marlen Brunskill',
                            job: 'CEO'
                        },
                        {
                            img: 'http://localhost:5000/ourteam/OurTeamClark.png',
                            name: 'Paul Clark',
                            job: 'CFO'
                        },
                        {
                            img: 'http://localhost:5000/ourteam/OurTeamFranklin.png',
                            name: 'Phil Franklin',
                            job: 'COO'
                        },
                        {
                            img: 'http://localhost:5000/ourteam/OurTeamKolomaga.png',
                            name: 'Chris Kolomaga',
                            job: 'Financial Controller'   
                        },
                        {
                            img: 'http://localhost:5000/ourteam/OurTeamWartovo.png',
                            name: 'Levi Wartovo',
                            job: 'Director & Board Member Representing Kuembu Landowners'   
                        },
                        {
                            img: 'http://localhost:5000/ourteam/OurTeamSawong.png',
                            name: 'Don Sawong',
                            job: 'Independent Board Member Director - Retired Judge'  
                        },
                        {
                            img: 'http://localhost:5000/ourteam/OurTeamKupa.png',
                            name: 'Nathan Kupa',
                            job: 'Director & Board Member - Representing Nauti Landowners'  
                        },
                        {
                            img: 'http://localhost:5000/ourteam/OurTeamKawa.png',
                            name: 'Samson Kawa',
                            job: 'Director & Board Member Representing Winnima'  
                        },
                        {
                            img: 'http://localhost:5000/ourteam/OurTeamKiki.png',
                            name: 'Robin Kiki',
                            job: 'Director & Board Member - Representing Morobe Provincial Government' 
                        },
                        {
                            img: 'http://localhost:5000/ourteam/OurTeamYanga.png',
                            name: 'Tali Chris Yanga',
                            job: 'Director and Board Member - Representing Morobe Provincial Government' 
                        },
                        {
                            img: 'http://localhost:5000/ourteam/OurTeamNorum.png',
                            name: 'James Norum',
                            job: 'Director and Board Member Representing Mineral Resources Authority' 
                        }
                    ]

                    
                       
                });
                
                await ourteam_page.save();

                const ourteam_page_res = await OurteamPage.find();

                 res.json(ourteam_page_res);
                
        } catch (err) {
                console.log(err.message);
                res.status(500).send('Server Error');
        }

       
});


// @Get OurTeam data

router.get('/', async (req, res) => {
        try {
                const ourteam_page_res  = await OurteamPage.find();
                res.json(ourteam_page_res);
        } catch (err) {
                console.error(err.message);
                res.status(500).send('Server Error');
        }

});


//@put / update


router.put('/:id', async (req, res) => {

        try {
               
            await OurteamPage.findByIdAndUpdate(
                req.params.id,
                {$set: req.body},
                {new: true}
         );

         const ourteam_page_res = await OurteamPage.find();
         res.json(ourteam_page_res);
      
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
            const ourteam_page = await OurteamPage.findById(req.params.id);
            
            if (!ourteam_page) {
                    return res.status(404).json({msg: 'can not found in ourteam'});
            }
            await OurteamPage.findByIdAndRemove(req.params.id);
            res.json({msg: 'removed from ourteam'});
        } catch (err) {
                console.error(err.message);
                res.status(500).send('Serve ERROR');
        }
});





module.exports = router;