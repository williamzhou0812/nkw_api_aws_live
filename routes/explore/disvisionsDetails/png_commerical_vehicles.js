const  express = require('express');
const   PNGCommericalVehicles = require('../../../models/Explore/DisvisionsDetails/png_commerical_vehicles');
const  router = express.Router();

// Start Text Contents

var p_a = `NKW have completed a new dealership agreement with Penske Commercial Vehicles based in Brisbane, a division of Penske Corporation.`;

var p_b = `Penske Corporation is a closely-held, diversified, on-highway, transportation services company whose subsidiaries operate in a variety of industry segments, including retail automotive, truck leasing, transportation logistics and professional motorsports. Penske Corporation manages businesses with revenues more than $26 billion, operating in more than 3,300 locations and employing over 50,000 people worldwide.
`;

var p_c = `Penske Corporation distribute commercial vehicles from Western Star Trucks, MAN Truck & Bus and Dennise Eagle, as well as diesel and gas engines and power systems from Detroit, MTU and Allison Transmission, with related parts and services.

`;

var p_d = `All these local brands form a part of Penske Transportation Group International, the local holding company for Penske Automotive Group, which is a Fortune 500 company, operating automotive and commercial vehicle dealerships across the United States and Western Europe.`;



var p_e = `
PCV are a licensed distributor of Western Star and MAN vehicles Nationwide. PCV are also an authorised representative of Allison Transmissions. PCV provide a full service offering to the market with service, spare parts and aftermarket support being available 24/7.
`;

var p_f = `PCV support existing Western Star users in PNG such as Trans Wonderland, who are undertaking a fleet replacement program through PVC.`;




 
router.post('/', async (req, res) => {  

    try { 
        const _PNGCommericalVehicles = new PNGCommericalVehicles({
            title: 'PNG Commercial Vehicles',
            logo: 'http://localhost:5000/divisions/NKW_Logos_PCV.png',
            contact: {
                name: 'Richard Pomare',
                job: 'General Manager',
                phone_a: '72010001',
                email: 'rpomare@nkwgroup.com.pg',
                location: '9 Mile LAe, Morose Province'
            },
            context: [
               p_a,
               p_b,
               p_c,
               p_d,
               p_e,
               p_f
            ],
            header_background_img: 'http://localhost:5000/divisions/png_commericial_vel/Headers_PCV.png',
            editor_context: "none context found"
        });
        await _PNGCommericalVehicles.save();
        const _PNGCommericalVehicles_res = await PNGCommericalVehicles.find();
        res.json(_PNGCommericalVehicles_res);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
})

router.put('/:id', async (req, res) => {
  
    try {
       let  _PNGCommericalVehicles = await PNGCommericalVehicles.findById(req.params.id);
        await PNGCommericalVehicles.findByIdAndUpdate(
           req.params.id,
           {$set: req.body},
           {new: true}
       );
       res.json(_PNGCommericalVehicles);
   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server ERROR');
   }
})



router.get('/', async (req, res) => {
    try { 
        const _PNGCommericalVehicles_res =  await  PNGCommericalVehicles.find();
        res.json(_PNGCommericalVehicles_res); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




router.delete('/:id', async (req, res) => {   

    try {
        const _PNGCommericalVehicles_res = await PNGCommericalVehicles.findById(req.params.id);

        if (!_PNGCommericalVehicles_res) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await PNGCommericalVehicles.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});



module.exports = router;



