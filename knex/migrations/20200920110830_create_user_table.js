
exports.up = function(knex) {
    return knex.schema.createTable('users',(table) => {
        table.increments();
        table.text('name');
        table.text('email');
        table.text('password');
        table.integer('status').defaultTo('1');;
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
