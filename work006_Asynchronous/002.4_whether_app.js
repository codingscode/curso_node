
const request = require('request')


const url = 'http://api.weatherstack.com/current?access_key=b8f519c2ac25ebbef2903c4bde501052&query='
                                                                                                                    // ?key=value&otherKey=otherValue
request({url: url, json: true}, (erro, resposta) => {
    if (erro) {
       //console.log('***', erro)
       console.log('nao é possivel conectar ao serviço weather')
    }
    else {
        console.log(`Isto é atualmente: ${resposta.body.current.temperature} graus. Há uma probabilidade de precipitação de ${resposta.body.current.precip} %`)
    }
    
    //
})

/* const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGVyb25uZXMiLCJhIjoiY2tib2VjbHA0MHFlZjJ5bzZrcHJlN2g3ZSJ9.nFfsqkrzJ9HmMTyB-QMucw&limit=1'

request({url: geocodeURL, json: true}, (erro, resposta) => {
    const latitude = resposta.body.features[0].center[1]
    const longitude = resposta.body.features[0].center[0]
    console.log(`latitude: ${latitude}, longitude: ${longitude}`)
}) */


// node 002.4_whether_app.js
