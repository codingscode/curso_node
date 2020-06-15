const arquivo_sincronizado = require('fs')
const chalk = require('chalk')

 
const adicionarNota = (titulo, corpo) => {
    const notas = carregarNotas()
    
    const notaDuplicada = notas.find((cada) => cada.titulo === titulo)

    debugger

    if (!notaDuplicada) {
        notas.push({
            titulo: titulo,
            corpo: corpo
        })
        salvarNotas(notas)
        console.log(chalk.green.inverse('Nova nota adicionada.'))    
    }
    else {
        console.log(chalk.red.inverse('Nova nota ocupada'))
    }

    //console.log(notas)   
}

const removerNota = (titulo) => {
    const notas = carregarNotas()
    const notasparamanter = notas.filter((nota) => nota.titulo !== titulo)

    if (notas.length > notasparamanter.length) {
        console.log(chalk.green.inverse('Nota removida'))
        salvarNotas(notasparamanter)
    }
    else {
        console.log(chalk.red.inverse('Nenhuma nota encontrada'))
    }
}

const listarNotas = () => {
    const notas = carregarNotas()

    console.log(chalk.inverse('Suas notas'))

    notas.forEach((cada) => {
        console.log(cada.titulo)
    });
}

const lerNota = (titulo) => {
    const notas = carregarNotas()
    const nota = notas.find((cada) => cada.titulo === titulo)

    if (nota) {
        console.log(chalk.inverse(nota.titulo))
        console.log(nota.corpo)
    }
    else {
        console.log(chalk.red.inverse('Nota não encontrada!'))
    }
}

const salvarNotas = (notas) => {
    const dadoJSON = JSON.stringify(notas)
    arquivo_sincronizado.writeFileSync('notas_criadas1.json', dadoJsON)  // de proposito
}

const carregarNotas = () => {
    try {
        const dadoBuffer = arquivo_sincronizado.readFileSync('notas_criadas1.json') //
        const dadoJSON = dadoBuffer.toString()
        return JSON.parse(dadoJSON)
    }
    catch(errro) {
        return []
    }
    
}

module.exports = {
    adicionarNota: adicionarNota,
    removerNota: removerNota,
    listarNotas: listarNotas,
    lerNota: lerNota
}

// executar node 002.2_app.js
// executar node 002.2_app.js adicionar2 --titulo="t" --corpo="c"
//  node 002.2_app.js adicionar2 --titulo="t" --corpo="c"

//  node 002.2_app.js adicionar2 --titulo="Lista" --corpo="camisa, calças"
//  node 002.2_app.js adicionar2 --titulo="Lista 2" --corpo="alicate, extensão, pendrive, hd externo"

//  node 002.2_app.js remover2 --titulo="algum titulo"
//  node 002.2_app.js remover2 --titulo="Lista 3"
//  node 002.2_app.js remover2 --titulo="Lista 2"

// node 002.2_app.js listar1

// node 002.2_app.js ler1 --titulo="Lista"

//  node 002.2_app.js adicionar2 --titulo="Cursos" --corpo="node.js"
//  node --inspect-brk 002.2_app.js adicionar2 --titulo="Cursos" --corpo="node.js"

//  node 002.2_app.js adicionar2 --titulo="Mensagem de Erro" --corpo="execute o"
