const router = require('express').Router();

router.get('/', (req,res,next) => {
    res.redirect('/admin/dashboard')
})

router.use('/dashboard',require('./dashboard'));
router.use('/profile', require('./profile'));
router.use('/event_types', require('./event_types'));

module.exports = router;