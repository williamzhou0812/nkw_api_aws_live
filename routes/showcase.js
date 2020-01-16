// Show Case Mode Route
// DB Model _  allow to loop three videos, mutipitl sliders, and  one large bannar Image
// For now use Link to prsent data save 
// 

const express = require('express');
const router = express.Router();
const ShowCase = require('../models/ShowCase');



//Todos:  Create Show Case Mode Router 


//Staic @Post

router.post('/', async (req, res) => {

    const {video, middle_banner, footer_banner} = req.body;

    try {
        // save showcase data 

        const _showcase = new ShowCase({
                video,
                middle_banner,
                footer_banner
        });
        
        const _showcase_res = await _showcase.save();
        res.json(_showcase_res);
       
        
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server ERROR');
    }
});


//@GET 
router.get('/', async (req, res) => {
    try {
        const showcase = await ShowCase.find();
        res.json(showcase);
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

    const {video, middle_banner, footer_banner} = req.body;

    const _showCaseUpdateFields = {
        video: video,
        middle_banner: middle_banner,
        footer_banner: footer_banner
    };
   
    try {
        let showcase = await ShowCase.findById(req.params.id);

        showcase = await ShowCase.findByIdAndUpdate(
            req.params.id,
            {$set: _showCaseUpdateFields},
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