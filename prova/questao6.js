class Carro {
    constructor(marca, modelo, velocidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
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
    acelerar() {
        return this.velocidade;
    }
    frear() {
        this.velocidade = 0; 
    }
    exibirVelocidade() {
        return this.velocidade;
    }
}