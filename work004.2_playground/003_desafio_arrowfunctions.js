//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tarefas = {
    tarefas: [
        {texto: 'Fazer compras', completo: true},
        {texto: 'Limpar quintal', completo: false},
        {texto: 'Gravar curso', completo: false}
     ],
     acessarTarefasAFazer() {
        return this.tarefas.filter((cada) => cada.completo === false)
     }
}

console.log(tarefas.acessarTarefasAFazer())