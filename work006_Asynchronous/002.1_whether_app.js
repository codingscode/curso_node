
const request = require('request')


const url = 'http://api.weatherstack.com/current?access_key=senha&query=37.8267,-122.4233'

request({url: url}, (erro, resposta) => {
    const dado = JSON.parse(resposta.body)
    console.log(dado)
})




// node 002.1_whether_app.js
