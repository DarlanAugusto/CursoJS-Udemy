class Pessoa {
  constructor(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  falar() {
    console.log(`${this.nome} está falando!`);
  }
}

const pessoa = new Pessoa('Darlan', 'Silva', 19);
pessoa.falar();