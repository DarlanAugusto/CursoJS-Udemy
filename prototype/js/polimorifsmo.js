function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if(valor > this.saldo) {
    console.log(`Saldo Insuficiente! Saque Max: R$ ${this.saldo}.`);
    return;
  }
  this.saldo -= valor;
  console.log(`Saque de R$ ${valor} realizado!`);
  this.saldoAtual();
}

Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.saldoAtual()
  return `Deposito de R$ ${valor} realizado!`;

}

Conta.prototype.saldoAtual = function() {
  console.log(`Ag: ${this.agencia} | C: ${this.conta} | R$ ${this.saldo.toFixed(2)}`);
}

// const conta1 = new Conta('054263-9', '0345-0', 5000);

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
  if(valor > (this.saldo + this.limite)) {
    console.log(`Saldo + Limite Insuficiente! Saque Max: R$ ${this.saldo + this.limite}.`);
    return;
  }
  this.saldo -= valor;
  console.log(`Saque de R$ ${valor} realizado!`);
  this.saldoAtual();
}

ContaCorrente.prototype.saldoAtual = function() {
  console.log(`Ag: ${this.agencia} | C: ${this.conta} | R$ ${(this.saldo + this.limite).toFixed(2)}`);
}

const contaCorrente = new ContaCorrente('054263-9', '0345-0', 10000, 5000);
contaCorrente.sacar(50000);
