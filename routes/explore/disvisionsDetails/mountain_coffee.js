const  express = require('express');
const  MountainCoffee = require('../../../models/Explore/DisvisionsDetails/mountain_coffee');
const  router = express.Router();


let p_a  = `NKW Holdings Ltd has recently acquired Mountain Coffee Roasters & Mountain Coffee Export. Combined with our NKW Fresh brand, NKW coffee division will offer new markets for our landowner shareholders, many of who, produce some of PNG’s finest coffee beans. 
`; 
let p_b = `Coffee is grown in 16 provinces of PNG, but production is mainly centred in Eastern Highlands, Western Highlands, Jiwaka, Morobe and Simbu provinces. These provinces account for over 90% of production. East Sepik supplies most of PNG Robusta exports. The Arabica coffee produced in PNG, especially those produced on the larger estates, are considered to be among the finest gourmet coffees in the world. 


    `;

let p_c = `

NKW Holdings Ltd has recently acquired the Bewapi Coffee mill and 51 hectares of land. The mill will allow processing of its own coffee and that of others, while NKW plan to develop this land into both commercial and residential areas over coming years.


`;

let p_d = `MOUNTAIN COFFEE ROASTERS SERVICES`;
let p_e =`PRE-CLEANING`;
let p_f = `HULLING`;
let p_g = `POLISHING`;
let p_h = `SIZE GRADING`;
let p_i =`GRAVITY SEPARATION`;
let p_j = `COLOUR SORTING`;
let p_k = `BLENDING OR BULKING`;
let p_l = `WEIGHING, BAGGING, CONTAINER STUFFING`;
let p_m  = `Contact Us to purchase some of Papua New Guinea’s finest premium coffee beans.`;



router.post('/', async (req, res) => {  

    try { 
        const _MountainCoffee = new MountainCoffee({
            title: 'Mountain Coffee Roasters',
            logo: 'http://localhost:5000/divisions/NKW_Logos_MountainCoffee.png',
            header_background_img: 'http://localhost:5000/divisions/mountaincoffee/Headers_MountainCoffee.png',
            content:[
              p_a,p_b,p_c,p_d,p_e,p_f,p_g,p_h,p_i,p_j,p_k,p_l,p_m
            ],
            contact: 
               {
                 name: 'Joshua Baldwin',
                 job: 'General Manager',
                 phone_a: '4729440',
                 email: 'baldwin@nkwgroup.com.pg',
                 location_a: 'P.O Box 1219, lae 411, Morobe Province, Papua New Guinea',
                 location_b: 'Bewapi Coffee Mill, Bewapi, 9 Mile, Okuk Hightway'

               },
            editor_context: req.body.editor_context
            
        });
        await _MountainCoffee.save();
        const _MountainCoffee_res = await MountainCoffee.find();
        res.json(_MountainCoffee_res);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
})


router.put('/:id', async (req, res) => {
  
    try {
       let  _MountainCoffee = await MountainCoffee.findById(req.params.id);
       _expacPNG = await MountainCoffee.findByIdAndUpdate(
           req.params.id,
           {$set: req.body},
           {new: true}
       );
       res.json(_MountainCoffee);
   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server ERROR');
   }
})




router.get('/', async (req, res) => {
    try { 
        const _MountainCoffee_res =  await  MountainCoffee.find();
        res.json(_MountainCoffee_res); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




router.delete('/:id', async (req, res) => {   

    try {
        const _MountainCoffee_res = await MountainCoffee.findById(req.params.id);

        if (!_MountainCoffee_res) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await MountainCoffee.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});



module.exports = router;



