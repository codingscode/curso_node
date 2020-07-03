const request = require('request')

const geocode = require('./002.5_weather_app/geocode')
const previsao = require('./002.6exp_weather_app')

const endereco = process.argv[2]

if (!endereco) {
    console.log('Por favor forneça um endereço.')
}
else {
    geocode(endereco, (erro, dado) => {  
        if (erro) {
            return console.log(erro)
        }
        
        previsao(dado.latitude, dado.longitude, (erro, dadoPrevisao) => {  
           if (erro) {
               return console.log(erro)
           }
   
           console.log(dado.localizacao)
           console.log(dadoPrevisao)
        })
    })
}

console.log('-------------------------')
console.log(process.argv)

// node 002.8_weather_app.js Boston
// node 002.8_weather_app.js 'Boston'

// node 002.8_weather_app.js 'New York'
// node 002.8_weather_app.js Philadelphia

// node 002.8_weather_app.js
// node 002.8_weather_app.js Boston
