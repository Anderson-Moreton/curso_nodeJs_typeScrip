const peso = 90;
const altura = 1.82;

const imc =  (peso / (altura *altura)).toFixed(2);
console.log(`Seu IMC é de ${imc}`)

switch (true) {
    case (imc < 17):
        console.log("MMuito abaixo do peso");
    break;
    case(imc >= 17 && imc <=18.49):
        console.log("Abaixo do peso");
    break;
    case(imc >= 18.5 && imc <=24.99):
        console.log("Peso normal");
    break; 
    case(imc >= 25 && imc <=29.99):
        console.log("Acima do peso");
    break;
    case(imc >=30 && imc <=34.99):
        console.log("Obesidade I");
    break;
    case(imc >= 35 && imc <=39.99):
        console.log("Obesidade II (severa)");
    break;
    case(imc >= 40):
        console.log("Obesidade III (mórbida)");
    break; 
    default:
        console.log("Valor inválido");
    break;
};