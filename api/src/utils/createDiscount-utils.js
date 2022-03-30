const { Product, Category, Discount_category, product_category } = require('../db');
const { productDelete } = require('./deleteProduct-utils');
const { Op } = require('sequelize');

const postDiscount = async (discount, categoryId) => {
    //categoryId = await Category.findByPk(categoryId).id
    discount = parseInt(discount)
    console.log(categoryId, discount)
    if (!discount || !categoryId) throw Error('A valid category and a discount are required')

    const newDiscount = await Discount_category.findOrCreate({
        where: {
            categoryId: categoryId,
            discount: discount
        }
    })

    const productsToDiscount = await product_category.findAll({
        where: {
            categoryId: categoryId
        }
    })

    

    const discountedProducts = await Promise.all(
        productsToDiscount.map((p) => {
            Product.findByPk(p.productId)
            .then(
                prod => prod.update({
                    discount: discount
                })
            )
        })
    )
    
    return discountedProducts;

};

module.exports = { postDiscount }
