const express = require('express');
const PCSCards = require('../../../models/Explore/PcsCardsModel/Pcs_card_model');
const router = express.Router();



//Here is post router allow to add create new card
router.post('/', async (req, res) => {
    try {
       _pcsCard = new  PCSCards({
           card_title: req.body.card_title,
           card_editor_contents:  req.body.card_editor_contents
       });
       await  _pcsCard.save();
       const All_PCS_Card = await PCSCards.find();
       res.json(All_PCS_Card);
       
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
});



router.get('/', async (req, res) => {
    try { 
        const _PCSCardss =  await  PCSCards.find();
        res.json(_PCSCardss); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


router.put('/:id', async (req, res) => {

    try {
     

        _updatedPCSCards = await PCSCards.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true} 
        );
    const _PCSCardss =  await  PCSCards.find();
    res.json(_PCSCardss);  
    } catch (err) {
       console.error(err.message);
       res.status(500).send('Server ERROR');
    }

    /// update singe array
});

router.delete('/:id', async (req, res) => { 

    try {
        const _pcsCard = await PCSCards.findById(req.params.id);

        if (!_pcsCard) {
            return res.status(404).json({msg: 'can not found in _pcsCard'});
        }
        await PCSCards.findByIdAndRemove(req.params.id);
        
        const allPCSCard =  await PCSCards.find(); 

        res.json({data: allPCSCard, msg: 'Data by Delete'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }


})



module.exports = router;
