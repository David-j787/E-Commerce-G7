const { Router } = require("express");
const { postOrder } = require("../utils/createOrder-utils");
const { orderCheckoutSender } = require("../utils/emailSender");
const createOrder = Router();

createOrder.post("/", async (req, res) => {
  const order = req.body;
  try {
    const result = await postOrder(order);
    await orderCheckoutSender(result.id);
    res.send(result);
  } catch (err) {
    res.status(404).send("ocurrio un " + err);
  }
});

module.exports = createOrder;
