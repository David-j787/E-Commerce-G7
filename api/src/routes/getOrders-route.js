const { Router } = require("express");
const allOrders = Router();
const { getOrders } = require('../utils/getOrders-utils');

allOrders.get("/:userid", async (req, res) => {
  try {
    const { userid } = req.params
    const ordersById = await getOrders(userid);
    res.json(ordersById);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = allOrders;