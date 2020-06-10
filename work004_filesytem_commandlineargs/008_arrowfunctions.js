const quadrado = function (valor) {
    return valor**2
}

console.log(quadrado(2))
console.log(quadrado(3))
console.log('------------')

const quadrado2 = (valor) => {
    return valor**2
}

console.log(quadrado2(4))
console.log(quadrado2(5))
console.log('------------')

const quadrado3 = (valor) => valor**2

console.log(quadrado3(1))
console.log(quadrado3(6))

console.log('------------')

const evento = {
    nome: 'Festa de Aniversario',
    listaConvidados: ['Kyle', 'Simon', 'Fabíola', 'Larissa'],
    imprimirListaConvidados() {
       console.log('Lista de convidados para ' + this.nome)

       this.listaConvidados.forEach(function (convidado) {
           console.log(convidado + ' está participando ' + this.nome)
       })
    }
}

evento.imprimirListaConvidados()


console.log('------------')
console.log('------------')
console.log('------------')
console.log('------------')
console.log('------------')