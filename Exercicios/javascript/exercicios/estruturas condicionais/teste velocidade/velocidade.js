// pegar nome e velocidade
// retornar superioridade, inferioridade ou igualdade

const carro = prompt("Insira aqui o nome do primeiro veículo: ") 
const carro1 = prompt("Insira aqui o nome do segundo veículo: ")

const vel = prompt("Insira a velocidade do primeiro carro: ")
const vel1 = prompt("Insira a velocidade do segundo carro: ")

const vel_definitiva = parseFloat(vel)
const vel_definitiva1 = parseFloat(vel1)

if (vel > vel1) {
    alert("A velocidade do " + carro + " é maior")
} else if (vel1 > vel) {
    alert("A velocidade do " + carro1 + "é maior")
}else if (vel == vel1) {
    alert("Velocidades iguais")
}