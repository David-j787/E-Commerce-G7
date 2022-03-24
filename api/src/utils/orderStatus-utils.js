const {Order} = require("../db")

const putOrderStatus = async (status, orderId) => {
    if(!status.length) throw Error("the status is not valid")
    const order = await Order.findByPk(orderId)

    if(!order) throw Error("the order does not exist")

    await order.update({status})

    return order
}

module.exports = {putOrderStatus}