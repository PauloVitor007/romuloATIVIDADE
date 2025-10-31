// Q14: multiplyAndAdd nas três formas

// 1. Definição de Função (Function Declaration)
function multiplyAndAdd_declaration(a, b, c) {
    return (a * b) + c;
}

// 2. Expressão de Função (Function Expression)
const multiplyAndAdd_expression = function(a, b, c) {
    return (a * b) + c;
};

// 3. Arrow Function (Função de Seta)
const multiplyAndAdd_arrow = (a, b, c) => (a * b) + c;

// Testando:
console.log("Declaration:", multiplyAndAdd_declaration(2, 3, 4)); // 10
console.log("Expression:", multiplyAndAdd_expression(2, 3, 4)); // 10
console.log("Arrow:", multiplyAndAdd_arrow(2, 3, 4)); // 10

// Q15: filtrar (callback) - números pares
function filtrar(array, callbackCriterio) {
    const arrayFiltrado = [];
    for (const item of array) {
        if (callbackCriterio(item)) {
            arrayFiltrado.push(item);
        }
    }
    return arrayFiltrado;
}

let numeros = [1, 12, 5, 8, 130, 44];

function ehPar(numero) {
    return numero % 2 === 0;
}

let pares = filtrar(numeros, ehPar);
console.log(pares); // [12, 8, 130, 44]

let maioresQue10 = filtrar(numeros, function(numero) {
    return numero > 10;
});
console.log(maioresQue10); // [12, 130, 44]

// Q16: updatePerson (passagem por referência - objeto)
function updatePerson(objPessoa) {
    objPessoa.age = objPessoa.age + 1;
    console.log("Dentro da função (idade alterada):", objPessoa.age);
}

let person = { name: "Alice", age: 25 };
console.log("Antes da função (idade original):", person.age);
updatePerson(person);
console.log("Depois da função (idade alterada):", person.age);

// Q17: addItem (passagem por referência - array)
function addItem(array, valor) {
    array.push(valor);
    console.log("Dentro da função (array alterado):", array);
}

let numbers = [1, 2, 3];
console.log("Antes da função (array original):", numbers);
addItem(numbers, 4);
console.log("Depois da função (array alterado):", numbers);

// Q18: filter + arrow function (números ímpares)
const numbersParaFiltro = [1, 2, 3, 4, 5, 6, 7];
const oddNumbers = numbersParaFiltro.filter(numero => numero % 2 !== 0);
console.log(oddNumbers); // [1, 3, 5, 7]
