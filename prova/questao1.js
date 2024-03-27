class Circulo{
    constructor(raio){
    this.raio = raio;
    }
    getRaio() {
    return this.raio;
    }
    setRaio(raio) {
    this.raio = raio;
    }
    calcularArea(){
    return Math.PI * this.raio * this.raio;
    }
    calcularPerimetro(){
    return 2 * Math.PI * this.raio;
    }
}