/**
 * Adiciona um elemento ao final de um array.
 * O array original é modificado.
 */
function push(array, valor) {
    array[array.length] = valor;
    return array.length;
}

/**
 * Remove o último elemento de um array.
 * O array original é modificado.
 * Retorna o elemento removido.
 */
function pop(array) {
    if (array.length === 0) {
        return undefined;
    }
    const ultimoValor = array[array.length - 1];

    // Para "encurtar" o array, a forma mais simples (sem usar slice/splice)
    // é criar um novo array temporário.
    let novoArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        novoArray[i] = array[i];
    }

    // Limpa o array original e copia os itens de volta
    // (Isso é complexo, o mais comum seria usar array.length--)
    // Vamos simplificar para o propósito do exercício:
    array.length = array.length - 1; 

    return ultimoValor;
}


/**
 * Adiciona um elemento ao início de um array.
 * O array original é modificado.
 */
function unshift(array, valor) {
    // Desloca todos os elementos para a direita
    for (let i = array.length; i > 0; i--) {
        array[i] = array[i - 1];
    }
    // Adiciona o novo valor na primeira posição
    array[0] = valor;
    return array.length;
}

/**
 * Remove o primeiro elemento de um array.
 * O array original é modificado.
 * Retorna o elemento removido.
 */
function shift(array) {
    if (array.length === 0) {
        return undefined;
    }
    const primeiroValor = array[0];

    // Desloca todos os elementos para a esquerda
    for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }

    // Remove o último elemento duplicado
    array.length = array.length - 1;

    return primeiroValor;
}

// --- Testando as funções ---
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
