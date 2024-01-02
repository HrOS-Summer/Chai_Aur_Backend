require('dotenv').config()
const express = require('express')
//import express from 'express'
const app = express()

const port = 3001;

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.get('/login', (req, res) => {
    res.send("<h3>User logged in</h3>")
})

// app.listen(port, () => {
//     console.log(`listening to port : ${port}`);
// })

app.listen(process.env.PORT, () => {
    console.log(`listening to port : ${port}`);
})