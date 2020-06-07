const arquivo_sincronizado = require('fs')

const pegarNotas = function () {
    return 'Suas notas...'
}
 
const adicionarNota = function (titulo, corpo) {
    const notas = carregarNotas()
    console.log(notas)  
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
