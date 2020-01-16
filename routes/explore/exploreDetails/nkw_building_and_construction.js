const express  = require('express');
const NKW_BC = require('../../../models/Explore/ExploreDetails/NkwBuildingandConstruction');

const router = express.Router();




// 

// @post /api/nkwbc 

router.post('/', async (req, res) => {

    try {
        const _nkwBC = new NKW_BC({
            title: "NKW Building & Construction",
            logo1: `http://localhost:5000/divisions/NKW_Logos_QPS.png`,
            logo2: `http://localhost:5000/divisions/NKW_Logos_NKWConstruction.png`,
            header_background_img: 'http://localhost:5000/exploredetails/Headers_BuildingConstruction.png',
            cotegory_footer_img:'http://localhost:5000/exploredetails/CategoryFooterImages_Building.png',
            subtitle: [
                'Divisions associated with Construction: QPS, NKW Construction'
            ],
            context_editor_one:`<p>NKW Building & Construction Services offer comprehensive solutions. A locally-based company servicing Papua New Guinea, NKW Group deliver ‘fit for purpose’ services, within budget and on schedule. We build accommodation facilities for mining townships and medium to large corporate companies throughout Papua New Guinea. Materials and labour are sourced locally and internationally. Through our joint venture companies, we offer road construction, maintenance and equipment hire.</p>`,
            context_editor_two: `Complete Construction Services:
                                    • New, renovate or rebuild
                                    • Warehouses, camp accommodation, offices, houses and Civil Works
                                    • Equipment Hire
                                    • Maintenance and camp management
                                    • Project management and labour hire
                                    `,
            context_editor_three: `Remote Site Operations:
                                    • Manus: 1 x 1,000 man camp • 1 x 300 Man Camp • 1 x 70 Man Camp
                                    • Lae: Service Provider to the WAFI Project at 11 mile • Catering and Housekeeping • Facilities (Office for 80 personal) `,
            context_editor_four: `Experience in Camp Construction and Catering:
                                    • NKW Group have been building camps in Papua New Guinea for over 5 years. We know the terrain and the culture and have our own CA team to ensure Land Owners are given direct attention before issues escalate, as we know they can.Contact Us to benefit from our comprehensive range of building, construction, mining campsite and infrastructure services.
                                    Divisions associated with Construction: QPS, NKW Construction`,
            context_editor_five: `
                NKW Group Industrial Project Services
                Operating under the brand ‘Mine Spec’ N KW offer commercial services to the mining industry. We have been providing tailored service solutions to our customers since 2004 under this brand. Mine Spec understand that customers are the core of our business and make it our responsibility to ensure they are offered the highest levels of customer service plus the benefits of competitive and reliable service options throughout the region.
                Contact Us to find out how we can help with your industrial project.
            `

        });

        await _nkwBC.save();

        const _nkwBC_res = await NKW_BC.find();
        res.json(_nkwBC_res);

    } catch (error ) { 

        console.error(error.message);
        res.status(500).send('SERVER ERROR');

    }



});



router.put('/:id', async (req, res) => { 
    try {
        const _nkwBC = await NKW_BC.findById(req.params.id);
        await NKW_BC.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.json(_nkwBC);
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server ERROR');
    }
});


router.get('/', async (req, res) => { 

        try { 
            const _nkwBC = await NKW_BC.find()
            res.json(_nkwBC);
        } catch (error) { 
            console.log(error.message);
            res.status(500).send('SERVER ERROR');
        }

})


module.exports = router;





