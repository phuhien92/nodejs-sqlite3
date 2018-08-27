module.exports = {
    PORT: 3000,

    /* The domain that this website is on */
    DEFAULT_DOMAIN: process.env.APP_DOMAIN,

    /*
        Your email host details to use to send verification emails.
        More info on http://nodemailer.com/
    */
    MAIL_HOST: '',
    MAIL_PORT: 587,
    MAIL_SECURE: false,
    MAIL_USER: '',
    MAIL_PASSWORD: '',

    /* generate random avatar for users */
    RANDOM_AVATAR: "https://api.adorable.io/avatars/120/abott@adorable.png",

    /* Firebse config */
    databaseURL: "https://nextjs-b37bf.firebaseio.com",
}