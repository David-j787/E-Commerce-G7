const { Product, Category } = require('../db');
const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
    updateProduct : async (productObj) => {
        const { id, name, price, description, images, stock, rating, categories } = productObj;
        const findedProduct = await Product.findByPk(id);

        name && (findedProduct.name = name);
        price && (findedProduct.price = Number(price));
        description && (findedProduct.description = description);
        images && (findedProduct.images = images);
        stock && (findedProduct.stock = Number(stock));
        rating && (findedProduct.rating = Number(rating));

        let categoriesId = [];

        let dbCategories = await categories.map(category => {
            return Category.findOne({where: { name :{ [Op.substring]: category }}})
                    .then(cat => categoriesId = [...categoriesId, cat.id])
        });

        await Promise.all(dbCategories);
        await findedProduct.setCategories(categoriesId);

        await findedProduct.save();

        return findedProduct;
    }
}
