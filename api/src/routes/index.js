const { Router } = require('express');
const router = Router();

// Import routers;


// Config routers
// Example: router.use('/users', getUsers);

router.get('/', (req, res) => {
    res.send('Ruta creada con éxito');
});

module.exports = router;
