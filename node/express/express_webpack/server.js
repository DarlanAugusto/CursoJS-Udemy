const express = require('express');
const routes  = require('./routes');
const meuMiddleware = require('./src/middlewares/middleware');
const path    = require('path');
const app     = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(meuMiddleware);
app.use(routes);

app.listen(3333, () => {
  console.log('Servidor iniciado na porta: 3333.\nAcesse: http://localhost:3333');
});