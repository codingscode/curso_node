
console.log('Cliente arquivo js local está carregado')

fetch('http://puzzle.mead.io/puzzle').then((resposta) => {
    resposta.json().then((dado) => {
        console.log(dado)
    })
})





