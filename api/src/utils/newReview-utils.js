const { Review, User, Product } = require("../db");

module.exports = {
    newReview: async (review, rate, userId, productId) => {
        const saveReview = await Review.create({
            comment: review,
            rate
        });
        if (!saveReview) throw Error ('The review cant be saved');
        await saveReview.setUser(userId);
        await saveReview.setProduct(productId);
        return saveReview;
    }
}