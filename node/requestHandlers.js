const fs = require("fs");
const formidable = require("formidable");

const start = (response) => {
    console.log("Request handler 'start' was called.");

    const body = `<html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; 
            charset=UTF-8" />
        </head>
        <body>
            <form action="/upload" method="post" enctype="multipart/form-data">
            <input type="file" name="upload">
            <input type="submit" value="upload file" />
        </form>
        </body>
    </html>`;

    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(body);
    response.end();
}

const upload = (response, request) => {
    console.log("Requeset handler 'upload' was called.");

    const form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(request, (error, fields, files) => {
        console.log("parsing done");
        fs.renameSync(files.upload.path, "tmp/test.png");
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("received image: <br />");
        response.write("<img src='/show' />");
        response.end();
    })

}

const show = (response) => {
    console.log("'show' was called.")
    fs.readFile("tmp/test.png", "binary", (error, file) => {
        if (error) {
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.write(error);
            response.end()
        } else {
            response.writeHead(200, { "Content-Type": "image/png" });
            response.write(file, "binary");
            response.end();
        }
    })
}

exports.start = start;
exports.upload = upload;
exports.show = show;

