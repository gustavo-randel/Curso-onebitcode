//infos: Nome do proprietário, Quantidade de quartos, quantidade de banheiros, garagem ou não. 

const imoveis = []
let opcao = ""

do { 
    opcao = prompt("Registro de imóveis\n\nTotal de imóveis: " + imoveis.length + "\n 1.Adicionar imóvel \n 2.Listar imóveis \n 3.Sair")


    switch(opcao){
    case "1": 
        const imovel = {}
        imovel.proprietario = prompt("Informe o nome do proprietário: ")
        imovel.quartos = parseFloat(prompt("Quantos quartos tem o seu imóvel?"))
        imovel.banheiros = parseFloat(prompt("Quantos banheiros tem o seu imóvel?"))
        imovel.garagem = prompt("Tem garagem?(Sim/Não)")
            const confirma = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui Garagem? " + imovel.garagem
            ) 
                if (confirma) {
                    imoveis.push(imovel)
                }
    break

    case "2":
        for (let i = 0; i < imoveis.length; i++) {
            alert(
                "Imóvel " + (i + 1) + 
                "\nProprietário: " + imoveis[i].proprietario +
                "\nQuartos: " + imoveis[i].quartos +
                "\nBanheiros: " + imoveis[i].banheiros +
                "\nPossui Garagem? " + imoveis[i].garagem
            ) 
        }
            
    break

    case "3":
    alert("Saindo...")
    break

    default:
    alert("Entrada inválida.")
    break 
} 
} while (opcao !== "3") 