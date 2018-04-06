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
        done(null, user)
    });

    // used to deserialize the user
    passport.deserializeUser((user, done) => {
        knex('user').where('id', user.id).first()
            .then( (user) => { done(null, user) })
            .catch((err) => { done(err, null) })
    })

    // create user
    passport.use(
        'local-signup',
        new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        }, (req, username, password, done) => {
            console.log(`Add user ${username}`);
            const {salt, hash} = saltHashPassword({password});

            return knex('user').select().where('username',username)
            .then((rows) => {
                console.log(`local-signup: rows: ${rows}, length: ${rows.length}`);
                if (rows.length === 0) {
                    return  knex('user').insert({
                                salt,
                                encrypted_password: hash, 
                                username
                            })
                            .then((userid) => {
                                console.log(`${userid} is created`)
                                done(null, true, req.flash('signupMessage', 'signup success'))
                            })
                            .catch((err) => {
                                console.log(`insert user error: ${error}`)  
                                done(err, false, req.flash('signupMessage', 'Fail to signup new user'))
                            })

                } else {
                    return done(null, false, req.flash('signupMessage', 'this username already exists'))
                }
            })
            .catch((err) => done(err, false, req.flash('signupMessage', 'Fail to signup new user')))

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
                    console.log("Looking for :",user)
                    if (!user) return done(null, false, req.flash('loginMessage', 'Wrong username or password!'));
                    const { hash } = saltHashPassword({
                        password,
                        salt: user.salt
                    })
                    
                    console.log("Login success: ", hash === user.encrypted_password);

                    if (hash === user.encrypted_password) return done(null, user)
                    else return done(null, false, req.flash('loginMessage', 'Wrong password!'));
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