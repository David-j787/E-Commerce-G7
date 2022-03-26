const { Router } = require("express");
const sendOrder = Router();

sendOrder.get("/crear-orden", async (req, res) => {
  try {
    const payUrl = req.body.sandbox_init_point;
    res.json(payUrl);
  } catch (err) {
    res.status(404).send(err);
  }
});