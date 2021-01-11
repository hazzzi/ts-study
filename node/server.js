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
        let postData = "";
        const pathname = url.parse(request.url).pathname;
        console.log(`Request for ${pathname} received.`)

        request.setEncoding("utf8");
        
        request.addListener("data", (postDataChunck) => {
            postData += postDataChunck;
            console.log(`Received POST data chunk ${postDataChunck}.`)
        })
        request.addListener("end", () => {
            route(handle, pathname, response, postData)
        })
    }

    http.createServer(onRequest).listen(8888)
    console.log("server has started")
}

exports.start = start;