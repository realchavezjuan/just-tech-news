const router = require('express').Router();

const userRoutes = require('./user-routes.js');
// adds /user to the api 
router.use('/users', userRoutes);

module.exports = router;
