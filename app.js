const http = require('http')
const server = http.createServer((req, res)=>{
    // console.log('user hit the server');
    console.log((req.method));
    console.log(req.url);
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1> Home page</h1>')
    res.end()

})

server.listen(5000)

/* 
HTTP response status codes indicate whether a specific HTTP 
request has been successfully completed. Responses are grouped in five classes:

Informational responses (100–199)
Successful responses (200–299)
Redirection messages (300–399)
Client error responses (400–499)
Server error responses (500–599)

more information about this here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


*/