const http = require('http')

const {readFileSync} = require('fs');

// reading files 

const homepage = readFileSync('./Express/navbar_api/calculator.html')
const style = readFileSync('./Express/navbar_api/style/st.css')
const image = readFileSync('./Express/navbar_api/image/calc.jpg')
const source = readFileSync('./Express/navbar_api/source/calc2.js')
const server = http.createServer((req, res)=>{
    // console.log('user hit the server');
    // console.log((req.method));
    // console.log(req.url);
    const url = req.url;


    /*
    TEXT - content-type

    for more information please check this out: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types

    Text-only data including any human-readable content,
    source code, or textual data such as comma-separated value (CSV) 
    formatted data. Examples include: text/plain, 
    text/csv, and text/html. (Registration at IANA)

    */
    if(url ==='/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homepage)
        res.end()
    }

    /*
    CSS FILES 
 
    CSS files used to style a Web page must be sent with text/css.
    If a server doesn't recognize the .css suffix for CSS files, 
    it may send them with text/plain or application/octet-stream MIME types. 
    If so, they won't be recognized as CSS by most browsers and will be ignored.
    */
    
    
    else if(url ==='/style/st.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(style)
        res.end()

    }
    /*
    IMAGES
        Image or graphical data including both bitmap and vector 
        still images as well as animated versions of still image formats 
        such as animated GIF or APNG. Common examples are image/jpeg, image/png,'
        and image/svg+xml. (Registration at IANA)
    */

    else if(url ==='/image/calc.jpg'){
        res.writeHead(200, {'content-type': 'image/jpeg'})
        res.write(image)
        res.end()

    }
    /*
    JAVASCRIPT
    Per the IANA Media Types registry, RFC 9239, and the HTML specification, 
    JavaScript content should always be served using the MIME type text/javascript. 
    No other MIME types are considered valid for JavaScript, and using any MIME type other 
    than text/javascript may result in scripts that do not load or run.
    You may find some JavaScript content incorrectly served with a charset parameter 
    as part of the MIME type — as an attempt to specify the character set for the script content. 
    That charset parameter isn't valid for JavaScript content, and in most cases will result 
    in a script failing to load.
    */


    
    else if(url ==='/source/calc2.js'){
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(source)
        res.end()

    }
    
    // error page code
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1> 404 error </h1> <p> Page not found </p>')
        res.end()

    }

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

for more information check this out: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status



*/