// Promises

const trabalharPromise = new Promise((resolver, rejeitar) => {
    setTimeout(() => {
        //resolver([4, 5, 6])
        rejeitar('Coisas deram errado!')
        resolver([10, 11, 12])
    }, 2000)
})

trabalharPromise.then((resultado) => {
    console.log('Sucesso', resultado)
}).catch((erro) => {
    console.log('Erro', erro)
})



// node 008_promises.js