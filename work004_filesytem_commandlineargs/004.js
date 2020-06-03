// node 004.js
// node 004.js adicionar --title="coisas a comprar"
// node 004.js help
// node 004.js --version
//outro1: node 004.js --help
//outro2: node 004.js adicionar2
//outro3: node 004.js --help
//outro4: node 004.js remover2
//outro5: node 004.js listar1
//outro6: node 004.js ler1


//node 004.js adicionar2 --title="lista de compras"
//node 004.js adicionar2 



const yargs = require("yargs")

console.log(process.argv)

// criar add command, usar o (outro1, 2)
yargs.command({
    command: 'adicionar2',
    describe: 'adicionar uma nova nota',
    builder: {
      title: {
         describe: 'Título Nota'
      }
    },
    handler: function (argv) {
        console.log('Adicionando uma nova nota', argv)
    }
})

// criar remove command, usar o (outro3, 4)
yargs.command({
    command: 'remover2',
    describe: 'remover uma nota',
    handler: function () {
        console.log('Removendo uma nota')
    }
})

// criar list command,   (5)
yargs.command({
    command: 'listar1',
    describe: 'Liste suas notas',
    handler: function() {
        console.log('Listando todas suas notas')
    }
})

// criar read command,    (6)
yargs.command({
    command: 'ler1',
    describe: 'Leia uma nota',
    handler: function() {
        console.log('Lendo uma nota')
    }
})

// customizar yargs
yargs.version('1.1.0')

console.log('novo', yargs.argv)


