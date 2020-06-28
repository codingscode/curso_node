const request = require('request')

const geocode = require('./002.5_weather_app/geocode')
const previsao = require('./002.6exp_weather_app')


geocode('Boston', (erro, dado) => {  
     if (erro) {
         return console.log(erro)
     }
     
     console.log('Erro', erro)    
     console.log('Dado', dado)
   
     previsao(dado.latitude, dado.longitude, (erro, dado) => {  
        console.log('Erro:', erro)
        console.log('Dado:', dado)
     })
          
})


// node 002.7_weather_app.js