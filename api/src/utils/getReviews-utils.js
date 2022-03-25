const { Review } = require("../db.js");

module.exports = {
    getReviews : async (productId) => {
        let foundReviews = await Review.findAll({
            where: {productId: productId},
            //include: Product,
        })
    foundReviews = foundReviews.sort((a,b) => {
        return b.id - a.id
    })
    
    if(!foundReviews) throw Error('El producto no tiene reviews')

    return foundReviews
    }
}