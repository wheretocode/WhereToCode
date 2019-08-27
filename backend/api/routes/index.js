const router = require('express').Router();

const networkRoutes = require('./networkRoutes');

router.use('/network', networkRoutes);

module.exports = router;