// pega diretamento o valor ao invés da chave
const fruits = ['Apple', 'Pear', 'Pinapple']

// for(let value of fruits) {
//     console.log(value);
// }

fruits.forEach(function(value, index, array) {
    console.log(index, value, array[index]);
});