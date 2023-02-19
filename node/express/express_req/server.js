const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
      Usuário: <input type="text" name="nome"><br>
      Email: <input type="text" name="email"><br>
      Telefone: <input type="text" name="telefone"><br>
      CPF: <input type="text" name="cpf"><br>
      <button type="submit">Enviar</button>
    </form>
  `);
});

app.post('/', (req, res) => {
  res.send(req.body);
});

app.get('/testes/:usuario', (req, res) => {
  res.send(req.params);
});

app.get('/home', (req, res) => {
  res.send("Estou na Home!");
});

app.listen(3333, () => {
  console.log('Servidor iniciado na porta: 3333.\nAcesse: http://localhost:3333');
});