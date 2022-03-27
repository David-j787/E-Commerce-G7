const { Order, Product, User, product_order } = require('../db.js');

module.exports = {
    getOrders : async (userId, orderId, status) => {
        let findedOrders = await Order.findAll({include: [Product, product_order]});

        let filteredOrders = findedOrders;

        if (userId !== '') filteredOrders = findedOrders.filter( order => {
            return order.userId === parseInt(userId);
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
