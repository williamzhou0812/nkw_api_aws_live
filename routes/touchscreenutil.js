const  express = require('express');
const  TouchScreenModel = require('../models/TouchScreenUtil');
const router = express.Router();
//Staic @Post

router.post('/', async (req, res) => {

    const {tc_name, action, date} = req.body;

    try {
        // Save TouchScreen Data

        newTouchScreenAction  = new TouchScreenModel({
            tc_name: tc_name,
            action: action,
            date: date
        });
        
        const newTouchScreenAction = await newTouchScreenAction.save();
        // const showcase_res = await ShowCase.find();
        res.json(_res_newTouchScreenAction);
       // res.send('ShowCase Defaulte data Saved')
        
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server ERROR');
    }
});


//@GET 
router.get('/', async (req, res) => {
    try {
        const newTouchScreenAction = await newTouchScreenAction.find();
        res.json(newTouchScreenAction);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server ERROR')
    }
}); 

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const showcase = await ShowCase.findOne({_id:id});
        res.json(showcase);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server ERROR')
    }
}); 


//@Update 
router.put('/:id', async (req, res) => {

    const {title, video, poster_img, sliders, bannerImg} = req.body;

    const showCaseFields = {
        
        title: title,
        video: video,
        poster_img: poster_img,
        sliders: sliders,
        bannerImg: bannerImg

    };
   
    try {
        let showcase = await ShowCase.findById(req.params.id);

        showcase = await ShowCase.findByIdAndUpdate(
            req.params.id,
            {$set: showCaseFields},
            {new: true}
        );

        const showcase_res =  await ShowCase.find();

        res.json(showcase_res);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server ERROR');
    }
    
    // res.send('Show case mode put router working')
});

//@Delect 

router.delete('/:id', async (req, res) => {
    try {
        let showcase = await ShowCase.findById(req.params.id);

        if (!showcase) {
            return res.status(404).json({msg: 'showcase Data not Found'});
        }
        
        await ShowCase.findOneAndRemove(req.params.id);


        const showcase_res =  await ShowCase.find();

        res.json(showcase_res);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }
});

module.exports = router;