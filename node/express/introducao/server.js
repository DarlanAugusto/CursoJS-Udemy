const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
      Nome: <input type="text" name="nome">
      <button type="submit">Enviar</button>
    </form>
  `);
});

app.post('/', (req, res) => {
  res.send("Recebi o Form!")
});

app.get('/home', (req, res) => {
  res.send("Estou na Home!");
});

app.listen(3333, () => {
  console.log('Servidor iniciado na porta: 3333.\nAcesse: http://localhost:3333');
});