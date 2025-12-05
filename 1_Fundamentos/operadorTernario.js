const velocidade = 86;
const limite = 80;

const condicao = 
    velocidade > limite ? console.log('Você foi multado!') 
    : console.log('Você está dentro do limite de velocidade.');

if(velocidade >= limite) {
    console.log("Você foi multado");
} else {
    console.log("Continue andando...")
}