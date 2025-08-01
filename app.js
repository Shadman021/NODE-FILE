
const crypto = require("node:crypto");
var a=1073698;
var b=209056;

console.log("program started");


crypto.pbkdf2Sync("password","salt", 50000, 50, "sha512");
console.log("first key is generated.");
console.log(crypto);

crypto.pbkdf2("password", "salt", 500000, 50, "sha512",(err, key) =>{
    console.log("second key is generated");  
})

function multiplyfn(x,y){
    const result = a*b;
    return result;
}
console.log("multipyly result: ",multiplyfn(a,b));


