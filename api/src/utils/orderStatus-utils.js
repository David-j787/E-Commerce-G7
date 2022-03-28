const {Order, User} = require("../db")
const { orderStatusChange } = require('./emailSender');

const putOrderStatus = async (status, orderId) => {
    if(!status.length) throw Error("the status is not valid")
    const order = await Order.findByPk(orderId, { include: User })

    if(!order) throw Error("the order does not exist")

    await order.update({status})

    await orderStatusChange(status, order)

    return order
}

module.exports = {putOrderStatus}