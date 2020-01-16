const  express = require('express');
const  Contact = require('../models/Contact');
const  router = express.Router();

//  console.log(MTOTraingData.title)

router.post('/', async (req, res) => {  

    try { 
        const _Contact = new Contact({
            title: `Contact NKW Group`,
            header_background_img: `http://localhost:5000/contact/nkwdivisionsbanner-19x10.jpg`,
            context_editor_one: `<h1>Contact</h1><br/> <p>Phone</p><p></p>`,
            context_editor_two: `<h1>Locations</h1><p>Papua New Guinea</p>`
        });
        await _Contact.save();
        const _Contact_res = await Contact.find();
        res.json(_Contact_res);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
});


router.put('/:id', async (req, res) => { 
    try {
        const _Contact = await Contact.findById(req.params.id);

        await Contact.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.json(_Contact);

    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
        
    }
});

router.delete('/:id', async (req, res) => {   

    try {
        const __Contact_res = await Contact.findById(req.params.id);

        if (!__Contact_res) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await Contact.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});


router.get('/', async (req, res) => {
    try { 
        const _Contact_res =  await  Contact.find();
        res.json(_Contact_res); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});









module.exports = router;
