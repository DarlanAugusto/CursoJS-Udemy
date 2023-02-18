const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numFiltro = numeros.filter(value => value > 5);
// console.log(numFiltro);


const pessoas = [
  { nome: 'Darlan', idade: 19 },
  { nome: 'Luiz', idade: 19 },
  { nome: 'Mesaque', idade: 18 },
  { nome: 'Ana', idade: 25 },
  { nome: 'Victor', idade: 18 },
  { nome: 'João', idade: 34 },
  { nome: 'Pedro', idade: 17 },
  { nome: 'Mariana', idade: 20 },
];

// retornando pessoas que tem o nome com 5 letras ou mais
const filtroNomes = pessoas.filter(({ nome }) => {
  return nome.length >= 5;
})

console.log('Mais de 5 letras: ', filtroNomes);

// retornando pessoas que tem mais de 20 anos
const filtroIdade = pessoas.filter(({ idade }) => {
  return idade > 20;
})

console.log('Mais de 20 anos:', filtroIdade);

// retornando pessoas que terminam com tal letra
const letra = 'a'
const filtroLetra = pessoas.filter(({ nome }) => {
  return nome.slice(-1) === letra;
})

console.log(`Ultima letra é '${letra}': `, filtroLetra)