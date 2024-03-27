class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeAtual = 0;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    acelerar(velocidadeAtual) {
        this.velocidadeAtual += velocidadeAtual;
    }
    frear() {
        this.velocidadeAtual = 0; 
    }
    exibirVelocidadeAtual() {
        return this.velocidadeAtual;
    }
}