// Array

//Lista de dados
//Conjunto de dados

let array = [1, 2, 3, 4, 5];

console.log(array);
console.log(array.length); //tamanho do array

//Tabela 
console.table(array);

//Acessar Indice dentro do array
console.log(array[0]); //1
console.log(array[2]); //3
console.log(array[4]); //5

//Modificar valores dentro do array
array[2] = 30;
console.log(array); // [1, 2, 30, 4, 5]

//Multidimensional Array (Array dentro de Array)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [10, 11, 12],
        [13, 14, 15],
        [16, 17, 18],
        [
            [19, 20, 21],
            [22, 23, 24],
            [25, 26, 27],
        ],
    ],
];  

console.log(matrix);
console.table(matrix);
console.log(matrix[0][0]); //1
console.log(matrix[1][1]); //5
console.log(matrix[2][2]); //9
console.log(matrix[3][0][0]); //10
console.log(matrix[3][3][0][0]); //19
console.log(matrix[3][3][2][2]); //27

//Destructuring Array
let [a, b, c, d] = array;
console.log(a); //1
console.log(b); //2
console.log(c); //30
console.log(d); //4

//  Spread Operator
let newArray = [...array, 6, 7, 8, 9, 10];
console.log(newArray); // [1, 2, 30, 4, 5, 6, 7, 8, 9, 10]
console.log(Math.max(...newArray)); // 30
console.log(Math.min(...newArray)); // 1    

//Adicionar elementos no final do array
newArray.push(11);
console.log(newArray); // [1, 2, 30, 4, 5, 6, 7, 8, 9, 10, 11]

//Adicionar elementos no inicio do array
newArray.unshift(0);
console.log(newArray); // [0, 1, 2, 30, 4, 5, 6, 7, 8, 9, 10, 11]

//Remover o ultimo elemento do array
newArray.pop();
console.log(newArray); // [0, 1, 2, 30, 4, 5, 6, 7, 8, 9, 10]

//Remover o primeiro elemento do array
newArray.shift();
console.log(newArray); // [1, 2, 30, 4, 5, 6, 7, 8, 9, 10]

//Slice - Pegar uma parte do array
let slicedArray = newArray.slice(2, 5); // do indice 2 ao 5 (5 não incluso)
console.log(slicedArray); // [30, 4, 5]
console.log(newArray); // [1, 2, 30, 4, 5, 6, 7, 8, 9, 10]

//Splice - Remover ou substituir elementos do array
let splicedArray = newArray.splice(2, 3, 300, 400, 500); // a partir do indice 2, remove 3 elementos e adiciona 300, 400, 500
console.log(splicedArray); // [30, 4, 5]
console.log(newArray); // [1, 2, 300, 400, 500, 6, 7, 8, 9, 10] 

// Ordenando e revertendo arrays
const numArray = [5, 3, 8, 100, 80, 5000, 3000, 70, 1, 2];
numArray.sort((a, b) => a - b); // Ordena em ordem crescente
console.log(numArray); // [1, 2, 3, 5, 8, 70, 80, 100, 3000, 5000]  
numArray.reverse(); // Reverte a ordem do array
console.log(numArray); // [5000, 3000, 100, 80, 70, 8, 5, 3, 2, 1]

const objArray = [
    { name: 'Otavio', age: 5 },
    { name: 'Anthony', age: 10 },
    { name: 'Priscila', age: 37 },
    { name: 'Anderson', age: 37 },
];

objArray.sort((a, b) => a.age - b.age || a.name.localeCompare(b.name)); // Ordena por idade e depois por nome
console.log(objArray);
// [
//   { name: 'Otavio', age: 5 },
//   { name: 'Anthony', age: 10 },
//   { name: 'Anderson', age: 37 },
//   { name: 'Priscila', age: 37 }
// ]
objArray.reverse(); // Reverte a ordem do array
console.log(objArray);
// [        
//   { name: 'Priscila', age: 37 },
//   { name: 'Anderson', age: 37 },
//   { name: 'Anthony', age: 10 },
//   { name: 'Otavio', age: 5 }
// ]

const myArray = [1, 2, 3, 4, 5];
// for([inicialização]; [condição]; [incremento]) {}
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]); // 1 2 3 4 5
}

// for of - recomendado para arrays - Recomendado para iterar sobre valores
for (let value of myArray) {
    console.log(value); // 1 2 3 4 5
}

// for in - não é recomendado para arrays, mas funciona - Recomendado para objetos
for (let index in myArray) {
    console.log(myArray[index]); // 1 2 3 4 5
}
