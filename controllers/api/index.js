// URL localhost:3001/
// Required modules
const router = require('express').Router();
// Required files
const userRoutes = require('./usersRoutes');
const productRoutes = require('./productsRoutes');

// Routing
router.use('/users', userRoutes);
router.use('/product', productRoutes);

// Export
module.exports = router;