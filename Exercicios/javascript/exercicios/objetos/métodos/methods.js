//console.log
//typeof console: object
//console.log = função
// ".log" é um método do objeto console

let pessoa = {
    nome: Isaac,
    idade: 20,
    dizerOla() { //declaracao de metodo (method) dentro do objeto
        console.log("Hello, World! Meu nome é: " + this.nome)
    }
}

console.log(pessoa)

pessoa.dizerOla() //execucao do metodo