const http = require('http')

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about'){
        res.end('here is our short history')
    }else {
        res.end(`<h1>OooPss!!</h1>
        <p>We can't see to find the page you are looking for</p>
        <a href="/"> Back home page</a>`
       )

    }
})
// other option is:

const server1 = http.createServer()
server1.on('request', (req, res)=> {
    res.end('welcome')
})

server.listen(5000)
// server1.listen(5000)