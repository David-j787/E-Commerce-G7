const { Order, Product } = require("../db");

const postOrder = async (order) => {
  if (!order.products.length) throw Error("there are no products in the order");
  if (!order.userId) throw Error("user id is required");

  const newOrder = await Order.create({
    total: order.total,
    userId: order.userId,
  });

  const product_order = await Promise.all(
    order.products.map((product) => {
      Product.findOne({ where: { name: product.name } }).then((produc) =>
        newOrder.addProduct(produc, { through: { amount: product.amount } })
      );
    })
  );

  return newOrder;
};

module.exports = { postOrder };
