let umaString = "O rato roeu a roupa do rei de roma.";

// pegando o caracter de uma determina posição, retorna undefined quando não encontra
console.log(umaString[56]);

// pegando caracter de uma determinada posição, retorna vazio quando não encontra
console.log(umaString.charAt(332));

// substituir algo na string *podendo utilizar expressões regulares -> /[a-z]/ | colocar o /g para substituir todas as ocorrencias*
console.log(umaString.replace(/[aA-zZ]/g, '-'));

// concatenação
console.log(umaString.concat(' E depois morreu.'));

// retorna o primeiro índice de uma parte da string
console.log(umaString.indexOf('rato', 1));

// retorna o primeiro indice de uma parte da string, de tras pra frente quando informado uma posição
console.log(umaString.lastIndexOf('rato'));

// retorna a qte de caracteres de uma string
console.log(umaString.length);

// retorna/pega parte de uma string
console.log(umaString.slice(2, 6));

// retorna um array separado por determinado caracter 
console.log(umaString.split(' '));

// toda maiúscula
console.log(umaString.toUpperCase());

// toda minúscula
console.log(umaString.toLowerCase());






