const fs = require("fs");
fs.writeFile("welcome.txt","Hello Node",(err)=> {
    if(err) return console.error("there is an error",err.message);
    console.log("done !!");
})