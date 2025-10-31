// Estado inicial da aplicação
let meuArray = [1, 2, 3, 10, 15, 21, 22, 29, 30]; // Array da imagem

// Selecionando os elementos do DOM
const valorInput = document.getElementById('valorInput');
const valorPesquisa = document.getElementById('valorPesquisa');
const arrayContainer = document.getElementById('arrayContainer');
const resultadoContainer = document.getElementById('resultadoContainer');

// Função para redesenhar o array na tela
function renderizarArray() {
    arrayContainer.innerHTML = '';
    for (let item of meuArray) {
        const itemElement = document.createElement('div');
        itemElement.className = 'array-item';
        itemElement.textContent = item;
        arrayContainer.appendChild(itemElement);
    }
}

// Botão de Adicionar (Push)
document.getElementById('btnPush').addEventListener('click', () => {
    const valor = parseInt(valorInput.value, 10); // Converte para número
    if (!isNaN(valor)) {
        meuArray.push(valor);
        valorInput.value = '';
        renderizarArray();
    }
});

// Botão de Ordenar (Sort)
document.getElementById('btnSort').addEventListener('click', () => {
    meuArray.sort((a, b) => a - b);
    renderizarArray();
});

// Botão de Pesquisa Sequencial
document.getElementById('btnPesquisar').addEventListener('click', () => {
    const valor = parseInt(valorPesquisa.value, 10);
    if (isNaN(valor)) {
        resultadoContainer.textContent = "Por favor, digite um número válido.";
        return;
    }

    let comparacoes = 0;
    let encontrado = false;

    for (let i = 0; i < meuArray.length; i++) {
        comparacoes++;
        if (meuArray[i] === valor) {
            encontrado = true;
            break; // Para a busca assim que encontrar
        }
    }

    if (encontrado) {
        resultadoContainer.textContent = `${comparacoes} comparações. Encontrou!`;
    } else {
        resultadoContainer.textContent = `${comparacoes} comparações. Não encontrou!`;
    }
});

// Botão de Pesquisa Binária
document.getElementById('btnPesquisarBinaria').addEventListener('click', () => {
    const valor = parseInt(valorPesquisa.value, 10);
    if (isNaN(valor)) {
        resultadoContainer.textContent = "Por favor, digite um número válido.";
        return;
    }

    // Alerta: Pesquisa binária SÓ funciona em array ordenado.
    // Vamos ordenar primeiro por garantia (ou avisar o usuário)
    meuArray.sort((a, b) => a - b);
    renderizarArray(); // Mostra que foi ordenado

    let comparacoes = 0;
    let encontrado = false;
    let inicio = 0;
    let fim = meuArray.length - 1;

    while (inicio <= fim) {
        comparacoes++;
        let meio = Math.floor((inicio + fim) / 2);

        if (meuArray[meio] === valor) {
            encontrado = true;
            break;
        } else if (meuArray[meio] < valor) {
            inicio = meio + 1; // Procura na metade direita
        } else {
            fim = meio - 1; // Procura na metade esquerda
        }
    }

    if (encontrado) {
        resultadoContainer.textContent = `(Binária) ${comparacoes} comparações. Encontrou!`;
    } else {
        resultadoContainer.textContent = `(Binária) ${comparacoes} comparações. Não encontrou!`;
    }
});


// Renderiza o array inicial
renderizarArray();
