const { Category } = require('../db.js')

const getCategories = async(req, res) => {
    let db = await Category.findAll()
    res.send(db)
}

module.exports = {
    getCategories
}