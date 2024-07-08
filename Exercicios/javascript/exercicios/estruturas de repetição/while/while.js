let velocidade = 80

while (velocidade > 0) {
    alert("O carro está a " + velocidade + " km/h")
    velocidade -= 20
    alert("diminuindo 20km/h") 
//combinar a condiçãop com a repetição cria uma parada forçada. Neste caso, quando a velocidade for 60, ele irá mostrar o primeiro alert, diminuir os 20 e depois parar.
        if (velocidade === 40) {
            break
        }
}
alert("o carro morreu.")