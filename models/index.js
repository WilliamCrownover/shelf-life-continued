const User = require("./User");
const Product = require("./Product");
const Category = require("./Category");

//association
User.hasMany(Product, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Product.belongsTo(User, {
  foreignKey: "user_id",
});
//---------------------------
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "SET NULL",
});
Product.belongsTo(Category, {
  foreignKey: "category_id",
});
module.exports = { User, Product, Category };
 