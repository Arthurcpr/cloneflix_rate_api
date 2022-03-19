require('dotenv').config()
const express = require('express')
const db = require('./src/configs/database')
const rateRoute = require('./src/routes/rate.route')
const app = express()
const port = 3001


app.use(express.json())

app.use('/', [rateRoute])

app.listen(port, () => {
    db.connect().then(() => {
    console.log(`Running into localhost:${port}|db connected`);
    }).catch((error) => {
        console.error(error)
    }) 
})
