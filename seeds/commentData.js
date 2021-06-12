const { Comment } = require('../models/index');

const commentdata = [
  {
    description: 'I just learning about this in my class.',
   // comment_date: 'March 30, 2018',
    blog_id: 1,
   // user_id: 1,
    
  },
  
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
