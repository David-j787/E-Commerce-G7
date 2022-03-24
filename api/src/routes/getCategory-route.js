const { Router } = require('express')
const { getCategories } = require('../utils/category-utils')

const categoryRouter = Router();

categoryRouter.get('/', getCategories)

module.exports = categoryRouter;