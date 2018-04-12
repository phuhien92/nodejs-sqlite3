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
    app.get('/login', isLoggedout,(req, res) => {
        res.render('pages/login', { 
            message: req.flash('loginMessage'),
            title: "LOGIN"
        })
    });

    app.post('/login', (req,res, next) => {
        passport.authenticate('local-login', {
            successRedirect: '/dashboard',
            failureRedirect: '/login',
            failureFlash: true // allow flash message
        })(req,res,next);
        
        console.log('logging in :', req);
        console.log('remember login: ', req.body.remember );

        if (req.body.remember) {
            req.session.cookie.maxAge = 100 * 60000 * 3;
        } else {
            req.session.cookie.expires = false;
        }
    })

    // signup page
    app.get('/signup',(req,res) => {
        console.log("signup: authenticated: ", req.isAuthenticated())
        return req.isAuthenticated() ? res.redirect('/dashboard') :
        res.render('pages/signup', {
            message: req.flash('signupMessage'),
            title: "SIGNUP"
        })
    })
    app.post('/signup',passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true // allow flash message
    }));

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

    // !-- login required --//
    app.get('/dashboard', isLoggedIn, (req,res) => {
        res.render('pages/dashboard', {
            message: req.flash('dashboardMessage'),
            title: 'Dashboard',
            currentPath: req.route.path,
            currentUser: req.user
        })
    })

    /* Event Types */
    app.get('/event_types', isLoggedIn, (req,res) => {
        res.render('pages/dashboard', {
            message: req.flash('dashboardMessage'),
            title: 'Dashboard',
            currentPath: req.route.path,
            currentUser: req.user
        })
    })
}

