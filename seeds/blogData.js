const { Blog } = require('../models/index');

const blogdata = [
  {
    title: 'Blog Title 1',
    content : 'Blog text content',
  //  blog_date: 'April 20, 2021 07:00:00',
   // user_id: '',
  },
  {
    title: 'Blog Title 2 ',
    content : 'Blog text content 2 ',
  //  blog_date: 'April 25, 2021 07:00:00',
   // user_id: '1',
  },
  
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;
