
const request = require('request')

const previsao = require('./002.6exp_weather_app')


geocode('Philadelphia', (erro, dado) => {  
     console.log('Erro', erro)    
     console.log('Dado', dado)
})


previsao(75.7088, 44.1545, (erro, dado) => {   // ???
    console.log('Erro:', erro)
    console.log('Dado:', dado)
})

// node 002.6_weather_app.js
