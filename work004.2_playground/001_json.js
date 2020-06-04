const arquivo_sincronizado = require('fs')

const livro = {
    titulo: 'Ego é o inimigo',
    autor: 'Ryan Holiday'
}

console.log(livro, typeof livro)
console.log(livro.titulo)
console.log(livro.autor)
console.log('-------------------')

const livroJson = JSON.stringify(livro)

console.log(livroJson, typeof livroJson)
console.log(livroJson.titulo)
console.log(livroJson.autor)
console.log('-------------------')

const paraObjeto = JSON.parse(livroJson)
console.log(paraObjeto, typeof paraObjeto)
console.log(paraObjeto.titulo)
console.log(paraObjeto.autor)

console.log('-------------------')

arquivo_sincronizado.writeFileSync('001.2_json.json', livroJson)  // executar node 001_json.js


console.log('-------------------')
console.log('-------------------')
console.log('-------------------')