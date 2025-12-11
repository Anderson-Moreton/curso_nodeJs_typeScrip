/*Uma Class TypeScript é uma estrutura de programação orientada a objetos
que possui um conjunto de propriedades e métodos.

A Class é um modelo para criar objetos, permitindo que você defina
uma estrutura com propriedades e comportamentos.*/

abstract class Pessoa {
    protected nome: string = "";
    protected idade: number = 0;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade
    }

    public comer(comida: string){ //Método
        return `O(a) ${this.nome} comeu ${comida}`;
    }

    public fezAniversario() { //Método
        return `O(a) ${this.nome} fez ${++this.idade} anos`;
    }

    protected abstract profissao: string;
    public abstract qualSuaProfissao(): string;
};

class Anderson extends Pessoa {
    protected _profissao: string = "Programador";

    constructor(){
        super("Anderson", 37);
    }

    public getProfissao() {
        return `O ${this.nome} trabalho com ${this.profissao}`;
    }

    get profissao(){
        return this._profissao;
    }

    set profissao(valor: string) {
        this._profissao = valor;
    }

    public qualSuaProfissao(): string {
        return `Sua profissão é ${this.profissao}`
    }
}

const anderson = new Anderson();
console.log(anderson.getProfissao());
anderson.profissao = "Annalista de Dados";
console.log(anderson.profissao);

// const pessoa2 = new Pessoa("Prisicla Moreton", 37);

// console.log(pessoa2);
// console.log(pessoa2.comer("Sushi"));
// console.log(pessoa2.fezAniversario());

// Modificadores de acesso 

/*
    Public - Pode ser acessado tanto pela mesma classe, classes filhas e outras classes.
    Protected - Pode ser acessado pela mesma classe e classes filhas, não pode ser acessado por outras classes.
    Private - Pode ser acessada somente pela própria classe. 
*/ 