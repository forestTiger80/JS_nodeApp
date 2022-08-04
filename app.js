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



// const start = async()=>{
//     try{
//         const first = await getText('./aux-content/first.txt');
//         const second = await getText('./aux-content/second.txt'); 
//         console.log(first, second);
//     } catch (error){
//         console.log(error);
//     }


// }
// const getText = (path) =>{
//     return new Promise((resolve, reject)=>{
//         readFile( path, 'utf8', (err, data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data);
//             }
//         })

//     })
// }

// getText('./aux-content/second.txt').then(result => console.log(result))
// .catch(err => console.log(err))

//     console.log(first);
// }

start()
