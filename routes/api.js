/*
 * API MICROSERVICE, GET DATA FROM DB
 */
"use strict";

var mongoose = require("mongoose");
//mongoose.createConnection(process.env.MONGOLAB_URI || "mongodb://localhost:27017/paths");
mongoose.createConnection("mongodb://localhost:27017/paths");
// Schema
var Poll = require("../app/models/Poll");
 
exports.getData = (req, res) => {
    let data = [{
                    "label": "foo",
                    "highlight": "#ea4876",
                    "color": "#d67c48",
                    "value": 0
                  },
                  {
                    "label": "bar",
                    "highlight": "#f2ab96",
                    "color": "#9fa1f9",
                    "value": 0
                  },
                  {
                    "label": "foobar",
                    "highlight": "#fcc7d9",
                    "color": "#e5c995",
                    "value": 0
                  },
                  {
                    "label": "barfoo",
                    "highlight": "#ff3d23",
                    "color": "#f2d9a7",
                    "value": 0
                  }
                ];
    
    Poll.find({}, function(err, docs){
        if(err) throw err;
        if(docs.length === 0)
            res.send(data);
        else{
            console.log("Returning data from database...");
            res.send(JSON.stringify(docs[0].polls.poll.dataset));
        }
        res.end();
    });
};