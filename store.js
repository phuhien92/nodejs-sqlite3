/* 
Knex.js is SQL query builder for SQLITE3 designed to be flexible, portable and fun to use
Document: http://knexjs.org/
*/
const knex = require('knex')(require('./knexfile'))

module.exports = {
    createUser( {username, password} ) {
        console.log(`Add user ${username} with password ${password}`)
        return knex('user').insert({
            username,
            password
        })
    }
}