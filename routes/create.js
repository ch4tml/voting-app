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
    
    poll.polls.poll = {
            created         : Date.now(),
            title           : req.body.title,
            dataset         : [{
                value       : 0,
                color       : randomColour(),
                highlight   : randomColour(),
                label       : req.body.option1
            },
            {
                value       : 0,
                color       : randomColour(),
                highlight   : randomColour(),
                label       : req.body.option2
            },
            {
                value       : 0,
                color       : randomColour(),
                highlight   : randomColour(),
                label       : req.body.option3
            },
            {
                value       : 0,
                color       : randomColour(),
                highlight   : randomColour(),
                label       : req.body.option4
            }]
        };
    
    poll.save((err) => {
        if (err) throw err;
        console.log("Successfully stored in the database");
    });

    //newChart.createNewChart(poll.dataset);
 
    res.redirect("/");
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