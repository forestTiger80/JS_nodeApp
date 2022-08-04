const EventEmitter = require('events');
const customEmitter = new EventEmitter()
customEmitter.on('response', (name, ID)=> {
    console.log(`data recieved user  ${name} with id: ${ID}`);
})

customEmitter.on('response',()=>{
    console.log(`some other logic here`);
})

customEmitter.emit('response', 'john', 34)
// emit is used to trigger an event
/* on is used to add a callback function that's going to
 be executed when the event is triggered*/

// more info here: https://nodejs.dev/learn/the-nodejs-event-emitter