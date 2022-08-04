const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);


const start = async()=>{
    try{
        const first = await readFilePromise('./aux-content/first.txt', 'utf8');
        const second = await readFilePromise('./aux-content/second.txt', 'utf8');
        await writeFilePromise('./aux-content/my incredible text', `This is awesome : ${first} ${second}`) 
        console.log(first, second);
    } catch (error){
        console.log(error);
    }


}
// remember to invoque the function start.