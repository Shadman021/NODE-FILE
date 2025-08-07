const http = require("http");

const server= http.createServer(
    function(req, res){
        if(req.url === "/getsecretdata"){
            res.end("There is no secret data");
        }

        res.end("my first server");
    }
);

server.listen(7777);