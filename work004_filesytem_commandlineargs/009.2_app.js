const giz = require('chalk')
const yargs = require('yargs')
const notas = require('./009_notas') 

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
    handler(argv) {
        notas.adicionarNota(argv.titulo, argv.corpo)
    }
})

yargs.command({
    command: 'remover2',
    describe: 'remover uma nota',
    builder: {
        titulo: {
            describe: 'Titulo Nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notas.removerNota(argv.titulo)
    }
})

yargs.command({
    command: 'listar1',
    describe: 'Liste suas notas',
    handler() {
        notas.listarNotas()
    }
})

yargs.command({
    command: 'ler1',
    describe: 'Leia uma nota',
    builder: {
        titulo: {
           describe: 'Titulo Nota',
           demandOption: true,
           type: 'string'
        }
    },
    handler(argv) {
        notas.lerNota(argv.titulo)
    }
})


yargs.parse()
