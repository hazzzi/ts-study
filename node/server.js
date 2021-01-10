// http 모듈 로드
var http = require("http");

// 8888 포트를 리슨하는 http 서버 생성
var server = http.createServer();
server.listen(8888);