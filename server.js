const express = require('express')
, app = express()
, fs = require('fs')
, getStat = require('util').promisify(fs.stat)

const port = 8080

app.use(express.static('public'))

const highWaterMark = 2

app.get('/audio', async (req, res) => {
    const sucessCode = 200
    const filePath = './audio.ogg'

    const stat = await getStat(filePath)

    res.writeHead(sucessCode, {
        'Content-Type': 'audio/ogg',
        'Content-Length': stat.size
    })

    const stream = fs.createReadStream(filePath, { highWaterMark })

    stream.on('end', () => console.log('acabou'))

    stream.pipe(res)
})


app.listen(port, () => console.log(`Running Server in port ${port}`))