const { Order, Product } = require("../db");

const getOrderId = async (orderId) => {
  const order = await Order.findByPk(orderId, {
    include: {model: Product}
  });

  if(!order) throw Error("the order does not exist")

  return order;
};

module.exports = { getOrderId };
