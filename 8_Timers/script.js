//SetTimeout é uma função que executa um código após um determinado tempo em milissegundos.
setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
}, 2000);

console.log("This message is displayed immediately");

//ClearTimeout é usado para cancelar uma ação agendada com setTimeout.
const timeoutId = setTimeout(() => {
    console.log("This message will not be displayed");
}, 3000);

clearTimeout(timeoutId);

//SetInterval é uma função que executa um código repetidamente em intervalos de tempo especificados.
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`This message is displayed every second. Count: ${count}`);
    if (count === 5) {
        clearInterval(intervalId); //Para o intervalo após 5 execuções
    }
}, 1000);

//ClearInterval é usado para cancelar uma ação agendada com setInterval.
// Neste exemplo, o clearInterval é chamado dentro do próprio setInterval quando a contagem atinge 5.