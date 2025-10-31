// Q19: verificarNumeroPar (Promise)
function verificarNumeroPar(numero) {
    return new Promise((resolve, reject) => {

        if (typeof numero !== 'number' || isNaN(numero)) {
            reject(new Error("Entrada inválida. Esperava um número."));
        }

        setTimeout(() => {
            if (numero % 2 === 0) {
                resolve(`Sucesso! O número ${numero} é PAR.`);
            } else {
                reject(`Erro! O número ${numero} é ÍMPAR.`);
            }
        }, 1000);
    });
}

// Testes
console.log("Verificando o número 4...");
verificarNumeroPar(4)
    .then((mensagemSucesso) => {
        console.log(mensagemSucesso);
    })
    .catch((mensagemErro) => {
        console.error(mensagemErro);
    });

console.log("Verificando o número 5...");
verificarNumeroPar(5)
    .then((mensagemSucesso) => {
        console.log(mensagemSucesso);
    })
    .catch((mensagemErro) => {
        console.error(mensagemErro);
    });

// Q20: async/await consumidor
async function processarNumero(numero) {
    try {
        console.log(`(Async) Processando ${numero}...`);
        const resultado = await verificarNumeroPar(numero);
        console.log("(Async) Resultado:", resultado);
    } catch (erro) {
        console.error("(Async) Erro pego:", erro);
    }
}

processarNumero(10);
processarNumero(7);
