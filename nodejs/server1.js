const http = require("http");

const response={
    message:"This is JSON response from our HTTP server"
}

//Add Listener

const listener=function(req,res){
    // console.log(req);
    // console.log(req.url);
    res.writeHead(200);
    switch(req.url){
        case "/name":
            res.end('Http Server response : Utkarsh');
            break;
        case "/about":
            res.end("Http Server response : About");
            break;
        case "/company":
            res.end("Http Server response : A reputed MNC")
            break;
        default:
            res.end("Http Server response : Incorrect endpoint")
    }   
}  

//Create a simple server
const simpleServer= http.createServer(listener);

simpleServer.listen(8080);