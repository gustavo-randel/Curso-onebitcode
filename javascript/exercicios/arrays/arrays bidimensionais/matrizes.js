// Arrays bidimensionais são em resumo arrays com outras arrays dentro. Elas podem estar em mais de um nível (3 níveis no máximo) uma na outra. 

const arr = [ 
    "1° nível" // por exemplo: uma array que só contenha outra array dentro, na posição zero haverá a array colocada.
    ["2º nível", 42, true],
  [
    ["3º nível, 1º item", "Olá, mundo!"],
    ["3º nível, 2º item", "Oi, mundo!"],
  ],
  []
]
console.log(arr[0])       // Saída: '1º Nível'
console.log(arr[1])       // Saída: [ '2º nível', 42, true ]
console.log(arr[1][0])    // Saída: '2º nível'; Encadear as chaves que indicam posição tem um efeito de: [1] está resultando no elemento 1, que é a array, enquanto o [0] pega o elemento 0 dessa array que se encontra no elemento 1 da array externa
console.log(arr[1][1])    // Saída: 42
console.log(arr[2])       // Saída: [ [ '3º nível, 1º item', 'Olá, mundo!' ], [ '3º nível, 2º item', 'Oi, mundo!' ] ]
console.log(arr[2][0])    // Saída: [ '3º nível, 1º item', 'Olá, mundo!' ]
console.log(arr[2][1][1]) // Saída: 'Oi, mundo!'

const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
  ]

// console.table(matriz) // É uma função do console similar ao console log cuja diferença é que vai fazer com o que o sistema tente formar uma tabela com aquilo que deseja ser exibido pelo console 

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
       const elemento = console.log(matriz[i][j])
       console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
    }
}

