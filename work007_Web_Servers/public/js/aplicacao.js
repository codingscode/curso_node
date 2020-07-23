
console.log('Cliente arquivo js local está carregado')

fetch('http://puzzle.mead.io/puzzle').then((resposta) => {
    resposta.json().then((dado) => {
        console.log(dado)
    })
})

/* fetch('http://localhost:3000/clima?endereco=!').then((resposta) => {
    resposta.json().then((dado) => {
        if (dado.erro) {
           console.log(dado.erro)
        }
        else {
           console.log(dado.localizacao)
           console.log(dado.previsao)
        }
    })
}) */


const formularioClima = document.querySelector('form')
const pesquisa = document.querySelector('input')

formularioClima.addEventListener('submit', (evento) => {
     evento.preventDefault()

     const local = pesquisa.value // valor da entrada

     console.log(local)
})













