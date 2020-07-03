const request = require('request')

const prever = (latitude, longitude, funcao) => {
    const url = `http://api.weatherstack.com/current?access_key=1494aff90574a6d475ddfb8a9a924ae8&query=${latitude},${longitude}`
    
    console.log(url)
    request({url, json: true}, (erro, {body}) => {
       if (erro) {
           funcao('Não é possivel conectar ao servico weather', undefined)
       }
       else if (body.error) {
           funcao('Não é possíve encontrar localização', undefined)
       }
       else {
           funcao(undefined, `Isto é atualmente: ${body.current.temperature} graus. Há uma probabilidade de precipitação de ${body.current.precip} %`)
       }
    })
}

module.exports = prever
