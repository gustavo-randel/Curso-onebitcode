const baralho = [] //apesar de ser um const, quando se trata de arrays é possivel modificar a constante
let opcao = "" 

do {
    opcao = prompt(
        "Cartas no baralho" + baralho.length +
        "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
    )
    switch (opcao) {
    case "1":
    const novaCarta = prompt("Qual é a nova carta?")
    baralho.push(novaCarta)
    break
    case "2":
    const cartaPuxada = baralho.pop 
    if (!cartaPuxada) {
        alert("Não há nenhuma carta neste baralho")
    } else {
    alert("Você puxou a carta " + cartaPuxada)
    }
    break
    case "3":
    alert("Encerrando...")
    break
    default:
    alert("Opção inválida")
    break
    }
} while (opcao !== "3")