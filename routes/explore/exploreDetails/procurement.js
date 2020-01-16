const  express = require('express');
const  Procurement = require('../../../models/Explore/ExploreDetails/Procurement');

const  router = express.Router();



//console.log(NKWFresh_Data.title)

router.post('/', async (req, res) => {  

    try { 
        const _Procurement = new Procurement({
            title: 'Procurement',
            logo1: 'http://localhost:5000/divisions/NKW_Logos_NKWFresh.png',
            logo2: 'http://localhost:5000/exploredetails/Procurement_Image.png',
            header_background_img: 'http://localhost:5000/exploredetails/Headers_Procurement.png',
            cotegory_footer_img: 'http://localhost:5000/exploredetails/procurement_footer.png',
            subtitle:[`Divisions associated with Training Services`],
            context_editor_one: `The NKW Group offers end-to-end management of specialist goods and services.
            Divisions associated with Procurement`,    
            
        });
        await _Procurement.save();
        const _Procurement_res = await Procurement.find();
        res.json(_Procurement_res);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
});


router.put('/:id', async (req, res) => { 
    try {
        const _Procurement = await Procurement.findById(req.params.id);

        await Procurement.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.json(_Procurement);

    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
        
    }
}) 


router.get('/', async (req, res) => {
    try { 
        const _Procurement =  await  Procurement.find();
        res.json(_Procurement); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




router.delete('/:id', async (req, res) => {   

    try {
        const _Procurement = await Procurement.findById(req.params.id);

        if (!_Procurement) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await Procurement.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});



module.exports = router;



