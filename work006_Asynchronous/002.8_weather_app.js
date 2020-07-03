const request = require('request')

const geocode = require('./002.8.2_geocode')
const previsao = require('./002.8.1_previsao')

const endereco = process.argv[2]

if (!endereco) {
    console.log('Por favor forneça um endereço.')
}
else {
    geocode(endereco, (erro, {latitude, longitude, localizacao}) => {  
        if (erro) {
            return console.log(erro)
        }
        
        previsao(latitude, longitude, (erro, dadoPrevisao) => {  
           if (erro) {
               return console.log(erro)
           }
   
           console.log(localizacao)
           console.log(dadoPrevisao)
        })
    })
}

console.log('-------------------------')
console.log(process.argv)


/// node 002.8_weather_app.js 'Boston'

