// Promises

const trabalharPromise = new Promise((resolver, rejeitar) => {
    setTimeout(() => {
        resolver([4, 5, 6])
    }, 2000)
})

trabalharPromise.then((resultado) => {
    console.log('Sucesso', resultado)
})



// node 008_promises.js