import { Pessoa, pessoa as pessoa2 } from './modulo1';

const pessoa1 = new Pessoa('Darlan', 'Silva');

console.log(pessoa1.nomeCompleto());
console.log({ ...pessoa2 });