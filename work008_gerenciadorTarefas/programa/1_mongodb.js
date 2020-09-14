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

    bancodados.collection('tarefas').updateMany({
        completo: false
    }, {
        $set: { completo: true }
    })
       .then((resultado) => {
           console.log(resultado.modifiedCount)
       }).catch((erro) => {
           console.log(erro)
       })

    /* bancodados.collection('usuarios').updateOne({
        _id: new ObjectID('5f54556dcfa65b42800d9714')
    }, {
         $inc: { idade: 4 }
    })
        .then((resultado) => {
            console.log(resultado)
        }).catch((erro) => {
            console.log(erro)
        }) */
    

    
})


/* bancodados.collection('usuarios').findOne({_id: new ObjectID('5f4f0ee4704db659dc1c4162')}, (erro, usuario) => {
     if (erro) {
        return console.log('Não foi possível encontrar')
     }

     console.log(usuario)
}) */
    
/* bancodados.collection('usuarios').find({idade: 21}).toArray((erro, usuarios) => {
    console.log(usuarios)
}) */
    
/* bancodados.collection('usuarios').find({idade: 21}).count((erro, contar) => {
    console.log(contar)
}) */

/* bancodados.collection('tarefas').findOne({_id: new ObjectID('5f4c4e0428fd8a3174c473ec')}, (erro, tarefa) => {
    console.log(tarefa)
})

bancodados.collection('tarefas').find({completo: false}).toArray((erro, tarefas) => {
    console.log(tarefas)
}) */

// node 1_mongodb.js

