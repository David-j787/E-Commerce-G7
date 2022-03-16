const { Router } = require('express');
const categories = require('./category-route')
const router = Router();

// Import routers;


// Config routers
// Example: router.use('/users', getUsers);

router.get('/', (req, res) => {
    res.send('Ruta creada con éxito');
});

router.use('/categories', categories)

module.exports = router;
