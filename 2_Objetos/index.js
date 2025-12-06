let Tenis = {
    tipo: "Corrida",
    cor: "Preto",
    tamanho: {
        Brasil: 42,
        EUA: 10,
        Europa: 44, 
        caixa: {
            altura: 30,
            largura: 20,
            profundidade: 10,
        },
    },
    marca: [
        {
            nome:"Nike",
        }, 
        {
            nome: "Adidas",
        }, 
        {
            nome: "Puma",
        },
    ],

    getMarca: function (param) {
        return this.marca[param].nome;
    },
};

console.log(Tenis);
console.log(Tenis.tipo) // Acessando o valor da propriedade tipo
console.log(Tenis.tamanho.EUA); // Acessando o valor da propriedade tamanho e EUA
console.log(Tenis.tamanho.caixa.altura); // Acessando o valor da propriedade altura dentro de caixa
console.log(Tenis.getMarca(1)); // Acessando o nome da marca na posição 1 do array marca
console.log(Tenis.marca[2].nome); // Acessando o nome da marca na posição 2 do array marca
