
const request = require('request')


const url = 'http://api.weatherstack.com/current?access_key=senha&query=37.8267,-122.4233'

request({url: url, json: true}, (erro, resposta) => {
    /* const dado = JSON.parse(resposta.body)
    console.log(dado.current) */
    console.log(resposta.body.current)
})




// node 002.2_whether_app.js
