const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    res.status(200).send('Home page')
})
app.get('/about', (req,res)=>{
    res.status(200).send('About')
})

app.all(('*'), (req, res)=>{
    res.status(404).send('<h1> Resource not found</h1>')
})

app.listen(5000, ()=>{
    console.log('server is listening on port 5000...');
})

/* methods we use here 
    app.get
    app.post
    app.put
    app.delete
    app.all
    app.use
    app.listen

    for more information please check this out: 
    http://expressjs.com/en/starter/basic-routing.html

*/


