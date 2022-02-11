const router = require('express').Router();
// gets ./api/index.js
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');

// adds /api to the api route
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;