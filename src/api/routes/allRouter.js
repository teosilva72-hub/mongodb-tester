const Router = require('express').Router;
const user = require('./userRouter');

const router = new Router();

router.use(user);

module.exports = router;