const request = require('request')

const geocode = require('./002.5_weather_app/geocode')
const previsao = require('./002.6exp_weather_app')

const endereco = process.argv[2]



console.log(process.argv)

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


// node 002.7_weather_app.js Boston
// node 002.7_weather_app.js 'Boston'

// node 002.7_weather_app.js 'New York'
// node 002.7_weather_app.js Philadelphia

