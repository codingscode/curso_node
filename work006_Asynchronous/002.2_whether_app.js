
const request = require('request')


const url = 'http://api.weatherstack.com/current?access_key=senha&query=37.8267,-122.4233?units=si'
                                                                                                                    // ?key=value&otherKey=otherValue
request({url: url, json: true}, (erro, resposta) => {
    //console.log(resposta.body.current)
    console.log(`Isto é atualmente: ${resposta.body.current.temperature} graus. Há uma probabilidade de precipitação de ${resposta.body.current.precip} %`)
})




// node 002.2_whether_app.js
