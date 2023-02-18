(function () {

  function Calculator() {
      this.displayInput = document.querySelector(".display");
      
      this.start = () => {
        this.handleButtonClick();
        this.handleDisplayInput();
      };

      this.handleButtonClick = () => {
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
      };

      this.handleDisplayInput = () => {
        const operators = ["+", "-", "/", "*", "(", ")"];
        this.displayInput.addEventListener("keypress", (event) => {
          if(event.keyCode === 13) {
            this.calculateValue();
            return;
          }

          const keyNumber = parseInt(event.key);
          if(isNaN(keyNumber) && (operators.indexOf(event.key) === -1)) event.preventDefault();
        })
      };

      this.buttonToDisplay = (element) => {
        this.displayInput.value += element.innerText;
      }

      this.calculateValue = () => {
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
      };

      this.clearDisplay = () => {
        this.displayInput.value = '';
        this.displayInput.focus();
      };

      this.deleteNumber = () => {
        const displayValue = this.displayInput.value;
        let newDisplayValue = displayValue.slice(0, -1);

        this.displayInput.value = newDisplayValue;
      };
  }

  const calculator = new Calculator();
  calculator.start();


})();


