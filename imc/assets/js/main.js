const resultCalc = document.querySelector(".resultCalc");
const form = document.querySelector(".form");
const calcBtn = form.querySelector("button");

calcBtn.addEventListener("click", calculateImc);

function calculateImc(event) {
    event.preventDefault();

    const weight = form.querySelector("#weight");
    const height = form.querySelector("#height");
    let resultImc;
    let levelImc

    resultCalc.innerHTML = '';
    resultCalc.style.background = 'transparent';

    if(!weight.value || !height.value || isNaN(height.value) || isNaN(weight.value)) {
        resultCalc.innerHTML = "Dados Inválidos!";
        resultCalc.style.background = "var(--error-color)";
        return;
    }

    resultImc = weight.value / (height.value ** 2);

    if(resultImc < 18.5) {
        levelImc = 'Abaixo do Peso';
    } 
    else if (resultImc >= 18.5 && resultImc < 25) {
        levelImc = 'Peso normal';
    }
    else if (resultImc >= 25 && resultImc < 30) {
        levelImc = 'Sobrepeso';
    }
    else if (resultImc >= 30 && resultImc < 35) {
        levelImc = 'Obesidade grau I';
    }
    else if (resultImc >= 35 && resultImc < 40) {
        levelImc = 'Obesidade grau II';
    }
    else if (resultImc > 40) {
        levelImc = 'Obesidade grau III';
    }

    resultCalc.innerHTML = `Seu IMC é: ${resultImc.toFixed(2)} (${levelImc})`;
    resultCalc.style.background = "var(--success-color)";
}