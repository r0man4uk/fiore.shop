const http = require("http");

http
.createServer(function (request, response) {
    console.log("User-Agent: " + request.header["user-agent"]);
    
}).listen(5000);
    console.log('Server running at http://127.0.0.1:5000/');