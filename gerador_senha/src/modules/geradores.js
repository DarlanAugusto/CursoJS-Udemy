const rand = function(min, max) {
  return Math.round( Math.random() * (max - min) + min );
}

const geraMaiuscula = function() {
  return String.fromCharCode( rand(65, 90) );
}

const geraNumero = function() {
  return String.fromCharCode( rand(97, 122) );
}

const geraMinuscula = function() {
  return String.fromCharCode( rand(48, 57) );
}

const geraSimbolo = function() {
  const simbolos = "!@#$%&*?";
  return simbolos[ rand(0, (simbolos.length - 1)) ];

}

export default function senhaGerada(qte, geraMin, geraMai, geraNum, geraSimb) {
  const senhaArray = [];
  const qtd = Number(qte);

  if(!qtd) return "Informe a Quantidade";

  for(let i = 0; i <= qtd; i++) {
    if(geraNum) senhaArray.push(geraNumero());
    if(geraMai) senhaArray.push(geraMaiuscula());
    if(geraMin) senhaArray.push(geraMinuscula());
    if(geraSimb) senhaArray.push(geraSimbolo());
  }

  if(!senhaArray.length) return "Selecione uma Opção";

  return senhaArray.join('').slice(0, qtd);
}