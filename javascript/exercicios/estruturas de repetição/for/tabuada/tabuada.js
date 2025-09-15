const numero = prompt("Insira número :")
let resultado = ""

//fator <=20, fator++
//fator * numero 
for (let fator = 1; fator <= 20; fator++) {
    resultado +=  numero + "*" + fator + "=" + (numero * fator) + "\n"
}

alert ("tabuada do número " + numero + " é \n"+ resultado)
//pinto bolas e boquete