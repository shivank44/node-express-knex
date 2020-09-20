
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      // Inserts seed entries
      return knex('todo').insert([
        {name: 'First Todo',description: 'First Todo Desc',status: '1'}
      ]);
    });
};
