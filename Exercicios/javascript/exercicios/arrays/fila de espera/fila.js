// fila de espera. deve conter opção de adicionar paciente (ao fim da fila = push) e consultar paciente (remover do topo da fila = shift) 

let fila = [] //nome do paciente
let opcao = "" // opcao entre adicionar, consultar e sair.

do{
    let pacientes = ""
    for(i == 0; i < fila.length; i++) {
        pacientes += (i + 1) + "º -" + fila [i] + "\n" //serve para retornar o indice da fila, mas sem contar a partir do zero. 
    }

    opcao = prompt(
        "Pacientes:\n" + pacientes + 
        "Escolha uma ação: \n" +
        "1. Adicionar paciente \n2. Consultar paciente\n3.Sair"
    )
        switch (opcao) {
            case "1" :
                const novoPaciente = prompt("Insira o nome do novo paciente: ")
                fila.push(novoPaciente)
            break
            case "2" : 
                const pacienteConsultado = fila.shift(pacienteConsultado)
                alert("O paciente" + pacienteConsultado + "foi removido da fila")
            break
            case "3" :
            alert("Encerrando...")
            break
            default:
                alert("Comando errado")
            break
            }
} while (opcao !== "3")
