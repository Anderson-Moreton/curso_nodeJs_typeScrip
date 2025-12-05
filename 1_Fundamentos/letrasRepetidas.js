const palavra = "Anderson Moreton";

function letrasRepetidas(palavra) {
    const letrasContadas = {};
    const palavraMinuscula = palavra.toLowerCase();

    for (let letra of palavraMinuscula) {
        if (letra >= 'a' && letra <= 'z') { // Considera apenas letras
            if (letrasContadas[letra]) {
                letrasContadas[letra]++;
            } else {
                letrasContadas[letra] = 1;
            }
        }
    }
    return letrasContadas;
}

console.log(letrasRepetidas(palavra));