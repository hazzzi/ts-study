// http 모듈 로드
const http = require("http");
const url = require("url");

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

const start = (route, handle) => {
    const onRequest = (request, response) => {
        var pathname = url.parse(request.url).pathname;
        console.log(`Request for ${pathname} received.`)

        response.writeHead(200, { "Content-Type": "text/plain" });
        const content = route(handle, pathname);
        response.write(content);
        response.end();
    }

    http.createServer(onRequest).listen(8888)
    console.log("server has started")
}

exports.start = start;