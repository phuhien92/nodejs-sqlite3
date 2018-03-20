/* 
Knex.js is SQL query builder for SQLITE3 designed to be flexible, portable and fun to use
Document: http://knexjs.org/
*/
const knex = require('knex')(require('./knexfile'))

/* encrypt user password */
const crypto = require('crypto');

module.exports = {
    saltHashPassword,
    createUser( {username, password} ) {
        console.log(`Add user ${username} `);
        const {salt, hash} = this.saltHashPassword(password);
        
        return knex('user').insert({
            salt,
            encrypted_password: hash, 
            username
        })
    }
}

function saltHashPassword(password) {
    const salt = randomString();
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