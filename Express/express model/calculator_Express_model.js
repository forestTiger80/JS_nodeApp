const express = require('express')
const path= require('path')
const app = express();

//setup static and middleware
app.use(express.static('./Express/navbar_api'))

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './Express/navbar_api/calculator.html'))
    
})

// here you call all files linked in html file
app.all(('*'), (req, res)=>{
    res.status(404).send('<h1> Resource not found</h1>')
})

app.listen(5000, ()=>{
    console.log('server is listening on port 5000...');
})



