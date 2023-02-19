const { default: axios } = require("axios");

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
  .then(response => console.log(response.data))
  .catch(error => console.log(error));