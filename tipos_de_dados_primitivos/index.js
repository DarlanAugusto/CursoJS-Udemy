// Tipos de Dados Primitivos
const name = 'Darlan'; // String
const name1 = "Darlan"; // String
const name2 = `Darlan`; // String
const number1 = 10; // Number
const number2 = 10.5689; // Number
let typeUndefined; // undefined -> Não aponta para local nenhum na memória
const typeNull = null; // Nulo -> Não aponta para local nenhum na memória
const trueOrFalse = true // boolean -> false, true (lógico)

let a = [1, 2];
const b = a;


console.log(a, b);

a.push(3);
console.log(a, b)