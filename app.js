const express = require('express')
const app = express()


// req => middleware => res
const logger = (req, res, next) =>{
    
    const method = req.method //HTTP method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time);
    next()
}

app.get('/', logger, (req, res)=>{
    res.send('whatever')
})
app.get('/about', (req, res)=>{
    res.send('About')
})


app.listen(5000, ()=>{
    console.log('server is listening on port 5000...');
})

/*
More information about HTTP methods please check this out:
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

*/