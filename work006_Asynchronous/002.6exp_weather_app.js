const request = require('request')

const prever = (latitude, longitude, funcao) => {
    const url = `http://api.weatherstack.com/current?access_key=b8f519c2ac25ebbef2903c4bde501052&query=${latitude},${longitude}`

    request({url: url, json: true}, (erro, resposta) => {
       if (erro) {
           funcao('Não é possivel conectar ao servico weather', undefined)
       }
       else if (resposta.body.error) {
           funcao('Não é possíve encontrar localização', undefined)
       }
       else {
           funcao(undefined, `Isto é atualmente: ${resposta.body.current.temperature} graus. Há uma probabilidade de precipitação de ${resposta.body.current.precip} %`)
       }
    })
}

module.exports = prever
