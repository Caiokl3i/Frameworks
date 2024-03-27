class Retangulo {
    constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
    }
    getLargura() {
    return this.largura;
    }
    setLargura(largura) {
    this.largura = largura;
    }
    getAltura() {
    return this.altura;
    }
    setAltura(altura) {
    
    this.altura = altura;
    }
    calcArea() {
    return this.largura * this.altura;
    }
    calcPerimetro() {
    return 2 * (this.largura + this.altura);
    }
    }