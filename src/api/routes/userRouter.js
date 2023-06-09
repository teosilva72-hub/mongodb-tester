const Router = require('express').Router;
const userController = require('../controller/userController');

const router = new Router();

router.post('/api/create-user/:id', userController.createUser);
router.get('/api/all-users');

module.exports = router;