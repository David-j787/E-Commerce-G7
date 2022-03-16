const { Product } = require('../db');
const { Op } = require('sequelize');

module.exports = {
    updateProduct : async (productObj) => {
        const { id, name, price, description, images, stock, rating } = productObj;
        const findedProduct = await Product.findByPk(id);

        name && (findedProduct.name = name);
        price && (findedProduct.price = Number(price));
        description && (findedProduct.description = description);
        images && (findedProduct.images = images);
        stock && (findedProduct.stock = Number(stock));
        rating && (findedProduct.rating = Number(rating));

        await findedProduct.save();

        return findedProduct;
    }
}
