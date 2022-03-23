const { Router } = require("express");
const { newReview } = require("../utils/newReview-utils");
const postReview = Router();

postReview.post('/', async (req, res) => {
    const { review, rate, userId, productId } = req.body;
    if(!review || !userId || !productId || !rate) return res.status(403).json({msg: 'Review, rate, userId or productId missing'});
    if(typeof userId !== 'number' || typeof rate !== 'number') return res.status(403).json({msg: 'Check typeof "userId" and "rate" must be INTEGER'});
    try {
        await newReview(review, rate, userId, productId);
        res.json({msg: 'Review added correctly'});
    } catch (error) {
        res.status(403).json({msg: 'Error ocurred: '+ error})
    }
})

module.exports = postReview;