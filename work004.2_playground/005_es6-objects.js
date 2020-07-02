// atalho propriedade objeto

const nome = 'Kyle'
const idade_usuario = 19

const usuario = {nome: nome, idade: idade_usuario, localizacao: 'Philadelphia'}

console.log(usuario)
console.log('----------------')

const usuario_2 = {nome, idade: idade_usuario, localizacao: 'Philadelphia'}
console.log(usuario_2)

console.log('----------------')

// object destructuring

const produto = {rotulo: 'notebook azul', preco: 3, estoque: 201, precoVenda: undefined}
const {rotulo, estoque, estimativa} = produto

console.log(rotulo)
console.log(estoque)
console.log(estimativa)

console.log('----------------')

const produto2 = {rotulo2: 'pc gabinete', preco2: 3, estoque2: 18, precoVenda2: undefined}  // experimentar acrescentar estimativa2: 2.7

const {rotulo2: produtoRotulo, estoque2: produtoEstoque, estimativa2 = 5} = produto2

console.log(produtoRotulo)
console.log(produtoEstoque)
console.log(estimativa2)

console.log('----------------')

const produto3 = {rotulo: 'pc gabinete', preco: 3, estoque: 18, precoVenda: undefined, estimativa: 6.3}

const transacao = (tipo, {rotulo, estoque}) => {
    console.log(tipo, rotulo, estoque)
}

transacao('pedido', produto3)