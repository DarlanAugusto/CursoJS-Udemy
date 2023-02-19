const path = require('path');
const read = require('./modules/readModule');
const filePath = path.resolve(__dirname, 'pessoas.json');
const write = require('./modules/writeModule');

// const pessoas = [
//   {nome: 'Darlan', email: 'darlan@email.com'},
//   {nome: 'João', email: 'jao@email.com'},
//   {nome: 'Luis', email: 'luis@email.com'},
//   {nome: 'Carlos', email: 'carlos@email.com'}
// ];

// const pessoasJSON = JSON.stringify(pessoas, '', 2);
// write(filePath, pessoasJSON, 'w');

read(filePath)
  .then(json => {

    const obj = JSON.parse(json);

    console.log(obj);
  })
  .catch(error => console.log(error));
