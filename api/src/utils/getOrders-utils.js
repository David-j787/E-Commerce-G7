const { Order, Product, User } = require('../db.js');

module.exports = {
    getOrders : async userid => {
        let findedOrders = await Order.findAll({where: {userId: userid},include: Product});
        if(!findedOrders) throw Error('El usuario no tiene ordenes.');
        return findedOrders;
    }
}