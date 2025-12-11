/*
    As Interfaces TypeScript definem os contratos em seu código.
    Eles também fornecem nomes explícitos para verificação de tipo.
*/ 

interface IPessoa {
    nome: string;
    idade: number;
    readonly cpf: number;
    enabled(): boolean
}

let pessoa: IPessoa = {
    nome: "Anderson",
    idade: 37,
    cpf: 6529564918,
    enabled:() => {
        return true;
    },
}

class Otavio implements IPessoa{
    nome: string = "Otávio";
    idade: number = 5;

    readonly cpf: number = 2222222

    enabled(): boolean {
        return true
    }
}