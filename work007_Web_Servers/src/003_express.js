const caminho = require('path')

const express = require('express')


const aplicacao = express()

const caminhoDiretorioPublic = caminho.join(__dirname, '../public/')

aplicacao.use(express.static(caminhoDiretorioPublic))


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
// localhost:3000/ajuda.html
// localhost:3000/sobre.html
// 
