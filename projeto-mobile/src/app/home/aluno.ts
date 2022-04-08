
export class Aluno{
    nome: string;
    cpf: string;
    idade: number;
    email: string;
    senha: string;
    endereço: string;

    constructor(nome: string, cpf: string, idade: number, email: string, senha: string, endereço: string){
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.email = email;
        this.senha = senha;
        this.endereço = endereço;
    }
}