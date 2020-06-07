const giz = require('chalk')
const yargs = require('yargs')
const notas = require('./005_notes.js')

yargs.version('1.1.0')

yargs.command({
    command: 'adicionar2',
    describe: 'adicionar uma nova nota',
    builder: {
        titulo: {
            describe: 'Título Nota',
            demandOption: true, // false
            type: 'string' // comentar
        },
        corpo: {
            describe: 'corpo Nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notas.adicionarNota(argv.titulo, argv.corpo)
    }
})

yargs.command({
    command: 'remover2',
    describe: 'remover uma nota',
    handler: function () {
        console.log('Removendo uma nota')
    }
})

yargs.command({
    command: 'listar1',
    describe: 'Liste suas notas',
    handler: function() {
        console.log('Listando todas suas notas')
    }
})

yargs.command({
    command: 'ler1',
    describe: 'Leia uma nota',
    handler: function() {
        console.log('Lendo uma nota')
    }
})


yargs.parse()
