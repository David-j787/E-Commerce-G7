const { Product, Category, Discount_category, product_category } = require('../db');
const { productDelete } = require('./deleteProduct-utils');
const { Op } = require('sequelize');

const postDiscount = async (discount, categoryId) => {
    discount = parseInt(discount)
    console.log(categoryId, discount)
    if (!discount || !categoryId) throw Error('A valid category and a discount are required')

    const checkDiscount = await Discount_category.findByPk(categoryId)

    if (checkDiscount) throw Error('Category already has a discount')

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

const deleteDiscount = async categoryId => {
    try{
        let discountToDelete = await Discount_category.destroy({where: { categoryId }})

        if (!discountToDelete) throw Error('Discount does not exist in the DB')

        const productsToRestore = await product_category.findAll({
            where: {
                categoryId: categoryId
            }
        })
        
        const restoredProducts = await Promise.all(
            productsToRestore.map((p) => {
                Product.findByPk(p.productId)
                .then(
                    prod => prod.update({
                        discount: 0
                    })
                )
            })
        )

        return restoredProducts;

    } catch(err) {
        throw Error("Couldn't delete discount... " + err)
    }
}

const getDiscounts = async () => {
    try {
        let allDiscounts = await Discount_category.findAll({include: Category});
        return allDiscounts
    } catch(err) {
        console.error('No discounts on the DB', err)
    }
}

module.exports = { postDiscount, deleteDiscount, getDiscounts }
