
setTimeout(() => {
    console.log('2 segundos')
}, 1000)

const nomes = ['toni', 'kyle', 'vicent', 'ben', 'ashley']

const nomescurtos = nomes.filter((nome) => {
    return nome.length <= 4
})

console.log(nomescurtos)

const geocode = (endereco, callback) => {
    setTimeout(() => {
        const dado = {latitude: 0, longitude: 0}
        callback(dado)
    }, 2000)
    
}

geocode('Philadelphia', (param) => {
    console.log(param)
})






