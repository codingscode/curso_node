const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/gerenciador-tarefa-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const Usuario = mongoose.model('Usuario', {
    nome: { type: String },
    idade: { type: Number }
})

const Tarefa = mongoose.model('Tarefa', {
    descricao: { type: String },
    completo: { type: Boolean }
})

const tarefa = new Tarefa({
    descricao: 'Aprender a biblioteca Mongoose', completo: false
})

tarefa.save().then((tarefa) => {
    console.log('tarefa:', tarefa)
}).catch((erro) => {
    console.log('erro:', erro)
})

/*

const eu = new Usuario({
    nome: 'Bob',
    idade: 20
})

eu.save().then((res) => {
    console.log('res:', res)
 }).catch((erro) => {
    console.log('Erro:', erro)
 })
 */

// node src/db/mongoose.js


