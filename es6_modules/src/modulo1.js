export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export const pessoa = {
  nome: 'José',
  sobrenome: 'Augusto'
}