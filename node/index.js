const server = require("./server");
const router = require("./router");
const requestHandler = require("./requestHandlers");

let handle = {};
handle["/"] = requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/upload"] = requestHandler.upload;


// server와 router를 느슨하게 결합.
// router 함수를 server로 주입 (Dependency Injection)
server.start(router.route, handle); 