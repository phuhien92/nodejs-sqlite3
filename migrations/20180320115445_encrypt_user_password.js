const { saltHashPassword} = require('./../store');
exports.up = async function up (knex) {
    await knex.schema.table('user', t => {
        t.string('salt').notNullable().defaultTo('')
        t.string('encrypted_password').notNullable().defaultTo('')
    })
    await knex.schema.table('user', t => {
        t.dropColumn('password')
    })
};

exports.down = function down (knex) {
    return knex.schema.table('user', t => {
        t.dropColumn('salt')
        t.dropColumn('encrypted_password')
        t.string('password').notNullable()
    })
};
