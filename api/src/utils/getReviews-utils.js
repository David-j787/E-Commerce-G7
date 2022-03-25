const { Review } = require("../db.js");

module.exports = {
    getReviews : async (productId,sortBy) => {
        let foundReviews = await Review.findAll({
            where: {productId: productId},
            //include: Product,
        })
    foundReviews = foundReviews.sort((a,b) => {
        if (sortBy === "" || sortBy === 'nuevos') return b.id - a.id
        if (sortBy === 'mejores') return b.rate - a.rate
        if (sortBy === 'peores') return a.rate - b.rate
        if (sortBy === 'viejos') return a.id - b.id

    })
    
    if(!foundReviews) throw Error('El producto no tiene reviews')

    return foundReviews
    }
}