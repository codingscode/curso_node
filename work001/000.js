// Só exemplo
const getUser = require('./getUser.js')

getUser(1, (user) => {
   console.log(user)
})

getUser(2, (user) => {
   console.log(user)
})

const soma = 1 + 33
console.log(soma)