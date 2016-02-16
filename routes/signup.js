/*
 * GET signin page.
 */
 
exports.signup = function(req, res){
  res.render('signup', { title: 'Poll & Votes' });
};
