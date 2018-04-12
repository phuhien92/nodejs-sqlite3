const router = require('express').Router();
const auth   = require('./../auth');

// !-- event types index page --//
router.get('/', auth.isLoggedIn, (req,res) => {
    res.render('pages/event_types', {
        message: req.flash('eventtypesMessage'),
        title: 'Event Tyes',
        currentPath: req.baseUrl,
        currentUser: req.user
    })
});

module.exports = router;