class Pessoa {
  constructor(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  falar() {
    console.log(`Olá, me chamo ${this.nome} ${this.sobrenome}.\nTenho ${this.idade} anos!`);
  }
}

const pessoa = new Pessoa('Darlan', 'Silva', 19);
// console.log(pessoa);
pessoa.falar();