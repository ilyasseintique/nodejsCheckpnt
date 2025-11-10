const http = require("http");
const hostname = "localhost";
const port = 3000;
const server = http.createServer((req,res)=>{
    if(req.url==='/' && req.method === "GET" ){
        res.statusCode = 200
        res.setHeader("content-type", "text/html");
        res.end("<h1>Hii i am server </h1>");
    }
    else{
        res.statusCode = 404;
        res.setHeader("content-type","text/plain");
        res.end("Not Fount");
    }
    console.log(req.url);
})
server.listen(port,hostname,()=> console.log(`i am running on the http://${hostname}:${port}`))
