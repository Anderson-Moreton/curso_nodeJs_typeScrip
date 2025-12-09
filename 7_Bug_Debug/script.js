/*
    BUG - É um termo em inglês que significa "inseto" ou "erro". No contexto da programação, um bug é 
    um defeito ou falha no código que faz com que um programa funcione de maneira incorreta ou inesperada. 
    Bugs podem causar desde pequenos problemas, como uma funcionalidade que não funciona como esperado, 
    até falhas graves que podem fazer com que o programa trave ou apresente comportamentos erráticos.
    Ele ocorrre por diversos motivos, como erros de lógica, falhas na implementação, problemas de compatibilidade
    ou até mesmo erros humanos durante o processo de desenvolvimento.

    DEBUG - Significa "depurar" ou "corrigir erros". O processo de depuração envolve identificar, analisar e corrigir
    bugs no código. Ferramentas de depuração (debuggers) são frequentemente usadas para ajudar os desenvolvedores a 
    inspecionar o estado do programa, acompanhar a execução do código e localizar a origem dos problemas.
    O objetivo do debug é garantir que o software funcione corretamente e atenda aos requisitos especificados.
*/

const bugNum = () => {
    const number = "123"; 
    debugger; // Ponto de interrupção para depuração
    console.log(number === 123);
    if(number === 123) {
        return "Seu número é 123 - type number";
    }
    debugger; // Outro ponto de interrupção para depuração
    return "Deu ruim!";
};

console.log(bugNum());

// O código acima possui um bug, pois está comparando uma string com um número.
// A correção seria alterar a comparação para que ambos sejam do mesmo tipo.

//Exception - Lançar um erro intencionalmente quando algo inesperado acontece no código.
const throwException = (value) => {
    if(typeof value !== 'number') { // Verifica se o valor não é um número
        throw new Error("O valor deve ser um número!"); // Lança uma exceção com uma mensagem de erro
    }
};

// Try...Catch - Bloco utilizado para capturar e tratar exceções lançadas no código. 
try {
    throwException("Texto"); // Chama a função com um valor inválido (string)
}   catch (error) {
    console.log("Erro capturado: ", error.message); // Captura o erro e exibe a mensagem
}   finally {
    console.log("Execução finalizada."); // Bloco que sempre será executado, independentemente de erro ou não
}

// O código acima demonstra o uso de exceções e tratamento de erros em JavaScript.
