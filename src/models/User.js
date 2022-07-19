const knex = require('../database/conn');

class User {
  async create(name, email, password) {
    const user = await knex.insert({ name, email, password }).table('users');
    return user;
  }
}

module.exports = new User();
