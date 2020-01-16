const  express = require('express');
const  HiddenValley = require('../../../models/Explore/DisvisionsDetails/hidden_valley');
const  router = express.Router();

// Start Text Contents

var p_a = `Commenced 2007 to operate as a freight transport, equipment hires service and associated activities to the Hidden Valley Mine.
`;

var p_b = `Lae to Harmony and Newcrest Gold Mine in Hidden Valley, Morobe Province and infield mine site.`;


var p_c = `Transporting, delivering and unloading of dangerous goods with cyanide accreditation, including hydrogen peroxide and caustic, 3,000 tonnes of general cargo monthly, 200,000 Litres of fuel daily, 365 days a year.  Maintain all vehicles in our in-house workshop.`;

var p_d = `Year-round high rainfall causing washouts, 2300m elevation, limited infrastructure.`;


var t_a = `ROUTE`;
var t_b = `SERVICES PROVIDED`;
var t_c = `CHALLENGES`;
var t_d = `FLEET`;


var li_a = `30 x Mercedes, Renault 6x6‘s, and Kenworth 6x4 prime movers and trailers running from Lae to staging depot in Bulolo`
var li_b = `5 x Mercedes and Renault 6x6‘s, and Kenworth 6x4 prime movers running from Bulolo to Mine Site via access road`;
var li_c = `20 x Flatbed and drop deck trailers`;
var li_d = `8 x 40, 000L bulk diesel tankers`;
var li_e = `3 x lowboy trailers for oversize and over dimensional freight`;
var li_e_a= `4 x side loader trailers`;
var li_f = ` 2 x 40-ton forklifts in mill area of mine site`;
var li_g = `3 x 3ton forklifts infield in warehouse`;
var li_h = `26 x 22,000L ISO - Tanks for diesel cartage`;
var li_i = `Mobile service vehicle runs with resupply convoy daily`;
 
router.post('/', async (req, res) => {  

    try { 
        const _HiddenValley = new HiddenValley({
            title: 'Hidden Valley',
            sub_title: 'Transport & Logistics',
            header_background_img: 'http://localhost:5000/divisions/hvc/Headers_HVC.png',
            logo: 'http://localhost:5000/divisions/NKW_Logos_HiddenValley.png',
            content: [
              p_a,
              t_a,
              p_b,
              t_b,
              p_c,
              t_c,
              p_d,
              t_d,
              li_a,
              li_b,
              li_c,
              li_d,
              li_e,
              li_e_a,
              li_f,
              li_g,
              li_h,
              li_i
            ],
            contact:
                { 
                    name: 'Tom Raven',
                    job: 'General Manager'
                },
            editor_context: req.body.editor_context
            
        });
        await _HiddenValley.save();
        const _HiddenValley_res = await HiddenValley.find();
        res.json(_HiddenValley_res);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
})


router.put('/:id', async (req, res) => {
  
    try {
       let  _HiddenValley = await HiddenValley.findById(req.params.id);
       hidden_Valley = await HiddenValley.findByIdAndUpdate(
           req.params.id,
           {$set: req.body},
           {new: true}
       );
       res.json(_HiddenValley);
   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server ERROR');
   }
})


router.get('/', async (req, res) => {
    try { 
        const _HiddenValley_res =  await  HiddenValley.find();
        res.json(_HiddenValley_res); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




router.delete('/:id', async (req, res) => {   

    try {
        const _HiddenValley_res = await HiddenValley.findById(req.params.id);

        if (!_HiddenValley_res) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await HiddenValley.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});



module.exports = router;



