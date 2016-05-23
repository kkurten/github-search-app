const router = require('express').Router();
const repositorySearchController = require('./controller');

router.post('/', repositorySearchController.search);

module.exports = router;