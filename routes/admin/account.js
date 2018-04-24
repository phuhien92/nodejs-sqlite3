const router = require('express').Router();

// !-- profile page --//
/* admin/profile */
router.get('/', (req,res) => {
    res.render('pages/account', {
        message: req.flash('accountMessage'),
        title: `Account: `,
        currentPath: req.baseUrl,
        currentUser: req.user
    })
});

module.exports = router;