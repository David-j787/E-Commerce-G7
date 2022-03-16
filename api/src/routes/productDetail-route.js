const { Router } = require('express')
const { getProductDetail } = require('../utils/getProductDetail.js')

const productDetailRouter = Router();

productDetailRouter.get('/:idProduct', getProductDetail)

module.exports = productDetailRouter
