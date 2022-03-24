const {Router} = require("express")
const {putOrderStatus} = require("../utils/orderStatus-utils")

const orderStatus = Router()

orderStatus.put("/", async (req, res) => {
    const {status, orderId} = req.body
    try {
        const result = await putOrderStatus(status, orderId)
        res.send(`order status changed to ${status}`)
    } catch (err) {
        res.status(404).send(`${err}`)
    }
})

module.exports = orderStatus
