
// play normal ou node 001.js no terminal da pasta
// node 001.js xxxxx no terminal da pasta
console.log(process.argv)

console.log('-----------------------\n')

console.log('o 1º: ' + process.argv[0])
console.log('o 2º: ' + process.argv[1])
console.log(process.argv[0])

console.log('-----------------------\n')

// terminal
// 1ª part  2ª part   3ª part
// node     001.js    adicionar

const comando = process.argv[2]

if (comando === 'adicionar') {
   console.log('Adicionando notas!')
}
else {
    console.log('Outra resposta')
}

// node 001.js adicionar --title="isto é meu título"
console.log('o 4º: ' + process.argv[3])


console.log('-----------------------')































