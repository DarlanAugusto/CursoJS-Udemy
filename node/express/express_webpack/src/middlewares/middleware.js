module.exports = (req, res, next) => {
  res.locals.localVar = "Estarei em todas as views!";
  next();
}