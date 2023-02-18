const numeros = [10, 11, 56, 30, 13, 49, 7, 86, 85];

const pares = numeros.filter(valor => (valor % 2 === 0));
const dobro = pares.map(valor => valor * 2);
const soma  = dobro.reduce((total, valor) => {
  return total += valor;
}, 0);

console.log(soma);