function push(array, valor) {
    array[array.length] = valor;
    return array.length;
}

function pop(array) {
    if (array.length === 0) {
        return undefined;
    }
    const ultimoValor = array[array.length - 1];
    let novoArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        novoArray[i] = array[i];
    }
    array.length = array.length - 1; 

    return ultimoValor;
}



function unshift(array, valor) {
    for (let i = array.length; i > 0; i--) {
        array[i] = array[i - 1];
    }
    array[0] = valor;
    return array.length;
}
function shift(array) {
    if (array.length === 0) {
        return undefined;
    }
    const primeiroValor = array[0];

    for (let i = 0; i < array.length - 1; i++) { // Desloca todos os elementos para a esquerda
        array[i] = array[i + 1];
    }

    array.length = array.length - 1;     // Remove o último elemento duplicado

    return primeiroValor;
}

// --- funções ---
let meuArray = [10, 20, 30];
console.log("Original:", meuArray); // [10, 20, 30]

push(meuArray, 40);
console.log("Após push(40):", meuArray); // [10, 20, 30, 40]

let valorRemovidoPop = pop(meuArray);
console.log("Após pop():", meuArray, "-> Removido:", valorRemovidoPop); // [10, 20, 30] -> Removido: 40

unshift(meuArray, 5);
console.log("Após unshift(5):", meuArray); // [5, 10, 20, 30]

let valorRemovidoShift = shift(meuArray);
console.log("Após shift():", meuArray, "-> Removido:", valorRemovidoShift); // [10, 20, 30] -> Removido: 5
