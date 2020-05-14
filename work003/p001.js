

const validador = require('validator')

const acessarNotas = require('./notas')

const mensagem = acessarNotas

console.log(mensagem)
console.log('-------------')
console.log('o email é válido? : ' + validador.isEmail('fulanis@gmail.com'))
console.log('o email é válido? : ' + validador.isEmail('ciclanisgmail.com'))
console.log('----------------')
console.log('a url é válida? : ' + validador.isURL('https://www.google.com'))
console.log('a url é válida? : ' + validador.isURL('https://googlecomxsdsd'))