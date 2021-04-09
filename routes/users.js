const express = require('express');
const usuariosController = require('../Controllers/usuariosController');
const router = express.Router();

/* GET users listing. */
router.get('/', usuariosController.index);

module.exports = router;
