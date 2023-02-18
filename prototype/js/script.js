function Produto(descricao, preco) {
  this.descricao = descricao;
  this.preco = preco;
}

Produto.prototype.setDesconto = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
  return this.preco; 
}

const p1 = new Produto('Amortecedor', 150);
// p1.setDesconto(10)

const p2 = {
  descricao: 'Pneu',
  preco: 450
}

Object.setPrototypeOf(p2, Produto.prototype);

// console.log(p2.setDesconto(50));

