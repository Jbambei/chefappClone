const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  //Associations create a two way connection between tables
  User.associate = function({ AuthToken }) {
    User.hasMany(AuthToken);
  };

  // Class method for authentication
  User.authenticate = async function(username, password) {
    const user = await User.findOne({ where: { username }});
    // bcrypt is a one-way hashing algorithm that allows us to store strings ont he database rather than the raw passwords
    if (bcrypt.compareSync(password, user.password)) {
      return user.authorize();
    }
    throw new Error('invalid password');
  }

  // To define an instance method, we have to access User model prototype
  User.prototype.authorize = async function () {
    const { AuthToken } = sequelize.models;
    const user = this

    // create a new auth token associated to 'this' user by calling the AuthToken class method
    const authToken = await AuthToken.generate(this.id);
    // addAuthToken is a generated method provided by sequelize for any 'hasMany' relationships
    await user.addAuthToken(authToken);
    return { user, authToken }
  };

  User.prototype.logout = async function (token) {
    // destroy the auth token record that matches the passed token
    sequelize.models.AuthToken.destroy({where: { token }});
  }
  return User;
};