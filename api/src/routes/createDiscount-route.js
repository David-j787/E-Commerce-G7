const { Router } = require("express");
const { postDiscount, deleteDiscount, getDiscounts, updateProductsDiscount } = require("../utils/createDiscount-utils");
const createDiscount = Router();

const adminOnly = require('../utils/adminOnly');

createDiscount.post('/', async (req, res) =>{
    try {
        const { categoryId, discount, weekday } = req.body
        const createdDiscount = await postDiscount(discount, categoryId, weekday) 
        if(!createdDiscount) res.status(404).send("Could not create discount");
        res.send('Succesfully created discount');
    } catch (err) {
        res.status(404).json("Could not create discount: " + err)
    }
})

createDiscount.post('/update', async (req, res) =>{
    try {
        const { categoryId, discount, weekday } = req.body
        const updatedProducts = await updateProductsDiscount(discount, categoryId, weekday) 
        if(!updatedProducts) res.status(404).send("Could not update products discount");
        res.send('Succesfully update products discount');
    } catch (err) {
        res.status(404).json("Error ocurred: " + err)
    }
})

createDiscount.delete('/', adminOnly, async (req, res) => {
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
