const arquivo_sincronizado = require('fs')

const pegarNotas = function () {
    return 'Suas notas...'
}
 
const adicionarNota = function (titulo, corpo) {
    const notas = carregarNotas()
    notas.push({
        titulo: titulo,
        corpo: corpo
    })
    
    //console.log(notas)
    salvarNotas(notas)     
}

const salvarNotas = function (notas) {
    const dadoJSON = JSON.stringify(notas)
    arquivo_sincronizado.writeFileSync('notas_criadas.json', dadoJSON)
}

const carregarNotas = function () {
    try {
        const dadoBuffer = arquivo_sincronizado.readFileSync('notas_criadas.json') //
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

// executar node 006_app.js
// executar node 006_app.js adicionar2 --titulo="t" --corpo="c"
//  node 006_app.js adicionar2 --titulo="t" --corpo="c"
