// console.log(__dirname);
// setInterval(()=>{
//     console.log('Åssiden')
// }, 1000);

// common JS- every file is module (by default)
// modules = encapsulated code (only share minimum)

//MODULES
const k = require('./names');
const sayHi = require('./utils');
const data = require('./alternative')
const func = require('./functions')
console.log(func);
console.log(data);
console.log(k);


// sayHi('susan');
// sayHi(k.john);
// sayHi(k.peter);