"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', function (req, res) { return res.send('Hello world'); });
app.post('/signin', function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    res.send({ username: username, password: password });
});
app.use(express.static('public'));
app.listen(3000, function () { return console.log('Example app listening on port 3000'); });
//# sourceMappingURL=app.js.map