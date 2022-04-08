export class Disciplina{
    id: number;
    nome: string;
    professor: string;
    horario: string;
    qtdAluno: number;
    periodo: string;
    
    constructor(id: number, nome: string, professor: string, horario: string, qtdAluno: number, periodo: string){
        this.id = id;
        this.nome = nome;
        this.professor = professor;
        this.horario = horario;
        this.qtdAluno = qtdAluno;
        this.periodo = periodo;        
    }
}