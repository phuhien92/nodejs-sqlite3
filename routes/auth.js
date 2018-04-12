// route middleware
function isLoggedIn(req,res,next) {
    return req.isAuthenticated() ? next() : res.redirect('/');
} 

function isLoggedout(req,res, next) {
    return req.isAuthenticated() ? res.redirect('/') : next(); 
}

module.exports = {
    isLoggedIn: isLoggedIn,
    isLoggedout: isLoggedout
}