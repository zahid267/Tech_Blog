const sequelize = require('../config/connection');
const seedBlog = require('./blogData');
const seedComments = require('./commentData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlog();

  await seedComments();

  process.exit(0);
};

seedAll();
