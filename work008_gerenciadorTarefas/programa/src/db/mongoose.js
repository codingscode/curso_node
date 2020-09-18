const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/gerenciador-tarefa-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const Usuario = mongoose.model('Usuario', {
    nome: { type: String },
    idade: { type: String }
})

const eu = new Usuario({
    nome: 'Fulanis',
    idade: 21
})

eu.save().then((res) => {
    console.log('res:', res)
 }).catch((erro) => {
    console.log('Erro:', erro)
 })


// node src/db/mongoose.js


