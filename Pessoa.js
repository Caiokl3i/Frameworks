class Pessoa{
    constructor(cpf, nome, email){
        this.cpf=cpf;
        this.nome = nome;
        this.email = email;
    }

    getCpf(){
        return this.cpf;
    }
    setCpf(cpf){
        this.cpf = cpf;
    }

    getNome(){
        return this.nome;
    }
    setNome(nome){
        this.nome = nome;
    }

    getEmail(){
        return this.email;
    }
    setEmail(email){
        this.email = email;
    }
}
