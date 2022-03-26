const { Router } = require("express");
const { getReviews } = require("../utils/getReviews-utils");
const allReviews = Router();

allReviews.get("/", async (req, res) => {
    try {
        const { productId, sortBy='' } = req.query;
        const productReviews = await getReviews(productId,sortBy);
        res.json(productReviews);
    } catch(err) {
        res.status(404).send(err);
    }
});

module.exports = allReviews;