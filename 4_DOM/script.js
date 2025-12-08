"use strict";

const h1 = document.querySelector("h1"); // tag
const classP = document.querySelector(".paragrafo"); // class
const strongP = document.querySelector(".paragrafo strong"); // nested
const idP = document.querySelector("#paragrafo"); // id
const p = document.querySelectorAll("p"); // all tags
const byIdP = document.getElementById("paragrafo"); // id by another method
const byClassP = document.getElementsByClassName("paragrafo"); // class by another method
const byTagP = document.getElementsByTagName("p"); // tag by another method

console.log(h1);
console.log(classP);
console.log(strongP);
console.log(idP);

// Atualiza o título da página a cada segundo com o tempo decorrido em segundos
let timer = 0;
const title = document.querySelector("title");

/*
setInterval(() => {
    timer++;
    title.innerText = `Timer: ${timer} segundos`;
}, 1000); 
*/

// Exibe o conteúdo de todos os parágrafos no console
p.forEach((element, index) => {
    element.style.color = "white";
    element.style.padding = "20px";

    if(index === 0){
        element.style.background = "blue";
    }
    if(index === 1){
        element.style.background = "green";
    }
});

//Manipulação de elementos
console.log(p.textContent); // texto puro
console.log(p.innerText); // texto visível

p.textContent += " - Texto adicionado com textContent.";
p.innerText += " - Texto adicionado com innerText.";

//Criando elemento com innerHTML - não recomendado - pois substitui o conteúdo existente

/*
const div = document.querySelector("div");
console.log(1, div);

div.innerHTML = `${div.innerHTML} <p>Parágrafo adicionado com innerHTML</p>`;
*/

//Crinado elemento com createElement - mais recomendado - pois não substitui o conteúdo existente
const div = document.querySelector("div");
const elementUl = document.createElement("ul");

[1, 2, 3].forEach((element) => {
    const elementLi = document.createElement("li");
    elementLi.innerText = `Item ${element}`;
    elementUl.appendChild(elementLi);
});

div.appendChild(elementUl);

const input = document.querySelector("#name");
console.log(input.value);

setTimeout(() => {
    input.value = "Anderson";
}, 2000);


// Inserindo dados com Fragment - mais recomendado para performance - pois insere todos os elementos de uma vez só
// ao invés de inserir um por um no DOM, o que pode ser mais lento - especialmente com muitos elementos
const ul = document.querySelector(".updateFragment");
const fragment = document.createDocumentFragment();

const frutas = ["Banana", "Maçã", "Laranja", "Manga", "Uva"];

frutas.forEach((element) => {
    const li = document.createElement("li");
    li.innerText = element;
    fragment.appendChild(li);
});

ul.appendChild(fragment);

//Como encontrar Elementos no DOM - métodos mais comuns
// document.querySelector() - retorna o primeiro elemento que corresponde ao seletor CSS fornecido.
// document.querySelectorAll() - retorna todos os elementos que correspondem ao seletor CSS fornecido.
// document.getElementById() - retorna o elemento com o ID especificado.
// document.getElementsByClassName() - retorna uma coleção de elementos com a classe especificada.
// document.getElementsByTagName() - retorna uma coleção de elementos com a tag especificada.
// document.createElement() - cria um novo elemento HTML.
// document.createDocumentFragment() - cria um fragmento de documento para inserção eficiente de múltiplos elementos.
// element.appendChild() - adiciona um nó como o último filho de um elemento.
// element.innerText - obtém ou define o texto visível de um elemento.
// element.textContent - obtém ou define o conteúdo de texto de um elemento, incluindo texto oculto.    
// element.innerHTML - obtém ou define o HTML interno de um elemento (não recomendado para inserção de novos elementos).
// setInterval() - executa uma função repetidamente em intervalos de tempo especificados.
// setTimeout() - executa uma função após um atraso especificado.
// forEach() - método de array para iterar sobre elementos de um array.
// appendChild() - método para adicionar um nó como o último filho de um elemento pai.
// createDocumentFragment() - método para criar um fragmento de documento para inserção eficiente de múltiplos elementos.
// innerText - propriedade para obter ou definir o texto visível de um elemento.
// textContent - propriedade para obter ou definir o conteúdo de texto de um elemento, incluindo texto oculto.
// innerHTML - propriedade para obter ou definir o HTML interno de um elemento (não recomendado para inserção de novos elementos).
// Métodos e propriedades do DOM são essenciais para manipular e interagir com elementos HTML usando JavaScript.
// Esses são alguns dos métodos e propriedades mais comuns usados na manipulação do DOM com JavaScript.
// É importante entender como e quando usar cada um para criar aplicações web dinâmicas e interativas.
// Lembre-se de que a manipulação direta do DOM pode afetar o desempenho, especialmente em grandes aplicações.
// Portanto, é recomendável usar técnicas como DocumentFragment para otimizar a inserção de múltiplos elementos.
// Além disso, evite o uso excessivo de innerHTML para inserir novos elementos, pois pode levar a vulnerabilidades de segurança (XSS).

const p2 = document.querySelector("p");
const strong = document.querySelector("strong");
const container = document.querySelector(".container");

console.log(strong.parentElement); // elemento pai
console.log(strong.parentNode); // nó pai
console.log(container.parentElement); // elemento pai
console.log(container.parentNode); // nó pai

console.log(strong.children); // nó filhos
console.log(container.children); // nó filhos

//Procurando pelo primeiro elemento filho
console.log(container.firstElementChild); 
console.log(container.firstChild);
console.log(p2.firstElementChild);
console.log(p2.firstChild);

//Procurando pelo último elemento filho
console.log(container.lastElementChild);
console.log(container.lastChild); 
console.log(p2.lastElementChild);
console.log(p2.lastChild);

//Procurando pelo elemento irmão anterior
console.log(container.previousElementSibling);
console.log(container.previousSibling);
console.log(p2.previousElementSibling);
console.log(p2.previousSibling);

//Procurando pelo elemento irmão seguinte
console.log(container.nextElementSibling);
console.log(container.nextSibling);
console.log(p2.nextElementSibling);
console.log(p2.nextSibling);

//Acrescentar elementos com append e appendChild
const newDiv = document.createElement("div");
newDiv.innerText = "Nova Div criada";
container.appendChild(newDiv);
container.append(" - Texto adicionado com append");

//Remover elementos com removeChild e remove
//container.removeChild(newDiv);
newDiv.remove();
console.log(container);

//Substituir elementos com replaceChild e replaceWith
const newP = document.createElement("p");
newP.innerText = "Novo parágrafo criado";   
//container.replaceChild(newP, p2);
p2.replaceWith(newP);
console.log(container);

//insertBefore - inserir antes de um elemento específico
const anotherP = document.createElement("p");
anotherP.innerText = "Outro parágrafo criado";
container.insertBefore(anotherP, newP);
console.log(container);

//After e Before - inserir depois ou antes de um elemento específico
const afterP = document.createElement("p");
afterP.innerText = "Parágrafo inserido com after";
newP.after(afterP);

const beforeP = document.createElement("p");
beforeP.innerText = "Parágrafo inserido com before";
newP.before(beforeP);
console.log(container);



