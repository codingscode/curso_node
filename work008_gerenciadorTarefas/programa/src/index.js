

const express = require('express')

const app = express()
const porta = process.env.PORT || 3000

app.listen(porta, () => {
   console.log(`Servidor esta apto na porta {porta}`)
})










