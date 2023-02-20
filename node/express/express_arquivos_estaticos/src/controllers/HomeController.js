exports.homePage = (req, res) => {
  res.render('index');
};

exports.trataPost = (req, res) => {
  res.send(`Olá ${req.body.nome}, sou sua nova rota de POST!`);
};