/*
 * GET create page.
 */
 
var Poll = require("../app/models/Poll.js");
var randomColour = require("randomcolor");
//var newChart = require("../public/javascripts/chartControl.js");

exports.create = (req, res) => {
    res.render("create", {
        title: "Poll & Votes"
    });
};

/*
 * AUTHENTICATED USER ACTIONS
 */
 
/* // CREATE NEW POLL
 * 1) Instantiate new Poll
 * 2) Create new dataset
 * 
 */

exports.submit = (req, res) => {
    var poll = new Poll();
    console.log(req.body);
    poll.created = new Date();
    
    
    poll.polls.poll = {
            title           : req.body.title,
            dataset         : [{
                value       : 0,
                color       : randomColour(),
                highlight   : String,
                label       : req.body.option1
            },
            {
                value       : 0,
                color       : randomColour(),
                highlight   : String,
                label       : req.body.option2
            },
            {
                value       : 0,
                color       : randomColour(),
                highlight   : String,
                label       : req.body.option3
            },
            {
                value       : 0,
                color       : randomColour(),
                highlight   : String,
                label       : req.body.option4
            }]
        };
    
    poll.save((err) => {
        if (err) throw err;
        console.log("Successfully stored in the database");
    });

    //newChart.createNewChart(poll.dataset);
    /*  
    "use strict";
    var Chart;
            
    // Get context with jQuery - using jQuery's .get() method.
    var ctx = $("#myChart").get(0).getContext("2d");
    // Get the context of the canvas element we want to select
    //var ctx = document.getElementById("myChart").getContext("2d");

    var data = poll.dataset;

    var opts = {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke : true,
    
        //String - The colour of each segment stroke
        segmentStrokeColor : "#fff",
    
        //Number - The width of each segment stroke
        segmentStrokeWidth : 2,
    
        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout : 50, // This is 0 for Pie charts
    
        //Number - Amount of animation steps
        animationSteps : 100,
    
        //String - Animation easing effect
        animationEasing : "easeOutBounce",
    
        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate : true,
    
        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale : false,
    
        //String - A legend template
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    
    };
        
            // And for a doughnut chart
    var myDoughnutChart = new Chart(ctx).Doughnut(data, opts);  
    */    
    res.redirect("/create");
};

/* // UPDATE EXISTING POLL
 * 1) Authenticate user - only logged in user can delete poll //  must be there their own poll
 * 2) If no authenticated, redirect to home/signup/login
 *
 * 1) FindOne Poll by ID
 * 2) Update new dataset/ push new data label to dataset
 * 
 */
 
 /* // DELETE EXISTING POLL
 * 1) Authenticate user - only logged in user can delete poll //  must be there their own poll
 * 2) If no authenticated, redirect to home/signup/login
 *
 * 1) FindOne Poll by ID
 * 2) Update new dataset/ push new data label to dataset
 * 
 */
 
 /*
    poll.remove({_id: id}(err) => {
        if (err) throw err;
        console.log("Successfully removed poll from data");
    });
 */
 
 /*
 * UNAUTHENTICATED USER ACTIONS
 */
 
/* // VOTE ON EXISTING POLL
 * 1) FindOne Poll by ID and label
 * 2) Update dataset on database
 * 3) 
 */