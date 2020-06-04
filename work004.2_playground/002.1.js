const arquivo_sincronizado = require('fs')

const dadoBuffer = arquivo_sincronizado.readFileSync('./002.2_json.json')
const dadoJSON = dadoBuffer.toString()
const usuario = JSON.parse(dadoJSON)

usuario.nome = 'Tom'
usuario.idade = 19

const usuarioJSON = JSON.stringify(usuario)
arquivo_sincronizado.writeFileSync('./002.2_json.json', usuarioJSON)

// executar node 002.1.js

