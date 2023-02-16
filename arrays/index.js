let studants = ['Darlan', 'João', 'Aldair'];

console.log(studants);

// inserindo valor no ultimo indice do array
studants.push('Pedro');
console.log(studants);

// inserindo valor no primeiro indice do array
studants.unshift('Gabriel');
studants.unshift('Mateus');
console.log(studants);

// remove o ultimo indice de um array, e retorno o elemento que foi removido
studants.pop();
console.log(studants);

// remove o primeiro elemento de um array
studants.shift();
console.log(studants);