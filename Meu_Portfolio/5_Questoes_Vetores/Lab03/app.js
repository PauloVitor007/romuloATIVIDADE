// Estado inicial da aplicação
// Usando o array da imagem, que são números
let meuArray = [4, 6, 20];
let arrayOriginal = [...meuArray]; // Salva uma cópia

// Selecionando os elementos do DOM
const arrayContainer = document.getElementById('arrayContainer');
const resultadoContainer = document.getElementById('resultadoContainer');

// Função para redesenhar o array na tela
function renderizarArray(arrayParaRenderizar) {
    arrayContainer.innerHTML = '';
    for (let item of arrayParaRenderizar) {
        const itemElement = document.createElement('div');
        itemElement.className = 'array-item';
        itemElement.textContent = item;
        arrayContainer.appendChild(itemElement);
    }
}

// Lógica dos botões
document.getElementById('btnSort').addEventListener('click', () => {
    // O sort padrão ordena como strings (ex: 20 viria antes de 4).
    // Para números, precisamos de uma função de comparação.
    meuArray.sort((a, b) => a - b);
    renderizarArray(meuArray);
    resultadoContainer.textContent = `Array ordenado: [${meuArray.join(', ')}]`;
});

document.getElementById('btnFilter').addEventListener('click', () => {
    // "Filtrar os elementos do array maiores que 2"
    const arrayFiltrado = meuArray.filter(numero => numero > 2);
    // Não altera o array original, apenas mostra o resultado
    renderizarArray(meuArray); // Mostra o array atual
    resultadoContainer.textContent = `Itens > 2: [${arrayFiltrado.join(', ')}]`;
});

document.getElementById('btnMap').addEventListener('click', () => {
    // "Passar por todos os elementos do array, dobrando o seu valor"
    const arrayMapeado = meuArray.map(numero => numero * 2);
    // Não altera o array original, apenas mostra o resultado
    renderizarArray(meuArray);
    resultadoContainer.textContent = `Valores dobrados: [${arrayMapeado.join(', ')}]`;
});

document.getElementById('btnFind').addEventListener('click', () => {
    // "Encontrar o primeiro elemento do array com valor igual a 10" (do exercício 5)
    // Vamos adaptar para "encontrar o primeiro item > 5"
    const itemEncontrado = meuArray.find(numero => numero > 5);
    renderizarArray(meuArray);
    resultadoContainer.textContent = `Primeiro item > 5: ${itemEncontrado || 'Nenhum'}`;
});

document.getElementById('btnReduce').addEventListener('click', () => {
    // "Aplicar um cálculo para todos os elementos (soma)" (do exercício 5)
    const somaTotal = meuArray.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    renderizarArray(meuArray);
    resultadoContainer.textContent = `Soma de todos os itens: ${somaTotal}`;
});

// Renderiza o array inicial
renderizarArray(meuArray);
