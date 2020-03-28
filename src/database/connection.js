const knex = require('knex'),
      configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;