const router = require('express').Router();
const auth   = require('./../auth');

// !-- event types index page --//
router.get('/', auth.isLoggedIn, (req,res) => {
    res.render('pages/profile', {
        message: req.flash('profileMessage'),
        title: `Profile: ${req.user.username}`,
        currentPath: req.baseUrl,
        currentUser: req.user
    })
});

module.exports = router;