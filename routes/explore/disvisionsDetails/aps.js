const  express = require('express');
const   APS = require('../../../models/Explore/DisvisionsDetails/aps');
const  router = express.Router();

// Start Text Contents

var p_a = `
All Power Services Limited commenced operation in October 2010 under the original company name “Hipowa Lae Limited”. In light of the changing focus of the business and the intention to expand to centres outside of Lae the decision was made in early 2015 to change the company name to All Power Services Limited.
`;

var p_b = `
In July 2018, NKW Holdings Limited acquired 100% of the shares in All Power Services Limited and the process of merging the company into the group and developing the opportunities and synergies this merger presents is ongoing.
`;

var p_c = 'Contact Us to find out more about our power and electricity services or visit the APS website.';

var _sub_title = [
    "PRINCIPLE AREAS OF BUSINESS" ,
    "POWER GENERATION",
    "ELECTRICAL CONTRACTING",
    "HVAC CONTRACTING"
];



var sub_li_a =   [
            "Power Generation sales, service and repairs",
            "Electrical Contracting",
            "Refrigeration/HVAC contracting, sales, service and repairs."
            ];
      
var sub_li_b =  [
            "Supply and installation and rental of Generating Equipment from 10KVA up to 2.5MVA",
            "Manufacture and installation of Automatic changeover switches ",
            `Routine Scheduled Maintenance with approximately 70 service contracts in Lae area.`,
            "24/7 Mechanical and Electrical Call-out service. ",
            "Data logging of real Power, Apparent Power, Reactive Power of client loads so that we can accurately size Generators and power factor correction equipment.",
            "Supply of Power Generation Spares"
            ];

var sub_li_c = [
            "RCD Testing",
            "Earth Testing", 
            "All types of Domestic, Industrial and commercial installation and maintenance",
            "24/7 Call-out service",
            "Infra-Red Thermal Imaging Inspections of Electrical equipment",
            `New Building & Renovation Construction Electrical Fit Out HVAC CONTRACTING`
    ];
  
var sub_li_d = [ 
    "Supply and Installation of Residential, Commercial and Industrial Air-conditioning.",
    "Refrigerated Container Servicing, Pre-Trips and testing.",
    "Domestic, Industrial and Commercial Refrigeration installation and maintenance.",
    "24/7 Call-out service."
  ];
       
 
router.post('/', async (req, res) => {  

    try { 
        const _APS= new APS({
            title: 'All Power Services(APS)',
            logo: 'http://localhost:5000/divisions/NKW_Logos_APS.png',
            header_background_img: 'http://localhost:5000/divisions/allpowerservices/Headers_APS.png',
            sub_nav: ['Principle Areas of Business', 'Power Generation', 'Electrical Contracting', 'HVAC Contracting'],
            contact: {
                name: 'Matt Sims',
                job: 'General Manager',
    
            },
            context:  {
                p: [p_a, p_b, p_c],
                subtitle: _sub_title,
                sub_li_a: sub_li_a,
                sub_li_b: sub_li_b,
                sub_li_c: sub_li_c,
                sub_li_d: sub_li_d

            },
            editor_context: req.body.editor_context
        });
        await _APS.save();
        const _APS_res = await APS.find();
        res.json(_APS_res);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
})

router.put('/:id',async (req, res)  => {
    try {
        let  _aps = await APS.findById(req.params.id);
        await APS.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.json(_aps);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server ERROR');
    }
})

router.get('/', async (req, res) => {
    try { 
        const _APS_res =  await  APS.find();
        res.json(_APS_res); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




router.delete('/:id', async (req, res) => {   

    try {
        const _APS = await APS.findById(req.params.id);

        if (!_APS) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await APS.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});



module.exports = router;



