/*
 * API MICROSERVICE, GET RANDOM DOCUMENT FROM DB
 */
"use strict";

var mongoose = require("mongoose");
//mongoose.createConnection(process.env.MONGOLAB_URI || "mongodb://localhost:27017/paths");
mongoose.createConnection("mongodb://localhost:27017/paths");
// Schema
var Poll = require("../../app/models/Poll");
 
exports.randomChart = (req, res) => {
    Poll.count().exec(function(err, count){
        if(err) throw err;
        var random = Math.floor(Math.random() * count);
        
        Poll.findOne().skip(random).exec(function (err, result) {
            if(err) throw err;
          res.send(JSON.stringify(result.polls.poll.dataset));
        });
    });
};