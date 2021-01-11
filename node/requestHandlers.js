const exec = require("child_process").exec;

const start = (response) => {
    console.log("Request handler 'start' was called.");

    exec("ls -lah", function (error, stdout, stderr) {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write(stdout);
        response.end();
    })

    return content;
}

const upload = (response) => {
    console.log("Requeset handler 'upload' was called.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;

