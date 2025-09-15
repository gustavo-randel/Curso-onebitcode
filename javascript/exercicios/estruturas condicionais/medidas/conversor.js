const valor = parseFloat(prompt("Insira o valor em metros: "))
const conversao = prompt("Escolha uma unidade para converter:\n milímetro (mm) \ncentímetro (cm) \ndecímetro (dm) \ndecâmetro (dam) \nhectômetro (hm) \nquilômetro (km)")

let valorConvertido = 0

    switch (conversao){
        case "milímetro":
            valorConvertido = valor * 1000 + " mm"
        break
        case "centímetro":
            valorConvertido = valor * 100 + " cm"
        break
        case "decímetro":
            valorConvertido = valor * 10 + " dm"
        break
        case "decâmetro":
            valorConvertido = valor / 10 + " dam"
        break
        case "hectômetro":
            valorConvertido = valor / 100 + " hm"
        break
        case "quilômetro":
            valorConvertido = valor / 1000 + " km"
        break
        default:
            "Opção inválida"
        break
    }
alert("O valor convertido é " + valorConvertido)