/*
 * API MICROSERVICE, GET DATA FROM DB
 */
"use strict";

var mongoose = require("mongoose");
mongoose.createConnection(process.env.MONGOLAB_URI || "mongodb://localhost:27017/paths");
// Schema
var Poll = require("../app/models/Poll");
 
exports.getData = (req, res) => {
    Poll.find({}, function(err, docs){
        if(err) throw err;
        /*var obj = {
            title   : docs[0].polls.poll.title,
            dataset : docs[0].polls.poll.dataset
        }*/
        //res.end(docs[0].polls.poll.dataset);
        console.log("Returning data from database...");
        res.send(JSON.stringify(docs[0].polls.poll.dataset));
        res.end();
    });
};