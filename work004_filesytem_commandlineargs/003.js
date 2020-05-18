// node 003.js
// node 003.js adicionar --title="coisas a comprar"
// node 003.js help
// node 003.js --version
//outro1: node 003.js --help
//outro2: node 003.js adicionar2

const yargs = require("yargs")

console.log(process.argv)

// criar add command, usar o (outro1)
yargs.command({
    command: 'adicionar2',
    describe: 'adicionar uma nova nota',
    handler: function () { console.log('Adicionando uma nova nota')}
})


// customizar yargs
yargs.version('1.1.0')

console.log('novo', yargs.argv)


