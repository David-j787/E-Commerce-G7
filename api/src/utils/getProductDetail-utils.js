const { Product,Category } = require('../db.js')

const getProductDetail = async(req, res) => {
    const { idProduct } = req.params;
    let productDetail = await Product.findByPk(idProduct, {
        include: Category
    })
    if (!productDetail) return res.sendStatus(404);
    res.send(productDetail)
}

module.exports = {
    getProductDetail
}