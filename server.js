const express = require('express');

const env     = process.env.NODE_ENV || "development";

const morgan  = require('morgan');

const cookieParser = require('cookie-parser'); // parse cookie header 

const auth = require('./routes/auth');

const path = require('path');

// dev / prod config
require('./config/keys');

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
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cookieParser());

if (env === "development") app.use(morgan('dev')); // log every request to the console

app.use(session({
	secret: 'youarealwaysrunning',
	resave: true,
	saveUninitialized: true,
	cookie: { maxAge: 6000000 }
 } )); // session secret
 
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // use connect-flash for flash messages stored in session

// pass passport for configuration
require('./config/passport')(passport); 
// routes
app.use('/',require('./routes/index'));
app.use('/admin',require('./routes/admin')); /* Todo: add isLoggedIn */
//app.use('/admin', auth.isLoggedIn,require('./routes/admin'));

//require('./routes/index.js')(app, passport);

app.listen(app.get('port'), () => {
    console.log("Listening to port: ", app.get("port"))
});



