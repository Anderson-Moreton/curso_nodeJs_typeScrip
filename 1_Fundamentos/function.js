// 1 - Function Declaration

function isValid() {
    const soma = 3 + 2;

    if(soma === 5) {
        return true;
    }
    return false;
}

console.log(isValid()); // true

// 2 - Function Expression  
const isValid2 = function() {
    const soma = 3 + 2;

    if(soma === 5) {
        return true;
    }
    return false;
}

console.log(isValid2()); // true

// 3 - Arrow Function
const isValid3 = () => {
    const soma = 3 + 2; 
    if(soma === 5) {
        return true;
    }
    return false;
}

console.log(isValid3()); // true

// 4 - Funções com argumentos
function soma(a, b) {
    return a + b;
}   
 
console.log(soma(2, 3)); // 5

// IEFE - Immediately Invoked Function Expression
(function() {
    console.log('Executando a função');
})(); // Executando a função
// Função auto executável

// O Strict mode elimina alguns erros silenciosos do JavaScript
// Além disso, essa forma corrige alguns erros que dificultam a otimização do código pelo motor JavaScript.

// Exemplo de uso do Strict Mode
'use strict';
function minhaFuncao() {
    // Código aqui será executado em modo estrito
}
minhaFuncao();

// Constructor Function
function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}   
const meuCarro = new Carro('Dacia', 'Sanndero', 2018);
const meuCarro2 = new Carro('Smart', 'ForTwo', 2003);
console.log(meuCarro.marca); // Dacia 
console.log(meuCarro.modelo); // Sandero
console.log(meuCarro.ano); // 2018  
console.log(meuCarro2.marca); // Smart
console.log(meuCarro2.modelo); // ForTwo
console.log(meuCarro2.ano); // 2003
// Usando 'new' para criar uma instância de Carro


//Closures
// Uma closure é uma função que lembra do ambiente em que foi criada, mesmo quando executada fora desse ambiente.
function criarContador() {
    let contador = 0; // variável privada
    return function() {
        contador += 1;
        return contador;
    };
}
const contador = criarContador();
console.log(contador()); // 1
console.log(contador()); // 2
console.log(contador()); // 3
// A função retornada lembra da variável 'contador' mesmo após 'criarContador' ter sido executada.
