// CRUD create read update delete

const mongodb = require('mongodb')
const clienteMongo = mongodb.MongoClient

const conexaoURL = 'mongodb://127.0.0.1:27017'
const nomeBancoDados = 'gerenciador-tarefa'

clienteMongo.connect(conexaoURL, {useNewUrlParser: true}, (erro, cliente) => {
    if (erro) {
       return console.log('Não foi possível conectar ao banco de dados!')
    }

    console.log('Conectado corretamente!')
    const bancodados = cliente.db(nomeBancoDados)

    /* bancodados.collection('usuarios').insertOne({
        nome: 'Fulanis', idade: 28
    }, (erro, resultado) => {
        if (erro) {
           return console.log('Não foi possível inserir usuário')
        }
     
        console.log(resultado.ops)
     }) */

     /* bancodados.collection('usuarios').insertMany([
            { nome: 'Chan', idade: 21},
            { nome: 'Tom', idade: 30}
        ], (erro, resultado) => {
             if (erro) {
                return console.log('Não foi possível inserir usuário')
             }
          
             console.log(resultado.ops)
          }
     ) */

     bancodados.collection('tarefas').insertMany([
         {descricao: 'Codar em javascript', completo: true},
         {descricao: 'Ir ao mercado', completo: false},
         {descricao: 'Caminhada', completo: false}
     ], (erro, resultado) => {
        if (erro) {
           return console.log('Não foi possível inserir usuário')
        }
     
        console.log(resultado.ops)
     })
    
})



// node 1_mongodb.js