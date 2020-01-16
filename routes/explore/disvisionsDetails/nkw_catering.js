const  express = require('express');
const  NKWCatering = require('../../../models/Explore/DisvisionsDetails/nkw_catering');
const  router = express.Router();

// Start Text Contents

var p_a = `
Since 2004, NKW Group have provided camp catering, camp administration and accommodation
cleaning, office cleaning, ground keeping and ancillary services to the Hidden Valley Mine.
`;

var p_b = `Hidden Valley: 4,600 meals a day for Harmony`;

var p_c = `Manus: 1,400 meals a day for the Australian Government`;

var p_d = `Lae: 2,000 meals a day for various clients`;

var p_c =  `Lae: 500 meals a day for Wafi Golpu JV`;

var t_a = `CAMP CATERING SNAPSHOT:`;
var t_b = `CAMP CATERING SERVICES`;


var li_a = `Meals: Supply 3 meals per day, 7 days per week to registered camp occupants numbering approx. 2,600. Supply casual meals to approved HVSL staff.`;
var li_b = `Camp Administration & Accommodation Cleaning: `;
var li_d = `Clean kitchen after each sitting, including all plates, utensils, tables, floors, etc.
`;
var li_e = ` Manage Camp bookings for 953 accommodation rooms`;
var li_f = `Camp Laundry Services: Facilities a laundry service by issuing each occupant with a laundry bag to place clothes for washing, drying and ironing – 3 times per week with same day return.
`;
var li_g = `Cleaning Services: Daily cleaning of the accommodation block, including each individual
residential unit. Changing bed linen, towels, empty rubbish bins, laundry block, toilet block,
etc.
`;
var li_h = ` Camp Office Cleaning: Maintain a clean, hygienic, neat and safe environment. Window
cleaning, floors, air conditioning, rubbish bins, etc.`;

var li_i = ` Building Exteriors: Are washed down and cleaned 6-monthly.`;

var li_j = `Ground Keeping: Mowing of lawns, weeding of garden beds.` ;
 
router.post('/', async (req, res) => {  

    try { 
        const _NKWCatering = new NKWCatering({
            title: 'NKW Catering',
            logo: 'http://localhost:5000/divisions/NKW_Logos_NKWCatering.png',
            header_background_img:'http://localhost:5000/divisions/nkwcatering/Headers_Catering.png',
            content: [
                p_a,
                t_a,
                p_b,
                p_c,
                p_d,
                t_b,
                li_a,
                li_b,
                li_d,
                li_e,
                li_f,
                li_g,
                li_h,
                li_i,
                li_j
                
            ],
            contact:
                { 
                    name: 'Peter John Findlay',
                    job: 'General Manager',
                    phone_a: '4725161',
                    phone_b: '32682033',
                    email: 'contact@nkwgroup.com.pg'

                },
                editor_context: req.body.editor_context
            
        });
        await _NKWCatering.save();
        const _NKWCatering_res = await NKWCatering.find();
        res.json(_NKWCatering_res);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
})

router.put('/:id', async (req, res) => {
  
    try {
       let  _NKWCatering = await NKWCatering.findById(req.params.id);
         await NKWCatering.findByIdAndUpdate(
           req.params.id,
           {$set: req.body},
           {new: true}
       );
       res.json(_NKWCatering);
   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server ERROR');
   }
})


router.get('/', async (req, res) => {
    try { 
        const _NKWCatering_res =  await  NKWCatering.find();
        res.json(_NKWCatering_res); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




router.delete('/:id', async (req, res) => {   

    try {
        const _NKWCatering_res = await NKWCatering.findById(req.params.id);

        if (!_NKWCatering_res) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await NKWCatering.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});



module.exports = router;



