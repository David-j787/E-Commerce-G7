const { Order, Product, User, product_order } = require('../db.js');
const productDetailRouter = require('../routes/productDetail-route.js');

module.exports = {
    getOrders : async (userid) => {
        let findedOrders = await Order.findAll({include: Product, Order, product_order});

        // filtramos por el parametro userid si nos lo pasaron
        if (userid !== '') findedOrders = findedOrders.filter( o => {
            return o.userId === parseInt(userid);
        })

        // retornamos lo que se haya filtrado o error
        if(!findedOrders) throw Error('El usuario no tiene ordenes.');
        return findedOrders;
    }
}
