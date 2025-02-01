const express = require('express')
const app = express()
const port = 3000



// define a middleare function 

const myFirstMiddleware = (req, res , next) =>{
    console.log('This is my first middleware')
    next()
}

app.use(myFirstMiddleware)

app.get('/', (req, res) =>{
    res.send('Hello World this is the home page')
})

app.get('/about', (req, res) =>{
    res.send('hey this is the about page')
})

app.listen(port, () =>[
    console.log(`server is running on port ${port}`)
])