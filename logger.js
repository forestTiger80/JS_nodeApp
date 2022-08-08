const logger = (req, res, next) =>{ //our middleware function. Better to keep this in a separete file
    
    const method = req.method //HTTP method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time);
    next()
}

module.exports = logger