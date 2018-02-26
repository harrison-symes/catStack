const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var cats = require('./routes/catsRoute')

const server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/cats', cats)
server.use('/api/characteristics', require('./routes/characteristicsRoute'))

module.exports = server
