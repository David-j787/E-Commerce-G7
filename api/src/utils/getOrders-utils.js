const { Order, Product, User, product_order } = require('../db.js');
const productDetailRouter = require('../routes/productDetail-route.js');

module.exports = {
    getOrders : async (userid, orderId, status) => {
        let findedOrders = await Order.findAll({include: Product, Order, product_order});

        let filteredOrders = findedOrders;

        if (userid !== '') filteredOrders = findedOrders.filter( order => {
            return order.userId === parseInt(userid);
        })
        if (orderId !== '') filteredOrders = findedOrders.filter( order => {
            return order.id === parseInt(orderId);
        })
        if (status !== '') filteredOrders = findedOrders.filter( order => {
            return order.status === status;
        })

        return filteredOrders;
    }
}
