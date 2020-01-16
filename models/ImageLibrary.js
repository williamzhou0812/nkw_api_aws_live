const mongoose = require('mongoose');

const ImageLibrarySchema = mongoose.Schema({
    imageName: String, 
    imageData: String,
    uploadDateTime: Date

}); 

module.exports = mongoose.model('imagelibrary', ImageLibrarySchema);