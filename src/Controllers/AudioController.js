const fs = require('fs')
    ,getStat = require('util').promisify(fs.stat)

module.exports = {

    async index(req, res){
        const highWaterMark = 2
        const sucessCode = 200
        const filePath = './src/assets/audio/audio.ogg'
    
        const stat = await getStat(filePath)
    
        res.writeHead(sucessCode, {
            'Content-Type': 'audio/ogg',
            'Content-Length': stat.size
        })
    
        const stream = fs.createReadStream(filePath, { highWaterMark })
    
        stream.on('end', () => console.log('acabou'))
    
        stream.pipe(res)
    
    }
}