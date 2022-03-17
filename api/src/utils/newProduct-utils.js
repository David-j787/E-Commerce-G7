const { Product } = require("../db");

const uid = () => {
  return Math.random().toString(36).slice(2, 12);
};

const postProduct = async (product) => {
  if (!product.name.length)
    throw Error("there was an error creating the product");
  const newProduct = await Product.create({
    id: uid(),
    name: product.name,
    price: product.price,
    description: product.description,
    images: product.images,
    stock: product.stock,
    rating: product.rating,
  });

  return newProduct;
};

module.exports = { postProduct };
