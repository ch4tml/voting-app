/*
 * GET createChart page.
 */
 
 var Poll = require("../app/models/Poll.js");
 var randomColour = require("randomcolor");
 
 exports.createChart = (req, res) => {
    res.render("createChart", {
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
    
    poll.dataset.push({
        value       : 0,
        color       : randomColour(),
        highlight   : String,
        label       : req.option1
    },
    {
        value       : 0,
        color       : randomColour(),
        highlight   : String,
        label       : req.option2
    },
    {
        value       : 0,
        color       : randomColour(),
        highlight   : String,
        label       : req.option3
    },
    {
        value       : 0,
        color       : randomColour(),
        highlight   : String,
        label       : req.option4
    });
    
    poll.save((err) => {
        if (err) throw err;
        console.log("Successfully stored in the database");
    });
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