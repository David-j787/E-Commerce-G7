const {Router} = require("express")
const {putUserRole} = require("../utils/userRole-utils")

const userRole = Router()

userRole.put("/", async (req, res) => {
    const {role, userId} = req.body

    try {
        const result = await putUserRole(role, userId)
        res.send("successful change")
    } catch (err) {
        res.status(404).send("ocurrio un " + err)
    }
})

module.exports = userRole