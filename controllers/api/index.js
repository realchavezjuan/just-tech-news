const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

// adds /user to the api
router.use('/comments', commentRoutes)
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
