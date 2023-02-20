exports.homePage = (req, res) => {
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  res.send(`Recebi este dado: ${req.body.dado}`);
  return;
};