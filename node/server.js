// http 모듈 로드
var http = require("http");

// 8888 포트를 리슨하는 http 서버 생성
// 1
// var server = http.createServer();
// server.listen(8888);

// 2
// http.createServer(function(request, response){
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.write("hello world");
//     response.end();
// }).listen(8888)

function start() {
    function onRequest(request, response) {
        console.log("Request received.");
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("hello world");
        response.end();
    }

    http.createServer(onRequest).listen(8888)

    console.log("server has started")
}

exports.start = start;