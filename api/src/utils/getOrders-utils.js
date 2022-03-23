const { Order, Product, User, product_order } = require('../db.js');
const productDetailRouter = require('../routes/productDetail-route.js');

module.exports = {
    getOrders : async (userid) => {
        let findedOrders = await Order.findAll({include: Product, Order, product_order});
        if (userid !== '') findedOrders = findedOrders.filter( p => {
            return p.userId === parseInt(userid);
        })
        if(!findedOrders) throw Error('El usuario no tiene ordenes.');
        return findedOrders;
    }
}