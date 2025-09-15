//areas: 
//área do triângulo: base * altura / 2
//área do retângulo: base * altura
//área do quadrado: lado²
//área do trapézio: (base maior + base menor) * altura / 2
//área do círculo: pi * raio² (considere pi = 3.14)

function triangulo (){
    const base = parseFloat(prompt("Insira a base: "))
    const altura = parseFloat(prompt("Insira a altura: "))
    return base * altura / 2
}

function retangulo (){
    const base = parseFloat(prompt("Insira a base: "))
    const altura = parseFloat(prompt("Insira a altura: "))
    return base * altura
}

function quadrado (){
    const lado = parseFloat(prompt("Informe o valor dos lados: "))
    return lado * lado
}

function trapezio (){
    const baseMaior = parseFloat(prompt("Insira a base maior: "))
    const baseMenor = parseFloat(prompt("Insira a base menor: "))
    const altura = parseFloat(prompt("Insira a altura: "))
    return (baseMaior + baseMenor) * altura / 2
}

function circulo (){
    const raio = parseFloat(prompt("Insira o raio: "))
    return 3.14 * raio * raio
}

function exibirMenu() {
    return prompt(
    "Escolha o tipo de cálculo a ser feito:\n 1.Área do triângulo.\n2.Área do retângulo.\n3.Área do quadrado\n4.Área do trapézio\n5.Área do circulo\n6.sair"
    )
}


function executar() {
    let opcao = ""
  
    do {
      opcao = exibirMenu()
      let resultado
  
      switch (opcao) {
        case "1":
          resultado = triangulo()
          break
        case "2":
          resultado = retangulo()
          break
        case "3":
          resultado = quadrado()
          break
        case "4":
          resultado = trapezio()
          break
        case "5":
          resultado = circulo()
          break
        case "6":
          alert("Saindo...")
          break
        default:
          alert("Opção inválida!")
          break
      }
  
      if (resultado) {
        alert("Resultado: " + resultado)
      }
  
    } while (opcao !== "6");
  }

executar()




/*function areaRetangular(base, altura){
    return base * altura 
}

console.log(areaRetangular(3, 4))

function areaQuadrado(base){
    return areaTotal(base, base)
}*/
