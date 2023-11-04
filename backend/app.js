const express = require('express');
const cors = require('cors');

const app = express()
require('dotenv').config()

const PORT = process.env.PORT

//middleswares
app.use(express.json())
app.use(cors()) //Cross-Origin Resource Sharing- acessing server

app.get('/',(req,res)=> {
    res.send('Hi world') //check response using postman - http://localhost:5000/
})

const server = () => {
    app.listen(PORT, () => {
        console.log('You are listening to PORT : ', PORT)
    } )
}

server()