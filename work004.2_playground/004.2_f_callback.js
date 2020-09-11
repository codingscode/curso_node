// Callbacks

const trabalharCallBack = (func_param) => {
    setTimeout(() => {
        //func_param('Isto é meu erro!', undefined)
        func_param(undefined, [1, 2, 3])
    }, 1000)
}

trabalharCallBack((erro, resultado) => {
    if (erro) {
        return console.log(erro)
    }

    console.log(resultado)
})





// node 004.2_f_callback.js