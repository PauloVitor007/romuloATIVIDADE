// Estado inicial da aplicação
let meuArray = ['texto']; // Começa com um item, como na imagem

// Selecionando os elementos do DOM
const valorInput = document.getElementById('valorInput');
const arrayContainer = document.getElementById('arrayContainer');

const btnPush = document.getElementById('btnPush');
const btnPop = document.getElementById('btnPop');
const btnUnshift = document.getElementById('btnUnshift');
const btnShift = document.getElementById('btnShift');

// Função para redesenhar o array na tela
function renderizarArray() {
    // Limpa o container
    arrayContainer.innerHTML = '';

    // Adiciona cada item do array como um novo elemento
    for (let item of meuArray) {
        const itemElement = document.createElement('div');
        itemElement.className = 'array-item';
        itemElement.textContent = item;
        arrayContainer.appendChild(itemElement);
    }
}

// Lógica dos botões
btnPush.addEventListener('click', () => {
    const valor = valorInput.value;
    if (valor) { // Só adiciona se o usuário digitou algo
        meuArray.push(valor);
        valorInput.value = ''; // Limpa o input
        renderizarArray();
    }
});

btnPop.addEventListener('click', () => {
    if (meuArray.length > 0) {
        meuArray.pop();
        renderizarArray();
    }
});

btnUnshift.addEventListener('click', () => {
    const valor = valorInput.value;
    if (valor) {
        meuArray.unshift(valor);
        valorInput.value = '';
        renderizarArray();
    }
});

btnShift.addEventListener('click', () => {
    if (meuArray.length > 0) {
        meuArray.shift();
        renderizarArray();
    }
});

// Renderiza o array inicial quando a página carrega
renderizarArray();
