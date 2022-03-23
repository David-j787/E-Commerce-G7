const { Router } = require("express");
const { newReview } = require("../utils/newReview-utils");
const postReview = Router();

postReview.post('/', async (req, res) => {
    const { review, rate, userId, productId } = req.body;
    if(!review || !userId || !productId) res.status(403).json({msg: 'Review, userId or productId missing'});
    try {
        const savedReview = await newReview(review, rate, userId, productId);
        res.json({msg: 'Review added correctly'});
    } catch (error) {
        res.status(403).json({msg: 'Error ocurred: '+ error})
    }
})

module.exports = postReview;