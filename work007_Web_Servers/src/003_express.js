const express = require('express')

console.log('1:', __dirname)
console.log('2:', __filename)

const aplicacao = express()

aplicacao.get('', (req, res) => {
    res.send('<h1>Clima</h1>')
})

aplicacao.get('/ajuda', (req, res) => {
    res.send([
        {nome: 'Kyle', idade: 19},
        {nome: 'sam'}
    ])
})

aplicacao.get('/sobre', (req, res) => {
    res.send('<h1>Sobre</h1>')
})

aplicacao.get('/clima', (req, res) => {
    res.send({
        previsao: 'Sol', localizacao: 'Fortaleza'
    })
})


aplicacao.listen(3000, () => {
    console.log('Servidor está funcionando na porta 3000')
})




// nodemon src/003_express.js
// localhost:3000
// localhost:3000/ajuda será um json
// 
