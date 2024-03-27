class Livro {
    constructor(titulo, autor, numPaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
        this.disponivel = true;
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
    getNumPaginas() {
        return this.numPaginas;
    }
    setNumPaginas(numPaginas) {
        this.numPaginas = numPaginas;
    }
    emprestarLivro() {
        if (this.disponivel) {
            this.disponivel = false;
            return true;
        } else {
            return false;
        }
    }
    devolverLivro() {
        this.disponivel = true;
    }
    verificarDisponibilidade() {
        return this.disponivel ? "Disponível" : "Indisponível";
    }
}