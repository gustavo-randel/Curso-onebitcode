const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

// push() : adiciona elementos ao final da array
// unshift() : adiciona elementos ao começo da array
// pop() : tem tanto a função de remover o último elemento de uma array quando a de retornar esse elemento removido
// shift() : tem tanto a função de remover o primeiro elemento de uma array quando a de retornar esse elemento removido
arr.push("Boromir")
arr.unshift("Boromir")

const ltimoElemento = arr.pop()

//inserir um push ou um unshift dentro de uma variável permite retornar o tamanho novo da array enquanto executado por aquela variavel

let tamanho = arr.push("Boromir")
console.log(tamanho) // o console log dessa variavel será o tamanho da array após adicionar o novo elemento

arr.unshift("Teste")    

let primeiroElemento = arr.shift()
console.log(primeiroElemento)

//Pesquisar por elemento
// includes: checa se um elemento existe dentro da array
const inclui = arr.includes("Gandalf") // inclui : boolean

//indexOf: pesquisa pelo índice do elemento 
const indice = arr.indexOf("Gandalf") // indexOf : valor numerico da posição 

// Cortar e concatenar arrays
// slice : cria uma cópia de uma parte da array e corta ela, salvando a parte copiada em uma nova array, ou seja, não modifica a array original. Valor negativo faz com que o referencial do indice seja invertido, ele começa do final.

const hobbits = arr.slice(0, 4)
const antiHobbits = arr.slice(-4)
// retornará a parte cortada da array 

//concat 
//tem a função de somar elementos ou arrays a uma array
const sociedade = hobbits.concat(antiHobbits)

//Splice: Substituição de elementos
// const x = nomeDaArray.splice(array, indice do elemento, elemento a entrar)
// qualquer elemento colocado seguido do primeiro será tratado como adição e não subsituição sendo que, estes elementos adicionados, virão após o subsituto
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(elementosRemovidos)
console.log(sociedade)

// Usando o for para percorrer cada elemento do array
for (let indice1 = 0; indice1 < sociedade.length; indice1++) {
    const elemento = sociedade[indice1]
    console.log(elemento + " se encontra na posição " + indice1)
  }