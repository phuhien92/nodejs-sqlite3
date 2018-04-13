const router = require('express').Router();

// !-- profile page --//
/* admin/profile */
router.get('/', (req,res) => {
    res.render('pages/profile', {
        message: req.flash('profileMessage'),
        title: `Profile: ${req.user.username}`,
        currentPath: req.baseUrl,
        currentUser: req.user
    })
});

module.exports = router;