const { Router } = require("express");
const allOrders = Router();
const { getOrders } = require('../utils/getOrders-utils');

allOrders.get("/", async (req, res) => {
  try {
    const { userid = '', orderId = '', status = '' } = req.query;
    const getOrdersBy = await getOrders(userid, orderId, status);
    res.json(getOrdersBy);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = allOrders;