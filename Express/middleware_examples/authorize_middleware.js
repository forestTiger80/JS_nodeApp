const express = require('express')
const app = express()
const logger = require('./logger.js')
const authorize = require('./authorize.js')


app.use('/',[logger, authorize]) //start from root directory

// req => middleware => res

/*
more information about middleware please check this link out:
https://expressjs.com/en/guide/using-middleware.html
https://www.geeksforgeeks.org/middleware-in-express-js/

please use this: http://localhost:5000/products?user=john

*/
// const logger = (req, res, next) =>{ //our middleware function. Better to keep this in a separete file
    
//     const method = req.method //HTTP method
//     const url = req.url
//     const time = new Date().getFullYear()

//     console.log(method, url, time);
//     next()
// }

app.get('/',  (req, res)=>{
    res.send('whatever')
})
app.get('/about', (req, res)=>{
    res.send('About')
})
app.get('/products', (req, res)=>{
    res.send('Products')
})


app.listen(5000, ()=>{
    console.log('server is listening on port 5000...');
})


/*
More information about HTTP methods please check this out:
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

*/