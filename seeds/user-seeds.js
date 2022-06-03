const { User } = require('../models');

const userData = [
    {
        username: 'Jane',
        password: 'password'

    },
    {
        username: 'John',
        password: 'password1'
    },
    {
        username: 'Joe',
        password: 'password2'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;