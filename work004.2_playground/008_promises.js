// Promises

const trabalharPromise = new Promise((resolver, rejeitar) => {
    setTimeout(() => {
        //resolver([4, 5, 6])
        rejeitar('Coisas deram errado!')
        rejeitar('Novo erro !')
    }, 2000)
})

trabalharPromise.then((resultado) => {
    console.log('Sucesso', resultado)
}).catch((erro) => {
    console.log('Erro', erro)
})



// node 008_promises.js