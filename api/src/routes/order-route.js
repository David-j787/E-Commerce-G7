const { Router } = require("express");
const { getOrderId } = require("../utils/order-utils");

const orderRoute = Router();

orderRoute.get("/:orderid", async (req, res) => {
  const { orderid } = req.params;
  try {
    const result = await getOrderId(orderid);
    res.json(result);
  } catch (err) {
    res.status(404).send("ocurrio un " + err);
  }
});

module.exports = orderRoute
