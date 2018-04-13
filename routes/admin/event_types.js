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

router.post('/create_event', (req,res, next) => {
    return res.status(200);
})
module.exports = router;