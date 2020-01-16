const  express = require('express');
const  CampManagement = require('../../../models/Explore/ExploreDetails/Camp_Management');

const  router = express.Router();



//console.log(NKWFresh_Data.title)

router.post('/', async (req, res) => {  

    try { 
        const _CampManagement = new CampManagement({
            title: 'Camp Management',
            header_background_img: 'http://localhost:5000/exploredetails/Headers_CampManagement.png',
            cotegory_footer_img: 'http://localhost:5000/exploredetails/camp_footer.png',
            subtitle:[`Capable of Catering to over 3000 a day`],
            context_editor_one: `NKW provides a comprehensive range of Camp Management Services for off-site and onsite requirements. These include ancillary services and;
            1.	Camp Catering 
            2.	Camp Administration
            3.	Cleaning Services (For accommodation & offices)
            4.	Laundry Services
            5.	Grounds Upkeep and Maintenance
     `,    
            
        });
        await _CampManagement.save();
        const _CampManagement_res = await CampManagement.find();
        res.json(_CampManagement_res);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
});


router.put('/:id', async (req, res) => { 
    try {
        const _CampManagement = await CampManagement.findById(req.params.id);

        await CampManagement.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.json(_CampManagement);

    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
        
    }
}) 


router.get('/', async (req, res) => {
    try { 
        const _CampManagement =  await  CampManagement.find();
        res.json(_CampManagement); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




router.delete('/:id', async (req, res) => {   

    try {
        const _CampManagement = await CampManagement.findById(req.params.id);

        if (!_CampManagement) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await CampManagement.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});



module.exports = router;



