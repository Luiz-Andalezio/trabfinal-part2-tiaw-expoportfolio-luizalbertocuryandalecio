class Disciplina {
    nome: string;
    conteudo: string;
    pontosPositivos: string;
    pontosNegativos: string;
  
    constructor(nome: string, conteudo: string, pontosPositivos: string, pontosNegativos: string) {
      this.nome = nome;
      this.conteudo = conteudo;
      this.pontosPositivos = pontosPositivos;
      this.pontosNegativos = pontosNegativos;
    }
  }
  
  export default Disciplina;
  