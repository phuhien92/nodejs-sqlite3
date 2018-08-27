const admin = require('firebase-admin');

exports.getUserProfile = (req,res) => {
    const sessionCookie = req.cookies.session || '';
     
    admin.auth().verifySessionCookie(
        sessionCookie,
        true /* checkRevoked */
    ).then(decodedClaims => {
        console.log("Decoded Claims", decodedClaims);
        
        return res.status(200).json();
    }).catch(error => {
        return res.status(400).json(error);
    })
}