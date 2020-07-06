const express = require('express')

const aplicacao = express()

aplicacao.get('', (req, res) => {
    res.send('Olá Express')
})

aplicacao.get('/ajuda', (req, res) => {
    res.send('Página de Ajuda')
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



// node 001_express.js ou node src/001_express.js
// localhost:3000
// nodemon src/001_express.js
// localhost:3000/ajuda
// localhost:3000/outro
