(function () {

  function createCalculator() {
    return {
      displayInput: document.querySelector(".display"),
      
      start() {
        this.handleButtonClick();
        this.handleDisplayInput();
      },

      handleButtonClick() {
        document.addEventListener("click", (event) => {
          const element = event.target;
          
          if(element.classList.contains('btn-num')) {
            this.buttonToDisplay(element);
          }

          if(element.classList.contains('btn-eq')) {
            this.calculateValue();
          }

          if(element.classList.contains('btn-clear')) {
            this.clearDisplay();
          }

          if(element.classList.contains('btn-del')) {
            this.deleteNumber();
          }
        });
      },

      handleDisplayInput() {
        const operators = ["+", "-", "/", "*", "(", ")"];
        this.displayInput.addEventListener("keypress", (event) => {
          if(event.keyCode === 13) {
            this.calculateValue();
            return;
          }

          const keyNumber = parseInt(event.key);
          if(isNaN(keyNumber) && (operators.indexOf(event.key) === -1)) event.preventDefault();
        })
      },

      buttonToDisplay(element) {
        this.displayInput.value += element.innerText;
      },

      calculateValue() {
        const operation = this.displayInput.value;

        try {
          const resultOperation = eval(operation);

          if(!operation) {
            alert("Conta inválida!");
            this.displayInput.value = '';
            this.displayInput.focus()
            return;
          }
          this.displayInput.value = resultOperation;

        } catch(err) {
          alert("Conta Inválida");
          this.displayInput.value = '';
          this.displayInput.focus()
          return;
        }
      },

      clearDisplay() {
        this.displayInput.value = '';
        this.displayInput.focus();
      },

      deleteNumber() {
        const displayValue = this.displayInput.value;
        let newDisplayValue = displayValue.slice(0, -1);

        this.displayInput.value = newDisplayValue;
      }
    }
  }

  const calculator = createCalculator();
  calculator.start();

})();


