const arquivo_sincronizado = require('fs')

const pegarNotas = function () {
    return 'Suas notas...'
}
 
const adicionarNota = function (titulo, corpo) {
    const notas = carregarNotas()
    const notasDuplicadas = notas.filter(function (nota) {
        return nota.titulo === titulo
    })

    if (notasDuplicadas.length === 0) {
        notas.push({
            titulo: titulo,
            corpo: corpo
        })
        salvarNotas(notas)
        console.log('Nova nota adicionada.')    
    }
    else {
        console.log('Nova nota ocupada')
    }

    //console.log(notas)   
}

const salvarNotas = function (notas) {
    const dadoJSON = JSON.stringify(notas)
    arquivo_sincronizado.writeFileSync('notas_criadas2.json', dadoJSON)
}

const carregarNotas = function () {
    try {
        const dadoBuffer = arquivo_sincronizado.readFileSync('notas_criadas2.json') //
        const dadoJSON = dadoBuffer.toString()
        return JSON.parse(dadoJSON)
    }
    catch(errro) {
        return []
    }
    
}

module.exports = {
    pegarNotas: pegarNotas,
    adicionarNota: adicionarNota
}

// executar node 007.2_app.js
// executar node 007.2_app.js adicionar2 --titulo="t" --corpo="c"
//  node 007.2_app.js adicionar2 --titulo="t" --corpo="c"

//  node 007.2_app.js adicionar2 --titulo="Lista" --corpo="camisa, calças"
//  node 007.2_app.js adicionar2 --titulo="Lista 2" --corpo="alicate, extensão, pendrive, hd externo"
