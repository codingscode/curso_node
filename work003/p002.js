// as cores só funcionam no terminal -> node p002.js

const acessarNotas = require('./notas')
const mensagem = acessarNotas

console.log(mensagem)
console.log('-------------------\n')

const giz = require('chalk')

console.log(giz.green('Com sucesso!'))
console.log(giz.green.bold('Com sucesso2!'))
console.log(giz.magentaBright.inverse.bold('Com sucesso!'))

const chalk = require('chalk')
 
const error = chalk.bold.red
const warning = chalk.keyword('orange')
 
console.log(error('Error!'))
console.log(warning('Warning!'))

