// Q8: Soma, subtração, multiplicação e divisão (navegador)
const num1 = parseInt(prompt("Digite o primeiro número inteiro:"), 10);
const num2 = parseInt(prompt("Digite o segundo número inteiro:"), 10);

if (!isNaN(num1) && !isNaN(num2)) {
    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const multiplicacao = num1 * num2;

    let divisao;
    if (num2 !== 0) {
        divisao = num1 / num2;
    } else {
        divisao = "Indefinida (divisão por zero)";
    }

    console.log(`Soma: ${num1} + ${num2} = ${soma}`);
    console.log(`Subtração: ${num1} - ${num2} = ${subtracao}`);
    console.log(`Multiplicação: ${num1} * ${num2} = ${multiplicacao}`);
    console.log(`Divisão: ${num1} / ${num2} = ${divisao}`);

    alert(`Resultados:\nSoma: ${soma}\nSubtração: ${subtracao}\nMultiplicação: ${multiplicacao}\nDivisão: ${divisao}`);
} else {
    alert("Por favor, digite números válidos.");
}

// Q9: Par ou Ímpar
const numero = parseInt(prompt("Digite um número:"), 10);

if (!isNaN(numero)) {
    if (numero % 2 === 0) {
        alert(`O número ${numero} é PAR.`);
        console.log(`O número ${numero} é PAR.`);
    } else {
        alert(`O número ${numero} é ÍMPAR.`);
        console.log(`O número ${numero} é ÍMPAR.`);
    }
} else {
    alert("Valor inválido.");
}

// Q10: Maior de idade
const idade = parseInt(prompt("Digite sua idade:"), 10);

if (!isNaN(idade)) {
    if (idade >= 18) {
        alert("Você é MAIOR de idade.");
        console.log("Maior de idade.");
    } else {
        alert("Você é MENOR de idade.");
        console.log("Menor de idade.");
    }
} else {
    alert("Valor inválido.");
}

// Q11: Tabuada até 10
const numeroTabuada = parseInt(prompt("Digite um número para ver a tabuada:"), 10);

if (!isNaN(numeroTabuada)) {
    let tabuadaString = `Tabuada do ${numeroTabuada}:\n`;
    console.log(`Tabuada do ${numeroTabuada}:`);

    for (let i = 1; i <= 10; i++) {
        let resultado = numeroTabuada * i;
        console.log(`${numeroTabuada} x ${i} = ${resultado}`);
        tabuadaString += `${numeroTabuada} x ${i} = ${resultado}\n`;
    }

    alert(tabuadaString);
} else {
    alert("Valor inválido.");
}

// Q12: Número primo
const numeroPrimo = parseInt(prompt("Digite um número (maior que 1):"), 10);

function verificarPrimo(num) {
    if (isNaN(num) || num <= 1) {
        return "Valor inválido ou não é primo (deve ser > 1).";
    }

    let limite = Math.sqrt(num);

    for (let i = 2; i <= limite; i++) {
        if (num % i === 0) {
            return `O número ${num} NÃO é primo (divisível por ${i}).`;
        }
    }

    return `O número ${num} É primo.`;
}

const resultadoPrimo = verificarPrimo(numeroPrimo);
alert(resultadoPrimo);
console.log(resultadoPrimo);

// Q13: Palíndromo
const texto = prompt("Digite uma palavra ou frase para verificar se é um palíndromo:");

if (texto) {
    const textoNormalizado = texto.toLowerCase().replace(/[\W_]/g, '');
    const textoInvertido = textoNormalizado.split('').reverse().join('');

    if (textoNormalizado === textoInvertido) {
        alert(`"${texto}" É um palíndromo!`);
        console.log(true);
    } else {
        alert(`"${texto}" NÃO é um palíndromo.`);
        console.log(false);
    }
}
