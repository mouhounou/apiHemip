require('dotenv').config()
const express = require('express')
const app = express()
const toconnect = require('./database/db')
port = process.env.PORT || 4000

// connexion a la base de donne
toconnect()

app.use(express.json())


app.listen(port, () =>{
    console.log('====================================');
    console.log(`Server is running on port http://localhost:${port}`)
    console.log('====================================');
})
