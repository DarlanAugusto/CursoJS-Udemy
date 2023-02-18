(() => {
  //
  // parametros por desestruturação
  function funcao( { idade, nome } ) {
    console.log(idade, nome);
  }
  
  let obj = {
    nome: 'Darlan',
    sobreNome: 'Silva',
    idade: 19
  }
  // funcao(obj);
  
  //
  // parametros com rest operator (...args)
  function conta(operador, acumulador, ...numeros) {
    let total = acumulador;
    for (let num of numeros) {
      console.log(num);
    }
  }
  // conta('+', 0, 1, 2, 3, 4, 5);
  
  //
  // callback functions
  function timeRand() {
    return Math.floor(Math.random() * (3000 - 1000) + 1000);
  }
  
  function f1(callback) {
    console.log("Aguardando a f1...");
    setTimeout(() => {
      console.log("f1 Ok");
      if (callback) callback();
    }, timeRand());
  }
  
  function f2(callback) {
    console.log("Aguardando a f2...");
  
    setTimeout(() => {
      console.log("f2 Ok");
      if (callback) callback();
    }, timeRand());
  }
  
  function f3(callback) {
    console.log("Aguardando a f3...");
  
    setTimeout(() => {
      console.log("f3 Ok");
      if (callback) callback();
    }, timeRand());
  }
  // f1(() => {
  //   f2(() => {
  //     f3(() => {
  //       console.log("Hello World!");
  //     })
  //   })
  // })

  //
  // Factory functios, getters e setters
  function criaPessoa(nome, sobrenome, altura, peso) {
    return {
      nome,
      sobrenome,
      altura,
      peso,

      get imc() {
        return (this.peso / (this.altura ** 2)).toFixed(2);
      },
      get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
      },

      set nomeCompleto(nomeCompleto) {
        const partesNome = nomeCompleto.split(' ');
        this.nome = partesNome.shift();
        this.sobrenome = partesNome.join(' ');
      }
    }
  }

  let pessoa = criaPessoa('Darlan', 'Silva', 1.75, 84);

  pessoa.nomeCompleto = "João";
  console.log(pessoa.nomeCompleto);

})();

