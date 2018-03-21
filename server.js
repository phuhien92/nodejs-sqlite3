const express = require('express');

const store   = require('./store');

// passport 
const passport = require('passport');
const flash    = require('connect-flash');
const session  = require('express-session');

// middleware to handle HTTP POST request
// extract the entire body portion of an incoming request and exposes it on req.body
const bodyParser = require('body-parser');

const app = express();
app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
	secret: 'vidyapathaisalwaysrunning',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // use connect-flash for flash messages stored in session

// pass passport for configuration
require('./config/passport')(passport); 
// routes
require('./routes/routes.js')(app, passport);

app.listen(app.get('port'), () => {
    console.log("Listening to port: ", app.get("port"))
});



