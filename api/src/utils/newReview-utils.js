const { Review, User, Product } = require("../db.js");

module.exports = {
    newReview: async (review, rate, userId, productId) => {
        // Verificar que el usuario no tenga ya un review para este producto.

        const previousReview = await Review.findAll({
            where:{
                productId: productId,
                userId: userId
            },
            include: Product, User
        })

        if (previousReview.length > 0) throw Error ('The user had already reviewed the product')

        // Si no hay reviews previos, lo guardamos

        const saveReview = await Review.create({
            comment: review,
            rate
        });
        if (!saveReview) throw Error ('The review cant be saved');
        
        await saveReview.setUser(userId);
        await saveReview.setProduct(productId);

        // Actualizamos el rating promedio cada vez que se hace un review de un producto

        const productRatings = await Review.findAll({
            where: { productId: productId },
            include: Product,
        })

        const productRatingSum = productRatings.reduce( (sum, review) => {
            return review.rate + sum
        },0)
        
        const productAverageRating = productRatingSum / productRatings.length

        let product = await Product.findByPk(productId)
        product.set({
            rating: productAverageRating
        })

        product = await product.save()

        return saveReview;
    }
}