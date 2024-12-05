class Pessoa {
    nome: string;
    email: string;
    idade: number;
    altura: string;
    cidade: string;
    peso: string;
    faculdade: string;
    timeDoCoracao: string;

    constructor(
        nome: string,
        email: string,
        idade: number,
        altura: string,
        cidade: string,
        peso: string,
        faculdade: string,
        timeDoCoracao: string
    ) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.altura = altura;
        this.cidade = cidade;
        this.peso = peso;
        this.faculdade = faculdade;
        this.timeDoCoracao = timeDoCoracao;
    }
}

export default Pessoa;
