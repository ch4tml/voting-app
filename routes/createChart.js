/*
 * GET createChart page.
 */

exports.createChart = (req, res) => {
    res.render("createChart", {
        title: "Votr"
    });
};