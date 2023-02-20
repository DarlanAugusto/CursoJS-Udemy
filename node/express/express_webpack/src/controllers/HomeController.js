exports.homePage = (req, res) => {

  const pageContent = {
    title: "Página inicial",
    description: "Está é a página inicial"
  }

  res.render('index', pageContent);
  return;
};

exports.trataPost = (req, res) => {
  res.send(`Recebi este dado: ${req.body.dado}`);
  return;
};