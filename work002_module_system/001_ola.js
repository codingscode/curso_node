//console.log('Bem vindo a aula')
// https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_writefilesync_file_data_options

const arquivo_sistema = require('fs')

// em terminal 'node 001_ola.js'
arquivo_sistema.writeFileSync('notas3.txt', 'Este o 3º arquivo criado')   // é criado conforme o caminho do terminal


/*
Challenge: Append a message to notes.txt

1. Use appendFileSync to append to the file
2. Run the script
3. Check your work by opening the file and viewing the appended text


*/
