const arquivo_sincronizado = require('fs')

const pegarNotas = function () {
    return 'Suas notas...'
}
 
const adicionarNota = function (titulo, corpo) {
    const notas = carregarNotas()  
}

const carregarNotas = function () {
    const dadoBuffer = arquivo_sincronizado.readFileSync('notas_criadas.json')
    const dadoJSON = dadoBuffer.toString()
    return JSON.parse(dadoJSON)
}

module.exports = {
    pegarNotas: pegarNotas,
    adicionarNota: adicionarNota
}

// executar node 005_notes.js