const knex = require('../knex/knex'); // the connection!

module.exports = {
  getusersByEmail(email) {
    return knex('users').where('email', email).first();
  },
  getOne(id) {
    return knex('users').where('id', id).first();
  },
  create(todo) {
    return knex('users').insert(todo, '*');
  },
  update(id, todo) {
    return knex('users').where('id', id).update(todo, '*');
  },
  delete(id) {
    return knex('users').where('id', id).del();
  }
}
