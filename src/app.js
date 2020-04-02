const express = require('express')
    ,app = express()
    ,routes = require('./routes')

app.use(routes)
app.use(express.static('public'))

module.exports = app