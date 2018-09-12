require('dotenv').config();
const feathers = require('@feathersjs/feathers');

var knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    user : process.env.DB_USER,
    password : 'process.env.DB_PASS',
    database : 'process.env.DB_NAME'
  }
});
const app = feathers();
