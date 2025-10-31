// Array de teste
let numeros = [1, 5, 2, 8, 3];
console.log("Array original:", numeros);

// map -> dobrarNumeros
function dobrarNumeros(array) {
    let novoArray = [];
    for (let i = 0; i < array.length; i++) {
        novoArray.push(array[i] * 2);
    }
    return novoArray;
}
console.log("dobrarNumeros:", dobrarNumeros(numeros)); // [2, 10, 4, 16, 6]

// filter -> filtrarMaioresQueDois
function filtrarMaioresQueDois(array) {
    let novoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 2) {
            novoArray.push(array[i]);
        }
    }
    return novoArray;
}
console.log("filtrarMaioresQueDois:", filtrarMaioresQueDois(numeros)); // [5, 8, 3]

// find -> encontrarPrimeiroMaiorQueDois
function encontrarPrimeiroMaiorQueDois(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 2) {
            return array[i]; // Retorna o primeiro que encontrar
        }
    }
    return undefined; // Retorna undefined se não encontrar
}
console.log("encontrarPrimeiroMaiorQueDois:", encontrarPrimeiroMaiorQueDois(numeros)); // 5

// reduce -> somarElementos
function somarElementos(array) {
    let acumulador = 0; // Valor inicial
    for (let i = 0; i < array.length; i++) {
        acumulador = acumulador + array[i];
    }
    return acumulador;
}
console.log("somarElementos:", somarElementos(numeros)); // 19

// forEach -> adicionarUm (modifica o original)
function adicionarUm(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] + 1;
    }
    // Não retorna nada, modifica o array "in-place"
}
// Cuidado: isso modifica o array 'numeros' para os próximos testes
adicionarUm(numeros); 
console.log("adicionarUm (array modificado):", numeros); // [2, 6, 3, 9, 4]

// --- Outros exercícios ---
// (Note que o array 'numeros' agora é [2, 6, 3, 9, 4])

// map -> criarObjetos
let nomes = ['Ana', 'João', 'Maria'];
function criarObjetos(arrayDeNomes) {
    let novoArray = [];
    for (let i = 0; i < arrayDeNomes.length; i++) {
        let novoObjeto = { nome: arrayDeNomes[i] };
        novoArray.push(novoObjeto);
    }
    return novoArray;
}
console.log("criarObjetos:", criarObjetos(nomes)); 
// [{ nome: 'Ana' }, { nome: 'João' }, { nome: 'Maria' }]

// forEach (com if) -> logarPares
function logarPares(array) {
    console.log("Logando pares do array:", array);
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log(array[i]);
        }
    }
}
logarPares(numeros); // 2, 6, 4
