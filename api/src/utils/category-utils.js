const { Category } = require('../db.js')

const getCategories = async(req, res) => {
    let db = await Category.findAll()
    db.length ? res.send(db) : res.status(404).send('Database empty')
}

module.exports = {
    getCategories
}