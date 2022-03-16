const { Product } = require('../db');
const { Op } = require('sequelize');

module.exports = {
    updateProduct : async (productObj) => {
        const { id, name, price, description, images, stock, rating } = productObj;
        const findedProduct = await Product.findByPk(id);

        name ? findedProduct.name = name : false;
        price ? findedProduct.price = Number(price) : false;
        description ? findedProduct.description = description : false;
        images ? findedProduct.images = images : false;
        stock ? findedProduct.stock = Number(stock) : false;
        rating ? findedProduct.rating = Number(rating) : false;

        await findedProduct.save();

        return findedProduct;
    }
}