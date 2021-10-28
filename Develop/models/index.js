// import models
const Product = require('./Product');
const Category = require('./Category');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');

// Products belongsTo Category
Product.belongsTo(Category,
  {
  foreignKey: "category_id",
});
// Categories have many Products
Category.hasMany(Product,
  {
  foreignKey: "category_id",
  onDelte: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,
  {
  through:{
    model: ProductTag,
    unique: false
  },
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,
  {
  through:{
    model: ProductTag,
    unique: false
  }
});
module.exports = {
  Product,
  Category,
  ProductTag,
  Tag,
};
