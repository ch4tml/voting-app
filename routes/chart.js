/*
 * GET Chart page.
 */
 
exports.chart = function(req, res){
  res.render('chart', { title: 'Poll & Votes' });
};
