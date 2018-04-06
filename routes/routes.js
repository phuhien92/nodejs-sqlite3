const store = require('./../store');

module.exports = function(app, passport) {
    // index page
    app.get('/', (req,res) => {
        store.getProducts()
        .then((request,respond) => {
            res.render('pages/index', {
                title: 'NODEJS - SQLITE DEMO',
                isLoggedIn: req.isAuthenticated(),
                products: request
            })
        })

    })

    // login page
    app.get('/login', (req, res) => {
        res.render('pages/login', { 
            message: req.flash('loginMessage'),
            title: "LOGIN"
        })
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true // allow flash message
    }), (req,res) => {
        console.log('logging in :', req);

        if (req.body.remember) {
            req.session.cookie.maxAge = 100 * 60000 * 3;
        } else {
            req.session.cookie.expires = false;
        }
    })

    // signup page
    app.get('/signup', (req,res) => {
        res.render('pages/signup', {
            message: req.flash('signupMessage'),
            title: "SIGNUP"
        })
    })
    app.post('/signup',passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true // allow flash message
    }), (req,res) => {
        store
        .createUser({
            username: req.body.username,
            password: req.body.password 
        })
    });

    // logout action
    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });

    // book a product
    app.post('/book', (req,res) => {
        console.log("booked product: ", req.body.product);
        let backURL = req.header('Referer') || '/';

        res.redirect('/')
    })
}

// route middleware
function isLoggedIn(req,res,next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/');
} 