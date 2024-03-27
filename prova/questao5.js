class Produto {

    constructor(nome, preco, qtdEstoque) {
    this.nome = nome;
    this.preco = preco;
    this.qtdEstoque = qtdEstoque;
    }
    getNome() {
    return this.nome;
    }
    setNome(nome) {
    this.nome = nome;
    }
    getPreco() {
    return this.preco;
    }
    setPreco(preco) {
    this.preco = preco;
    }
    getQtdEstoque() {
    return this.qtdEstoque;
    }
    setQtdEstoque(qtdEstoque) {
    this.qtdEstoque = qtdEstoque;
    }
    calcTotal(){
    return this.preco * this.qtdEstoque;
    }
    verifDisponibilidade(){
    return this.qtdEstoque > 0;
    }
}