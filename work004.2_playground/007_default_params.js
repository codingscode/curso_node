const cumprimentador = (nome) => {
    console.log(`Olá ${nome}`)
}


cumprimentador('Zach')
cumprimentador()

console.log('-----------------')

const cumprimentador2 = (nome = 'usuário', idade) => {
    console.log(`Olá ${nome}`)
}


cumprimentador2('Sam')
cumprimentador2()

