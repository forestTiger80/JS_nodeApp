

/* HTTP Methods
    GET -  read data
    POST - insert data
    PUT - update data 
    DELETE - delete data

*/





const express = require('express')
const app = express()
let {people} = require('./data')

// static assets
app.use(express.static('./Express/public_methods'))
//parse from data 
app.use(express.urlencoded({extended:false}))
//parse json
app.use(express.json())

//Methods
app.get('/api/people', (req, res)=>{
    res.status(200).json({success:true, data:people})
})

app.post('/api/people',(req, res)=>{
    const {name} = req.body
    console.log(name);
    if(!name){
        return res.status(400).json({success:false, msg:'Please provide a value'})
    }

    return res.status(201).json({success:true, person:name})
})

app.post('/api/postman/people', (req, res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false, msg:'Please provide a value'})
    }

    return res.status(201).json({success:true, data:[...people, name]})
 
})

app.put('/api/people/:id', (req, res)=>{
    const {id} = req.params
    const{name}= req.body
    // console.log(id, name);

    const person = people.find((person)=>{
        person.id === Number(id);
    })
    if(!person){
        return res.status(404).json({success:false, msg:'This ID/Person does not exist'})
    }
    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name

        }
        return person
    })

    res.status(200).json({
        success:true, data:NewPeople
    })



})

app.delete('/api/people/:id', (req,res)=>{
    // const {id} = req.params



    const person = people.find((person) => person.id === Number(req.params.id))
    if(!person){
        return res.status(404).json({success: false, msg:`No person wthi this id: ${req.params.id}`})

    }
    const newPeople = people.filter((person)=>person.id !==Number(req.params.id))
    return res.status(200).json({success:true, data:newPeople})
})




app.listen(5000, ()=>{
    console.log('server is listening on port 5000...')
})


// more info about urlencoded
//check this out: https://expressjs.com/en/api.html#express.urlencoded