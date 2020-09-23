const mongoose = require('mongoose')
const validador = require('validator')


mongoose.connect('mongodb://127.0.0.1:27017/gerenciador-tarefa-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const Usuario = mongoose.model('Usuario', {
    nome: { type: String, required: true, trim: true },
    idade: {
        type: Number,
        default: 0,
        validate(valor) {
            if (valor < 0) {
                throw new Error('idade deve ser um valor positivo')
            }
        }
    },
    email: { 
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(valor) {
            if (!validador.isEmail(valor)) {
                throw new Error('Email inválido')
            }
        }
     },
     senha: { type: String, required: true, minlength: 7, trim: true,
        validate(valor) {
            if (valor.toLowerCase().includes('senha')) {
               throw new Error('Senha não pode conter "senha"')
            }
        }
    }
})

const eu = new Usuario({
    nome: '  Tom  ', email: 'TOMTECHIT@GMAIL.COM         ', senha: 'Senha123'
})

eu.save().then((res) => {
    console.log('res:', res)
 }).catch((erro) => {
    console.log('Erro:', erro)
 })

const Tarefa = mongoose.model('Tarefa', {
    descricao: { type: String },
    completo: { type: Boolean }
})

/* const tarefa = new Tarefa({
    descricao: 'Aprender a biblioteca Mongoose', completo: false
})

tarefa.save().then((tarefa) => {
    console.log('tarefa:', tarefa)
}).catch((erro) => {
    console.log('erro:', erro)
}) */





// node src/db/mongoose.js


