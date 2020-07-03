const https = require('https')

const url = 'https://xapi.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiaGVyb25uZXMiLCJhIjoiY2tib2VjbHA0MHFlZjJ5bzZrcHJlN2g3ZSJ9.nFfsqkrzJ9HmMTyB-QMucw&limit=1'
//const url = 'http://api.weatherstack.com/current?access_key=1494aff90574a6d475ddfb8a9a924ae8&query=40,-75'

const requisicao = https.request(url, (resposta) => {
    let dado = ''


    resposta.on('data', (pedaco) => {
        dado += pedaco.toString()
        //console.log(pedaco)        
    })

    resposta.on('end', () => {
        //console.log(dado)
        const corpo = JSON.parse(dado)
        console.log(corpo)
    })
})

requisicao.on('error', (erro) => {
    console.log('Um erro:', erro)
})

requisicao.end()



