
console.log('Cliente arquivo js local está carregado')

fetch('http://puzzle.mead.io/puzzle').then((resposta) => {
    resposta.json().then((dado) => {
        console.log(dado)
    })
})


const formularioClima = document.querySelector('form')
const pesquisa = document.querySelector('input')

const mensagem_1 = document.querySelector('#mensagem-1')
mensagem_1.textContent = 'De JavaScript'


formularioClima.addEventListener('submit', (evento) => {
     evento.preventDefault()

     const local = pesquisa.value 

     fetch(`http://localhost:3000/clima?endereco=${local}`).then((resposta) => {
            resposta.json().then((dado) => {
                if (dado.erro) {
                    console.log(dado.erro)
                }
                else {
                    console.log(dado.localizacao)
                    console.log(dado.previsao)
                }
            })
     })
})













