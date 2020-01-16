/**
 * This is Model for  listen Touchscreen actives like on off 
 */


const mongoose = require('mongoose');


const TouchScreenUtilSchema = mongoose.Schema({
    tc_name: String,
    action: Boolean,
    date: Date
})


module.exports = mongoose.model('touchscreenutil', TouchScreenUtilSchema);