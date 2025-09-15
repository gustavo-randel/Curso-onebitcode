const salarioBruto = 1000

function impostoDeRenda () {
    const salarioLiquido = salarioBruto - 250
    return salarioLiquido
} 
    const pagou = alert("Depois de pagar o imposto te sobra " + salarioLiquido)

console.log(pagou) 


function calcularMedia(a, b) {
    const media = (a + b) / 2
    return media 
  }
const resultado = calcularMedia(5, 9)

console.log(resultado)

function areaRetangular(base, altura){
    return base * altura 
}

console.log(areaRetangular(3, 4))

function areaQuadrado(lado){
    return areaTotal(lado, lado)
}

console.log(areaQuadrado(9))

function maioridade(idade) {
    if (idade >= 18) {
      return "Maior de idade"
    } else {
      return "Menor de idade"
    }
  }
  console.log(maioridade(20))
  console.log(maioridade(13))