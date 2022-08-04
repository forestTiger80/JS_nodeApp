// const _ = require('loadsh')
// const items =[1,[2, [3, [4]]]]
// const newItems= _.flattenDeep(items)
// console.log(newItems);
// console.log('hello guys')

const http = require('http')

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.end('Welcome to our home page')
    }
    else if(req.url === 'about'){
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`);
                
            }
            
        }
        res.end('about page')
    }

    // res.write('Welcome to our home page ')
})

server.listen(5000)