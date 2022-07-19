const bcrypt = require('bcryptjs');
const User = require('../models/User');
const validation = require('../auth/userValidation');

class UserController {
  getAllUsers(req, res) {
    const tt = User.create({ teste: 'funfaaaa' });
    res.json(tt);
  }

  async createUser(req, res) {
    const { name, email, password } = req.body;
    const response = validation.createUserValidation(name, email, password);
    if (response.errors) res.status(400).json(response);
    const hash = bcrypt.hashSync(password, 8);
    const user = await User.create(name, email, hash);
    res.json({ errors: null, email: user.email });
  }
}

module.exports = new UserController();
