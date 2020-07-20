const caminho = require('path')

const express = require('express')
const hbs = require('hbs')
const geocode = require('./006_paralelo/006_geocode')
const previsao = require('./006_paralelo/006_previsao')

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
    if (!req.query.endereco) {
        return res.send({
           erro: 'Você deve fornecer um endereço'
        })
    }

    geocode(req.query.endereco, (erro, {latitude, longitude, localizacao}) => {
        if (erro) {
           return res.send({erro: erro}) // ou só {erro}
        }
    
        previsao(latitude, longitude, (erro, dadoPrevisao) => {
           if (erro) {
              return res.send({erro: erro})  // ou só {erro}
           }
    
           res.send({
              previsao: dadoPrevisao,
              localizacao, //localizacao: localizacao
              endereco: req.query.endereco
           })
        })
     })


    /* res.send({
        previsao: 'Sol', localizacao: 'Fortaleza', endereco: req.query.endereco
    }) */
})

aplicacao.get('/produtos', (req, res) => {
    if (!req.query.search) {
        return res.send({
           erro: 'você deve fornecer um termo de pesquisa'
        })
    }

    console.log(req.query.search)
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
// nodemon src/006_express.js -e js,hbs  // roda sem problema

// localhost:3000/eu   ->  Cannot GET /eu
// localhost:3000/ajuda/dado... ou (+)   ->  Minha 404 page
// localhost:3000/eita
// localhost:3000/ajuda/eita
// localhost:3000/produtos
// localhost:3000/produtos?search=jogos   -> {"produtos":[]} , { search: 'jogos'}
// localhost:3000/produtos?search=jogos&rating=5  -> {"produtos":[]},  { search: 'jogos', rating: '5' }
// localhost:3000/produtos  -> no browser {"erro":"você deve fornecer um termo de pesquisa"}

// obs: Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client, evita-se o erro com return
// localhost:3000/produtos?search=jogos&rating=5  -> jogos
// localhost:3000/clima -> no browser: {"previsao":"Sol","localizacao":"Fortaleza"}
// localhost:3000/clima -> depois no browser: {"erro":"Você deve fornecer um endereço"}
// localhost:3000/clima?endereco=fortaleza -> depois no browser: {"previsao":"Sol","localizacao":"Fortaleza"}
// localhost:3000/clima?endereco=fortaleza -> browser: {"previsao":"Sol","localizacao":"Fortaleza","endereco":"fortaleza"}
// localhost:3000/clima?endereco=blumenau -> browser: {"previsao":"Sol","localizacao":"Fortaleza","endereco":"blumenau"}
// localhost:3000/clima?endereco=boston   -->  {"previsao":"Isto é atualmente: 27 graus. Há uma probabilidade de precipitação de 0 %","localizacao":"Boston, Massachusetts, United States","endereco":"boston"}
// localhost:3000/clima?endereco=newyork
// localhost:3000/clima?endereco=!

