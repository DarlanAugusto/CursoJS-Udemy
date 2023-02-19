import senhaGerada from "./geradores";
const btnGerarSenha = document.querySelector("#btnGerarSenha");
const resultado = document.querySelector(".resultado");


export default () => {
  btnGerarSenha.addEventListener("click", (event) => {
    event.preventDefault();
    resultado.innerHTML = senha();
  })
}

const senha = function() {
  const qtd = document.querySelector("#qtdCaracteres").value;
  const checkAddNumeros = document.querySelector("#checkAddNumeros").checked;
  const checkMaiusculas = document.querySelector("#checkMaiusculas").checked;
  const checkMinusculas = document.querySelector("#checkMinusculas").checked;
  const checkSimbolos = document.querySelector("#checkSimbolos").checked;

  return senhaGerada(qtd, checkAddNumeros, checkMaiusculas, checkMinusculas, checkSimbolos);
}