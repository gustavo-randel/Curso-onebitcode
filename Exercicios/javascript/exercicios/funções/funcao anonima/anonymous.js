// funções sendo passadas como valores; sendo armazenadas em variáveis

function somar(a, b){
    return a + b
}

const operacao = somar

//sem (), se não a variavel seria o resultado de somar, não a função em si

console.log(operacao(3, 2))
// retorno: 5

const subtrair = function (a, b){
    return a - b 
}

//a função não precisa de um nome quando passada como um valor

operacao = function (a, b) {
    return a - b
}

console.log(operacao(3, 2))

//as funções podem sofrer alterações de comportamento ao longo do código
