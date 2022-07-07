const express = require('express');

const router = express.Router();
const controllerTest = require('../controller/controller')

router.post('/',controllerTest)

module.exports = router;