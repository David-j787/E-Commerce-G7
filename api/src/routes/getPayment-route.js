const { Router } = require("express");
const { getPayment, getAllPayments } = require("../utils/payment-utils");

const payment = Router();

payment.get("/:paymentId", async (req, res) => {
  const { paymentId } = req.params;
  try {
    const result = await getPayment(paymentId);
    res.json(result);
  } catch (err) {
    res.status(404).json("Error ocurred: " + err);
  }
});

payment.get("/", async (req, res) => {
  try {
    const result = await getAllPayments();
    res.json(result);
  } catch (err) {
    res.status(404).json("Error ocurred: " + err);
  }
});

module.exports = payment
