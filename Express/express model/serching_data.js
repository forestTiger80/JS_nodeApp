const express = require('express')
const app = express();
const {products} = require('./data')

//example 1

app.get('/', (req, res)=>{
    res.send('<h1> Home page</h1> <a href= "/api/products">Products</a>')
})

//example 2
app.get('/api/products/', (req, res)=>{
    const newProducts = products.map((product) =>{
        const{id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts)

})

//example 3

app.get('/api/products/:productID', (req, res)=>{
    const singleProduct = products.find((product)=>
        product.id ===1)
        res.json(singleProduct)
        console.log(singleProduct);
        console.log(req.params);
    
})

//example 4


app.get('/api/products/:productID', (req, res)=>{
    // console.log(singleProduct);
    const {productID} = req.params;
    
    const singleProduct = products.find((product)=>
    product.id ===Number(productID));

    if(!singleProduct){
        return res.status(404).send('Product Does Not Exist')
    }
    return res.json(singleProduct)
})

//example 5

app.get('/api/products/:productID/reviews/:reviewID', (req, res)=>{
    console.log(req.params);
    res.send(' here is it')
})
//http://localhost:5000/api/v1/query?name=Rosita

//example 6
app.get('/api/v1/query', (req, res) =>{
    // console.log(req.query);
    const {search, limit} = req.query
    let sortedProducts= [...products];
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
   
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    
    if (sortedProducts.length<1){
        // res.status(200).send(' the product does not exist')
        return res.status(200).json({success:true,data:[]})
    }
    
    return res.status(200).json(sortedProducts) 
})



app.listen(5000, ()=>{
    console.log('server is listening on port 5000...');
})