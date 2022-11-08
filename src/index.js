require('dotenv').config()

const express = require('express');
const morgan = require('morgan')
const taskRoutes = require("./routes/tasks.routes.js")

const app = express()

app.use(morgan("dev"))
app.use(express.json())

app.use(taskRoutes)

app.listen(3000)
console.log("Rodando na porta 3000")