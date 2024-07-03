const entrada1 = prompt("informe o primeiro número: ") 
const entrada2  = prompt("informe o segundo número: ")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert(
    "O resultado é: \n" + "Soma: " + soma + "\nSubtração: " + subtracao + "\nMulitplicação: " + multiplicacao + "\nDivisão: " + divisao 
)