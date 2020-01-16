const  express = require('express');
const  HVC = require('../../../models/Explore/DisvisionsDetails/hvc');
const  router = express.Router();

// Start Text Contents




router.post('/', async (req, res) => {  

    try { 
        const _HVC = new HVC({
            title: 'HVC',
            sub_title: 'Transport & Logistics',
            header_background_img: 'http://localhost:5000/divisions/hvc/Headers_HVC.png',
            logo: 'http://localhost:5000/divisions/NKW_Logos_HVC.png',
            content: [
             `HVC commenced in 2007 to provide wet hire, operation and full maintenance of a construction fleet for use at the Hidden Valley Mine.`
            ],
            contact:
                { 
                    name: 'Jason Zoller',
                    jobs: 'General Manager',
                    phone_a: '+675 472 5161',
                    phone_b: '+617 3268 2033',
                    email:'contact@nkwgrounp.com.pg'
                },
            editor_context: req.body.editor_context
            
        });
        await _HVC.save();
        const _HVC_res = await HVC.find();
        res.json(_HVC_res);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
})


router.put('/:id', async (req, res) => {
  
    try {
       let  _HVC = await HVC.findById(req.params.id);
         await HVC.findByIdAndUpdate(
           req.params.id,
           {$set: req.body},
           {new: true}
       );
       res.json(_HVC);
   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server ERROR');
   }
})


router.get('/', async (req, res) => {
    try { 
        const _HVC_res =  await  HVC.find();
        res.json(_HVC_res); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




router.delete('/:id', async (req, res) => {   

    try {
        const _HVC_res = await HVC.findById(req.params.id);

        if (!_HVC_res) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await HVC.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});



module.exports = router;



