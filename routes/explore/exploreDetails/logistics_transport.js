const  express = require('express');
const  LogisticsTransport  = require('../../../models/Explore/ExploreDetails/Logistics_Transport');
const  LogisticsTransportData =  require('./Data_Exp/data_logistics_transport');

const  router = express.Router();




router.post('/', async (req, res) => {  

    try { 
        const _LogisticsTransport = new LogisticsTransport({
            title: 'Logistics & Transport',
            logo1: `http://localhost:5000/divisions/NKW_Logos_HiddenValley.png`,
            logo2: `http://localhost:5000/divisions/NKW_Logos_PCS.png`,
            logo3: `http://localhost:5000/divisions/NKW_Logos_PCV.png`,
            header_background_img: `http://localhost:5000/exploredetails/Headers_Logistics_Transport.png`,
            cotegory_footer_img: `http://localhost:5000/exploredetails/CategoryFooterImages_Logistics.png`,
            subtitle: ['Divisions associated with Logistics & Transport'],
            context_editor_one: 'NKW Logistics Services is an integrated freight transport, warehousing and distribution service provider. Working in partnership with our business associates we strive to achieve the best delivery times for our clients.',
            context_editor_two: `Our key areas of service include:
                                • Freight of equipment and supplies  
                                • Shipping of food and domestic items              
                                • Provision of trucks and related resources, throughout Papua New Guinea
            `,
            context_editor_three: `Divisions associated with Logistics & Transport: Hidden Valley, PCS, PNG Commercial Vehicles
            Hidden Valley Transport & Logistics
            Commenced 2007 to operate as a freight transport, equipment hires service and associated activities to the Hidden Valley Mine. 
            NKW Bus Transport services
            NKW holds a contract with MCG to provide Bus Transportation services.
            SERVICES PROVIDED
            • Provide reliable transportation services for MCG personnel, including the provision of drivers, maintenance and bus management. Buses run Bulolo to Site and return (up until 2017 buses running to Lae)  • In addition, NKW are required to provide vehicles that are suitable to transport personnel from the main camp to various locations within the mine site and within the mine pit
            CHALLENGES
            Year-round high rainfall causing washouts, 2300m elevation, limited infrastructure.
            FLEET
            • Brahman Traveller AWD 29 seat bus x 9 • Iveco Eurocargo ML 29 seat bus x 4 • Mitsubishi Rosa 29 seat bus x 11 • NB: Whilst this contract expired on 31/1/2018, NKW continues to provide the service with discussions ongoing between MCG and NKW
            Contact Us to find out how we can help with your industrial project.
            NKW Industrial Project Services
            Operating under the brand ‘Mine Spec’ NKW offer commercial services to the mining industry. We have been providing tailored service solutions to our customers since 2004 under this brand. Mine Spec understand that customers are the core of our business and make it our responsibility to ensure they are offered the highest levels of customer service plus the benefits of competitive and reliable service options throughout the region.
            Contact Us to find out how we can help with your industrial project.`

        });
        await _LogisticsTransport.save();
        const _LogisticsTransport_res = await LogisticsTransport.find();
        res.json(_LogisticsTransport_res);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
});


router.put('/:id', async (req, res) => { 
    try {
        const _logisticsTransport = await LogisticsTransport.findById(req.params.id);
        await LogisticsTransport.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.json(_logisticsTransport);
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server ERROR');
    }
});



router.get('/', async (req, res) => {
    try { 
        const _LogisticsTransport =  await  LogisticsTransport.find();
        res.json(_LogisticsTransport); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




router.delete('/:id', async (req, res) => {   

    try {
        const _LogisticsTransport_res = await LogisticsTransport.findById(req.params.id);

        if (!_LogisticsTransport_res) {
            return res.status(404).json({msg: 'can not found in Explore'});
        }
        await LogisticsTransport.findByIdAndRemove(req.params.id);

        res.json({msg: 'remvoed from Explore landing'});

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});



module.exports = router;



