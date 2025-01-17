const http = require("http");

http.createServer(function (request, response) {
    console.log("User-Agent: " + request.headers["user-agent"]);
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello, World!');
}).listen(8000);
    console.log("Server running at http://localhost:8000/");