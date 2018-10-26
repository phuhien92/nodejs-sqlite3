const path = require('path');
const admin = require('firebase-admin');
const fbServiceAcctKey = path.join(__dirname,'./../utils/fbServiceAccountKey.json');
const config = require('./../config');

admin.initializeApp({
	credential: admin.credential.cert(fbServiceAcctKey),
	databaseURL: config.databaseURL
})
//admin.initializeApp();

exports.signup = async (req,res) => {
    const { 
        email, 
        password,
        displayName
    } = req.body;

    admin.auth().createUser({
        email: email,
        password: password,
        displayName: displayName,
        photoURL: config.RANDOM_AVATAR
    })
    .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log("Successfully created new user:", userRecord.uid);
        return res.status(200).json({ email, message: 'Successfully created new user' });
    })
    .catch(error => {
        console.log("Error creating new user: ", error);
        return res.status(400).json(error);
    })
}  

exports.sessionLogin = (req, res) => {
    const idToken   = req.body.idToken.toString();
    const csrfToken = req.body.csrfToken.toString();

    // Guard against CSRF attacks
    if (csrfToken !== req.cookies.csrfToken) {
        res.status(401).send('UNAUTHORIZED REQUEST!');
        return;
    }

    // set session expiration to 5 days
    const expiresIn = 60* 60 *4*5*1000;

    admin.auth().createSessionCookie(idToken, {expiresIn})
    .then(sessionCookie => {
        // Set cookie policy for session cookie
        const options = {maxAge: expiresIn, httpOnly: true, secure: true};
        res.cookie('session', sessionCookie, options);
        res.status(200).json({sessionLogin: 'sucesss'});
    }, error => {
        res.status(401).send('UNAUTHORIZED REQUEST!');
    })
}

exports.verifyFirebaseIdToken = idToken => {
    admin.auth().verifyIdToken(idToken)
    .then(decodedToken => {
        var uid = decodedToken.uid;
        return uid;
    })
    .catch(error => {
        console.log("controllers/authController/verifyFirebaseIdToken : error :", error);
        return error;
    })
}
