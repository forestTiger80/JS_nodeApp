const http = require('http')
const fs = require('fs')
http.createServer(function(req, res){
    // const text = fs.readFileSync('./aux-content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./aux-content/big.txt', 'utf8')
    fileStream.on('open', ()=>{
        fileStream.pipe(res)

    })
    fileStream.on('error' , (err)=>{
        res.end(err)
    })

})
.listen(5000)