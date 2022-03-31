const { Router } = require("express");
const { postDiscount, deleteDiscount, getDiscounts } = require("../utils/createDiscount-utils");
const createDiscount = Router();

createDiscount.post('/', async (req, res) =>{
    try {
        const { categoryId, discount } = req.body
        const createdDiscount = await postDiscount(discount, categoryId) 
        if(!createDiscount) res.status(404).send("Could not create discount");
        res.send('Succesfully created discount');
    } catch (err) {
        res.status(404).json("Could not create discount: " + err)
    }
})

createDiscount.delete('/', async (req, res) => {
    try {
        const { categoryId } = req.body;
        const deletedDiscount = await deleteDiscount(categoryId)
        res.send('Successfully deleted discount');
    } catch(err) {
        res.status(404).json("Couldn't remove discount: " + err)
    }
})

createDiscount.get('/', async (req, res) => {
    try {
        const discounts = await getDiscounts()
        res.send(discounts)
    } catch(err) {
        res.status(404).json("Unable to get Discounts")
    }
})

module.exports = createDiscount;
