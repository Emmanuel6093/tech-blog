const { Post } = require('../models');

const postData = [
    {
        title: 'Lorem Ipsum',   
        content: 'Lots of text here',
        userId: 1

    },
    {
        title: 'Lorem Ipsum',
        content: 'Lots of text here',
        userId: 2
    },
    {
        title: 'Lorem Ipsum',
        content: 'Lots of text here',
        userId: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;