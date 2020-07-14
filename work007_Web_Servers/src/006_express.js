const caminho = require('path')

const express = require('express')
const hbs = require('hbs')


const aplicacao = express()


// define caminhos para configuracao Express
const caminhoDiretorioPublic = caminho.join(__dirname, '../public/')
const caminhoViews = caminho.join(__dirname, '../templates/views')
const caminhoPartials = caminho.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
aplicacao.set('view engine', 'hbs')
aplicacao.set('views', caminhoViews)
hbs.registerPartials(caminhoPartials)

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
        textoAjuda: 'Isto é algum texto útil.',
        titulo: 'Ajuda',
        nome: 'Kyle Adams'
    })
})

aplicacao.get('/clima', (req, res) => {
    res.send({
        previsao: 'Sol', localizacao: 'Fortaleza'
    })
})

aplicacao.get('/ajuda/*', (req, res) => {
    res.send('Artigo Ajuda não encontrado')
})

aplicacao.get('*', (req, res) => {    // deve vir por último
    res.send('Minha 404 page')
})

aplicacao.listen(3000, () => {
    console.log('Servidor está funcionando na porta 3000')
})




// nodemon src/006_express.js -e js,hbs
// localhost:3000
// localhost:3000/ajuda
// localhost:3000/sobre
// 

// mudança do nome de 'views' para 'templates'
// localhost:3000/ajuda   o 'nodemon src/006_express.js' precisa ser reiniciado nodemon n funciona muito bem com html       
// nodemon src/006_express.js -e js,hbs  // roda sem problema

// localhost:3000/eu   ->  Cannot GET /eu
// localhost:3000/ajuda/dado... ou (+)   ->  Minha 404 page








