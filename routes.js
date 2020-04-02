const express = require('express')
    ,routes = express.Router()
    ,AudioController = require('./Controllers/AudioController')

routes.get('/audio', AudioController.index )

module.exports = routes