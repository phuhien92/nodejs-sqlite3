const router = require('express').Router();

// !-- event types index page --//
router.get('/', (req,res) => {
    res.render('pages/event_types', {
        message: req.flash('eventtypesMessage'),
        title: 'Event Tyes',
        currentPath: req.baseUrl,
        currentUser: req.user
    })
});

module.exports = router;