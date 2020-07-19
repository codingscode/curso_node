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
        nome: 'Kyle Fulanis'
    })
})

aplicacao.get('/sobre', (req, res) => {
    res.render('sobre', {
        titulo: 'Sobre mim', nome: 'Kyle Fulanis'
    })
})

aplicacao.get('/ajuda', (req, res) => {
    res.render('ajuda', {
        textoAjuda: 'Isto é algum texto útil.',
        titulo: 'Ajuda',
        nome: 'Kyle Fulanis'
    })
})

aplicacao.get('/clima', (req, res) => {
    res.send({
        previsao: 'Sol', localizacao: 'Fortaleza'
    })
})

aplicacao.get('/produtos', (req, res) => {
    console.log(req.query.search)  // jogos
    res.send({
        produtos: []
    })
})

aplicacao.get('/ajuda/*', (req, res) => {
    res.render('404', {
        titulo: '404',
        nome: 'Kyle Fulanis',
        mensagemErro: 'Artigo Ajuda não encontrado'
    })
})

aplicacao.get('*', (req, res) => {    // deve vir por último
    res.render('404', {
        titulo: '404',
        nome: 'Kyle Fulanis',
        mensagemErro: 'Página não encontrada'
    })
})

aplicacao.listen(3000, () => {
    console.log('Servidor está funcionando na porta 3000')
})




// nodemon src/006_express.js -e js,hbs
// localhost:3000
// localhost:3000/ajuda
// localhost:3000/sobre
// 

// nodemon src/006_express.js -e js,hbs  // roda sem problema

// localhost:3000/eu   ->  Cannot GET /eu
// localhost:3000/ajuda/dado... ou (+)   ->  Minha 404 page
// localhost:3000/eita
// localhost:3000/ajuda/eita
// localhost:3000/produtos
// localhost:3000/produtos?search=jogos   -> {"produtos":[]} , { search: 'jogos'}
// localhost:3000/produtos?search=jogos&rating=5  -> {"produtos":[]},  { search: 'jogos', rating: '5' }
// localhost:3000/produtos?search=jogos&rating=5  -> jogos





