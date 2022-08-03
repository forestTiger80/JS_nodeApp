// const  {readFileSync, writeFileSync} = require('fs')
// const first = readFileSync('./aux-content/subfolder/second.txt', 'utf8')
// const second = readFileSync('./built-in_modules/test.txt', 'utf8')

// writeFileSync('./aux-content/result-sync.txt', `Here is the result: ${second}, ${first}`, {flag: 'a'}
// )

// console.log(first);
// console.log(second);

//FUNCTION callbacks

const {readFile, writeFile} = require('fs')
console.log('start');

readFile('./built-in_modules/test.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./aux-content/subfolder/second.txt', 'utf8', (err, result) =>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./built-in_modules/result-asyncMod',`Here is your result: ${first}, ${second}`,
            (err, result) => {
                if (err){
                console.log(err);
                return;
                }
                console.log('done with this task');
            }
        )
    })
    
})


//function async callback
const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./built-in_modules/test.txt', 'utf8')
const second = readFileSync('./aux-content/subfolder/second.txt', 'utf8')

writeFileSync(
    'resultSync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
)
console.log('finish here ');
console.log(' starting the next one');
