/*
 * API MICROSERVICE, GET DATA FROM DB
 */
"use strict";

var mongoose = require("mongoose");
//mongoose.createConnection(process.env.MONGOLAB_URI || "mongodb://localhost:27017/paths");
mongoose.createConnection("mongodb://localhost:27017/paths");
// Schema
var Poll = require("../../app/models/Poll");
 
exports.getData = (req, res) => {
    Poll.find({}, function(err, docs){
      var data = [{
                    label     : "Manchester United",
                    highlight : "#ea4876",
                    color     : "#d67c48",
                    value     : 5
                  },
                  {
                    label     : "Arsenal",
                    highlight : "#f2ab96",
                    color     : "#9fa1f9",
                    value     : 10
                  },
                  {
                    label     : "Liverpool",
                    highlight : "#fcc7d9",
                    color     : "#e5c995",
                    value     : 2
                  },
                  {
                    label     : "Manchester City",
                    highlight : "#ff3d23",
                    color     : "#f2d9a7",
                    value     : 1
                  }
                ];
        if(err) throw err;
        if(docs === null || docs.length === 0)
            res.send(JSON.stringify(data));
        else if(docs.length > 0){
            console.log("Returning data from database...");
            res.send(JSON.stringify(docs[0].polls.poll.dataset));
        }
        res.end();
    });
};

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