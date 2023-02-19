const express = require('express');
const route   = express.Router();

const HomeController    = require('./controllers/HomeController');
const ContatoController = require('./controllers/ContatoController');

// rotas da home
route.get('/', HomeController.homePage);
route.post('/', HomeController.trataPost);

// rotas de contato
route.get('/contato', ContatoController.homePage);

module.exports = route;