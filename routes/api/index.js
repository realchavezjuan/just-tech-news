const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
// adds /user to the api 
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
module.exports = router;
