// URL localhost:3001/
// Required modules
const router = require('express').Router();
// Required files
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');

// Routing
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// Export
module.exports = router;