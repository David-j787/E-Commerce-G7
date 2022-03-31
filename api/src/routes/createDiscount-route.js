const { Router } = require("express");
const { postDiscount, deleteDiscount } = require("../utils/createDiscount-utils");
const createDiscount = Router();

createDiscount.post('/', async (req, res) =>{
    try {
        const { categoryId, discount } = req.body
        const createdDiscount = await postDiscount(discount, categoryId) 
        if(!createDiscount) res.status(404).send('Error al crear el descuento');
        res.send('Descuento creado con exitosamente');
    } catch (err) {
        res.status(404).json("No se pudo crear el descuento: " + err)
    }
})

createDiscount.delete('/', async (req, res) => {
    try {
        const { categoryId } = req.body;
        const deletedDiscount = await deleteDiscount(categoryId)
        res.send('Descuento eliminado exitosamente');
    } catch(err) {
        res.status(404).json("No se pudo eliminar el descuento: " + err)
    }
})

module.exports = createDiscount;