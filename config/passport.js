/* 
Knex.js is SQL query builder for SQLITE3 designed to be flexible, portable and fun to use
Document: http://knexjs.org/
*/
const knex = require('knex')(require('./../knexfile'))

/* encrypt user password */
const crypto = require('crypto');

const LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session
    passport.serializeUser((user, done) => {
        done(null, user.id)
    });

    // used to deserialize the user
    passport.deserializeUser((id, done) => {
        knex('user').where({id}).first()
            .then( (user) => { done(null, user) })
            .catch((err) => { done(err, null) })
    })

    // create user
    passport.use(
        'local-signup',
        new LocalStrategy({
            usernameField: 'username',
            passwordField: 'passport',
            passReqToCallback: true
        }, (req, username, password, done) => {
            console.log(`Add user ${username} `);
            const {salt, hash} = saltHashPassword({password});

            return knex('user').insert({
                salt,
                encrypted_password: hash, 
                username
            })
            .then((user) => {
                return done(null, false, req.flash('signupMessage', 'that username is already taken'))
            })
            .catch((err) => done(err))
        })
    )

    // authenticate
    passport.use(
        'local-login',
        new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback : true
        }, (req,username, password, done) => {
            knex('user').where({username}).first()
                .then((user) => {
                    console.log(user)
                    if (!user) return done(null, false);
                    const { hash } = saltHashPassword({
                        password,
                        salt: user.salt
                    })
                    console.log(hash === user.encrypted_password)
                    if (hash === user.encrypted_password) return done(null, user)
                    else return done(null, false, req.flash('loginMessage', '!Wrong password'));
                })
                .catch((err) => { return done(err)})
        })
    )
}

function saltHashPassword({
    password,
    salt = randomString()
}) {
    const hash = crypto
        .createHmac('sha512', salt)
        .update(password)

    return {
        salt,
        hash: hash.digest('hex')
    }
}

function randomString() {
    return crypto.randomBytes(4).toString('hex');
}