
const request = require('request')


/* const url = 'http://api.weatherstack.com/current?access_key=senha&query=37.8267,-122.4233'
                                                                                                                    // ?key=value&otherKey=otherValue
request({url: url, json: true}, (erro, resposta) => {
    if (erro) {
       //console.log('***', erro)
        console.log('nao é possivel conectar ao serviço weather')
    }
    else if (resposta.body.error) {
        console.log('não é possível encontrar a localização')
    }
    else {
        console.log(`Isto é atualmente: ${resposta.body.current.temperature} graus. Há uma probabilidade de precipitação de ${resposta.body.current.precip} %`)
    }
    
    //
}) */

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoiaGVyb25uZXMiLCJhIjoiY2tib2VjbHA0MHFlZjJ5bzZrcHJlN2g3ZSJ9.nFfsqkrzJ9HmMTyB-QMucw&limit=1'

request({url: geocodeURL, json: true}, (erro, resposta) => {
    if (erro) {
        console.log('nao foi possivel conectar ao servico de localização')
    }
    else if (resposta.body.features.length === 0) {
        console.log('não é possivel encontrar localização. Tente outra pesquisa.')
    }
    else {
        const latitude = resposta.body.features[0].center[1]
        const longitude = resposta.body.features[0].center[0]
        console.log(`latitude: ${latitude}, longitude: ${longitude}`)
    }
    
})


// node 002.4_whether_app.js
