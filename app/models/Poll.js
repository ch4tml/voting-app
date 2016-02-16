var mongoose = require('mongoose');

// define the schema for our user model
var pollSchema = mongoose.Schema({

    /*datapoint: {
        value       : Number,
        color       : String,
        highlight   : String,
        label       : String
    },*/
    dataset: Array

});

// create the model for users and expose it to our app
module.exports = mongoose.model('Poll', pollSchema);