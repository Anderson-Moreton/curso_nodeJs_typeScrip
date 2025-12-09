"Use Strict";

const btn = document.querySelector("button");

// Exemplo 1: Usando onclick diretamente - Comentado para evitar múltiplos alertas - Não recomendado
/*
btn.onclick = function alertOne() {
    alert(123);
};
*/

const acionarAlert = () => {
    alert(123);
};

// Exemplo 2: Usando addEventListener - Recomendado 
btn?.addEventListener('click', acionarAlert);


//Evennt Delegation - Servirá para adicionar eventos em elementos que ainda não existem no DOM 
const menu = document.querySelector("#menu");

menu?.addEventListener('click', (event) => {
    const { target } = event;
    const body = document.querySelector("body");

    switch (target.getAttribute("class")) {
        case "home":
            body.style.backgroundColor = "blue";
            break;
        case "about":
            body.style.backgroundColor = "green";
            break;
        case "contact":
            body.style.backgroundColor = "#fff";
            break;
    }
});