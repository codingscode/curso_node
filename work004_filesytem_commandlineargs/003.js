// node 003.js
// node 003.js adicionar --title="coisas a comprar"
// node 003.js help
// node 003.js --version

const yargs = require("yargs")

console.log(process.argv)

// customizar yargs
yargs.version('1.1.0')

console.log('novo', yargs.argv)


