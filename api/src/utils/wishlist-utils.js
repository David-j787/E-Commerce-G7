const { Product, Wishlist } = require('../db.js');

module.exports = {
    getWishlist : async (userId) => {
    let userWishlist = await Wishlist.findAll({ where: {userId} });

    userWishlist = userWishlist.map(prod => prod.dataValues.productId)
    
    const products = userWishlist.map(key => Product.findByPk(key));

    const results = await Promise.all(products);
    
    return results;
    },
    setWishlist: async (userId, productId) => {
        if(!userId || !productId) throw Error ('Missing userId or productId');
        const [existent, added] = await Wishlist.findOrCreate({
            where: { userId, productId },
            defaults: {
                userId,
                productId
            }
        });
        if(added) return "Relation added";
        else return
    }
}
