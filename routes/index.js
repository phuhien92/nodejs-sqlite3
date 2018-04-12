const router   = require('express').Router();
const auth     = require('./auth');
const passport = require('passport');

router.get('/', (req,res) => {
    res.render('pages/index', {
        title: 'NODEJS - SQLITE DEMO',
        isLoggedIn: req.isAuthenticated(),
    })
})

// login page
router.get('/login', auth.isLoggedout,(req, res) => {
    res.render('pages/login', { 
        message: req.flash('loginMessage'),
        title: "LOGIN"
    })
});

router.post('/login', (req,res, next) => {
    passport.authenticate('local-login', {
        successRedirect: '/admin/dashboard',
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
router.get('/signup',(req,res) => {
    console.log("signup: authenticated: ", req.isAuthenticated())
    return req.isAuthenticated() ? res.redirect('/admin/dashboard') :
    res.render('pages/signup', {
        message: req.flash('signupMessage'),
        title: "SIGNUP"
    })
})
router.post('/signup',(req,res, next) => {
    passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true // allow flash message
    })
});

// logout action
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

module.exports = router;