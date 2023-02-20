const express = require('express');
const route   = express.Router();

const HomeController    = require('./src/controllers/HomeController');
const ContatoController = require('./src/controllers/ContatoController');

// rotas da home
route.get('/', HomeController.homePage);
route.post('/', HomeController.trataPost);

// rotas de contato
route.get('/contato', ContatoController.homePage);

module.exports = route;