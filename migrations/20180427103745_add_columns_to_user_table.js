
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('user', (t) => {
      t.text('message');
      t.string('fullname');
      t.string('email');
      t.string('timezone');
      t.string('avatar');
      t.string('slug');
  })
};

exports.down = function(knex, Promise) {
  
};
