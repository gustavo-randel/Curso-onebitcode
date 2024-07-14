const pergunta = prompt("Você ja visitou alguma cidade? (Sim/Não)") 

let cidades = ""
let contagem = 0

while (pergunta === "sim"){
    let cidade = prompt("Qual o nome da cidade?")
    //cidades = cidades + algo
    cidades += " - " + cidade + "\n"
    contagem++
    pergunta = prompt("Você visitou alguma outra cidade?")
}

alert(
    "Quantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
  )