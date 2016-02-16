
/**
 * Module dependencies.
 */

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var mongodb = require("mongodb");
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session = require('express-session');

/*var routes = require('./routes');
var login = require("./routes/login");
var chart = require("./routes/chart");
var signup = require("./routes/signup");*/
var createChart = require("./routes/createChart");
var http = require('http');
var path = require('path');

var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

// all environments
app.set('port', process.env.PORT || 8080);
//app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// required for passport
app.use(session({ secret: 'voting-app-cat-meow' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
/*
app.get('/', routes.index);
app.get('/login', login.login);
app.get('/chart', chart.chart);
app.get("/signup", signup.signup);
*/
// Rooutes
require('./app/routes.js')(app, passport);
app.get("/create", createChart.createChart);
app.post("/create", createChart.submit);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
