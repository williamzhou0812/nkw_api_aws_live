const  express = require('express');
const  QPS = require('../../../models/Explore/DisvisionsDetails/qps');
const  router = express.Router();

// Start Text Contents

var p_a = `Quest Pacific Services Ltd (QPS) is a Joint Venture with Quest Exploration Drilling (PNG) Ltd (QED) – a privately-owned organization with active operations in Papua New Guinea, the Philippines and Kyrgyzstan. With a registered company in the Solomon Islands and new entity in Kazakhstan.`;

var p_b = `With more than 50 years of experience, QED has established itself as an industry leader in providing drilling services to the resources and energy industry.`;

var p_c = `NKW Group’s Joint Venture (JV) partnership with QED was formed following a recent awarded contract to provide Drilling Services at Hidden Valley Mine for Harmony (client). NKW Group and QED will deliver this service using two newly purchased drill rigs.`;

var p_d = `QED specialise in understanding the peculiarities of working in areas that often provide logistical challenges, geological complexity, topographical extremes combined with political, social and community issues that require deft management.`;

var p_e = `
Founded in 2000, the shareholders of Quest Exploration Drilling acquired an existing company with a 30-year history in the Asia Pacific region and has grown the business to be an industry leader in the provision of drilling services to our many and varied clients.`;

var p_f = `QED’s service offering is multidisciplined and includes diamond drilling, reverse circulation (RC) drilling, RC grade control, geothermal, geotechnical drilling, water boring and slope stability solutions.`;

var p_g = `QED can provide equipment that is tailored for purpose and to meet the most stringent of industry standards.`;

var p_h = ` Double QED can provide equipment that is tailored for purpose and to meet the most stringent of industry standards.`;


 
router.post('/', async (req, res) => {  

    try { 
        const _QPS = new QPS({
            title: 'Quest Pacific Services',
            logo: 'http://localhost:5000/divisions/NKW_Logos_QPS.png',
            header_background_img: 'http://localhost:5000/divisions/qps/Headers_QPS.png',
            content: [
               p_a,
               p_b,
               p_c,
               p_d,
               p_e,
               p_f,
               p_g,
               p_h
            ],
            // gallery:[
            //   'http://localhost:5000/gallery/jamar-penny-ZgmGq_eFmUs-unsplash.jpg',
            //   'http://localhost:5000/gallery/jason-yuen-jhWf66xZT2Y-unsplash.jpg'

            // ],
            gallery: [
                {
                  img: 'http://localhost:5000/gallery/jamar-penny-ZgmGq_eFmUs-unsplash.jpg',
                  img_title: 'QPS Image one'
                },
                {
                   img: 'http://localhost:5000/gallery/jason-yuen-jhWf66xZT2Y-unsplash.jpg',
                   img_title: 'QPS Image Two'
                }
            ],
            editor_context: 'none context found'
        });
        await _QPS.save();
        const _QPS_res = await QPS.find();
        res.json(_QPS_res);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
})


router.put('/:id', async (req, res) => {
  
    try {
       let  _QPS = await QPS.findById(req.params.id);
       _qps= await QPS.findByIdAndUpdate(
           req.params.id,
           {$set: req.body},
           {new: true}
       );
       res.json(_QPS);
   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server ERROR');
   }
})



router.get('/', async (req, res) => {
    try { 
        const _QPS_res =  await  QPS.find();
        res.json(_QPS_res); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




router.delete('/:id', async (req, res) => {   

    try {
        const _QPS_res = await QPS.findById(req.params.id);

        if (!_QPS_res) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await QPS.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});





module.exports = router;



