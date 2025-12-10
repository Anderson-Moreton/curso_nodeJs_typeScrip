// O conceito de Callbacks em JavaScript refere-se a funções que são passadas como argumentos para outras funções
// e são executadas após a conclusão, geralmente em operações assíncronas. Elas permitem que o código continue 
// a ser executado enquanto aguarda a conclusão de uma tarefa, como uma requisição de rede ou um temporizador.

// Exemplo de uso de Callback com setTimeout
/*
function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}

setTimeout(() => {
    saudacao('Maria');
}, 2000); // A saudação será exibida após 2 segundos
*/

const meuCallback = (func) => {
    console.log(func())
};

meuCallback(() => {
    return 1 + 1;
});

// Promises são uma forma mais moderna e poderosa de lidar com operações assíncronas em JavaScript. 
// Elas representam um valor que pode estar disponível agora, no futuro ou nunca.
// Uma Promise pode estar em um dos três estados: pendente (pending), resolvida (fulfilled) ou rejeitada (rejected).

// Exemplo de uso de Promises
const pedido = (pedidoFeito) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Chegou o seu pedido: ${pedidoFeito}`);
        }, 2000);
    });
};  

pedido("Arroz").then((resPedido) => { // then é usado para lidar com o resultado resolvido da Promise
    console.log(resPedido);
}).catch((err) => { // catch é usado para capturar erros na Promise
    console.log(err);
}).finally(() => { // finally é executado independentemente do resultado da Promise
    console.log("Obrigado pela preferência!");
});

// Async/Await é uma sintaxe mais recente e elegante para trabalhar com Promises em JavaScript.
// Ela permite escrever código assíncrono que se parece com código síncrono, tornando-o mais fácil de ler e entender.
// A palavra-chave async é usada para declarar uma função assíncrona, e await é usada para esperar a resolução de uma 
// Promise.

// Exemplo de uso de Async/Await
const reservarPeddido = async () => { // Declaração de uma função assíncrona
    try {
        console.log(await pedido("Feijão")); // await pausa a execução até que a Promise seja resolvida
        console.log(await pedido("Carne")); // Isso torna o código mais linear e fácil de seguir
        console.log(await pedido("Salada")); // em comparação com o encadeamento de then
    } catch (err) {
        console.log(err);
    }   
};

reservarPeddido();

// Promisse All é um método que permite executar múltiplas Promises em paralelo e aguardar que todas sejam resolvidas.
// Ele retorna uma nova Promise que é resolvida quando todas as Promises passadas são resolvidas, ou rejeitada 
// se qualquer uma delas for rejeitada.
Promise.all([pedido("Pizza"), pedido("Lasanha"),])
    .then((resPedidos) => {
        console.log(resPedidos[0]); // resPedidos é um array com os resultados de todas as Promises
        console.log(resPedidos[1]); // Isso é útil quando você precisa de múltiplos resultados antes de continuar
    }).catch((err) => {
        console.log(err);
});

//Promise Race é um método que retorna uma nova Promise que é resolvida ou rejeitada assim que qualquer uma das Promises
// passadas é resolvida ou rejeitada. Ou seja, ele "corre" as Promises e retorna o resultado da primeira que completar.

const promessa1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promessa 1 resolvida");
    }, 3000);
});

const promessa2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promessa 2 resolvida");
    }, 1000);
});

const promessa3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promessa 3 resolvida");
    }, 2000);   
});

Promise.race([promessa1, promessa2, promessa3])
    .then((resultado) => {
        console.log(resultado); // Isso exibirá "Promessa 2 resolvida" após 1 segundo
    }).catch((err) => {
        console.log(err);
    });

// Esses conceitos são fundamentais para trabalhar com operações assíncronas em JavaScript e são amplamente utilizados
// em desenvolvimento web, especialmente ao lidar com requisições de rede, manipulação de arquivos e outras tarefas 
// que podem levar tempo para serem concluídas.

//Promisse All Settled é um método que retorna uma nova Promise que é resolvida quando todas as Promises passadas são
// concluídas, independentemente de terem sido resolvidas ou rejeitadas. Ele retorna um array de objetos que descrevem
// o resultado de cada Promise.

Promise.allSettled([promessa1, promessa2, promessa3])
    .then((resultados) => {
        resultados.forEach((resultado, index) => {  
            if (resultado.status === 'fulfilled') {
                console.log(`Promessa ${index + 1} resolvida com valor: ${resultado.value}`);
            } else {
                console.log(`Promessa ${index + 1} rejeitada com razão: ${resultado.reason}`);
            }   
        });
    }).catch((err) => {
        console.log(err);
    });
// Isso é útil quando você quer saber o resultado de todas as Promises, independentemente de terem sido bem-sucedidas
// ou não.
