const  express = require('express');
const  NKWFresh = require('../../../models/Explore/ExploreDetails/NKW_Fresh');
const  NKWFresh_Data =  require('./Data_Exp/data_nkw_fresh');

const  router = express.Router();



//console.log(NKWFresh_Data.title)

router.post('/', async (req, res) => {  

    try { 
        const _NKWFresh = new NKWFresh({
            title: 'NKW Fresh',
            logo1: 'http://localhost:5000/divisions/NKW_Logos_NKWFresh.png',
            logo2: 'http://localhost:5000/divisions/NKW_Logos_MountainCoffee.png',
            header_background_img: 'http://localhost:5000/exploredetails/Headers_NKWFresh.png',
            cotegory_footer_img: 'http://localhost:5000/exploreland/NKW_CategoryImages_Agriculture.png',
            subtitle:[`Divisions associated with NKW Fresh`],
            context_editor_one: `NKW Fresh sources fresh produce from local smallholder vegetable farmers, creating a logistics chain for rural farmers that allows their produce access to markets throughout PNG. NKW Fresh utilises cold storage facilities in both Wau and Lae, allowing distribution of quality product to other markets, including supermarkets and catering companies. 
            NKW has established a positive relationship with local farmers, dealing directly with these smallholders rather than traders, making NKW Fresh the largest buyer in the local fresh food business, buying over 60 metric tonnes of fresh produce from farmers each month.
            Divisions associated with NKW Fresh: NKW Fresh, Mountain Coffee Roasters`,
            context_editor_two: '',
            context_editor_three: ''
            
            
        });
        await _NKWFresh.save();
        const _NKWFresh_res = await NKWFresh.find();
        res.json(_NKWFresh_res);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
});


router.put('/:id', async (req, res) => { 
    try {
        const _NKWFresh= await NKWFresh.findById(req.params.id);

        await NKWFresh.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.json(_NKWFresh);

    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
        
    }
}) 


router.get('/', async (req, res) => {
    try { 
        const _NKWFresh =  await  NKWFresh.find();
        res.json(_NKWFresh); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




router.delete('/:id', async (req, res) => {   

    try {
        const _NKWFresh = await NKWFresh.findById(req.params.id);

        if (!_NKWFresh) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await NKWFresh.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});



module.exports = router;



