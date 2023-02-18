class ValidaFormulario {
  constructor() {
    this.form = document.querySelector(".formulario");
    this.handleEvents(this.form);
  }

  handleEvents(form) {
    form.addEventListener("submit", (event) => {
      this.handleSubmit(event);
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.removeErrors();
    if(!this.allInputsFilled()) return;

    console.log('Formulário Validado!');
  }

  allInputsFilled() {
    const allInputs = this.form.querySelectorAll(".validar");
    let isValid = true;
    let label;
    
    allInputs.forEach((input) => {
      if(!input.value){
        label = input.previousElementSibling.innerText;
        this.createError(input, `Campo "${label}" não pode estar vazio!`);
        isValid = false;
      } 

      if(input.classList.contains("cpf")) {
        if(!this.validateCpf(input)) isValid = false;
      }

      if(input.classList.contains("usuario")) {
        if(!this.validateUser(input)) isValid = false;
      }

      if(input.classList.contains("senha")) {
        if(!this.validatePassword(input)) isValid = false;
      }

      if(input.classList.contains("repetir-senha")) {
        if(!this.validateConfirmPassword(input)) isValid = false;
      }
    });

    return isValid;
  }

  createError(input, message) {
    const errorDivMessage = document.createElement("div");
    errorDivMessage.innerHTML = message;
    errorDivMessage.classList.add('error-text');
    input.insertAdjacentElement("afterEnd", errorDivMessage);
  }

  removeErrors() {
    const errors = this.form.querySelectorAll(".error-text");
    errors.forEach((error) => {
      error.remove();
    });
  }

  validateCpf(inputCpf) {
    const cpf = new ValidaCPF(inputCpf.value);
    if(!cpf.valida()) {
      this.createError(inputCpf, "CPF inválido!");
      return false;
    }
    return true;
  }

  validateUser(inputUser) {
    const user = inputUser.value;
    let isValid = true;

    if(user.length < 3 || user.length > 12) {
      this.createError(inputUser, "Usuário deve ter entre 3 e 12 caracteres!");
      isValid = false;
    }

    if(!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(inputUser, "Usuário pode conter apenas letras e/ou números!");
      isValid = false;
    }

    return isValid;
  }

  validatePassword(inputPassword) {
    const password = inputPassword.value;

    if(password.length < 6 || password.length > 12) {
      this.createError(inputPassword, "Senha deve ter entre 6 e 12 caracteres!");
      return false;
    }

    return true;
  }

  validateConfirmPassword(inputConfirmPassword) {
    const password = this.form.querySelector(".senha").value;
    const confirmPassword = inputConfirmPassword.value;

    if(!(password === confirmPassword)) {
      this.createError(inputConfirmPassword, "As senhas devem ser iguais!");
      return false;
    }

    return true;
  }
} 

const validaFormulario = new ValidaFormulario();