const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./Config/routes')

app.use(express.static('public'))
app.use(express.json())
app.use(cors())
routes(app)

module.exports = app