class ContaBancaria {
    constructor(idConta, nomeTitular, saldo) {
        this.idConta = idConta;
        this.nomeTitular = nomeTitular;
        this.saldo = saldo;
    }

    getidConta() {
        return this.idConta;
    }

    setidConta(idConta) {
        this.idConta = idConta;
    }

    getnomeTitular() {
        return this.nomeTitular;
    }

    setnomeTitular(nomeTitular) {
        this.nomeTitular = nomeTitular;
    }

    getsaldo() {
        return this.saldo;
    }

    setsaldo(saldo) {
        this.saldo = saldo;
    }

    realizarDepositar(valor) {
        this.saldo += valor;
        return this.saldo;
    }

    realizarSaque(valor) {
        this.saldo -= valor;
        return this.saldo;
    }
}
