const  express = require('express');
const  fs  = require('fs');
const  router = express.Router();
const  path = require('path');
const  ImageLibrary  = require('../models/ImageLibrary');
const  multer = require('multer');


const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file, cb) {
        cb(null, "IMAGE-" + file.originalname );
    }
});



var upload = multer({
     storage: storage,
     limits: {fileSize: 1000000}, 
});



router.post('/', upload.single('myImage'), async (req, res) =>  {  
    /// res.send('image uploaded');
   //  console.log(req.file.originalname)
    const fileName = "IMAGE-" + req.file.originalname;
    try { 
        const _ImageLibrary = new ImageLibrary({
           imageName: fileName,
           uploadDateTime: Date.now()
        });
        await _ImageLibrary.save();
        const _ImageLibrary_res = await ImageLibrary.find();
        res.json(_ImageLibrary_res);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('SERVER ERROR');
    }
     
});

router.get('/', async (req, res) => {
    try { 
        const _ImageLibrary_res =  await  ImageLibrary.find();
        res.json(_ImageLibrary_res); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// router.put('/:id', async (req, res) => { 
//     try {
//         const _Contact = await Contact.findById(req.params.id);

//         await Contact.findByIdAndUpdate(
//             req.params.id,
//             {$set: req.body},
//             {new: true}
//         );
//         res.json(_Contact);

//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send('SERVER ERROR');
        
//     }
// });

router.delete('/:id', async (req, res) => {   

    try {
        const __ImageLibrary_res = await ImageLibrary.findById(req.params.id);
        console.log(__ImageLibrary_res.imageName);

        if (!__ImageLibrary_res) {
            return res.status(404).json({msg: 'can not found in Image Library'});
        }
        await ImageLibrary.findByIdAndRemove(req.params.id);

        const resAll = await ImageLibrary.find();

        res.json(resAll);

        fs.unlink(`./uploads/${__ImageLibrary_res.imageName}`, function(err) {
            if (err) return console.error(err)
            
            console.log('file deleted successfully');
        });

    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

   

});











module.exports = router;
