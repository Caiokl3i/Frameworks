class Livro {
    constructor(titulo, autor, nPaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.nPaginas = nPaginas;
        this.emprestado = false;
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    getAutor() {
        return this.autor;
    }
    setAutor(autor) {
        this.autor = autor;
    }
    getnPaginas() {
        return this.nPaginas;
    }
    setnPaginas(nPaginas) {
        this.nPaginas = nPaginas;
    }
    emprestarLivro() {
        if (!this.emprestado) {
            this.emprestado = true;
            return "Livro emprestado com sucesso!";
        } else {
            return "Livro ja esta emprestado!";
        }
    }
    
    devolverLivro() {
        if (this.emprestado) {
            this.emprestado = false;
            return "Livro devolvido com sucesso!";
        } else {
            return "Livro ja esta disponavel!";
        }
    }
    
    verificarDisponibilidade() {
        if (this.emprestado) {
            return "Livro emprestado";
        } else {
            return "Livro disponavel";
        }
    }
}