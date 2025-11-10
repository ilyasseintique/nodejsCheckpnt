const genpwd = require("generate-password");
const prompt = require("prompt-sync")();
const name = prompt("give the length of the pwd that u want :");
function generatepwd(length){
    
    const pwd = genpwd.generate({
        length : length,
        numbers : true,
        symbols : false,
        uppercase : true,
        lowercase : true,
        strict : true
    })
    return pwd
}
console.log("the pwd is :",generatepwd(Number(name)))