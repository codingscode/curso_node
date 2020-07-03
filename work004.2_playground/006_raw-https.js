const https = require('https')

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiaGVyb25uZXMiLCJhIjoiY2tib2VjbHA0MHFlZjJ5bzZrcHJlN2g3ZSJ9.nFfsqkrzJ9HmMTyB-QMucw&limit=1'
//const url = 'http://api.weatherstack.com/current?access_key=1494aff90574a6d475ddfb8a9a924ae8&query=40,-75'

https.request(url, (resposta) => {
    let dado = ''


    resposta.on('dado', (pedaco) => {
        console.log(pedaco)        
    })

    resposta.on('fim', () => {
        
    })
})





