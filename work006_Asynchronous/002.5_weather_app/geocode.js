const request = require('request')

const geocode = (endereco, funcao) => {
    const link = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(endereco)}.json?access_token=pk.eyJ1IjoiaGVyb25uZXMiLCJhIjoiY2tib2VjbHA0MHFlZjJ5bzZrcHJlN2g3ZSJ9.nFfsqkrzJ9HmMTyB-QMucw&limit=1`
    
    request({url: link, json: true}, (erro, resposta) => {
        if (erro) {
           funcao('nao foi possivel conectar ao servico de localizacao!', undefined)
        }
        else if (resposta.body.features.length === 0) { 
           funcao('nao foi possivel encontrar localizacao. Tente outra busca.', undefined)
        }
        else {
            funcao(undefined, {
                latitude: resposta.body.features[0].center[1],
                longitude: resposta.body.features[0].center[0],
                localizacao: resposta.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
