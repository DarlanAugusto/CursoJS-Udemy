require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect(process.env.CONNECTION_STRING)
  .then(() => {
    app.emit("ready");
  })
  .catch(error => console.log(error));


const session = require('express-session');
const MongoStore = require('connect-mongo')
const flashMessage = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const { globalMiddleware, checkCsrfError, csrfToken } = require('./src/middlewares/middleware');
const csrf = require('csurf');

const sessionOptions = session({
  secret: "1l2k3j4h5g6f7d8s9a@",
  store: new MongoStore({ mongoUrl: process.env.CONNECTION_STRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: (1000 * 60 * 60 * 24 * 7),
    httpOnly: true
  }
})

app.use(sessionOptions);
app.use(flashMessage());

app.use(helmet())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf())
// meus middlewares
app.use(globalMiddleware);
app.use(checkCsrfError);
app.use(csrfToken);
app.use(routes);

app.on("ready", () => {
  app.listen(3333, () => {
    console.log('Servidor iniciado na porta: 3333.\nAcesse: http://localhost:3333');
  });
})