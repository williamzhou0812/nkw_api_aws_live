const  express = require('express');
const  NKWCatering = require('../../../models/Explore/ExploreDetails/NKW_Catering');
const  NKWCateringData =  require('./Data_Exp/data_nkw_catering_exp');

const  router = express.Router();



// console.log(NKWCateringData.title)

router.post('/', async (req, res) => {  

    try { 
        const _NKWCatering = new NKWCatering({
            title: "NKW Catering",
            logo1: `http://localhost:5000/divisions/NKW_Logos_NKWCatering.png`,
            logo2: `http://localhost:5000/exploreland/Catering_2.jpg`,
            header_background_img: `http://localhost:5000/exploredetails/Headers_NKWcatering.png`,
            cotegory_footer_img: `http://localhost:5000/exploreland/Catering_1.jpg`,
            subtitle: [`Divisions associated with Catering`],
            context_editor_one: `Since 2004, NKW Group have provided camp catering, camp administration and accommodation cleaning, office cleaning, ground keeping and ancillary services to the Hidden Valley Mine.`,
            context_editor_two: `CAMP CATERING SNAPSHOT:
            Hidden Valley: 4,600 meals a day for Harmony
            Manus: 1,400 meals a day for the Australian Government
            Lae: 2,000 meals a day for various clients
            Lae: 500 meals a day for Wafi Golpu JV
            `, 
            context_editor_three: `CAMP CATERING SERVICES
            • Meals: Supply 3 meals per day, 7 days per week to registered camp occupants numbering approx. 2,600. Supply casual meals to approved HVSL staff.
            • Camp Administration & Accommodation Cleaning:
                  o Clean kitchen after each sitting, including all plates, utensils, tables, floors, etc.
                  o Manage Camp bookings for 953 accommodation rooms
            • Camp Laundry Services: Facilities a laundry service by issuing each occupant with a laundry bag to place clothes for washing, drying and ironing – 3 times per week with same day return.
            • Cleaning Services: Daily cleaning of the accommodation block, including each individual residential unit. Changing bed linen, towels, empty rubbish bins, laundry block, toilet block, etc.
            • Camp Office Cleaning: Maintain a clean, hygienic, neat and safe environment. Window cleaning, floors, air conditioning, rubbish bins, etc.
            • Building Exteriors: Are washed down and cleaned 6-monthly.
            • Ground Keeping: Mowing of lawns, weeding of garden beds.
            Divisions associated with Catering: NKW Catering`
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
        const _knwCatering = await NKWCatering.findById(req.params.id);

        await NKWCatering.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.json(_knwCatering);

    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
        
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



