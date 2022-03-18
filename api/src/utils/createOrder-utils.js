const { Order, Product, User } = require("../db");

const postOrder = async (order) => {
  // console.log(order.products);
  if (!order.products.length) throw Error("no hay productos en la orden");
  if (!order.userId) throw Error("la id del usuario es obligatoria");
  const newOrder = await Order.create({
    total: order.total,
    userId: order.userId
  });

  const products = await Promise.all(
    order.products.map((product) =>
      Product.findOne({ where: { name: product } })
    )
  );
  // const product_order = await Order.addProduct(products);
  console.log(product)
  const product_order = await newOrder.addProduct(products);
  // const user = await User.findByPk(order.userId)
  // const userFK = await newOrder.addUser(user);
  // console.log(userFK);

  return newOrder;
};

module.exports = { postOrder };
