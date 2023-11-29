const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT

//middleswares
app.use(express.json())
app.use(cors()) //Cross-Origin Resource Sharing- acessing server

// app.get('/',(req,res)=> {
//     res.send('Hi GET in server') //check response using postman - http://localhost:5000/
// })

// Use the router for a specific path
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/'+ route))) //api to get routes




const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('You are listening to PORT : ', PORT)
    } )
}

server()

