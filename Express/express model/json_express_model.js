const express = require('express')
const app = express();
/*
refernase to data is JS_nodeApp\data.js
this means that you should change the address od 'data.js'
in case you get 404 HTTP on the console, 'content not found'.

*/
const {products} = require('./data')


app.get('/', (req, res)=>{
    res.json(products)
})

app.listen(5000, ()=>{
    console.log('server is listening on port 5000...');
})