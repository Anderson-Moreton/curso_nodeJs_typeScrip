// Exemples of variable declarations and assignments in TypeScript

let pedido : string = "Pizza";
pedido = "Hamburguesa";
console.log("Pedido: " + pedido);

let numero: number = 10;
numero = 20;
console.log("Número: " + numero);

let deuBom: boolean = false;
deuBom = true;
console.log("Deu bom: " + deuBom);

const funn = (value: string): string => {
    return value;
};
console.log(funn("Hello TypeScript"));

// Exemple array and object
//Tuplas
let array1: [string, string, number, boolean] = [
    "Anderson", 
    "Moreton", 
    37, 
    true,
];

let array2: Array<string | number | boolean> = [
    "Anderson", 
    "Moreton", 
    37, 
    true,
];

console.log(array1);
console.log(array2);

let object1: { nome: string; sobrenome: string; idade: number; deuBom: boolean } = 
    {
        nome: "Anderson",
        sobrenome: "Moreton",
        idade: 37, 
        deuBom: true,
    };

let object2: Array <{
    nome: string;
    sobrenome: string;
    idade: number;
    deuBom: boolean;
}> = [
    {
        nome: "Anderson",
        sobrenome: "Moreton",
        idade: 37, 
        deuBom: true,
    },
    {
        nome: "Prisila",
        sobrenome: "Moreton",
        idade: 37, 
        deuBom: true,
    }, 
    {
        nome: "Otávio",
        sobrenome: "Moreton",
        idade: 5, 
        deuBom: true,
    }
]    

console.log(object1);
console.log(object2);

// Any - Accepts any type of value
let value: any = "Anderson Morton";
value = [{nome: "Anderson Moreton"}];

// Union Types 
let nome: string | number = "Annderson";
nome = 37; // Accept number and string

// Void - are functions that do not return a value.
let carro = (msg: string): void => {
    console.log(msg);
};

carro("Smart!");

// Never - represents the type of values that never occur
const error = (): never => {
    throw new Error("Algo deu errado!");
};

console.log(error);

const loop = (): never => {
    while(true)
        console.log("Entra em loop infinito e trava o terminal!")
};

// loop(); - Don't Run!

// Aliases - allow defining types with a custom name (an Alias).
/*
type alphanumeric = string | number;

let dados1 = alphanumeric;
let dados2 = alphanumeric;

dados1 = 1;
dados1 = "Anderson";
dados1 = true;

dados2 = 2
dados2 = "Priscila";
dados2 = true;
*/

// Optional
const fn = (nome: string, idade?: number) => { 
    return `nome: ${nome}, idade: ${idade}`;
};

console.log(fn("Anderson", 37));
console.log(fn("Anderson"));

// Enum
enum Mes{
    JAN = "Janeiro",
    FEV = "Fevereiro",
    MAR = "Março",
}

console.log(Mes);