const { Router } = require("express");
const { postOrder } = require("../utils/createOrder-utils");
const createOrder = Router();

createOrder.post("/", async (req, res) => {
  const order = req.body;
  try {
    const result = await postOrder(order);
    res.send("la orden fue creada con exito");
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

module.exports = createOrder;