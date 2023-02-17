function timer() {
  const timerDisplay = document.querySelector(".relogio");
  const disabled = document.querySelectorAll(".disabled");
  const iniciar = document.querySelector(".iniciar");
  let seconds = 0;
  let timer;

  function getTimeOfSeconds(seconds = 0) {
    let date = new Date(seconds * 1000);
    return date.toLocaleTimeString("pt-BR", {
      timeZone: "GMT"
    });
  }

  function startTimer() {
    timer = setInterval(function() {
      seconds++;
      timerDisplay.innerHTML = getTimeOfSeconds(seconds);
    }, 1000);
  }

  document.addEventListener("click", function (event) {
    let element = event.target;

    if(element.classList.contains('iniciar')){
      clearInterval(timer);
      
      timerDisplay.classList.remove("pausado");
      
      iniciar.setAttribute("disabled", true);
      iniciar.classList.add("disabled");
      iniciar.innerHTML = 'Iniciar';

      disabled.forEach(function(button) {
        button.classList.remove('disabled');
        button.removeAttribute("disabled");
      });

      startTimer();
    }

    if(element.classList.contains('pausar')){
      clearInterval(timer);
      
      timerDisplay.classList.add("pausado");
      
      iniciar.removeAttribute("disabled");
      iniciar.classList.remove("disabled");
      iniciar.innerText = 'Retomar';
    }

    if(element.classList.contains('zerar')){
      clearInterval(timer);
      
      timerDisplay.classList.remove("pausado");
      timerDisplay.innerText = '00:00:00';
      
      iniciar.removeAttribute("disabled");
      iniciar.classList.remove("disabled");
      iniciar.innerText = 'Iniciar';


      disabled.forEach(function(button) {
        button.classList.add('disabled');
        button.setAttribute("disabled", true);
      })

      seconds = 0;
    }

  });

  // console.log(getTimeOfSeconds());
}
timer();