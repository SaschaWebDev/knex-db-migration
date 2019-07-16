exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'sascha', website: 'www.saschamajewsky.de' },
        { username: 'test', website: 'www.test.com' },
      ]);
    });
};
