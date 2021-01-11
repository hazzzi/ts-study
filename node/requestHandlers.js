const exec = require("child_process").exec;

const start = () => {
    console.log("Request handler 'start' was called.");
    let content = "empty";

    exec("ls -lah", function (error, stdout, stderr) {
        content = stdout;
    })

    return content;
}

const upload = () => {
    console.log("Requeset handler 'upload' was called.");
    return "Hello Upload"
}

exports.start = start;
exports.upload = upload;

