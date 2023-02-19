exports.homePage = (req, res) => {
  res.send(`
  <form action="/" method="POST">
    Usuário: <input type="text" name="nome"><br>
    Email: <input type="text" name="email"><br>
    Telefone: <input type="text" name="telefone"><br>
    CPF: <input type="text" name="cpf"><br>
    <button type="submit">Enviar</button>
  </form>
  <a href='/contato'>Contatos</a>
  `);
};

exports.trataPost = (req, res) => {
  res.send(`Olá ${req.body.nome}, sou sua nova rota de POST!`);
};