const Router = require('express').Router;
const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const user = require('./userRouter');
const router = new Router();

router.use(cors());
router.use(morgan('combined'));
router.use(express.json({limit:'250mb'}));

router.use(user);

module.exports = router;