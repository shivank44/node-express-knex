const knex = require('../knex/knex'); // the connection!

module.exports = {
  getAll() {
    return knex('todo');;
  },
  getOne(id) {
    return knex('todo').where('id', id).first();
  },
  create(todo) {
    return knex('todo').insert(todo, '*');
  },
  update(id, todo) {
    return knex('todo').where('id', id).update(todo, '*');
  },
  delete(id) {
    return knex('todo').where('id', id).del();
  }
}
