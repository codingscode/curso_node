// CRUD create read update delete

/* const mongodb = require('mongodb')
const clienteMongo = mongodb.MongoClient
const ObjectID = mongodb.ObjectID */

const { MongoClient, ObjectID } = require('mongodb')



const conexaoURL = 'mongodb://127.0.0.1:27017'
const nomeBancoDados = 'gerenciador-tarefa'

/* const id = new ObjectID()
console.log(id.id)
console.log(id.id.length)
console.log(id.toHexString())
console.log(id.toHexString().length) */


MongoClient.connect(conexaoURL, {useNewUrlParser: true}, (erro, cliente) => {
    if (erro) {
       return console.log('Não foi possível conectar ao banco de dados!')
    }

    console.log('Conectado corretamente!')
    const bancodados = cliente.db(nomeBancoDados)

    bancodados.collection('usuarios').findOne({nome: 'Chan'}, (erro, usuario) => {
         if (erro) {
            return console.log('Não foi possível encontrar')
         }
   
         console.log(usuario)
    })


    
})



// node 1_mongodb.js