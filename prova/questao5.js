class Produto {
    constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
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
    getquantidade() {
    return this.quantidade;
    }
    setquantidade(quantidade) {
    this.quantidade = quantidade;
    }
    calcTotal(){
    return this.preco * this.quantidade;
    }
    verifDisponibilidade() {
        if (this.quantidade > 0) {
            return "O produto " + this.nome + " está disponível.";
        } else {
            return "O produto " + this.nome + " não está disponível.";
        }
    }
}
