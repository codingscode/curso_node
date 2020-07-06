const express = require('express')

const aplicacao = express()

aplicacao.get('', (req, res) => {
    res.send('<h1>Clima</h1>')
})

aplicacao.get('/ajuda', (req, res) => {
    res.send({
        nome: 'Kyle', idade: 19
    })
})

aplicacao.get('/sobre', (req, res) => {
    res.send('Sobre')
})

aplicacao.get('/clima', (req, res) => {
    res.send('Seu Clima')
})

// app.com
// app.com/help
// app.com/about

aplicacao.listen(3000, () => {
    console.log('Servidor está funcionando na porta 3000')
})




// nodemon src/002_express.js
// localhost:3000
// localhost:3000/ajuda será um json
// 
