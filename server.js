var express = require('express')
, http = require('http')

app = express()

const port = 8080

app.configure(function() {
    app.use(app.router)
})

app.use(express.static('public'))

require('./routes')

http.createServer(app).listen(8080)
// app.listen(port, () => console.log(`Running Server in port ${port}`))