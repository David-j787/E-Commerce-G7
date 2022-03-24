const { Product } = require("../db");

const productDelete = async (productId) => {
  if (!productId) throw Error("Product ID missing");

  const deleteProduct = await Product.destroy({ where: { id: productId } });

  if (!deleteProduct) throw Error("Product doesn't exist");

  return deleteProduct;
};

module.exports = { productDelete };
