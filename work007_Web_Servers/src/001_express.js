const express = require('express')

const aplicacao = express()

aplicacao.get('', (req, res) => {
    res.send('Olá Express')
 })

// app.com
// app.com/help
// app.com/about

aplicacao.listen(3000, () => {
    console.log('Servidor está funcionando na porta 3000')
})



// node 001_express.js ou node src/001_express.js
// localhost:3000
