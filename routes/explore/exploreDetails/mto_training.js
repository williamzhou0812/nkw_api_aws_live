const  express = require('express');
const  MTOTraining = require('../../../models/Explore/ExploreDetails/MTO_Training');
const  MTOTraingData =  require('./Data_Exp/data_mto_training');

const  router = express.Router();



//  console.log(MTOTraingData.title)

router.post('/', async (req, res) => {  

    try { 
        const _MTOTraining = new MTOTraining({
            title: `HQ Training`,
            logo1: `http://localhost:5000/divisions/NKW_Logos_NKWTraining.png`,
            header_background_img: `http://localhost:5000/exploredetails/Headers_MTOTraining.png`,
            cotegory_footer_img: `http://localhost:5000/exploredetails/CategoryFooterImagesTraining.png`,
            subtitle: [`Divisions associated with Training Services`],
            context_editor_one: `MTO Training PNG provides training and assessment activities in Papua New Guinea, including a wide range of diplomas, certificates, training courses and more. MTO Training PNG is the preferred training provider for many industry sectors in PNG. 
            MTO trainers have extensive experience and are sensitive to cultural diversity and comfortable with training and assessment in remote locations. MTO Training PNG specialises in prompt response to a client’s service request and provide free advice on training and education. Industry clients receive tailored courses to meet their exact needs. 
            MTO Training PNG maintains constant liaison with the National Training Council of PNG to ensure our courses are of the highest standards
            Divisions associated with Training Services: MTO Training
            `,
        });
        await _MTOTraining.save();
        const _MTOTraining_res= await MTOTraining.find();
        res.json(_MTOTraining_res);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
})


router.put('/:id', async (req, res) => { 
    try {
        const _mtoTraining = await MTOTraining.findById(req.params.id);

        await MTOTraining.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.json(_mtoTraining);

    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
        
    }
}) 

router.get('/', async (req, res) => {
    try { 
        const _MTOTraining_res =  await  MTOTraining.find();
        res.json(_MTOTraining_res); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




router.delete('/:id', async (req, res) => {   

    try {
        const _MTOTraining_res = await MTOTraining.findById(req.params.id);

        if (!_MTOTraining_res) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await MTOTraining.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});



module.exports = router;



