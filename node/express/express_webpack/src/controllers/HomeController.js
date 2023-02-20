exports.homePage = (req, res) => {

  // console.log(req.session.usuario);

  console.log(req.flash('test'));
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  res.send(`Recebi este dado: ${req.body.dado}`);
  return;
};