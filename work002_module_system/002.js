//console.log('Bem vindo a aula')
// https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_writefilesync_file_data_options

const arquivo_sistema = require('fs')

// em terminal 'node 002.js'
arquivo_sistema.appendFileSync('notas3.txt', ' Eu moro no Brasil')   // é criado conforme o caminho do terminal


/*
Challenge: Append a message to notes.txt

1. Use appendFileSync to append to the file
2. Run the script
3. Check your work by opening the file and viewing the appended text


*/
