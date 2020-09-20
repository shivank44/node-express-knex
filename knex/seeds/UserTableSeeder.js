const bcrypt = require("bcryptjs");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync("secret", salt);
      return knex('users').insert([
        {name: 'user',email: 'user@user.com',password:hash,status: '1'}
      ]);
    });
};
