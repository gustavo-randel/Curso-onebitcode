// parâmetro == entrada 
function dobro(x) {
    alert("o dobro de" + x + "é" + (x * 2))
}

function criarUsuario (nome, email, senha, tipo = "gay") {
    const usuario = {
        nome, // == nome = nome 
        email,
        senha,
        tipo 
    }
    console.log(usuario)
}

criarUsuario("ensinho", "ensinhopelado@gmail.com", "enzolol01" )



// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto

const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    aniversario: "",
    endereco: ""
}


function coletarUsuario(usuario) {
   dadosDoUsuario.nome = usuario.nome
   dadosDoUsuario.telefone =usuario.telefone
   dadosDoUsuario.email = usuario.email
   dadosDoUsuario.senha = usuario.senha
   dadosDoUsuario.aniversario =usuario.aniversario
   dadosDoUsuario.endereco = usuario.endereco
  
  // Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante

} coletarUsuario(dadosDoUsuario)

console.log(usuario)