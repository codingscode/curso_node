// node 002.js
// node 002.js adicionar --title="coisas a comprar"
// node 002.js help
// node 002.js --version

const yargs = require("yargs")


console.log(process.argv)
console.log(yargs.argv)

// customizar yargs
yargs.version('1.1.0')

console.log('novo', yargs.argv)


