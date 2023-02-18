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

const nomes = pessoas.map(pessoa => pessoa.nome);
// console.log(nomes);

const pessoasSemNome = pessoas.map(({ idade }) => { 
 return {
   idade 
  } 
});

// console.log(pessoasSemNome);

const pessoasComId = pessoas.map(({ nome, idade }, indice) => {
  return {
    id: indice++,
    nome,
    idade
  }
});

console.log(pessoasComId);
