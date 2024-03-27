class Estudante {
    constructor(cod, descricao, nota, data){
    this.matricula = matricula;
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;
    }
    getMatricula() {
    return this.matricula;
    }
    setMatricula(matricula) {
    this.matricula = matricula;
    }
    getNome() {
    return this.nome;
    }
    setNome(nome) {
    this.nome = nome;
    }
    getNota1() {
    return this.nota1;
    }
    setNota1(nota1) {
    this.nota1 = nota1;
    }
    getNota2() {
    return this.nota2;
    }
    setNota2(nota2) {
    this.nota2 = nota2;
    }
    calcMedia() {
    return (this.nota1 + this.nota2) / 2;
    }
    verifSituacao() {
    if (this.calcMedia() >= 7) {
    return "Aprovado";
    } else {
    return "Reprovado";
    }
    
    }
    }