const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


const start = async()=>{
    try{
        const first = await readFile('./aux-content/first.txt', 'utf8');
        const second = await readFile('./aux-content/second.txt', 'utf8');
        await writeFile('./aux-content/my incredible text', `This is awesome : ${first} ${second}`) 
        console.log(first, second);
    } catch (error){
        console.log(error);
    }


}

// remember to invoque start()