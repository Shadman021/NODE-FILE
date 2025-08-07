const http = require("http");

const server= http.createServer(
    function(req, res){
        res.end("my first ");
    }
);

server.listen(7777);