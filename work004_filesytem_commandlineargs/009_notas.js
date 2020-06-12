const arquivo_sincronizado = require('fs')
const chalk = require('chalk')



const pegarNotas = () => {
    return 'Suas notas...'
}
 
const adicionarNota = (titulo, corpo) => {
    const notas = carregarNotas()
    const notasDuplicadas = notas.filter((nota) => nota.titulo === titulo)

    if (notasDuplicadas.length === 0) {
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

const salvarNotas = (notas) => {
    const dadoJSON = JSON.stringify(notas)
    arquivo_sincronizado.writeFileSync('notas_criadas3.json', dadoJSON)
}

const carregarNotas = () => {
    try {
        const dadoBuffer = arquivo_sincronizado.readFileSync('notas_criadas3.json') //
        const dadoJSON = dadoBuffer.toString()
        return JSON.parse(dadoJSON)
    }
    catch(errro) {
        return []
    }
    
}

module.exports = {
    pegarNotas: pegarNotas,
    adicionarNota: adicionarNota,
    removerNota: removerNota,
    listarNotas: listarNotas
}

// executar node 009.2_app.js
// executar node 009.2_app.js adicionar2 --titulo="t" --corpo="c"
//  node 009.2_app.js adicionar2 --titulo="t" --corpo="c"

//  node 009.2_app.js adicionar2 --titulo="Lista" --corpo="camisa, calças"
//  node 009.2_app.js adicionar2 --titulo="Lista 2" --corpo="alicate, extensão, pendrive, hd externo"

//  node 009.2_app.js remover2 --titulo="algum titulo"
//  node 009.2_app.js remover2 --titulo="Lista 3"
//  node 009.2_app.js remover2 --titulo="Lista 2"

// node 009.2_app.js listar1
