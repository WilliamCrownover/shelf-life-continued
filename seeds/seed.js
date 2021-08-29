const sequelize = require('../config/connections');
const { User, Product , Category } = require('../models');

const userData = require('./userData.json');
const productData = require('./productData.json');
const categoryData = require('./categoryData.json');
//----------------------------------------------
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
  });

  await Category.bulkCreate(categoryData);

  await Product.bulkCreate(productData);

  process.exit(0);
};

seedDatabase();