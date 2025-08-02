// a= 100
// Last line of the file  
// process.nextTick runned
// Promise
// Timer expired
// File reading CB        
// setImmediate printed 


const fs = require("fs");
const a = 100;

setImmediate(()=>console.log("setImmediate printed"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
    console.log("File reading CB");
});

setTimeout(()=>console.log("Timer expired"),0);

process.nextTick(() => console.log("process.nextTick runned"));

function printA(){
    console.log("a=",a);
}
printA();
console.log("Last line of the file");
