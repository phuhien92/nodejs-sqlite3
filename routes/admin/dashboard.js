var router = require('express').Router();

// !-- /admin/dashboard--//
router.get('/',(req,res) => {
    console.log("Dashboard REQUEST:",req)
    res.render('pages/dashboard', {
        message: req.flash('dashboardMessage'),
        title: 'Dashboard',
        currentPath: req.baseUrl,
        currentUser: req.user
    })
});

module.exports = router;