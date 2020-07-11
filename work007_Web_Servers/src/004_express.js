const caminho = require('path')

const express = require('express')


const aplicacao = express()


// define caminhos para configuracao Express
const caminhoDiretorioPublic = caminho.join(__dirname, '../public/')
const caminhoViews = caminho.join(__dirname, '../templates')

// Setup handlebars engine and views location
aplicacao.set('view engine', 'hbs')
aplicacao.set('views', caminhoViews)

// Setup static directory to serve
aplicacao.use(express.static(caminhoDiretorioPublic))

aplicacao.get('', (req, res) => {
    res.render('index', {
        titulo: 'Aplicação de Clima',
        nome: 'Kyle Adams'
    })
})

aplicacao.get('/sobre', (req, res) => {
    res.render('sobre', {
        titulo: 'Sobre mim', nome: 'Kyle Adams'
    })
})

aplicacao.get('/ajuda', (req, res) => {
    res.render('ajuda', {
        textoAjuda: 'Isto é algum texto útil.'
    })
})

aplicacao.get('/clima', (req, res) => {
    res.send({
        previsao: 'Sol', localizacao: 'Fortaleza'
    })
})


aplicacao.listen(3000, () => {
    console.log('Servidor está funcionando na porta 3000')
})




// nodemon src/004_express.js
// localhost:3000
// localhost:3000/ajuda
// localhost:3000/sobre
// 

// mudança do nome de 'views' para 'templates'











